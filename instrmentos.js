const instrumentos = ["Violão", "Piano", "Bateria", "Flauta"];

// Usando while
let w = 0;
while (w < instrumentos.length) {
    console.log(`O instrumento da vez é ${instrumentos[w]}`);
    
    if (instrumentos[w] === "Piano" || instrumentos[w] === "Flauta") {
        console.log(`${instrumentos[w]} passou`);
    } else {
        console.log(`${instrumentos[w]} não passou`);
    }
    
    w++;
}
console.log("Acabaram os instrumentos");

// Usando for
for (let f = 0; f < instrumentos.length; f++) {
    console.log(`O instrumento da vez é ${instrumentos[f]}`);
}
console.log("Acabaram os instrumentos usando o for");

// Usando forEach
instrumentos.forEach(i => {
    console.log(i);
});
console.log("Acabaram os instrumentos usando o forEach");

// Usando slice
console.log("Slice");
const instrumentosDeCorda = instrumentos.slice(0, 2); // Pegando os dois primeiros (corda)
console.log(instrumentosDeCorda);

// Usando splice
console.log("Splice");
const instrumentosRemovidos = instrumentos.splice(2, 2); // Remove dois elementos a partir do índice 2
console.log(`Instrumentos removidos: ${instrumentosRemovidos}`);
console.log(`Instrumentos atualizados: ${instrumentos}`);

// Usando push
console.log("Push");
instrumentos.push("Saxofone");
instrumentos.push("Trompete");
console.log(instrumentos);

// Usando pop
console.log("Pop");
const instrumentoRemovido = instrumentos.pop(); // Remove o último instrumento
console.log(`Instrumento removido: ${instrumentoRemovido}`);
console.log(`Instrumentos após o pop: ${instrumentos}`);

// Usando map
console.log("map");
const instrumentosMaiusculos = instrumentos.map(i => i.toUpperCase());
console.log(instrumentosMaiusculos);

// Usando find
console.log("find");
const instrumentoLongo = instrumentos.find(i => i.length > 6); // Encontrar o primeiro com mais de 6 letras
console.log(instrumentoLongo);

// Usando filter
console.log("filter");
const instrumentosLongos = instrumentos.filter(i => i.length > 5); // Filtrar todos com mais de 5 letras
console.log(instrumentosLongos);
