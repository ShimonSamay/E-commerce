
for ( var i = 0; i<laptops.length; i++) {
    if(i<5) {
         document.getElementById("contlap1").innerHTML+=
        `<article class="laptopcontainer" > 
         <img class ="laptoppics" src=${laptops[i].Images[0]}><br>
         <img class="laptoppics" src=${laptops[i].Images[1]}>
         <p id="laptop${i}name"> ${laptops[i].Name}</p>
         <p id="laptop${i}price">${laptops[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button" onclick = "addToCart(${laptops[i].ID})">Add To Cart</button>
         </article> `
    }
};

function addToCart (id) {
for ( var i = 0; i<laptops.length; i++){
    if (id == laptops[i].ID){
        userCart.push(laptops[i])
    }
}
console.log(userCart);
}

for ( var i = 5; i<laptops.length; i++){
    if ( i<10){
        document.getElementById("contlap2").innerHTML+=
        `<article class="laptopcontainer" > 
         <img class ="laptoppics" src=${laptops[i].Images[0]}><br>
         <img class="laptoppics" src=${laptops[i].Images[1]}>
         <p id="laptop${i}name">  ${laptops[i].Name}</p>
         <p id="laptop${i}price"> ${laptops[i].price}$</p><br>
         <button id="addBtn${i}"class="addbtn" type="button" onclick = "addToCart(${laptops[i].ID})">Add To Cart</button>
         </article> `
    }
};


for ( var i = 10; i<laptops.length; i++) {
    if(i<15) {
        document.getElementById("contlap3").innerHTML+=
        `<article class="laptopcontainer" > 
         <img class ="laptoppics" src=${laptops[i].Images[0]}><br>
         <img class="laptoppics" src=${laptops[i].Images[1]}>
         <p id="laptop${i}name"> ${laptops[i].Name}</p>
         <p id="laptop${i}price">${laptops[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button" onclick="addToCart(${laptops[i].ID})">Add To Cart</button>
         </article> `
    }
};