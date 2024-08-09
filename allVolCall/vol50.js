import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';

const app_id_demo = 63261;
const token_demo = "CgjU4TbJyKTrVHD";
const app_id_real = 63262;
const token_real = "6wB5qaAzZ2NVMTS"

let api = null
let connection = null
let authorize_response_symbol_General = null
let apiAndAuthData = null
let api_id = null;
let api_token = null;
let message1 = localStorage.getItem('message1') ? localStorage.getItem('message1') : getCookie('message1')

let last_digit_input_symbol_vol50 = document.getElementById('last_digit_input')
let close_contract_result_container_symbol_vol50 = document.getElementById('close_contract_result_container_carousel3')
let buy_sell_two_symbol_vol50 = document.getElementById('buy_sell_two')
let trade_type_secound_symbol_vol50 = document.getElementById("trade_type_secound")
let attempting_buy2_carousel3_symbol_vol50 = document.getElementById("attempting_buy2_carousel3")
let buy_succeded2_carousel3_symbol_vol50 = document.getElementById("buy_succeded2_carousel3")
let contract_close2_carousel3_symbol_vol50 = document.getElementById("contract_close2_carousel3")
let stream50_carousel3_symbol_vol50 = document.getElementById('stream50_carousel3')

let last_digit_prediction_local_st_symbol_vol50 = null
let barrier_local_st_symbol_vol50 = null
let symbol_vol_text_local_st_symbol_vol50 = null
let contract_text_local_st_symbol_vol50 = null
let duration_amount_local_st_symbol_vol50 = null
let stake_amount_local_st_symbol_vol50 = null
let symbol_vol_local_st_symbol_vol50 = null
let duration_unit_local_st_symbol_vol50 = null
let last_digit_prediction_or_barrier_local_st_symbol_vol50 = null
let currency_local_st_symbol_vol50 = null
let stake_or_payout_local_st_symbol_vol50 = null
let proposal_id_local_st_symbol_vol50 = null
let last_digit_prediction_cookie_symbol_vol50 = null
let barrier_cookie_symbol_vol50 = null
let symbol_vol_text_cookie_symbol_vol50 = null
let contract_text_cookie_symbol_vol50 = null
let duration_amount_cookie_symbol_vol50 = null
let stake_amount_cookie_symbol_vol50 = null
let symbol_vol_cookie_symbol_vol50 = null
let duration_unit_cookie_symbol_vol50 = null
let last_digit_prediction_or_barrier_cookie_symbol_vol50 = null
let currency_cookie_symbol_vol50 = null
let stake_or_payout_cookie_symbol_vol50 = null
let proposal_id_cookie_symbol_vol50 = null
let stake_amount_default_symbol_vol50 = localStorage.getItem('stake_amount_default') || document.getElementById('stake_amount_input').value
let duration_unit_symbol_vol50 = null
let symbol_vol_symbol_vol50 = null
let duration_amount_symbol_vol50 = null
let stake_amount_symbol_vol50 = null
let last_digit_prediction_or_barrier_symbol_vol50 = null
let currency_symbol_vol50 = null
let contract_symbol_vol50 = null
let stake_or_payout_symbol_vol50 = null
let proposal_id_symbol_vol50 = null
let td2_account_id_carousel3_symbol_vol50 = document.getElementById('td2_account_id_carousel3')
let td2_no_of_runs_carousel3_symbol_vol50 = document.getElementById('td2_no_of_runs_carousel3')
let td2_total_stake_carousel3_symbol_vol50 = document.getElementById('td2_total_stake_carousel3')
let td2_total_payout_carousel3_symbol_vol50 = document.getElementById('td2_total_payout_carousel3')
let td2_total_wins_carousel3_symbol_vol50 = document.getElementById('td2_total_wins_carousel3')
let td2_total_loss_carousel3_symbol_vol50 = document.getElementById('td2_total_loss_carousel3')
let td2_total_profit_loss_carousel3_symbol_vol50 = document.getElementById('td2_total_profit_loss_carousel3')
let bot_total_runs_symbol_vol50 = 0
let bot_total_stake_symbol_vol50 = 0
let bot_total_payout_symbol_vol50 = 0
let bot_total_wins_symbol_vol50 = 0
let bot_total_loss_symbol_vol50 = 0
let bot_total_profit_loss_symbol_vol50 = 0
let randomNumber_symbol_vol50 = null;
let strNumber_symbol_vol50 = null;
let authorize_response_symbol_vol50 = null
let subscriptionId_symbol_vol50 = null
let randomNumber2_symbol_vol50 = null
let buy_contract_id_symbol_vol50 = null
let api_id_symbol_vol50 = null;
let api_token_symbol_vol50 = null;
let def_price_up_symbol_vol50 = null
let def_payout_up_symbol_vol50 = null
let def_profit_up_symbol_vol50 = null
let website_status_info_symbol_vol50 = 'initial'
let symbol50_symbol_vol50 = null
let symbol50_cookie_symbol_vol50 = null
let subscription_to_open_contract_symbol_vol50 = true

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

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

const ping = () => {
    setInterval(() => {
        api.ping();
    }, 30000);
};

const websitePingResponse = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {

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

document.addEventListener('DOMContentLoaded', function () {
    setCookie('symbol50', 'R_50')
    localStorage.setItem('symbol50', 'R_50')

    symbol50_symbol_vol50 = localStorage.getItem('symbol50')
    symbol50_cookie_symbol_vol50 = getCookie('symbol50')

});

let bot_id_symbol_vol50 = 0
let bot_buy_start_time_symbol_vol50 = null
let bot_buy_transaction_id_symbol_vol50 = null
let bot_trade_type_symbol_vol50 = null
let bot_buy_price_symbol_vol50 = null
let bot_entry_spot_symbol_vol50 = null
let bot_exit_spot_symbol_vol50 = null
let bot_profit_loss_symbol_vol50 = null
let bot_status_symbol_vol50 = null
let firstContractReceived_symbol_vol50 = false;
let bot_is_running_or_stopped_symbol_vol50 = false
let end_slide_symbol_vol50 = true
let bot_contract_id_symbol_vol50 = null
let bot_unique_code_symbol_vol50 = null

async function add_after_trade_symbol_vol50(bot_id, botuniqueCode, allContracts, entry_spot, exit_spot, profit_loss, status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss) {
    const tbody1_carousel3 = document.getElementById('tbody1_carousel3');

    if (botuniqueCode == allContracts) {
        let row_carousel3 = document.getElementById(`bot_carousel3${bot_id}`);
        if (!row_carousel3) {
            console.error(`Row with data-unique-code "bot_carousel3${bot_id}" not found.`);
            return;
        }

        const entry_spot_html_carousel3 = document.getElementById(`td5_carousel3${bot_id}`);
        const exit_spot_html_carousel3 = document.getElementById(`td6_carousel3${bot_id}`);
        const profit_loss_html_carousel3 = document.getElementById(`td8_carousel3${bot_id}`);
        const status_html_carousel3 = document.getElementById(`td9_carousel3${bot_id}`);

        if (entry_spot_html_carousel3) {
            entry_spot_html_carousel3.textContent = entry_spot
        } else {

        }
        if (exit_spot_html_carousel3) {
            exit_spot_html_carousel3.textContent = exit_spot
        } else {

        }
        if (profit_loss_html_carousel3) {
            profit_loss_html_carousel3.textContent = profit_loss
            let profitLossNumber = parseFloat(profit_loss);
            if (profitLossNumber < 0) {
                profit_loss_html_carousel3.style.color = 'red';
            } else {
                profit_loss_html_carousel3.style.color = 'green';
            }
        } else {

        }
        if (status_html_carousel3) {
            status_html_carousel3.textContent = status
            if (status == 'won') {
                status_html_carousel3.style.color = 'green'
            } else {
                status_html_carousel3.style.color = 'red'
            }
        } else {

        }
        td2_no_of_runs_carousel3_symbol_vol50.textContent = bot_total_runs
        td2_total_stake_carousel3_symbol_vol50.textContent = bot_total_stake
        td2_total_payout_carousel3_symbol_vol50.textContent = Number(bot_total_payout_symbol_vol50.toFixed(2));
        td2_total_wins_carousel3_symbol_vol50.textContent = bot_total_wins
        td2_total_wins_carousel3_symbol_vol50.style.color = 'green'
        td2_total_loss_carousel3_symbol_vol50.textContent = bot_total_loss
        td2_total_loss_carousel3_symbol_vol50.style.color = 'red'
        td2_total_profit_loss_carousel3_symbol_vol50.textContent = Number(bot_total_profit_loss_symbol_vol50.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss_symbol_vol50.toFixed(2))) < 0) {
            td2_total_profit_loss_carousel3_symbol_vol50.style.color = 'red'
        } else {
            td2_total_profit_loss_carousel3_symbol_vol50.style.color = 'green'
        }
    }

}

const progressBar1_carousel3_symbol_vol50 = document.querySelector('.progress1_carousel3');
function fillProgressBar1_symbol_vol50() {
    progressBar1_carousel3_symbol_vol50.classList.add('prog1_carousel3')
}

const progressBar2_carousel3_symbol_vol50 = document.querySelector('.progress2_carousel3');
function fillProgressBar2_symbol_vol50() {
    progressBar2_carousel3_symbol_vol50.classList.add('prog2_carousel3')
}

function set_start_trade1_symbol_vol50(bot_is_running_or_stopped) {
    let bot_state_carousel3 = document.getElementById('bot_state_carousel3')
    let circle1_carousel3 = document.getElementById('circle1_carousel3')
    let circle2_carousel3 = document.getElementById('circle2_carousel3')
    let circle3_carousel3 = document.getElementById('circle3_carousel3')

    if (circle1_carousel3.classList.contains("buy_signal_carousel3")) {
        circle1_carousel3.classList.remove('buy_signal_carousel3')
    }
    if (circle2_carousel3.classList.contains('circle_shadow_carousel3')) {
        circle2_carousel3.classList.remove('circle_shadow_carousel3')
    }
    if (circle2_carousel3.classList.contains('add_color_carousel3')) {
        circle2_carousel3.classList.remove('add_color_carousel3')
    }
    if (circle3_carousel3.classList.contains('add_color_carousel3')) {
        circle3_carousel3.classList.remove('add_color_carousel3')
    }
    if (progressBar1_carousel3_symbol_vol50.classList.contains("prog1_carousel3")) {
        progressBar1_carousel3_symbol_vol50.classList.remove('prog1_carousel3')
    }
    if (progressBar2_carousel3_symbol_vol50.classList.contains("prog2_carousel3")) {
        progressBar2_carousel3_symbol_vol50.classList.remove('prog2_carousel3')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel3.textContent = 'Bot is running'
        circle1_carousel3.classList.add('buy_signal_carousel3')
        setTimeout(fillProgressBar1_symbol_vol50, 1000);
    } else {
        bot_state_carousel3.textContent = 'Bot has stopped'
        circle1_carousel3.classList.remove('buy_signal_carousel3')
    }

}

function start_trade_ref_symbol_vol50(buy_price_ref) {
    if (attempting_buy2_carousel3_symbol_vol50.classList.contains("attempting_buy2_show_carousel3")) {
        attempting_buy2_carousel3_symbol_vol50.classList.remove("attempting_buy2_show_carousel3")
    }
    if (buy_succeded2_carousel3_symbol_vol50.classList.contains("buy_succeded2_show_carousel3")) {
        buy_succeded2_carousel3_symbol_vol50.classList.remove("buy_succeded2_show_carousel3")
    }
    if (contract_close2_carousel3_symbol_vol50.classList.contains("contract_close2_show_carousel3")) {
        contract_close2_carousel3_symbol_vol50.classList.remove("contract_close2_show_carousel3")
    }
    attempting_buy2_carousel3_symbol_vol50.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2_carousel3_symbol_vol50.classList.add('attempting_buy2_show_carousel3')
}


function set_middle_trade1_symbol_vol50(bot_is_running_or_stopped) {
    let bot_state_carousel3 = document.getElementById('bot_state_carousel3')
    let circle1_carousel3 = document.getElementById('circle1_carousel3')
    let circle2_carousel3 = document.getElementById('circle2_carousel3')
    circle1_carousel3.classList.remove('buy_signal_carousel3')
    circle1_carousel3.classList.add('add_color_carousel3')

    function timmimg_shadow() {
        circle2_carousel3.classList.add('circle_shadow_carousel3')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel3.textContent = 'Bot is running'
        circle2_carousel3.classList.add('add_color_carousel3')
        setTimeout(timmimg_shadow, 1500);
    } else {
        bot_state_carousel3.textContent = 'Bot has stopped'
        circle2_carousel3.classList.remove('circle_shadow_carousel3_carousel3')
        circle2_carousel3.classList.remove('add-color_carousel3')
    }
}

function middle_trade_ref_symbol_vol50(buy_ref) {
    buy_succeded2_carousel3_symbol_vol50.textContent = `ID: ${buy_ref}`
    buy_succeded2_carousel3_symbol_vol50.classList.add('buy_succeded2_show_carousel3')
}

function set_end_trade1_symbol_vol50(bot_is_running_or_stopped) {
    let bot_state_carousel3 = document.getElementById('bot_state_carousel3')
    let circle2_carousel3 = document.getElementById('circle2_carousel3')
    let circle3_carousel3 = document.getElementById('circle3_carousel3')

    function timmimg_color() {
        circle3_carousel3.classList.add('add_color_carousel3')
    }
    if (circle2_carousel3.classList.contains('circle_shadow_carousel3')) {
        circle2_carousel3.classList.remove('circle_shadow_carousel3')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel3.textContent = 'Bot is running'
        setTimeout(fillProgressBar2_symbol_vol50, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state_carousel3.textContent = 'Bot has stopped'
        circle3_carousel3.classList.remove('add_color_carousel3')
    }
}
function end_trade_ref_symbol_vol50(sell_ref) {
    contract_close2_carousel3_symbol_vol50.textContent = `ID: ${sell_ref}`
    contract_close2_carousel3_symbol_vol50.classList.add('contract_close2_show_carousel3')
}

let proposal_open_contract2_symbol_vol50 = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})

const proposalOpenContractResponse2_symbol_vol50 = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {

        connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol50, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {

        open_proposal_actions2_symbol_vol50(data)
    }
};

const getProposalOpenContract12_symbol_vol50 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol50);
    proposal_open_contract2_symbol_vol50()
};

const getProposalOpenContract22_symbol_vol50 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol50);
};

const unsubscribeProposalOpenContract2_symbol_vol50 = () => {
    connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol50, false);
};

function run_open_contract_proposal2_symbol_vol50() {
    if (subscription_to_open_contract_symbol_vol50 == true) {
        getProposalOpenContract12_symbol_vol50()
    } else {
        getProposalOpenContract22_symbol_vol50()
    }
    subscription_to_open_contract_symbol_vol50 = false
}

function generateUniqueCode_symbol_vol50(buy) {
    return buy.buy.contract_id;
}

let martingale_store_symbol_vol50 = [0.35, 3.5, 38.9, 432.3]
let martingale_count_symbol_vol50 = 0
let initial_stake_symbol_vol50 = true
let contract_id2_symbol_vol50 = null
let wonEncountered_symbol_vol50 = false;

async function buy_bot_symbol_vol50(martingale, current_number) {
    const slider = document.getElementById('slide_trade_result_carousel3').style.display = 'flex';

    last_digit_prediction_or_barrier_symbol_vol50 = parseInt(current_number);
    let contract_text_local_st = localStorage.getItem('contract_text_local_st')
    let contract_text_cookie = getCookie('contract_text_cookie')

    if (martingale == 'true' && contract_status2_symbol_vol50 == 'lost') {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol50 += 1
            stake_amount_symbol_vol50 = martingale_store_symbol_vol50[martingale_count_symbol_vol50]
        } else {
            stake_amount_symbol_vol50 = stake_amount_symbol_vol50 * 10.1
        }
    } else if (initial_stake_symbol_vol50 = true || (martingale == 'true' && contract_status2_symbol_vol50 == 'won')) {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol50 = 0
            stake_amount_symbol_vol50 = martingale_store_symbol_vol50[martingale_count_symbol_vol50]
        } else {
            stake_amount_symbol_vol50 = stake_amount_default_symbol_vol50
        }
    } else {
        stake_amount_symbol_vol50 = stake_amount_default_symbol_vol50
    }


    wonEncountered_symbol_vol50 = false
    before_trade_symbol_vol50();
    allProposalOpenContract2_symbol_vol50.length = 0;
    unsubscribeProposalOpenContract2_symbol_vol50()

    try {
        await order_propose_symbol_vol50(api, stake_amount_symbol_vol50, last_digit_prediction_or_barrier_symbol_vol50, stake_or_payout_symbol_vol50, contract_symbol_vol50, currency_symbol_vol50, duration_amount_symbol_vol50, duration_unit_symbol_vol50, symbol50_symbol_vol50);

        let buy = await api.buy({
            "buy": String(proposal_id_symbol_vol50),
            "price": parseFloat(stake_amount_symbol_vol50)
        });

        contract_id2_symbol_vol50 = generateUniqueCode_symbol_vol50(buy)

        run_open_contract_proposal2_symbol_vol50()
        initial_stake_symbol_vol50 = false

    } catch (error) {
        console.error('Error during trade:', error);
        setTimeout(() => {
            initializeApi(message1)
        }, 5000);
    }
}

async function append_result_symbol_vol50(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status) {

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
    ];

    const tbody_carousel3 = document.getElementById('tbody1_carousel3');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel3 = document.createElement('tr');
            row_carousel3.id = `bot_carousel3${item.id}`;

            const td1_carousel3 = document.createElement('td');
            td1_carousel3.textContent = item.id;
            td1_carousel3.id = `td1_carousel3${item.id}`;
            row_carousel3.appendChild(td1_carousel3);

            const td2_carousel3 = document.createElement('td');
            td2_carousel3.textContent = item.timestamp;
            td2_carousel3.id = `td2_carousel3${item.id}`;
            row_carousel3.appendChild(td2_carousel3);

            const td3_carousel3 = document.createElement('td');
            td3_carousel3.textContent = item.reference;
            td3_carousel3.id = `td3_carousel3${item.id}`;
            row_carousel3.appendChild(td3_carousel3);

            const td4_carousel3 = document.createElement('td');
            td4_carousel3.textContent = item.tradeType;
            td4_carousel3.id = `td4_carousel3${item.id}`;
            row_carousel3.appendChild(td4_carousel3);

            const td5_carousel3 = document.createElement('td');
            td5_carousel3.textContent = item.entrySpot;
            td5_carousel3.id = `td5_carousel3${item.id}`;
            row_carousel3.appendChild(td5_carousel3);

            const td6_carousel3 = document.createElement('td');
            td6_carousel3.textContent = item.exitSpot;
            td6_carousel3.id = `td6_carousel3${item.id}`;
            row_carousel3.appendChild(td6_carousel3);

            const td7_carousel3 = document.createElement('td');
            td7_carousel3.textContent = item.buyPrice;
            td7_carousel3.id = `td7_carousel3${item.id}`;
            row_carousel3.appendChild(td7_carousel3);

            const td8_carousel3 = document.createElement('td');
            td8_carousel3.textContent = item.profitLoss;
            td8_carousel3.id = `td8_carousel3${item.id}`;
            row_carousel3.appendChild(td8_carousel3);

            const td9_carousel3 = document.createElement('td');
            td9_carousel3.textContent = item.status;
            td9_carousel3.id = `td9_carousel3${item.id}`;
            row_carousel3.appendChild(td9_carousel3);

            if (tbody_carousel3.firstChild) {
                tbody_carousel3.insertBefore(row_carousel3, tbody_carousel3.firstChild);
            } else {
                tbody_carousel3.appendChild(row_carousel3);
            }
        });
    }
    appendRows(backendData)
}

let log_timestamp_current_symbol_vol50 = null
let log_buy_timestamp_bot_symbol_vol50 = null
let log_sell_timestamp_bot_symbol_vol50 = null
let log_message10_symbol_vol50 = null
let log_message9_symbol_vol50 = null
let log_message8_symbol_vol50 = null
let log_message7_symbol_vol50 = null
let log_message6_symbol_vol50 = null
let log_message5_symbol_vol50 = null
let log_message4_symbol_vol50 = null
let log_message3_symbol_vol50 = null
let log_message2_symbol_vol50 = null
let log_message1_symbol_vol50 = null
let log_message_curr_symbol_vol50 = null
let log_message_curr_tick_symbol_vol50 = null
let log_message_last_digit_symbol_vol50 = null
let log_message_entry_tick_symbol_vol50 = null
let appended_symbol_vol50 = true
let log_id_symbol_vol50 = 0

function format_log_current_time_symbol_vol50() {
    const unixTimestamp = Date.now() / 1000;
    const date = new Date(unixTimestamp * 1000);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ` +
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} GMT`;

    return formattedDate;
}

async function bot_log_symbol_vol50(last_ten_tick, last_nine_tick, last_eight_tick, last_seven_tick, last_six_tick, last_five_tick, last_four_tick, last_three_tick, last_two_tick, last_one_tick, current_tick, current_tick_full) {

    const backendData = [
        {
            log_message10_symbol_vol50: last_ten_tick,
            log_message9_symbol_vol50: last_nine_tick,
            log_message8_symbol_vol50: last_eight_tick,
            log_message7_symbol_vol50: last_seven_tick,
            log_message6_symbol_vol50: last_six_tick,
            log_message5_symbol_vol50: last_five_tick,
            log_message4_symbol_vol50: last_four_tick,
            log_message3_symbol_vol50: last_three_tick,
            log_message2_symbol_vol50: last_two_tick,
            log_message1_symbol_vol50: last_one_tick,
            log_message_curr_symbol_vol50: current_tick,
            log_message_curr_tick_symbol_vol50: current_tick_full,
        },
    ];

    const log_tbody_carousel3 = document.getElementById('log_tbody1_carousel3');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel3 = document.createElement('tr');
            row_carousel3.id = `log_bot_carousel3${log_id_symbol_vol50}`;

            const td1_carousel3 = document.createElement('td');
            td1_carousel3.textContent = log_timestamp_current_symbol_vol50;
            td1_carousel3.id = `log_td1_carousel3${log_id_symbol_vol50}`;
            td1_carousel3.classList.add('lod_td1_carousel3')
            row_carousel3.appendChild(td1_carousel3);

            const td2_carousel3 = document.createElement('td');

            if (log_message10_symbol_vol50 == null) {
                log_message10_symbol_vol50 = ''
            }
            if (log_message9_symbol_vol50 == null) {
                log_message9_symbol_vol50 = ''
            }
            if (log_message8_symbol_vol50 == null) {
                log_message8_symbol_vol50 = ''
            }
            if (log_message7_symbol_vol50 == null) {
                log_message7_symbol_vol50 = ''
            }
            if (log_message6_symbol_vol50 == null) {
                log_message6_symbol_vol50 = ''
            }
            if (log_message5_symbol_vol50 == null) {
                log_message5_symbol_vol50 = ''
            }

            if (log_message4_symbol_vol50 == null) {
                log_message4_symbol_vol50 = ''
            }

            if (log_message3_symbol_vol50 == null) {
                log_message3_symbol_vol50 = ''
            }

            if (log_message2_symbol_vol50 == null) {
                log_message2_symbol_vol50 = ''
            }

            if (log_message1_symbol_vol50 == null) {
                log_message1_symbol_vol50 = ''
            }

            if (log_message_curr_symbol_vol50 == null) {
                log_message_curr_symbol_vol50 = ''
            }

            td2_carousel3.textContent = `last ten ticks:  ${item.log_message10_symbol_vol50} ${item.log_message9_symbol_vol50} ${item.log_message8_symbol_vol50} ${item.log_message7_symbol_vol50} ${item.log_message6_symbol_vol50} ${item.log_message5_symbol_vol50} ${item.log_message4_symbol_vol50} ${item.log_message3_symbol_vol50} ${item.log_message2_symbol_vol50} ${item.log_message1_symbol_vol50}          current tick ${item.log_message_curr_symbol_vol50}    ${item.log_message_curr_tick_symbol_vol50}`;

            td2_carousel3.style.whiteSpace = 'pre'
            td2_carousel3.id = `log_td2_carousel3${log_id_symbol_vol50}`;
            td2_carousel3.classList.add('lod_td2_carousel3')
            row_carousel3.appendChild(td2_carousel3);

            const td3_carousel3 = document.createElement('td');
            td3_carousel3.textContent = 'this is the text'
            td3_carousel3.style.whiteSpace = 'pre'
            td3_carousel3.id = `log_td3_carousel3${log_id_symbol_vol50}`;
            td3_carousel3.classList.add('lod_td3_carousel3')
            row_carousel3.appendChild(td3_carousel3);

            if (log_tbody_carousel3.firstChild) {
                log_tbody_carousel3.insertBefore(row_carousel3, log_tbody_carousel3.firstChild);
                appended_symbol_vol50 = true
            } else {
                log_tbody_carousel3.appendChild(row_carousel3);
                appended_symbol_vol50 = true
            }
        });
    }
    appendRows(backendData)
}

async function bot_log_end_symbol_vol50(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td_carousel3 = document.getElementById(`log_td3_carousel3${log_id_symbol_vol50}`)

    function formate_log_date(datein) {
        const unixTimestamp = datein;
        const date = new Date(unixTimestamp * 1000);
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ` +
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} GMT`;

        return formattedDate
    }

    log_buy_timestamp_bot_symbol_vol50 = formate_log_date(bot_buy_time_stamp)
    log_sell_timestamp_bot_symbol_vol50 = formate_log_date(bot_sell_time_stamp)

    if (target_td_carousel3) {
        target_td_carousel3.textContent = `buy_time:  ${log_buy_timestamp_bot_symbol_vol50}        sell_time:  ${log_sell_timestamp_bot_symbol_vol50}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

        log_id_symbol_vol50 += 1
    } else {

    }
}

let first_instance_symbol_vol50 = true

async function startBot_symbol_vol50(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber) {
    if (first_instance_symbol_vol50 == true) {
        bot_id_symbol_vol50 = 0
    }
    bot_is_running_or_stopped_symbol_vol50 = true;
    log_timestamp_current_symbol_vol50 = format_log_current_time_symbol_vol50()
    set_start_trade1_symbol_vol50(bot_is_running_or_stopped_symbol_vol50);
    bot_id_symbol_vol50 += 1;
    firstContractReceived_symbol_vol50 = false;
    end_slide_symbol_vol50 = true;
    bot_entry_spot_symbol_vol50 = '';
    bot_exit_spot_symbol_vol50 = '';
    bot_profit_loss_symbol_vol50 = '';
    bot_status_symbol_vol50 = 'pending';
    bot_log_symbol_vol50(lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
    await buy_bot_symbol_vol50(martingale, currentRandom);
    first_instance_symbol_vol50 = false
}

let bot_state_carousel3_symbol_vol50 = null
let bot_state_carousel3_cookie_symbol_vol50 = null
let all_bot_start_stop1_symbol_vol50 = null
let all_bot_start_stop1_cookie_symbol_vol50 = null
let buttonContainer_carousel3_symbol_vol50 = document.querySelector('.click_change_carousel3');

function togglePlayPause_symbol_vol50() {
    var play_button_carousel3 = document.getElementById('play_button_carousel3');
    var pause_button_carousel3 = document.getElementById('pause_button_carousel3');

    if (play_button_carousel3) {
        localStorage.setItem('bot_state_carousel3', 'stop_bot');
        setCookie('bot_state_carousel3', 'stop_bot');
        localStorage.setItem('bots_state_carousel3', 'stop_bots');
        setCookie('bots_state_carousel3', 'stop_bots');

        let bot_state_carousel3 = localStorage.getItem('bot_state_carousel3');
        let bot_state_carousel3_cookie = getCookie('bot_state_carousel3');
        let bots_state_carousel3 = localStorage.getItem('bots_state_carousel3');
        let bots_state_carousel3_cookie = getCookie('bots_state_carousel3');

        play_button_carousel3.parentNode.removeChild(play_button_carousel3);

        var pause_button_carousel3 = document.createElement('div');
        pause_button_carousel3.id = 'pause_button_carousel3';
        pause_button_carousel3.className = 'pause_button_carousel3';
        pause_button_carousel3.innerHTML = '&#10074;&#10074;';
        buttonContainer_carousel3_symbol_vol50.appendChild(pause_button_carousel3);

        if ((bot_state_carousel3 == 'stop_bot' || bot_state_carousel3_cookie == 'stop_bot') && (bots_state_carousel3 == 'stop_bots' || bots_state_carousel3_cookie == 'stop_bots')) {
            bot_is_running_or_stopped_symbol_vol50 = false;
            document.getElementById('bot_state_carousel3').textContent = 'Bot has stopped';
        }

    } else if (pause_button_carousel3) {

        localStorage.setItem('bot_state_carousel3', 'start_bot');
        setCookie('bot_state_carousel3', 'start_bot');
        localStorage.setItem('bots_state_carousel3', 'start_bots');
        setCookie('bots_state_carousel3', 'start_bots');

        let bot_state_carousel3 = localStorage.getItem('bot_state_carousel3');
        let bot_state_carousel3_cookie = getCookie('bot_state_carousel3');
        let bots_state_carousel3 = localStorage.getItem('bots_state_carousel3');
        let bots_state_carousel3_cookie = getCookie('bots_state_carousel3');

        pause_button_carousel3.parentNode.removeChild(pause_button_carousel3);

        var play_button_carousel3 = document.createElement('div');
        play_button_carousel3.id = 'play_button_carousel3';
        play_button_carousel3.className = 'play_button_carousel3';
        play_button_carousel3.innerHTML = '&#9654;';
        buttonContainer_carousel3_symbol_vol50.appendChild(play_button_carousel3);

        if ((bot_state_carousel3 == 'start_bot' || bot_state_carousel3_cookie == 'start_bot') && (bots_state_carousel3 == 'start_bots' || bots_state_carousel3_cookie == 'start_bots')) {
            bot_is_running_or_stopped_symbol_vol50 = true;
            document.getElementById('bot_state_carousel3').textContent = 'Bot is running';
        }
    }
}

buttonContainer_carousel3_symbol_vol50.addEventListener('click', togglePlayPause_symbol_vol50);
function getRandom_symbol_vol50(strNumber) {
    return randomNumber_symbol_vol50 = strNumber.charAt(strNumber.length - 1);
}

let set_vol50_trade_carousel3_symbol_vol50 = null
let martingale_active_carousel3_symbol_vol50 = null
let bot_set_carousel3_symbol_vol50 = null
let set_bot_jump_carousel3_symbol_vol50 = null
let initial_set_jump_symbol_vol50 = true

let set_vol50_trade_carousel3_cookie_symbol_vol50 = null
let martingale_active_carousel3_cookie_symbol_vol50 = null
let bot_set_carousel3_cookie_symbol_vol50 = null
let set_bot_jump_carousel3_cookie_symbol_vol50 = null
let initial_set_jump_cookie_symbol_vol50 = true

let checkCount_symbol_vol50 = 0

let currentRandom_symbol_vol50 = null
let lastNumber1_symbol_vol50 = currentRandom_symbol_vol50;
let lastNumber2_symbol_vol50 = lastNumber1_symbol_vol50;
let lastNumber3_symbol_vol50 = lastNumber2_symbol_vol50;
let lastNumber4_symbol_vol50 = lastNumber3_symbol_vol50;
let lastNumber5_symbol_vol50 = lastNumber4_symbol_vol50;
let lastNumber6_symbol_vol50 = lastNumber5_symbol_vol50;
let lastNumber7_symbol_vol50 = lastNumber6_symbol_vol50;
let lastNumber8_symbol_vol50 = lastNumber7_symbol_vol50;
let lastNumber9_symbol_vol50 = lastNumber8_symbol_vol50;
let lastNumber10_symbol_vol50 = lastNumber9_symbol_vol50;

let previousNumber1 = null;
let previousNumber2 = null;
let resultArray = [];

function processNumber(number) {
    if (previousNumber1 !== null && previousNumber2 !== null && previousNumber1 === previousNumber2 && number !== previousNumber1) {
        // Check if the number already exists in the array
        const index = resultArray.indexOf(previousNumber1);
        if (index === -1) {
            // If the number is not in the array, push it
            resultArray.push(previousNumber1);
        }
    }

    // Update previous numbers
    previousNumber2 = previousNumber1;
    previousNumber1 = number;

}

let updating_balance = null
let initial_balance = getCookie('initial_balance') !== null && getCookie('initial_balance') !== ''
    ? getCookie('initial_balance')
    : localStorage.getItem('initial_balance');

let take_profit = getCookie('take_profit') !== null && getCookie('take_profit') !== ''
    ? getCookie('take_profit')
    : localStorage.getItem('take_profit');

let stop_loss = getCookie('stop_loss') !== null && getCookie('stop_loss') !== ''
    ? getCookie('stop_loss')
    : localStorage.getItem('stop_loss');

const tickStream_symbol_vol50 = () => api.subscribe({ "ticks": 'R_50' });

const tickResponse_symbol_vol50 = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {

        connection.removeEventListener('message', tickResponse_symbol_vol50, false);
        await api.disconnect();
    }

    function getRandom1(strNumber1) {
        return randomNumber_symbol_vol50 = strNumber1.charAt(strNumber1.length - 1);
    }

    lastNumber10_symbol_vol50 = lastNumber9_symbol_vol50
    lastNumber9_symbol_vol50 = lastNumber8_symbol_vol50
    lastNumber8_symbol_vol50 = lastNumber7_symbol_vol50
    lastNumber7_symbol_vol50 = lastNumber6_symbol_vol50
    lastNumber6_symbol_vol50 = lastNumber5_symbol_vol50
    lastNumber5_symbol_vol50 = lastNumber4_symbol_vol50
    lastNumber4_symbol_vol50 = lastNumber3_symbol_vol50
    lastNumber3_symbol_vol50 = lastNumber2_symbol_vol50
    lastNumber2_symbol_vol50 = lastNumber1_symbol_vol50
    lastNumber1_symbol_vol50 = currentRandom_symbol_vol50

    if (data.msg_type === 'tick') {

        subscriptionId_symbol_vol50 = data.subscription.id;
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

        if (data.echo_req.ticks === "R_50") {
            strNumber_symbol_vol50 = formatToFourDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_vol50 = getRandom1(strNumber_symbol_vol50);
        }

        stream50_carousel3_symbol_vol50.textContent = strNumber_symbol_vol50

        all_bot_start_stop1_symbol_vol50 = localStorage.getItem('bots_state_carousel3')
        all_bot_start_stop1_cookie_symbol_vol50 = getCookie('bots_state_carousel3')

        bot_state_carousel3_symbol_vol50 = localStorage.getItem('bot_state_carousel3')
        bot_state_carousel3_cookie_symbol_vol50 = getCookie('bot_state_carousel3')

        set_vol50_trade_carousel3_symbol_vol50 = localStorage.getItem('set_vol50_trade')
        martingale_active_carousel3_symbol_vol50 = localStorage.getItem('martingale_carousel3');
        bot_set_carousel3_symbol_vol50 = localStorage.getItem('bot_set_carousel3');
        set_bot_jump_carousel3_symbol_vol50 = localStorage.getItem('bot_jump_carousel3')

        set_vol50_trade_carousel3_cookie_symbol_vol50 = localStorage.getItem('set_vol50_trade')
        martingale_active_carousel3_cookie_symbol_vol50 = getCookie('martingale_carousel3');
        bot_set_carousel3_cookie_symbol_vol50 = getCookie('bot_set_carousel3');
        set_bot_jump_carousel3_cookie_symbol_vol50 = getCookie('bot_jump_carousel3')

        if (((set_bot_jump_carousel3_symbol_vol50 && set_bot_jump_carousel3_symbol_vol50 > 0) && contract_status2_symbol_vol50 == 'lost') || ((set_bot_jump_carousel3_cookie_symbol_vol50 && set_bot_jump_carousel3_cookie_symbol_vol50 > 0) && contract_status2_symbol_vol50 == 'lost')) {
            bot_set_carousel3_symbol_vol50 = (parseInt(bot_set_carousel3_symbol_vol50) + parseInt(set_bot_jump_carousel3_symbol_vol50)) !== null ? (parseInt(bot_set_carousel3_symbol_vol50) + parseInt(set_bot_jump_carousel3_symbol_vol50)) : (parseInt(bot_set_carousel3_cookie_symbol_vol50) + parseInt(set_bot_jump_carousel3_cookie_symbol_vol50))
            contract_status2_symbol_vol50 == 'reset'
        } else if ((initial_set_jump_symbol_vol50 == true || (contract_status2_symbol_vol50 == 'won' && (set_bot_jump_carousel3_symbol_vol50 && set_bot_jump_carousel3_symbol_vol50 > 0))) || (initial_set_jump_cookie_symbol_vol50 == true || (contract_status2_symbol_vol50 == 'won' && (set_bot_jump_carousel3_cookie_symbol_vol50 && set_bot_jump_carousel3_cookie_symbol_vol50 > 0)))) {
            bot_set_carousel3_symbol_vol50 = localStorage.getItem('bot_set_carousel3') ? localStorage.getItem('bot_set_carousel3') : getCookie('bot_set_carousel3');
            initial_set_jump_symbol_vol50 = false
            initial_set_jump_cookie_symbol_vol50 = false
        } else {
            bot_set_carousel3_symbol_vol50 = localStorage.getItem('bot_set_carousel3') ? localStorage.getItem('bot_set_carousel3') : getCookie("bot_set_carousel3");
        }
        let bot_count = bot_id_symbol_vol50

        const tag5_carousel3 = document.getElementById(`td5_carousel3${bot_count}`);
        const tag6_carousel3 = document.getElementById(`td6_carousel3${bot_count}`);
        const tag8_carousel3 = document.getElementById(`td8_carousel3${bot_count}`);
        const tag9_carousel3 = document.getElementById(`td9_carousel3${bot_count}`);

        processNumber(currentRandom_symbol_vol50);

        if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                if (currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 1 || bot_set_carousel3_cookie_symbol_vol50 == 1)) {
                    if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else {

                    }
                } else {

                }
            } else {

            }
        }

        if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                if (lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 2 || bot_set_carousel3_cookie_symbol_vol50 == 2)) {
                    if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else {

                    }
                } else {

                }
            } else {

            }
        }

        if (currentRandom_symbol_vol50) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                for (let i = 0; i < resultArray.length; i++) {
                    if (resultArray[i] == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 3 || bot_set_carousel3_cookie_symbol_vol50 == 3)) {
                        if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
                            startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                            resultArray.splice(i, 1);
                        } else {

                        }
                    }
                }
            }
        }

        if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                if (lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 4 || bot_set_carousel3_cookie_symbol_vol50 == 4)) {
                    if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else {

                    }
                } else {

                }
            } else {

            }
        }

        if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                if (lastNumber4_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 5 || bot_set_carousel3_cookie_symbol_vol50 == 5)) {
                    if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else {

                    }
                } else {

                }
            } else {

            }
        }

        if (tag5_carousel3 && tag5_carousel3 && tag8_carousel3 && tag9_carousel3) {
            if (tag5_carousel3.textContent.trim() === '' && tag6_carousel3.textContent.trim() === '' && tag8_carousel3.textContent.trim() === '' && tag9_carousel3.textContent.trim() === '') {
                console.log('Tags are empty:', tag5_carousel3.textContent, tag5_carousel3.textContent, tag8_carousel3.textContent, tag9_carousel3.textContent);
                checkCount_symbol_vol50 += 1;
                console.log('checkCount', checkCount_symbol_vol50);

                if (checkCount_symbol_vol50 == 500) {
                    console.log('hanged');
                    initializeApi(message1);
                }
            }
        }

        // if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
        //     if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
        //         if (lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 3 || bot_set_carousel3_cookie_symbol_vol50 == 3)) {
        //             if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
        //                 startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
        //             } else  {

        //             }
        //         } else if (tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') {
        //             checkCount_symbol_vol50 += 1
        //            if ((tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') && checkCount_symbol_vol50 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }

        // if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
        //     if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
        //         if (lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 4 || bot_set_carousel3_cookie_symbol_vol50 == 4)) {
        //             if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
        //                 startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
        //             } else  {

        //             }
        //         } else if (tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') {
        //             checkCount_symbol_vol50 += 1
        //            if ((tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') && checkCount_symbol_vol50 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }

        // if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
        //     if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
        //         if (lastNumber4_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 5 || bot_set_carousel3_cookie_symbol_vol50 == 5)) {
        //             if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
        //                 startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
        //             } else  {

        //             }
        //         } else if (tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') {
        //             checkCount_symbol_vol50 += 1
        //            if ((tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') && checkCount_symbol_vol50 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }

        // if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
        //     if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
        //         if (lastNumber5_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber4_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 6 || bot_set_carousel3_cookie_symbol_vol50 == 6)) {
        //             if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
        //                 startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
        //             } else  {

        //             }
        //         } else if (tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') {
        //             checkCount_symbol_vol50 += 1
        //            if ((tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') && checkCount_symbol_vol50 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }


        // if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
        //     if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
        //         if (lastNumber6_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber5_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber4_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 7 || bot_set_carousel3_cookie_symbol_vol50 == 7)) {
        //             if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
        //                 startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
        //             } else  {

        //             }
        //         } else if (tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') {
        //             checkCount_symbol_vol50 += 1
        //            if ((tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') && checkCount_symbol_vol50 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }

        // if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
        //     if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
        //         if (lastNumber7_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber6_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber5_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber4_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 8 || bot_set_carousel3_cookie_symbol_vol50 == 8)) {
        //             if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
        //                 startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
        //             } else  {

        //             }
        //         } else if (tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') {
        //             checkCount_symbol_vol50 += 1
        //            if ((tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') && checkCount_symbol_vol50 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }

        // if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
        //     if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
        //         if (lastNumber8_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber7_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber6_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber5_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber4_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 9 || bot_set_carousel3_cookie_symbol_vol50 == 9)) {
        //             if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
        //                 startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
        //             } else  {

        //             }
        //         } else if (tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') {
        //             checkCount_symbol_vol50 += 1
        //            if ((tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') && checkCount_symbol_vol50 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }

        // if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
        //     if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
        //         if (lastNumber9_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber8_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber7_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber6_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber5_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber4_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 10 || bot_set_carousel3_cookie_symbol_vol50 == 10)) {
        //             if (((bot_state_carousel3_symbol_vol50 == 'start_bot' || bot_state_carousel3_cookie_symbol_vol50 == 'start_bot') && (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots')) && ((set_vol50_trade_carousel3_symbol_vol50 == 'vol50_trade') || (set_vol50_trade_carousel3_cookie_symbol_vol50 == 'vol50_trade'))) {
        //                 startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
        //             } else  {

        //             }
        //         } else if (tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') {
        //             checkCount_symbol_vol50 += 1
        //            if ((tag5_carousel3.textContent.trim() == '' && tag6_carousel3.textContent.trim() == '' && tag8_carousel3.textContent.trim() == '' && tag9_carousel3.textContent.trim() == '') && checkCount_symbol_vol50 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }
    }
};

const subscribeTicks_symbol_vol_general = async () => {
    await tickStream_symbol_vol50();
    connection.addEventListener('message', tickResponse_symbol_vol50);
};

const unsubscribeTicks_symbol_vol_general = () => {
    connection.removeEventListener('message', tickResponse_symbol_vol50, false);
    tickStream_symbol_vol50().unsubscribe();
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

        }
    } catch (error) {

    }

    try {
        api = new DerivAPIBasic({ connection });
        authorize_response_symbol_General = await api.authorize(api_token);

        if (!authorize_response_symbol_General.authorize) {

            return null;
        } else {

            if (authorize_response_symbol_General.authorize.loginid.startsWith("CR")) {
                td2_account_id_symbol_vol10.textContent = authorize_response_symbol_General.authorize.loginid
            } else {
            }
        }

        subscribeTicks_symbol_vol_general()
        getWebsitePing()

        return { api, authorize_response_symbol_General };

    } catch (error) {
        console.error("Error occurred during API initialization:", error);
        return null;
    }
}


window.addEventListener('load', function () {
    duration_amount_cookie_symbol_vol50 = getCookie('duration_amount_cookie');
    stake_amount_cookie_symbol_vol50 = getCookie('stake_amount_cookie');
    duration_unit_cookie_symbol_vol50 = getCookie('duration_unit_cookie');
    symbol_vol_cookie_symbol_vol50 = getCookie('symbol_vol_cookie');
    currency_cookie_symbol_vol50 = getCookie('ActiveCurrency')
    contract_text_cookie_symbol_vol50 = getCookie('contract_text_cookie');
    stake_or_payout_cookie_symbol_vol50 = getCookie('stake_or_payout_cookie')
    last_digit_prediction_cookie_symbol_vol50 = getCookie('last_digit_prediction_cookie')
    stake_amount_default_symbol_vol50 = getCookie('stake_amount_default')

    if (last_digit_prediction_cookie_symbol_vol50) {
        last_digit_prediction_or_barrier_symbol_vol50 = last_digit_prediction_cookie_symbol_vol50
    } else {
        let numericValue = last_digit_input_symbol_vol50.value
        last_digit_prediction_or_barrier_symbol_vol50 = numericValue
    }
    if (symbol_vol_cookie_symbol_vol50) {
        symbol_vol_symbol_vol50 = symbol_vol_cookie_symbol_vol50;
    } else {
        symbol_vol_symbol_vol50 = "R_50";
    }
    if (duration_unit_cookie_symbol_vol50) {
        duration_unit_symbol_vol50 = duration_unit_cookie_symbol_vol50;
    } else {
        duration_unit_symbol_vol50 = "t";
    }
    if (duration_amount_cookie_symbol_vol50) {
        duration_amount_symbol_vol50 = parseInt(duration_amount_cookie_symbol_vol50, 10);
    } else {
        duration_amount_symbol_vol50 = 1;
    }
    if (stake_amount_cookie_symbol_vol50) {
        stake_amount_symbol_vol50 = parseFloat(stake_amount_cookie_symbol_vol50);
    } else {
        stake_amount_symbol_vol50 = 10;
    }
    if (stake_amount_default_symbol_vol50) {
        stake_amount_default_symbol_vol50 = parseFloat(stake_amount_default_symbol_vol50);
    } else {
        stake_amount_default_symbol_vol50 = 10;
    }
    if (currency_cookie_symbol_vol50) {
        currency_symbol_vol50 = currency_cookie_symbol_vol50;
    } else {
        currency_symbol_vol50 = "USD";
    }
    if (contract_text_cookie_symbol_vol50) {
        contract_symbol_vol50 = contract_text_cookie_symbol_vol50;
    } else {
        contract_symbol_vol50 = "Matches/Differs";
    }
    if (stake_or_payout_cookie_symbol_vol50) {
        stake_or_payout_symbol_vol50 = stake_or_payout_cookie_symbol_vol50;
    } else {
        stake_or_payout_symbol_vol50 = "stake";
    }

    initializeApi(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response_symbol_General) {
            clearInterval(getAwaitingResponses)
        } else {

        }
    }, 2000);
});

async function order_propose_symbol_vol50(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
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
                let tooltip = document.getElementById('tooltiptext50');
                tooltip.textContent = data.error.message;
                tooltip.classList.add('tooltiptext10')

                connection.removeEventListener('message', proposalResponse, false);
                await api.disconnect();
                reject(new Error('Error in proposal'));
            } else if (data.msg_type === 'proposal') {

                proposal_id_symbol_vol50 = data.proposal.id;

                // let calc = displayProposalResult2(data, data.proposal.display_value, data.proposal.payout);

                // def_price_up_symbol_vol50 = data.proposal.display_value;
                // def_payout_up_symbol_vol50 = data.proposal.payout;
                // def_profit_up_symbol_vol50 = calc.NetProfit;
                resolve();
            }
        };

        const getProposal = async () => {
            connection.addEventListener('message', proposalResponse);
            await api.proposal(proposal_to_buy);
        };

        getProposal();
    });
}

const unsubscribeProposal_symbol_vol50 = () => {
    connection.removeEventListener('message', proposalResponse_symbol_vol50, false);
};

function convertTimestampTo12HourTime_symbol_vol50(timestamp) {
    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedTime = `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    return formattedTime;
}

function formatNumberAndBoldLastDecimal_symbol_vol50(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart) {
        let lastDecimalDigit = decimalPart.slice(-1);
        decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
    }
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}

let contract_status_html_symbol_vol50 = document.getElementById('contract_status_carousel3')
let end_tic_off_trade_symbol_vol50 = document.getElementById('end_tic_off_trade_carousel3')
let price_after_trade_figure_amount_symbol_vol50 = document.getElementById('price_after_trade_figure_amount_carousel3')
let profit_figure_amount_symbol_vol50 = document.getElementById('profit_figure_amount_carousel3')
let buy_price_figure_amount_symbol_vol50 = document.getElementById('buy_price_figure_amount_carousel3')
let result_currency_html_symbol_vol50 = document.querySelectorAll('.result_currency')
let transaction_refrence_figure_symbol_vol50 = document.getElementById('transaction_refrence_figure_carousel3')
let trade_start_time_symbol_vol50 = document.getElementById('trade_start_time_carousel3')
let buy_price_text_symbol_vol50 = document.getElementById('buy_price_text_carousel3')
let price_after_trade_text_symbol_vol50 = document.getElementById('price_after_trade_text_carousel3')
let profit_text_symbol_vol50 = document.getElementById('profit_text_carousel3')
let durr_amount_prop_count_symbol_vol50 = document.getElementById('durr_amount_prop_count_carousel3')
let durr_amount_prop_symbol_vol50 = document.getElementById('durr_amount_prop_carousel3')
let countdown_trade_symbol_vol50 = 0
let countdown_trade2_symbol_vol50 = 0

function before_trade_symbol_vol50() {
    countdown_trade_symbol_vol50 = 0
    let allDigits = document.querySelectorAll('.ldgs_carousel3')
    let buy_price_text = document.getElementById('buy_price_text_carousel3')
    let price_after_trade_text = document.getElementById('price_after_trade_text_carousel3')
    let profit_text = document.getElementById('profit_text_carousel3')
    let slide_trade_result = document.getElementById('slide_trade_result_carousel3')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel3')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel3')
    let profit_figure_amount = document.getElementById('profit_figure_amount_carousel3')
    contract_status_html_symbol_vol50.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count_symbol_vol50.textContent = countdown_trade_symbol_vol50
    durr_amount_prop_symbol_vol50.textContent = duration_amount_symbol_vol50
    buy_price_figure_amount.textContent = def_price_up_symbol_vol50
    price_after_trade_figure_amount.textContent = def_payout_up_symbol_vol50
    profit_figure_amount.textContent = def_profit_up_symbol_vol50

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
            if (digit.textContent != (last_digit_prediction_or_barrier_symbol_vol50)) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound == 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier_symbol_vol50) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}

function after_trade_symbol_vol50(status, endDigit) {
    let slide_trade_result = document.getElementById('slide_trade_result_carousel3')
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

function formate_date_symbol_vol50(datein) {
    const unixTimestamp = datein;
    const date = new Date(unixTimestamp * 1000);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ` +
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} GMT`;

    return formattedDate
}

let allProposalOpenContract_symbol_vol50 = []
let longcodeProp_symbol_vol50 = null
let contract_ids_buy_symbol_vol50 = null
let contract_status_symbol_vol50 = null
let last_tick_symbol_vol50 = null
let profit_or_loss_symbol_vol50 = null
let final_price_symbol_vol50 = null
let payout_result_symbol_vol50 = null
let buy_price_symbol_vol50 = null
let contract_currency_symbol_vol50 = null
let time_of_trade_symbol_vol50 = null
let every_tick_symbol_vol50 = null
let contract_id_symbol_vol50 = null

let allProposalOpenContract2_symbol_vol50 = []
let longcodeProp2_symbol_vol50 = null
let contract_ids_buy2_symbol_vol50 = null
let contract_ids_sell2_symbol_vol50 = null
let contract_status2_symbol_vol50 = null
let last_tick2_symbol_vol50 = null
let profit_or_loss2_symbol_vol50 = null
let final_price2_symbol_vol50 = null
let payout_result2_symbol_vol50 = null
let buy_price2_symbol_vol50 = null
let contract_currency2_symbol_vol50 = null
let time_of_trade2_symbol_vol50 = null
let every_tick2_symbol_vol50 = null

function open_proposal_actions2_symbol_vol50(data) {
    if (data.proposal_open_contract.contract_id == contract_id2_symbol_vol50) {
        set_middle_trade1_symbol_vol50(bot_is_running_or_stopped_symbol_vol50)
        bot_buy_start_time_symbol_vol50 = formate_date_symbol_vol50(data.proposal_open_contract.date_start)
        bot_buy_transaction_id_symbol_vol50 = data.proposal_open_contract.transaction_ids.buy
        bot_trade_type_symbol_vol50 = data.proposal_open_contract.contract_type
        bot_buy_price_symbol_vol50 = data.proposal_open_contract.buy_price
        bot_status_symbol_vol50 = data.proposal_open_contract.status == 'open' ? 'Pending' : data.proposal_open_contract.status
        bot_contract_id_symbol_vol50 = data.proposal_open_contract.contract_id
        start_trade_ref_symbol_vol50(bot_buy_price_symbol_vol50)

        if (firstContractReceived_symbol_vol50 == false) {
            append_result_symbol_vol50(bot_id_symbol_vol50, bot_buy_start_time_symbol_vol50, bot_buy_transaction_id_symbol_vol50, bot_trade_type_symbol_vol50, bot_buy_price_symbol_vol50, bot_status_symbol_vol50);
            firstContractReceived_symbol_vol50 = true
        }

        longcodeProp2_symbol_vol50 = data.proposal_open_contract.longcode
        allProposalOpenContract2_symbol_vol50.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information_carousel3').textContent = longcodeProp2_symbol_vol50

        if (allProposalOpenContract2_symbol_vol50.length > 0 && allProposalOpenContract2_symbol_vol50[allProposalOpenContract2_symbol_vol50.length - 1].length > 0) {
            let lastSubArray2 = allProposalOpenContract2_symbol_vol50[allProposalOpenContract2_symbol_vol50.length - 1];
            let lastElementOfLastSubArray2 = lastSubArray2[lastSubArray2.length - 1].tick_display_value;
            let numberString2 = lastElementOfLastSubArray2.toString();
            let lastCharacter2 = numberString2[numberString2.length - 1];
            handleNewNumber_symbol_vol50(lastCharacter2);
            every_tick2_symbol_vol50 = lastElementOfLastSubArray2
            end_tic_off_trade_symbol_vol50.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol50(every_tick2_symbol_vol50);
            if (countdown_trade2_symbol_vol50 < duration_amount_symbol_vol50) {
                countdown_trade2_symbol_vol50 += 1
                durr_amount_prop_count_symbol_vol50.textContent = countdown_trade_symbol_vol50
            }
            if (data.proposal_open_contract.is_expired == 1 && end_slide_symbol_vol50 == true) {
                set_end_trade1_symbol_vol50(bot_is_running_or_stopped_symbol_vol50)
                end_slide_symbol_vol50 = false
            }
            contract_ids_buy2_symbol_vol50 = data.proposal_open_contract.transaction_ids.buy
            if (contract_ids_buy2_symbol_vol50) {
                middle_trade_ref_symbol_vol50(contract_ids_buy2_symbol_vol50)
            }
            if (data.proposal_open_contract.status !== 'open') {
                let circle2_carousel3 = document.getElementById('circle2_carousel3')
                circle2_carousel3.classList.remove('circle_shadow_carousel3')
                bot_status_symbol_vol50 = data.proposal_open_contract.status
                bot_entry_spot_symbol_vol50 = data.proposal_open_contract.entry_tick
                bot_exit_spot_symbol_vol50 = data.proposal_open_contract.exit_tick
                bot_profit_loss_symbol_vol50 = data.proposal_open_contract.profit
                contract_status2_symbol_vol50 = data.proposal_open_contract.status
                last_tick2_symbol_vol50 = lastElementOfLastSubArray2
                profit_or_loss2_symbol_vol50 = data.proposal_open_contract.profit
                payout_result2_symbol_vol50 = data.proposal_open_contract.payout
                buy_price2_symbol_vol50 = data.proposal_open_contract.buy_price
                contract_currency2_symbol_vol50 = data.proposal_open_contract.currency
                contract_ids_buy2_symbol_vol50 = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2_symbol_vol50 = data.proposal_open_contract.expiry_time
                contract_ids_sell2_symbol_vol50 = data.proposal_open_contract.transaction_ids.sell

                end_trade_ref_symbol_vol50(contract_ids_sell2_symbol_vol50)
                if (profit_or_loss2_symbol_vol50 < 0) {
                    final_price2_symbol_vol50 = '0.00'
                } else if (profit_or_loss2_symbol_vol50 > 0) {
                    final_price2_symbol_vol50 = payout_result2_symbol_vol50
                } else if (tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') {
                    checkCount_symbol_vol50 += 1
                    if ((tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') && checkCount_symbol_vol50 == 500) {
                        console.log('hanged')
                        initializeApi(message1)
                    }
                }
                if (contract_status2_symbol_vol50 == 'won' && !wonEncountered_symbol_vol50) {
                    bot_total_wins_symbol_vol50 = bot_total_wins_symbol_vol50 + 1;
                    bot_total_profit_loss_symbol_vol50 = bot_total_profit_loss_symbol_vol50 + profit_or_loss2_symbol_vol50;
                    bot_total_stake_symbol_vol50 = bot_total_stake_symbol_vol50 + buy_price2_symbol_vol50
                    bot_total_runs_symbol_vol50 = bot_total_runs_symbol_vol50 + 1;
                    bot_total_payout_symbol_vol50 = bot_total_payout_symbol_vol50 + payout_result2_symbol_vol50;
                    add_after_trade_symbol_vol50(bot_id_symbol_vol50, contract_id2_symbol_vol50, bot_contract_id_symbol_vol50, bot_entry_spot_symbol_vol50, bot_exit_spot_symbol_vol50, bot_profit_loss_symbol_vol50, bot_status_symbol_vol50, bot_total_runs_symbol_vol50, bot_total_stake_symbol_vol50, bot_total_payout_symbol_vol50, bot_total_wins_symbol_vol50, bot_total_loss_symbol_vol50, bot_total_profit_loss_symbol_vol50);
                    wonEncountered_symbol_vol50 = true;
                } else if (contract_status2_symbol_vol50 == 'lost') {
                    bot_total_loss_symbol_vol50 = bot_total_loss_symbol_vol50 + 1;
                    bot_total_profit_loss_symbol_vol50 = bot_total_profit_loss_symbol_vol50 + profit_or_loss2_symbol_vol50;
                    bot_total_stake_symbol_vol50 = bot_total_stake_symbol_vol50 + buy_price2_symbol_vol50
                    bot_total_runs_symbol_vol50 = bot_total_runs_symbol_vol50 + 1;
                    bot_total_payout_symbol_vol50 = bot_total_payout_symbol_vol50 - payout_result2_symbol_vol50;
                    add_after_trade_symbol_vol50(bot_id_symbol_vol50, contract_id2_symbol_vol50, bot_contract_id_symbol_vol50, bot_entry_spot_symbol_vol50, bot_exit_spot_symbol_vol50, bot_profit_loss_symbol_vol50, bot_status_symbol_vol50, bot_total_runs_symbol_vol50, bot_total_stake_symbol_vol50, bot_total_payout_symbol_vol50, bot_total_wins_symbol_vol50, bot_total_loss_symbol_vol50, bot_total_profit_loss_symbol_vol50);
                    wonEncountered_symbol_vol50 = true;
                }
                if (contract_status2_symbol_vol50 == 'won' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol50 = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol50 = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol50 = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol50 = every_tick2_symbol_vol50
                    bot_log_end_symbol_vol50(log_buy_timestamp_bot_symbol_vol50, log_sell_timestamp_bot_symbol_vol50, log_message_entry_tick_symbol_vol50, log_message_last_digit_symbol_vol50)
                } else if (contract_status2_symbol_vol50 == 'lost' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol50 = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol50 = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol50 = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol50 = every_tick2_symbol_vol50
                    bot_log_end_symbol_vol50(log_buy_timestamp_bot_symbol_vol50, log_sell_timestamp_bot_symbol_vol50, log_message_entry_tick_symbol_vol50, log_message_last_digit_symbol_vol50)
                }
                contract_status_html_symbol_vol50.textContent = contract_status2_symbol_vol50
                end_tic_off_trade_symbol_vol50.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol50(last_tick2_symbol_vol50);
                profit_figure_amount_symbol_vol50.textContent = profit_or_loss2_symbol_vol50
                price_after_trade_figure_amount_symbol_vol50.textContent = final_price2_symbol_vol50
                buy_price_figure_amount_symbol_vol50.textContent = buy_price2_symbol_vol50
                result_currency_html_symbol_vol50.textContent = contract_currency2_symbol_vol50
                transaction_refrence_figure_symbol_vol50.textContent = contract_ids_buy2_symbol_vol50
                trade_start_time_symbol_vol50.innerHTML = convertTimestampTo12HourTime_symbol_vol50(time_of_trade2_symbol_vol50)
                buy_price_text_symbol_vol50.textContent = 'Buy price'
                price_after_trade_text_symbol_vol50.textContent = 'Final price'
                profit_text_symbol_vol50.textContent = 'Profit'
                after_trade_symbol_vol50(contract_status2_symbol_vol50, lastCharacter2)
            } else {
            }
        } else {

        }
    }
}

let currentPosition1_symbol_vol50 = 0;
function moveSlider_symbol_vol50(number) {
    const slider = document.getElementById('slide_trade_result_carousel3');
    const container = document.getElementById('last_digit_responds_carousel3');
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

    const target = document.querySelector(`.last_digits_carousel3.${stringnumber}`);
    if (target) {
        const targetPosition = target.offsetLeft;
        const currentSliderPosition = slider.offsetLeft;
        const direction = targetPosition > currentSliderPosition ? 'left' : 'right';
        const maxTranslateX = container.offsetWidth - slider.offsetWidth;
        const newPosition = Math.min(Math.max(targetPosition, 0), maxTranslateX);
        if (direction === 'left') {
            slider.style.transform = `translateX(${newPosition}px)`;
        } else {
            slider.style.transform = `translateX(${newPosition}px)`;
        }
        currentPosition1_symbol_vol50 = newPosition;
    }
}

function handleNewNumber_symbol_vol50(randomNumber) {
    const newPosition = randomNumber;
    moveSlider_symbol_vol50(newPosition);
}

let log_close_and_info_cont_symbol_vol50 = document.getElementById('log_close_and_info_cont_carousel3');
let bot_log_show_cont_symbol_vol50 = document.getElementById('bot_log_show_cont_carousel3');
let bot_details_symbol_vol50 = document.getElementById('bot_details_carousel3');
let bot_details2_symbol_vol50 = document.getElementById('bot_details2_carousel3');

if (bot_log_show_cont_symbol_vol50 && bot_details_symbol_vol50) {
    bot_details_symbol_vol50.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol50.style.display == 'none') {
            bot_log_show_cont_symbol_vol50.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol50.style.display = 'none'
        }
    });

    log_close_and_info_cont_symbol_vol50.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_log_show_cont_symbol_vol50.style.display == 'block') {
            bot_log_show_cont_symbol_vol50.style.display = 'none'
        } else {
            bot_log_show_cont_symbol_vol50.style.display = 'block'
        }
    });
} else {
    console.error('One or more elements are not found');
}

if (bot_log_show_cont_symbol_vol50 && bot_details_symbol_vol50) {
    bot_details2_symbol_vol50.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol50.style.display == 'none') {
            bot_log_show_cont_symbol_vol50.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol50.style.display = 'none'
        }
    });
} else {
    console.error('One or more elements are not found');
}

let martingale_symbol_vol50 = document.getElementById('martingale_carousel3');
let flash_info_cont_symbol_vol50 = document.getElementById('flash_info_cont_carousel3');
let tick_check_amount_symbol_vol50 = document.getElementById('tick_check_amount_carousel3');
let settings_cont_symbol_vol50 = document.getElementById('settings_cont_carousel3');
let tick_check_symbol_vol50 = document.getElementById('tick_check_carousel3');
let martingale_jump_symbol_vol50 = document.getElementById('martingale_jump_carousel3');
let increase_jump_symbol_vol50 = document.getElementById('increase_jump_carousel3');
let reduce_jump_symbol_vol50 = document.getElementById('reduce_jump_carousel3');
let bot_settings_symbol_vol50 = document.getElementById('bot_settings_carousel3');
let bot_settings2_symbol_vol50 = document.getElementById('bot_settings2_carousel3');
const volumes2_symbol_vol50 = document.querySelectorAll(".slide_vol2_carousel3");
let tick_check2_symbol_vol50 = document.getElementById('tick_check2_carousel3');
let martingale2_symbol_vol50 = document.getElementById('martingale2_carousel3');
let martingale_jump2_symbol_vol50 = document.getElementById('martingale_jump2_carousel3');
let martingale_jump_set_symbol_vol50 = document.getElementById('martingale_jump_set_carousel3');
const last_digit_settings_symbol_vol50 = document.querySelectorAll(".last_digit_settings_carousel3");

martingale_symbol_vol50.addEventListener('click', function () {
    if (martingale_symbol_vol50.classList.contains('active_mat')) {
        martingale_symbol_vol50.classList.remove('active_mat');
        martingale2_symbol_vol50.classList.remove('active_mat');
        setCookie('martingale_carousel3', 'false')
        localStorage.setItem('martingale_carousel3', 'false')
        flash_info_cont_symbol_vol50.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol50.style.color = '#fff'
    } else {
        martingale_symbol_vol50.classList.add('active_mat');
        martingale2_symbol_vol50.classList.add('active_mat');
        setCookie('martingale_carousel3', 'true')
        localStorage.setItem('martingale_carousel3', 'true')
        flash_info_cont_symbol_vol50.textContent = 'martigale is active'
        tick_check_amount_symbol_vol50.style.color = '#fff'
    }
    if (flash_info_cont_symbol_vol50.classList.contains('show_flash_info_carousel3')) {
        flash_info_cont_symbol_vol50.classList.remove('show_flash_info_carousel3')
        setTimeout(() => {
            flash_info_cont_symbol_vol50.classList.remove('show_flash_info_carousel3')
        }, 5000)
    } else {
        flash_info_cont_symbol_vol50.classList.add('show_flash_info_carousel3')
        setTimeout(() => {
            flash_info_cont_symbol_vol50.classList.remove('show_flash_info_carousel3')
        }, 5000)
    }
});

function bot_set_default_symbol_vol50() {
    let curr_bot_set = localStorage.getItem('bot_set_carousel3');
    if (curr_bot_set === null) {
        setTimeout(bot_set_default_symbol_vol50, 100);
        return;
    }
    tick_check_symbol_vol50.textContent = curr_bot_set;
    tick_check2_symbol_vol50.textContent = curr_bot_set;
}

bot_set_default_symbol_vol50();

bot_settings_symbol_vol50.addEventListener('click', function () {
    if (settings_cont_symbol_vol50.style.display == 'none') {
        settings_cont_symbol_vol50.style.display = 'block'
    } else {
        settings_cont_symbol_vol50.style.display = 'none'
    }
});

document.addEventListener('click', (event) => {
    if (!bot_settings_symbol_vol50.contains(event.target) && !settings_cont_symbol_vol50.contains(event.target) && !martingale_jump_set_symbol_vol50.contains(event.target)) {
        settings_cont_symbol_vol50.style.display = 'none';
    }
});

last_digit_settings_symbol_vol50.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.querySelector('.bot_text_carousel3').textContent.trim().replace(/\s+/g, ' ');
        if (bot_set == 'Last one digit bot') {
            localStorage.setItem('bot_set_carousel3', '1')
            setCookie('bot_set_carousel3', '1')
            localStorage.setItem('bot_set_store_carousel3', '1')
            setCookie('bot_set_store_carousel3', '1')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            localStorage.setItem('bot_set_carousel3', '2')
            setCookie('bot_set_carousel3', '2')
            localStorage.setItem('bot_set_store_carousel3', '2')
            setCookie('bot_set_store_carousel3', '2')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            localStorage.setItem('bot_set_carousel3', '3')
            setCookie('bot_set_carousel3', '3')
            localStorage.setItem('bot_set_store_carousel3', '3')
            setCookie('bot_set_store_carousel3', '3')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            localStorage.setItem('bot_set_carousel3', '4')
            setCookie('bot_set_carousel3', '4')
            localStorage.setItem('bot_set_store_carousel3', '4')
            setCookie('bot_set_store_carousel3', '4')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            localStorage.setItem('bot_set_carousel3', '5')
            setCookie('bot_set_carousel3', '5')
            localStorage.setItem('bot_set_store_carousel3', '5')
            setCookie('bot_set_store_carousel3', '5')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            localStorage.setItem('bot_set_carousel3', '6')
            setCookie('bot_set_carousel3', '6')
            localStorage.setItem('bot_set_store_carousel3', '6')
            setCookie('bot_set_store_carousel3', '6')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            localStorage.setItem('bot_set_carousel3', '7')
            setCookie('bot_set_carousel3', '7')
            localStorage.setItem('bot_set_store_carousel3', '7')
            setCookie('bot_set_store_carousel3', '7')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            localStorage.setItem('bot_set_carousel3', '8')
            setCookie('bot_set_carousel3', '8')
            localStorage.setItem('bot_set_store_carousel3', '8')
            setCookie('bot_set_store_carousel3', '8')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            localStorage.setItem('bot_set_carousel3', '9')
            setCookie('bot_set_carousel3', '9')
            localStorage.setItem('bot_set_store_carousel3', '9')
            setCookie('bot_set_store_carousel3', '9')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            localStorage.setItem('bot_set_carousel3', '10')
            setCookie('bot_set_carousel3', '10')
            localStorage.setItem('bot_set_store_carousel3', '10')
            setCookie('bot_set_store_carousel3', '10')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});


let jump_count_symbol_vol50 = 0

function jump_count_set_symbol_vol50() {
    localStorage.setItem('bot_jump_carousel3', jump_count_symbol_vol50)
    setCookie('bot_jump_carousel3', jump_count_symbol_vol50)
}

function jump_count_set2_symbol_vol50() {
    let stored_jump_count = localStorage.getItem('bot_jump_carousel3') ? localStorage.getItem('bot_jump_carousel3') : getCookie('bot_jump_carousel3');
    jump_count_symbol_vol50 = stored_jump_count !== null ? parseInt(stored_jump_count, 10) : 0;

    if (isNaN(jump_count_symbol_vol50)) {
        jump_count_symbol_vol50 = 0;
    }
    if (jump_count_symbol_vol50 > 0) {
        martingale_jump_symbol_vol50.textContent = 'j' + jump_count_symbol_vol50
        martingale_jump2_symbol_vol50.textContent = 'j' + jump_count_symbol_vol50
    } else {
        martingale_jump_symbol_vol50.textContent = ''
        martingale_jump2_symbol_vol50.textContent = ''
    }
}

jump_count_set2_symbol_vol50()

increase_jump_symbol_vol50.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count_symbol_vol50 = jump_count_symbol_vol50 + 1
    jump_count_set_symbol_vol50()
    jump_count_set2_symbol_vol50()
})

reduce_jump_symbol_vol50.addEventListener('click', (event) => {
    event.preventDefault()
    if (jump_count_symbol_vol50 > 0) {
        jump_count_symbol_vol50 = jump_count_symbol_vol50 - 1
        jump_count_set_symbol_vol50()
        jump_count_set2_symbol_vol50()
    }
})

bot_settings2_symbol_vol50.addEventListener('click', function () {
    if (settings_cont_symbol_vol50.style.display == 'none') {
        settings_cont_symbol_vol50.style.display = 'block'
    } else {
        settings_cont_symbol_vol50.style.display = 'none'
    }
});

martingale2_symbol_vol50.addEventListener('click', function () {
    if (martingale2_symbol_vol50.classList.contains('active_mat')) {
        martingale2_symbol_vol50.classList.remove('active_mat');
        martingale_symbol_vol50.classList.remove('active_mat');
        setCookie('martingale_carousel3', 'false')
        localStorage.setItem('martingale_carousel3', 'false')
        flash_info_cont_symbol_vol50.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol50.style.color = '#fff'
    } else {
        martingale2_symbol_vol50.classList.add('active_mat');
        martingale_symbol_vol50.classList.add('active_mat');
        setCookie('martingale_carousel3', 'true')
        localStorage.setItem('martingale_carousel3', 'true')
        flash_info_cont_symbol_vol50.textContent = 'martigale is active'
        tick_check_amount_symbol_vol50.style.color = '#fff'
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




