function calculadora(){
    var n1, n2, soma, subtracao, divisao, multuplicacao;
    n1 = parseFloat(window.prompt("Digite o primeiro número:"));
    n2 = parseFloat(window.prompt("Digite o segundo número:"));
    
    soma = parseFloat(n1)+parseFloat(n2);
    subtracao = parseFloat(n1)-parseFloat(n2);
    divisao = parseFloat(n1)/parseFloat(n2);
    multuplicacao = parseFloat(n1)*parseFloat(n2);

    document.write("A soma dos numeros eh:" + soma + "<br>");
    document.write("A subtracao dos numeros eh:" + subtracao + "<br>");
    document.write("A divisao dos numeros eh:" + divisao + "<br>");
    document.write("A multpicacao dos numeros eh:" + multuplicacao + "<br>");  
}