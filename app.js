let textoUsuario = "";
let textoFinal;

// Función para encriptar el texto
function btnEncriptar() {
  textoUsuario = document.getElementById("textoUsuario").value;
  textoFinal = "";

  for (let i = 0; i < textoUsuario.length; i++) {
    switch (textoUsuario[i]) {
      case "a":
        textoFinal += "ai";
        break;
      case "e":
        textoFinal += "enter";
        break;
      case "i":
        textoFinal += "imes";
        break;
      case "o":
        textoFinal += "ober";
        break;
      case "u":
        textoFinal += "ufat";
        break;
      default:
        textoFinal += textoUsuario[i];
    }
  }

  actualizarResultado(textoFinal);
}

// Función para desencriptar el texto
function btnDesencriptar() {
  textoUsuario = document.getElementById("textoUsuario").value;
  textoFinal = "";

  for (let i = 0; i < textoUsuario.length; i++) {
    switch (textoUsuario[i]) {
      case "a":
        textoFinal += "a";
        i += 1;
        break;
      case "e":
        textoFinal += "e";
        i += 4;
        break;
      case "i":
        textoFinal += "i";
        i += 3;
        break;
      case "o":
        textoFinal += "o";
        i += 3;
        break;
      case "u":
        textoFinal += "u";
        i += 3;
        break;
      default:
        textoFinal += textoUsuario[i];
    }
  }

  actualizarResultado(textoFinal);
}

// Función para copiar el texto al portapapeles
function copiar() {
  navigator.clipboard.writeText(textoFinal);
}

// Función para actualizar el resultado en la interfaz
function actualizarResultado(resultado) {
  document.getElementById("textoUsuario").value = "";
  document.getElementById("textoRealizado").innerText = resultado;
  ocultarElementos();
}

// Función para ocultar elementos de área de desencriptación
function ocultarElementos() {
  let elementosArea = document.getElementsByClassName("textoAreaDesencriptar");
  for (let i = 0; i < elementosArea.length; i++) {
    elementosArea[i].classList.add("ocultar");
  }
}
