import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { showAddForm } from '../../redux';
import { Button } from '../../components';
import './Header.css';


const Header = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

  const handleShowAddFormBtn = () => {
    dispatch(showAddForm(true));
  }

  return (
    <div className="header">
      {children}
      <Button
        type='button'
        className='show-add-form-btn'
        name='Добавить продукт'
        handler={handleShowAddFormBtn}
      />
    </div>
  );
}

export default Header;