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

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);
    window.location = "index.html"
  
}
 function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }