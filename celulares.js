const celulares = ['Samsung', 'Apple', 'Xiaomi', 'Motorola', 'LG'];

let w = 0;
while ( w < celulares.length) {
   if ( celulares[w] === "Samsung" || celulares[w] === "Apple") {
    console.log("Sao os melhores celulares")
   } else {
    console.log("Sao celulares bons")
   }

   w++;
}
console.log("Acabou a lista com while")

//for
console.log("Usando o for ")
for (let f = 0; f < celulares.length; f++) {
    console.log(`Celulares: ${celulares}`)
}
console.log("Acabou a lista usando o for ")

//forEach
celulares.forEach(cell  => {
    console.log(`Celulares: ${cell}`)
});



//Metodos 

//slice
console.log("Usando o slice ")
const cellSelecionados = celulares.slice(2, 3)
console.log(`Celulares selecionados: ${cellSelecionados}`)

//usando o splice
console.log("Usando o splice ")
const cellRemovidos = celulares.splice(2, 2)
console.log(`Celulares removidos: ${cellRemovidos}`)
console.log(`Lista atualizada: ${celulares}`)

//usando o push
console.log("Usando o push")
celulares.push('Hauwei')
console.log(`Lista apos adicionar um celular: ${celulares}`)

//usando map 
console.log("Usando o map")
const cellEmMinusculos = celulares.map(cell => cell.toLowerCase)
console.log(`Celulares em minuscula: ${cellEmMinusculos}`)

//usando o find 
console.log("Usando o find")
const cellComM = celulares.find(cell => cell.includes('m'))
console.log(`Celulares que contem a letra 'm: ${cellComM}`)

//Usando o filter 
console.log("Usando O filter")
const cellComMaisDe6Letras = celulares.filter(cell => cell.length > 6)
console.log(`Celulares com mais de 6 letras: ${cellComMaisDe6Letras}`)

console.log(celulares)