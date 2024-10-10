const cidades = ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Curitiba', 'Fortaleza'];

// Conferindo as cidades
let k = 0;
console.log("Vamos conferir as cidades a seguir:");

while (k < cidades.length) {
    console.log(`Cidade: ${cidades[k]}`);
    k++;
}
console.log("Acabou a lista de cidades.");

// Usando o for
console.log("USANDO O FOR");
for (let f = 0; f < cidades.length; f++) {
    console.log(`Cidade: ${cidades[f]}`);
}
console.log("Acabou a lista de cidades usando o for.");

// Usando o forEach
console.log("USANDO O forEach");
cidades.forEach(cidade => {
    console.log(`Cidade: ${cidade}`);
});
console.log("Acabou a lista de cidades usando o forEach.");

// Usando slice
console.log("Usando slice:");
const cidadesSelecionadas = cidades.slice(1, 4); // Seleciona do índice 1 ao 3
console.log(`Cidades selecionadas: ${cidadesSelecionadas}`);

// Usando splice
console.log("Usando o splice");
const cidadesRemovidas = cidades.splice(2, 2); // Remove duas cidades a partir do índice 2
console.log(`Cidades removidas: ${cidadesRemovidas}`);
console.log(`Lista atualizada: ${cidades}`);

// Usando o push
console.log("Usando o push");
cidades.push('Belo Horizonte'); // Adicionando uma nova cidade
console.log(`Lista após adicionar uma cidade: ${cidades}`);

// Usando o pop
console.log("Usando o método POP");
const cidadeRemovida = cidades.pop(); // Remove a última cidade
console.log(`Cidade removida: ${cidadeRemovida}`);
console.log(`Lista após o pop: ${cidades}`);

// Usando o map
console.log("Usando o map");
const cidadesEmMaiusculas = cidades.map(cidade => cidade.toUpperCase()); // Converte os nomes das cidades para maiúsculas
console.log(`Cidades em maiúsculas: ${cidadesEmMaiusculas}`);

// Usando o find
console.log("Usando o find");
const cidadeComS = cidades.find(cidade => cidade.startsWith('S')); // Encontra a primeira cidade que começa com 'S'
console.log(`Cidade que começa com 'S': ${cidadeComS}`);

// Usando o filter
console.log("Usando o filter");
const cidadesComMaisDeSeisLetras = cidades.filter(cidade => cidade.length > 6); // Filtra cidades com mais de 6 letras
console.log(`Cidades com mais de 6 letras: ${cidadesComMaisDeSeisLetras}`);

console.log(cidades);
