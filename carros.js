const carros = ['Ford', 'Chevrolet', 'Toyota', 'Honda', 'BMW'];

// Conferindo os carros
let k = 0;
console.log("Vamos conferir os carros a seguir:");

while (k < carros.length) {
    console.log(`Carro: ${carros[k]}`);
    k++;
}
console.log("Acabou a lista de carros.");

// Usando o for
console.log("USANDO O FOR");
for (let f = 0; f < carros.length; f++) {
    console.log(`Carro: ${carros[f]}`);
}
console.log("Acabou a lista de carros usando o for.");

// Usando o forEach
console.log("USANDO O forEach");
carros.forEach(carro => {
    console.log(`Carro: ${carro}`);
});
console.log("Acabou a lista de carros usando o forEach.");

// Usando slice
console.log("Usando slice:");
const carrosSelecionados = carros.slice(1, 4); // Seleciona do índice 1 ao 3
console.log(`Carros selecionados: ${carrosSelecionados}`);

// Usando splice
console.log("Usando o splice");
const carrosRemovidos = carros.splice(2, 2); // Remove dois carros a partir do índice 2
console.log(`Carros removidos: ${carrosRemovidos}`);
console.log(`Lista atualizada: ${carros}`);

// Usando o push
console.log("Usando o push");
carros.push('Volkswagen'); // Adicionando um novo carro
console.log(`Lista após adicionar um carro: ${carros}`);

// Usando o pop
console.log("Usando o método POP");
const carroRemovido = carros.pop(); // Remove o último carro
console.log(`Carro removido: ${carroRemovido}`);
console.log(`Lista após o pop: ${carros}`);

// Usando o map
console.log("Usando o map");
const carrosEmMaiusculas = carros.map(carro => carro.toUpperCase()); // Converte os nomes dos carros para maiúsculas
console.log(`Carros em maiúsculas: ${carrosEmMaiusculas}`);

// Usando o find
console.log("Usando o find");
const carroComO = carros.find(carro => carro.includes('o')); // Encontra o primeiro carro que contém a letra 'o'
console.log(`Carro que contém a letra 'o': ${carroComO}`);

// Usando o filter
console.log("Usando o filter");
const carrosComMaisDeSeisLetras = carros.filter(carro => carro.length > 6); // Filtra carros com mais de 6 letras
console.log(`Carros com mais de 6 letras: ${carrosComMaisDeSeisLetras}`);

console.log(carros);
