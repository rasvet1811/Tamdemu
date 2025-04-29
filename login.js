// Referencias a botones y contenedor
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Alternar entre paneles
signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Usuario quemado
const usuarioQuemado = {
  email: "admin@iush.edu.co",
  password: "1234"
};

// Función de login
function login(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === usuarioQuemado.email && password === usuarioQuemado.password) {
    // Redirige al panel principal
    window.location.href = "panel.html";
  } else {
    alert("Correo o contraseña incorrectos.");
  }
}
