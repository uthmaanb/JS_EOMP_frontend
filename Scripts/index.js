fetch('https://murmuring-everglades-76424.herokuapp.com/login/')
  .then((response) => response.json())
  .then((json) => console.log(json));


  function admin(){
    fetch('https://murmuring-everglades-76424.herokuapp.com/login/', {
    method: "GET",
    body: JSON.stringify({
        'admin_username': document.getElementById("username").value,
        'admin_password': document.getElementById("password").value,
    }),
    headers: {
        'Content-type': 'application/json',
    }
    // }).then(response => response.json()).then(data => {
    //     console.log(data)
    //     if (data['description'] == 'Invalid credentials'){
    //     alert("Error not valid login in!")
    //     }
    // else{
    //     window.location.href = './veiwprod.html'
    // }    
    });
    
}
