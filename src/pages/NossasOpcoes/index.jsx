import styles from './NossasOpcoes.module.scss'

export default function NossasOpcoes() {
    return (
        <section>
            <div className={styles.container}>
                <h2 className={styles.container__titulo}>Camarão</h2>
                <p className={styles.container__texto}>
                    O sucesso deste crustáceo reside na facilidade em prepará-lo. Naturalmente saboroso, uma leve salteada na manteiga é o suficiente para um resultado incrível. 
                    Rico em vitamina B12, O camarão é uma importante fonte de proteínas completas, ou seja, aquelas com todos os aminoácidos de que o corpo necessita.
                </p> 
            </div>
            
            <div className={styles.container}>
                <h2 className={styles.container__titulo}>Lagosta</h2>
                <p className={styles.container__texto}>
                    Nobre crustáceo, a lagosta é caracterizada pelas antenas bem longas e pode atingir um tamanho impressionante, chegando a pesar mais que 1 kg. Tem uma grande importância econômica, por ser considerada um alimento de luxo. Por possuir uma carne levemente adocicada, quando preparada apenas no bafo de água e sal já fica deliciosa.
                </p>
            </div>

            <div className={styles.container}>
                <h2 className={styles.container__titulo}>Ostra</h2>
                <p className={styles.container__texto}>
                Considerada uma iguaria, é um molusco que costuma ser servido vivo, com limão. Abri-la requer faca especial e muito cuidado.                </p>
            </div>

            <div className={styles.container}>
                <h2 className={styles.container__titulo}>Polvo</h2>
                <p className={styles.container__texto}>
                    O polvo pertence à classe de moluscos e subiu no conceito dos brasileiros com sua carne macia, textura elástica e sabor exótico. Apesar de parecer desafiador, seu preparo é fácil e rápido. Uma panela de pressão e 7 minutos são o suficiente para deixá-lo no ponto para diversas receitas.
                </p>
            </div>

            <div className={styles.container}>
                <h2 className={styles.container__titulo}>Caranguejo</h2>
                <p className={styles.container__texto}>
                    A carne desse crustáceo é bastante valorizada pelo seu sabor suave, delicado e doce. De quebra, ela ainda tem pouca gordura. Os caranguejos no Nordeste são comumente consumidos cozidos num caldo de vários legumes e servidos inteiros com um pirão de acompanhamento. Já em São Paulo, é mais comum vê-lo desfiado como base para tortas salgadas e gratinados.
                </p>
            </div>
        </section>
    )
}