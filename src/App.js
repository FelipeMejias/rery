import { useEffect, useState } from "react"
import styled from "styled-components"
import Visor from "./z1-visor"
import { estruturaZero } from "./utils/estruturaZero"
import Itens from "./z2-estrutura"
import Props from "./z3-props"
import { decompor } from "./utils/decompor"
export function App(){
    const [sel,setSel]=useState(-1)
    const [lista,setLista]=useState([])
    const [estrutura,setEstrutura]=useState(estruturaZero)
    useEffect(()=>{
        const novaLista=decompor(estrutura)
        setLista(novaLista)
    },[estrutura])
    return(
        <Tela>
            <Visor estrutura={estrutura} />
            <Itens lista={lista} sel={sel} setSel={setSel}/>
            <Props lista={lista} estrutura={estrutura} setEstrutura={setEstrutura} sel={sel}/>
        </Tela>
    )
}
const Tela=styled.div`
background:pink;
width:100vw;height:100vh;
justify-content:space-evenly;;
align-items:center;
`

