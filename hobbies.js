// Lista de hobbies
const hobbies = ["Ler", "Correr", "Jogar Videogame", "Cozinhar", "Fazer Exercícios", "Viajar", "Fotografar"];

// Usando while
let w = 0;
console.log("Vamos conferir os hobbies a seguir");

while (w < hobbies.length) {
    console.log(`O hobby da vez é: ${hobbies[w]}`);

    if (hobbies[w] === "Correr" || hobbies[w] === "Viajar") {
        console.log(`${hobbies[w]} é um hobby ativo!`);
    } else {
        console.log(`${hobbies[w]} é um hobby relaxante.`);
    }

    w++;
}
console.log("Acabaram os hobbies.");

// Usando for
console.log("USANDO O FOR");
for (let f = 0; f < hobbies.length; f++) {
    console.log(`O hobby da vez é: ${hobbies[f]}`);
    
    if (hobbies[f] === "Correr") {
        console.log(`${hobbies[f]} é um hobby ativo!`);
    } else {
        console.log(`${hobbies[f]} é um hobby relaxante.`);
    }
}
console.log("Acabaram os hobbies usando o for.");

// Usando forEach
console.log("USANDO O forEach");
hobbies.forEach(hobby => {
    console.log(`O hobby da vez é: ${hobby}`);
});
console.log("Acabaram os hobbies usando o forEach.");

// Usando slice
console.log("Usando slice:");
const hobbiesSelecionados = hobbies.slice(0, 3); // Seleciona os primeiros três hobbies
console.log(`Hobbies selecionados: ${hobbiesSelecionados}`);

// Usando splice
console.log("Usando o splice:");
const hobbiesRemovidos = hobbies.splice(4, 2); // Remove dois hobbies a partir do índice 4
console.log(`Hobbies removidos: ${hobbiesRemovidos}`); // Mostra os hobbies removidos
console.log(`Lista atualizada: ${hobbies}`); // Lista atualizada

// Usando push
console.log("Usando o push:");
hobbies.push("Meditar"); // Adiciona um novo hobby
console.log(`Hobbies após adicionar: ${hobbies}`);

// Usando pop
console.log("Usando o método POP:"); // Remove o último hobby da lista
const hobbyRemovido = hobbies.pop();
console.log(`Hobby removido: ${hobbyRemovido}`);
console.log(`Lista após o pop: ${hobbies}`);

// Usando map
console.log("Usando o map:"); // Aplica uma função a todos os hobbies
const hobbiesComTamanho = hobbies.map(hobby => `${hobby} (${hobby.length} letras)`); // Adiciona o número de letras
console.log(`Hobbies com tamanho: ${hobbiesComTamanho}`);

// Usando find
console.log("Usando o find:"); // Encontra o primeiro hobby que contém mais de 10 letras
const hobbyLongo = hobbies.find(hobby => hobby.length > 10);
console.log(`Hobby com mais de 10 letras: ${hobbyLongo}`);

// Usando filter
console.log("Usando o filter:"); // Retorna uma nova lista com hobbies que têm mais de 6 letras
const hobbiesLongos = hobbies.filter(hobby => hobby.length > 6);
console.log(`Hobbies com mais de 6 letras: ${hobbiesLongos}`);

console.log(hobbies);
