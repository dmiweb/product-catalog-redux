import { useSelector } from 'react-redux';
import { TRootState } from '../../models';
import ListItem from '../ProductItem/ProductItem';
import './ProductList.css';

const List = () => {
  const { products } = useSelector((state: TRootState) => state.products);

  return (
    <>
      <h1 className='product-list-title'>
        Приглядитесь к этим предложениям
      </h1>

      {!products.length && <div className='no-items'>Нет товаров...</div>}

      {
        products.length ?
          <ul className='product-list'>
            {products.map(o => <ListItem key={o.id} product={o} />)}
          </ul> :
          null
      }
    </>
  );
}

export default List;