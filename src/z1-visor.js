import { useState } from "react"
import styled from "styled-components"
export default function Visor({estrutura}){
    return(
        <Quadro>
        {estrutura.map(d1=>(
            <Item style={d1.est}>
                {d1.texto?
                <p style={d1.est}>{d1.texto}</p>:
                d1.sons?.map(d2=>(d2.texto?
                    <p style={d2.est}>{d2.texto}</p>:
                    <Item style={d2.est}>
                        {d2.sons?.map(d3=>(d3.texto?
                            <p style={d3.est}>{d3.texto}</p>:<></>
                        ))}
                    </Item>
                ))}
            </Item>
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
justify-content:center;
align-items:center;
flex-direction:column;
`