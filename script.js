let object = {
  aot: {
    name: "aot manga",
    price: 7,
    image: "./imgs/aot.jpg",
  },

  one_piece: {
    name: "one piece manga",
    price: 7,
    image: "./imgs/One-piece-manga.jpg",
  },

  Naruto: {
    name: "naruto manga",
    price: 7,
    image: "./imgs/naruto.jpg",
  },
};

let prices = [
  {
    name: "aot manga",
    price: 7,
  },

  {
    name: "one piece manga",
    price: 7,
  },

  {
    name: "naruto manga",
    price: 7,
  },
];

let total = 0;

function cart(key) {
  document.getElementById("cart-list").style.display = "flex";

  let product_name = object[key]["name"];

  let product_price = object[key]["price"];

  let product_image = object[key]["image"];

  document.getElementById(
    "cart-list"
  ).innerHTML += `<div id="cart" class="product">
        <img src="${product_image}" alt="product image" id="productimg" width="100px">
        <h2 id="productname">${product_name}</h2>
        <h2 id="productprice">${product_price} K.D</h2>
        <div class="closebutton" id="close" onclick="closeproduct(), Minus()">
        <h3 style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; color: white; font-size: 32px">X</h3>
    </div>`;

  total = total + product_price;

  document.getElementById(
    "total"
  ).innerHTML = `<h1>Total price is ${total}</h1>`;
}

function closeproduct() {
  document.getElementById("cart").remove();
}

let count = 0;

function calculate() {
  count++;

  console.log(count);

  document.getElementById(
    "number"
  ).innerHTML = `<h1>the number of orders is:${count}</h1>`;
}

function Minus() {
  count--;

  document.getElementById(
    "number"
  ).innerHTML = `<h1>the number of orders is:${count}</h1>`;
}
