import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';


// const app_id_demo = sessionStorage.getItem('app_id_demo');
// const token_demo = sessionStorage.getItem('token_demo');
// const app_id_real = sessionStorage.getItem('app_id_real');
// const token_real = sessionStorage.getItem('token_real');


const app_id_demo = 53334;
const token_demo = "4FB1rDGbXX6zbKs";
const app_id_real = 53335;
const token_real = "Jv4SnlKSnzwkymM";



var api = null

var connection = null

var apiAndAuthData = null

let duration_amount_cookie = null

let stake_amount_cookie = null

let symbol_vol_cookie = null

let contract_text_cookie = null





let symbol_vol;



let message1 = null


let randomNumber = null;


let strNumber = null;


let authorize_response = null


let subscriptionId = null



let randomNumber2 = null

let balance_default = null


let buy_contract_id = null


let api_id = null;
let api_token = null;




let logi_id = document.getElementById('curr2')
let account_type = document.getElementById('curr')
let account_type_top = document.getElementById('account_type')
let drop_down_light_cont = document.getElementById('drop_down_light_cont');
let dropDownLight = document.getElementById('DD_3');
let dropUpLight = document.getElementById('DD_4');
let current_balance = document.getElementById('current_balance_cont');
let current_balance_fig_cont = document.getElementById('current_balance_fig_cont');
let current_balance_fig = document.getElementById('current_balance_fig');
let balance_amount  = document.getElementById('balance_amount')
let account_balance_fig_cont  = document.getElementById('account_balance_fig_cont')
let tick_stream = document.getElementById('tick_stream')
let first_drop_cont = document.getElementById('first_drop_cont');
let first_dropdown_icon = document.getElementById('first_dropdown_icon');
let account_balance_drop_cont = document.getElementById('account_balance_drop_cont');
let secound_dropdown_icon = document.getElementById('secound_dropdown_icon');
let account_type_change_cont = document.getElementById('curr_acc');
let real_demo = document.getElementById('real_demo');
let real = document.getElementById('real');
let demo = document.getElementById('demo');
let reset= document.getElementById('reset');
let overlay= document.getElementById('overlay');
let trade_symbol = document.getElementById('trade_symbol');
let account_symbol_change_cont = document.getElementById('account_symbol_change_cont');
let third_drop_cont = document.getElementById('third_drop_cont');
let third_dropdown_icon = document.getElementById('third_dropdown_icon');
let trade_type = document.getElementById('trade_type')
let fourth_drop_cont = document.getElementById('fourth_drop_cont')
let account_contract_type_change_cont = document.getElementById('account_contract_type_change_cont')
let fourth_dropdown_icon = document.getElementById('fourth_dropdown_icon')
let derived_indices_drop_dropup = document.getElementById('derived_indices_drop_dropup')
let derived_indices_drop_dropdown = document.getElementById('derived_indices_drop_dropdown')
let derived_indices_drop = document.getElementById('derived_indices_drop')
let derived_indices_list_cont = document.getElementById('derived_indices_list_cont')
let volatilities = document.querySelectorAll('.each')
let tradeTypes = document.querySelectorAll('.types')
let trade_symbol_secound = document.getElementById('trade_symbol_secound')
let trade_type_secound = document.getElementById('trade_type_secound')
let trade_symbol_first= document.getElementById('trade_symbol_first')
let trade_type_first= document.getElementById('trade_type_first')
let down_purchase_btn= document.getElementById('down_purchase_btn')
let up_purchase_btn= document.getElementById('up_purchase_btn')

let buy_sell_one_display = document.getElementById('buy_sell_one_display')
let buy_sell_two_display = document.getElementById('buy_sell_two_display')
let buy_sell_three_display = document.getElementById('buy_sell_three_display')
let buy_sell_four_display = document.getElementById('buy_sell_four_display')
let buy_sell_five_display = document.getElementById('buy_sell_five_display')
let buy_sell_one = document.getElementById('buy_sell_one')
let buy_sell_two = document.getElementById('buy_sell_two')
let buy_sell_three = document.getElementById('buy_sell_three')
let buy_sell_four = document.getElementById('buy_sell_four')
let buy_sell_five = document.getElementById('buy_sell_five')

let fiftth_dropdown_icon= document.getElementById('fiftth_dropdown_icon')
let sixth_dropdown_icon= document.getElementById('sixth_dropdown_icon')
let seventh_dropdown_icon= document.getElementById('seventh_dropdown_icon')
let eight_dropdown_icon = document.getElementById('eight_dropdown_icon')

let start_time_drop_list = document.getElementById('start_time_drop_list')
let duration_drop_list = document.getElementById('duration_drop_list')
let duration_unit_list = document.getElementById('duration_unit_list')
let stake_list = document.getElementById('stake_list')

let start_time_cont = document.getElementById('start_time_cont')
let duration_stake_text_drop_cont = document.getElementById('duration_stake_text_drop_cont')
let stake_Minutes_cont = document.getElementById('stake_Minutes_cont')
let stake_drop_cont = document.getElementById('stake_drop_cont')

let duration_amount_input = document.getElementById('duration_amount_input')
let stake_amount_input = document.getElementById('stake_amount_input')

let last_digit_prediction_display_cont = document.getElementById('last_digit_prediction_display_cont')
let not_support = document.getElementById('not_support')






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

// Function to check and set input values from cookies
function loadValuesFromCookies() {
    duration_amount_cookie = getCookie('duration_amount_cookie');
    stake_amount_cookie = getCookie('stake_amount_cookie');
    symbol_vol_cookie = getCookie('symbol_vol_cookie');
    contract_text_cookie = getCookie('contract_text_cookie');
    let contract_type_text_cookie = getCookie('contract_type_text_cookie');
    let symbol_vol_text_cookie = getCookie('symbol_vol_text_cookie');
    let type_vol_text_cookie = getCookie('type_vol_text_cookie');



    shownSvg(contract_text_cookie)

    if (duration_amount_cookie) {
        document.getElementById('duration_amount_input').value = duration_amount_cookie;
    }

    if (stake_amount_cookie) {
        document.getElementById('stake_amount_input').value = stake_amount_cookie;
    }

    if(contract_text_cookie){
        trade_type_secound.textContent = contract_text_cookie
    }else{
        trade_type_secound.textContent = 'Matches/Differs'
    }

    if(contract_type_text_cookie){
       trade_type_first.textContent = contract_type_text_cookie
    }else{
        trade_type_first.textContent = 'Digits'
    }

    if(symbol_vol_text_cookie){
        trade_symbol_secound.textContent = symbol_vol_text_cookie
    }else{
        trade_symbol_secound.textContent = 'Volatility 10 Index'
    }

    if(type_vol_text_cookie){
        trade_symbol_first.textContent = type_vol_text_cookie
    }else{
        trade_symbol_first.textContent = 'Synthetics'
    }
}



document.addEventListener("DOMContentLoaded", function() {
    let contract_text_cookie = getCookie('contract_text_cookie');
    let symbol_vol_text_cookie = getCookie('symbol_vol_text_cookie');
    shownSvg(contract_text_cookie || "Matches/Differs"); // Default to "Matches/Differs" if no cookie is set
    setCookie('contract_text_cookie', contract_text_cookie || "Matches/Differs", 7); // Ensure cookie is set for the first time
    setCookie('symbol_vol_text_cookie', symbol_vol_text_cookie || "Volatility 10 Index", 7); // Ensure cookie is set for the first time
});








// Set up event listeners to store values in cookies
document.addEventListener('DOMContentLoaded', (event) => {
    const durationInput = document.getElementById('duration_amount_input');
    const stakeInput = document.getElementById('stake_amount_input');

    loadValuesFromCookies();
    showHide();
    

    durationInput.addEventListener('input', (event) => {
        const currentValue = event.target.value;
        setCookie('duration_amount_cookie', currentValue, 7); // Store for 7 days
    });

    stakeInput.addEventListener('input', (event) => {
        const currentValue = event.target.value;
        setCookie('stake_amount_cookie', currentValue, 7); // Store for 7 days
    });
});





window.addEventListener('load', function () {
    let buy_sell_one_display_cookie = getCookie('buy_sell_one_display_cookie');
    let buy_sell_two_display_cookie = getCookie('buy_sell_two_display_cookie');
    let buy_sell_three_display_cookie = getCookie('buy_sell_three_display_cookie');
    let buy_sell_four_display_cookie = getCookie('buy_sell_four_display_cookie');
    let buy_sell_five_display_cookie = getCookie('buy_sell_five_display_cookie');

    let allBuySell = document.querySelectorAll('.buy_sell');

    allBuySell.forEach(each => {
        each.style.display = 'none';
    });

    // Default display when cookies are not availlable
    if (!buy_sell_one_display_cookie && !buy_sell_five_display_cookie && 
        !buy_sell_two_display_cookie && !buy_sell_three_display_cookie && !buy_sell_four_display_cookie) {
        document.getElementById('buy_sell_one').style.display = 'flex';
        document.getElementById('buy_sell_five').style.display = 'flex';

        setCookie("buy_sell_one_display_cookie", true)
        setCookie("buy_sell_five_display_cookie", true)
    } else {
        if (buy_sell_one_display_cookie == 'true') {
            document.getElementById('buy_sell_one').style.display = 'flex';
        }
        if (buy_sell_two_display_cookie == 'true') {
            document.getElementById('buy_sell_two').style.display = 'flex';
        }
        if (buy_sell_three_display_cookie == 'true') {
            document.getElementById('buy_sell_three').style.display = 'flex';
        }
        if (buy_sell_four_display_cookie == 'true') {
            document.getElementById('buy_sell_four').style.display = 'flex';
        }
        if (buy_sell_five_display_cookie == 'true') {
            document.getElementById('buy_sell_five').style.display = 'flex';
        }
    }
});











import { animateButton } from '../helper_functions/animate_button.js';

import { displayDrops } from '../helper_functions/drop_drown_up_display.js';






window.addEventListener('load', function () {
    symbol_vol = symbol_vol_cookie
});


const tickStream = () => api.subscribe({ "ticks": symbol_vol == null ? 'R_10' : symbol_vol });

function getRandom(strNumber) {
    return randomNumber = strNumber.charAt(strNumber.length - 1);
}

const tickResponse = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        console.log('Error : ', data.error.message);
        connection.removeEventListener('message', tickResponse, false);
        await api.disconnect();
        tick_stream.textContent = 'Not supported'
    }
    if (data.msg_type === 'tick') {
        subscriptionId = data.subscription.id
        let tickStreamQuote = data.tick.quote;

        function formatNumber1(tickStreamQuote) {
            let numStr = tickStreamQuote.toString();
            let parts = numStr.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (parts.length > 1) {
                parts[1] = parts[1].padEnd(3, '0');
            } else {
                parts.push('000');
            }
            return parts.join('.');
        }


        function formatNumber2(tickStreamQuote) {
            let numStr = tickStreamQuote.toString();
            let parts = numStr.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            if (parts.length > 1) {
                if (parts[1].length === 3) {
                    parts[1] += '0';
                }
            } else {
                parts.push('000');
            }

            return parts.join('.');
        }


        if (data.echo_req.ticks != "R_75") {
            strNumber = formatNumber1(tickStreamQuote).toString();
        } else {
            strNumber = formatNumber2(tickStreamQuote).toString();
        }

        if (data.echo_req.ticks != "R_75") {
            tick_stream.textContent = formatNumber1(tickStreamQuote);
        } else {
            tick_stream.textContent = formatNumber2(tickStreamQuote);
        }

    }
};


async function initializeApi(message1) {
 
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

                let real_balance = localStorage.getItem('real_balance')
                current_balance_fig.textContent = real_balance

                let login_id = localStorage.getItem('real_id')
                logi_id.textContent = login_id



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


            balance_amount.textContent = authorize_response.authorize.balance
        
           
            let balance_default = api.balance({ "balance": 1, "subscribe": 1 });
            console.log(balance_default)
            
        }

        subscribeTicks()

        return { api, authorize_response };

    } catch (error) {
        console.error("Error occurred during API initialization:", error);
        return null;
    }
}




const subscribeTicks = async () => {
    await tickStream();
    connection.addEventListener('message', tickResponse);
};

const unsubscribeTicks = () => {
    connection.removeEventListener('message', tickResponse, false);
    tickStream().unsubscribe();
};





window.addEventListener('load', function () {
    initializeApi(message1)
     let getAwaitingResponses = setInterval(() => {
 
         if (authorize_response) {
                 clearInterval(getAwaitingResponses)
         } else {
             console.log("no authorize response yet")
         }
     }, 2000);
 
 });





if (drop_down_light_cont && dropDownLight && dropUpLight && current_balance) {
    drop_down_light_cont.addEventListener('click', () => {
        if (dropDownLight.style.display === 'block') {
            dropDownLight.style.display = 'none';
            dropUpLight.style.display = 'block';
            current_balance.style.display = 'flex';
        } else {
            dropDownLight.style.display = 'block';
            dropUpLight.style.display = 'none';
            current_balance.style.display = 'none';
        }
    });
} else {
    console.error('One or more elements are not found');
}


if (account_balance_drop_cont && account_type_change_cont && overlay) {
    account_balance_drop_cont.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (account_type_change_cont.style.display === 'block' && overlay.style.display === 'block') {
            account_type_change_cont.style.display = 'none';
            overlay.style.display = 'none';
        } else {
            account_type_change_cont.style.display = 'block';
            overlay.style.display = 'block';
        }
    });

    document.addEventListener('click', (event) => {
        if (!account_type_change_cont.contains(event.target)) {
            account_type_change_cont.style.display = 'none';
            overlay.style.display = 'none';
        }
    });

    overlay.addEventListener('click', (event) => {
        if (!account_type_change_cont.contains(event.target)) {
            account_type_change_cont.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
} else {
    console.error('One or more elements are not found');
}





if (trade_symbol && account_symbol_change_cont) {
    trade_symbol.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (account_symbol_change_cont.style.display === 'flex') {
            account_symbol_change_cont.style.display = 'none';
        } else {
            account_symbol_change_cont.style.display = 'flex';
        }
    });

    document.addEventListener('click', (event) => {
        if (!account_symbol_change_cont.contains(event.target)) {
            account_symbol_change_cont.style.display = 'none';
            third_dropdown_icon.innerHTML = dropup
        }
    });

} else {
    console.error('One or more elements are not found');
}






if (trade_type && account_contract_type_change_cont) {
    trade_type.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (account_contract_type_change_cont.style.display === 'flex') {
            account_contract_type_change_cont.style.display = 'none';
        } else {
            account_contract_type_change_cont.style.display = 'flex';
        }
    });

    document.addEventListener('click', (event) => {
        if (!account_contract_type_change_cont.contains(event.target)) {
            account_contract_type_change_cont.style.display = 'none';
            fourth_dropdown_icon.innerHTML = dropup;
        }
    });

} else {
    console.error('One or more elements are not found');
}









// Set up event listeners to store values in cookies
document.addEventListener('DOMContentLoaded', (event) => {
    let real_account_selected_for_trade = getCookie('real_account_selected_for_trade');
    let demo_account_selected_for_trade = getCookie('demo_account_selected_for_trade');


    if (real_account_selected_for_trade === "true") {
        realClickHandler.call(real); // Ensure 'this' inside realClickHandler refers to 'real'
    } else if (demo_account_selected_for_trade === "true") {
        demoClickHandler.call(demo); // Ensure 'this' inside demoClickHandler refers to 'demo'
    }
});

function activeChoice(element) {
    real.classList.remove('border_active');
    demo.classList.remove('border_active');

    element.classList.add("border_active");
}

function realClickHandler() {
    account_type.textContent = 'US Dollar';
    account_type_top.textContent = 'Real Account';
    reset.style.display = 'none';
    current_balance_fig_cont.style.display = 'flex';

   
    setCookie("real_choice_click", true);
    setCookie("demo_choice_click", false);

    localStorage.setItem("real_choice_click", true);
    localStorage.setItem("demo_choice_click", false);

    let real_balance = localStorage.getItem('real_balance')
    current_balance_fig.textContent = real_balance == null ? "click" : real_balance

    let login_id_stored = localStorage.getItem("real_id")
    logi_id.textContent = login_id_stored == null ? ' $CR5273948' : login_id_stored

   

    activeChoice(this);
}

function demoClickHandler() {
    account_type.textContent = 'Demo';
    account_type_top.textContent = "Demo Account";
    reset.style.display = 'block';
    current_balance_fig_cont.style.display = 'none';


    setCookie("demo_choice_click", true);
    setCookie("real_choice_click", false);

    localStorage.setItem("demo_choice_click", true);
    localStorage.setItem("real_choice_click", false);

    let login_id_stored = localStorage.getItem("demo_id")
    logi_id.textContent = login_id_stored == null ? ' $VTCTC273948' : login_id_stored

    activeChoice(this);
}

if (real_demo && real && demo) {
    real.addEventListener('click', realClickHandler);
    demo.addEventListener('click', demoClickHandler);
} else {
    console.error('One or more elements are not found');
}




if (account_type_change_cont && current_balance) {
    current_balance.addEventListener('click', (event) => {        
        event.stopPropagation();
        if (account_type.textContent == 'Demo') {
            let message1_set = 'Demo Account'

            message1 = message1_set

            setCookie("message1", message1_set)
            localStorage.setItem("message1", message1_set)

            apiAndAuthData = initializeApi(message1)
            
            setCookie("demo_account_selected_for_trade", true)
            setCookie("real_account_selected_for_trade", false)


        } else if(account_type.textContent == 'US Dollar'){
            let message1_set = 'Real Account'

            message1 = message1_set

            setCookie("message1", message1_set)
            localStorage.setItem("message1", message1_set)
         
            apiAndAuthData = initializeApi(message1)


            setCookie("real_account_selected_for_trade", true)
            setCookie("demo_account_selected_for_trade", false)

            
        }

         // Prevent the event from propagating to the document
        if (account_type_change_cont.style.display === 'block' && overlay.style.display === 'block') {
            account_type_change_cont.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
} else {
    console.error('One or more elements are not found');
}












let dropdown = '\u25BC'; // Unicode code point for black down-pointing triangle
let dropup = '\u25B2';   // Unicode code point for black up-pointing triangle


first_drop_cont.addEventListener('click', () => {
    // Compare innerHTML with Unicode code point values
    if(first_dropdown_icon.innerHTML.charCodeAt(0) === dropdown.charCodeAt(0)){
        first_dropdown_icon.innerHTML = dropup;
    } else {
        first_dropdown_icon.innerHTML = dropdown;
    }
});


account_balance_drop_cont.addEventListener('click', () => {
    // Compare innerHTML with Unicode code point values
    if(secound_dropdown_icon.innerHTML.charCodeAt(0) === dropdown.charCodeAt(0)){
        secound_dropdown_icon.innerHTML = dropup;
    } else {
        secound_dropdown_icon.innerHTML = dropdown;
    }
});


third_drop_cont.addEventListener('click', () => {
    // Compare innerHTML with Unicode code point values
    if(third_dropdown_icon.innerHTML.charCodeAt(0) === dropdown.charCodeAt(0)){
        third_dropdown_icon.innerHTML = dropup;
    } else {
        third_dropdown_icon.innerHTML = dropdown;
    }
});


fourth_drop_cont.addEventListener('click', () => {
    // Compare innerHTML with Unicode code point values
    if (fourth_dropdown_icon.innerHTML.charCodeAt(0) === dropdown.charCodeAt(0)) {
        fourth_dropdown_icon.innerHTML = dropup;
    } else {
        fourth_dropdown_icon.innerHTML = dropdown;
    }
});




if(buy_sell_one_display && buy_sell_one){
    buy_sell_one_display.addEventListener('click', (event) => {
        event.stopPropagation();
        let buy_sell_one_display_cookie = getCookie('buy_sell_one_display_cookie')
        if(buy_sell_one.style.display === 'none' && (buy_sell_one_display_cookie == 'false' || !buy_sell_one_display_cookie)){
            buy_sell_one.style.display = 'flex'
            setCookie('buy_sell_one_display_cookie', true)
        }else{
            buy_sell_one.style.display = 'none'
            setCookie('buy_sell_one_display_cookie', false)
        }
    })
}



if(buy_sell_two_display && buy_sell_two){
    buy_sell_two_display.addEventListener('click', (event) => {
        event.stopPropagation();
        let buy_sell_two_display_cookie = getCookie('buy_sell_two_display_cookie')
        if(buy_sell_two.style.display === 'none' && (buy_sell_two_display_cookie == 'false' || !buy_sell_two_display_cookie)){
            buy_sell_two.style.display = 'flex'
            setCookie('buy_sell_two_display_cookie', true)
        }else{
            buy_sell_two.style.display = 'none'
            setCookie('buy_sell_two_display_cookie', false)
        }
    })
}



if(buy_sell_three_display && buy_sell_three){
    buy_sell_three_display.addEventListener('click', (event) => {
        event.stopPropagation();
        let buy_sell_three_display_cookie = getCookie('buy_sell_three_display_cookie')
        if(buy_sell_three.style.display === 'none' && (buy_sell_three_display_cookie == 'false' || !buy_sell_three_display_cookie)){
            buy_sell_three.style.display = 'flex'
            setCookie('buy_sell_three_display_cookie', true)
        }else{
            buy_sell_three.style.display = 'none'
            setCookie('buy_sell_three_display_cookie', false)
        }
    })
}


if(buy_sell_four_display && buy_sell_four){
    buy_sell_four_display.addEventListener('click', (event) => {
        event.stopPropagation();
        let buy_sell_four_display_cookie = getCookie('buy_sell_four_display_cookie')
        if(buy_sell_four.style.display === 'none' && (buy_sell_four_display_cookie == 'false' || !buy_sell_four_display_cookie)){
            buy_sell_four.style.display = 'flex'
            setCookie('buy_sell_four_display_cookie', true)
        }else{
            buy_sell_four.style.display = 'none'
            setCookie('buy_sell_four_display_cookie', false)
        }
    })
}


if(buy_sell_five_display && buy_sell_five){
    buy_sell_five_display.addEventListener('click', (event) => {
        event.stopPropagation();
        let buy_sell_five_display_cookie = getCookie('buy_sell_five_display_cookie')
        if(buy_sell_five.style.display === 'none' && (buy_sell_five_display_cookie == 'false' || !buy_sell_five_display_cookie)){
            buy_sell_five.style.display = 'flex'
            setCookie("buy_sell_five_display_cookie", true)
        }else{
            buy_sell_five.style.display = 'none'
            setCookie("buy_sell_five_display_cookie", false)
        }
    })
}




if (derived_indices_drop && derived_indices_list_cont) {
    derived_indices_drop.addEventListener('click', () => {

        if(derived_indices_drop_dropdown.style.display === 'none'){
            derived_indices_drop_dropdown.style.display = 'flex'
            derived_indices_drop_dropup.style.display = 'none'
        }else{
            derived_indices_drop_dropdown.style.display = 'none'
            derived_indices_drop_dropup.style.display = 'flex'
        }

        if (derived_indices_list_cont.style.display === 'none') {
            derived_indices_list_cont.style.display = 'flex'
        }else{
            derived_indices_list_cont.style.display = 'none'
        }
    })
}










if(stake_drop_cont && stake_list){
    stake_drop_cont.addEventListener('click', () => {
        if(stake_list.style.display === 'none'){
            stake_list.style.display = 'block'
        }else{
            stake_list.style.display = 'none'
        }
    })
}


if(stake_Minutes_cont && duration_unit_list){
    stake_Minutes_cont.addEventListener('click', () => {
        if(duration_unit_list.style.display === 'none'){
            duration_unit_list.style.display = 'block'
        }else{
            duration_unit_list.style.display = 'none'
        }
    })
}

if(duration_stake_text_drop_cont && duration_drop_list){
    duration_stake_text_drop_cont.addEventListener('click', () => {
        if(duration_drop_list.style.display === 'none'){
            duration_drop_list.style.display = 'block'
        }else{
            duration_drop_list.style.display = 'none'
        }
    })
}

if(start_time_cont && start_time_drop_list){
    start_time_cont.addEventListener('click', () => {
        if(start_time_drop_list.style.display === 'none'){
            start_time_drop_list.style.display = 'block'
        }else{
            start_time_drop_list.style.display = 'none'
        }
    })
}






function showHide(){
    let show_start_time1_cookie = getCookie('show_start_time1_cookie')
    let show_start_time2_cookie = getCookie('show_start_time2_cookie')
    let show_last_digit_prediction_cookie1 = getCookie('last_digit_prediction_cookie1')
    let show_last_digit_prediction_cookie2 = getCookie('last_digit_prediction_cookie2')
    
    if((show_last_digit_prediction_cookie1 === 'false' && show_last_digit_prediction_cookie2 === 'false') ||(show_last_digit_prediction_cookie1 === 'false' && show_last_digit_prediction_cookie2 === 'true')  || (show_last_digit_prediction_cookie1 === 'true' && show_last_digit_prediction_cookie2 === 'false')){
        start_time_cont.style.display = 'flex'
    }else{
        start_time_cont.style.display = 'none'
    }
    
    
    if( show_last_digit_prediction_cookie1 === 'true' && show_last_digit_prediction_cookie2 === 'true'){
        last_digit_prediction_display_cont.style.display = 'flex'
    }else{
        last_digit_prediction_display_cont.style.display = 'none'
    }
}















const handleVolatilityClick = function () {
    
    unsubscribeTicks(); // Unsubscribe when volatility button is clicke
    let type = "Synthetics"
     

    // Logic for volatility buttons
    if (this.textContent == "Volatility 10 Index") {
        initializeApi(message1)
        let symbol_vol_set = "R_10";
        symbol_vol = symbol_vol_set
        setCookie('symbol_vol_cookie', symbol_vol_set, 7)
        setCookie('symbol_vol_text_cookie', this.textContent, 7)
        setCookie('type_vol_text_cookie', type, 7);
        trade_symbol_secound.textContent = this.textContent
        trade_symbol_first.textContent = type
        setCookie('show_start_time1_cookie', false)
        setCookie('last_digit_prediction_cookie1', true)
        showHide()
    } else if (this.textContent == "Volatility 25 Index") {
        initializeApi(message1)
        let symbol_vol_set = "R_25";
        symbol_vol = symbol_vol_set
        setCookie('symbol_vol_cookie', symbol_vol_set, 7)
        setCookie('symbol_vol_text_cookie', this.textContent, 7)
        setCookie('type_vol_text_cookie', type, 7);
        trade_symbol_secound.textContent = this.textContent
        trade_symbol_first.textContent = type
        setCookie('show_start_time1_cookie', false)
        setCookie('last_digit_prediction_cookie1', true)
        showHide()
    } else if (this.textContent == "Volatility 50 Index") {
        initializeApi(message1)
        let symbol_vol_set = "R_50";
        symbol_vol = symbol_vol_set
        setCookie('symbol_vol_cookie', symbol_vol_set, 7)
        setCookie('symbol_vol_text_cookie', this.textContent, 7)
        setCookie('type_vol_text_cookie', type, 7);
        trade_symbol_secound.textContent = this.textContent
        trade_symbol_first.textContent = type
        setCookie('show_start_time1_cookie', false)
        setCookie('last_digit_prediction_cookie1', true)
        showHide()
    } else if (this.textContent == "Volatility 75 Index") {
        initializeApi(message1)
        let symbol_vol_set = "R_75";
        symbol_vol = symbol_vol_set
        setCookie('symbol_vol_cookie', symbol_vol_set, 7)
        setCookie('symbol_vol_text_cookie', this.textContent, 7)
        setCookie('type_vol_text_cookie', type, 7);
        trade_symbol_secound.textContent = this.textContent
        trade_symbol_first.textContent = type
        setCookie('show_start_time1_cookie', false)
        setCookie('last_digit_prediction_cookie1', true)
        showHide()
    } else if (this.textContent == "Volatility 100 Index") {
        initializeApi(message1)
        let symbol_vol_set = "R_100";
        symbol_vol = symbol_vol_set
        setCookie('symbol_vol_cookie', symbol_vol_set, 7)
        setCookie('symbol_vol_text_cookie', this.textContent, 7)
        setCookie('type_vol_text_cookie', type, 7);
        trade_symbol_secound.textContent = this.textContent
        trade_symbol_first.textContent = type
        setCookie('show_start_time1_cookie', false)
        setCookie('last_digit_prediction_cookie1', true)
        showHide()
    } else { 
        initializeApi(message1) 
        let symbol_vol_set = ''
        symbol_vol = symbol_vol_set
        setCookie('symbol_vol_cookie', symbol_vol_set, 7)
        setCookie('symbol_vol_text_cookie', this.textContent, 7)
        setCookie('type_vol_text_cookie', 'not provided', 7);
        trade_symbol_secound.textContent = this.textContent
        trade_symbol_first.textContent = 'not provided'
        setCookie('show_start_time1_cookie', true)
        setCookie('last_digit_prediction_cookie1', false)
        showHide()
    }

    api.forget(subscriptionId)


    setTimeout(() => {
        subscribeTicks()
        console.log("subscribed again")
    }, 1000)


    if(account_symbol_change_cont.style.display = 'flex'){
        account_symbol_change_cont.style.display = 'none'
    }else{
        account_symbol_change_cont.style.display = 'flex'
    }
};

volatilities.forEach(function (volatility) {
    // Attach handleVolatilityClick function to click event listener of each volatility button
    volatility.addEventListener("click", handleVolatilityClick);

});





function shownSvg(contract_text) {
    let all_svg_up = document.querySelectorAll('.trade_svg_up');
    let all_svg_down = document.querySelectorAll('.trade_svg_down');

    all_svg_up.forEach(each => {
        each.style.display = 'none';
    });

    all_svg_down.forEach(each => {
        each.style.display = 'none';
    });

    let match_svg = document.getElementById('match_svg');
    let differ_svg = document.getElementById('differ_svg');
    let even_svg = document.getElementById('even_svg');
    let odd_svg = document.getElementById('odd_svg');
    let over_svg = document.getElementById('over_svg');
    let under_svg = document.getElementById('under_svg');
    let rise_svg = document.getElementById('rise_svg');
    let fall_svg = document.getElementById('fall_svg');
    let trade_type_text_digit1 = document.getElementById('trade_type_text_digit1');
    let trade_type_text_digit2 = document.getElementById('trade_type_text_digit2');
    let trade_type_text_name_up = document.getElementById('trade_type_text_name_up');
    let trade_type_text_name_down = document.getElementById('trade_type_text_name_down');

    if (contract_text == "Matches/Differs") {
        match_svg.style.display = 'block';
        differ_svg.style.display = 'block';
        trade_type_text_digit1.style.display = 'block';
        trade_type_text_digit2.style.display = 'block';
        trade_type_text_name_up.textContent = 'Matches';
        trade_type_text_name_down.textContent = 'Differs';
    } else if (contract_text == "Over/Under") {
        over_svg.style.display = 'block';
        under_svg.style.display = 'block';
        trade_type_text_digit1.style.display = 'block';
        trade_type_text_digit2.style.display = 'block';
        trade_type_text_name_up.textContent = 'Over';
        trade_type_text_name_down.textContent = 'Under';
    } else if (contract_text == "Odd/Even") {
        even_svg.style.display = 'block';
        odd_svg.style.display = 'block';
        trade_type_text_digit1.style.display = 'block';
        trade_type_text_digit2.style.display = 'block';
        trade_type_text_name_up.textContent = 'Even';
        trade_type_text_name_down.textContent = 'Odd';
    } else if (contract_text == "Rise/Fall") {
        rise_svg.style.display = 'block';
        fall_svg.style.display = 'block';
        trade_type_text_digit1.style.display = 'none';
        trade_type_text_digit2.style.display = 'none';
        trade_type_text_name_up.textContent = 'Rise';
        trade_type_text_name_down.textContent = 'Fall';
    } else if (contract_text == "Higher/Lower") {
        rise_svg.style.display = 'block';
        fall_svg.style.display = 'block';
        trade_type_text_digit1.style.display = 'none';
        trade_type_text_digit2.style.display = 'none';
        trade_type_text_name_up.textContent = 'Higher';
        trade_type_text_name_down.textContent = 'Lower';
    }
}

const handleTradeTypeClick = function () {
    // Update cookies before calling shownSvg
    setCookie('contract_text_cookie', this.textContent, 7);

    localStorage.setItem('contract_type_change_click', true)

    shownSvg(this.textContent);

    let type = "Digits";
    let type2 = "Up/Down";

    // Logic for volatility buttons
    if (this.textContent == "Matches/Differs") {
        setCookie('contract_type_text_cookie', type, 7);
        trade_type_secound.textContent = this.textContent;
        trade_symbol_first.textContent = type;
        setCookie('last_digit_prediction_cookie2', true);
        setCookie('show_start_time2_cookie', false);
        showHide();
    } else if (this.textContent == "Over/Under") {
        setCookie('contract_type_text_cookie', type, 7);
        trade_type_secound.textContent = this.textContent;
        trade_type_first.textContent = type;
        setCookie('last_digit_prediction_cookie2', false);
        setCookie('show_start_time2_cookie', true);
        showHide();
    } else if (this.textContent == "Odd/Even") {
        setCookie('contract_type_text_cookie', type, 7);
        trade_type_secound.textContent = this.textContent;
        trade_type_first.textContent = type;
        setCookie('last_digit_prediction_cookie2', true);
        setCookie('show_start_time2_cookie', false);
        showHide();
    } else if (this.textContent == "Rise/Fall") {
        setCookie('contract_type_text_cookie', type2, 7);
        trade_type_secound.textContent = this.textContent;
        trade_type_first.textContent = type2;
        setCookie('last_digit_prediction_cookie2', false);
        setCookie('show_start_time2_cookie', true);
        showHide();
    } else if (this.textContent == "Higher/Lower") {
        setCookie('contract_type_text_cookie', type2, 7);
        trade_type_secound.textContent = this.textContent;
        trade_type_first.textContent = type2;
        setCookie('last_digit_prediction_cookie2', false);
        setCookie('show_start_time2_cookie', true);
        showHide();
    } else {
        setCookie('contract_type_text_cookie', type, 7);
        trade_type_secound.textContent = this.textContent;
        trade_type_first.textContent = 'not provided';
        setCookie('last_digit_prediction_cookie2', false);
        setCookie('show_start_time2_cookie', true);
        showHide();
    }

    if (account_contract_type_change_cont.style.display === 'flex') {
        account_contract_type_change_cont.style.display = 'none';
    } else {
        account_contract_type_change_cont.style.display = 'flex';
    }
};


tradeTypes.forEach(function (types) {
    types.addEventListener("click", handleTradeTypeClick);
});












up_purchase_btn.addEventListener('click', function (){
    let proposeButton = up_purchase_btn.textContent

})
down_purchase_btn.addEventListener('click', function (){
    let proposeButton = down_purchase_btn.textContent 

})



























































document.getElementById('csvFile').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const csvData = event.target.result;
        const rows = csvData.split('\n');
        const consecutiveOccurrences = 6; // Change this value to specify the desired number of consecutive occurrences
        const result = findConsecutiveOccurrences(rows, consecutiveOccurrences);

        displayResult(result);
    };

    reader.readAsText(file);
}

function findConsecutiveOccurrences(rows, consecutiveOccurrences) {
    const result = {};
    for (let i = 1; i < rows.length; i++) { // start from index 1 to skip header
        const columns = rows[i].split(',');
        if (columns.length > 1) {
            const lastDigit = columns[1].trim().charAt(columns[1].length - 1);
            const number = parseInt(lastDigit);
            if (checkConsecutiveOccurrences(rows, i, number, consecutiveOccurrences)) {
                result[number] = i;
            }
        }
    }
    return result;
}

function checkConsecutiveOccurrences(rows, startIndex, targetNumber, consecutiveOccurrences) {
    let count = 1;
    for (let i = startIndex + 1; i < rows.length; i++) {
        const columns = rows[i].split(',');
        if (columns.length > 1) {
            const lastDigit = columns[1].trim().charAt(columns[1].length - 1);
            const number = parseInt(lastDigit);
            if (number === targetNumber) {
                count++;
                if (count === consecutiveOccurrences) {
                    return true;
                }
            } else {
                return false;
            }
        }
    }
    return false;
}

function displayResult(result) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h3>Numbers under the last digit appearing ${Object.keys(result).length} times in a row:</h3>`;
    for (const number in result) {
        if (result.hasOwnProperty(number)) {
            outputDiv.innerHTML += `<p>Number: ${number}, Starting from Line: ${result[number]}</p>`;
        }
    }
}












document.addEventListener('DOMContentLoaded', function () {
    const parentContainer = document.getElementById('info_about_tick_history');
    let uniqueIdCounter = 0;

    function createAndTypeText(text) {
        uniqueIdCounter += 1;
        const uniqueId = `typed-text-${uniqueIdCounter}`;
        const className = `typed-text`;

        const newPTag = document.createElement('p');
        newPTag.id = uniqueId;
        newPTag.className = className;
        parentContainer.appendChild(newPTag);

        new Typed(`#${uniqueId}`, {
            strings: [text],
            typeSpeed: 50,
            showCursor: false, // Hide the cursor after typing
            onComplete: function (self) {
                // Remove the Typed instance to prevent further modifications
                self.cursor.remove();
            }
        });
    }

    // Fetch data and typewrite every 5 seconds as an example
    setInterval(fetchDataAndTypeWrite, 5000);
});



























let allSections = document.querySelectorAll(".pbig");
let allSectionLinks = document.querySelectorAll(".ass_cont");
let scrollableContainer = document.querySelector('.symbol_assets_type_cont');

// Click event for links
allSectionLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Extract the target section id from the link id
        let targetId = link.id.replace('ass_cont_', '');
        let targetElement = document.getElementById(targetId);
        
        // Scroll to the target section
        scrollableContainer.scrollTo({
            top: targetElement.offsetTop - scrollableContainer.offsetTop,
            behavior: 'smooth'
        });

        // Remove active class from all links
        allSectionLinks.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        link.classList.add('active');
    });
});

// Scroll event for the scrollable container
scrollableContainer.addEventListener('scroll', () => {
    let containerTop = scrollableContainer.scrollTop;
    allSections.forEach(section => {
        let sectionTop = section.offsetTop - scrollableContainer.offsetTop;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (containerTop >= sectionTop && containerTop < sectionTop + sectionHeight) {
            allSectionLinks.forEach(link => {
                link.classList.remove('active');
                if (link.id.replace('ass_cont_', '') === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

























































































// const purchase_match_button = document.getElementById('purchase_match_button')
// const purchase_differ_button = document.getElementById('purchase_differ_button')

// var slide_trade_result = document.getElementById("slide_trade_result");
// var last_digit_mirror = document.getElementById("last_digit_mirror");


// var demo_account = document.getElementById("demo_account");
// var real_account = document.getElementById("real_account");


// var tick_stream = document.getElementById("tick_stream");
// var tick_stream_symbols_drop = document.getElementById("tick_stream_symbols_drop");


// var logi_id = document.getElementById("logi_id");
// var account_balance = document.getElementById("account_balance");

// var dropdown_icon_container = document.getElementById("dropdown_icon_container");

// var volatilities = document.querySelectorAll(".vol");



// var account_balance = document.getElementById("account_balance");

// var trade_page_right_cont = document.getElementById("trade_page_right_cont");

// var symbol_display = document.getElementById("symbol_display");

// var submit_btn = document.getElementById("submit_btn");




// import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';










// const app_id_demo = sessionStorage.getItem('app_id_demo');
// const token_demo = sessionStorage.getItem('token_demo');
// const app_id_real = sessionStorage.getItem('app_id_real');
// const token_real = sessionStorage.getItem('token_real');

// // Use the retrieved values as needed
// console.log(app_id_demo, token_demo, app_id_real, token_real);




// var api = null

// var connection = null

// var apiAndAuthData = null

// var symbol_vol = null

// var message1 = null


// var randomNumber = null;
// var strNumber = null;


// var authorize_response = null
// // Loop through each element

// var subscriptionId = null



// var randomNumber2 = null

// let balance_default = null


// let buy_contract_id = null




// import { animateButton } from '../helper_functions/animate_button.js';

// import { displayDrops } from '../helper_functions/drop_drown_up_display.js';

































































// const tickStream = () => api.subscribe({ "ticks": symbol_vol == null ? 'R_10' : symbol_vol });








// function getRandom(strNumber) {
//     return randomNumber = strNumber.charAt(strNumber.length - 1);
// }







// const tickResponse = async (res) => {
//     const data = JSON.parse(res.data);
//     if (data.error !== undefined) {
//         console.log('Error : ', data.error.message);
//         connection.removeEventListener('message', tickResponse, false);
//         await api.disconnect();
//     }
//     if (data.msg_type === 'tick') {
//         subscriptionId = data.subscription.id
//         let tickStreamQuote = data.tick.quote;

//         function formatNumber1(tickStreamQuote) {
//             let numStr = tickStreamQuote.toString();
//             let parts = numStr.split('.');
//             parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//             if (parts.length > 1) {
//                 parts[1] = parts[1].padEnd(3, '0');
//             } else {
//                 parts.push('000');
//             }
//             return parts.join('.');
//         }


//         function formatNumber2(tickStreamQuote) {
//             let numStr = tickStreamQuote.toString();
//             let parts = numStr.split('.');
//             parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//             if (parts.length > 1) {
//                 if (parts[1].length === 3) {
//                     parts[1] += '0';
//                 }
//             } else {
//                 parts.push('000');
//             }

//             return parts.join('.');
//         }


//         if (data.echo_req.ticks != "R_75") {
//             strNumber = formatNumber1(tickStreamQuote).toString();
//         } else {
//             strNumber = formatNumber2(tickStreamQuote).toString();
//         }

//         if (data.echo_req.ticks != "R_75") {
//             tick_stream_symbols_drop.children.item(0).textContent = formatNumber1(tickStreamQuote);
//         } else {
//             tick_stream_symbols_drop.children.item(0).textContent = formatNumber2(tickStreamQuote);
//         }

//     }
// };












// let api_id = null;
// let api_token = null;



// async function initializeApi(message1) {
 
//     try {

//         if (message1 === "Demo Account" || message1 === null) {
//             api_id = app_id_demo;
//             api_token = token_demo;
//             connection = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${api_id}`);
//         } else if (message1 === "Real Account") {
//             api_id = app_id_real;
//             api_token = token_real;
//             connection = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${api_id}`);

//         } else if (api_id == null) {
//             console.log("no app id yet")
//         }
//     } catch (error) {
//         console.log("no app id yet")
//     }



//     try {
//         api = new DerivAPIBasic({ connection });
//         authorize_response = await api.authorize(api_token);
//         console.log(authorize_response)
//         if (!authorize_response.authorize) {
//             console.log("Authorization failed. Please check your API token.");
//             return null;
//         } else {
//             logi_id.textContent = authorize_response.authorize.loginid
//             account_balance.children.item(0).textContent = authorize_response.authorize.balance;
//             balance_default = api.balance({ "balance": 1, "subscribe": 1 });
//         }


//         subscribeTicks();



//         return { api, authorize_response };

//     } catch (error) {
//         console.error("Error occurred during API initialization:", error);
//         return null;
//     }
// }












// const subscribeTicks = async () => {
//     await tickStream();
//     connection.addEventListener('message', tickResponse);
// };




// const unsubscribeTicks = () => {
//     connection.removeEventListener('message', tickResponse, false);
//     tickStream().unsubscribe();
// };

























































// const handleVolatilityClick = function () {
//     unsubscribeTicks(); // Unsubscribe when volatility button is clicke


//     // Logic for volatility buttons
//     if (this.textContent == "Volatility 10 index") {
//         symbol_vol = "R_10";
//         symbol_display.textContent = "Volatility 10 index"
//     } else if (this.textContent == "Volatility 25 index") {
//         symbol_vol = "R_25";
//         symbol_display.textContent = "Volatility 25 index"
//     } else if (this.textContent == "Volatility 50 index") {
//         symbol_vol = "R_50";
//         symbol_display.textContent = "Volatility 50 index"
//     } else if (this.textContent == "Volatility 75 index") {
//         symbol_vol = "R_75";
//         symbol_display.textContent = "Volatility 75 index"
//     } else if (this.textContent == "Volatility 100 index") {
//         symbol_vol = "R_100";
//         symbol_display.textContent = "Volatility 100 index"
//     } else {
//         symbol_vol = "R_10";
//         symbol_display.textContent = "Volatility 10 index"
//     }

//     api.forget(subscriptionId)


//     setTimeout(() => {
//         subscribeTicks()
//         console.log("subscribed again")
//     }, 1000)


// };

// volatilities.forEach(function (volatility) {
//     // Attach handleVolatilityClick function to click event listener of each volatility button
//     volatility.addEventListener("click", handleVolatilityClick);

// });






























// real_account.onclick = function () {
//     message1 = real_account.textContent
//     apiAndAuthData = initializeApi(message1)
// }

// demo_account.onclick = function () {
//     message1 = demo_account.textContent
//     apiAndAuthData = initializeApi(message1)
// }







// dropdown_icon_container.addEventListener("click", () => {
//     displayDrops()
// })




// window.addEventListener('load', function () {

//     initializeApi(message1)

//     let getAwaitingResponses = setInterval(() => {

//         if (authorize_response) {
//             if (authorize_response.authorize.loginid) {
//                 logi_id.textContent = authorize_response.authorize.loginid
//                 clearInterval(getAwaitingResponses)
//             } else {
//                 logi_id.textContent = "VRTC2324567"
//             }

//             if (authorize_response.authorize.balance) {
//                 var account_balance_fig = this.document.getElementById("account_balance_fig")
//                 if (account_balance_fig) {
//                     account_balance_fig = authorize_response.authorize.balance
//                 } else {
//                     console.log("not available")
//                 }
//             } else {
//                 account_balance.textContent = "10 USD"
//             }
//         } else {
//             console.log("no authorize response yet")
//         }
//     }, 2000);

// });





















































// function removeTradeList() {

//     slide_trade_result.classList.remove(
//         "slideInFromLeftAnimation0",
//         "slideInFromLeftAnimation1",
//         "slideInFromLeftAnimation2",
//         "slideInFromLeftAnimation3",
//         "slideInFromLeftAnimation4",
//         "slideInFromLeftAnimation5",
//         "slideInFromLeftAnimation6",
//         "slideInFromLeftAnimation7",
//         "slideInFromLeftAnimation8",
//         "slideInFromLeftAnimation9"
//     );

// }








// // Function to generate and store random number every second
// function generateAndStoreRandomNumber() {

//     removeTradeList()

//     // If the condition is true, add the animation
//     if (randomNumber == 0) {
//         // Add the animation class
//         slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
//         // Ensure that display is set to block when adding the animation class
//         slide_trade_result.style.display = "block";
//         last_digit_mirror.textContent = randomNumber
//     } else if (randomNumber == 1) {
//         // Add the animation class
//         slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
//         // Ensure that display is set to block when adding the animation class
//         slide_trade_result.style.display = "block";
//         last_digit_mirror.textContent = randomNumber
//     } else if (randomNumber == 2) {
//         // Add the animation class
//         slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
//         // Ensure that display is set to block when adding the animation class
//         slide_trade_result.style.display = "block";
//         last_digit_mirror.textContent = randomNumber
//     } else if (randomNumber == 3) {
//         // Add the animation class
//         slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
//         // Ensure that display is set to block when adding the animation class
//         slide_trade_result.style.display = "block";
//         last_digit_mirror.textContent = randomNumber
//     } else if (randomNumber == 4) {
//         // Add the animation class
//         slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
//         // Ensure that display is set to block when adding the animation class
//         slide_trade_result.style.display = "block";
//         last_digit_mirror.textContent = randomNumber
//     } else if (randomNumber == 5) {
//         // Add the animation class
//         slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
//         // Ensure that display is set to block when adding the animation class
//         slide_trade_result.style.display = "block";
//         last_digit_mirror.textContent = randomNumber
//     } else if (randomNumber == 6) {
//         // Add the animation class
//         slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
//         // Ensure that display is set to block when adding the animation class
//         slide_trade_result.style.display = "block";
//         last_digit_mirror.textContent = randomNumber
//     } else if (randomNumber == 7) {
//         // Add the animation class
//         slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
//         // Ensure that display is set to block when adding the animation class
//         slide_trade_result.style.display = "block";
//         last_digit_mirror.textContent = randomNumber
//     } else if (randomNumber == 8) {
//         // Add the animation class
//         slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
//         // Ensure that display is set to block when adding the animation class
//         slide_trade_result.style.display = "block";
//         last_digit_mirror.textContent = randomNumber
//     } else if (randomNumber == 9) {
//         // Add the animation class
//         slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
//         // Ensure that display is set to block when adding the animation class
//         slide_trade_result.style.display = "block";
//         last_digit_mirror.textContent = randomNumber
//     } else if (randomNumber == null) {
//         // Add the animation class
//         slide_trade_result.classList.add("slideInFromLeftAnimation" + '0');
//         // Ensure that display is set to block when adding the animation class
//         slide_trade_result.style.display = "block";
//         last_digit_mirror.textContent = randomNumber
//     }
// }

// // Interval to call the function every second
// setInterval(generateAndStoreRandomNumber, 1000);























































// var dropdown_icon_times_display = document.getElementById("dropdown_icon_times_display")
// var dropup_icon_times_display = document.getElementById("dropup_icon_times_display")
// var times_display = document.getElementById("times_display")
// var times_select_cont = document.getElementById("times_select_cont")
// var times_display_drop_cont = document.getElementById("times_display_drop_cont")



// var trade_types_select_cont = document.getElementById("trade_types_select_cont")
// var drop_icon_trade_display_cont = document.getElementById("drop_icon_trade_display_cont")
// var dropdown_icon_trade_display = document.getElementById("dropdown_icon_trade_display")
// var dropup_icon_trade_display = document.getElementById("dropup_icon_trade_display")
// var trade_types_display = document.getElementById("trade_types_display")



// var times = document.querySelectorAll(".times");
// var trade_types = document.querySelectorAll(".trade_types");



// let duration_unit = null
// let tradeType = null










// drop_icon_trade_display_cont.addEventListener('click', function () {
//     if (dropdown_icon_trade_display.style.display == 'block') {
//         dropdown_icon_trade_display.style.display = "none"
//         dropup_icon_trade_display.style.display = 'block'
//         trade_types_select_cont.style.display = 'block'
//     } else {
//         dropdown_icon_trade_display.style.display = 'block'
//         dropup_icon_trade_display.style.display = 'none'
//         trade_types_select_cont.style.display = 'none'
//     }
// })




// times_display_drop_cont.addEventListener("click", function () {

//     if (dropdown_icon_times_display.style.display == 'block') {
//         dropdown_icon_times_display.style.display = "none"
//         dropup_icon_times_display.style.display = 'block'
//         times_select_cont.style.display = 'block'
//     } else {
//         dropdown_icon_times_display.style.display = 'block'
//         dropup_icon_times_display.style.display = 'none'
//         times_select_cont.style.display = 'none'
//     }


// })




// const handleDurationClick = function () {


//     // Logic for volatility buttons_unit
//     if (this.textContent == "tick") {
//         duration_unit = "t";
//         times_display.textContent = "tick"
//     } else if (this.textContent == "seconnds") {
//         duration_unit = "s";
//         times_display.textContent = "seconnds"
//     } else if (this.textContent == "minutes") {
//         duration_unit = "m";
//         times_display.textContent = "minutes"
//     } else if (this.textContent == "hours") {
//         duration_unit = "h";
//         times_display.textContent = "hours"
//     } else if (this.textContent == "days") {
//         duration_unit = "d";
//         times_display.textContent = "days"
//     } else {
//         duration_unit = "t";
//         times_display.textContent = "ticks"
//     }
// };

// times.forEach(function (time) {
//     // Attach handleVolatilityClick function to click event listener of each volatility button
//     time.addEventListener("click", handleDurationClick);

// });




// const handleTradeTypeClick = function () {

//     // Logic for volatility buttons
//     if (this.textContent == "Match/Differs") {
//         tradeType = "Matches/differs";
//         trade_types_display.textContent = "Match/Differs"
//     } else if (this.textContent == "Even/Odd") {
//         tradeType = "Even/Odd";
//         trade_types_display.textContent = "Even/Odd"
//     } else if (this.textContent == "Over/Under") {
//         tradeType = "Over/Under";
//         trade_types_display.textContent = "Over/Under"
//     } else {
//         tradeType = "Matches/Differs";
//         trade_types_display.textContent = "Matches/Differs"
//     }
// };

// trade_types.forEach(function (type) {
//     // Attach handleVolatilityClick function to click event listener of each volatility button
//     type.addEventListener("click", handleTradeTypeClick);

// });






























































// let duration_fig = null
// let amount_fig = null
// let barrier_fig = null

// // Get the input element using its id
// var duration_input_main = document.getElementById('duration_input_main');

// // Function to handle input change
// function handleChange1() {
//     // Grab the value of the input
//     duration_fig = duration_input_main.value;
//     console.log(duration_fig)
// }

// // Add an event listener to listen for keyup events
// duration_input_main.addEventListener('keyup', handleChange1);


// // Get the input element using its id
// var amount_input_main = document.getElementById('amount_input_main');

// // Function to handle input change
// function handleChange2() {
//     // Grab the value of the input
//     amount_fig = amount_input_main.value;
//     console.log(amount_fig)
// }

// // Add an event listener to listen for keyup events
// amount_input_main.addEventListener('keyup', handleChange2);


// // Get the input element using its id
// var barrier_input_main = document.getElementById('barrier_input_main');

// // Function to handle input change
// function handleChange3() {
//     // Grab the value of the input
//     barrier_fig = barrier_input_main.value;
//     console.log(barrier_fig)
// }

// // Add an event listener to listen for keyup events
// barrier_input_main.addEventListener('keyup', handleChange3);



// var hamburger1 = document.getElementById("hamburger1")
// var hamburger2 = document.getElementById("hamburger2")
// var amount_duration_cont = document.getElementById("amount_duration_cont")
// var trade_page_top_right = document.getElementById("trade_page_top_right")
// var btn_show_first = document.getElementById("btn_show_first")
// var btn_show_second = document.getElementById("btn_show_second")
// var overlay = document.getElementById("overlay")

// hamburger1.addEventListener("click", function () {
//     if (amount_duration_cont.style.display == 'none' && overlay.style.display == 'none') {
//         amount_duration_cont.style.display = 'flex'
//         overlay.style.display = 'flex'
//     } else {
//         amount_duration_cont.style.display = 'none'
//         overlay.style.display = 'none'
//     }

//     if (trade_page_top_right.style.display == 'flex') {
//         trade_page_top_right.style.display = 'none'
//     }
// })

// hamburger2.addEventListener("click", function () {
//     if (trade_page_top_right.style.display == 'none' && overlay.style.display == 'none') {
//         trade_page_top_right.style.display = 'flex'
//         overlay.style.display = 'flex'
//     } else {
//         trade_page_top_right.style.display = 'none'
//         overlay.style.display = 'none'
//     }

//     if (amount_duration_cont.style.display == 'flex') {
//         amount_duration_cont.style.display = 'none'
//     }

// })



// window.addEventListener('resize', function () {
//     if (window.innerWidth > 1450) {
//         amount_duration_cont.style.display = 'flex';
//         btn_show_first.style.display = 'none'
//     } else {
//         amount_duration_cont.style.display = 'none';
//         btn_show_first.style.display = 'flex'
//     }
// });

// window.addEventListener('resize', function () {
//     if (window.innerWidth > 1350) {
//         trade_page_top_right.style.display = 'flex';
//         btn_show_second.style.display = 'none'
//     } else {
//         trade_page_top_right.style.display = 'none';
//         btn_show_second.style.display = 'flex'
//     }
// });
















































































































// let proposalDigitDiffer = {
//     "proposal": 1,
//     "amount": 10,
//     "barrier": "9",
//     "basis": "stake",
//     "contract_type": "DIGITDIFF",
//     "currency": "USD",
//     "duration": 1,
//     "duration_unit": "t",
//     "product_type": "basic",
//     "symbol": "R_10"
// }

// let proposalDigitMatch = {
//     "proposal": 1,
//     "amount": 10,
//     "barrier": "9",
//     "basis": "stake",
//     "contract_type": "DIGITMATCH",
//     "currency": "USD",
//     "duration": 1,
//     "duration_unit": "t",
//     "product_type": "basic",
//     "symbol": "R_10"
// }







// // Send a ping every 30 seconds to keep the connection alive
// // Needs to use the same websocket connection as the one you want to maintain.
// const ping = () => {
//     setInterval(() => {
//         api.ping();
//     }, 30000);
// };

// const proposalResponse = async (res) => {
//     const data = JSON.parse(res.data);
//     if (data.error !== undefined) {
//         console.log('Error: %s ', data.error.message);
//         connection.removeEventListener('message', proposalResponse, false);
//         await api.disconnect();
//     } else if (data.msg_type === 'proposal_open_contract') {
//         console.log('Details: %s', data.proposal_open_contract.longcode);
//         console.log('Ask Price: %s', data.proposal_open_contract.current_spot_display_value);
//         console.log('Payout: %f', data.proposal_open_contract.payout);
//         console.log('Spot: %f', data.proposal_open_contract.current_spot);
//     } else if (data.msg_type === 'proposal') {
//         console.log('Details: %s', data.proposal.longcode);
//         console.log('Ask Price: %s', data.proposal.display_value);
//         console.log('Payout: %f', data.proposal.payout);
//         console.log('Spot: %f', data.proposal.spot);
//         console.log('date_start: %f', data.proposal.date_start);
//         console.log('date_expiry: %f', data.proposal.date_expiry);
//     } else if (data.msg_type === 'ping') {
//         console.log('ping');
//     }
// };

// const proposalOpenContractResponse = async (res) => {
//     const data = JSON.parse(res.data);
//     if (data.error !== undefined) {
//         console.log('Error: %s ', data.error.message);
//         connection.removeEventListener('message', proposalOpenContractResponse, false);
//         await api.disconnect();
//     } else if (data.msg_type === 'proposal_open_contract') {
//         console.log('Details: %s', data.proposal_open_contract.longcode);
//         console.log('Ask Price: %s', data.proposal_open_contract.current_spot_display_value);
//         console.log('Payout: %f', data.proposal_open_contract.payout);
//         console.log('Spot: %f', data.proposal_open_contract.current_spot);
//     } else if (data.msg_type === 'ping') {
//         console.log('ping');
//     }
// };


// const balance = async (res) => {
//     const data = JSON.parse(res.data);
//     if (data.error !== undefined) {
//         console.log('Error: %s ', data.error.message);
//         connection.removeEventListener('message', balance, false);
//         await api.disconnect();
//     } else if (data.msg_type === 'balance') {
//         console.log('balance: %s', data.balance.balance);
//         console.log('Ask Price: %s', data.balance.loginid);
//         console.log('currency: %f', data.balance.currency);
//     } else if (data.msg_type === 'ping') {
//         console.log('ping');
//     }
// };




// const checkSignal = () => {
//     proposal();
//     ping();
//     connection.addEventListener('message', proposalResponse);
// };

// const endCall = () => {
//     connection.removeEventListener('message', proposalResponse, false);
//     proposal().unsubscribe();
// };








// async function seeContractResult() {
//     if (api) {
//         let proposalOpenContract = await api.proposalOpenContract({ "proposal_open_contract": 1, "contract_id": buy_contract_id, "subscribe": 1 })

//         if (proposalOpenContract) {
//             console.log(proposalOpenContract)
//         } else {
//             console.log("no proposal open contract yet")
//         }

//     } else {
//         console.log("no api yet")
//     }
// }










// purchase_match_button.onclick = function () {

//     animateButton(purchase_match_button)
//     let proposeButton = purchase_match_button.textContent

//     async function propose() {
//         let proposeRes = await api.proposal(proposalDigitMatch)
//         console.log(proposeRes)
//         let buy = await api.buy({ "buy": proposeRes.proposal.id, "price": 10 })
//         account_balance.children.item(0).textContent = buy.buy.balance_after
//         buy_contract_id = buy.buy.contract_id


//         setTimeout(() => {
//             let getBal = async () => {
//                 let balance = await api.balance({ "balance": 1 })
//                 if (balance.balance.balance) {
//                     var account_balance_fig = document.getElementById("account_balance_fig")
//                     if (account_balance_fig) {
//                         account_balance_fig.textContent = balance.balance.balance
//                         console.log(balance.balance.balance)
//                         console.log(balance)
//                     } else {
//                         console.log("no account balace fig")
//                     }
//                 } else {
//                     console.log(" no balance.balance.balance")
//                 }


//             }
//             getBal()
//         }, 3000)

//     }

//     propose()

//     // Options for the observer (which mutations to observe)
//     const config = { attributes: false, childList: true, subtree: false, characterData: true };

//     // Callback function to execute when mutations are observed
//     const callback = function (mutationsList, observer) {
//         for (const mutation of mutationsList) {
//             if (mutation.type === 'childList' && mutation.target === tick_stream) {
//                 getRandom(strNumber);
//                 observer.disconnect(); // Disconnect the observer after performing the task
//             }
//         }
//     };

//     // Create an observer instance linked to the callback function
//     const observer = new MutationObserver(callback);

//     // Start observing the target node for configured mutations
//     observer.observe(tick_stream, config);


// };

// purchase_differ_button.onclick = function () {
//     animateButton(purchase_differ_button)
//     let proposeButton = purchase_differ_button.textContent

//     async function propose() {
//         let proposeRes = await api.proposal(proposalDigitDiffer)
//         console.log(proposeRes)
//         let buy = await api.buy({ "buy": proposeRes.proposal.id, "price": 10 })
//         account_balance.children.item(0).textContent = buy.buy.balance_after
//         console.log(buy)
//         buy_contract_id = buy.buy.contract_id


//         setTimeout(() => {
//             let getBal = async () => {
//                 let balance = await api.balance({ "balance": 1 })
//                 if (balance.balance.balance) {
//                     var account_balance_fig = document.getElementById("account_balance_fig")
//                     if (account_balance_fig) {
//                         account_balance_fig.textContent = balance.balance.balance
//                         console.log(balance.balance.balance)
//                         console.log(balance)
//                     } else {
//                         console.log("no account balace fig")
//                     }
//                 } else {
//                     console.log(" no balance.balance.balance")
//                 }


//             }
//             getBal()
//         }, 3000)
//     }

//     propose()

//     // Options for the observer (which mutations to observe)
//     const config = { attributes: false, childList: true, subtree: false, characterData: true };

//     // Callback function to execute when mutations are observed
//     const callback = function (mutationsList, observer) {
//         for (const mutation of mutationsList) {
//             if (mutation.type === 'childList' && mutation.target === tick_stream) {
//                 getRandom(strNumber);
//                 observer.disconnect(); // Disconnect the observer after performing the task
//             }
//         }
//     };

//     // Create an observer instance linked to the callback function
//     const observer = new MutationObserver(callback);

//     // Start observing the target node for configured mutations
//     observer.observe(tick_stream, config);

// };











// // Function to add zero to single-digit numbers
// function addZeroIfNeeded(number) {
//     return (number < 10 ? '0' : '') + number;
// }

// // Function to display current time in the specified element
// function displayCurrentTime() {
//     var currentTime = new Date();
//     var year = currentTime.getFullYear();
//     var month = currentTime.getMonth() + 1; // Months are zero-based
//     var day = currentTime.getDate();
//     var hours = currentTime.getHours();
//     var ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // Handle midnight (0 hours)
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//     var formattedTime = year + "-" + addZeroIfNeeded(month) + "-" + addZeroIfNeeded(day) + " " + addZeroIfNeeded(hours) + ":" + addZeroIfNeeded(minutes) + ":" + addZeroIfNeeded(seconds) + " " + ampm;
//     targetTime.push(formattedTime)
// }





// var botIcon = document.getElementById("bot");

// botIcon.addEventListener("click", () => {
//     var botAnalyzer = document.getElementById("table_container");
//     botAnalyzer.classList.toggle("hidden");
//     botIcon.classList.toggle('shift');
// })


// var trCounter = 0; // Initialize a counter for <tr> elements
// var tdCounter = 0; // Initialize a counter for <td> elements

// function createTRWithTD(count) {
//     // Create a new <tr> element
//     var tr = document.createElement('tr');

//     // Set unique ID and classname for the <tr>
//     tr.id = 'tr' + trCounter;
//     tr.className = 'tr-class' + trCounter;

//     for (var i = 0; i < count; i++) {
//         // Create a new <td> element
//         var td = document.createElement('td');

//         // Add class and id based on counter
//         td.className = 'class' + tdCounter;
//         td.id = 'id' + tdCounter;

//         // Increment counter for the next call
//         tdCounter++;

//         // Append the <td> element to the <tr>
//         tr.appendChild(td);
//     }

//     // Increment counter for the next <tr>
//     trCounter++;

//     // Return the created <tr> element
//     return tr;
// }





// let targetValue = []
// let targetTime = []

// let currentRandom = null

// let lastNumber1 = currentRandom;
// let lastNumber2 = lastNumber1;
// // let lastNumber3 = lastNumber2;

// let currentTimePush = null

// window.onload = function () {
//     let checkApi = setInterval(() => {
//         if (api) {
//             const tickResponse2 = async (res) => {
//                 const data = JSON.parse(res.data);
//                 if (data.error !== undefined) {
//                     console.log('Error : ', data.error.message);
//                     connection.removeEventListener('message', tickResponse2, false);
//                     await api.disconnect();
//                 }

//                 // Define currentRandom outside the block

//                 function getRandom1(strNumber1) {
//                     return randomNumber2 = strNumber1.charAt(strNumber1.length - 1);
//                 }

//                 function getRandom2(strNumber2) {
//                     return randomNumber2 = strNumber2.charAt(strNumber2.length - 1);
//                 }


//                 // lastNumber3 = lastNumber2
//                 lastNumber2 = lastNumber1
//                 lastNumber1 = currentRandom

//                 if (data.msg_type === 'tick') {
//                     let subscriptionId2 = data.subscription.id;
//                     let tickStreamQuote2 = data.tick.quote;

//                     function formatNumber3(tickStreamQuote2) {
//                         let numStr = tickStreamQuote2.toString();
//                         let parts = numStr.split('.');
//                         parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//                         if (parts.length > 1) {
//                             parts[1] = parts[1].padEnd(3, '0');
//                         } else {
//                             parts.push('000');
//                         }
//                         return parts.join('.');
//                     }

//                     function formatNumber4(tickStreamQuote2) {
//                         let numStr = tickStreamQuote2.toString();
//                         let parts = numStr.split('.');
//                         parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//                         if (parts.length > 1) {
//                             if (parts[1].length === 3) {
//                                 parts[1] += '0';
//                             }
//                         } else {
//                             parts.push('000');
//                         }
//                         return parts.join('.');
//                     }

//                     if (data.echo_req.ticks != "R_75") {

//                         let strNumber1 = formatNumber3(tickStreamQuote2).toString();
//                         currentRandom = getRandom1(strNumber1);
//                     } else {

//                         let strNumber2 = formatNumber4(tickStreamQuote2).toString();
//                         currentRandom = getRandom2(strNumber2);
//                     }
//                 }



//                 if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
//                     if (lastNumber2 == lastNumber1 && lastNumber2 !== currentRandom && lastNumber1 !== currentRandom) {
//                         // console.log(lastNumber2, lastNumber1, currentRandom)
//                         targetValue.push(lastNumber2)
//                         displayCurrentTime()
//                         currentTimePush = new Date();
//                         currentTimePush = new Date(currentTimePush.getTime() + 1000);
//                         // console.log(targetValue)
//                         // console.log(targetTime)
//                     }
//                 }

//                 let currentTimeCheck = new Date();

//                 if (currentTimeCheck > currentTimePush) {
//                     if (targetValue.length > 0 && targetTime.length > 0) {
//                         for (let i = 0; i < targetValue.length; i++) {
//                             if (targetValue[i] === lastNumber1 && targetValue[i] !== currentRandom) {
//                                 // console.log("seen", targetValue[i], "caught", lastNumber1, "pass", currentRandom)
//                                 targetValue.splice(i, 1)
//                                 targetTime.splice(i, 1)
//                                 // console.log(targetValue)
//                                 // console.log(targetTime)
//                             }
//                         }
//                     }
//                 }

//             };




//             const tickStream2 = () => api.subscribe({ "ticks": symbol_vol == null ? 'R_10' : symbol_vol });




//             const subscribeTicks2 = async () => {
//                 await tickStream2();
//                 connection.addEventListener('message', tickResponse2);
//             };

//             subscribeTicks2()



//             const unsubscribeTicks2 = () => {
//                 connection.removeEventListener('message', tickResponse2, false);
//                 tickStream2().unsubscribe();
//             };


//             clearInterval(checkApi)
//         } else {
//             console.log("theres no api", api)
//         }
//     }, 1000)
// }




















































// const ticks_history_request = {
//     ticks_history: 'R_10',
//     adjust_start_time: 1,
//     count: 50000,
//     end: 'latest',
//     start: 1,
//     style: 'ticks',
// };

// const ticksHistoryResponse = async (res) => {
//     const data = JSON.parse(res.data);
//     if (data.error !== undefined) {
//         console.log('Error : ', data.error.message);
//         connection.removeEventListener('message', ticksHistoryResponse, false);
//         await api.disconnect();
//     }
//     if (data.msg_type === 'history') {
//         console.log(data.history.prices);

//         let tickData = data.history.prices;

//         if (tickData) {

//             // Create a CSV content
//             let csvContent = "Tick Data,Last Digit,Row Number\n";

//             // Add data rows
//             tickData.forEach(function (value, index) {
//                 const tickValue = value.toString(); // Convert value to string
//                 const lastDigit = tickValue[tickValue.length - 1]; // Get the last character (last digit)
//                 const rowNumber = index + 1; // Row number starts from 1
//                 csvContent += `${tickValue},${lastDigit},${rowNumber}\n`;
//             });

//             // Create a Blob object with the CSV content
//             const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

//             // Create a download link
//             const link = document.createElement("a");
//             const url = URL.createObjectURL(blob);
//             link.setAttribute("href", url);
//             link.setAttribute("download", "tick_data.csv");
//             document.body.appendChild(link); // Append the link to the DOM
//             link.click(); // Click the link to trigger the download

//             // Remove the temporary URL
//             setTimeout(function () {
//                 URL.revokeObjectURL(url);
//             }, 100);
//         } else {
//             console.log("no tick data yet")
//         }

//     }
//     connection.removeEventListener('message', ticksHistoryResponse, false);
// };

// const getTicksHistory = async () => {
//     connection.addEventListener('message', ticksHistoryResponse);
//     await api.ticksHistory(ticks_history_request);
// };

// const ticks_history_button = document.getElementById('ticks_history');
// ticks_history_button.addEventListener('click', getTicksHistory);





