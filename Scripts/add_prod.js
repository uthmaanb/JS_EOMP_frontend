
// const baseURL = "https://murmuring-everglades-76424.herokuapp.com/prod-registration";

const form = document.querySelector("#form");

function submitForm(event) {
	event.preventDefault();
    if (confirm('do you want to add another product?')){
        window.location.href = './add_prod.html'

    }else {
        window.location.href = 'viewprod.html'
}
}

form.addEventListener("submit", submitForm);
