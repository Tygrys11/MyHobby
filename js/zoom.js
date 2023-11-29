$(document).ready(function () {
    // Początkowy rozmiar czcionki
    var fontSize = parseInt($("main").css("font-size"));

    // Funkcja do powiększania czcionki
    $("#zoom-in-btn").on("click", function () {
      fontSize += 2;
      $("main").css("font-size", fontSize + "px");
    });

    // Funkcja do pomniejszania czcionki
    $("#zoom-out-btn").on("click", function () {
      if (fontSize > 10) {
        fontSize -= 2;
        $("main").css("font-size", fontSize + "px");
      }
    });
  });