// MODAL
document.addEventListener('DOMContentLoaded', (event) => {
  // Obtener elementos
  const modal = document.getElementById("myModal");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Cerrar el modal al hacer clic en el botón de cerrar (x)
  closeBtn.onclick = function() {
      modal.style.display = "none";
  }

  // Cerrar el modal al hacer clic fuera del contenido del modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});

// JS FORMULARIO LOGIN / REGISTRO 

console.log('archivo js ok');

var selectedValue;

// API Paises para Dropdown:
document.addEventListener('DOMContentLoaded', () => {
  const countryDropdown = document.getElementById('countryDropdown');

  // Función para cargar países desde la API
  async function loadCountries() {
      try {
          const response = await fetch('https://restcountries.com/v3.1/all');
          if (!response.ok) {
              throw new Error('Error al recibir: ' + response.statusText);
          }
          const countries = await response.json();

          // Ordenar los países alfabéticamente
          countries.sort((a, b) => {
              if (a.name.common < b.name.common) {
                  return -1;
              }
              if (a.name.common > b.name.common) {
                  return 1;
              }
              return 0;
          });

          // Crear y añadir las opciones al dropdown
          countries.forEach(country => {
              const option = document.createElement('option');
              option.value = country.cca2; // Código de país de 2 letras
              option.textContent = country.name.common; // Nombre del país
              countryDropdown.appendChild(option);
          });
      } catch (error) {
          console.error('Error al cargar la lista de países:', error);
      }
  }
  // Función para manejar el cambio de selección en el dropdown
  function handleSelectionChange() {
    selectedValue = countryDropdown.value;
  }

  // Agregar event listener al dropdown para el evento 'change'
  countryDropdown.addEventListener('change', handleSelectionChange);
    // Llama a la función para cargar los países
  loadCountries();
});

// Carga de página con funcion registro() como default
registro();

// Selectores Login <-> Registro
function crearU() {
  document.getElementById('h11').classList.remove('hidden');
  document.getElementById('form1').classList.remove('hidden');
  document.getElementById('botonRegistrar').classList.remove('hidden');
  document.getElementById('h12').classList.add('hidden');
  document.getElementById('form2').classList.add('hidden');
  document.getElementById('botonIngresar').classList.add('hidden');    
}
function registro() {
  document.getElementById('h12').classList.remove('hidden');
  document.getElementById('form2').classList.remove('hidden');
  document.getElementById('botonIngresar').classList.remove('hidden'); 
  document.getElementById('h11').classList.add('hidden');
  document.getElementById('form1').classList.add('hidden');
  document.getElementById('botonRegistrar').classList.add('hidden');
}

// LOGIN / INICIAR SESION

var check2 = document.getElementById('check2').checked;
console.log(check2);
// Array con dominios conocidos de mail para chequear validez:
var arrayMail = ['gmail', 'hotmail', 'msn', 'icloud', 'microsoft', 'yahoo'];
var mailOk = false; // Variable para validación


// Validación de los campos con detalles de los errores
// carga los errores en un array para arrojarlos juntos en un modal
function iniciar2() {
  var mail2 = document.getElementById('mail2').value;
  var psw2 = document.getElementById('psw2').value;
  var check2 = document.getElementById('check2').checked;
  var tmp = 0; // variable de control, para mostrar un mensaje general caso que falten todos los datos del form
  var errores = []; //array vacío para cargar los errores, tambien para validar luego (si está vacío = login)
  const modal = document.getElementById("myModal");

  // Aquí busco @ y . para extraer el "dominio" ingresado en input
  var arroba = mail2.indexOf('@');
  var punto = mail2.indexOf('.');
  var dominio = mail2.substring(arroba+1, punto);
  console.log(dominio);
  // Aquí comparo ese dominio del input con los del arrayMail 
  if (arrayMail.includes(dominio)) {
    mailOk = true;
    console.log('mailOk'); // control
  } 

  // Aquí se chequean uno por uno los errores, y de haber alguno se carga en el array 'errores'

  if (mail2 == '') {
    errores.push("\n⚠️ Falta dirección de email");
    tmp+=1; // suma de errores (mail, pass, checkbox) si son los 3 resume el error abajo
  } else {
    if ((!mail2.includes('@')) || (!mail2.includes('.'))) {
      errores.push("\n⚠️ Dirección de email no válida");
      tmp+=1;
    } else if (mailOk == false) {
      errores.push("\n⚠️ Dominio de email desconocido");
      tmp+=1;
    }
  }
  if (psw2 == '') {
    errores.push("\n⚠️ Falta ingresar contraseña");
    tmp+=1;
  }
  if (check2 == false) {
    errores.push("\n⚠️ Acepte términos y condiciones");
    tmp+=1;
  }
  console.log(errores); // control

  // Parte final, si tiene errores: alert/modal, si no los tiene: login
  if (errores.length!=0) {
    if (tmp >= 3) { // de la variable de control: si faltan todos los campos, que resuma el mensaje
      // alert("⚠️ Complete todos los campos requeridos");
      document.getElementById('errores').innerText = "\n⚠️ Complete todos los campos\n";
      modal.style.display = "block";
      tmp = 0; // reset de variable luego de mostrar los errores
    } else {
      // alert(errores);
      document.getElementById('errores').innerText = errores;
      modal.style.display = "block";
      tmp = 0; // reset de variable luego de mostrar los errores
    }
  } else { // si el array está vacío y la variable de control es 0
    if (tmp == 0) {
      console.log('validado');
      // modificación de boton login en index y quita de boton en hamburguesa:
      // mediante LocalStorage paso los datos a las demás páginas de la web
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('isLoggedIn', true);
      }
      // ingreso a la siguiente página según lo solicitado ref Tarea para Final Integrador Front
      var nuevaPagina = '../pages/z_vertodos.html';
      window.location.href = nuevaPagina;
    }
  }
}

// REGISTRO NUEVO USUARIO
function registrarU() {
  
  var nombre1 = document.getElementById('nombre').value;
  var mail1 = document.getElementById('mail').value;
  var psw1 = document.getElementById('psw').value;
  var fecha1 = document.getElementById('fechaNac').value;
  var pais1 = selectedValue;
  var check1 = document.getElementById('check').checked;
  const modal = document.getElementById("myModal");
  var tmp = 0; // variable de control, para mostrar un mensaje general caso que falten todos los datos del form
  var errores = []; //array vacío para cargar los errores, tambien para validar luego (si está vacío = login)

  // Aquí busco @ y . para extraer el "dominio" ingresado en input
  var arroba = mail1.indexOf('@');
  var punto = mail1.indexOf('.');
  var dominio = mail1.substring(arroba+1, punto);

  console.log(dominio); // control
  
  // Aquí comparo ese dominio del input con los del arrayMail 
  if (arrayMail.includes(dominio)) {
    mailOk = true;
    console.log('mailOk');
  } 
  if (nombre1 == '') {
    errores.push("\n⚠️ Falta ingresar nombre");
    tmp+=1;
  }
  if (mail1 == '') {
    errores.push("\n⚠️ Falta dirección de email");
    tmp+=1; 
  } else {
    if ((!mail1.includes('@')) || (!mail1.includes('.'))) {
      errores.push("\n⚠️ Dirección de email no válida");
      tmp+=1;
    } else if (mailOk == false) {
      errores.push("\n⚠️ Dominio de email desconocido");
      tmp+=1;
    }
  }
  if (psw1 == '') {
    errores.push("\n⚠️ Falta ingresar contraseña");
    tmp+=1;
  }
  if (fecha1 == '') {
    errores.push("\n⚠️ Falta ingresar fecha");
    // tmp+=1;
  }
  if (pais1 == undefined) {
    errores.push("\n⚠️ Falta ingresar país");
    tmp+=1;
  }
  if (check1 == false) {
    errores.push("\n⚠️ Acepte términos y condiciones");
    tmp+=1;
  }
  console.log(dominio, errores, tmp, fecha1, selectedValue); //control

  if (errores.length!=0) {
    if (tmp >= 4) { 
      document.getElementById('errores').innerText = "\n⚠️ Complete todos los campos\n";
      modal.style.display = "block";
      tmp = 0; 
    } else {
      document.getElementById('errores').innerText = errores;
      modal.style.display = "block";
      tmp = 0; 
    }
  } else { 
    if (tmp == 0) {
      console.log('validado');
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('isLoggedIn', true);
      }
      var nuevaPagina = '../pages/z_vertodos.html';
      window.location.href = nuevaPagina;
    }
  }
  errores = [];
  tmp = 0;
  mailOk = false; // reset variables de control
}

function limpiarLocal(){
  localStorage.clear();
}
