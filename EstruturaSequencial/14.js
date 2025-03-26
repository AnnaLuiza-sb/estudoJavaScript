let pesoDoPeixe = parseFloat(prompt("Digite o peso dos peixes coletados: "));


if (pesoDoPeixe > 50) {
    excesso = pesoDoPeixe - 50
    multa = excesso * 4
    alert (`João pescou o total de ${pesoDoPeixe}kg de peixes hoje, ${excesso}kg a mais que o estabelecido, e a multa é no valor de R$${multa} reais`);
} else {
    alert(`João pescou ${pesoDoPeixe}kg de peixes, logo está dentro do limite estabelecido`);
}
