const regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const RegexPassword = /^(?=.*\d).{6,10}$/

export default function validation (inputs) {
    const errors = {};

    if (!inputs.email.length) {
        errors.email='Debe ingresar un correo electrónico'
    } else if (inputs.email.length>35) {
        errors.email='Email demasiado extenso'
    } else if (!regexEmail.test(inputs.email)) {
        errors.email='Formato de email incorrecto'
    }
    if (!RegexPassword.test(inputs.password)) {
        errors.password='La contraseña debe contener entre 6 y 10 caracteres y al menos un número'
    }
    return errors;
}