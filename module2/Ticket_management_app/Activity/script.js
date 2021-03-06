let filters = document.querySelectorAll(".filter");
//["red","blue","green"...]
let openmodal = document.querySelector(".openmodal");
let closemodal = document.querySelector(".closemodal");


let ticketModalOpen = false;
let isTextTyped = false;
for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", selectfilter)
}
openmodal.addEventListener("click", openTicketModal);
closemodal.addEventListener("click", closeTicketModal);
function selectfilter(e) {
  if(e.target.classList.contains("active-filter")){
     e.target.classList.remove("active-filter");
    ticketContainer.innerHTML="";
    loadTicketFromDB();
  }
  else{
    if(document.querySelector(".active-filter")){
      document.querySelector(".active-filter").classList.remove("active-filter");
    }
       
       e.target.classList.add("active-filter");
       ticketContainer.innerHTML="";
       let activefilter=e.target.classList[1];
       loadSelectedTicketFromDb(activefilter);
  }
  /*console.log(e);
  let selectedFilter = e.target.classList[1];
  console.log(selectedFilter);
  if (ticketContainer.classList.length > 1) {
    ticketContainer.classList.remove(ticketContainer.classList[1]);
  }
  ticketContainer.classList.add(selectedFilter);*/
}

function openTicketModal(e) {
  if (ticketModalOpen) {
    return;
  }
  isTextTyped = false;
  // console.log(e);
  let ticketModal = document.createElement("div");
  ticketModal.classList.add("ticket-modal");
  ticketModal.innerHTML = `<div class="ticket-text" ContentEditable="true" spellcheck="false">Write Here!</div>
  <div class="ticket-filters">
      <div class="ticket-filter red selected-filter"></div>
      <div class="ticket-filter green"></div>
      <div class="ticket-filter blue"></div>
      <div class="ticket-filter yellow"></div>
      <div class="ticket-filter black"></div>
  </div>`;
  let body = document.querySelector("body");
  body.append(ticketModal);
  ticketModalOpen = true;
  let ticketTextDiv = document.querySelector(".ticket-text");
  ticketTextDiv.addEventListener("keypress", handleKeyPress);
  let ticketFilters = document.querySelectorAll(".ticket-filter");
  for (let i = 0; i < ticketFilters.length; i++) {
    ticketFilters[i].addEventListener("click", function (e) {
      if (e.target.classList.contains("selected-filter")) {
        return;
      }
      document.querySelector(".selected-filter").classList.remove("selected-filter");
      e.target.classList.add("selected-filter");
    })
  }

}
function closeTicketModal(e) {
  if (ticketModalOpen) {
    document.querySelector(".ticket-modal").remove();
    ticketModalOpen = false;
    isTextTyped = false;
  }
}
function handleKeyPress(e) {
  if (e.key == "Enter" && isTextTyped && e.target.textContent) {
    let selectedFilter = document.querySelector(".selected-filter").classList[1];
    //console.log(selectedFilter);
    let ticketId=uniqueId();
    ticketInfoObject = { ticketFilter: selectedFilter, ticketText: e.target.textContent , ticketId:ticketId};
    appendTicket(ticketInfoObject);
    closemodal.click();
    saveTicketToDB(ticketInfoObject);
  }
  if (!isTextTyped) {
    isTextTyped = true;
    e.target.textContent = "";
  }


}

