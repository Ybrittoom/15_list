const cores = ['Vermelho', 'Azul', 'Verde', 'Amarelo', 'Roxo'];

let w = 0;
console.log("Vamos conferir os paises a seguir")
while ( w < cores.length) {
    console.log(`Cores: ${cores[w]}`)
    w++;
}
console.log("Acabou a lista de cores com while")

console.log("Usando o for")
for (let f = 0; f < cores.length; f++) {
    console.log(`Cores: ${cores[f]}`)
}
console.log("Acabou a lista de cores usando o for")

console.log("Usando o forEach")
cores.forEach(cor => {
    console.log(`Cores: ${cor}`)
});

//USANDO O METODO

//Usando slice
console.log("Usando slice:");
const coresSelecionadas = cores.slice(1, 4); // Seleciona do índice 1 ao 3
console.log(`Cores selecionadas: ${coresSelecionadas}`);

// Usando splice
console.log("Usando o splice");
const coresRemovidas = cores.splice(2, 2); // Remove duas cores a partir do índice 2
console.log(`Cores removidas: ${coresRemovidas}`);
console.log(`Lista atualizada: ${cores}`);

// Usando o push
console.log("Usando o push");
cores.push('Laranja'); // Adicionando uma nova cor
console.log(`Lista após adicionar uma cor: ${cores}`);

// Usando o pop
console.log("Usando o método POP");
const corRemovida = cores.pop(); // Remove a última cor
console.log(`Cor removida: ${corRemovida}`);
console.log(`Lista após o pop: ${cores}`);

// Usando o map
console.log("Usando o map");
const coresEmMaiusculas = cores.map(cor => cor.toUpperCase()); // Converte os nomes das cores para maiúsculas
console.log(`Cores em maiúsculas: ${coresEmMaiusculas}`);

//usando o find 
console.log("Usando o find")
const corComE = cores.find(cor => cor.includes('a'))
console.log(`Cor que contem a letra E: ${corComE}`)

//Usando o filter
console.log("Usando o filter")
const corComMaisDeSeisLetras = cores.filter( cor => cor.length > 6)
console.log(`Cores com mais de 6 letras: ${corComMaisDeSeisLetras}`)

console.log(cores)



