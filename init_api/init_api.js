import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';



let choose_account_trade_type_current_balance_in_init_js = document.getElementById("current_balance_fig")
let total_asset_display_in_init_js = document.getElementById("ass_fig")


let login_id_in_init_js = document.getElementById("curr2")
let nav_current_balance_in_init_js = document.getElementById("balance_amount")





// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}



let authorize_response = null

// let app_id_real = 61788;
// let app_id_demo = 61787;
// let token_demo = "FzGC9R7m6hALMDL";
// let token_real = "odstx4WwG5M9Kbi";



const app_id_demo = 53334;
const token_demo = "4FB1rDGbXX6zbKs";
const app_id_real = 53335;
const token_real = "Jv4SnlKSnzwkymM";


let api_id = null
let api_token = null

let api = null

let message1 =  localStorage.getItem('message1')


let connection = null




export async function initializeApiInit(message1) {
 
    try {

        if (message1 === "Demo Account" || message1 === null) {
            api_id = app_id_demo;
            api_token = token_demo;
            connection = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${api_id}`);
        } else if (message1 === "Real Account") {
            api_id = app_id_real;
            api_token = token_real;
            connection = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${api_id}`);

        } else if (api_id == null) {
            console.log("no app id yet")
        }
    } catch (error) {
        console.log("no app id yet")
    }



    try {
        api = new DerivAPIBasic({ connection });
        authorize_response = await api.authorize(api_token);
        console.log(authorize_response)
        if (!authorize_response.authorize) {
            console.log("Authorization failed. Please check your API token.");
            return null;
        } else {

            console.log("authirzed at init js")
            console.log(authorize_response.authorize.loginid)
            console.log(authorize_response.authorize.balance)
        
            if(authorize_response.authorize.loginid.startsWith("CR")){


                setCookie('real_balance', authorize_response.authorize.balance)
                setCookie("real_id", authorize_response.authorize.loginid)
                setCookie("real_icon_usd", true)
                setCookie("demo_icon_usd", false)


                localStorage.setItem('real_balance', authorize_response.authorize.balance)
                localStorage.setItem("real_id", authorize_response.authorize.loginid)
                localStorage.setItem("real_icon_usd", true)
                localStorage.setItem("demo_icon_usd", false)



            }else{
                setCookie('demo_balance', authorize_response.authorize.balance)
                setCookie('demo_id', authorize_response.authorize.loginid)
                setCookie("real_icon_usd", false)
                setCookie("demo_icon_usd", true)



                localStorage.setItem('demo_balance', authorize_response.authorize.balance)
                localStorage.setItem('demo_id', authorize_response.authorize.loginid)
                localStorage.setItem("real_icon_usd", false)
                localStorage.setItem("demo_icon_usd", true)
            }


            nav_current_balance_in_init_js.textContent = authorize_response.authorize.balance
           
            let balance_default = api.balance({ "balance": 1, "subscribe": 1 });
            console.log(balance_default)
            
        }



        return { api, authorize_response };

    } catch (error) {
        console.error("Error occurred during API initialization:", error);
        return null;
    }
}








 window.addEventListener('load', function () {
   initializeApiInit(message1)

    let getAwaitingResponses = setInterval(() => {

        if (authorize_response) {
            
                clearInterval(getAwaitingResponses)
        } else {
            console.log("no authorize response yet")
        }
    }, 2000);

});