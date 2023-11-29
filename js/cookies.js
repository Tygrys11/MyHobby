document.addEventListener("DOMContentLoaded", function() {
    const cookieBox = document.querySelector(".cookie-banner");
    const buttons = document.querySelectorAll(".buttone");
  
    const executeCodes = () => {
        if(document.cookie.includes("codiglab")) return;
      if (cookieBox) {
        cookieBox.classList.add('show');
  
        buttons.forEach((button) => {
          button.addEventListener('click', () => {
            cookieBox.classList.remove('show');
  
            // Kiedy zaakceptowano
            if (button.id == 'accept') {
              //ciacho na miesiac
              document.cookie = "cookieBy= codiglab; max-age=" + 60*60*24*365;
            }
          });
        });
      } else {
        console.error("Element with class '.cookie-banner' not found.");
      }
    };
  
    // Ponownie pokaże się po odświeżeniu
    window.addEventListener('load', executeCodes);
  });