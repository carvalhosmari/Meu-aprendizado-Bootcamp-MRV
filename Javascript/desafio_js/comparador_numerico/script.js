function comparaNum() {
    let n1 = Number(prompt("Digite o primeiro numero:"));
    let n2 = Number(prompt("Digite o segundo numero:"));
    

    if (!n1 || !n2) {
        alert("Digite um número válido.");
        comparaNum();
    }
    else {
        let ver1 = saoIguais();
        let ver2 = somaNum();
        let ver3 = compara10();
        let ver4 = compara20();   

        function somaNum() {
            return (n1 + n2);
        }
        
        function saoIguais() {
            return (n1 == n2) ? "são iguais" : "não são iguais";
        }

        function compara10() {
            return (somaNum() > 10) ? "é maior que 10" : "é menor que 10";
        }

        function compara20() {
            return (somaNum() < 20) ? "menor que 20" : "maior que 20";
        }

        alert(`Os numeros ${n1} e ${n2} ${ver1}. A soma desses numeros é igual a ${ver2}, que ${ver3} e ${ver4}.`)
        
        function novaComparacao() {
            let opcao = prompt("Deseja realizar uma nova operação?\n 1 - Sim\n 2 - Não");
            
            if (opcao == 1) {
                comparaNum();
            }
            else if (opcao == 2) {
                alert("Obrigada e até mais!")
            }
            else {
                alert("Erro - Digite uma opção válida.")
            novaComparacao();
            }

            

        }
               
    novaComparacao();
    }

}

comparaNum();