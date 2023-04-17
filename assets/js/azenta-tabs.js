function az_tab_module() {
  var allTabLinks = document.getElementsByClassName('az-tablinks')
  var tabContent = document.getElementsByClassName('tabcontent')

  for (i = 0; i < allTabLinks.length; i++) {

    //click event for profile 
    allTabLinks[i].addEventListener('click', function() {

        //console.log(this.parentNode.parentNode.id);

        var targetTabLinks = document.getElementById(this.parentNode.parentNode.id).getElementsByClassName("az-tablinks");
        var targetTabContent = document.getElementById(this.parentNode.parentNode.id).getElementsByClassName("tabcontent");

        for (i = 0; i < targetTabLinks.length; i++) {
          targetTabLinks[i].classList.remove("active");
        } 
        
        for (i = 0; i < targetTabContent.length; i++) {
          targetTabContent[i].classList.remove("display-tab");
        }  

      // for (i = 0; i < profileAnimation.length; i++) {
      //   profileAnimation[i].classList.remove("active");
      // } 
      
      // for (i = 0; i < tabContent.length; i++) {
      //   tabContent[i].classList.remove("display-tab");
      // }  
      

      var tabDataID = this.getAttribute('data-tab')
      
      this.classList.add("active");

      document.getElementById(tabDataID).classList.add("display-tab");


    })
  }
}
az_tab_module();