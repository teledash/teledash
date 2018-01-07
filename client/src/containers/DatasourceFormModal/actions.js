import {
  ADD_DATASOURCE,
  EDIT_DATASOURCE
} from '../../constants'

export const addDatasource = payload => ({
  type: ADD_DATASOURCE,
  payload
})

export const editDatasource = payload => ({
  type: EDIT_DATASOURCE,
  payload
})
