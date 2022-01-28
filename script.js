
function insert(num){
var numero = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = numero + num
}

function clean(){/*limpar tudo*/
    document.getElementById('resultado').innerHTML = "";
}

function back(){/*função de apagar um número*/
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){/*Funcção de calcular (=)*/
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('resultado').innerHTML = "Nada..."
    }
    
}
