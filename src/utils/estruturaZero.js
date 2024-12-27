import { propsDiv, propsTex } from "./css"

export const estruturaZero=[
    {   
        nome:'topo',
        est:{background:'green',width:'100%',height:'50px'},
        sons:[{
            nome:'texto-topo',
            est:{color:'white'},texto:'Lojinha'
        }],
    },{
        nome:'corpo',
        est:{background:'yellow',height:'calc(100% - 50px)',width:'100%'},
        sons:[{
            nome:'quadrado',
            est:{borderRadius:'15px',background:'blue',width:'90%',height:'100px'},
            sons:[{
                nome:'texto-titulo',
                est:{color:'white'},
                texto:'Cardapio'
            }]
        }],
    }
]
export function gerarNovaEstrutura(estruturaAtual,codigo,textos){
        let n1=null
        let n2=null
        let n3=null
        let it
        if(codigo%10!=0){
            n1=Math.floor(codigo / 100)-1
            const x=codigo%100
            n2=Math.floor(x / 10)-1
            const y=codigo%10
            n3=y - 1
            it=estruturaAtual[n1].sons[n2].sons[n3]
        }else if(codigo%100!=0){
            n1=Math.floor(codigo / 100)-1
            const x=codigo%100
            n2=Math.floor(x / 10)-1
            it=estruturaAtual[n1].sons[n2]
        }else{
            n1=Math.floor(codigo / 100)-1
            it=estruturaAtual[n1]
        }

        let style={}
        const propsRef=it.texto?propsTex:propsDiv
        for(let k=0;k<propsRef.length;k++){
            const nome=propsRef[k]
            if(textos[k]){
                style={...style,[nome]:textos[k]}
            }
        }

        const resposta=[]
        for(let k=0;k<estruturaAtual.length;k++){
            const nivel1=estruturaAtual[k]
            if(k==n1){
                if(n2===null){
                    const n1Texto={...nivel1,est:style}
                    resposta.push(n1Texto)
                }else{
                    const novosFilhos=[]
                    for(let i=0;i<nivel1.sons.length;i++){
                        const nivel2=nivel1.sons[i]
                        if(i==n2){
                            if(n3===null){
                                const n2Texto={...nivel2,est:style}
                                novosFilhos.push(n2Texto)
                            }else{
                                const novosNetos=[]
                                for(let j=0;j<nivel2.sons.length;j++){
                                    const nivel3=nivel2.sons[j]
                                    if(j==n3){
                                        novosNetos.push({...nivel3,est:style})
                                    }else{
                                        novosNetos.push(nivel3)
                                    }
                                }
                                const n2Sons={...nivel2,sons:novosNetos}
                                novosFilhos.push(n2Sons)
                            }
                        }else{
                            novosFilhos.push(nivel2)
                        }
                    }
                    const n1Sons={...nivel1,sons:novosFilhos}
                    resposta.push(n1Sons)
                }
            }else{
                resposta.push(nivel1)
            }
        }
        return resposta
}