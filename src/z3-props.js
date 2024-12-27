import { useEffect, useState } from "react"
import styled from "styled-components"
import { propsDiv, propsTex } from "./utils/css"
import { gerarNovaEstrutura } from "./utils/estruturaZero"
export default function Props({lista,sel,setEstrutura,estrutura}){
    const [t1,s1]=useState('')
    const [t2,s2]=useState('')
    const [t3,s3]=useState('')
    const [t4,s4]=useState('')
    const [t5,s5]=useState('')
    const [t6,s6]=useState('')
    const [t7,s7]=useState('')
    const [t8,s8]=useState('')
    const [t9,s9]=useState('')
    const textos=[t1,t2,t3,t4,t5,t6,t7,t8,t9,]
    const sets=[s1,s2,s3,s4,s5,s6,s7,s8,s9,]
    const [item,setItem]=useState(null)

    function aplicar(){
        if(sel<0 || !lista)return
        const {codigo}=lista[sel]
        const nova=gerarNovaEstrutura(estrutura,codigo,textos)
        setEstrutura(nova)
    }

    useEffect(()=>{
       
        if(sel<0 || !lista)return
        const {codigo}=lista[sel]
        let it
        if(codigo%10!=0){
            const x=codigo%100
            const y=codigo%10
            it=estrutura[Math.floor(codigo / 100)-1].sons[Math.floor(x / 10)-1].sons[y - 1]
        }else if(codigo%100!=0){
            const x=codigo%100
            it=estrutura[Math.floor(codigo / 100)-1].sons[Math.floor(x / 10)-1]
        }else{
            it=estrutura[Math.floor(codigo / 100)-1]
        }
        const sty=it.est
        const propsRef=it.texto?propsTex:propsDiv
        setItem(it)
        for(let k=0;k<propsRef.length;k++){
            const func=sets[k]
            if(sty[propsRef[k]]){
                func(sty[propsRef[k]])
            }else{
                func('')
            }
        }
    },[sel])
    
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Enter') {
            aplicar();
          }
        };
      
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [aplicar]);
    return(!item?<Quadro></Quadro>:
        <Quadro>
            <h4>{item.nome}</h4>
            {(item.texto?propsTex:propsDiv).map((nome,i)=>(
                <Item >
                    <p>{nome}</p>
                    <input
                    value={textos[i]}
                    onChange={(e)=>{
                        const func=sets[i]
                        func(e.target.value)
                    }}
                    placeholder=""
                    />
                </Item>
            ))}
            <Aplicar onClick={aplicar}>Aplicar</Aplicar>
        </Quadro>
    )
}
const Aplicar=styled.div`
justify-content:center;cursor:pointer;
align-items:center;
background:green;color:white;
width:120px;height:40px;
border-radius:165px;
align-items:center;
margin-top:25px
`
const Quadro=styled.div`
flex-direction:column;
background:white;
width:90%;height:95%;max-width:350px;
border-radius:15px;
align-items:center;
`
const Item=styled.div`background:;
justify-content:center;
align-items:center;
flex-direction:row;
width:90%;justify-content:space-between;
p{margin:0;}
margin-top:25px
`