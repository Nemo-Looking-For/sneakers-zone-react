import React from 'react';
import styles from './Header.module.scss';
import { Logo, User, Favorite, Cart } from '../../images';

function Header(props) {
    return (
        <div className={styles.header}>
            <div className='d-flex justify-between align-center p-40'>
                <div className="d-flex align-center">
                    <img wight={40} height={40} src={Logo} alt='Logotype'/>


                    <div>
                        <h3 className='text-uppercase'>Sneakers Zone</h3>
                        <p className='opacity-4'>Сандали на любой вкус</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li onClick={props.onClickCart} className='mr-30 cu-p'>
                        <span>Корзина</span>
                        <img wight={18} height={17} src={Cart} alt='Cart'/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;