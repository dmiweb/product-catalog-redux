import { useEffect } from 'react';
import { TProduct } from '../../models';
import { calcDiscountPrice } from '../../utils';
import './ProductItem.css';

const ProductItem = ({ product }: { product: TProduct }) => {

  const { id, title, price, discount, image } = product;

  useEffect(() => {
    URL.revokeObjectURL(image);
  }, [image]);

  return (
    <li id={id} className='product'>
      <a href="#" className='product__link-title'>
        <h2 className='product__title'>{title}</h2>
      </a>
      <div className='product__image-container'>
        <img className='product__image' src={image} alt={title} />
      </div>
      <div className='product__price'>

        <span className='product__price-discount'>
          {discount ? `${calcDiscountPrice(price, discount)} ₽` : `${price} ₽`}
        </span>
        <span className='product__price-base'>
          {discount ? `${price} ₽` : null}
        </span>
      </div>

      {
        discount ?
        <div className='product__widget-discount widget-discount'>
          <div className='widget-discount__decor-elem'></div>
          <span className='widget-discount__percent'>{`${discount}%`}</span>
        </div> : null
      }
    </li>
  );
}

export default ProductItem;