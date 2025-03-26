
let altura = parseFloat(prompt("Informe sua altura:  "));
let genero = prompt("Digite M para masculino e F para feminino: ")

if (genero.toUpperCase() === "M") {
   let pesoIdealMasculino = (72.7* altura) -58;
   alert("Seu peso ideal seria: " + pesoIdealMasculino.toFixed(2));
} else if (genero.toUpperCase() == "F") {
    let pesoIdealFeminino = (62.1 * altura) - 44.7;
    alert ("Seu peso ideal seria: " + pesoIdealFeminino.toFixed(2));
}

// pesoIdeal = (72.7 * altura) - 58;