import { useState } from 'react'
import Itens from 'componentes/Itens'
import Ordenador from "componentes/Ordenador";
import Buscador from 'componentes/Buscador';
import styles from './Inicio.module.scss'

export default function Inicio() {
    const [busca, setBusca] = useState("")
    const [ordenador, setOrdenador] = useState("");
    
    return (
        <main className={styles.cardapio}>
            <p className={styles.cardapio__titulo}>Cardápio</p>
            <section className={styles.cardapio__filtros}>
                <Buscador busca={busca} setBusca={setBusca}/>
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
            </section>
            <Itens busca={busca} ordenador={ordenador}/>
        </main>
    )
}