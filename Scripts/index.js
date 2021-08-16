fetch('https://murmuring-everglades-76424.herokuapp.com/login/')
  .then((response) => response.json())
  .then((json) => console.log(json));


  function login(){
    fetch('https://murmuring-everglades-76424.herokuapp.com/login/', {
    method: "POST",
    body: JSON.stringify({
        'admin_username': document.getElementById("username").value,
        'admin_password': document.getElementById("password").value,
    })
})
    
    
}
