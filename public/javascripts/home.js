

window.addEventListener("load", function() {

// variables

    const sectionImages = qsa('.middle_section_main_img img')

    //Images
    let promoImg2 = qs("#promoImg2");
    let promoImg3 = qs("#promoImg3");
    let promoImg4 = qs("#promoImg4");
    let promoImg5 = qs("#promoImg5");
    let promoImg6 = qs("#promoImg6");

    // Background
    const bgPanels = qsa("#bgPanels div")
    let bgPanel2 = qs("#bg-panel2")
    let bgPanel3 = qs("#bg-panel3")
    let bgPanel4 = qs("#bg-panel4")
    let bgPanel5 = qs("#bg-panel5")
    let bgPanel6 = qs("#bg-panel6")

    //Icons

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

function bgIn (newBg) {
    newBg.classList.add("inStyle");
}

function bgOut () {
    bgPanels.forEach(panel => {
        if(panel.classList !== "inStyle"){
            panel.classList.remove("inStyle")
            panel.classList.add("outStyle")
           }
    })
}
console.log(bgPanels);

    
clubImg.addEventListener("mouseover", function(e) {
    updateDiv()
    imgOut();
    bgOut()
    bgIn(bgPanel2);
    imgMouseOver(promoImg2);
})

bagsImg.addEventListener("mouseover", function(e) {
    updateDiv()
    imgOut();
    bgOut()
    bgIn(bgPanel3);
    imgMouseOver(promoImg3);
    
   
})

shoesImg.addEventListener("mouseover", function(e) {
    updateDiv()
    imgOut();
    bgOut()
    bgIn(bgPanel4);
    imgMouseOver(promoImg4);
})



golfballsImg.addEventListener("mouseover", function(e) {
    updateDiv()
    imgOut();
    bgOut()
    bgIn(bgPanel5);
    imgMouseOver(promoImg5);
})

setsImg.addEventListener("mouseover", function(e) {
    updateDiv()
    imgOut();
    bgOut()
    bgIn(bgPanel6);
    imgMouseOver(promoImg6);
})










})
