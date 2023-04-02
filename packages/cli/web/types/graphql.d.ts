import { Prisma } from "@prisma/client"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: string;
};

export type Book = {
  __typename?: 'Book';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type CreateBookInput = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type CreateNftInput = {
  clollected: Scalars['Boolean'];
  name: Scalars['String'];
  owner?: InputMaybe<Scalars['String']>;
};

export type CreatePostInput = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
  createNft: Nft;
  createPost: Post;
  deleteBook: Book;
  deleteNft: Nft;
  deletePost: Post;
  updateBook: Book;
  updateNft: Nft;
  updatePost: Post;
};


export type MutationcreateBookArgs = {
  input: CreateBookInput;
};


export type MutationcreateNftArgs = {
  input: CreateNftInput;
};


export type MutationcreatePostArgs = {
  input: CreatePostInput;
};


export type MutationdeleteBookArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteNftArgs = {
  id: Scalars['Int'];
};


export type MutationdeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationupdateBookArgs = {
  id: Scalars['Int'];
  input: UpdateBookInput;
};


export type MutationupdateNftArgs = {
  id: Scalars['Int'];
  input: UpdateNftInput;
};


export type MutationupdatePostArgs = {
  id: Scalars['Int'];
  input: UpdatePostInput;
};

export type Nft = {
  __typename?: 'Nft';
  clollected: Scalars['Boolean'];
  id: Scalars['Int'];
  name: Scalars['String'];
  owner?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books: Array<Book>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
};


/** About the Redwood queries. */
export type QuerybookArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerynftArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerypostArgs = {
  id: Scalars['Int'];
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type UpdateBookInput = {
  body?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateNftInput = {
  clollected?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
};

export type UpdatePostInput = {
  body?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteBookMutation = { __typename?: 'Mutation', deleteBook: { __typename?: 'Book', id: number } };

export type FindBookByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindBookById = { __typename?: 'Query', book?: { __typename?: 'Book', id: number, title: string, body: string, createdAt: string } | null };

export type FindBooksVariables = Exact<{ [key: string]: never; }>;


export type FindBooks = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: number, title: string, body: string, createdAt: string }> };

export type EditBookByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditBookById = { __typename?: 'Query', book?: { __typename?: 'Book', id: number, title: string, body: string, createdAt: string } | null };

export type UpdateBookMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateBookInput;
}>;


export type UpdateBookMutation = { __typename?: 'Mutation', updateBook: { __typename?: 'Book', id: number, title: string, body: string, createdAt: string } };

export type CreateBookMutationVariables = Exact<{
  input: CreateBookInput;
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook: { __typename?: 'Book', id: number } };

export type EditNftByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditNftById = { __typename?: 'Query', nft?: { __typename?: 'Nft', id: number, name: string, clollected: boolean, owner?: string | null } | null };

export type UpdateNftMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateNftInput;
}>;


export type UpdateNftMutation = { __typename?: 'Mutation', updateNft: { __typename?: 'Nft', id: number, name: string, clollected: boolean, owner?: string | null } };

export type CreateNftMutationVariables = Exact<{
  input: CreateNftInput;
}>;


export type CreateNftMutation = { __typename?: 'Mutation', createNft: { __typename?: 'Nft', id: number } };

export type DeleteNftMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteNftMutation = { __typename?: 'Mutation', deleteNft: { __typename?: 'Nft', id: number } };

export type FindNftByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindNftById = { __typename?: 'Query', nft?: { __typename?: 'Nft', id: number, name: string, clollected: boolean, owner?: string | null } | null };

export type FindNftsVariables = Exact<{ [key: string]: never; }>;


export type FindNfts = { __typename?: 'Query', nfts: Array<{ __typename?: 'Nft', id: number, name: string, clollected: boolean, owner?: string | null }> };

export type EditPostByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditPostById = { __typename?: 'Query', post?: { __typename?: 'Post', id: number, title: string, body: string, createdAt: string } | null };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: number, title: string, body: string, createdAt: string } };

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: number } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'Post', id: number } };

export type FindPostByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindPostById = { __typename?: 'Query', post?: { __typename?: 'Post', id: number, title: string, body: string, createdAt: string } | null };

export type FindPostsVariables = Exact<{ [key: string]: never; }>;


export type FindPosts = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: number, title: string, body: string, createdAt: string }> };
