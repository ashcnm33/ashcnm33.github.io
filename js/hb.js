document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const currentPos = document.getElementById("dropdown").value;
    const mostLike = document.getElementById("most-like").value;
    const cv = document.getElementById("cv").value;

    const ukPhoneRegex = /^07\d{9}$/;

    if (name === "" || email === "" || phone === "") {
      alert("Please fill in all required fields.");
      event.preventDefault();
      return;
    } 
    
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;      
    }

    if (!ukPhoneRegex.test(phone)) {
      alert("Enter a valid UK phone number.");
      event.preventDefault();
      return;      
    }

    if (currentPos === "Select an option") {
      alert("Please select your current role.");
      event.preventDefault();
      return;
    }

    if (mostLike === "Select an option") {
      alert("Please select the position you would like to apply for.");
      event.preventDefault();
      return;
    }

    if (cv === "") {
      alert("Please upload your CV.");
      event.preventDefault();
      return;
    }

    alert("Form submitted successfully!");
  });
});
