let tamanhoArquivo = parseFloat(prompt("Digite o tamanho do arquivo (MB) a ser baixado: "));

let velocidade = parseFloat(prompt("Digite a velocidade da internet (MBps): "));

let tempoMinutos = ((tamanhoArquivo * 8) / velocidade) / 60;

alert(`O tempo aproximado do seu download é de: ${tempoMinutos.toFixed(2)} minutos`); 

