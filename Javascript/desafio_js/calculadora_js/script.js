//Criando a função principal que irá chamar a calculadora 
function calculadora() {

//declaração da constante que irá determinar qual o tipo de operação o usuário irá escolher
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Potenciação (^)"))

//verificando se a escolha do usuário é válida
    if (operacao > 5 || !operacao) {
        alert("Erro - Digite uma opção válida!");
        calculadora();    
    }
    else {
//declaração das variáveis que irão receber os valores no prompt
    let v1 = Number(prompt("Digite o primeiro valor:"));
    let v2 = Number(prompt("Digite o segundo valor:"));
    let result;
    
//declaração das funções referente às operações:
    function soma() {
        result = v1 + v2;
        alert(`${v1} + ${v2} = ${result}`);
        novaOperacao();
    }
    function subtracao() {
        result = v1 - v2;
        alert(`${v1} - ${v2} = ${result}`);
        novaOperacao();
    }
    function multiplicacao() {
        result = v1 * v2;
        alert(`${v1} * ${v2} = ${result}`);
        novaOperacao();
    }
    function divisao() {
        result = v1 / v2;
        alert(`${v1} / ${v2} = ${result}`);
        novaOperacao();
    }
    function potenciacao() {
        result = v1 ** v2;
        alert(`${v1} ^ ${v2} = ${result}`);
        novaOperacao();
    }

// função que permite o loop da calculadora ou encerrar a atividade, dependendo da escolha do usuário    
    function novaOperacao() {
        let opcao = prompt("Deseja realizar uma nova operação?\n 1 - Sim\n 2 - Não");
        if (opcao == 1) {
            calculadora();
        }
        else if (opcao == 2) {
            alert("Obrigada e até mais!")
        }
        else {
            alert("Erro - Digite uma opção válida.")
            novaOperacao();
        }
    }

//criando o validador de operação que irá chamar a função referente a operação escolhida
    if (operacao == 1) {
        soma();
    }
    else if (operacao == 2) {
        subtracao();
    }
    else if (operacao == 3) {
        multiplicacao();
    }
    else if (operacao == 4) {
        divisao();
    }
    else if (operacao == 5) {
        potenciacao();
    }

    }

}

calculadora();