let lucroPorHora = parseFloat(prompt('Quanto você ganha por hora'));

let horasTrabalho = parseFloat(prompt('Qual o seu total de horas trabalhadas no mês'));

let salarioBruto = lucroPorHora * horasTrabalho


let salarioIr = (11 / 100.0 * salarioBruto);
let salarioInss = (8 / 100.0 * salarioBruto);
let salarioSindicato = (5 / 100.0 * salarioBruto);
let descontos = salarioIr + salarioInss + salarioSindicato;
salarioLiquido = salarioBruto - descontos;

alert(`
     + Salário Bruto: R$${salarioBruto} 
     - IR (11%): R$${salarioIr}
     - INSS (8%): R$${salarioInss}
     - Sindicato (5%): R$${salarioSindicato}
     = Salário Líquido: R$${salarioLiquido.toFixed(2)}`);

