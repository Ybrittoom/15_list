//as 15 lista vao ficar aqui 
/** criem 15 listas com nomes e dados variados.
* criem um programa para cada lista que leia a respectiva lista e 
  exiba os dados das listas em um console usando 3 modelos de laços,
  dentre eles for, while, .map ou .forEach. */
const nome = [ "Ygor", "Rodrigo", "Vanessa", "Carla"]

let w = 0;
while ( w < nome.length ) {
    console.log(`O nome da vez é ${nome[w]}`)
    
    if ( nome[w] === "Rodrigo" || nome[w] === "Carla") {
        console.log(`${nome[w]} passou`)
    } else {
        console.log(`${nome[w]} nao passou`)
    }

    w++;
}
console.log("Acabou os nome ")

//usando o  for 

for (let f = 0; f < nome.length; f++) {
    console.log(`O nome da vez é ${nome[f]}`)

} 

console.log("Acabou os nomes usando o for")

// usando o forEach

nome.forEach(n => {
    console.log(n)
})
console.log("Acabou os nomes usando o forEach")

console.log("Slice")
const masculino = nome.slice(0, 2)
console.log(masculino)

console.log(`Splice`)
const nomesRemovidos = nome.splice(2, 2)
console.log(`Nomes removidos: ${nomesRemovidos} `)
console.log(`Nomes atualizados: ${nome}`)

console.log("Push")
nome.push("Alan")
nome.push("Ellen")
console.log(nome)

console.log("Pop")
const nomeRemovido = nome.pop()
console.log(`Nome removido: ${nomeRemovido}`)
console.log(`Nomes apos o pop: ${nome} `)

console.log("map")
const nomesMaiusculos = nome.map(n =>  n.toUpperCase)
console.log(nomesMaiusculos)

console.log("find")
const maiorNome = nome.find(n => n.length > 6)
console.log(maiorNome)

console.log(filter)
const nomesLongos = nome.filter(n => n.length > 5)
console.log(nomesLongos)