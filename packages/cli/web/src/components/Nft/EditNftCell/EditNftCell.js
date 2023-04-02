import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import NftForm from 'src/components/Nft/NftForm'

export const QUERY = gql`
  query EditNftById($id: Int!) {
    nft: nft(id: $id) {
      id
      name
      clollected
      owner
    }
  }
`
const UPDATE_NFT_MUTATION = gql`
  mutation UpdateNftMutation($id: Int!, $input: UpdateNftInput!) {
    updateNft(id: $id, input: $input) {
      id
      name
      clollected
      owner
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ nft }) => {
  const [updateNft, { loading, error }] = useMutation(UPDATE_NFT_MUTATION, {
    onCompleted: () => {
      toast.success('Nft updated')
      navigate(routes.nfts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateNft({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Nft {nft?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <NftForm nft={nft} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
