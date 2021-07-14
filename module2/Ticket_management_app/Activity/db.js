const myDB=window.localStorage;
let ticketContainer = document.querySelector(".ticket-container");

function loadTicketFromDB(){
 let allTickets=myDB.getItem("allTickets");
 allTickets=JSON.parse(allTickets);
 for(let i=0;i<allTickets.length;i++){
     let ticketInfoObject=allTickets[i];
     appendTicket(ticketInfoObject);
 }
}
loadTicketFromDB();

function saveTicketToDB(ticketInfoObject){
    let allTickets=myDB.getItem("allTickets");
    if(allTickets){
         allTickets=JSON.parse(allTickets);
         allTickets.push(ticketInfoObject);
         myDB.setItem("allTickets",JSON.stringify(allTickets));

    }
    else{
        allTickets=[];
        allTickets.push(ticketInfoObject);
        myDB.setItem("allTickets",JSON.stringify(allTickets));
    }
}
function appendTicket(ticketInfoObject) {
    let { ticketFilter, ticketText, ticketId} = ticketInfoObject;
    let div = document.createElement("div");
    div.classList.add("ticket");
    div.innerHTML = `<div class="ticket-header ${ticketFilter}"></div>
  <div class="ticket-content">
      <div class="ticket-info">
          <div class="ticket-id">${ticketId}</div>
          <div class="ticket-delete"><i class="fas fa-trash"></i></div>
  
  </div>
  <div class="ticket-value">
      ${ticketText}
  </div>
  </div>`
    ticketContainer.append(div);
  }