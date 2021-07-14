const myDB = window.localStorage;
let ticketContainer = document.querySelector(".ticket-container");
let allFilterClasses=["red","green","blue","yellow","black"]

function loadTicketFromDB() {
    let allTickets = myDB.getItem("allTickets");
    allTickets = JSON.parse(allTickets);
    for (let i = 0; i < allTickets.length; i++) {
        let ticketInfoObject = allTickets[i];
        appendTicket(ticketInfoObject);
    }
}
loadTicketFromDB();

function loadSelectedTicketFromDb(activefilter) {
    let allTickets = myDB.getItem("allTickets");
    allTickets = JSON.parse(allTickets);
    for (let i = 0; i < allTickets.length; i++) {
        let ticketInfoObject = allTickets[i];
        if(ticketInfoObject.ticketFilter==activefilter)
        appendTicket(ticketInfoObject);
    }
}

function saveTicketToDB(ticketInfoObject) {
    let allTickets = myDB.getItem("allTickets");
    if (allTickets) {
        allTickets = JSON.parse(allTickets);
        allTickets.push(ticketInfoObject);
        myDB.setItem("allTickets", JSON.stringify(allTickets));

    }
    else {
        allTickets = [];
        allTickets.push(ticketInfoObject);
        myDB.setItem("allTickets", JSON.stringify(allTickets));
    }
}
function appendTicket(ticketInfoObject) {
    let { ticketFilter, ticketText, ticketId } = ticketInfoObject;
    let div = document.createElement("div");
    div.classList.add("ticket");
    div.innerHTML = `<div class="ticket-header ${ticketFilter}"></div>
  <div class="ticket-content">
      <div class="ticket-info">
          <div class="ticket-id">${ticketId}</div>
          <div class="ticket-delete fas fa-trash"></div>
  
  </div>
  <div class="ticket-value">
      ${ticketText}
  </div>
  </div>`
    ticketContainer.append(div);
    //Implementing ticket header button
    let ticketHeaderDiv=div.querySelector(".ticket-header");
    ticketHeaderDiv.addEventListener("click",function(e){
         let currentFilter=e.target.classList[1];
         let indexOfCurrentFilter=allFilterClasses.indexOf(currentFilter);
         let newIndex=(indexOfCurrentFilter+1)%allFilterClasses.length;
         let newFilter=allFilterClasses[newIndex];

         e.target.classList.remove(currentFilter);
         e.target.classList.add(newFilter);

         //store it to Db
         let allTickets=JSON.parse(myDB.getItem("allTickets"));
         for(let i=0;i<allTickets.length;i++){
             if(allTickets[i].ticketId==ticketId){
                 allTickets[i].ticketFilter=newFilter;
             }
         }
         myDB.setItem("allTickets",JSON.stringify(allTickets));

    })

    //Implementing delete button
    let deletebutton = div.querySelector(".ticket-delete");
    deletebutton.addEventListener("click", function (e) {
        div.remove();
        deleteTicketFromDb(ticketId);
    })
}
/* <div class="ticket">
<div class="ticket-header"></div>
<div class="ticket-content">
  <div class="ticket-info">
      <div class="ticket-id">exampleId</div>
      <div class="ticket-delete"><i class="fas fa-trash"></i></div>

</div>
<div class="ticket-value">
  Apply CSS
</div>
</div>
</div> */
function deleteTicketFromDb(ticketId) {
    let allTickets = myDB.getItem("allTickets");
    allTickets = JSON.parse(allTickets);
    //[{ticketObject1},{2},{3},...]
    let updatedTickets = allTickets.filter(function (ticketObject) {
        if (ticketObject.ticketId == ticketId) {
            return false //that means ticket object will not be included
        }
        return true//ticket object will be included
    })
    myDB.setItem("allTickets", JSON.stringify(updatedTickets));
}
