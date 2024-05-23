
if (typeof(Storage) !== "undefined") {
    document.addEventListener('DOMContentLoaded', (event) => {
        var isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn) {
            document.getElementById('login').style.display = "none";
            document.getElementById('spanLogin1').style.display = "none";
            document.getElementById('login2').style.display = "inherit";
            document.getElementById('spanLogin2').style.display = "inherit";
        }

        console.log(isLoggedIn); // control
    });
}

// hover del boton de estado de Login
var login2 = document.getElementById('login2');

document.getElementById('login2').addEventListener('mouseover', function() {
    document.getElementById('spanLoginA').style.display = "none";
    document.getElementById('spanLoginB').style.display = "initial";
    login2.classList.add("login3")
});
document.getElementById('login2').addEventListener('mouseout', function() {
    document.getElementById('spanLoginB').style.display = "none";
    document.getElementById('spanLoginA').style.display = "initial";
    login2.classList.remove("login3")
});

function salir() {
    if (typeof(Storage) !== "undefined") {
        localStorage.clear();
        document.getElementById('login').style.display = "inherit";
        document.getElementById('spanLogin1').style.display = "inherit";
        document.getElementById('login2').style.display = "none";
        document.getElementById('spanLogin2').style.display = "none";
    }
}
