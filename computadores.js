// Lista de computadores
const computadores = ['Dell', 'HP', 'Asus', 'Acer', 'Lenovo'];

// Usando while
let w = 0;
console.log("Vamos conferir os computadores a seguir");

while (w < computadores.length) {
    console.log(`O computador da vez é: ${computadores[w]}`);
    
    if (computadores[w] === "Dell" || computadores[w] === "Asus") {
        console.log(`${computadores[w]} é conhecido pela sua qualidade.`);
    } else {
        console.log(`${computadores[w]} é uma boa opção de mercado.`);
    }

    w++;
}
console.log("Acabaram os computadores.");

// Usando for
console.log("USANDO O FOR");
for (let f = 0; f < computadores.length; f++) {
    console.log(`O computador da vez é: ${computadores[f]}`);
    
    if (computadores[f] === "HP") {
        console.log(`${computadores[f]} é popular entre gamers.`);
    } else {
        console.log(`${computadores[f]} é uma boa opção para o dia a dia.`);
    }
}
console.log("Acabaram os computadores usando o for.");

// Usando forEach
console.log("USANDO O forEach");
computadores.forEach(computador => {
    console.log(`O computador da vez é: ${computador}`);
});
console.log("Acabaram os computadores usando o forEach.");

// Usando slice
console.log("Usando slice:");
const computadoresSelecionados = computadores.slice(0, 3); // Seleciona os primeiros três computadores
console.log(`Computadores selecionados: ${computadoresSelecionados}`);

// Usando splice
console.log("Usando o splice:");
const computadoresRemovidos = computadores.splice(2, 2); // Remove dois computadores a partir do índice 2
console.log(`Computadores removidos: ${computadoresRemovidos}`); // Mostra os computadores removidos
console.log(`Lista atualizada: ${computadores}`); // Lista atualizada

// Usando push
console.log("Usando o push:");
computadores.push("Samsung"); // Adiciona um novo computador
console.log(`Computadores após adicionar: ${computadores}`);

// Usando pop
console.log("Usando o método POP:"); // Remove o último computador da lista
const computadorRemovido = computadores.pop();
console.log(`Computador removido: ${computadorRemovido}`);
console.log(`Lista após o pop: ${computadores}`);

// Usando map
console.log("Usando o map:"); // Aplica uma função a todos os computadores
const computadoresComTamanho = computadores.map(computador => `${computador} (${computador.length} letras)`); // Adiciona o número de letras
console.log(`Computadores com tamanho: ${computadoresComTamanho}`);

// Usando find
console.log("Usando o find:"); // Encontra o primeiro computador que contém mais de 5 letras
const computadorLongo = computadores.find(computador => computador.length > 5);
console.log(`Computador com mais de 5 letras: ${computadorLongo}`);

// Usando filter
console.log("Usando o filter:"); // Retorna uma nova lista com computadores que têm mais de 4 letras
const computadoresLongos = computadores.filter(computador => computador.length > 4);
console.log(`Computadores com mais de 4 letras: ${computadoresLongos}`);

console.log(computadores);
