$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#name').val() == '' ){
            errores += '<p>Tu nombre</p>';
            $('#name').css("border-color", "#F14B4B")
        } else{
            $('#name').css("border-color", "#d1d1d1")
        }

        // Validado Apellido ==============================
        if( $('#lastname').val() == '' ){
            errores += '<p>Tu apellido</p>';
            $('#lastname').css("border-color", "#F14B4B")
        } else{
            $('#lastname').css("border-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Tu correo electrónico</p>';
            $('#email').css("border-color", "#F14B4B")
        } else{
            $('#email').css("border-color", "#d1d1d1")
        }

        // Validado Teléfono ==============================
        if( $('#phone').val() == '' ){
            errores += '<p>Tu teléfono</p>';
            $('#phone').css("border-color", "#F14B4B")
        } else{
            $('#phone').css("border-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Tu mensaje</p>';
            $('#mensaje').css("border-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal-wrap">'+
                                    '<div class="mensaje-modal">'+
                                        '<h3>Te faltó escribir</h3>'+
                                        errores+
                                        '<span id="btnClose">cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal-wrap').remove();
        });
    });

});