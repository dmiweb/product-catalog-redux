import { ADD_PRODUCT } from "../actions";
import { TAddProductAction, TAddProductPayload } from "../../models";

const addProduct = (product: TAddProductPayload): TAddProductAction  => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}

export default addProduct;