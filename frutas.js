const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Melancia'];

// Conferindo as frutas
let k = 0;
console.log("Vamos conferir as frutas a seguir:");

while (k < frutas.length) {
    console.log(`Fruta: ${frutas[k]}`);
    k++;
}
console.log("Acabou a lista de frutas.");

// Usando o for
console.log("USANDO O FOR");
for (let f = 0; f < frutas.length; f++) {
    console.log(`Fruta: ${frutas[f]}`);
}
console.log("Acabou a lista de frutas usando o for.");

// Usando o forEach
console.log("USANDO O forEach");
frutas.forEach(fruta => {
    console.log(`Fruta: ${fruta}`);
});
console.log("Acabou a lista de frutas usando o forEach.");

// Usando slice
console.log("Usando slice:");
const frutasSelecionadas = frutas.slice(1, 4); // Seleciona do índice 1 ao 3
console.log(`Frutas selecionadas: ${frutasSelecionadas}`);

// Usando splice
console.log("Usando o splice");
const frutasRemovidas = frutas.splice(2, 2); // Remove duas frutas a partir do índice 2
console.log(`Frutas removidas: ${frutasRemovidas}`);
console.log(`Lista atualizada: ${frutas}`);

// Usando o push
console.log("Usando o push");
frutas.push('Abacaxi'); // Adicionando uma nova fruta
console.log(`Lista após adicionar uma fruta: ${frutas}`);

// Usando o pop
console.log("Usando o método POP");
const frutaRemovida = frutas.pop(); // Remove a última fruta
console.log(`Fruta removida: ${frutaRemovida}`);
console.log(`Lista após o pop: ${frutas}`);

// Usando o map
console.log("Usando o map");
const frutasEmMaiusculas = frutas.map(fruta => fruta.toUpperCase()); // Converte os nomes das frutas para maiúsculas
console.log(`Frutas em maiúsculas: ${frutasEmMaiusculas}`);

// Usando o find
console.log("Usando o find");
const frutaComA = frutas.find(fruta => fruta.includes('a')); // Encontra a primeira fruta que contém a letra 'a'
console.log(`Fruta que contém a letra 'a': ${frutaComA}`);

// Usando o filter
console.log("Usando o filter");
const frutasComMaisDeSeisLetras = frutas.filter(fruta => fruta.length > 6); // Filtra frutas com mais de 6 letras
console.log(`Frutas com mais de 6 letras: ${frutasComMaisDeSeisLetras}`);

console.log(frutas);
