function showUsername() {
    /*Obtener datos almacenados*/
    var username = localStorage.getItem('username');
    /*Mostrar datos almacenados*/
    document.getElementById("username").innerHTML = username;
}
showUsername()

function signOut() {

    var signout = window.location.replace("login.html");
    document.getElementById("signout").innerHTML = signout;
    
}
function verCarrito(){

    window.location.assign("cart.html");
    document.getElementById("vercarrito").innerHTML;
}

