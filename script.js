let screen = document.getElementById('screen');
const buttons = document.querySelectorAll("#buttons a");

for (const button of buttons){
  button.addEventListener('click', function(e) {
    e.preventDefault();

    if(e.target.dataset.key == 'equal') {
      screen.textContent = eval(screen.textContent);
      if (screen.textContent.length > 8) {
        screen.textContent = eval(screen.textContent).toFixed(8);
      }
    } else if(e.target.dataset.key == 'clear') {
      screen.textContent = '';
    } else {
      screen.textContent = screen.textContent + e.target.dataset.key;
    }
  });
}

function funcionBoton(){
  alert("Soy un PopUp! :)");
}

var mostrarDialogBtn = document.getElementById("mostrarDialog");
var dialog = document.getElementById("miDialog");
var siBtn = document.getElementById("siBtn");
var noBtn = document.getElementById("noBtn");

mostrarDialogBtn.addEventListener("click", function() {
  dialog.show();
});

siBtn.addEventListener("click", function() {
  dialog.close();
  realizarAccion();
});

noBtn.addEventListener("click", function() {
  dialog.close();
});

function realizarAccion() {
  console.log("Acción realizada...!!!!");
}

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  //Simula la autenticación exitosa
  setTimeout(function() {
    alert('Sesión iniciada');
    // Redirigir a la página principal
    window.location.href = 'inicioSesion.html';
  }, 1000); // El tiempo puede cambiar
});