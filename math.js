const Math = {};

function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if (x2 == 0) {
        console.log("No se puede dividir por cero");
    } else {
        return x1 / x2;
    }

}

//exports.add = add;
//exports.substract = substract;
//exports.multiply = multiply;
//exports.divide = divide;

//ahora vamos a exportar el objeto como debe ser
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math