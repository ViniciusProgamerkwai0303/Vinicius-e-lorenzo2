var peso;
var altura;
var imc;
var resultado;

//1 recebendo um alert
 function calcular(event){
    //refresh dos inputs

    event.preventDefault();
    //alert('Teste');

    //recebendo os dados digitados pelo usuário
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    //calculo do imc
    imc = peso/(altura*altura);

    //testando a recepção dos valores de peso e altura
    //e testando o cálculo do imc
    console.log(peso);
    console.log(altura);
    console.log(imc);
    
    resultado = document.getElementById('resultado');
    if(imc<17){
        resultado.innerHTML = '</br> Seu resultado foi: '+ imc.toFixed(2)+'</br>Cuidado você está muito abaixo do peso';
    } else if(imc>=17&&imc<18.5){
        resultado.innerHTML = '</br> Seu resultado foi: '+ imc.toFixed(2)+'</br>Cuidado você está abaixo do peso';
    }else if(imc>=18.5&&imc<25){
        resultado.innerHTML = '</br> Seu resultado foi: '+ imc.toFixed(2)+'</br>Parabéns você está peso ideal';
    }else if(imc>=25&&imc<30){
        resultado.innerHTML = '</br> Seu resultado foi: '+ imc.toFixed(2)+'</br>Cuidado você está acima do peso';
    }else if(imc>=30){
        resultado.innerHTML = '</br> Seu resultado foi: '+ imc.toFixed(2)+'</br>Cuidado você está com obesidade';
    
    }




 }

 

