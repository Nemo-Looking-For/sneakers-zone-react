import React from 'react';
import styles from './Card.module.scss';
import { Unliked, Liked, Btn_checked, Btn_plus } from '../../images';

function Card({ name, price, imageUrl, onFavorite, onPlus }) {

  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({name, price, imageUrl});
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
  
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className='favorite' onClick={onFavorite}>
        <img onClick={onClickFavorite} src={isFavorite ? Liked : Unliked} alt='Favorite' />
      </div>
      <img width={133} height={112} src={imageUrl} alt='Sneakers' />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={styles.plus} onClick={onClickPlus} src={isAdded ? Btn_checked : Btn_plus} alt='Plus' />
      </div>
    </div>
  );
}

export default Card;