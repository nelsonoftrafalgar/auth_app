import { IQueriesInsertParam, IQueriesSelectParam } from "../models/types"

import User from "../models/user"

class Queries {
  private model: any

  constructor(model: any) {
    this.model = model
  }

  select = (where: IQueriesSelectParam) => {
    return this.model.findOne({
      attributes: ['*'],
      where,
      raw: true
    })
  }

  insert = (record: IQueriesInsertParam) => {
    return this.model.create(record)
  }
}

export const queries = new Queries(User)