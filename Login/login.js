document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("#login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formobject = new FormData(loginForm);
      let data = {};
      formobject.forEach((value, key) => {
        data[key] = value;
      });

      fetch("http://195.26.245.5:9505/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(result => {
          if (result.success) {
            
            window.location.href = "../account/account.html";
          } else {
            alert("Login failed! Please check your username and password.");
          }
        })
        .catch(() => {
          alert("Server error!");
        });
    });
  }
});