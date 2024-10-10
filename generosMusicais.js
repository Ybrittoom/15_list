const generosMusicais = ['Rock', 'Pop', 'Jazz', 'Clássico', 'Hip Hop'];

let w = 0
while ( w < generosMusicais.length) {
    console.log(`Genero musical: ${generosMusicais[w]}`)
    w++;
}

for (let f = 0; f < generosMusicais.length; f++) {
    console.log(`Genero musical: ${generosMusicais[w]}`)
}

generosMusicais.forEach(gm  => {
    console.log(`Genero musical: ${gm}`)
});

//Metodos

// Usando o forEach

// Usando slice
console.log("Usando slice:");
const generosSelecionados = generosMusicais.slice(1, 4); // Seleciona do índice 1 ao 3
console.log(`Gêneros selecionados: ${generosSelecionados}`);

// Usando splice
console.log("Usando o splice");
const generosRemovidos = generosMusicais.splice(2, 2); // Remove dois gêneros a partir do índice 2
console.log(`Gêneros removidos: ${generosRemovidos}`);
console.log(`Lista atualizada: ${generosMusicais}`);

// Usando o push
console.log("Usando o push");
generosMusicais.push('Eletrônico'); // Adicionando um novo gênero
console.log(`Lista após adicionar um gênero: ${generosMusicais}`);

// Usando o pop
console.log("Usando o método POP");
const generoRemovido = generosMusicais.pop(); // Remove o último gênero
console.log(`Gênero removido: ${generoRemovido}`);
console.log(`Lista após o pop: ${generosMusicais}`);

// Usando o map
console.log("Usando o map");
const generosEmMaiusculas = generosMusicais.map(genero => genero.toUpperCase()); // Converte os nomes dos gêneros para maiúsculas
console.log(`Gêneros em maiúsculas: ${generosEmMaiusculas}`);

// Usando o find
console.log("Usando o find");
const generoComA = generosMusicais.find(genero => genero.includes('a')); // Encontra o primeiro gênero que contém a letra 'a'
console.log(`Gênero que contém a letra 'a': ${generoComA}`);

// Usando o filter
console.log("Usando o filter");
const generosComMaisDeSeisLetras = generosMusicais.filter(genero => genero.length > 6); // Filtra gêneros com mais de 6 letras
console.log(`Gêneros com mais de 6 letras: ${generosComMaisDeSeisLetras}`);

console.log(generosMusicais);
