function MostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}

function Strength(password) {
    let i = 0;
    if (password.length > 6) {
      i++;
    }
    if (password.length >= 10) {
      i++;
    }
  
    if (/[A-Z]/.test(password)) {
      i++;
    }
  
    if (/[0-9]/.test(password)) {
      i++;
    }
  
    if (/[A-Za-z0-8]/.test(password)) {
      i++;
    }
  
    return i;
  }
  
  let container = document.querySelector(".container");
  document.addEventListener("keyup", function (e) {
    let password = document.querySelector("#senha").value;
  
    let strength = Strength(password);
    if (strength <= 2) {
      container.classList.add("weak");
      container.classList.remove("moderate");
      container.classList.remove("strong");
    } else if (strength >= 2 && strength <= 4) {
      container.classList.remove("weak");
      container.classList.add("moderate");
      container.classList.remove("strong");
    } else {
      container.classList.remove("weak");
      container.classList.remove("moderate");
      container.classList.add("strong");
    }
  });