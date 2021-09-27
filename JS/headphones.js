for ( var i = 0; i<headphones.length; i++) {
    if(i<5) {
        document.getElementById("headphonescont1").innerHTML+=
        `<article class="headphonescontainer" > 
         <img class ="headphonepics" src=${headphones[i].Images[0]}><br>
         <img class="headphonepics" src=${headphones[i].Images[1]}>
         <p id="headphone${i}name"> ${headphones[i].Name}</p>
         <p id="headphone${i}price"> ${headphones[i].price}$</p><br>
         <button id="addBtn${i}"class="addbtn" type="button">Add To Cart</button>
         </article> `
    }
};


var addBtn0 = document.getElementById("addBtn0");
addBtn0.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone0name").innerText ,
Price : document.getElementById("headphone0price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn1 = document.getElementById("addBtn1");
addBtn1.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone1name").innerText ,
Price : document.getElementById("headphone1price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn2 = document.getElementById("addBtn2");
addBtn2.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone2name").innerText ,
Price : document.getElementById("headphone2price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn3 = document.getElementById("addBtn3");
addBtn3.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone3name").innerText ,
Price : document.getElementById("headphone3price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn4 = document.getElementById("addBtn4");
addBtn4.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone4name").innerText ,
Price : document.getElementById("headphone4price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

for ( var i = 5; i<headphones.length; i++){
    if (i<10){
        document.getElementById("headphonescont2").innerHTML+=
        `<article class="headphonescontainer" > 
         <img class ="headphonepics" src=${headphones[i].Images[0]}><br>
         <img class="headphonepics" src=${headphones[i].Images[1]}>
         <p id="headphone${i}name"> ${headphones[i].Name}</p>
         <p id="headphone${i}price">${headphones[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button">Add To Cart</button>
         </article> `
    }
};

var addBtn5 = document.getElementById("addBtn5");
addBtn5.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone5name").innerText ,
Price : document.getElementById("headphone5price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn6 = document.getElementById("addBtn6");
addBtn6.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone6name").innerText ,
Price : document.getElementById("headphone6price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn7 = document.getElementById("addBtn7");
addBtn7.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone7name").innerText ,
Price : document.getElementById("headphone7price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn8 = document.getElementById("addBtn8");
addBtn8.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone8name").innerText ,
Price : document.getElementById("headphone8price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn9 = document.getElementById("addBtn9");
addBtn9.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone9name").innerText ,
Price : document.getElementById("headphone9price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

for ( var i = 10; i<headphones.length; i++) {
    if(i<15) {
        document.getElementById("headphonescont3").innerHTML+=
        `<article class="headphonescontainer" > 
         <img class ="headphonepics" src=${headphones[i].Images[0]}><br>
         <img class="headphonepics" src=${headphones[i].Images[1]}>
         <p id="headphone${i}name"> ${headphones[i].Name}</p>
         <p id="headphone${i}price"> ${headphones[i].price}$</p><br>
         <button id="addBtn${i}"class="addbtn" type="button">Add To Cart</button>
         </article> `
    }
};

var addBtn10 = document.getElementById("addBtn10");
addBtn10.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone10name").innerText ,
Price : document.getElementById("headphone10price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn11 = document.getElementById("addBtn11");
addBtn11.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone11name").innerText ,
Price : document.getElementById("headphone11price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn12 = document.getElementById("addBtn12");
addBtn12.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone12name").innerText ,
Price : document.getElementById("headphone12price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn13 = document.getElementById("addBtn13");
addBtn13.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone13name").innerText ,
Price : document.getElementById("headphone13price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn14 = document.getElementById("addBtn14");
addBtn14.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("headphone14name").innerText ,
Price : document.getElementById("headphone14price").innerText ,
};
userCart.push(item);
console.log(userCart);
});




