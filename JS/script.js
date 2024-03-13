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

let nombre = "Ani";
let ciudad = "Bs As";
let gusto = "Chocolate";

let parrafos = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto) {
  let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito. Me gusta el ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;
  return contenido;
}

parrafos.innerText = cambiarTexto(nombre, ciudad, gusto);
