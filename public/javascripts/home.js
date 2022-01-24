

window.addEventListener("load", function() {

// variables

    const sectionImages = qsa('.middle_section_main_img img')
    let promoImg2 = qs("#promoImg2");
    let promoImg3 = qs("#promoImg3");
    let promoImg4 = qs("#promoImg4");
    let promoImg5 = qs("#promoImg5");
    let promoImg6 = qs("#promoImg6");

    let clubImg = qs("#clubImg");
    let bagsImg = qs("#bagsImg");
    let shoesImg = qs("#shoesImg");
    let golfballsImg = qs("#golfballsImg");
    let setsImg = qs("#setsImg");
   
// SliderImg Functions
function imgMouseOver (newImg) {
    newImg.classList.add("inStyle");
    }

function updateDiv () {
    if(sectionImages.classList == "inStyle"){
        sectionImages.classList.remove("inStyle")
       }
    }

function imgOut () {
    sectionImages.forEach(image => {
        if(image.classList !== "inStyle"){
            image.classList.remove("inStyle")
            image.classList.add("outStyle")
           }
    })
}

    
clubImg.addEventListener("mouseover", function(e) {
    updateDiv()
    imgOut();
    imgMouseOver(promoImg2);
})

bagsImg.addEventListener("mouseover", function(e) {
    updateDiv()
    imgOut();
    imgMouseOver(promoImg3);
})

shoesImg.addEventListener("mouseover", function(e) {
    updateDiv()
    imgOut();
    imgMouseOver(promoImg4);
})



golfballsImg.addEventListener("mouseover", function(e) {
    updateDiv()
    imgOut();
    imgMouseOver(promoImg5);
})

setsImg.addEventListener("mouseover", function(e) {
    updateDiv()
    imgOut();
    imgMouseOver(promoImg6);
})

// Cart Functions


let addToCart = qsa(".add-to-cart");
let cartIcon = qs("#cart_icon")
let cartNumber = qs("#cart_number");
let item = document.getElementById("productName");

let cart = [];

let numberCart = 0;

if(!cartNumber.innerText) {
    console.log(cartNumber);
    cartIcon.classList.add("displayNone")
}
localStorage.removeItem("cart")

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
        localStorage.setItem("cartList", JSON.stringify(cart))
    })
})

localStorage.setItem("cartList", cart.obj)
window.addEventListener("click" , function (e) {
    
})







})
