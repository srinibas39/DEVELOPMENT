let filters=document.querySelectorAll(".filter");
//["red","blue","green"...]
let openmodal=document.querySelector(".openmodal");
let ticketContainer=document.querySelector(".ticket-container");
for(let i=0;i<filters.length;i++){
  filters[i].addEventListener("click",selectfilter)
}
openmodal.addEventListener("click",openTicketModal);
function selectfilter(e){
  console.log(e);
  let selectedFilter=e.target.classList[1];
  //console.log(selectedFilter);
  if(ticketContainer.classList.length>1){
      ticketContainer.classList.remove(ticketContainer.classList[1]);
  }
  ticketContainer.classList.add(selectedFilter);
}
function openTicketModal(e){
  console.log(e);
  let ticketModal=document.createElement("div");
  ticketModal.classList.add("ticket-modal");
  ticketModal.innerHTML=`<div class="ticket-text"></div>
  <div class="ticket-filters">
      <div class="ticket-filter red"></div>
      <div class="ticket-filter green"></div>
      <div class="ticket-filter  blue"></div>
      <div class="ticket-filter  yellow"></div>
      <div class="ticket-filter  black"></div>
  </div>`;
  let body=document.querySelector("body");
 body.append(ticketModal);


}