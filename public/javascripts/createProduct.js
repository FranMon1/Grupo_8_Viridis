window.addEventListener("load", function() {
const nameError = qs("#nameError");
const form = qs("#form");
const name = qs("#name")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    let errores = {}
    
    if(form.name.value.length <= 0){
        errores.name = "Debe ingresar un nombre para el producto";
        nameError.innerText = errores.name
        window.scrollTo({
            top: 520,
            behavior: 'smooth'
        })
    } else {
        delete errores.name
    }

    if(Object.keys(errores).length < 0){
        form.submit()
    }

})

})