  function quicklinks_navigation() {
    const sections = document.querySelectorAll('.quicklink-container')
    for (var i = 0; i < sections.length; i++) {

        var id = sections[i].id;
        var make_words = id.replaceAll("-", ' ');
        const words = make_words.split(" ");

        for (let ew = 0; ew < words.length; ew++) {
          words[ew] = words[ew][0].toUpperCase() + words[ew].substr(1);
        }
      
        const title = words.join(" ");

        //console.log(title);

        var ul = document.getElementById("product-nav-menu");
        var li = document.createElement("li");

        let link = sections[i].id;
        
        li.innerHTML = '<a href="#'+link+'" title="Link to '+title+'" tabindex="0">'+title+'</a>';
        ul.appendChild(li);
    }

  }

  quicklinks_navigation();

  function product_mobile_nav_reveal(){

    console.log('clicked');
  
    var icon = document.getElementById("product-nav-mobile-icon");
    var container = document.getElementById("product-nav-menu-container");
  
    container.classList.toggle('nav-open');
    icon.classList.toggle('nav-open');
  
    if (container.classList.contains('nav-open')) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  
  }