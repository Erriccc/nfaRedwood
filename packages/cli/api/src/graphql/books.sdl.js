export const schema = gql`
  type Book {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    # testModels: [TestModel!]! @relation(name: "TestModel")
  }

  type Query {
    books: [Book!]! @requireAuth
    book(id: Int!): Book @requireAuth
  }

  input CreateBookInput {
    title: String!
    body: String!
  }

  input UpdateBookInput {
    title: String
    body: String
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book! @requireAuth
    updateBook(id: Int!, input: UpdateBookInput!): Book! @requireAuth
    deleteBook(id: Int!): Book! @requireAuth
  }
`
