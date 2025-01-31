import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAddForm, addProduct } from '../../redux';
import { TRootState } from '../../models';
import { Button, Input, Label } from '../../components';
import './Form.css';
import addPhotoImg from '../../assets/add-photo.png';

const Form = () => {
  const [preview, setPreview] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  const showForm = useSelector((state: TRootState) => state.products.showForm);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);

      setPreview(url);
    }
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.currentTarget as typeof event.currentTarget & {
      title: HTMLInputElement,
      price: HTMLInputElement,
      discount: HTMLInputElement,
    }

    const title = target.title.value.trim();
    const price = target.price.value.trim();
    const discount = target.discount.value.trim();
    const image = preview;

    if (title.trim() === '' || price.trim() === '' || image === '') return;

    const product = {
      id: String(performance.now()),
      title: title,
      price: Number(price),
      discount: Number(discount),
      image: image
    }

    dispatch(addProduct(product));

    if (formRef.current) formRef.current.reset();
    setPreview('');
    dispatch(showAddForm(false));
  }

  const handleCloseForm = () => {
    setPreview('');
    dispatch(showAddForm(false));
  }

  const handleClearForm = () => {
    setPreview('');

    if (formRef.current) formRef.current.reset();
  }

  return (
    showForm &&
    <>
      <div className='add-form__container-background_blur'></div>
      <form className='add-form' onSubmit={submitHandler} ref={formRef}>
        <h2 className='add-form__title'>Добавление продукта</h2>

        <div className='add-form__image-container'>
          <div className="add-form__image-upload image-upload">
            <Input type='file' className='image-upload__input' name='image' accept="image/*" handler={handleImageChange} />
            <div className="image-upload__overlap">
              <img src={addPhotoImg} className='image-upload__overlap-icon' alt="Добавить фото продукта" />
            </div>
          </div>
          {
            preview &&
            <>
              <div>&hArr;</div>
              <div className='add-form__image-preview image-preview'>
                <img src={preview} className='image-preview__img' alt="Фото продукта" />
              </div>
            </>
          }
        </div>

        <div className='add-form__fields'>
          <Label className='add-form__field' title='Название продукта:'>
            <Input type='text' className='add-form__field-title' name='title' />
          </Label>
          <div className='add-form__price-container'>
            <Label className='add-form__field' title='Цена продукта:'>
              <Input type='number' className='add-form__field-price' name='price' placeholder='руб.' />
            </Label>
            <Label className='add-form__field' title='Размер скидки:'>
              <Input type='number' className='add-form__field-discount' name='discount' placeholder='%' />
            </Label>
          </div>

        </div>
        <div className='add-form__btns'>
          <Button type='submit' className='add-form__submit-btn' name='Добавить' />
          <Button type='button' className='add-form__cancel-btn' name='Очистить' handler={handleClearForm} />
        </div>
        <div className='add-form__close-btn' onClick={handleCloseForm}>
          <span>&times;</span>
        </div>
      </form>
    </>

  );
}

export default Form;