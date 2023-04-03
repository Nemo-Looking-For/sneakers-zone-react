import React from 'react';
import styles from './Drawer.module.scss';
import { Btn_remov, Cart_empty } from '../../images';

function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className='mb-30 d-flex justify-between'>Корзина
                    <img onClick={onClose} className='removeBtn cu-p' src={Btn_remov} alt='Close' />
                </h2>

                {
                    items.length > 0 ? <div>
                        <div className='items flex'>
                            {items.map((obj) => (
                                <div className='cartItem d-flex align-center mb-20'>
                                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className='cartItemImg'></div>
                                    <div className='mr-20 flex'>
                                        <p className='mb-5'>{obj.name}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className='removeBtn' src={Btn_remov} alt='Remove' />
                                </div>
                            ))}
                        </div>

                        <div className={styles.cartTotalBlock}>
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>21 999 руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>1074 руб.</b>
                                </li>
                            </ul>
                            <div className={styles.greenButton}>
                                <button>Оформить заказ</button>
                                
                            </div>
                        </div>
                    </div> :
                        <div>
                            <div className={styles.cartEmpty}>
                                <img className='mb-20' width={120} height={120} src={Cart_empty} alt='Cart Empty' />
                                <h2>В Корзине Пусто</h2>
                                <p className='opacity-6'>Добавьте хотя бы одну пару кроссовок в корзину, чтобы совершить заказ</p>
                            </div>
                            <div className={styles.greenButton}>
                                <button onClick={onClose}>Вернуться назад</button>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
}

export default Drawer;