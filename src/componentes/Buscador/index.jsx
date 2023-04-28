import { RiSearchLine } from 'react-icons/ri';
import styles from './Buscador.module.scss'

export default function Buscador({ busca, setBusca }) {
    return (
        <div className={styles.buscador}>
            <input
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
                placeholder="Buscar"
            />
            <div className={styles.buscador__lupa}>
                <RiSearchLine size={15}/>
            </div>
        </div>
    )
}