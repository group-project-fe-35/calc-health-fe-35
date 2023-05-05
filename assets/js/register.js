//sign up function

function register(e){
    event.preventDefault();
    // console.log('working');

    var namaDepan = document.getElementById('namadepan').value;
    var namaBelakang = document.getElementById('namabelakang').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var konfirmasiPassword = document.getElementById('konfirmasi').value;
    var check = document.getElementById('check').checked;

    var user = {
        namadepan: namaDepan,
        namabelakang: namaBelakang,
        email: email,
        password: password,
        konfirmasi : konfirmasiPassword,
        check: check,
    };

    if(namadepan == "" || namabelakang == "" || email == "" || password == "" || konfirmasi == "" || check == false){
        alert('Fill in the entire form, dont miss anything')
    }else{
        alert('Register succeess!!')
    }

    var json = JSON.stringify(user);
    localStorage.setItem(user, json);
    // console.log('user added');

} 