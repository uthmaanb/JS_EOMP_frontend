// fetch('https://murmuring-everglades-76424.herokuapp.com/login/')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const baseURL = "https://murmuring-everglades-76424.herokuapp.com/auth";

const form = document.querySelector("#form");

function login(url) {
	const username = document.querySelector("#username").value;
	const password = document.querySelector("#password").value;
	const body = {
		username: username,
		password: password,
	};
	fetch(url, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((res) => res.json()).then((data) => {
			console.log(data);
			if (data['description'] == 'Invalid credentials') {
				alert('Error invalid login details!')
			}
			else {
				myStorage = window.localStorage
				window.location.href = 'viewprod.html'
			}
		});
}

function submitForm(event) {
	event.preventDefault();
	login(baseURL);
}

form.addEventListener("submit", submitForm);
