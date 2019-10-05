function hacerLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    
    if (username =="anaggriffo" && password == "!Clave25"){
        window.location = "index.html"
        return false;
    }
    else{
        alert("Usuario o contraseña incorrectos, verifique los datos e intente nuevamente");
        window.location = "index.html"
        return false;
    }
}