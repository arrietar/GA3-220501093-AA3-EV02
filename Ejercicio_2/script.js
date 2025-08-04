document.getElementById("edadForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const resultados = document.getElementById("resultados");
    resultados.innerHTML = "";

    const edadesInput = document.getElementById("edades").value.trim();
    const edades = edadesInput.split(",").map(e => parseInt(e.trim()));

    if (edades.length !== 10) {
        resultados.innerHTML = "<p class='error'>Por favor ingrese exactamente 10 edades, separadas por comas.</p>";
        return;
    }

    let menores = 0;
    let mayores = 0;
    let adultosMayores = 0;
    let suma = 0;
    let edadMin = 120;
    let edadMax = 1;

    for (let edad of edades) {
        if (isNaN(edad) || edad < 1 || edad > 120) {
            resultados.innerHTML = `<p class='error'>Edad inválida detectada: ${edad}. Todas las edades deben estar entre 1 y 120 años.</p>`;
            return;
        }
        if (edad < 18) menores++;
        if (edad >= 18) mayores++;
        if (edad >= 60) adultosMayores++;

        if (edad < edadMin) edadMin = edad;
        if (edad > edadMax) edadMax = edad;
        suma += edad;
    }

    const promedio = (suma / edades.length).toFixed(2);

    resultados.innerHTML = `
        <h3>Resultados:</h3>
        <ul>
            <li><strong>Menores de edad:</strong> ${menores}</li>
            <li><strong>Mayores de edad:</strong> ${mayores}</li>
            <li><strong>Adultos mayores:</strong> ${adultosMayores}</li>
            <li><strong>Edad más baja:</strong> ${edadMin}</li>
            <li><strong>Edad más alta:</strong> ${edadMax}</li>
            <li><strong>Promedio de edades:</strong> ${promedio}</li>
        </ul>
    `;
});