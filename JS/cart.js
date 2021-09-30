userCart = [

  { Name: "Dell Vostro", price: 2000, ID: 1,
    Images: [ 
    "https://www.goldtop.co.il/uploadimages1/dell%20vostro%205490.jpg",
    "https://d3m9l0v76dty0.cloudfront.net/system/photos/5908126/original/f0536a8d53bd3d30ff569574e073c350.jpg",
    ]
   },

   {
    Name: "Xiaomi Mi 11 Ultra" , price:1500 , ID:2 , 
    Images:[
    "https://xiaomiplanet.sk/wp-content/uploads/2021/04/xiaomi-mi-11-ultra-objednavka-recenzia-18.jpg",
    "https://cdn.pocket-lint.com/r/s/1200x/assets/images/156781-phones-review-mi-11-ultra-webstory-image1-81ojq0ipdl.jpg"
    ]
   },

   {
    Name: "Apple AirPods Pro" , price:300 , ID:3 ,
    Images:[
    "https://s.yimg.com/uu/api/res/1.2/v7s44y_WcMDqMjOgOA8uaA--~B/Zmk9ZmlsbDtoPTQ1MDt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-08/b3703de0-fe6d-11eb-bff8-f9ba0768a75b.cf.jpg",
    "https://www.imore.com/sites/imore.com/files/styles/large_wm_brw/public/article_images/2019/11/airpods-pro-review-13-rm6m.jpg"
    ]
   } ,
];



var userTable = document.getElementById("table");
function printProducts () {
var sum = 0;
userTable.innerHTML += 
`<thead>
<tr>
  <th>Product</th>
  <th>Price</th>
  <th>Remove</th>
</tr>
</thead>`
for (var i = 0; i < userCart.length; i++) {
 sum+=userCart[i].price
 userTable.innerHTML += 
`<tr id="item${i}" class="price">
     <td>${userCart[i].Name}</td>
     <td class="price">${userCart[i].price}$</td>
     <td><button id="item${i}btn" class="remBtns" onclick="removeFromCart(findID(${userCart[i].ID}))">Remove</button></td>
</tr>`;
}
userTable.innerHTML+=
`<tr>
     <td> For payment :</td>
     <td id="sum">${sum}$</td>
<tr>`
}
printProducts();

function findID (id) {
  for ( var i = 0; i<userCart.length; i++){
    if (id == userCart[i].ID) {
      return i;
    }
  }
};

function removeFromCart (index) {
userCart.splice(index , 1)
userTable.innerHTML = ``;
printProducts();
}

