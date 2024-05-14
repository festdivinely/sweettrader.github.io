// Get the input element using its id
var appIdInputDemo = document.getElementById('app_id_demo');

// Function to handle input change
function appIdGetDemo() {
    let app_id_demo = appIdInputDemo.value
    localStorage.setItem("app_id_demo", app_id_demo)
}

// Add an event listener to listen for keyup events
appIdInputDemo.addEventListener('keyup', appIdGetDemo);


// Get the input element using its id
var tokenInputDemo = document.getElementById('token_demo');

// Function to handle input change
function tokenGetDemo() {
    let token_demo = tokenInputDemo.value
    localStorage.setItem("token_demo", token_demo)
}

// Add an event listener to listen for keyup events
tokenInputDemo.addEventListener('keyup', tokenGetDemo);


// Get the input element using its id
var appIdInputReal = document.getElementById('app_id_real');

// Function to handle input change
function appIdGetReal() {
    let app_id_real = appIdInputReal.value
    localStorage.setItem("app_id_real", app_id_real)
}

// Add an event listener to listen for keyup events
appIdInputReal.addEventListener('keyup', appIdGetReal);


// Get the input element using its id
var tokenInputReal = document.getElementById('token_real');

// Function to handle input change
function tokenGetReal() {
    let token_real = tokenInputReal.value
    localStorage.setItem("token_real", token_real)
}

// Add an event listener to listen for keyup events
tokenInputReal.addEventListener('keyup', tokenGetReal);

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
