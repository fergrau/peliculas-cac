<h3>Historial de Actualizaciones:</h3><br>

<b>27/5</b>

∙ Login y página API incorporadas y en funcionamiento. <br>
∙ Cambios estéticos menores en botones nav superior y optimización de algunos fragmentos del código en general. <br>
∙ API: Se utilizó The Movie DataBase (TMDB), devuelve una página al azar entre 1 y 500 disponibles, con 20 objetos por cada página. Los datos se muestran en grid iterando cada uno en cada sitio del html. Queda pendiente iterar también el código html e incluir todo el fragmento de cada iteración por .appendChild o método similar. <br>
∙ La página web es funcional, todas las películas presentadas en el index se pueden ver. El login/logout mantiene el status entre sesiones y hasta que el usuario lo cambie. Todas las páginas se encuentran interconectadas y es posible una navegación prácticamente completa. <br>
∙ <i> Nota: estimo que usaremos el Backend para hacer funcional el campo de búsqueda y en el caso de mi web los accesos discriminados por Género de película <i><br>

<b>22/5</b>

∙ Branch "v3". Incorporación de Javascript.
∙ Página de Inicio de Sesión y Registro: formularios intercambiables mediante link crear/iniciar. Registra los errores (mail incorrecto, dominio desconocido, falta de psw, checkbox sin marcar, etc), los captura mediante una variable de control y recolecta los errores en un Array para mostrarlos en un Modal al hacer click en el botón submit. Caso Array vacío y variable de control en 0 = login. También chequea que el input de mail contenga @ y . en la dirección, y a modo ejemplo también que el fragmento de string ingresado entre @ y el . en el mail sea válido, comparandolo con un Array preexistente con dominios conocidos (google, hotmail, yahoo, msn, etc). Caso todos los campos sean faltantes, los errores se resumen en un único mensaje dentro del Modal (en lugar de acumular los individuales).<br>
∙ Se eliminó botón 'Series' y se incluyó un nuevo botón 'Iniciar Sesion'. Al loguearse se guarda como true una variable de status mediante localStorage; ésta es leída en el index y las demás páginas para cambiar el botón de 'Iniciar Sesión' por uno de 'Sesión iniciada', modificando asimismo su estilo visual. Hover mediante JS para mostrar la opción de 'Cerrar Sesión' al pasar el puntero sobre el botón de 'Sesión Iniciada' (mouseover y mouseout); Evento onclick sobre este botón para setear a false la variable y resetear todo el botón en cuestión, mostrando nuevamente 'Iniciar Sesión'. Si se hace click en él, devuelve a la ventana de Login/Registro como al cargar la primera vez. <br>
∙ <i> Nota: en alguna que otra ocasión no conecta con la API para la carga de paises. Este error es aleatorio y la solución es resetear la conexión mediante cierre y re-apertura de la página. Aun investigando si sea un error de Network propio de la API (como parece sugerir el error por consola devuelto en el catch) o alguna instancia de mi web. </i> <br>

<b>23/4</b>

∙ Creado Branch "v2" con nuevas actualizaciones: <br>
∙ En versión móvil: en menú hamburguesa, añadido de input Buscar y menú desplegable Géneros dentro, mediante hover. <br>
∙ Acceso a página "Todas las películas" (página en construcción). <br>

<b>21/4</b>

∙ Disponibles 10 títulos reproducibles. <br>
∙ Todas las películas tienen su página propia (reemplazo de 'verpeliculas.html' genérico por 10 .html individuales). <br>
∙ Página navegable hacia, desde y entre las películas. <br>
∙ Añadido botón para ver todos los títulos en index. <br>
∙ Animaciones en todos los botones y accesos (excepto footer por minimalismo). <br>
∙ Optimización de los Queries para los modos tablet y móvil. <br>
∙ Oscurecimiento del background del index (backdrop-filter) para mejorar la visualización del contenido. <br>
∙ Cambio de background-image para los modos tablet y móvil por ByN en peso reducido para optimizar consumo de datos. <br>
∙ Eliminación de bordes y paddings del main (concepto de diseño previo). <br>

<b>19/4 (y anterior) </b>

∙ Responsive web design (desktop, small desktop, tablet y móvil). <br>
∙ Disponible 1 título reproducible con su propia página (modo prueba). <br>
∙ Vinculos hacia y desde página de reproducción de película. <br>
∙ Animaciones en logo del index y de 'verpeliculas'. <br>
∙ Animaciones en la mayoría de los botones. <br>
∙ Oultamiento / visualización del menú desplegable Géneros en nav según visualización / ocultamiento del aside al cambiar las dimensiones del viewport, evitando redundancia. <br>

---------------
<h4>Pendientes:</h4>

∙ Crear sección Series e incorporar sus respectivas páginas y contenido. <br>
∙ Cargar > 20 títulos más. <br>
∙ Incorporar flechas a los laterales de los sliders para desplazamiento horizontal sin trackpad (a espera de JS). <br>

---------------
<h3> Notas:</h3>

∙ No se incluye Bootstrap debido a que modifica de manera importante el código ya escrito, y pese a los múltiples árduos intentos paliativos. <br>
∙ Directorio /master = contenedor interno para elementos de construcción del sitio. Incluye 'códigos plantilla' y paleta de colores. <br>
∙ Branch 'v2' (actual default) creado por modificaciones importantes sobre código funcional primario (main). 

