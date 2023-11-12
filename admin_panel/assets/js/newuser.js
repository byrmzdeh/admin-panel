const form = document.querySelector("form");

const imginput = document.querySelector(".imginput");
const nameinput = document.querySelector(".nameinput");
const priceinput = document.querySelector(".priceinput");
const descriptioninput = document.querySelector(".descriptioninput");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "./admin.html"; 
  
    fetch("http://localhost:3000/products/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        img: imginput.value,
        name: nameinput.value,
        price: priceinput.value,
        description: descriptioninput.value
      }),
    })
  
    imginput.value = "";
    nameinput.value = "";
    priceinput.value = "";
    descriptioninput.value=""
  }); 


