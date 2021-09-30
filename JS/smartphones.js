for ( var i = 0; i<smartphones.length; i++) {
    if(i<5) {
        document.getElementById("contphones1").innerHTML+=
        `<article class="phonescontainer" > 
         <img class ="phonepics" src=${smartphones[i].Images[0]}><br>
         <img class="phonepics" src=${smartphones[i].Images[1]}>
         <p id="smartphone${i}name"> ${smartphones[i].Name}</p>
         <p id="smartphone${i}price"> ${smartphones[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button" onclick="addPhoneToCart(${smartphones[i].ID})">Add To Cart</button>
         </article> `
    }
};

function addPhoneToCart (id) {
    for ( var i = 0; i<smartphones.length; i++){
        if (id == smartphones[i].ID){
            userCart.push(smartphones[i]);
        }
    }
    console.log(userCart);
}

for ( var i = 5; i<smartphones.length; i++){
    if (i<10){
        document.getElementById("contphones2").innerHTML+=
        `<article class="phonescontainer" > 
         <img class ="phonepics" src=${smartphones[i].Images[0]}><br>
         <img class="phonepics" src=${smartphones[i].Images[1]}>
         <p id="smartphone${i}name"> ${smartphones[i].Name}</p>
         <p id="smartphone${i}price" > ${smartphones[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button"  onclick="addPhoneToCart(${smartphones[i].ID})"> Add To Cart </button>
         </article> `
    }
};


for ( var i = 10; i<smartphones.length; i++) {
    if(i<15) {
        document.getElementById("contphones3").innerHTML+=
        `<article class="phonescontainer" > 
         <img class ="phonepics" src=${smartphones[i].Images[0]}><br>
         <img class="phonepics" src=${smartphones[i].Images[1]}>
         <p id="smartphone${i}name"> ${smartphones[i].Name}</p>
         <p id="smartphone${i}price"> ${smartphones[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button"  onclick="addPhoneToCart(${smartphones[i].ID})">Add To Cart</button>
         </article> `
    }
};

