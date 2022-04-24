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
};

export type Mutation = {
  __typename?: 'Mutation';
  createScore: Score;
  createUserInDB: User;
  deleteScore: Score;
  deleteUserInDB: User;
};


export type MutationCreateScoreArgs = {
  newScore: NewScore;
};


export type MutationCreateUserInDbArgs = {
  newUser: NewUser;
};


export type MutationDeleteScoreArgs = {
  id: Scalars['Int'];
};

export type NewScore = {
  clearTime: Scalars['Int'];
};

export type NewUser = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getMyBestScore: Score;
  getUser: User;
  listUser: Array<User>;
  rankingScore: Array<Score>;
};


export type QueryListUserArgs = {
  name: Scalars['String'];
  range?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};


export type QueryRankingScoreArgs = {
  range?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Score = {
  __typename?: 'Score';
  clearTime: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['ID'];
  user: User;
  userID: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  scores: Array<Score>;
};
