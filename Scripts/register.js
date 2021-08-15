
fetch('https://murmuring-everglades-76424.herokuapp.com/show-users/')
  .then((response) => response.json())
  .then((json) => console.log(json));


// const form = document.querySelector(".form")
// function submitForm(event){
//   event.preventDefault()
//   window.location.href = "./veiwprod.html"
// }
// form.addEventListener("submit", submitForm)
