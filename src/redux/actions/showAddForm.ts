import { SHOW_ADD_FORM } from "../actions"
import {TShowAddFormAction, TShowAddFormPayload} from "../../models"

const showAddForm = (value: TShowAddFormPayload): TShowAddFormAction => {
  return {
    type: SHOW_ADD_FORM,
    payload: value,
  }
}

export default showAddForm;