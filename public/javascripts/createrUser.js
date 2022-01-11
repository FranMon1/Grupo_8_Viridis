window.addEventListener("load", function () {
    // Form
    const form = qs("#userForm");

    // Input validations

    const nombre = qs("#nombre");
    const usuario = qs("#usuario");
    const email = qs("#email");
    const password = qs("#password");
    const image = qs("#image");

    const allowedExtensions = ['.jpeg', '.jpg', '.png'];
    const regexValidationEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;



    // Error spans

    const nameError = qs("#nameError");
    const userError = qs("#userError");
    const emailError = qs("#emailError");
    const passwordError = qs("#passwordError");
    const imageError = qs("#imageError");



    form.addEventListener("submit", function (e) {
        e.preventDefault()
        let errores = {}


        // Name Error

        if (userForm.nombre.value.length <= 0) {
            errores.nombre = "Debe ingresar un nombre";
            nameError.innerText = errores.nombre;
            nombre.style = "border: 2px solid red";
            nameError.style = "margin-bottom: 15px"
        } else if (userForm.nombre.value.length < 2) {
            errores.nombre = "El nombre debe tener al menos 2 caracteres";
            nameError.innerText = errores.nombre;
            nombre.style = "border: 2px solid red";
            nameError.style = "margin-bottom: 15px"
        } else {
            delete errores.nombre;
            nameError.innerText = "";
            nameError.style = "margin-bottom: 0px"
            nombre.style = "border-bottom: 1px solid black";

        }

        // User Error

        if (userForm.usuario.value.length <= 0) {
            errores.usuario = "Debe ingresar un usuario valido";
            userError.innerText = errores.usuario;
            usuario.style = "border: 2px solid red";
            userError.style = "margin-bottom: 15px";
        } else if (userForm.usuario.value.length < 2) {
            errores.usuario = "El usuario debe tener al menos 2 caracteres";
            userError.innerText = errores.usuario;
            usuario.style = "border: 2px solid red";
            userError.style = "margin-bottom: 15px";
        } else {
            delete errores.usuario;
            userError.innerText = ""
            usuario.style = "border-bottom: 1px solid black";
            userError.style = "margin-bottom: 0px"
        }

        // Password Error

        if (userForm.password.value.length <= 0) {
            errores.password = "Debe ingresar una contraseña valida";
            passwordError.innerText = errores.password;
            password.style = "border: 2px solid red";
            passwordError.style = "margin-bottom: 15px";
        } else if (userForm.password.value.length <= 8) {
            errores.password= "La contraseña debe tener al menos 8 caracteres";
            passwordError.innerText = errores.password;
            password.style = "border: 2px solid red";
            passwordError.style = "margin-bottom: 15px";
        } else {
            delete errores.password;
            passwordError.innerText = ""
            password.style = "border-bottom: 1px solid black";
            passwordError.style = "margin-bottom: 0px"

        }

        // Email Error

        if (userForm.email.value.length <= 0) {
            errores.email = "Debe ingresar un email valido";
            emailError.innerText = errores.email;
            email.style = "border: 2px solid red";
            emailError.style = "margin-bottom: 15px";
        } else {
            delete errores.email;
            emailError.innerText = ""
            email.style = "border-bottom: 1px solid black";
            emailError.style = "margin-bottom: 0px"

        }

        // Image Error

        if (userForm.image.value.length <= 0) {
            errores.image = "Debe ingresar al menos una imagen";
            imageError.innerText = errores.image;

        }

        else if (
            allowedExtensions.forEach(element => {
                userForm.image.value.includes(element) == false
                console.log(userForm.image.value)
            })) {
            errores.image = "Debe ingresar una imagen de formato .jpg, .jpeg o .png";
            imageError.innerText = errores.image;

            console.log(extension)
        } else {
            delete errores.image;
            imageError.innerText = ""
            image.style = "border-bottom: 1px solid black";


        }
        console.log(errores)
        if (Object.keys(errores).length <= 0) {
            userForm.submit()
        }

    })

})