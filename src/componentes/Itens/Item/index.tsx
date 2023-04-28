import styles from './Item.module.scss'
import cardapio from '../itens.json'
type Props = typeof cardapio[0]

export default function Item(props: Props) {
    const {title, description, category, price, photo} = props
    return (
        <div className={styles.cards__card}>
            <img 
                src={photo}
                alt={title}
                className={styles.cards__imagem}
            />
            <div className={styles.cards__informacoes}>
                <h1 className={styles.cards__nome}>{title}</h1>
                <p className={styles.cards__descricao}>{description}</p>
                <div className={styles.cards__categoriaPreco}>
                    <div className={styles.cards__categoria}>{category.label}</div>
                    <h3 className={styles.cards__preco}>{price.toFixed(2)}</h3>
                </div>
            </div>
        </div>
    )
}