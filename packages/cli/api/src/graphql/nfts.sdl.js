export const schema = gql`
  type Nft {
    id: Int!
    name: String!
    clollected: Boolean!
    owner: String
  }

  type Query {
    nfts: [Nft!]! @requireAuth
    nft(id: Int!): Nft @requireAuth
  }

  input CreateNftInput {
    name: String!
    clollected: Boolean!
    owner: String
  }

  input UpdateNftInput {
    name: String
    clollected: Boolean
    owner: String
  }

  type Mutation {
    createNft(input: CreateNftInput!): Nft! @requireAuth
    updateNft(id: Int!, input: UpdateNftInput!): Nft! @requireAuth
    deleteNft(id: Int!): Nft! @requireAuth
  }
`
