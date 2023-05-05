function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if (email.trim() == "" || password.trim() == "") {
      alert("Username and password are required");
      return false;
    }
  
    return true;
  }

  // event listener untuk button login
  document.getElementById("btn-login").addEventListener("click", function (event) {
    event.preventDefault(); // menghentikan form dari submit

    if (validateForm()) {
        // jika form valid
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
    
        var url =
          "" +
          email +
          "&password=" +
          password;
    
        fetch(url)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then((data) => {
            if (data.length > 0) {
              // jika data ditemukan, login berhasil
              window.location.href = "index.html"; // redirect ke halaman index.html
            } else {
              // jika tidak, login gagal
              alert("Invalid username or password");
            }
          })
          .catch((error) => {
            console.error(
              "There has been a problem with your fetch operation:",
              error
            );
          });
      }
    });