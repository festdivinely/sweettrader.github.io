import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';


// const app_id_demo = sessionStorage.getItem('app_id_demo');
// const token_demo = sessionStorage.getItem('token_demo');
// const app_id_real = sessionStorage.getItem('app_id_real');
// const token_real = sessionStorage.getItem('token_real');


const app_id_demo = 53334;
const token_demo = "4FB1rDGbXX6zbKs";
const app_id_real = 53335;
const token_real = "Jv4SnlKSnzwkymM";






let logi_id = document.getElementById('curr2')
let account_type = document.getElementById('curr')
let account_type_top = document.getElementById('account_type')
let drop_down_light_cont = document.getElementById('drop_down_light_cont');
let dropDownLight = document.getElementById('DD_3');
let dropUpLight = document.getElementById('DD_4');
let current_balance = document.getElementById('current_balance_cont');
let current_balance_fig_cont = document.getElementById('current_balance_fig_cont');
let current_balance_fig = document.getElementById('current_balance_fig');
let balance_amount = document.getElementById('balance_amount')
let account_balance_fig_cont = document.getElementById('account_balance_fig_cont')
let tick_stream = document.getElementById('tick_stream')
let first_drop_cont = document.getElementById('first_drop_cont');
let first_dropdown_icon = document.getElementById('first_dropdown_icon');
let account_balance_drop_cont = document.getElementById('account_balance_drop_cont');
let secound_dropdown_icon = document.getElementById('secound_dropdown_icon');
let account_type_change_cont = document.getElementById('curr_acc');
let real_demo = document.getElementById('real_demo');
let real = document.getElementById('real');
let demo = document.getElementById('demo');
let reset = document.getElementById('reset');
let overlay = document.getElementById('overlay');
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
let trade_symbol_first = document.getElementById('trade_symbol_first')
let trade_type_first = document.getElementById('trade_type_first')
let up_purchase_btn = document.getElementById('up_purchase_btn')

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

let fiftth_dropdown_icon = document.getElementById('fiftth_dropdown_icon')
let sixth_dropdown_icon = document.getElementById('sixth_dropdown_icon')
let seventh_dropdown_icon = document.getElementById('seventh_dropdown_icon')
let eight_dropdown_icon = document.getElementById('eight_dropdown_icon')
let ninth_dropdown = document.getElementById('eight_dropdown_icon')

let start_time_drop_list = document.getElementById('start_time_drop_list')
let duration_drop_list = document.getElementById('duration_drop_list')
let duration_unit_list = document.getElementById('duration_unit_list')
let stake_list = document.getElementById('stake_list')

let start_time_cont = document.getElementById('start_time_cont')
let duration_stake_text_drop_cont = document.getElementById('duration_stake_text_drop_cont')
let stake_Minutes_cont = document.getElementById('stake_Minutes_cont')
let stake_drop_cont = document.getElementById('stake_drop_cont')

let usd_text_input_cont = document.getElementById('usd_text_input_cont')
let currency_for_order = document.getElementById('currency_for_order')

let duration_amount_input = document.getElementById('duration_amount_input')
let stake_amount_input = document.getElementById('stake_amount_input')

let last_digit_prediction_display_cont = document.getElementById('last_digit_prediction_display_cont')
let not_support = document.getElementById('not_support')

let barrier_offset_display_cont = document.getElementById('barrier_offset_display_cont')

let allDurationUnit = document.querySelectorAll('.duru')

let balance_currency = document.getElementById("balance_currency")


let stake_info1 = document.getElementById("stake_info1")
let payout_info1 = document.getElementById("payout_info1")


let barrier_result = document.getElementById("barrier_result")

let close_contract_result_container = document.getElementById("close_contract_result_container")

let balance_after_trade_end = document.getElementById('balance_after_trade_end')

let brand = document.getElementById('brand')

let bot1 = document.getElementById('bot1')
let bot2 = document.getElementById('bot2')
let bot3 = document.getElementById('bot3')
let bot4 = document.getElementById('bot4')
let bot5 = document.getElementById('bot5')


let bot_show_cont = document.getElementById('bot_show_cont')
let close_summary = document.getElementById('close_summary')

let overlay3 = document.getElementById('overlay3')

let td2_balance = document.getElementById('td2_balance')











var api = null

var connection = null

var apiAndAuthData = null




let last_digit_prediction_local_st = null

let barrier_local_st = null



let symbol_vol_text_local_st = null

let contract_text_local_st = null

let duration_amount_local_st = null

let stake_amount_local_st = null

let symbol_vol_local_st = null

let duration_unit_local_st = null

let last_digit_prediction_or_barrier_local_st = null

let currency_local_st = null

let stake_or_payout_local_st = null

let proposal_id_local_st = null





let last_digit_prediction_cookie = null

let barrier_cookie = null



let symbol_vol_text_cookie = null

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

let bot_current_vol1 = null
let bot_current_vol12 = null
let martingale_set = false

let bot_set = null
let bot_jump = null



let message1 = localStorage.getItem('message1')


let randomNumber = null;


let strNumber = null;


let authorize_response = null


let subscriptionId = null



let randomNumber2 = null




let buy_contract_id = null


let api_id = null;
let api_token = null;




let def_price_up = null
let def_payout_up = null
let def_profit_up = null


let website_status_info = 'initial'



let subscription_to_open_contract = true





console.log('message1', message1)


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
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to delete a cookie
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
    let up_order_btn_down = document.getElementById('up_order_btn_down')
    const result1 = calculateNetProfitAndReturn1(stake1, payout1);
    up_order_btn_down.innerHTML = `Net Profit: ${result1.netProfit} USD | Return: ${result1.returnPercentage}%`
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
        // Safely access the error message
        setCookie('proposal_error1', data.error.message, 7)
        localStorage.setItem('proposal_error1', data.error.message)

        let proposal_id = getCookie('proposal_id1')
        if (proposal_id) {
            deleteCookie('proposal_id1')
        }

        let proposal_id_lc = localStorage.getItem('proposal_id1')
        if (proposal_id_lc) {
            localStorage.removeItem('proposal_id1')
        }

        proposal_id = null

        const errorMessage = data.error.message;
        console.log('Error: %s ', errorMessage);
        document.getElementById('up_order_btn_down').textContent = errorMessage;
        document.getElementById('up_proposal_info_cont').textContent = errorMessage;
        connection.removeEventListener('message', proposalResponse, false);
        await api.disconnect();
    } else if (data.msg_type === 'proposal') {
        // Check if there's no error or the error message is null or empty
        if (!data.error || !data.error.message) {

            let proposal_error = getCookie('proposal_error1')
            if (proposal_error) {
                deleteCookie('proposal_error1')
            }

            let proposal_error_lc = localStorage.getItem('proposal_error1')
            if (proposal_error_lc) {
                localStorage.removeItem('proposal_error1')
            }

            setCookie('proposal_id1', data.proposal.id, 7)
            localStorage.setItem('proposal_id1', data.proposal.id)
            proposal_id = data.proposal.id

            displayProposalResult1(data, data.proposal.display_value, data.proposal.payout);
            let calc = displayProposalResult2(data, data.proposal.display_value, data.proposal.payout)
            // Display proposal details inside the up_proposal_info_cont
            const infoContainer = document.getElementById('up_proposal_info_cont');
            infoContainer.innerHTML = `
            <p>${calc.netProPerc}</p>
            <p>Details: ${data.proposal.longcode}</p>
            <p>Ask Price: ${data.proposal.display_value}</p>
            <p>Payout: ${data.proposal.payout}</p>
            <p>Spot: ${data.proposal.spot}</p>
            <p>ID: ${data.proposal.id}</p>
            <p>website status: ${website_status_info}</P>
        `;

            stake_info1.textContent = data.proposal.display_value
            payout_info1.textContent = data.proposal.payout

            def_price_up = data.proposal.display_value
            def_payout_up = data.proposal.payout
            def_profit_up = calc.NetProfit
        } else {
            // If there's an error message, display it
            document.getElementById('up_order_btn_down').textContent = data.error.message;
        }
    }
}






async function order_propose1(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {

    let contract_type_set = null

    if (contract_type === 'Matches/Differs') {
        contract_type_set = 'DIGITDIFF'
    }

    if (contract_type === 'Over/Under') {
        contract_type_set = 'DIGITOVER'
    }

    if (contract_type === 'Odd/Even') {
        contract_type_set = 'DIGITEVEN'
    }

    if (contract_type === 'Rise/Fall') {
        contract_type_set = 'CALL'
    }

    if (contract_type === 'Higher/Lower') {
        contract_type_set = 'CALL'
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









async function order_propose3(api, amount, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {

    let contract_type_set = null

    if (contract_type === 'Matches/Differs') {
        contract_type_set = 'DIGITDIFF'
    }

    if (contract_type === 'Over/Under') {
        contract_type_set = 'DIGITOVER'
    }

    if (contract_type === 'Odd/Even') {
        contract_type_set = 'DIGITEVEN'
    }

    if (contract_type === 'Rise/Fall') {
        contract_type_set = 'CALL'
    }

    if (contract_type === 'Higher/Lower') {
        contract_type_set = 'CALL'
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








let balance_default = () => api.balance({ "balance": 1, "subscribe": 1 });

const balanceResponse = async (res) => {
    const data = JSON.parse(res.data);

    if (data.error !== undefined) {
        console.log('Error : ', data.error?.message);
        connection.removeEventListener('message', balanceResponse, false);
        await api.disconnect();
    }

    if (data.msg_type === 'balance') {
        balance_amount.textContent = data.balance.balance;
        balance_after_trade_end.textContent = data.balance.balance
        td2_balance.textContent = data.balance.balance
    }
};


const getbalance = async () => {
    connection.addEventListener('message', balanceResponse);
    await balance_default();
};





function getRandom(strNumber) {
    return randomNumber = strNumber.charAt(strNumber.length - 1);
}


const tickStream = () => api.subscribe({ "ticks": symbol_vol == null ? 'R_10' : symbol_vol });

const tickResponse = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        console.log('Error : ', data.error.message);
        connection.removeEventListener('message', tickResponse, false);
        await api.disconnect();
        tick_stream.textContent = 'Not supported';
        return;
    }

    if (data.msg_type === 'tick') {
        subscriptionId = data.subscription.id;
        let tickStreamQuote = data.tick.quote;

        function formatToFourDecimalPlaces(tickStreamQuote) {
            let numStr = tickStreamQuote.toString();
            let parts = numStr.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (parts.length > 1) {
                parts[1] = parts[1].padEnd(4, '0');
            } else {
                parts.push('0000');
            }
            return parts.join('.');
        }

        function formatToThreeDecimalPlaces(tickStreamQuote) {
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

        function formatToTwoDecimalPlaces(tickStreamQuote) {
            let numStr = tickStreamQuote.toString();
            let parts = numStr.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (parts.length > 1) {
                parts[1] = parts[1].padEnd(2, '0');
            } else {
                parts.push('00');
            }
            return parts.join('.');
        }

        function removeCommas(numStr) {
            return numStr.replace(/,/g, '');
        }

        if (data.echo_req.ticks === "R_50" || data.echo_req.ticks === "R_75") {
            strNumber = formatToFourDecimalPlaces(tickStreamQuote);
        } else if (data.echo_req.ticks === "R_100") {
            strNumber = formatToTwoDecimalPlaces(tickStreamQuote);
        } else {
            strNumber = formatToThreeDecimalPlaces(tickStreamQuote);
        }

        tick_stream.textContent = strNumber;

        function processValue(strNumber) {
            let barrier_result_cookie = getCookie('barrier_cookie');

            let numberWithoutCommas = parseFloat(removeCommas(strNumber));

            // Check if the value starts with '+' or '-'
            if (barrier_result_cookie.startsWith('+')) {
                const valueToAdd = parseFloat(barrier_result_cookie.substring(1));
                const result = numberWithoutCommas + valueToAdd;
                barrier_result.textContent = result.toFixed(3); // Assuming you want to keep three decimal places
            } else if (barrier_result_cookie.startsWith('-')) {
                const valueToSubtract = parseFloat(barrier_result_cookie.substring(1));
                const result = numberWithoutCommas - valueToSubtract;
                barrier_result.textContent = result.toFixed(3); // Assuming you want to keep three decimal places
            } else {
                console.log('Input value must start with a "+" or "-"');
            }
        }

        processValue(strNumber);
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

            if (authorize_response.authorize.loginid.startsWith("CR")) {


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

        subscribeTicks()
        getbalance()
        getWebsiteStatus()
        getWebsitePing()

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





// Function to check and set input values from cookies
function loadValuesFromCookies() {
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


    let contract_type_text_cookie = getCookie('contract_type_text_cookie');
    let symbol_vol_text_cookie = getCookie('symbol_vol_text_cookie');
    let type_vol_text_cookie = getCookie('type_vol_text_cookie');


    shownSvg(contract_text_cookie)

    if (duration_amount_cookie) {
        document.getElementById('duration_amount_input').value = duration_amount_cookie;
    } else {
        document.getElementById('duration_amount_input').value = 1;
    }

    if (stake_amount_cookie) {
        document.getElementById('stake_amount_input').value = stake_amount_cookie;
    } else {
        document.getElementById('stake_amount_input').value = 10;
    }

    if (last_digit_prediction_cookie) {
        document.getElementById('last_digit_input').value = last_digit_prediction_cookie;
    } else {
        document.getElementById('last_digit_input').value = 0;
    }

    if (barrier_cookie) {
        document.getElementById('barrier_input').value = barrier_cookie
    } else {
        document.getElementById('barrier_input').value = "+0.363"
        setCookie('barrier_cookie', document.getElementById('barrier_input').value, 7)
        localStorage.setItem('barrier_cookie', document.getElementById('barrier_input').value, 7)
    }

    if (contract_text_cookie) {
        trade_type_secound.textContent = contract_text_cookie
    } else {
        trade_type_secound.textContent = 'Matches/Differs'
    }

    if (contract_type_text_cookie) {
        trade_type_first.textContent = contract_type_text_cookie
    } else {
        trade_type_first.textContent = 'Digits'
    }

    if (symbol_vol_text_cookie) {
        trade_symbol_secound.textContent = symbol_vol_text_cookie
    } else {
        trade_symbol_secound.textContent = 'Volatility 10 Index'
    }

    if (type_vol_text_cookie) {
        trade_symbol_first.textContent = type_vol_text_cookie
    } else {
        trade_symbol_first.textContent = 'Synthetics'
    }

    if (currency_cookie) {
        balance_currency.textContent = currency_cookie
    } else {
        balance_currency.textContent = 'USD'
    }


}


window.addEventListener('load', function () {

    let buy_sell_one_display_cookie = getCookie('buy_sell_one_display_cookie');
    let buy_sell_two_display_cookie = getCookie('buy_sell_two_display_cookie');
    let buy_sell_three_display_cookie = getCookie('buy_sell_three_display_cookie');
    let buy_sell_four_display_cookie = getCookie('buy_sell_four_display_cookie');
    let buy_sell_five_display_cookie = getCookie('buy_sell_five_display_cookie');

    loadValuesFromCookies();


    let contract_text_cookie = getCookie('contract_text_cookie');
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

    stake_amount_default = getCookie('stake_amount_default')
    martingale_set = localStorage.getItem('martingale') 
    bot_set = localStorage.getItem('bot_set')
    bot_jump = localStorage.getItem('bot_jump')

    // Get the existing values of the cookies and local storage items

    let symbol_vol_text_cookie = getCookie('symbol_vol_text_cookie');
    let contract_text_local_st = localStorage.getItem('contract_text_local_st');
    let symbol_vol_text_local_st = localStorage.getItem('symbol_vol_text_local_st');
    bot_current_vol1 = localStorage.getItem('bot_current_vol1')
    bot_current_vol12 = localStorage.getItem('bot_current_vol2')


    // Set the cookies and local storage items if they don't already exist
    if (!contract_text_cookie) {
        setCookie('contract_text_cookie', "Matches/Differs", 7);
    }
    if (!symbol_vol_text_cookie) {
        setCookie('symbol_vol_text_cookie', "Volatility 10 Index", 7);
    }
    if (!contract_text_local_st) {
        localStorage.setItem('contract_text_local_st', "Matches/Differs");
    }
    if (!symbol_vol_text_local_st) {
        localStorage.setItem('symbol_vol_text_local_st', "Volatility 10 Index");
    }
    if (!stake_amount_default) {
        localStorage.setItem('stake_amount_default', document.getElementById('stake_amount_input').value);
    }
    if (!stake_amount_default) {
        setCookie('stake_amount_default', document.getElementById('stake_amount_input').value);
    }

    if (!bot_current_vol1) {
        localStorage.setItem('bot_current_vol1', 0)
        setCookie('bot_current_vol1', 0)
    }

    if (!bot_current_vol12) {
        localStorage.setItem('bot_current_vol2', 0)
        setCookie('bot_current_vol2', 0)
    }

    if (!martingale_set) {
        setCookie('martingale', 'false')
        localStorage.setItem('martingale', 'false')
    }

    if (!bot_set) {
        setCookie('bot_set', '2')
        localStorage.setItem('bot_set', '2')
    }

    if (!bot_jump) {
        setCookie('bot_jump', 0)
        localStorage.setItem('bot_jump', 0)
    }


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


    initializeApi(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response) {
            clearInterval(getAwaitingResponses)
        } else {
            console.log("no authorize response yet")
        }
    }, 2000);



    if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
        setTimeout(() => {
            order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
        }, 2000);
    } else {
        setTimeout(() => {
            order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
        }, 2000);
    }



    let clicked1 = getCookie('clicked1')
    let clicked2 = getCookie('clicked2')

    if (clicked1 == null && clicked2 == null) {
        setCookie('show_last_digit_prediction_cookie1', true)
        setCookie('show_last_digit_prediction_cookie2', true)
        localStorage.setItem('show_last_digit_prediction_local_st1', true)
        localStorage.setItem('show_last_digit_prediction_local_st2', true)
    }

    showHide();

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
        localStorage.setItem("buy_sell_one_display_local_st", true)
        localStorage.setItem("buy_sell_five_display_local_st", true)
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

    let real_account_selected_for_trade = getCookie('real_account_selected_for_trade')
    let demo_account_selected_for_trade = getCookie('demo_account_selected_for_trade');


    if (real_account_selected_for_trade === "true") {
        realClickHandler.call(real); // Ensure 'this' inside realClickHandler refers to 'real'
    } else if (demo_account_selected_for_trade === "true") {
        demoClickHandler.call(demo); // Ensure 'this' inside demoClickHandler refers to 'demo'
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
            console.log('Input is empty. No action taken.');
            return;
        }

        // Check if the input is a number
        if (!isNaN(currentValue)) {
            duration_amount = parseInt(currentValue);
            // Save the number to local storage
            setCookie('duration_amount_cookie', currentValue, 7);
            localStorage.setItem('duration_amount_local_st', currentValue);
            console.log('Number saved to local storage:', currentValue);
            initializeApi(message1)
            if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
                setTimeout(() => {
                    order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
                }, 2000);
            } else {
                setTimeout(() => {
                    order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
                }, 2000);
            }

            location.reload();

        } else {
            // Clear the local storage if the input is not valid
            deleteCookie('duration_amount_cookie');
            localStorage.removeItem('duration_amount_local_st');
            console.log('Invalid input. Number removed from local storage.');
            initializeApi(message1)
            if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
                setTimeout(() => {
                    order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
                }, 2000);
            } else {
                setTimeout(() => {
                    order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
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
            console.log('Input is empty. No action taken.');
            return;
        }

        // Check if the input is a number and within the range of 0 to 50000
        if (!isNaN(currentValue) && currentValue >= 0 && currentValue <= 50000) {
            stake_amount = parseFloat(currentValue);
            // Save the number to local storage
            setCookie('stake_amount_cookie', currentValue, 7);
            localStorage.setItem('stake_amount_local_st', currentValue);
            console.log('Number saved to local storage:', currentValue);
            initializeApi(message1)
            if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
                setTimeout(() => {
                    order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
                }, 2000);
            } else {
                setTimeout(() => {
                    order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
                }, 2000);
            }

            location.reload();

        } else {
            // Clear the local storage if the input is not valid
            deleteCookie('stake_amount_cookie');
            localStorage.removeItem('stake_amount_local_st');
            console.log('Invalid input. Number removed from local storage.');
            initializeApi(message1)
            if (trade_type_secound.textContent !== 'Rise/Fall' || trade_type_secound.textContent !== 'Odd/Even') {
                order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

            } else {
                order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)
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
            // Save the number to local storage
            setCookie('last_digit_prediction_or_barrier_cookie', currentValue, 7); // Store for 7 days
            localStorage.setItem('last_digit_prediction_or_barrier_local_st', currentValue); // Store for 7 days

            setCookie('last_digit_prediction_cookie', currentValue, 7); // Store for 7 days
            localStorage.setItem('last_digit_prediction_local_st', currentValue);

            console.log('Number saved to local storage:', currentValue);
            initializeApi(message1)
            order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);

            location.reload();
        } else {
            // Clear the local storage if the input is not valid
            localStorage.removeItem('last_digit_prediction_or_barrier_local_st');
            deleteCookie('last_digit_prediction_or_barrier_cookie');

            localStorage.removeItem('last_digit_prediction_local_st');
            deleteCookie('last_digit_prediction_cookie');

            console.log('Invalid input. Number removed from local storage.');
            initializeApi(message1)
            order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
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
            console.log('Input is empty. No action taken.');
            return;
        }

        // Check if input starts with '+' or '-' and then parse the float
        if (!/^[+-]/.test(inputValue)) {
            handleInvalidInput();
            initializeApi(message1)
            order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            return;
        }

        var currentValue = parseFloat(inputValue);

        if (isNaN(currentValue)) {
            handleInvalidInput();
            console.log('Invalid input. Number removed from local storage.');
            initializeApi(message1)
            order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
        } else if ((currentValue === 0) || (currentValue === 0.001) || (currentValue === -0.001) || (currentValue > 0.001 && currentValue <= 4683) || (currentValue < -0.001 && currentValue >= -4683)) {
            // Ensure the value is formatted with a sign
            var formattedValue = (currentValue >= 0 ? '+' : '') + currentValue.toString();

            console.log(formattedValue)

            last_digit_prediction_or_barrier = formattedValue;

            setCookie('last_digit_prediction_or_barrier_cookie', formattedValue, 7);
            localStorage.setItem('last_digit_prediction_or_barrier_local_st', formattedValue); // Store for 7 days

            setCookie('barrier_cookie', formattedValue, 7);
            localStorage.setItem('barrier_local_st', formattedValue);
            console.log('Number saved to local storage:', formattedValue);
            initializeApi(message1)
            order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            location.reload();
        } else {
            handleInvalidInput();
            console.log('Invalid input. Number removed from local storage.');
            initializeApi(message1)
            order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
        }

        function handleInvalidInput() {
            localStorage.removeItem('last_digit_prediction_or_barrier_local_st');
            deleteCookie('last_digit_prediction_or_barrier_cookie');

            localStorage.removeItem('barrier_local_st');
            deleteCookie('barrier_cookie');
        }
    }

    // Attach the debounced event listener to the input element
    document.getElementById('barrier_input').addEventListener('input', debounce(handleBarrierInputEvent, 300)); // 300ms delay


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





if (account_balance_drop_cont && account_type_change_cont && overlay3) {
    account_balance_drop_cont.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (account_type_change_cont.style.display === 'block' && overlay3.style.display === 'block') {
            account_type_change_cont.style.display = 'none';
            overlay3.style.display = 'none';
        } else {
            account_type_change_cont.style.display = 'block';
            overlay3.style.display = 'block';
        }
    });

    document.addEventListener('click', (event) => {
        if (!account_type_change_cont.contains(event.target)) {
            account_type_change_cont.style.display = 'none';
            overlay3.style.display = 'none';
        }
    });

    overlay3.addEventListener('click', (event) => {
        if (!account_type_change_cont.contains(event.target)) {
            account_type_change_cont.style.display = 'none';
            overlay3.style.display = 'none';
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
            localStorage.setItem("demo_account_selected_for_trade", true)
            localStorage.setItem("real_account_selected_for_trade", false)


        } else if (account_type.textContent == 'US Dollar') {
            let message1_set = 'Real Account'

            message1 = message1_set

            setCookie("message1", message1_set)
            localStorage.setItem("message1", message1_set)

            apiAndAuthData = initializeApi(message1)


            setCookie("real_account_selected_for_trade", true)
            setCookie("demo_account_selected_for_trade", false)
            localStorage.setItem("real_account_selected_for_trade", true)
            localStorage.setItem("demo_account_selected_for_trade", false)


        }

        // Prevent the event from propagating to the document
        if (account_type_change_cont.style.display === 'block' && overlay3.style.display === 'block') {
            account_type_change_cont.style.display = 'none';
            overlay3.style.display = 'none';
        }
        setTimeout(() => {
            location.reload();
        }, 1000);
    });
} else {
    console.error('One or more elements are not found');
}









let dropdown = '\u25BC'; // Unicode code point for black down-pointing triangle
let dropup = '\u25B2';   // Unicode code point for black up-pointing triangle


first_drop_cont.addEventListener('click', () => {
    // Compare innerHTML with Unicode code point values
    if (first_dropdown_icon.innerHTML.charCodeAt(0) === dropdown.charCodeAt(0)) {
        first_dropdown_icon.innerHTML = dropup;
    } else {
        first_dropdown_icon.innerHTML = dropdown;
    }
});


account_balance_drop_cont.addEventListener('click', () => {
    // Compare innerHTML with Unicode code point values
    if (secound_dropdown_icon.innerHTML.charCodeAt(0) === dropdown.charCodeAt(0)) {
        secound_dropdown_icon.innerHTML = dropup;
    } else {
        secound_dropdown_icon.innerHTML = dropdown;
    }
});


third_drop_cont.addEventListener('click', () => {
    // Compare innerHTML with Unicode code point values
    if (third_dropdown_icon.innerHTML.charCodeAt(0) === dropdown.charCodeAt(0)) {
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


fourth_drop_cont.addEventListener('click', () => {
    // Compare innerHTML with Unicode code point values
    if (fourth_dropdown_icon.innerHTML.charCodeAt(0) === dropdown.charCodeAt(0)) {
        fourth_dropdown_icon.innerHTML = dropup;
    } else {
        fourth_dropdown_icon.innerHTML = dropdown;
    }
});




if (buy_sell_one_display && buy_sell_one) {
    buy_sell_one_display.addEventListener('click', (event) => {
        event.stopPropagation();
        let buy_sell_one_display_cookie = getCookie('buy_sell_one_display_cookie')
        if (buy_sell_one.style.display === 'none' && (buy_sell_one_display_cookie == 'false' || !buy_sell_one_display_cookie)) {
            buy_sell_one.style.display = 'flex'
            setCookie('buy_sell_one_display_cookie', true)
            localStorage.setItem('buy_sell_one_display_local_st', true)
        } else {
            buy_sell_one.style.display = 'none'
            setCookie('buy_sell_one_display_cookie', false)
            localStorage.setItem('buy_sell_one_display_local_st', false)
        }
    })
}



if (buy_sell_two_display && buy_sell_two) {
    buy_sell_two_display.addEventListener('click', (event) => {
        event.stopPropagation();
        let buy_sell_two_display_cookie = getCookie('buy_sell_two_display_cookie')
        if (buy_sell_two.style.display === 'none' && (buy_sell_two_display_cookie == 'false' || !buy_sell_two_display_cookie)) {
            buy_sell_two.style.display = 'flex'
            setCookie('buy_sell_two_display_cookie', true)
            localStorage.setItem('buy_sell_two_display_local_st', true)
        } else {
            buy_sell_two.style.display = 'none'
            setCookie('buy_sell_two_display_cookie', false)
            localStorage.setItem('buy_sell_two_display_local_st', false)
        }
    })
}


if (close_contract_result_container) {
    close_contract_result_container.addEventListener('click', (event) => {
        event.stopPropagation();
        let buy_sell_two_display_cookie = getCookie('buy_sell_two_display_cookie')
        if (buy_sell_two.style.display === 'none' && (buy_sell_two_display_cookie == 'false' || !buy_sell_two_display_cookie)) {
            buy_sell_two.style.display = 'flex'
            setCookie('buy_sell_two_display_cookie', true)
            localStorage.setItem('buy_sell_two_display_local_st', true)
        } else {
            buy_sell_two.style.display = 'none'
            setCookie('buy_sell_two_display_cookie', false)
            localStorage.setItem('buy_sell_two_display_local_st', false)
        }
    })
}



if (buy_sell_three_display && buy_sell_three) {
    buy_sell_three_display.addEventListener('click', (event) => {
        event.stopPropagation();
        let buy_sell_three_display_cookie = getCookie('buy_sell_three_display_cookie')
        if (buy_sell_three.style.display === 'none' && (buy_sell_three_display_cookie == 'false' || !buy_sell_three_display_cookie)) {
            buy_sell_three.style.display = 'flex'
            setCookie('buy_sell_three_display_cookie', true)
            localStorage.setItem('buy_sell_three_display_local_st', true)
        } else {
            buy_sell_three.style.display = 'none'
            setCookie('buy_sell_three_display_cookie', false)
            localStorage.setItem('buy_sell_three_display_local_st', false)
        }
    })
}


if (buy_sell_four_display && buy_sell_four) {
    buy_sell_four_display.addEventListener('click', (event) => {
        event.stopPropagation();
        let buy_sell_four_display_cookie = getCookie('buy_sell_four_display_cookie')
        if (buy_sell_four.style.display === 'none' && (buy_sell_four_display_cookie == 'false' || !buy_sell_four_display_cookie)) {
            buy_sell_four.style.display = 'flex'
            setCookie('buy_sell_four_display_cookie', true)
            localStorage.setItem('buy_sell_four_display_local_st', true)
        } else {
            buy_sell_four.style.display = 'none'
            setCookie('buy_sell_four_display_cookie', false)
            localStorage.setItem('buy_sell_four_display_local_st', false)
        }
    })
}


if (buy_sell_five_display && buy_sell_five) {
    buy_sell_five_display.addEventListener('click', (event) => {
        event.stopPropagation();
        let buy_sell_five_display_cookie = getCookie('buy_sell_five_display_cookie')
        if (buy_sell_five.style.display === 'none' && (buy_sell_five_display_cookie == 'false' || !buy_sell_five_display_cookie)) {
            buy_sell_five.style.display = 'flex'
            setCookie("buy_sell_five_display_cookie", true)
            localStorage.setItem("buy_sell_five_display_local_st", true)
        } else {
            buy_sell_five.style.display = 'none'
            setCookie("buy_sell_five_display_cookie", false)
            localStorage.setItem("buy_sell_five_display_local_st", false)
        }
    })
}




if (derived_indices_drop && derived_indices_list_cont) {
    derived_indices_drop.addEventListener('click', () => {

        if (derived_indices_drop_dropdown.style.display === 'none') {
            derived_indices_drop_dropdown.style.display = 'flex'
            derived_indices_drop_dropup.style.display = 'none'
        } else {
            derived_indices_drop_dropdown.style.display = 'none'
            derived_indices_drop_dropup.style.display = 'flex'
        }

        if (derived_indices_list_cont.style.display === 'none') {
            derived_indices_list_cont.style.display = 'flex'
        } else {
            derived_indices_list_cont.style.display = 'none'
        }
    })
}










if (stake_drop_cont && stake_list) {
    stake_drop_cont.addEventListener('click', () => {
        if (stake_list.style.display === 'none') {
            stake_list.style.display = 'block'
        } else {
            stake_list.style.display = 'none'
        }
    })
}


if (stake_Minutes_cont && duration_unit_list) {
    stake_Minutes_cont.addEventListener('click', () => {
        if (duration_unit_list.style.display === 'none') {
            duration_unit_list.style.display = 'block'
        } else {
            duration_unit_list.style.display = 'none'
        }
    })
}

if (duration_stake_text_drop_cont && duration_drop_list) {
    duration_stake_text_drop_cont.addEventListener('click', () => {
        if (duration_drop_list.style.display === 'none') {
            duration_drop_list.style.display = 'block'
        } else {
            duration_drop_list.style.display = 'none'
        }
    })
}

if (start_time_cont && start_time_drop_list) {
    start_time_cont.addEventListener('click', () => {
        if (start_time_drop_list.style.display === 'none') {
            start_time_drop_list.style.display = 'block'
        } else {
            start_time_drop_list.style.display = 'none'
        }
    })
}


if (usd_text_input_cont && currency_for_order) {
    usd_text_input_cont.addEventListener('click', () => {
        if (currency_for_order.style.display === 'none') {
            currency_for_order.style.display = 'block'
        } else {
            currency_for_order.style.display = 'none'
        }
    })
}


function showHide() {

    let show_last_digit_prediction_cookie1 = getCookie('show_last_digit_prediction_cookie1')
    let show_last_digit_prediction_cookie2 = getCookie('show_last_digit_prediction_cookie2')
    let show_barrier_cookie = getCookie('show_barrier_cookie')

    if ((show_last_digit_prediction_cookie1 === 'false' && show_last_digit_prediction_cookie2 === 'false') || (show_last_digit_prediction_cookie1 === 'false' && show_last_digit_prediction_cookie2 === 'true') || (show_last_digit_prediction_cookie1 === 'true' && show_last_digit_prediction_cookie2 === 'false')) {
        start_time_cont.style.display = 'flex'
    } else {
        start_time_cont.style.display = 'none'
    }


    if (show_last_digit_prediction_cookie1 === 'true' && show_last_digit_prediction_cookie2 === 'true') {
        last_digit_prediction_display_cont.style.display = 'flex'
    } else {
        last_digit_prediction_display_cont.style.display = 'none'
    }

    if (show_barrier_cookie === 'true') {
        barrier_offset_display_cont.style.display = 'flex'
    } else {
        barrier_offset_display_cont.style.display = 'none'
    }

    if (trade_type_secound.textContent === 'Higher/Lower') {
        last_digit_prediction_display_cont.style.display = 'none'
    }
}




const handleVolatilityClick = function () {

    unsubscribeTicks(); // Unsubscribe when volatility button is clicke
    let type = "Synthetics"


    // Logic for volatility buttons
    if (this.textContent == "Volatility 10 Index") {
        let symbol_vol_set = "R_10";
        symbol_vol = symbol_vol_set
        api.forget(subscriptionId)
        initializeApi(message1)
        setCookie('symbol_vol_cookie', symbol_vol_set, 7)
        setCookie('symbol_vol_text_cookie', this.textContent, 7)
        setCookie('type_vol_text_cookie', type, 7);
        localStorage.setItem('symbol_vol_local_st', symbol_vol_set)
        localStorage.setItem('symbol_vol_text_local_st', this.textContent)
        localStorage.setItem('type_vol_text_local_st', type);
        trade_symbol_secound.textContent = this.textContent
        trade_symbol_first.textContent = type
        setCookie('show_start_time1_cookie', false)
        setCookie('show_last_digit_prediction_cookie1', true)
        localStorage.setItem('show_start_time1_local_st', false)
        localStorage.setItem('show_last_digit_prediction_local_st1', true)
        showHide()
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
                order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        }

        location.reload();

    } else if (this.textContent == "Volatility 25 Index") {
        let symbol_vol_set = "R_25";
        symbol_vol = symbol_vol_set
        api.forget(subscriptionId)
        initializeApi(message1)
        setCookie('symbol_vol_cookie', symbol_vol_set, 7)
        setCookie('symbol_vol_text_cookie', this.textContent, 7)
        setCookie('type_vol_text_cookie', type, 7);
        localStorage.setItem('symbol_vol_local_st', symbol_vol_set)
        localStorage.setItem('symbol_vol_text_local_st', this.textContent)
        localStorage.setItem('type_vol_text_local_st', type);
        trade_symbol_secound.textContent = this.textContent
        trade_symbol_first.textContent = type
        setCookie('show_start_time1_cookie', false)
        setCookie('show_last_digit_prediction_cookie1', true)
        localStorage.setItem('show_start_time1_local_st', false)
        localStorage.setItem('show_last_digit_prediction_local_st1', true)
        showHide()
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
                order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        }

        location.reload();

    } else if (this.textContent == "Volatility 50 Index") {
        let symbol_vol_set = "R_50";
        symbol_vol = symbol_vol_set
        api.forget(subscriptionId)
        initializeApi(message1)
        setCookie('symbol_vol_cookie', symbol_vol_set, 7)
        setCookie('symbol_vol_text_cookie', this.textContent, 7)
        setCookie('type_vol_text_cookie', type, 7);
        localStorage.setItem('symbol_vol_local_st', symbol_vol_set)
        localStorage.setItem('symbol_vol_text_local_st', this.textContent)
        localStorage.setItem('type_vol_text_local_st', type);
        trade_symbol_secound.textContent = this.textContent
        trade_symbol_first.textContent = type
        setCookie('show_start_time1_cookie', false)
        setCookie('show_last_digit_prediction_cookie1', true)
        localStorage.setItem('show_start_time1_local_st', false)
        localStorage.setItem('show_last_digit_prediction_local_st1', true)
        showHide()
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
                order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        }

        location.reload();

    } else if (this.textContent == "Volatility 75 Index") {
        let symbol_vol_set = "R_75";
        symbol_vol = symbol_vol_set
        api.forget(subscriptionId)
        initializeApi(message1)
        setCookie('symbol_vol_cookie', symbol_vol_set, 7)
        setCookie('symbol_vol_text_cookie', this.textContent, 7)
        setCookie('type_vol_text_cookie', type, 7);
        localStorage.setItem('symbol_vol_local_st', symbol_vol_set)
        localStorage.setItem('symbol_vol_text_local_st', this.textContent)
        localStorage.setItem('type_vol_text_local_st', type);
        trade_symbol_secound.textContent = this.textContent
        trade_symbol_first.textContent = type
        setCookie('show_start_time1_cookie', false)
        setCookie('show_last_digit_prediction_cookie1', true)
        localStorage.setItem('show_start_time1_local_st', false)
        localStorage.setItem('show_last_digit_prediction_local_st1', true)
        showHide()
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
                order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        }

        location.reload();

    } else if (this.textContent == "Volatility 100 Index") {
        let symbol_vol_set = "R_100";
        symbol_vol = symbol_vol_set
        api.forget(subscriptionId)
        initializeApi(message1)
        setCookie('symbol_vol_cookie', symbol_vol_set, 7)
        setCookie('symbol_vol_text_cookie', this.textContent, 7)
        setCookie('type_vol_text_cookie', type, 7);
        localStorage.setItem('symbol_vol_local_st', symbol_vol_set)
        localStorage.setItem('symbol_vol_text_local_st', this.textContent)
        localStorage.setItem('type_vol_text_local_st', type);
        trade_symbol_secound.textContent = this.textContent
        trade_symbol_first.textContent = type
        setCookie('show_start_time1_cookie', false)
        setCookie('show_last_digit_prediction_cookie1', true)
        localStorage.setItem('show_start_time1_local_st', false)
        localStorage.setItem('show_last_digit_prediction_local_st1', true)
        showHide()
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
                order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
            }, 2000);
        }

        location.reload();

    } else {
        let symbol_vol_set = ''
        symbol_vol = symbol_vol_set
        api.forget(subscriptionId)
        initializeApi(message1)
        setCookie('symbol_vol_cookie', symbol_vol_set, 7)
        setCookie('symbol_vol_text_cookie', this.textContent, 7)
        setCookie('type_vol_text_cookie', 'not provided', 7);
        localStorage.setItem('symbol_vol_local_st', symbol_vol_set)
        localStorage.setItem('symbol_vol_text_local_st', this.textContent)
        localStorage.setItem('type_vol_text_local_st', 'not provided');
        trade_symbol_secound.textContent = this.textContent
        trade_symbol_first.textContent = 'not provided'
        setCookie('show_start_time1_cookie', true)
        setCookie('show_last_digit_prediction_cookie1', false)
        localStorage.setItem('show_start_time1_local_st', true)
        localStorage.setItem('show_last_digit_prediction_local_st1', false)
        showHide()
        barrier_offset_display_cont.style.display = 'none'
        location.reload();
    }




    setTimeout(() => {
        subscribeTicks()
        console.log("subscribed again")
    }, 1000)


    if (account_symbol_change_cont.style.display = 'flex') {
        account_symbol_change_cont.style.display = 'none'
    } else {
        account_symbol_change_cont.style.display = 'flex'
    }

    setCookie('clicked1', true)
    localStorage.setItem('clicked1', true)
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
    localStorage.setItem('contract_text_local_st', this.textContent);
    localStorage.setItem('contract_type_change_click', true)

    shownSvg(this.textContent);

    let type = "Digits";
    let type2 = "Up/Down";

    // Logic for volatility buttons
    if (this.textContent == "Matches/Differs") {
        contract = this.textContent;
        setCookie('contract_type_text_cookie', type, 7);
        localStorage.setItem('contract_type_text_local_st', type);
        trade_type_secound.textContent = this.textContent;
        trade_symbol_first.textContent = type;
        setCookie('show_last_digit_prediction_cookie2', true, 7);
        setCookie('show_start_time2_cookie', false, 7);
        localStorage.setItem('show_last_digit_prediction_local_st2', true);
        localStorage.setItem('show_start_time2_local_st', false);
        localStorage.setItem('show_barrier_local_st2', false);
        setCookie('show_barrier_cookie', false, 7);
        showHide();
        last_digit_prediction_or_barrier = document.getElementById('last_digit_input').value
        initializeApi(message1)
        order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        location.reload();
    } else if (this.textContent == "Over/Under") {
        contract = this.textContent;
        setCookie('contract_type_text_cookie', type, 7);
        localStorage.setItem('contract_type_text_local_st', type);
        trade_type_secound.textContent = this.textContent;
        trade_type_first.textContent = type;
        setCookie('show_last_digit_prediction_cookie2', true, 7);
        setCookie('show_start_time2_cookie', false, 7);
        localStorage.setItem('show_last_digit_prediction_local_st2', true);
        localStorage.setItem('show_start_time2_local_st', false);
        localStorage.setItem('show_barrier_local_st2', false);
        setCookie('show_barrier_cookie', false, 7);
        showHide();
        last_digit_prediction_or_barrier = document.getElementById('last_digit_input').value
        initializeApi(message1)
        order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        location.reload();
    } else if (this.textContent == "Odd/Even") {
        contract = this.textContent;
        setCookie('contract_type_text_cookie', type, 7);
        localStorage.setItem('contract_type_text_local_st', type);
        trade_type_secound.textContent = this.textContent;
        trade_type_first.textContent = type;
        setCookie('show_last_digit_prediction_cookie2', false, 7);
        setCookie('show_start_time2_cookie', true, 7);
        localStorage.setItem('show_last_digit_prediction_local_st2', false);
        localStorage.setItem('show_start_time2_local_st', true);
        localStorage.setItem('show_barrier_local_st2', false);
        setCookie('show_barrier_cookie', false, 7);
        showHide();
        initializeApi(message1)
        order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        location.reload();
    } else if (this.textContent == "Rise/Fall") {
        contract = this.textContent;
        setCookie('contract_type_text_cookie', type2, 7);
        localStorage.setItem('contract_type_text_local_st', type2);
        trade_type_secound.textContent = this.textContent;
        trade_type_first.textContent = type2;
        setCookie('show_last_digit_prediction_cookie2', false, 7);
        setCookie('show_start_time2_cookie', true, 7);
        localStorage.setItem('show_last_digit_prediction_local_st2', false);
        localStorage.setItem('show_start_time2_local_st', true);
        localStorage.setItem('show_barrier_local_st2', false);
        setCookie('show_barrier_cookie', false, 7);
        showHide();
        initializeApi(message1)
        order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        location.reload();
    } else if (this.textContent == "Higher/Lower") {
        contract = this.textContent;
        setCookie('contract_type_text_cookie', type2, 7);
        localStorage.setItem('contract_type_text_local_st', type2);
        trade_type_secound.textContent = this.textContent;
        trade_type_first.textContent = type2;
        setCookie('show_last_digit_prediction_cookie1', true, 7);
        setCookie('show_last_digit_prediction_cookie2', true, 7);
        setCookie('show_barrier_cookie', true, 7);
        setCookie('show_start_time2_cookie', true, 7);
        localStorage.setItem('show_last_digit_prediction_local_st1', true);
        localStorage.setItem('show_last_digit_prediction_local_st2', true);
        localStorage.setItem('show_barrier_local_st2', true);
        localStorage.setItem('show_start_time2_local_st', true);
        showHide();
        last_digit_prediction_display_cont.style.display = 'none'
        last_digit_prediction_or_barrier = document.getElementById('barrier_input').value
        initializeApi(message1)
        order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        location.reload();
    } else {
        setCookie('contract_type_text_cookie', type, 7);
        localStorage.setItem('contract_type_text_local_st', type);
        trade_type_secound.textContent = this.textContent;
        trade_type_first.textContent = 'not provided';
        setCookie('show_last_digit_prediction_cookie2', false, 7);
        setCookie('show_start_time2_cookie', true, 7);
        localStorage.setItem('show_last_digit_prediction_local_st2', false);
        localStorage.setItem('show_start_time2_local_st', true);
        localStorage.setItem('show_barrier_local_st2', false);
        setCookie('show_barrier_cookie', false, 7);
        showHide();
        location.reload();
    }

    if (account_contract_type_change_cont.style.display === 'flex') {
        account_contract_type_change_cont.style.display = 'none';
    } else {
        account_contract_type_change_cont.style.display = 'flex';
    }

    setCookie('clicked2', true, 7)
    localStorage.setItem('clicked2', true)
};


tradeTypes.forEach(function (types) {
    types.addEventListener("click", handleTradeTypeClick);
});







function handleUnitTypeClick() {
    if (this.textContent == 'ticks') {
        duration_unit = 't'
        setCookie('duration_unit_cookie', duration_unit)
        localStorage.setItem('duration_unit_local_st', duration_unit)
        initializeApi(message1)
        if (trade_type_secound.textContent !== 'Rise/Fall') {
            order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        } else {
            order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)
        }

        location.reload();
    } else if (this.textContent == 'secounds') {
        duration_unit = 's'
        setCookie('duration_unit_cookie', duration_unit)
        localStorage.setItem('duration_unit_local_st', duration_unit)
        initializeApi(message1)
        if (trade_type_secound.textContent !== 'Rise/Fall') {
            order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        } else {
            order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)
        }
        location.reload();

    } else if (this.textContent == 'minutes') {
        duration_unit = 'm'
        setCookie('duration_unit_cookie', duration_unit)
        localStorage.setItem('duration_unit_local_st', duration_unit)
        initializeApi(message1)
        if (trade_type_secound.textContent !== 'Rise/Fall') {
            order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        } else {
            order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)
        }
        location.reload();

    } else if (this.textContent == 'hours') {
        duration_unit = 'h'
        setCookie('duration_unit_cookie', duration_unit)
        localStorage.setItem('duration_unit_local_st', duration_unit)
        initializeApi(message1)
        if (trade_type_secound.textContent !== 'Rise/Fall') {
            order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        } else {
            order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)
        }

        location.reload();
    } else if (this.textContent == 'days') {
        duration_unit = 'd'
        setCookie('duration_unit_cookie', duration_unit)
        localStorage.setItem('duration_unit_local_st', duration_unit)
        initializeApi(message1)
        if (trade_type_secound.textContent !== 'Rise/Fall') {
            order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)

        } else {
            order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol)
        }

        location.reload();
    }

    if (duration_unit_list.style.display == 'block') {
        duration_unit_list.style.display == 'none'
    } else {
        duration_unit_list.style.display == 'block'
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

const getProposalOpenContract = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse);
    proposal_open_contract()
};

const getProposalOpenContract2 = async (contract_id) => {
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

// const getProposalOpenContract = async (contract_id) => {
//     connection.addEventListener('message', proposalOpenContractResponse);
//     await api.proposalOpenContract({
//         "proposal_open_contract": 1,
//         "contract_id": contract_id,
//         "subscribe": 1
//     })
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
            if (digit.textContent !== last_digit_prediction_or_barrier) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound.textContent === 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) > last_digit_prediction_or_barrier) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound.textContent === 'Odd/Even') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) % 2 === 0) {
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




up_purchase_btn.addEventListener('click', async function () {
    const slider = document.getElementById('slide_trade_result').style.display = 'flex'

    before_trade()
    allProposalOpenContract.length = 0
    unsubscribeProposalOpenContract()

    if (trade_type_secound.textContent === 'Rise/Fall' || trade_type_secound.textContent === 'Odd/Even') {
        order_propose3(api, stake_amount, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
    } else {
        order_propose1(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol_vol);
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
    var button = document.getElementById('up_purchase_btn');

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




document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before manipulating it

    // Get the button container
    var buttonContainer = document.querySelector('.click_change');

    // Add click event listener to button container
    buttonContainer.addEventListener('click', togglePlayPause);

    // Function to toggle play and pause buttons
    function togglePlayPause() {
        var play_button = document.getElementById('play_button');
        var pause_button = document.getElementById('pause_button');


        if (play_button) {
            play_button.parentNode.removeChild(play_button);

            var pause_button = document.createElement('div');
            pause_button.id = 'pause_button';
            pause_button.className = 'pause_button';
            pause_button.innerHTML = '&#10074;&#10074;';
            buttonContainer.appendChild(pause_button);
            document.getElementById('bot_state').textContent = 'Bot has stopped'
        } else if (pause_button) {
            pause_button.parentNode.removeChild(pause_button);

            var play_button = document.createElement('div');
            play_button.id = 'play_button';
            play_button.className = 'play_button';
            play_button.innerHTML = '&#9654;';
            buttonContainer.appendChild(play_button);
            document.getElementById('bot_state').textContent = 'Bot is running'
        }
    }


    const tbody = document.getElementById('tbody1');

    // Function to create and append rows based on data
    function appendRows(data) {
        data.forEach(item => {
            // Create <tr> element
            const row = document.createElement('tr');

            // Assign unique ID to <tr> (optional)
            row.id = `row-${item.id}`;

            // Create <td> elements and append to <tr>
            const td1 = document.createElement('td');
            td1.textContent = item.id;
            row.appendChild(td1);

            const td2 = document.createElement('td');
            td2.textContent = item.timestamp;
            row.appendChild(td2);

            const td3 = document.createElement('td');
            td3.textContent = item.reference;
            row.appendChild(td3);

            const td4 = document.createElement('td');
            td4.textContent = item.tradeType;
            row.appendChild(td4);

            const td5 = document.createElement('td');
            td5.textContent = item.entrySpot;
            row.appendChild(td5);

            const td6 = document.createElement('td');
            td6.textContent = item.exitSpot;
            row.appendChild(td6);

            const td7 = document.createElement('td');
            td7.textContent = item.buyPrice;
            row.appendChild(td7);

            const td8 = document.createElement('td');
            td8.textContent = item.profitLoss;
            row.appendChild(td8);

            const td9 = document.createElement('td');
            td9.textContent = item.status;
            row.appendChild(td9);

            // Append <tr> to <tbody>
            tbody.appendChild(row);
        });
    }



});



let hamburger = document.querySelector('.hamburger_menu');
let sidebar = document.getElementById('sidebar');
let closeBtn = document.querySelector('.close-btn');
let overlay2 = document.querySelector('.overlay2');


if ((hamburger && overlay2) || (first_drop_cont && brand)) {
    hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (sidebar.style.left === "-250px" && overlay2.style.display === 'none') {
            sidebar.style.left = '0px';
            overlay2.style.display = 'block';
        } else {
            sidebar.style.left = '-250px';
            overlay2.style.display = 'none';
        }
    });

    brand.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (sidebar.style.left === "-250px" && overlay2.style.display === 'none') {
            sidebar.style.left = '0px';
            overlay2.style.display = 'block';
        } else {
            sidebar.style.left = '-250px';
            overlay2.style.display = 'none';
        }
    });


    closeBtn.addEventListener('click', (event) => {
        if (sidebar.contains(event.target)) {
            sidebar.style.left = '-250px';
            overlay2.style.display = 'none';
        }
    });


    overlay2.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target)) {
            sidebar.style.left = '-250px';
            overlay2.style.display = 'none';
        }
    });
} else {
    console.error('One or more elements are not found');
}





let toggleDropdown = document.getElementById('toggle_dropdown');
let dropdownContent = document.getElementById('dropdown_content');


toggleDropdown.addEventListener('click', function (event) {
    event.preventDefault();
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});


if (bot_show_cont && bot1) {
    bot1.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_show_cont.style.display == 'none') {
            bot_show_cont.style.display = 'block'
            if (sidebar.style.left == '0px' && overlay2.style.display == 'block') {
                sidebar.style.left = '-250px';
                overlay2.style.display = 'none';
            }
        } else {
            bot_show_cont.style.display = 'none'
        }

    });

    close_summary.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_show_cont.style.display == 'block') {
            bot_show_cont.style.display = 'none'
            if (sidebar.style.left == '0px' && overlay2.style.display == 'block') {
                sidebar.style.left = '-250px';
                overlay2.style.display = 'none';
            }
        } else {
            bot_show_cont.style.display = 'block'
        }
    });

} else {
    console.error('One or more elements are not found');
}








let log_close_and_info_cont = document.getElementById('log_close_and_info_cont');
let bot_log_show_cont = document.getElementById('bot_log_show_cont');
let bot_details = document.getElementById('bot_details');
let bot_details2 = document.getElementById('bot_details2');

if (bot_log_show_cont && bot_details) {
    bot_details.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont.style.display == 'none') {
            bot_log_show_cont.style.display = 'block'
        } else {
            bot_log_show_cont.style.display = 'none'
        }

    });

    log_close_and_info_cont.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_log_show_cont.style.display == 'block') {
            bot_log_show_cont.style.display = 'none'
        } else {
            bot_log_show_cont.style.display = 'block'
        }
    });

} else {
    console.error('One or more elements are not found');
}



if (bot_log_show_cont && bot_details) {
    bot_details2.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont.style.display == 'none') {
            bot_log_show_cont.style.display = 'block'
        } else {
            bot_log_show_cont.style.display = 'none'
        }

    });
} else {
    console.error('One or more elements are not found');
}





let martingale = document.getElementById('martingale');
let flash_info_cont = document.getElementById('flash_info_cont');
let tick_check_amount = document.getElementById('tick_check_amount');
let bot_settings = document.getElementById('bot_settings');
let settings_cont = document.getElementById('settings_cont');
let tick_check = document.getElementById('tick_check');
let martingale_jump = document.getElementById('martingale_jump');
let increase_jump = document.getElementById('increase_jump');
let reduce_jump = document.getElementById('reduce_jump');

let bot_settings2 = document.getElementById('bot_settings2');

const prevButton2 = document.querySelector(".prev2");
const nextButton2 = document.querySelector(".next2");

const volumes2 = document.querySelectorAll(".slide_vol2");
let tick_check2 = document.getElementById('tick_check2');
let martingale2 = document.getElementById('martingale2');
let martingale_jump2 = document.getElementById('martingale_jump2');
let martingale_jump_set = document.getElementById('martingale_jump_set');

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const volumes = document.querySelectorAll(".slide_vol");
const volumes_stream = document.querySelectorAll(".slide_vol_stream");
const last_digit_settings = document.querySelectorAll(".last_digit_settings");

let currentIndex = localStorage.getItem('bot_current_vol1') || 0;
let currentIndex2 = localStorage.getItem('bot_current_vol2') || 0;
let currentIndex3 = localStorage.getItem('bot_current_vol3') || 0;


// Show initial volume
volumes[currentIndex].classList.add("active");
volumes2[currentIndex].classList.add("active");
volumes_stream[currentIndex].classList.add("active");


// Previous button functionality
prevButton.addEventListener("click", function () {
    volumes[currentIndex].classList.remove("active");
    volumes2[currentIndex].classList.remove("active");
    volumes_stream[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + volumes.length) % volumes.length;
    localStorage.setItem('bot_current_vol1', currentIndex)
    localStorage.setItem('bot_current_vol3', currentIndex)
    setCookie('bot_current_vol1', currentIndex)
    setCookie('bot_current_vol3', currentIndex)
    currentIndex2 = (currentIndex2 - 1 + volumes_stream.length) % volumes_stream.length;
    localStorage.setItem('bot_current_vol2', currentIndex)
    setCookie('bot_current_vol2', currentIndex)
    volumes[currentIndex].classList.add("active");
    volumes2[currentIndex].classList.add("active");
    volumes_stream[currentIndex2].classList.add("active");
});

// Next button functionality
nextButton.addEventListener("click", function () {
    volumes[currentIndex].classList.remove("active");
    volumes2[currentIndex].classList.remove("active");
    volumes_stream[currentIndex2].classList.remove("active");
    currentIndex = (currentIndex + 1) % volumes.length;
    localStorage.setItem('bot_current_vol1', currentIndex)
    localStorage.setItem('bot_current_vol3', currentIndex)
    setCookie('bot_current_vol1', currentIndex)
    setCookie('bot_current_vol3', currentIndex)
    currentIndex2 = (currentIndex2 + 1) % volumes_stream.length;
    localStorage.setItem('bot_current_vol2', currentIndex)
    setCookie('bot_current_vol2', currentIndex)
    volumes[currentIndex].classList.add("active");
    volumes2[currentIndex].classList.add("active");
    volumes_stream[currentIndex2].classList.add("active");
});




// Add click event listener
martingale.addEventListener('click', function () {
    if (martingale.classList.contains('active_mat')) {
        martingale.classList.remove('active_mat');
        martingale2.classList.remove('active_mat');
        setCookie('martingale', 'false')
        localStorage.setItem('martingale', 'false')
        flash_info_cont.textContent = 'martigale is not active'
        tick_check_amount.style.color = '#fff'

    } else {
        martingale.classList.add('active_mat');
        martingale2.classList.add('active_mat');
        setCookie('martingale', 'true')
        localStorage.setItem('martingale', 'true')
        flash_info_cont.textContent = 'martigale is active'
        tick_check_amount.style.color = '#fff'
    }

    if (flash_info_cont.classList.contains('show_flash_info')) {
        flash_info_cont.classList.remove('show_flash_info')

        setTimeout(() => {
            flash_info_cont.classList.remove('show_flash_info')
        }, 5000)

    } else {
        flash_info_cont.classList.add('show_flash_info')

        setTimeout(() => {
            flash_info_cont.classList.remove('show_flash_info')
        }, 5000)
    }
});




function bot_set_default() {
    let curr_bot_set = localStorage.getItem('bot_set');

    if (curr_bot_set === null) {
        setTimeout(bot_set_default, 100); 
        return;
    }

    tick_check.textContent = curr_bot_set;
    tick_check2.textContent = curr_bot_set;
}

bot_set_default();


// Add click event listener
bot_settings.addEventListener('click', function () {
    if (settings_cont.style.display == 'none') {
        settings_cont.style.display = 'block'
    } else {
        settings_cont.style.display = 'none'
    }
});


document.addEventListener('click', (event) => {
    if (!bot_settings.contains(event.target)  && !settings_cont.contains(event.target) && !martingale_jump_set.contains(event.target)) {
        settings_cont.style.display = 'none';
    }
});


last_digit_settings.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.textContent.slice(2)
        if (bot_set == 'Last one digit bot') {
            localStorage.setItem('bot_set', '1')
            setCookie('bot_set', '1')
            this.classList.add('confirm_set_click')

            bot_set_default()

            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            localStorage.setItem('bot_set', '2')
            setCookie('bot_set', '2')
            this.classList.add('confirm_set_click')

            bot_set_default()

            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            localStorage.setItem('bot_set', '3')
            setCookie('bot_set', '3')
            this.classList.add('confirm_set_click')

            bot_set_default()

            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            localStorage.setItem('bot_set', '4')
            setCookie('bot_set', '4')
            this.classList.add('confirm_set_click')

            bot_set_default()

            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            localStorage.setItem('bot_set', '5')
            setCookie('bot_set', '5')
            this.classList.add('confirm_set_click')

            bot_set_default()

            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            localStorage.setItem('bot_set', '6')
            setCookie('bot_set', '6')
            this.classList.add('confirm_set_click')

            bot_set_default()

            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            localStorage.setItem('bot_set', '7')
            setCookie('bot_set', '7')
            this.classList.add('confirm_set_click')

            bot_set_default()

            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            localStorage.setItem('bot_set', '8')
            setCookie('bot_set', '8')
            this.classList.add('confirm_set_click')

            bot_set_default()

            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            localStorage.setItem('bot_set', '9')
            setCookie('bot_set', '9')
            this.classList.add('confirm_set_click')

            bot_set_default()

            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            localStorage.setItem('bot_set', '10')
            setCookie('bot_set', '10')
            this.classList.add('confirm_set_click')

            bot_set_default()

            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});



let jump_count = null

function jump_count_set(){
    localStorage.setItem('bot_jump', jump_count)
    setCookie('bot_jump', jump_count)
}

function jump_count_set2(){
   jump_count = parseInt(localStorage.getItem('bot_jump'))
    
    if (jump_count === null) {
        setTimeout(jump_count_set2, 100); 
        return;
    }

    if(jump_count > 0){
        martingale_jump.textContent = 'j' + jump_count
        martingale_jump2.textContent = 'j' + jump_count
    }else{
        martingale_jump.textContent = ''
        martingale_jump2.textContent = ''
    }
}


jump_count_set2()



increase_jump.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count = jump_count + 1
    jump_count_set()
    jump_count_set2()
})

reduce_jump.addEventListener('click', (event) => {
    event.preventDefault()
    if(jump_count > 0){
        jump_count = jump_count - 1
        jump_count_set()
        jump_count_set2()
    }
})







bot_settings2.addEventListener('click', function () {
    if (settings_cont.style.display == 'none') {
        settings_cont.style.display = 'block'
    } else {
        settings_cont.style.display = 'none'
    }
});







// Previous button functionality
prevButton2.addEventListener("click", function () {
    volumes[currentIndex].classList.remove("active");
    volumes2[currentIndex].classList.remove("active");
    volumes_stream[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + volumes.length) % volumes.length;
    localStorage.setItem('bot_current_vol1', currentIndex)
    localStorage.setItem('bot_current_vol3', currentIndex)
    setCookie('bot_current_vol1', currentIndex)
    setCookie('bot_current_vol3', currentIndex)
    currentIndex2 = (currentIndex2 - 1 + volumes_stream.length) % volumes_stream.length;
    localStorage.setItem('bot_current_vol2', currentIndex)
    setCookie('bot_current_vol2', currentIndex)
    volumes[currentIndex].classList.add("active");
    volumes2[currentIndex].classList.add("active");
    volumes_stream[currentIndex2].classList.add("active");
});

// Next button functionality
nextButton2.addEventListener("click", function () {
    volumes[currentIndex].classList.remove("active");
    volumes2[currentIndex].classList.remove("active");
    volumes_stream[currentIndex2].classList.remove("active");
    currentIndex = (currentIndex + 1) % volumes.length;
    localStorage.setItem('bot_current_vol1', currentIndex)
    localStorage.setItem('bot_current_vol3', currentIndex)
    setCookie('bot_current_vol1', currentIndex)
    setCookie('bot_current_vol3', currentIndex)
    currentIndex2 = (currentIndex2 + 1) % volumes_stream.length;
    localStorage.setItem('bot_current_vol2', currentIndex)
    setCookie('bot_current_vol2', currentIndex)
    volumes[currentIndex].classList.add("active");
    volumes2[currentIndex].classList.add("active");
    volumes_stream[currentIndex2].classList.add("active");
});



// Add click event listener
martingale2.addEventListener('click', function () {
    if (martingale2.classList.contains('active_mat')) {
        martingale2.classList.remove('active_mat');
        martingale.classList.remove('active_mat');
        setCookie('martingale', 'false')
        localStorage.setItem('martingale', 'false')
        flash_info_cont.textContent = 'martigale is not active'
        tick_check_amount.style.color = '#fff'

    } else {
        martingale2.classList.add('active_mat');
        martingale.classList.add('active_mat');
        setCookie('martingale', 'true')
        localStorage.setItem('martingale', 'true')
        flash_info_cont.textContent = 'martigale is active'
        tick_check_amount.style.color = '#fff'
    }

    if (flash_info_cont.classList.contains('show_flash_info')) {
        flash_info_cont.classList.remove('show_flash_info')

        setTimeout(() => {
            flash_info_cont.classList.remove('show_flash_info')
        }, 5000)

    } else {
        flash_info_cont.classList.add('show_flash_info')

        setTimeout(() => {
            flash_info_cont.classList.remove('show_flash_info')
        }, 5000)
    }
});
































































