const todoList = [];
const todoList2 = [];
const todoList3 = [{
  name: 'wash clothes', 
  date: '31-05-2024'
}];

renderTodoList();

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  if (name.length < 3) {
    return;
  }
  todoList.push(name);
  console.log(todoList);
  inputElement.value = '';
};

function addTodo2(){
  const inputElement = document.querySelector('.js-name-input2');
  const name = inputElement.value;
  if (name.length < 3) {
    return;
  }
  todoList2.push(name);
  inputElement.value = '';
  let i, text='';
  for (i=0;i<todoList2.length; i++) {
    text += todoList2[i] + "<br>"
  };
  document.querySelector('.js-show-list').innerHTML = text;
};

function addTodo3(){
  const inputNameElement = document.querySelector('.js-todo-input3');
  const name = inputNameElement.value;
  const inputDateElement = document.querySelector('.js-todo-date');
  const date = inputDateElement.value;
  if (name.length && !isNaN(date)) {
    return;
}; 
todoList3.push({
  name,
  date
});
inputNameElement.value = '';
inputDateElement.value = '';
renderTodoList();
};

function renderTodoList(){
  let todoListHtml = '';

  todoList3.forEach((todoObject, index)=>{
    const {name, date} = todoObject;
    const html = `
    <div> ${name} </div>
    <div> ${date} </div>
    <button onclick=" 
    todoList3.splice(${index}, 1);
    renderTodoList();"
    class="delete-todo-button"
    >Delete</button>
    `;
    todoListHtml += html;
    document.querySelector('.js-todo-list3').innerHTML = todoListHtml;
  })

  console.log(todoListHtml);  
};