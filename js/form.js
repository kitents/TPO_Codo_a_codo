

const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
    /*usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo*/
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    movil: /^\d{7,14}$/, // 7 a 14 numeros.
    /*password: /^.{4,12}$/, // 4 a 12 digitos.*/
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s]{1,500}$/, // Letras y espacios, pueden llevar acentos.


}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('gruponombre').classList.remove('formulariogrupo-incorrecto');
                document.getElementById('gruponombre').classList.add('formulariogrupo-correcto');
                document.querySelector('#gruponombre i').classList.add('fa-circle-xmark');
                document.querySelector('#gruponombre i').classList.remove('fa-circle-xmark');
                document.querySelector('#gruponombre .formularioinput-error').classList.remove('formularioinput-error-activo');
            }
            else {
                document.getElementById('gruponombre').classList.add('formulariogrupo-incorrecto');
                document.getElementById('gruponombre').classList.remove('formulariogrupo-correcto');
                document.querySelector('#gruponombre i').classList.add('fa-circle-xmark');
                document.querySelector('#gruponombre i').classList.remove('fa-circle-xmark');
                document.querySelector('#gruponombre .formularioinput-error').classList.add('formularioinput-error-activo');
            }

            break;
        case "apellido":
            if (expresiones.apellido.test(e.target.value)) {
                document.getElementById('grupoapellido').classList.remove('formulariogrupo-incorrecto');
                document.getElementById('grupoapellido').classList.add('formulariogrupo-correcto');
                document.querySelector('#grupoapellido i').classList.add('fa-circle-xmark');
                document.querySelector('#grupoapellido i').classList.remove('fa-circle-xmark');
                document.querySelector('#grupoapellido .formularioinput-error').classList.remove('formularioinput-error-activo');
            }
            else {
                document.getElementById('grupoapellido').classList.add('formulariogrupo-incorrecto');
                document.getElementById('grupoapellido').classList.remove('formulariogrupo-correcto');
                document.querySelector('#grupoapellido i').classList.add('fa-circle-xmark');
                document.querySelector('#grupoapellido i').classList.remove('fa-circle-xmark');
                document.querySelector('#grupoapellido .formularioinput-error').classList.add('formularioinput-error-activo');
            }

            break;
        case "movil":
            if (expresiones.movil.test(e.target.value)) {
                document.getElementById('grupomovil').classList.remove('formulariogrupo-incorrecto');
                document.getElementById('grupomovil').classList.add('formulariogrupo-correcto');
                document.querySelector('#grupomovil i').classList.add('fa-circle-xmark');
                document.querySelector('#grupomovil i').classList.remove('fa-circle-xmark');
                document.querySelector('#grupomovil .formularioinput-error').classList.remove('formularioinput-error-activo');
            }
            else {
                document.getElementById('grupomovil').classList.add('formulariogrupo-incorrecto');
                document.getElementById('grupomovil').classList.remove('formulariogrupo-correcto');
                document.querySelector('#grupomovil i').classList.add('fa-circle-xmark');
                document.querySelector('#grupomovil i').classList.remove('fa-circle-xmark');
                document.querySelector('#grupomovil .formularioinput-error').classList.add('formularioinput-error-activo');
            }

            break;
        case "email":
            if (expresiones.email.test(e.target.value)) {
                document.getElementById('grupoemail').classList.remove('formulariogrupo-incorrecto');
                document.getElementById('grupoemail').classList.add('formulariogrupo-correcto');
                document.querySelector('#grupoemail i').classList.add('fa-circle-xmark');
                document.querySelector('#grupoemail i').classList.remove('fa-circle-xmark');
                document.querySelector('#grupoemail .formularioinput-error').classList.remove('formularioinput-error-activo');
            }
            else {
                document.getElementById('grupoemail').classList.add('formulariogrupo-incorrecto');
                document.getElementById('grupoemail').classList.remove('formulariogrupo-correcto');
                document.querySelector('#grupoemail i').classList.add('fa-circle-xmark');
                document.querySelector('#grupoemail i').classList.remove('fa-circle-xmark');
                document.querySelector('#grupoemail .formularioinput-error').classList.add('formularioinput-error-activo');
            }

            break;
        case "mensaje":
            if (expresiones.mensaje.test(e.target.value)) {
                document.getElementById('grupomensaje').classList.remove('formulariogrupo-incorrecto');
                document.getElementById('grupomensaje').classList.add('formulariogrupo-correcto');
                document.querySelector('#grupomensaje i').classList.add('fa-circle-xmark');
                document.querySelector('#grupomensaje i').classList.remove('fa-circle-xmark');
                document.querySelector('#grupomensaje .formularioinput-error').classList.remove('formularioinput-error-activo');
            }
            else {
                document.getElementById('grupomensaje').classList.add('formulariogrupo-incorrecto');
                document.getElementById('grupomensaje').classList.remove('formulariogrupo-correcto');
                document.querySelector('#grupomensaje i').classList.add('fa-circle-xmark');
                document.querySelector('#grupomensaje i').classList.remove('fa-circle-xmark');
                document.querySelector('#grupomensaje .formularioinput-error').classList.add('formularioinput-error-activo');
            }

            break;
    }

}
const validarCampo = () => {

}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});