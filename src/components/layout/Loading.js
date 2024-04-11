import moneyBag from '../../img/money-bag.png'

import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={moneyBag} alt='Loading'/>
        </div>
    )
}

export default Loading