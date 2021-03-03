$("#aceptar_terminos_popUp_web").on("click", function() {
    if ($("#checkbox").is(':checked')){
        $('.bs-example-modal.terminos-modal').modal('hide');
    }
    else{
        $('.bs-example-modal.terminos-modal').modal('hide');
        $("#checkbox").prop("checked", true);
    }
});

$("#btn-hamburguesa").click(function () {
    if ($("#nav-site-xs").hasClass("in")){
        $('#img-menu-hamburguesa').prop("src","rsp/images/hamburguesa-xs.webp");
    }
    else{
        $('#img-menu-hamburguesa').prop("src","rsp/images/cerrar-hamburguesa-xs.webp");
    }
});


$('#telephone').on('input', function () { 
    this.value = this.value.replace(/[^0-9]/g,'');
});

//BTN CONTACTO 01
$("#click-btn-contacto-01").on("click", function() {
    if ($("#collapse-contacto").hasClass("in")){
        $("#slider-contacto").carousel("next");
        $("#slider-contacto").carousel('cycle');
    }
    else{
        $("#slider-contacto").carousel('pause');
    }
});

$("#click-btn-contacto-02").on("click", function() {
    if ($("#collapse-contacto").hasClass("in")){
        $("#slider-contacto").carousel("next");
        $("#slider-contacto").carousel('cycle');
    }
    else{
        $("#slider-contacto").carousel('pause');
    }
});

$("#click-btn-contacto-03").on("click", function() {
    if ($("#collapse-contacto").hasClass("in")){
        $("#slider-contacto").carousel("next");
        $("#slider-contacto").carousel('cycle');
    }
    else{
        $("#slider-contacto").carousel('pause');
    }
});

$("#close-collapse").on("click", function() {
    if ($("#collapse-contacto").hasClass("in")){
        $("#slider-contacto").carousel("next");
        $("#slider-contacto").carousel('cycle');
    }
});

//SELECION DE ASESORA POPUP HOVER
$("#asesora-01").click(function() {
    $("#asesora-02").removeClass("seleccionado-on");
    $("#asesora-03").removeClass("seleccionado-on");
    $("#asesora-01").addClass("seleccionado-on");
    $("#tipo-asesora").replaceWith( '<img id="tipo-asesora" src="rsp/images/asesora-01-popup.webp" alt="Asesora 01" class="img-responsive sin-padding center-block">' );

    if ($("#asesora-01").hasClass("seleccionado-on")){
        $("#asesora-01").addClass("asesora-01-active");
        $("#asesora-02").removeClass("asesora-02-active");
        $("#asesora-03").removeClass("asesora-03-active");

        $("#asesora-01").removeClass("asesora-01");
        $("#asesora-02").addClass("asesora-02");
        $("#asesora-03").addClass("asesora-03");
    }
});

$("#asesora-02").click(function() {
    $("#asesora-01").removeClass("seleccionado-on");
    $("#asesora-03").removeClass("seleccionado-on");
    $("#asesora-02").addClass("seleccionado-on");
    $("#tipo-asesora").replaceWith( '<img id="tipo-asesora" src="rsp/images/asesora-02-popup.webp" alt="Asesora 02" class="img-responsive sin-padding center-block">' );


    if ($("#asesora-02").hasClass("seleccionado-on")){
        $("#asesora-02").addClass("asesora-02-active");
        $("#asesora-01").removeClass("asesora-01-active");
        $("#asesora-03").removeClass("asesora-03-active");

        $("#asesora-02").removeClass("asesora-02");
        $("#asesora-01").addClass("asesora-01");
        $("#asesora-03").addClass("asesora-03");
    }

});

$("#asesora-03").click(function() {
    $("#asesora-01").removeClass("seleccionado-on");
    $("#asesora-02").removeClass("seleccionado-on");
    $("#asesora-03").addClass("seleccionado-on");
    $("#tipo-asesora").replaceWith( '<img id="tipo-asesora" src="rsp/images/asesora-03-popup.webp" alt="Asesora 03" class="img-responsive sin-padding center-block">' );

    if ($("#asesora-03").hasClass("seleccionado-on")){
        $("#asesora-03").addClass("asesora-03-active");
        $("#asesora-01").removeClass("asesora-01-active");
        $("#asesora-02").removeClass("asesora-02-active");

        $("#asesora-03").removeClass("asesora-03");
        $("#asesora-01").addClass("asesora-01");
        $("#asesora-02").addClass("asesora-02");
    }

});


$("#regresar-tab").click(function() {
    if ($("#tab-04-perfiles").hasClass("active")){
        $('#tab-03-contenido').tab('show');
    }

    else if ($("#tab-03-perfiles").hasClass("active")){
        $('#tab-02-contenido').tab('show');
    }

    else if ($("#tab-02-perfiles").hasClass("active")){
        $('#tab-01-contenido').tab('show');
    }

    else if ($("#tab-01-perfiles").hasClass("active")){
        $('#tab-04-contenido').tab('show');
    }
});

$("#adelantar-tab").click(function() {
    if ($("#tab-01-perfiles").hasClass("active")){
        $('#tab-02-contenido').tab('show');
    }

    else if ($("#tab-02-perfiles").hasClass("active")){
        $('#tab-03-contenido').tab('show');
    }

    else if ($("#tab-03-perfiles").hasClass("active")){
        $('#tab-04-contenido').tab('show');
    }

    else if ($("#tab-04-perfiles").hasClass("active")){
        $('#tab-01-contenido').tab('show');
    }
});

/*Visualizar popover collapse*/
$(function () {
    $('[data-toggle="popover"]').popover()  
})


//COLLAPSE VERSION WEB
$('#collapseOne-xs').collapse({
    toggle: false
})
$("#collapse-xs-01").on('click tap', function() {
    if ($("#collapseOne-xs").hasClass("in")){
        $("#desplegar-xs-01").replaceWith('<img id="desplegar-xs-01" src="rsp/images/icono-desplegar-xs.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-xs-01").replaceWith('<img id="desplegar-xs-01" src="rsp/images/icono-comprimir-xs.webp" alt="Icono desplegar"></span>');
    }
});


$('#collapseTwo-xs').collapse({
    toggle: false
})
$("#collapse-xs-02").on('click tap', function() {
    if ($("#collapseTwo-xs").hasClass("in")){
        $("#desplegar-xs-02").replaceWith('<img id="desplegar-xs-02" src="rsp/images/icono-desplegar-xs.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-xs-02").replaceWith('<img id="desplegar-xs-02" src="rsp/images/icono-comprimir-xs.webp" alt="Icono desplegar"></span>');
    }
});

$('#collapseThree-xs').collapse({
    toggle: false
})
$("#collapse-xs-03").on('click tap', function() {
    if ($("#collapseThree-xs").hasClass("in")){
        $("#desplegar-xs-03").replaceWith('<img id="desplegar-xs-03" src="rsp/images/icono-desplegar-xs.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-xs-03").replaceWith('<img id="desplegar-xs-03" src="rsp/images/icono-comprimir-xs.webp" alt="Icono desplegar"></span>');
    }
});


//COLLAPSE VERSION WEB
$('#collapseOne').collapse({
    toggle: false
})
$("#collapse-web-01").on('click tap', function() {
    if ($("#collapseOne").hasClass("in")){
        $("#desplegar-web-01").replaceWith('<img id="desplegar-web-01" src="rsp/images/icono-desplegar.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-web-01").replaceWith('<img id="desplegar-web-01" src="rsp/images/icono-comprimir.webp" alt="Icono desplegar"></span>');
    }
});

$('#collapseTwo').collapse({
    toggle: false
})
$("#collapse-web-02").on('click tap', function() {
    if ($("#collapseTwo").hasClass("in")){
        $("#desplegar-web-02").replaceWith('<img id="desplegar-web-02" src="rsp/images/icono-desplegar.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-web-02").replaceWith('<img id="desplegar-web-02" src="rsp/images/icono-comprimir.webp" alt="Icono desplegar"></span>');
    }
});

$('#collapseThree').collapse({
    toggle: false
})
$("#collapse-web-03").on('click tap', function() {
    if ($("#collapseThree").hasClass("in")){
        $("#desplegar-web-03").replaceWith('<img id="desplegar-web-03" src="rsp/images/icono-desplegar.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-web-03").replaceWith('<img id="desplegar-web-03" src="rsp/images/icono-comprimir.webp" alt="Icono desplegar"></span>');
    }
});

//NAV XS
$("#cerrar-nav").on("click", function() {
    $('.navbar-toggle').click();
});

$(".cerrar-nav").on("click", function() {
    $('.navbar-toggle').click();
});

//Intercalar imagenes slider perfiles compañia
$(function() {      
    var count = 0;
    
    $("#perfil-01").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $('#img-perfil-02').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-03').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-04').removeClass('transicion-cerrar-item-oculto');
            
            $('#img-perfil-01').addClass('transicion-cerrar-item-oculto');
            $("#slider-perfiles-xs").carousel('next');
            $('#img-perfil-02').prop('src','rsp/images/slider-perfiles-xs-02.webp');
            count = 0;
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            $('#img-perfil-02').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-03').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-04').removeClass('transicion-cerrar-item-oculto');

            $('#img-perfil-01').addClass('transicion-cerrar-item-oculto');
            $("#slider-perfiles-xs").carousel('prev');
            $('#img-perfil-04').prop('src','rsp/images/slider-perfiles-xs-04.webp');
            count = 0;
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:50
    });

    $("#perfil-02").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $('#img-perfil-01').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-03').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-04').removeClass('transicion-cerrar-item-oculto');
           

            $('#img-perfil-02').addClass('transicion-cerrar-item-oculto');
            $("#slider-perfiles-xs").carousel('next');
            $('#img-perfil-03').prop('src','rsp/images/slider-perfiles-xs-03.webp');
            count = 0;
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            $('#img-perfil-01').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-03').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-04').removeClass('transicion-cerrar-item-oculto');

            $('#img-perfil-02').addClass('transicion-cerrar-item-oculto');
            $("#slider-perfiles-xs").carousel('prev');
            $('#img-perfil-01').prop('src','rsp/images/slider-perfiles-xs-01.webp');
            count = 0;
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:50
    });

    $("#perfil-03").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $('#img-perfil-01').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-02').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-04').removeClass('transicion-cerrar-item-oculto');

            $('#img-perfil-03').addClass('transicion-cerrar-item-oculto');
            $("#slider-perfiles-xs").carousel('next');
            $('#img-perfil-04').prop('src','rsp/images/slider-perfiles-xs-04.webp');
            count = 0;
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            $('#img-perfil-01').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-02').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-04').removeClass('transicion-cerrar-item-oculto');

            $('#img-perfil-03').addClass('transicion-cerrar-item-oculto');
            $("#slider-perfiles-xs").carousel('prev');
            $('#img-perfil-02').prop('src','rsp/images/slider-perfiles-xs-02.webp');
            count = 0;
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:50
    });

    $("#perfil-04").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $('#img-perfil-01').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-02').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-03').removeClass('transicion-cerrar-item-oculto');

            $('#img-perfil-04').addClass('transicion-cerrar-item-oculto');
            $("#slider-perfiles-xs").carousel('next');
            $('#img-perfil-01').prop('src','rsp/images/slider-perfiles-xs-01.webp');
            count = 0;
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            $('#img-perfil-01').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-02').removeClass('transicion-cerrar-item-oculto');
            $('#img-perfil-03').removeClass('transicion-cerrar-item-oculto');

            $('#img-perfil-04').addClass('transicion-cerrar-item-oculto');
            $("#slider-perfiles-xs").carousel('prev');
            $('#img-perfil-03').prop('src','rsp/images/slider-perfiles-xs-03.webp');
            count = 0;
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:50
    });



    $("#perfil-01").on('click', function() {
        count += 1;
        //console.log('Contador P1' + count)
        
        if (count == 1) {
            $('#img-perfil-01').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            setTimeout( function(){ 
                $('#img-perfil-01').prop('src','rsp/images/slider-perfiles-xs-05.webp');
                $('#img-perfil-01').addClass('transicion-item-oculto');
            }, 400);
            //console.log('Click 1 funciona' + count)
        }
        else if (count == 2) {  
            $('#img-perfil-01').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            setTimeout( function(){ 
                $('#img-perfil-01').prop('src','rsp/images/slider-perfiles-xs-01.webp');
                $('#img-perfil-01').addClass('transicion-item-oculto');
            }, 400);
            //console.log('Click 1 funciona' + count)
            count = 0;
        }
    });

    $("#perfil-02").on('click', function() {
        count += 1;
        //console.log('Contador P2' + count)
        
        if (count == 1) {
            $('#img-perfil-02').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            setTimeout( function(){ 
                $('#img-perfil-02').prop('src','rsp/images/slider-perfiles-xs-06.webp');
                $('#img-perfil-02').addClass('transicion-item-oculto');
            }, 400);
            //console.log('Click 1 funciona' + count)
        }
        else if (count == 2) {  
            $('#img-perfil-02').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            setTimeout( function(){ 
                $('#img-perfil-02').prop('src','rsp/images/slider-perfiles-xs-02.webp');
                $('#img-perfil-02').addClass('transicion-item-oculto');
            }, 400);
            //console.log('Click 1 funciona' + count)
            count = 0;
        }
    });

    $("#perfil-03").on('click', function() {
        count += 1;
        //console.log('Contador P3' + count)
        
        if (count == 1) {
            $('#img-perfil-03').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            setTimeout( function(){ 
                $('#img-perfil-03').prop('src','rsp/images/slider-perfiles-xs-07.webp');
                $('#img-perfil-03').addClass('transicion-item-oculto');
            }, 400);
            //console.log('Click 1 funciona' + count)
        }
        else if (count == 2) {  
            $('#img-perfil-03').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            setTimeout( function(){ 
                $('#img-perfil-03').prop('src','rsp/images/slider-perfiles-xs-03.webp');
                $('#img-perfil-03').addClass('transicion-item-oculto');
            }, 400);
            //console.log('Click 1 funciona' + count)
            count = 0;
        }
    });

    $("#perfil-04").on('click', function() {
        count += 1;
        //console.log('Contador P4' + count)
        
        if (count == 1) {
            $('#img-perfil-04').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            setTimeout( function(){ 
                $('#img-perfil-04').prop('src','rsp/images/slider-perfiles-xs-08.webp');
                $('#img-perfil-04').addClass('transicion-item-oculto');
            }, 400);
            //console.log('Click 1 funciona' + count)
        }
        else if (count == 2) {  
            $('#img-perfil-04').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            setTimeout( function(){ 
                $('#img-perfil-04').prop('src','rsp/images/slider-perfiles-xs-04.webp');
                $('#img-perfil-04').addClass('transicion-item-oculto');
            }, 400);
            //console.log('Click 1 funciona' + count)
            count = 0;
        }
    });

    $("#btn-transicion-perfiles-xs").on('click', function() {
        if ($("#img-perfil-01").hasClass("transicion-item-oculto")){
            $('#img-perfil-01').prop('src','rsp/images/slider-perfiles-xs-01.webp');
    
            $('#img-perfil-01').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            $('#img-perfil-02').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            $('#img-perfil-03').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            $('#img-perfil-04').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
    
            $('#img-perfil-01').addClass('transicion-cerrar-item-oculto');
            $("#slider-perfiles-xs").carousel('next');
            count = 0;
        }
        else if ($("#img-perfil-02").hasClass("transicion-item-oculto")){
            $('#img-perfil-02').prop('src','rsp/images/slider-perfiles-xs-02.webp');
    
            $('#img-perfil-01').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            $('#img-perfil-02').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            $('#img-perfil-03').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            $('#img-perfil-04').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
    
            $('#img-perfil-02').addClass('transicion-cerrar-item-oculto');
            $("#slider-perfiles-xs").carousel('next');
            count = 0;
        }
        else if ($("#img-perfil-03").hasClass("transicion-item-oculto")){
            $('#img-perfil-03').prop('src','rsp/images/slider-perfiles-xs-03.webp');
    
            $('#img-perfil-01').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            $('#img-perfil-02').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            $('#img-perfil-03').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            $('#img-perfil-04').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
    
            $('#img-perfil-03').addClass('transicion-cerrar-item-oculto');
            $("#slider-perfiles-xs").carousel('next');
            count = 0;
        }
        else if ($("#img-perfil-04").hasClass("transicion-item-oculto")){
            $('#img-perfil-04').prop('src','rsp/images/slider-perfiles-xs-04.webp');
    
            $('#img-perfil-01').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            $('#img-perfil-02').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            $('#img-perfil-03').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
            $('#img-perfil-04').removeClass('transicion-item-oculto transicion-cerrar-item-oculto');
    
            $('#img-perfil-04').addClass('transicion-cerrar-item-oculto');
            $("#slider-perfiles-xs").carousel('next');
            count = 0;
        }
        else if ($("#img-perfil-01").hasClass("transicion-cerrar-item-oculto")){
            $('#img-perfil-01').removeClass('transicion-cerrar-item-oculto');
        }
        else if ($("#img-perfil-02").hasClass("transicion-cerrar-item-oculto")){
            $('#img-perfil-02').removeClass('transicion-cerrar-item-oculto');
        }
        else if ($("#img-perfil-03").hasClass("transicion-cerrar-item-oculto")){
            $('#img-perfil-03').removeClass('transicion-cerrar-item-oculto');
        }
        else if ($("#img-perfil-04").hasClass("transicion-cerrar-item-oculto")){
            $('#img-perfil-04').removeClass('transicion-cerrar-item-oculto');
        }
    });
    
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
        $("#checkbox-opcion-03-b").attr("value", "| Prueba de polígrafia |");
    }else {
        $("#checkbox-opcion-03-b").attr("value", "");
    }

});

// Select 03
$("#checkbox-opcion-03-c").click(function(){
    if ($("#checkbox-opcion-03-c").is(':checked')){
        $("#checkbox-opcion-03-c").attr("value", "| Estudio Reputacional |");
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
let actualURL = window.location.href
$('#actualURL').attr('value',actualURL)

if (actualURL.includes('pauta-facebook-ads')) {
  $('#getURL').attr('value','pauta-facebook-ads')
}
else if (actualURL.includes('pauta-google-search')) {
  $('#getURL').attr('value','pauta-google-search')
}
else{
  $('#getURL').attr('value','seo-sitio-web')
}

//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO CONTACTO PC
$("#contactForm").validator().on("submit", function (event) {
    var valido_form_01 = 0;
    var valido_select_02 = 0;
    var valido_check = 0;


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
        $("#form-submit").prop("disabled", true);
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

    var first_name = $("#first_name").val();
    var telephone = $("#telephone").val();
    var email = $("#email").val();
    var getURL = ($('#getURL').val());
    var actualURL = ($('#actualURL').val());

    $.ajax({
        type: "POST",
        url:  "rsp/php/process_formulario_rsp_xs.php",
        data: "first_name=" + first_name +
              "&empresa=" + empresa +
              "&nit=" + nit +
              "&checkbox_seleccionados=" + checkbox_seleccionados +
              "&email=" + email +
              "&telephone=" + telephone +
              "&getURL=" + getURL +
              "&actualURL=" + actualURL,

        success: function(text){
            if (text == "success"){
                formSuccess();
                window.location.href = "mensaje_enviado_formulario_rsp_xs.html";
            } else {
                submitMSG(false,text);
            }
        }
    });
}

