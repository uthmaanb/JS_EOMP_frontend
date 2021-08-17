fetch('https://murmuring-everglades-76424.herokuapp.com/show-products/')
  .then((response) => response.json())
  .then((json) => console.log(json));