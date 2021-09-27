for ( var i = 0; i<smartphones.length; i++) {
    if(i<5) {
        document.getElementById("contphones1").innerHTML+=
        `<article class="phonescontainer" > 
         <img class ="phonepics" src=${smartphones[i].Images[0]}><br>
         <img class="phonepics" src=${smartphones[i].Images[1]}>
         <p id="smartphone${i}name"> ${smartphones[i].Name}</p>
         <p id="smartphone${i}price"> ${smartphones[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button">Add To Cart</button>
         </article> `
    }
};

var addBtn0 = document.getElementById("addBtn0");
addBtn0.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone0name").innerText ,
Price : document.getElementById("smartphone0price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn1 = document.getElementById("addBtn1");
addBtn1.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone1name").innerText ,
Price : document.getElementById("smartphone1price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn2 = document.getElementById("addBtn2");
addBtn2.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone2name").innerText ,
Price : document.getElementById("smartphone2price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn3 = document.getElementById("addBtn3");
addBtn3.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone3name").innerText ,
Price : document.getElementById("smartphone3price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn4 = document.getElementById("addBtn4");
addBtn4.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone4name").innerText ,
Price : document.getElementById("smartphone4price").innerText ,
};
userCart.push(item);
console.log(userCart);
});


for ( var i = 5; i<smartphones.length; i++){
    if (i<10){
        document.getElementById("contphones2").innerHTML+=
        `<article class="phonescontainer" > 
         <img class ="phonepics" src=${smartphones[i].Images[0]}><br>
         <img class="phonepics" src=${smartphones[i].Images[1]}>
         <p id="smartphone${i}name"> ${smartphones[i].Name}</p>
         <p id="smartphone${i}price" > ${smartphones[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button"> Add To Cart </button>
         </article> `
    }
};

var addBtn5 = document.getElementById("addBtn5");
addBtn5.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone5name").innerText ,
Price : document.getElementById("smartphone5price").innerText ,
};
userCart.push(item);
console.log(userCart);
});


var addBtn6 = document.getElementById("addBtn6");
addBtn6.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone6name").innerText ,
Price : document.getElementById("smartphone6price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn7 = document.getElementById("addBtn7");
addBtn7.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone7name").innerText ,
Price : document.getElementById("smartphone7price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn8 = document.getElementById("addBtn8");
addBtn8.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone8name").innerText ,
Price : document.getElementById("smartphone8price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn9 = document.getElementById("addBtn9");
addBtn9.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone9name").innerText ,
Price : document.getElementById("smartphone9price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

for ( var i = 10; i<smartphones.length; i++) {
    if(i<15) {
        document.getElementById("contphones3").innerHTML+=
        `<article class="phonescontainer" > 
         <img class ="phonepics" src=${smartphones[i].Images[0]}><br>
         <img class="phonepics" src=${smartphones[i].Images[1]}>
         <p id="smartphone${i}name"> ${smartphones[i].Name}</p>
         <p id="smartphone${i}price"> ${smartphones[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button">Add To Cart</button>
         </article> `
    }
};


var addBtn10 = document.getElementById("addBtn10");
addBtn10.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone10name").innerText ,
Price : document.getElementById("smartphone10price").innerText ,
};
userCart.push(item);
console.log(userCart);
});


var addBtn11 = document.getElementById("addBtn11");
addBtn11.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone11name").innerText ,
Price : document.getElementById("smartphone11price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn12 = document.getElementById("addBtn12");
addBtn12.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone12name").innerText ,
Price : document.getElementById("smartphone12price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn13 = document.getElementById("addBtn13");
addBtn13.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone13name").innerText ,
Price : document.getElementById("smartphone13price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn14 = document.getElementById("addBtn14");
addBtn14.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("smartphone14name").innerText ,
Price : document.getElementById("smartphone14price").innerText ,
};
userCart.push(item);
console.log(userCart);
});
