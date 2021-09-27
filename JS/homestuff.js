for ( var i = 0; i<home.length; i++) {
    if(i<5) {
        document.getElementById("homecont1").innerHTML+=
        `<article class="homestuffcont" > 
         <img class ="homestfpics" src=${home[i].Images[0]}><br>
         <img class="homestfpics" src=${home[i].Images[1]}>
         <p id="homeitem${i}name">${home[i].Name}</p>
         <p id="item${i}price">${home[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button">Add To Cart</button>
         </article> `
    }
};

var addBtn0 = document.getElementById("addBtn0");
addBtn0.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem0name").innerText ,
Price : document.getElementById("item0price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn1 = document.getElementById("addBtn1");
addBtn1.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem1name").innerText ,
Price : document.getElementById("item1price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn2 = document.getElementById("addBtn2");
addBtn2.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem2name").innerText ,
Price : document.getElementById("item2price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn3 = document.getElementById("addBtn3");
addBtn3.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem3name").innerText ,
Price : document.getElementById("item3price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn4 = document.getElementById("addBtn4");
addBtn4.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem4name").innerText ,
Price : document.getElementById("item4price").innerText ,
};
userCart.push(item);
console.log(userCart);
});


for ( var i = 5; i<home.length; i++){
    if (i<10){
        document.getElementById("homecont2").innerHTML+=
        `<article class="homestuffcont" > 
         <img class ="homestfpics" src=${home[i].Images[0]}><br>
         <img class="homestfpics" src=${home[i].Images[1]}>
         <p id="homeitem${i}name"> ${home[i].Name}</p>
         <p id="item${i}price"> ${home[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button">Add to Cart </button>
         </article> `
    }
};

var addBtn5 = document.getElementById("addBtn5");
addBtn5.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem5name").innerText ,
Price : document.getElementById("item5price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn6 = document.getElementById("addBtn6");
addBtn6.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem6name").innerText ,
Price : document.getElementById("item6price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn7 = document.getElementById("addBtn7");
addBtn7.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem7name").innerText ,
Price : document.getElementById("item7price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn8 = document.getElementById("addBtn8");
addBtn8.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem8name").innerText ,
Price : document.getElementById("item8price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn9 = document.getElementById("addBtn9");
addBtn9.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem9name").innerText ,
Price : document.getElementById("item9price").innerText ,
};
userCart.push(item);
console.log(userCart);
});


for ( var i = 10; i<home.length; i++) {
    if(i<15) {
        document.getElementById("homecont3").innerHTML+=
        `<article class="homestuffcont" > 
         <img class ="homestfpics" src=${home[i].Images[0]}><br>
         <img class="homestfpics" src=${home[i].Images[1]}>
         <p id="homeitem${i}name">${home[i].Name}</p>
         <p id="item${i}price">${home[i].price}$</p><br>
         <button id="addBtn${i}" class="addbtn" type="button">Add To Cart</button>
         </article> `
    }
};

var addBtn10 = document.getElementById("addBtn10");
addBtn10.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem10name").innerText ,
Price : document.getElementById("item10price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn11 = document.getElementById("addBtn11");
addBtn11.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem11name").innerText ,
Price : document.getElementById("item11price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn12 = document.getElementById("addBtn12");
addBtn12.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem12name").innerText ,
Price : document.getElementById("item12price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn13 = document.getElementById("addBtn13");
addBtn13.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem13name").innerText ,
Price : document.getElementById("item13price").innerText ,
};
userCart.push(item);
console.log(userCart);
});

var addBtn14 = document.getElementById("addBtn14");
addBtn14.addEventListener("click" , ()=>{
var item = {
Name : document.getElementById("homeitem14name").innerText ,
Price : document.getElementById("item14price").innerText ,
};
userCart.push(item);
console.log(userCart);
});