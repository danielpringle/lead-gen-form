window.onload = function() {

  // Removing active class from all the profiles
  function removeActive() {
    var profileAnimation = document.getElementsByClassName('profile-animation')
    for (i = 0; i < profileAnimation.length; i++) {
      profileAnimation[i].classList.remove('active')
    }
  }

  // Removing content fron dynemic div and hiding it
  function removeOthers() { 
    var alldyContent = document.getElementsByClassName('dyContent')
    for (i = 0; i < alldyContent.length; i++) {
      alldyContent[i].innerHTML = ''
      alldyContent[i].style.display = 'none'
    }
  }


  // Removing active class from all the profiles
  function removeActiveConnector() {
    var profileConnector = document.getElementsByClassName('profile-connector')
    for (i = 0; i < profileConnector.length; i++) {
      profileConnector[i].classList.remove('active')
    }
  }






  function bodShowHide() {
    var profileAnimation = document.getElementsByClassName('profile-animation')
    var profileContent = document.getElementsByClassName('profile-content')
    //var displaySvg = '<svg class=\'svg\' id=\'icon-close-button\' viewBox=\'0 0 612 612\'><path d=\'M612 306C612 137.004 474.995 0 306 0 137.004 0 0 137.004 0 306c0 168.995 137.004 306 306 306 168.995 0 306-137.005 306-306zM168.3 424.032L286.333 306 168.3 187.967l19.667-19.667L306 286.333 424.032 168.3l19.668 19.667L325.667 306 443.7 424.032 424.032 443.7 306 325.667 187.967 443.7 168.3 424.032z\' transform=\'translate(32.054 32.054) scale(.89525)\'></path></svg>'
            
    for (i = 0; i < profileAnimation.length; i++) {
      profileContent[i].style.display = 'none'

      //click event for profile 
      profileAnimation[i].addEventListener('click', function() {
           
        // Removing active class from all other profiles            
        //  removeActive()

        // Clearing dynemic div
        removeOthers()
           
        // toogle active class
        // this.classList.toggle('active')


        // Adding content to dynemic div
        var panel = this.nextElementSibling
        var panelHTML = panel.innerHTML
        var panelDataID = this.getAttribute('data-id')
        var displayContent = document.getElementById(panelDataID);
        displayContent.innerHTML = panelHTML;
        // toogle active class
        if (this.classList.contains("active")) {
            removeActive();
            displayContent.style.display = 'none'
        } else {
            removeActive();
            this.classList.add("active");
            // Displaying dynemic div
            displayContent.style.display = 'flex'
        }



        // Add the connector link
        let profile_connector;
        let placeholder = this.nextElementSibling;
        while (placeholder) {
          if (placeholder.classList.contains('profile-connector')) {
            profile_connector = placeholder;
            break;
          }
          placeholder = placeholder.nextElementSibling;
        }
        
        if (profile_connector.classList.contains("active")) {
            removeActiveConnector();
        } else {
            removeActiveConnector();
            profile_connector.classList.add("active");
        }

      })


      profileAnimation[i].addEventListener('keyup', function(event) {
        if (event.code === 'Enter') {

        // Removing active class from all other profiles            
        //  removeActive()

        // Clearing dynemic div
        removeOthers()
           
        // toogle active class
        // this.classList.toggle('active')


        // Adding content to dynemic div
        var panel = this.nextElementSibling
        var panelHTML = panel.innerHTML
        var panelDataID = this.getAttribute('data-id')
        var displayContent = document.getElementById(panelDataID);
        displayContent.innerHTML = panelHTML;
        // toogle active class
        if (this.classList.contains("active")) {
            removeActive();
            displayContent.style.display = 'none'
        } else {
            removeActive();
            this.classList.add("active");
            // Displaying dynemic div
            displayContent.style.display = 'flex'
        }



        // Add the connector link
        let profile_connector;
        let placeholder = this.nextElementSibling;
        while (placeholder) {
          if (placeholder.classList.contains('profile-connector')) {
            profile_connector = placeholder;
            break;
          }
          placeholder = placeholder.nextElementSibling;
        }
        
        if (profile_connector.classList.contains("active")) {
            removeActiveConnector();
        } else {
            removeActiveConnector();
            profile_connector.classList.add("active");
        }

        }
      })


    }
  }



  // finction for Mobile (< 767px)
  function bodShowHideMobile() {
    var profileAnimation = document.getElementsByClassName('profile-animation')
    var profileContent = document.getElementsByClassName('profile-content')

    for (i = 0; i < profileAnimation.length; i++) {
      //profileContent[i].style.display = 'none'

      profileContent[i].classList.add("pannel-hidden");
      
      //click event for profile 
      profileAnimation[i].addEventListener('click', function() {
        // Add active class
        this.classList.toggle('active')
    
        var panel = this.nextElementSibling

        if (panel.classList.contains("pannel-hidden")) {
            panel.classList.remove("pannel-hidden");
            panel.classList.add("activePanel");
        } else {
            panel.classList.remove("activePanel");
            panel.classList.add("pannel-hidden");
        }

        panel.classList.toggle('activePanel')
       

      })
    }
  }






  function checkWdth(x) {
    if (x.matches) { // If media query matches
      bodShowHideMobile();
    } else {
      bodShowHide();
    }
  }
    
  var x = window.matchMedia('(max-width: 750px)')
  checkWdth(x) // Call listener function at run time
  x.addListener(checkWdth) // Attach listener function on state changes




}