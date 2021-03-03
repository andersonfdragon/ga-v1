$("#aceptar_terminos_popUp_web").on("click", function() {

    if ($("#checkbox_web").is(':checked')){

        $('.bs-example-modal.terminos-modal').modal('hide');

    }

    else{

        $('.bs-example-modal.terminos-modal').modal('hide');

        $("#checkbox_web").prop("checked", true);

    }

});



$('#telephone').on('input', function () { 

    this.value = this.value.replace(/[^0-9]/g,'');

});



//Checkbox servicios de interes

// Select 01

$("#checkbox-opcion-03-a").click(function(){

    if ($("#checkbox-opcion-03-a").is(':checked')){

        $("#checkbox-opcion-03-a").attr("value", "| Reclutamiento y Selección |");

    }else {

        $("#checkbox-opcion-03-a").attr("value", "");

    }

});



// Select 02

$("#checkbox-opcion-03-b").click(function(){

    if ($("#checkbox-opcion-03-b").is(':checked')){

        $("#checkbox-opcion-03-b").attr("value", "| Estudio Reputacional |");

    }else {

        $("#checkbox-opcion-03-b").attr("value", "");

    }



});



// Select 03

$("#checkbox-opcion-03-c").click(function(){

    if ($("#checkbox-opcion-03-c").is(':checked')){

        $("#checkbox-opcion-03-c").attr("value", "| Prueba de Polígrafo |");

    }else {

        $("#checkbox-opcion-03-c").attr("value", "");

    }

});



// Select 04

$("#checkbox-opcion-03-d").click(function(){

    if ($("#checkbox-opcion-03-d").is(':checked')){

        $("#checkbox-opcion-03-d").attr("value", "| Visitas Domiciliarias |");

    }else {

        $("#checkbox-opcion-03-d").attr("value", "");

    }

});



// GET URL UTM CAMPAINGS
let previousURL = document.referrer
$('#previousURL').attr('value', previousURL)

if (previousURL.includes('pauta-facebook-ads')) {
  $('#getPreviousURL').attr('value','pauta-facebook-ads')
}
else if (previousURL.includes('pauta-google-search')) {
  $('#getPreviousURL').attr('value','pauta-google-search')
}
else{
  $('#getPreviousURL').attr('value','seo-sitio-web')
}



//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO CONTACTO PC

$("#contactForm").validator().on("submit", function (event) {

    var valido_form_01 = 0;

    var valido_check = 0;

    var valido_select_02 = 0;



    if (event.isDefaultPrevented("Complete este campo")) {

        // handle the invalid form...

        submitMSG(false, "Complete los campos que faltan.");

    } else {

        event.preventDefault();

        submitMSG(true, "");

        valido_form_01 = 1;

    }


    //Checkbox opciones

    if (($("input[name='checkbox-cotizar-servicios']").is(':checked') === false)){

        submitMSG_checkbox_opciones(false, "Seleccione una opción.");

    }else {

        event.preventDefault();

        submitMSG_checkbox_opciones(true, "");

        valido_select_02 = 1;

    }


    //Checkbox

    if ($("#checkbox_web").is(':checked') === false){

        submitMSG_condiciones(false, "Aún no acepta terminos y condiciones.");

    }else {

        event.preventDefault();

        submitMSG_condiciones(true, "");

        valido_check = 1;

    }


    if ((valido_form_01)&&(valido_select_02)&&(valido_check) === 1) {

        event.preventDefault();

        submitMSG(true, "");

        $("#seccion-formulario").addClass("animacion-form");

        if($("#seccion-formulario").hasClass("animacion-form")) {

          setTimeout( function(){ 

            $("#seccion-formulario").addClass("hidden-xs hidden-sm hidden-md hidden-lg");

            $("#procesando-datos").removeClass("hidden-xs hidden-sm hidden-md hidden-lg");

            $("#procesando-datos").addClass("suavizar-opacidad");

          }, 700);

        }

        else{

          $("#seccion-formulario").removeClass("animacion-form");

          $("#seccion-formulario").removeClass("hidden-xs hidden-sm hidden-md hidden-lg");

        }

        submitForm();

    }

    else {

        submitMSG(false, "Complete los campos que faltan");

    }


});


function submitMSG_checkbox_opciones(valid, msg){

    if(valid){

        var msgClasses = "h4 text-center text-success";

    } else {

        var msgClasses = "h4 text-center text-danger";

    }

    $("#msgSubmit_chekbox_opciones").removeClass().addClass(msgClasses).text(msg);

}



function submitMSG(valid, msg){

    if(valid){

        var msgClasses = "h4 text-center text-success";

    } else {

        var msgClasses = "h4 text-center text-danger";

    }

    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);

}


function formSuccess(){

    $("#contactForm")[0].reset();

    submitMSG(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")

}



function submitMSG_condiciones(valid, msg){

    if(valid){

        var msgClasses = "h4 text-center text-warning tx_form_error";

    } else {

        var msgClasses = "h4 text-center text-danger tx_form_error";

    }

    $("#msgSubmit_condiciones").removeClass().addClass(msgClasses).text(msg);

}





function submitForm(){

    // Initiate Variables With Form Content

    var empresa = $("#empresa").val();

    var nit = $("#nit").val();

    var checkbox_seleccionados = ($("#checkbox-opcion-03-a").val()) + ($("#checkbox-opcion-03-b").val()) 

    + ($("#checkbox-opcion-03-c").val()) + ($("#checkbox-opcion-03-d").val() );

    var tx_area_objetivos = $("#tx_area_objetivos").val();



    var first_name = $("#first_name").val();

    var funciones = $('select[id=funciones]').val();

    var telephone = $("#telephone").val();

    var email = $("#email").val();

    var getPreviousURL = ($('#getPreviousURL').val());

    var previousURL = ($('#previousURL').val());



    $.ajax({

        type: "POST",

        url:  "rsp/php/process_formulario_rsp_web.php",

        data: "empresa=" + empresa +

              "&nit=" + nit +

              "&checkbox_seleccionados=" + checkbox_seleccionados +

              "&tx_area_objetivos=" + tx_area_objetivos +



              "&first_name=" + first_name +

              "&funciones=" + funciones +

              "&telephone=" + telephone +

              "&email=" + email +

              "&getPreviousURL=" + getPreviousURL +
              
              "&previousURL=" + previousURL,



        success: function(text){

            if (text == "success"){

                formSuccess();

                window.location.href = "mensaje_enviado_formulario_rsp_web.html";

            } else {

                submitMSG(false,text);

            }

        }

    });

}



