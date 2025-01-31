import { SHOW_ADD_FORM, ADD_PRODUCT } from "./actions";
import { TAction, TState } from "../models";

const initialState: TState = {
  showForm: false,
  products: [],
};

const itemsReducer = (state: TState = initialState, action: TAction): TState => {
  switch (action.type) {
    case SHOW_ADD_FORM:
      return {
        ...state,
        showForm: action.payload,
      }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      }
    default:
      return state;
  }
};

export default itemsReducer;