// Get the input elements using their ids
var appIdInputDemo = document.getElementById('app_id_demo');
var tokenInputDemo = document.getElementById('token_demo');
var appIdInputReal = document.getElementById('app_id_real');
var tokenInputReal = document.getElementById('token_real');


function storeInSessionStorage() {
    sessionStorage.setItem('app_id_demo', document.getElementById('app_id_demo').value);
    sessionStorage.setItem('token_demo', document.getElementById('token_demo').value);
    sessionStorage.setItem('app_id_real', document.getElementById('app_id_real').value);
    sessionStorage.setItem('token_real', document.getElementById('token_real').value);

    window.location.href = 'test_work.html'; // Redirect to the second page
}

document.getElementById('submit_btn').addEventListener('click', storeInSessionStorage);




function togglePasswordVisibility1() {
    if (appIdInputDemo.type === 'password') {
        appIdInputDemo.type = 'text';
    } else {
        appIdInputDemo.type = 'password';
    }
}

function togglePasswordVisibility2() {
    if (tokenInputDemo.type === 'password') {
        tokenInputDemo.type = 'text';
    } else {
        tokenInputDemo.type = 'password';
    }
}

function togglePasswordVisibility3() {
    var passwordInput = document.getElementById('app_id_real');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

function togglePasswordVisibility4() {
    var passwordInput = document.getElementById('token_real');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}
