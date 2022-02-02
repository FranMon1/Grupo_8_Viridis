const qs = (element) => {
    return document.querySelector(element);
}

const qsa = (element) => {
    return document.querySelectorAll(element)
}


window.addEventListener("load", function() {

    
let addToCart = qsa(".add-to-cart");
let cartIcon = qs("#cart_icon")
let cartNumber = qs("#cart_number");
let item = document.getElementById("productName");
let numberCart = 0;


if(cart == null) {
    var cart = []
} else {
   var cart = JSON.parse(localStorage.getItem("cart"))
}



 if(localStorage.getItem("cart")){
     cart = JSON.parse(localStorage.getItem("cart"))
 }

addToCart.forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault()

        cartIcon.classList.remove("displayNone")

        cart.push(button.value);
        localStorage.setItem("cart", JSON.stringify(cart));
        numberCart += 1;
        cartNumber.innerText = numberCart;
        console.log(cart)
       
    })
})

numberCart = cart.length
cartNumber.innerText = numberCart;

if(numberCart === 0) {
    cartIcon.classList.add("displayNone")
}


function storage () {
    localStorage.removeItem("cart")
}
setTimeout(storage,1000 * 60)




})