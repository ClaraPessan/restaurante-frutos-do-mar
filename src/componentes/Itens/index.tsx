import { useState, useEffect } from "react"
import Item from "./Item"
import cardapioPratos from './itens.json'
import styles from './Item/Item.module.scss'

interface Props {
    busca: string,
    ordenador: string
}

export default function Itens(props: Props) {
    const [lista, setLista] = useState(cardapioPratos)
    const { busca, ordenador } = props

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i')
        return regex.test(title)
    }

    function ordenar(novaLista: typeof cardapioPratos) {
        switch(ordenador) {
            case 'caranguejos': 
                return novaLista.sort((a, b) => {
                if (a.category.label === 'Caranguejos' && b.category.label === 'Caranguejos') {
                    return 0;
                } else if (a.category.label === 'Caranguejos') {
                    return -1;
                } else if (b.category.label === 'Caranguejos') {
                    return 1;
                } else {
                    return a.category.label > b.category.label ? 1 : -1;
                }
                });
            case 'camaroes': 
                return novaLista.sort((a, b) => {
                if (a.category.label === 'Camarões' && b.category.label === 'Camarões') {
                    return 0;
                } else if (a.category.label === 'Camarões') {
                    return -1;
                } else if (b.category.label === 'Camarões') {
                    return 1;
                } else {
                    return a.category.label > b.category.label ? 1 : -1;
                }
                });
            case 'lagostas': 
                return novaLista.sort((a, b) => {
                if (a.category.label === 'Lagostas' && b.category.label === 'Lagostas') {
                    return 0;
                } else if (a.category.label === 'Lagostas') {
                    return -1;
                } else if (b.category.label === 'Lagostas') {
                    return 1;
                } else {
                    return a.category.label > b.category.label ? 1 : -1;
                }
                });
            case 'ostras': 
                return novaLista.sort((a, b) => {
                if (a.category.label === 'Ostras' && b.category.label === 'Ostras') {
                    return 0;
                } else if (a.category.label === 'Ostras') {
                    return -1;
                } else if (b.category.label === 'Ostras') {
                    return 1;
                } else {
                    return a.category.label > b.category.label ? 1 : -1;
                }
                });
            case 'polvos': 
                return novaLista.sort((a, b) => {
                if (a.category.label === 'Polvos' && b.category.label === 'Polvos') {
                    return 0;
                } else if (a.category.label === 'Polvos') {
                    return -1;
                } else if (b.category.label === 'Polvos') {
                    return 1;
                } else {
                    return a.category.label > b.category.label ? 1 : -1;
                }
                });
            case 'preco':
                return novaLista.sort((a,b) => a.price > b.price ? 1 : -1);
            default:
                return novaLista; 
            }
      }

    useEffect(() => {
        const novaLista = cardapioPratos.filter(item => testaBusca(item.title))
        setLista(ordenar(novaLista))
    }, [busca, ordenador])

    return (
        <div className={styles.cards}>
            {lista.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    )
}