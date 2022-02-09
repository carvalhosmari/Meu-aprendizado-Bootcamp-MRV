//Palíndromo é uma palavra, expressão ou frase, ou até mesmo uma sequência de letras ou números, que tenha a propriedade de ser lida e compreendida da mesma maneira, tanto da direita para a esquerda, como da esquerda para a direita.

//função que irá verificar se uma string é um palíndromo
function verificaPalindromo() {
    let str = String(prompt("Palíndromo é uma palavra, expressão ou frase, ou até mesmo uma sequência de letras ou números, que tenha a propriedade de ser lida e compreendida da mesma maneira, tanto da direita para a esquerda, como da esquerda para a direita.\n\nDigite uma palavra ou frase:"));

    //variável que será comparada, ignorando espaços entre as palavras, acentos e caracteres especiais
    let str2 = str.split(" ").join("").toLocaleLowerCase().normalize("NFD").replace(/[^\w\s]/gi, "");
    
    //variável que armazena o reverso da string digitada pelo usuário, ignorando os espaços, acentos e caracteres especiais
    let reverseStr = str.split("").reverse().join("").split(" ").join("").toLocaleLowerCase().normalize("NFD").replace(/[^\w\s]/gi, "");

    //verificando se a string é válida
    if (!str) {
        alert("Digite uma string!");
        verificaPalindromo();
    }

    else {
        if (str2 == reverseStr) {
            alert(`A string '${str}' é um palíndromo.`);
        }
        else {
        alert(`A string '${str}' não é um palíndromo.`);
        }
        novaVerificacao();
    }

    function novaVerificacao() {
        let opcao = Number(prompt("Deseja realizar uma outra verificação?\n 1 - Sim\n 2 - Não"));

        if (!opcao) {
            alert("Digite uma opção válida.");
            novaVerificacao();
        }

        else if (opcao == 1) {
            verificaPalindromo();
        }

        else {
            alert("Obrigada e até mais!");
        }
    }

    
}

verificaPalindromo();