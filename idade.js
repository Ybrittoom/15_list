//entrada da festa para maiores de 18 ANOS

const idades = [ 18, 16, 29, 22, 81, 12, 7, 25, 19]

let i = 0

console.log("Vamos conferir as idades a seguir")

while ( i < idades.length) {

    if ( idades[i] >= 18) {
        console.log(`Voce tem ${idades[i]} anos, pode passar `)
        
        if ( idades[i] >= 70) {
            console.log("Rapaz tu ta vei pra ir em festa, mas pode passar meu chefe ")
        }
    } else{
        console.log(`Voce tem ${idades[i]} anos, NAO PODE PASSAR!!!!`)
    }

    i++;

}
console.log("Acabou a fila ")

//usando o for 
console.log("USANDO O FOR ")
for (let f = 0; f < idades.length; f++) {
    console.log(idades[f])

    if ( idades[f] >= 18 ) {
        console.log(`Voce tem ${idades[f]} anos, pode passar`)
    } else {
        console.log(`Voce tem ${idades[f]} anos, NAO  PODE PASSAR!!!!`)
    }

}
console.log("Acabou a fila usando o for")

//usando o forEach

idades.forEach( idade => {
    console.log(idade)
})
console.log("Acabou a fila usando o forEach")

//adicionando os metodos

console.log("Usando slice:");
const maioresDeVinte = idades.slice(2, 5);
console.log(`Maiores de vinte: ${maioresDeVinte}`);

//metodo splice
console.log("Usando o splice")
const menores = idades.splice(6, 2)//remova dois elementos a partir da posiçao 6
console.log(`Idades removidas: ${menores}`);//mostra as idades removidas
console.log(`Lista atualizada: ${idades}`);//lista atualizada

//METODO PUSH
console.log("Usando o push")
idades.push(20) //adicionando o numero 20 a lista de idades
console.log(`Idade adicionada: ${idades}`)

//METODO POP
console.log("Usando o metodo POP") // remove o ultimo elemento da lista
const IdadeRemovida = idades.pop()
console.log(`Idade removida: ${IdadeRemovida}`)
console.log(`Lista apos o pop: ${idades}`)

//METODO MAP
console.log("Usando o map") // Aplica uma função a todos os elementos da lista
const IdadeEmDobro = idades.map((idade) => idade * 2)
console.log(`Idades em dobro: ${IdadeEmDobro}`)

//METODO FIND
console.log("Usando o find") //Encontra o primeiro elemento que satisfaz a condição
const MaiorDeTrinta = idades.find((idade) => idade > 30)
console.log(`Idade maior que trinta: ${MaiorDeTrinta}`)

//METODO FILTER
console.log("Usando o filter") //Retorna uma nova lista com os elementos que satisfazem a condição
const maiorDeIdade = idades.filter((idade) => idade > 18)
console.log(`Maiores de idades: ${maiorDeIdade}`)

console.log(idades)