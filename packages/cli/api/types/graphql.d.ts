import { Prisma } from "@prisma/client"
import { MergePrismaWithSdlTypes, MakeRelationsOptional } from '@redwoodjs/api'
import { Post as PrismaPost, Book as PrismaBook, Nft as PrismaNft } from '@prisma/client'
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/functions/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type OptArgsResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>

    export type RequiredResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args: TArgs,
      obj: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: Date | string;
  DateTime: Date | string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: Date | string;
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

type MaybeOrArrayOfMaybe<T> = T | Maybe<T> | Maybe<T>[];
type AllMappedModels = MaybeOrArrayOfMaybe<Book | Nft | Post>


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Book: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaBook, MakeRelationsOptional<Book, AllMappedModels>, AllMappedModels>>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateBookInput: CreateBookInput;
  CreateNftInput: CreateNftInput;
  CreatePostInput: CreatePostInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Nft: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaNft, MakeRelationsOptional<Nft, AllMappedModels>, AllMappedModels>>;
  Post: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaPost, MakeRelationsOptional<Post, AllMappedModels>, AllMappedModels>>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateBookInput: UpdateBookInput;
  UpdateNftInput: UpdateNftInput;
  UpdatePostInput: UpdatePostInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  Book: MergePrismaWithSdlTypes<PrismaBook, MakeRelationsOptional<Book, AllMappedModels>, AllMappedModels>;
  Boolean: Scalars['Boolean'];
  CreateBookInput: CreateBookInput;
  CreateNftInput: CreateNftInput;
  CreatePostInput: CreatePostInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Nft: MergePrismaWithSdlTypes<PrismaNft, MakeRelationsOptional<Nft, AllMappedModels>, AllMappedModels>;
  Post: MergePrismaWithSdlTypes<PrismaPost, MakeRelationsOptional<Post, AllMappedModels>, AllMappedModels>;
  Query: {};
  Redwood: Redwood;
  String: Scalars['String'];
  Time: Scalars['Time'];
  UpdateBookInput: UpdateBookInput;
  UpdateNftInput: UpdateNftInput;
  UpdatePostInput: UpdatePostInput;
};

export type requireAuthDirectiveArgs = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type requireAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = requireAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type skipAuthDirectiveArgs = { };

export type skipAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = skipAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BookResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  body: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  body?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JSONObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createBook: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationcreateBookArgs, 'input'>>;
  createNft: Resolver<ResolversTypes['Nft'], ParentType, ContextType, RequireFields<MutationcreateNftArgs, 'input'>>;
  createPost: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationcreatePostArgs, 'input'>>;
  deleteBook: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationdeleteBookArgs, 'id'>>;
  deleteNft: Resolver<ResolversTypes['Nft'], ParentType, ContextType, RequireFields<MutationdeleteNftArgs, 'id'>>;
  deletePost: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationdeletePostArgs, 'id'>>;
  updateBook: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationupdateBookArgs, 'id' | 'input'>>;
  updateNft: Resolver<ResolversTypes['Nft'], ParentType, ContextType, RequireFields<MutationupdateNftArgs, 'id' | 'input'>>;
  updatePost: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationupdatePostArgs, 'id' | 'input'>>;
};

export type MutationRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createBook?: RequiredResolverFn<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationcreateBookArgs, 'input'>>;
  createNft?: RequiredResolverFn<ResolversTypes['Nft'], ParentType, ContextType, RequireFields<MutationcreateNftArgs, 'input'>>;
  createPost?: RequiredResolverFn<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationcreatePostArgs, 'input'>>;
  deleteBook?: RequiredResolverFn<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationdeleteBookArgs, 'id'>>;
  deleteNft?: RequiredResolverFn<ResolversTypes['Nft'], ParentType, ContextType, RequireFields<MutationdeleteNftArgs, 'id'>>;
  deletePost?: RequiredResolverFn<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationdeletePostArgs, 'id'>>;
  updateBook?: RequiredResolverFn<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationupdateBookArgs, 'id' | 'input'>>;
  updateNft?: RequiredResolverFn<ResolversTypes['Nft'], ParentType, ContextType, RequireFields<MutationupdateNftArgs, 'id' | 'input'>>;
  updatePost?: RequiredResolverFn<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationupdatePostArgs, 'id' | 'input'>>;
};

export type NftResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Nft'] = ResolversParentTypes['Nft']> = {
  clollected: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  owner: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Nft'] = ResolversParentTypes['Nft']> = {
  clollected?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  owner?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  body: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  body?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  book: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QuerybookArgs, 'id'>>;
  books: OptArgsResolverFn<Array<ResolversTypes['Book']>, ParentType, ContextType>;
  nft: Resolver<Maybe<ResolversTypes['Nft']>, ParentType, ContextType, RequireFields<QuerynftArgs, 'id'>>;
  nfts: OptArgsResolverFn<Array<ResolversTypes['Nft']>, ParentType, ContextType>;
  post: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QuerypostArgs, 'id'>>;
  posts: OptArgsResolverFn<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  redwood: OptArgsResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
};

export type QueryRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  book?: RequiredResolverFn<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QuerybookArgs, 'id'>>;
  books?: RequiredResolverFn<Array<ResolversTypes['Book']>, ParentType, ContextType>;
  nft?: RequiredResolverFn<Maybe<ResolversTypes['Nft']>, ParentType, ContextType, RequireFields<QuerynftArgs, 'id'>>;
  nfts?: RequiredResolverFn<Array<ResolversTypes['Nft']>, ParentType, ContextType>;
  post?: RequiredResolverFn<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QuerypostArgs, 'id'>>;
  posts?: RequiredResolverFn<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  redwood?: RequiredResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser: OptArgsResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedwoodRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser?: RequiredResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type Resolvers<ContextType = RedwoodGraphQLContext> = {
  BigInt: GraphQLScalarType;
  Book: BookResolvers<ContextType>;
  Date: GraphQLScalarType;
  DateTime: GraphQLScalarType;
  JSON: GraphQLScalarType;
  JSONObject: GraphQLScalarType;
  Mutation: MutationResolvers<ContextType>;
  Nft: NftResolvers<ContextType>;
  Post: PostResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Redwood: RedwoodResolvers<ContextType>;
  Time: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = RedwoodGraphQLContext> = {
  requireAuth: requireAuthDirectiveResolver<any, any, ContextType>;
  skipAuth: skipAuthDirectiveResolver<any, any, ContextType>;
};
