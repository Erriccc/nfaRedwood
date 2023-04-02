import { Link, routes } from '@redwoodjs/router'

import Nfts from 'src/components/Nft/Nfts'

export const QUERY = gql`
  query FindNfts {
    nfts {
      id
      name
      clollected
      owner
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No nfts yet. '}
      <Link to={routes.newNft()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ nfts }) => {
  return <Nfts nfts={nfts} />
}
