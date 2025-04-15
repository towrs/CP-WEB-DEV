// EXERCICIO 9 - UTLIZE FLOAT PARA STRING COM DADOS DA VARIAVEL 
let numString ="250.00";
console.log(parseFloat(numString));

//Exercicio 8 crie um programa utilizando a base de texto seguinte

let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas"
console.log(texto.indexOf("em"))

let info = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas"
console.log(info.slice(40,50))

let texto1 = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas"
console.log(texto1.indexOf("ciência"))

let texto2 = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas"
console.log(texto2.indexOf("método"))

// EXERCICIO 1 - DECLARE VARIAVÉIS COM VALOR undefined, vazio e com valor 

let CPWEB;
console.log(CPWEB);

let valor = null;
console.log(valor)

let number1 = 2025;
console.log(number1)

// Exercicio 3 - IMC

let peso = parseFloat(prompt("Digite o seu peso"));
let altura = parseFloat(prompt("Digite sua Altura"));

let imc = peso / (altura **2);

console.log(`Seu IMC é de ${imc.toFixed(2)}`);

switch(true) {
case (imc < 18.5) :
    console.log("Atenção: Você está abaixo do peso ideal! Consulte um nutricionista.");
    break;

  case (imc >= 18.5 && imc < 24.9) :
    console.log("Parabéns! Você está com peso normal.");
    break;

  case (imc >= 25 && imc < 29.9) :
    console.log("Atenção: Você está com sobrepeso. Cuidado com a saúde!");
    break;

    case (imc >= 30):
        console.log("Atenção: Você está com sobrepeso. Cuidado com a saúde!");
        break;

 default:
    console.log("Atenção: Você está na faixa de obesidade. Procure orientação médica!");
  }
  