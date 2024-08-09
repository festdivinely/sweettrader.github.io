import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';

const app_id_demo = 63261;
const token_demo = "CgjU4TbJyKTrVHD";
const app_id_real = 63262;
const token_real = "6wB5qaAzZ2NVMTS";

let api = null
let connection = null
let authorize_response_symbol_General = null
let apiAndAuthData = null
let api_id = null;
let api_token = null;
let message1 = localStorage.getItem('message1') ? localStorage.getItem('message1') : getCookie('message1')

let tick_stream_symbol_vol10 = document.getElementById('vol_10')
let last_digit_input_symbol_vol10 = document.getElementById('last_digit_input')
let trade_type_secound_symbol_vol10 = document.getElementById("trade_type_secound")
let attempting_buy2_symbol_vol10 = document.getElementById("attempting_buy2")
let buy_succeded2_symbol_vol10 = document.getElementById("buy_succeded2")
let contract_close2_symbol_vol10 = document.getElementById("contract_close2")
let stream10_symbol_vol10 = document.getElementById('stream10')

let last_digit_prediction_local_st_symbol_vol10 = null
let barrier_local_st_symbol_vol10 = null
let symbol_vol_text_local_st_symbol_vol10 = null
let contract_text_local_st_symbol_vol10 = null
let duration_amount_local_st_symbol_vol10 = null
let stake_amount_local_st_symbol_vol10 = null
let symbol_vol_local_st_symbol_vol10 = null
let duration_unit_local_st_symbol_vol10 = null
let last_digit_prediction_or_barrier_local_s_symbol_vol10 = null
let currency_local_st_symbol_vol10 = null
let stake_or_payout_local_st_symbol_vol10 = null
let proposal_id_local_st_symbol_vol10 = null

let last_digit_prediction_cookie_symbol_vol10 = null
let barrier_cookie_symbol_vol10 = null
let symbol_vol_text_cookie_symbol_vol10 = null
let contract_text_cookie_symbol_vol10 = null
let duration_amount_cookie_symbol_vol10 = null
let stake_amount_cookie_symbol_vol10 = null
let symbol_vol_cookie_symbol_vol10 = null
let duration_unit_cookie_symbol_vol10 = null
let last_digit_prediction_or_barrier_cookie_symbol_vol10 = null
let currency_cookie_symbol_vol10 = null
let stake_or_payout_cookie_symbol_vol10 = null
let proposal_id_cookie_symbol_vol10 = null

let stake_amount_default_symbol_vol10 = localStorage.getItem('stake_amount_default') || document.getElementById('stake_amount_input').value
let duration_unit_symbol_vol10 = null
let symbol_vol_symbol_vol10 = null
let duration_amount_symbol_vol10 = null
let stake_amount_symbol_vol10 = null
let last_digit_prediction_or_barrier_symbol_vol10 = null
let currency_symbol_vol10 = null
let contract_symbol_vol10 = null
let stake_or_payout_symbol_vol10 = null
let proposal_id_symbol_vol10 = null

let td2_account_id_symbol_vol10 = document.getElementById('td2_account_id')
let td2_no_of_runs_symbol_vol10 = document.getElementById('td2_no_of_runs')
let td2_total_stake_symbol_vol10 = document.getElementById('td2_total_stake')
let td2_total_payout_symbol_vol10 = document.getElementById('td2_total_payout')
let td2_total_wins_symbol_vol10 = document.getElementById('td2_total_wins')
let td2_total_loss_symbol_vol10 = document.getElementById('td2_total_loss')
let td2_total_profit_loss_symbol_vol10 = document.getElementById('td2_total_profit_loss')

let bot_total_runs_symbol_vol10 = 0
let bot_total_stake_symbol_vol10 = 0
let bot_total_payout_symbol_vol10 = 0
let bot_total_wins_symbol_vol10 = 0
let bot_total_loss_symbol_vol10 = 0
let bot_total_profit_loss_symbol_vol10 = 0

let randomNumber_symbol_vol10 = null;
let strNumber_symbol_vol10 = null;
let authorize_response_symbol_vol10 = null
let subscriptionId_symbol_vol10 = null
let randomNumber2_symbol_vol10 = null
let buy_contract_id_symbol_vol10 = null
let def_price_up_symbol_vol10 = null
let def_payout_up_symbol_vol10 = null
let def_profit_up_symbol_vol10 = null
let website_status_info_symbol_vol10 = 'initial'
let symbol10_symbol_vol10 = null
let symbol10_cookie_symbol_vol10 = null
let subscription_to_open_contract_symbol_vol10 = true

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

document.addEventListener('DOMContentLoaded', function () {
    setCookie('symbol10', 'R_10')
    localStorage.setItem('symbol10', 'R_10')

    symbol10_symbol_vol10 = localStorage.getItem('symbol10')
    symbol10_cookie_symbol_vol10 = getCookie('symbol10')

});

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

let bot_id_symbol_vol10 = 0
let bot_buy_start_time_symbol_vol10 = null
let bot_buy_transaction_id_symbol_vol10 = null
let bot_trade_type_symbol_vol10 = null
let bot_buy_price_symbol_vol10 = null
let bot_entry_spot_symbol_vol10 = null
let bot_exit_spot_symbol_vol10 = null
let bot_profit_loss_symbol_vol10 = null
let bot_status_symbol_vol10 = null
let firstContractReceived_symbol_vol10 = false;
let bot_is_running_or_stopped_symbol_vol10 = false
let end_slide_symbol_vol10 = true
let bot_contract_id_symbol_vol10 = null
let bot_unique_code_symbol_vol10 = null


async function add_after_trade_symbol_vol10(bot_id, botuniqueCode, allContracts, entry_spot, exit_spot, profit_loss, status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss) {
    const tbody1 = document.getElementById('tbody1');

    if (botuniqueCode == allContracts) {
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

        }
        if (exit_spot_html) {
            exit_spot_html.textContent = exit_spot
        } else {

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

        }
        if (status_html) {
            status_html.textContent = status
            if (status == 'won') {
                status_html.style.color = 'green'
            } else {
                status_html.style.color = 'red'
            }
        } else {

        }

        td2_no_of_runs_symbol_vol10.textContent = bot_total_runs
        td2_total_stake_symbol_vol10.textContent = bot_total_stake
        td2_total_payout_symbol_vol10.textContent = Number(bot_total_payout.toFixed(2));
        td2_total_wins_symbol_vol10.textContent = bot_total_wins
        td2_total_wins_symbol_vol10.style.color = 'green'
        td2_total_loss_symbol_vol10.textContent = bot_total_loss
        td2_total_loss_symbol_vol10.style.color = 'red'
        td2_total_profit_loss_symbol_vol10.textContent = Number(bot_total_profit_loss_symbol_vol10.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss.toFixed(2))) < 0) {
            td2_total_profit_loss_symbol_vol10.style.color = 'red'
        } else {
            td2_total_profit_loss_symbol_vol10.style.color = 'green'
        }
    }
}

const progressBar1_symbol_vol10 = document.querySelector('.progress1');
const progressBar2_symbol_vol10 = document.querySelector('.progress2');
function fillProgressBar1_symbol_vol10() {
    progressBar1_symbol_vol10.classList.add('prog1')
}
function fillProgressBar2_symbol_vol10() {
    progressBar2_symbol_vol10.classList.add('prog2')
}

function set_start_trade1_symbol_vol10(bot_is_running_or_stopped) {
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

    if (circle2.classList.contains('add_color')) {
        circle2.classList.remove('add_color')
    }

    if (circle3.classList.contains('add_color')) {
        circle3.classList.remove('add_color')
    }

    if (progressBar1_symbol_vol10.classList.contains("prog1")) {
        progressBar1_symbol_vol10.classList.remove('prog1')
    }

    if (progressBar2_symbol_vol10.classList.contains("prog2")) {
        progressBar2_symbol_vol10.classList.remove('prog2')
    }

    if (bot_is_running_or_stopped == true) {
        bot_state.textContent = 'Bot is running'
        circle1.classList.add('buy_signal')
        setTimeout(fillProgressBar1_symbol_vol10, 1000);
    } else {
        bot_state.textContent = 'Bot has stopped'
        circle1.classList.remove('buy_signal')
    }
}

function start_trade_ref_symbol_vol10(buy_price_ref) {
    if (attempting_buy2_symbol_vol10.classList.contains("attempting_buy2_show")) {
        attempting_buy2_symbol_vol10.classList.remove("attempting_buy2_show")
    }
    if (buy_succeded2_symbol_vol10.classList.contains("buy_succeded2_show")) {
        buy_succeded2_symbol_vol10.classList.remove("buy_succeded2_show")
    }
    if (contract_close2_symbol_vol10.classList.contains("contract_close2_show")) {
        contract_close2_symbol_vol10.classList.remove("contract_close2_show")
    }
    attempting_buy2_symbol_vol10.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2_symbol_vol10.classList.add('attempting_buy2_show')
}

function set_middle_trade1_symbol_vol10(bot_is_running_or_stopped) {
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
        circle2.classList.add('add_color')
        setTimeout(timmimg_shadow, 1500);
    } else {
        bot_state.textContent = 'Bot has stopped'
        circle2.classList.remove('circle_shadow')
        circle2.classList.remove('add_color')
    }
}

function middle_trade_ref_symbol_vol10(buy_ref) {
    buy_succeded2_symbol_vol10.textContent = `ID: ${buy_ref}`
    buy_succeded2_symbol_vol10.classList.add('buy_succeded2_show')
}

function set_end_trade1_symbol_vol10(bot_is_running_or_stopped) {
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
        setTimeout(fillProgressBar2_symbol_vol10, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state.textContent = 'Bot has stopped'
        circle3.classList.remove('add_color')
    }
}

function end_trade_ref_symbol_vol10(sell_ref) {
    contract_close2_symbol_vol10.textContent = `ID: ${sell_ref}`
    contract_close2_symbol_vol10.classList.add('contract_close2_show')
}

let proposal_open_contract2_symbol_vol10 = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})

const proposalOpenContractResponse2_symbol_vol10 = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {

        connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol10, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {

        open_proposal_actions2_symbol_vol10(data)
    }
};

const getProposalOpenContract12_symbol_vol10 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol10);
    proposal_open_contract2_symbol_vol10()
};

const getProposalOpenContract22_symbol_vol10 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol10);
};

const unsubscribeProposalOpenContract2_symbol_vol10 = () => {
    connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol10, false);
};

function run_open_contract_proposal2_symbol_vol10() {
    if (subscription_to_open_contract_symbol_vol10 == true) {
        getProposalOpenContract12_symbol_vol10()
    } else {
        getProposalOpenContract22_symbol_vol10()
    }
    subscription_to_open_contract_symbol_vol10 = false
}


function generateUniqueCode_symbol_vol10(buy) {
    return buy.buy.contract_id;
}

let martingale_store_symbol_vol10 = [0.35, 3.5, 38.9, 432.3]
let martingale_count_symbol_vol10 = 0
let initial_stake_symbol_vol10 = true

let contract_id2_symbol_vol10 = null
let wonEncountered_symbol_vol10 = false;

async function buy_bot_symbol_vol10(martingale, current_number) {
    const slider = document.getElementById('slide_trade_result').style.display = 'flex';
    last_digit_prediction_or_barrier_symbol_vol10 = parseInt(current_number);
    let contract_text_local_st = localStorage.getItem('contract_text_local_st')
    let contract_text_cookie = getCookie('contract_text_cookie')
    if (martingale == 'true' && contract_status2_symbol_vol10 == 'lost') {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol10 += 1
            stake_amount_symbol_vol10 = martingale_store_symbol_vol10[martingale_count_symbol_vol10]
        } else {
            stake_amount_symbol_vol10 = stake_amount_symbol_vol10 * 10.1
        }
    } else if (initial_stake_symbol_vol10 = true || (martingale == 'true' && contract_status2_symbol_vol10 == 'won')) {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol10 = 0
            stake_amount_symbol_vol10 = martingale_store_symbol_vol10[martingale_count_symbol_vol10]
        } else {
            stake_amount_symbol_vol10 = stake_amount_default_symbol_vol10
        }
    } else {
        stake_amount_symbol_vol10 = stake_amount_default_symbol_vol10
    }

    wonEncountered_symbol_vol10 = false
    before_trade_symbol_vol10();
    allProposalOpenContract2_symbol_vol10.length = 0;
    unsubscribeProposalOpenContract2_symbol_vol10()

    try {
        await order_propose_symbol_vol10(api, stake_amount_symbol_vol10, last_digit_prediction_or_barrier_symbol_vol10, stake_or_payout_symbol_vol10, contract_symbol_vol10, currency_symbol_vol10, duration_amount_symbol_vol10, duration_unit_symbol_vol10, symbol10_symbol_vol10);

        let buy = await api.buy({
            "buy": String(proposal_id_symbol_vol10),
            "price": parseFloat(stake_amount_symbol_vol10)
        });

        contract_id2_symbol_vol10 = generateUniqueCode_symbol_vol10(buy)

        run_open_contract_proposal2_symbol_vol10()
        initial_stake_symbol_vol10 = false

    } catch (error) {
        console.error('Error during trade:', error);
        setTimeout(() => {
            initializeApi(message1)
        }, 5000);
    }
}

async function append_result_symbol_vol10(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status) {

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

            if (tbody.firstChild) {
                tbody.insertBefore(row, tbody.firstChild);
            } else {
                tbody.appendChild(row);
            }
        });
    }
    appendRows(backendData)
}

let log_timestamp_current_symbol_vol10 = null
let log_buy_timestamp_bot_symbol_vol10 = null
let log_sell_timestamp_bot_symbol_vol10 = null
let log_message10_symbol_vol10 = null
let log_message9_symbol_vol10 = null
let log_message8_symbol_vol10 = null
let log_message7_symbol_vol10 = null
let log_message6_symbol_vol10 = null
let log_message5_symbol_vol10 = null
let log_message4_symbol_vol10 = null
let log_message3_symbol_vol10 = null
let log_message2_symbol_vol10 = null
let log_message1_symbol_vol10 = null
let log_message_curr_symbol_vol10 = null
let log_message_curr_tick_symbol_vol10 = null
let log_message_last_digit_symbol_vol10 = null
let log_message_entry_tick_symbol_vol10 = null
let appended_symbol_vol10 = true
let log_id_symbol_vol10 = 0

function format_log_current_time_symbol_vol10() {
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

async function bot_log_symbol_vol10(last_ten_tick, last_nine_tick, last_eight_tick, last_seven_tick, last_six_tick, last_five_tick, last_four_tick, last_three_tick, last_two_tick, last_one_tick, current_tick, current_tick_full) {
    const backendData = [
        {
            log_message10_symbol_vol10: last_ten_tick,
            log_message9_symbol_vol10: last_nine_tick,
            log_message8_symbol_vol10: last_eight_tick,
            log_message7_symbol_vol10: last_seven_tick,
            log_message6_symbol_vol10: last_six_tick,
            log_message5_symbol_vol10: last_five_tick,
            log_message4_symbol_vol10: last_four_tick,
            log_message3_symbol_vol10: last_three_tick,
            log_message2_symbol_vol10: last_two_tick,
            log_message1_symbol_vol10: last_one_tick,
            log_message_curr_symbol_vol10: current_tick,
            log_message_curr_tick_symbol_vol10: current_tick_full,
        },
    ];
    const log_tbody = document.getElementById('log_tbody1');

    function appendRows(data) {
        data.forEach(item => {
            // Create <tr> element
            const row = document.createElement('tr');
            row.id = `log_bot${log_id_symbol_vol10}`;

            const td1 = document.createElement('td');
            td1.textContent = log_timestamp_current_symbol_vol10;
            td1.id = `log_td1${log_id_symbol_vol10}`;
            td1.classList.add('lod_td1')
            row.appendChild(td1);

            const td2 = document.createElement('td');
            if (log_message10_symbol_vol10 == null) {
                log_message10_symbol_vol10 = ''
            }

            if (log_message9_symbol_vol10 == null) {
                log_message9_symbol_vol10 = ''
            }

            if (log_message8_symbol_vol10 == null) {
                log_message8_symbol_vol10 = ''
            }

            if (log_message7_symbol_vol10 == null) {
                log_message7_symbol_vol10 = ''
            }

            if (log_message6_symbol_vol10 == null) {
                log_message6_symbol_vol10 = ''
            }

            if (log_message5_symbol_vol10 == null) {
                log_message5_symbol_vol10 = ''
            }

            if (log_message4_symbol_vol10 == null) {
                log_message4_symbol_vol10 = ''
            }

            if (log_message3_symbol_vol10 == null) {
                log_message3_symbol_vol10 = ''
            }

            if (log_message2_symbol_vol10 == null) {
                log_message2_symbol_vol10 = ''
            }

            if (log_message1_symbol_vol10 == null) {
                log_message1_symbol_vol10 = ''
            }

            if (log_message_curr_symbol_vol10 == null) {
                log_message_curr_symbol_vol10 = ''
            }
            td2.textContent = `last ten ticks:  ${item.log_message10_symbol_vol10} ${item.log_message9_symbol_vol10} ${item.log_message8_symbol_vol10} ${item.log_message7_symbol_vol10} ${item.log_message6_symbol_vol10} ${item.log_message5_symbol_vol10} ${item.log_message4_symbol_vol10} ${item.log_message3_symbol_vol10} ${item.log_message2_symbol_vol10} ${item.log_message1_symbol_vol10}          current tick ${item.log_message_curr_symbol_vol10}    ${item.log_message_curr_tick_symbol_vol10}`;

            td2.style.whiteSpace = 'pre'
            td2.id = `log_td2${log_id_symbol_vol10}`;
            td2.classList.add('lod_td2')
            row.appendChild(td2);

            const td3 = document.createElement('td');
            td3.textContent = 'this is the text'
            td3.style.whiteSpace = 'pre'
            td3.id = `log_td3${log_id_symbol_vol10}`;
            td3.classList.add('lod_td3')
            row.appendChild(td3);

            if (log_tbody.firstChild) {
                log_tbody.insertBefore(row, log_tbody.firstChild);
                appended_symbol_vol10 = true
            } else {
                log_tbody.appendChild(row);
                appended_symbol_vol10 = true
            }
        });
    }
    appendRows(backendData)
}

async function bot_log_end_symbol_vol10(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td = document.getElementById(`log_td3${log_id_symbol_vol10}`)

    function formate_log_date(datein) {
        const unixTimestamp = datein;
        const date = new Date(unixTimestamp * 1000);
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1; // Months are zero-indexed, so we add 1
        const day = date.getUTCDate();
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();

        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ` +
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} GMT`;

        return formattedDate
    }

    log_buy_timestamp_bot_symbol_vol10 = formate_log_date(bot_buy_time_stamp)
    log_sell_timestamp_bot_symbol_vol10 = formate_log_date(bot_sell_time_stamp)

    if (target_td) {
        target_td.textContent = `buy_time:  ${log_buy_timestamp_bot_symbol_vol10}        sell_time:  ${log_sell_timestamp_bot_symbol_vol10}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

        log_id_symbol_vol10 += 1
    } else {

    }
}

let first_instance_symbol_vol10 = true

async function startBot_symbol_vol10(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber) {
    if (first_instance_symbol_vol10 == true) {
        bot_id_symbol_vol10 = 0
    }
    bot_is_running_or_stopped_symbol_vol10 = true;
    log_timestamp_current_symbol_vol10 = format_log_current_time_symbol_vol10()
    set_start_trade1_symbol_vol10(bot_is_running_or_stopped_symbol_vol10);
    bot_id_symbol_vol10 += 1;
    firstContractReceived_symbol_vol10 = false;
    end_slide_symbol_vol10 = true;
    bot_entry_spot_symbol_vol10 = '';
    bot_exit_spot_symbol_vol10 = '';
    bot_profit_loss_symbol_vol10 = '';
    bot_status_symbol_vol10 = 'pending';
    bot_log_symbol_vol10(lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
    await buy_bot_symbol_vol10(martingale, currentRandom);
    first_instance_symbol_vol10 = false
}

let bot_state_symbol_vol10 = null
let bot_state_cookie_symbol_vol10 = null
let all_bot_start_stop1_symbol_vol10 = null
let all_bot_start_stop1_cookie_symbol_vol10 = null
let buttonContainer_symbol_vol10 = document.querySelector('.click_change');

function togglePlayPause_symbol_vol10() {
    var play_button = document.getElementById('play_button');
    var pause_button = document.getElementById('pause_button');

    if (play_button) {
        localStorage.setItem('bot_state', 'stop_bot');
        setCookie('bot_state', 'stop_bot');
        localStorage.setItem('bots_state', 'stop_bots');
        setCookie('bots_state', 'stop_bots');

        let bot_state = localStorage.getItem('bot_state');
        let bot_state_cookie = getCookie('bot_state');
        let bots_state = localStorage.getItem('bots_state');
        let bots_state_cookie = getCookie('bots_state');

        play_button.parentNode.removeChild(play_button);

        var pause_button = document.createElement('div');
        pause_button.id = 'pause_button';
        pause_button.className = 'pause_button';
        pause_button.innerHTML = '&#10074;&#10074;';
        buttonContainer_symbol_vol10.appendChild(pause_button);

        if ((bot_state == 'stop_bot' || bot_state_cookie == 'stop_bot') && (bots_state == 'stop_bots' || bots_state_cookie == 'stop_bots')) {
            bot_is_running_or_stopped_symbol_vol10 = false;
            document.getElementById('bot_state').textContent = 'Bot has stopped';
        }

    } else if (pause_button) {

        localStorage.setItem('bot_state', 'start_bot');
        setCookie('bot_state', 'start_bot');
        localStorage.setItem('bots_state', 'start_bots');
        setCookie('bots_state', 'start_bots');

        let bot_state = localStorage.getItem('bot_state');
        let bot_state_cookie = getCookie('bot_state');
        let bots_state = localStorage.getItem('bots_state');
        let bots_state_cookie = getCookie('bots_state');

        pause_button.parentNode.removeChild(pause_button);

        var play_button = document.createElement('div');
        play_button.id = 'play_button';
        play_button.className = 'play_button';
        play_button.innerHTML = '&#9654;';
        buttonContainer_symbol_vol10.appendChild(play_button);

        if ((bot_state == 'start_bot' || bot_state_cookie == 'start_bot') && (bots_state == 'start_bots' || bots_state_cookie == 'start_bots')) {
            bot_is_running_or_stopped_symbol_vol10 = true;
            document.getElementById('bot_state').textContent = 'Bot is running';
        }
    }
}

buttonContainer_symbol_vol10.addEventListener('click', togglePlayPause_symbol_vol10);
function getRandom_symbol_vol10(strNumber) {
    return randomNumber_symbol_vol10 = strNumber.charAt(strNumber.length - 1);
}

let set_vol10_trade_symbol_vol10 = null
let martingale_active_symbol_vol10 = null
let bot_set_symbol_vol10 = null
let set_bot_jump_symbol_vol10 = null
let initial_set_jump_symbol_vol10 = true

let set_vol10_trade_cookie_symbol_vol10 = null
let martingale_active_cookie_symbol_vol10 = null
let bot_set_cookie_symbol_vol10 = null
let set_bot_jump_cookie_symbol_vol10 = null
let initial_set_jump_cookie_symbol_vol10 = true

let checkCount_symbol_vol10 = 0

let currentRandom_symbol_vol10 = null
let lastNumber1_symbol_vol10 = currentRandom_symbol_vol10;
let lastNumber2_symbol_vol10 = lastNumber1_symbol_vol10;
let lastNumber3_symbol_vol10 = lastNumber2_symbol_vol10;
let lastNumber4_symbol_vol10 = lastNumber3_symbol_vol10;
let lastNumber5_symbol_vol10 = lastNumber4_symbol_vol10;
let lastNumber6_symbol_vol10 = lastNumber5_symbol_vol10;
let lastNumber7_symbol_vol10 = lastNumber6_symbol_vol10;
let lastNumber8_symbol_vol10 = lastNumber7_symbol_vol10;
let lastNumber9_symbol_vol10 = lastNumber8_symbol_vol10;
let lastNumber10_symbol_vol10 = lastNumber9_symbol_vol10;

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


const tickStream_symbol_vol10 = () => api.subscribe({ "ticks": 'R_10' });

const tickResponse_symbol_vol10 = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {

        connection.removeEventListener('message', tickResponse_symbol_vol10, false);
        await api.disconnect();
    }

    function getRandom1(strNumber1) {
        return randomNumber_symbol_vol10 = strNumber1.charAt(strNumber1.length - 1);
    }

    lastNumber10_symbol_vol10 = lastNumber9_symbol_vol10
    lastNumber9_symbol_vol10 = lastNumber8_symbol_vol10
    lastNumber8_symbol_vol10 = lastNumber7_symbol_vol10
    lastNumber7_symbol_vol10 = lastNumber6_symbol_vol10
    lastNumber6_symbol_vol10 = lastNumber5_symbol_vol10
    lastNumber5_symbol_vol10 = lastNumber4_symbol_vol10
    lastNumber4_symbol_vol10 = lastNumber3_symbol_vol10
    lastNumber3_symbol_vol10 = lastNumber2_symbol_vol10
    lastNumber2_symbol_vol10 = lastNumber1_symbol_vol10
    lastNumber1_symbol_vol10 = currentRandom_symbol_vol10

    if (data.msg_type === 'tick') {

        subscriptionId_symbol_vol10 = data.subscription.id;
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

        if (data.echo_req.ticks === "R_10") {
            strNumber_symbol_vol10 = formatToThreeDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_vol10 = getRandom1(strNumber_symbol_vol10);
        }

        stream10_symbol_vol10.textContent = strNumber_symbol_vol10

        updating_balance = getCookie('updating_balance') || localStorage.getItem('updating_balance');
        initial_balance = getCookie('initial_balance') || localStorage.getItem('initial_balance');
        take_profit = getCookie('take_profit') || localStorage.getItem('take_profit');
        stop_loss = getCookie('stop_loss') || localStorage.getItem('stop_loss');

        if (take_profit && take_profit > 0 && updating_balance - initial_balance >= take_profit && contract_status2_symbol_vol10 !== 'lost') {
            all_bot_start_stop1_symbol_vol10 = 'stop_bots';
            all_bot_start_stop1_cookie_symbol_vol10 = 'stop_bots';
            bot_state_symbol_vol10 = 'stop_bot';
            bot_state_cookie_symbol_vol10 = 'stop_bot';
        } else if (stop_loss && stop_loss > 0 && initial_balance - updating_balance <= stop_loss && contract_status2_symbol_vol10 !== 'lost') {
            all_bot_start_stop1_symbol_vol10 = 'stop_bots';
            all_bot_start_stop1_cookie_symbol_vol10 = 'stop_bots';
            bot_state_symbol_vol10 = 'stop_bot';
            bot_state_cookie_symbol_vol10 = 'stop_bot';
        } else {
            all_bot_start_stop1_symbol_vol10 = localStorage.getItem('bots_state')
            all_bot_start_stop1_cookie_symbol_vol10 = getCookie('bots_state')

            bot_state_symbol_vol10 = localStorage.getItem('bot_state')
            bot_state_cookie_symbol_vol10 = getCookie('bot_state')
        }

        set_vol10_trade_symbol_vol10 = localStorage.getItem('set_vol10_trade')
        martingale_active_symbol_vol10 = localStorage.getItem('martingale');
        bot_set_symbol_vol10 = localStorage.getItem('bot_set');
        set_bot_jump_symbol_vol10 = localStorage.getItem('bot_jump')

        set_vol10_trade_cookie_symbol_vol10 = localStorage.getItem('set_vol10_trade')
        martingale_active_cookie_symbol_vol10 = getCookie('martingale');
        bot_set_cookie_symbol_vol10 = getCookie('bot_set');
        set_bot_jump_cookie_symbol_vol10 = getCookie('bot_jump')

        if (((set_bot_jump_symbol_vol10 && set_bot_jump_symbol_vol10 > 0) && contract_status2_symbol_vol10 == 'lost') || ((set_bot_jump_cookie_symbol_vol10 && set_bot_jump_cookie_symbol_vol10 > 0) && contract_status2_symbol_vol10 == 'lost')) {
            bot_set_symbol_vol10 = (parseInt(bot_set_symbol_vol10) + parseInt(set_bot_jump_symbol_vol10)) !== null ? (parseInt(bot_set_symbol_vol10) + parseInt(set_bot_jump_symbol_vol10)) : (parseInt(bot_set_cookie_symbol_vol10) + parseInt(set_bot_jump_cookie_symbol_vol10))
            contract_status2_symbol_vol10 == 'reset'
        } else if ((initial_set_jump_symbol_vol10 == true || (contract_status2_symbol_vol10 == 'won' && (set_bot_jump_symbol_vol10 && set_bot_jump_symbol_vol10 > 0))) || (initial_set_jump_cookie_symbol_vol10 == true || (contract_status2_symbol_vol10 == 'won' && (set_bot_jump_cookie_symbol_vol10 && set_bot_jump_cookie_symbol_vol10 > 0)))) {
            bot_set_symbol_vol10 = localStorage.getItem('bot_set') ? localStorage.getItem('bot_set') : getCookie('bot_set');
            initial_set_jump_symbol_vol10 = false
            initial_set_jump_cookie_symbol_vol10 = false
        } else {
            bot_set_symbol_vol10 = localStorage.getItem('bot_set') ? localStorage.getItem('bot_set') : getCookie("bot_set");
        }
        let bot_count = bot_id_symbol_vol10

        const tag5 = document.getElementById(`td5${bot_count}`);
        const tag6 = document.getElementById(`td6${bot_count}`);
        const tag8 = document.getElementById(`td8${bot_count}`);
        const tag9 = document.getElementById(`td9${bot_count}`);

        processNumber(currentRandom_symbol_vol10);

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 1 || bot_set_cookie_symbol_vol10 == 1)) {
                    if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else {

                    }
                } else {

                }
            } else {

            }
        }

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 2 || bot_set_cookie_symbol_vol10 == 2)) {
                    if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else {

                    }
                } else {

                }
            } else {

            }
        }


        if (currentRandom_symbol_vol10) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                for (let i = 0; i < resultArray.length; i++) {
                    if (resultArray[i] == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 3 || bot_set_cookie_symbol_vol10 == 3)) {
                        if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                            startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                            resultArray.splice(i, 1);
                        } else {

                        }
                    }
                }
            }
        }

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 4 || bot_set_cookie_symbol_vol10 == 4)) {
                    if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else {

                    }
                } {

                }
            } else {

            }
        }

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 5 || bot_set_cookie_symbol_vol10 == 5)) {
                    if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else {

                    }
                } else {

                }
            } else {

            }
        }

        if (tag5 && tag6 && tag8 && tag9) {
            if (tag5.textContent.trim() === '' && tag6.textContent.trim() === '' && tag8.textContent.trim() === '' && tag9.textContent.trim() === '') {
                console.log('Tags are empty:', tag5.textContent, tag6.textContent, tag8.textContent, tag9.textContent);
                checkCount_symbol_vol10 += 1;
                console.log('checkCount', checkCount_symbol_vol10);

                if (checkCount_symbol_vol10 == 500) {
                    console.log('hanged');
                    initializeApi(message1);
                }
            }
        }

        // if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
        //     if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
        //         if (lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 3 || bot_set_cookie_symbol_vol10 == 3)) {
        //             if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
        //                 startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
        //             } else {

        //             }
        //         }else if (tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') {
        //             checkCount_symbol_vol10 += 1
        //            if ((tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') && checkCount_symbol_vol10 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }

        // if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
        //     if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
        //         if (lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 4 || bot_set_cookie_symbol_vol10 == 4)) {
        //             if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
        //                 startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
        //             } else {

        //             }
        //         }else if (tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') {
        //             checkCount_symbol_vol10 += 1
        //            if ((tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') && checkCount_symbol_vol10 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }

        // if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
        //     if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
        //         if (lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 5 || bot_set_cookie_symbol_vol10 == 5)) {
        //             if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
        //                 startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
        //             } else {

        //             }
        //         }else if (tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') {
        //             checkCount_symbol_vol10 += 1
        //            if ((tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') && checkCount_symbol_vol10 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }

        // if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
        //     if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
        //         if (lastNumber5_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 6 || bot_set_cookie_symbol_vol10 == 6)) {
        //             if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
        //                 startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
        //             } else {

        //             }
        //         }else if (tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') {
        //             checkCount_symbol_vol10 += 1
        //            if ((tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') && checkCount_symbol_vol10 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }


        // if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
        //     if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
        //         if (lastNumber6_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber5_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 7 || bot_set_cookie_symbol_vol10 == 7)) {
        //             if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
        //                 startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
        //             } else {

        //             }
        //         }else if (tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') {
        //             checkCount_symbol_vol10 += 1
        //            if ((tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') && checkCount_symbol_vol10 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }

        // if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
        //     if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
        //         if (lastNumber7_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber6_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber5_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 8 || bot_set_cookie_symbol_vol10 == 8)) {
        //             if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
        //                 startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
        //             } else {

        //             }
        //         }else if (tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') {
        //             checkCount_symbol_vol10 += 1
        //            if ((tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') && checkCount_symbol_vol10 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }

        // if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
        //     if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
        //         if (lastNumber8_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber7_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber6_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber5_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 9 || bot_set_cookie_symbol_vol10 == 9)) {
        //             if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
        //                 startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
        //             } else {

        //             }
        //         }else if (tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') {
        //             checkCount_symbol_vol10 += 1
        //            if ((tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') && checkCount_symbol_vol10 == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {

        //     }
        // }

        // if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
        //     if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
        //         if (lastNumber9_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber8_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber7_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber6_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber5_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 10 || bot_set_cookie_symbol_vol10 == 10)) {
        //             if (((bot_state_symbol_vol10 == 'start_bot' || bot_state_cookie_symbol_vol10 == 'start_bot') && (all_bot_start_stop1_symbol_vol10 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10 == 'start_bots')) && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
        //                 startBot_symbol_vol10(martingale_active_cookie_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
        //             } else {

        //             }
        //         }else if (tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') {
        //             checkCount_symbol_vol10 += 1
        //            if ((tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') && checkCount_symbol_vol10 == 500){
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
    await tickStream_symbol_vol10();
    connection.addEventListener('message', tickResponse_symbol_vol10);
};

const unsubscribeTicks_symbol_vol_general = () => {
    connection.removeEventListener('message', tickResponse_symbol_vol10, false);
    tickStream_symbol_vol10().unsubscribe();
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

        connection.onopen = () => {
            console.log('Connected to the WebSocket server');
            subscribeTicks();
        };

        subscribeTicks_symbol_vol_general()
        getWebsitePing()

        return { api, authorize_response_symbol_General };

    } catch (error) {
        console.error("Error occurred during API initialization:", error);
        return null;
    }
}

window.addEventListener('load', function () {
    duration_amount_cookie_symbol_vol10 = getCookie('duration_amount_cookie');
    stake_amount_cookie_symbol_vol10 = getCookie('stake_amount_cookie');
    duration_unit_cookie_symbol_vol10 = getCookie('duration_unit_cookie');
    symbol_vol_cookie_symbol_vol10 = getCookie('symbol_vol_cookie');
    currency_cookie_symbol_vol10 = getCookie('ActiveCurrency')
    contract_text_cookie_symbol_vol10 = getCookie('contract_text_cookie');
    stake_or_payout_cookie_symbol_vol10 = getCookie('stake_or_payout_cookie')
    last_digit_prediction_cookie_symbol_vol10 = getCookie('last_digit_prediction_cookie')
    stake_amount_default_symbol_vol10 = getCookie('stake_amount_default')

    if (last_digit_prediction_cookie_symbol_vol10) {
        last_digit_prediction_or_barrier_symbol_vol10 = last_digit_prediction_cookie_symbol_vol10
    } else {
        let numericValue = last_digit_input_symbol_vol10.value
        last_digit_prediction_or_barrier_symbol_vol10 = numericValue
    }
    if (symbol_vol_cookie_symbol_vol10) {
        symbol10_symbol_vol10 = symbol_vol_cookie_symbol_vol10;
    } else {
        symbol10_symbol_vol10 = "R_10";
    }
    if (duration_unit_cookie_symbol_vol10) {
        duration_unit_symbol_vol10 = duration_unit_cookie_symbol_vol10;
    } else {
        duration_unit_symbol_vol10 = "t";
    }
    if (duration_amount_cookie_symbol_vol10) {
        duration_amount_symbol_vol10 = parseInt(duration_amount_cookie_symbol_vol10, 10);
    } else {
        duration_amount_symbol_vol10 = 1;
    }
    if (stake_amount_cookie_symbol_vol10) {
        stake_amount_symbol_vol10 = parseFloat(stake_amount_cookie_symbol_vol10);
    } else {
        stake_amount_symbol_vol10 = 10;
    }
    if (stake_amount_default_symbol_vol10) {
        stake_amount_default_symbol_vol10 = parseFloat(stake_amount_default_symbol_vol10);
    } else {
        stake_amount_default_symbol_vol10 = 10;
    }
    if (currency_cookie_symbol_vol10) {
        currency_symbol_vol10 = currency_cookie_symbol_vol10;
    } else {
        currency_symbol_vol10 = "USD";
    }
    if (contract_text_cookie_symbol_vol10) {
        contract_symbol_vol10 = contract_text_cookie_symbol_vol10;
    } else {
        contract_symbol_vol10 = "Matches/Differs";
    }
    if (stake_or_payout_cookie_symbol_vol10) {
        stake_or_payout_symbol_vol10 = stake_or_payout_cookie_symbol_vol10;
    } else {
        stake_or_payout_symbol_vol10 = "stake";
    }

    initializeApi(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response_symbol_General) {
            clearInterval(getAwaitingResponses)
        } else {

        }
    }, 2000);
});

async function order_propose_symbol_vol10(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
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

                connection.removeEventListener('message', proposalResponse, false);
                await api.disconnect();
                reject(new Error('Error in proposal'));
            } else if (data.msg_type === 'proposal') {
                proposal_id_symbol_vol10 = data.proposal.id;
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
const unsubscribeProposal_symbol_vol10 = () => {
    connection.removeEventListener('message', proposalResponse, false);
};


function convertTimestampTo12HourTime_symbol_vol10(timestamp) {
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

function formatNumberAndBoldLastDecimal_symbol_vol10(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart) {
        let lastDecimalDigit = decimalPart.slice(-1);
        decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
    }
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}

let contract_status_html_symbol_vol10 = document.getElementById('contract_status')
let end_tic_off_trade_symbol_vol10 = document.getElementById('end_tic_off_trade')
let price_after_trade_figure_amount_symbol_vol10 = document.getElementById('price_after_trade_figure_amount')
let profit_figure_amount_symbol_vol10 = document.getElementById('profit_figure_amount')
let buy_price_figure_amount_symbol_vol10 = document.getElementById('buy_price_figure_amount')
let result_currency_html_symbol_vol10 = document.querySelectorAll('.result_currency')
let transaction_refrence_figure_symbol_vol10 = document.getElementById('transaction_refrence_figure')
let trade_start_time_symbol_vol10 = document.getElementById('trade_start_time')
let buy_price_text_symbol_vol10 = document.getElementById('buy_price_text')
let price_after_trade_text_symbol_vol10 = document.getElementById('price_after_trade_text')
let profit_text_symbol_vol10 = document.getElementById('profit_text')
let durr_amount_prop_count_symbol_vol10 = document.getElementById('durr_amount_prop_count')
let durr_amount_prop_symbol_vol10 = document.getElementById('durr_amount_prop')

let countdown_trade_symbol_vol10 = 0
let countdown_trade2_symbol_vol10 = 0

function before_trade_symbol_vol10() {
    countdown_trade_symbol_vol10 = 0
    let allDigits = document.querySelectorAll('.ldgs')
    let buy_price_text = document.getElementById('buy_price_text')
    let price_after_trade_text = document.getElementById('price_after_trade_text')
    let profit_text = document.getElementById('profit_text')
    let slide_trade_result = document.getElementById('slide_trade_result')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount')
    let profit_figure_amount = document.getElementById('profit_figure_amount')
    contract_status_html_symbol_vol10.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count_symbol_vol10.textContent = countdown_trade_symbol_vol10
    durr_amount_prop_symbol_vol10.textContent = duration_amount_symbol_vol10
    buy_price_figure_amount.textContent = def_price_up_symbol_vol10
    price_after_trade_figure_amount.textContent = def_payout_up_symbol_vol10
    profit_figure_amount.textContent = def_profit_up_symbol_vol10

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
            if (digit.textContent != last_digit_prediction_or_barrier_symbol_vol10) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound == 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier_symbol_vol10) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}

function after_trade_symbol_vol10(status, endDigit) {
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

function formate_date_symbol_vol10(datein) {
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

let allProposalOpenContract2_symbol_vol10 = []
let longcodeProp2_symbol_vol10 = null
let contract_ids_buy2_symbol_vol10 = null
let contract_ids_sell2_symbol_vol10 = null
let contract_status2_symbol_vol10 = null
let last_tick2_symbol_vol10 = null
let profit_or_loss2_symbol_vol10 = null
let final_price2_symbol_vol10 = null
let payout_result2_symbol_vol10 = null
let buy_price2_symbol_vol10 = null
let contract_currency2_symbol_vol10 = null
let time_of_trade2_symbol_vol10 = null
let every_tick2_symbol_vol10 = null


function open_proposal_actions2_symbol_vol10(data) {
    if (data.proposal_open_contract.contract_id == contract_id2_symbol_vol10) {
        set_middle_trade1_symbol_vol10(bot_is_running_or_stopped_symbol_vol10)
        bot_buy_start_time_symbol_vol10 = formate_date_symbol_vol10(data.proposal_open_contract.date_start)
        bot_buy_transaction_id_symbol_vol10 = data.proposal_open_contract.transaction_ids.buy
        bot_trade_type_symbol_vol10 = data.proposal_open_contract.contract_type
        bot_buy_price_symbol_vol10 = data.proposal_open_contract.buy_price
        bot_status_symbol_vol10 = data.proposal_open_contract.status == 'open' ? 'Pending' : data.proposal_open_contract.status
        bot_contract_id_symbol_vol10 = data.proposal_open_contract.contract_id

        start_trade_ref_symbol_vol10(bot_buy_price_symbol_vol10)

        if (firstContractReceived_symbol_vol10 == false) {
            append_result_symbol_vol10(bot_id_symbol_vol10, bot_buy_start_time_symbol_vol10, bot_buy_transaction_id_symbol_vol10, bot_trade_type_symbol_vol10, bot_buy_price_symbol_vol10, bot_status_symbol_vol10);
            firstContractReceived_symbol_vol10 = true
        }

        longcodeProp2_symbol_vol10 = data.proposal_open_contract.longcode
        allProposalOpenContract2_symbol_vol10.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information').textContent = longcodeProp2_symbol_vol10

        if (allProposalOpenContract2_symbol_vol10.length > 0 && allProposalOpenContract2_symbol_vol10[allProposalOpenContract2_symbol_vol10.length - 1].length > 0) {
            let lastSubArray2 = allProposalOpenContract2_symbol_vol10[allProposalOpenContract2_symbol_vol10.length - 1];
            let lastElementOfLastSubArray2 = lastSubArray2[lastSubArray2.length - 1].tick_display_value;
            let numberString2 = lastElementOfLastSubArray2.toString();
            let lastCharacter2 = numberString2[numberString2.length - 1];
            handleNewNumber_symbol_vol10(lastCharacter2);
            every_tick2_symbol_vol10 = lastElementOfLastSubArray2
            end_tic_off_trade_symbol_vol10.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol10(every_tick2_symbol_vol10);

            if (countdown_trade2_symbol_vol10 < duration_amount_symbol_vol10) {
                countdown_trade2_symbol_vol10 += 1
                durr_amount_prop_count_symbol_vol10.textContent = countdown_trade_symbol_vol10
            }

            if (data.proposal_open_contract.is_expired == 1 && end_slide_symbol_vol10 == true) {
                set_end_trade1_symbol_vol10(bot_is_running_or_stopped_symbol_vol10)
                end_slide_symbol_vol10 = false
            }

            contract_ids_buy2_symbol_vol10 = data.proposal_open_contract.transaction_ids.buy
            if (contract_ids_buy2_symbol_vol10) {
                middle_trade_ref_symbol_vol10(contract_ids_buy2_symbol_vol10)
            }

            if (data.proposal_open_contract.status !== 'open') {
                let circle2 = document.getElementById('circle2')
                circle2.classList.remove('circl_shadow')
                bot_status_symbol_vol10 = data.proposal_open_contract.status
                bot_entry_spot_symbol_vol10 = data.proposal_open_contract.entry_tick
                bot_exit_spot_symbol_vol10 = data.proposal_open_contract.exit_tick
                bot_profit_loss_symbol_vol10 = data.proposal_open_contract.profit

                contract_status2_symbol_vol10 = data.proposal_open_contract.status
                last_tick2_symbol_vol10 = lastElementOfLastSubArray2
                profit_or_loss2_symbol_vol10 = data.proposal_open_contract.profit
                payout_result2_symbol_vol10 = data.proposal_open_contract.payout
                buy_price2_symbol_vol10 = data.proposal_open_contract.buy_price
                contract_currency2_symbol_vol10 = data.proposal_open_contract.currency
                contract_ids_buy2_symbol_vol10 = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2_symbol_vol10 = data.proposal_open_contract.expiry_time
                contract_ids_sell2_symbol_vol10 = data.proposal_open_contract.transaction_ids.sell

                end_trade_ref_symbol_vol10(contract_ids_sell2_symbol_vol10)
                if (profit_or_loss2_symbol_vol10 < 0) {
                    final_price2_symbol_vol10 = '0.00'
                } else if (profit_or_loss2_symbol_vol10 > 0) {
                    final_price2_symbol_vol10 = payout_result2_symbol_vol10
                } else if (tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') {
                    checkCount_symbol_vol10 += 1
                    if ((tag5.textContent.trim() == '' && tag6.textContent.trim() == '' && tag8.textContent.trim() == '' && tag9.textContent.trim() == '') && checkCount_symbol_vol10 == 500) {
                        console.log('hanged')
                        initializeApi(message1)
                    }
                }

                if (contract_status2_symbol_vol10 == 'won' && !wonEncountered_symbol_vol10) {
                    bot_total_wins_symbol_vol10 = bot_total_wins_symbol_vol10 + 1;
                    bot_total_profit_loss_symbol_vol10 = bot_total_profit_loss_symbol_vol10 + profit_or_loss2_symbol_vol10;
                    bot_total_stake_symbol_vol10 = bot_total_stake_symbol_vol10 + buy_price2_symbol_vol10
                    bot_total_runs_symbol_vol10 = bot_total_runs_symbol_vol10 + 1;
                    bot_total_payout_symbol_vol10 = bot_total_payout_symbol_vol10 + payout_result2_symbol_vol10;
                    add_after_trade_symbol_vol10(bot_id_symbol_vol10, contract_id2_symbol_vol10, bot_contract_id_symbol_vol10, bot_entry_spot_symbol_vol10, bot_exit_spot_symbol_vol10, bot_profit_loss_symbol_vol10, bot_status_symbol_vol10, bot_total_runs_symbol_vol10, bot_total_stake_symbol_vol10, bot_total_payout_symbol_vol10, bot_total_wins_symbol_vol10, bot_total_loss_symbol_vol10, bot_total_profit_loss_symbol_vol10);
                    wonEncountered_symbol_vol10 = true;
                } else if (contract_status2_symbol_vol10 == 'lost') {
                    bot_total_loss_symbol_vol10 = bot_total_loss_symbol_vol10 + 1;
                    bot_total_profit_loss_symbol_vol10 = bot_total_profit_loss_symbol_vol10 + profit_or_loss2_symbol_vol10;
                    bot_total_stake_symbol_vol10 = bot_total_stake_symbol_vol10 + buy_price2_symbol_vol10
                    bot_total_runs_symbol_vol10 = bot_total_runs_symbol_vol10 + 1;
                    bot_total_payout_symbol_vol10 = bot_total_payout_symbol_vol10 - payout_result2_symbol_vol10;
                    add_after_trade_symbol_vol10(bot_id_symbol_vol10, contract_id2_symbol_vol10, bot_contract_id_symbol_vol10, bot_entry_spot_symbol_vol10, bot_exit_spot_symbol_vol10, bot_profit_loss_symbol_vol10, bot_status_symbol_vol10, bot_total_runs_symbol_vol10, bot_total_stake_symbol_vol10, bot_total_payout_symbol_vol10, bot_total_wins_symbol_vol10, bot_total_loss_symbol_vol10, bot_total_profit_loss_symbol_vol10);
                    wonEncountered_symbol_vol10 = true;
                }

                if (contract_status2_symbol_vol10 == 'won' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol10 = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol10 = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol10 = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol10 = every_tick2_symbol_vol10
                    bot_log_end_symbol_vol10(log_buy_timestamp_bot_symbol_vol10, log_sell_timestamp_bot_symbol_vol10, log_message_entry_tick_symbol_vol10, log_message_last_digit_symbol_vol10)
                } else if (contract_status2_symbol_vol10 == 'lost' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol10 = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol10 = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol10 = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol10 = every_tick2_symbol_vol10
                    bot_log_end_symbol_vol10(log_buy_timestamp_bot_symbol_vol10, log_sell_timestamp_bot_symbol_vol10, log_message_entry_tick_symbol_vol10, log_message_last_digit_symbol_vol10)
                }
                contract_status_html_symbol_vol10.textContent = contract_status2_symbol_vol10
                end_tic_off_trade_symbol_vol10.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol10(last_tick2_symbol_vol10);
                profit_figure_amount_symbol_vol10.textContent = profit_or_loss2_symbol_vol10
                price_after_trade_figure_amount_symbol_vol10.textContent = final_price2_symbol_vol10
                buy_price_figure_amount_symbol_vol10.textContent = buy_price2_symbol_vol10
                result_currency_html_symbol_vol10.textContent = contract_currency2_symbol_vol10
                transaction_refrence_figure_symbol_vol10.textContent = contract_ids_buy2_symbol_vol10
                trade_start_time_symbol_vol10.innerHTML = convertTimestampTo12HourTime_symbol_vol10(time_of_trade2_symbol_vol10)
                buy_price_text_symbol_vol10.textContent = 'Buy price'
                price_after_trade_text_symbol_vol10.textContent = 'Final price'
                profit_text_symbol_vol10.textContent = 'Profit'
                after_trade_symbol_vol10(contract_status2_symbol_vol10, lastCharacter2)

            } else {
            }
        } else {

        }
    }
}

let currentPosition1_symbol_vol10 = 0;

function moveSlider_symbol_vol10(number) {
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
        const maxTranslateX = container.offsetWidth - slider.offsetWidth;
        const newPosition = Math.min(Math.max(targetPosition, 0), maxTranslateX);
        if (direction === 'left') {
            slider.style.transform = `translateX(${newPosition}px)`;
        } else {
            slider.style.transform = `translateX(${newPosition}px)`;
        }
        currentPosition1_symbol_vol10 = newPosition;
    }
}
function handleNewNumber_symbol_vol10(randomNumber) {
    const newPosition = randomNumber;
    moveSlider_symbol_vol10(newPosition);
}

let log_close_and_info_cont_symbol_vol10 = document.getElementById('log_close_and_info_cont');
let bot_log_show_cont_symbol_vol10 = document.getElementById('bot_log_show_cont');
let bot_details_symbol_vol10 = document.getElementById('bot_details');
let bot_details2_symbol_vol10 = document.getElementById('bot_details2');

if (bot_log_show_cont_symbol_vol10 && bot_details_symbol_vol10) {
    bot_details_symbol_vol10.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol10.style.display == 'none') {
            bot_log_show_cont_symbol_vol10.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol10.style.display = 'none'
        }

    });
    log_close_and_info_cont_symbol_vol10.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_log_show_cont_symbol_vol10.style.display == 'block') {
            bot_log_show_cont_symbol_vol10.style.display = 'none'
        } else {
            bot_log_show_cont_symbol_vol10.style.display = 'block'
        }
    });
} else {
    console.error('One or more elements are not found');
}

if (bot_log_show_cont_symbol_vol10 && bot_details_symbol_vol10) {
    bot_details2_symbol_vol10.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol10.style.display == 'none') {
            bot_log_show_cont_symbol_vol10.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol10.style.display = 'none'
        }
    });
} else {
    console.error('One or more elements are not found');
}

let martingale_symbol_vol10 = document.getElementById('martingale');
let flash_info_cont_symbol_vol10 = document.getElementById('flash_info_cont');
let tick_check_amount_symbol_vol10 = document.getElementById('tick_check_amount');
let settings_cont_symbol_vol10 = document.getElementById('settings_cont');
let tick_check_symbol_vol10 = document.getElementById('tick_check');
let martingale_jump_symbol_vol10 = document.getElementById('martingale_jump');
let increase_jump_symbol_vol10 = document.getElementById('increase_jump');
let reduce_jump_symbol_vol10 = document.getElementById('reduce_jump');
let bot_settings_symbol_vol10 = document.getElementById('bot_settings');
let bot_settings2_symbol_vol10 = document.getElementById('bot_settings2');
const volumes2_symbol_vol10 = document.querySelectorAll(".slide_vol2");
let tick_check2_symbol_vol10 = document.getElementById('tick_check2');
let martingale2_symbol_vol10 = document.getElementById('martingale2');
let martingale_jump2_symbol_vol10 = document.getElementById('martingale_jump2');
let martingale_jump_set_symbol_vol10 = document.getElementById('martingale_jump_set');
const last_digit_settings_symbol_vol10 = document.querySelectorAll(".last_digit_settings");

martingale_symbol_vol10.addEventListener('click', function () {
    if (martingale_symbol_vol10.classList.contains('active_mat')) {
        martingale_symbol_vol10.classList.remove('active_mat');
        martingale2_symbol_vol10.classList.remove('active_mat');
        setCookie('martingale', 'false')
        localStorage.setItem('martingale', 'false')
        flash_info_cont_symbol_vol10.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol10.style.color = '#fff'

    } else {
        martingale_symbol_vol10.classList.add('active_mat');
        martingale2_symbol_vol10.classList.add('active_mat');
        setCookie('martingale', 'true')
        localStorage.setItem('martingale', 'true')
        flash_info_cont_symbol_vol10.textContent = 'martigale is active'
        tick_check_amount_symbol_vol10.style.color = '#fff'
    }

    if (flash_info_cont_symbol_vol10.classList.contains('show_flash_info')) {
        flash_info_cont_symbol_vol10.classList.remove('show_flash_info')

        setTimeout(() => {
            flash_info_cont_symbol_vol10.classList.remove('show_flash_info')
        }, 5000)

    } else {
        flash_info_cont_symbol_vol10.classList.add('show_flash_info')

        setTimeout(() => {
            flash_info_cont_symbol_vol10.classList.remove('show_flash_info')
        }, 5000)
    }
});

function bot_set_default_symbol_vol10() {
    let curr_bot_set = localStorage.getItem('bot_set');

    if (curr_bot_set === null) {
        setTimeout(bot_set_default_symbol_vol10, 100);
        return;
    }
    tick_check_symbol_vol10.textContent = curr_bot_set;
    tick_check2_symbol_vol10.textContent = curr_bot_set;
}

bot_set_default_symbol_vol10();

bot_settings_symbol_vol10.addEventListener('click', function () {
    if (settings_cont_symbol_vol10.style.display == 'none') {
        settings_cont_symbol_vol10.style.display = 'block'
    } else {
        settings_cont_symbol_vol10.style.display = 'none'
    }
});
document.addEventListener('click', (event) => {
    if (!bot_settings_symbol_vol10.contains(event.target) && !settings_cont_symbol_vol10.contains(event.target) && !martingale_jump_set_symbol_vol10.contains(event.target)) {
        settings_cont_symbol_vol10.style.display = 'none';
    }
});

last_digit_settings_symbol_vol10.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.querySelector('.bot_text').textContent.trim().replace(/\s+/g, ' ');
        if (bot_set == 'Last one digit bot') {
            localStorage.setItem('bot_set', '1')
            setCookie('bot_set', '1')
            localStorage.setItem('bot_set_store', '1')
            setCookie('bot_set_store', '1')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            localStorage.setItem('bot_set', '2')
            setCookie('bot_set', '2')
            localStorage.setItem('bot_set_store', '2')
            setCookie('bot_set_store', '2')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            localStorage.setItem('bot_set', '3')
            setCookie('bot_set', '3')
            localStorage.setItem('bot_set_store', '3')
            setCookie('bot_set_store', '3')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            localStorage.setItem('bot_set', '4')
            setCookie('bot_set', '4')
            localStorage.setItem('bot_set_store', '4')
            setCookie('bot_set_store', '4')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            localStorage.setItem('bot_set', '5')
            setCookie('bot_set', '5')
            localStorage.setItem('bot_set_store', '5')
            setCookie('bot_set_store', '5')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            localStorage.setItem('bot_set', '6')
            setCookie('bot_set', '6')
            localStorage.setItem('bot_set_store', '6')
            setCookie('bot_set_store', '6')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            localStorage.setItem('bot_set', '7')
            setCookie('bot_set', '7')
            localStorage.setItem('bot_set_store', '7')
            setCookie('bot_set_store', '7')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            localStorage.setItem('bot_set', '8')
            setCookie('bot_set', '8')
            localStorage.setItem('bot_set_store', '8')
            setCookie('bot_set_store', '8')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            localStorage.setItem('bot_set', '9')
            setCookie('bot_set', '9')
            localStorage.setItem('bot_set_store', '9')
            setCookie('bot_set_store', '9')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            localStorage.setItem('bot_set', '10')
            setCookie('bot_set', '10')
            localStorage.setItem('bot_set_store', '10')
            setCookie('bot_set_store', '10')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});

let jump_count_symbol_vol10 = 0

function jump_count_set_symbol_vol10() {
    localStorage.setItem('bot_jump', jump_count_symbol_vol10)
    setCookie('bot_jump', jump_count_symbol_vol10)
}

function jump_count_set2_symbol_vol10() {
    let stored_jump_count = localStorage.getItem('bot_jump');

    jump_count_symbol_vol10 = stored_jump_count !== null ? parseInt(stored_jump_count, 10) : 0;
    if (isNaN(jump_count_symbol_vol10)) {
        jump_count_symbol_vol10 = 0;
    }
    if (jump_count_symbol_vol10 > 0) {
        martingale_jump_symbol_vol10.textContent = 'j' + jump_count_symbol_vol10
        martingale_jump2_symbol_vol10.textContent = 'j' + jump_count_symbol_vol10
    } else {
        martingale_jump_symbol_vol10.textContent = ''
        martingale_jump2_symbol_vol10.textContent = ''
    }
}

jump_count_set2_symbol_vol10()

increase_jump_symbol_vol10.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count_symbol_vol10 = jump_count_symbol_vol10 + 1
    jump_count_set_symbol_vol10()
    jump_count_set2_symbol_vol10()
})

reduce_jump_symbol_vol10.addEventListener('click', (event) => {
    event.preventDefault()
    if (jump_count_symbol_vol10 > 0) {
        jump_count_symbol_vol10 = jump_count_symbol_vol10 - 1
        jump_count_set_symbol_vol10()
        jump_count_set2_symbol_vol10()
    }
})

bot_settings2_symbol_vol10.addEventListener('click', function () {
    if (settings_cont_symbol_vol10.style.display == 'none') {
        settings_cont_symbol_vol10.style.display = 'block'
    } else {
        settings_cont_symbol_vol10.style.display = 'none'
    }
});


martingale2_symbol_vol10.addEventListener('click', function () {
    if (martingale2_symbol_vol10.classList.contains('active_mat')) {
        martingale2_symbol_vol10.classList.remove('active_mat');
        martingale_symbol_vol10.classList.remove('active_mat');
        setCookie('martingale', 'false')
        localStorage.setItem('martingale', 'false')
        flash_info_cont_symbol_vol10.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol10.style.color = '#fff'
    } else {
        martingale2_symbol_vol10.classList.add('active_mat');
        martingale_symbol_vol10.classList.add('active_mat');
        setCookie('martingale', 'true')
        localStorage.setItem('martingale', 'true')
        flash_info_cont_symbol_vol10.textContent = 'martigale is active'
        tick_check_amount_symbol_vol10.style.color = '#fff'
    }
    if (flash_info_cont_symbol_vol10.classList.contains('show_flash_info')) {
        flash_info_cont_symbol_vol10.classList.remove('show_flash_info')
        setTimeout(() => {
            flash_info_cont_symbol_vol10.classList.remove('show_flash_info')
        }, 5000)
    } else {
        flash_info_cont_symbol_vol10.classList.add('show_flash_info')
        setTimeout(() => {
            flash_info_cont_symbol_vol10.classList.remove('show_flash_info')
        }, 5000)
    }
});


























