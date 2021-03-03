$("#aceptar_terminos_popUp_web").on("click", function() {
    if ($("#checkbox_web").is(':checked')){
        $('.bs-example-modal.terminos-modal').modal('hide');
    }
    else{
        $('.bs-example-modal.terminos-modal').modal('hide');
        $("#checkbox_web").prop("checked", true);
    }
});

$("#btn-hamburguesa").click(function () {
    if ($("#nav-site-xs").hasClass("in")){
        $('#img-menu-hamburguesa').prop("src","sg-sst/images/hamburguesa-xs.webp");
    }
    else{
        $('#img-menu-hamburguesa').prop("src","sg-sst/images/cerrar-hamburguesa-xs.webp");
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

//COLLAPSE VERSION WEB
$('#collapseOne-xs').collapse({
    toggle: false
})
$("#collapse-xs-01").on('click tap', function() {
    if ($("#collapseOne-xs").hasClass("in")){
        $("#desplegar-xs-01").replaceWith('<img id="desplegar-xs-01" src="sg-sst/images/icono-desplegar-xs.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-xs-01").replaceWith('<img id="desplegar-xs-01" src="sg-sst/images/icono-comprimir-xs.webp" alt="Icono desplegar"></span>');
    }
});


$('#collapseTwo-xs').collapse({
    toggle: false
})
$("#collapse-xs-02").on('click tap', function() {
    if ($("#collapseTwo-xs").hasClass("in")){
        $("#desplegar-xs-02").replaceWith('<img id="desplegar-xs-02" src="sg-sst/images/icono-desplegar-xs.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-xs-02").replaceWith('<img id="desplegar-xs-02" src="sg-sst/images/icono-comprimir-xs.webp" alt="Icono desplegar"></span>');
    }
});

$('#collapseThree-xs').collapse({
    toggle: false
})
$("#collapse-xs-03").on('click tap', function() {
    if ($("#collapseThree-xs").hasClass("in")){
        $("#desplegar-xs-03").replaceWith('<img id="desplegar-xs-03" src="sg-sst/images/icono-desplegar-xs.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-xs-03").replaceWith('<img id="desplegar-xs-03" src="sg-sst/images/icono-comprimir-xs.webp" alt="Icono desplegar"></span>');
    }
});


//COLLAPSE VERSION WEB
$('#collapseOne').collapse({
    toggle: false
})
$("#collapse-web-01").on('click tap', function() {
    if ($("#collapseOne").hasClass("in")){
        $("#desplegar-web-01").replaceWith('<img id="desplegar-web-01" src="sg-sst/images/icono-desplegar.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-web-01").replaceWith('<img id="desplegar-web-01" src="sg-sst/images/icono-comprimir.webp" alt="Icono desplegar"></span>');
    }
});

$('#collapseTwo').collapse({
    toggle: false
})
$("#collapse-web-02").on('click tap', function() {
    if ($("#collapseTwo").hasClass("in")){
        $("#desplegar-web-02").replaceWith('<img id="desplegar-web-02" src="sg-sst/images/icono-desplegar.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-web-02").replaceWith('<img id="desplegar-web-02" src="sg-sst/images/icono-comprimir.webp" alt="Icono desplegar"></span>');
    }
});

$('#collapseThree').collapse({
    toggle: false
})
$("#collapse-web-03").on('click tap', function() {
    if ($("#collapseThree").hasClass("in")){
        $("#desplegar-web-03").replaceWith('<img id="desplegar-web-03" src="sg-sst/images/icono-desplegar.webp" alt="Icono desplegar"></span>');
    }else{
        $("#desplegar-web-03").replaceWith('<img id="desplegar-web-03" src="sg-sst/images/icono-comprimir.webp" alt="Icono desplegar"></span>');
    }
});

//NAV XS
$("#cerrar-nav").on("click", function() {
    $('.navbar-toggle').click();
});

$(".cerrar-nav").on("click", function() {
    $('.navbar-toggle').click();
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

    $.ajax({
        type: "POST",
        url:  "sg-sst/php/process_formulario_sst_xs.php",
        data: "empresa=" + empresa +
              "&nit=" + nit +
              "&checkbox_seleccionados=" + checkbox_seleccionados +

              "&first_name=" + first_name +
              "&telephone=" + telephone +
              "&email=" + email,

        success: function(text){
            if (text == "success"){
                formSuccess();
                window.location.href = "mensaje_enviado_formulario_sst_xs.html";
            } else {
                submitMSG(false,text);
            }
        }
    });
}

