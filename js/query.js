$(document).ready(function () {
    $.getJSON('https://mindicador.cl/api', function (data) {
        $('#dolar').text("Valor dolar: $" + data.dolar.valor)
    }).fail(function () {
        $('#spin').hide();
        $('#spintext').hide();
        $('#dolar').removeClass("h5");
        $('#dolar').css("font-size","10px");
        $('#dolar').text("Error al cargar datos");
    }).done(function(data){
        $("#spin").hide();
        $("#spin2").hide();
        $("#spin3").hide();
        $("#spintext").hide();
        $("#dolar").text("Valor dolar: $" + data.dolar.valor);
        $("#utm").text("Valor UTM: $" + data.utm.valor);
        $("#uf").text("Valor UF: $" + data.uf.valor);
    });
});