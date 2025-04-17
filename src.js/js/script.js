// EXERCICIO 1 - DECLARE VARIAVÉIS COM VALOR undefined, vazio e com valor 

// Variável ainda não recebeu valor (undefined)
let vinhoSelecionado;
console.log("Vinho selecionado:", vinhoSelecionado); // undefined

// Variável com valor nulo (vazio intencional)
let sugestaoSommelier = null;
console.log("Sugestão do sommelier:", sugestaoSommelier); // null

// Variável com valor definido
let anoReserva = 2020;
console.log("Ano da reserva do vinho:", anoReserva); // 2020

// EXERCICIO 2 - Como usar o operador os operadores( != , ==, >= ) em JavaScript? Exemplifique e demonstre a saída!

// >= Verificando idade mínima para degustação
let idade1 = 20;
console.log("O cliente pode degustar vinhos? " + (idade1 >= 18));

// == Verificando se o vinho é o favorito
let vinhoFavorito = "Merlot";
console.log("O vinho selecionado é o favorito da casa? " + (vinhoFavorito == "Merlot"));

// != Verificando se o vinho escolhido não é o que está fora de estoque
let vinhoEscolhido = "Cabernet";
console.log("O vinho escolhido está fora de estoque? " + (vinhoEscolhido != "Cabernet"));

// Exercicio 3 - IMC

// Vinheria Angello: evento de bem-estar com avaliação de IMC

let peso = parseFloat(prompt("Digite o seu peso para o cadastro na Vinheria SmoothPath:"));
let altura = parseFloat(prompt("Digite sua altura com o padrão 0.00:"));

let imc = peso / (altura ** 2);

console.log("Seu IMC é de: " + imc.toFixed(2));

switch(true) {
  case (imc < 18.5):
    console.log("Atenção: Você está abaixo do peso ideal! Na Vinheria SmoothPath, temos vinhos suaves e opções leves para acompanhar sua saúde.");
    break;

  case (imc >= 18.5 && imc < 24.9):
    console.log("Parabéns! Você está com peso normal. Aproveite a degustação de vinhos da Vinheria SmoothPath com equilíbrio.");
    break;

  case (imc >= 25 && imc < 29.9):
    console.log("Atenção: Você está com sobrepeso. Nossa equipe recomenda moderação, até na escolha dos vinhos.");
    break;

  case (imc >= 30):
    console.log("Atenção: Você está na faixa de obesidade. Consulte um especialista antes de participar da degustação.");
    break;

  default:
    console.log("Não foi possível calcular seu IMC corretamente. Tente novamente.");
}
  // Exercício 4 - Programa que conta até 50

  console.log("Contagem de garrafas numeradas para o estoque da Vinheria SmoothPath:");

for (let i = 0; i <= 50; i++) {
  console.log("O valor é: " + i + "!");
}
 
 // Exercício 5 - Recebe um usuário e senha e verifica se correspondem ao nome de usuário e senha cadastrados

 const usuarioCad = "admin";
 const senhaCad = "1234";

 let nome = prompt("Seja bem-vindo à Vinheria SmoothPath!\nSiga as instruções a seguir para realizar seu login\nDigite seu nome de usuário: ");
 let senha = prompt("Digite sua senha: ");

 if(nome == usuarioCad && senha == senhaCad){
  console.log("Login realizado com sucesso!")
 } 
 else{
  console.log("Erro: Falha de autenticação")
  console.log("Não foi possível realizar login!")
 }

 //Exercicio 6 calcule a média de 7 notas, e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado

 let n1 = parseFloat(prompt("Digite a avaliação do vinho 1 (de 0 a 10): "));
 let n2 = parseFloat(prompt("Digite a avaliação do vinho 2 (de 0 a 10): "));
 let n3 = parseFloat(prompt("Digite a avaliação do vinho 3 (de 0 a 10): "));
 let n4 = parseFloat(prompt("Digite a avaliação do vinho 4 (de 0 a 10): "));
 let n5 = parseFloat(prompt("Digite a avaliação do vinho 5 (de 0 a 10): "));
 let n6 = parseFloat(prompt("Digite a avaliação do vinho 6 (de 0 a 10): "));
 let n7 = parseFloat(prompt("Digite a avaliação do vinho 7 (de 0 a 10): "));
 
 function media(n1, n2, n3, n4, n5, n6, n7) {
     return (n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7;
 }
 
 let resultadoMedia = media(n1, n2, n3, n4, n5, n6, n7);
 
 if (resultadoMedia >= 7.0) { 
     console.log("O vinho foi aprovado! Ele tem boas avaliações.");
 } else {
     console.log("O vinho foi reprovado. Ele precisa melhorar!");
 }

//Exercicio 7 Crie um programa que imprima o seu nome, idade, curso e ano um embaixo do outro

let nomeVinharia = prompt("Digite o nome da vinícola: ");
console.log(nomeVinharia);
let anoFundacao = prompt("Digite o ano de fundação da vinícola: ");
console.log(anoFundacao);
let tipoVinho = prompt("Digite o tipo de vinho produzido: ");
console.log(tipoVinho);
let avaliacaoMedia = prompt("Digite a avaliação média dos vinhos (de 0 a 10): ");
console.log(avaliacaoMedia);

 //Exercicio 8 crie um programa utilizando a base de texto seguinte
 console.log("Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.")

 let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas."

 console.log("Localização da primeira posição de 'em': " + texto.indexOf("em"))
 
 console.log("Localização da última posição de 'ia': " + texto.slice(40,50))
 
 console.log("Localização da palavra 'ciência': " + texto.indexOf("ciência",))
 
 console.log("Localização da palavra 'métodos': " + texto.indexOf("métodos"))
 
 // EXERCICIO 9 - UTLIZE FLOAT PARA STRING COM DADOS DA VARIAVEL 
 
 let precoVinho = "150.50";
 console.log("Preço do vinho: ");
 console.log(parseFloat(precoVinho));
 console.log(typeof precoVinho);
 
 let qtdGarrafas = "100";
 console.log(parseFloat(qtdGarrafas));
 console.log(typeof qtdGarrafas);
 
 let valorTotal = "3000.75";
 console.log("Valor total:")
 console.log(parseFloat(valorTotal));
 console.log(typeof valorTotal);