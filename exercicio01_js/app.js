function selectId (id) {
  return document.getElementById(id);
};

function getInputValues(value){
  return value.addEventListener("keyup", function(){
    console.log(this.value);
  });
};

function emptyInput (input) {
  return input.value.trim() === "";
};

function errorMessage(message) {
  errorListUl.innerHTML += "<li>" + message + "</li>";
};

let form = selectId('contato');
let nome = selectId('nome');
let idade = selectId('idade');
let profissao = selectId('profissao');
let dados = selectId('dados')
let errorListUl = document.querySelector("#error-list ul");
let errorList = selectId('error-list');

getInputValues(nome);

getInputValues(idade);

getInputValues(profissao);

window.addEventListener('load', function() {
  form.addEventListener("submit", function(ev){
    
    errorListUl.innerHTML = ""

    let conf = confirm('Seus dados estão corretos?\nNome: ' + nome.value + '\nIdade: ' + idade.value + '\nProfissão: ' + profissao.value)
    if (conf) {
      dados.innerHTML += '<li>' + nome.value + '</li>' + '<li>' + idade.value + '</li>' + '<li>' + profissao.value + '</li>'
      alert('Não será possível alterar seus dados!')
    } else {
      window.location.reload()
    };

    if(emptyInput(nome)) {
      errorMessage('Campo <b>nome</b> não preenchido;')
    };

    if(emptyInput(idade)) {
      errorMessage('Campo <b>idade</b> não preenchido;')
    };

    if(emptyInput(profissao)) {
      errorMessage('Campo <b>profissão</b> não preenchido;')
    };

    if (errorListUl.querySelectorAll('li').length > 0) {
      ev.preventDefault();
      errorList.hidden = '';
    };
  });
});