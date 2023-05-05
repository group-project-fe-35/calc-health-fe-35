import {putToLocalStorage, getFromLocalStorage} from './service.js'

const namaDepan = document.getElementById('namadepan').value;
const namaBelakang = document.getElementById('namabelakang').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const konfirmasiPassword = document.getElementById('konfirmasi').value;
const form = document.getElementById('form-register')
const check = document.getElementById('check').checked;
const btn_daftar = document.getElementById('daftar')

const isPasswordMatch = (data) => {
    return data === konfirmasiPassword ? true : false;
};

const handleRegister = () => {
    if (namaDepan != '' || namaBelakang != '' || email != '' || isPasswordMatch(password) || check == false) {
        const user = {
            namadepan: namaDepan,
            namabelakang: namaBelakang,
            email,
            password,
        };
        
        putToLocalStorage(user)
        alert('You are Registered, Click OK to login')
        window.location.href = '../../login.html'
        form.reset
    } else {
        alert('Fill in the entire form, dont miss anything')
        form.reset()
    }

}

btn_daftar.addEventListener('click', (event) => {
    event.preventDefault()
    handleRegister()
})


// function register(e){
//     event.preventDefault();
//     // console.log('working');


//     const user = {
//         namadepan: namaDepan,
//         namabelakang: namaBelakang,
//         email: email,
//         password: password,
//         konfirmasi : konfirmasiPassword,
//         check: check,
//     };

//     if(namadepan == "" || namabelakang == "" || email == "" || password == "" || konfirmasi == "" || check == false){
//         alert('Fill in the entire form, dont miss anything')
//     }else{
//         alert('Register succeess!!')
//     }

//     const json = JSON.stringify(user);
//     localStorage.setItem(user, json);
//     // console.log('user added');

// } 