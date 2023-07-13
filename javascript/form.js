$(document).ready(function() {
    // Animação para exibir o formulário
    $(".form-box").fadeIn(1500);
    
    // Animação para exibir o botão de enviar após preencher o formulário
    $("#message").on("keyup", function() {
      if ($(this).val().trim() !== "") {
        $(".form-submit").fadeIn();
      } else {
        $(".form-submit").fadeOut();
      }
    });
});