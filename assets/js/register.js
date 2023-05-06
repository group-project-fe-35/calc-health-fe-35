import {putToLocalStorage, getFromLocalStorage} from './service.js'

const btn_daftar = document.getElementById('daftar')

const handleData = () => {
    const namaDepan = document.getElementById('namadepan').value;
    const namaBelakang = document.getElementById('namabelakang').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const konfirmasiPassword = document.getElementById('konfirmasi').value;
    const check = document.getElementById('check').checked;
    if (namaDepan === '' && namaBelakang === '' && email === '' && password === '' && konfirmasiPassword === '' && check == false) {
        return {
            namaDepan: null,
            namaBelakang: null,
            email: null,
            password: null,
            konfirmasiPassword: null,
            check: false
        }
    }
    return { namaBelakang, namaDepan, email, password, konfirmasiPassword, check }
}

const isPasswordMatch = (data) => {
    return data.password === data.konfirmasiPassword ? true : false;
};

const validateFormData = (data) => {
    if (data.namaDepan == null && data.namaBelakang == null && data.email == null && data.password == null && data.konfirmasiPassword == null && check == false) {
        return false
    }
    return true
}

const handleRegister = (data) => {
    if (!validateFormData(handleData())) {
        alert ('isi semua field')
    }
    if (!isPasswordMatch(handleData())) {
        return alert('password do not match')
    }
    const user = {
        nama: data.namaDepan,
        email: data.email,
        password: data.password
    }
    console.log(user)
    putToLocalStorage(user)
    alert('You are Registered, Click OK to login')
        window.location.href = '../../login.html'
        form.reset
}

btn_daftar.addEventListener('click', (event) => {
    event.preventDefault()
    handleRegister(handleData())
    console.log(handleData())
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