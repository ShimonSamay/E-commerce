for ( var i = 0; i<home.length; i++) {
    if(i<5) {
        document.getElementById("homecont1").innerHTML+=
        `<article class="homestuffcont" > 
         <img class ="homestfpics" src=${home[i].Images[0]}><br>
         <img class="homestfpics" src=${home[i].Images[1]}>
         <p id="homeitem${i}name">${home[i].Name}</p>
         <p id="item${i}price">${home[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button" onclick = "addMoreToCart(${home[i].ID})">Add To Cart</button>
         </article> `
    }
};

function addMoreToCart (id) {
    for (var i = 0; i<home.length; i++){
        if (id == home[i].ID){
            userCart.push(home[i])
        }
    }
    console.log(userCart);
}

for ( var i = 5; i<home.length; i++){
    if (i<10){
        document.getElementById("homecont2").innerHTML+=
        `<article class="homestuffcont" > 
         <img class ="homestfpics" src=${home[i].Images[0]}><br>
         <img class="homestfpics" src=${home[i].Images[1]}>
         <p id="homeitem${i}name"> ${home[i].Name}</p>
         <p id="item${i}price"> ${home[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button" onclick="addMoreToCart(${home[i].ID})">Add to Cart </button>
         </article> `
    }
};


for ( var i = 10; i<home.length; i++) {
    if(i<15) {
        document.getElementById("homecont3").innerHTML+=
        `<article class="homestuffcont" > 
         <img class ="homestfpics" src=${home[i].Images[0]}><br>
         <img class="homestfpics" src=${home[i].Images[1]}>
         <p id="homeitem${i}name">${home[i].Name}</p>
         <p id="item${i}price">${home[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button" onclick="addMoreToCart(${home[i].ID})">Add To Cart</button>
         </article> `
    }
};
