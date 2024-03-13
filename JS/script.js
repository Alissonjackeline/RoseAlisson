let titulo = document.querySelector(".textoTitulo i");

// Verificar si el título se encontró correctamente
if (titulo) {
  // Obtener el texto actual del título
  let textoTitulo = titulo.innerText.trim(); // Utilizar trim() para eliminar los espacios en blanco alrededor del texto
  console.log(textoTitulo);

  // Verificar si el texto del título es "ROSASEXPRESS"
  if (textoTitulo === "ROSASEXPRESS") {
    // Cambiar el texto del título
    titulo.textContent = "ALISSON OROZCO"; // Utilizar textContent en lugar de innerHTML para cambiar solo el texto
  } else {
    console.log("No se cumple la condición");
  }
} else {
  console.log("El elemento del título no se encontró");
}

let nombre = "Alisson Jackeline Orozco Silva";
let ciudad = "Piura";
let gusto = "programacion";

let parrafos = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto) {
  let contenido = `Soy ${nombre}, una programadora apasionada, resido en la ciudad de ${ciudad}, Este es mi espacio digital donde comparto mi trabajo y mi amor por la ${gusto}. Explora mis proyectos y habilidades, ¡espero que encuentres algo que te inspire!`;
  return contenido;
}

parrafos.innerText = cambiarTexto(nombre, ciudad, gusto);
