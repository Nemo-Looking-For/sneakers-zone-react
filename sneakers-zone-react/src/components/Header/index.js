import styles from './Header.module.scss';

function Header(props) {
    return (
        <div className={styles.header}>
            <div className='d-flex justify-between align-center p-40'>
                <div className="d-flex align-center">
                    <img wight={40} height={40} src="/img/logo.svg" />
                    <div>
                        <h3 className='text-uppercase'>Sneakers Zone</h3>
                        <p className='opacity-4'>Сандали на любой вкус</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li onClick={props.onClickCart} className='mr-30 cu-p'>
                        <img wight={18} height={17} src="/img/cart.svg" />
                        <span>1205 руб.</span>
                    </li>
                    <li className='mr-30'>
                        <img wight={18} height={17} src="/img/favorite.svg" />
                    </li>
                    <li className='mr-30'>
                        <img wight={18} height={17} src="/img/user.svg" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;