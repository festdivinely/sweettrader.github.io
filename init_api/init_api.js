import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';



let choose_account_trade_type_current_balance_in_init_js = document.getElementById("current_balance_fig")
let total_asset_display_in_init_js = document.getElementById("ass_fig")


let login_id_in_init_js = document.getElementById("curr2")
let nav_current_balance_in_init_js = document.getElementById("balance_amount")
let nav_balance_currency_in_init_js = document.getElementById("balance_currency")

let volatilities = document.querySelectorAll(".each")
let tradeTypes = document.querySelectorAll("types")
let allDurationUnit = document.querySelectorAll("duru")


let current_balance = document.getElementById("current_balance_cont")
let account_type_change_cont = document.getElementById("curr_acc")

let trade_type_secound = document.getElementById("trade_type_secound")

let down_purchase_btn = document.getElementById('down_purchase_btn')

let down_proposal = document.getElementById("down_proposal")


let stake_info2 = document.getElementById("stake_info2")
let payout_info2 = document.getElementById("payout_info2")

let overlay3 = document.getElementById('overlay3')

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


let message1 = localStorage.getItem('message1')


let connection = null



let last_digit_prediction_cookie = null

let barrier_cookie = null




let contract_text_cookie = null

let duration_amount_cookie = null

let stake_amount_cookie = null

let symbol_vol_cookie = null

let duration_unit_cookie = null

let last_digit_prediction_or_barrier_cookie = null

let currency_cookie = null

let stake_or_payout_cookie = null

let proposal_id_cookie = null







let duration_unit = null

let symbol_vol = null

let duration_amount = null

let stake_amount = null

let last_digit_prediction_or_barrier = null

let currency = null

let contract = null

let stake_or_payout = null

let proposal_id = null

let stake_amount_default = null




let def_price_up = null
let def_payout_up = null
let def_profit_up = null


let website_status_info = 'initial'


let subscription_to_open_contract = true



console.log('message1',message1)


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
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}



function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}





/**
* Calculate the net profit and return percentage
* @param {number} stake - The amount staked
* @param {number} payout - The payout amount
* @returns {Object} An object containing netProfit and returnPercentage
*/
function calculateNetProfitAndReturn1(stake, payout) {
    // Calculate Net Profit
    const netProfit = payout - stake;

    // Calculate Return as a percentage
    const returnPercentage = (netProfit / stake) * 100;

    return {
        netProfit: netProfit.toFixed(2), // Format to 2 decimal places
        returnPercentage: returnPercentage.toFixed(1) // Format to 1 decimal place
    };
}




function displayProposalResult1(data, stake1, payout1) {
    let down_order_btn_down = document.getElementById('down_order_btn_down')
    const result1 = calculateNetProfitAndReturn1(stake1, payout1);
    down_order_btn_down.innerHTML = `Net Profit: ${result1.netProfit} USD | Return: ${result1.returnPercentage}%`
}

function displayProposalResult2(data, stake1, payout1) {
    const result1 = calculateNetProfitAndReturn1(stake1, payout1);
    return {
        netProPerc: `Net Profit: ${result1.netProfit} USD | Return: ${result1.returnPercentage}%`,
        NetProfit: result1.netProfit,
        percentage: result1.returnPercentage
    };
}



async function proposal_actions(data, proposalResponse) {
    // Check if there is an error object
    if (data.error) {


        setCookie('proposal_error2', data.error.message, 7)
        localStorage.setItem('proposal_error2', data.error.message)

        let proposal_id = getCookie('proposal_id2')
        if (proposal_id) {
            deleteCookie('proposal_id2')
        }

        let proposal_id_lc = localStorage.getItem('proposal_id2')
        if (proposal_id_lc) {
            localStorage.removeItem('proposal_id2')
        }

        proposal_id = null

        // Safely access the error message
        const errorMessage = data.error.message;
        console.log('Error: %s ', errorMessage);
        document.getElementById('down_order_btn_down').textContent = errorMessage;
        document.getElementById('down_proposal_info_cont').textContent = errorMessage;
        connection.removeEventListener('message', proposalResponse, false);
        await api.disconnect();
    } else if (data.msg_type === 'proposal') {
        // Check if there's no error or the error message is null or empty
        if (!data.error || !data.error.message) {

            let proposal_error = getCookie('proposal_error2')
            if (proposal_error) {
                deleteCookie('proposal_error2')
            }

            let proposal_error_lc = localStorage.getItem('proposal_error2')
            if (proposal_error_lc) {
                localStorage.removeItem('proposal_error2')
            }

            setCookie('proposal_id2', data.proposal.id, 7)
            localStorage.setItem('proposal_id2', data.proposal.id)

            proposal_id = data.proposal.id

            displayProposalResult1(data, data.proposal.display_value, data.proposal.payout);
            let calc = displayProposalResult2(data, data.proposal.display_value, data.proposal.payout)
            // Display proposal details inside the up_proposal_info_cont
            const infoContainer = document.getElementById('down_proposal_info_cont');
            infoContainer.innerHTML = `
        <p>${calc.netProPerc}</p>
        <p>Details: ${data.proposal.longcode}</p>
        <p>Ask Price: ${data.proposal.display_value}</p>
        <p>Payout: ${data.proposal.payout}</p>
        <p>Spot: ${data.proposal.spot}</p>
        <p>ID: ${data.proposal.id}</p>
        <p>website status: ${website_status_info}</P>
    `;

            stake_info2.textContent = data.proposal.display_value
            payout_info2.textContent = data.proposal.payout

            def_price_up = data.proposal.display_value
            def_payout_up = data.proposal.payout
            def_profit_up = calc.NetProfit

        } else {
            // If there's an error message, display it
            document.getElementById('down_order_btn_down').textContent = data.error.message;
        }
    }
}






async function order_propose2(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {

    let contract_type_set = null

    if (contract_type === 'Matches/Differs') {
        contract_type_set = 'DIGITMATCH'
    }

    if (contract_type === 'Over/Under') {
        contract_type_set = 'DIGITUNDER'
    }

    if (contract_type === 'Odd/Even') {
        contract_type_set = 'DIGITODD'
    }

    if (contract_type === 'Rise/Fall') {
        contract_type_set = 'PUT'
    }

    if (contract_type === 'Higher/Lower') {
        contract_type_set = 'PUT'
    }

    let proposal_to_buy = {
        "proposal": 1,
        "amount": parseFloat(amount),
        "barrier": String(last_digit_prediction_or_barrier),
        "basis": String(stake_or_payout),
        "contract_type": String(contract_type_set),
        "currency": String(currency),
        "duration": parseInt(duration),
        "duration_unit": String(duration_unit),
        "product_type": "basic",
        "symbol": String(symbol)
    }

    const proposalResponse = async (res) => {
        try {
            const data = JSON.parse(res.data);
            proposal_actions(data, proposalResponse)

        } catch (error) {
            console.error('Failed to process response:', error);
        }
    };

    const getProposal = async () => {
        connection.addEventListener('message', proposalResponse);
        await api.proposal(proposal_to_buy);
    };

    getProposal()

}








async function order_propose4(api, amount, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {

    let contract_type_set = null

    if (contract_type === 'Matches/Differs') {
        contract_type_set = 'DIGITMATCH'
    }

    if (contract_type === 'Over/Under') {
        contract_type_set = 'DIGITUNDER'
    }

    if (contract_type === 'Odd/Even') {
        contract_type_set = 'DIGITODD'
    }

    if (contract_type === 'Rise/Fall') {
        contract_type_set = 'PUT'
    }

    if (contract_type === 'Higher/Lower') {
        contract_type_set = 'PUT'
    }

    let proposal_to_buy = {
        "proposal": 1,
        "amount": parseFloat(amount),
        "basis": String(stake_or_payout),
        "contract_type": String(contract_type_set),
        "currency": String(currency),
        "duration": parseInt(duration),
        "duration_unit": String(duration_unit),
        "product_type": "basic",
        "symbol": String(symbol)
    }



    const proposalResponse = async (res) => {
        try {
            const data = JSON.parse(res.data);
            proposal_actions(data, proposalResponse)
        } catch (error) {
            console.error('Failed to process response:', error);
        }
    };

    const getProposal = async () => {
        connection.addEventListener('message', proposalResponse);
        await api.proposal(proposal_to_buy);
    };

    getProposal()

}










let website_status = () => api.websiteStatus({ "website_status": 1, "subscribe": 1 });


const websiteStatusResponse = async (res) => {
    const data = JSON.parse(res.data);

    if (data.error !== undefined) {
        console.log('Error : ', data.error?.message);
        connection.removeEventListener('message', websiteStatusResponse, false);
        await api.disconnect();
    }

    if (data.msg_type === 'website_status') {
        let siteStatus = data.website_status.site_status;
        website_status_info = siteStatus
    }

};


const getWebsiteStatus = async () => {
    connection.addEventListener('message', websiteStatusResponse);
    await website_status()
};




const ping = () => {
    setInterval(() => {
        api.ping();
    }, 30000);
};


const websitePingResponse = async (res) => {
    const data = JSON.parse(res.data);

    if (data.error !== undefined) {
        console.log('Error : ', data.error?.message);
        connection.removeEventListener('message', websitePingResponse, false);
        await api.disconnect();
    }

    if (data.msg_type === 'ping') {

    }
};


const getWebsitePing = async () => {
    connection.addEventListener('message', websitePingResponse);
    ping()
};





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

            if (authorize_response.authorize.loginid.startsWith("CR")) {


                setCookie('real_balance', authorize_response.authorize.balance)
                setCookie("real_id", authorize_response.authorize.loginid)
                setCookie("real_icon_usd", true)
                setCookie("demo_icon_usd", false)


                localStorage.setItem('real_balance', authorize_response.authorize.balance)
                localStorage.setItem("real_id", authorize_response.authorize.loginid)
                localStorage.setItem("real_icon_usd", true)
                localStorage.setItem("demo_icon_usd", false)



            } else {
                setCookie('demo_balance', authorize_response.authorize.balance)
                setCookie('demo_id', authorize_response.authorize.loginid)
                setCookie("real_icon_usd", false)
                setCookie("demo_icon_usd", true)



                localStorage.setItem('demo_balance', authorize_response.authorize.balance)
                localStorage.setItem('demo_id', authorize_response.authorize.loginid)
                localStorage.setItem("real_icon_usd", false)
                localStorage.setItem("demo_icon_usd", true)
            }


        }

        getWebsiteStatus()
        getWebsitePing()

        return { api, authorize_response };

    } catch (error) {
        console.error("Error occurred during API initialization:", error);
        return null;
    }
}





window.addEventListener('load', function () {

    duration_amount_cookie = getCookie('duration_amount_cookie');
    stake_amount_cookie = getCookie('stake_amount_cookie');
    duration_unit_cookie = getCookie('duration_unit_cookie');
    last_digit_prediction_or_barrier_cookie = getCookie('last_digit_prediction_or_barrier_cookie')
    symbol_vol_cookie = getCookie('symbol_vol_cookie');
    currency_cookie = getCookie('ActiveCurrency')
    contract_text_cookie = getCookie('contract_text_cookie');
    stake_or_payout_cookie = getCookie('stake_or_payout_cookie')


    last_digit_prediction_cookie = getCookie('last_digit_prediction_cookie')
    barrier_cookie = getCookie('barrier_cookie')

    last_digit_prediction_or_barrier_cookie = getCookie('last_digit_prediction_or_barrier_cookie');


    // Get the existing values of the cookies and local storage items
    var contract_text_cookie = getCookie('contract_text_cookie');


    if (symbol_vol_cookie) {
        symbol_vol = symbol_vol_cookie;
    } else {
        symbol_vol = "R_10";
    }

    if (duration_unit_cookie) {
        duration_unit = duration_unit_cookie;
    } else {
        duration_unit = "t";
    }


    if (duration_amount_cookie) {
        duration_amount = parseInt(duration_amount_cookie, 10);
    } else {
        duration_amount = 1;
    }


    if (stake_amount_cookie) {
        stake_amount = parseFloat(stake_amount_cookie);
    } else {
        stake_amount = 10;
    }

    if (trade_type_secound.textContent === 'Higher/Lower') {
        last_digit_prediction_or_barrier = document.getElementById('barrier_input').value
    } else if (trade_type_secound.textContent === 'Matches/Differs' || trade_type_secound.textContent === 'Over/under') {
        last_digit_prediction_or_barrier = document.getElementById('last_digit_input').value
    } else {
        if (last_digit_prediction_or_barrier && /^[+-]/.test(last_digit_prediction_or_barrier)) {
            let numericValue = parseFloat(last_digit_prediction_or_barrier);
            last_digit_prediction_or_barrier = last_digit_prediction_or_barrier_cookie ? (numericValue >= 0 ? '+' : '') + numericValue.toString() : '0';
        } else {
            last_digit_prediction_or_barrier = last_digit_prediction_or_barrier_cookie ? last_digit_prediction_or_barrier_cookie : '0';
        }

    }


    if (currency_cookie) {
        currency = currency_cookie;
    } else {
        currency = "USD";
    }


    if (contract_text_cookie) {
        contract = contract_text_cookie;
    } else {
        contract = "Matches/Differs";
    }

    if (stake_or_payout_cookie) {
        stake_or_payout = stake_or_payout_cookie;
    } else {
        stake_or_payout = "stake";
    }


    initializeApiInit(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response) {
            clearInterval(getAwaitingResponses)
        } else {
            console.log("no authorize response yet")
        }
    }, 2000);



    if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
        setTimeout(() => {
            order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
        }, 2000);
    } else {
        setTimeout(() => {
            order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
        }, 2000);
    }


    // Utility function to debounce an event handler
    function debounce(func, delay) {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }

    // Function to handle the input event for duration amount input
    function handleDurationAmountInputEvent(event) {
        const currentValue = event.target.value;

        // Proceed only if the input is not empty
        if (currentValue === '') {
            return;
        }

        // Check if the input is a number
        if (!isNaN(currentValue)) {
            duration_amount = parseInt(currentValue);

            initializeApiInit(message1)
            if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
                setTimeout(() => {
                    order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
                }, 2000);
            } else {
                setTimeout(() => {
                    order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
                }, 2000);
            }

        } else {

            initializeApiInit(message1)
            if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
                setTimeout(() => {
                    order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
                }, 2000);
            } else {
                setTimeout(() => {
                    order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
                }, 2000);
            }

        }
    }

    // Attach the debounced event listener to the input element
    document.getElementById('duration_amount_input').addEventListener('input', debounce(handleDurationAmountInputEvent, 300)); // 300ms delay



    // Utility function to debounce an event handler
    function debounce(func, delay) {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }

    // Function to handle the input event for stake amount input
    function handleStakeAmountInputEvent(event) {
        const currentValue = event.target.value;

        // Proceed only if the input is not empty
        if (currentValue === '') {
            return;
        }

        // Check if the input is a number and within the range of 0 to 50000
        if (!isNaN(currentValue) && currentValue >= 0 && currentValue <= 50000) {
            stake_amount = parseFloat(currentValue);
            initializeApiInit(message1)
            if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
                setTimeout(() => {
                    order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
                }, 2000);
            } else {
                setTimeout(() => {
                    order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
                }, 2000);
            }

        } else {

            initializeApiInit(message1)
            if (trade_type_secound.textContent !== 'Rise/Fall' || trade_type_secound.textContent !== 'Odd/Even') {
                order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

            } else {
                order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)
            }
        }
    }

    // Attach the debounced event listener to the input element
    document.getElementById('stake_amount_input').addEventListener('input', debounce(handleStakeAmountInputEvent, 300)); // 300ms delay



    // Utility function to debounce an event handler
    function debounce(func, delay) {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }

    // Function to handle the input event
    function handleInputEvent(event) {
        const currentValue = event.target.value;

        if (trade_type_secound.textContent === 'Rise/Fall') {
            return
        }

        // Proceed only if the input is not empty
        if (currentValue === '') {
            console.log('Input is empty. No action taken.');
            return;
        }

        // Check if the input is a number and within the range of 0 to 9
        if (!isNaN(currentValue) && currentValue >= 0 && currentValue <= 9) {
            last_digit_prediction_or_barrier = currentValue;

            initializeApiInit(message1)
            order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);

        } else {

            initializeApiInit(message1)
            order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
        }
    }

    // Attach the debounced event listener to the input element
    document.getElementById('last_digit_input').addEventListener('input', debounce(handleInputEvent, 300)); // 300ms delay


    // Utility function to debounce an event handler
    function debounce(func, delay) {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }

    // Function to handle the input event for barrier input
    function handleBarrierInputEvent(event) {
        var inputValue = event.target.value;


        if (trade_type_secound.textContent === 'Rise/Fall') {
            return
        }

        // Proceed only if the input is not empty
        if (inputValue === '') {
            return;
        }

        // Check if input starts with '+' or '-' and then parse the float
        if (!/^[+-]/.test(inputValue)) {

            initializeApiInit(message1)
            order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            return;
        }

        var currentValue = parseFloat(inputValue);

        if (isNaN(currentValue)) {

            initializeApiInit(message1)
            order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
        } else if ((currentValue === 0) || (currentValue === 0.001) || (currentValue === -0.001) || (currentValue > 0.001 && currentValue <= 4683) || (currentValue < -0.001 && currentValue >= -4683)) {
            // Ensure the value is formatted with a sign
            var formattedValue = (currentValue >= 0 ? '+' : '') + currentValue.toString();

            last_digit_prediction_or_barrier = formattedValue;

            initializeApiInit(message1)
            order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
        } else {

            initializeApiInit(message1)
            order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
        }

    }

    // Attach the debounced event listener to the input element
    document.getElementById('barrier_input').addEventListener('input', debounce(handleBarrierInputEvent, 300)); // 300ms delay


});







if (account_type_change_cont && current_balance) {
    current_balance.addEventListener('click', (event) => {
        event.stopPropagation();
        if (account_type.textContent == 'Demo') {
            let message1_set = 'Demo Account'

            message1 = message1_set

            setCookie("message1", message1_set)
            localStorage.setItem("message1", message1_set)

            apiAndAuthData = initializeApiInit(message1)


        } else if (account_type.textContent == 'US Dollar') {
            let message1_set = 'Real Account'

            message1 = message1_set

            setCookie("message1", message1_set)
            localStorage.setItem("message1", message1_set)

            apiAndAuthData = initializeApiInit(message1)

        }

        if (account_type_change_cont.style.display === 'block' && overlay3.style.display === 'block') {
            account_type_change_cont.style.display = 'none';
            overlay3.style.display = 'none';
        }
    });
} else {
    console.error('One or more elements are not found');
}
















const handleVolatilityClick = function () {

    unsubscribeTicks(); // Unsubscribe when volatility button is clicke
    let type = "Synthetics"


    // Logic for volatility buttons
    if (this.textContent == "Volatility 10 Index") {
        let symbol_vol_set = "R_10";
        symbol_vol = symbol_vol_set
        initializeApiInit(message1)

        if (trade_type_secound.textContent === 'Higher/Lower') {
            last_digit_prediction_or_barrier = document.getElementById('barrier_input').value
        } else if (trade_type_secound.textContent === 'Matches/Differs' || trade_type_secound.textContent === 'Over/Under') {
            last_digit_prediction_or_barrier = document.getElementById('last_digit_input').value
        } else {
            if (last_digit_prediction_or_barrier && /^[+-]/.test(last_digit_prediction_or_barrier)) {
                let numericValue = parseFloat(last_digit_prediction_or_barrier);
                last_digit_prediction_or_barrier = last_digit_prediction_or_barrier_cookie ? (numericValue >= 0 ? '+' : '') + numericValue.toString() : '0';
            } else {
                last_digit_prediction_or_barrier = last_digit_prediction_or_barrier_cookie ? last_digit_prediction_or_barrier_cookie : '0';
            }

        }
        if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
            setTimeout(() => {
                order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        }



    } else if (this.textContent == "Volatility 25 Index") {
        let symbol_vol_set = "R_25";
        symbol_vol = symbol_vol_set
        api.forget(subscriptionId)
        initializeApiInit(message1)

        if (trade_type_secound.textContent === 'Higher/Lower') {
            last_digit_prediction_or_barrier = document.getElementById('barrier_input').value
        } else if (trade_type_secound.textContent === 'Matches/Differs' || trade_type_secound.textContent === 'Over/Under') {
            last_digit_prediction_or_barrier = document.getElementById('last_digit_input').value
        } else {
            if (last_digit_prediction_or_barrier && /^[+-]/.test(last_digit_prediction_or_barrier)) {
                let numericValue = parseFloat(last_digit_prediction_or_barrier);
                last_digit_prediction_or_barrier = last_digit_prediction_or_barrier_cookie ? (numericValue >= 0 ? '+' : '') + numericValue.toString() : '0';
            } else {
                last_digit_prediction_or_barrier = last_digit_prediction_or_barrier_cookie ? last_digit_prediction_or_barrier_cookie : '0';
            }

        }
        if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
            setTimeout(() => {
                order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        }


    } else if (this.textContent == "Volatility 50 Index") {
        let symbol_vol_set = "R_50";
        symbol_vol = symbol_vol_set
        initializeApiInit(message1)

        if (trade_type_secound.textContent === 'Higher/Lower') {
            last_digit_prediction_or_barrier = document.getElementById('barrier_input').value
        } else if (trade_type_secound.textContent === 'Matches/Differs' || trade_type_secound.textContent === 'Over/Under') {
            last_digit_prediction_or_barrier = document.getElementById('last_digit_input').value
        } else {
            if (last_digit_prediction_or_barrier && /^[+-]/.test(last_digit_prediction_or_barrier)) {
                let numericValue = parseFloat(last_digit_prediction_or_barrier);
                last_digit_prediction_or_barrier = last_digit_prediction_or_barrier_cookie ? (numericValue >= 0 ? '+' : '') + numericValue.toString() : '0';
            } else {
                last_digit_prediction_or_barrier = last_digit_prediction_or_barrier_cookie ? last_digit_prediction_or_barrier_cookie : '0';
            }

        }
        if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
            setTimeout(() => {
                order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        }


    } else if (this.textContent == "Volatility 75 Index") {
        let symbol_vol_set = "R_75";
        symbol_vol = symbol_vol_set
        initializeApiInit(message1)

        if (trade_type_secound.textContent === 'Higher/Lower') {
            last_digit_prediction_or_barrier = document.getElementById('barrier_input').value
        } else if (trade_type_secound.textContent === 'Matches/Differs' || trade_type_secound.textContent === 'Over/Under') {
            last_digit_prediction_or_barrier = document.getElementById('last_digit_input').value
        } else {
            if (last_digit_prediction_or_barrier && /^[+-]/.test(last_digit_prediction_or_barrier)) {
                let numericValue = parseFloat(last_digit_prediction_or_barrier);
                last_digit_prediction_or_barrier = last_digit_prediction_or_barrier_cookie ? (numericValue >= 0 ? '+' : '') + numericValue.toString() : '0';
            } else {
                last_digit_prediction_or_barrier = last_digit_prediction_or_barrier_cookie ? last_digit_prediction_or_barrier_cookie : '0';
            }

        }
        if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
            setTimeout(() => {
                order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        }

    } else if (this.textContent == "Volatility 100 Index") {
        let symbol_vol_set = "R_100";
        symbol_vol = symbol_vol_set
        initializeApiInit(message1)

        if (trade_type_secound.textContent === 'Higher/Lower') {
            last_digit_prediction_or_barrier = document.getElementById('barrier_input').value
        } else if (trade_type_secound.textContent === 'Matches/Differs' || trade_type_secound.textContent === 'Over/Uder') {
            last_digit_prediction_or_barrier = document.getElementById('last_digit_input').value
        } else {
            if (last_digit_prediction_or_barrier && /^[+-]/.test(last_digit_prediction_or_barrier)) {
                let numericValue = parseFloat(last_digit_prediction_or_barrier);
                last_digit_prediction_or_barrier = last_digit_prediction_or_barrier_cookie ? (numericValue >= 0 ? '+' : '') + numericValue.toString() : '0';
            } else {
                last_digit_prediction_or_barrier = last_digit_prediction_or_barrier_cookie ? last_digit_prediction_or_barrier_cookie : '0';
            }

        }
        if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
            setTimeout(() => {
                order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        }


    } else {
        let symbol_vol_set = ''
        symbol_vol = symbol_vol_set
        initializeApiInit(message1)
    }


};

volatilities.forEach(function (volatility) {
    // Attach handleVolatilityClick function to click event listener of each volatility button
    volatility.addEventListener("click", handleVolatilityClick);

});







const handleTradeTypeClick = function () {

    // Logic for volatility buttons
    if (this.textContent == "Matches/Differs") {
        contract = this.textContent;
        last_digit_prediction_or_barrier = document.getElementById('last_digit_input').value
        initializeApiInit(message1)
        order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

    } else if (this.textContent == "Over/Under") {
        contract = this.textContent;
        last_digit_prediction_or_barrier = document.getElementById('last_digit_input').value
        initializeApiInit(message1)
        order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

    } else if (this.textContent == "Odd/Even") {
        contract = this.textContent;
        initializeApiInit(message1)
        order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

    } else if (this.textContent == "Rise/Fall") {
        contract = this.textContent;
        initializeApiInit(message1)
        order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

    } else if (this.textContent == "Higher/Lower") {
        contract = this.textContent;
        last_digit_prediction_or_barrier = document.getElementById('barrier_input').value
        initializeApiInit(message1)
        order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

    } else {

    }

};


tradeTypes.forEach(function (types) {
    types.addEventListener("click", handleTradeTypeClick);
});







function handleUnitTypeClick() {
    if (this.textContent == 'ticks') {
        duration_unit = 't'
        initializeApiInit(message1)
        if (trade_type_secound.textContent !== 'Rise/Fall') {
            order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        } else {
            order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)
        }

    } else if (this.textContent == 'secounds') {
        duration_unit = 's'
        initializeApiInit(message1)
        if (trade_type_secound.textContent !== 'Rise/Fall') {
            order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        } else {
            order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)
        }

    } else if (this.textContent == 'minutes') {
        duration_unit = 'm'
        initializeApiInit(message1)
        if (trade_type_secound.textContent !== 'Rise/Fall') {
            order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        } else {
            order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)
        }

    } else if (this.textContent == 'hours') {
        duration_unit = 'h'
        initializeApiInit(message1)
        if (trade_type_secound.textContent !== 'Rise/Fall') {
            order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        } else {
            order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)
        }

    } else if (this.textContent == 'days') {
        duration_unit = 'd'
        initializeApiInit(message1)
        if (trade_type_secound.textContent !== 'Rise/Fall') {
            order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        } else {
            order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)
        }

    }
}




allDurationUnit.forEach(function (unit) {
    unit.addEventListener('click', handleUnitTypeClick)
})













let proposal_open_contract = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})

const proposalOpenContractResponse = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        console.log('Error: %s ', data.error.message);
        connection.removeEventListener('message', proposalOpenContractResponse, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {
        console.log(data)
        save_data(data)
        open_proposal_actions(data)
    }
};

const getProposalOpenContract = async () => {
    connection.addEventListener('message', proposalOpenContractResponse);
    proposal_open_contract()
};

const getProposalOpenContract2 = async () => {
    connection.addEventListener('message', proposalOpenContractResponse);
};

const unsubscribeProposalOpenContract = () => {
    connection.removeEventListener('message', proposalOpenContractResponse, false);
};





function run_open_contract_proposal() {

    if (subscription_to_open_contract == true) {
        getProposalOpenContract()
    } else {
        getProposalOpenContract2()
    }

    subscription_to_open_contract = false
}







// let proposalOpenContract = (contract_id) => proposalOpenContract({
//     "proposal_open_contract": 1,
//     "contract_id": contract_id,
//     "subscribe": 1
// })


// const getProposalOpenContract = async (contract_id) => {
//     connection.addEventListener('message', proposalOpenContractResponse);
//     await api.proposalOpenContract({
//         "proposal_open_contract": 1,
//         "contract_id": contract_id,
//         "subscribe": 1
//     })
// };


// const proposalOpenContractResponse = async (res) => {
//     const data = JSON.parse(res.data);
//     if (data.error !== undefined) {
//         console.log('Error: %s ', data.error.message);
//         connection.removeEventListener('message', proposalOpenContractResponse, false);
//         await api.disconnect();

//     } else if (data.msg_type === 'proposal_open_contract') {
//         console.log(data)
//         save_data(data)
//         open_proposal_actions(data)
//     }
// };

// const unsubscribeProposalOpenContract = () => {
//     connection.removeEventListener('message', proposalOpenContractResponse, false);
// };






















function convertTimestampTo12HourTime(timestamp) {
    // Convert the timestamp to a Date object
    const date = new Date(timestamp * 1000);

    // Extract hours, minutes, and seconds
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour time to 12-hour time
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Format minutes and seconds to be two digits
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Combine into a formatted time string
    const formattedTime = `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;


    return formattedTime;
}





function formatNumberAndBoldLastDecimal(number) {
    // Split the number into integer and decimal parts
    let [integerPart, decimalPart] = number.toString().split('.');

    // Format the integer part with commas
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Make the last digit of the decimal part bold with a class
    if (decimalPart) {
        let lastDecimalDigit = decimalPart.slice(-1);
        decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
    }

    // Combine the integer and decimal parts
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}





let contract_status_html = document.getElementById('contract_status')
let end_tic_off_trade = document.getElementById('end_tic_off_trade')
let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount')
let profit_figure_amount = document.getElementById('profit_figure_amount')
let buy_price_figure_amount = document.getElementById('buy_price_figure_amount')
let result_currency_html = document.querySelectorAll('.result_currency')
let transaction_refrence_figure = document.getElementById('transaction_refrence_figure')
let trade_start_time = document.getElementById('trade_start_time')
let buy_price_text = document.getElementById('buy_price_text')
let price_after_trade_text = document.getElementById('price_after_trade_text')
let profit_text = document.getElementById('profit_text')







let countdown_trade = 0

function before_trade() {
    countdown_trade = 0
    let allDigits = document.querySelectorAll('.ldgs')
    let buy_price_text = document.getElementById('buy_price_text')
    let price_after_trade_text = document.getElementById('price_after_trade_text')
    let profit_text = document.getElementById('profit_text')
    let durr_amount_prop_count = document.getElementById('durr_amount_prop_count')
    let slide_trade_result = document.getElementById('slide_trade_result')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount')
    let profit_figure_amount = document.getElementById('profit_figure_amount')
    contract_status_html.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count.textContent = countdown_trade
    durr_amount_prop.textContent = duration_amount
    buy_price_figure_amount.textContent = def_price_up
    price_after_trade_figure_amount.textContent = def_payout_up
    profit_figure_amount.textContent = def_profit_up


    if (trade_type_secound.textContent === 'Matches/Differs' || trade_type_secound.textContent === 'Over/Under' || trade_type_secound.textContent === 'Odd/Even') {
        allDigits.forEach(function (digit) {
            if (digit.classList.contains('win_loose_color')) {
                digit.classList.remove('win_loose_color'); // Removed the dot (.)
            }

            if (digit.classList.contains('loose_digit-color')) {
                digit.classList.remove('loose_digit-color') // Removed the dot (.)
            }

            if (slide_trade_result.classList.contains('win_color')) {
                slide_trade_result.classList.remove('win_color')
            }

            if (slide_trade_result.classList.contains('lose_color')) {
                slide_trade_result.classList.remove('lose_color')
            }
        });
    }



    if (trade_type_secound.textContent === 'Matches/Differs') {
        allDigits.forEach(function (digit) {
            if (digit.textContent === last_digit_prediction_or_barrier) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound.textContent === 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound.textContent === 'Odd/Even') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) % 2 !== 0) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}


function after_trade(status, endDigit, is_expired, profit_proposal, profit_trade) {
    let slide_trade_result = document.getElementById('slide_trade_result')
    let allDigits = document.querySelectorAll('.ldgs')
    if (trade_type_secound.textContent === 'Matches/Differs' || trade_type_secound.textContent === 'Over/Under' || trade_type_secound.textContent === 'Odd/Even') {
        if (status === 'won') {
            slide_trade_result.classList.add('win_color')
        } else if (status === 'lost') {
            slide_trade_result.classList.add('lose_color')
            allDigits.forEach(function (digit) {
                if (endDigit === digit.textContent) {
                    digit.classList.add('loose_digit-color')
                } else {
                    digit.classList.remove('loose_digit-color')
                }
            })
        }
    }
}








let allProposalOpenContract = []
let longcodeProp = null
let contract_ids_buy = null
let contract_status = null
let last_tick = null
let profit_or_loss = null
let final_price = null
let payout_result = null
let buy_price = null
let contract_currency = null
let time_of_trade = null
let every_tick = null
let contract_id = null


function save_data(data) {
    if (data.proposal_open_contract.contract_id == contract_id) {
        if (data.proposal_open_contract.longcode) {
            setCookie('open_proposal_longcodeProp', data.proposal_open_contract.longcode)
            localStorage.setItem('open_proposal_longcodeProp', data.proposal_open_contract.longcode)
        }

        if (data.proposal_open_contract.tick_stream) {
            let tick_value_array = []
            tick_value_array.push(data.proposal_open_contract.tick_stream)
            if (tick_value_array.length > 0 && tick_value_array[tick_value_array.length - 1].length > 0) {
                let lastSubArray = tick_value_array[tick_value_array.length - 1];
                let tick_stream_value = lastSubArray[lastSubArray.length - 1].tick_display_value;
                setCookie('open_proposal_tick_stream', tick_stream_value)
                localStorage.setItem('open_proposal_tick_stream', tick_stream_value)
            }
        }

        if (data.proposal_open_contract.contract_type) {
            setCookie('open_proposal_contract_type', data.proposal_open_contract.contract_type)
            localStorage.setItem('open_proposal_contract_type', data.proposal_open_contract.contract_type)
        }

        if (data.proposal_open_contract.currency) {
            setCookie('open_proposal_currency', data.proposal_open_contract.currency)
            localStorage.setItem('open_proposal_currency', data.proposal_open_contract.currency)
        }

        if (data.proposal_open_contract.entry_tick) {
            setCookie('open_proposal_entry_tick', data.proposal_open_contract.entry_tick)
            localStorage.setItem('open_proposal_entry_tick', data.proposal_open_contract.entry_tick)
        }

        if (data.proposal_open_contract.exit_tick) {
            setCookie('open_proposal_exit_tick', data.proposal_open_contract.exit_tick)
            localStorage.setItem('open_proposal_exit_tick', data.proposal_open_contract.exit_tick)
        }

        if (data.proposal_open_contract.id) {
            setCookie('open_proposal_id', data.proposal_open_contract.id)
            localStorage.setItem('open_proposal_id', data.proposal_open_contract.id)
        }

        if (data.proposal_open_contract.is_expired) {
            setCookie('open_proposal_is_expired', data.proposal_open_contract.is_expired)
            localStorage.setItem('open_proposal_is_expired', data.proposal_open_contract.is_expired)
        }

        if (data.proposal_open_contract.profit) {
            setCookie('open_proposal_profit', data.proposal_open_contract.profit)
            localStorage.setItem('open_proposal_profit', data.proposal_open_contract.profit)
        }

        if (data.proposal_open_contract.payout) {
            setCookie('open_proposal_payout', data.proposal_open_contract.payout)
            localStorage.setItem('open_proposal_payout', data.proposal_open_contract.payout)
        }

        if (data.proposal_open_contract.buy_price) {
            setCookie('open_proposal_buy_price', data.proposal_open_contract.buy_price)
            localStorage.setItem('open_proposal_buy_price', data.proposal_open_contract.buy_price)
        }

        if (data.proposal_open_contract.status) {
            setCookie('open_proposal_status', data.proposal_open_contract.status)
            localStorage.setItem('open_proposal_status', data.proposal_open_contract.status)
        }

        if (data.proposal_open_contract.entry_tick_time) {
            setCookie('open_proposal_entry_tick_time', data.proposal_open_contract.entry_tick_time)
            localStorage.setItem('open_proposal_entry_tick_time', data.proposal_open_contract.entry_tick_time)
        }

        if (data.proposal_open_contract.exit_tick_time) {
            setCookie('open_proposal_exit_tick_time', data.proposal_open_contract.exit_tick_time)
            localStorage.setItem('open_proposal_exit_tick_time', data.proposal_open_contract.exit_tick_time)
        }
    }
}




function open_proposal_actions(data) {
    if (data.proposal_open_contract.contract_id == contract_id) {
        longcodeProp = data.proposal_open_contract.longcode
        allProposalOpenContract.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information').textContent = longcodeProp


        console.log(allProposalOpenContract)
        if (allProposalOpenContract.length > 0 && allProposalOpenContract[allProposalOpenContract.length - 1].length > 0) {
            let lastSubArray = allProposalOpenContract[allProposalOpenContract.length - 1];
            let lastElementOfLastSubArray = lastSubArray[lastSubArray.length - 1].tick_display_value;
            console.log(lastElementOfLastSubArray);
            let numberString = lastElementOfLastSubArray.toString();
            let lastCharacter = numberString[numberString.length - 1];
            console.log(lastCharacter)
            handleNewNumber(lastCharacter);
            every_tick = lastElementOfLastSubArray
            end_tic_off_trade.innerHTML = formatNumberAndBoldLastDecimal(every_tick);
            if (countdown_trade < duration_amount) {
                countdown_trade += 1
                durr_amount_prop_count.textContent = countdown_trade
            }

            if (data.proposal_open_contract.status !== 'open') {
                contract_status = data.proposal_open_contract.status
                last_tick = lastElementOfLastSubArray
                profit_or_loss = data.proposal_open_contract.profit
                payout_result = data.proposal_open_contract.payout
                buy_price = data.proposal_open_contract.buy_price
                contract_currency = data.proposal_open_contract.currency
                contract_ids_buy = data.proposal_open_contract.transaction_ids.buy
                time_of_trade = data.proposal_open_contract.expiry_time
                if (profit_or_loss < 0) {
                    final_price = '0.00'
                } else if (profit_or_loss > 0) {
                    final_price = payout_result
                } else {
                    console.log("The number is zero.");
                }
                contract_status_html.textContent = contract_status
                end_tic_off_trade.innerHTML = formatNumberAndBoldLastDecimal(last_tick);
                profit_figure_amount.textContent = profit_or_loss
                price_after_trade_figure_amount.textContent = final_price
                buy_price_figure_amount.textContent = buy_price
                result_currency_html.textContent = contract_currency
                transaction_refrence_figure.textContent = contract_ids_buy
                trade_start_time.innerHTML = convertTimestampTo12HourTime(time_of_trade)
                buy_price_text.textContent = 'Buy price'
                price_after_trade_text.textContent = 'Final price'
                profit_text.textContent = 'Profit'
                after_trade(contract_status, lastCharacter)
            } else {

            }
        } else {
            console.log('no valid tick yet')
        }
    }

}




down_purchase_btn.addEventListener('click', async function () {
    const slider = document.getElementById('slide_trade_result').style.display = 'flex'

    before_trade()
    allProposalOpenContract.length = 0
    unsubscribeProposalOpenContract()


    if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
        order_propose4(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
    } else {
        order_propose2(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
    }

    console.log(last_digit_prediction_or_barrier)
    console.log(proposal_id)

    let buy = await api.buy({
        "buy": String(proposal_id),
        "price": parseFloat(stake_amount)
    });

    contract_id = buy.buy.contract_id;
    console.log(contract_id)

    run_open_contract_proposal()

});




document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('down_purchase_btn');

    function addClickedClass() {
        button.classList.add('clicked');
    }

    function removeClickedClass() {
        setTimeout(function () {
            button.classList.remove('clicked');
        }, 200); // Adjust the timeout as needed
    }

    button.addEventListener('mousedown', addClickedClass);
    button.addEventListener('mouseup', removeClickedClass);

    button.addEventListener('touchstart', addClickedClass);
    button.addEventListener('touchend', removeClickedClass);
});



document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.zero_d, .one_d, .two_d, .three_d, .four_d, .five_d, .six_d, .seven_d, .eight_d, .nine_d');

    elements.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.add('active');
            setTimeout(() => {
                element.classList.remove('active');
            }, 200);  // Adjust the duration (in milliseconds) as needed
        });
    });
});





let currentPosition1 = 0;

function moveSlider(number) {
    const slider = document.getElementById('slide_trade_result');
    const container = document.getElementById('last_digit_responds');

    let stringnumber = null;
    if (number == 0) {
        stringnumber = 'zero';
    }
    if (number == 1) {
        stringnumber = 'one';
    }
    if (number == 2) {
        stringnumber = 'two';
    }
    if (number == 3) {
        stringnumber = 'three';
    }
    if (number == 4) {
        stringnumber = 'four';
    }
    if (number == 5) {
        stringnumber = 'five';
    }
    if (number == 6) {
        stringnumber = 'six';
    }
    if (number == 7) {
        stringnumber = 'seven';
    }
    if (number == 8) {
        stringnumber = 'eight';
    }
    if (number == 9) {
        stringnumber = 'nine';
    }

    const target = document.querySelector(`.last_digits.${stringnumber}`);

    if (target) {
        const targetPosition = target.offsetLeft;
        const currentSliderPosition = slider.offsetLeft;

        const direction = targetPosition > currentSliderPosition ? 'left' : 'right';

        // Ensure the target position does not move the slider out of the container
        const maxTranslateX = container.offsetWidth - slider.offsetWidth;
        const newPosition = Math.min(Math.max(targetPosition, 0), maxTranslateX);

        if (direction === 'left') {
            slider.style.transform = `translateX(${newPosition}px)`;
        } else {
            slider.style.transform = `translateX(${newPosition}px)`;
        }

        currentPosition1 = newPosition;
    }
}

function handleNewNumber(randomNumber) {
    const newPosition = randomNumber;
    moveSlider(newPosition);
}
