
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
        <h3>${products[0]}. ${products[1]}</h3>
        <h3 class="product-name">${products[4]}</h3>
        <h3 class="product-discription">${products[2]}</h3>
        <h3 class="product-price">${products[3]}</h3>
        <h3 class="quantity">${products[5]}</h3>
        <button onclick="deleteProduct(${product[0]})">delete</button>    

      </div>
    `;
  });
}

function deleteProduct(index) {
  console.log(index);
  let delConfirm = confirm("Are you sure you want to delete this product?");
  if (delConfirm) {
    fetch(`https://murmuring-everglades-76424.herokuapp.com/delete-products/${index}`);
  }
}

