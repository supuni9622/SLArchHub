// ----------------------------- ARCHITECT DASH BOARD JAVA SCRIPT -----------------------------------------------------------//

//-------- Side Bar Chats Accordian ---------------//
var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var chat = this.nextElementSibling;
        if (chat.style.display === "block") {
        chat.style.display = "none";
        } else {
        chat.style.display = "block";
            }
          });
        }

        //----- Task ----//
        $(document).ready(function() {
          $('[data-toggle="tooltip"]').tooltip();
        });
        
        
        