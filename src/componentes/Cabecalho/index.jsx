import banner from '../../assets/banner.jpg'
import styles from './Cabecalho.module.scss'
import { Link } from 'react-router-dom'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.banner}>
                <p className={styles.banner__text}>COZINHEIROS DO MAR</p>
                <p className={styles.banner__link}>
                    <Link to="/nossasOpcoes">
                        Nossas opções
                    </Link>
                </p>
                <img src={banner} alt="Banner" className={styles.banner__img}/>
            </div>
        </header>
    )
}