module.exports = {
    calculadora: (n1, n2) =>
        {
            let resultado = parseInt(n1) + parseInt(n2);
            return `el resultado de ${n1} + ${n2} es igual a ${resultado}`;
            // es lo mismo que decir
            //return "el resultado de "+n1+" + "+n2+" es igual a "+resultado
        }
}