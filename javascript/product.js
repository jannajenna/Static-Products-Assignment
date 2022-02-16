const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;

  document.querySelector(
    "img.productimg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productimg").alt = product.productdisplayname;

  document.querySelector(".productinfo .itemname").textContent =
    product.productdisplayname;

  document.querySelector(".productinfo .productcolor").textContent =
    product.basecolour;

  document.querySelector(".productinfo .productnum").textContent = product.id;

  document.querySelector(".productbuy .itemname").textContent =
    product.productdisplayname;

  document.querySelector(".productbuy .productbrand").textContent =
    product.brandname;
  document.querySelector(".productbuy .producttype").textContent =
    product.articletype;
}
