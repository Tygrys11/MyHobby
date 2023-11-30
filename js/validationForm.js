$(document).ready(function() {
    $('#formValidation').validate({
      rules:
      {
        nick:
        {
          minlength: 2
        },

        email: 
        {
          email:true
        }
      },

      messages:
      {
        nick:
        {
          required: "Podaj nick!*",
          minlength: "Nick powinno być dłuższy niż 2 litery"
        },

        email:
        {
          required: "Prosze podać email!*",
        },

        FormMessage:
        {
          required: "Wpisz wiadomość!*",
          minlength: "Imię powinno być dłuższe niż 2 litery"
        },

        files:
        {
            required: "Wybierz prace!*"
        }
      },

      submitHandler: function (form) {
        form.submit();
      }
    });
  });