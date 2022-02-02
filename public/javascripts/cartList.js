

    const productName = qs("#productName");
    const productImg = qs("#productImg");
    const cartProduct = qs("#cartProduct");
    const main = qs("main")
    const string = localStorage.getItem("cart");
    const data = string.match(/\d+/g);
 
    if(data == null) {
      
      let notfound = document.createElement("img")
      let notfoundtext = document.createElement("p");
      notfoundtext.innerText = "No tienes Items en tu carrito"
      notfound.setAttribute('src', `/images/profile_empty2.png`); 
      notfound.classList.add("notFound")
      main.innerHTML = "<div class='divImgnotFound'>" +  notfound.outerHTML + notfoundtext.outerHTML + "</div>"
      
    }
   
    
    const numbers = data.map(Number) // Recibe todos los parametros de la variable string, solo deja los numeros pero queda todo el resto como NaN
    const carrito = numbers.filter(n =>
        !Number.isNaN(n));
      console.log(carrito);
      console.log(data);

    const subtotal = qs("#subtotal");
    let total = 0;
     
   
    fetch("http://localhost:3001/products/api")
            .then(response =>  response.json())
            .then(prod =>  {

           for(let i = 0; i < prod.products.length; i++) {
               for( let j = 0; j < carrito.length; j++) {
                
              if(prod.products[i].id === carrito[j]) {

                const nombre = document.createElement("p");
                const imagen = document.createElement("img");
                const precio = document.createElement("h4");
                const removeBtn = document.createElement("button")
                const productData = document.createElement("div")
               
              removeBtn.innerText = "Quitar item de la lista"
              removeBtn.type = "submit";
              removeBtn.value = carrito[j]
              removeBtn.id = "removebtn"
              removeBtn.classList.add("removebtn");
              productData.classList.add("product_data")
        

              nombre.innerText =  prod.products[i].name;
              precio.innerText =  "$ " + prod.products[i].price;

              imagen.setAttribute('src', `/images/products/${prod.products[i].images[0].name}`); 

              productData.innerHTML += nombre.outerHTML + removeBtn.outerHTML;
              cartProduct.innerHTML += "<div class='wholeProduct'>" + imagen.outerHTML + productData.outerHTML + precio.outerHTML + "</div>" 
              // cartProduct.appendChild(removeBtn)
                
               total += +prod.products[i].price
               subtotal.innerText = "Total $ " + total


               
              let buttons = document.querySelectorAll("#removebtn")
                buttons.forEach(button =>{
                  
                  button.addEventListener("click", function(e) {
                    e.preventDefault()
                  const newCart = data.indexOf(e.target.value)
               
                  if(newCart > -1){
                    data.splice(newCart, 1)
                  }
                  console.log(data);
                  localStorage.setItem("cart", JSON.stringify(data))
                  window.location.reload()
                })
            })
            } 
           }
          }
        });
       
       
        



