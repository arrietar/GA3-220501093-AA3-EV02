document.getElementById("mezclaForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const vector1 = document.getElementById("vector1").value.split(",").map(n => parseInt(n.trim()));
    const vector2 = document.getElementById("vector2").value.split(",").map(n => parseInt(n.trim()));
    const resultado = document.getElementById("resultado");

    // Validación de longitud
    if (vector1.length !== 5 || vector2.length !== 5) {
        resultado.innerHTML = "<p class='error'>Cada vector debe tener exactamente 5 elementos.</p>";
        return;
    }

    // Validación de orden ascendente
    const estaOrdenado = (vec) => vec.every((v, i, arr) => i === 0 || v >= arr[i - 1]);
    if (!estaOrdenado(vector1) || !estaOrdenado(vector2)) {
        resultado.innerHTML = "<p class='error'>Los vectores deben estar ordenados ascendentemente.</p>";
        return;
    }

    // Mezcla ordenada
    const mezcla = [];
    let i = 0, j = 0;
    while (i < vector1.length && j < vector2.length) {
        if (vector1[i] <= vector2[j]) {
            mezcla.push(vector1[i]);
            i++;
        } else {
            mezcla.push(vector2[j]);
            j++;
        }
    }

    // Añadir elementos restantes
    while (i < vector1.length) mezcla.push(vector1[i++]);
    while (j < vector2.length) mezcla.push(vector2[j++]);

    resultado.innerHTML = `
        <p><strong>Vector mezclado:</strong> ${mezcla.join(", ")}</p>
    `;
});