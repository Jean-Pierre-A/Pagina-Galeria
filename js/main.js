window.onload = () =>{
    alert("BIENVENIDO A LA GALERÍA CON LAS MEJORES MOTOCICLETAS 2021");
}

document.getElementById("btn-registrarse").addEventListener("click",registar);

let Userlist = [];
let a = document.getElementById("btn-registrarse");
if (a) {
  a.addEventListener("click", registar);
}
let b = document.getElementById("enter-login");
if (b) {
  b.addEventListener("click", login);
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
    let pass = review(Username, Password);
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
function review(username, password) {
  let Userlist = getUserlist();
  let pass = false;

  for (let i = 0; i < Userlist.length; i++) {
    if (username == Userlist[i][0] && password == Userlist[i][1]) {
      pass = true;
    }
  }
  return pass;
}

function login() {
  let Username = "",
    Password = "";

  Username = document.getElementById("username").value;
  Password = document.getElementById("user-password").value;
  if (Username != "" && Password != "") {
    let pass = review(Username, Password);
    if (pass == true) {
      window.location.href = "galeria.html";
    } else {
      alert("Usuario no existe");
    }
  }else{
      alert('Ingrese todos los campos');
  }
}