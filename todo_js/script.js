// criando array para salvar lista de todos

let todoItems = [];

//função que add novo item

function addTodo(text) {
  const todo={
    text,
    checked: false,
    id: Date.now()
  };

  todoItems.push(todo);
  console.log(todoItems);
};


const form = document.querySelector(".js-form");

//função submit

form.addEventListener("submit", event => {
  event.preventDefault();

  const input = document.querySelector(".js-todo-input");

  const text = input.value.trim();
  if(text != "") {
    addTodo(text);
    input.value = '';
    input.focus();
  };
});

// função que renderiza item na tela

function renderTodo(todo){
  const list = document.querySelector('.js-todo-list');

  const item = document.querySelector(`[data-key='${todo.id}]'`);

  //verifica se item está checkado
  const isChecked = todo.checked ? 'done' : '';      //if ternario

  //elemento que vai ser renderizado
  const node = document.createElement('li');

  // adicionar classe no li
  node.setAttribute('class', `todo-item ${isChecked}`);

  //criando novo atributo
  node.setAttribute('data-key', todo.id); 

  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
  `;

  if(item){
    list.replaceChild(node,item)
  } else  {
    list.append(node);
  }
  
};

const list = document.querySelector('.js-todo-list');

list.addEventListener('click', event => {
  if(event.target.classList.contains('js-tick')){
    const itemKey = event.target.parentElement.dataset.key;
    toogleDone(itemKey);
  };
});

function toogleDone(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));

  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}


renderTodo();
toogleDone();