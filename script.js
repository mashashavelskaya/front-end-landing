 var navLinks = document.getElementById("navLinks");

  // Когда кликаем на menu icon, аттрибут right = 0px,
  function showMenu(){

    navLinks.style.right = "0"
  }


  // Когда кликаем на close icon, аттрибут right = -200px,
  function hideMenu(){

    // = -200px
    navLinks.style.right = "-200px"
    
  }