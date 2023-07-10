/* Funções que ativam os dois menus */
function upMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function downMenu() {
    document.getElementById("Dropdown").classList.toggle("showDown");
  }

  // Fecha DropUp se clicar fora dele
  window.onclick = function(event) {
    if (!event.target.matches('#dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-up");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
           if(!event.target.matches('#notClickable')) openDropdown.classList.remove('show');
        }
      }
    }

    // Fecha DropDown se clicar fora dele
    if (!event.target.matches('#dropdbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('showDown')) {
          openDropdown.classList.remove('showDown');
        }
      }
    }
  }