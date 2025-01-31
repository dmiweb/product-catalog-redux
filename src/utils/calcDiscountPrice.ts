const calcDiscountPrice = (price: number, discount: number): string => {
  return String((price - (price * discount / 100)).toFixed());
}

export default calcDiscountPrice;