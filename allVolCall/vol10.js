import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';

const app_id_demo = 53334;
const token_demo = "4FB1rDGbXX6zbKs";
const app_id_real = 53335;
const token_real = "Jv4SnlKSnzwkymM";


let tick_stream = document.getElementById('vol_10')
let last_digit_input = document.getElementById('last_digit_input')


let trade_type_secound = document.getElementById("trade_type_secound")
let buttonContainer = document.querySelector('.click_change');



let attempting_buy2 = document.getElementById("attempting_buy2")
let buy_succeded2 = document.getElementById("buy_succeded2")
let contract_close2 = document.getElementById("contract_close2")

let stream10 = document.getElementById('stream10')




let api = null

let connection = null

let apiAndAuthData = null


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

let stake_amount_default = localStorage.getItem('stake_amount_default') || document.getElementById('stake_amount_input').value







let duration_unit = null

let symbol_vol = null

let duration_amount = null

let stake_amount = null

let last_digit_prediction_or_barrier = null

let currency = null

let contract = null

let stake_or_payout = null

let proposal_id = null



let td2_account_id = document.getElementById('td2_account_id')
let td2_no_of_runs = document.getElementById('td2_no_of_runs')
let td2_total_stake = document.getElementById('td2_total_stake')
let td2_total_payout = document.getElementById('td2_total_payout')
let td2_total_wins = document.getElementById('td2_total_wins')
let td2_total_loss = document.getElementById('td2_total_loss')
let td2_total_profit_loss = document.getElementById('td2_total_profit_loss')







let bot_total_runs = 0
let bot_total_stake = 0
let bot_total_payout = 0
let bot_total_wins = 0
let bot_total_loss = 0
let bot_total_profit_loss = 0



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

let symbol10 = null


let subscription_to_open_contract = true




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




document.addEventListener('DOMContentLoaded', function () {
    setCookie('symbol10', 'R_10')
    localStorage.setItem('symbol10', 'R_10')

    symbol10 = localStorage.getItem('symbol10')

});

console.log('message1', message1)

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



function displayProposalResult2(data, stake1, payout1) {
    const result1 = calculateNetProfitAndReturn1(stake1, payout1);
    return {
        netProPerc: `Net Profit: ${result1.netProfit} USD | Return: ${result1.returnPercentage}%`,
        NetProfit: result1.netProfit,
        percentage: result1.returnPercentage
    };
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
    ping();
};



let bot_id = 0
let bot_buy_start_time = null
let bot_buy_transaction_id = null
let bot_trade_type = null
let bot_buy_price = null
let bot_entry_spot = null
let bot_exit_spot = null
let bot_profit_loss = null
let bot_status = null
let firstContractReceived = false;
let bot_is_running_or_stopped = false
let end_slide = true
let bot_contract_id = null
let bot_unique_code = null






async function add_after_trade(bot_id, botuniqueCode, allContracts, entry_spot, exit_spot, profit_loss, status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss) {
    const tbody1 = document.getElementById('tbody1');


    if (botuniqueCode == allContracts) {

        console.log('yes', botuniqueCode, allContracts)
        let row = document.getElementById(`bot${bot_id}`);

        if (!row) {
            console.error(`Row with data-unique-code "bot${bot_id}" not found.`);
            return;
        }

        const entry_spot_html = document.getElementById(`td5${bot_id}`);
        const exit_spot_html = document.getElementById(`td6${bot_id}`);
        const profit_loss_html = document.getElementById(`td8${bot_id}`);
        const status_html = document.getElementById(`td9${bot_id}`);


        if (entry_spot_html) {
            entry_spot_html.textContent = entry_spot
        } else {
            console.log('child 5 not found')
        }

        if (exit_spot_html) {
            exit_spot_html.textContent = exit_spot
        } else {
            console.log('child 6 not found')
        }

        if (profit_loss_html) {
            profit_loss_html.textContent = profit_loss
            let profitLossNumber = parseFloat(profit_loss);
            if (profitLossNumber < 0) {
                profit_loss_html.style.color = 'red';
            } else {
                profit_loss_html.style.color = 'green';
            }
        } else {
            console.log('child 8 not found')
        }

        if (status_html) {
            status_html.textContent = status
            if (status == 'won') {
                status_html.style.color = 'green'
            } else {
                status_html.style.color = 'red'
            }
        } else {
            console.log('child 9 not found')
        }

        // uniqueCodes.splice(i, 1); // Remove 1 element at index i
        // i--; // Adjust index to account for removed element



        td2_no_of_runs.textContent = bot_total_runs
        td2_total_stake.textContent = bot_total_stake
        td2_total_payout.textContent = Number(bot_total_payout.toFixed(2));
        td2_total_wins.textContent = bot_total_wins
        td2_total_wins.style.color = 'green'
        td2_total_loss.textContent = bot_total_loss
        td2_total_loss.style.color = 'red'
        td2_total_profit_loss.textContent = Number(bot_total_profit_loss.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss.toFixed(2))) < 0) {
            td2_total_profit_loss.style.color = 'red'
        } else {
            td2_total_profit_loss.style.color = 'green'
        }
    }

}









// Simulate progress filling from 0% to 100%
const progressBar1 = document.querySelector('.progress1');

function fillProgressBar1() {
    progressBar1.classList.add('prog1')
}

const progressBar2 = document.querySelector('.progress2');

function fillProgressBar2() {
    progressBar2.classList.add('prog2')
}



function set_start_trade1(bot_is_running_or_stopped) {
    let bot_state = document.getElementById('bot_state')
    let circle1 = document.getElementById('circle1')
    let circle2 = document.getElementById('circle2')
    let circle3 = document.getElementById('circle3')

    if (circle1.classList.contains("buy_signal")) {
        circle1.classList.remove('buy_signal')
    }

    if (circle2.classList.contains('circle_shadow')) {
        circle2.classList.remove('circle_shadow')
    }

    if (circle3.classList.contains('add_color')) {
        circle3.classList.remove('add_color')
    }

    if (progressBar1.classList.contains("prog1")) {
        progressBar1.classList.remove('prog1')
    }

    if (progressBar2.classList.contains("prog2")) {
        progressBar2.classList.remove('prog2')
    }

    if (bot_is_running_or_stopped == true) {
        bot_state.textContent = 'Bot is running'
        circle1.classList.add('buy_signal')
        setTimeout(fillProgressBar1, 1000);
    } else {
        bot_state.textContent = 'Bot has stopped'
        circle1.classList.remove('buy_signal')
    }

}

function start_trade_ref(buy_price_ref) {
    if (attempting_buy2.classList.contains("attempting_buy2_show")) {
        attempting_buy2.classList.remove("attempting_buy2_show")
    }
    if (buy_succeded2.classList.contains("buy_succeded2_show")) {
        buy_succeded2.classList.remove("buy_succeded2_show")
    }
    if (contract_close2.classList.contains("contract_close2_show")) {
        contract_close2.classList.remove("contract_close2_show")
    }
    attempting_buy2.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2.classList.add('attempting_buy2_show')
}


function set_middle_trade1(bot_is_running_or_stopped) {
    let bot_state = document.getElementById('bot_state')
    let circle1 = document.getElementById('circle1')
    let circle2 = document.getElementById('circle2')
    circle1.classList.remove('buy_signal')
    circle1.classList.add('add_color')

    function timmimg_shadow() {
        circle2.classList.add('circle_shadow')
    }

    if (bot_is_running_or_stopped == true) {
        bot_state.textContent = 'Bot is running'
        circle2.classList.add('add-color')
        setTimeout(timmimg_shadow, 1500);
    } else {
        bot_state.textContent = 'Bot has stopped'
        circle2.classList.remove('circle_shadow')
        circle2.classList.remove('add-color')
    }
}

function middle_trade_ref(buy_ref) {
    buy_succeded2.textContent = `ID: ${buy_ref}`
    buy_succeded2.classList.add('buy_succeded2_show')
}



function set_end_trade1(bot_is_running_or_stopped) {
    let bot_state = document.getElementById('bot_state')
    let circle2 = document.getElementById('circle2')
    let circle3 = document.getElementById('circle3')


    function timmimg_color() {
        circle3.classList.add('add_color')
    }

    if (circle2.classList.contains('circle_shadow')) {
        circle2.classList.remove('circle_shadow')
    }

    if (bot_is_running_or_stopped == true) {
        bot_state.textContent = 'Bot is running'
        setTimeout(fillProgressBar2, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state.textContent = 'Bot has stopped'
        circle3.classList.remove('add_color')
    }
}


function end_trade_ref(sell_ref) {
    contract_close2.textContent = `ID: ${sell_ref}`
    contract_close2.classList.add('contract_close2_show')
}








let proposal_open_contract = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})


let proposal_open_contract2 = () => api.proposalOpenContract({
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
        open_proposal_actions(data)
    }
};

const proposalOpenContractResponse2 = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        console.log('Error: %s ', data.error.message);
        connection.removeEventListener('message', proposalOpenContractResponse2, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {
        console.log(data)
        open_proposal_actions2(data)
    }
};

const getProposalOpenContract = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse);
    proposal_open_contract()
};

const getProposalOpenContract2 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse);
};


const getProposalOpenContract12 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2);
    proposal_open_contract2()
};

const getProposalOpenContract22 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2);
};




const unsubscribeProposalOpenContract = () => {
    connection.removeEventListener('message', proposalOpenContractResponse, false);
};

const unsubscribeProposalOpenContract2 = () => {
    connection.removeEventListener('message', proposalOpenContractResponse2, false);
};



function run_open_contract_proposal() {

    if (subscription_to_open_contract == true) {
        getProposalOpenContract()
    } else {
        getProposalOpenContract2()
    }

    subscription_to_open_contract = false
}


function run_open_contract_proposal2() {

    if (subscription_to_open_contract == true) {
        getProposalOpenContract12()
    } else {
        getProposalOpenContract22()
    }

    subscription_to_open_contract = false
}





function generateUniqueCode(buy) {
    return buy.buy.contract_id;
}



let contract_id2 = null
let wonEncountered = false;

async function buy_bot(martinglae, current_number) {

    const slider = document.getElementById('slide_trade_result').style.display = 'flex';

    last_digit_prediction_or_barrier = parseInt(current_number);

    if(martinglae == 'true' && contract_status2 == 'lost'){
        stake_amount = stake_amount * 10.1
      
    }else if(martinglae == 'true' && contract_status2 == 'won'){
        stake_amount = stake_amount_default
    }else{
        stake_amount = stake_amount_default
    }

    wonEncountered = false
    before_trade();
    allProposalOpenContract2.length = 0;
    unsubscribeProposalOpenContract2()

    try {
        // Await the completion of order_propose
        await order_propose(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol10);

        let buy = await api.buy({
            "buy": String(proposal_id),
            "price": parseFloat(stake_amount)
        });

        contract_id2 = generateUniqueCode(buy)

        run_open_contract_proposal2()


    } catch (error) {
        console.error('Error during trade:', error);
        // Handle errors or rollback operations if needed
    }
}




// Function to toggle flash and fadeout effect
function flashAndFadeout(random, show_for_two, flash_color, fadeout_color) {

    let alert_box = null

    if (random == 0) {
        alert_box = 'zero'
    }
    if (random == 1) {
        alert_box = 'one'
    }
    if (random == 2) {
        alert_box = 'two'
    }
    if (random == 3) {
        alert_box = 'three'
    }
    if (random == 4) {
        alert_box = 'four'
    }
    if (random == 5) {
        alert_box = 'five'
    }
    if (random == 6) {
        alert_box = 'six'
    }
    if (random == 7) {
        alert_box = 'seven'
    }
    if (random == 8) {
        alert_box = 'eight'
    }
    if (random == 9) {
        alert_box = 'nine'
    }

    var textElement = document.querySelector(`.first_alert_${alert_box}`);
    if (textElement) {
        textElement.textContent = show_for_two
        textElement.classList.add(`${flash_color}`);

        setTimeout(function () {
            textElement.classList.remove(`${flash_color}`);
            textElement.classList.add(`${fadeout_color}`);
            setTimeout(function () {
                textElement.classList.remove(`${fadeout_color}`);
            }, 500); // Adjust as needed
        }, 1000); // Adjust as needed
    } else {
        console.error(`Element with class '.first_alert_${alert_box}' not found.`);
    }
}



async function append_result(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status) {

    const backendData = [
        {
            id: bot_id,
            timestamp: bot_buy_start_time,
            reference: bot_buy_transaction_id,
            tradeType: bot_trade_type,
            entrySpot: '',
            exitSpot: '',
            buyPrice: bot_buy_price,
            profitLoss: '',
            status: bot_status
        },
        // Add more objects as per your backend data structure
    ];

    const tbody = document.getElementById('tbody1');

    function appendRows(data) {
        data.forEach(item => {
            // Create <tr> element
            const row = document.createElement('tr');
            row.id = `bot${item.id}`;

            // Create <td> elements and append to <tr>
            const td1 = document.createElement('td');
            td1.textContent = item.id;
            td1.id = `td1${item.id}`;
            row.appendChild(td1);

            const td2 = document.createElement('td');
            td2.textContent = item.timestamp;
            td2.id = `td2${item.id}`;
            row.appendChild(td2);

            const td3 = document.createElement('td');
            td3.textContent = item.reference;
            td3.id = `td3${item.id}`;
            row.appendChild(td3);

            const td4 = document.createElement('td');
            td4.textContent = item.tradeType;
            td4.id = `td4${item.id}`;
            row.appendChild(td4);

            const td5 = document.createElement('td');
            td5.textContent = item.entrySpot;
            td5.id = `td5${item.id}`;
            row.appendChild(td5);

            const td6 = document.createElement('td');
            td6.textContent = item.exitSpot;
            td6.id = `td6${item.id}`;
            row.appendChild(td6);

            const td7 = document.createElement('td');
            td7.textContent = item.buyPrice;
            td7.id = `td7${item.id}`;
            row.appendChild(td7);

            const td8 = document.createElement('td');
            td8.textContent = item.profitLoss;
            td8.id = `td8${item.id}`;
            row.appendChild(td8);

            const td9 = document.createElement('td');
            td9.textContent = item.status;
            td9.id = `td9${item.id}`;
            row.appendChild(td9);

            // Prepend <tr> to <tbody> (insert before the first child of tbody)
            if (tbody.firstChild) {
                tbody.insertBefore(row, tbody.firstChild);
            } else {
                tbody.appendChild(row); // If tbody is empty, just append
            }
        });
    }

    console.log(contract_id)
    appendRows(backendData)
}






let log_timestamp_current = null
let log_buy_timestamp_bot = null
let log_sell_timestamp_bot = null
let log_message10 = null
let log_message9 = null
let log_message8 = null
let log_message7 = null
let log_message6 = null
let log_message5 = null
let log_message4 = null
let log_message3 = null
let log_message2 = null
let log_message1 = null
let log_message_curr = null
let log_message_curr_tick = null
let log_message_last_digit = null
let log_message_entry_tick = null
let appended = true
let log_id = 0


function format_log_current_time() {
    // Get current Unix timestamp in seconds (divide by 1000 because Date.now() returns milliseconds)
    const unixTimestamp = Date.now() / 1000;

    // Create a Date object from the timestamp 
    const date = new Date(unixTimestamp * 1000);

    // Get individual date components in UTC
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1; // Months are zero-indexed, so we add 1
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    // Format the date string
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ` +
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} GMT`;

    return formattedDate;
}


async function bot_log(last_ten_tick, last_nine_tick, last_eight_tick, last_seven_tick, last_six_tick, last_five_tick, last_four_tick, last_three_tick, last_two_tick, last_one_tick, current_tick, current_tick_full) {

    const backendData = [
        {
            log_message10: last_ten_tick,
            log_message9: last_nine_tick,
            log_message8: last_eight_tick,
            log_message7: last_seven_tick,
            log_message6: last_six_tick,
            log_message5: last_five_tick,
            log_message4: last_four_tick,
            log_message3: last_three_tick,
            log_message2: last_two_tick,
            log_message1: last_one_tick,
            log_message_curr: current_tick,
            log_message_curr_tick: current_tick_full,
        },
    ];

    const log_tbody = document.getElementById('log_tbody1');

    function appendRows(data) {
        data.forEach(item => {
            // Create <tr> element
            const row = document.createElement('tr');
            row.id = `log_bot${log_id}`;

            const td1 = document.createElement('td');
            td1.textContent = log_timestamp_current;
            td1.id = `log_td1${log_id}`;
            td1.classList.add('lod_td1')
            row.appendChild(td1);

            // Create <td> elements and append to <tr>
            const td2 = document.createElement('td');

            if (log_message10 == null) {
                log_message10 = ''
            }

            if (log_message9 == null) {
                log_message9 = ''
            }

            if (log_message8 == null) {
                log_message8 = ''
            }

            if (log_message7 == null) {
                log_message7 = ''
            }

            if (log_message6 == null) {
                log_message6 = ''
            }

            if (log_message5 == null) {
                log_message5 = ''
            }

            if (log_message4 == null) {
                log_message4 = ''
            }

            if (log_message3 == null) {
                log_message3 = ''
            }

            if (log_message2 == null) {
                log_message2 = ''
            }

            if (log_message1 == null) {
                log_message1 = ''
            }

            if (log_message_curr == null) {
                log_message_curr = ''
            }

            td2.textContent = `last ten ticks:  ${item.log_message10} ${item.log_message9} ${item.log_message8} ${item.log_message7} ${item.log_message6} ${item.log_message5} ${item.log_message4} ${item.log_message3} ${item.log_message2} ${item.log_message1}          current tick ${item.log_message_curr}    ${item.log_message_curr_tick}`;

            td2.style.whiteSpace = 'pre'
            td2.id = `log_td2${log_id}`;
            td2.classList.add('lod_td2')
            row.appendChild(td2);

            const td3 = document.createElement('td');
            td3.textContent = 'this is the text'
            td3.style.whiteSpace = 'pre'
            td3.id = `log_td3${log_id}`;
            td3.classList.add('lod_td3')
            row.appendChild(td3);

            // Prepend <tr> to <tbody> (insert before the first child of tbody)
            if (log_tbody.firstChild) {
                log_tbody.insertBefore(row, log_tbody.firstChild);
                appended = true
            } else {
                log_tbody.appendChild(row); // If tbody is empty, just append
                appended = true
            }
        });
    }

    appendRows(backendData)
}



async function bot_log_end(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td = document.getElementById(`log_td3${log_id}`)

    function formate_log_date(datein) {
        // Unix timestamp in seconds
        const unixTimestamp = datein;

        // Create a Date object from the timestamp (multiply by 1000 because the Date constructor expects milliseconds)
        const date = new Date(unixTimestamp * 1000);

        // Get individual date components
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1; // Months are zero-indexed, so we add 1
        const day = date.getUTCDate();
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();

        // Format the date string
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ` +
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} GMT`;

        return formattedDate
    }

    log_buy_timestamp_bot = formate_log_date(bot_buy_time_stamp)
    log_sell_timestamp_bot = formate_log_date(bot_sell_time_stamp)

    if (target_td) {
        target_td.textContent = `buy_time:  ${log_buy_timestamp_bot}        sell_time:  ${log_sell_timestamp_bot}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

        log_id += 1
    } else {
        console.log('td not found')
    }
}





let first_instance = true

async function startBot(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber) {

    bot_is_running_or_stopped = true;
    log_timestamp_current = format_log_current_time()
    set_start_trade1(bot_is_running_or_stopped);
    bot_id += 1;
    firstContractReceived = false;
    end_slide = true;
    bot_entry_spot = '';
    bot_exit_spot = '';
    bot_profit_loss = '';
    bot_status = 'pending';
    bot_log(lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
    await buy_bot(martingale, currentRandom);
    first_instance = false
}




let bot_state = "stop_bot"

buttonContainer.addEventListener('click', togglePlayPause);

// Function to toggle play and pause buttons
function togglePlayPause() {
    let play_button = document.getElementById('play_button');
    let pause_button = document.getElementById('pause_button');

    if (play_button) {
        bot_state = "stop_bot"
    } else if (pause_button) {
        bot_state = "start_bot"
    }
}

function getRandom(strNumber) {
    return randomNumber = strNumber.charAt(strNumber.length - 1);
}


let currentvol = null
let currentvol2 = null
let martingale = null
let bot_set = null


let currentRandom = null

let lastNumber1 = currentRandom;
let lastNumber2 = lastNumber1;
let lastNumber3 = lastNumber2;
let lastNumber4 = lastNumber3;
let lastNumber5 = lastNumber4;
let lastNumber6 = lastNumber5;
let lastNumber7 = lastNumber6;
let lastNumber8 = lastNumber7;
let lastNumber9 = lastNumber8;
let lastNumber10 = lastNumber9;



const tickStream = () => api.subscribe({ "ticks": 'R_10' });


const tickResponse = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        console.log('Error : ', data.error.message);
        connection.removeEventListener('message', tickResponse, false);
        await api.disconnect();
    }



    function getRandom1(strNumber1) {
        return randomNumber = strNumber1.charAt(strNumber1.length - 1);
    }



    lastNumber10 = lastNumber9
    lastNumber9 = lastNumber8
    lastNumber8 = lastNumber7
    lastNumber7 = lastNumber6
    lastNumber6 = lastNumber5
    lastNumber5 = lastNumber4
    lastNumber4 = lastNumber3
    lastNumber3 = lastNumber2
    lastNumber2 = lastNumber1
    lastNumber1 = currentRandom

    if (data.msg_type === 'tick') {
        let bot_start_stop = bot_state
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



        if (data.echo_req.ticks === "R_50" || data.echo_req.ticks === "R_75") {
            strNumber = formatToFourDecimalPlaces(tickStreamQuote).toString();
            currentRandom = getRandom1(strNumber);
        } else if (data.echo_req.ticks === "R_100") {
            strNumber = formatToTwoDecimalPlaces(tickStreamQuote).toString();
            currentRandom = getRandom1(strNumber);
        } else {
            strNumber = formatToThreeDecimalPlaces(tickStreamQuote).toString();
            currentRandom = getRandom1(strNumber);
        }

        tick_stream.textContent = strNumber;
        stream10.textContent = strNumber

        currentvol = localStorage.getItem('bot_current_vol1');
        currentvol2 = localStorage.getItem('bot_current_vol2');
        martingale = localStorage.getItem('martingale');
        bot_set = localStorage.getItem('bot_set');

        let bot_count = bot_id

        const tag5 = document.getElementById(`td5${bot_count}`);
        const tag6 = document.getElementById(`td6${bot_count}`);
        const tag8 = document.getElementById(`td8${bot_count}`);
        const tag9 = document.getElementById(`td9${bot_count}`);



        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance == true) {
                if (currentRandom && (first_instance == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set == 1)) {
                    if (bot_start_stop == 'start_bot' && ((currentvol == 5 && currentvol2 == 5) || (currentvol == 0 && currentvol2 == 0))) {
                        startBot(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {
                    console.log('The element does not have any text content.')
                }
            } else {
                console.log('elements not found')
            }
        }



        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance == true) {
                if (lastNumber1 == currentRandom && (first_instance == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set == 2)) {
                    if (bot_start_stop == 'start_bot' && ((currentvol == 5 && currentvol2 == 5) || (currentvol == 0 && currentvol2 == 0))) {
                        startBot(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {
                    console.log('The element does not have any text content.')
                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance == true) {
                if (lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set == 3)) {
                    if (bot_start_stop == 'start_bot' && ((currentvol == 5 && currentvol2 == 5) || (currentvol == 0 && currentvol2 == 0))) {
                        startBot(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {
                    console.log('The element does not have any text content.')
                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance == true) {
                if (lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set == 4)) {
                    if (bot_start_stop == 'start_bot' && ((currentvol == 5 && currentvol2 == 5) || (currentvol == 0 && currentvol2 == 0))) {
                        startBot(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {
                    console.log('The element does not have any text content.')
                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance == true) {
                if (lastNumber4 == currentRandom && lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set == 5)) {
                    if (bot_start_stop == 'start_bot' && ((currentvol == 5 && currentvol2 == 5) || (currentvol == 0 && currentvol2 == 0))) {
                        startBot(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {
                    console.log('The element does not have any text content.')
                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance == true) {
                if (lastNumber5 == currentRandom && lastNumber4 == currentRandom && lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set == 6)) {
                    if (bot_start_stop == 'start_bot' && ((currentvol == 5 && currentvol2 == 5) || (currentvol == 0 && currentvol2 == 0))) {
                        startBot(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {
                    console.log('The element does not have any text content.')
                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance == true) {
                if (lastNumber6 == currentRandom && lastNumber5 == currentRandom && lastNumber4 == currentRandom && lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set == 7)) {
                    if (bot_start_stop == 'start_bot' && ((currentvol == 5 && currentvol2 == 5) || (currentvol == 0 && currentvol2 == 0))) {
                        startBot(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {
                    console.log('The element does not have any text content.')
                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance == true) {
                if (lastNumber7 == currentRandom && lastNumber6 == currentRandom && lastNumber5 == currentRandom && lastNumber4 == currentRandom && lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set == 8)) {
                    if (bot_start_stop == 'start_bot' && ((currentvol == 5 && currentvol2 == 5) || (currentvol == 0 && currentvol2 == 0))) {
                        startBot(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {
                    console.log('The element does not have any text content.')
                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance == true) {
                if (lastNumber8 == currentRandom && lastNumber7 == currentRandom && lastNumber6 == currentRandom && lastNumber5 == currentRandom && lastNumber4 == currentRandom && lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set == 9)) {
                    if (bot_start_stop == 'start_bot' && ((currentvol == 5 && currentvol2 == 5) || (currentvol == 0 && currentvol2 == 0))) {
                        startBot(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {
                    console.log('The element does not have any text content.')
                }
            } else {
                console.log('elements not found')
            }
        }


        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance == true) {
                if (lastNumber9 == currentRandom && lastNumber8 == currentRandom && lastNumber7 == currentRandom && lastNumber6 == currentRandom && lastNumber5 == currentRandom && lastNumber4 == currentRandom && lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set == 10)) {
                    if (bot_start_stop == 'start_bot' && ((currentvol == 5 && currentvol2 == 5) || (currentvol == 0 && currentvol2 == 0))) {
                        startBot(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {
                    console.log('The element does not have any text content.')
                }
            } else {
                console.log('elements not found')
            }
        }



        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if (lastNumber1 == currentRandom) {
                let show_for_two = '2x'
                let flash_color = 'flash1'
                let fadeout_color = 'fadeout1'
                flashAndFadeout(currentRandom, show_for_two, flash_color, fadeout_color)
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if (lastNumber2 == lastNumber1 && lastNumber2 == currentRandom && lastNumber1 == currentRandom) {
                let show_for_two = '3x'
                let flash_color = 'flash2'
                let fadeout_color = 'fadeout2'
                flashAndFadeout(currentRandom, show_for_two, flash_color, fadeout_color)

            }
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
            console.log("authirzed at vol10 js")

            if (authorize_response.authorize.loginid.startsWith("CR")) {

                td2_account_id.textContent = authorize_response.authorize.loginid

            } else {

            }
        }

        subscribeTicks()
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




window.addEventListener('load', function () {

    duration_amount_cookie = getCookie('duration_amount_cookie');
    stake_amount_cookie = getCookie('stake_amount_cookie');
    duration_unit_cookie = getCookie('duration_unit_cookie');
    symbol_vol_cookie = getCookie('symbol_vol_cookie');
    currency_cookie = getCookie('ActiveCurrency')
    contract_text_cookie = getCookie('contract_text_cookie');
    stake_or_payout_cookie = getCookie('stake_or_payout_cookie')
    last_digit_prediction_cookie = getCookie('last_digit_prediction_cookie')
    stake_amount_default = getCookie('stake_amount_default')


    if (last_digit_prediction_cookie) {
        last_digit_prediction_or_barrier = last_digit_prediction_or_barrier
    } else {
        let numericValue = last_digit_input.value
        last_digit_prediction_or_barrier = numericValue
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

    if (stake_amount_default) {
        stake_amount_default = parseFloat(stake_amount_default);
    } else {
        stake_amount_default = 10;
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
});







async function order_propose(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
    return new Promise((resolve, reject) => {
        let contract_type_set = null;

        if (contract_type === 'Matches/Differs') {
            contract_type_set = 'DIGITDIFF';
        }

        let proposal_to_buy = {
            "proposal": 1,
            "amount": parseFloat(amount),
            "barrier": parseInt(last_digit_prediction_or_barrier),
            "basis": String(stake_or_payout),
            "contract_type": String(contract_type_set),
            "currency": String(currency),
            "duration": parseInt(duration),
            "duration_unit": String(duration_unit),
            "product_type": "basic",
            "symbol": String(symbol)
        };

        const proposalResponse = async (res) => {
            const data = JSON.parse(res.data);
            if (data.error !== undefined) {
                let tooltip = document.getElementById('tooltiptext10');
                tooltip.textContent = data.error.message;
                tooltip.classList.add('tooltiptext10')
                console.log('Errorss: %s ', data.error.message);
                connection.removeEventListener('message', proposalResponse, false);
                await api.disconnect();
                reject(new Error('Error in proposal'));
            } else if (data.msg_type === 'proposal') {
                // console.log(data);

                proposal_id = data.proposal.id;

                let calc = displayProposalResult2(data, data.proposal.display_value, data.proposal.payout);

                def_price_up = data.proposal.display_value;
                def_payout_up = data.proposal.payout;
                def_profit_up = calc.NetProfit;

                // console.log('Details: %s', data.proposal.longcode);
                // console.log('Ask Price: %s', data.proposal.display_value);
                // console.log('Payout: %f', data.proposal.payout);
                // console.log('Spot: %f', data.proposal.spot);
                // console.log('proposal id: %s', data.proposal.id); // Use %s for string values

                // Ensure proposal_id is correctly assigned
                // console.log('Assigned proposal_id:', proposal_id); // Optional: check the value assigned

                resolve(); // Resolve the promise after setting proposal_id
            }
        };

        const getProposal = async () => {
            connection.addEventListener('message', proposalResponse);
            await api.proposal(proposal_to_buy);
        };

        getProposal();
    });
}



const unsubscribeProposal = () => {
    connection.removeEventListener('message', proposalResponse, false);
};










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
let countdown_trade2 = 0

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

    let trade_type_secound = getCookie('contract_text_cookie')

    if (trade_type_secound == 'Matches/Differs' || trade_type_secound == 'Over/Under') {
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



    if (trade_type_secound == 'Matches/Differs') {
        allDigits.forEach(function (digit) {
            if (digit.textContent != last_digit_prediction_or_barrier) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound == 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}


function after_trade(status, endDigit) {
    let slide_trade_result = document.getElementById('slide_trade_result')
    let allDigits = document.querySelectorAll('.ldgs')
    let trade_type_secound = getCookie('contract_text_cookie')
    if (trade_type_secound == 'Matches/Differs' || trade_type_secound == 'Over/Under') {
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






function formate_date(datein) {
    // Unix timestamp in seconds
    const unixTimestamp = datein;

    // Create a Date object from the timestamp (multiply by 1000 because the Date constructor expects milliseconds)
    const date = new Date(unixTimestamp * 1000);

    // Get individual date components
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1; // Months are zero-indexed, so we add 1
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    // Format the date string
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ` +
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} GMT`;

    return formattedDate

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

let allProposalOpenContract2 = []
let longcodeProp2 = null
let contract_ids_buy2 = null
let contract_ids_sell2 = null
let contract_status2 = null
let last_tick2 = null
let profit_or_loss2 = null
let final_price2 = null
let payout_result2 = null
let buy_price2 = null
let contract_currency2 = null
let time_of_trade2 = null
let every_tick2 = null
// let contract_id2 = null



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




function open_proposal_actions2(data) {
    if (data.proposal_open_contract.contract_id == contract_id2) {
        set_middle_trade1(bot_is_running_or_stopped)
        bot_buy_start_time = formate_date(data.proposal_open_contract.date_start)
        bot_buy_transaction_id = data.proposal_open_contract.transaction_ids.buy
        bot_trade_type = data.proposal_open_contract.contract_type
        bot_buy_price = data.proposal_open_contract.buy_price
        bot_status = data.proposal_open_contract.status == 'open' ? 'Pending' : data.proposal_open_contract.status
        bot_contract_id = data.proposal_open_contract.contract_id





        start_trade_ref(bot_buy_price)

        if (firstContractReceived == false) {
            append_result(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status);
            firstContractReceived = true
        }

        longcodeProp2 = data.proposal_open_contract.longcode
        allProposalOpenContract2.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information').textContent = longcodeProp2


        console.log(allProposalOpenContract2)
        if (allProposalOpenContract2.length > 0 && allProposalOpenContract2[allProposalOpenContract2.length - 1].length > 0) {
            let lastSubArray2 = allProposalOpenContract2[allProposalOpenContract2.length - 1];
            let lastElementOfLastSubArray2 = lastSubArray2[lastSubArray2.length - 1].tick_display_value;
            console.log(lastElementOfLastSubArray2);
            let numberString2 = lastElementOfLastSubArray2.toString();
            let lastCharacter2 = numberString2[numberString2.length - 1];
            console.log(lastCharacter2)
            handleNewNumber(lastCharacter2);
            every_tick2 = lastElementOfLastSubArray2
            end_tic_off_trade.innerHTML = formatNumberAndBoldLastDecimal(every_tick2);



            if (countdown_trade2 < duration_amount) {
                countdown_trade2 += 1
                durr_amount_prop_count.textContent = countdown_trade
            }

            if (data.proposal_open_contract.is_expired == 1 && end_slide == true) {
                set_end_trade1(bot_is_running_or_stopped)
                end_slide = false
            }

            contract_ids_buy2 = data.proposal_open_contract.transaction_ids.buy
            if (contract_ids_buy2) {
                middle_trade_ref(contract_ids_buy2)
            }

            if (data.proposal_open_contract.status !== 'open') {
                circle2.classList.remove('circl_shadow')
                bot_status = data.proposal_open_contract.status
                bot_entry_spot = data.proposal_open_contract.entry_tick
                bot_exit_spot = data.proposal_open_contract.exit_tick
                bot_profit_loss = data.proposal_open_contract.profit


                contract_status2 = data.proposal_open_contract.status
                last_tick2 = lastElementOfLastSubArray2
                profit_or_loss2 = data.proposal_open_contract.profit
                payout_result2 = data.proposal_open_contract.payout
                buy_price2 = data.proposal_open_contract.buy_price
                contract_currency2 = data.proposal_open_contract.currency
                contract_ids_buy2 = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2 = data.proposal_open_contract.expiry_time
                contract_ids_sell2 = data.proposal_open_contract.transaction_ids.sell

                end_trade_ref(contract_ids_sell2)
                if (profit_or_loss2 < 0) {
                    final_price2 = '0.00'
                } else if (profit_or_loss2 > 0) {
                    final_price2 = payout_result2
                } else {
                    console.log("The number is zero.");
                }

                if (contract_status2 == 'won' && !wonEncountered) {
                    bot_total_wins = bot_total_wins + 1;
                    bot_total_profit_loss = bot_total_profit_loss + profit_or_loss2;
                    bot_total_stake = bot_total_stake + buy_price2
                    bot_total_runs = bot_total_runs + 1;
                    bot_total_payout = bot_total_payout + payout_result2;

                    add_after_trade(bot_id, contract_id2, bot_contract_id, bot_entry_spot, bot_exit_spot, bot_profit_loss, bot_status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss);

                    wonEncountered = true;
                } else if (contract_status2 == 'lost') {
                    bot_total_loss = bot_total_loss + 1;
                    bot_total_profit_loss = bot_total_profit_loss + profit_or_loss2;
                    bot_total_stake = bot_total_stake + buy_price2
                    bot_total_runs = bot_total_runs + 1;
                    bot_total_payout = bot_total_payout - payout_result2;

                    add_after_trade(bot_id, contract_id2, bot_contract_id, bot_entry_spot, bot_exit_spot, bot_profit_loss, bot_status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss);
                    wonEncountered = true;
                }

                if (contract_status2 == 'won' && data.proposal_open_contract.date_expiry) {

                    log_buy_timestamp_bot = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot = data.proposal_open_contract.date_expiry
                    log_message_entry_tick = data.proposal_open_contract.entry_tick
                    log_message_last_digit = every_tick2

                    bot_log_end(log_buy_timestamp_bot, log_sell_timestamp_bot, log_message_entry_tick, log_message_last_digit)
                } else if (contract_status2 == 'lost' && data.proposal_open_contract.date_expiry) {

                    log_buy_timestamp_bot = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot = data.proposal_open_contract.date_expiry
                    log_message_entry_tick = data.proposal_open_contract.entry_tick
                    log_message_last_digit = every_tick2

                    bot_log_end(log_buy_timestamp_bot, log_sell_timestamp_bot, log_message_entry_tick, log_message_last_digit)
                }

                contract_status_html.textContent = contract_status2
                end_tic_off_trade.innerHTML = formatNumberAndBoldLastDecimal(last_tick2);
                profit_figure_amount.textContent = profit_or_loss2
                price_after_trade_figure_amount.textContent = final_price2
                buy_price_figure_amount.textContent = buy_price2
                result_currency_html.textContent = contract_currency2
                transaction_refrence_figure.textContent = contract_ids_buy2
                trade_start_time.innerHTML = convertTimestampTo12HourTime(time_of_trade2)
                buy_price_text.textContent = 'Buy price'
                price_after_trade_text.textContent = 'Final price'
                profit_text.textContent = 'Profit'
                after_trade(contract_status2, lastCharacter2)

            } else {

            }
        } else {
            console.log('no valid tick yet')
        }

    }
}





// let proposal_open_contract = () => api.proposalOpenContract({
//     "proposal_open_contract": 1,
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
//         open_proposal_actions(data)
//     }
// };

// const getProposalOpenContract = async (contract_id) => {
//     connection.addEventListener('message', proposalOpenContractResponse);
//     proposal_open_contract()
// };

// const unsubscribeProposalOpenContract = () => {
//     connection.removeEventListener('message', proposalOpenContractResponse, false);
// };













const elements = document.querySelectorAll('.lgt1');

elements.forEach(element => {
    element.addEventListener('click', async function () {
        const slider = document.getElementById('slide_trade_result').style.display = 'flex';

        last_digit_prediction_or_barrier = parseInt(element.lastElementChild.textContent);

        before_trade();
        allProposalOpenContract.length = 0;
        unsubscribeProposalOpenContract()

        try {
            // Await the completion of order_propose
            await order_propose(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol10);

            let buy = await api.buy({
                "buy": String(proposal_id),
                "price": parseFloat(stake_amount)
            });

            contract_id = buy.buy.contract_id;
            console.log(contract_id)

            run_open_contract_proposal()


        } catch (error) {
            console.error('Error during trade:', error);
            // Handle errors or rollback operations if needed
        }
    });
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
