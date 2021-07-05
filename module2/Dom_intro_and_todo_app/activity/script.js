let todoAddButton=document.querySelector(".todo-add");
let todoInput=document.querySelector(".todo-adder");
let todoList=document.querySelector(".todo-list-box");

todoAddButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress",addTodo);
function addTodo(event){
  if((event.type=="keypress"&& event.key=="Enter")||(event.type=="click")){
    console.log(event);
    let todoInputValue=todoInput.value;
       if(todoInputValue){
          //console.log(todoInputValue);
          appendTodo(todoInputValue);
          todoInput.value="";
       }

  }
   
}
function appendTodo(todo){
   let div= document.createElement("div");
   div.classList.add("todo-item");
   //<div class="todo-item"></div>
   let p=document.createElement("p");
   p.classList.add("todo-name");
   p.textContent=todo;
  // <p class="todo-name">Learn CSS(User input)</p>
   
   let del=document.createElement("button");
   del.classList.add("todo-button");
   del.textContent="Delete";
   del.addEventListener("click", deleteButton);
  
   
   div.append(p);
   div.append(del);
   todoList.append(div);
  
 }
 function deleteButton(e){
   // console.log(e);
    e.target.parentNode.remove();
   }

  
 


