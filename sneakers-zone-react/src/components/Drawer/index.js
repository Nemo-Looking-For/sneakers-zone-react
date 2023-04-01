import styles from './Drawer.module.scss';

function Drawer({ onClose, items = [] }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className='mb-30 d-flex justify-between'>Корзина
                    <img onClick={onClose} className='removeBtn cu-p' src='/img/btn-remove.svg' alt='Close' /></h2>

                <div className='items flex'>
                    {items.map((obj) => (
                        <div className='cartItem d-flex align-center mb-20'>
                            <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className='cartItemImg'></div>
                            <div className='mr-20 flex'>
                                <p className='mb-5'>{obj.name}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
                        </div>
                    ))}
                </div>

                <div className='cartTotalBlock'>
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
                    <div className='greenButton'>
                        <button>Оформить заказ</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Drawer;