// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


// Get the input elements using their ids
var appIdInputDemo = document.getElementById('app_id_demo');
var tokenInputDemo = document.getElementById('token_demo');
var appIdInputReal = document.getElementById('app_id_real');
var tokenInputReal = document.getElementById('token_real');

// Function to handle app_id_demo input change
function appIdGetDemo() {
    let app_id_demo = appIdInputDemo.value;
    setCookie("app_id_demo", app_id_demo, 7); // Store for 7 days
}

// Function to handle token_demo input change
function tokenGetDemo() {
    let token_demo = tokenInputDemo.value;
    setCookie("token_demo", token_demo, 7); // Store for 7 days
}

// Function to handle app_id_real input change
function appIdGetReal() {
    let app_id_real = appIdInputReal.value;
    setCookie("app_id_real", app_id_real, 7); // Store for 7 days
}

// Function to handle token_real input change
function tokenGetReal() {
    let token_real = tokenInputReal.value;
    setCookie("token_real", token_real, 7); // Store for 7 days
}

// Add event listeners to listen for keyup events
appIdInputDemo.addEventListener('keyup', appIdGetDemo);
tokenInputDemo.addEventListener('keyup', tokenGetDemo);
appIdInputReal.addEventListener('keyup', appIdGetReal);
tokenInputReal.addEventListener('keyup', tokenGetReal);




// // Set the input fields with the retrieved values (if any)
// if (app_id_demo) appIdInputDemo.value = app_id_demo;
// if (token_demo) tokenInputDemo.value = token_demo;
// if (app_id_real) appIdInputReal.value = app_id_real;
// if (token_real) tokenInputReal.value = token_real;





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
