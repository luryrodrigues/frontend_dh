function pegarDados(){
  let nome = prompt('Digite seu nome:');
  let idade = prompt('Digite sua idade:');
  let profissao = prompt('Digite sua profissão:');

  if(nome.trim() == '' || idade.trim() == '' || profissao.trim() == '') {
    alert('Por favor, digite todas as informações requisitadas!')
    pegarDados();
  } else {
    let conf = confirm ('Tem certeza que seus dados estão corretos?')
    if (conf == false) {
      pegarDados();
    } else {
      document.getElementById('nome').innerHTML += ' ' + nome;
      document.getElementById('idade').innerHTML += ' ' + idade;
      document.getElementById('profissao').innerHTML += ' ' + profissao;
    };
  };
};

pegarDados();
document.querySelector('h1').style.textAlign = 'center';
document.getElementById('dados').style.textAlign = 'center';