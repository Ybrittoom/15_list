const relógios = ['Rolex', 'Casio', 'Seiko', 'Omega', 'Fossil'];

// Conferindo os relógios
let k = 0;
console.log("Vamos conferir os relógios a seguir:");

while (k < relógios.length) {
    console.log(`Relógio: ${relógios[k]}`);
    k++;
}
console.log("Acabou a lista de relógios.");

// Usando o for
console.log("USANDO O FOR");
for (let f = 0; f < relógios.length; f++) {
    console.log(`Relógio: ${relógios[f]}`);
}
console.log("Acabou a lista de relógios usando o for.");

// Usando o forEach
console.log("USANDO O forEach");
relógios.forEach(relógio => {
    console.log(`Relógio: ${relógio}`);
});
console.log("Acabou a lista de relógios usando o forEach.");

// Usando slice
console.log("Usando slice:");
const relógiosSelecionados = relógios.slice(1, 4); // Seleciona do índice 1 ao 3
console.log(`Relógios selecionados: ${relógiosSelecionados}`);

// Usando splice
console.log("Usando o splice");
const relógiosRemovidos = relógios.splice(2, 2); // Remove dois relógios a partir do índice 2
console.log(`Relógios removidos: ${relógiosRemovidos}`);
console.log(`Lista atualizada: ${relógios}`);

// Usando o push
console.log("Usando o push");
relógios.push('Tissot'); // Adicionando um novo relógio
console.log(`Lista após adicionar um relógio: ${relógios}`);

// Usando o pop
console.log("Usando o método POP");
const relógioRemovido = relógios.pop(); // Remove o último relógio
console.log(`Relógio removido: ${relógioRemovido}`);
console.log(`Lista após o pop: ${relógios}`);

// Usando o map
console.log("Usando o map");
const relógiosEmMaiusculas = relógios.map(relógio => relógio.toUpperCase()); // Converte os nomes dos relógios para maiúsculas
console.log(`Relógios em maiúsculas: ${relógiosEmMaiusculas}`);

// Usando o find
console.log("Usando o find");
const relógioComO = relógios.find(relógio => relógio.includes('o')); // Encontra o primeiro relógio que contém a letra 'o'
console.log(`Relógio que contém a letra 'o': ${relógioComO}`);

// Usando o filter
console.log("Usando o filter");
const relógiosComMaisDeSeisLetras = relógios.filter(relógio => relógio.length > 6); // Filtra relógios com mais de 6 letras
console.log(`Relógios com mais de 6 letras: ${relógiosComMaisDeSeisLetras}`);

console.log(relógios);
