console.log("Hello");

const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(function (item) {
    showProduct(item);
  });
}

/* <article class="card onSale soldOut">
<figure class="imgwtext">
  <img
    class="list-img"
    src="https://kea-alt-del.dk/t7/images/webp/640/1525.webp"
    alt="Deck Navy Blue Backpack"
  />
  <figcaption class="soulOutText">Sold Out</figcaption>
  <figcaption class="disccountNum">50%</figcaption>
</figure>
<h3>Deck Navy Blue Backpack</h3>

<div class="price">
  <p class="original">DKK 1900,-</p>
  <p class="discountprice">DKK 1400,-</p>
</div>
<a href="../html/product.html">Read more</a>
</article> */

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#producttemplate").content;
  const copy = template.cloneNode(true);

  copy
    .querySelector(".itemid")
    .setAttribute("href", `product.html?id=${product.id}`);

  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} - ${product.brandname}`;

  copy.querySelector(
    ".list-img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  copy.querySelector("h3").textContent = product.productdisplayname;

  copy.querySelector(".original").textContent = "DKK" + product.price;

  copy.querySelector(".discountprice").textContent =
    "DKK" +
    Math.floor(product.price - product.price * (product.discount / 100));

  const parent = document.querySelector("main");
  parent.appendChild(copy);

  /* Sold Out and discount */

  /*   if ((product.soldoutn = 1)) {
    copy.querySelector("article").classList.add("soldOutText");
  } */
}
