export function decompor(lista){
    const resposta=[]
    for(let [i1,item] of lista.entries()){
        resposta.push({codigo:(100*(i1+1)),nome:item.nome,margin:'20px 0 0 35px'})
        if(item.sons){
            for(let [i2,item2] of item.sons.entries()){
                resposta.push({codigo:(100*(i1+1)+10*(i2+1)),nome:item2.nome,margin:'20px 0 0 70px'})
                if(item2.sons){
                    for(let [i3,item3] of item2.sons.entries()){
                        resposta.push({codigo:(100*(i1+1)+10*(i2+1)+i3+1),nome:item3.nome,margin:'20px 0 0 105px'})
                        if(item3.sons){
                            
                        }
                    }
                }
            }
        }
    }
    return resposta
}
