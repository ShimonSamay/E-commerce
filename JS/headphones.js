for ( var i = 0; i<headphones.length; i++) {
    if(i<5) {
        document.getElementById("headphonescont1").innerHTML+=
        `<article class="headphonescontainer" > 
         <img class ="headphonepics" src=${headphones[i].Images[0]}><br>
         <img class="headphonepics" src=${headphones[i].Images[1]}>
         <p id="headphone${i}name"> ${headphones[i].Name}</p>
         <p id="headphone${i}price"> ${headphones[i].price}$</p><br>
         <button id="addBtn${i}"class="addbtn" type="button" onclick = "addHeadphonesToCart(${headphones[i].ID})">Add To Cart</button>
         </article> `
    }
};

function addHeadphonesToCart(id){
    for ( var i = 0; i<headphones.length; i++){
        if (id == headphones[i].ID){
            userCart.push(headphones[i])
        }
    }
    console.log(userCart);
}

for ( var i = 5; i<headphones.length; i++){
    if (i<10){
        document.getElementById("headphonescont2").innerHTML+=
        `<article class="headphonescontainer" > 
         <img class ="headphonepics" src=${headphones[i].Images[0]}><br>
         <img class="headphonepics" src=${headphones[i].Images[1]}>
         <p id="headphone${i}name"> ${headphones[i].Name}</p>
         <p id="headphone${i}price">${headphones[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button" onclick = "addHeadphonesToCart(${headphones[i].ID})">Add To Cart</button>
         </article> `
    }
};

for ( var i = 10; i<headphones.length; i++) {
    if(i<15) {
        document.getElementById("headphonescont3").innerHTML+=
        `<article class="headphonescontainer" > 
         <img class ="headphonepics" src=${headphones[i].Images[0]}><br>
         <img class="headphonepics" src=${headphones[i].Images[1]}>
         <p id="headphone${i}name"> ${headphones[i].Name}</p>
         <p id="headphone${i}price"> ${headphones[i].price}$</p><br>
         <button id="addBtn${i}"class="addbtn" type="button" onclick = "addHeadphonesToCart(${headphones[i].ID})">Add To Cart</button>
         </article> `
    }
};




