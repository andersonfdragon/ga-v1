$("#aceptar_terminos_popUp_web").on("click", function() {
    if ($("#checkbox_web").is(':checked')){
        $('.bs-example-modal.terminos-modal').modal('hide');
    }
    else{
        $('.bs-example-modal.terminos-modal').modal('hide');
        $("#checkbox_web").prop("checked", true);
    }
});

// Colapsar menu - despues de click en menu hamburguesa
$(document).ready(function(){
    $(".cerrarMenu").click(function () {
        $('.navbar-toggle').click();
    });

});

$("#asesoria-comercial-web").click(function () {
    if ($("#collapseWhatsapp").hasClass("in")){
        $('#change-icon-arrow').prop("src","ast/images/icono-desplegar-opcion-menu-web.webp");
    }
    else{
        $('#change-icon-arrow').prop("src","ast/images/icono-desplegado-opcion-menu-web.webp");
    }
});

$("#btn-hamburguesa").click(function () {
    if ($("#nav-site-xs").hasClass("in")){
        $('#img-menu-hamburguesa').prop("src","ast/images/hamburguesa-xs.webp");
    }
    else{
        $('#img-menu-hamburguesa').prop("src","ast/images/cerrar-hamburguesa-xs.webp");
    }
});



//DROPDOWN MENU XS
$('.dropdown-toggle').dropdown()


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


//COLLAPSE VERSION WEB
$('#collapseOne-xs').collapse({
    toggle: false
})
$("#collapse-xs-01").on('click', function() {
    if ($("#collapseOne-xs").hasClass("in")){
        $("#desplegar-xs-01").replaceWith('<img id="desplegar-xs-01" src="ast/images/icono-desplegar-xs.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-xs-01").replaceWith('<img id="desplegar-xs-01" src="ast/images/icono-comprimir-xs.webp" alt="Icono desplegar"></span>');
    }
});


$('#collapseTwo-xs').collapse({
    toggle: false
})
$("#collapse-xs-02").on('click', function() {
    if ($("#collapseTwo-xs").hasClass("in")){
        $("#desplegar-xs-02").replaceWith('<img id="desplegar-xs-02" src="ast/images/icono-desplegar-xs.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-xs-02").replaceWith('<img id="desplegar-xs-02" src="ast/images/icono-comprimir-xs.webp" alt="Icono desplegar"></span>');
    }
});

$('#collapseThree-xs').collapse({
    toggle: false
})
$("#collapse-xs-03").on('click', function() {
    if ($("#collapseThree-xs").hasClass("in")){
        $("#desplegar-xs-03").replaceWith('<img id="desplegar-xs-03" src="ast/images/icono-desplegar-xs.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-xs-03").replaceWith('<img id="desplegar-xs-03" src="ast/images/icono-comprimir-xs.webp" alt="Icono desplegar"></span>');
    }
});


//COLLAPSE VERSION WEB
$('#collapseOne').collapse({
    toggle: false
})
$("#collapse-web-01").on('click', function() {
    if ($("#collapseOne").hasClass("in")){
        $("#desplegar-web-01").replaceWith('<img id="desplegar-web-01" src="ast/images/icono-desplegar.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-web-01").replaceWith('<img id="desplegar-web-01" src="ast/images/icono-comprimir.webp" alt="Icono desplegar"></span>');
    }
});

$('#collapseTwo').collapse({
    toggle: false
})
$("#collapse-web-02").on('click', function() {
    if ($("#collapseTwo").hasClass("in")){
        $("#desplegar-web-02").replaceWith('<img id="desplegar-web-02" src="ast/images/icono-desplegar.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-web-02").replaceWith('<img id="desplegar-web-02" src="ast/images/icono-comprimir.webp" alt="Icono desplegar"></span>');
    }
});

$('#collapseThree').collapse({
    toggle: false
})
$("#collapse-web-03").on('click', function() {
    if ($("#collapseThree").hasClass("in")){
        $("#desplegar-web-03").replaceWith('<img id="desplegar-web-03" src="ast/images/icono-desplegar.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-web-03").replaceWith('<img id="desplegar-web-03" src="ast/images/icono-comprimir.webp" alt="Icono desplegar"></span>');
    }
});

//NAV XS
$("#cerrar-nav").on("click", function() {
    $('.navbar-toggle').click();
});

$(".cerrar-nav").on("click", function() {
    $('.navbar-toggle').click();
});


//HOVER EJECUTIVOS DIV 07 WEB
$(document).ready(function(){
    $("#ejecutivos-hover-inspector").mouseout(function(){
        $("#ejecutivo-01").removeClass('index-01 index-02 index-03 index-04 transicion-ejecutivo-inactivo');
        $("#ejecutivo-02").removeClass('index-01 index-02 index-03 index-04 transicion-ejecutivo-inactivo');
        $("#ejecutivo-03").removeClass('index-01 index-02 index-03 index-04 transicion-ejecutivo-inactivo');
        $("#ejecutivo-04").removeClass('index-01 index-02 index-03 index-04 transicion-ejecutivo-inactivo');


        $("#ejecutivo-01").addClass('index-01');

        $("#ejecutivo-02").addClass('index-02');
        $("#ejecutivo-03").addClass('index-04');
        $("#ejecutivo-04").addClass('index-03');
    });
});

$("#ejecutivo-01").mouseenter(function(){
    $("#ejecutivo-01").removeClass('index-01 index-02 index-03 index-04 transicion-ejecutivo-inactivo');
    $("#ejecutivo-02").removeClass('index-01 index-02 index-03 index-04');
    $("#ejecutivo-03").removeClass('index-01 index-02 index-03 index-04');
    $("#ejecutivo-04").removeClass('index-01 index-02 index-03 index-04');

    $("#ejecutivo-01").addClass('index-04');

    $("#ejecutivo-02").addClass('transicion-ejecutivo-inactivo index-03');
    $("#ejecutivo-03").addClass('transicion-ejecutivo-inactivo index-02');
    $("#ejecutivo-04").addClass('transicion-ejecutivo-inactivo index-01');
});

$("#ejecutivo-01").mouseenter(function(){
    $("#ejecutivo-01").removeClass('index-01 index-02 index-03 index-04 transicion-ejecutivo-inactivo');
    $("#ejecutivo-02").removeClass('index-01 index-02 index-03 index-04');
    $("#ejecutivo-03").removeClass('index-01 index-02 index-03 index-04');
    $("#ejecutivo-04").removeClass('index-01 index-02 index-03 index-04');

    $("#ejecutivo-01").addClass('index-04');

    $("#ejecutivo-02").addClass('transicion-ejecutivo-inactivo index-03');
    $("#ejecutivo-03").addClass('transicion-ejecutivo-inactivo index-02');
    $("#ejecutivo-04").addClass('transicion-ejecutivo-inactivo index-01');
});

$("#ejecutivo-02").mouseenter(function(){
    $("#ejecutivo-01").removeClass('index-01 index-02 index-03 index-04');
    $("#ejecutivo-02").removeClass('index-01 index-02 index-03 index-04 transicion-ejecutivo-inactivo');
    $("#ejecutivo-03").removeClass('index-01 index-02 index-03 index-04');
    $("#ejecutivo-04").removeClass('index-01 index-02 index-03 index-04');

    $("#ejecutivo-02").addClass('index-04');

    $("#ejecutivo-01").addClass('transicion-ejecutivo-inactivo index-03');
    $("#ejecutivo-03").addClass('transicion-ejecutivo-inactivo index-02');
    $("#ejecutivo-04").addClass('transicion-ejecutivo-inactivo index-01');
});

$("#ejecutivo-03").mouseenter(function(){
    $("#ejecutivo-01").removeClass('index-01 index-02 index-03 index-04');
    $("#ejecutivo-02").removeClass('index-01 index-02 index-03 index-04');
    $("#ejecutivo-03").removeClass('index-01 index-02 index-03 index-04 transicion-ejecutivo-inactivo');
    $("#ejecutivo-04").removeClass('index-01 index-02 index-03 index-04');

    $("#ejecutivo-03").addClass('index-04');

    $("#ejecutivo-01").addClass('transicion-ejecutivo-inactivo index-01');
    $("#ejecutivo-02").addClass('transicion-ejecutivo-inactivo index-02');
    $("#ejecutivo-04").addClass('transicion-ejecutivo-inactivo index-03');
});

$("#ejecutivo-04").mouseenter(function(){
    $("#ejecutivo-01").removeClass('index-01 index-02 index-03 index-04');
    $("#ejecutivo-02").removeClass('index-01 index-02 index-03 index-04');
    $("#ejecutivo-03").removeClass('index-01 index-02 index-03 index-04');
    $("#ejecutivo-04").removeClass('index-01 index-02 index-03 index-04 transicion-ejecutivo-inactivo');

    $("#ejecutivo-04").addClass('index-04');

    $("#ejecutivo-01").addClass('transicion-ejecutivo-inactivo index-01');
    $("#ejecutivo-02").addClass('transicion-ejecutivo-inactivo index-02');
    $("#ejecutivo-03").addClass('transicion-ejecutivo-inactivo index-03');
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
    var valido_check = 0;


    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        submitMSG(true, "");
        valido_form_01 = 1;
    }

    //Checkbox
    if ($("#checkbox_web").is(':checked') === false){
        submitMSG_condiciones(false, "Aún no acepta terminos y condiciones.");
    }else {
        event.preventDefault();
        submitMSG_condiciones(true, "");
        valido_check = 1;
    }

    if ((valido_form_01)&&(valido_check) === 1) {
        event.preventDefault();
        submitMSG(true, "");
        $("#form-submit").prop("disabled", true);
        submitForm();
    }
    else {
        submitMSG(false, "Complete los campos que faltan");
    }
});


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
    var numero_colaboradores = $("#numero_colaboradores").val();
    var funciones = $('select[id=funciones]').val();
    var first_name = $("#first_name").val();
    var email = $("#email").val();
    var telephone = $("#telephone").val();
    var getURL = ($('#getURL').val());
    var actualURL = ($('#actualURL').val());
    
    $.ajax({
        type: "POST",
        url:  "ast/php/process_formulario_ast_xs.php",
        data: "empresa=" + empresa +
              "&nit=" + nit +
              "&numero_colaboradores=" + numero_colaboradores+
              "&funciones=" + funciones +
              "&first_name=" + first_name +
              "&email=" + email +
              "&telephone=" + telephone +
              "&getURL=" + getURL +
              "&actualURL=" + actualURL,
              
              
        success: function(text){
            if (text == "success"){
                formSuccess();
                window.location.href = "mensaje_enviado_formulario_ast_xs.html";
            } else {
                submitMSG(false,text);
            }
        }
    });
}

