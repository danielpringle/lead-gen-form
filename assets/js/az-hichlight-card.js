function removeActive() {

    var profileAnimation = document.getElementsByClassName('ihc-card-link')
    for (i = 0; i < profileAnimation.length; i++) {
      profileAnimation[i].classList.remove('active')
    }
  }
  
  function next() {
  
    ihc_i = ihc_i + 1; // increase i by one
    ihc_i = ihc_i % ihc_arr.length; // if we've gone too high, start from `0` again
    console.log('finished '+ihc_i);
    counter(ihc_i);
    //disable(ihc_i)
  
    var ihc_card_mobile = document.getElementById(ihc_arr[ihc_i]);
    var ihc_card_mobileHTML = ihc_card_mobile.innerHTML;
    var ihc_card_mobiledisplayContent = document.getElementById('ihc_card_display_data');
    ihc_card_mobiledisplayContent.innerHTML = "";
    ihc_card_mobiledisplayContent.innerHTML = ihc_card_mobileHTML;
    
  }
  
  function previous() {
  
    if (ihc_i === 0) { // i would become 0
      ihc_i = ihc_arr.length; // so put it at the other end of the array
    }
    ihc_i = ihc_i - 1; // decrease by one
  
    counter(ihc_i);
  
    var ihc_card_mobile = document.getElementById(ihc_arr[ihc_i]);
    var ihc_card_mobileHTML = ihc_card_mobile.innerHTML;
    var ihc_card_mobiledisplayContent = document.getElementById('ihc_card_display_data');
    ihc_card_mobiledisplayContent.innerHTML = "";
    ihc_card_mobiledisplayContent.innerHTML = ihc_card_mobileHTML;
  
   return ihc_arr[ihc_i]; // give us back the item of where we are now
  
  }
  
  function disable(ihc_i) {
    if (ihc_i <= 0) {
        document.getElementById("ihc-previous-btn").disabled = true;
        document.getElementById("ihc-next-btn").disabled = false;
        console.log('yes '+ihc_i);
    }
    if (ihc_i > 0) {
      document.getElementById("ihc-next-btn").disabled = false;
      document.getElementById("ihc-previous-btn").disabled = false;
      console.log('no '+ihc_i);
    }
    if (ihc_i >= ihc_arr.length ) {
      document.getElementById("ihc-next-btn").disabled = true;
      document.getElementById("ihc-previous-btn").disabled = false;
      console.log('maybe '+ihc_i);
    }
  }
  
  function counter(ihc_i){
  
    let link_count_display = ihc_i + Number(1);
  
    document.getElementById("counter").innerHTML =  link_count_display +' / ' +ihc_arr.length;
  }
  
  /**
   * IHC main
   */
  var ihc_card_links = document.getElementsByClassName('ihc-card-link')
  var ihc_card = document.getElementsByClassName('ihc-card')
        
    const ihc_card_one = document.querySelector('[data-id="ihc-card-1"]'); 
    ihc_card_one.classList.add("active");
    var ihc_card_onepanel = ihc_card_one.nextElementSibling;
    var ihc_card_onepanelHTML = ihc_card_onepanel.innerHTML;
    var ihc_card_onedisplayContent = document.getElementById('ihc_card_display_data');
    ihc_card_onedisplayContent.innerHTML = "";
    ihc_card_onedisplayContent.innerHTML = ihc_card_onepanelHTML;
    
    var ihc_arr = [];
    let ihc_i = 0;
  
    for (i = 0; i < ihc_card_links.length; i++) {
      ihc_card[i].style.display = 'none'
      
      ihc_arr.push(ihc_card_links[i].getAttribute('data-id'));
  
      //click event for profile 
      ihc_card_links[i].addEventListener('click', function() {
           
        // Adding content to dynemic div
        var ihc_card_panel = this.nextElementSibling
        var ihc_card_panelHTML = ihc_card_panel.innerHTML
        var ihc_card_panelDataID = this.getAttribute('data-id')
        var ihc_card_displayContent = document.getElementById('ihc_card_display_data');
        ihc_card_displayContent.innerHTML = "";
        ihc_card_displayContent.innerHTML = ihc_card_panelHTML;
        //toogle active class
        if (this.classList.contains("active")) {
            //removeActive();
            //displayContent.style.display = 'none'
            return;
        } else {
            removeActive();
            this.classList.add("active");
            // Displaying dynemic div
            //displayContent.style.display = 'flex'
        }
      })
    }
  //disable(ihc_i)
  counter(ihc_i);
  
  //console.log(ihc_arr);