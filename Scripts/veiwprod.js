
// fetch('https://murmuring-everglades-76424.herokuapp.com/show-products/')
// .then((response) => response.json())
// .then((data) => console.log(data));


fetch("https://murmuring-everglades-76424.herokuapp.com/show-products/")
  .then((response) => response.json())
  .then((json) => {
    console.log(json.data);
    json.data.forEach((item) => {
      console.log(item);
      console.log(item[1]);
    });
    renderproducts(json.data);
  });

function renderproducts(products) {
  let productContainer = document.querySelector("#products-container");
  productContainer.innerHTML = "";

  products.forEach((products) => {
    productContainer.innerHTML += `
      <div class="products">
        <h3 class="type">${products[4]}</h3>
        <h3 class="product-name">${products[1]}</h3>
        <h3 class="product-discription">${products[2]}</h3>
        <h3 class="product-price">${products[3]}</h3>
        <h3 class="quantity">${products[5]}</h3>

        
      </div>
    `;
  });
}