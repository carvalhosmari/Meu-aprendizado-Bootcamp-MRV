### *Verificador de palíndromos:*

A proposta do desafio é criar um verificador de palíndromos, onde o usuário insere uma palavra, frase ou expressão no prompt e o verificador retorna se a string é um palíndromo ou não.



Basicamente uma string é considerada palíndromo quando pode ser lida e compreendida da mesma maneira, tanto da esquerda para a direita, quanto da direita para esquerda (*Ex: ovo, luz azul, ana, a sacada da casa, etc*)



A proposta inicial é criar um verificador para apenas uma palavra, sem levar em consideração acentos e caracteres especiais, porém a fim de aprimorar meus conhecimentos, aperfeiçoei o código para que ele ignorasse espaços em branco, letra maiúsculas, acentos e caracteres especiais.


#### *Conceitos utilizados:*
- funções declarativas;
- *split(" ")*, para "quebrar" a string segundo o parâmetro passado, que neste caso são espaços em branco, caso o usuário queira verificar uma frase;
- *join("")*, para unir as partes splitadas da string;
- *reverse()*, para espelhar a string para que o conceito de palíndromo seja satisfeito;
- *toLocaleLowerCase()*, para que não haja distinção de letras maiúsculas e minúsculas;
- *normalize("NFD").replace(/[^\w \s]/ gi, "")*, para que o código ignore a presença de acentos e caracteres especiais.



