import {
  SHOW_ADD_FORM,
  ADD_PRODUCT,
} from "../redux/actions";

export type TProduct = {
  id: string,
  title: string,
  price: number,
  discount?: number,
  image: string
}

export type TShowAddFormPayload = boolean;

export type TAddProductPayload = TProduct;

export type TShowAddFormAction = {
  type: typeof SHOW_ADD_FORM,
  payload: TShowAddFormPayload,
}

export type TAddProductAction = {
  type: typeof ADD_PRODUCT,
  payload: TAddProductPayload,
}

export type TAction =
  | TShowAddFormAction
  | TAddProductAction

export type TState = {
  showForm: boolean,
  products: TProduct[],
}

export type TRootState = {
  products: TState,
};