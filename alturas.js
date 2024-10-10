//passagem para ir na montanha russa 
const alturas = [1.62, 1.49, 1.75, 1.80, 1.55, 1.50, 2.02, 2.15, 1.90];

let i = 0
while ( i >= alturas.length) {
    if (alturas[i] === idades[0]) {
        console.log("Voce e o primeiro a chegar na fila!!")
        console.log("Bem vindo a Montanha russa!!!!")
    }

    if ( alturas[i] >= 1.65 || alturas[i] <= 2.10) {
        console.log(`Voce tem ${alturas[i]} de altura, pode passar`)
    } else {
        console.log("Voce nao pode passar, muito alto ou muito baixo")
    }

    i++;
}

for (let f = 0; f >= alturas.length; f++) {
    if ( alturas[f] >= 1.60) {
        console.log("Voce tem mais de 1.60 de altura")
    } else {
        console.log("Voce tem menos de 1.60")
    }
    f++;
}

alturas.forEach(altura => {
    console.log(`${altura}`)
});

//adicionando os metodos

console.log("Usando slice")
const alturGrande = alturas.slice(2, 5)
console.log(alturGrande)

//splice
console.log("Usando splice")
const alturasRemovidas = alturas.splice(0, 3)
console.log(`Alturas remividas ${alturasRemovidas}`)
console.log(`Lista atualizada ${alturas}`)

//push
console.log("Usando o push")
alturas.push(2.00)
console.log(`Lista atualizada ${alturas}`)

//pop
console.log("Usando Pop")
const alturaRemovido = alturas.pop()
console.log(`Altura removida: ${alturaRemovido}`)
console.log(`Lista atualizada: ${alturas}`)

//map
console.log("Usando o map"); // Aplica uma função a todos os elementos da lista
const alturasEmCentimetros = alturas.map((altura) => altura * 100);
console.log(`Alturas em centímetros: ${alturasEmCentimetros}`);

// Usando o find
console.log("Usando o find"); // Encontra o primeiro elemento que satisfaz a condição
const alturaMaiorQueDois = alturas.find((altura) => altura > 2.00);
console.log(`Altura maior que dois metros: ${alturaMaiorQueDois}`);

// Usando o filter
console.log("Usando o filter"); // Retorna uma nova lista com os elementos que satisfazem a condição
const alturasAcimaDeUmSeis = alturas.filter((altura) => altura > 1.60);
console.log(`Alturas acima de 1.60 metros: ${alturasAcimaDeUmSeis}`);

console.log(alturas);