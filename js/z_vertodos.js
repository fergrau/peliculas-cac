// funcion para generar un numero aleatorio para cargar una pagina al azar de la API
function numeroAleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = numeroAleatorio(1, 500);
console.log(randomNumber);

let pagina = "?page=" + randomNumber;

// conexión API
let response;
let datos;
let numero;

var poster = [];
var titulo = [];
var sinopsis = [];

const url = 'https://api.themoviedb.org/3/discover/movie?page=' + randomNumber;

const options = {
	method: 'GET',
	headers: {
	  accept: 'application/json',
	  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzQyNzg3OGEyOTcwZTRmOTdkZTQ5MjRiZTExNmRiYiIsInN1YiI6IjY2NTQyYzdlYTJjMzBhYTZhODliN2UwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OCu3kuSeoN7iTQT__SPy0NPLlUgAPtPV-HGFp7STIfU'
	}
};

fetch(url, options)
	.then(response => {
	// Verificar si la respuesta es exitosa
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	// Convertir la respuesta en JSON
	return response.json();
	})
	.then(data => {
	// Verificar si data no es undefined
	if (typeof data === 'undefined') {
		throw new Error('Data is undefined');
	}
	// data es el objeto arrojado por la API
	console.log('Objeto obtenido de la API:', data);

	// Iterar sobre las claves del objeto y trabajar con cada array
	Object.keys(data).forEach(key => {
		const array = data[key];

		// Verificar que el valor sea un array
		if (Array.isArray(array)) {
		console.log(`Array ${key}:`, array);

		// Trabajar con los arrays obtenidos
		var indice = 0;

		array.forEach(item => { // tomo los elementos que necesito de cada item y los guardo en array por categoria
			console.log(`Elemento de ${key}:`, item);
			
			poster.push(item.poster_path);
			titulo.push(item.title);
			sinopsis.push(item.overview);
			
		});
		 
		// INTERACCION DATOS <--> HTML
		// (itera los elementos del array en cada parte del HTML)

		for (var n=0; n<20; n++) {

			// console.log(titulo[n]) // control

			var tit = "t"+n;
			var ima = "i"+n;
			var pos = poster[n]
			const dir = "'https://image.tmdb.org/t/p/original" + pos + "'";

			document.getElementById(tit).innerText = titulo[n]
			document.getElementById(ima).innerHTML = "<img src=" + (dir) + ">";

			// INCORPORAR ESTA LINEA CUANDO TENGA EL CSS 
			// DE LA SINOPSIS EN MODAL (incorporar el id en los <P> !!)
			// var sin = "s"+n;
			// document.getElementById(sin).innerText = sinopsis[n];
		}
		} 
	});
	})
	.catch(error => {
	// Manejo de errores
	console.error('Hubo un problema con la solicitud de la API:', error);
});




