import { getFromLocalStorage, putActiveUser } from "./service.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btn-login")

const handleLogin = () => {
  let userdata = getFromLocalStorage()
  if (email.value === '' || password.value === '') {
    alert("Email and password are required");
    return
  }

  let user = {
    email: email.value,
    password: password.value
  }

  if (user.email === userdata.email && user.password === userdata.password) {
    putActiveUser({nama: userdata.nama, email: user.email})
    alert('You are login seccess, click ok for continue')
    window.location.href = './../../home-page.html'
    return true
  } else {
    alert("email and password incorrect")
  }
}

btnLogin.addEventListener('click', function (event) {
  event.preventDefault(event)
  handleLogin()
})

// event listener untuk button login
// document.getElementById("btn-login").addEventListener("click", function (event) {
//   event.preventDefault(); // menghentikan form dari submit

//   if (validateForm()) {
//       // jika form valid
//       var email = document.getElementById("email").value;
//       var password = document.getElementById("password").value;
  
//       var url =
//         "" +
//         email +
//         "&password=" +
//         password;
  
//       fetch(url)
//         .then((response) => {
//           if (response.ok) {
//             return response.json();
//           }
//           throw new Error("Network response was not ok.");
//         })
//         .then((data) => {
//           if (data.length > 0) {
//             // jika data ditemukan, login berhasil
//             window.location.href = "index.html"; // redirect ke halaman index.html
//           } else {
//             // jika tidak, login gagal
//             alert("Invalid email or password");
//           }
//         })
//         .catch((error) => {
//           console.error(
//             "There has been a problem with your fetch operation:",
//             error
//           );
//         });
//     }
//   });