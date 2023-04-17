

function product_accordion(){

    let product_accordion = document.getElementsByClassName("az-accordion");
    let i;
    
    for (i = 0; i < product_accordion.length; i++) {
        product_accordion[i].addEventListener("click", function(e) {

        let active = document.getElementsByClassName("az-accordion accordion active");

        let isActive = e.target.classList.contains('active');

        for(let j = 0; j < active.length; j++){
          active[j].classList.remove("active");
        }

        let activePanel = document.getElementsByClassName("az-accordion-panel");
        for(let p = 0; p < activePanel.length; p++){
          activePanel[p].style.maxHeight = null;
        }

        if(isActive == false){
          this.classList.toggle("active");
        }
         
        let aria_expanded = this.getAttribute("aria-expanded"); 
        if(isActive == false){
          if (aria_expanded == "true") {
              aria_expanded = "false"
          } else {
              aria_expanded = "true"
          }
          this.setAttribute("aria-expanded", aria_expanded);
        }

        let panel = this.nextElementSibling;
        if(isActive == false){
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        }
     
      });
    }
}
product_accordion();

function product_info_reveal(){
    // Find our specific reveal if more than one on the page
    let parent_class = event.target.parentElement.classList;
    let secondRow_classnames = '.'+parent_class+' .second-row';

    // Get our rows
    const hiddenRows = document.querySelectorAll('.'+parent_class+' .hidden-rows');
    const secondRow = document.querySelector(secondRow_classnames);

    // Toggle class
    hiddenRows.forEach(hiddenRow => {
      hiddenRow.classList.toggle('hide-rows');

    });
    secondRow.classList.toggle('partial-row');
}


function SubmitForm() {

  console.log('changed');

let formId = 'dansfilter';

  var oForm = document.getElementById(formId);
  if (oForm) {
      oForm.submit(); 
  }
  else {
      alert("DEBUG - could not find element " + formId);
  }
}