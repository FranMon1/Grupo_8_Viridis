window.addEventListener("load", function () {
    // Form
    const form = qs("#userLogin");

    // Input validations

    const email = qs("#email");
    const password = qs("#password");
    const regexValidationEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;



    // Error spans

    const emailError = qs("#emailError");
    const passwordError = qs("#passwordError");



    form.addEventListener("submit", function (e) {
        e.preventDefault()
        let errores = {}




        // Email Error

        if (userLogin.email.value.length <= 0) {
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

        // Password Error

        if (userLogin.password.value.length <= 0) {
            errores.password = "Debe ingresar una contraseña valida";
            passwordError.innerText = errores.password;
            password.style = "border: 2px solid red";
            passwordError.style = "margin-bottom: 15px"
        } else if (userLogin.password.value.length <= 8) {
            errores.password= "La contraseña debe tener al menos 8 caracteres";
            passwordError.innerText = errores.password;
            password.style = "border: 2px solid red";
            passwordError.style = "margin-bottom: 15px";
        } else {
            delete errores.password;
            passwordError.innerText = ""
            password.style = "border: none";
            passwordError.style = "margin-bottom: 0px"
        }

        
        console.log(errores)
        if (Object.keys(errores).length <= 0) {
            form.submit()
        }

    })

})