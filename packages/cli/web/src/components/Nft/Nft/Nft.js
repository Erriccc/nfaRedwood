import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

const DELETE_NFT_MUTATION = gql`
  mutation DeleteNftMutation($id: Int!) {
    deleteNft(id: $id) {
      id
    }
  }
`

const Nft = ({ nft }) => {
  const [deleteNft] = useMutation(DELETE_NFT_MUTATION, {
    onCompleted: () => {
      toast.success('Nft deleted')
      navigate(routes.nfts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete nft ' + id + '?')) {
      deleteNft({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Nft {nft.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{nft.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{nft.name}</td>
            </tr>
            <tr>
              <th>Clollected</th>
              <td>{checkboxInputTag(nft.clollected)}</td>
            </tr>
            <tr>
              <th>Owner</th>
              <td>{nft.owner}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editNft({ id: nft.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(nft.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Nft
