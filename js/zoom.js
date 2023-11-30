$(document).ready(function () {
    // Początkowy rozmiar czcionki
    var fontSize = parseInt($("main,p,h5,h1,h2,h3,b,i,div").css("font-size"));

    // Funkcja do powiększania czcionki
    $("#zoom-in-btn").on("click", function () {
      if(fontSize < 30)
      {
        fontSize += 2;
        $("main,p,h5,h1,h2,h3,h4,b,i,.texting").css("font-size", fontSize + "px");
      }
    });

    // Funkcja do pomniejszania czcionki
    $("#zoom-out-btn").on("click", function () {
      if (fontSize > 10) {
        fontSize -= 2;
        $("main,p,h5,h1,h2,h3,h4,i,b,.texting").css("font-size", fontSize + "px");
      }
    });
  });