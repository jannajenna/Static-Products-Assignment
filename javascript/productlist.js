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

  /* if (product.soldout) {
    copy.querySelector("article").classList.add("soldOutText");
  } */

  /*  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  } */
}
