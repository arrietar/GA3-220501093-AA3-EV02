function calcularFigura() {
    const figura = document.getElementById('figura').value;
    const operacion = document.getElementById('operacion').value;
    const inputs = document.querySelectorAll('#inputs input');
    const valores = {};

    inputs.forEach(input => valores[input.id] = parseFloat(input.value));

    let resultado;

    switch (figura) {
        case 'triangulo':
            if (operacion === 'area') {
                resultado = (valores.base * valores.altura) / 2;
            } else {
                resultado = valores.a + valores.b + valores.c;
            }
            break;
        case 'rectangulo':
            if (operacion === 'area') {
                resultado = valores.base * valores.altura;
            } else {
                resultado = 2 * (valores.base + valores.altura);
            }
            break;
        case 'cuadrado':
            if (operacion === 'area') {
                resultado = Math.pow(valores.lado, 2);
            } else {
                resultado = 4 * valores.lado;
            }
            break;
        case 'circulo':
            if (operacion === 'area') {
                resultado = Math.PI * Math.pow(valores.radio, 2);
            } else {
                resultado = 2 * Math.PI * valores.radio;
            }
            break;
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(2)}`;
}

// Generar inputs dinámicos según figura
const figuraSelect = document.getElementById('figura');
const operacionSelect = document.getElementById('operacion');
const inputsDiv = document.getElementById('inputs');

figuraSelect.addEventListener('change', actualizarInputs);
operacionSelect.addEventListener('change', actualizarInputs);

function actualizarInputs() {
    const figura = figuraSelect.value;
    let html = '';
    switch (figura) {
        case 'triangulo':
            html = `
                <input id="base" type="number" placeholder="Base">
                <input id="altura" type="number" placeholder="Altura">
                <input id="a" type="number" placeholder="Lado a">
                <input id="b" type="number" placeholder="Lado b">
                <input id="c" type="number" placeholder="Lado c">
            `;
            break;
        case 'rectangulo':
            html = `
                <input id="base" type="number" placeholder="Base">
                <input id="altura" type="number" placeholder="Altura">
            `;
            break;
        case 'cuadrado':
            html = `<input id="lado" type="number" placeholder="Lado">`;
            break;
        case 'circulo':
            html = `<input id="radio" type="number" placeholder="Radio">`;
            break;
    }
    inputsDiv.innerHTML = html;
}

actualizarInputs();