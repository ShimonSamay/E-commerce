
for ( var i = 0; i<laptops.length; i++) {
    if(i<5) {
        document.getElementById("contlap1").innerHTML+=
        `<article class="laptopcontainer" > 
         <img class ="laptoppics" src=${laptops[i].Images[0]}><br>
         <img class="laptoppics" src=${laptops[i].Images[1]}>
         <p id="laptop${i}name"> ${laptops[i].Name}</p>
         <p id="laptop${i}price">${laptops[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button">Add To Cart</button>
         </article> `
    }
};

var addBtn0 = document.getElementById("addBtn0");
addBtn0.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop0name").innerText ,
Price : document.getElementById("laptop0price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn1 = document.getElementById("addBtn1");
addBtn1.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop1name").innerText ,
Price : document.getElementById("laptop1price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn2 = document.getElementById("addBtn2");
addBtn2.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop2name").innerText ,
Price : document.getElementById("laptop2price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn3 = document.getElementById("addBtn3");
addBtn3.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop3name").innerText ,
Price : document.getElementById("laptop3price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn4 = document.getElementById("addBtn4");
addBtn4.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop4name").innerText ,
Price : document.getElementById("laptop4price").innerText ,
};
userCart.push(item);
console.log(userCart);
});


for ( var i = 5; i<laptops.length; i++){
    if ( i<10){
        document.getElementById("contlap2").innerHTML+=
        `<article class="laptopcontainer" > 
         <img class ="laptoppics" src=${laptops[i].Images[0]}><br>
         <img class="laptoppics" src=${laptops[i].Images[1]}>
         <p id="laptop${i}name">  ${laptops[i].Name}</p>
         <p id="laptop${i}price"> ${laptops[i].price}$</p><br>
         <button id="addBtn${i}"class="addbtn" type="button">Add To Cart</button>
         </article> `
    }
};

var addBtn5 = document.getElementById("addBtn5");
addBtn5.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop5name").innerText ,
Price : document.getElementById("laptop5price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn6 = document.getElementById("addBtn6");
addBtn6.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop6name").innerText ,
Price : document.getElementById("laptop6price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn7 = document.getElementById("addBtn7");
addBtn7.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop7name").innerText ,
Price : document.getElementById("laptop7price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn8 = document.getElementById("addBtn8");
addBtn8.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop8name").innerText ,
Price : document.getElementById("laptop8price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn9 = document.getElementById("addBtn9");
addBtn9.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop9name").innerText ,
Price : document.getElementById("laptop9price").innerText ,
};
userCart.push(item);
console.log(userCart);
});



for ( var i = 10; i<laptops.length; i++) {
    if(i<15) {
        document.getElementById("contlap3").innerHTML+=
        `<article class="laptopcontainer" > 
         <img class ="laptoppics" src=${laptops[i].Images[0]}><br>
         <img class="laptoppics" src=${laptops[i].Images[1]}>
         <p id="laptop${i}name"> ${laptops[i].Name}</p>
         <p id="laptop${i}price">${laptops[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button">Add To Cart</button>
         </article> `
    }
};

var addBtn10 = document.getElementById("addBtn10");
addBtn10.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop10name").innerText ,
Price : document.getElementById("laptop10price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn11 = document.getElementById("addBtn11");
addBtn11.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop11name").innerText ,
Price : document.getElementById("laptop11price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn12 = document.getElementById("addBtn12");
addBtn12.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop12name").innerText ,
Price : document.getElementById("laptop12price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn13 = document.getElementById("addBtn13");
addBtn13.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop13name").innerText ,
Price : document.getElementById("laptop13price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn14 = document.getElementById("addBtn14");
addBtn14.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("laptop14name").innerText ,
Price : document.getElementById("laptop14price").innerText ,
};
userCart.push(item);
console.log(userCart);
});