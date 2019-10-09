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
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      window.location = "login.html"
    });
  }