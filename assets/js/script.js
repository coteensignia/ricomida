//tooltips
$(function () {
  $(".tooltip1").tooltip();
});

//cambiar color titulos con doble click
$(".underline-title").dblclick(function () {
  $(this).css({
    color: "red",
  });
});

//alert enviar coreo
$("#enviarCorreo").click(function () {
  alert("El correo fue enviado correctamente...");
});

//esconder contenido en card
$(".card-title").click(function () {
  $("p").toggle();
});
