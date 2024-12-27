import { useEffect, useState } from "react"
import styled from "styled-components"
import { decompor } from "./utils/decompor"
export default function Itens({lista,setSel,sel}){
    
    return(
        <Quadro>
            {lista?.map((item,i)=>(
                <Item onClick={()=>{setSel(i)}} style={{margin:item.margin,background:sel==i?'#9898e0':'transparent'}}>
                    {item.nome.includes('texto')?<h5 style={{background:'blue'}}>t</h5>:<h5  style={{background:'green'}}>+</h5>}
                    <h6>{item.nome}</h6></Item>
            ))}
        </Quadro>
    )
}
const Quadro=styled.div`
flex-direction:column;
background:white;
width:90%;height:95%;max-width:350px;
border-radius:15px;
`
const Item=styled.div`
height:20px;
cursor:pointer;
justify-content:;
align-items:center;
color:black;
padding:6px 9px 6px 9px;
border-radius:50px;
width: fit-content;
h5{
margin:0 5px 0 0px;
display:flex;
justify-content:center;
align-items:center;
min-width:20px;
height:20px;
font-size:18px;color:white;
background:green;border-radius:8px;
}
h6{
margin:0;font-size:18px;color:black;
font-weight:500;
white-space: nowrap;
}
`