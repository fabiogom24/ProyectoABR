// Cargar contenido de un archivo .txt o .html
function cargarContenido(url, elemento) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      elemento.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

// Obtener referencia al elemento con id "content"
var contentElement = document.getElementById("content");

// Cargar contenido del archivo "archivo.txt" y agregarlo al elemento
cargarContenido("archivo.txt", contentElement);

