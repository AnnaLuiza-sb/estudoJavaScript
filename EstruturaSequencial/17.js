function calcularTintas() {

    let area = parseFloat(prompt("Digite o tamanho da área a ser pintada em metros quadrados:"));


    let coberturaPorLitro = 6;
    let litrosPorLata = 18;
    let galaoLitros =  3.6;
    let precoPorLata = 80.0;
    let precoPorGalao = 25;

    let litros = area / coberturaPorLitro * 1.1;

    let latas = Math.ceil(litros / litrosPorLata);
    let custoLatas = latas * precoPorLata;

    let galoes = Math.ceil(litros / galaoLitros);
    let custoGalao = galoes * precoPorGalao;

    let misturaLatas = Math.floor(litros / litrosPorLata);
    let restoLitros = litros % litrosPorLata;
    let misturaGalaoes = Math.ceil(restoLitros / galaoLitros);
    let precoMistura = (misturaLatas * precoPorLata) + (misturaGalaoes * precoPorGalao);

 
    alert(`Opção 1: Apenas latas de 18 litros 
           Quantidade: ${latas} latas
           Preço total: R$ ${custoLatas.toFixed(2)}`);
    
    alert(`\nOpção 2: Apenas galões de 3,6 litro
            Quantidade: ${galoes} galões  
            Preço total: R$ ${custoGalao.toFixed(2)}`);

    
    alert(`\nOpção 3: Mistura de latas e galões
        Quantidade: ${misturaLatas} latas e ${misturaGalaoes} galões
        Preço total: R$ ${precoMistura.toFixed(2)}`);
}

calcularTintas();
