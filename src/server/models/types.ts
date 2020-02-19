export interface IQueriesSelectParam {
  email: string
}

export interface IQueriesInsertParam extends IQueriesSelectParam {
  password: string
}

export interface IUser extends IQueriesSelectParam, IQueriesInsertParam {
  id: string
}

export interface IGenerateTokenParams {
  user: IUser
}