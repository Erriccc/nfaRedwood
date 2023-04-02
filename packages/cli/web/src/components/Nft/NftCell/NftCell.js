import Nft from 'src/components/Nft/Nft'

export const QUERY = gql`
  query FindNftById($id: Int!) {
    nft: nft(id: $id) {
      id
      name
      clollected
      owner
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Nft not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ nft }) => {
  return <Nft nft={nft} />
}
