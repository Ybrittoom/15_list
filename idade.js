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