import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';


// const app_id_demo = sessionStorage.getItem('app_id_demo');
// const token_demo = sessionStorage.getItem('token_demo');
// const app_id_real = sessionStorage.getItem('app_id_real');
// const token_real = sessionStorage.getItem('token_real');

const app_id_demo = 63261;
const token_demo = "CgjU4TbJyKTrVHD";
const app_id_real = 63262;
const token_real = "6wB5qaAzZ2NVMTS"


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

let set_vol10_trade = null
let martingale_set = false
let bot_set = null
let bot_set_store = null
let bot_jump = null


let set_vol10_trade_cookie
let martingale_set_cookie = false
let bot_set_cookie = null
let bot_set_store_cookie = null
let bot_jump_cookie = null

let set_vol25_trade_carousel2 = null
let martingale_set_carousel2 = false
let bot_set_carousel2 = null
let bot_set_store_carousel2 = null
let bot_jump_carousel2 = null

let set_vol25_trade_carousel2_cookie = null
let martingale_set_carousel2_cookie = false
let bot_set_carousel2_cookie = null
let bot_set_store_carousel2_cookie = null
let bot_jump_carousel2_cookie = null


let set_vol50_trade_carousel3 = null
let martingale_set_carousel3 = false
let bot_set_carousel3 = null
let bot_set_store_carousel3 = null
let bot_jump_carousel3 = null

let set_vol50_trade_carousel3_cookie = null
let martingale_set_carousel3_cookie = false
let bot_set_carousel3_cookie = null
let bot_set_store_carousel3_cookie = null
let bot_jump_carousel3_cookie = null


let set_vol75_trade_carousel4 = null
let martingale_set_carousel4 = false
let bot_set_carousel4 = null
let bot_set_store_carousel4 = null
let bot_jump_carousel4 = null

let set_vol75_trade_carousel4_cookie = null
let martingale_set_carousel4_cookie = false
let bot_set_carousel4_cookie = null
let bot_set_store_carousel4_cookie = null
let bot_jump_carousel4_cookie = null


let set_vol100_trade_carousel5 = null
let martingale_set_carousel5 = false
let bot_set_carousel5 = null
let bot_set_store_carousel5 = null
let bot_jump_carousel5 = null

let set_vol100_trade_carousel5_cookie = null
let martingale_set_carousel5_cookie = false
let bot_set_carousel5_cookie = null
let bot_set_store_carousel5_cookie = null
let bot_jump_carousel5_cookie = null


let set_vol10_1s_trade_carousel6 = null
let martingale_set_carousel6 = false
let bot_set_carousel6 = null
let bot_set_store_carousel6 = null
let bot_jump_carousel6 = null


let set_vol10_1s_trade_carousel6_cookie = null
let martingale_set_carousel6_cookie = false
let bot_set_carousel6_cookie = null
let bot_set_store_carousel6_cookie = null
let bot_jump_carousel6_cookie = null


let set_vol25_1s_trade_carousel7 = null
let martingale_set_carousel7 = false
let bot_set_carousel7 = null
let bot_set_store_carousel7 = null
let bot_jump_carousel7 = null


let set_vol25_1s_trade_carousel7_cookie = null
let martingale_set_carousel7_cookie = false
let bot_set_carousel7_cookie = null
let bot_set_store_carousel7_cookie = null
let bot_jump_carousel7_cookie = null


let set_vol50_1s_trade_carousel8 = null
let martingale_set_carousel8 = false
let bot_set_carousel8 = null
let bot_set_store_carousel8 = null
let bot_jump_carousel8 = null


let set_vol50_1s_trade_carousel8_cookie = null
let martingale_set_carousel8_cookie = false
let bot_set_carousel8_cookie = null
let bot_set_store_carousel8_cookie = null
let bot_jump_carousel8_cookie = null


let set_vol75_1s_trade_carousel9 = null
let martingale_set_carousel9 = false
let bot_set_carousel9 = null
let bot_set_store_carousel9 = null
let bot_jump_carousel9 = null


let set_vol75_1s_trade_carousel9_cookie = null
let martingale_set_carousel9_cookie = false
let bot_set_carousel9_cookie = null
let bot_set_store_carousel9_cookie = null
let bot_jump_carousel9_cookie = null


let set_vol100_1s_trade_carousel10 = null
let martingale_set_carousel10 = false
let bot_set_carousel10 = null
let bot_set_store_carousel10 = null
let bot_jump_carousel10 = null

let set_vol100_1s_trade_carousel10_cookie = null
let martingale_set_carousel10_cookie = false
let bot_set_carousel10_cookie = null
let bot_set_store_carousel10_cookie = null
let bot_jump_carousel10_cookie = null



let set_vol10_jump_trade_carousel11 = null
let martingale_set_carousel11 = false
let bot_set_carousel11 = null
let bot_set_store_carousel11 = null
let bot_jump_carousel11 = null

let set_vol10_jump_trade_carousel11_cookie = null
let martingale_set_carousel11_cookie = false
let bot_set_carousel11_cookie = null
let bot_set_store_carousel11_cookie = null
let bot_jump_carousel11_cookie = null


let set_vol25_jump_trade_carousel12 = null
let martingale_set_carousel12 = false
let bot_set_carousel12 = null
let bot_set_store_carousel12 = null
let bot_jump_carousel12 = null

let set_vol25_jump_trade_carousel12_cookie = null
let martingale_set_carousel12_cookie = false
let bot_set_carousel12_cookie = null
let bot_set_store_carousel12_cookie = null
let bot_jump_carousel12_cookie = null



let set_vol50_jump_trade_carousel13 = null
let martingale_set_carousel13 = false
let bot_set_carousel13 = null
let bot_set_store_carousel13 = null
let bot_jump_carousel13 = null

let set_vol50_jump_trade_carousel13_cookie = null
let martingale_set_carousel13_cookie = false
let bot_set_carousel13_cookie = null
let bot_set_store_carousel13_cookie = null
let bot_jump_carousel13_cookie = null


let set_vol75_jump_trade_carousel14 = null
let martingale_set_carousel14 = false
let bot_set_carousel14 = null
let bot_set_store_carousel14 = null
let bot_jump_carousel14 = null

let set_vol75_jump_trade_carousel14_cookie = null
let martingale_set_carousel14_cookie = false
let bot_set_carousel14_cookie = null
let bot_set_store_carousel14_cookie = null
let bot_jump_carousel14_cookie = null


let set_vol100_jump_trade_carousel15 = null
let martingale_set_carousel15 = false
let bot_set_carousel15 = null
let bot_set_store_carousel15 = null
let bot_jump_carousel15 = null

let set_vol100_jump_trade_carousel15_cookie = null
let martingale_set_carousel15_cookie = false
let bot_set_carousel15_cookie = null
let bot_set_store_carousel15_cookie = null
let bot_jump_carousel15_cookie = null

let set_vol_bear_trade_carousel16 = null
let martingale_set_carousel16 = false
let bot_set_carousel16 = null
let bot_set_store_carousel16 = null
let bot_jump_carousel16 = null

let set_vol_bear_trade_carousel16_cookie = null
let martingale_set_carousel16_cookie = false
let bot_set_carousel16_cookie = null
let bot_set_store_carousel16_cookie = null
let bot_jump_carousel16_cookie = null


let set_vol_bull_trade_carousel17 = null
let martingale_set_carousel17 = false
let bot_set_carousel17 = null
let bot_set_store_carousel17 = null
let bot_jump_carousel17 = null

let set_vol_bull_trade_carousel17_cookie = null
let martingale_set_carousel17_cookie = false
let bot_set_carousel17_cookie = null
let bot_set_store_carousel17_cookie = null
let bot_jump_carousel17_cookie = null


let set_comp18_trade_carousel18 = null
let martingale_set_carousel18 = false;
let bot_set_carousel18 = null;
let bot_set_store_carousel18 = null;
let bot_jump_carousel18 = null;

let set_comp18_trade_carousel18_cookie = null
let martingale_set_carousel18_cookie = false;
let bot_set_carousel18_cookie = null;
let bot_set_store_carousel18_cookie = null;
let bot_jump_carousel18_cookie = null;


let set_comp19_trade_carousel19 = null
let martingale_set_carousel19 = false;
let bot_set_carousel19 = null;
let bot_set_store_carousel19 = null;
let bot_jump_carousel19 = null;

let set_comp19_trade_carousel19_cookie = null
let martingale_set_carousel19_cookie = false;
let bot_set_carousel19_cookie = null;
let bot_set_store_carousel19_cookie = null;
let bot_jump_carousel19_cookie = null;


let set_comp20_trade_carousel20 = null
let martingale_set_carousel20 = false;
let bot_set_carousel20 = null;
let bot_set_store_carousel20 = null;
let bot_jump_carousel20 = null;

let set_comp20_trade_carousel20_cookie = null
let martingale_set_carousel20_cookie = false;
let bot_set_carousel20_cookie = null;
let bot_set_store_carousel20_cookie = null;
let bot_jump_carousel20_cookie = null;


let message1_local_st = localStorage.getItem('message1')
let message1 = localStorage.getItem('message1') ? localStorage.getItem('message1') : getCookie('message1')


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
        setCookie('updating_balance', data.balance.balance)
        localStorage.setItem('updating_balance', data.balance.balance)
        if (balance_amount) {
            balance_amount.textContent = data.balance.balance;
        }

        if (balance_after_trade_end) {
            balance_after_trade_end.textContent = data.balance.balance
        }

        if (td2_balance) {
            td2_balance.textContent = data.balance.balance
        }
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

                setCookie('initial_balance', authorize_response.authorize.balance)

                setCookie('real_balance', authorize_response.authorize.balance)
                setCookie("real_id", authorize_response.authorize.loginid)
                setCookie("real_icon_usd", true)
                setCookie("demo_icon_usd", false)

                localStorage.setItem('initial_balance', authorize_response.authorize.balance)

                localStorage.setItem('real_balance', authorize_response.authorize.balance)
                localStorage.setItem("real_id", authorize_response.authorize.loginid)
                localStorage.setItem("real_icon_usd", true)
                localStorage.setItem("demo_icon_usd", false)

                let real_balance = localStorage.getItem('real_balance')
                let real_balance_cookie = localStorage.getItem('real_balance')

                if (real_balance && real !== null) {
                    current_balance_fig.textContent = real_balance
                } else if (real_balance_cookie && real_balance_cookie !== null) {
                    current_balance_fig.textContent = real_balance_cookie
                } else {
                    current_balance_fig.textContent = "error"
                }

                let login_id = localStorage.getItem('real_id')
                let login_id_cookie = localStorage.getItem('real_id')

                if (login_id && login_id !== null) {
                    logi_id.textContent = login_id
                } else if (login_id_cookie && login_id_cookie !== null) {
                    logi_id.textContent = login_id_cookie
                } else {
                    logi_id.textContent = login_id
                }



            } else {
                setCookie('initial_balance', authorize_response.authorize.balance)

                setCookie('demo_balance', authorize_response.authorize.balance)
                setCookie('demo_id', authorize_response.authorize.loginid)
                setCookie("real_icon_usd", false)
                setCookie("demo_icon_usd", true)


                localStorage.setItem('initial_balance', authorize_response.authorize.balance)

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
    bot_set_store = localStorage.getItem('bot_set_store')
    bot_jump = localStorage.getItem('bot_jump')

    martingale_set = getCookie('martingale')
    bot_set = getCookie('bot_set')
    bot_set_store = getCookie('bot_set_store')
    bot_jump = getCookie('bot_jump')

    martingale_set_carousel2 = localStorage.getItem('martingale_carousel2')
    bot_set_carousel2 = localStorage.getItem('bot_set_carousel2')
    bot_set_store_carousel2 = localStorage.getItem('bot_set_store_carousel2')
    bot_jump_carousel2 = localStorage.getItem('bot_jump_carousel2')


    martingale_set_carousel2 = getCookie('martingale_carousel2')
    bot_set_carousel2 = getCookie('bot_set_carousel2')
    bot_set_store_carousel2 = getCookie('bot_set_store_carousel2')
    bot_jump_carousel2 = getCookie('bot_jump_carousel2')

    martingale_set_carousel3 = localStorage.getItem('martingale_carousel3')
    bot_set_carousel3 = localStorage.getItem('bot_set_carousel3')
    bot_set_store_carousel3 = localStorage.getItem('bot_set_store_carousel3')
    bot_jump_carousel3 = localStorage.getItem('bot_jump_carousel3')

    martingale_set_carousel3 = getCookie('martingale_carousel3')
    bot_set_carousel3 = getCookie('bot_set_carousel3')
    bot_set_store_carousel3 = getCookie('bot_set_store_carousel3')
    bot_jump_carousel3 = getCookie('bot_jump_carousel3')

    martingale_set_carousel4 = localStorage.getItem('martingale_carousel4')
    bot_set_carousel4 = localStorage.getItem('bot_set_carousel4')
    bot_set_store_carousel4 = localStorage.getItem('bot_set_store_carousel4')
    bot_jump_carousel4 = localStorage.getItem('bot_jump_carousel4')

    martingale_set_carousel4 = getCookie('martingale_carousel4')
    bot_set_carousel4 = getCookie('bot_set_carousel4')
    bot_set_store_carousel4 = getCookie('bot_set_store_carousel4')
    bot_jump_carousel4 = getCookie('bot_jump_carousel4')

    martingale_set_carousel5 = localStorage.getItem('martingale_carousel5')
    bot_set_carousel5 = localStorage.getItem('bot_set_carousel5')
    bot_set_store_carousel5 = localStorage.getItem('bot_set_store_carousel5')
    bot_jump_carousel5 = localStorage.getItem('bot_jump_carousel5')

    martingale_set_carousel5 = getCookie('martingale_carousel5')
    bot_set_carousel5 = getCookie('bot_set_carousel5')
    bot_set_store_carousel5 = getCookie('bot_set_store_carousel5')
    bot_jump_carousel5 = getCookie('bot_jump_carousel5')

    martingale_set_carousel6 = localStorage.getItem('martingale_carousel6')
    bot_set_carousel6 = localStorage.getItem('bot_set_carousel6')
    bot_set_store_carousel6 = localStorage.getItem('bot_set_store_carousel6')
    bot_jump_carousel6 = localStorage.getItem('bot_jump_carousel6')

    martingale_set_carousel6 = getCookie('martingale_carousel6')
    bot_set_carousel6 = getCookie('bot_set_carousel6')
    bot_set_store_carousel6 = getCookie('bot_set_store_carousel6')
    bot_jump_carousel6 = getCookie('bot_jump_carousel6')

    martingale_set_carousel7 = localStorage.getItem('martingale_carousel7')
    bot_set_carousel7 = localStorage.getItem('bot_set_carousel7')
    bot_set_store_carousel7 = localStorage.getItem('bot_set_store_carousel7')
    bot_jump_carousel7 = localStorage.getItem('bot_jump_carousel7')

    martingale_set_carousel7 = getCookie('martingale_carousel7')
    bot_set_carousel7 = getCookie('bot_set_carousel7')
    bot_set_store_carousel7 = getCookie('bot_set_store_carousel7')
    bot_jump_carousel7 = getCookie('bot_jump_carousel7')

    martingale_set_carousel8 = localStorage.getItem('martingale_carousel8')
    bot_set_carousel8 = localStorage.getItem('bot_set_carousel8')
    bot_set_store_carousel8 = localStorage.getItem('bot_set_store_carousel8')
    bot_jump_carousel8 = localStorage.getItem('bot_jump_carousel8')

    martingale_set_carousel8 = getCookie('martingale_carousel8')
    bot_set_carousel8 = getCookie('bot_set_carousel8')
    bot_set_store_carousel8 = getCookie('bot_set_store_carousel8')
    bot_jump_carousel8 = getCookie('bot_jump_carousel8')

    martingale_set_carousel9 = localStorage.getItem('martingale_carousel9')
    bot_set_carousel9 = localStorage.getItem('bot_set_carousel9')
    bot_set_store_carousel9 = localStorage.getItem('bot_set_store_carousel9')
    bot_jump_carousel9 = localStorage.getItem('bot_jump_carousel9')

    martingale_set_carousel9 = getCookie('martingale_carousel9')
    bot_set_carousel9 = getCookie('bot_set_carousel9')
    bot_set_store_carousel9 = getCookie('bot_set_store_carousel9')
    bot_jump_carousel9 = getCookie('bot_jump_carousel9')

    martingale_set_carousel10 = localStorage.getItem('martingale_carousel10')
    bot_set_carousel10 = localStorage.getItem('bot_set_carousel10')
    bot_set_store_carousel10 = localStorage.getItem('bot_set_store_carousel10')
    bot_jump_carousel10 = localStorage.getItem('bot_jump_carousel10')

    martingale_set_carousel10 = getCookie('martingale_carousel10')
    bot_set_carousel10 = getCookie('bot_set_carousel10')
    bot_set_store_carousel10 = getCookie('bot_set_store_carousel10')
    bot_jump_carousel10 = getCookie('bot_jump_carousel10')

    martingale_set_carousel11 = localStorage.getItem('martingale_carousel11')
    bot_set_carousel11 = localStorage.getItem('bot_set_carousel11')
    bot_set_store_carousel11 = localStorage.getItem('bot_set_store_carousel11')
    bot_jump_carousel11 = localStorage.getItem('bot_jump_carousel11')

    martingale_set_carousel11 = getCookie('martingale_carousel11')
    bot_set_carousel11 = getCookie('bot_set_carousel11')
    bot_set_store_carousel11 = getCookie('bot_set_store_carousel11')
    bot_jump_carousel11 = getCookie('bot_jump_carousel11')

    martingale_set_carousel12 = localStorage.getItem('martingale_carousel12')
    bot_set_carousel12 = localStorage.getItem('bot_set_carousel12')
    bot_set_store_carousel12 = localStorage.getItem('bot_set_store_carousel12')
    bot_jump_carousel12 = localStorage.getItem('bot_jump_carousel12')

    martingale_set_carousel12 = getCookie('martingale_carousel12')
    bot_set_carousel12 = getCookie('bot_set_carousel12')
    bot_set_store_carousel12 = getCookie('bot_set_store_carousel12')
    bot_jump_carousel12 = getCookie('bot_jump_carousel12')

    martingale_set_carousel13 = localStorage.getItem('martingale_carousel13')
    bot_set_carousel13 = localStorage.getItem('bot_set_carousel13')
    bot_set_store_carousel13 = localStorage.getItem('bot_set_store_carousel13')
    bot_jump_carousel13 = localStorage.getItem('bot_jump_carousel13')

    martingale_set_carousel13 = getCookie('martingale_carousel13')
    bot_set_carousel13 = getCookie('bot_set_carousel13')
    bot_set_store_carousel13 = getCookie('bot_set_store_carousel13')
    bot_jump_carousel13 = getCookie('bot_jump_carousel13')


    martingale_set_carousel14 = localStorage.getItem('martingale_carousel14')
    bot_set_carousel14 = localStorage.getItem('bot_set_carousel14')
    bot_set_store_carousel14 = localStorage.getItem('bot_set_store_carousel14')
    bot_jump_carousel14 = localStorage.getItem('bot_jump_carousel14')

    martingale_set_carousel14 = getCookie('martingale_carousel14')
    bot_set_carousel14 = getCookie('bot_set_carousel14')
    bot_set_store_carousel14 = getCookie('bot_set_store_carousel14')
    bot_jump_carousel14 = getCookie('bot_jump_carousel14')

    martingale_set_carousel15 = localStorage.getItem('martingale_carousel15')
    bot_set_carousel15 = localStorage.getItem('bot_set_carousel15')
    bot_set_store_carousel15 = localStorage.getItem('bot_set_store_carousel15')
    bot_jump_carousel15 = localStorage.getItem('bot_jump_carousel15')

    martingale_set_carousel15 = getCookie('martingale_carousel15')
    bot_set_carousel15 = getCookie('bot_set_carousel15')
    bot_set_store_carousel15 = getCookie('bot_set_store_carousel15')
    bot_jump_carousel15 = getCookie('bot_jump_carousel15')


    martingale_set_carousel16 = localStorage.getItem('martingale_carousel16')
    bot_set_carousel16 = localStorage.getItem('bot_set_carousel16')
    bot_set_store_carousel16 = localStorage.getItem('bot_set_store_carousel16')
    bot_jump_carousel16 = localStorage.getItem('bot_jump_carousel16')

    martingale_set_carousel16 = getCookie('martingale_carousel16')
    bot_set_carousel16 = getCookie('bot_set_carousel16')
    bot_set_store_carousel16 = getCookie('bot_set_store_carousel16')
    bot_jump_carousel16 = getCookie('bot_jump_carousel16')

    martingale_set_carousel17 = localStorage.getItem('martingale_carousel17');
    bot_set_carousel17 = localStorage.getItem('bot_set_carousel17');
    bot_set_store_carousel17 = localStorage.getItem('bot_set_store_carousel17');
    bot_jump_carousel17 = localStorage.getItem('bot_jump_carousel17');

    martingale_set_carousel17 = getCookie('martingale_carousel17');
    bot_set_carousel17 = getCookie('bot_set_carousel17');
    bot_set_store_carousel17 = getCookie('bot_set_store_carousel17');
    bot_jump_carousel17 = getCookie('bot_jump_carousel17');

    martingale_set_carousel18 = localStorage.getItem('martingale_carousel18');
    bot_set_carousel18 = localStorage.getItem('bot_set_carousel18');
    bot_set_store_carousel18 = localStorage.getItem('bot_set_store_carousel18');
    bot_jump_carousel18 = localStorage.getItem('bot_jump_carousel18');

    martingale_set_carousel18 = getCookie('martingale_carousel18');
    bot_set_carousel18 = getCookie('bot_set_carousel18');
    bot_set_store_carousel18 = getCookie('bot_set_store_carousel18');
    bot_jump_carousel18 = getCookie('bot_jump_carousel18');

    martingale_set_carousel19 = localStorage.getItem('martingale_carousel19');
    bot_set_carousel19 = localStorage.getItem('bot_set_carousel19');
    bot_set_store_carousel19 = localStorage.getItem('bot_set_store_carousel19');
    bot_jump_carousel19 = localStorage.getItem('bot_jump_carousel19');

    martingale_set_carousel19 = getCookie('martingale_carousel19');
    bot_set_carousel19 = getCookie('bot_set_carousel19');
    bot_set_store_carousel19 = getCookie('bot_set_store_carousel19');
    bot_jump_carousel19 = getCookie('bot_jump_carousel19');

    martingale_set_carousel20 = localStorage.getItem('martingale_carousel20');
    bot_set_carousel20 = localStorage.getItem('bot_set_carousel20');
    bot_set_store_carousel20 = localStorage.getItem('bot_set_store_carousel20');
    bot_jump_carousel20 = localStorage.getItem('bot_jump_carousel20');

    martingale_set_carousel20 = getCookie('martingale_carousel20');
    bot_set_carousel20 = getCookie('bot_set_carousel20');
    bot_set_store_carousel20 = getCookie('bot_set_store_carousel20');
    bot_jump_carousel20 = getCookie('bot_jump_carousel20');

    // Get the existing values of the cookies and local storage items

    let symbol_vol_text_cookie = getCookie('symbol_vol_text_cookie');
    let contract_text_local_st = localStorage.getItem('contract_text_local_st');
    let symbol_vol_text_local_st = localStorage.getItem('symbol_vol_text_local_st');

    set_vol10_trade = localStorage.getItem("set_vol10_trade")
    set_vol10_trade_cookie = getCookie("set_vol10_trade")

    set_vol25_trade_carousel2 = localStorage.getItem("set_vol25_trade")
    set_vol25_trade_carousel2_cookie = getCookie("set_vol25_trade")

    set_vol50_trade_carousel3 = localStorage.getItem("set_vol50_trade")
    set_vol50_trade_carousel3_cookie = getCookie("set_vol50_trade")

    set_vol75_trade_carousel4 = localStorage.getItem("set_vol75_trade")
    set_vol75_trade_carousel4_cookie = getCookie("set_vol75_trade")

    set_vol100_trade_carousel5 = localStorage.getItem("set_vol100_trade")
    set_vol100_trade_carousel5_cookie = getCookie("set_vol100_trade")

    set_vol10_1s_trade_carousel6 = localStorage.getItem("set_vol10_1s_trade")
    set_vol10_1s_trade_carousel6_cookie = getCookie("set_vol10_1s_trade")

    set_vol25_1s_trade_carousel7 = localStorage.getItem("set_vol25_1s_trade")
    set_vol25_1s_trade_carousel7_cookie = getCookie("set_vol25_1s_trade")

    set_vol50_1s_trade_carousel8 = localStorage.getItem("set_vol50_1s_trade")
    set_vol50_1s_trade_carousel8_cookie = getCookie("set_vol50_1s_trade")

    set_vol75_1s_trade_carousel9 = localStorage.getItem("set_vol75_1s_trade")
    set_vol75_1s_trade_carousel9_cookie = getCookie("set_vol75_1s_trade")

    set_vol100_1s_trade_carousel10 = localStorage.getItem("set_vol100_1s_trade")
    set_vol100_1s_trade_carousel10_cookie = getCookie("set_vol100_1s_trade")

    set_vol10_jump_trade_carousel11 = localStorage.getItem("set_vol10_jump_trade")
    set_vol10_jump_trade_carousel11_cookie = getCookie("set_vol10_jump_trade")

    set_vol25_jump_trade_carousel12 = localStorage.getItem("set_vol25_jump_trade")
    set_vol25_jump_trade_carousel12_cookie = getCookie("set_vol25_jump_trade")

    set_vol50_jump_trade_carousel13 = localStorage.getItem("set_vol50_jump_trade")
    set_vol50_jump_trade_carousel13_cookie = getCookie("set_vol50_jump_trade")

    set_vol75_jump_trade_carousel14 = localStorage.getItem("set_vol75_jump_trade")
    set_vol75_jump_trade_carousel14_cookie = getCookie("set_vol75_jump_trade")

    set_vol100_jump_trade_carousel15 = localStorage.getItem("set_vol100_jump_trade")
    set_vol100_jump_trade_carousel15_cookie = getCookie("set_vol100_jump_trade")

    set_vol_bear_trade_carousel16 = localStorage.getItem("set_vol_bear_trade")
    set_vol_bear_trade_carousel16_cookie = getCookie("set_vol_bear_trade")

    set_vol_bull_trade_carousel17 = localStorage.getItem("set_vol_bull_trade")
    set_vol_bull_trade_carousel17_cookie = getCookie("set_vol_bull_trade")

    set_comp18_trade_carousel18 = localStorage.getItem('set_comp18_trade')
    set_comp18_trade_carousel18_cookie = localStorage.getItem('set_com18_trade')

    set_comp19_trade_carousel19 = localStorage.getItem('set_comp19_trade')
    set_comp19_trade_carousel19_cookie = localStorage.getItem('set_comp19_trade')

    set_comp20_trade_carousel20 = localStorage.getItem('set_comp20_trade')
    set_comp20_trade_carousel20_cookie = localStorage.getItem('set_comp20_trade')


    // Set the cookies and local storage items if they don't already exist
    if (!contract_text_cookie) {
        setCookie('contract_text_cookie', "Matches/Differs", 7);
        localStorage.setItem('contract_text_local_st', "Matches/Differs", 7);
    }
    if (!symbol_vol_text_cookie) {
        setCookie('symbol_vol_text_cookie', "Volatility 10 Index", 7);
        localStorage.setItem('symbol_vol_text_local_st', "Volatility 10 Index", 7);
    }
    if (!contract_text_local_st) {
        setCookie('contract_text_local_cookie', "Matches/Differs");
        localStorage.setItem('contract_text_local_st', "Matches/Differs");
    }
    if (!symbol_vol_text_local_st && !symbol_vol_text_cookie) {
        setCookie('symbol_vol_text_local_cookie', "Volatility 10 Index");
        localStorage.setItem('symbol_vol_text_local_st', "Volatility 10 Index");
    }
    if (!stake_amount_default) {
        localStorage.setItem('stake_amount_default', document.getElementById('stake_amount_input').value);
        setCookie('stake_amount_default', document.getElementById('stake_amount_input').value);
    }


    if (!set_vol10_trade && !set_vol10_trade_cookie) {
        localStorage.setItem('set_vol10_trade', 'vol10_trade')
        setCookie('set_vol10_trade', 'vol10_trade')
    }

    if (!martingale_set && !martingale_set_cookie) {
        setCookie('martingale', 'false')
        localStorage.setItem('martingale', 'false')
    }

    if (!bot_set && !bot_set_cookie) {
        setCookie('bot_set', '2')
        localStorage.setItem('bot_set', '2')
    }

    if (!bot_set_store && !bot_set_store_cookie) {
        setCookie('bot_set_store', '2')
        localStorage.setItem('bot_set_store', '2')
    }

    if (!bot_jump && !bot_jump_cookie) {
        setCookie('bot_jump', 0)
        localStorage.setItem('bot_jump', 0)
    }


    if (!set_vol25_trade_carousel2 && !set_vol25_trade_carousel2_cookie) {
        localStorage.setItem('set_vol25_trade', 'vol25_trade')
        setCookie('set_vol25_trade', 'vol25_trade')
    }

    if (!martingale_set_carousel2 && !martingale_set_carousel2_cookie) {
        setCookie('martingale_carousel2', 'false')
        localStorage.setItem('martingale_carousel2', 'false')
    }

    if (!bot_set_carousel2 && !bot_set_carousel2_cookie) {
        setCookie('bot_set_carousel2', '2')
        localStorage.setItem('bot_set_carousel2', '2')
    }

    if (!bot_set_store_carousel2 && !bot_set_store_carousel2_cookie) {
        setCookie('bot_set_store_carousel2', '2')
        localStorage.setItem('bot_set_store_carousel2', '2')
    }

    if (!bot_jump_carousel2 && !bot_jump_carousel2_cookie) {
        setCookie('bot_jump_carousel2', 0)
        localStorage.setItem('bot_jump_carousel2', 0)
    }




    if (!set_vol50_trade_carousel3 && !set_vol50_trade_carousel3_cookie) {
        localStorage.setItem('set_vol50_trade', 'vol50_trade')
        setCookie('set_vol50_trade', 'vol50_trade')
    }

    if (!martingale_set_carousel3 && !martingale_set_carousel3_cookie) {
        setCookie('martingale_carousel3', 'false')
        localStorage.setItem('martingale_carousel3', 'false')
    }

    if (!bot_set_carousel3 && !bot_set_carousel3_cookie) {
        setCookie('bot_set_carousel3', '2')
        localStorage.setItem('bot_set_carousel3', '2')
    }

    if (!bot_set_store_carousel3 && !bot_set_store_carousel3_cookie) {
        setCookie('bot_set_store_carousel3', '2')
        localStorage.setItem('bot_set_store_carousel3', '2')
    }

    if (!bot_jump_carousel3 && !bot_jump_carousel3_cookie) {
        setCookie('bot_jump_carousel3', 0)
        localStorage.setItem('bot_jump_carousel3', 0)
    }



    if (!set_vol75_trade_carousel4 && !set_vol75_trade_carousel4_cookie) {
        localStorage.setItem('set_vol75_trade', 'vol75_trade')
        setCookie('set_vol75_trade', 'vol75_trade')
    }

    if (!martingale_set_carousel4 && !martingale_set_carousel4_cookie) {
        setCookie('martingale_carousel4', 'false')
        localStorage.setItem('martingale_carousel4', 'false')
    }

    if (!bot_set_carousel4 && !bot_set_carousel4_cookie) {
        setCookie('bot_set_carousel4', '2')
        localStorage.setItem('bot_set_carousel4', '2')
    }

    if (!bot_set_store_carousel4 && !bot_set_store_carousel4_cookie) {
        setCookie('bot_set_store_carousel4', '2')
        localStorage.setItem('bot_set_store_carousel4', '2')
    }

    if (!bot_jump_carousel4 && !bot_jump_carousel4_cookie) {
        setCookie('bot_jump_carousel4', 0)
        localStorage.setItem('bot_jump_carousel4', 0)
    }



    if (!set_vol100_trade_carousel5 && !set_vol100_trade_carousel5_cookie) {
        localStorage.setItem('set_vol100_trade', 'vol100_trade')
        setCookie('set_vol100_trade', 'vol100_trade')
    }

    if (!martingale_set_carousel5 && !martingale_set_carousel5_cookie) {
        setCookie('martingale_carousel5', 'false')
        localStorage.setItem('martingale_carousel5', 'false')
    }

    if (!bot_set_carousel5 && !bot_set_carousel5_cookie) {
        setCookie('bot_set_carousel5', '2')
        localStorage.setItem('bot_set_carousel5', '2')
    }

    if (!bot_set_store_carousel5 && !bot_set_store_carousel5_cookie) {
        setCookie('bot_set_store_carousel5', '2')
        localStorage.setItem('bot_set_store_carousel5', '2')
    }

    if (!bot_jump_carousel5 && !bot_jump_carousel5_cookie) {
        setCookie('bot_jump_carousel5', 0)
        localStorage.setItem('bot_jump_carousel5', 0)
    }



    if (!set_vol10_1s_trade_carousel6 && !set_vol10_1s_trade_carousel6_cookie) {
        localStorage.setItem('set_vol10_1s_trade', 'vol10_1s_trade')
        setCookie('set_vol10_1s_trade', 'vol10_1s_trade')
    }

    if (!martingale_set_carousel6 && !martingale_set_carousel6_cookie) {
        setCookie('martingale_carousel6', 'false')
        localStorage.setItem('martingale_carousel6', 'false')
    }

    if (!bot_set_carousel6 && !bot_set_carousel6_cookie) {
        setCookie('bot_set_carousel6', '2')
        localStorage.setItem('bot_set_carousel6', '2')
    }

    if (!bot_set_store_carousel6 && !bot_set_store_carousel6_cookie) {
        setCookie('bot_set_store_carousel6', '2')
        localStorage.setItem('bot_set_store_carousel6', '2')
    }

    if (!bot_jump_carousel6 && !bot_jump_carousel6_cookie) {
        setCookie('bot_jump_carousel6', 0)
        localStorage.setItem('bot_jump_carousel6', 0)
    }




    if (!set_vol25_1s_trade_carousel7 && !set_vol25_1s_trade_carousel7_cookie) {
        localStorage.setItem('set_vol25_1s_trade', 'vol25_1s_trade')
        setCookie('set_vol25_1s_trade', 'vol25_1s_trade')
    }

    if (!martingale_set_carousel7 && !martingale_set_carousel7_cookie) {
        setCookie('martingale_carousel7', 'false')
        localStorage.setItem('martingale_carousel7', 'false')
    }

    if (!bot_set_carousel7 && !bot_set_carousel7_cookie) {
        setCookie('bot_set_carousel7', '2')
        localStorage.setItem('bot_set_carousel7', '2')
    }

    if (!bot_set_store_carousel7 && !bot_set_store_carousel7_cookie) {
        setCookie('bot_set_store_carousel7', '2')
        localStorage.setItem('bot_set_store_carousel7', '2')
    }

    if (!bot_jump_carousel7 && !bot_jump_carousel7_cookie) {
        setCookie('bot_jump_carousel7', 0)
        localStorage.setItem('bot_jump_carousel7', 0)
    }



    if (!set_vol50_1s_trade_carousel8 && !set_vol50_1s_trade_carousel8_cookie) {
        localStorage.setItem('set_vol50_1s_trade', 'vol50_1s_trade')
        setCookie('set_vol50_1s_trade', 'vol50_1s_trade')
    }

    if (!martingale_set_carousel8 && !martingale_set_carousel8_cookie) {
        setCookie('martingale_carousel8', 'false')
        localStorage.setItem('martingale_carousel8', 'false')
    }

    if (!bot_set_carousel8 && !bot_set_carousel8_cookie) {
        setCookie('bot_set_carousel8', '2')
        localStorage.setItem('bot_set_carousel8', '2')
    }

    if (!bot_set_store_carousel8 && !bot_set_store_carousel8_cookie) {
        setCookie('bot_set_store_carousel8', '2')
        localStorage.setItem('bot_set_store_carousel8', '2')
    }

    if (!bot_jump_carousel8 && !bot_jump_carousel8_cookie) {
        setCookie('bot_jump_carousel8', 0)
        localStorage.setItem('bot_jump_carousel8', 0)
    }



    if (!set_vol75_1s_trade_carousel9 && !set_vol75_1s_trade_carousel9_cookie) {
        localStorage.setItem('set_vol75_1s_trade', 'vol75_1s_trade')
        setCookie('set_vol75_1s_trade', 'vol75_1s_trade')
    }

    if (!martingale_set_carousel9 && !martingale_set_carousel9_cookie) {
        setCookie('martingale_carousel9', 'false')
        localStorage.setItem('martingale_carousel9', 'false')
    }

    if (!bot_set_carousel9 && !bot_set_carousel9_cookie) {
        setCookie('bot_set_carousel9', '2')
        localStorage.setItem('bot_set_carousel9', '2')
    }

    if (!bot_set_store_carousel9 && !bot_set_store_carousel9_cookie) {
        setCookie('bot_set_store_carousel9', '2')
        localStorage.setItem('bot_set_store_carousel9', '2')
    }

    if (!bot_jump_carousel9 && !bot_jump_carousel9_cookie) {
        setCookie('bot_jump_carousel9', 0)
        localStorage.setItem('bot_jump_carousel9', 0)
    }


    if (!set_vol100_1s_trade_carousel10 && !set_vol100_1s_trade_carousel10_cookie) {
        localStorage.setItem('set_vol100_1s_trade', 'vol100_1s_trade')
        setCookie('set_vol100_1s_trade', 'vol100_1s_trade')
    }

    if (!martingale_set_carousel10 && !martingale_set_carousel10_cookie) {
        setCookie('martingale_carousel10', 'false')
        localStorage.setItem('martingale_carousel10', 'false')
    }

    if (!bot_set_carousel10 && !bot_set_carousel10_cookie) {
        setCookie('bot_set_carousel10', '2')
        localStorage.setItem('bot_set_carousel10', '2')
    }

    if (!bot_set_store_carousel10 && !bot_set_store_carousel10_cookie) {
        setCookie('bot_set_store_carousel10', '2')
        localStorage.setItem('bot_set_store_carousel10', '2')
    }

    if (!bot_jump_carousel10 && !bot_jump_carousel10_cookie) {
        setCookie('bot_jump_carousel10', 0)
        localStorage.setItem('bot_jump_carousel10', 0)
    }



    if (!set_vol10_jump_trade_carousel11 && !set_vol10_jump_trade_carousel11_cookie) {
        localStorage.setItem('set_vol10_jump_trade', 'vol10_jump_trade')
        setCookie('set_vol10_jump_trade', 'vol10_jump_trade')
    }

    if (!martingale_set_carousel11 && !martingale_set_carousel11_cookie) {
        setCookie('martingale_carousel11', 'false')
        localStorage.setItem('martingale_carousel11', 'false')
    }

    if (!bot_set_carousel11 && !bot_set_carousel11_cookie) {
        setCookie('bot_set_carousel11', '2')
        localStorage.setItem('bot_set_carousel11', '2')
    }

    if (!bot_set_store_carousel11 && !bot_set_store_carousel11_cookie) {
        setCookie('bot_set_store_carousel11', '2')
        localStorage.setItem('bot_set_store_carousel11', '2')
    }

    if (!bot_jump_carousel11 && !bot_jump_carousel11_cookie) {
        setCookie('bot_jump_carousel11', 0)
        localStorage.setItem('bot_jump_carousel11', 0)
    }



    if (!set_vol25_jump_trade_carousel12 && !set_vol25_jump_trade_carousel12_cookie) {
        localStorage.setItem('set_vol25_jump_trade', 'vol25_jump_trade')
        setCookie('set_vol25_jump_trade', 'vol25_jump_trade')
    }

    if (!martingale_set_carousel12 && !martingale_set_carousel12_cookie) {
        setCookie('martingale_carousel12', 'false')
        localStorage.setItem('martingale_carousel12', 'false')
    }

    if (!bot_set_carousel12 && !bot_set_carousel12_cookie) {
        setCookie('bot_set_carousel12', '2')
        localStorage.setItem('bot_set_carousel12', '2')
    }

    if (!bot_set_store_carousel12 && !bot_set_store_carousel12_cookie) {
        setCookie('bot_set_store_carousel12', '2')
        localStorage.setItem('bot_set_store_carousel12', '2')
    }

    if (!bot_jump_carousel12 && !bot_jump_carousel12_cookie) {
        setCookie('bot_jump_carousel12', 0)
        localStorage.setItem('bot_jump_carousel12', 0)
    }



    if (!set_vol50_jump_trade_carousel13 && !set_vol50_jump_trade_carousel13_cookie) {
        localStorage.setItem('set_vol50_jump_trade', 'vol50_jump_trade')
        setCookie('set_vol50_jump_trade', 'vol50_jump_trade')
    }

    if (!martingale_set_carousel13 && !martingale_set_carousel13_cookie) {
        setCookie('martingale_carousel13', 'false')
        localStorage.setItem('martingale_carousel13', 'false')
    }

    if (!bot_set_carousel13 && !bot_set_carousel13_cookie) {
        setCookie('bot_set_carousel13', '2')
        localStorage.setItem('bot_set_carousel13', '2')
    }

    if (!bot_set_store_carousel13 && !bot_set_store_carousel13_cookie) {
        setCookie('bot_set_store_carousel13', '2')
        localStorage.setItem('bot_set_store_carousel13', '2')
    }

    if (!bot_jump_carousel13 && !bot_jump_carousel13_cookie) {
        setCookie('bot_jump_carousel13', 0)
        localStorage.setItem('bot_jump_carousel13', 0)
    }



    if (!set_vol75_jump_trade_carousel14 && !set_vol75_jump_trade_carousel14_cookie) {
        localStorage.setItem('set_vol75_jump_trade', 'vol75_jump_trade')
        setCookie('set_vol75_jump_trade', 'vol75_jump_trade')
    }

    if (!martingale_set_carousel14 && !martingale_set_carousel14_cookie) {
        setCookie('martingale_carousel14', 'false')
        localStorage.setItem('martingale_carousel14', 'false')
    }

    if (!bot_set_carousel14 && !bot_set_carousel14_cookie) {
        setCookie('bot_set_carousel14', '2')
        localStorage.setItem('bot_set_carousel14', '2')
    }

    if (!bot_set_store_carousel14 && !bot_set_store_carousel14_cookie) {
        setCookie('bot_set_store_carousel14', '2')
        localStorage.setItem('bot_set_store_carousel14', '2')
    }

    if (!bot_jump_carousel14 && !bot_jump_carousel14_cookie) {
        setCookie('bot_jump_carousel14', 0)
        localStorage.setItem('bot_jump_carousel14', 0)
    }




    if (!set_vol100_jump_trade_carousel15 && !set_vol100_jump_trade_carousel15_cookie) {
        localStorage.setItem('set_vol100_jump_trade', 'vol100_jump_trade')
        setCookie('set_vol100_jump_trade', 'vol100_jump_trade')
    }

    if (!martingale_set_carousel15 && !martingale_set_carousel15_cookie) {
        setCookie('martingale_carousel15', 'false')
        localStorage.setItem('martingale_carousel15', 'false')
    }

    if (!bot_set_carousel15 && !bot_set_carousel15_cookie) {
        setCookie('bot_set_carousel15', '2')
        localStorage.setItem('bot_set_carousel15', '2')
    }

    if (!bot_set_store_carousel15 && !bot_set_store_carousel15_cookie) {
        setCookie('bot_set_store_carousel15', '2')
        localStorage.setItem('bot_set_store_carousel15', '2')
    }

    if (!bot_jump_carousel15 && !bot_jump_carousel15_cookie) {
        setCookie('bot_jump_carousel15', 0)
        localStorage.setItem('bot_jump_carousel15', 0)
    }




    if (!set_vol_bear_trade_carousel16 && !set_vol_bear_trade_carousel16_cookie) {
        localStorage.setItem('set_vol_bear_trade', 'vol_bear_trade')
        setCookie('set_vol_bear_trade', 'vol_bear_trade')
    }

    if (!martingale_set_carousel16 && !martingale_set_carousel16_cookie) {
        setCookie('martingale_carousel16', 'false')
        localStorage.setItem('martingale_carousel16', 'false')
    }

    if (!bot_set_carousel16 && !bot_set_carousel16_cookie) {
        setCookie('bot_set_carousel16', '2')
        localStorage.setItem('bot_set_carousel16', '2')
    }

    if (!bot_set_store_carousel16 && !bot_set_store_carousel16_cookie) {
        setCookie('bot_set_store_carousel16', '2')
        localStorage.setItem('bot_set_store_carousel16', '2')
    }

    if (!bot_jump_carousel16 && !bot_jump_carousel16_cookie) {
        setCookie('bot_jump_carousel16', 0)
        localStorage.setItem('bot_jump_carousel16', 0)
    }



    if (!set_vol_bull_trade_carousel17 && !set_vol_bull_trade_carousel17_cookie) {
        localStorage.setItem('set_vol_bull_trade', 'vol_bull_trade')
        setCookie('set_vol_bull_trade', 'vol_bull_trade')
    }

    if (!martingale_set_carousel17 && !martingale_set_carousel17_cookie) {
        setCookie('martingale_carousel17', 'false');
        localStorage.setItem('martingale_carousel17', 'false');
    }

    if (!bot_set_carousel17 && !bot_set_carousel17_cookie) {
        setCookie('bot_set_carousel17', '2');
        localStorage.setItem('bot_set_carousel17', '2');
    }

    if (!bot_set_store_carousel17 && !bot_set_store_carousel17_cookie) {
        setCookie('bot_set_store_carousel17', '2');
        localStorage.setItem('bot_set_store_carousel17', '2');
    }

    if (!bot_jump_carousel17 && !bot_jump_carousel17_cookie) {
        setCookie('bot_jump_carousel17', 0);
        localStorage.setItem('bot_jump_carousel17', 0);
    }



    // Carousel 18

    if (!set_comp18_trade_carousel18 && !set_comp18_trade_carousel18_cookie) {
        setCookie('set_vol_comp18_trade', 'vol_comp18_trade')
        localStorage.setItem('set_vol_comp18_trade', 'vol_comp18_trade')
    }

    if (!martingale_set_carousel18 && !martingale_set_carousel18_cookie) {
        setCookie('martingale_carousel18', 'false');
        localStorage.setItem('martingale_carousel18', 'false');
    }

    if (!bot_set_carousel18 && !bot_set_carousel18_cookie) {
        setCookie('bot_set_carousel18', '2');
        localStorage.setItem('bot_set_carousel18', '2');
    }

    if (!bot_set_store_carousel18 && !bot_set_store_carousel18_cookie) {
        setCookie('bot_set_store_carousel18', '2');
        localStorage.setItem('bot_set_store_carousel18', '2');
    }

    if (!bot_jump_carousel18 && !bot_jump_carousel18_cookie) {
        setCookie('bot_jump_carousel18', 0);
        localStorage.setItem('bot_jump_carousel18', 0);
    }



    // Carousel 19
    if (!set_comp19_trade_carousel19 && !set_comp19_trade_carousel19_cookie) {
        setCookie('set_vol_comp19_trade', 'vol_comp19_trade')
        localStorage.setItem('set_vol_comp19_trade', 'vol_comp19_trade')
    }

    if (!martingale_set_carousel19 && !martingale_set_carousel19_cookie) {
        setCookie('martingale_carousel19', 'false');
        localStorage.setItem('martingale_carousel19', 'false');
    }

    if (!bot_set_carousel19 && !bot_set_carousel19_cookie) {
        setCookie('bot_set_carousel19', '2');
        localStorage.setItem('bot_set_carousel19', '2');
    }

    if (!bot_set_store_carousel19 && !bot_set_store_carousel19_cookie) {
        setCookie('bot_set_store_carousel19', '2');
        localStorage.setItem('bot_set_store_carousel19', '2');
    }

    if (!bot_jump_carousel19 && !bot_jump_carousel19_cookie) {
        setCookie('bot_jump_carousel19', 0);
        localStorage.setItem('bot_jump_carousel19', 0);
    }

    // Carousel 20
    if (!set_comp20_trade_carousel20 && !set_comp20_trade_carousel20_cookie) {
        setCookie('set_vol_comp20_trade', 'vol_comp20_trade')
        localStorage.setItem('set_vol_comp20_trade', 'vol_comp20_trade')
    }

    if (!martingale_set_carousel20 && !martingale_set_carousel20_cookie) {
        setCookie('martingale_carousel20', 'false');
        localStorage.setItem('martingale_carousel20', 'false');
    }

    if (!bot_set_carousel20 && !bot_set_carousel20_cookie) {
        setCookie('bot_set_carousel20', '2');
        localStorage.setItem('bot_set_carousel20', '2');
    }

    if (!bot_set_store_carousel20 && !bot_set_store_carousel20_cookie) {
        setCookie('bot_set_store_carousel20', '2');
        localStorage.setItem('bot_set_store_carousel20', '2');
    }

    if (!bot_jump_carousel20 && !bot_jump_carousel20_cookie) {
        setCookie('bot_jump_carousel20', 0);
        localStorage.setItem('bot_jump_carousel20', 0);
    }

    localStorage.setItem('bot_state', 'stop_bot');
    setCookie('bot_state', 'stop_bot');

    localStorage.setItem('bots_state', 'stop_bots');
    setCookie('bots_state', 'stop_bots');

    localStorage.setItem('bot_state_carousel2', 'stop_bot');
    setCookie('bot_state_carousel2', 'stop_bot');

    localStorage.setItem('bots_state_carousel2', 'stop_bots');
    setCookie('bots_state_carousel2', 'stop_bots');

    localStorage.setItem('bot_state_carousel3', 'stop_bot');
    setCookie('bot_state_carousel3', 'stop_bot');

    localStorage.setItem('bots_state_carousel3', 'stop_bots');
    setCookie('bots_state_carousel3', 'stop_bots');

    localStorage.setItem('bot_state_carousel4', 'stop_bot');
    setCookie('bot_state_carousel4', 'stop_bot');

    localStorage.setItem('bots_state_carousel4', 'stop_bots');
    setCookie('bots_state_carousel4', 'stop_bots');

    localStorage.setItem('bot_state_carousel5', 'stop_bot');
    setCookie('bot_state_carousel5', 'stop_bot');

    localStorage.setItem('bots_state_carousel5', 'stop_bots');
    setCookie('bots_state_carousel5', 'stop_bots');

    localStorage.setItem('bot_state_carousel6', 'stop_bot');
    setCookie('bot_state_carousel6', 'stop_bot');

    localStorage.setItem('bots_state_carousel6', 'stop_bots');
    setCookie('bots_state_carousel6', 'stop_bots');

    localStorage.setItem('bot_state_carousel7', 'stop_bot');
    setCookie('bot_state_carousel7', 'stop_bot');

    localStorage.setItem('bots_state_carousel7', 'stop_bots');
    setCookie('bots_state_carousel7', 'stop_bots');

    localStorage.setItem('bot_state_carousel8', 'stop_bot');
    setCookie('bot_state_carousel8', 'stop_bot');

    localStorage.setItem('bots_state_carousel8', 'stop_bots');
    setCookie('bots_state_carousel8', 'stop_bots');

    localStorage.setItem('bot_state_carousel9', 'stop_bot');
    setCookie('bot_state_carousel9', 'stop_bot');

    localStorage.setItem('bots_state_carousel9', 'stop_bots');
    setCookie('bots_state_carousel9', 'stop_bots');

    localStorage.setItem('bot_state_carousel10', 'stop_bot');
    setCookie('bot_state_carousel10', 'stop_bot');

    localStorage.setItem('bots_state_carousel10', 'stop_bots');
    setCookie('bots_state_carousel10', 'stop_bots');

    localStorage.setItem('bot_state_carousel11', 'stop_bot');
    setCookie('bot_state_carousel11', 'stop_bot');

    localStorage.setItem('bots_state_carousel11', 'stop_bots');
    setCookie('bots_state_carousel11', 'stop_bots');

    localStorage.setItem('bot_state_carousel12', 'stop_bot');
    setCookie('bot_state_carousel12', 'stop_bot');

    localStorage.setItem('bots_state_carousel12', 'stop_bots');
    setCookie('bots_state_carousel12', 'stop_bots');

    localStorage.setItem('bot_state_carousel13', 'stop_bot');
    setCookie('bot_state_carousel13', 'stop_bot');

    localStorage.setItem('bots_state_carousel13', 'stop_bots');
    setCookie('bots_state_carousel13', 'stop_bots');

    localStorage.setItem('bot_state_carousel14', 'stop_bot');
    setCookie('bot_state_carousel14', 'stop_bot');

    localStorage.setItem('bots_state_carousel14', 'stop_bots');
    setCookie('bots_state_carousel14', 'stop_bots');

    localStorage.setItem('bot_state_carousel15', 'stop_bot');
    setCookie('bot_state_carousel15', 'stop_bot');

    localStorage.setItem('bots_state_carousel15', 'stop_bots');
    setCookie('bots_state_carousel15', 'stop_bots');

    localStorage.setItem('bot_state_carousel16', 'stop_bot');
    setCookie('bot_state_carousel16', 'stop_bot');

    localStorage.setItem('bots_state_carousel16', 'stop_bots');
    setCookie('bots_state_carousel16', 'stop_bots');

    localStorage.setItem('bot_state_carousel17', 'stop_bot');
    setCookie('bot_state_carousel17', 'stop_bot');

    localStorage.setItem('bots_state_carousel17', 'stop_bots');
    setCookie('bots_state_carousel17', 'stop_bots');

    localStorage.setItem('bot_state_carousel18', 'stop_bot');
    setCookie('bot_state_carousel18', 'stop_bot');

    localStorage.setItem('bots_state_carousel18', 'stop_bots');
    setCookie('bots_state_carousel18', 'stop_bots');

    localStorage.setItem('bot_state_carousel19', 'stop_bot');
    setCookie('bot_state_carousel19', 'stop_bot');

    localStorage.setItem('bots_state_carousel19', 'stop_bots');
    setCookie('bots_state_carousel19', 'stop_bots');

    localStorage.setItem('bot_state_carousel20', 'stop_bot');
    setCookie('bot_state_carousel20', 'stop_bot');

    localStorage.setItem('bots_state_carousel20', 'stop_bots');
    setCookie('bots_state_carousel20', 'stop_bots');


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




const carousel_bot = document.querySelector('.carousel-bot');
const items_bot = document.querySelectorAll('.slide');
const totalItems2 = items_bot.length;
const prevButton2 = document.getElementById('carousel_arrow_right');
const nextButton2 = document.getElementById('carousel_arrow_left');
const bot_section = document.getElementById('bot_section');
const carousel_arrow = document.getElementById('carousel_arrow');
const item1_layout = document.getElementById('item1-bot');
let index2 = 0;



function set_layout_default() {
    let allSet = true;

    if (!bot_section.classList.contains('set_section')) {
        bot_section.classList.add('set_section');
        allSet = false;
    }

    if (!carousel_arrow.classList.contains('set_arror')) {
        carousel_arrow.classList.add('set_arror');
        allSet = false;
    }

    if (!item1_layout.classList.contains('set_layout')) {
        item1_layout.classList.add('set_layout');
        allSet = false;
    }

    return allSet;
}

const checkInterval = setInterval(() => {
    if (set_layout_default()) {
        clearInterval(checkInterval);
    }
}, 100); // Check every 100ms



function showItem2(newIndex) {
    items_bot[index2].style.display = 'none';
    items_bot[newIndex].style.display = 'block';
    index2 = newIndex;
}



function set_layout() {
    let allSet = true;

    if (bot_section.classList.contains('set_section')) {
        bot_section.classList.remove('set_section');
        bot_section.classList.add('set_section2');
        allSet = false;
    }

    if (carousel_arrow.classList.contains('set_arror')) {
        carousel_arrow.classList.remove('set_arror');
        carousel_arrow.classList.add('set_arror2');
        allSet = false;
    }

    if (item1_layout.classList.contains('set_layout')) {
        item1_layout.classList.remove('set_layout');
        allSet = false;
    }

    return allSet;
}

function checkAndSetLayout(callback) {
    const checkIntervalLayout = setInterval(() => {
        if (set_layout()) {
            clearInterval(checkIntervalLayout);
            callback(); // Call the callback function once the layout is set
        }
    }, 100); // Check every 100ms
}

function showNext2() {
    checkAndSetLayout(() => {
        const nextIndex = (index2 + 1) % totalItems2;
        items_bot[index2].style.transform = 'translateX(-100%)';
        items_bot[nextIndex].style.transform = 'translateX(100%)';
        items_bot[nextIndex].style.display = 'block';
        setTimeout(() => {
            items_bot[index2].style.display = 'none';
            items_bot[nextIndex].style.transform = 'translateX(0)';
            index2 = nextIndex;
        }, 50);
    });
}

function showPrev2() {
    checkAndSetLayout(() => {
        const prevIndex = (index2 - 1 + totalItems2) % totalItems2;
        items_bot[index2].style.transform = 'translateX(100%)';
        items_bot[prevIndex].style.transform = 'translateX(-100%)';
        items_bot[prevIndex].style.display = 'block';
        setTimeout(() => {
            items_bot[index2].style.display = 'none';
            items_bot[prevIndex].style.transform = 'translateX(0)';
            index2 = prevIndex;
        }, 50);
    });
}

nextButton2.addEventListener('click', showNext2);
prevButton2.addEventListener('click', showPrev2);

items_bot[index2].style.display = 'block';







const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const prevButton = document.querySelectorAll('.prev_slide_info');
const nextButton = document.querySelectorAll('.next_slide_info');
let index = 0;

function showItem(newIndex) {
    items[index].style.display = 'none';
    items[newIndex].style.display = 'block';
    index = newIndex;
}

function showNext() {
    const nextIndex = (index + 1) % totalItems;
    items[index].style.transform = 'translateX(-100%)';
    items[nextIndex].style.transform = 'translateX(100%)';
    items[nextIndex].style.display = 'block';
    setTimeout(() => {
        items[index].style.display = 'none';
        items[nextIndex].style.transform = 'translateX(0)';
        index = nextIndex;
    }, 50);
}

function showPrev() {
    const prevIndex = (index - 1 + totalItems) % totalItems;
    items[index].style.transform = 'translateX(100%)';
    items[prevIndex].style.transform = 'translateX(-100%)';
    items[prevIndex].style.display = 'block';
    setTimeout(() => {
        items[index].style.display = 'none';
        items[prevIndex].style.transform = 'translateX(0)';
        index = prevIndex;
    }, 50);
}

nextButton.forEach(button => {
    button.addEventListener('click', showNext);
});

prevButton.forEach(button => {
    button.addEventListener('click', showPrev);
});

items[index].style.display = 'block';





const all_tick_history_carousel = document.querySelector('.all_tick_history_carousel');
const carousel_tick_info_item = document.querySelectorAll('.carousel_tick_info_item');
const totalItemsTickHistory = carousel_tick_info_item.length;
const prevButtonTickHistory = document.querySelectorAll('.prev_tick_history');
const nextButtonTickHistory = document.querySelectorAll('.next_tick_history');
let indexTickHistory = 0;

function showItemTickHistory(newIndex) {
    carousel_tick_info_item[indexTickHistory].style.display = 'none';
    carousel_tick_info_item[newIndex].style.display = 'block';
    indexTickHistory = newIndex;
}

function showNextTickHistory() {
    const nextIndex = (indexTickHistory + 1) % totalItemsTickHistory;
    carousel_tick_info_item[indexTickHistory].style.transform = 'translateX(-100%)';
    carousel_tick_info_item[nextIndex].style.transform = 'translateX(100%)';
    carousel_tick_info_item[nextIndex].style.display = 'block';
    setTimeout(() => {
        carousel_tick_info_item[indexTickHistory].style.display = 'none';
        carousel_tick_info_item[nextIndex].style.transform = 'translateX(0)';
        indexTickHistory = nextIndex;
    }, 50);
}

function showPrevTickHistory() {
    const prevIndex = (indexTickHistory - 1 + totalItemsTickHistory) % totalItemsTickHistory;
    carousel_tick_info_item[indexTickHistory].style.transform = 'translateX(100%)';
    carousel_tick_info_item[prevIndex].style.transform = 'translateX(-100%)';
    carousel_tick_info_item[prevIndex].style.display = 'block';
    setTimeout(() => {
        carousel_tick_info_item[indexTickHistory].style.display = 'none';
        carousel_tick_info_item[prevIndex].style.transform = 'translateX(0)';
        indexTickHistory = prevIndex;
    }, 50);
}

nextButtonTickHistory.forEach(button => {
    button.addEventListener('click', showNextTickHistory);
});

prevButtonTickHistory.forEach(button => {
    button.addEventListener('click', showPrevTickHistory);
});

carousel_tick_info_item[indexTickHistory].style.display = 'block';






const draggable = document.getElementById('carousel_arrow');

// Function to handle dragging
function startDrag(e) {
    let initialX, initialY;
    if (e.type === 'mousedown') {
        initialX = e.clientX;
        initialY = e.clientY;
    } else if (e.type === 'touchstart') {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
    }

    let offsetX = initialX - parseInt(window.getComputedStyle(draggable).left);
    let offsetY = initialY - parseInt(window.getComputedStyle(draggable).top);

    function moveHandler(e) {
        let currentX, currentY;
        if (e.type === 'mousemove') {
            currentX = e.clientX;
            currentY = e.clientY;
        } else if (e.type === 'touchmove') {
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;
        }
        draggable.style.left = `${currentX - offsetX}px`;
        draggable.style.top = `${currentY - offsetY}px`;
    }

    function endHandler() {
        document.removeEventListener('mousemove', moveHandler);
        document.removeEventListener('mouseup', endHandler);
        document.removeEventListener('touchmove', moveHandler);
        document.removeEventListener('touchend', endHandler);
    }

    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', endHandler);
    document.addEventListener('touchmove', moveHandler);
    document.addEventListener('touchend', endHandler);
}

// Add event listeners for both mouse and touch events
draggable.addEventListener('mousedown', startDrag);
draggable.addEventListener('touchstart', startDrag);

















let bot_settings = document.getElementById('bot_settings');
let bot_settings2 = document.getElementById('bot_settings2');

let bot_settings_2 = document.getElementById('bot_settings_2');
let bot_settings2_2 = document.getElementById('bot_settings2_2');

let bot_settings_3 = document.getElementById('bot_settings_3');
let bot_settings2_3 = document.getElementById('bot_settings2_3');

let bot_settings_4 = document.getElementById('bot_settings_4');
let bot_settings2_4 = document.getElementById('bot_settings2_4');

let bot_settings_5 = document.getElementById('bot_settings_5');
let bot_settings2_5 = document.getElementById('bot_settings2_5');

let bot_settings_6 = document.getElementById('bot_settings_6');
let bot_settings2_6 = document.getElementById('bot_settings2_6');

let bot_settings_7 = document.getElementById('bot_settings_7');
let bot_settings2_7 = document.getElementById('bot_settings2_7');






let bot_settings_carousel6 = document.getElementById('bot_settings_carousel6');
let bot_settings2_carousel6 = document.getElementById('bot_settings2_carousel6');

let bot_settings_2_carousel6 = document.getElementById('bot_settings_2_carousel6');
let bot_settings2_2_carousel6 = document.getElementById('bot_settings2_2_carousel6');

let bot_settings_3_carousel6 = document.getElementById('bot_settings_3_carousel6');
let bot_settings2_3_carousel6 = document.getElementById('bot_settings2_3_carousel6');

let bot_settings_4_carousel6 = document.getElementById('bot_settings_4_carousel6');
let bot_settings2_4_carousel6 = document.getElementById('bot_settings2_4_carousel6');

let bot_settings_5_carousel6 = document.getElementById('bot_settings_5_carousel6');
let bot_settings2_5_carousel6 = document.getElementById('bot_settings2_5_carousel6');

let bot_settings_6_carousel6 = document.getElementById('bot_settings_6_carousel6');
let bot_settings2_6_carousel6 = document.getElementById('bot_settings2_6_carousel6');

let bot_settings_7_carousel6 = document.getElementById('bot_settings_7_carousel6');
let bot_settings2_7_carousel6 = document.getElementById('bot_settings2_7_carousel6');




let bot_settings_carousel2 = document.getElementById('bot_settings_carousel2');
let bot_settings2_carousel2 = document.getElementById('bot_settings2_carousel2');

let bot_settings_2_carousel2 = document.getElementById('bot_settings_2_carousel2');
let bot_settings2_2_carousel2 = document.getElementById('bot_settings2_2_carousel2');

let bot_settings_3_carousel2 = document.getElementById('bot_settings_3_carousel2');
let bot_settings2_3_carousel2 = document.getElementById('bot_settings2_3_carousel2')

let bot_settings_4_carousel2 = document.getElementById('bot_settings_4_carousel2');
let bot_settings2_4_carousel2 = document.getElementById('bot_settings2_4_carousel2');

let bot_settings_5_carousel2 = document.getElementById('bot_settings_5_carousel2');
let bot_settings2_5_carousel2 = document.getElementById('bot_settings2_5_carousel2');

let bot_settings_6_carousel2 = document.getElementById('bot_settings_6_carousel2');
let bot_settings2_6_carousel2 = document.getElementById('bot_settings2_6_carousel2');

let bot_settings_7_carousel2 = document.getElementById('bot_settings_7_carousel2');
let bot_settings2_7_carousel2 = document.getElementById('bot_settings2_7_carousel2');


let bot_settings_carousel7 = document.getElementById('bot_settings_carousel7');
let bot_settings2_carousel7 = document.getElementById('bot_settings2_carousel7');

let bot_settings_2_carousel7 = document.getElementById('bot_settings_2_carousel7');
let bot_settings2_2_carousel7 = document.getElementById('bot_settings2_2_carousel7');

let bot_settings_3_carousel7 = document.getElementById('bot_settings_3_carousel7');
let bot_settings2_3_carousel7 = document.getElementById('bot_settings2_3_carousel7')

let bot_settings_4_carousel7 = document.getElementById('bot_settings_4_carousel7');
let bot_settings2_4_carousel7 = document.getElementById('bot_settings2_4_carousel7');

let bot_settings_5_carousel7 = document.getElementById('bot_settings_5_carousel7');
let bot_settings2_5_carousel7 = document.getElementById('bot_settings2_5_carousel7');

let bot_settings_6_carousel7 = document.getElementById('bot_settings_6_carousel7');
let bot_settings2_6_carousel7 = document.getElementById('bot_settings2_6_carousel7');

let bot_settings_7_carousel7 = document.getElementById('bot_settings_7_carousel7');
let bot_settings2_7_carousel7 = document.getElementById('bot_settings2_7_carousel7');


let bot_settings_carousel3 = document.getElementById('bot_settings_carousel3');
let bot_settings2_carousel3 = document.getElementById('bot_settings2_carousel3');

let bot_settings_2_carousel3 = document.getElementById('bot_settings_2_carousel3');
let bot_settings2_2_carousel3 = document.getElementById('bot_settings2_2_carousel3');

let bot_settings_3_carousel3 = document.getElementById('bot_settings_3_carousel3');
let bot_settings2_3_carousel3 = document.getElementById('bot_settings2_3_carousel3')

let bot_settings_4_carousel3 = document.getElementById('bot_settings_4_carousel3');
let bot_settings2_4_carousel3 = document.getElementById('bot_settings2_4_carousel3');

let bot_settings_5_carousel3 = document.getElementById('bot_settings_5_carousel3');
let bot_settings2_5_carousel3 = document.getElementById('bot_settings2_5_carousel3');

let bot_settings_6_carousel3 = document.getElementById('bot_settings_6_carousel3');
let bot_settings2_6_carousel3 = document.getElementById('bot_settings2_6_carousel3');

let bot_settings_7_carousel3 = document.getElementById('bot_settings_7_carousel3');
let bot_settings2_7_carousel3 = document.getElementById('bot_settings2_7_carousel3');


let bot_settings_carousel8 = document.getElementById('bot_settings_carousel8');
let bot_settings2_carousel8 = document.getElementById('bot_settings2_carousel8');

let bot_settings_2_carousel8 = document.getElementById('bot_settings_2_carousel8');
let bot_settings2_2_carousel8 = document.getElementById('bot_settings2_2_carousel8');

let bot_settings_3_carousel8 = document.getElementById('bot_settings_3_carousel8');
let bot_settings2_3_carousel8 = document.getElementById('bot_settings2_3_carousel8')

let bot_settings_4_carousel8 = document.getElementById('bot_settings_4_carousel8');
let bot_settings2_4_carousel8 = document.getElementById('bot_settings2_4_carousel8');

let bot_settings_5_carousel8 = document.getElementById('bot_settings_5_carousel8');
let bot_settings2_5_carousel8 = document.getElementById('bot_settings2_5_carousel8');

let bot_settings_6_carousel8 = document.getElementById('bot_settings_6_carousel8');
let bot_settings2_6_carousel8 = document.getElementById('bot_settings2_6_carousel8');

let bot_settings_7_carousel8 = document.getElementById('bot_settings_7_carousel8');
let bot_settings2_7_carousel8 = document.getElementById('bot_settings2_7_carousel8');


let bot_settings_carousel4 = document.getElementById('bot_settings_carousel4');
let bot_settings2_carousel4 = document.getElementById('bot_settings2_carousel4');

let bot_settings_2_carousel4 = document.getElementById('bot_settings_2_carousel4');
let bot_settings2_2_carousel4 = document.getElementById('bot_settings2_2_carousel4');

let bot_settings_3_carousel4 = document.getElementById('bot_settings_3_carousel4');
let bot_settings2_3_carousel4 = document.getElementById('bot_settings2_3_carousel4')

let bot_settings_4_carousel4 = document.getElementById('bot_settings_4_carousel4');
let bot_settings2_4_carousel4 = document.getElementById('bot_settings2_4_carousel4');

let bot_settings_5_carousel4 = document.getElementById('bot_settings_5_carousel4');
let bot_settings2_5_carousel4 = document.getElementById('bot_settings2_5_carousel4');

let bot_settings_6_carousel4 = document.getElementById('bot_settings_6_carousel4');
let bot_settings2_6_carousel4 = document.getElementById('bot_settings2_6_carousel4');

let bot_settings_7_carousel4 = document.getElementById('bot_settings_7_carousel4');
let bot_settings2_7_carousel4 = document.getElementById('bot_settings2_7_carousel4');


let bot_settings_carousel9 = document.getElementById('bot_settings_carousel9');
let bot_settings2_carousel9 = document.getElementById('bot_settings2_carousel9');

let bot_settings_2_carousel9 = document.getElementById('bot_settings_2_carousel9');
let bot_settings2_2_carousel9 = document.getElementById('bot_settings2_2_carousel9');

let bot_settings_3_carousel9 = document.getElementById('bot_settings_3_carousel9');
let bot_settings2_3_carousel9 = document.getElementById('bot_settings2_3_carousel9')

let bot_settings_4_carousel9 = document.getElementById('bot_settings_4_carousel9');
let bot_settings2_4_carousel9 = document.getElementById('bot_settings2_4_carousel9');

let bot_settings_5_carousel9 = document.getElementById('bot_settings_5_carousel9');
let bot_settings2_5_carousel9 = document.getElementById('bot_settings2_5_carousel9');

let bot_settings_6_carousel9 = document.getElementById('bot_settings_6_carousel9');
let bot_settings2_6_carousel9 = document.getElementById('bot_settings2_6_carousel9');

let bot_settings_7_carousel9 = document.getElementById('bot_settings_7_carousel9');
let bot_settings2_7_carousel9 = document.getElementById('bot_settings2_7_carousel9');


let bot_settings_carousel5 = document.getElementById('bot_settings_carousel5');
let bot_settings2_carousel5 = document.getElementById('bot_settings2_carousel5');

let bot_settings_2_carousel5 = document.getElementById('bot_settings_2_carousel5');
let bot_settings2_2_carousel5 = document.getElementById('bot_settings2_2_carousel5');

let bot_settings_3_carousel5 = document.getElementById('bot_settings_3_carousel5');
let bot_settings2_3_carousel5 = document.getElementById('bot_settings2_3_carousel5')

let bot_settings_4_carousel5 = document.getElementById('bot_settings_4_carousel5');
let bot_settings2_4_carousel5 = document.getElementById('bot_settings2_4_carousel5');

let bot_settings_5_carousel5 = document.getElementById('bot_settings_5_carousel5');
let bot_settings2_5_carousel5 = document.getElementById('bot_settings2_5_carousel5');

let bot_settings_6_carousel5 = document.getElementById('bot_settings_6_carousel5');
let bot_settings2_6_carousel5 = document.getElementById('bot_settings2_6_carousel5');

let bot_settings_7_carousel5 = document.getElementById('bot_settings_7_carousel5');
let bot_settings2_7_carousel5 = document.getElementById('bot_settings2_7_carousel5');



let bot_settings_carousel10 = document.getElementById('bot_settings_carousel10');
let bot_settings2_carousel10 = document.getElementById('bot_settings2_carousel10');

let bot_settings_2_carousel10 = document.getElementById('bot_settings_2_carousel10');
let bot_settings2_2_carousel10 = document.getElementById('bot_settings2_2_carousel10');

let bot_settings_3_carousel10 = document.getElementById('bot_settings_3_carousel10');
let bot_settings2_3_carousel10 = document.getElementById('bot_settings2_3_carousel10')

let bot_settings_4_carousel10 = document.getElementById('bot_settings_4_carousel10');
let bot_settings2_4_carousel10 = document.getElementById('bot_settings2_4_carousel10');

let bot_settings_5_carousel10 = document.getElementById('bot_settings_5_carousel10');
let bot_settings2_5_carousel10 = document.getElementById('bot_settings2_5_carousel10');

let bot_settings_6_carousel10 = document.getElementById('bot_settings_6_carousel10');
let bot_settings2_6_carousel10 = document.getElementById('bot_settings2_6_carousel10');

let bot_settings_7_carousel10 = document.getElementById('bot_settings_7_carousel10');
let bot_settings2_7_carousel10 = document.getElementById('bot_settings2_7_carousel10');



let bot_settings_set = null

function set_bot_setting_icon() {
    bot_settings.style.display = 'none'
    bot_settings2.style.display = 'none'
    bot_settings_2.style.display = 'none'
    bot_settings2_2.style.display = 'none'
    bot_settings_3.style.display = 'none'
    bot_settings2_3.style.display = 'none'
    bot_settings_4.style.display = 'none'
    bot_settings2_4.style.display = 'none'
    bot_settings_5.style.display = 'none'
    bot_settings2_5.style.display = 'none'
    bot_settings_6.style.display = 'none'
    bot_settings2_6.style.display = 'none'
    bot_settings_7.style.display = 'none'
    bot_settings2_7.style.display = 'none'
    bot_settings_carousel6.style.display = 'none'
    bot_settings2_carousel6.style.display = 'none'
    bot_settings_2_carousel6.style.display = 'none'
    bot_settings2_2_carousel6.style.display = 'none'
    bot_settings_3_carousel6.style.display = 'none'
    bot_settings2_3_carousel6.style.display = 'none'
    bot_settings_4_carousel6.style.display = 'none'
    bot_settings2_4_carousel6.style.display = 'none'
    bot_settings_5_carousel6.style.display = 'none'
    bot_settings2_5_carousel6.style.display = 'none'
    bot_settings_6_carousel6.style.display = 'none'
    bot_settings2_6_carousel6.style.display = 'none'
    bot_settings_7_carousel6.style.display = 'none'
    bot_settings2_7_carousel6.style.display = 'none'
    bot_settings_carousel2.style.display = 'none'
    bot_settings2_carousel2.style.display = 'none'
    bot_settings_2_carousel2.style.display = 'none'
    bot_settings2_2_carousel2.style.display = 'none'
    bot_settings_3_carousel2.style.display = 'none'
    bot_settings2_3_carousel2.style.display = 'none'
    bot_settings_4_carousel2.style.display = 'none'
    bot_settings2_4_carousel2.style.display = 'none'
    bot_settings_5_carousel2.style.display = 'none'
    bot_settings2_5_carousel2.style.display = 'none'
    bot_settings_6_carousel2.style.display = 'none'
    bot_settings2_6_carousel2.style.display = 'none'
    bot_settings_7_carousel2.style.display = 'none'
    bot_settings2_7_carousel2.style.display = 'none'
    bot_settings_carousel7.style.display = 'none'
    bot_settings2_carousel7.style.display = 'none'
    bot_settings_2_carousel7.style.display = 'none'
    bot_settings2_2_carousel7.style.display = 'none'
    bot_settings_3_carousel7.style.display = 'none'
    bot_settings2_3_carousel7.style.display = 'none'
    bot_settings_4_carousel7.style.display = 'none'
    bot_settings2_4_carousel7.style.display = 'none'
    bot_settings_5_carousel7.style.display = 'none'
    bot_settings2_5_carousel7.style.display = 'none'
    bot_settings_6_carousel7.style.display = 'none'
    bot_settings2_6_carousel7.style.display = 'none'
    bot_settings_7_carousel7.style.display = 'none'
    bot_settings2_7_carousel7.style.display = 'none'
    bot_settings_carousel3.style.display = 'none'
    bot_settings2_carousel3.style.display = 'none'
    bot_settings_2_carousel3.style.display = 'none'
    bot_settings2_2_carousel3.style.display = 'none'
    bot_settings_3_carousel3.style.display = 'none'
    bot_settings2_3_carousel3.style.display = 'none'
    bot_settings_4_carousel3.style.display = 'none'
    bot_settings2_4_carousel3.style.display = 'none'
    bot_settings_5_carousel3.style.display = 'none'
    bot_settings2_5_carousel3.style.display = 'none'
    bot_settings_6_carousel3.style.display = 'none'
    bot_settings2_6_carousel3.style.display = 'none'
    bot_settings_7_carousel3.style.display = 'none'
    bot_settings2_7_carousel3.style.display = 'none'
    bot_settings_carousel8.style.display = 'none'
    bot_settings2_carousel8.style.display = 'none'
    bot_settings_2_carousel8.style.display = 'none'
    bot_settings2_2_carousel8.style.display = 'none'
    bot_settings_3_carousel8.style.display = 'none'
    bot_settings2_3_carousel8.style.display = 'none'
    bot_settings_4_carousel8.style.display = 'none'
    bot_settings2_4_carousel8.style.display = 'none'
    bot_settings_5_carousel8.style.display = 'none'
    bot_settings2_5_carousel8.style.display = 'none'
    bot_settings_6_carousel8.style.display = 'none'
    bot_settings2_6_carousel8.style.display = 'none'
    bot_settings_7_carousel8.style.display = 'none'
    bot_settings2_7_carousel8.style.display = 'none'
    bot_settings_carousel4.style.display = 'none'
    bot_settings2_carousel4.style.display = 'none'
    bot_settings_2_carousel4.style.display = 'none'
    bot_settings2_2_carousel4.style.display = 'none'
    bot_settings_3_carousel4.style.display = 'none'
    bot_settings2_3_carousel4.style.display = 'none'
    bot_settings_4_carousel4.style.display = 'none'
    bot_settings2_4_carousel4.style.display = 'none'
    bot_settings_5_carousel4.style.display = 'none'
    bot_settings2_5_carousel4.style.display = 'none'
    bot_settings_6_carousel4.style.display = 'none'
    bot_settings2_6_carousel4.style.display = 'none'
    bot_settings_7_carousel4.style.display = 'none'
    bot_settings2_7_carousel4.style.display = 'none'
    bot_settings_carousel9.style.display = 'none'
    bot_settings2_carousel9.style.display = 'none'
    bot_settings_2_carousel9.style.display = 'none'
    bot_settings2_2_carousel9.style.display = 'none'
    bot_settings_3_carousel9.style.display = 'none'
    bot_settings2_3_carousel9.style.display = 'none'
    bot_settings_4_carousel9.style.display = 'none'
    bot_settings2_4_carousel9.style.display = 'none'
    bot_settings_5_carousel9.style.display = 'none'
    bot_settings2_5_carousel9.style.display = 'none'
    bot_settings_6_carousel9.style.display = 'none'
    bot_settings2_6_carousel9.style.display = 'none'
    bot_settings_7_carousel9.style.display = 'none'
    bot_settings2_7_carousel9.style.display = 'none'
    bot_settings_carousel5.style.display = 'none'
    bot_settings2_carousel5.style.display = 'none'
    bot_settings_2_carousel5.style.display = 'none'
    bot_settings2_2_carousel5.style.display = 'none'
    bot_settings_3_carousel5.style.display = 'none'
    bot_settings2_3_carousel5.style.display = 'none'
    bot_settings_4_carousel5.style.display = 'none'
    bot_settings2_4_carousel5.style.display = 'none'
    bot_settings_5_carousel5.style.display = 'none'
    bot_settings2_5_carousel5.style.display = 'none'
    bot_settings_6_carousel5.style.display = 'none'
    bot_settings2_6_carousel5.style.display = 'none'
    bot_settings_7_carousel5.style.display = 'none'
    bot_settings2_7_carousel5.style.display = 'none'
    bot_settings_carousel10.style.display = 'none'
    bot_settings2_carousel10.style.display = 'none'
    bot_settings_2_carousel10.style.display = 'none'
    bot_settings2_2_carousel10.style.display = 'none'
    bot_settings_3_carousel10.style.display = 'none'
    bot_settings2_3_carousel10.style.display = 'none'
    bot_settings_4_carousel10.style.display = 'none'
    bot_settings2_4_carousel10.style.display = 'none'
    bot_settings_5_carousel10.style.display = 'none'
    bot_settings2_5_carousel10.style.display = 'none'
    bot_settings_6_carousel10.style.display = 'none'
    bot_settings2_6_carousel10.style.display = 'none'
    bot_settings_7_carousel10.style.display = 'none'
    bot_settings2_7_carousel10.style.display = 'none'

    let bot_settings_cookie = getCookie('bot_settings_cookie')
    let bot_settings_local_st = localStorage.getItem('bot_settings_local_st')

    if (bot_settings_cookie == 'bot1' || bot_settings_local_st == 'bot1' || bot_settings_set == 'bot1') {
        bot_settings.style.display = 'block'
        bot_settings.style.color = ''
        bot_settings.style.color = 'gold'
        bot_settings.style.colorRadius = ''
        bot_settings2.style.display = 'block'
        bot_settings2.style.color = ''
        bot_settings2.style.color = 'gold'
        bot_settings2.style.colorRadius = ''
        bot_settings_carousel6.style.display = 'block'
        bot_settings_carousel6.style.color = ''
        bot_settings_carousel6.style.color = 'gold'
        bot_settings_carousel6.style.colorRadius = ''
        bot_settings2_carousel6.style.display = 'block'
        bot_settings2_carousel6.style.color = ''
        bot_settings2_carousel6.style.color = 'gold'
        bot_settings2_carousel6.style.colorRadius = ''
        bot_settings_carousel2.style.display = 'block'
        bot_settings_carousel2.style.color = ''
        bot_settings_carousel2.style.color = 'gold'
        bot_settings_carousel2.style.colorRadius = ''
        bot_settings2_carousel2.style.display = 'block'
        bot_settings2_carousel2.style.color = ''
        bot_settings2_carousel2.style.color = 'gold'
        bot_settings2_carousel2.style.colorRadius = ''
        bot_settings_carousel7.style.display = 'block'
        bot_settings_carousel7.style.color = ''
        bot_settings_carousel7.style.color = 'gold'
        bot_settings_carousel7.style.colorRadius = ''
        bot_settings2_carousel7.style.display = 'block'
        bot_settings2_carousel7.style.color = ''
        bot_settings2_carousel7.style.color = 'gold'
        bot_settings2_carousel7.style.colorRadius = ''
        bot_settings_carousel3.style.display = 'block'
        bot_settings_carousel3.style.color = ''
        bot_settings_carousel3.style.color = 'gold'
        bot_settings_carousel3.style.colorRadius = ''
        bot_settings2_carousel3.style.display = 'block'
        bot_settings2_carousel3.style.color = ''
        bot_settings2_carousel3.style.color = 'gold'
        bot_settings2_carousel3.style.colorRadius = ''
        bot_settings_carousel8.style.display = 'block'
        bot_settings_carousel8.style.color = ''
        bot_settings_carousel8.style.color = 'gold'
        bot_settings_carousel8.style.colorRadius = ''
        bot_settings2_carousel8.style.display = 'block'
        bot_settings2_carousel8.style.color = ''
        bot_settings2_carousel8.style.color = 'gold'
        bot_settings2_carousel8.style.colorRadius = ''
        bot_settings_carousel4.style.display = 'block'
        bot_settings_carousel4.style.color = ''
        bot_settings_carousel4.style.color = 'gold'
        bot_settings_carousel4.style.colorRadius = ''
        bot_settings2_carousel4.style.display = 'block'
        bot_settings2_carousel4.style.color = ''
        bot_settings2_carousel4.style.color = 'gold'
        bot_settings2_carousel4.style.colorRadius = ''
        bot_settings_carousel9.style.display = 'block'
        bot_settings_carousel9.style.color = ''
        bot_settings_carousel9.style.color = 'gold'
        bot_settings_carousel9.style.colorRadius = ''
        bot_settings2_carousel9.style.display = 'block'
        bot_settings2_carousel9.style.color = ''
        bot_settings2_carousel9.style.color = 'gold'
        bot_settings2_carousel9.style.colorRadius = ''
        bot_settings_carousel5.style.display = 'block'
        bot_settings_carousel5.style.color = ''
        bot_settings_carousel5.style.color = 'gold'
        bot_settings_carousel5.style.colorRadius = ''
        bot_settings2_carousel5.style.display = 'block'
        bot_settings2_carousel5.style.color = ''
        bot_settings2_carousel5.style.color = 'gold'
        bot_settings2_carousel5.style.colorRadius = ''
        bot_settings_carousel10.style.display = 'block'
        bot_settings_carousel10.style.color = ''
        bot_settings_carousel10.style.color = 'gold'
        bot_settings_carousel10.style.colorRadius = ''
        bot_settings2_carousel10.style.display = 'block'
        bot_settings2_carousel10.style.color = ''
        bot_settings2_carousel10.style.color = 'gold'
        bot_settings2_carousel10.style.colorRadius = ''
    }
    if (bot_settings_cookie == 'bot2' || bot_settings_local_st == 'bot2' || bot_settings_set == 'bot2') {
        bot_settings_2.style.display = 'block'
        bot_settings_2.style.color = ''
        bot_settings_2.style.color = 'red'
        bot_settings_2.style.colorRadius = ''
        bot_settings2_2.style.display = 'block'
        bot_settings2_2.style.color = ''
        bot_settings2_2.style.color = 'red'
        bot_settings2_2.style.colorRadius = ''
        bot_settings_2_carousel6.style.display = 'block'
        bot_settings_2_carousel6.style.color = ''
        bot_settings_2_carousel6.style.color = 'red'
        bot_settings_2_carousel6.style.colorRadius = ''
        bot_settings2_2_carousel6.style.display = 'block'
        bot_settings2_2_carousel6.style.color = ''
        bot_settings2_2_carousel6.style.color = 'red'
        bot_settings2_2_carousel6.style.colorRadius = ''
        bot_settings_2_carousel2.style.display = 'block'
        bot_settings_2_carousel2.style.color = ''
        bot_settings_2_carousel2.style.color = 'red'
        bot_settings_2_carousel2.style.colorRadius = ''
        bot_settings2_2_carousel2.style.display = 'block'
        bot_settings2_2_carousel2.style.color = ''
        bot_settings2_2_carousel2.style.color = 'red'
        bot_settings2_2_carousel2.style.colorRadius = ''
        bot_settings_2_carousel7.style.display = 'block'
        bot_settings_2_carousel7.style.color = ''
        bot_settings_2_carousel7.style.color = 'red'
        bot_settings_2_carousel7.style.colorRadius = ''
        bot_settings2_2_carousel7.style.display = 'block'
        bot_settings2_2_carousel7.style.color = ''
        bot_settings2_2_carousel7.style.color = 'red'
        bot_settings2_2_carousel7.style.colorRadius = ''
        bot_settings_2_carousel3.style.display = 'block'
        bot_settings_2_carousel3.style.color = ''
        bot_settings_2_carousel3.style.color = 'red'
        bot_settings_2_carousel3.style.colorRadius = ''
        bot_settings2_2_carousel3.style.display = 'block'
        bot_settings2_2_carousel3.style.color = ''
        bot_settings2_2_carousel3.style.color = 'red'
        bot_settings2_2_carousel3.style.colorRadius = ''
        bot_settings_2_carousel8.style.display = 'block'
        bot_settings_2_carousel8.style.color = ''
        bot_settings_2_carousel8.style.color = 'red'
        bot_settings_2_carousel8.style.colorRadius = ''
        bot_settings2_2_carousel8.style.display = 'block'
        bot_settings2_2_carousel8.style.color = ''
        bot_settings2_2_carousel8.style.color = 'red'
        bot_settings2_2_carousel8.style.colorRadius = ''
        bot_settings_2_carousel4.style.display = 'block'
        bot_settings_2_carousel4.style.color = ''
        bot_settings_2_carousel4.style.color = 'red'
        bot_settings_2_carousel4.style.colorRadius = ''
        bot_settings2_2_carousel4.style.display = 'block'
        bot_settings2_2_carousel4.style.color = ''
        bot_settings2_2_carousel4.style.color = 'red'
        bot_settings2_2_carousel4.style.colorRadius = ''
        bot_settings_2_carousel9.style.display = 'block'
        bot_settings_2_carousel9.style.color = ''
        bot_settings_2_carousel9.style.color = 'red'
        bot_settings_2_carousel9.style.colorRadius = ''
        bot_settings2_2_carousel9.style.display = 'block'
        bot_settings2_2_carousel9.style.color = ''
        bot_settings2_2_carousel9.style.color = 'red'
        bot_settings2_2_carousel9.style.colorRadius = ''
        bot_settings_2_carousel5.style.display = 'block'
        bot_settings_2_carousel5.style.color = ''
        bot_settings_2_carousel5.style.color = 'red'
        bot_settings_2_carousel5.style.colorRadius = ''
        bot_settings2_2_carousel5.style.display = 'block'
        bot_settings2_2_carousel5.style.color = ''
        bot_settings2_2_carousel5.style.color = 'red'
        bot_settings2_2_carousel5.style.colorRadius = ''
        bot_settings_2_carousel10.style.display = 'block'
        bot_settings_2_carousel10.style.color = ''
        bot_settings_2_carousel10.style.color = 'red'
        bot_settings_2_carousel10.style.colorRadius = ''
        bot_settings2_2_carousel10.style.display = 'block'
        bot_settings2_2_carousel10.style.color = ''
        bot_settings2_2_carousel10.style.color = 'red'
        bot_settings2_2_carousel10.style.colorRadius = ''
    }
    if (bot_settings_cookie == 'bot3' || bot_settings_local_st == 'bot3' || bot_settings_set == 'bot3') {
        bot_settings_3.style.display = 'block'
        bot_settings_3.style.color = ''
        bot_settings_3.style.color = 'yellow'
        bot_settings_3.style.colorRadius = ''
        bot_settings2_3.style.display = 'block'
        bot_settings2_3.style.color = ''
        bot_settings2_3.style.color = 'yellow'
        bot_settings2_3.style.colorRadius = ''
        bot_settings_3_carousel6.style.display = 'block'
        bot_settings_3_carousel6.style.color = ''
        bot_settings_3_carousel6.style.color = 'yellow'
        bot_settings_3_carousel6.style.colorRadius = ''
        bot_settings2_3_carousel6.style.display = 'block'
        bot_settings2_3_carousel6.style.color = ''
        bot_settings2_3_carousel6.style.color = 'yellow'
        bot_settings2_3_carousel6.style.colorRadius = ''
        bot_settings_3_carousel2.style.display = 'block'
        bot_settings_3_carousel2.style.color = ''
        bot_settings_3_carousel2.style.color = 'yellow'
        bot_settings_3_carousel2.style.colorRadius = ''
        bot_settings2_3_carousel2.style.display = 'block'
        bot_settings2_3_carousel2.style.color = ''
        bot_settings2_3_carousel2.style.color = 'yellow'
        bot_settings2_3_carousel2.style.colorRadius = ''
        bot_settings_3_carousel7.style.display = 'block'
        bot_settings_3_carousel7.style.color = ''
        bot_settings_3_carousel7.style.color = 'yellow'
        bot_settings_3_carousel7.style.colorRadius = ''
        bot_settings2_3_carousel7.style.display = 'block'
        bot_settings2_3_carousel7.style.color = ''
        bot_settings2_3_carousel7.style.color = 'yellow'
        bot_settings2_3_carousel7.style.colorRadius = ''
        bot_settings_3_carousel3.style.display = 'block'
        bot_settings_3_carousel3.style.color = ''
        bot_settings_3_carousel3.style.color = 'yellow'
        bot_settings_3_carousel3.style.colorRadius = ''
        bot_settings2_3_carousel3.style.display = 'block'
        bot_settings2_3_carousel3.style.color = ''
        bot_settings2_3_carousel3.style.color = 'yellow'
        bot_settings2_3_carousel3.style.colorRadius = ''
        bot_settings_3_carousel8.style.display = 'block'
        bot_settings_3_carousel8.style.color = ''
        bot_settings_3_carousel8.style.color = 'yellow'
        bot_settings_3_carousel8.style.colorRadius = ''
        bot_settings2_3_carousel8.style.display = 'block'
        bot_settings2_3_carousel8.style.color = ''
        bot_settings2_3_carousel8.style.color = 'yellow'
        bot_settings2_3_carousel8.style.colorRadius = ''
        bot_settings_3_carousel4.style.display = 'block'
        bot_settings_3_carousel4.style.color = ''
        bot_settings_3_carousel4.style.color = 'yellow'
        bot_settings_3_carousel4.style.colorRadius = ''
        bot_settings2_3_carousel4.style.display = 'block'
        bot_settings2_3_carousel4.style.color = ''
        bot_settings2_3_carousel4.style.color = 'yellow'
        bot_settings2_3_carousel4.style.colorRadius = ''
        bot_settings_3_carousel9.style.display = 'block'
        bot_settings_3_carousel9.style.color = ''
        bot_settings_3_carousel9.style.color = 'yellow'
        bot_settings_3_carousel9.style.colorRadius = ''
        bot_settings2_3_carousel9.style.display = 'block'
        bot_settings2_3_carousel9.style.color = ''
        bot_settings2_3_carousel9.style.color = 'yellow'
        bot_settings2_3_carousel9.style.colorRadius = ''
        bot_settings_3_carousel5.style.display = 'block'
        bot_settings_3_carousel5.style.color = ''
        bot_settings_3_carousel5.style.color = 'yellow'
        bot_settings_3_carousel5.style.colorRadius = ''
        bot_settings2_3_carousel5.style.display = 'block'
        bot_settings2_3_carousel5.style.color = ''
        bot_settings2_3_carousel5.style.color = 'yellow'
        bot_settings2_3_carousel5.style.colorRadius = ''
        bot_settings_3_carousel10.style.display = 'block'
        bot_settings_3_carousel10.style.color = ''
        bot_settings_3_carousel10.style.color = 'yellow'
        bot_settings_3_carousel10.style.colorRadius = ''
        bot_settings2_3_carousel10.style.display = 'block'
        bot_settings2_3_carousel10.style.color = ''
        bot_settings2_3_carousel10.style.color = 'yellow'
        bot_settings2_3_carousel10.style.colorRadius = ''
    }
    if (bot_settings_cookie == 'bot4' || bot_settings_local_st == 'bot4' || bot_settings_set == 'bot4') {
        bot_settings_4.style.display = 'block'
        bot_settings_4.style.color = ''
        bot_settings_4.style.color = 'cyan'
        bot_settings_4.style.colorRadius = ''
        bot_settings2_4.style.display = 'block'
        bot_settings2_4.style.color = ''
        bot_settings2_4.style.color = 'cyan'
        bot_settings2_4.style.colorRadius = ''
        bot_settings_4_carousel6.style.display = 'block'
        bot_settings_4_carousel6.style.color = ''
        bot_settings_4_carousel6.style.color = 'cyan'
        bot_settings_4_carousel6.style.colorRadius = ''
        bot_settings2_4_carousel6.style.display = 'block'
        bot_settings2_4_carousel6.style.color = ''
        bot_settings2_4_carousel6.style.color = 'cyan'
        bot_settings2_4_carousel6.style.colorRadius = ''
        bot_settings_4_carousel2.style.display = 'block'
        bot_settings_4_carousel2.style.color = ''
        bot_settings_4_carousel2.style.color = 'cyan'
        bot_settings_4_carousel2.style.colorRadius = ''
        bot_settings2_4_carousel2.style.display = 'block'
        bot_settings2_4_carousel2.style.color = ''
        bot_settings2_4_carousel2.style.color = 'cyan'
        bot_settings2_4_carousel2.style.colorRadius = ''
        bot_settings_4_carousel7.style.display = 'block'
        bot_settings_4_carousel7.style.color = ''
        bot_settings_4_carousel7.style.color = 'cyan'
        bot_settings_4_carousel7.style.colorRadius = ''
        bot_settings2_4_carousel7.style.display = 'block'
        bot_settings2_4_carousel7.style.color = ''
        bot_settings2_4_carousel7.style.color = 'cyan'
        bot_settings2_4_carousel7.style.colorRadius = ''
        bot_settings_4_carousel3.style.display = 'block'
        bot_settings_4_carousel3.style.color = ''
        bot_settings_4_carousel3.style.color = 'cyan'
        bot_settings_4_carousel3.style.colorRadius = ''
        bot_settings2_4_carousel3.style.display = 'block'
        bot_settings2_4_carousel3.style.color = ''
        bot_settings2_4_carousel3.style.color = 'cyan'
        bot_settings2_4_carousel3.style.colorRadius = ''
        bot_settings_4_carousel8.style.display = 'block'
        bot_settings_4_carousel8.style.color = ''
        bot_settings_4_carousel8.style.color = 'cyan'
        bot_settings_4_carousel8.style.colorRadius = ''
        bot_settings2_4_carousel8.style.display = 'block'
        bot_settings2_4_carousel8.style.color = ''
        bot_settings2_4_carousel8.style.color = 'cyan'
        bot_settings2_4_carousel8.style.colorRadius = ''
        bot_settings_4_carousel4.style.display = 'block'
        bot_settings_4_carousel4.style.color = ''
        bot_settings_4_carousel4.style.color = 'cyan'
        bot_settings_4_carousel4.style.colorRadius = ''
        bot_settings2_4_carousel4.style.display = 'block'
        bot_settings2_4_carousel4.style.color = ''
        bot_settings2_4_carousel4.style.color = 'cyan'
        bot_settings2_4_carousel4.style.colorRadius = ''
        bot_settings_4_carousel9.style.display = 'block'
        bot_settings_4_carousel9.style.color = ''
        bot_settings_4_carousel9.style.color = 'cyan'
        bot_settings_4_carousel9.style.colorRadius = ''
        bot_settings2_4_carousel9.style.display = 'block'
        bot_settings2_4_carousel9.style.color = ''
        bot_settings2_4_carousel9.style.color = 'cyan'
        bot_settings2_4_carousel9.style.colorRadius = ''
        bot_settings_4_carousel5.style.display = 'block'
        bot_settings_4_carousel5.style.color = ''
        bot_settings_4_carousel5.style.color = 'cyan'
        bot_settings_4_carousel5.style.colorRadius = ''
        bot_settings2_4_carousel5.style.display = 'block'
        bot_settings2_4_carousel5.style.color = ''
        bot_settings2_4_carousel5.style.color = 'cyan'
        bot_settings2_4_carousel5.style.colorRadius = ''
        bot_settings_4_carousel10.style.display = 'block'
        bot_settings_4_carousel10.style.color = ''
        bot_settings_4_carousel10.style.color = 'cyan'
        bot_settings_4_carousel10.style.colorRadius = ''
        bot_settings2_4_carousel10.style.display = 'block'
        bot_settings2_4_carousel10.style.color = ''
        bot_settings2_4_carousel10.style.color = 'cyan'
        bot_settings2_4_carousel10.style.colorRadius = ''
    }
    if (bot_settings_cookie == 'bot5' || bot_settings_local_st == 'bot5' || bot_settings_set == 'bot5') {
        bot_settings_5.style.display = 'block'
        bot_settings_5.style.color = ''
        bot_settings_5.style.color = 'lemon'
        bot_settings_5.style.colorRadius = ''
        bot_settings2_5.style.display = 'block'
        bot_settings2_5.style.color = ''
        bot_settings2_5.style.color = 'lemon'
        bot_settings2_5.style.colorRadius = ''
        bot_settings_5_carousel6.style.display = 'block'
        bot_settings_5_carousel6.style.color = ''
        bot_settings_5_carousel6.style.color = 'lemon'
        bot_settings_5_carousel6.style.colorRadius = ''
        bot_settings2_5_carousel6.style.display = 'block'
        bot_settings2_5_carousel6.style.color = ''
        bot_settings2_5_carousel6.style.color = 'lemon'
        bot_settings2_5_carousel6.style.colorRadius = ''
        bot_settings_5_carousel2.style.display = 'block'
        bot_settings_5_carousel2.style.color = ''
        bot_settings_5_carousel2.style.color = 'lemon'
        bot_settings_5_carousel2.style.colorRadius = ''
        bot_settings2_5_carousel2.style.display = 'block'
        bot_settings2_5_carousel2.style.color = ''
        bot_settings2_5_carousel2.style.color = 'lemon'
        bot_settings2_5_carousel2.style.colorRadius = ''
        bot_settings_5_carousel7.style.display = 'block'
        bot_settings_5_carousel7.style.color = ''
        bot_settings_5_carousel7.style.color = 'lemon'
        bot_settings_5_carousel7.style.colorRadius = ''
        bot_settings2_5_carousel7.style.display = 'block'
        bot_settings2_5_carousel7.style.color = ''
        bot_settings2_5_carousel7.style.color = 'lemon'
        bot_settings2_5_carousel7.style.colorRadius = ''
        bot_settings_5_carousel3.style.display = 'block'
        bot_settings_5_carousel3.style.color = ''
        bot_settings_5_carousel3.style.color = 'lemon'
        bot_settings_5_carousel3.style.colorRadius = ''
        bot_settings2_5_carousel3.style.display = 'block'
        bot_settings2_5_carousel3.style.color = ''
        bot_settings2_5_carousel3.style.color = 'lemon'
        bot_settings2_5_carousel3.style.colorRadius = ''
        bot_settings_5_carousel8.style.display = 'block'
        bot_settings_5_carousel8.style.color = ''
        bot_settings_5_carousel8.style.color = 'lemon'
        bot_settings_5_carousel8.style.colorRadius = ''
        bot_settings2_5_carousel8.style.display = 'block'
        bot_settings2_5_carousel8.style.color = ''
        bot_settings2_5_carousel8.style.color = 'lemon'
        bot_settings2_5_carousel8.style.colorRadius = ''
        bot_settings_5_carousel4.style.display = 'block'
        bot_settings_5_carousel4.style.color = ''
        bot_settings_5_carousel4.style.color = 'lemon'
        bot_settings_5_carousel4.style.colorRadius = ''
        bot_settings2_5_carousel4.style.display = 'block'
        bot_settings2_5_carousel4.style.color = ''
        bot_settings2_5_carousel4.style.color = 'lemon'
        bot_settings2_5_carousel4.style.colorRadius = ''
        bot_settings_5_carousel9.style.display = 'block'
        bot_settings_5_carousel9.style.color = ''
        bot_settings_5_carousel9.style.color = 'lemon'
        bot_settings_5_carousel9.style.colorRadius = ''
        bot_settings2_5_carousel9.style.display = 'block'
        bot_settings2_5_carousel9.style.color = ''
        bot_settings2_5_carousel9.style.color = 'lemon'
        bot_settings2_5_carousel9.style.colorRadius = ''
        bot_settings_5_carousel5.style.display = 'block'
        bot_settings_5_carousel5.style.color = ''
        bot_settings_5_carousel5.style.color = 'lemon'
        bot_settings_5_carousel5.style.colorRadius = ''
        bot_settings2_5_carousel5.style.display = 'block'
        bot_settings2_5_carousel5.style.color = ''
        bot_settings2_5_carousel5.style.color = 'lemon'
        bot_settings2_5_carousel5.style.colorRadius = ''
        bot_settings_5_carousel10.style.display = 'block'
        bot_settings_5_carousel10.style.color = ''
        bot_settings_5_carousel10.style.color = 'lemon'
        bot_settings_5_carousel10.style.colorRadius = ''
        bot_settings2_5_carousel10.style.display = 'block'
        bot_settings2_5_carousel10.style.color = ''
        bot_settings2_5_carousel10.style.color = 'lemon'
        bot_settings2_5_carousel10.style.colorRadius = ''
    }
    if (bot_settings_cookie == 'bot6' || bot_settings_local_st == 'bot6' || bot_settings_set == 'bot6') {
        bot_settings_6.style.display = 'block'
        bot_settings_6.style.color = ''
        bot_settings_6.style.color = 'pink'
        bot_settings_6.style.colorRadius = ''
        bot_settings2_6.style.display = 'block'
        bot_settings2_6.style.color = ''
        bot_settings2_6.style.color = 'pink'
        bot_settings2_6.style.colorRadius = ''
        bot_settings_6_carousel6.style.display = 'block'
        bot_settings_6_carousel6.style.color = ''
        bot_settings_6_carousel6.style.color = 'pink'
        bot_settings_6_carousel6.style.colorRadius = ''
        bot_settings2_6_carousel6.style.display = 'block'
        bot_settings2_6_carousel6.style.color = ''
        bot_settings2_6_carousel6.style.color = 'pink'
        bot_settings2_6_carousel6.style.colorRadius = ''
        bot_settings_6_carousel2.style.display = 'block'
        bot_settings_6_carousel2.style.color = ''
        bot_settings_6_carousel2.style.color = 'pink'
        bot_settings_6_carousel2.style.colorRadius = ''
        bot_settings2_6_carousel2.style.display = 'block'
        bot_settings2_6_carousel2.style.color = ''
        bot_settings2_6_carousel2.style.color = 'pink'
        bot_settings2_6_carousel2.style.colorRadius = ''
        bot_settings_6_carousel7.style.display = 'block'
        bot_settings_6_carousel7.style.color = ''
        bot_settings_6_carousel7.style.color = 'pink'
        bot_settings_6_carousel7.style.colorRadius = ''
        bot_settings2_6_carousel7.style.display = 'block'
        bot_settings2_6_carousel7.style.color = ''
        bot_settings2_6_carousel7.style.color = 'pink'
        bot_settings2_6_carousel7.style.colorRadius = ''
        bot_settings_6_carousel3.style.display = 'block'
        bot_settings_6_carousel3.style.color = ''
        bot_settings_6_carousel3.style.color = 'pink'
        bot_settings_6_carousel3.style.colorRadius = ''
        bot_settings2_6_carousel3.style.display = 'block'
        bot_settings2_6_carousel3.style.color = ''
        bot_settings2_6_carousel3.style.color = 'pink'
        bot_settings2_6_carousel3.style.colorRadius = ''
        bot_settings_6_carousel8.style.display = 'block'
        bot_settings_6_carousel8.style.color = ''
        bot_settings_6_carousel8.style.color = 'pink'
        bot_settings_6_carousel8.style.colorRadius = ''
        bot_settings2_6_carousel8.style.display = 'block'
        bot_settings2_6_carousel8.style.color = ''
        bot_settings2_6_carousel8.style.color = 'pink'
        bot_settings2_6_carousel8.style.colorRadius = ''
        bot_settings_6_carousel4.style.display = 'block'
        bot_settings_6_carousel4.style.color = ''
        bot_settings_6_carousel4.style.color = 'pink'
        bot_settings_6_carousel4.style.colorRadius = ''
        bot_settings2_6_carousel4.style.display = 'block'
        bot_settings2_6_carousel4.style.color = ''
        bot_settings2_6_carousel4.style.color = 'pink'
        bot_settings2_6_carousel4.style.colorRadius = ''
        bot_settings_6_carousel9.style.display = 'block'
        bot_settings_6_carousel9.style.color = ''
        bot_settings_6_carousel9.style.color = 'pink'
        bot_settings_6_carousel9.style.colorRadius = ''
        bot_settings2_6_carousel9.style.display = 'block'
        bot_settings2_6_carousel9.style.color = ''
        bot_settings2_6_carousel9.style.color = 'pink'
        bot_settings2_6_carousel9.style.colorRadius = ''
        bot_settings_6_carousel5.style.display = 'block'
        bot_settings_6_carousel5.style.color = ''
        bot_settings_6_carousel5.style.color = 'pink'
        bot_settings_6_carousel5.style.colorRadius = ''
        bot_settings2_6_carousel5.style.display = 'block'
        bot_settings2_6_carousel5.style.color = ''
        bot_settings2_6_carousel5.style.color = 'pink'
        bot_settings2_6_carousel5.style.colorRadius = ''
        bot_settings_6_carousel10.style.display = 'block'
        bot_settings_6_carousel10.style.color = ''
        bot_settings_6_carousel10.style.color = 'pink'
        bot_settings_6_carousel10.style.colorRadius = ''
        bot_settings2_6_carousel10.style.display = 'block'
        bot_settings2_6_carousel10.style.color = ''
        bot_settings2_6_carousel10.style.color = 'pink'
        bot_settings2_6_carousel10.style.colorRadius = ''
    }
    if (bot_settings_cookie == 'bot7' || bot_settings_local_st == 'bot7' || bot_settings_set == 'bot7') {
        bot_settings_7.style.display = 'block'
        bot_settings_7.style.color = ''
        bot_settings_7.style.color = 'silver'
        bot_settings_7.style.colorRadius = ''
        bot_settings2_7.style.display = 'block'
        bot_settings2_7.style.color = ''
        bot_settings2_7.style.color = 'silver'
        bot_settings2_7.style.colorRadius = ''
        bot_settings_7_carousel6.style.display = 'block'
        bot_settings_7_carousel6.style.color = ''
        bot_settings_7_carousel6.style.color = 'silver'
        bot_settings_7_carousel6.style.colorRadius = ''
        bot_settings2_7_carousel6.style.display = 'block'
        bot_settings2_7_carousel6.style.color = ''
        bot_settings2_7_carousel6.style.color = 'silver'
        bot_settings2_7_carousel6.style.colorRadius = ''
        bot_settings_7_carousel2.style.display = 'block'
        bot_settings_7_carousel2.style.color = ''
        bot_settings_7_carousel2.style.color = 'silver'
        bot_settings_7_carousel2.style.colorRadius = ''
        bot_settings2_7_carousel2.style.display = 'block'
        bot_settings2_7_carousel2.style.color = ''
        bot_settings2_7_carousel2.style.color = 'silver'
        bot_settings2_7_carousel2.style.colorRadius = ''
        bot_settings_7_carousel7.style.display = 'block'
        bot_settings_7_carousel7.style.color = ''
        bot_settings_7_carousel7.style.color = 'silver'
        bot_settings_7_carousel7.style.colorRadius = ''
        bot_settings2_7_carousel7.style.display = 'block'
        bot_settings2_7_carousel7.style.color = ''
        bot_settings2_7_carousel7.style.color = 'silver'
        bot_settings2_7_carousel7.style.colorRadius = ''
        bot_settings_7_carousel3.style.display = 'block'
        bot_settings_7_carousel3.style.color = ''
        bot_settings_7_carousel3.style.color = 'silver'
        bot_settings_7_carousel3.style.colorRadius = ''
        bot_settings2_7_carousel3.style.display = 'block'
        bot_settings2_7_carousel3.style.color = ''
        bot_settings2_7_carousel3.style.color = 'silver'
        bot_settings2_7_carousel3.style.colorRadius = ''
        bot_settings_7_carousel8.style.display = 'block'
        bot_settings_7_carousel8.style.color = ''
        bot_settings_7_carousel8.style.color = 'silver'
        bot_settings_7_carousel8.style.colorRadius = ''
        bot_settings2_7_carousel8.style.display = 'block'
        bot_settings2_7_carousel8.style.color = ''
        bot_settings2_7_carousel8.style.color = 'silver'
        bot_settings2_7_carousel8.style.colorRadius = ''
        bot_settings_7_carousel4.style.display = 'block'
        bot_settings_7_carousel4.style.color = ''
        bot_settings_7_carousel4.style.color = 'silver'
        bot_settings_7_carousel4.style.colorRadius = ''
        bot_settings2_7_carousel4.style.display = 'block'
        bot_settings2_7_carousel4.style.color = ''
        bot_settings2_7_carousel4.style.color = 'silver'
        bot_settings2_7_carousel4.style.colorRadius = ''
        bot_settings_7_carousel9.style.display = 'block'
        bot_settings_7_carousel9.style.color = ''
        bot_settings_7_carousel9.style.color = 'silver'
        bot_settings_7_carousel9.style.colorRadius = ''
        bot_settings2_7_carousel9.style.display = 'block'
        bot_settings2_7_carousel9.style.color = ''
        bot_settings2_7_carousel9.style.color = 'silver'
        bot_settings2_7_carousel9.style.colorRadius = ''
        bot_settings_7_carousel5.style.display = 'block'
        bot_settings_7_carousel5.style.color = ''
        bot_settings_7_carousel5.style.color = 'silver'
        bot_settings_7_carousel5.style.colorRadius = ''
        bot_settings2_7_carousel5.style.display = 'block'
        bot_settings2_7_carousel5.style.color = ''
        bot_settings2_7_carousel5.style.color = 'silver'
        bot_settings2_7_carousel5.style.colorRadius = ''
        bot_settings_7_carousel10.style.display = 'block'
        bot_settings_7_carousel10.style.color = ''
        bot_settings_7_carousel10.style.color = 'silver'
        bot_settings_7_carousel10.style.colorRadius = ''
        bot_settings2_7_carousel10.style.display = 'block'
        bot_settings2_7_carousel10.style.color = ''
        bot_settings2_7_carousel10.style.color = 'silver'
        bot_settings2_7_carousel10.style.colorRadius = ''
    }
}

set_bot_setting_icon()


let toggleDropdown = document.getElementById('toggle_dropdown');
let dropdownContent = document.getElementById('dropdown_content');
const close_summary_all = document.querySelectorAll('.csmry');



toggleDropdown.addEventListener('click', function (event) {
    event.preventDefault();
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

const bots = document.querySelectorAll('a[class^="bot"]');

if (bot_section && bots.length > 0) {
    bots.forEach(bot => {
        bot.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the event from propagating to the document
            const botTextContent = this.textContent.trim();
            console.log(botTextContent); // Perform functionality based on textContent

            // Perform functionality based on the text content
            if (botTextContent === 'Trading Bot 1') {
                bot_settings_set = 'bot1'
                setCookie('bot_settings_cookie', 'bot1')
                localStorage.setItem('bot_settings_local_st', 'bot1')
                set_bot_setting_icon()
            } else if (botTextContent === 'Trading Bot 2') {
                bot_settings_set = 'bot2'
                setCookie('bot_settings_cookie', 'bot2')
                localStorage.setItem('bot_settings_local_st', 'bot2')
                set_bot_setting_icon()
            } else if (botTextContent === 'Trading Bot 3') {
                bot_settings_set = 'bot3'
                setCookie('bot_settings_cookie', 'bot3')
                localStorage.setItem('bot_settings_local_st', 'bot3')
                set_bot_setting_icon()
            } else if (botTextContent === 'Trading Bot 4') {
                bot_settings_set = 'bot4'
                setCookie('bot_settings_cookie', 'bot4')
                localStorage.setItem('bot_settings_local_st', 'bot4')
                set_bot_setting_icon()
            } else if (botTextContent === 'Trading Bot 5') {
                bot_settings_set = 'bot5'
                setCookie('bot_settings_cookie', 'bot5')
                localStorage.setItem('bot_settings_local_st', 'bot5')
                set_bot_setting_icon()
            } else if (botTextContent === 'Trading Bot 6') {
                bot_settings_set = 'bot6'
                setCookie('bot_settings_cookie', 'bot6')
                localStorage.setItem('bot_settings_local_st', 'bot6')
                set_bot_setting_icon()
            } else if (botTextContent === 'Trading Bot 7') {
                bot_settings_set = 'bot7'
                setCookie('bot_settings_cookie', 'bot7')
                localStorage.setItem('bot_settings_local_st', 'bot7')
                set_bot_setting_icon()
            } else {
                console.log('Unknown bot');
                // Add your functionality for unknown bots here
            }

            if (bot_section.style.display === 'none') {
                console.log('bot section block');
                bot_section.style.display = 'block';
                if (sidebar.style.left === '0px' && overlay2.style.display === 'block') {
                    sidebar.style.left = '-250px';
                    overlay2.style.display = 'none';
                }
            } else {
                bot_section.style.display = 'none';
            }
        });
    });

    close_summary_all.forEach(close => {
        close.addEventListener('click', function (event) {
            event.stopPropagation();
            if (bot_section.style.display === 'block') {
                bot_section.style.display = 'none';
                if (sidebar.style.left === '0px' && overlay2.style.display === 'block') {
                    sidebar.style.left = '-250px';
                    overlay2.style.display = 'none';
                }
            }
        });
    });
} else {
    console.error('One or more elements are not found');
}



let sumary_for_bots = document.querySelectorAll('.smryt');
let sidebar2 = document.getElementById('sidebar2');
let closeBtn2 = document.querySelector('.close-btn2');
let overlay4 = document.querySelector('.overlay4');


if ((sumary_for_bots && overlay4)) {
    sumary_for_bots.forEach(bot => {
        bot.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the event from propagating to the document
            if (sidebar2.style.left === "-250px" && overlay4.style.display === 'none') {
                sidebar2.style.left = '0px';
                overlay4.style.display = 'block';
            } else {
                sidebar2.style.left = '-250px';
                overlay4.style.display = 'none';
            }
        });
    })

    closeBtn2.addEventListener('click', (event) => {
        if (sidebar2.contains(event.target)) {
            sidebar2.style.left = '-250px';
            overlay4.style.display = 'none';
        }
    });


    overlay4.addEventListener('click', (event) => {
        if (!sidebar2.contains(event.target)) {
            sidebar2.style.left = '-250px';
            overlay4.style.display = 'none';
        }
    });
} else {
    console.error('One or more elements are not found');
}





function set_all_bot_running() {
    // Set bot states for carousels in localStorage and cookies
    localStorage.setItem('bot_state', 'start_bot');
    setCookie('bot_state', 'start_bot');

    localStorage.setItem('bots_state', 'start_bots');
    setCookie('bots_state', 'start_bots');

    localStorage.setItem('bot_state_carousel2', 'start_bot');
    setCookie('bot_state_carousel2', 'start_bot');

    localStorage.setItem('bots_state_carousel2', 'start_bots');
    setCookie('bots_state_carousel2', 'start_bots');

    localStorage.setItem('bot_state_carousel3', 'start_bot');
    setCookie('bot_state_carousel3', 'start_bot');

    localStorage.setItem('bots_state_carousel3', 'start_bots');
    setCookie('bots_state_carousel3', 'start_bots');

    localStorage.setItem('bot_state_carousel4', 'start_bot');
    setCookie('bot_state_carousel4', 'start_bot');

    localStorage.setItem('bots_state_carousel4', 'start_bots');
    setCookie('bots_state_carousel4', 'start_bots');

    localStorage.setItem('bot_state_carousel5', 'start_bot');
    setCookie('bot_state_carousel5', 'start_bot');

    localStorage.setItem('bots_state_carousel5', 'start_bots');
    setCookie('bots_state_carousel5', 'start_bots');

    localStorage.setItem('bot_state_carousel6', 'start_bot');
    setCookie('bot_state_carousel6', 'start_bot');

    localStorage.setItem('bots_state_carousel6', 'start_bots');
    setCookie('bots_state_carousel6', 'start_bots');

    localStorage.setItem('bot_state_carousel7', 'start_bot');
    setCookie('bot_state_carousel7', 'start_bot');

    localStorage.setItem('bots_state_carousel7', 'start_bots');
    setCookie('bots_state_carousel7', 'start_bots');

    localStorage.setItem('bot_state_carousel8', 'start_bot');
    setCookie('bot_state_carousel8', 'start_bot');

    localStorage.setItem('bots_state_carousel8', 'start_bots');
    setCookie('bots_state_carousel8', 'start_bots');

    localStorage.setItem('bot_state_carousel9', 'start_bot');
    setCookie('bot_state_carousel9', 'start_bot');

    localStorage.setItem('bots_state_carousel9', 'start_bots');
    setCookie('bots_state_carousel9', 'start_bots');

    localStorage.setItem('bot_state_carousel10', 'start_bot');
    setCookie('bot_state_carousel10', 'start_bot');

    localStorage.setItem('bots_state_carousel10', 'start_bots');
    setCookie('bots_state_carousel10', 'start_bots');

    localStorage.setItem('bot_state_carousel11', 'start_bot');
    setCookie('bot_state_carousel11', 'start_bot');

    localStorage.setItem('bots_state_carousel11', 'start_bots');
    setCookie('bots_state_carousel11', 'start_bots');

    localStorage.setItem('bot_state_carousel12', 'start_bot');
    setCookie('bot_state_carousel12', 'start_bot');

    localStorage.setItem('bots_state_carousel12', 'start_bots');
    setCookie('bots_state_carousel12', 'start_bots');

    localStorage.setItem('bot_state_carousel13', 'start_bot');
    setCookie('bot_state_carousel13', 'start_bot');

    localStorage.setItem('bots_state_carousel13', 'start_bots');
    setCookie('bots_state_carousel13', 'start_bots');

    localStorage.setItem('bot_state_carousel14', 'start_bot');
    setCookie('bot_state_carousel14', 'start_bot');

    localStorage.setItem('bots_state_carousel14', 'start_bots');
    setCookie('bots_state_carousel14', 'start_bots');

    localStorage.setItem('bot_state_carousel15', 'start_bot');
    setCookie('bot_state_carousel15', 'start_bot');

    localStorage.setItem('bots_state_carousel15', 'start_bots');
    setCookie('bots_state_carousel15', 'start_bots');

    localStorage.setItem('bot_state_carousel16', 'start_bot');
    setCookie('bot_state_carousel16', 'start_bot');

    localStorage.setItem('bots_state_carousel16', 'start_bots');
    setCookie('bots_state_carousel16', 'start_bots');

    localStorage.setItem('bot_state_carousel17', 'start_bot');
    setCookie('bot_state_carousel17', 'start_bot');

    localStorage.setItem('bots_state_carousel17', 'start_bots');
    setCookie('bots_state_carousel17', 'start_bots');

    localStorage.setItem('bot_state_carousel18', 'start_bot');
    setCookie('bot_state_carousel18', 'start_bot');

    localStorage.setItem('bots_state_carousel18', 'start_bots');
    setCookie('bots_state_carousel18', 'start_bots');

    localStorage.setItem('bot_state_carousel19', 'start_bot');
    setCookie('bot_state_carousel19', 'start_bot');

    localStorage.setItem('bots_state_carousel19', 'start_bots');
    setCookie('bots_state_carousel19', 'start_bots');

    localStorage.setItem('bot_state_carousel20', 'start_bot');
    setCookie('bot_state_carousel20', 'start_bot');

    localStorage.setItem('bots_state_carousel20', 'start_bots');
    setCookie('bots_state_carousel20', 'start_bots');

    // Retrieve bot state for carousel items from localStorage and cookies
    // Get bot states for carousels from localStorage and cookies
    let bot_state = localStorage.getItem('bot_state');
    let bot_state_cookie = getCookie('bot_state');

    let bots_state = localStorage.getItem('bots_state');
    let bots_state_cookie = getCookie('bots_state');

    let bot_state_carousel2 = localStorage.getItem('bot_state_carousel2');
    let bot_state_carousel2_cookie = getCookie('bot_state_carousel2');

    let bots_state_carousel2 = localStorage.getItem('bots_state_carousel2');
    let bots_state_carousel2_cookie = getCookie('bots_state_carousel2');

    let bot_state_carousel3 = localStorage.getItem('bot_state_carousel3');
    let bot_state_carousel3_cookie = getCookie('bot_state_carousel3');

    let bots_state_carousel3 = localStorage.getItem('bots_state_carousel3');
    let bots_state_carousel3_cookie = getCookie('bots_state_carousel3');

    let bot_state_carousel4 = localStorage.getItem('bot_state_carousel4');
    let bot_state_carousel4_cookie = getCookie('bot_state_carousel4');

    let bots_state_carousel4 = localStorage.getItem('bots_state_carousel4');
    let bots_state_carousel4_cookie = getCookie('bots_state_carousel4');

    let bot_state_carousel5 = localStorage.getItem('bot_state_carousel5');
    let bot_state_carousel5_cookie = getCookie('bot_state_carousel5');

    let bots_state_carousel5 = localStorage.getItem('bots_state_carousel5');
    let bots_state_carousel5_cookie = getCookie('bots_state_carousel5');

    let bot_state_carousel6 = localStorage.getItem('bot_state_carousel6');
    let bot_state_carousel6_cookie = getCookie('bot_state_carousel6');

    let bots_state_carousel6 = localStorage.getItem('bots_state_carousel6');
    let bots_state_carousel6_cookie = getCookie('bots_state_carousel6');

    let bot_state_carousel7 = localStorage.getItem('bot_state_carousel7');
    let bot_state_carousel7_cookie = getCookie('bot_state_carousel7');

    let bots_state_carousel7 = localStorage.getItem('bots_state_carousel7');
    let bots_state_carousel7_cookie = getCookie('bots_state_carousel7');

    let bot_state_carousel8 = localStorage.getItem('bot_state_carousel8');
    let bot_state_carousel8_cookie = getCookie('bot_state_carousel8');

    let bots_state_carousel8 = localStorage.getItem('bots_state_carousel8');
    let bots_state_carousel8_cookie = getCookie('bots_state_carousel8');

    let bot_state_carousel9 = localStorage.getItem('bot_state_carousel9');
    let bot_state_carousel9_cookie = getCookie('bot_state_carousel9');

    let bots_state_carousel9 = localStorage.getItem('bots_state_carousel9');
    let bots_state_carousel9_cookie = getCookie('bots_state_carousel9');

    let bot_state_carousel10 = localStorage.getItem('bot_state_carousel10');
    let bot_state_carousel10_cookie = getCookie('bot_state_carousel10');

    let bots_state_carousel10 = localStorage.getItem('bots_state_carousel10');
    let bots_state_carousel10_cookie = getCookie('bots_state_carousel10');

    let bot_state_carousel11 = localStorage.getItem('bot_state_carousel11');
    let bot_state_carousel11_cookie = getCookie('bot_state_carousel11');

    let bots_state_carousel11 = localStorage.getItem('bots_state_carousel11');
    let bots_state_carousel11_cookie = getCookie('bots_state_carousel11');

    let bot_state_carousel12 = localStorage.getItem('bot_state_carousel12');
    let bot_state_carousel12_cookie = getCookie('bot_state_carousel12');

    let bots_state_carousel12 = localStorage.getItem('bots_state_carousel12');
    let bots_state_carousel12_cookie = getCookie('bots_state_carousel12');

    let bot_state_carousel13 = localStorage.getItem('bot_state_carousel13');
    let bot_state_carousel13_cookie = getCookie('bot_state_carousel13');

    let bots_state_carousel13 = localStorage.getItem('bots_state_carousel13');
    let bots_state_carousel13_cookie = getCookie('bots_state_carousel13');

    let bot_state_carousel14 = localStorage.getItem('bot_state_carousel14');
    let bot_state_carousel14_cookie = getCookie('bot_state_carousel14');

    let bots_state_carousel14 = localStorage.getItem('bots_state_carousel14');
    let bots_state_carousel14_cookie = getCookie('bots_state_carousel14');

    let bot_state_carousel15 = localStorage.getItem('bot_state_carousel15');
    let bot_state_carousel15_cookie = getCookie('bot_state_carousel15');

    let bots_state_carousel15 = localStorage.getItem('bots_state_carousel15');
    let bots_state_carousel15_cookie = getCookie('bots_state_carousel15');

    let bot_state_carousel16 = localStorage.getItem('bot_state_carousel16');
    let bot_state_carousel16_cookie = getCookie('bot_state_carousel16');

    let bots_state_carousel16 = localStorage.getItem('bots_state_carousel16');
    let bots_state_carousel16_cookie = getCookie('bots_state_carousel16');

    let bot_state_carousel17 = localStorage.getItem('bot_state_carousel17');
    let bot_state_carousel17_cookie = getCookie('bot_state_carousel17');

    let bots_state_carousel17 = localStorage.getItem('bots_state_carousel17');
    let bots_state_carousel17_cookie = getCookie('bots_state_carousel17');

    let bot_state_carousel18 = localStorage.getItem('bot_state_carousel18');
    let bot_state_carousel18_cookie = getCookie('bot_state_carousel18');

    let bots_state_carousel18 = localStorage.getItem('bots_state_carousel18');
    let bots_state_carousel18_cookie = getCookie('bots_state_carousel18');

    let bot_state_carousel19 = localStorage.getItem('bot_state_carousel19');
    let bot_state_carousel19_cookie = getCookie('bot_state_carousel19');

    let bots_state_carousel19 = localStorage.getItem('bots_state_carousel19');
    let bots_state_carousel19_cookie = getCookie('bots_state_carousel19');

    let bot_state_carousel20 = localStorage.getItem('bot_state_carousel20');
    let bot_state_carousel20_cookie = getCookie('bot_state_carousel20');

    let bots_state_carousel20 = localStorage.getItem('bots_state_carousel20');
    let bots_state_carousel20_cookie = getCookie('bots_state_carousel20');

    if ((bot_state == "start_bot" || bot_state_cookie == 'start_bot') && (bots_state == 'start_bots' || bots_state_cookie == 'start_bots')) {
        document.getElementById('bot_state').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel2 == 'start_bot' || bot_state_carousel2_cookie == 'start_bot') && (bots_state_carousel2 == 'start_bots' || bots_state_carousel2_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel2').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel3 == 'start_bot' || bot_state_carousel3_cookie == 'start_bot') && (bots_state_carousel3 == 'start_bots' || bots_state_carousel3_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel3').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel4 == 'start_bot' || bot_state_carousel4_cookie == 'start_bot') && (bots_state_carousel4 == 'start_bots' || bots_state_carousel4_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel4').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel5 == 'start_bot' || bot_state_carousel5_cookie == 'start_bot') && (bots_state_carousel5 == 'start_bots' || bots_state_carousel5_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel5').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel6 == 'start_bot' || bot_state_carousel6_cookie == 'start_bot') && (bots_state_carousel6 == 'start_bots' || bots_state_carousel6_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel6').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel7 == 'start_bot' || bot_state_carousel7_cookie == 'start_bot') && (bots_state_carousel7 == 'start_bots' || bots_state_carousel7_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel7').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel8 == 'start_bot' || bot_state_carousel8_cookie == 'start_bot') && (bots_state_carousel8 == 'start_bots' || bots_state_carousel8_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel8').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel9 == 'start_bot' || bot_state_carousel9_cookie == 'start_bot') && (bots_state_carousel9 == 'start_bots' || bots_state_carousel9_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel9').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel10 == 'start_bot' || bot_state_carousel10_cookie == 'start_bot') && (bots_state_carousel10 == 'start_bots' || bots_state_carousel10_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel10').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel11 == 'start_bot' || bot_state_carousel11_cookie == 'start_bot') && (bots_state_carousel11 == 'start_bots' || bots_state_carousel11_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel11').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel12 == 'start_bot' || bot_state_carousel12_cookie == 'start_bot') && (bots_state_carousel12 == 'start_bots' || bots_state_carousel12_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel12').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel13 == 'start_bot' || bot_state_carousel13_cookie == 'start_bot') && (bots_state_carousel13 == 'start_bots' || bots_state_carousel13_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel13').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel14 == 'start_bot' || bot_state_carousel14_cookie == 'start_bot') && (bots_state_carousel14 == 'start_bots' || bots_state_carousel14_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel14').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel15 == 'start_bot' || bot_state_carousel15_cookie == 'start_bot') && (bots_state_carousel15 == 'start_bots' || bots_state_carousel15_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel15').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel16 == 'start_bot' || bot_state_carousel16_cookie == 'start_bot') && (bots_state_carousel16 == 'start_bots' || bots_state_carousel16_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel16').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel17 == 'start_bot' || bot_state_carousel17_cookie == 'start_bot') && (bots_state_carousel17 == 'start_bots' || bots_state_carousel17_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel17').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel18 == 'start_bot' || bot_state_carousel18_cookie == 'start_bot') && (bots_state_carousel18 == 'start_bots' || bots_state_carousel18_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel18').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel19 == 'start_bot' || bot_state_carousel19_cookie == 'start_bot') && (bots_state_carousel19 == 'start_bots' || bots_state_carousel19_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel19').textContent = 'Bot is running';
    }
    
    if ((bot_state_carousel20 == 'start_bot' || bot_state_carousel20_cookie == 'start_bot') && (bots_state_carousel20 == 'start_bots' || bots_state_carousel20_cookie == 'start_bots')) {
        document.getElementById('bot_state_carousel20').textContent = 'Bot is running';
    }
    
   
    
}



function set_all_bot_stop() {
    // Set bot states for carousels in localStorage and cookies
    localStorage.setItem('bot_state', 'stop_bot');
    setCookie('bot_state', 'stop_bot');

    localStorage.setItem('bots_state', 'stop_bots');
    setCookie('bots_state', 'stop_bots');

    localStorage.setItem('bot_state_carousel2', 'stop_bot');
    setCookie('bot_state_carousel2', 'stop_bot');

    localStorage.setItem('bots_state_carousel2', 'stop_bots');
    setCookie('bots_state_carousel2', 'stop_bots');

    localStorage.setItem('bot_state_carousel3', 'stop_bot');
    setCookie('bot_state_carousel3', 'stop_bot');

    localStorage.setItem('bots_state_carousel3', 'stop_bots');
    setCookie('bots_state_carousel3', 'stop_bots');

    localStorage.setItem('bot_state_carousel4', 'stop_bot');
    setCookie('bot_state_carousel4', 'stop_bot');

    localStorage.setItem('bots_state_carousel4', 'stop_bots');
    setCookie('bots_state_carousel4', 'stop_bots');

    localStorage.setItem('bot_state_carousel5', 'stop_bot');
    setCookie('bot_state_carousel5', 'stop_bot');

    localStorage.setItem('bots_state_carousel5', 'stop_bots');
    setCookie('bots_state_carousel5', 'stop_bots');

    localStorage.setItem('bot_state_carousel6', 'stop_bot');
    setCookie('bot_state_carousel6', 'stop_bot');

    localStorage.setItem('bots_state_carousel6', 'stop_bots');
    setCookie('bots_state_carousel6', 'stop_bots');

    localStorage.setItem('bot_state_carousel7', 'stop_bot');
    setCookie('bot_state_carousel7', 'stop_bot');

    localStorage.setItem('bots_state_carousel7', 'stop_bots');
    setCookie('bots_state_carousel7', 'stop_bots');

    localStorage.setItem('bot_state_carousel8', 'stop_bot');
    setCookie('bot_state_carousel8', 'stop_bot');

    localStorage.setItem('bots_state_carousel8', 'stop_bots');
    setCookie('bots_state_carousel8', 'stop_bots');

    localStorage.setItem('bot_state_carousel9', 'stop_bot');
    setCookie('bot_state_carousel9', 'stop_bot');

    localStorage.setItem('bots_state_carousel9', 'stop_bots');
    setCookie('bots_state_carousel9', 'stop_bots');

    localStorage.setItem('bot_state_carousel10', 'stop_bot');
    setCookie('bot_state_carousel10', 'stop_bot');

    localStorage.setItem('bots_state_carousel10', 'stop_bots');
    setCookie('bots_state_carousel10', 'stop_bots');

    localStorage.setItem('bot_state_carousel11', 'stop_bot');
    setCookie('bot_state_carousel11', 'stop_bot');

    localStorage.setItem('bots_state_carousel11', 'stop_bots');
    setCookie('bots_state_carousel11', 'stop_bots');

    localStorage.setItem('bot_state_carousel12', 'stop_bot');
    setCookie('bot_state_carousel12', 'stop_bot');

    localStorage.setItem('bots_state_carousel12', 'stop_bots');
    setCookie('bots_state_carousel12', 'stop_bots');

    localStorage.setItem('bot_state_carousel13', 'stop_bot');
    setCookie('bot_state_carousel13', 'stop_bot');

    localStorage.setItem('bots_state_carousel13', 'stop_bots');
    setCookie('bots_state_carousel13', 'stop_bots');

    localStorage.setItem('bot_state_carousel14', 'stop_bot');
    setCookie('bot_state_carousel14', 'stop_bot');

    localStorage.setItem('bots_state_carousel14', 'stop_bots');
    setCookie('bots_state_carousel14', 'stop_bots');

    localStorage.setItem('bot_state_carousel15', 'stop_bot');
    setCookie('bot_state_carousel15', 'stop_bot');

    localStorage.setItem('bots_state_carousel15', 'stop_bots');
    setCookie('bots_state_carousel15', 'stop_bots');

    localStorage.setItem('bot_state_carousel16', 'stop_bot');
    setCookie('bot_state_carousel16', 'stop_bot');

    localStorage.setItem('bots_state_carousel16', 'stop_bots');
    setCookie('bots_state_carousel16', 'stop_bots');

    localStorage.setItem('bot_state_carousel17', 'stop_bot');
    setCookie('bot_state_carousel17', 'stop_bot');

    localStorage.setItem('bots_state_carousel17', 'stop_bots');
    setCookie('bots_state_carousel17', 'stop_bots');

    localStorage.setItem('bot_state_carousel18', 'stop_bot');
    setCookie('bot_state_carousel18', 'stop_bot');

    localStorage.setItem('bots_state_carousel18', 'stop_bots');
    setCookie('bots_state_carousel18', 'stop_bots');

    localStorage.setItem('bot_state_carousel19', 'stop_bot');
    setCookie('bot_state_carousel19', 'stop_bot');

    localStorage.setItem('bots_state_carousel19', 'stop_bots');
    setCookie('bots_state_carousel19', 'stop_bots');

    localStorage.setItem('bot_state_carousel20', 'stop_bot');
    setCookie('bot_state_carousel20', 'stop_bot');

    localStorage.setItem('bots_state_carousel20', 'stop_bots');
    setCookie('bots_state_carousel20', 'stop_bots');

    let bot_state = localStorage.getItem('bot_state');
    let bot_state_cookie = getCookie('bot_state');

    let bots_state = localStorage.getItem('bots_state');
    let bots_state_cookie = getCookie('bots_state');

    let bot_state_carousel2 = localStorage.getItem('bot_state_carousel2');
    let bot_state_carousel2_cookie = getCookie('bot_state_carousel2');

    let bots_state_carousel2 = localStorage.getItem('bots_state_carousel2');
    let bots_state_carousel2_cookie = getCookie('bots_state_carousel2');

    let bot_state_carousel3 = localStorage.getItem('bot_state_carousel3');
    let bot_state_carousel3_cookie = getCookie('bot_state_carousel3');

    let bots_state_carousel3 = localStorage.getItem('bots_state_carousel3');
    let bots_state_carousel3_cookie = getCookie('bots_state_carousel3');

    let bot_state_carousel4 = localStorage.getItem('bot_state_carousel4');
    let bot_state_carousel4_cookie = getCookie('bot_state_carousel4');

    let bots_state_carousel4 = localStorage.getItem('bots_state_carousel4');
    let bots_state_carousel4_cookie = getCookie('bots_state_carousel4');

    let bot_state_carousel5 = localStorage.getItem('bot_state_carousel5');
    let bot_state_carousel5_cookie = getCookie('bot_state_carousel5');

    let bots_state_carousel5 = localStorage.getItem('bots_state_carousel5');
    let bots_state_carousel5_cookie = getCookie('bots_state_carousel5');

    let bot_state_carousel6 = localStorage.getItem('bot_state_carousel6');
    let bot_state_carousel6_cookie = getCookie('bot_state_carousel6');

    let bots_state_carousel6 = localStorage.getItem('bots_state_carousel6');
    let bots_state_carousel6_cookie = getCookie('bots_state_carousel6');

    let bot_state_carousel7 = localStorage.getItem('bot_state_carousel7');
    let bot_state_carousel7_cookie = getCookie('bot_state_carousel7');

    let bots_state_carousel7 = localStorage.getItem('bots_state_carousel7');
    let bots_state_carousel7_cookie = getCookie('bots_state_carousel7');

    let bot_state_carousel8 = localStorage.getItem('bot_state_carousel8');
    let bot_state_carousel8_cookie = getCookie('bot_state_carousel8');

    let bots_state_carousel8 = localStorage.getItem('bots_state_carousel8');
    let bots_state_carousel8_cookie = getCookie('bots_state_carousel8');

    let bot_state_carousel9 = localStorage.getItem('bot_state_carousel9');
    let bot_state_carousel9_cookie = getCookie('bot_state_carousel9');

    let bots_state_carousel9 = localStorage.getItem('bots_state_carousel9');
    let bots_state_carousel9_cookie = getCookie('bots_state_carousel9');

    let bot_state_carousel10 = localStorage.getItem('bot_state_carousel10');
    let bot_state_carousel10_cookie = getCookie('bot_state_carousel10');

    let bots_state_carousel10 = localStorage.getItem('bots_state_carousel10');
    let bots_state_carousel10_cookie = getCookie('bots_state_carousel10');

    let bot_state_carousel11 = localStorage.getItem('bot_state_carousel11');
    let bot_state_carousel11_cookie = getCookie('bot_state_carousel11');

    let bots_state_carousel11 = localStorage.getItem('bots_state_carousel11');
    let bots_state_carousel11_cookie = getCookie('bots_state_carousel11');

    let bot_state_carousel12 = localStorage.getItem('bot_state_carousel12');
    let bot_state_carousel12_cookie = getCookie('bot_state_carousel12');

    let bots_state_carousel12 = localStorage.getItem('bots_state_carousel12');
    let bots_state_carousel12_cookie = getCookie('bots_state_carousel12');

    let bot_state_carousel13 = localStorage.getItem('bot_state_carousel13');
    let bot_state_carousel13_cookie = getCookie('bot_state_carousel13');

    let bots_state_carousel13 = localStorage.getItem('bots_state_carousel13');
    let bots_state_carousel13_cookie = getCookie('bots_state_carousel13');

    let bot_state_carousel14 = localStorage.getItem('bot_state_carousel14');
    let bot_state_carousel14_cookie = getCookie('bot_state_carousel14');

    let bots_state_carousel14 = localStorage.getItem('bots_state_carousel14');
    let bots_state_carousel14_cookie = getCookie('bots_state_carousel14');

    let bot_state_carousel15 = localStorage.getItem('bot_state_carousel15');
    let bot_state_carousel15_cookie = getCookie('bot_state_carousel15');

    let bots_state_carousel15 = localStorage.getItem('bots_state_carousel15');
    let bots_state_carousel15_cookie = getCookie('bots_state_carousel15');

    let bot_state_carousel16 = localStorage.getItem('bot_state_carousel16');
    let bot_state_carousel16_cookie = getCookie('bot_state_carousel16');

    let bots_state_carousel16 = localStorage.getItem('bots_state_carousel16');
    let bots_state_carousel16_cookie = getCookie('bots_state_carousel16');

    let bot_state_carousel17 = localStorage.getItem('bot_state_carousel17');
    let bot_state_carousel17_cookie = getCookie('bot_state_carousel17');

    let bots_state_carousel17 = localStorage.getItem('bots_state_carousel17');
    let bots_state_carousel17_cookie = getCookie('bots_state_carousel17');

    let bot_state_carousel18 = localStorage.getItem('bot_state_carousel18');
    let bot_state_carousel18_cookie = getCookie('bot_state_carousel18');

    let bots_state_carousel18 = localStorage.getItem('bots_state_carousel18');
    let bots_state_carousel18_cookie = getCookie('bots_state_carousel18');

    let bot_state_carousel19 = localStorage.getItem('bot_state_carousel19');
    let bot_state_carousel19_cookie = getCookie('bot_state_carousel19');

    let bots_state_carousel19 = localStorage.getItem('bots_state_carousel19');
    let bots_state_carousel19_cookie = getCookie('bots_state_carousel19');

    let bot_state_carousel20 = localStorage.getItem('bot_state_carousel20');
    let bot_state_carousel20_cookie = getCookie('bot_state_carousel20');

    let bots_state_carousel20 = localStorage.getItem('bots_state_carousel20');
    let bots_state_carousel20_cookie = getCookie('bots_state_carousel20');

    if ((bot_state == "stop_bot" || bot_state_cookie == 'stop_bot') && (bots_state == 'stop_bots' || bots_state_cookie == 'stop_bots')) {
        document.getElementById('bot_state').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel2 == 'stop_bot' || bot_state_carousel2_cookie == 'stop_bot') && (bots_state_carousel2 == 'stop_bots' || bots_state_carousel2_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel2').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel3 == 'stop_bot' || bot_state_carousel3_cookie == 'stop_bot') && (bots_state_carousel3 == 'stop_bots' || bots_state_carousel3_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel3').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel4 == 'stop_bot' || bot_state_carousel4_cookie == 'stop_bot') && (bots_state_carousel4 == 'stop_bots' || bots_state_carousel4_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel4').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel5 == 'stop_bot' || bot_state_carousel5_cookie == 'stop_bot') && (bots_state_carousel5 == 'stop_bots' || bots_state_carousel5_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel5').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel6 == 'stop_bot' || bot_state_carousel6_cookie == 'stop_bot') && (bots_state_carousel6 == 'stop_bots' || bots_state_carousel6_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel6').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel7 == 'stop_bot' || bot_state_carousel7_cookie == 'stop_bot') && (bots_state_carousel7 == 'stop_bots' || bots_state_carousel7_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel7').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel8 == 'stop_bot' || bot_state_carousel8_cookie == 'stop_bot') && (bots_state_carousel8 == 'stop_bots' || bots_state_carousel8_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel8').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel9 == 'stop_bot' || bot_state_carousel9_cookie == 'stop_bot') && (bots_state_carousel9 == 'stop_bots' || bots_state_carousel9_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel9').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel10 == 'stop_bot' || bot_state_carousel10_cookie == 'stop_bot') && (bots_state_carousel10 == 'stop_bots' || bots_state_carousel10_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel10').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel11 == 'stop_bot' || bot_state_carousel11_cookie == 'stop_bot') && (bots_state_carousel11 == 'stop_bots' || bots_state_carousel11_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel11').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel12 == 'stop_bot' || bot_state_carousel12_cookie == 'stop_bot') && (bots_state_carousel12 == 'stop_bots' || bots_state_carousel12_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel12').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel13 == 'stop_bot' || bot_state_carousel13_cookie == 'stop_bot') && (bots_state_carousel13 == 'stop_bots' || bots_state_carousel13_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel13').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel14 == 'stop_bot' || bot_state_carousel14_cookie == 'stop_bot') && (bots_state_carousel14 == 'stop_bots' || bots_state_carousel14_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel14').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel15 == 'stop_bot' || bot_state_carousel15_cookie == 'stop_bot') && (bots_state_carousel15 == 'stop_bots' || bots_state_carousel15_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel15').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel16 == 'stop_bot' || bot_state_carousel16_cookie == 'stop_bot') && (bots_state_carousel16 == 'stop_bots' || bots_state_carousel16_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel16').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel17 == 'stop_bot' || bot_state_carousel17_cookie == 'stop_bot') && (bots_state_carousel17 == 'stop_bots' || bots_state_carousel17_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel17').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel18 == 'stop_bot' || bot_state_carousel18_cookie == 'stop_bot') && (bots_state_carousel18 == 'stop_bots' || bots_state_carousel18_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel18').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel19 == 'stop_bot' || bot_state_carousel19_cookie == 'stop_bot') && (bots_state_carousel19 == 'stop_bots' || bots_state_carousel19_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel19').textContent = 'Bot is stopped';
    }
    
    if ((bot_state_carousel20 == 'stop_bot' || bot_state_carousel20_cookie == 'stop_bot') && (bots_state_carousel20 == 'stop_bots' || bots_state_carousel20_cookie == 'stop_bots')) {
        document.getElementById('bot_state_carousel20').textContent = 'Bot is stopped';
    }
}


let buttonContainer2 = document.querySelector('.click_change2');

// Function to toggle play and pause buttons
function togglePlayPause2() {
    var play_button2 = document.getElementById('play_button2');
    var pause_button2 = document.getElementById('pause_button2');

    if (play_button2) {
        localStorage.setItem('all_bot_start_stop1', 'stop_bots')
        setCookie('all_bot_start_stop1', 'stop_bots')
        set_all_bot_stop()
        play_button2.parentNode.removeChild(play_button2);

        var pause_button2 = document.createElement('div');
        pause_button2.id = 'pause_button2';
        pause_button2.className = 'pause_button2';
        pause_button2.innerHTML = '&#10074;&#10074;';
        buttonContainer2.appendChild(pause_button2);
        document.getElementById('all_bot_text').textContent = 'all Bots has stopped'
    } else if (pause_button2) {
        localStorage.setItem('all_bot_start_stop1', 'start_bots')
        setCookie('all_bot_start_stop1', 'start_bots')
        set_all_bot_running()
        pause_button2.parentNode.removeChild(pause_button2);

        var play_button2 = document.createElement('div');
        play_button2.id = 'play_button2';
        play_button2.className = 'play_button2';
        play_button2.innerHTML = '&#9654;';
        buttonContainer2.appendChild(play_button2);
        document.getElementById('all_bot_text').textContent = 'all Bots are running'
    }
}

buttonContainer2.addEventListener('click', togglePlayPause2);


document.addEventListener('DOMContentLoaded', function () {
    localStorage.setItem('all_bot_start_stop1', 'stop_bots')
    localStorage.setItem('all_bot_martingale', 'false')

    localStorage.setItem('martingale', 'false');
    localStorage.setItem('martingale_carousel2', 'false');
    localStorage.setItem('martingale_carousel3', 'false');
    localStorage.setItem('martingale_carousel4', 'false');
    localStorage.setItem('martingale_carousel5', 'false');
    localStorage.setItem('martingale_carousel6', 'false');
    localStorage.setItem('martingale_carousel7', 'false');
    localStorage.setItem('martingale_carousel8', 'false');
    localStorage.setItem('martingale_carousel9', 'false');
    localStorage.setItem('martingale_carousel10', 'false');
    localStorage.setItem('martingale_carousel11', 'false');
    localStorage.setItem('martingale_carousel12', 'false');
    localStorage.setItem('martingale_carousel13', 'false');
    localStorage.setItem('martingale_carousel14', 'false');
    localStorage.setItem('martingale_carousel15', 'false');
    localStorage.setItem('martingale_carousel16', 'false');
    localStorage.setItem('martingale_carousel17', 'false');
    localStorage.setItem('martingale_carousel18', 'false');
    localStorage.setItem('martingale_carousel19', 'false');
    localStorage.setItem('martingale_carousel20', 'false');
    // Wait for the DOM to be fully loaded before manipulating it

    setCookie('all_bot_start_stop1', 'stop_bots')
    setCookie('all_bot_martingale', 'false')

    setCookie('martingale', 'false');
    setCookie('martingale_carousel2', 'false');
    setCookie('martingale_carousel3', 'false');
    setCookie('martingale_carousel4', 'false');
    setCookie('martingale_carousel5', 'false');
    setCookie('martingale_carousel6', 'false');
    setCookie('martingale_carousel7', 'false');
    setCookie('martingale_carousel8', 'false');
    setCookie('martingale_carousel9', 'false');
    setCookie('martingale_carousel10', 'false');
    setCookie('martingale_carousel11', 'false');
    setCookie('martingale_carousel12', 'false');
    setCookie('martingale_carousel13', 'false');
    setCookie('martingale_carousel14', 'false');
    setCookie('martingale_carousel15', 'false');
    setCookie('martingale_carousel16', 'false');
    setCookie('martingale_carousel17', 'false');
    setCookie('martingale_carousel18', 'false');
    setCookie('martingale_carousel19', 'false');
    setCookie('martingale_carousel20', 'false');
});




let tick_check = document.getElementById('tick_check')
let tick_check2 = document.getElementById('tick_check2')

let tick_check_carousel2 = document.getElementById('tick_check_carousel2')
let tick_check2_carousel2 = document.getElementById('tick_check2_carousel2')

let tick_check_carousel3 = document.getElementById('tick_check_carousel3')
let tick_check2_carousel3 = document.getElementById('tick_check2_carousel3')

let tick_check_carousel4 = document.getElementById('tick_check_carousel4')
let tick_check2_carousel4 = document.getElementById('tick_check2_carousel4')

let tick_check_carousel5 = document.getElementById('tick_check_carousel5')
let tick_check2_carousel5 = document.getElementById('tick_check2_carousel5')

let tick_check_carousel6 = document.getElementById('tick_check_carousel6')
let tick_check2_carousel6 = document.getElementById('tick_check2_carousel6')

let tick_check_carousel7 = document.getElementById('tick_check_carousel7')
let tick_check2_carousel7 = document.getElementById('tick_check2_carousel7')

let tick_check_carousel8 = document.getElementById('tick_check_carousel8')
let tick_check2_carousel8 = document.getElementById('tick_check2_carousel8')

let tick_check_carousel9 = document.getElementById('tick_check_carousel9')
let tick_check2_carousel9 = document.getElementById('tick_check2_carousel9')

let tick_check_carousel10 = document.getElementById('tick_check_carousel10')
let tick_check2_carousel10 = document.getElementById('tick_check2_carousel10')

let tick_check_carousel11 = document.getElementById('tick_check_carousel11')
let tick_check2_carousel11 = document.getElementById('tick_check2_carousel11')

let tick_check_carousel12 = document.getElementById('tick_check_carousel12')
let tick_check2_carousel12 = document.getElementById('tick_check2_carousel12')

let tick_check_carousel13 = document.getElementById('tick_check_carousel13')
let tick_check2_carousel13 = document.getElementById('tick_check2_carousel13')

let tick_check_carousel14 = document.getElementById('tick_check_carousel14')
let tick_check2_carousel14 = document.getElementById('tick_check2_carousel14')

let tick_check_carousel15 = document.getElementById('tick_check_carousel15')
let tick_check2_carousel15 = document.getElementById('tick_check2_carousel15')

let tick_check_carousel16 = document.getElementById('tick_check_carousel16')
let tick_check2_carousel16 = document.getElementById('tick_check2_carousel16')

let tick_check_carousel17 = document.getElementById('tick_check_carousel17')
let tick_check2_carousel17 = document.getElementById('tick_check2_carousel17')

let tick_check_carousel18 = document.getElementById('tick_check_carousel18')
let tick_check2_carousel18 = document.getElementById('tick_check2_carousel18')

let tick_check_carousel19 = document.getElementById('tick_check_carousel19')
let tick_check2_carousel19 = document.getElementById('tick_check2_carousel19')

let tick_check_carousel20 = document.getElementById('tick_check_carousel20')
let tick_check2_carousel20 = document.getElementById('tick_check2_carousel20')




let all_bot_set_count = 0

function bot_set_text() {
    tick_check.textContent = `${all_bot_set_count}`
    tick_check2.textContent = `${all_bot_set_count}`
    tick_check_carousel2.textContent = `${all_bot_set_count}`
    tick_check2_carousel2.textContent = `${all_bot_set_count}`
    tick_check_carousel3.textContent = `${all_bot_set_count}`
    tick_check2_carousel3.textContent = `${all_bot_set_count}`
    tick_check_carousel4.textContent = `${all_bot_set_count}`
    tick_check2_carousel4.textContent = `${all_bot_set_count}`
    tick_check_carousel5.textContent = `${all_bot_set_count}`
    tick_check2_carousel5.textContent = `${all_bot_set_count}`
    tick_check_carousel6.textContent = `${all_bot_set_count}`
    tick_check2_carousel6.textContent = `${all_bot_set_count}`
    tick_check_carousel7.textContent = `${all_bot_set_count}`
    tick_check2_carousel7.textContent = `${all_bot_set_count}`
    tick_check_carousel8.textContent = `${all_bot_set_count}`
    tick_check2_carousel8.textContent = `${all_bot_set_count}`
    tick_check_carousel9.textContent = `${all_bot_set_count}`
    tick_check2_carousel9.textContent = `${all_bot_set_count}`
    tick_check_carousel10.textContent = `${all_bot_set_count}`
    tick_check2_carousel10.textContent = `${all_bot_set_count}`
    tick_check_carousel11.textContent = `${all_bot_set_count}`
    tick_check2_carousel11.textContent = `${all_bot_set_count}`
    tick_check_carousel12.textContent = `${all_bot_set_count}`
    tick_check2_carousel12.textContent = `${all_bot_set_count}`
    tick_check_carousel13.textContent = `${all_bot_set_count}`
    tick_check2_carousel13.textContent = `${all_bot_set_count}`
    tick_check_carousel14.textContent = `${all_bot_set_count}`
    tick_check2_carousel14.textContent = `${all_bot_set_count}`
    tick_check_carousel15.textContent = `${all_bot_set_count}`
    tick_check2_carousel15.textContent = `${all_bot_set_count}`
    tick_check_carousel16.textContent = `${all_bot_set_count}`
    tick_check2_carousel16.textContent = `${all_bot_set_count}`
    tick_check_carousel17.textContent = `${all_bot_set_count}`
    tick_check2_carousel17.textContent = `${all_bot_set_count}`
    tick_check_carousel18.textContent = `${all_bot_set_count}`
    tick_check2_carousel18.textContent = `${all_bot_set_count}`
    tick_check_carousel19.textContent = `${all_bot_set_count}`
    tick_check2_carousel19.textContent = `${all_bot_set_count}`
    tick_check_carousel20.textContent = `${all_bot_set_count}`
    tick_check2_carousel20.textContent = `${all_bot_set_count}`

}




function all_bot_set() {
    localStorage.setItem('bot_set', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel2', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel3', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel4', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel5', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel6', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel7', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel8', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel9', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel10', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel11', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel12', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel13', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel14', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel15', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel16', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel17', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel18', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel19', `${all_bot_set_count}`)
    localStorage.setItem('bot_set_carousel20', `${all_bot_set_count}`)

    setCookie('bot_set', `${all_bot_set_count}`)
    setCookie('bot_set_carousel2', `${all_bot_set_count}`)
    setCookie('bot_set_carousel3', `${all_bot_set_count}`)
    setCookie('bot_set_carousel4', `${all_bot_set_count}`)
    setCookie('bot_set_carousel5', `${all_bot_set_count}`)
    setCookie('bot_set_carousel6', `${all_bot_set_count}`)
    setCookie('bot_set_carousel7', `${all_bot_set_count}`)
    setCookie('bot_set_carousel8', `${all_bot_set_count}`)
    setCookie('bot_set_carousel9', `${all_bot_set_count}`)
    setCookie('bot_set_carousel10', `${all_bot_set_count}`)
    setCookie('bot_set_carousel11', `${all_bot_set_count}`)
    setCookie('bot_set_carousel12', `${all_bot_set_count}`)
    setCookie('bot_set_carousel13', `${all_bot_set_count}`)
    setCookie('bot_set_carousel14', `${all_bot_set_count}`)
    setCookie('bot_set_carousel15', `${all_bot_set_count}`)
    setCookie('bot_set_carousel16', `${all_bot_set_count}`)
    setCookie('bot_set_carousel17', `${all_bot_set_count}`)
    setCookie('bot_set_carousel18', `${all_bot_set_count}`)
    setCookie('bot_set_carousel19', `${all_bot_set_count}`)
    setCookie('bot_set_carousel20', `${all_bot_set_count}`)

}


let increase_all_bot_set = document.getElementById('increase_all_bot_set')
let reduce_all_bot_set = document.getElementById('reduce_all_bot_set')

increase_all_bot_set.addEventListener('click', () => {
    if (all_bot_set_count < 10) {
        all_bot_set_count = all_bot_set_count + 1
        all_bot_set()
        bot_set_text()
    }
})

reduce_all_bot_set.addEventListener('click', () => {
    if (all_bot_set_count > 1) {
        all_bot_set_count = all_bot_set_count - 1
        all_bot_set()
        bot_set_text()
    }
})



let martingale = document.getElementById('martingale')
let martingale2 = document.getElementById('martingale2')

let martingale_carousel2 = document.getElementById('martingale_carousel2')
let martingale2_carousel2 = document.getElementById('martingale2_carousel2')

let martingale_carousel3 = document.getElementById('martingale_carousel3')
let martingale2_carousel3 = document.getElementById('martingale2_carousel3')

let martingale_carousel4 = document.getElementById('martingale_carousel4')
let martingale2_carousel4 = document.getElementById('martingale2_carousel4')

let martingale_carousel5 = document.getElementById('martingale_carousel5')
let martingale2_carousel5 = document.getElementById('martingale2_carousel5')

let martingale_carousel6 = document.getElementById('martingale_carousel6')
let martingale2_carousel6 = document.getElementById('martingale2_carousel6')

let martingale_carousel7 = document.getElementById('martingale_carousel7')
let martingale2_carousel7 = document.getElementById('martingale2_carousel7')

let martingale_carousel8 = document.getElementById('martingale_carousel8')
let martingale2_carousel8 = document.getElementById('martingale2_carousel8')

let martingale_carousel9 = document.getElementById('martingale_carousel9')
let martingale2_carousel9 = document.getElementById('martingale2_carousel9')

let martingale_carousel10 = document.getElementById('martingale_carousel10')
let martingale2_carousel10 = document.getElementById('martingale2_carousel10')

let martingale_carousel11 = document.getElementById('martingale_carousel11')
let martingale2_carousel11 = document.getElementById('martingale2_carousel11')

let martingale_carousel12 = document.getElementById('martingale_carousel12')
let martingale2_carousel12 = document.getElementById('martingale2_carousel12')

let martingale_carousel13 = document.getElementById('martingale_carousel13')
let martingale2_carousel13 = document.getElementById('martingale2_carousel13')

let martingale_carousel14 = document.getElementById('martingale_carousel14')
let martingale2_carousel14 = document.getElementById('martingale2_carousel14')

let martingale_carousel15 = document.getElementById('martingale_carousel15')
let martingale2_carousel15 = document.getElementById('martingale2_carousel15')

let martingale_carousel16 = document.getElementById('martingale_carousel16')
let martingale2_carousel16 = document.getElementById('martingale2_carousel16')

let martingale_carousel17 = document.getElementById('martingale_carousel17')
let martingale2_carousel17 = document.getElementById('martingale2_carousel17')

let martingale_carousel18 = document.getElementById('martingale_carousel18')
let martingale2_carousel18 = document.getElementById('martingale2_carousel18')

let martingale_carousel19 = document.getElementById('martingale_carousel19')
let martingale2_carousel19 = document.getElementById('martingale2_carousel19')

let martingale_carousel20 = document.getElementById('martingale_carousel20')
let martingale2_carousel20 = document.getElementById('martingale2_carousel20')

function set_all_martigale_active() {
    martingale.classList.add('active_mat');
    martingale2.classList.add('active_mat');

    martingale_carousel2.classList.add('active_mat');
    martingale2_carousel2.classList.add('active_mat');

    martingale_carousel3.classList.add('active_mat');
    martingale2_carousel3.classList.add('active_mat');

    martingale_carousel4.classList.add('active_mat');
    martingale2_carousel4.classList.add('active_mat');

    martingale_carousel5.classList.add('active_mat');
    martingale2_carousel5.classList.add('active_mat');

    martingale_carousel6.classList.add('active_mat');
    martingale2_carousel6.classList.add('active_mat');

    martingale_carousel7.classList.add('active_mat');
    martingale2_carousel7.classList.add('active_mat');

    martingale_carousel8.classList.add('active_mat');
    martingale2_carousel8.classList.add('active_mat');

    martingale_carousel9.classList.add('active_mat');
    martingale2_carousel9.classList.add('active_mat');

    martingale_carousel10.classList.add('active_mat');
    martingale2_carousel10.classList.add('active_mat');

    martingale_carousel11.classList.add('active_mat');
    martingale2_carousel11.classList.add('active_mat');

    martingale_carousel12.classList.add('active_mat');
    martingale2_carousel12.classList.add('active_mat');

    martingale_carousel13.classList.add('active_mat');
    martingale2_carousel13.classList.add('active_mat');

    martingale_carousel14.classList.add('active_mat');
    martingale2_carousel14.classList.add('active_mat');

    martingale_carousel15.classList.add('active_mat');
    martingale2_carousel15.classList.add('active_mat');

    martingale_carousel16.classList.add('active_mat');
    martingale2_carousel16.classList.add('active_mat');

    martingale_carousel17.classList.add('active_mat');
    martingale2_carousel17.classList.add('active_mat');

    martingale_carousel18.classList.add('active_mat');
    martingale2_carousel18.classList.add('active_mat');

    martingale_carousel19.classList.add('active_mat');
    martingale2_carousel19.classList.add('active_mat');

    martingale_carousel20.classList.add('active_mat');
    martingale2_carousel20.classList.add('active_mat');

}


function remove_all_martigale_active() {
    martingale.classList.remove('active_mat');
    martingale2.classList.remove('active_mat');

    martingale_carousel2.classList.remove('active_mat');
    martingale2_carousel2.classList.remove('active_mat');

    martingale_carousel3.classList.remove('active_mat');
    martingale2_carousel3.classList.remove('active_mat');

    martingale_carousel4.classList.remove('active_mat');
    martingale2_carousel4.classList.remove('active_mat');

    martingale_carousel5.classList.remove('active_mat');
    martingale2_carousel5.classList.remove('active_mat');

    martingale_carousel6.classList.remove('active_mat');
    martingale2_carousel6.classList.remove('active_mat');

    martingale_carousel7.classList.remove('active_mat');
    martingale2_carousel7.classList.remove('active_mat');

    martingale_carousel8.classList.remove('active_mat');
    martingale2_carousel8.classList.remove('active_mat');

    martingale_carousel9.classList.remove('active_mat');
    martingale2_carousel9.classList.remove('active_mat');

    martingale_carousel10.classList.remove('active_mat');
    martingale2_carousel10.classList.remove('active_mat');

    martingale_carousel11.classList.remove('active_mat');
    martingale2_carousel11.classList.remove('active_mat');

    martingale_carousel12.classList.remove('active_mat');
    martingale2_carousel12.classList.remove('active_mat');

    martingale_carousel13.classList.remove('active_mat');
    martingale2_carousel13.classList.remove('active_mat');

    martingale_carousel14.classList.remove('active_mat');
    martingale2_carousel14.classList.remove('active_mat');

    martingale_carousel15.classList.remove('active_mat');
    martingale2_carousel15.classList.remove('active_mat');

    martingale_carousel16.classList.remove('active_mat');
    martingale2_carousel16.classList.remove('active_mat');

    martingale_carousel17.classList.remove('active_mat');
    martingale2_carousel17.classList.remove('active_mat');

    martingale_carousel18.classList.remove('active_mat');
    martingale2_carousel18.classList.remove('active_mat');

    martingale_carousel19.classList.remove('active_mat');
    martingale2_carousel19.classList.remove('active_mat');

    martingale_carousel20.classList.remove('active_mat');
    martingale2_carousel20.classList.remove('active_mat');

}




function set_all_martigale() {
    localStorage.setItem('martingale', 'true');
    localStorage.setItem('martingale_carousel2', 'true');
    localStorage.setItem('martingale_carousel3', 'true');
    localStorage.setItem('martingale_carousel4', 'true');
    localStorage.setItem('martingale_carousel5', 'true');
    localStorage.setItem('martingale_carousel6', 'true');
    localStorage.setItem('martingale_carousel7', 'true');
    localStorage.setItem('martingale_carousel8', 'true');
    localStorage.setItem('martingale_carousel9', 'true');
    localStorage.setItem('martingale_carousel10', 'true');
    localStorage.setItem('martingale_carousel11', 'true');
    localStorage.setItem('martingale_carousel12', 'true');
    localStorage.setItem('martingale_carousel13', 'true');
    localStorage.setItem('martingale_carousel14', 'true');
    localStorage.setItem('martingale_carousel15', 'true');
    localStorage.setItem('martingale_carousel16', 'true');
    localStorage.setItem('martingale_carousel17', 'true');
    localStorage.setItem('martingale_carousel18', 'true');
    localStorage.setItem('martingale_carousel19', 'true');
    localStorage.setItem('martingale_carousel20', 'true');

    setCookie('martingale', 'true');
    setCookie('martingale_carousel2', 'true');
    setCookie('martingale_carousel3', 'true');
    setCookie('martingale_carousel4', 'true');
    setCookie('martingale_carousel5', 'true');
    setCookie('martingale_carousel6', 'true');
    setCookie('martingale_carousel7', 'true');
    setCookie('martingale_carousel8', 'true');
    setCookie('martingale_carousel9', 'true');
    setCookie('martingale_carousel10', 'true');
    setCookie('martingale_carousel11', 'true');
    setCookie('martingale_carousel12', 'true');
    setCookie('martingale_carousel13', 'true');
    setCookie('martingale_carousel14', 'true');
    setCookie('martingale_carousel15', 'true');
    setCookie('martingale_carousel16', 'true');
    setCookie('martingale_carousel17', 'true');
    setCookie('martingale_carousel18', 'true');
    setCookie('martingale_carousel19', 'true');
    setCookie('martingale_carousel20', 'true');

}
function remove_all_martigale() {
    localStorage.setItem('martingale', 'false');
    localStorage.setItem('martingale_carousel2', 'false');
    localStorage.setItem('martingale_carousel3', 'false');
    localStorage.setItem('martingale_carousel4', 'false');
    localStorage.setItem('martingale_carousel5', 'false');
    localStorage.setItem('martingale_carousel6', 'false');
    localStorage.setItem('martingale_carousel7', 'false');
    localStorage.setItem('martingale_carousel8', 'false');
    localStorage.setItem('martingale_carousel9', 'false');
    localStorage.setItem('martingale_carousel10', 'false');
    localStorage.setItem('martingale_carousel11', 'false');
    localStorage.setItem('martingale_carousel12', 'false');
    localStorage.setItem('martingale_carousel13', 'false');
    localStorage.setItem('martingale_carousel14', 'false');
    localStorage.setItem('martingale_carousel15', 'false');
    localStorage.setItem('martingale_carousel16', 'false');
    localStorage.setItem('martingale_carousel17', 'false');
    localStorage.setItem('martingale_carousel18', 'false');
    localStorage.setItem('martingale_carousel19', 'false');
    localStorage.setItem('martingale_carousel20', 'false');

    setCookie('martingale', 'false');
    setCookie('martingale_carousel2', 'false');
    setCookie('martingale_carousel3', 'false');
    setCookie('martingale_carousel4', 'false');
    setCookie('martingale_carousel5', 'false');
    setCookie('martingale_carousel6', 'false');
    setCookie('martingale_carousel7', 'false');
    setCookie('martingale_carousel8', 'false');
    setCookie('martingale_carousel9', 'false');
    setCookie('martingale_carousel10', 'false');
    setCookie('martingale_carousel11', 'false');
    setCookie('martingale_carousel12', 'false');
    setCookie('martingale_carousel13', 'false');
    setCookie('martingale_carousel14', 'false');
    setCookie('martingale_carousel15', 'false');
    setCookie('martingale_carousel16', 'false');
    setCookie('martingale_carousel17', 'false');
    setCookie('martingale_carousel18', 'false');
    setCookie('martingale_carousel19', 'false');
    setCookie('martingale_carousel20', 'false');

}



let on_all_mat = document.getElementById('on_all_mat')

let all_bot_mat = document.getElementById('all_bot_mat')

all_bot_mat.addEventListener('click', () => {
    let all_martingale = localStorage.getItem('all_bot_martingale')
    if (!all_bot_mat.classList.contains('all_mat_active') && (!all_martingale || all_martingale == 'false')) {
        all_bot_mat.classList.add('all_mat_active')
        localStorage.setItem('all_bot_martingale', 'true')
        setCookie('all_bot_martingale', 'true')
        set_all_martigale()
        set_all_martigale_active()
        on_all_mat.textContent = 'all bot martinglae on'
    } else {
        all_bot_mat.classList.remove('all_mat_active')
        localStorage.setItem('all_bot_martingale', 'false')
        setCookie('all_bot_martingale', 'false')
        remove_all_martigale()
        remove_all_martigale_active()
        on_all_mat.textContent = 'all bot martinglae off'
    }
})



let martingale_jump2 = document.getElementById('martingale_jump2');
let martingale_jump = document.getElementById('martingale_jump');

let martingale_jump_carousel2 = document.getElementById('martingale_jump_carousel2');
let martingale_jump2_carousel2 = document.getElementById('martingale_jump2_carousel2');

let martingale_jump_carousel3 = document.getElementById('martingale_jump_carousel3');
let martingale_jump2_carousel3 = document.getElementById('martingale_jump2_carousel3');

let martingale_jump_carousel4 = document.getElementById('martingale_jump_carousel4');
let martingale_jump2_carousel4 = document.getElementById('martingale_jump2_carousel4');

let martingale_jump_carousel5 = document.getElementById('martingale_jump_carousel5');
let martingale_jump2_carousel5 = document.getElementById('martingale_jump2_carousel5');

let martingale_jump_carousel6 = document.getElementById('martingale_jump_carousel6');
let martingale_jump2_carousel6 = document.getElementById('martingale_jump2_carousel6');

let martingale_jump_carousel7 = document.getElementById('martingale_jump_carousel7');
let martingale_jump2_carousel7 = document.getElementById('martingale_jump2_carousel7');

let martingale_jump_carousel8 = document.getElementById('martingale_jump_carousel8');
let martingale_jump2_carousel8 = document.getElementById('martingale_jump2_carousel8');

let martingale_jump_carousel9 = document.getElementById('martingale_jump_carousel9');
let martingale_jump2_carousel9 = document.getElementById('martingale_jump2_carousel9');

let martingale_jump_carousel10 = document.getElementById('martingale_jump_carousel10');
let martingale_jump2_carousel10 = document.getElementById('martingale_jump2_carousel10');

let martingale_jump_carousel11 = document.getElementById('martingale_jump_carousel11');
let martingale_jump2_carousel11 = document.getElementById('martingale_jump2_carousel11');

let martingale_jump_carousel12 = document.getElementById('martingale_jump_carousel12');
let martingale_jump2_carousel12 = document.getElementById('martingale_jump2_carousel12');

let martingale_jump_carousel13 = document.getElementById('martingale_jump_carousel13');
let martingale_jump2_carousel13 = document.getElementById('martingale_jump2_carousel13');

let martingale_jump_carousel14 = document.getElementById('martingale_jump_carousel14');
let martingale_jump2_carousel14 = document.getElementById('martingale_jump2_carousel14');

let martingale_jump_carousel15 = document.getElementById('martingale_jump_carousel15');
let martingale_jump2_carousel15 = document.getElementById('martingale_jump2_carousel15');

let martingale_jump_carousel16 = document.getElementById('martingale_jump_carousel16');
let martingale_jump2_carousel16 = document.getElementById('martingale_jump2_carousel16');

let martingale_jump_carousel17 = document.getElementById('martingale_jump_carousel17');
let martingale_jump2_carousel17 = document.getElementById('martingale_jump2_carousel17');

let martingale_jump_carousel18 = document.getElementById('martingale_jump_carousel18');
let martingale_jump2_carousel18 = document.getElementById('martingale_jump2_carousel18');

let martingale_jump_carousel19 = document.getElementById('martingale_jump_carousel19');
let martingale_jump2_carousel19 = document.getElementById('martingale_jump2_carousel19');

let martingale_jump_carousel20 = document.getElementById('martingale_jump_carousel20');
let martingale_jump2_carousel20 = document.getElementById('martingale_jump2_carousel20');

let increase_all_bot_jump = document.getElementById('increase_all_bot_jump');
let reduce_all_bot_jump = document.getElementById('reduce_all_bot_jump');

let jump_count = 0;
let jump_count2 = 0;
let jump_count3 = 0;
let jump_count4 = 0;
let jump_count5 = 0;
let jump_count6 = 0;
let jump_count7 = 0;
let jump_count8 = 0;
let jump_count9 = 0;
let jump_count10 = 0;
let jump_count11 = 0;
let jump_count12 = 0;
let jump_count13 = 0;
let jump_count14 = 0;
let jump_count15 = 0;
let jump_count16 = 0;
let jump_count17 = 0;
let jump_count18 = 0;
let jump_count19 = 0;
let jump_count20 = 0;


function jump_count_set() {
    localStorage.setItem('bot_jump', jump_count);
    setCookie('bot_jump', jump_count);

    localStorage.setItem('bot_jump_carousel2', jump_count2);
    setCookie('bot_jump_carousel2', jump_count2);

    localStorage.setItem('bot_jump_carousel3', jump_count3);
    setCookie('bot_jump_carousel3', jump_count3);

    localStorage.setItem('bot_jump_carousel4', jump_count4);
    setCookie('bot_jump_carousel4', jump_count4);

    localStorage.setItem('bot_jump_carousel5', jump_count5);
    setCookie('bot_jump_carousel5', jump_count5);

    localStorage.setItem('bot_jump_carousel6', jump_count6);
    setCookie('bot_jump_carousel6', jump_count6);

    localStorage.setItem('bot_jump_carousel7', jump_count7);
    setCookie('bot_jump_carousel7', jump_count7);

    localStorage.setItem('bot_jump_carousel8', jump_count8);
    setCookie('bot_jump_carousel8', jump_count8);

    localStorage.setItem('bot_jump_carousel9', jump_count9);
    setCookie('bot_jump_carousel9', jump_count9);

    localStorage.setItem('bot_jump_carousel10', jump_count10);
    setCookie('bot_jump_carousel10', jump_count10);

    localStorage.setItem('bot_jump_carousel11', jump_count11);
    setCookie('bot_jump_carousel11', jump_count11);

    localStorage.setItem('bot_jump_carousel12', jump_count12);
    setCookie('bot_jump_carousel12', jump_count12);

    localStorage.setItem('bot_jump_carousel13', jump_count13);
    setCookie('bot_jump_carousel13', jump_count13);

    localStorage.setItem('bot_jump_carousel14', jump_count14);
    setCookie('bot_jump_carousel14', jump_count14);

    localStorage.setItem('bot_jump_carousel15', jump_count15);
    setCookie('bot_jump_carousel15', jump_count15);

    localStorage.setItem('bot_jump_carousel16', jump_count16);
    setCookie('bot_jump_carousel16', jump_count16);

    localStorage.setItem('bot_jump_carousel17', jump_count17);
    setCookie('bot_jump_carousel17', jump_count17);

    localStorage.setItem('bot_jump_carousel18', jump_count18);
    setCookie('bot_jump_carousel18', jump_count18);

    localStorage.setItem('bot_jump_carousel19', jump_count19);
    setCookie('bot_jump_carousel19', jump_count19);

    localStorage.setItem('bot_jump_carousel20', jump_count20);
    setCookie('bot_jump_carousel20', jump_count20);

}


function jump_count_set2() {
    if (isNaN(jump_count)) {
        jump_count = 0;
    }
    if (isNaN(jump_count2)) {
        jump_count2 = 0;
    }
    if (isNaN(jump_count3)) {
        jump_count3 = 0;
    }
    if (isNaN(jump_count4)) {
        jump_count4 = 0;
    }
    if (isNaN(jump_count5)) {
        jump_count5 = 0;
    }
    if (isNaN(jump_count6)) {
        jump_count6 = 0;
    }
    if (isNaN(jump_count7)) {
        jump_count7 = 0;
    }
    if (isNaN(jump_count8)) {
        jump_count8 = 0;
    }
    if (isNaN(jump_count9)) {
        jump_count9 = 0;
    }
    if (isNaN(jump_count10)) {
        jump_count10 = 0;
    }
    if (isNaN(jump_count11)) {
        jump_count11 = 0;
    }
    if (isNaN(jump_count12)) {
        jump_count12 = 0;
    }
    if (isNaN(jump_count13)) {
        jump_count13 = 0;
    }
    if (isNaN(jump_count14)) {
        jump_count14 = 0;
    }
    if (isNaN(jump_count15)) {
        jump_count15 = 0;
    }
    if (isNaN(jump_count16)) {
        jump_count16 = 0;
    }
    if (isNaN(jump_count17)) {
        jump_count17 = 0;
    }
    if (isNaN(jump_count18)) {
        jump_count18 = 0;
    }
    if (isNaN(jump_count19)) {
        jump_count19 = 0;
    }
    if (isNaN(jump_count20)) {
        jump_count20 = 0;
    }


    if (jump_count > 0) {
        martingale_jump.textContent = 'j' + jump_count;
        martingale_jump2.textContent = 'j' + jump_count;
    } else {
        martingale_jump.textContent = '';
        martingale_jump2.textContent = '';
    }

    if (jump_count2 > 0) {
        martingale_jump_carousel2.textContent = 'j' + jump_count2;
        martingale_jump2_carousel2.textContent = 'j' + jump_count2;
    } else {
        martingale_jump_carousel2.textContent = '';
        martingale_jump2_carousel2.textContent = '';
    }

    if (jump_count3 > 0) {
        martingale_jump_carousel3.textContent = 'j' + jump_count3;
        martingale_jump2_carousel3.textContent = 'j' + jump_count3;
    } else {
        martingale_jump_carousel3.textContent = '';
        martingale_jump2_carousel3.textContent = '';
    }

    if (jump_count4 > 0) {
        martingale_jump_carousel4.textContent = 'j' + jump_count4;
        martingale_jump2_carousel4.textContent = 'j' + jump_count4;
    } else {
        martingale_jump_carousel4.textContent = '';
        martingale_jump2_carousel4.textContent = '';
    }

    if (jump_count5 > 0) {
        martingale_jump_carousel5.textContent = 'j' + jump_count5;
        martingale_jump2_carousel5.textContent = 'j' + jump_count5;
    } else {
        martingale_jump_carousel5.textContent = '';
        martingale_jump2_carousel5.textContent = '';
    }

    if (jump_count6 > 0) {
        martingale_jump_carousel6.textContent = 'j' + jump_count6;
        martingale_jump2_carousel6.textContent = 'j' + jump_count6;
    } else {
        martingale_jump_carousel6.textContent = '';
        martingale_jump2_carousel6.textContent = '';
    }

    if (jump_count7 > 0) {
        martingale_jump_carousel7.textContent = 'j' + jump_count7;
        martingale_jump2_carousel7.textContent = 'j' + jump_count7;
    } else {
        martingale_jump_carousel7.textContent = '';
        martingale_jump2_carousel7.textContent = '';
    }

    if (jump_count8 > 0) {
        martingale_jump_carousel8.textContent = 'j' + jump_count8;
        martingale_jump2_carousel8.textContent = 'j' + jump_count8;
    } else {
        martingale_jump_carousel8.textContent = '';
        martingale_jump2_carousel8.textContent = '';
    }

    if (jump_count9 > 0) {
        martingale_jump_carousel9.textContent = 'j' + jump_count9;
        martingale_jump2_carousel9.textContent = 'j' + jump_count9;
    } else {
        martingale_jump_carousel9.textContent = '';
        martingale_jump2_carousel9.textContent = '';
    }

    if (jump_count10 > 0) {
        martingale_jump_carousel10.textContent = 'j' + jump_count10;
        martingale_jump2_carousel10.textContent = 'j' + jump_count10;
    } else {
        martingale_jump_carousel10.textContent = '';
        martingale_jump2_carousel10.textContent = '';
    }

    if (jump_count11 > 0) {
        martingale_jump_carousel11.textContent = 'j' + jump_count11;
        martingale_jump2_carousel11.textContent = 'j' + jump_count11;
    } else {
        martingale_jump_carousel11.textContent = '';
        martingale_jump2_carousel11.textContent = '';
    }

    if (jump_count12 > 0) {
        martingale_jump_carousel12.textContent = 'j' + jump_count12;
        martingale_jump2_carousel12.textContent = 'j' + jump_count12;
    } else {
        martingale_jump_carousel12.textContent = '';
        martingale_jump2_carousel12.textContent = '';
    }

    if (jump_count13 > 0) {
        martingale_jump_carousel13.textContent = 'j' + jump_count13;
        martingale_jump2_carousel13.textContent = 'j' + jump_count13;
    } else {
        martingale_jump_carousel13.textContent = '';
        martingale_jump2_carousel13.textContent = '';
    }

    if (jump_count14 > 0) {
        martingale_jump_carousel14.textContent = 'j' + jump_count14;
        martingale_jump2_carousel14.textContent = 'j' + jump_count14;
    } else {
        martingale_jump_carousel14.textContent = '';
        martingale_jump2_carousel14.textContent = '';
    }

    if (jump_count15 > 0) {
        martingale_jump_carousel15.textContent = 'j' + jump_count15;
        martingale_jump2_carousel15.textContent = 'j' + jump_count15;
    } else {
        martingale_jump_carousel15.textContent = '';
        martingale_jump2_carousel15.textContent = '';
    }

    if (jump_count16 > 0) {
        martingale_jump_carousel16.textContent = 'j' + jump_count16;
        martingale_jump2_carousel16.textContent = 'j' + jump_count16;
    } else {
        martingale_jump_carousel16.textContent = '';
        martingale_jump2_carousel16.textContent = '';
    }

    if (jump_count17 > 0) {
        martingale_jump_carousel17.textContent = 'j' + jump_count17;
        martingale_jump2_carousel17.textContent = 'j' + jump_count17;
    } else {
        martingale_jump_carousel17.textContent = '';
        martingale_jump2_carousel17.textContent = '';
    }

    if (jump_count18 > 0) {
        martingale_jump_carousel18.textContent = 'j' + jump_count18;
        martingale_jump2_carousel18.textContent = 'j' + jump_count18;
    } else {
        martingale_jump_carousel18.textContent = '';
        martingale_jump2_carousel18.textContent = '';
    }

    if (jump_count19 > 0) {
        martingale_jump_carousel19.textContent = 'j' + jump_count19;
        martingale_jump2_carousel19.textContent = 'j' + jump_count19;
    } else {
        martingale_jump_carousel19.textContent = '';
        martingale_jump2_carousel19.textContent = '';
    }

    if (jump_count20 > 0) {
        martingale_jump_carousel20.textContent = 'j' + jump_count20;
        martingale_jump2_carousel20.textContent = 'j' + jump_count20;
    } else {
        martingale_jump_carousel20.textContent = '';
        martingale_jump2_carousel20.textContent = '';
    }

}



increase_all_bot_jump.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count = jump_count + 1;
    jump_count2 = jump_count2 + 1;
    jump_count3 = jump_count3 + 1;
    jump_count4 = jump_count4 + 1;
    jump_count5 = jump_count5 + 1;
    jump_count6 = jump_count6 + 1;
    jump_count7 = jump_count7 + 1;
    jump_count8 = jump_count8 + 1;
    jump_count9 = jump_count9 + 1;
    jump_count10 = jump_count10 + 1;

    jump_count11 = jump_count11 + 1;
    jump_count12 = jump_count12 + 1;
    jump_count13 = jump_count13 + 1;
    jump_count14 = jump_count14 + 1;
    jump_count15 = jump_count15 + 1;
    jump_count16 = jump_count16 + 1;
    jump_count17 = jump_count17 + 1;
    jump_count18 = jump_count18 + 1;
    jump_count19 = jump_count19 + 1;
    jump_count20 = jump_count20 + 1;

    jump_count_set()
    jump_count_set2()
})

reduce_all_bot_jump.addEventListener('click', (event) => {
    event.preventDefault()
    if (jump_count > 0) {
        jump_count = jump_count - 1;
        jump_count2 = jump_count2 - 1;
        jump_count3 = jump_count3 - 1;
        jump_count4 = jump_count4 - 1;
        jump_count5 = jump_count5 - 1;
        jump_count6 = jump_count6 - 1;
        jump_count7 = jump_count7 - 1;
        jump_count8 = jump_count8 - 1;
        jump_count9 = jump_count9 - 1;
        jump_count10 = jump_count10 - 1;

        jump_count11 = jump_count11 - 1;
        jump_count12 = jump_count12 - 1;
        jump_count13 = jump_count13 - 1;
        jump_count14 = jump_count14 - 1;
        jump_count15 = jump_count15 - 1;
        jump_count16 = jump_count16 - 1;
        jump_count17 = jump_count17 - 1;
        jump_count18 = jump_count18 - 1;
        jump_count19 = jump_count19 - 1;
        jump_count20 = jump_count20 - 1;

        jump_count_set()
        jump_count_set2()
    }
})






// Assuming initial values from cookies or local storage
let take_profit = parseInt(getCookie('take_profit')) || parseInt(localStorage.getItem('take_profit')) || 0;
let stop_loss = parseInt(getCookie('stop_loss')) || parseInt(localStorage.getItem('stop_loss')) || 0;

// Function to update display and save values
function updateDisplayAndSave(type, value) {
    document.getElementById(`${type}_show`).textContent = value;

    // Save the updated values in both cookie and local storage
    setCookie(type, value); // Assuming setCookie function is already in place
    localStorage.setItem(type, value);
}

// Increase and decrease functions
function increaseValue(type) {
    if (type === 'take_profit') {
        take_profit += 1;
        updateDisplayAndSave('take_profit', take_profit);
    } else if (type === 'stop_loss') {
        stop_loss += 1;
        updateDisplayAndSave('stop_loss', stop_loss);
    }
}

function decreaseValue(type) {
    if (type === 'take_profit' && take_profit > 0) {
        take_profit -= 1;
        updateDisplayAndSave('take_profit', take_profit);
    } else if (type === 'stop_loss' && stop_loss > 0) {
        stop_loss -= 1;
        updateDisplayAndSave('stop_loss', stop_loss);
    }
}

// Event listeners for clicks
document.getElementById('increase_take_profit').addEventListener('click', function() {
    increaseValue('take_profit');
});

document.getElementById('reduce_take_profit').addEventListener('click', function() {
    decreaseValue('take_profit');
});

document.getElementById('increase_stop_loss').addEventListener('click', function() {
    increaseValue('stop_loss');
});

document.getElementById('reduce_stop_loss').addEventListener('click', function() {
    decreaseValue('stop_loss');
});

// Initialize display with the current values
updateDisplayAndSave('take_profit', take_profit);
updateDisplayAndSave('stop_loss', stop_loss);

















