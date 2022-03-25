let object = {
  aot: {
    name: "aot",
    price: "5 k.d",
    image: "./imgs/aot.jpg"

  juice: {
    name: "Cocktail juice x3",
    price: "1K.D",
    image: "./images/Juice.png",
  },

  nuggets: {
    name: "Chicken nuggets",
    price: "1.5K.D",
    image: "./images/Nuggets.png",
  },
};

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
        <h2 id="productprice">${product_price}</h2>
        <div class="closebutton" id="close" onclick="closeproduct(), Minus()">
        <h3 style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; color: white; font-size: 32px">X</h3>
    </div>`;
}
