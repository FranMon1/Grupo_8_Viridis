

window.addEventListener("load", function() {

// variables
    let promoImg = qs("#promoImg");
    let promoImg2 = qs("#promoImg2");
    let clubImg = qs("#clubImg");

    
clubImg.addEventListener("mouseover", function(e) {


    promoImg.classList.add("outStyle");
    promoImg2.classList.add("inStyle");
    console.log("1");
})
})