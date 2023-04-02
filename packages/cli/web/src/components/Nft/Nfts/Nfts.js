import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Nft/NftsCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

const DELETE_NFT_MUTATION = gql`
  mutation DeleteNftMutation($id: Int!) {
    deleteNft(id: $id) {
      id
    }
  }
`

const NftsList = ({ nfts }) => {
  const [deleteNft] = useMutation(DELETE_NFT_MUTATION, {
    onCompleted: () => {
      toast.success('Nft deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete nft ' + id + '?')) {
      deleteNft({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Clollected</th>
            <th>Owner</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {nfts.map((nft) => (
            <tr key={nft.id}>
              <td>{truncate(nft.id)}</td>
              <td>{truncate(nft.name)}</td>
              <td>{checkboxInputTag(nft.clollected)}</td>
              <td>{truncate(nft.owner)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.nft({ id: nft.id })}
                    title={'Show nft ' + nft.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editNft({ id: nft.id })}
                    title={'Edit nft ' + nft.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete nft ' + nft.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(nft.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NftsList
