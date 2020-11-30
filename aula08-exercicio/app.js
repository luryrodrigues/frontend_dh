function selectId (id) {
  return document.getElementById(id);
}

function emptyInput (input) {
  return input.value.trim() === "";
}

function errorMessage(message) {
  errorListUl.innerHTML += "<li>" + message + "</li>";
}

let form = selectId('contato');
let nome = selectId('nome');
let idade = selectId('idade');
let profissao = selectId('profissao');
let errorListUl = document.querySelector("#error-list ul");
let errorList = selectId('error-list');

form.addEventListener("submit", function(ev){
  
  errorListUl.innerHTML = ""
  
  if(emptyInput(nome)) {
    errorMessage('Campo <b>nome</b> não preenchido;')
  }

  if(emptyInput(idade)) {
    errorMessage('Campo <b>idade</b> não preenchido;')
  }

  if(emptyInput(profissao)) {
    errorMessage('Campo <b>profissão</b> não preenchido;')
  }

  if (errorListUl.querySelectorAll('li').length > 0) {
    ev.preventDefault();
    errorList.hidden = ''
  }

});
