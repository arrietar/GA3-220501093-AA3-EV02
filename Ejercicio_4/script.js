// script.js - Ejercicio 4

const personas = [];

document.getElementById("personaForm").addEventListener("submit", function(event) {
  event.preventDefault();

  if (personas.length >= 6) {
    alert("Ya se han registrado las 6 personas.");
    return;
  }

  const persona = {
    nombre: document.getElementById("nombre").value,
    cedula: document.getElementById("cedula").value,
    fechaNacimiento: document.getElementById("fechaNacimiento").value,
    correo: document.getElementById("correo").value,
    ciudadResidencia: document.getElementById("ciudadResidencia").value,
    ciudadOrigen: document.getElementById("ciudadOrigen").value,
    canciones: [
      {
        artista: document.getElementById("artista1").value,
        titulo: document.getElementById("titulo1").value
      },
      {
        artista: document.getElementById("artista2").value,
        titulo: document.getElementById("titulo2").value
      },
      {
        artista: document.getElementById("artista3").value,
        titulo: document.getElementById("titulo3").value
      }
    ]
  };

  personas.push(persona);
  alert("Persona registrada exitosamente.");
  document.getElementById("personaForm").reset();
});

document.getElementById("consultaForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const pos = parseInt(document.getElementById("posicion").value);

  if (isNaN(pos) || pos < 0 || pos >= personas.length) {
    alert("Posición inválida o aún no registrada.");
    return;
  }

  const p = personas[pos];
  const info = `
    <h3>Información de la persona en posición ${pos}</h3>
    <p><strong>Nombre:</strong> ${p.nombre}</p>
    <p><strong>Cédula:</strong> ${p.cedula}</p>
    <p><strong>Fecha de nacimiento:</strong> ${p.fechaNacimiento}</p>
    <p><strong>Correo:</strong> ${p.correo}</p>
    <p><strong>Ciudad de residencia:</strong> ${p.ciudadResidencia}</p>
    <p><strong>Ciudad de origen:</strong> ${p.ciudadOrigen}</p>
    <h4>Canciones favoritas:</h4>
    <ul>
      <li>${p.canciones[0].artista} - ${p.canciones[0].titulo}</li>
      <li>${p.canciones[1].artista} - ${p.canciones[1].titulo}</li>
      <li>${p.canciones[2].artista} - ${p.canciones[2].titulo}</li>
    </ul>
  `;

  document.getElementById("resultadoConsulta").innerHTML = info;
});