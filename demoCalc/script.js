function calcula(cadenaOperacion){
    const operadoresValidos = ['+','-','*','/']
    let operador = "";
    let numeros = [];
    let resultado = 0;

    for (i in cadenaOperacion){
        let simboloActual = cadenaOperacion[i]
        if (operadoresValidos.includes(simboloActual)){
            operador = simboloActual
        }
    }

    numeros = cadenaOperacion.split(operador);

    if (operador === '+'){
        resultado = parseInt(numeros[0]) + parseInt(numeros[1])
    } else if (operador === '-'){
        resultado = parseInt(numeros[0]) - parseInt(numeros[1])
    } else if (operador === '*'){
        resultado = parseInt(numeros[0]) * parseInt(numeros[1])
    } else if (operador === '/'){
        resultado = parseInt(numeros[0]) / parseInt(numeros[1])
    }

    return resultado
}