

let Userlist = [];
let a = document.getElementById("btn-registrarse");
if (a) {
  a.addEventListener('click', registrar);
}
let b = document.getElementById("btn-login");
if (b) {
  b.addEventListener('click', inicio);
}
let c = document.getElementById("btn-contasena");
if (c) {
  c.addEventListener('click', olvido_contrasena);

}


function registrar() {

  let newUser = [],
    Username = "",
    Password = "",
    Email = "";

  Username = document.getElementById("input-name").value;
  Password = document.getElementById("input-email").value;
  Email = document.getElementById("input-contrasena").value;

  if (Username != "" && Password != "" && Email != "") {
    let pass = review(Username, Password , Email, 1);
    if (pass == false) {
      newUser.push(Username, Password, Email);
      addInUserlist(newUser);
      window.location.href = "galeria.html";
    } else {
      alert("Usuario ya registrado");
    }
  } else {
    alert("Ingrese todos los campos");
  }
}
function addInUserlist(pnewUser) {
  let Userlist = getUserlist();
  Userlist.push(pnewUser);
  localStorage.setItem("LSUserlist", JSON.stringify(Userlist));
}
function getUserlist() {
  let LocalUserlist = JSON.parse(localStorage.getItem("LSUserlist"));
  if (LocalUserlist == null) {
    LocalUserlist = Userlist;
  }
  return LocalUserlist;
}

function review(username, password,email,key) {
  let Userlist = getUserlist();
  let pass = false;

  for (let i = 0; i < Userlist.length; i++) {
    if (username == Userlist[i][0] && password == Userlist[i][2]) {
      if(key == 1){

      if(email == Userlist[i][1]){
      pass = true;
      }
    }else{
      pass = true;
    }
    }
  }
  return pass;
}

function inicio() {
  let Username = "",
    Password = "";

  Username = document.getElementById("nombre").value;
  Password = document.getElementById("contrasena").value;
  if (Username != "" && Password != "") {
    let pass = review(Username, Password, null, 0);
    if (pass == true) {
      window.location.href = "galeria.html";
    } else {
      alert("Usuario no existe");
    }
  }else{
      alert('Ingrese todos los campos');
  }
}

function olvido_contrasena(){
  let Userlist = getUserlist();
  let Username = "";
  let Email = "";
   Username = document.getElementById('nombre-conta').value;
   Email = document.getElementById('email-conta').value;
  let Password = "";

  if (Username != "" && Email != "") {
    
    for(let i = 0; i<Userlist.length; i++){

      if (Username == Userlist[i][0] && Email == Userlist[i][1]) {

        Password ='es: '+ Userlist[i][2];
        break;
      }
      else{
        Password ='No se encuentran los datos ingresados, verifique';
      }
    }
    alert('Su contraseña es   '+ Password);
  }else{
      alert('Ingrese todos los campos');
  }


}