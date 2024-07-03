function validasi(){
    // document.getElementById('formRegister').onsubmit;
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const prodi = document.getElementById('prodi');
    const alamat = document.getElementById('alamat');
    const password = document.getElementById('password');
    const rpassword = document.getElementById('rpassword');

    if(password.value !== rpassword.value) {
        alert("Password and Confirm Password do not match!");
        return false; // Prevent form submission
    }
    // If everything is fine, you can proceed with form submission
    return true;

    alert(username.value);
    alert(email.value);
    alert(prodi.value);
    alert(alamat.value);
 
}