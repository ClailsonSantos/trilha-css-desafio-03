/*
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/


// CODIGO FONTE


let nomeExperiencia = ["GodOfWar: 1000", "Superman: 1800", "LEKS: 4600", "Coringa: 5400", "MuiéMaravilha: 7999", "pinguin: 8997", "Superchoque: 9999", "XUNXADOR: 10001"]


nomeExperiencia.forEach(iterar =>{
    let[nome,xP] = iterar.split(": ")
    
    
    xP = parseInt(xP);

    if (xP <= 1000){
        console.log(`O herói de nome ${nome} está no nivel = Ferro`)
    }
    else if(xP >= 1001 && xP <= 2000){
        console.log(`O herói de nome ${nome} está no nivel = bronze`)
    }
    else if(xP >= 2001 && xP <= 5000){
        console.log(`O herói de nome ${nome} está no nivel = prata`)
    }
    else if(xP >= 5001 && xP <= 7000){
        console.log(`O herói de nome ${nome} está no nivel = ouro`)
    }
    else if(xP >= 7001 && xP <= 8000){
        console.log(`O herói de nome ${nome} está no nivel = platina`)
    }
    else if(xP >= 8001 && xP <= 9000){
        console.log(`O herói de nome ${nome} está no nivel = ascendente`)
    }
    else if(xP >= 9001 && xP <= 10000){
        console.log(`O herói de nome ${nome} está no nivel = Imortal`)
    }
    else{
        console.log(`O herói de nome ${nome} está no nivel = radiante`)
    }
    

})

