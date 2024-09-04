
var calcular = document.getElementById('btn-calcular');



function calcularIMC(){
    var nome = document.getElementById('name-user').value
    var altura = document.getElementById('altura-user').value
    var peso = document.getElementById('peso-user').value
    var resultado = document.getElementById('res');

    if( nome.length == '' && altura.length == '' && peso.length == ''){
        window.alert('Dados nao fornecidos, preencha todos os campos')
    }else if(altura.length == ''){
        window.alert('Altura nao fornecida')
    }else if(peso.length == ''){
        window.alert('Peso nao fornecido')
    }else if(nome.length == ''){
        window.alert('Nome nao fornecido')
    }else{
        let imc = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';
        if(peso >= 18.5 && peso < 25){
            classificacao = 'Normal'
        }else if(peso >= 25 && peso < 30){
            classificacao = 'em Sobrepeso'
        }else if(peso >= 30 && peso < 35){
            classificacao = 'com <strong>Obesidade Classe I</strong>'
        }else if(peso >= 35 && peso < 40){
            classificacao = 'com Obesidade Classe II'
        }else{
            classificacao = 'com Obesidade Classe III'
        }

        resultado.innerText =`Ola ${nome},Seu IMC e ${imc}, voce esta com ${peso}kg e esta ${classificacao}`;
    }
}