function calcularTintas() {
  
    let area = parseFloat(prompt("Digite o tamanho da área a ser pintada em metros quadrados:"));
    
    if (isNaN(area) || area <= 0) {
        alert("Por favor, insira um valor válido para a área.");
        return;
    }
    
    const coberturaPorLitro = 3; 
    const litrosPorLata = 18; 
    const precoPorLata = 80.0; 
    
    let litros = area / coberturaPorLitro;
    
    let latas = Math.ceil(litros / litrosPorLata);
    

    let custo = latas * precoPorLata;

   alert(`Quantidade de latas necessárias: ${latas}\nPreço total: R$ ${custo.toFixed(2)}`);
}

calcularTintas();

 