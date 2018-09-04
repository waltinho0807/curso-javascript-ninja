/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
 var vet = [1, 0, 'r', true, 9];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
 function vet1(vet) {
       return vet;
 }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
vet1([1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
 function vet2(vet, index) {
                return vet[index] ;
            }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray = [2, true, 'walter', 2.0, function() {}, [1, 2, 3]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
 console.log(vet2(myArray,0));
            console.log(vet2(myArray,1));
            console.log(vet2(myArray,2));
            console.log(vet2(myArray,3));
            console.log(vet2(myArray,4));
            console.log(vet2(myArray,5));
            console.log(vet2(myArray,6));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
                var allBooks ={
                    'Os segredos do javascript ninja':{quantidadePaginas:518, autor:'Waltinh gostoso', editora: 'Luz'},
                    'Introdução ao HTML5': {quantidadePaginas:312,autor:'luiz tato', editora: 'Cometa' },
                    'smaching CSS': {quantidadePaginas: 185,autor: 'jhon riseg', editora: 'Cozmo' }
                };
                             
               return !bookName ? allBooks : allBooks[bookName];
                              
            }

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Introdução ao HTML5 tem ' + book('Introdução ao HTML5').quantidadePaginas + ' páginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Introdução ao HTML5 é ' + book('Introdução ao HTML5').autor );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Introdução ao HTML5 foi publicado pela editora " + book('Introdução ao HTML5').editora) ; 
