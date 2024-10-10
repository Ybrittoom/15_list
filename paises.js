const países = ['Brasil', 'Argentina', 'Chile', 'Peru', 'Colômbia'];

// Conferindo os países
let k = 0;
console.log("Vamos conferir os países a seguir:");

while (k < países.length) {
    console.log(`País: ${países[k]}`);
    k++;
}
console.log("Acabou a lista de países.");

// Usando o for
console.log("USANDO O FOR");
for (let f = 0; f < países.length; f++) {
    console.log(`País: ${países[f]}`);
}
console.log("Acabou a lista de países usando o for.");

// Usando o forEach
console.log("USANDO O forEach");
países.forEach(pais => {
    console.log(`País: ${pais}`);
});
console.log("Acabou a lista de países usando o forEach.");

// Usando slice
console.log("Usando slice:");
const paísesSelecionados = países.slice(1, 4); // Seleciona do índice 1 ao 3
console.log(`Países selecionados: ${paísesSelecionados}`);

// Usando splice
console.log("Usando o splice");
const paísesRemovidos = países.splice(2, 2); // Remove dois países a partir do índice 2
console.log(`Países removidos: ${paísesRemovidos}`);
console.log(`Lista atualizada: ${países}`);

// Usando o push
console.log("Usando o push");
países.push('Uruguai'); // Adicionando um novo país
console.log(`Lista após adicionar um país: ${países}`);

// Usando o pop
console.log("Usando o método POP");
const paísRemovido = países.pop(); // Remove o último país
console.log(`País removido: ${paísRemovido}`);
console.log(`Lista após o pop: ${países}`);

// Usando o map
console.log("Usando o map");
const paísesEmMaiusculas = países.map(pais => pais.toUpperCase()); // Converte os nomes dos países para maiúsculas
console.log(`Países em maiúsculas: ${paísesEmMaiusculas}`);

// Usando o find
console.log("Usando o find");
const paísComA = países.find(pais => pais.includes('a')); // Encontra o primeiro país que contém a letra 'a'
console.log(`País que contém a letra 'a': ${paísComA}`);

// Usando o filter
console.log("Usando o filter");
const paísesComMaisDeSeisLetras = países.filter(pais => pais.length > 6); // Filtra países com mais de 6 letras
console.log(`Países com mais de 6 letras: ${paísesComMaisDeSeisLetras}`);

console.log(países);
