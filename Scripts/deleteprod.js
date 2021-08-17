function deleteProd() {
    let id = document.querySelector("#delete_prod").value;
  
    fetch(`https://murmuring-everglades-76424.herokuapp.com/delete-products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  }