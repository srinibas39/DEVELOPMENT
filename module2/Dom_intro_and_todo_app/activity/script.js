let todoAddButton=document.querySelector(".todo-add");
let todoInput=document.querySelector(".todo-adder");
todoAddButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress",addTodo)
function addTodo(event){
  if((event.type=="keypress"&& event.key=="Enter")||(event.type=="click")){
    console.log(event);
    let todoInputValue=todoInput.value;
       if(todoInputValue){
          console.log(todoInputValue);
          todoInput.value="";
       }

  }
   
}