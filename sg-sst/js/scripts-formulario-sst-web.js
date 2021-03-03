$(document).ready(function(){
    $("#btn_paso_01").click(function(){
        $("#contactForm").submit();
    });
});

$(document).ready(function(){
    $("#btn_back").click(function(){
        $("#btn_paso_01").attr('data-target','');
    });
});

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

$('#numero_trabajadores').on('input', function () { 
    this.value = this.value.replace(/[^0-9]/g,'');
});

//Casilla activa opciones SI / NO
$(document).ready(function(){
    $("#opcion-01-a").click(function(){
        $("#vehiculos_organizacion").attr("value", "");
        $("#vehiculos_organizacion").attr("value", "Si");
        $("#opcion-01-b").removeClass("tx-active-option");
        $("#opcion-01-a").addClass("tx-active-option");
    });

    $("#opcion-01-b").click(function(){
        $("#vehiculos_organizacion").attr("value", "");
        $("#vehiculos_organizacion").attr("value", "No");
        $("#opcion-01-a").removeClass("tx-active-option");
        $("#opcion-01-b").addClass("tx-active-option");
    });
});

//Casilla activa opciones 01 - 02 - 03 - 04 - 05 
$(document).ready(function(){
    $("#opcion-02-a").click(function(){
        $("#nivel_riesgo").attr("value", "");
        $("#nivel_riesgo").attr("value", "1");
        $("#opcion-02-b").removeClass("tx-active-option");
        $("#opcion-02-c").removeClass("tx-active-option");
        $("#opcion-02-d").removeClass("tx-active-option");
        $("#opcion-02-e").removeClass("tx-active-option");
        $("#opcion-02-a").addClass("tx-active-option");
    });

    $("#opcion-02-b").click(function(){
        $("#nivel_riesgo").attr("value", "");
        $("#nivel_riesgo").attr("value", "2");
        $("#opcion-02-a").removeClass("tx-active-option");
        $("#opcion-02-c").removeClass("tx-active-option");
        $("#opcion-02-d").removeClass("tx-active-option");
        $("#opcion-02-e").removeClass("tx-active-option");
        $("#opcion-02-b").addClass("tx-active-option");
    });

    $("#opcion-02-c").click(function(){
        $("#nivel_riesgo").attr("value", "");
        $("#nivel_riesgo").attr("value", "3");
        $("#opcion-02-a").removeClass("tx-active-option");
        $("#opcion-02-b").removeClass("tx-active-option");
        $("#opcion-02-d").removeClass("tx-active-option");
        $("#opcion-02-e").removeClass("tx-active-option");
        $("#opcion-02-c").addClass("tx-active-option");
    });

    $("#opcion-02-d").click(function(){
        $("#nivel_riesgo").attr("value", "");
        $("#nivel_riesgo").attr("value", "4");
        $("#opcion-02-a").removeClass("tx-active-option");
        $("#opcion-02-b").removeClass("tx-active-option");
        $("#opcion-02-c").removeClass("tx-active-option");
        $("#opcion-02-e").removeClass("tx-active-option");
        $("#opcion-02-d").addClass("tx-active-option");
    });

    $("#opcion-02-e").click(function(){
        $("#nivel_riesgo").attr("value", "");
        $("#nivel_riesgo").attr("value", "5");
        $("#opcion-02-a").removeClass("tx-active-option");
        $("#opcion-02-b").removeClass("tx-active-option");
        $("#opcion-02-c").removeClass("tx-active-option");
        $("#opcion-02-d").removeClass("tx-active-option");
        $("#opcion-02-e").addClass("tx-active-option");
    });
});

//Checkbox servicios de interes
// Select 01
$("#checkbox-opcion-03-a").click(function(){
    if ($("#checkbox-opcion-03-a").is(':checked')){
        $("#checkbox-opcion-03-a").attr("value", "| Sistema de Gestión de Seguridad y Salud en el Trabajo |");
    }else {
        $("#checkbox-opcion-03-a").attr("value", "");
    }
});

// Select 02
$("#checkbox-opcion-03-b").click(function(){
    if ($("#checkbox-opcion-03-b").is(':checked')){
        $("#checkbox-opcion-03-b").attr("value", "| Cursos y Certificados |");
    }else {
        $("#checkbox-opcion-03-b").attr("value", "");
    }

});

// Select 03
$("#checkbox-opcion-03-c").click(function(){
    if ($("#checkbox-opcion-03-c").is(':checked')){
        $("#checkbox-opcion-03-c").attr("value", "| Capacitaciones en SG-SST |");
    }else {
        $("#checkbox-opcion-03-c").attr("value", "");
    }
});

// Select 04
$("#checkbox-opcion-03-d").click(function(){
    if ($("#checkbox-opcion-03-d").is(':checked')){
        $("#checkbox-opcion-03-d").attr("value", "| Otros Sistemas de Gestión |");
    }else {
        $("#checkbox-opcion-03-d").attr("value", "");
    }
});



//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO CONTACTO PC
$("#contactForm").validator().on("submit", function (event) {
    var valido_form_01 = 0;
    //var valido_select_01 = 0;
    var valido_select_02 = 0;
    var valido_select_03 = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        submitMSG(true, "");
        valido_form_01 = 1;
    }

    //Opcion de Vehiculos
    /*
    if (!$('#vehiculos_organizacion').val() ){
        submitMSG_vehiculos(false, "Seleccione una opción.");
        //console.log(valido_select_01);
    }
    else {
        event.preventDefault();
        submitMSG_vehiculos(true, "");
        valido_select_01 = 1;
        //console.log(valido_select_01);
    }
    */

    //Checkbox opciones
    if (($("input[name='checkbox-cotizar-servicios']").is(':checked') === false)){
        submitMSG_checkbox_opciones(false, "Seleccione una opción.");
    }else {
        event.preventDefault();
        submitMSG_checkbox_opciones(true, "");
        valido_select_02 = 1;
    }

    //Opcion de Nivel de riesgo
    if (!$('#nivel_riesgo').val() ){
        submitMSG_riesgo(false, "Seleccione una opción.");
    }
    else {
        event.preventDefault();
        submitMSG_riesgo(true, "");
        valido_select_03 = 1;
    }



    if ((valido_form_01)&&(valido_select_02)&&(valido_select_03) === 1) {
        event.preventDefault();
        submitMSG(true, "");
        $("#btn_paso_01").attr('data-target','#slider-formulario-registro-sst');
    }
    else {
        submitMSG(false, "Complete los campos que faltan");
    }
});

/*
function submitMSG_vehiculos(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-success";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_vehiculos").removeClass().addClass(msgClasses).text(msg);
}
*/

function submitMSG_riesgo(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-success";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_riesgo").removeClass().addClass(msgClasses).text(msg);
}

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



//PASO 02
$("#contactForm_02").validator().on("submit", function (event) {
    var valido_form_02 = 0;
    var valido_check = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_paso_02(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        valido_form_02 = 1;
    }

    //Checkbox
    if ($("#checkbox_web").is(':checked') === false){
        submitMSG_condiciones(false, "Aún no acepta terminos y condiciones.");
    }else {
        event.preventDefault();
        submitMSG_condiciones(true, "");
        valido_check = 1;
    }

    if ((valido_form_02)&&(valido_check) === 1) {
        event.preventDefault();
        submitMSG_paso_02(true, "");
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
        submitMSG_paso_02(false, "Complete los campos que faltan");
    }

});

function submitMSG_paso_02(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-success";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_paso_02").removeClass().addClass(msgClasses).text(msg);
}

function formSuccess(){
    $("#contactForm_02")[0].reset();
    submitMSG_paso_02(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
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
    var numero_sedes = $("#numero_sedes").val();
    var numero_trabajadores = $("#numero_trabajadores").val();
    //var vehiculos_organizacion = $("#vehiculos_organizacion").val();
    var nivel_riesgo = $("#nivel_riesgo").val();
    var checkbox_seleccionados = ($("#checkbox-opcion-03-a").val()) + ($("#checkbox-opcion-03-b").val()) 
    + ($("#checkbox-opcion-03-c").val()) + ($("#checkbox-opcion-03-d").val() );

    var first_name = $("#first_name").val();
    var telephone = $("#telephone").val();
    var email = $("#email").val();
    var funciones = $('select[id=funciones]').val();
    var tx_area_objetivos = $("#tx_area_objetivos").val();

    $.ajax({
        type: "POST",
        url:  "sg-sst/php/process_formulario_sst_web.php",
        data: "empresa=" + empresa +
              "&nit=" + nit +
              "&numero_sedes=" + numero_sedes +
              "&numero_trabajadores=" + numero_trabajadores +
              //"&vehiculos_organizacion=" + vehiculos_organizacion +
              "&nivel_riesgo=" + nivel_riesgo +
              "&checkbox_seleccionados=" + checkbox_seleccionados +

              "&first_name=" + first_name +
              "&telephone=" + telephone +
              "&email=" + email +
              "&funciones=" + funciones +
              "&tx_area_objetivos=" + tx_area_objetivos,

        success: function(text){
            if (text == "success"){
                formSuccess();
                window.location.href = "mensaje_enviado_formulario_sst_web.html";
            } else {
                submitMSG_paso_02(false,text);
            }
        }
    });
}

