console.log("Hello");

const url = "https://kea-alt-del.dk/t7/api/products/1526";

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs.brand").textContent = product.brandname;
  document.querySelector(".breadcrumbs.productname").textContent =
    product.productdisplayname;
}