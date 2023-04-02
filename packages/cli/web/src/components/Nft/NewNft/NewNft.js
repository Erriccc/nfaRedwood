import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import NftForm from 'src/components/Nft/NftForm'

const CREATE_NFT_MUTATION = gql`
  mutation CreateNftMutation($input: CreateNftInput!) {
    createNft(input: $input) {
      id
    }
  }
`

const NewNft = () => {
  const [createNft, { loading, error }] = useMutation(CREATE_NFT_MUTATION, {
    onCompleted: () => {
      toast.success('Nft created')
      navigate(routes.nfts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createNft({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Nft</h2>
      </header>
      <div className="rw-segment-main">
        <NftForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewNft
