// Utility functions for handling cookies
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Get the input elements using their ids
const appIdInputDemo = document.getElementById('app_id_demo');
const tokenInputDemo = document.getElementById('token_demo');
const appIdInputReal = document.getElementById('app_id_real');
const tokenInputReal = document.getElementById('token_real');

// Function to store input values in session storage and cookies
function storeCredentials() {
    const appIdDemo = appIdInputDemo.value;
    const tokenDemo = tokenInputDemo.value;
    const appIdReal = appIdInputReal.value;
    const tokenReal = tokenInputReal.value;

    // Store in session storage
    sessionStorage.setItem('app_id_demo', appIdDemo);
    sessionStorage.setItem('token_demo', tokenDemo);
    sessionStorage.setItem('app_id_real', appIdReal);
    sessionStorage.setItem('token_real', tokenReal);

    // Store in cookies for 7 days
    setCookie('app_id_demo', appIdDemo, 7);
    setCookie('token_demo', tokenDemo, 7);
    setCookie('app_id_real', appIdReal, 7);
    setCookie('token_real', tokenReal, 7);

    // Redirect to the second page
    window.location.href = './trade_page/trade_page.html';
}

// Event listener for the submit button
document.getElementById('submit_btn').addEventListener('click', storeCredentials);

// Function to load input values from cookies
function loadCredentialsFromCookies() {
    appIdInputDemo.value = getCookie('app_id_demo') || '';
    tokenInputDemo.value = getCookie('token_demo') || '';
    appIdInputReal.value = getCookie('app_id_real') || '';
    tokenInputReal.value = getCookie('token_real') || '';
}

// Load credentials when the page loads
document.addEventListener('DOMContentLoaded', loadCredentialsFromCookies);

// Toggle password visibility for the demo input fields
document.getElementById('show_demo').addEventListener('click', function () {
    appIdInputDemo.type = appIdInputDemo.type === 'password' ? 'text' : 'password';
});

document.getElementById('show_token_demo').addEventListener('click', function () {
    tokenInputDemo.type = tokenInputDemo.type === 'password' ? 'text' : 'password';
});

// Toggle password visibility for the real input fields
document.getElementById('show_real').addEventListener('click', function () {
    appIdInputReal.type = appIdInputReal.type === 'password' ? 'text' : 'password';
});

document.getElementById('show_token_real').addEventListener('click', function () {
    tokenInputReal.type = tokenInputReal.type === 'password' ? 'text' : 'password';
});

























































































