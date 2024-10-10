const profissões = ['Engenheiro', 'Professor', 'Médico', 'Designer', 'Advogado'];

// Conferindo as profissões
let k = 0;
console.log("Vamos conferir as profissões a seguir:");

while (k < profissões.length) {
    console.log(`Profissão: ${profissões[k]}`);
    k++;
}
console.log("Acabou a lista de profissões.");

// Usando o for
console.log("USANDO O FOR");
for (let f = 0; f < profissões.length; f++) {
    console.log(`Profissão: ${profissões[f]}`);
}
console.log("Acabou a lista de profissões usando o for.");

// Usando o forEach
console.log("USANDO O forEach");
profissões.forEach(profissao => {
    console.log(`Profissão: ${profissao}`);
});
console.log("Acabou a lista de profissões usando o forEach.");

// Usando slice
console.log("Usando slice:");
const profissõesSelecionadas = profissões.slice(1, 4); // Seleciona do índice 1 ao 3
console.log(`Profissões selecionadas: ${profissõesSelecionadas}`);

// Usando splice
console.log("Usando o splice");
const profissõesRemovidas = profissões.splice(2, 2); // Remove duas profissões a partir do índice 2
console.log(`Profissões removidas: ${profissõesRemovidas}`);
console.log(`Lista atualizada: ${profissões}`);

// Usando o push
console.log("Usando o push");
profissões.push('Veterinário'); // Adicionando uma nova profissão
console.log(`Lista após adicionar uma profissão: ${profissões}`);

// Usando o pop
console.log("Usando o método POP");
const profissãoRemovida = profissões.pop(); // Remove a última profissão
console.log(`Profissão removida: ${profissãoRemovida}`);
console.log(`Lista após o pop: ${profissões}`);

// Usando o map
console.log("Usando o map");
const profissõesEmMaiusculas = profissões.map(profissao => profissao.toUpperCase()); // Converte os nomes das profissões para maiúsculas
console.log(`Profissões em maiúsculas: ${profissõesEmMaiusculas}`);

// Usando o find
console.log("Usando o find");
const profissãoComE = profissões.find(profissao => profissao.includes('e')); // Encontra a primeira profissão que contém a letra 'e'
console.log(`Profissão que contém a letra 'e': ${profissãoComE}`);

// Usando o filter
console.log("Usando o filter");
const profissõesComMaisDeSeisLetras = profissões.filter(profissao => profissao.length > 6); // Filtra profissões com mais de 6 letras
console.log(`Profissões com mais de 6 letras: ${profissõesComMaisDeSeisLetras}`);

console.log(profissões);
