window.addEventListener("load", function() {
/// Input Variables
const form = qs("#form");
const name = qs("#name");
const description = qs("#description");
const price = qs("#price");
const quantity = qs("#quantity");
const image = qs("#image");

const allowedExtensions = ['.jpeg', '.jpg', '.png']


// Error Variables
const nameError = qs("#nameError");
const descriptionError = qs("#descriptionError");
const priceError = qs("#priceError");
const quantityError = qs("#quantityError");
const imageError = qs("#imageError");




form.addEventListener("submit", function(e) {
    
    e.preventDefault();
    let errores ={}

    if(form.name.value.length <= 0){
        errores.name = "Debe ingresar un nombre para el producto, o dejar el anterior";
        nameError.innerText = errores.name;
        name.style = "border: 2px solid red";
        nameError.style = "margin-bottom: 15px";
    } else if (form.name.value.length < 5 ){
        errores.name = "El nombre del producto debe tener al menos 5 caracteres";
        nameError.innerText = errores.name;
        name.style = "border: 2px solid red";
        nameError.style = "margin-bottom: 15px";
    } else {
        delete errores.name;
        nameError.innerText = "";
        nameError.style = "margin-bottom: 0px"
        name.style = "border: none";

    }

    // Description Error

    if(form.description.value.length <= 0){
        errores.description = "Debe ingresar una descripción para el producto";
        descriptionError.innerText = errores.description;
        description.style = "border: 2px solid red";
        descriptionError.style = "margin-bottom: 15px";
    } else if (form.description.value.length < 20 ){
        errores.description = "La descripción debe tener al menos 20 caracteres";
        descriptionError.innerText = errores.description;
        description.style = "border: 2px solid red";
       
    } else {
        delete errores.description;
        descriptionError.innerText = ""
        description.style = "border: none";
        descriptionError.style = "margin-bottom: 0px"
    }

    // Price Error

    if(form.price.value.length <= 0){
        errores.price = "Debe ingresar un precio";
        priceError.innerText = errores.price;
        price.style = "border: 2px solid red";
        priceError.style = "margin-bottom: 15px";
       
    }  else {
        delete errores.price;
        priceError.innerText = ""
        price.style = "border: none";
        priceError.style = "margin-bottom: 0px"

    }

    // Quantity Error

    if(form.quantity.value.length <= 0){
        errores.quantity = "Debe ingresar una cantidad";
        quantityError.innerText = errores.quantity;
        quantity.style = "border: 2px solid red";
        quantityError.style = "margin-bottom: 15px";
        
    }  else {
        delete errores.quantity;
        quantityError.innerText = ""
        quantity.style = "border: none";
        quantityError.style = "margin-bottom: 0px"

    }

    // Image Error

    if(form.image.value.length <= 0){
        errores.image = "Debe ingresar al menos una imagen";
        imageError.innerText = errores.image;
      
    } 
    
    else if(
        !allowedExtensions.forEach(element => {
            form.image.value.includes(element) == false
           console.log(form.image.value)
    })) {
        errores.image = "Debe ingresar una imagen de format jpg, jpeg o png";
        imageError.innerText = errores.image;
        console.log(errores.image)
    
    } else {
        delete errores.image;
        imageError.innerText = ""
        image.style = "border: none";
     

    }

    if(Object.keys(errores).length <= 0){
        form.submit()
    }

})

})

