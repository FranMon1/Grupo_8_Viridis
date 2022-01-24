
    const productName = qs("#productName")
    const productImg = qs("#productImg")
    const cartProduct = qs("#cartProduct")
    const string = localStorage.getItem("cartList")
    const data = string.match(/\d+/g)
    const numbers = data.map(Number) // Recibe todos los parametros de la variable string, solo deja los numeros pero queda todo el resto como NaN
    const carrito = numbers.filter(n =>
        !Number.isNaN(n));
      console.log(carrito) 
console.log(data);


    
    const subtotal = qs("#subtotal")
    let total = 0;
 
    fetch("http://localhost:3000/products/api")
            .then(response =>  response.json())
            .then(prod =>  {
                console.log(prod.product)
               
           for(let i = 0; i < prod.product.length; i++) {
               for( let j = 0; j < carrito.length; j++) {
                
              if(prod.product[i].id === carrito[j]) {
              
               
                const nombre = document.createElement("p");
                const imagen = document.createElement("img");
                const precio = document.createElement("h4");
                
               
              nombre.innerText =  prod.product[i].name;
              precio.innerText =  "$ " + prod.product[i].price;
              imagen.setAttribute('src', `/images/products/${prod.image[i].name}`); 
              console.log(imagen);
              cartProduct.innerHTML += "<div>" + imagen.outerHTML + nombre.outerHTML + precio.outerHTML +  "</div>" 
              console.log(cartProduct)
              
             
               total += +prod.product[i].price
            console.log(total);
                subtotal.innerText = "$ " + total
            } 
           }
          }
        });




