
fetch('https://murmuring-everglades-76424.herokuapp.com/show-users/')
  .then((response) => response.json())
  .then((json) => console.log(json));
