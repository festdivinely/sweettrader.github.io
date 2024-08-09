import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';

const app_id_demo = 53334;
const token_demo = "4FB1rDGbXX6zbKs";
const app_id_real = 53335;
const token_real = "Jv4SnlKSnzwkymM";

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

let martingale_store_symbol_vol10 = [1.1, 11.1, 123.4, 1371.1, 15593.5]
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

    console.log('first', current_number)
    console.log('second', last_digit_prediction_or_barrier_symbol_vol10)

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
        // Handle errors or rollback operations if needed
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

let bot_state_symbol_vol10 = "stop_bot"
let all_bot_start_stop1_symbol_vol10 = null
let all_bot_start_stop1_cookie_symbol_vol10 = null

let buttonContainer_symbol_vol10 = document.querySelector('.click_change');

function togglePlayPause_symbol_vol10() {
    var play_button = document.getElementById('play_button');
    var pause_button = document.getElementById('pause_button');
    if (play_button) {
        bot_state_symbol_vol10 = "stop_bot"
        play_button.parentNode.removeChild(play_button);

        var pause_button = document.createElement('div');
        pause_button.id = 'pause_button';
        pause_button.className = 'pause_button';
        pause_button.innerHTML = '&#10074;&#10074;';
        buttonContainer_symbol_vol10.appendChild(pause_button);
        document.getElementById('bot_state').textContent = 'Bot has stopped'
    } else if (pause_button) {
        bot_state_symbol_vol10 = "start_bot"
        pause_button.parentNode.removeChild(pause_button);

        var play_button = document.createElement('div');
        play_button.id = 'play_button';
        play_button.className = 'play_button';
        play_button.innerHTML = '&#9654;';
        buttonContainer_symbol_vol10.appendChild(play_button);
        document.getElementById('bot_state').textContent = 'Bot is running'
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
let bot_set_increase_symbol_vol10 = true

let set_vol10_trade_cookie_symbol_vol10 = null
let martingale_active_cookie_symbol_vol10 = null
let bot_set_cookie_symbol_vol10 = null
let set_bot_jump_cookie_symbol_vol10 = null
let initial_set_jump_cookie_symbol_vol10 = true
let bot_set_increase_cookie_symbol_vol10 = true

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

const tickStream_symbol_vol10 = () => api.subscribe({ "ticks": 'R_10' });
const tickStream_symbol_vol10_1s = () => api.subscribe({ "ticks": '1HZ10V' });
const tickStream_symbol_vol25 = () => api.subscribe({ "ticks": 'R_25' });
const tickStream_symbol_vol25_1s = () => api.subscribe({ "ticks": '1HZ25V' });
const tickStream_symbol_vol50 = () => api.subscribe({ "ticks": 'R_50' });
const tickStream_symbol_vol50_1s = () => api.subscribe({ "ticks": '1HZ50V' });
const tickStream_symbol_vol75 = () => api.subscribe({ "ticks": 'R_75' });
const tickStream_symbol_vol75_1s = () => api.subscribe({ "ticks": '1HZ75V' });
const tickStream_symbol_vol100 = () => api.subscribe({ "ticks": 'R_100' });
const tickStream_symbol_vol100_1s = () => api.subscribe({ "ticks": '1HZ100V' });

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
        let bot_start_stop = bot_state_symbol_vol10

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

        if(data.echo_req.ticks === "R_10"){
            strNumber_symbol_vol10 = formatToThreeDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_vol10 = getRandom1(strNumber_symbol_vol10);
        }

        all_bot_start_stop1_symbol_vol10 = localStorage.getItem('all_bot_start_stop1')
        all_bot_start_stop1_cookie_symbol_vol10 = getCookie('all_bot_start_stop1')

        tick_stream_symbol_vol10.textContent = strNumber_symbol_vol10;
        stream10_symbol_vol10.textContent = strNumber_symbol_vol10

        set_vol10_trade_symbol_vol10 = localStorage.getItem("set_vol10_trade");
        martingale_active_symbol_vol10 = localStorage.getItem('martingale');
        bot_set_symbol_vol10 = localStorage.getItem('bot_set');
        set_bot_jump_symbol_vol10 = localStorage.getItem('bot_jump')

        set_vol10_trade_cookie_symbol_vol10 = getCookie("set_vol10_trade");
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
            bot_set_symbol_vol10 = localStorage.getItem('bot_set') ? localStorage.getItem('bot_set') : getCookie('bot_set');
        }

        let bot_count = bot_id_symbol_vol10

        const tag5 = document.getElementById(`td5${bot_count}`);
        const tag6 = document.getElementById(`td6${bot_count}`);
        const tag8 = document.getElementById(`td8${bot_count}`);
        const tag9 = document.getElementById(`td9${bot_count}`);

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 1)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1_symbol_vol10 == 'start_bots' && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 2)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1_symbol_vol10 == 'start_bots' && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 3)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1_symbol_vol10 == 'start_bots' && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 4)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1_symbol_vol10 == 'start_bots' && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 5)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1_symbol_vol10 == 'start_bots' && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (lastNumber5_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 6)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1_symbol_vol10 == 'start_bots' && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (lastNumber6_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber5_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 7)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1_symbol_vol10 == 'start_bots' && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (lastNumber7_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber6_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber5_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 8)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1_symbol_vol10 == 'start_bots' && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (lastNumber8_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber7_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber6_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber5_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 9)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1_symbol_vol10 == 'start_bots' && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10 !== null && lastNumber1_symbol_vol10 !== null && lastNumber2_symbol_vol10 !== null) {
            if ((tag5 && tag6 && tag8 && tag9) || first_instance_symbol_vol10 == true) {
                if (lastNumber9_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber8_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber7_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber6_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber5_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber4_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber3_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber2_symbol_vol10 == currentRandom_symbol_vol10 && lastNumber1_symbol_vol10 == currentRandom_symbol_vol10 && (first_instance_symbol_vol10 == true || (tag5.textContent.trim() !== '' && tag6.textContent.trim() !== '' && tag8.textContent.trim() !== '' && tag9.textContent.trim() !== '')) && (bot_set_symbol_vol10 == 10)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1_symbol_vol10 == 'start_bots' && ((set_vol10_trade_symbol_vol10 == 'vol10_trade') || (set_vol10_trade_cookie_symbol_vol10 == 'vol10_trade'))) {
                        startBot_symbol_vol10(martingale_active_symbol_vol10, lastNumber10_symbol_vol10, lastNumber9_symbol_vol10, lastNumber8_symbol_vol10, lastNumber7_symbol_vol10, lastNumber6_symbol_vol10, lastNumber5_symbol_vol10, lastNumber4_symbol_vol10, lastNumber3_symbol_vol10, lastNumber2_symbol_vol10, lastNumber1_symbol_vol10, currentRandom_symbol_vol10, strNumber_symbol_vol10)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }
    }
};

const subscribeTicks_symbol_vol_general = async () => {
    await tickStream_symbol_vol10();
    await tickStream_symbol_vol10_1s();
    await tickStream_symbol_vol25();
    await tickStream_symbol_vol25_1s();
    await tickStream_symbol_vol50();
    await tickStream_symbol_vol50_1s();
    await tickStream_symbol_vol75();
    await tickStream_symbol_vol75_1s();
    await tickStream_symbol_vol100();
    await tickStream_symbol_vol100_1s();
    connection.addEventListener('message', tickResponse_symbol_vol10);
    connection.addEventListener('message', tickResponse_symbol_vol10_1s);
    connection.addEventListener('message', tickResponse_symbol_vol25);
    connection.addEventListener('message', tickResponse_symbol_vol25_1s);
    connection.addEventListener('message', tickResponse_symbol_vol50);
    connection.addEventListener('message', tickResponse_symbol_vol50_1s);
    connection.addEventListener('message', tickResponse_symbol_vol75);
    connection.addEventListener('message', tickResponse_symbol_vol75_1s);
    connection.addEventListener('message', tickResponse_symbol_vol100);
    connection.addEventListener('message', tickResponse_symbol_vol100_1s);
};

const unsubscribeTicks_symbol_vol_general = () => {
    connection.removeEventListener('message', tickResponse_symbol_vol10, false);
    connection.removeEventListener('message', tickResponse_symbol_vol10_1s, false);
    connection.removeEventListener('message', tickResponse_symbol_vol25, false);
    connection.removeEventListener('message', tickResponse_symbol_vol25_1s, false);
    connection.removeEventListener('message', tickResponse_symbol_vol50, false);
    connection.removeEventListener('message', tickResponse_symbol_vol50_1s, false);
    connection.removeEventListener('message', tickResponse_symbol_vol75, false);
    connection.removeEventListener('message', tickResponse_symbol_vol75_1s, false);
    connection.removeEventListener('message', tickResponse_symbol_vol100, false);
    connection.removeEventListener('message', tickResponse_symbol_vol100_1s, false);
    tickStream_symbol_vol10().unsubscribe();
    tickStream_symbol_vol10_1s().unsubscribe();
    tickStream_symbol_vol25().unsubscribe();
    tickStream_symbol_vol25_1s().unsubscribe();
    tickStream_symbol_vol50().unsubscribe();
    tickStream_symbol_vol50_1s().unsubscribe();
    tickStream_symbol_vol75().unsubscribe();
    tickStream_symbol_vol75_1s().unsubscribe();
    tickStream_symbol_vol100().unsubscribe();
    tickStream_symbol_vol100_1s().unsubscribe();
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
let durr_amount_prop_count = document.getElementById('durr_amount_prop_count')
let durr_amount_prop = document.getElementById('durr_amount_prop')

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
    durr_amount_prop_count.textContent = countdown_trade_symbol_vol10
    durr_amount_prop.textContent = duration_amount_symbol_vol10
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
                } else {
                    
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
                } else if (contract_status2 == 'lost' && data.proposal_open_contract.date_expiry) {
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



























































































let last_digit_input_symbol_vol10_1s = document.getElementById('last_digit_input')
let close_contract_result_container_symbol_vol10_1s = document.getElementById('close_contract_result_container_carousel6')
let buy_sell_two_symbol_vol10_1s = document.getElementById('buy_sell_two')
let trade_type_secound_symbol_vol10_1s = document.getElementById("trade_type_secound")
let attempting_buy2_carousel6_symbol_vol10_1s = document.getElementById("attempting_buy2_carousel6")
let buy_succeded2_carousel6_symbol_vol10_1s = document.getElementById("buy_succeded2_carousel6")
let contract_close2_carousel6_symbol_vol10_1s = document.getElementById("contract_close2_carousel6")
let stream10_1s_carousel6_symbol_vol10_1s = document.getElementById('stream10_1s_carousel6')

let last_digit_prediction_local_st_symbol_vol10_1s = null
let barrier_local_st_symbol_vol10_1s = null
let symbol_vol_text_local_st_symbol_vol10_1s = null
let contract_text_local_st_symbol_vol10_1s = null
let duration_amount_local_st_symbol_vol10_1s = null
let stake_amount_local_st_symbol_vol10_1s = null
let symbol_vol_local_st_symbol_vol10_1s = null
let duration_unit_local_st_symbol_vol10_1s = null
let last_digit_prediction_or_barrier_local_st_symbol_vol10_1s = null
let currency_local_st_symbol_vol10_1s = null
let stake_or_payout_local_st_symbol_vol10_1s = null
let proposal_id_local_st_symbol_vol10_1s = null
let last_digit_prediction_cookie_symbol_vol10_1s = null
let barrier_cookie_symbol_vol10_1s = null
let symbol_vol_text_cookie_symbol_vol10_1s = null
let contract_text_cookie_symbol_vol10_1s = null
let duration_amount_cookie_symbol_vol10_1s = null
let stake_amount_cookie_symbol_vol10_1s = null
let symbol_vol_cookie_symbol_vol10_1s = null
let duration_unit_cookie_symbol_vol10_1s = null
let last_digit_prediction_or_barrier_cookie_symbol_vol10_1s = null
let currency_cookie_symbol_vol10_1s = null
let stake_or_payout_cookie_symbol_vol10_1s = null
let proposal_id_cookie_symbol_vol10_1s = null
let stake_amount_default_symbol_vol10_1s = localStorage.getItem('stake_amount_default') || document.getElementById('stake_amount_input').value
let duration_unit_symbol_vol10_1s = null
let symbol_vol_symbol_vol10_1s = null
let duration_amount_symbol_vol10_1s = null
let stake_amount_symbol_vol10_1s = null
let last_digit_prediction_or_barrier_symbol_vol10_1s = null
let currency_symbol_vol10_1s = null
let contract_symbol_vol10_1s = null
let stake_or_payout_symbol_vol10_1s = null
let proposal_id_symbol_vol10_1s = null
let td2_account_id_carousel6_sysmbol_vol10_1s = document.getElementById('td2_account_id_carousel6')
let td2_no_of_runs_carousel6_sysmbol_vol10_1s = document.getElementById('td2_no_of_runs_carousel6')
let td2_total_stake_carousel6_sysmbol_vol10_1s = document.getElementById('td2_total_stake_carousel6')
let td2_total_payout_carousel6_sysmbol_vol10_1s = document.getElementById('td2_total_payout_carousel6')
let td2_total_wins_carousel6_sysmbol_vol10_1s = document.getElementById('td2_total_wins_carousel6')
let td2_total_loss_carousel6_sysmbol_vol10_1s = document.getElementById('td2_total_loss_carousel6')
let td2_total_profit_loss_carousel6_sysmbol_vol10_1s = document.getElementById('td2_total_profit_loss_carousel6')
let bot_total_runs_symbol_vol10_1s = 0
let bot_total_stake_symbol_vol10_1s = 0
let bot_total_payout_symbol_vol10_1s = 0
let bot_total_wins_symbol_vol10_1s = 0
let bot_total_loss_symbol_vol10_1s = 0
let bot_total_profit_loss_symbol_vol10_1s = 0
let randomNumber_symbol_vol10_1s = null;
let strNumber_symbol_vol10_1s = null;
let authorize_response_symbol_vol10_1s = null
let subscriptionId_symbol_vol10_1s = null
let randomNumber2_symbol_vol10_1s = null
let buy_contract_id_symbol_vol10_1s = null
let api_id_symbol_vol10_1s = null;
let api_token_symbol_vol10_1s = null;
let def_price_up_symbol_vol10_1s = null
let def_payout_up_symbol_vol10_1s = null
let def_profit_up_symbol_vol10_1s = null
let website_status_info_symbol_vol10_1s = 'initial'
let symbol10_1s_symbol_vol10_1s = null
let symbol10_1s_cookie_symbol_vol10_1s = null
let subscription_to_open_contract_symbol_vol10_1s = true

document.addEventListener('DOMContentLoaded', function () {
    setCookie('symbol10_1s', '1HZ10V')
    localStorage.setItem('symbol10_1s', '1HZ10V')

    symbol10_1s_symbol_vol10_1s = localStorage.getItem('symbol10_1s')
    symbol10_1s_cookie_symbol_vol10_1s = getCookie('symbol10_1s')

});

let bot_id_symbol_vol10_1s = 0
let bot_buy_start_time_symbol_vol10_1s = null
let bot_buy_transaction_id_symbol_vol10_1s = null
let bot_trade_type_symbol_vol10_1s = null
let bot_buy_price_symbol_vol10_1s = null
let bot_entry_spot_symbol_vol10_1s = null
let bot_exit_spot_symbol_vol10_1s = null
let bot_profit_loss_symbol_vol10_1s = null
let bot_status_symbol_vol10_1s = null
let firstContractReceived_symbol_vol10_1s = false;
let bot_is_running_or_stopped_symbol_vol10_1s = false
let end_slide_symbol_vol10_1s = true
let bot_contract_id_symbol_vol10_1s = null
let bot_unique_code_symbol_vol10_1s = null

async function add_after_trade_symbol_vol10_1s(bot_id, botuniqueCode, allContracts, entry_spot, exit_spot, profit_loss, status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss) {
    const tbody1_carousel6 = document.getElementById('tbody1_carousel6');

    if (botuniqueCode == allContracts) {
        let row_carousel6 = document.getElementById(`bot_carousel6${bot_id}`);
        if (!row_carousel6) {
            console.error(`Row with data-unique-code "bot_carousel6${bot_id}" not found.`);
            return;
        }

        const entry_spot_html_carousel6 = document.getElementById(`td5_carousel6${bot_id}`);
        const exit_spot_html_carousel6 = document.getElementById(`td6_carousel6${bot_id}`);
        const profit_loss_html_carousel6 = document.getElementById(`td8_carousel6${bot_id}`);
        const status_html_carousel6 = document.getElementById(`td9_carousel6${bot_id}`);

        if (entry_spot_html_carousel6) {
            entry_spot_html_carousel6.textContent = entry_spot
        } else {
            
        }
        if (exit_spot_html_carousel6) {
            exit_spot_html_carousel6.textContent = exit_spot
        } else {
            
        }
        if (profit_loss_html_carousel6) {
            profit_loss_html_carousel6.textContent = profit_loss
            let profitLossNumber = parseFloat(profit_loss);
            if (profitLossNumber < 0) {
                profit_loss_html_carousel6.style.color = 'red';
            } else {
                profit_loss_html_carousel6.style.color = 'green';
            }
        } else {
            
        }
        if (status_html_carousel6) {
            status_html_carousel6.textContent = status
            if (status == 'won') {
                status_html_carousel6.style.color = 'green'
            } else {
                status_html_carousel6.style.color = 'red'
            }
        } else {
            
        }
        td2_no_of_runs_carousel6_sysmbol_vol10_1s.textContent = bot_total_runs_symbol_vol10_1s
        td2_total_stake_carousel6_sysmbol_vol10_1s.textContent = bot_total_stake_symbol_vol10_1s
        td2_total_payout_carousel6_sysmbol_vol10_1s.textContent = Number(bot_total_payout_symbol_vol10_1s.toFixed(2));
        td2_total_wins_carousel6_sysmbol_vol10_1s.textContent = bot_total_wins_symbol_vol10_1s
        td2_total_wins_carousel6_sysmbol_vol10_1s.style.color = 'green'
        td2_total_loss_carousel6_sysmbol_vol10_1s.textContent = bot_total_loss_symbol_vol10_1s
        td2_total_loss_carousel6_sysmbol_vol10_1s.style.color = 'red'
        td2_total_profit_loss_carousel6_sysmbol_vol10_1s.textContent = Number(bot_total_profit_loss_symbol_vol10_1s.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss_symbol_vol10_1s.toFixed(2))) < 0) {
            td2_total_profit_loss_carousel6_sysmbol_vol10_1s.style.color = 'red'
        } else {
            td2_total_profit_loss_carousel6_sysmbol_vol10_1s.style.color = 'green'
        }
    }

}

const progressBar1_carousel6_symbol_vol10_1s = document.querySelector('.progress1_carousel6');
function fillProgressBar1_symbol_vol10_1s() {
    progressBar1_carousel6_symbol_vol10_1s.classList.add('prog1_carousel6')
}

const progressBar2_carousel6_symbol_vol10_1s = document.querySelector('.progress2_carousel6');
function fillProgressBar2_symbol_vol10_1s() {
    progressBar2_carousel6_symbol_vol10_1s.classList.add('prog2_carousel6')
}

function set_start_trade1_symbol_vol10_1s(bot_is_running_or_stopped) {
    let bot_state_carousel6 = document.getElementById('bot_state_carousel6')
    let circle1_carousel6 = document.getElementById('circle1_carousel6')
    let circle2_carousel6 = document.getElementById('circle2_carousel6')
    let circle3_carousel6 = document.getElementById('circle3_carousel6')

    if (circle1_carousel6.classList.contains("buy_signal_carousel6")) {
        circle1_carousel6.classList.remove('buy_signal_carousel6')
    }
    if (circle2_carousel6.classList.contains('circle_shadow_carousel6')) {
        circle2_carousel6.classList.remove('circle_shadow_carousel6')
    }
    if (circle2_carousel6.classList.contains('add_color_carousel6')) {
        circle2_carousel6.classList.remove('add_color_carousel6')
    }
    if (circle3_carousel6.classList.contains('add_color_carousel6')) {
        circle3_carousel6.classList.remove('add_color_carousel6')
    }
    if (progressBar1_carousel6_symbol_vol10_1s.classList.contains("prog1_carousel6")) {
        progressBar1_carousel6_symbol_vol10_1s.classList.remove('prog1_carousel6')
    }
    if (progressBar2_carousel6_symbol_vol10_1s.classList.contains("prog2_carousel6")) {
        progressBar2_carousel6_symbol_vol10_1s.classList.remove('prog2_carousel6')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel6.textContent = 'Bot is running'
        circle1_carousel6.classList.add('buy_signal_carousel6')
        setTimeout(fillProgressBar1_symbol_vol10_1s, 1000);
    } else {
        bot_state_carousel6.textContent = 'Bot has stopped'
        circle1_carousel6.classList.remove('buy_signal_carousel6')
    }

}

function start_trade_ref_symbol_vol10_1s(buy_price_ref) {
    if (attempting_buy2_carousel6_symbol_vol10_1s.classList.contains("attempting_buy2_show_carousel6")) {
        attempting_buy2_carousel6_symbol_vol10_1s.classList.remove("attempting_buy2_show_carousel6")
    }
    if (buy_succeded2_carousel6_symbol_vol10_1s.classList.contains("buy_succeded2_show_carousel6")) {
        buy_succeded2_carousel6_symbol_vol10_1s.classList.remove("buy_succeded2_show_carousel6")
    }
    if (contract_close2_carousel6_symbol_vol10_1s.classList.contains("contract_close2_show_carousel6")) {
        contract_close2_carousel6_symbol_vol10_1s.classList.remove("contract_close2_show_carousel6")
    }
    attempting_buy2_carousel6_symbol_vol10_1s.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2_carousel6_symbol_vol10_1s.classList.add('attempting_buy2_show_carousel6')
}


function set_middle_trade1_symbol_vol10_1s(bot_is_running_or_stopped) {
    let bot_state_carousel6 = document.getElementById('bot_state_carousel6')
    let circle1_carousel6 = document.getElementById('circle1_carousel6')
    let circle2_carousel6 = document.getElementById('circle2_carousel6')
    circle1_carousel6.classList.remove('buy_signal_carousel6')
    circle1_carousel6.classList.add('add_color_carousel6')

    function timmimg_shadow() {
        circle2_carousel6.classList.add('circle_shadow_carousel6')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel6.textContent = 'Bot is running'
        circle2_carousel6.classList.add('add_color_carousel6')
        setTimeout(timmimg_shadow, 1500);
    } else {
        bot_state_carousel6.textContent = 'Bot has stopped'
        circle2_carousel6.classList.remove('circle_shadow_carousel6_carousel6')
        circle2_carousel6.classList.remove('add-color_carousel6')
    }
}

function middle_trade_ref_symbol_vol10_1s(buy_ref) {
    buy_succeded2_carousel6_symbol_vol10_1s.textContent = `ID: ${buy_ref}`
    buy_succeded2_carousel6_symbol_vol10_1s.classList.add('buy_succeded2_show_carousel6')
}

function set_end_trade1_symbol_vol10_1s(bot_is_running_or_stopped) {
    let bot_state_carousel6 = document.getElementById('bot_state_carousel6')
    let circle2_carousel6 = document.getElementById('circle2_carousel6')
    let circle3_carousel6 = document.getElementById('circle3_carousel6')

    function timmimg_color() {
        circle3_carousel6.classList.add('add_color_carousel6')
    }
    if (circle2_carousel6.classList.contains('circle_shadow_carousel6')) {
        circle2_carousel6.classList.remove('circle_shadow_carousel6')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel6.textContent = 'Bot is running'
        setTimeout(fillProgressBar2_symbol_vol10_1s, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state_carousel6.textContent = 'Bot has stopped'
        circle3_carousel6.classList.remove('add_color_carousel6')
    }
}
function end_trade_ref_symbol_vol10_1s(sell_ref) {
    contract_close2_carousel6_symbol_vol10_1s.textContent = `ID: ${sell_ref}`
    contract_close2_carousel6_symbol_vol10_1s.classList.add('contract_close2_show_carousel6')
}

let proposal_open_contract2_symbol_vol10_1s = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})

const proposalOpenContractResponse2_symbol_vol10_1s = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol10_1s, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {
        
        open_proposal_actions2_symbol_vol10_1s(data)
    }
};

const getProposalOpenContract12_symbol_vol10_1s = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol10_1s);
    proposal_open_contract2_symbol_vol10_1s()
};

const getProposalOpenContract22_symbol_vol10_1s = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol10_1s);
};

const unsubscribeProposalOpenContract2_symbol_vol10_1s = () => {
    connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol10_1s, false);
};

function run_open_contract_proposal2_symbol_vol10_1s() {
    if (subscription_to_open_contract_symbol_vol10_1s == true) {
        getProposalOpenContract12_symbol_vol10_1s()
    } else {
        getProposalOpenContract22_symbol_vol10_1s()
    }
    subscription_to_open_contract_symbol_vol10_1s = false
}

function generateUniqueCode_symbol_vol10_1s(buy) {
    return buy.buy.contract_id;
}

let martingale_store_symbol_vol10_1s = [1.1, 11.1, 123.4, 1371.1, 15593.5]
let martingale_count_symbol_vol10_1s = 0
let initial_stake_symbol_vol10_1s = true
let contract_id2_symbol_vol10_1s = null
let wonEncountered_symbol_vol10_1s = false;

async function buy_bot_symbol_vol10_1s(martingale, current_number) {
    const slider = document.getElementById('slide_trade_result_carousel6').style.display = 'flex';

    last_digit_prediction_or_barrier_symbol_vol10_1s = parseInt(current_number);
    let contract_text_local_st = localStorage.getItem('contract_text_local_st')
    let contract_text_cookie = getCookie('contract_text_cookie')

    if (martingale == 'true' && contract_status2_symbol_vol10_1s == 'lost') {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol10_1s += 1
            stake_amount_symbol_vol10_1s = martingale_store_symbol_vol10_1s[martingale_count_symbol_vol10_1s]
        } else {
            stake_amount_symbol_vol10_1s = stake_amount_symbol_vol10_1s * 10.1
        }
    } else if (initial_stake_symbol_vol10_1s = true || (martingale == 'true' && contract_status2_symbol_vol10_1s == 'won')) {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol10_1s = 0
            stake_amount_symbol_vol10_1s = martingale_store_symbol_vol10_1s[martingale_count_symbol_vol10_1s]
        } else {
            stake_amount_symbol_vol10_1s = stake_amount_default_symbol_vol10_1s
        }
    } else {
        stake_amount_symbol_vol10_1s = stake_amount_default_symbol_vol10_1s
    }


    wonEncountered_symbol_vol10_1s = false
    before_trade_symbol_vol10_1s();
    allProposalOpenContract2_symbol_vol10_1s.length = 0;
    unsubscribeProposalOpenContract2_symbol_vol10_1s()

    try {
        await order_propose_symbol_vol10_1s(api, stake_amount_symbol_vol10_1s, last_digit_prediction_or_barrier_symbol_vol10_1s, stake_or_payout_symbol_vol10_1s, contract_symbol_vol10_1s, currency_symbol_vol10_1s, duration_amount_symbol_vol10_1s, duration_unit_symbol_vol10_1s, symbol10_1s_symbol_vol10_1s);

        let buy = await api.buy({
            "buy": String(proposal_id_symbol_vol10_1s),
            "price": parseFloat(stake_amount_symbol_vol10_1s)
        });

        contract_id2_symbol_vol10_1s = generateUniqueCode_symbol_vol10_1s(buy)

        run_open_contract_proposal2_symbol_vol10_1s()
        initial_stake_symbol_vol10_1s = false

    } catch (error) {
        console.error('Error during trade:', error);
    }
}

async function append_result_symbol_vol10_1s(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status) {

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

    const tbody_carousel6 = document.getElementById('tbody1_carousel6');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel6 = document.createElement('tr');
            row_carousel6.id = `bot_carousel6${item.id}`;

            const td1_carousel6 = document.createElement('td');
            td1_carousel6.textContent = item.id;
            td1_carousel6.id = `td1_carousel6${item.id}`;
            row_carousel6.appendChild(td1_carousel6);

            const td2_carousel6 = document.createElement('td');
            td2_carousel6.textContent = item.timestamp;
            td2_carousel6.id = `td2_carousel6${item.id}`;
            row_carousel6.appendChild(td2_carousel6);

            const td3_carousel6 = document.createElement('td');
            td3_carousel6.textContent = item.reference;
            td3_carousel6.id = `td3_carousel6${item.id}`;
            row_carousel6.appendChild(td3_carousel6);

            const td4_carousel6 = document.createElement('td');
            td4_carousel6.textContent = item.tradeType;
            td4_carousel6.id = `td4_carousel6${item.id}`;
            row_carousel6.appendChild(td4_carousel6);

            const td5_carousel6 = document.createElement('td');
            td5_carousel6.textContent = item.entrySpot;
            td5_carousel6.id = `td5_carousel6${item.id}`;
            row_carousel6.appendChild(td5_carousel6);

            const td6_carousel6 = document.createElement('td');
            td6_carousel6.textContent = item.exitSpot;
            td6_carousel6.id = `td6_carousel6${item.id}`;
            row_carousel6.appendChild(td6_carousel6);

            const td7_carousel6 = document.createElement('td');
            td7_carousel6.textContent = item.buyPrice;
            td7_carousel6.id = `td7_carousel6${item.id}`;
            row_carousel6.appendChild(td7_carousel6);

            const td8_carousel6 = document.createElement('td');
            td8_carousel6.textContent = item.profitLoss;
            td8_carousel6.id = `td8_carousel6${item.id}`;
            row_carousel6.appendChild(td8_carousel6);

            const td9_carousel6 = document.createElement('td');
            td9_carousel6.textContent = item.status;
            td9_carousel6.id = `td9_carousel6${item.id}`;
            row_carousel6.appendChild(td9_carousel6);

            if (tbody_carousel6.firstChild) {
                tbody_carousel6.insertBefore(row_carousel6, tbody_carousel6.firstChild);
            } else {
                tbody_carousel6.appendChild(row_carousel6);
            }
        });
    }
    appendRows(backendData)
}

let log_timestamp_current_symbol_vol10_1s = null
let log_buy_timestamp_bot_symbol_vol10_1s = null
let log_sell_timestamp_bot_symbol_vol10_1s = null
let log_message10_symbol_vol10_1s = null
let log_message9_symbol_vol10_1s = null
let log_message8_symbol_vol10_1s = null
let log_message7_symbol_vol10_1s = null
let log_message6_symbol_vol10_1s = null
let log_message5_symbol_vol10_1s = null
let log_message4_symbol_vol10_1s = null
let log_message3_symbol_vol10_1s = null
let log_message2_symbol_vol10_1s = null
let log_message1_symbol_vol10_1s = null
let log_message_curr_symbol_vol10_1s = null
let log_message_curr_tick_symbol_vol10_1s = null
let log_message_last_digit_symbol_vol10_1s = null
let log_message_entry_tick_symbol_vol10_1s = null
let appended_symbol_vol10_1s = true
let log_id_symbol_vol10_1s = 0

function format_log_current_time_symbol_vol10_1s() {
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

async function bot_log_symbol_vol10_1s(last_ten_tick, last_nine_tick, last_eight_tick, last_seven_tick, last_six_tick, last_five_tick, last_four_tick, last_three_tick, last_two_tick, last_one_tick, current_tick, current_tick_full) {

    const backendData = [
        {
            log_message10_symbol_vol10_1s: last_ten_tick,
            log_message9_symbol_vol10_1s: last_nine_tick,
            log_message8_symbol_vol10_1s: last_eight_tick,
            log_message7_symbol_vol10_1s: last_seven_tick,
            log_message6_symbol_vol10_1s: last_six_tick,
            log_message5_symbol_vol10_1s: last_five_tick,
            log_message4_symbol_vol10_1s: last_four_tick,
            log_message3_symbol_vol10_1s: last_three_tick,
            log_message2_symbol_vol10_1s: last_two_tick,
            log_message1_symbol_vol10_1s: last_one_tick,
            log_message_curr_symbol_vol10_1s: current_tick,
            log_message_curr_tick_symbol_vol10_1s: current_tick_full,
        },
    ];

    const log_tbody_carousel6 = document.getElementById('log_tbody1_carousel6');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel6 = document.createElement('tr');
            row_carousel6.id = `log_bot_carousel6${log_id_symbol_vol10_1s}`;

            const td1_carousel6 = document.createElement('td');
            td1_carousel6.textContent = log_timestamp_current_symbol_vol10_1s;
            td1_carousel6.id = `log_td1_carousel6${log_id_symbol_vol10_1s}`;
            td1_carousel6.classList.add('lod_td1_carousel6')
            row_carousel6.appendChild(td1_carousel6);

            const td2_carousel6 = document.createElement('td');

            if (log_message10_symbol_vol10_1s == null) {
                log_message10_symbol_vol10_1s = ''
            }
            if (log_message9_symbol_vol10_1s == null) {
                log_message9_symbol_vol10_1s = ''
            }
            if (log_message8_symbol_vol10_1s == null) {
                log_message8_symbol_vol10_1s = ''
            }
            if (log_message7_symbol_vol10_1s == null) {
                log_message7_symbol_vol10_1s = ''
            }
            if (log_message6_symbol_vol10_1s == null) {
                log_message6_symbol_vol10_1s = ''
            }
            if (log_message5_symbol_vol10_1s == null) {
                log_message5_symbol_vol10_1s = ''
            }

            if (log_message4_symbol_vol10_1s == null) {
                log_message4_symbol_vol10_1s = ''
            }

            if (log_message3_symbol_vol10_1s == null) {
                log_message3_symbol_vol10_1s = ''
            }

            if (log_message2_symbol_vol10_1s == null) {
                log_message2_symbol_vol10_1s = ''
            }

            if (log_message1_symbol_vol10_1s == null) {
                log_message1_symbol_vol10_1s = ''
            }

            if (log_message_curr_symbol_vol10_1s == null) {
                log_message_curr_symbol_vol10_1s = ''
            }

            td2_carousel6.textContent = `last ten ticks:  ${item.log_message10_symbol_vol10_1s} ${item.log_message9_symbol_vol10_1s} ${item.log_message8_symbol_vol10_1s} ${item.log_message7_symbol_vol10_1s} ${item.log_message6_symbol_vol10_1s} ${item.log_message5_symbol_vol10_1s} ${item.log_message4_symbol_vol10_1s} ${item.log_message3_symbol_vol10_1s} ${item.log_message2_symbol_vol10_1s} ${item.log_message1_symbol_vol10_1s}          current tick ${item.log_message_curr_symbol_vol10_1s}    ${item.log_message_curr_tick_symbol_vol10_1s}`;

            td2_carousel6.style.whiteSpace = 'pre'
            td2_carousel6.id = `log_td2_carousel6${log_id_symbol_vol10_1s}`;
            td2_carousel6.classList.add('lod_td2_carousel6')
            row_carousel6.appendChild(td2_carousel6);

            const td3_carousel6 = document.createElement('td');
            td3_carousel6.textContent = 'this is the text'
            td3_carousel6.style.whiteSpace = 'pre'
            td3_carousel6.id = `log_td3_carousel6${log_id_symbol_vol10_1s}`;
            td3_carousel6.classList.add('lod_td3_carousel6')
            row_carousel6.appendChild(td3_carousel6);

            if (log_tbody_carousel6.firstChild) {
                log_tbody_carousel6.insertBefore(row_carousel6, log_tbody_carousel6.firstChild);
                appended_symbol_vol10_1s = true
            } else {
                log_tbody_carousel6.appendChild(row_carousel6);
                appended_symbol_vol10_1s = true
            }
        });
    }
    appendRows(backendData)
}

async function bot_log_end_symbol_vol10_1s(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td_carousel6 = document.getElementById(`log_td3_carousel6${log_id_symbol_vol10_1s}`)

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

    log_buy_timestamp_bot_symbol_vol10_1s = formate_log_date(bot_buy_time_stamp)
    log_sell_timestamp_bot_symbol_vol10_1s = formate_log_date(bot_sell_time_stamp)

    if (target_td_carousel6) {
        target_td_carousel6.textContent = `buy_time:  ${log_buy_timestamp_bot_symbol_vol10_1s}        sell_time:  ${log_sell_timestamp_bot_symbol_vol10_1s}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

        log_id_symbol_vol10_1s += 1
    } else {
        
    }
}

let first_instance_symbol_vol10_1s = true

async function startBot_symbol_vol10_1s(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber) {
    bot_is_running_or_stopped_symbol_vol10_1s = true;
    log_timestamp_current_symbol_vol10_1s = format_log_current_time_symbol_vol10_1s()
    set_start_trade1_symbol_vol10_1s(bot_is_running_or_stopped_symbol_vol10_1s);
    bot_id_symbol_vol10_1s += 1;
    firstContractReceived_symbol_vol10_1s = false;
    end_slide_symbol_vol10_1s = true;
    bot_entry_spot_symbol_vol10_1s = '';
    bot_exit_spot_symbol_vol10_1s = '';
    bot_profit_loss_symbol_vol10_1s = '';
    bot_status_symbol_vol10_1s = 'pending';
    bot_log_symbol_vol10_1s(lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
    await buy_bot_symbol_vol10_1s(martingale, currentRandom);
    first_instance_symbol_vol10_1s = false
}

let bot_state_carousel6_symbol_vol10_1s = "stop_bot"
let all_bot_start_stop1_symbol_vol10_1s = null
let all_bot_start_stop1_cookie_symbol_vol10_1s = null
let buttonContainer_carousel6_symbol_vol10_1s = document.querySelector('.click_change_carousel6');

function togglePlayPause_symbol_vol10_1s() {
    var play_button_carousel6 = document.getElementById('play_button_carousel6');
    var pause_button_carousel6 = document.getElementById('pause_button_carousel6');
    if (play_button_carousel6) {
        bot_state_carousel6_symbol_vol10_1s = "stop_bot"
        play_button_carousel6.parentNode.removeChild(play_button_carousel6);

        var pause_button_carousel6 = document.createElement('div');
        pause_button_carousel6.id = 'pause_button_carousel6';
        pause_button_carousel6.className = 'pause_button_carousel6';
        pause_button_carousel6.innerHTML = '&#10074;&#10074;';
        buttonContainer_carousel6_symbol_vol10_1s.appendChild(pause_button_carousel6);
        document.getElementById('bot_state_carousel6').textContent = 'Bot has stopped';
    } else if (pause_button_carousel6) {
        bot_state_carousel6_symbol_vol10_1s = "start_bot"
        pause_button_carousel6.parentNode.removeChild(pause_button_carousel6);

        var play_button_carousel6 = document.createElement('div');
        play_button_carousel6.id = 'play_button_carousel6';
        play_button_carousel6.className = 'play_button_carousel6';
        play_button_carousel6.innerHTML = '&#9654;';
        buttonContainer_carousel6_symbol_vol10_1s.appendChild(play_button_carousel6);
        document.getElementById('bot_state_carousel6').textContent = 'Bot is running';
    }
}
buttonContainer_carousel6_symbol_vol10_1s.addEventListener('click', togglePlayPause_symbol_vol10_1s);
function getRandom_symbol_vol10_1s(strNumber) {
    return randomNumber_symbol_vol10_1s = strNumber.charAt(strNumber.length - 1);
}

let currentvol_carousel6_symbol_vol10_1s = null
let currentvol2_carousel6_symbol_vol10_1s = null
let martingale_active_carousel6_symbol_vol10_1s = null
let bot_set_carousel6_symbol_vol10_1s = null
let set_bot_jump_carousel6_symbol_vol10_1s = null
let initial_set_jump_symbol_vol10_1s = true
let currentvol_carousel6_cookie_symbol_vol10_1s = null
let currentvol2_carousel6_cookie_symbol_vol10_1s = null
let martingale_active_carousel6_cookie_symbol_vol10_1s = null
let bot_set_carousel6_cookie_symbol_vol10_1s = null
let set_bot_jump_carousel6_cookie_symbol_vol10_1s = null
let initial_set_jump_cookie_symbol_vol10_1s = true
let currentRandom_symbol_vol10_1s = null
let lastNumber1_symbol_vol10_1s = currentRandom_symbol_vol10_1s;
let lastNumber2_symbol_vol10_1s = lastNumber1_symbol_vol10_1s;
let lastNumber3_symbol_vol10_1s = lastNumber2_symbol_vol10_1s;
let lastNumber4_symbol_vol10_1s = lastNumber3_symbol_vol10_1s;
let lastNumber5_symbol_vol10_1s = lastNumber4_symbol_vol10_1s;
let lastNumber6_symbol_vol10_1s = lastNumber5_symbol_vol10_1s;
let lastNumber7_symbol_vol10_1s = lastNumber6_symbol_vol10_1s;
let lastNumber8_symbol_vol10_1s = lastNumber7_symbol_vol10_1s;
let lastNumber9_symbol_vol10_1s = lastNumber8_symbol_vol10_1s;
let lastNumber10_symbol_vol10_1s = lastNumber9_symbol_vol10_1s;

const tickResponse_symbol_vol10_1s = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', tickResponse_symbol_vol10_1s, false);
        await api.disconnect();
    }

    function getRandom1(strNumber1) {
        return randomNumber_symbol_vol10_1s = strNumber1.charAt(strNumber1.length - 1);
    }

    lastNumber10_symbol_vol10_1s = lastNumber9_symbol_vol10_1s
    lastNumber9_symbol_vol10_1s = lastNumber8_symbol_vol10_1s
    lastNumber8_symbol_vol10_1s = lastNumber7_symbol_vol10_1s
    lastNumber7_symbol_vol10_1s = lastNumber6_symbol_vol10_1s
    lastNumber6_symbol_vol10_1s = lastNumber5_symbol_vol10_1s
    lastNumber5_symbol_vol10_1s = lastNumber4_symbol_vol10_1s
    lastNumber4_symbol_vol10_1s = lastNumber3_symbol_vol10_1s
    lastNumber3_symbol_vol10_1s = lastNumber2_symbol_vol10_1s
    lastNumber2_symbol_vol10_1s = lastNumber1_symbol_vol10_1s
    lastNumber1_symbol_vol10_1s = currentRandom_symbol_vol10_1s

    if (data.msg_type === 'tick') {
        let bot_start_stop = bot_state_carousel6_symbol_vol10_1s

        subscriptionId_symbol_vol10_1s = data.subscription.id;
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

        if(data.echo_req.ticks === "1HZ10V"){
            strNumber_symbol_vol10_1s = formatToTwoDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_vol10_1s = getRandom1(strNumber_symbol_vol10_1s);
        }

        stream10_1s_carousel6_symbol_vol10_1s.textContent = strNumber_symbol_vol10_1s
        all_bot_start_stop1_symbol_vol10_1s = localStorage.getItem('all_bot_start_stop1')
        all_bot_start_stop1_cookie_symbol_vol10_1s = getCookie('all_bot_start_stop1')
        currentvol_carousel6_symbol_vol10_1s = localStorage.getItem('bot_current_vol1_carousel6');
        currentvol2_carousel6_symbol_vol10_1s = localStorage.getItem('bot_current_vol2_carousel6');
        martingale_active_carousel6_symbol_vol10_1s = localStorage.getItem('martingale_carousel6');
        bot_set_carousel6_symbol_vol10_1s = localStorage.getItem('bot_set_carousel6');
        set_bot_jump_carousel6_symbol_vol10_1s = localStorage.getItem('bot_jump_carousel6')
        currentvol_carousel6_cookie_symbol_vol10_1s = getCookie('bot_current_vol1_carousel6');
        currentvol2_carousel6_cookie_symbol_vol10_1s = getCookie('bot_current_vol2_carousel6');
        martingale_active_carousel6_cookie_symbol_vol10_1s = getCookie('martingale_carousel6');
        bot_set_carousel6_cookie_symbol_vol10_1s = getCookie('bot_set_carousel6');
        set_bot_jump_carousel6_cookie_symbol_vol10_1s = getCookie('bot_jump_carousel6')

        if (((set_bot_jump_carousel6_symbol_vol10_1s && set_bot_jump_carousel6_symbol_vol10_1s > 0) && contract_status2_symbol_vol10_1s == 'lost') || ((set_bot_jump_carousel6_cookie_symbol_vol10_1s && set_bot_jump_carousel6_cookie_symbol_vol10_1s > 0) && contract_status2_symbol_vol10_1s == 'lost')) {
            bot_set_carousel6_symbol_vol10_1s = (parseInt(bot_set_carousel6_symbol_vol10_1s) + parseInt(set_bot_jump_carousel6_symbol_vol10_1s)) !== null ? (parseInt(bot_set_carousel6_symbol_vol10_1s) + parseInt(set_bot_jump_carousel6_symbol_vol10_1s)) : (parseInt(bot_set_carousel6_cookie_symbol_vol10_1s) + parseInt(set_bot_jump_carousel6_cookie_symbol_vol10_1s))
            contract_status2_symbol_vol10_1s == 'reset'
        } else if ((initial_set_jump_symbol_vol10_1s == true || (contract_status2_symbol_vol10_1s == 'won' && (set_bot_jump_carousel6_symbol_vol10_1s && set_bot_jump_carousel6_symbol_vol10_1s > 0))) || (initial_set_jump_cookie_symbol_vol10_1s == true || (contract_status2_symbol_vol10_1s == 'won' && (set_bot_jump_carousel6_cookie_symbol_vol10_1s && set_bot_jump_carousel6_cookie_symbol_vol10_1s > 0)))) {
            bot_set_carousel6_symbol_vol10_1s = localStorage.getItem('bot_set_carousel6') ? localStorage.getItem('bot_set_carousel6') : getCookie('bot_set_carousel6');
            initial_set_jump_symbol_vol10_1s = false
            initial_set_jump_cookie_symbol_vol10_1s = false
        } else {
            bot_set_carousel6_symbol_vol10_1s = localStorage.getItem('bot_set_carousel6') ? localStorage.getItem('bot_set_carousel6') : getCookie("bot_set_carousel6");
        }
        let bot_count = bot_id_symbol_vol10_1s

        const tag5_carousel6 = document.getElementById(`td5_carousel6${bot_count}`);
        const tag6_carousel6 = document.getElementById(`td6_carousel6${bot_count}`);
        const tag8_carousel6 = document.getElementById(`td8_carousel6${bot_count}`);
        const tag9_carousel6 = document.getElementById(`td9_carousel6${bot_count}`);

        if (currentRandom_symbol_vol10_1s !== null && lastNumber1_symbol_vol10_1s !== null && lastNumber2_symbol_vol10_1s !== null) {
            if ((tag5_carousel6 && tag6_carousel6 && tag8_carousel6 && tag9_carousel6) || first_instance_symbol_vol10_1s == true) {
                if (currentRandom_symbol_vol10_1s && (first_instance_symbol_vol10_1s == true || (tag5_carousel6.textContent.trim() !== '' && tag6_carousel6.textContent.trim() !== '' && tag8_carousel6.textContent.trim() !== '' && tag9_carousel6.textContent.trim() !== '')) && (bot_set_carousel6_symbol_vol10_1s == 1 || bot_set_carousel6_cookie_symbol_vol10_1s == 1)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol10_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10_1s == 'start_bots') && ((currentvol_carousel6_symbol_vol10_1s == 5 && currentvol2_carousel6_symbol_vol10_1s == 5) || (currentvol_carousel6_cookie_symbol_vol10_1s == 5 && currentvol2_carousel6_cookie_symbol_vol10_1s == 5))) {
                        startBot_symbol_vol10_1s(martingale_active_carousel6_cookie_symbol_vol10_1s, lastNumber10_symbol_vol10_1s, lastNumber9_symbol_vol10_1s, lastNumber8_symbol_vol10_1s, lastNumber7_symbol_vol10_1s, lastNumber6_symbol_vol10_1s, lastNumber5_symbol_vol10_1s, lastNumber4_symbol_vol10_1s, lastNumber3_symbol_vol10_1s, lastNumber2_symbol_vol10_1s, lastNumber1_symbol_vol10_1s, currentRandom_symbol_vol10_1s, strNumber_symbol_vol10_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10_1s !== null && lastNumber1_symbol_vol10_1s !== null && lastNumber2_symbol_vol10_1s !== null) {
            if ((tag5_carousel6 && tag6_carousel6 && tag8_carousel6 && tag9_carousel6) || first_instance_symbol_vol10_1s == true) {
                if (lastNumber1_symbol_vol10_1s == currentRandom_symbol_vol10_1s && (first_instance_symbol_vol10_1s == true || (tag5_carousel6.textContent.trim() !== '' && tag6_carousel6.textContent.trim() !== '' && tag8_carousel6.textContent.trim() !== '' && tag9_carousel6.textContent.trim() !== '')) && (bot_set_carousel6_symbol_vol10_1s == 2 || bot_set_carousel6_cookie_symbol_vol10_1s == 2)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol10_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10_1s == 'start_bots') && ((currentvol_carousel6_symbol_vol10_1s == 5 && currentvol2_carousel6_symbol_vol10_1s == 5) || (currentvol_carousel6_cookie_symbol_vol10_1s == 5 && currentvol2_carousel6_cookie_symbol_vol10_1s == 5))) {
                        startBot_symbol_vol10_1s(martingale_active_carousel6_cookie_symbol_vol10_1s, lastNumber10_symbol_vol10_1s, lastNumber9_symbol_vol10_1s, lastNumber8_symbol_vol10_1s, lastNumber7_symbol_vol10_1s, lastNumber6_symbol_vol10_1s, lastNumber5_symbol_vol10_1s, lastNumber4_symbol_vol10_1s, lastNumber3_symbol_vol10_1s, lastNumber2_symbol_vol10_1s, lastNumber1_symbol_vol10_1s, currentRandom_symbol_vol10_1s, strNumber_symbol_vol10_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10_1s !== null && lastNumber1_symbol_vol10_1s !== null && lastNumber2_symbol_vol10_1s !== null) {
            if ((tag5_carousel6 && tag6_carousel6 && tag8_carousel6 && tag9_carousel6) || first_instance_symbol_vol10_1s == true) {
                if (lastNumber2_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber1_symbol_vol10_1s == currentRandom_symbol_vol10_1s && (first_instance_symbol_vol10_1s == true || (tag5_carousel6.textContent.trim() !== '' && tag6_carousel6.textContent.trim() !== '' && tag8_carousel6.textContent.trim() !== '' && tag9_carousel6.textContent.trim() !== '')) && (bot_set_carousel6_symbol_vol10_1s == 3 || bot_set_carousel6_cookie_symbol_vol10_1s == 3)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol10_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10_1s == 'start_bots') && ((currentvol_carousel6_symbol_vol10_1s == 5 && currentvol2_carousel6_symbol_vol10_1s == 5) || (currentvol_carousel6_cookie_symbol_vol10_1s == 5 && currentvol2_carousel6_cookie_symbol_vol10_1s == 5))) {
                        startBot_symbol_vol10_1s(martingale_active_carousel6_cookie_symbol_vol10_1s, lastNumber10_symbol_vol10_1s, lastNumber9_symbol_vol10_1s, lastNumber8_symbol_vol10_1s, lastNumber7_symbol_vol10_1s, lastNumber6_symbol_vol10_1s, lastNumber5_symbol_vol10_1s, lastNumber4_symbol_vol10_1s, lastNumber3_symbol_vol10_1s, lastNumber2_symbol_vol10_1s, lastNumber1_symbol_vol10_1s, currentRandom_symbol_vol10_1s, strNumber_symbol_vol10_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10_1s !== null && lastNumber1_symbol_vol10_1s !== null && lastNumber2_symbol_vol10_1s !== null) {
            if ((tag5_carousel6 && tag6_carousel6 && tag8_carousel6 && tag9_carousel6) || first_instance_symbol_vol10_1s == true) {
                if (lastNumber3_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber2_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber1_symbol_vol10_1s == currentRandom_symbol_vol10_1s && (first_instance_symbol_vol10_1s == true || (tag5_carousel6.textContent.trim() !== '' && tag6_carousel6.textContent.trim() !== '' && tag8_carousel6.textContent.trim() !== '' && tag9_carousel6.textContent.trim() !== '')) && (bot_set_carousel6_symbol_vol10_1s == 4 || bot_set_carousel6_cookie_symbol_vol10_1s == 4)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol10_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10_1s == 'start_bots') && ((currentvol_carousel6_symbol_vol10_1s == 5 && currentvol2_carousel6_symbol_vol10_1s == 5) || (currentvol_carousel6_cookie_symbol_vol10_1s == 5 && currentvol2_carousel6_cookie_symbol_vol10_1s == 5))) {
                        startBot_symbol_vol10_1s(martingale_active_carousel6_cookie_symbol_vol10_1s, lastNumber10_symbol_vol10_1s, lastNumber9_symbol_vol10_1s, lastNumber8_symbol_vol10_1s, lastNumber7_symbol_vol10_1s, lastNumber6_symbol_vol10_1s, lastNumber5_symbol_vol10_1s, lastNumber4_symbol_vol10_1s, lastNumber3_symbol_vol10_1s, lastNumber2_symbol_vol10_1s, lastNumber1_symbol_vol10_1s, currentRandom_symbol_vol10_1s, strNumber_symbol_vol10_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10_1s !== null && lastNumber1_symbol_vol10_1s !== null && lastNumber2_symbol_vol10_1s !== null) {
            if ((tag5_carousel6 && tag6_carousel6 && tag8_carousel6 && tag9_carousel6) || first_instance_symbol_vol10_1s == true) {
                if (lastNumber4_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber3_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber2_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber1_symbol_vol10_1s == currentRandom_symbol_vol10_1s && (first_instance_symbol_vol10_1s == true || (tag5_carousel6.textContent.trim() !== '' && tag6_carousel6.textContent.trim() !== '' && tag8_carousel6.textContent.trim() !== '' && tag9_carousel6.textContent.trim() !== '')) && (bot_set_carousel6_symbol_vol10_1s == 5 || bot_set_carousel6_cookie_symbol_vol10_1s == 5)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol10_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10_1s == 'start_bots') && ((currentvol_carousel6_symbol_vol10_1s == 5 && currentvol2_carousel6_symbol_vol10_1s == 5) || (currentvol_carousel6_cookie_symbol_vol10_1s == 5 && currentvol2_carousel6_cookie_symbol_vol10_1s == 5))) {
                        startBot_symbol_vol10_1s(martingale_active_carousel6_cookie_symbol_vol10_1s, lastNumber10_symbol_vol10_1s, lastNumber9_symbol_vol10_1s, lastNumber8_symbol_vol10_1s, lastNumber7_symbol_vol10_1s, lastNumber6_symbol_vol10_1s, lastNumber5_symbol_vol10_1s, lastNumber4_symbol_vol10_1s, lastNumber3_symbol_vol10_1s, lastNumber2_symbol_vol10_1s, lastNumber1_symbol_vol10_1s, currentRandom_symbol_vol10_1s, strNumber_symbol_vol10_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10_1s !== null && lastNumber1_symbol_vol10_1s !== null && lastNumber2_symbol_vol10_1s !== null) {
            if ((tag5_carousel6 && tag6_carousel6 && tag8_carousel6 && tag9_carousel6) || first_instance_symbol_vol10_1s == true) {
                if (lastNumber5_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber4_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber3_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber2_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber1_symbol_vol10_1s == currentRandom_symbol_vol10_1s && (first_instance_symbol_vol10_1s == true || (tag5_carousel6.textContent.trim() !== '' && tag6_carousel6.textContent.trim() !== '' && tag8_carousel6.textContent.trim() !== '' && tag9_carousel6.textContent.trim() !== '')) && (bot_set_carousel6_symbol_vol10_1s == 6 || bot_set_carousel6_cookie_symbol_vol10_1s == 6)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol10_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10_1s == 'start_bots') && ((currentvol_carousel6_symbol_vol10_1s == 5 && currentvol2_carousel6_symbol_vol10_1s == 5) || (currentvol_carousel6_cookie_symbol_vol10_1s == 5 && currentvol2_carousel6_cookie_symbol_vol10_1s == 5))) {
                        startBot_symbol_vol10_1s(martingale_active_carousel6_cookie_symbol_vol10_1s, lastNumber10_symbol_vol10_1s, lastNumber9_symbol_vol10_1s, lastNumber8_symbol_vol10_1s, lastNumber7_symbol_vol10_1s, lastNumber6_symbol_vol10_1s, lastNumber5_symbol_vol10_1s, lastNumber4_symbol_vol10_1s, lastNumber3_symbol_vol10_1s, lastNumber2_symbol_vol10_1s, lastNumber1_symbol_vol10_1s, currentRandom_symbol_vol10_1s, strNumber_symbol_vol10_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        
        if (currentRandom_symbol_vol10_1s !== null && lastNumber1_symbol_vol10_1s !== null && lastNumber2_symbol_vol10_1s !== null) {
            if ((tag5_carousel6 && tag6_carousel6 && tag8_carousel6 && tag9_carousel6) || first_instance_symbol_vol10_1s == true) {
                if (lastNumber6_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber5_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber4_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber3_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber2_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber1_symbol_vol10_1s == currentRandom_symbol_vol10_1s && (first_instance_symbol_vol10_1s == true || (tag5_carousel6.textContent.trim() !== '' && tag6_carousel6.textContent.trim() !== '' && tag8_carousel6.textContent.trim() !== '' && tag9_carousel6.textContent.trim() !== '')) && (bot_set_carousel6_symbol_vol10_1s == 7 || bot_set_carousel6_cookie_symbol_vol10_1s == 7)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol10_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10_1s == 'start_bots') && ((currentvol_carousel6_symbol_vol10_1s == 5 && currentvol2_carousel6_symbol_vol10_1s == 5) || (currentvol_carousel6_cookie_symbol_vol10_1s == 5 && currentvol2_carousel6_cookie_symbol_vol10_1s == 5))) {
                        startBot_symbol_vol10_1s(martingale_active_carousel6_cookie_symbol_vol10_1s, lastNumber10_symbol_vol10_1s, lastNumber9_symbol_vol10_1s, lastNumber8_symbol_vol10_1s, lastNumber7_symbol_vol10_1s, lastNumber6_symbol_vol10_1s, lastNumber5_symbol_vol10_1s, lastNumber4_symbol_vol10_1s, lastNumber3_symbol_vol10_1s, lastNumber2_symbol_vol10_1s, lastNumber1_symbol_vol10_1s, currentRandom_symbol_vol10_1s, strNumber_symbol_vol10_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10_1s !== null && lastNumber1_symbol_vol10_1s !== null && lastNumber2_symbol_vol10_1s !== null) {
            if ((tag5_carousel6 && tag6_carousel6 && tag8_carousel6 && tag9_carousel6) || first_instance_symbol_vol10_1s == true) {
                if (lastNumber7_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber6_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber5_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber4_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber3_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber2_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber1_symbol_vol10_1s == currentRandom_symbol_vol10_1s && (first_instance_symbol_vol10_1s == true || (tag5_carousel6.textContent.trim() !== '' && tag6_carousel6.textContent.trim() !== '' && tag8_carousel6.textContent.trim() !== '' && tag9_carousel6.textContent.trim() !== '')) && (bot_set_carousel6_symbol_vol10_1s == 8 || bot_set_carousel6_cookie_symbol_vol10_1s == 8)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol10_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10_1s == 'start_bots') && ((currentvol_carousel6_symbol_vol10_1s == 5 && currentvol2_carousel6_symbol_vol10_1s == 5) || (currentvol_carousel6_cookie_symbol_vol10_1s == 5 && currentvol2_carousel6_cookie_symbol_vol10_1s == 5))) {
                        startBot_symbol_vol10_1s(martingale_active_carousel6_cookie_symbol_vol10_1s, lastNumber10_symbol_vol10_1s, lastNumber9_symbol_vol10_1s, lastNumber8_symbol_vol10_1s, lastNumber7_symbol_vol10_1s, lastNumber6_symbol_vol10_1s, lastNumber5_symbol_vol10_1s, lastNumber4_symbol_vol10_1s, lastNumber3_symbol_vol10_1s, lastNumber2_symbol_vol10_1s, lastNumber1_symbol_vol10_1s, currentRandom_symbol_vol10_1s, strNumber_symbol_vol10_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10_1s !== null && lastNumber1_symbol_vol10_1s !== null && lastNumber2_symbol_vol10_1s !== null) {
            if ((tag5_carousel6 && tag6_carousel6 && tag8_carousel6 && tag9_carousel6) || first_instance_symbol_vol10_1s == true) {
                if (lastNumber8_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber7_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber6_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber5_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber4_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber3_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber2_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber1_symbol_vol10_1s == currentRandom_symbol_vol10_1s && (first_instance_symbol_vol10_1s == true || (tag5_carousel6.textContent.trim() !== '' && tag6_carousel6.textContent.trim() !== '' && tag8_carousel6.textContent.trim() !== '' && tag9_carousel6.textContent.trim() !== '')) && (bot_set_carousel6_symbol_vol10_1s == 9 || bot_set_carousel6_cookie_symbol_vol10_1s == 9)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol10_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10_1s == 'start_bots') && ((currentvol_carousel6_symbol_vol10_1s == 5 && currentvol2_carousel6_symbol_vol10_1s == 5) || (currentvol_carousel6_cookie_symbol_vol10_1s == 5 && currentvol2_carousel6_cookie_symbol_vol10_1s == 5))) {
                        startBot_symbol_vol10_1s(martingale_active_carousel6_cookie_symbol_vol10_1s, lastNumber10_symbol_vol10_1s, lastNumber9_symbol_vol10_1s, lastNumber8_symbol_vol10_1s, lastNumber7_symbol_vol10_1s, lastNumber6_symbol_vol10_1s, lastNumber5_symbol_vol10_1s, lastNumber4_symbol_vol10_1s, lastNumber3_symbol_vol10_1s, lastNumber2_symbol_vol10_1s, lastNumber1_symbol_vol10_1s, currentRandom_symbol_vol10_1s, strNumber_symbol_vol10_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol10_1s !== null && lastNumber1_symbol_vol10_1s !== null && lastNumber2_symbol_vol10_1s !== null) {
            if ((tag5_carousel6 && tag6_carousel6 && tag8_carousel6 && tag9_carousel6) || first_instance_symbol_vol10_1s == true) {
                if (lastNumber9_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber8_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber7_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber6_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber5_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber4_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber3_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber2_symbol_vol10_1s == currentRandom_symbol_vol10_1s && lastNumber1_symbol_vol10_1s == currentRandom_symbol_vol10_1s && (first_instance_symbol_vol10_1s == true || (tag5_carousel6.textContent.trim() !== '' && tag6_carousel6.textContent.trim() !== '' && tag8_carousel6.textContent.trim() !== '' && tag9_carousel6.textContent.trim() !== '')) && (bot_set_carousel6_symbol_vol10_1s == 10 || bot_set_carousel6_cookie_symbol_vol10_1s == 10)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol10_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol10_1s == 'start_bots') && ((currentvol_carousel6_symbol_vol10_1s == 5 && currentvol2_carousel6_symbol_vol10_1s == 5) || (currentvol_carousel6_cookie_symbol_vol10_1s == 5 && currentvol2_carousel6_cookie_symbol_vol10_1s == 5))) {
                        startBot_symbol_vol10_1s(martingale_active_carousel6_cookie_symbol_vol10_1s, lastNumber10_symbol_vol10_1s, lastNumber9_symbol_vol10_1s, lastNumber8_symbol_vol10_1s, lastNumber7_symbol_vol10_1s, lastNumber6_symbol_vol10_1s, lastNumber5_symbol_vol10_1s, lastNumber4_symbol_vol10_1s, lastNumber3_symbol_vol10_1s, lastNumber2_symbol_vol10_1s, lastNumber1_symbol_vol10_1s, currentRandom_symbol_vol10_1s, strNumber_symbol_vol10_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }
    }
};

window.addEventListener('load', function () {
    duration_amount_cookie_symbol_vol10_1s = getCookie('duration_amount_cookie');
    stake_amount_cookie_symbol_vol10_1s = getCookie('stake_amount_cookie');
    duration_unit_cookie_symbol_vol10_1s = getCookie('duration_unit_cookie');
    symbol_vol_cookie_symbol_vol10_1s = getCookie('symbol_vol_cookie');
    currency_cookie_symbol_vol10_1s = getCookie('ActiveCurrency')
    contract_text_cookie_symbol_vol10_1s = getCookie('contract_text_cookie');
    stake_or_payout_cookie_symbol_vol10_1s = getCookie('stake_or_payout_cookie')
    last_digit_prediction_cookie_symbol_vol10_1s = getCookie('last_digit_prediction_cookie')
    stake_amount_default_symbol_vol10_1s = getCookie('stake_amount_default')

    if (last_digit_prediction_cookie_symbol_vol10_1s) {
        last_digit_prediction_or_barrier_symbol_vol10_1s = last_digit_prediction_cookie_symbol_vol10_1s
    } else {
        let numericValue = last_digit_input_symbol_vol10_1s.value
        last_digit_prediction_or_barrier_symbol_vol10_1s = numericValue
    }
    if (symbol_vol_cookie_symbol_vol10_1s) {
        symbol_vol_symbol_vol10_1s = symbol_vol_cookie_symbol_vol10_1s;
    } else {
        symbol_vol_symbol_vol10_1s = "1HZ10V";
    }
    if (duration_unit_cookie_symbol_vol10_1s) {
        duration_unit_symbol_vol10_1s = duration_unit_cookie_symbol_vol10_1s;
    } else {
        duration_unit_symbol_vol10_1s = "t";
    }
    if (duration_amount_cookie_symbol_vol10_1s) {
        duration_amount_symbol_vol10_1s = parseInt(duration_amount_cookie_symbol_vol10_1s, 10);
    } else {
        duration_amount_symbol_vol10_1s = 1;
    }
    if (stake_amount_cookie_symbol_vol10_1s) {
        stake_amount_symbol_vol10_1s = parseFloat(stake_amount_cookie_symbol_vol10_1s);
    } else {
        stake_amount_symbol_vol10_1s = 10;
    }
    if (stake_amount_default_symbol_vol10_1s) {
        stake_amount_default_symbol_vol10_1s = parseFloat(stake_amount_default_symbol_vol10_1s);
    } else {
        stake_amount_default_symbol_vol10_1s = 10;
    }
    if (currency_cookie_symbol_vol10_1s) {
        currency_symbol_vol10_1s = currency_cookie_symbol_vol10_1s;
    } else {
        currency_symbol_vol10_1s = "USD";
    }
    if (contract_text_cookie_symbol_vol10_1s) {
        contract_symbol_vol10_1s = contract_text_cookie_symbol_vol10_1s;
    } else {
        contract_symbol_vol10_1s = "Matches/Differs";
    }
    if (stake_or_payout_cookie_symbol_vol10_1s) {
        stake_or_payout_symbol_vol10_1s = stake_or_payout_cookie_symbol_vol10_1s;
    } else {
        stake_or_payout_symbol_vol10_1s = "stake";
    }

    initializeApi(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response_symbol_General) {
            clearInterval(getAwaitingResponses)
        } else {
            
        }
    }, 2000);
});

async function order_propose_symbol_vol10_1s(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
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
                connection.removeEventListener('message', proposalResponse, false);
                await api.disconnect();
                reject(new Error('Error in proposal'));
            } else if (data.msg_type === 'proposal') {

                proposal_id_symbol_vol10_1s = data.proposal.id;
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

const unsubscribeProposal_symbol_vol10_1s = () => {
    connection.removeEventListener('message', proposalResponse_symbol_vol10_1s, false);
};

function convertTimestampTo12HourTime_symbol_vol10_1s(timestamp) {
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

function formatNumberAndBoldLastDecimal_symbol_vol10_1s(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart) {
        let lastDecimalDigit = decimalPart.slice(-1);
        decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
    } 
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}

let contract_status_html_symbol_vol10_1s = document.getElementById('contract_status_carousel6') 
let end_tic_off_trade_symbol_vol10_1s = document.getElementById('end_tic_off_trade_carousel6')            
let price_after_trade_figure_amount_symbol_vol10_1s = document.getElementById('price_after_trade_figure_amount_carousel6') 
let profit_figure_amount_symbol_vol10_1s = document.getElementById('profit_figure_amount_carousel6') 
let buy_price_figure_amount_symbol_vol10_1s = document.getElementById('buy_price_figure_amount_carousel6') 
let result_currency_html_symbol_vol10_1s = document.querySelectorAll('.result_currency')
let transaction_refrence_figure_symbol_vol10_1s = document.getElementById('transaction_refrence_figure_carousel6') 
let trade_start_time_symbol_vol10_1s = document.getElementById('trade_start_time_carousel6') 
let buy_price_text_symbol_vol10_1s = document.getElementById('buy_price_text_carousel6') 
let price_after_trade_text_symbol_vol10_1s = document.getElementById('price_after_trade_text_carousel6') 
let profit_text_symbol_vol10_1s = document.getElementById('profit_text_carousel6') 
let durr_amount_prop_count_symbol_vol10_1s = document.getElementById('durr_amount_prop_count_carousel6') 
let durr_amount_prop_symbol_vol10_1s = document.getElementById('durr_amount_prop_carousel6') 
let countdown_trade_symbol_vol10_1s = 0
let countdown_trade2_symbol_vol10_1s = 0

function before_trade_symbol_vol10_1s() {
    countdown_trade_symbol_vol10_1s = 0
    let allDigits = document.querySelectorAll('.ldgs_carousel6')
    let buy_price_text = document.getElementById('buy_price_text_carousel6')
    let price_after_trade_text = document.getElementById('price_after_trade_text_carousel6')
    let profit_text = document.getElementById('profit_text_carousel6')
    let slide_trade_result = document.getElementById('slide_trade_result_carousel6')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel6')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel6')
    let profit_figure_amount = document.getElementById('profit_figure_amount_carousel6')
    contract_status_html_symbol_vol10_1s.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count_symbol_vol10_1s.textContent = countdown_trade_symbol_vol10_1s
    durr_amount_prop_symbol_vol10_1s.textContent = duration_amount_symbol_vol10_1s
    buy_price_figure_amount.textContent = def_price_up_symbol_vol10_1s
    price_after_trade_figure_amount.textContent = def_payout_up_symbol_vol10_1s
    profit_figure_amount.textContent = def_profit_up_symbol_vol10_1s

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
            if (digit.textContent != (last_digit_prediction_or_barrier_symbol_vol10_1s)) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound == 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier_symbol_vol10_1s) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}

function after_trade_symbol_vol10_1s(status, endDigit) {
    let slide_trade_result = document.getElementById('slide_trade_result_carousel6')
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

function formate_date_symbol_vol10_1s(datein) {
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

let allProposalOpenContract_symbol_vol10_1s = []
let longcodeProp_symbol_vol10_1s = null
let contract_ids_buy_symbol_vol10_1s = null
let contract_status_symbol_vol10_1s = null
let last_tick_symbol_vol10_1s = null
let profit_or_loss_symbol_vol10_1s = null
let final_price_symbol_vol10_1s = null
let payout_result_symbol_vol10_1s = null
let buy_price_symbol_vol10_1s = null
let contract_currency_symbol_vol10_1s = null
let time_of_trade_symbol_vol10_1s = null
let every_tick_symbol_vol10_1s = null
let contract_id_symbol_vol10_1s = null

let allProposalOpenContract2_symbol_vol10_1s = []
let longcodeProp2_symbol_vol10_1s = null
let contract_ids_buy2_symbol_vol10_1s = null
let contract_ids_sell2_symbol_vol10_1s = null
let contract_status2_symbol_vol10_1s = null
let last_tick2_symbol_vol10_1s = null
let profit_or_loss2_symbol_vol10_1s = null
let final_price2_symbol_vol10_1s = null
let payout_result2_symbol_vol10_1s = null
let buy_price2_symbol_vol10_1s = null
let contract_currency2_symbol_vol10_1s = null
let time_of_trade2_symbol_vol10_1s = null
let every_tick2_symbol_vol10_1s = null

function open_proposal_actions2_symbol_vol10_1s(data) {
    if (data.proposal_open_contract.contract_id == contract_id2_symbol_vol10_1s) {
        set_middle_trade1_symbol_vol10_1s(bot_is_running_or_stopped_symbol_vol10_1s)
        bot_buy_start_time_symbol_vol10_1s = formate_date_symbol_vol10_1s(data.proposal_open_contract.date_start)
        bot_buy_transaction_id_symbol_vol10_1s = data.proposal_open_contract.transaction_ids.buy
        bot_trade_type_symbol_vol10_1s = data.proposal_open_contract.contract_type
        bot_buy_price_symbol_vol10_1s = data.proposal_open_contract.buy_price
        bot_status_symbol_vol10_1s = data.proposal_open_contract.status == 'open' ? 'Pending' : data.proposal_open_contract.status
        bot_contract_id_symbol_vol10_1s = data.proposal_open_contract.contract_id
        start_trade_ref_symbol_vol10_1s(bot_buy_price_symbol_vol10_1s)

        if (firstContractReceived_symbol_vol10_1s == false) {
            append_result_symbol_vol10_1s(bot_id_symbol_vol10_1s, bot_buy_start_time_symbol_vol10_1s, bot_buy_transaction_id_symbol_vol10_1s, bot_trade_type_symbol_vol10_1s, bot_buy_price_symbol_vol10_1s, bot_status_symbol_vol10_1s);
            firstContractReceived_symbol_vol10_1s = true
        }

        longcodeProp2_symbol_vol10_1s = data.proposal_open_contract.longcode
        allProposalOpenContract2_symbol_vol10_1s.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information_carousel6').textContent = longcodeProp2_symbol_vol10_1s

        if (allProposalOpenContract2_symbol_vol10_1s.length > 0 && allProposalOpenContract2_symbol_vol10_1s[allProposalOpenContract2_symbol_vol10_1s.length - 1].length > 0) {
            let lastSubArray2 = allProposalOpenContract2_symbol_vol10_1s[allProposalOpenContract2_symbol_vol10_1s.length - 1];
            let lastElementOfLastSubArray2 = lastSubArray2[lastSubArray2.length - 1].tick_display_value;
            let numberString2 = lastElementOfLastSubArray2.toString();
            let lastCharacter2 = numberString2[numberString2.length - 1];
            handleNewNumber_symbol_vol10_1s(lastCharacter2);
            every_tick2_symbol_vol10_1s = lastElementOfLastSubArray2
            end_tic_off_trade_symbol_vol10_1s.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol10_1s(every_tick2_symbol_vol10_1s);
            if (countdown_trade2_symbol_vol10_1s < duration_amount_symbol_vol10_1s) {
                countdown_trade2_symbol_vol10_1s += 1
                durr_amount_prop_count_symbol_vol10_1s.textContent = countdown_trade_symbol_vol10_1s
            }
            if (data.proposal_open_contract.is_expired == 1 && end_slide_symbol_vol10_1s == true) {
                set_end_trade1_symbol_vol10_1s(bot_is_running_or_stopped_symbol_vol10_1s)
                end_slide_symbol_vol10_1s = false
            }
            contract_ids_buy2_symbol_vol10_1s = data.proposal_open_contract.transaction_ids.buy
            if (contract_ids_buy2_symbol_vol10_1s) {
                middle_trade_ref_symbol_vol10_1s(contract_ids_buy2_symbol_vol10_1s)
            }
            if (data.proposal_open_contract.status !== 'open') {
                let circle2_carousel6 = document.getElementById('circle2_carousel6')
                circle2_carousel6.classList.remove('circle_shadow_carousel6')
                bot_status_symbol_vol10_1s = data.proposal_open_contract.status
                bot_entry_spot_symbol_vol10_1s = data.proposal_open_contract.entry_tick
                bot_exit_spot_symbol_vol10_1s = data.proposal_open_contract.exit_tick
                bot_profit_loss_symbol_vol10_1s = data.proposal_open_contract.profit
                contract_status2_symbol_vol10_1s = data.proposal_open_contract.status
                last_tick2_symbol_vol10_1s = lastElementOfLastSubArray2
                profit_or_loss2_symbol_vol10_1s = data.proposal_open_contract.profit
                payout_result2_symbol_vol10_1s = data.proposal_open_contract.payout
                buy_price2_symbol_vol10_1s = data.proposal_open_contract.buy_price
                contract_currency2_symbol_vol10_1s = data.proposal_open_contract.currency
                contract_ids_buy2_symbol_vol10_1s = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2_symbol_vol10_1s = data.proposal_open_contract.expiry_time
                contract_ids_sell2_symbol_vol10_1s = data.proposal_open_contract.transaction_ids.sell

                end_trade_ref_symbol_vol10_1s(contract_ids_sell2_symbol_vol10_1s)
                if (profit_or_loss2_symbol_vol10_1s < 0) {
                    final_price2_symbol_vol10_1s = '0.00'
                } else if (profit_or_loss2_symbol_vol10_1s > 0) {
                    final_price2_symbol_vol10_1s = payout_result2_symbol_vol10_1s
                } else {
                    
                }
                if (contract_status2_symbol_vol10_1s == 'won' && !wonEncountered_symbol_vol10_1s) {
                    bot_total_wins_symbol_vol10_1s = bot_total_wins_symbol_vol10_1s + 1;
                    bot_total_profit_loss_symbol_vol10_1s = bot_total_profit_loss_symbol_vol10_1s + profit_or_loss2_symbol_vol10_1s;
                    bot_total_stake_symbol_vol10_1s = bot_total_stake_symbol_vol10_1s + buy_price2_symbol_vol10_1s
                    bot_total_runs_symbol_vol10_1s = bot_total_runs_symbol_vol10_1s + 1;
                    bot_total_payout_symbol_vol10_1s = bot_total_payout_symbol_vol10_1s + payout_result2_symbol_vol10_1s;
                    add_after_trade_symbol_vol10_1s(bot_id_symbol_vol10_1s, contract_id2_symbol_vol10_1s, bot_contract_id_symbol_vol10_1s, bot_entry_spot_symbol_vol10_1s, bot_exit_spot_symbol_vol10_1s, bot_profit_loss_symbol_vol10_1s, bot_status_symbol_vol10_1s, bot_total_runs_symbol_vol10_1s, bot_total_stake_symbol_vol10_1s, bot_total_payout_symbol_vol10_1s, bot_total_wins_symbol_vol10_1s, bot_total_loss_symbol_vol10_1s, bot_total_profit_loss_symbol_vol10_1s);
                    wonEncountered_symbol_vol10_1s = true;
                } else if (contract_status2_symbol_vol10_1s == 'lost') {
                    bot_total_loss_symbol_vol10_1s = bot_total_loss_symbol_vol10_1s + 1;
                    bot_total_profit_loss_symbol_vol10_1s = bot_total_profit_loss_symbol_vol10_1s + profit_or_loss2_symbol_vol10_1s;
                    bot_total_stake_symbol_vol10_1s = bot_total_stake_symbol_vol10_1s + buy_price2_symbol_vol10_1s
                    bot_total_runs_symbol_vol10_1s = bot_total_runs_symbol_vol10_1s + 1;
                    bot_total_payout_symbol_vol10_1s = bot_total_payout_symbol_vol10_1s - payout_result2_symbol_vol10_1s;
                    add_after_trade_symbol_vol10_1s(bot_id_symbol_vol10_1s, contract_id2_symbol_vol10_1s, bot_contract_id_symbol_vol10_1s, bot_entry_spot_symbol_vol10_1s, bot_exit_spot_symbol_vol10_1s, bot_profit_loss_symbol_vol10_1s, bot_status_symbol_vol10_1s, bot_total_runs_symbol_vol10_1s, bot_total_stake_symbol_vol10_1s, bot_total_payout_symbol_vol10_1s, bot_total_wins_symbol_vol10_1s, bot_total_loss_symbol_vol10_1s, bot_total_profit_loss_symbol_vol10_1s);
                    wonEncountered_symbol_vol10_1s = true;
                }
                if (contract_status2_symbol_vol10_1s == 'won' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol10_1s = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol10_1s = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol10_1s = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol10_1s = every_tick2_symbol_vol10_1s
                    bot_log_end_symbol_vol10_1s(log_buy_timestamp_bot_symbol_vol10_1s, log_sell_timestamp_bot_symbol_vol10_1s, log_message_entry_tick_symbol_vol10_1s, log_message_last_digit_symbol_vol10_1s)
                } else if (contract_status2_symbol_vol10_1s == 'lost' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol10_1s = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol10_1s = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol10_1s = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol10_1s = every_tick2_symbol_vol10_1s
                    bot_log_end_symbol_vol10_1s(log_buy_timestamp_bot_symbol_vol10_1s, log_sell_timestamp_bot_symbol_vol10_1s, log_message_entry_tick_symbol_vol10_1s, log_message_last_digit_symbol_vol10_1s)
                }
                contract_status_html_symbol_vol10_1s.textContent = contract_status2_symbol_vol10_1s
                end_tic_off_trade_symbol_vol10_1s.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol10_1s(last_tick2_symbol_vol10_1s);
                profit_figure_amount_symbol_vol10_1s.textContent = profit_or_loss2_symbol_vol10_1s
                price_after_trade_figure_amount_symbol_vol10_1s.textContent = final_price2_symbol_vol10_1s
                buy_price_figure_amount_symbol_vol10_1s.textContent = buy_price2_symbol_vol10_1s
                result_currency_html_symbol_vol10_1s.textContent = contract_currency2_symbol_vol10_1s
                transaction_refrence_figure_symbol_vol10_1s.textContent = contract_ids_buy2_symbol_vol10_1s
                trade_start_time_symbol_vol10_1s.innerHTML = convertTimestampTo12HourTime_symbol_vol10_1s(time_of_trade2_symbol_vol10_1s)
                buy_price_text_symbol_vol10_1s.textContent = 'Buy price'
                price_after_trade_text_symbol_vol10_1s.textContent = 'Final price'
                profit_text_symbol_vol10_1s.textContent = 'Profit'
                after_trade_symbol_vol10_1s(contract_status2_symbol_vol10_1s, lastCharacter2)
            } else {
            }
        } else {
            
        }
    }
}

let currentPosition1_symbol_vol10_1s = 0;
function moveSlider_symbol_vol10_1s(number) {
    const slider = document.getElementById('slide_trade_result_carousel6');
    const container = document.getElementById('last_digit_responds_carousel6');
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

    const target = document.querySelector(`.last_digits_carousel6.${stringnumber}`);
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
        currentPosition1_symbol_vol10_1s = newPosition;
    }
}

function handleNewNumber_symbol_vol10_1s(randomNumber) {
    const newPosition = randomNumber;
    moveSlider_symbol_vol10_1s(newPosition);
}

let log_close_and_info_cont_symbol_vol10_1s = document.getElementById('log_close_and_info_cont_carousel6');
let bot_log_show_cont_symbol_vol10_1s = document.getElementById('bot_log_show_cont_carousel6');
let bot_details_symbol_vol10_1s = document.getElementById('bot_details_carousel6');
let bot_details2_symbol_vol10_1s = document.getElementById('bot_details2_carousel6');

if (bot_log_show_cont_symbol_vol10_1s && bot_details_symbol_vol10_1s) {
    bot_details_symbol_vol10_1s.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol10_1s.style.display == 'none') {
            bot_log_show_cont_symbol_vol10_1s.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol10_1s.style.display = 'none'
        }
    });

    log_close_and_info_cont_symbol_vol10_1s.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_log_show_cont_symbol_vol10_1s.style.display == 'block') {
            bot_log_show_cont_symbol_vol10_1s.style.display = 'none'
        } else {
            bot_log_show_cont_symbol_vol10_1s.style.display = 'block'
        }
    });
} else {
    console.error('One or more elements are not found');
}

if (bot_log_show_cont_symbol_vol10_1s && bot_details_symbol_vol10_1s) {
    bot_details2_symbol_vol10_1s.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol10_1s.style.display == 'none') {
            bot_log_show_cont_symbol_vol10_1s.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol10_1s.style.display = 'none'
        }
    });
} else {
    console.error('One or more elements are not found');
}

let martingale_symbol_vol10_1s = document.getElementById('martingale_carousel6');
let flash_info_cont_symbol_vol10_1s = document.getElementById('flash_info_cont_carousel6');
let tick_check_amount_symbol_vol10_1s = document.getElementById('tick_check_amount_carousel6');
let settings_cont_symbol_vol10_1s = document.getElementById('settings_cont_carousel6');
let tick_check_symbol_vol10_1s = document.getElementById('tick_check_carousel6');
let martingale_jump_symbol_vol10_1s = document.getElementById('martingale_jump_carousel6');
let increase_jump_symbol_vol10_1s = document.getElementById('increase_jump_carousel6');
let reduce_jump_symbol_vol10_1s = document.getElementById('reduce_jump_carousel6');
let bot_settings_symbol_vol10_1s = document.getElementById('bot_settings_carousel6');
let bot_settings2_symbol_vol10_1s = document.getElementById('bot_settings2_carousel6');
const volumes2_symbol_vol10_1s = document.querySelectorAll(".slide_vol2_carousel6");
let tick_check2_symbol_vol10_1s = document.getElementById('tick_check2_carousel6');
let martingale2_symbol_vol10_1s = document.getElementById('martingale2_carousel6');
let martingale_jump2_symbol_vol10_1s = document.getElementById('martingale_jump2_carousel6');
let martingale_jump_set_symbol_vol10_1s = document.getElementById('martingale_jump_set_carousel6');
const last_digit_settings_symbol_vol10_1s = document.querySelectorAll(".last_digit_settings_carousel6");


martingale_symbol_vol10_1s.addEventListener('click', function () {
    if (martingale_symbol_vol10_1s.classList.contains('active_mat')) {
        martingale_symbol_vol10_1s.classList.remove('active_mat');
        martingale2_symbol_vol10_1s.classList.remove('active_mat');
        setCookie('martingale_carousel6', 'false')
        localStorage.setItem('martingale_carousel6', 'false')
        flash_info_cont_symbol_vol10_1s.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol10_1s.style.color = '#fff'
    } else {
        martingale_symbol_vol10_1s.classList.add('active_mat');
        martingale2_symbol_vol10_1s.classList.add('active_mat');
        setCookie('martingale_carousel6', 'true')
        localStorage.setItem('martingale_carousel6', 'true')
        flash_info_cont_symbol_vol10_1s.textContent = 'martigale is active'
        tick_check_amount_symbol_vol10_1s.style.color = '#fff'
    }
    if (flash_info_cont_symbol_vol10_1s.classList.contains('show_flash_info_carousel6')) {
        flash_info_cont_symbol_vol10_1s.classList.remove('show_flash_info_carousel6')
        setTimeout(() => {
            flash_info_cont_symbol_vol10_1s.classList.remove('show_flash_info_carousel6')
        }, 5000)
    } else {
        flash_info_cont_symbol_vol10_1s.classList.add('show_flash_info_carousel6')
        setTimeout(() => {
            flash_info_cont_symbol_vol10_1s.classList.remove('show_flash_info_carousel6')
        }, 5000)
    }
});

function bot_set_default_symbol_vol10_1s() {
    let curr_bot_set = localStorage.getItem('bot_set_carousel6');
    if (curr_bot_set === null) {
        setTimeout(bot_set_default_symbol_vol10_1s, 100);
        return;
    }
    tick_check_symbol_vol10_1s.textContent = curr_bot_set;
    tick_check2_symbol_vol10_1s.textContent = curr_bot_set;
}

bot_set_default_symbol_vol10_1s();

bot_settings_symbol_vol10_1s.addEventListener('click', function () {
    if (settings_cont_symbol_vol10_1s.style.display == 'none') {
        settings_cont_symbol_vol10_1s.style.display = 'block'
    } else {
        settings_cont_symbol_vol10_1s.style.display = 'none'
    }
});

document.addEventListener('click', (event) => {
    if (!bot_settings_symbol_vol10_1s.contains(event.target) && !settings_cont_symbol_vol10_1s.contains(event.target) && !martingale_jump_set_symbol_vol10_1s.contains(event.target)) {
        settings_cont_symbol_vol10_1s.style.display = 'none';
    }
});

last_digit_settings_symbol_vol10_1s.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.querySelector('.bot_text_carousel6').textContent.trim().replace(/\s+/g, ' ');
        if (bot_set == 'Last one digit bot') {
            localStorage.setItem('bot_set_carousel6', '1')
            setCookie('bot_set_carousel6', '1')
            localStorage.setItem('bot_set_store_carousel6', '1')
            setCookie('bot_set_store_carousel6', '1')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            localStorage.setItem('bot_set_carousel6', '2')
            setCookie('bot_set_carousel6', '2')
            localStorage.setItem('bot_set_store_carousel6', '2')
            setCookie('bot_set_store_carousel6', '2')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            localStorage.setItem('bot_set_carousel6', '3')
            setCookie('bot_set_carousel6', '3')
            localStorage.setItem('bot_set_store_carousel6', '3')
            setCookie('bot_set_store_carousel6', '3')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            localStorage.setItem('bot_set_carousel6', '4')
            setCookie('bot_set_carousel6', '4')
            localStorage.setItem('bot_set_store_carousel6', '4')
            setCookie('bot_set_store_carousel6', '4')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            localStorage.setItem('bot_set_carousel6', '5')
            setCookie('bot_set_carousel6', '5')
            localStorage.setItem('bot_set_store_carousel6', '5')
            setCookie('bot_set_store_carousel6', '5')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            localStorage.setItem('bot_set_carousel6', '6')
            setCookie('bot_set_carousel6', '6')
            localStorage.setItem('bot_set_store_carousel6', '6')
            setCookie('bot_set_store_carousel6', '6')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            localStorage.setItem('bot_set_carousel6', '7')
            setCookie('bot_set_carousel6', '7')
            localStorage.setItem('bot_set_store_carousel6', '7')
            setCookie('bot_set_store_carousel6', '7')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            localStorage.setItem('bot_set_carousel6', '8')
            setCookie('bot_set_carousel6', '8')
            localStorage.setItem('bot_set_store_carousel6', '8')
            setCookie('bot_set_store_carousel6', '8')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            localStorage.setItem('bot_set_carousel6', '9')
            setCookie('bot_set_carousel6', '9')
            localStorage.setItem('bot_set_store_carousel6', '9')
            setCookie('bot_set_store_carousel6', '9')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            localStorage.setItem('bot_set_carousel6', '10')
            setCookie('bot_set_carousel6', '10')
            localStorage.setItem('bot_set_store_carousel6', '10')
            setCookie('bot_set_store_carousel6', '10')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol10_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});


let jump_count_symbol_vol10_1s = 0

function jump_count_set_symbol_vol10_1s() {
    localStorage.setItem('bot_jump_carousel6', jump_count_symbol_vol10_1s)
    setCookie('bot_jump_carousel6', jump_count_symbol_vol10_1s)
}

function jump_count_set2_symbol_vol10_1s() {
    let stored_jump_count = localStorage.getItem('bot_jump_carousel6') ? localStorage.getItem('bot_jump_carousel6') : getCookie('bot_jump_carousel6');
    jump_count_symbol_vol10_1s = stored_jump_count !== null ? parseInt(stored_jump_count, 10) : 0;

    if (isNaN(jump_count_symbol_vol10_1s)) {
        jump_count_symbol_vol10_1s = 0;
    }
    if (jump_count_symbol_vol10_1s > 0) {
        martingale_jump_symbol_vol10_1s.textContent = 'j' + jump_count_symbol_vol10_1s
        martingale_jump2_symbol_vol10_1s.textContent = 'j' + jump_count_symbol_vol10_1s
    } else {
        martingale_jump_symbol_vol10_1s.textContent = ''
        martingale_jump2_symbol_vol10_1s.textContent = ''
    }
}

jump_count_set2_symbol_vol10_1s()

increase_jump_symbol_vol10_1s.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count_symbol_vol10_1s = jump_count_symbol_vol10_1s + 1
    jump_count_set_symbol_vol10_1s()
    jump_count_set2_symbol_vol10_1s()
})

reduce_jump_symbol_vol10_1s.addEventListener('click', (event) => {
    event.preventDefault()
    if (jump_count_symbol_vol10_1s > 0) {
        jump_count_symbol_vol10_1s = jump_count_symbol_vol10_1s - 1
        jump_count_set_symbol_vol10_1s()
        jump_count_set2_symbol_vol10_1s()
    }
})

bot_settings2_symbol_vol10_1s.addEventListener('click', function () {
    if (settings_cont_symbol_vol10_1s.style.display == 'none') {
        settings_cont_symbol_vol10_1s.style.display = 'block'
    } else {
        settings_cont_symbol_vol10_1s.style.display = 'none'
    }
});

martingale2_symbol_vol10_1s.addEventListener('click', function () {
    if (martingale2_symbol_vol10_1s.classList.contains('active_mat')) {
        martingale2_symbol_vol10_1s.classList.remove('active_mat');
        martingale_symbol_vol10_1s.classList.remove('active_mat');
        setCookie('martingale_carousel6', 'false')
        localStorage.setItem('martingale_carousel6', 'false')
        flash_info_cont_symbol_vol10_1s.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol10_1s.style.color = '#fff'
    } else {
        martingale2_symbol_vol10_1s.classList.add('active_mat');
        martingale_symbol_vol10_1s.classList.add('active_mat');
        setCookie('martingale_carousel6', 'true')
        localStorage.setItem('martingale_carousel6', 'true')
        flash_info_cont_symbol_vol10_1s.textContent = 'martigale is active'
        tick_check_amount_symbol_vol10_1s.style.color = '#fff'
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











































































































let last_digit_input_symbol_vol25 = document.getElementById('last_digit_input')
let close_contract_result_container_symbol_vol25 = document.getElementById('close_contract_result_container_carousel2')
let buy_sell_two_symbol_vol25 = document.getElementById('buy_sell_two')
let trade_type_secound_symbol_vol25 = document.getElementById("trade_type_secound")
let attempting_buy2_carousel2_symbol_vol25 = document.getElementById("attempting_buy2_carousel2")
let buy_succeded2_carousel2_symbol_vol25 = document.getElementById("buy_succeded2_carousel2")
let contract_close2_carousel2_symbol_vol25 = document.getElementById("contract_close2_carousel2")
let stream25_carousel2_symbol_vol25 = document.getElementById('stream25_carousel2')

let last_digit_prediction_local_st_symbol_vol25 = null
let barrier_local_st_symbol_vol25 = null
let symbol_vol_text_local_st_symbol_vol25 = null
let contract_text_local_st_symbol_vol25 = null
let duration_amount_local_st_symbol_vol25 = null
let stake_amount_local_st_symbol_vol25 = null
let symbol_vol_local_st_symbol_vol25 = null
let duration_unit_local_st_symbol_vol25 = null
let last_digit_prediction_or_barrier_local_st_symbol_vol25 = null
let currency_local_st_symbol_vol25 = null
let stake_or_payout_local_st_symbol_vol25 = null
let proposal_id_local_st_symbol_vol25 = null
let last_digit_prediction_cookie_symbol_vol25 = null
let barrier_cookie_symbol_vol25 = null
let symbol_vol_text_cookie_symbol_vol25 = null
let contract_text_cookie_symbol_vol25 = null
let duration_amount_cookie_symbol_vol25 = null
let stake_amount_cookie_symbol_vol25 = null
let symbol_vol_cookie_symbol_vol25 = null
let duration_unit_cookie_symbol_vol25 = null
let last_digit_prediction_or_barrier_cookie_symbol_vol25 = null
let currency_cookie_symbol_vol25 = null
let stake_or_payout_cookie_symbol_vol25 = null
let proposal_id_cookie_symbol_vol25 = null
let stake_amount_default_symbol_vol25 = localStorage.getItem('stake_amount_default') || document.getElementById('stake_amount_input').value
let duration_unit_symbol_vol25 = null
let symbol_vol_symbol_vol25 = null
let duration_amount_symbol_vol25 = null
let stake_amount_symbol_vol25 = null
let last_digit_prediction_or_barrier_symbol_vol25 = null
let currency_symbol_vol25 = null
let contract_symbol_vol25 = null
let stake_or_payout_symbol_vol25 = null
let proposal_id_symbol_vol25 = null
let td2_account_id_carousel2_symbol_vol25 = document.getElementById('td2_account_id_carousel2')
let td2_no_of_runs_carousel2_symbol_vol25 = document.getElementById('td2_no_of_runs_carousel2')
let td2_total_stake_carousel2_symbol_vol25 = document.getElementById('td2_total_stake_carousel2')
let td2_total_payout_carousel2_symbol_vol25 = document.getElementById('td2_total_payout_carousel2')
let td2_total_wins_carousel2_symbol_vol25 = document.getElementById('td2_total_wins_carousel2')
let td2_total_loss_carousel2_symbol_vol25 = document.getElementById('td2_total_loss_carousel2')
let td2_total_profit_loss_carousel2_symbol_vol25 = document.getElementById('td2_total_profit_loss_carousel2')
let bot_total_runs_symbol_vol25 = 0
let bot_total_stake_symbol_vol25 = 0
let bot_total_payout_symbol_vol25 = 0
let bot_total_wins_symbol_vol25 = 0
let bot_total_loss_symbol_vol25 = 0
let bot_total_profit_loss_symbol_vol25 = 0
let randomNumber_symbol_vol25 = null;
let strNumber_symbol_vol25 = null;
let authorize_response_symbol_vol25 = null
let subscriptionId_symbol_vol25 = null
let randomNumber2_symbol_vol25 = null
let buy_contract_id_symbol_vol25 = null
let api_id_symbol_vol25 = null;
let api_token_symbol_vol25 = null;
let def_price_up_symbol_vol25 = null
let def_payout_up_symbol_vol25 = null
let def_profit_up_symbol_vol25 = null
let website_status_info_symbol_vol25 = 'initial'
let symbol25_symbol_vol25 = null
let symbol25_cookie_symbol_vol25 = null
let subscription_to_open_contract_symbol_vol25 = true

document.addEventListener('DOMContentLoaded', function () {
    setCookie('symbol25', 'R_25')
    localStorage.setItem('symbol25', 'R_25')

    symbol25_symbol_vol25 = localStorage.getItem('symbol25')
    symbol25_cookie_symbol_vol25 = getCookie('symbol25')

});

let bot_id_symbol_vol25 = 0
let bot_buy_start_time_symbol_vol25 = null
let bot_buy_transaction_id_symbol_vol25 = null
let bot_trade_type_symbol_vol25 = null
let bot_buy_price_symbol_vol25 = null
let bot_entry_spot_symbol_vol25 = null
let bot_exit_spot_symbol_vol25 = null
let bot_profit_loss_symbol_vol25 = null
let bot_status_symbol_vol25 = null
let firstContractReceived_symbol_vol25 = false;
let bot_is_running_or_stopped_symbol_vol25 = false
let end_slide_symbol_vol25 = true
let bot_contract_id_symbol_vol25 = null
let bot_unique_code_symbol_vol25 = null

async function add_after_trade_symbol_vol25(bot_id, botuniqueCode, allContracts, entry_spot, exit_spot, profit_loss, status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss) {
    const tbody1_carousel2 = document.getElementById('tbody1_carousel2');

    if (botuniqueCode == allContracts) {
        let row_carousel2 = document.getElementById(`bot_carousel2${bot_id}`);
        if (!row_carousel2) {
            console.error(`Row with data-unique-code "bot_carousel2${bot_id}" not found.`);
            return;
        }

        const entry_spot_html_carousel2 = document.getElementById(`td5_carousel2${bot_id}`);
        const exit_spot_html_carousel2 = document.getElementById(`td6_carousel2${bot_id}`);
        const profit_loss_html_carousel2 = document.getElementById(`td8_carousel2${bot_id}`);
        const status_html_carousel2 = document.getElementById(`td9_carousel2${bot_id}`);

        if (entry_spot_html_carousel2) {
            entry_spot_html_carousel2.textContent = entry_spot
        } else {
            
        }
        if (exit_spot_html_carousel2) {
            exit_spot_html_carousel2.textContent = exit_spot
        } else {
            
        }
        if (profit_loss_html_carousel2) {
            profit_loss_html_carousel2.textContent = profit_loss
            let profitLossNumber = parseFloat(profit_loss);
            if (profitLossNumber < 0) {
                profit_loss_html_carousel2.style.color = 'red';
            } else {
                profit_loss_html_carousel2.style.color = 'green';
            }
        } else {
            
        }
        if (status_html_carousel2) {
            status_html_carousel2.textContent = status
            if (status == 'won') {
                status_html_carousel2.style.color = 'green'
            } else {
                status_html_carousel2.style.color = 'red'
            }
        } else {
            
        }
        td2_no_of_runs_carousel2_symbol_vol25.textContent = bot_total_runs_symbol_vol25
        td2_total_stake_carousel2_symbol_vol25.textContent = bot_total_stake_symbol_vol25
        td2_total_payout_carousel2_symbol_vol25.textContent = Number(bot_total_payout_symbol_vol25.toFixed(2));
        td2_total_wins_carousel2_symbol_vol25.textContent = bot_total_wins_symbol_vol25
        td2_total_wins_carousel2_symbol_vol25.style.color = 'green'
        td2_total_loss_carousel2_symbol_vol25.textContent = bot_total_loss_symbol_vol25
        td2_total_loss_carousel2_symbol_vol25.style.color = 'red'
        td2_total_profit_loss_carousel2_symbol_vol25.textContent = Number(bot_total_profit_loss_symbol_vol25.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss_symbol_vol25.toFixed(2))) < 0) {
            td2_total_profit_loss_carousel2_symbol_vol25.style.color = 'red'
        } else {
            td2_total_profit_loss_carousel2_symbol_vol25.style.color = 'green'
        }
    }
}

const progressBar1_carousel2_symbol_vol25 = document.querySelector('.progress1_carousel2');
function fillProgressBar1_symbol_vol25() {
    progressBar1_carousel2_symbol_vol25.classList.add('prog1_carousel2')
}

const progressBar2_carousel2_symbol_vol25 = document.querySelector('.progress2_carousel2');
function fillProgressBar2_symbol_vol25() {
    progressBar2_carousel2_symbol_vol25.classList.add('prog2_carousel2')
}

function set_start_trade1_symbol_vol25(bot_is_running_or_stopped) {
    let bot_state_carousel2 = document.getElementById('bot_state_carousel2')
    let circle1_carousel2 = document.getElementById('circle1_carousel2')
    let circle2_carousel2 = document.getElementById('circle2_carousel2')
    let circle3_carousel2 = document.getElementById('circle3_carousel2')

    if (circle1_carousel2.classList.contains("buy_signal_carousel2")) {
        circle1_carousel2.classList.remove('buy_signal_carousel2')
    }
    if (circle2_carousel2.classList.contains('circle_shadow_carousel2')) {
        circle2_carousel2.classList.remove('circle_shadow_carousel2')
    }
    if (circle2_carousel2.classList.contains('add_color_carousel2')) {
        circle2_carousel2.classList.remove('add_color_carousel2')
    }
    if (circle3_carousel2.classList.contains('add_color_carousel2')) {
        circle3_carousel2.classList.remove('add_color_carousel2')
    }
    if (progressBar1_carousel2_symbol_vol25.classList.contains("prog1_carousel2")) {
        progressBar1_carousel2_symbol_vol25.classList.remove('prog1_carousel2')
    }
    if (progressBar2_carousel2_symbol_vol25.classList.contains("prog2_carousel2")) {
        progressBar2_carousel2_symbol_vol25.classList.remove('prog2_carousel2')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel2.textContent = 'Bot is running'
        circle1_carousel2.classList.add('buy_signal_carousel2')
        setTimeout(fillProgressBar1_symbol_vol25, 1000);
    } else {
        bot_state_carousel2.textContent = 'Bot has stopped'
        circle1_carousel2.classList.remove('buy_signal_carousel2')
    }

}

function start_trade_ref_symbol_vol25(buy_price_ref) {
    if (attempting_buy2_carousel2_symbol_vol25.classList.contains("attempting_buy2_show_carousel2")) {
        attempting_buy2_carousel2_symbol_vol25.classList.remove("attempting_buy2_show_carousel2")
    }
    if (buy_succeded2_carousel2_symbol_vol25.classList.contains("buy_succeded2_show_carousel2")) {
        buy_succeded2_carousel2_symbol_vol25.classList.remove("buy_succeded2_show_carousel2")
    }
    if (contract_close2_carousel2_symbol_vol25.classList.contains("contract_close2_show_carousel2")) {
        contract_close2_carousel2_symbol_vol25.classList.remove("contract_close2_show_carousel2")
    }
    attempting_buy2_carousel2_symbol_vol25.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2_carousel2_symbol_vol25.classList.add('attempting_buy2_show_carousel2')
}


function set_middle_trade1_symbol_vol25(bot_is_running_or_stopped) {
    let bot_state_carousel2 = document.getElementById('bot_state_carousel2')
    let circle1_carousel2 = document.getElementById('circle1_carousel2')
    let circle2_carousel2 = document.getElementById('circle2_carousel2')
    circle1_carousel2.classList.remove('buy_signal_carousel2')
    circle1_carousel2.classList.add('add_color_carousel2')

    function timmimg_shadow() {
        circle2_carousel2.classList.add('circle_shadow_carousel2')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel2.textContent = 'Bot is running'
        circle2_carousel2.classList.add('add_color_carousel2')
        setTimeout(timmimg_shadow, 1500);
    } else {
        bot_state_carousel2.textContent = 'Bot has stopped'
        circle2_carousel2.classList.remove('circle_shadow_carousel2_carousel2')
        circle2_carousel2.classList.remove('add-color_carousel2')
    }
}

function middle_trade_ref_symbol_vol25(buy_ref) {
    buy_succeded2_carousel2_symbol_vol25.textContent = `ID: ${buy_ref}`
    buy_succeded2_carousel2_symbol_vol25.classList.add('buy_succeded2_show_carousel2')
}

function set_end_trade1_symbol_vol25(bot_is_running_or_stopped) {
    let bot_state_carousel2 = document.getElementById('bot_state_carousel2')
    let circle2_carousel2 = document.getElementById('circle2_carousel2')
    let circle3_carousel2 = document.getElementById('circle3_carousel2')

    function timmimg_color() {
        circle3_carousel2.classList.add('add_color_carousel2')
    }
    if (circle2_carousel2.classList.contains('circle_shadow_carousel2')) {
        circle2_carousel2.classList.remove('circle_shadow_carousel2')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel2.textContent = 'Bot is running'
        setTimeout(fillProgressBar2_symbol_vol25, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state_carousel2.textContent = 'Bot has stopped'
        circle3_carousel2.classList.remove('add_color_carousel2')
    }
}
function end_trade_ref_symbol_vol25(sell_ref) {
    contract_close2_carousel2_symbol_vol25.textContent = `ID: ${sell_ref}`
    contract_close2_carousel2_symbol_vol25.classList.add('contract_close2_show_carousel2')
}

let proposal_open_contract2_symbol_vol25 = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})

const proposalOpenContractResponse2_symbol_vol25 = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol25, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {
        
        open_proposal_actions2_symbol_vol25(data)
    }
};

const getProposalOpenContract12_symbol_vol25 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol25);
    proposal_open_contract2_symbol_vol25()
};

const getProposalOpenContract22_symbol_vol25 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol25);
};

const unsubscribeProposalOpenContract2_symbol_vol25 = () => {
    connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol25, false);
};

function run_open_contract_proposal2_symbol_vol25() {
    if (subscription_to_open_contract_symbol_vol25 == true) {
        getProposalOpenContract12_symbol_vol25()
    } else {
        getProposalOpenContract22_symbol_vol25()
    }
    subscription_to_open_contract_symbol_vol25 = false
}

function generateUniqueCode_symbol_vol25(buy) {
    return buy.buy.contract_id;
}

let martingale_store_symbol_vol25 = [1.1, 11.1, 123.4, 1371.1, 15593.5]
let martingale_count_symbol_vol25 = 0
let initial_stake_symbol_vol25 = true
let contract_id2_symbol_vol25 = null
let wonEncountered_symbol_vol25 = false;

async function buy_bot_symbol_vol25(martingale, current_number) {
    const slider = document.getElementById('slide_trade_result_carousel2').style.display = 'flex';

    last_digit_prediction_or_barrier_symbol_vol25 = parseInt(current_number);
    let contract_text_local_st = localStorage.getItem('contract_text_local_st')
    let contract_text_cookie = getCookie('contract_text_cookie')

    if (martingale == 'true' && contract_status2_symbol_vol25 == 'lost') {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol25 += 1
            stake_amount_symbol_vol25 = martingale_store_symbol_vol25[martingale_count_symbol_vol25]
        } else {
            stake_amount_symbol_vol25 = stake_amount_symbol_vol25 * 10.1
        }
    } else if (initial_stake_symbol_vol25 = true || (martingale == 'true' && contract_status2_symbol_vol25 == 'won')) {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol25 = 0
            stake_amount_symbol_vol25 = martingale_store_symbol_vol25[martingale_count_symbol_vol25]
        } else {
            stake_amount_symbol_vol25 = stake_amount_default_symbol_vol25
        }
    } else {
        stake_amount_symbol_vol25 = stake_amount_default_symbol_vol25
    }


    wonEncountered_symbol_vol25 = false
    before_trade_symbol_vol25();
    allProposalOpenContract2_symbol_vol25.length = 0;
    unsubscribeProposalOpenContract2_symbol_vol25()

    try {
        await order_propose_symbol_vol25(api, stake_amount_symbol_vol25, last_digit_prediction_or_barrier_symbol_vol25, stake_or_payout_symbol_vol25, contract_symbol_vol25, currency_symbol_vol25, duration_amount_symbol_vol25, duration_unit_symbol_vol25, symbol25_symbol_vol25);

        let buy = await api.buy({
            "buy": String(proposal_id_symbol_vol25),
            "price": parseFloat(stake_amount_symbol_vol25)
        });

        contract_id2_symbol_vol25 = generateUniqueCode_symbol_vol25(buy)

        run_open_contract_proposal2_symbol_vol25()
        initial_stake_symbol_vol25 = false

    } catch (error) {
        console.error('Error during trade:', error);
    }
}

async function append_result_symbol_vol25(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status) {

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

    const tbody_carousel2 = document.getElementById('tbody1_carousel2');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel2 = document.createElement('tr');
            row_carousel2.id = `bot_carousel2${item.id}`;

            const td1_carousel2 = document.createElement('td');
            td1_carousel2.textContent = item.id;
            td1_carousel2.id = `td1_carousel2${item.id}`;
            row_carousel2.appendChild(td1_carousel2);

            const td2_carousel2 = document.createElement('td');
            td2_carousel2.textContent = item.timestamp;
            td2_carousel2.id = `td2_carousel2${item.id}`;
            row_carousel2.appendChild(td2_carousel2);

            const td3_carousel2 = document.createElement('td');
            td3_carousel2.textContent = item.reference;
            td3_carousel2.id = `td3_carousel2${item.id}`;
            row_carousel2.appendChild(td3_carousel2);

            const td4_carousel2 = document.createElement('td');
            td4_carousel2.textContent = item.tradeType;
            td4_carousel2.id = `td4_carousel2${item.id}`;
            row_carousel2.appendChild(td4_carousel2);

            const td5_carousel2 = document.createElement('td');
            td5_carousel2.textContent = item.entrySpot;
            td5_carousel2.id = `td5_carousel2${item.id}`;
            row_carousel2.appendChild(td5_carousel2);

            const td6_carousel2 = document.createElement('td');
            td6_carousel2.textContent = item.exitSpot;
            td6_carousel2.id = `td6_carousel2${item.id}`;
            row_carousel2.appendChild(td6_carousel2);

            const td7_carousel2 = document.createElement('td');
            td7_carousel2.textContent = item.buyPrice;
            td7_carousel2.id = `td7_carousel2${item.id}`;
            row_carousel2.appendChild(td7_carousel2);

            const td8_carousel2 = document.createElement('td');
            td8_carousel2.textContent = item.profitLoss;
            td8_carousel2.id = `td8_carousel2${item.id}`;
            row_carousel2.appendChild(td8_carousel2);

            const td9_carousel2 = document.createElement('td');
            td9_carousel2.textContent = item.status;
            td9_carousel2.id = `td9_carousel2${item.id}`;
            row_carousel2.appendChild(td9_carousel2);

            if (tbody_carousel2.firstChild) {
                tbody_carousel2.insertBefore(row_carousel2, tbody_carousel2.firstChild);
            } else {
                tbody_carousel2.appendChild(row_carousel2);
            }
        });
    }
    appendRows(backendData)
}

let log_timestamp_current_symbol_vol25 = null
let log_buy_timestamp_bot_symbol_vol25 = null
let log_sell_timestamp_bot_symbol_vol25 = null
let log_message10_symbol_vol25 = null
let log_message9_symbol_vol25 = null
let log_message8_symbol_vol25 = null
let log_message7_symbol_vol25 = null
let log_message6_symbol_vol25 = null
let log_message5_symbol_vol25 = null
let log_message4_symbol_vol25 = null
let log_message3_symbol_vol25 = null
let log_message2_symbol_vol25 = null
let log_message1_symbol_vol25 = null
let log_message_curr_symbol_vol25 = null
let log_message_curr_tick_symbol_vol25 = null
let log_message_last_digit_symbol_vol25 = null
let log_message_entry_tick_symbol_vol25 = null
let appended_symbol_vol25 = true
let log_id_symbol_vol25 = 0

function format_log_current_time_symbol_vol25() {
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

async function bot_log_symbol_vol25(last_ten_tick, last_nine_tick, last_eight_tick, last_seven_tick, last_six_tick, last_five_tick, last_four_tick, last_three_tick, last_two_tick, last_one_tick, current_tick, current_tick_full) {

    const backendData = [
        {
            log_message10_symbol_vol25: last_ten_tick,
            log_message9_symbol_vol25: last_nine_tick,
            log_message8_symbol_vol25: last_eight_tick,
            log_message7_symbol_vol25: last_seven_tick,
            log_message6_symbol_vol25: last_six_tick,
            log_message5_symbol_vol25: last_five_tick,
            log_message4_symbol_vol25: last_four_tick,
            log_message3_symbol_vol25: last_three_tick,
            log_message2_symbol_vol25: last_two_tick,
            log_message1_symbol_vol25: last_one_tick,
            log_message_curr_symbol_vol25: current_tick,
            log_message_curr_tick_symbol_vol25: current_tick_full,
        },
    ];

    const log_tbody_carousel2 = document.getElementById('log_tbody1_carousel2');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel2 = document.createElement('tr');
            row_carousel2.id = `log_bot_carousel2${log_id_symbol_vol25}`;

            const td1_carousel2 = document.createElement('td');
            td1_carousel2.textContent = log_timestamp_current_symbol_vol25;
            td1_carousel2.id = `log_td1_carousel2${log_id_symbol_vol25}`;
            td1_carousel2.classList.add('lod_td1_carousel2')
            row_carousel2.appendChild(td1_carousel2);

            const td2_carousel2 = document.createElement('td');

            if (log_message10_symbol_vol25 == null) {
                log_message10_symbol_vol25 = ''
            }
            if (log_message9_symbol_vol25 == null) {
                log_message9_symbol_vol25 = ''
            }
            if (log_message8_symbol_vol25 == null) {
                log_message8_symbol_vol25 = ''
            }
            if (log_message7_symbol_vol25 == null) {
                log_message7_symbol_vol25 = ''
            }
            if (log_message6_symbol_vol25 == null) {
                log_message6_symbol_vol25 = ''
            }
            if (log_message5_symbol_vol25 == null) {
                log_message5_symbol_vol25 = ''
            }

            if (log_message4_symbol_vol25 == null) {
                log_message4_symbol_vol25 = ''
            }

            if (log_message3_symbol_vol25 == null) {
                log_message3_symbol_vol25 = ''
            }

            if (log_message2_symbol_vol25 == null) {
                log_message2_symbol_vol25 = ''
            }

            if (log_message1_symbol_vol25 == null) {
                log_message1_symbol_vol25 = ''
            }

            if (log_message_curr_symbol_vol25 == null) {
                log_message_curr_symbol_vol25 = ''
            }

            td2_carousel2.textContent = `last ten ticks:  ${item.log_message10_symbol_vol25} ${item.log_message9_symbol_vol25} ${item.log_message8_symbol_vol25} ${item.log_message7_symbol_vol25} ${item.log_message6_symbol_vol25} ${item.log_message5_symbol_vol25} ${item.log_message4_symbol_vol25} ${item.log_message3_symbol_vol25} ${item.log_message2_symbol_vol25} ${item.log_message1_symbol_vol25}          current tick ${item.log_message_curr_symbol_vol25}    ${item.log_message_curr_tick_symbol_vol25}`;

            td2_carousel2.style.whiteSpace = 'pre'
            td2_carousel2.id = `log_td2_carousel2${log_id_symbol_vol25}`;
            td2_carousel2.classList.add('lod_td2_carousel2')
            row_carousel2.appendChild(td2_carousel2);

            const td3_carousel2 = document.createElement('td');
            td3_carousel2.textContent = 'this is the text'
            td3_carousel2.style.whiteSpace = 'pre'
            td3_carousel2.id = `log_td3_carousel2${log_id_symbol_vol25}`;
            td3_carousel2.classList.add('lod_td3_carousel2')
            row_carousel2.appendChild(td3_carousel2);

            if (log_tbody_carousel2.firstChild) {
                log_tbody_carousel2.insertBefore(row_carousel2, log_tbody_carousel2.firstChild);
                appended_symbol_vol25 = true
            } else {
                log_tbody_carousel2.appendChild(row_carousel2);
                appended_symbol_vol25 = true
            }
        });
    }
    appendRows(backendData)
}

async function bot_log_end_symbol_vol25(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td_carousel2 = document.getElementById(`log_td3_carousel2${log_id_symbol_vol25}`)

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

    log_buy_timestamp_bot_symbol_vol25 = formate_log_date(bot_buy_time_stamp)
    log_sell_timestamp_bot_symbol_vol25 = formate_log_date(bot_sell_time_stamp)

    if (target_td_carousel2) {
        target_td_carousel2.textContent = `buy_time:  ${log_buy_timestamp_bot_symbol_vol25}        sell_time:  ${log_sell_timestamp_bot_symbol_vol25}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

        log_id_symbol_vol25 += 1
    } else {
        
    }
}

let first_instance_symbol_vol25 = true

async function startBot_symbol_vol25(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber) {
    bot_is_running_or_stopped_symbol_vol25 = true;
    log_timestamp_current_symbol_vol25 = format_log_current_time_symbol_vol25()
    set_start_trade1_symbol_vol25(bot_is_running_or_stopped_symbol_vol25);
    bot_id_symbol_vol25 += 1;
    firstContractReceived_symbol_vol25 = false;
    end_slide_symbol_vol25 = true;
    bot_entry_spot_symbol_vol25 = '';
    bot_exit_spot_symbol_vol25 = '';
    bot_profit_loss_symbol_vol25 = '';
    bot_status_symbol_vol25 = 'pending';
    bot_log_symbol_vol25(lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
    await buy_bot_symbol_vol25(martingale, currentRandom);
    first_instance_symbol_vol25 = false
}

let bot_state_carousel2_symbol_vol25 = "stop_bot"
let all_bot_start_stop1_symbol_vol25 = null
let all_bot_start_stop1_cookie_symbol_vol25 = null
let buttonContainer_carousel2_symbol_vol25 = document.querySelector('.click_change_carousel2');

function togglePlayPause_symbol_vol25() {
    var play_button_carousel2 = document.getElementById('play_button_carousel2');
    var pause_button_carousel2 = document.getElementById('pause_button_carousel2');
    if (play_button_carousel2) {
        bot_state_carousel2_symbol_vol25 = "stop_bot"
        play_button_carousel2.parentNode.removeChild(play_button_carousel2);

        var pause_button_carousel2 = document.createElement('div');
        pause_button_carousel2.id = 'pause_button_carousel2';
        pause_button_carousel2.className = 'pause_button_carousel2';
        pause_button_carousel2.innerHTML = '&#10074;&#10074;';
        buttonContainer_carousel2_symbol_vol25.appendChild(pause_button_carousel2);
        document.getElementById('bot_state_carousel2').textContent = 'Bot has stopped';
    } else if (pause_button_carousel2) {
        bot_state_carousel2_symbol_vol25 = "start_bot"
        pause_button_carousel2.parentNode.removeChild(pause_button_carousel2);

        var play_button_carousel2 = document.createElement('div');
        play_button_carousel2.id = 'play_button_carousel2';
        play_button_carousel2.className = 'play_button_carousel2';
        play_button_carousel2.innerHTML = '&#9654;';
        buttonContainer_carousel2_symbol_vol25.appendChild(play_button_carousel2);
        document.getElementById('bot_state_carousel2').textContent = 'Bot is running';
    }
}
buttonContainer_carousel2_symbol_vol25.addEventListener('click', togglePlayPause_symbol_vol25);
function getRandom_symbol_vol25(strNumber) {
    return randomNumber_symbol_vol25 = strNumber.charAt(strNumber.length - 1);
}

let currentvol_carousel2_symbol_vol25 = null
let currentvol2_carousel2_symbol_vol25 = null
let martingale_active_carousel2_symbol_vol25 = null
let bot_set_carousel2_symbol_vol25 = null
let set_bot_jump_carousel2_symbol_vol25 = null
let initial_set_jump_symbol_vol25 = true
let currentvol_carousel2_cookie_symbol_vol25 = null
let currentvol2_carousel2_cookie_symbol_vol25 = null
let martingale_active_carousel2_cookie_symbol_vol25 = null
let bot_set_carousel2_cookie_symbol_vol25 = null
let set_bot_jump_carousel2_cookie_symbol_vol25 = null
let initial_set_jump_cookie_symbol_vol25 = true
let currentRandom_symbol_vol25 = null
let lastNumber1_symbol_vol25 = currentRandom_symbol_vol25;
let lastNumber2_symbol_vol25 = lastNumber1_symbol_vol25;
let lastNumber3_symbol_vol25 = lastNumber2_symbol_vol25;
let lastNumber4_symbol_vol25 = lastNumber3_symbol_vol25;
let lastNumber5_symbol_vol25 = lastNumber4_symbol_vol25;
let lastNumber6_symbol_vol25 = lastNumber5_symbol_vol25;
let lastNumber7_symbol_vol25 = lastNumber6_symbol_vol25;
let lastNumber8_symbol_vol25 = lastNumber7_symbol_vol25;
let lastNumber9_symbol_vol25 = lastNumber8_symbol_vol25;
let lastNumber10_symbol_vol25 = lastNumber9_symbol_vol25;

const tickResponse_symbol_vol25 = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', tickResponse_symbol_vol25, false);
        await api.disconnect();
    }

    function getRandom1(strNumber1) {
        return randomNumber_symbol_vol25 = strNumber1.charAt(strNumber1.length - 1);
    }

    lastNumber10_symbol_vol25 = lastNumber9_symbol_vol25
    lastNumber9_symbol_vol25 = lastNumber8_symbol_vol25
    lastNumber8_symbol_vol25 = lastNumber7_symbol_vol25
    lastNumber7_symbol_vol25 = lastNumber6_symbol_vol25
    lastNumber6_symbol_vol25 = lastNumber5_symbol_vol25
    lastNumber5_symbol_vol25 = lastNumber4_symbol_vol25
    lastNumber4_symbol_vol25 = lastNumber3_symbol_vol25
    lastNumber3_symbol_vol25 = lastNumber2_symbol_vol25
    lastNumber2_symbol_vol25 = lastNumber1_symbol_vol25
    lastNumber1_symbol_vol25 = currentRandom_symbol_vol25

    if (data.msg_type === 'tick') {
        let bot_start_stop = bot_state_carousel2_symbol_vol25

        subscriptionId_symbol_vol25 = data.subscription.id;
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

        if(data.echo_req.ticks === "R_25"){
            strNumber_symbol_vol25 = formatToThreeDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_vol25 = getRandom1(strNumber_symbol_vol25);
        }

        stream25_carousel2_symbol_vol25.textContent = strNumber_symbol_vol25
        all_bot_start_stop1_symbol_vol25 = localStorage.getItem('all_bot_start_stop1')
        all_bot_start_stop1_cookie_symbol_vol25 = getCookie('all_bot_start_stop1')
        currentvol_carousel2_symbol_vol25 = localStorage.getItem('bot_current_vol1_carousel2');
        currentvol2_carousel2_symbol_vol25 = localStorage.getItem('bot_current_vol2_carousel2');
        martingale_active_carousel2_symbol_vol25 = localStorage.getItem('martingale_carousel2');
        bot_set_carousel2_symbol_vol25 = localStorage.getItem('bot_set_carousel2');
        set_bot_jump_carousel2_symbol_vol25 = localStorage.getItem('bot_jump_carousel2')
        currentvol_carousel2_cookie_symbol_vol25 = getCookie('bot_current_vol1_carousel2');
        currentvol2_carousel2_cookie_symbol_vol25 = getCookie('bot_current_vol2_carousel2');
        martingale_active_carousel2_cookie_symbol_vol25 = getCookie('martingale_carousel2');
        bot_set_carousel2_cookie_symbol_vol25 = getCookie('bot_set_carousel2');
        set_bot_jump_carousel2_cookie_symbol_vol25 = getCookie('bot_jump_carousel2')

        if (((set_bot_jump_carousel2_symbol_vol25 && set_bot_jump_carousel2_symbol_vol25 > 0) && contract_status2_symbol_vol25 == 'lost') || ((set_bot_jump_carousel2_cookie_symbol_vol25 && set_bot_jump_carousel2_cookie_symbol_vol25 > 0) && contract_status2_symbol_vol25 == 'lost')) {
            bot_set_carousel2_symbol_vol25 = (parseInt(bot_set_carousel2_symbol_vol25) + parseInt(set_bot_jump_carousel2_symbol_vol25)) !== null ? (parseInt(bot_set_carousel2_symbol_vol25) + parseInt(set_bot_jump_carousel2_symbol_vol25)) : (parseInt(bot_set_carousel2_cookie_symbol_vol25) + parseInt(set_bot_jump_carousel2_cookie_symbol_vol25))
            contract_status2_symbol_vol25 == 'reset'
        } else if ((initial_set_jump_symbol_vol25 == true || (contract_status2_symbol_vol25 == 'won' && (set_bot_jump_carousel2_symbol_vol25 && set_bot_jump_carousel2_symbol_vol25 > 0))) || (initial_set_jump_cookie_symbol_vol25 == true || (contract_status2_symbol_vol25 == 'won' && (set_bot_jump_carousel2_cookie_symbol_vol25 && set_bot_jump_carousel2_cookie_symbol_vol25 > 0)))) {
            bot_set_carousel2_symbol_vol25 = localStorage.getItem('bot_set_carousel2') ? localStorage.getItem('bot_set_carousel2') : getCookie('bot_set_carousel2');
            initial_set_jump_symbol_vol25 = false
            initial_set_jump_cookie_symbol_vol25 = false
        } else {
            bot_set_carousel2_symbol_vol25 = localStorage.getItem('bot_set_carousel2') ? localStorage.getItem('bot_set_carousel2') : getCookie("bot_set_carousel2");
        }
        let bot_count = bot_id_symbol_vol25

        const tag5_carousel2 = document.getElementById(`td5_carousel2${bot_count}`);
        const tag6_carousel2 = document.getElementById(`td6_carousel2${bot_count}`);
        const tag8_carousel2 = document.getElementById(`td8_carousel2${bot_count}`);
        const tag9_carousel2 = document.getElementById(`td9_carousel2${bot_count}`);

        if (currentRandom_symbol_vol25 !== null && lastNumber1_symbol_vol25 !== null && lastNumber2_symbol_vol25 !== null) {
            if ((tag5_carousel2 && tag6_carousel2 && tag8_carousel2 && tag9_carousel2) || first_instance_symbol_vol25 == true) {
                if (currentRandom_symbol_vol25 && (first_instance_symbol_vol25 == true || (tag5_carousel2.textContent.trim() !== '' && tag6_carousel2.textContent.trim() !== '' && tag8_carousel2.textContent.trim() !== '' && tag9_carousel2.textContent.trim() !== '')) && (bot_set_carousel2_symbol_vol25 == 1 || bot_set_carousel2_cookie_symbol_vol25 == 1)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25 == 'start_bots') && ((currentvol_carousel2_symbol_vol25 == 5 && currentvol2_carousel2_symbol_vol25 == 5) || (currentvol_carousel2_cookie_symbol_vol25 == 5 && currentvol2_carousel2_cookie_symbol_vol25 == 5))) {
                        startBot_symbol_vol25(martingale_active_carousel2_cookie_symbol_vol25, lastNumber10_symbol_vol25, lastNumber9_symbol_vol25, lastNumber8_symbol_vol25, lastNumber7_symbol_vol25, lastNumber6_symbol_vol25, lastNumber5_symbol_vol25, lastNumber4_symbol_vol25, lastNumber3_symbol_vol25, lastNumber2_symbol_vol25, lastNumber1_symbol_vol25, currentRandom_symbol_vol25, strNumber_symbol_vol25)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25 !== null && lastNumber1_symbol_vol25 !== null && lastNumber2_symbol_vol25 !== null) {
            if ((tag5_carousel2 && tag6_carousel2 && tag8_carousel2 && tag9_carousel2) || first_instance_symbol_vol25 == true) {
                if (lastNumber1_symbol_vol25 == currentRandom_symbol_vol25 && (first_instance_symbol_vol25 == true || (tag5_carousel2.textContent.trim() !== '' && tag6_carousel2.textContent.trim() !== '' && tag8_carousel2.textContent.trim() !== '' && tag9_carousel2.textContent.trim() !== '')) && (bot_set_carousel2_symbol_vol25 == 2 || bot_set_carousel2_cookie_symbol_vol25 == 2)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25 == 'start_bots') && ((currentvol_carousel2_symbol_vol25 == 5 && currentvol2_carousel2_symbol_vol25 == 5) || (currentvol_carousel2_cookie_symbol_vol25 == 5 && currentvol2_carousel2_cookie_symbol_vol25 == 5))) {
                        startBot_symbol_vol25(martingale_active_carousel2_cookie_symbol_vol25, lastNumber10_symbol_vol25, lastNumber9_symbol_vol25, lastNumber8_symbol_vol25, lastNumber7_symbol_vol25, lastNumber6_symbol_vol25, lastNumber5_symbol_vol25, lastNumber4_symbol_vol25, lastNumber3_symbol_vol25, lastNumber2_symbol_vol25, lastNumber1_symbol_vol25, currentRandom_symbol_vol25, strNumber_symbol_vol25)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25 !== null && lastNumber1_symbol_vol25 !== null && lastNumber2_symbol_vol25 !== null) {
            if ((tag5_carousel2 && tag6_carousel2 && tag8_carousel2 && tag9_carousel2) || first_instance_symbol_vol25 == true) {
                if (lastNumber2_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber1_symbol_vol25 == currentRandom_symbol_vol25 && (first_instance_symbol_vol25 == true || (tag5_carousel2.textContent.trim() !== '' && tag6_carousel2.textContent.trim() !== '' && tag8_carousel2.textContent.trim() !== '' && tag9_carousel2.textContent.trim() !== '')) && (bot_set_carousel2_symbol_vol25 == 3 || bot_set_carousel2_cookie_symbol_vol25 == 3)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25 == 'start_bots') && ((currentvol_carousel2_symbol_vol25 == 5 && currentvol2_carousel2_symbol_vol25 == 5) || (currentvol_carousel2_cookie_symbol_vol25 == 5 && currentvol2_carousel2_cookie_symbol_vol25 == 5))) {
                        startBot_symbol_vol25(martingale_active_carousel2_cookie_symbol_vol25, lastNumber10_symbol_vol25, lastNumber9_symbol_vol25, lastNumber8_symbol_vol25, lastNumber7_symbol_vol25, lastNumber6_symbol_vol25, lastNumber5_symbol_vol25, lastNumber4_symbol_vol25, lastNumber3_symbol_vol25, lastNumber2_symbol_vol25, lastNumber1_symbol_vol25, currentRandom_symbol_vol25, strNumber_symbol_vol25)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25 !== null && lastNumber1_symbol_vol25 !== null && lastNumber2_symbol_vol25 !== null) {
            if ((tag5_carousel2 && tag6_carousel2 && tag8_carousel2 && tag9_carousel2) || first_instance_symbol_vol25 == true) {
                if (lastNumber3_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber2_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber1_symbol_vol25 == currentRandom_symbol_vol25 && (first_instance_symbol_vol25 == true || (tag5_carousel2.textContent.trim() !== '' && tag6_carousel2.textContent.trim() !== '' && tag8_carousel2.textContent.trim() !== '' && tag9_carousel2.textContent.trim() !== '')) && (bot_set_carousel2_symbol_vol25 == 4 || bot_set_carousel2_cookie_symbol_vol25 == 4)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25 == 'start_bots') && ((currentvol_carousel2_symbol_vol25 == 5 && currentvol2_carousel2_symbol_vol25 == 5) || (currentvol_carousel2_cookie_symbol_vol25 == 5 && currentvol2_carousel2_cookie_symbol_vol25 == 5))) {
                        startBot_symbol_vol25(martingale_active_carousel2_cookie_symbol_vol25, lastNumber10_symbol_vol25, lastNumber9_symbol_vol25, lastNumber8_symbol_vol25, lastNumber7_symbol_vol25, lastNumber6_symbol_vol25, lastNumber5_symbol_vol25, lastNumber4_symbol_vol25, lastNumber3_symbol_vol25, lastNumber2_symbol_vol25, lastNumber1_symbol_vol25, currentRandom_symbol_vol25, strNumber_symbol_vol25)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25 !== null && lastNumber1_symbol_vol25 !== null && lastNumber2_symbol_vol25 !== null) {
            if ((tag5_carousel2 && tag6_carousel2 && tag8_carousel2 && tag9_carousel2) || first_instance_symbol_vol25 == true) {
                if (lastNumber4_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber3_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber2_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber1_symbol_vol25 == currentRandom_symbol_vol25 && (first_instance_symbol_vol25 == true || (tag5_carousel2.textContent.trim() !== '' && tag6_carousel2.textContent.trim() !== '' && tag8_carousel2.textContent.trim() !== '' && tag9_carousel2.textContent.trim() !== '')) && (bot_set_carousel2_symbol_vol25 == 5 || bot_set_carousel2_cookie_symbol_vol25 == 5)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25 == 'start_bots') && ((currentvol_carousel2_symbol_vol25 == 5 && currentvol2_carousel2_symbol_vol25 == 5) || (currentvol_carousel2_cookie_symbol_vol25 == 5 && currentvol2_carousel2_cookie_symbol_vol25 == 5))) {
                        startBot_symbol_vol25(martingale_active_carousel2_cookie_symbol_vol25, lastNumber10_symbol_vol25, lastNumber9_symbol_vol25, lastNumber8_symbol_vol25, lastNumber7_symbol_vol25, lastNumber6_symbol_vol25, lastNumber5_symbol_vol25, lastNumber4_symbol_vol25, lastNumber3_symbol_vol25, lastNumber2_symbol_vol25, lastNumber1_symbol_vol25, currentRandom_symbol_vol25, strNumber_symbol_vol25)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25 !== null && lastNumber1_symbol_vol25 !== null && lastNumber2_symbol_vol25 !== null) {
            if ((tag5_carousel2 && tag6_carousel2 && tag8_carousel2 && tag9_carousel2) || first_instance_symbol_vol25 == true) {
                if (lastNumber5_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber4_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber3_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber2_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber1_symbol_vol25 == currentRandom_symbol_vol25 && (first_instance_symbol_vol25 == true || (tag5_carousel2.textContent.trim() !== '' && tag6_carousel2.textContent.trim() !== '' && tag8_carousel2.textContent.trim() !== '' && tag9_carousel2.textContent.trim() !== '')) && (bot_set_carousel2_symbol_vol25 == 6 || bot_set_carousel2_cookie_symbol_vol25 == 6)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25 == 'start_bots') && ((currentvol_carousel2_symbol_vol25 == 5 && currentvol2_carousel2_symbol_vol25 == 5) || (currentvol_carousel2_cookie_symbol_vol25 == 5 && currentvol2_carousel2_cookie_symbol_vol25 == 5))) {
                        startBot_symbol_vol25(martingale_active_carousel2_cookie_symbol_vol25, lastNumber10_symbol_vol25, lastNumber9_symbol_vol25, lastNumber8_symbol_vol25, lastNumber7_symbol_vol25, lastNumber6_symbol_vol25, lastNumber5_symbol_vol25, lastNumber4_symbol_vol25, lastNumber3_symbol_vol25, lastNumber2_symbol_vol25, lastNumber1_symbol_vol25, currentRandom_symbol_vol25, strNumber_symbol_vol25)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        
        if (currentRandom_symbol_vol25 !== null && lastNumber1_symbol_vol25 !== null && lastNumber2_symbol_vol25 !== null) {
            if ((tag5_carousel2 && tag6_carousel2 && tag8_carousel2 && tag9_carousel2) || first_instance_symbol_vol25 == true) {
                if (lastNumber6_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber5_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber4_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber3_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber2_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber1_symbol_vol25 == currentRandom_symbol_vol25 && (first_instance_symbol_vol25 == true || (tag5_carousel2.textContent.trim() !== '' && tag6_carousel2.textContent.trim() !== '' && tag8_carousel2.textContent.trim() !== '' && tag9_carousel2.textContent.trim() !== '')) && (bot_set_carousel2_symbol_vol25 == 7 || bot_set_carousel2_cookie_symbol_vol25 == 7)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25 == 'start_bots') && ((currentvol_carousel2_symbol_vol25 == 5 && currentvol2_carousel2_symbol_vol25 == 5) || (currentvol_carousel2_cookie_symbol_vol25 == 5 && currentvol2_carousel2_cookie_symbol_vol25 == 5))) {
                        startBot_symbol_vol25(martingale_active_carousel2_cookie_symbol_vol25, lastNumber10_symbol_vol25, lastNumber9_symbol_vol25, lastNumber8_symbol_vol25, lastNumber7_symbol_vol25, lastNumber6_symbol_vol25, lastNumber5_symbol_vol25, lastNumber4_symbol_vol25, lastNumber3_symbol_vol25, lastNumber2_symbol_vol25, lastNumber1_symbol_vol25, currentRandom_symbol_vol25, strNumber_symbol_vol25)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25 !== null && lastNumber1_symbol_vol25 !== null && lastNumber2_symbol_vol25 !== null) {
            if ((tag5_carousel2 && tag6_carousel2 && tag8_carousel2 && tag9_carousel2) || first_instance_symbol_vol25 == true) {
                if (lastNumber7_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber6_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber5_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber4_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber3_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber2_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber1_symbol_vol25 == currentRandom_symbol_vol25 && (first_instance_symbol_vol25 == true || (tag5_carousel2.textContent.trim() !== '' && tag6_carousel2.textContent.trim() !== '' && tag8_carousel2.textContent.trim() !== '' && tag9_carousel2.textContent.trim() !== '')) && (bot_set_carousel2_symbol_vol25 == 8 || bot_set_carousel2_cookie_symbol_vol25 == 8)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25 == 'start_bots') && ((currentvol_carousel2_symbol_vol25 == 5 && currentvol2_carousel2_symbol_vol25 == 5) || (currentvol_carousel2_cookie_symbol_vol25 == 5 && currentvol2_carousel2_cookie_symbol_vol25 == 5))) {
                        startBot_symbol_vol25(martingale_active_carousel2_cookie_symbol_vol25, lastNumber10_symbol_vol25, lastNumber9_symbol_vol25, lastNumber8_symbol_vol25, lastNumber7_symbol_vol25, lastNumber6_symbol_vol25, lastNumber5_symbol_vol25, lastNumber4_symbol_vol25, lastNumber3_symbol_vol25, lastNumber2_symbol_vol25, lastNumber1_symbol_vol25, currentRandom_symbol_vol25, strNumber_symbol_vol25)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25 !== null && lastNumber1_symbol_vol25 !== null && lastNumber2_symbol_vol25 !== null) {
            if ((tag5_carousel2 && tag6_carousel2 && tag8_carousel2 && tag9_carousel2) || first_instance_symbol_vol25 == true) {
                if (lastNumber8_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber7_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber6_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber5_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber4_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber3_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber2_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber1_symbol_vol25 == currentRandom_symbol_vol25 && (first_instance_symbol_vol25 == true || (tag5_carousel2.textContent.trim() !== '' && tag6_carousel2.textContent.trim() !== '' && tag8_carousel2.textContent.trim() !== '' && tag9_carousel2.textContent.trim() !== '')) && (bot_set_carousel2_symbol_vol25 == 9 || bot_set_carousel2_cookie_symbol_vol25 == 9)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25 == 'start_bots') && ((currentvol_carousel2_symbol_vol25 == 5 && currentvol2_carousel2_symbol_vol25 == 5) || (currentvol_carousel2_cookie_symbol_vol25 == 5 && currentvol2_carousel2_cookie_symbol_vol25 == 5))) {
                        startBot_symbol_vol25(martingale_active_carousel2_cookie_symbol_vol25, lastNumber10_symbol_vol25, lastNumber9_symbol_vol25, lastNumber8_symbol_vol25, lastNumber7_symbol_vol25, lastNumber6_symbol_vol25, lastNumber5_symbol_vol25, lastNumber4_symbol_vol25, lastNumber3_symbol_vol25, lastNumber2_symbol_vol25, lastNumber1_symbol_vol25, currentRandom_symbol_vol25, strNumber_symbol_vol25)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25 !== null && lastNumber1_symbol_vol25 !== null && lastNumber2_symbol_vol25 !== null) {
            if ((tag5_carousel2 && tag6_carousel2 && tag8_carousel2 && tag9_carousel2) || first_instance_symbol_vol25 == true) {
                if (lastNumber9_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber8_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber7_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber6_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber5_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber4_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber3_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber2_symbol_vol25 == currentRandom_symbol_vol25 && lastNumber1_symbol_vol25 == currentRandom_symbol_vol25 && (first_instance_symbol_vol25 == true || (tag5_carousel2.textContent.trim() !== '' && tag6_carousel2.textContent.trim() !== '' && tag8_carousel2.textContent.trim() !== '' && tag9_carousel2.textContent.trim() !== '')) && (bot_set_carousel2_symbol_vol25 == 10 || bot_set_carousel2_cookie_symbol_vol25 == 10)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25 == 'start_bots') && ((currentvol_carousel2_symbol_vol25 == 5 && currentvol2_carousel2_symbol_vol25 == 5) || (currentvol_carousel2_cookie_symbol_vol25 == 5 && currentvol2_carousel2_cookie_symbol_vol25 == 5))) {
                        startBot_symbol_vol25(martingale_active_carousel2_cookie_symbol_vol25, lastNumber10_symbol_vol25, lastNumber9_symbol_vol25, lastNumber8_symbol_vol25, lastNumber7_symbol_vol25, lastNumber6_symbol_vol25, lastNumber5_symbol_vol25, lastNumber4_symbol_vol25, lastNumber3_symbol_vol25, lastNumber2_symbol_vol25, lastNumber1_symbol_vol25, currentRandom_symbol_vol25, strNumber_symbol_vol25)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }
    }
};

window.addEventListener('load', function () {
    duration_amount_cookie_symbol_vol25 = getCookie('duration_amount_cookie');
    stake_amount_cookie_symbol_vol25 = getCookie('stake_amount_cookie');
    duration_unit_cookie_symbol_vol25 = getCookie('duration_unit_cookie');
    symbol_vol_cookie_symbol_vol25 = getCookie('symbol_vol_cookie');
    currency_cookie_symbol_vol25 = getCookie('ActiveCurrency')
    contract_text_cookie_symbol_vol25 = getCookie('contract_text_cookie');
    stake_or_payout_cookie_symbol_vol25 = getCookie('stake_or_payout_cookie')
    last_digit_prediction_cookie_symbol_vol25 = getCookie('last_digit_prediction_cookie')
    stake_amount_default_symbol_vol25 = getCookie('stake_amount_default')

    if (last_digit_prediction_cookie_symbol_vol25) {
        last_digit_prediction_or_barrier_symbol_vol25 = last_digit_prediction_or_barrier_symbol_vol25
    } else {
        let numericValue = last_digit_input_symbol_vol25.value
        last_digit_prediction_or_barrier_symbol_vol25 = numericValue
    }
    if (symbol_vol_cookie_symbol_vol25) {
        symbol_vol_symbol_vol25 = symbol_vol_cookie_symbol_vol25;
    } else {
        symbol_vol_symbol_vol25 = "R_25";
    }
    if (duration_unit_cookie_symbol_vol25) {
        duration_unit_symbol_vol25 = duration_unit_cookie_symbol_vol25;
    } else {
        duration_unit_symbol_vol25 = "t";
    }
    if (duration_amount_cookie_symbol_vol25) {
        duration_amount_symbol_vol25 = parseInt(duration_amount_cookie_symbol_vol25, 10);
    } else {
        duration_amount_symbol_vol25 = 1;
    }
    if (stake_amount_cookie_symbol_vol25) {
        stake_amount_symbol_vol25 = parseFloat(stake_amount_cookie_symbol_vol25);
    } else {
        stake_amount_symbol_vol25 = 10;
    }
    if (stake_amount_default_symbol_vol25) {
        stake_amount_default_symbol_vol25 = parseFloat(stake_amount_default_symbol_vol25);
    } else {
        stake_amount_default_symbol_vol25 = 10;
    }
    if (currency_cookie_symbol_vol25) {
        currency_symbol_vol25 = currency_cookie_symbol_vol25;
    } else {
        currency_symbol_vol25 = "USD";
    }
    if (contract_text_cookie_symbol_vol25) {
        contract_symbol_vol25 = contract_text_cookie_symbol_vol25;
    } else {
        contract_symbol_vol25 = "Matches/Differs";
    }
    if (stake_or_payout_cookie_symbol_vol25) {
        stake_or_payout_symbol_vol25 = stake_or_payout_cookie_symbol_vol25;
    } else {
        stake_or_payout_symbol_vol25 = "stake";
    }

    initializeApi(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response_symbol_General) {
            clearInterval(getAwaitingResponses)
        } else {
            
        }
    }, 2000);
});

async function order_propose_symbol_vol25(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
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
                let tooltip = document.getElementById('tooltiptext25');
                tooltip.textContent = data.error.message;
                tooltip.classList.add('tooltiptext10')
                
                connection.removeEventListener('message', proposalResponse, false);
                await api.disconnect();
                reject(new Error('Error in proposal'));
            } else if (data.msg_type === 'proposal') {

                proposal_id_symbol_vol25 = data.proposal.id;
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

const unsubscribeProposal_symbol_vol25 = () => {
    connection.removeEventListener('message', proposalResponse_symbol_vol25, false);
};

function convertTimestampTo12HourTime_symbol_vol25(timestamp) {
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

function formatNumberAndBoldLastDecimal_symbol_vol25(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart) {
        let lastDecimalDigit = decimalPart.slice(-1);
        decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
    } 
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}

let contract_status_html_symbol_vol25 = document.getElementById('contract_status_carousel2') 
let end_tic_off_trade_symbol_vol25 = document.getElementById('end_tic_off_trade_carousel2')            
let price_after_trade_figure_amount_symbol_vol25 = document.getElementById('price_after_trade_figure_amount_carousel2') 
let profit_figure_amount_symbol_vol25 = document.getElementById('profit_figure_amount_carousel2') 
let buy_price_figure_amount_symbol_vol25 = document.getElementById('buy_price_figure_amount_carousel2') 
let result_currency_html_symbol_vol25 = document.querySelectorAll('.result_currency')
let transaction_refrence_figure_symbol_vol25 = document.getElementById('transaction_refrence_figure_carousel2') 
let trade_start_time_symbol_vol25 = document.getElementById('trade_start_time_carousel2') 
let buy_price_text_symbol_vol25 = document.getElementById('buy_price_text_carousel2') 
let price_after_trade_text_symbol_vol25 = document.getElementById('price_after_trade_text_carousel2') 
let profit_text_symbol_vol25 = document.getElementById('profit_text_carousel2') 
let durr_amount_prop_count_symbol_vol25 = document.getElementById('durr_amount_prop_count_carousel2') 
let durr_amount_prop_symbol_vol25 = document.getElementById('durr_amount_prop_carousel2') 
let countdown_trade_symbol_vol25 = 0
let countdown_trade2_symbol_vol25 = 0

function before_trade_symbol_vol25() {
    countdown_trade_symbol_vol25 = 0
    let allDigits = document.querySelectorAll('.ldgs_carousel2')
    let buy_price_text = document.getElementById('buy_price_text_carousel2')
    let price_after_trade_text = document.getElementById('price_after_trade_text_carousel2')
    let profit_text = document.getElementById('profit_text_carousel2')
    let slide_trade_result = document.getElementById('slide_trade_result_carousel2')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel2')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel2')
    let profit_figure_amount = document.getElementById('profit_figure_amount_carousel2')
    contract_status_html_symbol_vol25.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count_symbol_vol25.textContent = countdown_trade_symbol_vol25
    durr_amount_prop_symbol_vol25.textContent = duration_amount_symbol_vol25
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
            if (digit.textContent != (last_digit_prediction_or_barrier_symbol_vol25)) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound == 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier_symbol_vol25) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}

function after_trade_symbol_vol25(status, endDigit) {
    let slide_trade_result = document.getElementById('slide_trade_result_carousel2')
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

function formate_date_symbol_vol25(datein) {
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

let allProposalOpenContract_symbol_vol25 = []
let longcodeProp_symbol_vol25 = null
let contract_ids_buy_symbol_vol25 = null
let contract_status_symbol_vol25 = null
let last_tick_symbol_vol25 = null
let profit_or_loss_symbol_vol25 = null
let final_price_symbol_vol25 = null
let payout_result_symbol_vol25 = null
let buy_price_symbol_vol25 = null
let contract_currency_symbol_vol25 = null
let time_of_trade_symbol_vol25 = null
let every_tick_symbol_vol25 = null
let contract_id_symbol_vol25 = null

let allProposalOpenContract2_symbol_vol25 = []
let longcodeProp2_symbol_vol25 = null
let contract_ids_buy2_symbol_vol25 = null
let contract_ids_sell2_symbol_vol25 = null
let contract_status2_symbol_vol25 = null
let last_tick2_symbol_vol25 = null
let profit_or_loss2_symbol_vol25 = null
let final_price2_symbol_vol25 = null
let payout_result2_symbol_vol25 = null
let buy_price2_symbol_vol25 = null
let contract_currency2_symbol_vol25 = null
let time_of_trade2_symbol_vol25 = null
let every_tick2_symbol_vol25 = null

function open_proposal_actions2_symbol_vol25(data) {
    if (data.proposal_open_contract.contract_id == contract_id2_symbol_vol25) {
        set_middle_trade1_symbol_vol25(bot_is_running_or_stopped_symbol_vol25)
        bot_buy_start_time_symbol_vol25 = formate_date_symbol_vol25(data.proposal_open_contract.date_start)
        bot_buy_transaction_id_symbol_vol25 = data.proposal_open_contract.transaction_ids.buy
        bot_trade_type_symbol_vol25 = data.proposal_open_contract.contract_type
        bot_buy_price_symbol_vol25 = data.proposal_open_contract.buy_price
        bot_status_symbol_vol25 = data.proposal_open_contract.status == 'open' ? 'Pending' : data.proposal_open_contract.status
        bot_contract_id_symbol_vol25 = data.proposal_open_contract.contract_id
        start_trade_ref_symbol_vol25(bot_buy_price_symbol_vol25)

        if (firstContractReceived_symbol_vol25 == false) {
            append_result_symbol_vol25(bot_id_symbol_vol25, bot_buy_start_time_symbol_vol25, bot_buy_transaction_id_symbol_vol25, bot_trade_type_symbol_vol25, bot_buy_price_symbol_vol25, bot_status_symbol_vol25);
            firstContractReceived_symbol_vol25 = true
        }

        longcodeProp2_symbol_vol25 = data.proposal_open_contract.longcode
        allProposalOpenContract2_symbol_vol25.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information_carousel2').textContent = longcodeProp2_symbol_vol25

        if (allProposalOpenContract2_symbol_vol25.length > 0 && allProposalOpenContract2_symbol_vol25[allProposalOpenContract2_symbol_vol25.length - 1].length > 0) {
            let lastSubArray2 = allProposalOpenContract2_symbol_vol25[allProposalOpenContract2_symbol_vol25.length - 1];
            let lastElementOfLastSubArray2 = lastSubArray2[lastSubArray2.length - 1].tick_display_value;
            let numberString2 = lastElementOfLastSubArray2.toString();
            let lastCharacter2 = numberString2[numberString2.length - 1];
            handleNewNumber_symbol_vol25(lastCharacter2);
            every_tick2_symbol_vol25 = lastElementOfLastSubArray2
            end_tic_off_trade_symbol_vol25.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol25(every_tick2_symbol_vol25);
            if (countdown_trade2_symbol_vol25 < duration_amount_symbol_vol25) {
                countdown_trade2_symbol_vol25 += 1
                durr_amount_prop_count_symbol_vol25.textContent = countdown_trade_symbol_vol25
            }
            if (data.proposal_open_contract.is_expired == 1 && end_slide_symbol_vol25 == true) {
                set_end_trade1_symbol_vol25(bot_is_running_or_stopped_symbol_vol25)
                end_slide_symbol_vol25 = false
            }
            contract_ids_buy2_symbol_vol25 = data.proposal_open_contract.transaction_ids.buy
            if (contract_ids_buy2_symbol_vol25) {
                middle_trade_ref_symbol_vol25(contract_ids_buy2_symbol_vol25)
            }
            if (data.proposal_open_contract.status !== 'open') {
                let circle2_carousel2 = document.getElementById('circle2_carousel2')
                circle2_carousel2.classList.remove('circle_shadow_carousel2')
                bot_status_symbol_vol25 = data.proposal_open_contract.status
                bot_entry_spot_symbol_vol25 = data.proposal_open_contract.entry_tick
                bot_exit_spot_symbol_vol25 = data.proposal_open_contract.exit_tick
                bot_profit_loss_symbol_vol25 = data.proposal_open_contract.profit
                contract_status2_symbol_vol25 = data.proposal_open_contract.status
                last_tick2_symbol_vol25 = lastElementOfLastSubArray2
                profit_or_loss2_symbol_vol25 = data.proposal_open_contract.profit
                payout_result2_symbol_vol25 = data.proposal_open_contract.payout
                buy_price2_symbol_vol25 = data.proposal_open_contract.buy_price
                contract_currency2_symbol_vol25 = data.proposal_open_contract.currency
                contract_ids_buy2_symbol_vol25 = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2_symbol_vol25 = data.proposal_open_contract.expiry_time
                contract_ids_sell2_symbol_vol25 = data.proposal_open_contract.transaction_ids.sell

                end_trade_ref_symbol_vol25(contract_ids_sell2_symbol_vol25)
                if (profit_or_loss2_symbol_vol25 < 0) {
                    final_price2_symbol_vol25 = '0.00'
                } else if (profit_or_loss2_symbol_vol25 > 0) {
                    final_price2_symbol_vol25 = payout_result2_symbol_vol25
                } else {
                    
                }
                if (contract_status2_symbol_vol25 == 'won' && !wonEncountered_symbol_vol25) {
                    bot_total_wins_symbol_vol25 = bot_total_wins_symbol_vol25 + 1;
                    bot_total_profit_loss_symbol_vol25 = bot_total_profit_loss_symbol_vol25 + profit_or_loss2_symbol_vol25;
                    bot_total_stake_symbol_vol25 = bot_total_stake_symbol_vol25 + buy_price2_symbol_vol25
                    bot_total_runs_symbol_vol25 = bot_total_runs_symbol_vol25 + 1;
                    bot_total_payout_symbol_vol25 = bot_total_payout_symbol_vol25 + payout_result2_symbol_vol25;
                    add_after_trade_symbol_vol25(bot_id_symbol_vol25, contract_id2_symbol_vol25, bot_contract_id_symbol_vol25, bot_entry_spot_symbol_vol25, bot_exit_spot_symbol_vol25, bot_profit_loss_symbol_vol25, bot_status_symbol_vol25, bot_total_runs_symbol_vol25, bot_total_stake_symbol_vol25, bot_total_payout_symbol_vol25, bot_total_wins_symbol_vol25, bot_total_loss_symbol_vol25, bot_total_profit_loss_symbol_vol25);
                    wonEncountered_symbol_vol25 = true;
                } else if (contract_status2_symbol_vol25 == 'lost') {
                    bot_total_loss_symbol_vol25 = bot_total_loss_symbol_vol25 + 1;
                    bot_total_profit_loss_symbol_vol25 = bot_total_profit_loss_symbol_vol25 + profit_or_loss2_symbol_vol25;
                    bot_total_stake_symbol_vol25 = bot_total_stake_symbol_vol25 + buy_price2_symbol_vol25
                    bot_total_runs_symbol_vol25 = bot_total_runs_symbol_vol25 + 1;
                    bot_total_payout_symbol_vol25 = bot_total_payout_symbol_vol25 - payout_result2_symbol_vol25;
                    add_after_trade_symbol_vol25(bot_id_symbol_vol25, contract_id2_symbol_vol25, bot_contract_id_symbol_vol25, bot_entry_spot_symbol_vol25, bot_exit_spot_symbol_vol25, bot_profit_loss_symbol_vol25, bot_status_symbol_vol25, bot_total_runs_symbol_vol25, bot_total_stake_symbol_vol25, bot_total_payout_symbol_vol25, bot_total_wins_symbol_vol25, bot_total_loss_symbol_vol25, bot_total_profit_loss_symbol_vol25);
                    wonEncountered_symbol_vol25 = true;
                }
                if (contract_status2_symbol_vol25 == 'won' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol25 = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol25 = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol25 = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol25 = every_tick2_symbol_vol25
                    bot_log_end_symbol_vol25(log_buy_timestamp_bot_symbol_vol25, log_sell_timestamp_bot_symbol_vol25, log_message_entry_tick_symbol_vol25, log_message_last_digit_symbol_vol25)
                } else if (contract_status2_symbol_vol25 == 'lost' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol25 = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol25 = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol25 = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol25 = every_tick2_symbol_vol25
                    bot_log_end_symbol_vol25(log_buy_timestamp_bot_symbol_vol25, log_sell_timestamp_bot_symbol_vol25, log_message_entry_tick_symbol_vol25, log_message_last_digit_symbol_vol25)
                }
                contract_status_html_symbol_vol25.textContent = contract_status2_symbol_vol25
                end_tic_off_trade_symbol_vol25.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol25(last_tick2_symbol_vol25);
                profit_figure_amount_symbol_vol25.textContent = profit_or_loss2_symbol_vol25
                price_after_trade_figure_amount_symbol_vol25.textContent = final_price2_symbol_vol25
                buy_price_figure_amount_symbol_vol25.textContent = buy_price2_symbol_vol25
                result_currency_html_symbol_vol25.textContent = contract_currency2_symbol_vol25
                transaction_refrence_figure_symbol_vol25.textContent = contract_ids_buy2_symbol_vol25
                trade_start_time_symbol_vol25.innerHTML = convertTimestampTo12HourTime_symbol_vol25(time_of_trade2_symbol_vol25)
                buy_price_text_symbol_vol25.textContent = 'Buy price'
                price_after_trade_text_symbol_vol25.textContent = 'Final price'
                profit_text_symbol_vol25.textContent = 'Profit'
                after_trade_symbol_vol25(contract_status2_symbol_vol25, lastCharacter2)
            } else {
            }
        } else {
            
        }
    }
}

let currentPosition1_symbol_vol25 = 0;
function moveSlider_symbol_vol25(number) {
    const slider = document.getElementById('slide_trade_result_carousel2');
    const container = document.getElementById('last_digit_responds_carousel2');
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

    const target = document.querySelector(`.last_digits_carousel2.${stringnumber}`);
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
        currentPosition1_symbol_vol25 = newPosition;
    }
}

function handleNewNumber_symbol_vol25(randomNumber) {
    const newPosition = randomNumber;
    moveSlider_symbol_vol25(newPosition);
}

let log_close_and_info_cont_symbol_vol25 = document.getElementById('log_close_and_info_cont_carousel2');
let bot_log_show_cont_symbol_vol25 = document.getElementById('bot_log_show_cont_carousel2');
let bot_details_symbol_vol25 = document.getElementById('bot_details_carousel2');
let bot_details2_symbol_vol25 = document.getElementById('bot_details2_carousel2');

if (bot_log_show_cont_symbol_vol25 && bot_details_symbol_vol25) {
    bot_details_symbol_vol25.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol25.style.display == 'none') {
            bot_log_show_cont_symbol_vol25.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol25.style.display = 'none'
        }
    });

    log_close_and_info_cont_symbol_vol25.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_log_show_cont_symbol_vol25.style.display == 'block') {
            bot_log_show_cont_symbol_vol25.style.display = 'none'
        } else {
            bot_log_show_cont_symbol_vol25.style.display = 'block'
        }
    });
} else {
    console.error('One or more elements are not found');
}

if (bot_log_show_cont_symbol_vol25 && bot_details_symbol_vol25) {
    bot_details2_symbol_vol25.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol25.style.display == 'none') {
            bot_log_show_cont_symbol_vol25.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol25.style.display = 'none'
        }
    });
} else {
    console.error('One or more elements are not found');
}

let martingale_symbol_vol25 = document.getElementById('martingale_carousel2');
let flash_info_cont_symbol_vol25 = document.getElementById('flash_info_cont_carousel2');
let tick_check_amount_symbol_vol25 = document.getElementById('tick_check_amount_carousel2');
let settings_cont_symbol_vol25 = document.getElementById('settings_cont_carousel2');
let tick_check_symbol_vol25 = document.getElementById('tick_check_carousel2');
let martingale_jump_symbol_vol25 = document.getElementById('martingale_jump_carousel2');
let increase_jump_symbol_vol25 = document.getElementById('increase_jump_carousel2');
let reduce_jump_symbol_vol25 = document.getElementById('reduce_jump_carousel2');
let bot_settings_symbol_vol25 = document.getElementById('bot_settings_carousel2');
let bot_settings2_symbol_vol25 = document.getElementById('bot_settings2_carousel2');
const volumes2_symbol_vol25 = document.querySelectorAll(".slide_vol2_carousel2");
let tick_check2_symbol_vol25 = document.getElementById('tick_check2_carousel2');
let martingale2_symbol_vol25 = document.getElementById('martingale2_carousel2');
let martingale_jump2_symbol_vol25 = document.getElementById('martingale_jump2_carousel2');
let martingale_jump_set_symbol_vol25 = document.getElementById('martingale_jump_set_carousel2');
const last_digit_settings_symbol_vol25 = document.querySelectorAll(".last_digit_settings_carousel2");

martingale_symbol_vol25.addEventListener('click', function () {
    if (martingale_symbol_vol25.classList.contains('active_mat')) {
        martingale_symbol_vol25.classList.remove('active_mat');
        martingale2_symbol_vol25.classList.remove('active_mat');
        setCookie('martingale_carousel2', 'false')
        localStorage.setItem('martingale_carousel2', 'false')
        flash_info_cont_symbol_vol25.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol25.style.color = '#fff'
    } else {
        martingale_symbol_vol25.classList.add('active_mat');
        martingale2_symbol_vol25.classList.add('active_mat');
        setCookie('martingale_carousel2', 'true')
        localStorage.setItem('martingale_carousel2', 'true')
        flash_info_cont_symbol_vol25.textContent = 'martigale is active'
        tick_check_amount_symbol_vol25.style.color = '#fff'
    }
    if (flash_info_cont_symbol_vol25.classList.contains('show_flash_info_carousel2')) {
        flash_info_cont_symbol_vol25.classList.remove('show_flash_info_carousel2')
        setTimeout(() => {
            flash_info_cont_symbol_vol25.classList.remove('show_flash_info_carousel2')
        }, 5000)
    } else {
        flash_info_cont_symbol_vol25.classList.add('show_flash_info_carousel2')
        setTimeout(() => {
            flash_info_cont_symbol_vol25.classList.remove('show_flash_info_carousel2')
        }, 5000)
    }
});

function bot_set_default_symbol_vol25() {
    let curr_bot_set = localStorage.getItem('bot_set_carousel2');
    if (curr_bot_set === null) {
        setTimeout(bot_set_default_symbol_vol25, 100);
        return;
    }
    tick_check_symbol_vol25.textContent = curr_bot_set;
    tick_check2_symbol_vol25.textContent = curr_bot_set;
}

bot_set_default_symbol_vol25();

bot_settings_symbol_vol25.addEventListener('click', function () {
    if (settings_cont_symbol_vol25.style.display == 'none') {
        settings_cont_symbol_vol25.style.display = 'block'
    } else {
        settings_cont_symbol_vol25.style.display = 'none'
    }
});

document.addEventListener('click', (event) => {
    if (!bot_settings_symbol_vol25.contains(event.target) && !settings_cont_symbol_vol25.contains(event.target) && !martingale_jump_set_symbol_vol25.contains(event.target)) {
        settings_cont_symbol_vol25.style.display = 'none';
    }
});

last_digit_settings_symbol_vol25.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.querySelector('.bot_text_carousel2').textContent.trim().replace(/\s+/g, ' ');
        if (bot_set == 'Last one digit bot') {
            localStorage.setItem('bot_set_carousel2', '1')
            setCookie('bot_set_carousel2', '1')
            localStorage.setItem('bot_set_store_carousel2', '1')
            setCookie('bot_set_store_carousel2', '1')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            localStorage.setItem('bot_set_carousel2', '2')
            setCookie('bot_set_carousel2', '2')
            localStorage.setItem('bot_set_store_carousel2', '2')
            setCookie('bot_set_store_carousel2', '2')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            localStorage.setItem('bot_set_carousel2', '3')
            setCookie('bot_set_carousel2', '3')
            localStorage.setItem('bot_set_store_carousel2', '3')
            setCookie('bot_set_store_carousel2', '3')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            localStorage.setItem('bot_set_carousel2', '4')
            setCookie('bot_set_carousel2', '4')
            localStorage.setItem('bot_set_store_carousel2', '4')
            setCookie('bot_set_store_carousel2', '4')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            localStorage.setItem('bot_set_carousel2', '5')
            setCookie('bot_set_carousel2', '5')
            localStorage.setItem('bot_set_store_carousel2', '5')
            setCookie('bot_set_store_carousel2', '5')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            localStorage.setItem('bot_set_carousel2', '6')
            setCookie('bot_set_carousel2', '6')
            localStorage.setItem('bot_set_store_carousel2', '6')
            setCookie('bot_set_store_carousel2', '6')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            localStorage.setItem('bot_set_carousel2', '7')
            setCookie('bot_set_carousel2', '7')
            localStorage.setItem('bot_set_store_carousel2', '7')
            setCookie('bot_set_store_carousel2', '7')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            localStorage.setItem('bot_set_carousel2', '8')
            setCookie('bot_set_carousel2', '8')
            localStorage.setItem('bot_set_store_carousel2', '8')
            setCookie('bot_set_store_carousel2', '8')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            localStorage.setItem('bot_set_carousel2', '9')
            setCookie('bot_set_carousel2', '9')
            localStorage.setItem('bot_set_store_carousel2', '9')
            setCookie('bot_set_store_carousel2', '9')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            localStorage.setItem('bot_set_carousel2', '10')
            setCookie('bot_set_carousel2', '10')
            localStorage.setItem('bot_set_store_carousel2', '10')
            setCookie('bot_set_store_carousel2', '10')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});


let jump_count_symbol_vol25 = 0

function jump_count_set_symbol_vol25() {
    localStorage.setItem('bot_jump_carousel2', jump_count_symbol_vol25)
    setCookie('bot_jump_carousel2', jump_count_symbol_vol25)
}

function jump_count_set2_symbol_vol25() {
    let stored_jump_count = localStorage.getItem('bot_jump_carousel2') ? localStorage.getItem('bot_jump_carousel2') : getCookie('bot_jump_carousel2');
    jump_count_symbol_vol25 = stored_jump_count !== null ? parseInt(stored_jump_count, 10) : 0;

    if (isNaN(jump_count_symbol_vol25)) {
        jump_count_symbol_vol25 = 0;
    }
    if (jump_count_symbol_vol25 > 0) {
        martingale_jump_symbol_vol25.textContent = 'j' + jump_count_symbol_vol25
        martingale_jump2_symbol_vol25.textContent = 'j' + jump_count_symbol_vol25
    } else {
        martingale_jump_symbol_vol25.textContent = ''
        martingale_jump2_symbol_vol25.textContent = ''
    }
}

jump_count_set2_symbol_vol25()

increase_jump_symbol_vol25.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count_symbol_vol25 = jump_count_symbol_vol25 + 1
    jump_count_set_symbol_vol25()
    jump_count_set2_symbol_vol25()
})

reduce_jump_symbol_vol25.addEventListener('click', (event) => {
    event.preventDefault()
    if (jump_count_symbol_vol25 > 0) {
        jump_count_symbol_vol25 = jump_count_symbol_vol25 - 1
        jump_count_set_symbol_vol25()
        jump_count_set2_symbol_vol25()
    }
})

bot_settings2_symbol_vol25.addEventListener('click', function () {
    if (settings_cont_symbol_vol25.style.display == 'none') {
        settings_cont_symbol_vol25.style.display = 'block'
    } else {
        settings_cont_symbol_vol25.style.display = 'none'
    }
});

martingale2_symbol_vol25.addEventListener('click', function () {
    if (martingale2_symbol_vol25.classList.contains('active_mat')) {
        martingale2_symbol_vol25.classList.remove('active_mat');
        martingale_symbol_vol25.classList.remove('active_mat');
        setCookie('martingale_carousel2', 'false')
        localStorage.setItem('martingale_carousel2', 'false')
        flash_info_cont_symbol_vol25.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol25.style.color = '#fff'

    } else {
        martingale2_symbol_vol25.classList.add('active_mat');
        martingale_symbol_vol25.classList.add('active_mat');
        setCookie('martingale_carousel2', 'true')
        localStorage.setItem('martingale_carousel2', 'true')
        flash_info_cont_symbol_vol25.textContent = 'martigale is active'
        tick_check_amount_symbol_vol25.style.color = '#fff'
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





















































































let last_digit_input_symbol_vol25_1s = document.getElementById('last_digit_input')
let close_contract_result_container_symbol_vol25_1s = document.getElementById('close_contract_result_container_carousel7')
let buy_sell_two_symbol_vol25_1s = document.getElementById('buy_sell_two')
let trade_type_secound_symbol_vol25_1s = document.getElementById("trade_type_secound")
let attempting_buy2_carousel7_symbol_vol25_1s = document.getElementById("attempting_buy2_carousel7")
let buy_succeded2_carousel7_symbol_vol25_1s = document.getElementById("buy_succeded2_carousel7")
let contract_close2_carousel7_symbol_vol25_1s = document.getElementById("contract_close2_carousel7")
let stream25_1s_carousel7_symbol_vol25_1s = document.getElementById('stream25_1s_carousel7')

let last_digit_prediction_local_st_symbol_vol25_1s = null
let barrier_local_st_symbol_vol25_1s = null
let symbol_vol_text_local_st_symbol_vol25_1s = null
let contract_text_local_st_symbol_vol25_1s = null
let duration_amount_local_st_symbol_vol25_1s = null
let stake_amount_local_st_symbol_vol25_1s = null
let symbol_vol_local_st_symbol_vol25_1s = null
let duration_unit_local_st_symbol_vol25_1s = null
let last_digit_prediction_or_barrier_local_st_symbol_vol25_1s = null
let currency_local_st_symbol_vol25_1s = null
let stake_or_payout_local_st_symbol_vol25_1s = null
let proposal_id_local_st_symbol_vol25_1s = null
let last_digit_prediction_cookie_symbol_vol25_1s = null
let barrier_cookie_symbol_vol25_1s = null
let symbol_vol_text_cookie_symbol_vol25_1s = null
let contract_text_cookie_symbol_vol25_1s = null
let duration_amount_cookie_symbol_vol25_1s = null
let stake_amount_cookie_symbol_vol25_1s = null
let symbol_vol_cookie_symbol_vol25_1s = null
let duration_unit_cookie_symbol_vol25_1s = null
let last_digit_prediction_or_barrier_cookie_symbol_vol25_1s = null
let currency_cookie_symbol_vol25_1s = null
let stake_or_payout_cookie_symbol_vol25_1s = null
let proposal_id_cookie_symbol_vol25_1s = null
let stake_amount_default_symbol_vol25_1s = localStorage.getItem('stake_amount_default') || document.getElementById('stake_amount_input').value
let duration_unit_symbol_vol25_1s = null
let symbol_vol_symbol_vol25_1s = null
let duration_amount_symbol_vol25_1s = null
let stake_amount_symbol_vol25_1s = null
let last_digit_prediction_or_barrier_symbol_vol25_1s = null
let currency_symbol_vol25_1s = null
let contract_symbol_vol25_1s = null
let stake_or_payout_symbol_vol25_1s = null
let proposal_id_symbol_vol25_1s = null
let td2_account_id_carousel7_symbol_vol25_1s = document.getElementById('td2_account_id_carousel7')
let td2_no_of_runs_carousel7_symbol_vol25_1s = document.getElementById('td2_no_of_runs_carousel7')
let td2_total_stake_carousel7_symbol_vol25_1s = document.getElementById('td2_total_stake_carousel7')
let td2_total_payout_carousel7_symbol_vol25_1s = document.getElementById('td2_total_payout_carousel7')
let td2_total_wins_carousel7_symbol_vol25_1s = document.getElementById('td2_total_wins_carousel7')
let td2_total_loss_carousel7_symbol_vol25_1s = document.getElementById('td2_total_loss_carousel7')
let td2_total_profit_loss_carousel7_symbol_vol25_1s = document.getElementById('td2_total_profit_loss_carousel7')
let bot_total_runs_symbol_vol25_1s = 0
let bot_total_stake_symbol_vol25_1s = 0
let bot_total_payout_symbol_vol25_1s = 0
let bot_total_wins_symbol_vol25_1s = 0
let bot_total_loss_symbol_vol25_1s = 0
let bot_total_profit_loss_symbol_vol25_1s = 0
let randomNumber_symbol_vol25_1s = null;
let strNumber_symbol_vol25_1s = null;
let authorize_response_symbol_vol25_1s = null
let subscriptionId_symbol_vol25_1s = null
let randomNumber2_symbol_vol25_1s = null
let buy_contract_id_symbol_vol25_1s = null
let api_id_symbol_vol25_1s = null;
let api_token_symbol_vol25_1s = null;
let def_price_up_symbol_vol25_1s = null
let def_payout_up_symbol_vol25_1s = null
let def_profit_up_symbol_vol25_1s = null
let website_status_info_symbol_vol25_1s = 'initial'
let symbol25_1s_symbol_vol25_1s = null
let symbol25_1s_cookie_symbol_vol25_1s = null
let subscription_to_open_contract_symbol_vol25_1s = true

document.addEventListener('DOMContentLoaded', function () {
    setCookie('symbol25_1s', '1HZ25V')
    localStorage.setItem('symbol25_1s', '1HZ25V')

    symbol25_1s_symbol_vol25_1s = localStorage.getItem('symbol25_1s')
    symbol25_1s_cookie_symbol_vol25_1s = getCookie('symbol25_1s')

});

let bot_id_symbol_vol25_1s = 0
let bot_buy_start_time_symbol_vol25_1s = null
let bot_buy_transaction_id_symbol_vol25_1s = null
let bot_trade_type_symbol_vol25_1s = null
let bot_buy_price_symbol_vol25_1s = null
let bot_entry_spot_symbol_vol25_1s = null
let bot_exit_spot_symbol_vol25_1s = null
let bot_profit_loss_symbol_vol25_1s = null
let bot_status_symbol_vol25_1s = null
let firstContractReceived_symbol_vol25_1s = false;
let bot_is_running_or_stopped_symbol_vol25_1s = false
let end_slide_symbol_vol25_1s = true
let bot_contract_id_symbol_vol25_1s = null
let bot_unique_code_symbol_vol25_1s = null

async function add_after_trade_symbol_vol25_1s(bot_id, botuniqueCode, allContracts, entry_spot, exit_spot, profit_loss, status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss) {
    const tbody1_carousel7 = document.getElementById('tbody1_carousel7');

    if (botuniqueCode == allContracts) {
        let row_carousel7 = document.getElementById(`bot_carousel7${bot_id}`);
        if (!row_carousel7) {
            console.error(`Row with data-unique-code "bot_carousel7${bot_id}" not found.`);
            return;
        }

        const entry_spot_html_carousel7 = document.getElementById(`td5_carousel7${bot_id}`);
        const exit_spot_html_carousel7 = document.getElementById(`td6_carousel7${bot_id}`);
        const profit_loss_html_carousel7 = document.getElementById(`td8_carousel7${bot_id}`);
        const status_html_carousel7 = document.getElementById(`td9_carousel7${bot_id}`);

        if (entry_spot_html_carousel7) {
            entry_spot_html_carousel7.textContent = entry_spot
        } else {
            
        }
        if (exit_spot_html_carousel7) {
            exit_spot_html_carousel7.textContent = exit_spot
        } else {
            
        }
        if (profit_loss_html_carousel7) {
            profit_loss_html_carousel7.textContent = profit_loss
            let profitLossNumber = parseFloat(profit_loss);
            if (profitLossNumber < 0) {
                profit_loss_html_carousel7.style.color = 'red';
            } else {
                profit_loss_html_carousel7.style.color = 'green';
            }
        } else {
            
        }
        if (status_html_carousel7) {
            status_html_carousel7.textContent = status
            if (status == 'won') {
                status_html_carousel7.style.color = 'green'
            } else {
                status_html_carousel7.style.color = 'red'
            }
        } else {
            
        }
        td2_no_of_runs_carousel7_symbol_vol25_1s.textContent = bot_total_runs_symbol_vol25_1s
        td2_total_stake_carousel7_symbol_vol25_1s.textContent = bot_total_stake_symbol_vol25_1s
        td2_total_payout_carousel7_symbol_vol25_1s.textContent = Number(bot_total_payout_symbol_vol25_1s.toFixed(2));
        td2_total_wins_carousel7_symbol_vol25_1s.textContent = bot_total_wins_symbol_vol25_1s
        td2_total_wins_carousel7_symbol_vol25_1s.style.color = 'green'
        td2_total_loss_carousel7_symbol_vol25_1s.textContent = bot_total_loss_symbol_vol25_1s
        td2_total_loss_carousel7_symbol_vol25_1s.style.color = 'red'
        td2_total_profit_loss_carousel7_symbol_vol25_1s.textContent = Number(bot_total_profit_loss_symbol_vol25_1s.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss_smbol_vol25_1s.toFixed(2))) < 0) {
            td2_total_profit_loss_carousel7_symbol_vol25_1s.style.color = 'red'
        } else {
            td2_total_profit_loss_carousel7_symbol_vol25_1s.style.color = 'green'
        }
    }

}

const progressBar1_carousel7_symbol_vol25_1s = document.querySelector('.progress1_carousel7');
function fillProgressBar1_symbol_vol25_1s() {
    progressBar1_carousel7_symbol_vol25_1s.classList.add('prog1_carousel7')
}

const progressBar2_carousel7_symbol_vol25_1s = document.querySelector('.progress2_carousel7');
function fillProgressBar2_symbol_vol25_1s() {
    progressBar2_carousel7_symbol_vol25_1s.classList.add('prog2_carousel7')
}

function set_start_trade1_symbol_vol25_1s(bot_is_running_or_stopped) {
    let bot_state_carousel7 = document.getElementById('bot_state_carousel7')
    let circle1_carousel7 = document.getElementById('circle1_carousel7')
    let circle2_carousel7 = document.getElementById('circle2_carousel7')
    let circle3_carousel7 = document.getElementById('circle3_carousel7')

    if (circle1_carousel7.classList.contains("buy_signal_carousel7")) {
        circle1_carousel7.classList.remove('buy_signal_carousel7')
    }
    if (circle2_carousel7.classList.contains('circle_shadow_carousel7')) {
        circle2_carousel7.classList.remove('circle_shadow_carousel7')
    }
    if (circle2_carousel7.classList.contains('add_color_carousel7')) {
        circle2_carousel7.classList.remove('add_color_carousel7')
    }
    if (circle3_carousel7.classList.contains('add_color_carousel7')) {
        circle3_carousel7.classList.remove('add_color_carousel7')
    }
    if (progressBar1_carousel7_symbol_vol25_1s.classList.contains("prog1_carousel7")) {
        progressBar1_carousel7_symbol_vol25_1s.classList.remove('prog1_carousel7')
    }
    if (progressBar2_carousel7_symbol_vol25_1s.classList.contains("prog2_carousel7")) {
        progressBar2_carousel7_symbol_vol25_1s.classList.remove('prog2_carousel7')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel7.textContent = 'Bot is running'
        circle1_carousel7.classList.add('buy_signal_carousel7')
        setTimeout(fillProgressBar1_symbol_vol25_1s, 1000);
    } else {
        bot_state_carousel7.textContent = 'Bot has stopped'
        circle1_carousel7.classList.remove('buy_signal_carousel7')
    }

}

function start_trade_ref_symbol_vol25_1s(buy_price_ref) {
    if (attempting_buy2_carousel7_symbol_vol25_1s.classList.contains("attempting_buy2_show_carousel7")) {
        attempting_buy2_carousel7_symbol_vol25_1s.classList.remove("attempting_buy2_show_carousel7")
    }
    if (buy_succeded2_carousel7_symbol_vol25_1s.classList.contains("buy_succeded2_show_carousel7")) {
        buy_succeded2_carousel7_symbol_vol25_1s.classList.remove("buy_succeded2_show_carousel7")
    }
    if (contract_close2_carousel7_symbol_vol25_1s.classList.contains("contract_close2_show_carousel7")) {
        contract_close2_carousel7_symbol_vol25_1s.classList.remove("contract_close2_show_carousel7")
    }
    attempting_buy2_carousel7_symbol_vol25_1s.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2_carousel7_symbol_vol25_1s.classList.add('attempting_buy2_show_carousel7')
}


function set_middle_trade1_symbol_vol25_1s(bot_is_running_or_stopped) {
    let bot_state_carousel7 = document.getElementById('bot_state_carousel7')
    let circle1_carousel7 = document.getElementById('circle1_carousel7')
    let circle2_carousel7 = document.getElementById('circle2_carousel7')
    circle1_carousel7.classList.remove('buy_signal_carousel7')
    circle1_carousel7.classList.add('add_color_carousel7')

    function timmimg_shadow() {
        circle2_carousel7.classList.add('circle_shadow_carousel7')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel7.textContent = 'Bot is running'
        circle2_carousel7.classList.add('add_color_carousel7')
        setTimeout(timmimg_shadow, 1500);
    } else {
        bot_state_carousel7.textContent = 'Bot has stopped'
        circle2_carousel7.classList.remove('circle_shadow_carousel7_carousel7')
        circle2_carousel7.classList.remove('add-color_carousel7')
    }
}

function middle_trade_ref_symbol_vol25_1s(buy_ref) {
    buy_succeded2_carousel7_symbol_vol25_1s.textContent = `ID: ${buy_ref}`
    buy_succeded2_carousel7_symbol_vol25_1s.classList.add('buy_succeded2_show_carousel7')
}

function set_end_trade1_symbol_vol25_1s(bot_is_running_or_stopped) {
    let bot_state_carousel7 = document.getElementById('bot_state_carousel7')
    let circle2_carousel7 = document.getElementById('circle2_carousel7')
    let circle3_carousel7 = document.getElementById('circle3_carousel7')

    function timmimg_color() {
        circle3_carousel7.classList.add('add_color_carousel7')
    }
    if (circle2_carousel7.classList.contains('circle_shadow_carousel7')) {
        circle2_carousel7.classList.remove('circle_shadow_carousel7')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel7.textContent = 'Bot is running'
        setTimeout(fillProgressBar2_symbol_vol25_1s, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state_carousel7.textContent = 'Bot has stopped'
        circle3_carousel7.classList.remove('add_color_carousel7')
    }
}
function end_trade_ref_symbol_vol25_1s(sell_ref) {
    contract_close2_carousel7_symbol_vol25_1s.textContent = `ID: ${sell_ref}`
    contract_close2_carousel7_symbol_vol25_1s.classList.add('contract_close2_show_carousel7')
}

let proposal_open_contract2_symbol_vol25_1s = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})

const proposalOpenContractResponse2_symbol_vol25_1s = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol25_1s, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {
        
        open_proposal_actions2_symbol_vol25_1s(data)
    }
};

const getProposalOpenContract12_symbol_vol25_1s = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol25_1s);
    proposal_open_contract2_symbol_vol25_1s()
};

const getProposalOpenContract22_symbol_vol25_1s = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol25_1s);
};

const unsubscribeProposalOpenContract2_symbol_vol25_1s = () => {
    connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol25_1s, false);
};

function run_open_contract_proposal2_symbol_vol25_1s() {
    if (subscription_to_open_contract_symbol_vol25_1s == true) {
        getProposalOpenContract12_symbol_vol25_1s()
    } else {
        getProposalOpenContract22_symbol_vol25_1s()
    }
    subscription_to_open_contract_symbol_vol25_1s = false
}

function generateUniqueCode_symbol_vol25_1s(buy) {
    return buy.buy.contract_id;
}

let martingale_store_symbol_vol25_1s = [1.1, 11.1, 123.4, 1371.1, 15593.5]
let martingale_count_symbol_vol25_1s = 0
let initial_stake_symbol_vol25_1s = true
let contract_id2_symbol_vol25_1s = null
let wonEncountered_symbol_vol25_1s = false;

async function buy_bot_symbol_vol25_1s(martingale, current_number) {
    const slider = document.getElementById('slide_trade_result_carousel7').style.display = 'flex';

    last_digit_prediction_or_barrier_symbol_vol25_1s = parseInt(current_number);
    let contract_text_local_st = localStorage.getItem('contract_text_local_st')
    let contract_text_cookie = getCookie('contract_text_cookie')

    if (martingale == 'true' && contract_status2_symbol_vol25_1s == 'lost') {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol25_1s += 1
            stake_amount_symbol_vol25_1s = martingale_store_symbol_vol25_1s[martingale_count_symbol_vol25_1s]
        } else {
            stake_amount_symbol_vol25_1s = stake_amount_symbol_vol25_1s * 10.1
        }
    } else if (initial_stake_symbol_vol25_1s = true || (martingale == 'true' && contract_status2_symbol_vol25_1s == 'won')) {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol25_1s = 0
            stake_amount_symbol_vol25_1s = martingale_store_symbol_vol25_1s[martingale_count_symbol_vol25_1s]
        } else {
            stake_amount_symbol_vol25_1s = stake_amount_default_symbol_vol25_1s
        }
    } else {
        stake_amount_symbol_vol25_1s = stake_amount_default_symbol_vol25_1s
    }


    wonEncountered_symbol_vol25_1s = false
    before_trade_symbol_vol25_1s();
    allProposalOpenContract2_symbol_vol25_1s.length = 0;
    unsubscribeProposalOpenContract2_symbol_vol25_1s()

    try {
        await order_propose_symbol_vol25_1s(api, stake_amount_symbol_vol25_1s, last_digit_prediction_or_barrier_symbol_vol25_1s, stake_or_payout_symbol_vol25_1s, contract_symbol_vol25_1s, currency_symbol_vol25_1s, duration_amount_symbol_vol25_1s, duration_unit_symbol_vol25_1s, symbol25_1s_symbol_vol25_1s);

        let buy = await api.buy({
            "buy": String(proposal_id_symbol_vol25_1s),
            "price": parseFloat(stake_amount_symbol_vol25_1s)
        });

        contract_id2_symbol_vol25_1s = generateUniqueCode_symbol_vol25_1s(buy)

        run_open_contract_proposal2_symbol_vol25_1s()
        initial_stake_symbol_vol25_1s = false

    } catch (error) {
        console.error('Error during trade:', error);
    }
}

async function append_result_symbol_vol25_1s(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status) {

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

    const tbody_carousel7 = document.getElementById('tbody1_carousel7');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel7 = document.createElement('tr');
            row_carousel7.id = `bot_carousel7${item.id}`;

            const td1_carousel7 = document.createElement('td');
            td1_carousel7.textContent = item.id;
            td1_carousel7.id = `td1_carousel7${item.id}`;
            row_carousel7.appendChild(td1_carousel7);

            const td2_carousel7 = document.createElement('td');
            td2_carousel7.textContent = item.timestamp;
            td2_carousel7.id = `td2_carousel7${item.id}`;
            row_carousel7.appendChild(td2_carousel7);

            const td3_carousel7 = document.createElement('td');
            td3_carousel7.textContent = item.reference;
            td3_carousel7.id = `td3_carousel7${item.id}`;
            row_carousel7.appendChild(td3_carousel7);

            const td4_carousel7 = document.createElement('td');
            td4_carousel7.textContent = item.tradeType;
            td4_carousel7.id = `td4_carousel7${item.id}`;
            row_carousel7.appendChild(td4_carousel7);

            const td5_carousel7 = document.createElement('td');
            td5_carousel7.textContent = item.entrySpot;
            td5_carousel7.id = `td5_carousel7${item.id}`;
            row_carousel7.appendChild(td5_carousel7);

            const td6_carousel7 = document.createElement('td');
            td6_carousel7.textContent = item.exitSpot;
            td6_carousel7.id = `td6_carousel7${item.id}`;
            row_carousel7.appendChild(td6_carousel7);

            const td7_carousel7 = document.createElement('td');
            td7_carousel7.textContent = item.buyPrice;
            td7_carousel7.id = `td7_carousel7${item.id}`;
            row_carousel7.appendChild(td7_carousel7);

            const td8_carousel7 = document.createElement('td');
            td8_carousel7.textContent = item.profitLoss;
            td8_carousel7.id = `td8_carousel7${item.id}`;
            row_carousel7.appendChild(td8_carousel7);

            const td9_carousel7 = document.createElement('td');
            td9_carousel7.textContent = item.status;
            td9_carousel7.id = `td9_carousel7${item.id}`;
            row_carousel7.appendChild(td9_carousel7);

            if (tbody_carousel7.firstChild) {
                tbody_carousel7.insertBefore(row_carousel7, tbody_carousel7.firstChild);
            } else {
                tbody_carousel7.appendChild(row_carousel7);
            }
        });
    }
    appendRows(backendData)
}

let log_timestamp_current_symbol_vol25_1s = null
let log_buy_timestamp_bot_symbol_vol25_1s = null
let log_sell_timestamp_bot_symbol_vol25_1s = null
let log_message10_symbol_vol25_1s = null
let log_message9_symbol_vol25_1s = null
let log_message8_symbol_vol25_1s = null
let log_message7_symbol_vol25_1s = null
let log_message6_symbol_vol25_1s = null
let log_message5_symbol_vol25_1s = null
let log_message4_symbol_vol25_1s = null
let log_message3_symbol_vol25_1s = null
let log_message2_symbol_vol25_1s = null
let log_message1_symbol_vol25_1s = null
let log_message_curr_symbol_vol25_1s = null
let log_message_curr_tick_symbol_vol25_1s = null
let log_message_last_digit_symbol_vol25_1s = null
let log_message_entry_tick_symbol_vol25_1s = null
let appended_symbol_vol25_1s = true
let log_id_symbol_vol25_1s = 0

function format_log_current_time_symbol_vol25_1s() {
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

async function bot_log_symbol_vol25_1s(last_ten_tick, last_nine_tick, last_eight_tick, last_seven_tick, last_six_tick, last_five_tick, last_four_tick, last_three_tick, last_two_tick, last_one_tick, current_tick, current_tick_full) {

    const backendData = [
        {
            log_message10_symbol_vol25_1s: last_ten_tick,
            log_message9_symbol_vol25_1s: last_nine_tick,
            log_message8_symbol_vol25_1s: last_eight_tick,
            log_message7_symbol_vol25_1s: last_seven_tick,
            log_message6_symbol_vol25_1s: last_six_tick,
            log_message5_symbol_vol25_1s: last_five_tick,
            log_message4_symbol_vol25_1s: last_four_tick,
            log_message3_symbol_vol25_1s: last_three_tick,
            log_message2_symbol_vol25_1s: last_two_tick,
            log_message1_symbol_vol25_1s: last_one_tick,
            log_message_curr_symbol_vol25_1s: current_tick,
            log_message_curr_tick_symbol_vol25_1s: current_tick_full,
        },
    ];

    const log_tbody_carousel7 = document.getElementById('log_tbody1_carousel7');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel7 = document.createElement('tr');
            row_carousel7.id = `log_bot_carousel7${log_id_symbol_vol25_1s}`;

            const td1_carousel7 = document.createElement('td');
            td1_carousel7.textContent = log_timestamp_current_symbol_vol25_1s;
            td1_carousel7.id = `log_td1_carousel7${log_id_symbol_vol25_1s}`;
            td1_carousel7.classList.add('lod_td1_carousel7')
            row_carousel7.appendChild(td1_carousel7);

            const td2_carousel7 = document.createElement('td');

            if (log_message10_symbol_vol25_1s == null) {
                log_message10_symbol_vol25_1s = ''
            }
            if (log_message9_symbol_vol25_1s == null) {
                log_message9_symbol_vol25_1s = ''
            }
            if (log_message8_symbol_vol25_1s == null) {
                log_message8_symbol_vol25_1s = ''
            }
            if (log_message7_symbol_vol25_1s == null) {
                log_message7_symbol_vol25_1s = ''
            }
            if (log_message6_symbol_vol25_1s == null) {
                log_message6_symbol_vol25_1s = ''
            }
            if (log_message5_symbol_vol25_1s == null) {
                log_message5_symbol_vol25_1s = ''
            }

            if (log_message4_symbol_vol25_1s == null) {
                log_message4_symbol_vol25_1s = ''
            }

            if (log_message3_symbol_vol25_1s == null) {
                log_message3_symbol_vol25_1s = ''
            }

            if (log_message2_symbol_vol25_1s == null) {
                log_message2_symbol_vol25_1s = ''
            }

            if (log_message1_symbol_vol25_1s == null) {
                log_message1_symbol_vol25_1s = ''
            }

            if (log_message_curr_symbol_vol25_1s == null) {
                log_message_curr_symbol_vol25_1s = ''
            }

            td2_carousel7.textContent = `last ten ticks:  ${item.log_message10_symbol_vol25_1s} ${item.log_message9_symbol_vol25_1s} ${item.log_message8_symbol_vol25_1s} ${item.log_message7_symbol_vol25_1s} ${item.log_message6_symbol_vol25_1s} ${item.log_message5_symbol_vol25_1s} ${item.log_message4_symbol_vol25_1s} ${item.log_message3_symbol_vol25_1s} ${item.log_message2_symbol_vol25_1s} ${item.log_message1_symbol_vol25_1s}          current tick ${item.log_message_curr_symbol_vol25_1s}    ${item.log_message_curr_tick_symbol_vol25_1s}`;

            td2_carousel7.style.whiteSpace = 'pre'
            td2_carousel7.id = `log_td2_carousel7${log_id_symbol_vol25_1s}`;
            td2_carousel7.classList.add('lod_td2_carousel7')
            row_carousel7.appendChild(td2_carousel7);

            const td3_carousel7 = document.createElement('td');
            td3_carousel7.textContent = 'this is the text'
            td3_carousel7.style.whiteSpace = 'pre'
            td3_carousel7.id = `log_td3_carousel7${log_id_symbol_vol25_1s}`;
            td3_carousel7.classList.add('lod_td3_carousel7')
            row_carousel7.appendChild(td3_carousel7);

            if (log_tbody_carousel7.firstChild) {
                log_tbody_carousel7.insertBefore(row_carousel7, log_tbody_carousel7.firstChild);
                appended_symbol_vol25_1s = true
            } else {
                log_tbody_carousel7.appendChild(row_carousel7);
                appended_symbol_vol25_1s = true
            }
        });
    }
    appendRows(backendData)
}

async function bot_log_end_symbol_vol25_1s(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td_carousel7 = document.getElementById(`log_td3_carousel7${log_id_symbol_vol25_1s}`)

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

    log_buy_timestamp_bot_symbol_vol25_1s = formate_log_date(bot_buy_time_stamp)
    log_sell_timestamp_bot_symbol_vol25_1s = formate_log_date(bot_sell_time_stamp)

    if (target_td_carousel7) {
        target_td_carousel7.textContent = `buy_time:  ${log_buy_timestamp_bot_symbol_vol25_1s}        sell_time:  ${log_sell_timestamp_bot_symbol_vol25_1s}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

        log_id_symbol_vol25_1s += 1
    } else {
        
    }
}

let first_instance_symbol_vol25_1s = true

async function startBot_symbol_vol25_1s(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber) {
    bot_is_running_or_stopped_symbol_vol25_1s = true;
    log_timestamp_current_symbol_vol25_1s = format_log_current_time_symbol_vol25_1s()
    set_start_trade1_symbol_vol25_1s(bot_is_running_or_stopped_symbol_vol25_1s);
    bot_id_symbol_vol25_1s += 1;
    firstContractReceived_symbol_vol25_1s = false;
    end_slide_symbol_vol25_1s = true;
    bot_entry_spot_symbol_vol25_1s = '';
    bot_exit_spot_symbol_vol25_1s = '';
    bot_profit_loss_symbol_vol25_1s = '';
    bot_status_symbol_vol25_1s = 'pending';
    bot_log_symbol_vol25_1s(lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
    await buy_bot_symbol_vol25_1s(martingale, currentRandom);
    first_instance_symbol_vol25_1s = false
}

let bot_state_carousel7_symbol_vol25_1s = "stop_bot"
let all_bot_start_stop1_symbol_vol25_1s = null
let all_bot_start_stop1_cookie_symbol_vol25_1s = null
let buttonContainer_carousel7_symbol_vol25_1s = document.querySelector('.click_change_carousel7');

function togglePlayPause_symbol_vol25_1s() {
    var play_button_carousel7 = document.getElementById('play_button_carousel7');
    var pause_button_carousel7 = document.getElementById('pause_button_carousel7');
    if (play_button_carousel7) {
        bot_state_carousel7_symbol_vol25_1s = "stop_bot"
        play_button_carousel7.parentNode.removeChild(play_button_carousel7);

        var pause_button_carousel7 = document.createElement('div');
        pause_button_carousel7.id = 'pause_button_carousel7';
        pause_button_carousel7.className = 'pause_button_carousel7';
        pause_button_carousel7.innerHTML = '&#10074;&#10074;';
        buttonContainer_carousel7_symbol_vol25_1s.appendChild(pause_button_carousel7);
        document.getElementById('bot_state_carousel7').textContent = 'Bot has stopped';
    } else if (pause_button_carousel7) {
        bot_state_carousel7_symbol_vol25_1s = "start_bot"
        pause_button_carousel7.parentNode.removeChild(pause_button_carousel7);

        var play_button_carousel7 = document.createElement('div');
        play_button_carousel7.id = 'play_button_carousel7';
        play_button_carousel7.className = 'play_button_carousel7';
        play_button_carousel7.innerHTML = '&#9654;';
        buttonContainer_carousel7_symbol_vol25_1s.appendChild(play_button_carousel7);
        document.getElementById('bot_state_carousel7').textContent = 'Bot is running';
    }
}
buttonContainer_carousel7_symbol_vol25_1s.addEventListener('click', togglePlayPause_symbol_vol25_1s);
function getRandom_symbol_vol25_1s(strNumber) {
    return randomNumber_symbol_vol25_1s = strNumber.charAt(strNumber.length - 1);
}

let currentvol_carousel7_symbol_vol25_1s = null
let currentvol2_carousel7_symbol_vol25_1s = null
let martingale_active_carousel7_symbol_vol25_1s = null
let bot_set_carousel7_symbol_vol25_1s = null
let set_bot_jump_carousel7_symbol_vol25_1s = null
let initial_set_jump_symbol_vol25_1s = true
let currentvol_carousel7_cookie_symbol_vol25_1s = null
let currentvol2_carousel7_cookie_symbol_vol25_1s = null
let martingale_active_carousel7_cookie_symbol_vol25_1s = null
let bot_set_carousel7_cookie_symbol_vol25_1s = null
let set_bot_jump_carousel7_cookie_symbol_vol25_1s = null
let initial_set_jump_cookie_symbol_vol25_1s = true
let currentRandom_symbol_vol25_1s = null
let lastNumber1_symbol_vol25_1s = currentRandom_symbol_vol25_1s;
let lastNumber2_symbol_vol25_1s = lastNumber1_symbol_vol25_1s;
let lastNumber3_symbol_vol25_1s = lastNumber2_symbol_vol25_1s;
let lastNumber4_symbol_vol25_1s = lastNumber3_symbol_vol25_1s;
let lastNumber5_symbol_vol25_1s = lastNumber4_symbol_vol25_1s;
let lastNumber6_symbol_vol25_1s = lastNumber5_symbol_vol25_1s;
let lastNumber7_symbol_vol25_1s = lastNumber6_symbol_vol25_1s;
let lastNumber8_symbol_vol25_1s = lastNumber7_symbol_vol25_1s;
let lastNumber9_symbol_vol25_1s = lastNumber8_symbol_vol25_1s;
let lastNumber10_symbol_vol25_1s = lastNumber9_symbol_vol25_1s;

const tickResponse_symbol_vol25_1s = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', tickResponse_symbol_vol25_1s, false);
        await api.disconnect();
    }

    function getRandom1(strNumber1) {
        return randomNumber_symbol_vol25_1s = strNumber1.charAt(strNumber1.length - 1);
    }

    lastNumber10_symbol_vol25_1s = lastNumber9_symbol_vol25_1s
    lastNumber9_symbol_vol25_1s = lastNumber8_symbol_vol25_1s
    lastNumber8_symbol_vol25_1s = lastNumber7_symbol_vol25_1s
    lastNumber7_symbol_vol25_1s = lastNumber6_symbol_vol25_1s
    lastNumber6_symbol_vol25_1s = lastNumber5_symbol_vol25_1s
    lastNumber5_symbol_vol25_1s = lastNumber4_symbol_vol25_1s
    lastNumber4_symbol_vol25_1s = lastNumber3_symbol_vol25_1s
    lastNumber3_symbol_vol25_1s = lastNumber2_symbol_vol25_1s
    lastNumber2_symbol_vol25_1s = lastNumber1_symbol_vol25_1s
    lastNumber1_symbol_vol25_1s = currentRandom_symbol_vol25_1s

    if (data.msg_type === 'tick') {
        let bot_start_stop = bot_state_carousel7_symbol_vol25_1s

        subscriptionId_symbol_vol25_1s = data.subscription.id;
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

        if(data.echo_req.ticks === "1HZ25V"){
            strNumber_symbol_vol25_1s = formatToTwoDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_vol25_1s = getRandom1(strNumber_symbol_vol25_1s);
        }

        stream25_1s_carousel7_symbol_vol25_1s.textContent = strNumber_symbol_vol25_1s
        all_bot_start_stop1_symbol_vol25_1s = localStorage.getItem('all_bot_start_stop1')
        all_bot_start_stop1_cookie_symbol_vol25_1s = getCookie('all_bot_start_stop1')
        currentvol_carousel7_symbol_vol25_1s = localStorage.getItem('bot_current_vol1_carousel7');
        currentvol2_carousel7_symbol_vol25_1s = localStorage.getItem('bot_current_vol2_carousel7');
        martingale_active_carousel7_symbol_vol25_1s = localStorage.getItem('martingale_carousel7');
        bot_set_carousel7_symbol_vol25_1s = localStorage.getItem('bot_set_carousel7');
        set_bot_jump_carousel7_symbol_vol25_1s = localStorage.getItem('bot_jump_carousel7')
        currentvol_carousel7_cookie_symbol_vol25_1s = getCookie('bot_current_vol1_carousel7');
        currentvol2_carousel7_cookie_symbol_vol25_1s = getCookie('bot_current_vol2_carousel7');
        martingale_active_carousel7_cookie_symbol_vol25_1s = getCookie('martingale_carousel7');
        bot_set_carousel7_cookie_symbol_vol25_1s = getCookie('bot_set_carousel7');
        set_bot_jump_carousel7_cookie_symbol_vol25_1s = getCookie('bot_jump_carousel7')

        if (((set_bot_jump_carousel7_symbol_vol25_1s && set_bot_jump_carousel7_symbol_vol25_1s > 0) && contract_status2_symbol_vol25_1s == 'lost') || ((set_bot_jump_carousel7_cookie_symbol_vol25_1s && set_bot_jump_carousel7_cookie_symbol_vol25_1s > 0) && contract_status2_symbol_vol25_1s == 'lost')) {
            bot_set_carousel7_symbol_vol25_1s = (parseInt(bot_set_carousel7_symbol_vol25_1s) + parseInt(set_bot_jump_carousel7_symbol_vol25_1s)) !== null ? (parseInt(bot_set_carousel7_symbol_vol25_1s) + parseInt(set_bot_jump_carousel7_symbol_vol25_1s)) : (parseInt(bot_set_carousel7_cookie_symbol_vol25_1s) + parseInt(set_bot_jump_carousel7_cookie_symbol_vol25_1s))
            contract_status2_symbol_vol25_1s == 'reset'
        } else if ((initial_set_jump_symbol_vol25_1s == true || (contract_status2_symbol_vol25_1s == 'won' && (set_bot_jump_carousel7_symbol_vol25_1s && set_bot_jump_carousel7_symbol_vol25_1s > 0))) || (initial_set_jump_cookie_symbol_vol25_1s == true || (contract_status2_symbol_vol25_1s == 'won' && (set_bot_jump_carousel7_cookie_symbol_vol25_1s && set_bot_jump_carousel7_cookie_symbol_vol25_1s > 0)))) {
            bot_set_carousel7_symbol_vol25_1s = localStorage.getItem('bot_set_carousel7') ? localStorage.getItem('bot_set_carousel7') : getCookie('bot_set_carousel7');
            initial_set_jump_symbol_vol25_1s = false
            initial_set_jump_cookie_symbol_vol25_1s = false
        } else {
            bot_set_carousel7_symbol_vol25_1s = localStorage.getItem('bot_set_carousel7') ? localStorage.getItem('bot_set_carousel7') : getCookie("bot_set_carousel7");
        }
        let bot_count = bot_id_symbol_vol25_1s

        const tag5_carousel7 = document.getElementById(`td5_carousel7${bot_count}`);
        const tag6_carousel7 = document.getElementById(`td6_carousel7${bot_count}`);
        const tag8_carousel7 = document.getElementById(`td8_carousel7${bot_count}`);
        const tag9_carousel7 = document.getElementById(`td9_carousel7${bot_count}`);

        if (currentRandom_symbol_vol25_1s !== null && lastNumber1_symbol_vol25_1s !== null && lastNumber2_symbol_vol25_1s !== null) {
            if ((tag5_carousel7 && tag6_carousel7 && tag8_carousel7 && tag9_carousel7) || first_instance_symbol_vol25_1s == true) {
                if (currentRandom_symbol_vol25_1s && (first_instance_symbol_vol25_1s == true || (tag5_carousel7.textContent.trim() !== '' && tag6_carousel7.textContent.trim() !== '' && tag8_carousel7.textContent.trim() !== '' && tag9_carousel7.textContent.trim() !== '')) && (bot_set_carousel7_symbol_vol25_1s == 1 || bot_set_carousel7_cookie_symbol_vol25_1s == 1)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25_1s == 'start_bots') && ((currentvol_carousel7_symbol_vol25_1s == 5 && currentvol2_carousel7_symbol_vol25_1s == 5) || (currentvol_carousel7_cookie_symbol_vol25_1s == 5 && currentvol2_carousel7_cookie_symbol_vol25_1s == 5))) {
                        startBot_symbol_vol25_1s(martingale_active_carousel7_cookie_symbol_vol25_1s, lastNumber10_symbol_vol25_1s, lastNumber9_symbol_vol25_1s, lastNumber8_symbol_vol25_1s, lastNumber7_symbol_vol25_1s, lastNumber6_symbol_vol25_1s, lastNumber5_symbol_vol25_1s, lastNumber4_symbol_vol25_1s, lastNumber3_symbol_vol25_1s, lastNumber2_symbol_vol25_1s, lastNumber1_symbol_vol25_1s, currentRandom_symbol_vol25_1s, strNumber_symbol_vol25_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25_1s !== null && lastNumber1_symbol_vol25_1s !== null && lastNumber2_symbol_vol25_1s !== null) {
            if ((tag5_carousel7 && tag6_carousel7 && tag8_carousel7 && tag9_carousel7) || first_instance_symbol_vol25_1s == true) {
                if (lastNumber1_symbol_vol25_1s == currentRandom_symbol_vol25_1s && (first_instance_symbol_vol25_1s == true || (tag5_carousel7.textContent.trim() !== '' && tag6_carousel7.textContent.trim() !== '' && tag8_carousel7.textContent.trim() !== '' && tag9_carousel7.textContent.trim() !== '')) && (bot_set_carousel7_symbol_vol25_1s == 2 || bot_set_carousel7_cookie_symbol_vol25_1s == 2)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25_1s == 'start_bots') && ((currentvol_carousel7_symbol_vol25_1s == 5 && currentvol2_carousel7_symbol_vol25_1s == 5) || (currentvol_carousel7_cookie_symbol_vol25_1s == 5 && currentvol2_carousel7_cookie_symbol_vol25_1s == 5))) {
                        startBot_symbol_vol25_1s(martingale_active_carousel7_cookie_symbol_vol25_1s, lastNumber10_symbol_vol25_1s, lastNumber9_symbol_vol25_1s, lastNumber8_symbol_vol25_1s, lastNumber7_symbol_vol25_1s, lastNumber6_symbol_vol25_1s, lastNumber5_symbol_vol25_1s, lastNumber4_symbol_vol25_1s, lastNumber3_symbol_vol25_1s, lastNumber2_symbol_vol25_1s, lastNumber1_symbol_vol25_1s, currentRandom_symbol_vol25_1s, strNumber_symbol_vol25_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25_1s !== null && lastNumber1_symbol_vol25_1s !== null && lastNumber2_symbol_vol25_1s !== null) {
            if ((tag5_carousel7 && tag6_carousel7 && tag8_carousel7 && tag9_carousel7) || first_instance_symbol_vol25_1s == true) {
                if (lastNumber2_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber1_symbol_vol25_1s == currentRandom_symbol_vol25_1s && (first_instance_symbol_vol25_1s == true || (tag5_carousel7.textContent.trim() !== '' && tag6_carousel7.textContent.trim() !== '' && tag8_carousel7.textContent.trim() !== '' && tag9_carousel7.textContent.trim() !== '')) && (bot_set_carousel7_symbol_vol25_1s == 3 || bot_set_carousel7_cookie_symbol_vol25_1s == 3)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25_1s == 'start_bots') && ((currentvol_carousel7_symbol_vol25_1s == 5 && currentvol2_carousel7_symbol_vol25_1s == 5) || (currentvol_carousel7_cookie_symbol_vol25_1s == 5 && currentvol2_carousel7_cookie_symbol_vol25_1s == 5))) {
                        startBot_symbol_vol25_1s(martingale_active_carousel7_cookie_symbol_vol25_1s, lastNumber10_symbol_vol25_1s, lastNumber9_symbol_vol25_1s, lastNumber8_symbol_vol25_1s, lastNumber7_symbol_vol25_1s, lastNumber6_symbol_vol25_1s, lastNumber5_symbol_vol25_1s, lastNumber4_symbol_vol25_1s, lastNumber3_symbol_vol25_1s, lastNumber2_symbol_vol25_1s, lastNumber1_symbol_vol25_1s, currentRandom_symbol_vol25_1s, strNumber_symbol_vol25_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25_1s !== null && lastNumber1_symbol_vol25_1s !== null && lastNumber2_symbol_vol25_1s !== null) {
            if ((tag5_carousel7 && tag6_carousel7 && tag8_carousel7 && tag9_carousel7) || first_instance_symbol_vol25_1s == true) {
                if (lastNumber3_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber2_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber1_symbol_vol25_1s == currentRandom_symbol_vol25_1s && (first_instance_symbol_vol25_1s == true || (tag5_carousel7.textContent.trim() !== '' && tag6_carousel7.textContent.trim() !== '' && tag8_carousel7.textContent.trim() !== '' && tag9_carousel7.textContent.trim() !== '')) && (bot_set_carousel7_symbol_vol25_1s == 4 || bot_set_carousel7_cookie_symbol_vol25_1s == 4)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25_1s == 'start_bots') && ((currentvol_carousel7_symbol_vol25_1s == 5 && currentvol2_carousel7_symbol_vol25_1s == 5) || (currentvol_carousel7_cookie_symbol_vol25_1s == 5 && currentvol2_carousel7_cookie_symbol_vol25_1s == 5))) {
                        startBot_symbol_vol25_1s(martingale_active_carousel7_cookie_symbol_vol25_1s, lastNumber10_symbol_vol25_1s, lastNumber9_symbol_vol25_1s, lastNumber8_symbol_vol25_1s, lastNumber7_symbol_vol25_1s, lastNumber6_symbol_vol25_1s, lastNumber5_symbol_vol25_1s, lastNumber4_symbol_vol25_1s, lastNumber3_symbol_vol25_1s, lastNumber2_symbol_vol25_1s, lastNumber1_symbol_vol25_1s, currentRandom_symbol_vol25_1s, strNumber_symbol_vol25_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25_1s !== null && lastNumber1_symbol_vol25_1s !== null && lastNumber2_symbol_vol25_1s !== null) {
            if ((tag5_carousel7 && tag6_carousel7 && tag8_carousel7 && tag9_carousel7) || first_instance_symbol_vol25_1s == true) {
                if (lastNumber4_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber3_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber2_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber1_symbol_vol25_1s == currentRandom_symbol_vol25_1s && (first_instance_symbol_vol25_1s == true || (tag5_carousel7.textContent.trim() !== '' && tag6_carousel7.textContent.trim() !== '' && tag8_carousel7.textContent.trim() !== '' && tag9_carousel7.textContent.trim() !== '')) && (bot_set_carousel7_symbol_vol25_1s == 5 || bot_set_carousel7_cookie_symbol_vol25_1s == 5)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25_1s == 'start_bots') && ((currentvol_carousel7_symbol_vol25_1s == 5 && currentvol2_carousel7_symbol_vol25_1s == 5) || (currentvol_carousel7_cookie_symbol_vol25_1s == 5 && currentvol2_carousel7_cookie_symbol_vol25_1s == 5))) {
                        startBot_symbol_vol25_1s(martingale_active_carousel7_cookie_symbol_vol25_1s, lastNumber10_symbol_vol25_1s, lastNumber9_symbol_vol25_1s, lastNumber8_symbol_vol25_1s, lastNumber7_symbol_vol25_1s, lastNumber6_symbol_vol25_1s, lastNumber5_symbol_vol25_1s, lastNumber4_symbol_vol25_1s, lastNumber3_symbol_vol25_1s, lastNumber2_symbol_vol25_1s, lastNumber1_symbol_vol25_1s, currentRandom_symbol_vol25_1s, strNumber_symbol_vol25_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25_1s !== null && lastNumber1_symbol_vol25_1s !== null && lastNumber2_symbol_vol25_1s !== null) {
            if ((tag5_carousel7 && tag6_carousel7 && tag8_carousel7 && tag9_carousel7) || first_instance_symbol_vol25_1s == true) {
                if (lastNumber5_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber4_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber3_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber2_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber1_symbol_vol25_1s == currentRandom_symbol_vol25_1s && (first_instance_symbol_vol25_1s == true || (tag5_carousel7.textContent.trim() !== '' && tag6_carousel7.textContent.trim() !== '' && tag8_carousel7.textContent.trim() !== '' && tag9_carousel7.textContent.trim() !== '')) && (bot_set_carousel7_symbol_vol25_1s == 6 || bot_set_carousel7_cookie_symbol_vol25_1s == 6)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25_1s == 'start_bots') && ((currentvol_carousel7_symbol_vol25_1s == 5 && currentvol2_carousel7_symbol_vol25_1s == 5) || (currentvol_carousel7_cookie_symbol_vol25_1s == 5 && currentvol2_carousel7_cookie_symbol_vol25_1s == 5))) {
                        startBot_symbol_vol25_1s(martingale_active_carousel7_cookie_symbol_vol25_1s, lastNumber10_symbol_vol25_1s, lastNumber9_symbol_vol25_1s, lastNumber8_symbol_vol25_1s, lastNumber7_symbol_vol25_1s, lastNumber6_symbol_vol25_1s, lastNumber5_symbol_vol25_1s, lastNumber4_symbol_vol25_1s, lastNumber3_symbol_vol25_1s, lastNumber2_symbol_vol25_1s, lastNumber1_symbol_vol25_1s, currentRandom_symbol_vol25_1s, strNumber_symbol_vol25_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        
        if (currentRandom_symbol_vol25_1s !== null && lastNumber1_symbol_vol25_1s !== null && lastNumber2_symbol_vol25_1s !== null) {
            if ((tag5_carousel7 && tag6_carousel7 && tag8_carousel7 && tag9_carousel7) || first_instance_symbol_vol25_1s == true) {
                if (lastNumber6_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber5_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber4_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber3_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber2_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber1_symbol_vol25_1s == currentRandom_symbol_vol25_1s && (first_instance_symbol_vol25_1s == true || (tag5_carousel7.textContent.trim() !== '' && tag6_carousel7.textContent.trim() !== '' && tag8_carousel7.textContent.trim() !== '' && tag9_carousel7.textContent.trim() !== '')) && (bot_set_carousel7_symbol_vol25_1s == 7 || bot_set_carousel7_cookie_symbol_vol25_1s == 7)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25_1s == 'start_bots') && ((currentvol_carousel7_symbol_vol25_1s == 5 && currentvol2_carousel7_symbol_vol25_1s == 5) || (currentvol_carousel7_cookie_symbol_vol25_1s == 5 && currentvol2_carousel7_cookie_symbol_vol25_1s == 5))) {
                        startBot_symbol_vol25_1s(martingale_active_carousel7_cookie_symbol_vol25_1s, lastNumber10_symbol_vol25_1s, lastNumber9_symbol_vol25_1s, lastNumber8_symbol_vol25_1s, lastNumber7_symbol_vol25_1s, lastNumber6_symbol_vol25_1s, lastNumber5_symbol_vol25_1s, lastNumber4_symbol_vol25_1s, lastNumber3_symbol_vol25_1s, lastNumber2_symbol_vol25_1s, lastNumber1_symbol_vol25_1s, currentRandom_symbol_vol25_1s, strNumber_symbol_vol25_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25_1s !== null && lastNumber1_symbol_vol25_1s !== null && lastNumber2_symbol_vol25_1s !== null) {
            if ((tag5_carousel7 && tag6_carousel7 && tag8_carousel7 && tag9_carousel7) || first_instance_symbol_vol25_1s == true) {
                if (lastNumber7_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber6_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber5_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber4_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber3_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber2_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber1_symbol_vol25_1s == currentRandom_symbol_vol25_1s && (first_instance_symbol_vol25_1s == true || (tag5_carousel7.textContent.trim() !== '' && tag6_carousel7.textContent.trim() !== '' && tag8_carousel7.textContent.trim() !== '' && tag9_carousel7.textContent.trim() !== '')) && (bot_set_carousel7_symbol_vol25_1s == 8 || bot_set_carousel7_cookie_symbol_vol25_1s == 8)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25_1s == 'start_bots') && ((currentvol_carousel7_symbol_vol25_1s == 5 && currentvol2_carousel7_symbol_vol25_1s == 5) || (currentvol_carousel7_cookie_symbol_vol25_1s == 5 && currentvol2_carousel7_cookie_symbol_vol25_1s == 5))) {
                        startBot_symbol_vol25_1s(martingale_active_carousel7_cookie_symbol_vol25_1s, lastNumber10_symbol_vol25_1s, lastNumber9_symbol_vol25_1s, lastNumber8_symbol_vol25_1s, lastNumber7_symbol_vol25_1s, lastNumber6_symbol_vol25_1s, lastNumber5_symbol_vol25_1s, lastNumber4_symbol_vol25_1s, lastNumber3_symbol_vol25_1s, lastNumber2_symbol_vol25_1s, lastNumber1_symbol_vol25_1s, currentRandom_symbol_vol25_1s, strNumber_symbol_vol25_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25_1s !== null && lastNumber1_symbol_vol25_1s !== null && lastNumber2_symbol_vol25_1s !== null) {
            if ((tag5_carousel7 && tag6_carousel7 && tag8_carousel7 && tag9_carousel7) || first_instance_symbol_vol25_1s == true) {
                if (lastNumber8_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber7_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber6_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber5_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber4_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber3_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber2_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber1_symbol_vol25_1s == currentRandom_symbol_vol25_1s && (first_instance_symbol_vol25_1s == true || (tag5_carousel7.textContent.trim() !== '' && tag6_carousel7.textContent.trim() !== '' && tag8_carousel7.textContent.trim() !== '' && tag9_carousel7.textContent.trim() !== '')) && (bot_set_carousel7_symbol_vol25_1s == 9 || bot_set_carousel7_cookie_symbol_vol25_1s == 9)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25_1s == 'start_bots') && ((currentvol_carousel7_symbol_vol25_1s == 5 && currentvol2_carousel7_symbol_vol25_1s == 5) || (currentvol_carousel7_cookie_symbol_vol25_1s == 5 && currentvol2_carousel7_cookie_symbol_vol25_1s == 5))) {
                        startBot_symbol_vol25_1s(martingale_active_carousel7_cookie_symbol_vol25_1s, lastNumber10_symbol_vol25_1s, lastNumber9_symbol_vol25_1s, lastNumber8_symbol_vol25_1s, lastNumber7_symbol_vol25_1s, lastNumber6_symbol_vol25_1s, lastNumber5_symbol_vol25_1s, lastNumber4_symbol_vol25_1s, lastNumber3_symbol_vol25_1s, lastNumber2_symbol_vol25_1s, lastNumber1_symbol_vol25_1s, currentRandom_symbol_vol25_1s, strNumber_symbol_vol25_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol25_1s !== null && lastNumber1_symbol_vol25_1s !== null && lastNumber2_symbol_vol25_1s !== null) {
            if ((tag5_carousel7 && tag6_carousel7 && tag8_carousel7 && tag9_carousel7) || first_instance_symbol_vol25_1s == true) {
                if (lastNumber9_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber8_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber7_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber6_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber5_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber4_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber3_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber2_symbol_vol25_1s == currentRandom_symbol_vol25_1s && lastNumber1_symbol_vol25_1s == currentRandom_symbol_vol25_1s && (first_instance_symbol_vol25_1s == true || (tag5_carousel7.textContent.trim() !== '' && tag6_carousel7.textContent.trim() !== '' && tag8_carousel7.textContent.trim() !== '' && tag9_carousel7.textContent.trim() !== '')) && (bot_set_carousel7_symbol_vol25_1s == 10 || bot_set_carousel7_cookie_symbol_vol25_1s == 10)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol25_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol25_1s == 'start_bots') && ((currentvol_carousel7_symbol_vol25_1s == 5 && currentvol2_carousel7_symbol_vol25_1s == 5) || (currentvol_carousel7_cookie_symbol_vol25_1s == 5 && currentvol2_carousel7_cookie_symbol_vol25_1s == 5))) {
                        startBot_symbol_vol25_1s(martingale_active_carousel7_cookie_symbol_vol25_1s, lastNumber10_symbol_vol25_1s, lastNumber9_symbol_vol25_1s, lastNumber8_symbol_vol25_1s, lastNumber7_symbol_vol25_1s, lastNumber6_symbol_vol25_1s, lastNumber5_symbol_vol25_1s, lastNumber4_symbol_vol25_1s, lastNumber3_symbol_vol25_1s, lastNumber2_symbol_vol25_1s, lastNumber1_symbol_vol25_1s, currentRandom_symbol_vol25_1s, strNumber_symbol_vol25_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }
    }
};

window.addEventListener('load', function () {
    duration_amount_cookie_symbol_vol25_1s = getCookie('duration_amount_cookie');
    stake_amount_cookie_symbol_vol25_1s = getCookie('stake_amount_cookie');
    duration_unit_cookie_symbol_vol25_1s = getCookie('duration_unit_cookie');
    symbol_vol_cookie_symbol_vol25_1s = getCookie('symbol_vol_cookie');
    currency_cookie_symbol_vol25_1s = getCookie('ActiveCurrency')
    contract_text_cookie_symbol_vol25_1s = getCookie('contract_text_cookie');
    stake_or_payout_cookie_symbol_vol25_1s = getCookie('stake_or_payout_cookie')
    last_digit_prediction_cookie_symbol_vol25_1s = getCookie('last_digit_prediction_cookie')
    stake_amount_default_symbol_vol25_1s = getCookie('stake_amount_default')

    if (last_digit_prediction_cookie_symbol_vol25_1s) {
        last_digit_prediction_or_barrier_symbol_vol25_1s = last_digit_prediction_or_barrier_symbol_vol25_1s
    } else {
        let numericValue = last_digit_input_symbol_vol25_1s.value
        last_digit_prediction_or_barrier_symbol_vol25_1s = numericValue
    }
    if (symbol_vol_cookie_symbol_vol25_1s) {
        symbol_vol_symbol_vol25_1s = symbol_vol_cookie_symbol_vol25_1s;
    } else {
        symbol_vol_symbol_vol25_1s = "1HZ25V";
    }
    if (duration_unit_cookie_symbol_vol25_1s) {
        duration_unit_symbol_vol25_1s = duration_unit_cookie_symbol_vol25_1s;
    } else {
        duration_unit_symbol_vol25_1s = "t";
    }
    if (duration_amount_cookie_symbol_vol25_1s) {
        duration_amount_symbol_vol25_1s = parseInt(duration_amount_cookie_symbol_vol25_1s, 10);
    } else {
        duration_amount_symbol_vol25_1s = 1;
    }
    if (stake_amount_cookie_symbol_vol25_1s) {
        stake_amount_symbol_vol25_1s = parseFloat(stake_amount_cookie_symbol_vol25_1s);
    } else {
        stake_amount_symbol_vol25_1s = 10;
    }
    if (stake_amount_default_symbol_vol25_1s) {
        stake_amount_default_symbol_vol25_1s = parseFloat(stake_amount_default_symbol_vol25_1s);
    } else {
        stake_amount_default_symbol_vol25_1s = 10;
    }
    if (currency_cookie_symbol_vol25_1s) {
        currency_symbol_vol25_1s = currency_cookie_symbol_vol25_1s;
    } else {
        currency_symbol_vol25_1s = "USD";
    }
    if (contract_text_cookie_symbol_vol25_1s) {
        contract_symbol_vol25_1s = contract_text_cookie_symbol_vol25_1s;
    } else {
        contract_symbol_vol25_1s = "Matches/Differs";
    }
    if (stake_or_payout_cookie_symbol_vol25_1s) {
        stake_or_payout_symbol_vol25_1s = stake_or_payout_cookie_symbol_vol25_1s;
    } else {
        stake_or_payout_symbol_vol25_1s = "stake";
    }

    initializeApi(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response_symbol_General) {
            clearInterval(getAwaitingResponses)
        } else {
            
        }
    }, 2000);
});

async function order_propose_symbol_vol25_1s(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
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
                // let tooltip = document.getElementById('tooltiptext25');
                // tooltip.textContent = data.error.message;
                // tooltip.classList.add('tooltiptext10')
                
                connection.removeEventListener('message', proposalResponse, false);
                await api.disconnect();
                reject(new Error('Error in proposal'));
            } else if (data.msg_type === 'proposal') {

                proposal_id_symbol_vol25_1s = data.proposal.id;

                // let calc = displayProposalResult2(data, data.proposal.display_value, data.proposal.payout);

                // def_price_up_symbol_vol25_1s = data.proposal.display_value;
                // def_payout_up_symbol_vol25_1s = data.proposal.payout;
                // def_profit_up_symbol_vol25_1s = calc.NetProfit;
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

const unsubscribeProposal_symbol_vol25_1s = () => {
    connection.removeEventListener('message', proposalResponse_symbol_vol25_1s, false);
};

function convertTimestampTo12HourTime_symbol_vol25_1s(timestamp) {
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

function formatNumberAndBoldLastDecimal_symbol_vol25_1s(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart) {
        let lastDecimalDigit = decimalPart.slice(-1);
        decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
    } 
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}

let contract_status_html_symbol_vol25_1s = document.getElementById('contract_status_carousel7') 
let end_tic_off_trade_symbol_vol25_1s = document.getElementById('end_tic_off_trade_carousel7')            
let price_after_trade_figure_amount_symbol_vol25_1s = document.getElementById('price_after_trade_figure_amount_carousel7') 
let profit_figure_amount_symbol_vol25_1s = document.getElementById('profit_figure_amount_carousel7') 
let buy_price_figure_amount_symbol_vol25_1s = document.getElementById('buy_price_figure_amount_carousel7') 
let result_currency_html_symbol_vol25_1s = document.querySelectorAll('.result_currency')
let transaction_refrence_figure_symbol_vol25_1s = document.getElementById('transaction_refrence_figure_carousel7') 
let trade_start_time_symbol_vol25_1s = document.getElementById('trade_start_time_carousel7') 
let buy_price_text_symbol_vol25_1s = document.getElementById('buy_price_text_carousel7') 
let price_after_trade_text_symbol_vol25_1s = document.getElementById('price_after_trade_text_carousel7') 
let profit_text_symbol_vol25_1s = document.getElementById('profit_text_carousel7') 
let durr_amount_prop_count_symbol_vol25_1s = document.getElementById('durr_amount_prop_count_carousel7') 
let durr_amount_prop_symbol_vol25_1s = document.getElementById('durr_amount_prop_carousel7') 
let countdown_trade_symbol_vol25_1s = 0
let countdown_trade2_symbol_vol25_1s = 0

function before_trade_symbol_vol25_1s() {
    countdown_trade_symbol_vol25_1s = 0
    let allDigits = document.querySelectorAll('.ldgs_carousel7')
    let buy_price_text = document.getElementById('buy_price_text_carousel7')
    let price_after_trade_text = document.getElementById('price_after_trade_text_carousel7')
    let profit_text = document.getElementById('profit_text_carousel7')
    let durr_amount_prop_count = document.getElementById('durr_amount_prop_count_carousel7')
    let slide_trade_result = document.getElementById('slide_trade_result_carousel7')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel7')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel7')
    let profit_figure_amount = document.getElementById('profit_figure_amount_carousel7')
    contract_status_html_symbol_vol25_1s.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count.textContent = countdown_trade_symbol_vol25_1s
    durr_amount_prop.textContent = duration_amount_symbol_vol25_1s
    buy_price_figure_amount.textContent = def_price_up_symbol_vol25_1s
    price_after_trade_figure_amount.textContent = def_payout_up_symbol_vol25_1s
    profit_figure_amount.textContent = def_profit_up_symbol_vol25_1s

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
            if (digit.textContent != (last_digit_prediction_or_barrier_symbol_vol25_1s)) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound == 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier_symbol_vol25_1s) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}

function after_trade_symbol_vol25_1s(status, endDigit) {
    let slide_trade_result = document.getElementById('slide_trade_result_carousel7')
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

function formate_date_symbol_vol25_1s(datein) {
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

let allProposalOpenContract_symbol_vol25_1s = []
let longcodeProp_symbol_vol25_1s = null
let contract_ids_buy_symbol_vol25_1s = null
let contract_status_symbol_vol25_1s = null
let last_tick_symbol_vol25_1s = null
let profit_or_loss_symbol_vol25_1s = null
let final_price_symbol_vol25_1s = null
let payout_result_symbol_vol25_1s = null
let buy_price_symbol_vol25_1s = null
let contract_currency_symbol_vol25_1s = null
let time_of_trade_symbol_vol25_1s = null
let every_tick_symbol_vol25_1s = null
let contract_id_symbol_vol25_1s = null

let allProposalOpenContract2_symbol_vol25_1s = []
let longcodeProp2_symbol_vol25_1s = null
let contract_ids_buy2_symbol_vol25_1s = null
let contract_ids_sell2_symbol_vol25_1s = null
let contract_status2_symbol_vol25_1s = null
let last_tick2_symbol_vol25_1s = null
let profit_or_loss2_symbol_vol25_1s = null
let final_price2_symbol_vol25_1s = null
let payout_result2_symbol_vol25_1s = null
let buy_price2_symbol_vol25_1s = null
let contract_currency2_symbol_vol25_1s = null
let time_of_trade2_symbol_vol25_1s = null
let every_tick2_symbol_vol25_1s = null

function open_proposal_actions2_symbol_vol25_1s(data) {
    if (data.proposal_open_contract.contract_id == contract_id2_symbol_vol25_1s) {
        set_middle_trade1_symbol_vol25_1s(bot_is_running_or_stopped_symbol_vol25_1s)
        bot_buy_start_time_symbol_vol25_1s = formate_date_symbol_vol25_1s(data.proposal_open_contract.date_start)
        bot_buy_transaction_id_symbol_vol25_1s = data.proposal_open_contract.transaction_ids.buy
        bot_trade_type_symbol_vol25_1s = data.proposal_open_contract.contract_type
        bot_buy_price_symbol_vol25_1s = data.proposal_open_contract.buy_price
        bot_status_symbol_vol25_1s = data.proposal_open_contract.status == 'open' ? 'Pending' : data.proposal_open_contract.status
        bot_contract_id_symbol_vol25_1s = data.proposal_open_contract.contract_id
        start_trade_ref_symbol_vol25_1s(bot_buy_price_symbol_vol25_1s)

        if (firstContractReceived_symbol_vol25_1s == false) {
            append_result_symbol_vol25_1s(bot_id_symbol_vol25_1s, bot_buy_start_time_symbol_vol25_1s, bot_buy_transaction_id_symbol_vol25_1s, bot_trade_type_symbol_vol25_1s, bot_buy_price_symbol_vol25_1s, bot_status_symbol_vol25_1s);
            firstContractReceived_symbol_vol25_1s = true
        }

        longcodeProp2_symbol_vol25_1s = data.proposal_open_contract.longcode
        allProposalOpenContract2_symbol_vol25_1s.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information_carousel7').textContent = longcodeProp2_symbol_vol25_1s

        if (allProposalOpenContract2_symbol_vol25_1s.length > 0 && allProposalOpenContract2_symbol_vol25_1s[allProposalOpenContract2_symbol_vol25_1s.length - 1].length > 0) {
            let lastSubArray2 = allProposalOpenContract2_symbol_vol25_1s[allProposalOpenContract2_symbol_vol25_1s.length - 1];
            let lastElementOfLastSubArray2 = lastSubArray2[lastSubArray2.length - 1].tick_display_value;
            let numberString2 = lastElementOfLastSubArray2.toString();
            let lastCharacter2 = numberString2[numberString2.length - 1];
            handleNewNumber_symbol_vol25_1s(lastCharacter2);
            every_tick2_symbol_vol25_1s = lastElementOfLastSubArray2
            end_tic_off_trade_symbol_vol25_1s.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol25_1s(every_tick2_symbol_vol25_1s);
            if (countdown_trade2_symbol_vol25_1s < duration_amount_symbol_vol25_1s) {
                countdown_trade2_symbol_vol25_1s += 1
                durr_amount_prop_count_symbol_vol25_1s.textContent = countdown_trade_symbol_vol25_1s
            }
            if (data.proposal_open_contract.is_expired == 1 && end_slide_symbol_vol25_1s == true) {
                set_end_trade1_symbol_vol25_1s(bot_is_running_or_stopped_symbol_vol25_1s)
                end_slide_symbol_vol25_1s = false
            }
            contract_ids_buy2_symbol_vol25_1s = data.proposal_open_contract.transaction_ids.buy
            if (contract_ids_buy2_symbol_vol25_1s) {
                middle_trade_ref_symbol_vol25_1s(contract_ids_buy2_symbol_vol25_1s)
            }
            if (data.proposal_open_contract.status !== 'open') {
                let circle2_carousel7 = document.getElementById('circle2_carousel7')
                circle2_carousel7.classList.remove('circle_shadow_carousel7')
                bot_status_symbol_vol25_1s = data.proposal_open_contract.status
                bot_entry_spot_symbol_vol25_1s = data.proposal_open_contract.entry_tick
                bot_exit_spot_symbol_vol25_1s = data.proposal_open_contract.exit_tick
                bot_profit_loss_symbol_vol25_1s = data.proposal_open_contract.profit
                contract_status2_symbol_vol25_1s = data.proposal_open_contract.status
                last_tick2_symbol_vol25_1s = lastElementOfLastSubArray2
                profit_or_loss2_symbol_vol25_1s = data.proposal_open_contract.profit
                payout_result2_symbol_vol25_1s = data.proposal_open_contract.payout
                buy_price2_symbol_vol25_1s = data.proposal_open_contract.buy_price
                contract_currency2_symbol_vol25_1s = data.proposal_open_contract.currency
                contract_ids_buy2_symbol_vol25_1s = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2_symbol_vol25_1s = data.proposal_open_contract.expiry_time
                contract_ids_sell2_symbol_vol25_1s = data.proposal_open_contract.transaction_ids.sell

                end_trade_ref_symbol_vol25_1s(contract_ids_sell2_symbol_vol25_1s)
                if (profit_or_loss2_symbol_vol25_1s < 0) {
                    final_price2_symbol_vol25_1s = '0.00'
                } else if (profit_or_loss2_symbol_vol25_1s > 0) {
                    final_price2_symbol_vol25_1s = payout_result2_symbol_vol25_1s
                } else {
                    
                }
                if (contract_status2_symbol_vol25_1s == 'won' && !wonEncountered_symbol_vol25_1s) {
                    bot_total_wins_symbol_vol25_1s = bot_total_wins_symbol_vol25_1s + 1;
                    bot_total_profit_loss_symbol_vol25_1s = bot_total_profit_loss_symbol_vol25_1s + profit_or_loss2_symbol_vol25_1s;
                    bot_total_stake_symbol_vol25_1s = bot_total_stake_symbol_vol25_1s + buy_price2_symbol_vol25_1s
                    bot_total_runs_symbol_vol25_1s = bot_total_runs_symbol_vol25_1s + 1;
                    bot_total_payout_symbol_vol25_1s = bot_total_payout_symbol_vol25_1s + payout_result2_symbol_vol25_1s;
                    add_after_trade_symbol_vol25_1s(bot_id_symbol_vol25_1s, contract_id2_symbol_vol25_1s, bot_contract_id_symbol_vol25_1s, bot_entry_spot_symbol_vol25_1s, bot_exit_spot_symbol_vol25_1s, bot_profit_loss_symbol_vol25_1s, bot_status_symbol_vol25_1s, bot_total_runs_symbol_vol25_1s, bot_total_stake_symbol_vol25_1s, bot_total_payout_symbol_vol25_1s, bot_total_wins_symbol_vol25_1s, bot_total_loss_symbol_vol25_1s, bot_total_profit_loss_symbol_vol25_1s);
                    wonEncountered_symbol_vol25_1s = true;
                } else if (contract_status2_symbol_vol25_1s == 'lost') {
                    bot_total_loss_symbol_vol25_1s = bot_total_loss_symbol_vol25_1s + 1;
                    bot_total_profit_loss_symbol_vol25_1s = bot_total_profit_loss_symbol_vol25_1s + profit_or_loss2_symbol_vol25_1s;
                    bot_total_stake_symbol_vol25_1s = bot_total_stake_symbol_vol25_1s + buy_price2_symbol_vol25_1s
                    bot_total_runs_symbol_vol25_1s = bot_total_runs_symbol_vol25_1s + 1;
                    bot_total_payout_symbol_vol25_1s = bot_total_payout_symbol_vol25_1s - payout_result2_symbol_vol25_1s;
                    add_after_trade_symbol_vol25_1s(bot_id_symbol_vol25_1s, contract_id2_symbol_vol25_1s, bot_contract_id_symbol_vol25_1s, bot_entry_spot_symbol_vol25_1s, bot_exit_spot_symbol_vol25_1s, bot_profit_loss_symbol_vol25_1s, bot_status_symbol_vol25_1s, bot_total_runs_symbol_vol25_1s, bot_total_stake_symbol_vol25_1s, bot_total_payout_symbol_vol25_1s, bot_total_wins_symbol_vol25_1s, bot_total_loss_symbol_vol25_1s, bot_total_profit_loss_symbol_vol25_1s);
                    wonEncountered_symbol_vol25_1s = true;
                }
                if (contract_status2_symbol_vol25_1s == 'won' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol25_1s = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol25_1s = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol25_1s = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol25_1s = every_tick2_symbol_vol25_1s
                    bot_log_end_symbol_vol25_1s(log_buy_timestamp_bot_symbol_vol25_1s, log_sell_timestamp_bot_symbol_vol25_1s, log_message_entry_tick_symbol_vol25_1s, log_message_last_digit_symbol_vol25_1s)
                } else if (contract_status2_symbol_vol25_1s == 'lost' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol25_1s = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol25_1s = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol25_1s = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol25_1s = every_tick2_symbol_vol25_1s
                    bot_log_end_symbol_vol25_1s(log_buy_timestamp_bot_symbol_vol25_1s, log_sell_timestamp_bot_symbol_vol25_1s, log_message_entry_tick_symbol_vol25_1s, log_message_last_digit_symbol_vol25_1s)
                }
                contract_status_html_symbol_vol25_1s.textContent = contract_status2_symbol_vol25_1s
                end_tic_off_trade_symbol_vol25_1s.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol25_1s(last_tick2_symbol_vol25_1s);
                profit_figure_amount_symbol_vol25_1s.textContent = profit_or_loss2_symbol_vol25_1s
                price_after_trade_figure_amount_symbol_vol25_1s.textContent = final_price2_symbol_vol25_1s
                buy_price_figure_amount_symbol_vol25_1s.textContent = buy_price2_symbol_vol25_1s
                result_currency_html_symbol_vol25_1s.textContent = contract_currency2_symbol_vol25_1s
                transaction_refrence_figure_symbol_vol25_1s.textContent = contract_ids_buy2_symbol_vol25_1s
                trade_start_time_symbol_vol25_1s.innerHTML = convertTimestampTo12HourTime_symbol_vol25_1s(time_of_trade2_symbol_vol25_1s)
                buy_price_text_symbol_vol25_1s.textContent = 'Buy price'
                price_after_trade_text_symbol_vol25_1s.textContent = 'Final price'
                profit_text_symbol_vol25_1s.textContent = 'Profit'
                after_trade_symbol_vol25_1s(contract_status2_symbol_vol25_1s, lastCharacter2)
            } else {
            }
        } else {
            
        }
    }
}

let currentPosition1_symbol_vol25_1s = 0;
function moveSlider_symbol_vol25_1s(number) {
    const slider = document.getElementById('slide_trade_result_carousel7');
    const container = document.getElementById('last_digit_responds_carousel7');
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

    const target = document.querySelector(`.last_digits_carousel7.${stringnumber}`);
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
        currentPosition1_symbol_vol25_1s = newPosition;
    }
}

function handleNewNumber_symbol_vol25_1s(randomNumber) {
    const newPosition = randomNumber;
    moveSlider_symbol_vol25_1s(newPosition);
}

let log_close_and_info_cont_symbol_vol25_1s = document.getElementById('log_close_and_info_cont_carousel7');
let bot_log_show_cont_symbol_vol25_1s = document.getElementById('bot_log_show_cont_carousel7');
let bot_details_symbol_vol25_1s = document.getElementById('bot_details_carousel7');
let bot_details2_symbol_vol25_1s = document.getElementById('bot_details2_carousel7');

if (bot_log_show_cont_symbol_vol25_1s && bot_details_symbol_vol25_1s) {
    bot_details_symbol_vol25_1s.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol25_1s.style.display == 'none') {
            bot_log_show_cont_symbol_vol25_1s.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol25_1s.style.display = 'none'
        }
    });

    log_close_and_info_cont_symbol_vol25_1s.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_log_show_cont_symbol_vol25_1s.style.display == 'block') {
            bot_log_show_cont_symbol_vol25_1s.style.display = 'none'
        } else {
            bot_log_show_cont_symbol_vol25_1s.style.display = 'block'
        }
    });
} else {
    console.error('One or more elements are not found');
}

if (bot_log_show_cont_symbol_vol25_1s && bot_details_symbol_vol25_1s) {
    bot_details2_symbol_vol25_1s.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol25_1s.style.display == 'none') {
            bot_log_show_cont_symbol_vol25_1s.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol25_1s.style.display = 'none'
        }
    });
} else {
    console.error('One or more elements are not found');
}

let martingale_symbol_vol25_1s = document.getElementById('martingale_carousel7');
let flash_info_cont_symbol_vol25_1s = document.getElementById('flash_info_cont_carousel7');
let tick_check_amount_symbol_vol25_1s = document.getElementById('tick_check_amount_carousel7');
let settings_cont_symbol_vol25_1s = document.getElementById('settings_cont_carousel7');
let tick_check_symbol_vol25_1s = document.getElementById('tick_check_carousel7');
let martingale_jump_symbol_vol25_1s = document.getElementById('martingale_jump_carousel7');
let increase_jump_symbol_vol25_1s = document.getElementById('increase_jump_carousel7');
let reduce_jump_symbol_vol25_1s = document.getElementById('reduce_jump_carousel7');
let bot_settings_symbol_vol25_1s = document.getElementById('bot_settings_carousel7');
let bot_settings2_symbol_vol25_1s = document.getElementById('bot_settings2_carousel7');
const volumes2_symbol_vol25_1s = document.querySelectorAll(".slide_vol2_carousel7");
let tick_check2_symbol_vol25_1s = document.getElementById('tick_check2_carousel7');
let martingale2_symbol_vol25_1s = document.getElementById('martingale2_carousel7');
let martingale_jump2_symbol_vol25_1s = document.getElementById('martingale_jump2_carousel7');
let martingale_jump_set_symbol_vol25_1s = document.getElementById('martingale_jump_set_carousel7');
const last_digit_settings_symbol_vol25_1s = document.querySelectorAll(".last_digit_settings_carousel7");

martingale_symbol_vol25_1s.addEventListener('click', function () {
    if (martingale_symbol_vol25_1s.classList.contains('active_mat')) {
        martingale_symbol_vol25_1s.classList.remove('active_mat');
        martingale2_symbol_vol25_1s.classList.remove('active_mat');
        setCookie('martingale_carousel7', 'false')
        localStorage.setItem('martingale_carousel7', 'false')
        flash_info_cont_symbol_vol25_1s.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol25_1s.style.color = '#fff'
    } else {
        martingale_symbol_vol25_1s.classList.add('active_mat');
        martingale2_symbol_vol25_1s.classList.add('active_mat');
        setCookie('martingale_carousel7', 'true')
        localStorage.setItem('martingale_carousel7', 'true')
        flash_info_cont_symbol_vol25_1s.textContent = 'martigale is active'
        tick_check_amount_symbol_vol25_1s.style.color = '#fff'
    }
    if (flash_info_cont_symbol_vol25_1s.classList.contains('show_flash_info_carousel7')) {
        flash_info_cont_symbol_vol25_1s.classList.remove('show_flash_info_carousel7')
        setTimeout(() => {
            flash_info_cont_symbol_vol25_1s.classList.remove('show_flash_info_carousel7')
        }, 5000)
    } else {
        flash_info_cont_symbol_vol25_1s.classList.add('show_flash_info_carousel7')
        setTimeout(() => {
            flash_info_cont_symbol_vol25_1s.classList.remove('show_flash_info_carousel7')
        }, 5000)
    }
});

function bot_set_default_symbol_vol25_1s() {
    let curr_bot_set = localStorage.getItem('bot_set_carousel7');
    if (curr_bot_set === null) {
        setTimeout(bot_set_default_symbol_vol25_1s, 100);
        return;
    }
    tick_check_symbol_vol25_1s.textContent = curr_bot_set;
    tick_check2_symbol_vol25_1s.textContent = curr_bot_set;
}

bot_set_default_symbol_vol25_1s();

bot_settings_symbol_vol25_1s.addEventListener('click', function () {
    if (settings_cont_symbol_vol25_1s.style.display == 'none') {
        settings_cont_symbol_vol25_1s.style.display = 'block'
    } else {
        settings_cont_symbol_vol25_1s.style.display = 'none'
    }
});

document.addEventListener('click', (event) => {
    if (!bot_settings_symbol_vol25_1s.contains(event.target) && !settings_cont_symbol_vol25_1s.contains(event.target) && !martingale_jump_set_symbol_vol25_1s.contains(event.target)) {
        settings_cont_symbol_vol25_1s.style.display = 'none';
    }
});

last_digit_settings_symbol_vol25_1s.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.querySelector('.bot_text_carousel7').textContent.trim().replace(/\s+/g, ' ');
        if (bot_set == 'Last one digit bot') {
            localStorage.setItem('bot_set_carousel7', '1')
            setCookie('bot_set_carousel7', '1')
            localStorage.setItem('bot_set_store_carousel7', '1')
            setCookie('bot_set_store_carousel7', '1')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            localStorage.setItem('bot_set_carousel7', '2')
            setCookie('bot_set_carousel7', '2')
            localStorage.setItem('bot_set_store_carousel7', '2')
            setCookie('bot_set_store_carousel7', '2')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            localStorage.setItem('bot_set_carousel7', '3')
            setCookie('bot_set_carousel7', '3')
            localStorage.setItem('bot_set_store_carousel7', '3')
            setCookie('bot_set_store_carousel7', '3')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            localStorage.setItem('bot_set_carousel7', '4')
            setCookie('bot_set_carousel7', '4')
            localStorage.setItem('bot_set_store_carousel7', '4')
            setCookie('bot_set_store_carousel7', '4')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            localStorage.setItem('bot_set_carousel7', '5')
            setCookie('bot_set_carousel7', '5')
            localStorage.setItem('bot_set_store_carousel7', '5')
            setCookie('bot_set_store_carousel7', '5')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            localStorage.setItem('bot_set_carousel7', '6')
            setCookie('bot_set_carousel7', '6')
            localStorage.setItem('bot_set_store_carousel7', '6')
            setCookie('bot_set_store_carousel7', '6')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            localStorage.setItem('bot_set_carousel7', '7')
            setCookie('bot_set_carousel7', '7')
            localStorage.setItem('bot_set_store_carousel7', '7')
            setCookie('bot_set_store_carousel7', '7')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            localStorage.setItem('bot_set_carousel7', '8')
            setCookie('bot_set_carousel7', '8')
            localStorage.setItem('bot_set_store_carousel7', '8')
            setCookie('bot_set_store_carousel7', '8')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            localStorage.setItem('bot_set_carousel7', '9')
            setCookie('bot_set_carousel7', '9')
            localStorage.setItem('bot_set_store_carousel7', '9')
            setCookie('bot_set_store_carousel7', '9')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            localStorage.setItem('bot_set_carousel7', '10')
            setCookie('bot_set_carousel7', '10')
            localStorage.setItem('bot_set_store_carousel7', '10')
            setCookie('bot_set_store_carousel7', '10')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol25_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});


let jump_count_symbol_vol25_1s = 0

function jump_count_set_symbol_vol25_1s() {
    localStorage.setItem('bot_jump_carousel7', jump_count_symbol_vol25_1s)
    setCookie('bot_jump_carousel7', jump_count_symbol_vol25_1s)
}

function jump_count_set2_symbol_vol25_1s() {
    let stored_jump_count = localStorage.getItem('bot_jump_carousel7') ? localStorage.getItem('bot_jump_carousel7') : getCookie('bot_jump_carousel7');
    jump_count_symbol_vol25_1s = stored_jump_count !== null ? parseInt(stored_jump_count, 10) : 0;

    if (isNaN(jump_count_symbol_vol25_1s)) {
        jump_count_symbol_vol25_1s = 0;
    }
    if (jump_count_symbol_vol25_1s > 0) {
        martingale_jump_symbol_vol25_1s.textContent = 'j' + jump_count_symbol_vol25_1s
        martingale_jump2_symbol_vol25_1s.textContent = 'j' + jump_count_symbol_vol25_1s
    } else {
        martingale_jump_symbol_vol25_1s.textContent = ''
        martingale_jump2_symbol_vol25_1s.textContent = ''
    }
}

jump_count_set2_symbol_vol25_1s()

increase_jump_symbol_vol25_1s.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count_symbol_vol25_1s = jump_count_symbol_vol25_1s + 1
    jump_count_set_symbol_vol25_1s()
    jump_count_set2_symbol_vol25_1s()
})

reduce_jump_symbol_vol25_1s.addEventListener('click', (event) => {
    event.preventDefault()
    if (jump_count_symbol_vol25_1s > 0) {
        jump_count_symbol_vol25_1s = jump_count_symbol_vol25_1s - 1
        jump_count_set_symbol_vol25_1s()
        jump_count_set2_symbol_vol25_1s()
    }
})

bot_settings2_symbol_vol25_1s.addEventListener('click', function () {
    if (settings_cont_symbol_vol25_1s.style.display == 'none') {
        settings_cont_symbol_vol25_1s.style.display = 'block'
    } else {
        settings_cont_symbol_vol25_1s.style.display = 'none'
    }
});

martingale2_symbol_vol25_1s.addEventListener('click', function () {
    if (martingale2_symbol_vol25_1s.classList.contains('active_mat')) {
        martingale2_symbol_vol25_1s.classList.remove('active_mat');
        martingale_symbol_vol25_1s.classList.remove('active_mat');
        setCookie('martingale_carousel7', 'false')
        localStorage.setItem('martingale_carousel7', 'false')
        flash_info_cont_symbol_vol25_1s.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol25_1s.style.color = '#fff'
    } else {
        martingale2_symbol_vol25_1s.classList.add('active_mat');
        martingale_symbol_vol25_1s.classList.add('active_mat');
        setCookie('martingale_carousel7', 'true')
        localStorage.setItem('martingale_carousel7', 'true')
        flash_info_cont_symbol_vol25_1s.textContent = 'martigale is active'
        tick_check_amount_symbol_vol25_1s.style.color = '#fff'
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

let martingale_store_symbol_vol50 = [1.1, 11.1, 123.4, 1371.1, 15593.5]
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

let bot_state_carousel3_symbol_vol50 = "stop_bot"
let all_bot_start_stop1_symbol_vol50 = null
let all_bot_start_stop1_cookie_symbol_vol50 = null
let buttonContainer_carousel3_symbol_vol50 = document.querySelector('.click_change_carousel3');

function togglePlayPause_symbol_vol50() {
    var play_button_carousel3 = document.getElementById('play_button_carousel3');
    var pause_button_carousel3 = document.getElementById('pause_button_carousel3');
    if (play_button_carousel3) {
        bot_state_carousel3_symbol_vol50 = "stop_bot"
        play_button_carousel3.parentNode.removeChild(play_button_carousel3);

        var pause_button_carousel3 = document.createElement('div');
        pause_button_carousel3.id = 'pause_button_carousel3';
        pause_button_carousel3.className = 'pause_button_carousel3';
        pause_button_carousel3.innerHTML = '&#10074;&#10074;';
        buttonContainer_carousel3_symbol_vol50.appendChild(pause_button_carousel3);
        document.getElementById('bot_state_carousel3').textContent = 'Bot has stopped';
    } else if (pause_button_carousel3) {
        bot_state_carousel3_symbol_vol50 = "start_bot"
        pause_button_carousel3.parentNode.removeChild(pause_button_carousel3);

        var play_button_carousel3 = document.createElement('div');
        play_button_carousel3.id = 'play_button_carousel3';
        play_button_carousel3.className = 'play_button_carousel3';
        play_button_carousel3.innerHTML = '&#9654;';
        buttonContainer_carousel3_symbol_vol50.appendChild(play_button_carousel3);
        document.getElementById('bot_state_carousel3').textContent = 'Bot is running';
    }
}
buttonContainer_carousel3_symbol_vol50.addEventListener('click', togglePlayPause_symbol_vol50);
function getRandom_symbol_vol50(strNumber) {
    return randomNumber_symbol_vol50 = strNumber.charAt(strNumber.length - 1);
}

let currentvol_carousel3_symbol_vol50 = null
let currentvol2_carousel3_symbol_vol50 = null
let martingale_active_carousel3_symbol_vol50 = null
let bot_set_carousel3_symbol_vol50 = null
let set_bot_jump_carousel3_symbol_vol50 = null
let initial_set_jump_symbol_vol50 = true
let currentvol_carousel3_cookie_symbol_vol50 = null
let currentvol2_carousel3_cookie_symbol_vol50 = null
let martingale_active_carousel3_cookie_symbol_vol50 = null
let bot_set_carousel3_cookie_symbol_vol50 = null
let set_bot_jump_carousel3_cookie_symbol_vol50 = null
let initial_set_jump_cookie_symbol_vol50 = true
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
        let bot_start_stop = bot_state_carousel3_symbol_vol50

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

        if(data.echo_req.ticks === "R_50"){
            strNumber_symbol_vol50 = formatToFourDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_vol50 = getRandom1(strNumber_symbol_vol50);
        }

        stream50_carousel3_symbol_vol50.textContent = strNumber_symbol_vol50
        all_bot_start_stop1_symbol_vol50 = localStorage.getItem('all_bot_start_stop1')
        all_bot_start_stop1_cookie_symbol_vol50 = getCookie('all_bot_start_stop1')
        currentvol_carousel3_symbol_vol50 = localStorage.getItem('bot_current_vol1_carousel3');
        currentvol2_carousel3_symbol_vol50 = localStorage.getItem('bot_current_vol2_carousel3');
        martingale_active_carousel3_symbol_vol50 = localStorage.getItem('martingale_carousel3');
        bot_set_carousel3_symbol_vol50 = localStorage.getItem('bot_set_carousel3');
        set_bot_jump_carousel3_symbol_vol50 = localStorage.getItem('bot_jump_carousel3')
        currentvol_carousel3_cookie_symbol_vol50 = getCookie('bot_current_vol1_carousel3');
        currentvol2_carousel3_cookie_symbol_vol50 = getCookie('bot_current_vol2_carousel3');
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

        if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                if (currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 1 || bot_set_carousel3_cookie_symbol_vol50 == 1)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots') && ((currentvol_carousel3_symbol_vol50 == 5 && currentvol2_carousel3_symbol_vol50 == 5) || (currentvol_carousel3_cookie_symbol_vol50 == 5 && currentvol2_carousel3_cookie_symbol_vol50 == 5))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else if (bot_start_stop == 'stop_bot') {
                        
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
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots') && ((currentvol_carousel3_symbol_vol50 == 5 && currentvol2_carousel3_symbol_vol50 == 5) || (currentvol_carousel3_cookie_symbol_vol50 == 5 && currentvol2_carousel3_cookie_symbol_vol50 == 5))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                if (lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 3 || bot_set_carousel3_cookie_symbol_vol50 == 3)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots') && ((currentvol_carousel3_symbol_vol50 == 5 && currentvol2_carousel3_symbol_vol50 == 5) || (currentvol_carousel3_cookie_symbol_vol50 == 5 && currentvol2_carousel3_cookie_symbol_vol50 == 5))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                if (lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 4 || bot_set_carousel3_cookie_symbol_vol50 == 4)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots') && ((currentvol_carousel3_symbol_vol50 == 5 && currentvol2_carousel3_symbol_vol50 == 5) || (currentvol_carousel3_cookie_symbol_vol50 == 5 && currentvol2_carousel3_cookie_symbol_vol50 == 5))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else if (bot_start_stop == 'stop_bot') {
                        
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
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots') && ((currentvol_carousel3_symbol_vol50 == 5 && currentvol2_carousel3_symbol_vol50 == 5) || (currentvol_carousel3_cookie_symbol_vol50 == 5 && currentvol2_carousel3_cookie_symbol_vol50 == 5))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                if (lastNumber5_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber4_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 6 || bot_set_carousel3_cookie_symbol_vol50 == 6)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots') && ((currentvol_carousel3_symbol_vol50 == 5 && currentvol2_carousel3_symbol_vol50 == 5) || (currentvol_carousel3_cookie_symbol_vol50 == 5 && currentvol2_carousel3_cookie_symbol_vol50 == 5))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        
        if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                if (lastNumber6_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber5_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber4_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 7 || bot_set_carousel3_cookie_symbol_vol50 == 7)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots') && ((currentvol_carousel3_symbol_vol50 == 5 && currentvol2_carousel3_symbol_vol50 == 5) || (currentvol_carousel3_cookie_symbol_vol50 == 5 && currentvol2_carousel3_cookie_symbol_vol50 == 5))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                if (lastNumber7_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber6_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber5_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber4_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 8 || bot_set_carousel3_cookie_symbol_vol50 == 8)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots') && ((currentvol_carousel3_symbol_vol50 == 5 && currentvol2_carousel3_symbol_vol50 == 5) || (currentvol_carousel3_cookie_symbol_vol50 == 5 && currentvol2_carousel3_cookie_symbol_vol50 == 5))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                if (lastNumber8_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber7_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber6_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber5_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber4_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 9 || bot_set_carousel3_cookie_symbol_vol50 == 9)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots') && ((currentvol_carousel3_symbol_vol50 == 5 && currentvol2_carousel3_symbol_vol50 == 5) || (currentvol_carousel3_cookie_symbol_vol50 == 5 && currentvol2_carousel3_cookie_symbol_vol50 == 5))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50 !== null && lastNumber1_symbol_vol50 !== null && lastNumber2_symbol_vol50 !== null) {
            if ((tag5_carousel3 && tag6_carousel3 && tag8_carousel3 && tag9_carousel3) || first_instance_symbol_vol50 == true) {
                if (lastNumber9_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber8_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber7_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber6_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber5_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber4_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber3_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber2_symbol_vol50 == currentRandom_symbol_vol50 && lastNumber1_symbol_vol50 == currentRandom_symbol_vol50 && (first_instance_symbol_vol50 == true || (tag5_carousel3.textContent.trim() !== '' && tag6_carousel3.textContent.trim() !== '' && tag8_carousel3.textContent.trim() !== '' && tag9_carousel3.textContent.trim() !== '')) && (bot_set_carousel3_symbol_vol50 == 10 || bot_set_carousel3_cookie_symbol_vol50 == 10)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50 == 'start_bots') && ((currentvol_carousel3_symbol_vol50 == 5 && currentvol2_carousel3_symbol_vol50 == 5) || (currentvol_carousel3_cookie_symbol_vol50 == 5 && currentvol2_carousel3_cookie_symbol_vol50 == 5))) {
                        startBot_symbol_vol50(martingale_active_carousel3_cookie_symbol_vol50, lastNumber10_symbol_vol50, lastNumber9_symbol_vol50, lastNumber8_symbol_vol50, lastNumber7_symbol_vol50, lastNumber6_symbol_vol50, lastNumber5_symbol_vol50, lastNumber4_symbol_vol50, lastNumber3_symbol_vol50, lastNumber2_symbol_vol50, lastNumber1_symbol_vol50, currentRandom_symbol_vol50, strNumber_symbol_vol50)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }
    }
};

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
        last_digit_prediction_or_barrier_symbol_vol50 = last_digit_prediction_or_barrier_symbol_vol50
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
    let durr_amount_prop_count = document.getElementById('durr_amount_prop_count_carousel3')
    let slide_trade_result = document.getElementById('slide_trade_result_carousel3')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel3')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel3')
    let profit_figure_amount = document.getElementById('profit_figure_amount_carousel3')
    contract_status_html_symbol_vol50.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count.textContent = countdown_trade_symbol_vol50
    durr_amount_prop.textContent = duration_amount_symbol_vol50
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
                } else {
                    
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











































































let last_digit_input_symbol_vol50_1s = document.getElementById('last_digit_input')
let close_contract_result_container_symbol_vol50_1s = document.getElementById('close_contract_result_container_carousel8')
let buy_sell_two_symbol_vol50_1s = document.getElementById('buy_sell_two')
let trade_type_secound_symbol_vol50_1s = document.getElementById("trade_type_secound")
let attempting_buy2_carousel8_symbol_vol50_1s = document.getElementById("attempting_buy2_carousel8")
let buy_succeded2_carousel8_symbol_vol50_1s = document.getElementById("buy_succeded2_carousel8")
let contract_close2_carousel8_symbol_vol50_1s = document.getElementById("contract_close2_carousel8")
let stream50_1s_carousel8_symbol_vol50_1s = document.getElementById('stream50_1s_carousel8')

let last_digit_prediction_local_st_symbol_vol50_1s = null
let barrier_local_st_symbol_vol50_1s = null
let symbol_vol_text_local_st_symbol_vol50_1s = null
let contract_text_local_st_symbol_vol50_1s = null
let duration_amount_local_st_symbol_vol50_1s = null
let stake_amount_local_st_symbol_vol50_1s = null
let symbol_vol_local_st_symbol_vol50_1s = null
let duration_unit_local_st_symbol_vol50_1s = null
let last_digit_prediction_or_barrier_local_st_symbol_vol50_1s = null
let currency_local_st_symbol_vol50_1s = null
let stake_or_payout_local_st_symbol_vol50_1s = null
let proposal_id_local_st_symbol_vol50_1s = null
let last_digit_prediction_cookie_symbol_vol50_1s = null
let barrier_cookie_symbol_vol50_1s = null
let symbol_vol_text_cookie_symbol_vol50_1s = null
let contract_text_cookie_symbol_vol50_1s = null
let duration_amount_cookie_symbol_vol50_1s = null
let stake_amount_cookie_symbol_vol50_1s = null
let symbol_vol_cookie_symbol_vol50_1s = null
let duration_unit_cookie_symbol_vol50_1s = null
let last_digit_prediction_or_barrier_cookie_symbol_vol50_1s = null
let currency_cookie_symbol_vol50_1s = null
let stake_or_payout_cookie_symbol_vol50_1s = null
let proposal_id_cookie_symbol_vol50_1s = null
let stake_amount_default_symbol_vol50_1s = localStorage.getItem('stake_amount_default') || document.getElementById('stake_amount_input').value
let duration_unit_symbol_vol50_1s = null
let symbol_vol_symbol_vol50_1s = null
let duration_amount_symbol_vol50_1s = null
let stake_amount_symbol_vol50_1s = null
let last_digit_prediction_or_barrier_symbol_vol50_1s = null
let currency_symbol_vol50_1s = null
let contract_symbol_vol50_1s = null
let stake_or_payout_symbol_vol50_1s = null
let proposal_id_symbol_vol50_1s = null
let td2_account_id_carousel8_symbol_vol50_1s = document.getElementById('td2_account_id_carousel8')
let td2_no_of_runs_carousel8_symbol_vol50_1s = document.getElementById('td2_no_of_runs_carousel8')
let td2_total_stake_carousel8_symbol_vol50_1s = document.getElementById('td2_total_stake_carousel8')
let td2_total_payout_carousel8_symbol_vol50_1s = document.getElementById('td2_total_payout_carousel8')
let td2_total_wins_carousel8_symbol_vol50_1s = document.getElementById('td2_total_wins_carousel8')
let td2_total_loss_carousel8_symbol_vol50_1s = document.getElementById('td2_total_loss_carousel8')
let td2_total_profit_loss_carousel8_symbol_vol50_1s = document.getElementById('td2_total_profit_loss_carousel8')
let bot_total_runs_symbol_vol50_1s = 0
let bot_total_stake_symbol_vol50_1s = 0
let bot_total_payout_symbol_vol50_1s = 0
let bot_total_wins_symbol_vol50_1s = 0
let bot_total_loss_symbol_vol50_1s = 0
let bot_total_profit_loss_symbol_vol50_1s = 0
let randomNumber_symbol_vol50_1s = null;
let strNumber_symbol_vol50_1s = null;
let authorize_response_symbol_vol50_1s = null
let subscriptionId_symbol_vol50_1s = null
let randomNumber2_symbol_vol50_1s = null
let buy_contract_id_symbol_vol50_1s = null
let api_id_symbol_vol50_1s = null;
let api_token_symbol_vol50_1s = null;
let def_price_up_symbol_vol50_1s = null
let def_payout_up_symbol_vol50_1s = null
let def_profit_up_symbol_vol50_1s = null
let website_status_info_symbol_vol50_1s = 'initial'
let symbol50_1s_symbol_vol50_1s = null
let symbol50_1s_cookie_symbol_vol50_1s = null
let subscription_to_open_contract_symbol_vol50_1s = true

document.addEventListener('DOMContentLoaded', function () {
    setCookie('symbol50_1s', '1HZ50V')
    localStorage.setItem('symbol50_1s', '1HZ50V')

    symbol50_1s_symbol_vol50_1s = localStorage.getItem('symbol50_1s')
    symbol50_1s_cookie_symbol_vol50_1s = getCookie('symbol50_1s')

});

let bot_id_symbol_vol50_1s = 0
let bot_buy_start_time_symbol_vol50_1s = null
let bot_buy_transaction_id_symbol_vol50_1s = null
let bot_trade_type_symbol_vol50_1s = null
let bot_buy_price_symbol_vol50_1s = null
let bot_entry_spot_symbol_vol50_1s = null
let bot_exit_spot_symbol_vol50_1s = null
let bot_profit_loss_symbol_vol50_1s = null
let bot_status_symbol_vol50_1s = null
let firstContractReceived_symbol_vol50_1s = false;
let bot_is_running_or_stopped_symbol_vol50_1s = false
let end_slide_symbol_vol50_1s = true
let bot_contract_id_symbol_vol50_1s = null
let bot_unique_code_symbol_vol50_1s = null

async function add_after_trade_symbol_vol50_1s(bot_id, botuniqueCode, allContracts, entry_spot, exit_spot, profit_loss, status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss) {
    const tbody1_carousel8 = document.getElementById('tbody1_carousel8');

    if (botuniqueCode == allContracts) {
        let row_carousel8 = document.getElementById(`bot_carousel8${bot_id}`);
        if (!row_carousel8) {
            console.error(`Row with data-unique-code "bot_carousel8${bot_id}" not found.`);
            return;
        }

        const entry_spot_html_carousel8 = document.getElementById(`td5_carousel8${bot_id}`);
        const exit_spot_html_carousel8 = document.getElementById(`td6_carousel8${bot_id}`);
        const profit_loss_html_carousel8 = document.getElementById(`td8_carousel8${bot_id}`);
        const status_html_carousel8 = document.getElementById(`td9_carousel8${bot_id}`);

        if (entry_spot_html_carousel8) {
            entry_spot_html_carousel8.textContent = entry_spot
        } else {
            
        }
        if (exit_spot_html_carousel8) {
            exit_spot_html_carousel8.textContent = exit_spot
        } else {
            
        }
        if (profit_loss_html_carousel8) {
            profit_loss_html_carousel8.textContent = profit_loss
            let profitLossNumber = parseFloat(profit_loss);
            if (profitLossNumber < 0) {
                profit_loss_html_carousel8.style.color = 'red';
            } else {
                profit_loss_html_carousel8.style.color = 'green';
            }
        } else {
            
        }
        if (status_html_carousel8) {
            status_html_carousel8.textContent = status
            if (status == 'won') {
                status_html_carousel8.style.color = 'green'
            } else {
                status_html_carousel8.style.color = 'red'
            }
        } else {
            
        }
        td2_no_of_runs_carousel8_symbol_vol50_1s.textContent = bot_total_runs_symbol_vol50_1s
        td2_total_stake_carousel8_symbol_vol50_1s.textContent = bot_total_stake_symbol_vol50_1s
        td2_total_payout_carousel8_symbol_vol50_1s.textContent = Number(bot_total_payout_symbol_vol50_1s.toFixed(2));
        td2_total_wins_carousel8_symbol_vol50_1s.textContent = bot_total_wins_symbol_vol50_1s
        td2_total_wins_carousel8_symbol_vol50_1s.style.color = 'green'
        td2_total_loss_carousel8_symbol_vol50_1s.textContent = bot_total_loss_symbol_vol50_1s
        td2_total_loss_carousel8_symbol_vol50_1s.style.color = 'red'
        td2_total_profit_loss_carousel8_symbol_vol50_1s.textContent = Number(bot_total_profit_loss_symbol_vol50_1s.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss_symbol_vol50_1s.toFixed(2))) < 0) {
            td2_total_profit_loss_carousel8_symbol_vol50_1s.style.color = 'red'
        } else {
            td2_total_profit_loss_carousel8_symbol_vol50_1s.style.color = 'green'
        }
    }

}

const progressBar1_carousel8_symbol_vol50_1s = document.querySelector('.progress1_carousel8');
function fillProgressBar1_symbol_vol50_1s() {
    progressBar1_carousel8_symbol_vol50_1s.classList.add('prog1_carousel8')
}

const progressBar2_carousel8_symbol_vol50_1s = document.querySelector('.progress2_carousel8');
function fillProgressBar2_symbol_vol50_1s() {
    progressBar2_carousel8_symbol_vol50_1s.classList.add('prog2_carousel8')
}

function set_start_trade1_symbol_vol50_1s(bot_is_running_or_stopped) {
    let bot_state_carousel8 = document.getElementById('bot_state_carousel8')
    let circle1_carousel8 = document.getElementById('circle1_carousel8')
    let circle2_carousel8 = document.getElementById('circle2_carousel8')
    let circle3_carousel8 = document.getElementById('circle3_carousel8')

    if (circle1_carousel8.classList.contains("buy_signal_carousel8")) {
        circle1_carousel8.classList.remove('buy_signal_carousel8')
    }
    if (circle2_carousel8.classList.contains('circle_shadow_carousel8')) {
        circle2_carousel8.classList.remove('circle_shadow_carousel8')
    }
    if (circle2_carousel8.classList.contains('add_color_carousel8')) {
        circle2_carousel8.classList.remove('add_color_carousel8')
    }
    if (circle3_carousel8.classList.contains('add_color_carousel8')) {
        circle3_carousel8.classList.remove('add_color_carousel8')
    }
    if (progressBar1_carousel8_symbol_vol50_1s.classList.contains("prog1_carousel8")) {
        progressBar1_carousel8_symbol_vol50_1s.classList.remove('prog1_carousel8')
    }
    if (progressBar2_carousel8_symbol_vol50_1s.classList.contains("prog2_carousel8")) {
        progressBar2_carousel8_symbol_vol50_1s.classList.remove('prog2_carousel8')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel8.textContent = 'Bot is running'
        circle1_carousel8.classList.add('buy_signal_carousel8')
        setTimeout(fillProgressBar1_symbol_vol50_1s, 1000);
    } else {
        bot_state_carousel8.textContent = 'Bot has stopped'
        circle1_carousel8.classList.remove('buy_signal_carousel8')
    }

}

function start_trade_ref_symbol_vol50_1s(buy_price_ref) {
    if (attempting_buy2_carousel8_symbol_vol50_1s.classList.contains("attempting_buy2_show_carousel8")) {
        attempting_buy2_carousel8_symbol_vol50_1s.classList.remove("attempting_buy2_show_carousel8")
    }
    if (buy_succeded2_carousel8_symbol_vol50_1s.classList.contains("buy_succeded2_show_carousel8")) {
        buy_succeded2_carousel8_symbol_vol50_1s.classList.remove("buy_succeded2_show_carousel8")
    }
    if (contract_close2_carousel8_symbol_vol50_1s.classList.contains("contract_close2_show_carousel8")) {
        contract_close2_carousel8_symbol_vol50_1s.classList.remove("contract_close2_show_carousel8")
    }
    attempting_buy2_carousel8_symbol_vol50_1s.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2_carousel8_symbol_vol50_1s.classList.add('attempting_buy2_show_carousel8')
}


function set_middle_trade1_symbol_vol50_1s(bot_is_running_or_stopped) {
    let bot_state_carousel8 = document.getElementById('bot_state_carousel8')
    let circle1_carousel8 = document.getElementById('circle1_carousel8')
    let circle2_carousel8 = document.getElementById('circle2_carousel8')
    circle1_carousel8.classList.remove('buy_signal_carousel8')
    circle1_carousel8.classList.add('add_color_carousel8')

    function timmimg_shadow() {
        circle2_carousel8.classList.add('circle_shadow_carousel8')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel8.textContent = 'Bot is running'
        circle2_carousel8.classList.add('add_color_carousel8')
        setTimeout(timmimg_shadow, 1500);
    } else {
        bot_state_carousel8.textContent = 'Bot has stopped'
        circle2_carousel8.classList.remove('circle_shadow_carousel8_carousel8')
        circle2_carousel8.classList.remove('add-color_carousel8')
    }
}

function middle_trade_ref_symbol_vol50_1s(buy_ref) {
    buy_succeded2_carousel8_symbol_vol50_1s.textContent = `ID: ${buy_ref}`
    buy_succeded2_carousel8_symbol_vol50_1s.classList.add('buy_succeded2_show_carousel8')
}

function set_end_trade1_symbol_vol50_1s(bot_is_running_or_stopped) {
    let bot_state_carousel8 = document.getElementById('bot_state_carousel8')
    let circle2_carousel8 = document.getElementById('circle2_carousel8')
    let circle3_carousel8 = document.getElementById('circle3_carousel8')

    function timmimg_color() {
        circle3_carousel8.classList.add('add_color_carousel8')
    }
    if (circle2_carousel8.classList.contains('circle_shadow_carousel8')) {
        circle2_carousel8.classList.remove('circle_shadow_carousel8')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel8.textContent = 'Bot is running'
        setTimeout(fillProgressBar2_symbol_vol50_1s, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state_carousel8.textContent = 'Bot has stopped'
        circle3_carousel8.classList.remove('add_color_carousel8')
    }
}
function end_trade_ref_symbol_vol50_1s(sell_ref) {
    contract_close2_carousel8_symbol_vol50_1s.textContent = `ID: ${sell_ref}`
    contract_close2_carousel8_symbol_vol50_1s.classList.add('contract_close2_show_carousel8')
}

let proposal_open_contract2_symbol_vol50_1s = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})

const proposalOpenContractResponse2_symbol_vol50_1s = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol50_1s, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {
        
        open_proposal_actions2_symbol_vol50_1s(data)
    }
};

const getProposalOpenContract12_symbol_vol50_1s = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol50_1s);
    proposal_open_contract2_symbol_vol50_1s()
};

const getProposalOpenContract22_symbol_vol50_1s = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol50_1s);
};

const unsubscribeProposalOpenContract2_symbol_vol50_1s = () => {
    connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol50_1s, false);
};

function run_open_contract_proposal2_symbol_vol50_1s() {
    if (subscription_to_open_contract_symbol_vol50_1s == true) {
        getProposalOpenContract12_symbol_vol50_1s()
    } else {
        getProposalOpenContract22_symbol_vol50_1s()
    }
    subscription_to_open_contract_symbol_vol50_1s = false
}

function generateUniqueCode_symbol_vol50_1s(buy) {
    return buy.buy.contract_id;
}

let martingale_store_symbol_vol50_1s = [1.1, 11.1, 123.4, 1371.1, 15593.5]
let martingale_count_symbol_vol50_1s = 0
let initial_stake_symbol_vol50_1s = true
let contract_id2_symbol_vol50_1s = null
let wonEncountered_symbol_vol50_1s = false;

async function buy_bot_symbol_vol50_1s(martingale, current_number) {
    const slider = document.getElementById('slide_trade_result_carousel8').style.display = 'flex';

    last_digit_prediction_or_barrier_symbol_vol50_1s = parseInt(current_number);
    let contract_text_local_st = localStorage.getItem('contract_text_local_st')
    let contract_text_cookie = getCookie('contract_text_cookie')

    if (martingale == 'true' && contract_status2_symbol_vol50_1s == 'lost') {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol50_1s += 1
            stake_amount_symbol_vol50_1s = martingale_store_symbol_vol50_1s[martingale_count_symbol_vol50_1s]
        } else {
            stake_amount_symbol_vol50_1s = stake_amount_symbol_vol50_1s * 10.1
        }
    } else if (initial_stake_symbol_vol50_1s = true || (martingale == 'true' && contract_status2_symbol_vol50_1s == 'won')) {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol50_1s = 0
            stake_amount_symbol_vol50_1s = martingale_store_symbol_vol50_1s[martingale_count_symbol_vol50_1s]
        } else {
            stake_amount_symbol_vol50_1s = stake_amount_default_symbol_vol50_1s
        }
    } else {
        stake_amount_symbol_vol50_1s = stake_amount_default_symbol_vol50_1s
    }


    wonEncountered_symbol_vol50_1s = false
    before_trade_symbol_vol50_1s();
    allProposalOpenContract2_symbol_vol50_1s.length = 0;
    unsubscribeProposalOpenContract2_symbol_vol50_1s()

    try {
        await order_propose_symbol_vol50_1s(api, stake_amount_symbol_vol50_1s, last_digit_prediction_or_barrier_symbol_vol50_1s, stake_or_payout_symbol_vol50_1s, contract_symbol_vol50_1s, currency_symbol_vol50_1s, duration_amount_symbol_vol50_1s, duration_unit_symbol_vol50_1s, symbol50_1s_symbol_vol50_1s);

        let buy = await api.buy({
            "buy": String(proposal_id_symbol_vol50_1s),
            "price": parseFloat(stake_amount_symbol_vol50_1s)
        });

        contract_id2_symbol_vol50_1s = generateUniqueCode_symbol_vol50_1s(buy)

        run_open_contract_proposal2_symbol_vol50_1s()
        initial_stake_symbol_vol50_1s = false

    } catch (error) {
        console.error('Error during trade:', error);
    }
}

async function append_result_symbol_vol50_1s(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status) {

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

    const tbody_carousel8 = document.getElementById('tbody1_carousel8');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel8 = document.createElement('tr');
            row_carousel8.id = `bot_carousel8${item.id}`;

            const td1_carousel8 = document.createElement('td');
            td1_carousel8.textContent = item.id;
            td1_carousel8.id = `td1_carousel8${item.id}`;
            row_carousel8.appendChild(td1_carousel8);

            const td2_carousel8 = document.createElement('td');
            td2_carousel8.textContent = item.timestamp;
            td2_carousel8.id = `td2_carousel8${item.id}`;
            row_carousel8.appendChild(td2_carousel8);

            const td3_carousel8 = document.createElement('td');
            td3_carousel8.textContent = item.reference;
            td3_carousel8.id = `td3_carousel8${item.id}`;
            row_carousel8.appendChild(td3_carousel8);

            const td4_carousel8 = document.createElement('td');
            td4_carousel8.textContent = item.tradeType;
            td4_carousel8.id = `td4_carousel8${item.id}`;
            row_carousel8.appendChild(td4_carousel8);

            const td5_carousel8 = document.createElement('td');
            td5_carousel8.textContent = item.entrySpot;
            td5_carousel8.id = `td5_carousel8${item.id}`;
            row_carousel8.appendChild(td5_carousel8);

            const td6_carousel8 = document.createElement('td');
            td6_carousel8.textContent = item.exitSpot;
            td6_carousel8.id = `td6_carousel8${item.id}`;
            row_carousel8.appendChild(td6_carousel8);

            const td7_carousel8 = document.createElement('td');
            td7_carousel8.textContent = item.buyPrice;
            td7_carousel8.id = `td7_carousel8${item.id}`;
            row_carousel8.appendChild(td7_carousel8);

            const td8_carousel8 = document.createElement('td');
            td8_carousel8.textContent = item.profitLoss;
            td8_carousel8.id = `td8_carousel8${item.id}`;
            row_carousel8.appendChild(td8_carousel8);

            const td9_carousel8 = document.createElement('td');
            td9_carousel8.textContent = item.status;
            td9_carousel8.id = `td9_carousel8${item.id}`;
            row_carousel8.appendChild(td9_carousel8);

            if (tbody_carousel8.firstChild) {
                tbody_carousel8.insertBefore(row_carousel8, tbody_carousel8.firstChild);
            } else {
                tbody_carousel8.appendChild(row_carousel8);
            }
        });
    }
    appendRows(backendData)
}

let log_timestamp_current_symbol_vol50_1s = null
let log_buy_timestamp_bot_symbol_vol50_1s = null
let log_sell_timestamp_bot_symbol_vol50_1s = null
let log_message10_symbol_vol50_1s = null
let log_message9_symbol_vol50_1s = null
let log_message8_symbol_vol50_1s = null
let log_message7_symbol_vol50_1s = null
let log_message6_symbol_vol50_1s = null
let log_message5_symbol_vol50_1s = null
let log_message4_symbol_vol50_1s = null
let log_message3_symbol_vol50_1s = null
let log_message2_symbol_vol50_1s = null
let log_message1_symbol_vol50_1s = null
let log_message_curr_symbol_vol50_1s = null
let log_message_curr_tick_symbol_vol50_1s = null
let log_message_last_digit_symbol_vol50_1s = null
let log_message_entry_tick_symbol_vol50_1s = null
let appended_symbol_vol50_1s = true
let log_id_symbol_vol50_1s = 0

function format_log_current_time_symbol_vol50_1s() {
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

async function bot_log_symbol_vol50_1s(last_ten_tick, last_nine_tick, last_eight_tick, last_seven_tick, last_six_tick, last_five_tick, last_four_tick, last_three_tick, last_two_tick, last_one_tick, current_tick, current_tick_full) {

    const backendData = [
        {
            log_message10_symbol_vol50_1s: last_ten_tick,
            log_message9_symbol_vol50_1s: last_nine_tick,
            log_message8_symbol_vol50_1s: last_eight_tick,
            log_message7_symbol_vol50_1s: last_seven_tick,
            log_message6_symbol_vol50_1s: last_six_tick,
            log_message5_symbol_vol50_1s: last_five_tick,
            log_message4_symbol_vol50_1s: last_four_tick,
            log_message3_symbol_vol50_1s: last_three_tick,
            log_message2_symbol_vol50_1s: last_two_tick,
            log_message1_symbol_vol50_1s: last_one_tick,
            log_message_curr_symbol_vol50_1s: current_tick,
            log_message_curr_tick_symbol_vol50_1s: current_tick_full,
        },
    ];

    const log_tbody_carousel8 = document.getElementById('log_tbody1_carousel8');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel8 = document.createElement('tr');
            row_carousel8.id = `log_bot_carousel8${log_id_symbol_vol50_1s}`;

            const td1_carousel8 = document.createElement('td');
            td1_carousel8.textContent = log_timestamp_current_symbol_vol50_1s;
            td1_carousel8.id = `log_td1_carousel8${log_id_symbol_vol50_1s}`;
            td1_carousel8.classList.add('lod_td1_carousel8')
            row_carousel8.appendChild(td1_carousel8);

            const td2_carousel8 = document.createElement('td');

            if (log_message10_symbol_vol50_1s == null) {
                log_message10_symbol_vol50_1s = ''
            }
            if (log_message9_symbol_vol50_1s == null) {
                log_message9_symbol_vol50_1s = ''
            }
            if (log_message8_symbol_vol50_1s == null) {
                log_message8_symbol_vol50_1s = ''
            }
            if (log_message7_symbol_vol50_1s == null) {
                log_message7_symbol_vol50_1s = ''
            }
            if (log_message6_symbol_vol50_1s == null) {
                log_message6_symbol_vol50_1s = ''
            }
            if (log_message5_symbol_vol50_1s == null) {
                log_message5_symbol_vol50_1s = ''
            }

            if (log_message4_symbol_vol50_1s == null) {
                log_message4_symbol_vol50_1s = ''
            }

            if (log_message3_symbol_vol50_1s == null) {
                log_message3_symbol_vol50_1s = ''
            }

            if (log_message2_symbol_vol50_1s == null) {
                log_message2_symbol_vol50_1s = ''
            }

            if (log_message1_symbol_vol50_1s == null) {
                log_message1_symbol_vol50_1s = ''
            }

            if (log_message_curr_symbol_vol50_1s == null) {
                log_message_curr_symbol_vol50_1s = ''
            }

            td2_carousel8.textContent = `last ten ticks:  ${item.log_message10_symbol_vol50_1s} ${item.log_message9_symbol_vol50_1s} ${item.log_message8_symbol_vol50_1s} ${item.log_message7_symbol_vol50_1s} ${item.log_message6_symbol_vol50_1s} ${item.log_message5_symbol_vol50_1s} ${item.log_message4_symbol_vol50_1s} ${item.log_message3_symbol_vol50_1s} ${item.log_message2_symbol_vol50_1s} ${item.log_message1_symbol_vol50_1s}          current tick ${item.log_message_curr_symbol_vol50_1s}    ${item.log_message_curr_tick_symbol_vol50_1s}`;

            td2_carousel8.style.whiteSpace = 'pre'
            td2_carousel8.id = `log_td2_carousel8${log_id_symbol_vol50_1s}`;
            td2_carousel8.classList.add('lod_td2_carousel8')
            row_carousel8.appendChild(td2_carousel8);

            const td3_carousel8 = document.createElement('td');
            td3_carousel8.textContent = 'this is the text'
            td3_carousel8.style.whiteSpace = 'pre'
            td3_carousel8.id = `log_td3_carousel8${log_id_symbol_vol50_1s}`;
            td3_carousel8.classList.add('lod_td3_carousel8')
            row_carousel8.appendChild(td3_carousel8);

            if (log_tbody_carousel8.firstChild) {
                log_tbody_carousel8.insertBefore(row_carousel8, log_tbody_carousel8.firstChild);
                appended_symbol_vol50_1s = true
            } else {
                log_tbody_carousel8.appendChild(row_carousel8);
                appended_symbol_vol50_1s = true
            }
        });
    }
    appendRows(backendData)
}

async function bot_log_end_symbol_vol50_1s(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td_carousel8 = document.getElementById(`log_td3_carousel8${log_id_symbol_vol50_1s}`)

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

    log_buy_timestamp_bot_symbol_vol50_1s = formate_log_date(bot_buy_time_stamp)
    log_sell_timestamp_bot_symbol_vol50_1s = formate_log_date(bot_sell_time_stamp)

    if (target_td_carousel8) {
        target_td_carousel8.textContent = `buy_time:  ${log_buy_timestamp_bot_symbol_vol50_1s}        sell_time:  ${log_sell_timestamp_bot_symbol_vol50_1s}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

        log_id_symbol_vol50_1s += 1
    } else {
        
    }
}

let first_instance_symbol_vol50_1s = true

async function startBot_symbol_vol50_1s(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber) {
    bot_is_running_or_stopped_symbol_vol50_1s = true;
    log_timestamp_current_symbol_vol50_1s = format_log_current_time_symbol_vol50_1s()
    set_start_trade1_symbol_vol50_1s(bot_is_running_or_stopped_symbol_vol50_1s);
    bot_id_symbol_vol50_1s += 1;
    firstContractReceived_symbol_vol50_1s = false;
    end_slide_symbol_vol50_1s = true;
    bot_entry_spot_symbol_vol50_1s = '';
    bot_exit_spot_symbol_vol50_1s = '';
    bot_profit_loss_symbol_vol50_1s = '';
    bot_status_symbol_vol50_1s = 'pending';
    bot_log_symbol_vol50_1s(lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
    await buy_bot_symbol_vol50_1s(martingale, currentRandom);
    first_instance_symbol_vol50_1s = false
}

let bot_state_carousel8_symbol_vol50_1s = "stop_bot"
let all_bot_start_stop1_symbol_vol50_1s = null
let all_bot_start_stop1_cookie_symbol_vol50_1s = null
let buttonContainer_carousel8_symbol_vol50_1s = document.querySelector('.click_change_carousel8');

function togglePlayPause_symbol_vol50_1s() {
    var play_button_carousel8 = document.getElementById('play_button_carousel8');
    var pause_button_carousel8 = document.getElementById('pause_button_carousel8');
    if (play_button_carousel8) {
        bot_state_carousel8_symbol_vol50_1s = "stop_bot"
        play_button_carousel8.parentNode.removeChild(play_button_carousel8);

        var pause_button_carousel8 = document.createElement('div');
        pause_button_carousel8.id = 'pause_button_carousel8';
        pause_button_carousel8.className = 'pause_button_carousel8';
        pause_button_carousel8.innerHTML = '&#10074;&#10074;';
        buttonContainer_carousel8_symbol_vol50_1s.appendChild(pause_button_carousel8);
        document.getElementById('bot_state_carousel8').textContent = 'Bot has stopped';
    } else if (pause_button_carousel8) {
        bot_state_carousel8_symbol_vol50_1s = "start_bot"
        pause_button_carousel8.parentNode.removeChild(pause_button_carousel8);

        var play_button_carousel8 = document.createElement('div');
        play_button_carousel8.id = 'play_button_carousel8';
        play_button_carousel8.className = 'play_button_carousel8';
        play_button_carousel8.innerHTML = '&#9654;';
        buttonContainer_carousel8_symbol_vol50_1s.appendChild(play_button_carousel8);
        document.getElementById('bot_state_carousel8').textContent = 'Bot is running';
    }
}
buttonContainer_carousel8_symbol_vol50_1s.addEventListener('click', togglePlayPause_symbol_vol50_1s);
function getRandom_symbol_vol50_1s(strNumber) {
    return randomNumber_symbol_vol50_1s = strNumber.charAt(strNumber.length - 1);
}

let currentvol_carousel8_symbol_vol50_1s = null
let currentvol2_carousel8_symbol_vol50_1s = null
let martingale_active_carousel8_symbol_vol50_1s = null
let bot_set_carousel8_symbol_vol50_1s = null
let set_bot_jump_carousel8_symbol_vol50_1s = null
let initial_set_jump_symbol_vol50_1s = true
let currentvol_carousel8_cookie_symbol_vol50_1s = null
let currentvol2_carousel8_cookie_symbol_vol50_1s = null
let martingale_active_carousel8_cookie_symbol_vol50_1s = null
let bot_set_carousel8_cookie_symbol_vol50_1s = null
let set_bot_jump_carousel8_cookie_symbol_vol50_1s = null
let initial_set_jump_cookie_symbol_vol50_1s = true
let currentRandom_symbol_vol50_1s = null
let lastNumber1_symbol_vol50_1s = currentRandom_symbol_vol50_1s;
let lastNumber2_symbol_vol50_1s = lastNumber1_symbol_vol50_1s;
let lastNumber3_symbol_vol50_1s = lastNumber2_symbol_vol50_1s;
let lastNumber4_symbol_vol50_1s = lastNumber3_symbol_vol50_1s;
let lastNumber5_symbol_vol50_1s = lastNumber4_symbol_vol50_1s;
let lastNumber6_symbol_vol50_1s = lastNumber5_symbol_vol50_1s;
let lastNumber7_symbol_vol50_1s = lastNumber6_symbol_vol50_1s;
let lastNumber8_symbol_vol50_1s = lastNumber7_symbol_vol50_1s;
let lastNumber9_symbol_vol50_1s = lastNumber8_symbol_vol50_1s;
let lastNumber10_symbol_vol50_1s = lastNumber9_symbol_vol50_1s;

const tickResponse_symbol_vol50_1s = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', tickResponse_symbol_vol50_1s, false);
        await api.disconnect();
    }

    function getRandom1(strNumber1) {
        return randomNumber_symbol_vol50_1s = strNumber1.charAt(strNumber1.length - 1);
    }

    lastNumber10_symbol_vol50_1s = lastNumber9_symbol_vol50_1s
    lastNumber9_symbol_vol50_1s = lastNumber8_symbol_vol50_1s
    lastNumber8_symbol_vol50_1s = lastNumber7_symbol_vol50_1s
    lastNumber7_symbol_vol50_1s = lastNumber6_symbol_vol50_1s
    lastNumber6_symbol_vol50_1s = lastNumber5_symbol_vol50_1s
    lastNumber5_symbol_vol50_1s = lastNumber4_symbol_vol50_1s
    lastNumber4_symbol_vol50_1s = lastNumber3_symbol_vol50_1s
    lastNumber3_symbol_vol50_1s = lastNumber2_symbol_vol50_1s
    lastNumber2_symbol_vol50_1s = lastNumber1_symbol_vol50_1s
    lastNumber1_symbol_vol50_1s = currentRandom_symbol_vol50_1s

    if (data.msg_type === 'tick') {
        let bot_start_stop = bot_state_carousel8_symbol_vol50_1s

        subscriptionId_symbol_vol50_1s = data.subscription.id;
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

        if(data.echo_req.ticks === "1HZ50V"){
            strNumber_symbol_vol50_1s = formatToTwoDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_vol50_1s = getRandom1(strNumber_symbol_vol50_1s);
        }

        stream50_1s_carousel8_symbol_vol50_1s.textContent = strNumber_symbol_vol50_1s
        all_bot_start_stop1_symbol_vol50_1s = localStorage.getItem('all_bot_start_stop1')
        all_bot_start_stop1_cookie_symbol_vol50_1s = getCookie('all_bot_start_stop1')
        currentvol_carousel8_symbol_vol50_1s = localStorage.getItem('bot_current_vol1_carousel8');
        currentvol2_carousel8_symbol_vol50_1s = localStorage.getItem('bot_current_vol2_carousel8');
        martingale_active_carousel8_symbol_vol50_1s = localStorage.getItem('martingale_carousel8');
        bot_set_carousel8_symbol_vol50_1s = localStorage.getItem('bot_set_carousel8');
        set_bot_jump_carousel8_symbol_vol50_1s = localStorage.getItem('bot_jump_carousel8')
        currentvol_carousel8_cookie_symbol_vol50_1s = getCookie('bot_current_vol1_carousel8');
        currentvol2_carousel8_cookie_symbol_vol50_1s = getCookie('bot_current_vol2_carousel8');
        martingale_active_carousel8_cookie_symbol_vol50_1s = getCookie('martingale_carousel8');
        bot_set_carousel8_cookie_symbol_vol50_1s = getCookie('bot_set_carousel8');
        set_bot_jump_carousel8_cookie_symbol_vol50_1s = getCookie('bot_jump_carousel8')

        if (((set_bot_jump_carousel8_symbol_vol50_1s && set_bot_jump_carousel8_symbol_vol50_1s > 0) && contract_status2_symbol_vol50_1s == 'lost') || ((set_bot_jump_carousel8_cookie_symbol_vol50_1s && set_bot_jump_carousel8_cookie_symbol_vol50_1s > 0) && contract_status2_symbol_vol50_1s == 'lost')) {
            bot_set_carousel8_symbol_vol50_1s = (parseInt(bot_set_carousel8_symbol_vol50_1s) + parseInt(set_bot_jump_carousel8_symbol_vol50_1s)) !== null ? (parseInt(bot_set_carousel8_symbol_vol50_1s) + parseInt(set_bot_jump_carousel8_symbol_vol50_1s)) : (parseInt(bot_set_carousel8_cookie_symbol_vol50_1s) + parseInt(set_bot_jump_carousel8_cookie_symbol_vol50_1s))
            contract_status2_symbol_vol50_1s == 'reset'
        } else if ((initial_set_jump_symbol_vol50_1s == true || (contract_status2_symbol_vol50_1s == 'won' && (set_bot_jump_carousel8_symbol_vol50_1s && set_bot_jump_carousel8_symbol_vol50_1s > 0))) || (initial_set_jump_cookie_symbol_vol50_1s == true || (contract_status2_symbol_vol50_1s == 'won' && (set_bot_jump_carousel8_cookie_symbol_vol50_1s && set_bot_jump_carousel8_cookie_symbol_vol50_1s > 0)))) {
            bot_set_carousel8_symbol_vol50_1s = localStorage.getItem('bot_set_carousel8') ? localStorage.getItem('bot_set_carousel8') : getCookie('bot_set_carousel8');
            initial_set_jump_symbol_vol50_1s = false
            initial_set_jump_cookie_symbol_vol50_1s = false
        } else {
            bot_set_carousel8_symbol_vol50_1s = localStorage.getItem('bot_set_carousel8') ? localStorage.getItem('bot_set_carousel8') : getCookie("bot_set_carousel8");
        }
        let bot_count = bot_id_symbol_vol50_1s

        const tag5_carousel8 = document.getElementById(`td5_carousel8${bot_count}`);
        const tag6_carousel8 = document.getElementById(`td6_carousel8${bot_count}`);
        const tag8_carousel8 = document.getElementById(`td8_carousel8${bot_count}`);
        const tag9_carousel8 = document.getElementById(`td9_carousel8${bot_count}`);

        if (currentRandom_symbol_vol50_1s !== null && lastNumber1_symbol_vol50_1s !== null && lastNumber2_symbol_vol50_1s !== null) {
            if ((tag5_carousel8 && tag6_carousel8 && tag8_carousel8 && tag9_carousel8) || first_instance_symbol_vol50_1s == true) {
                if (currentRandom_symbol_vol50_1s && (first_instance_symbol_vol50_1s == true || (tag5_carousel8.textContent.trim() !== '' && tag6_carousel8.textContent.trim() !== '' && tag8_carousel8.textContent.trim() !== '' && tag9_carousel8.textContent.trim() !== '')) && (bot_set_carousel8_symbol_vol50_1s == 1 || bot_set_carousel8_cookie_symbol_vol50_1s == 1)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50_1s == 'start_bots') && ((currentvol_carousel8_symbol_vol50_1s == 5 && currentvol2_carousel8_symbol_vol50_1s == 5) || (currentvol_carousel8_cookie_symbol_vol50_1s == 5 && currentvol2_carousel8_cookie_symbol_vol50_1s == 5))) {
                        startBot_symbol_vol50_1s(martingale_active_carousel8_cookie_symbol_vol50_1s, lastNumber10_symbol_vol50_1s, lastNumber9_symbol_vol50_1s, lastNumber8_symbol_vol50_1s, lastNumber7_symbol_vol50_1s, lastNumber6_symbol_vol50_1s, lastNumber5_symbol_vol50_1s, lastNumber4_symbol_vol50_1s, lastNumber3_symbol_vol50_1s, lastNumber2_symbol_vol50_1s, lastNumber1_symbol_vol50_1s, currentRandom_symbol_vol50_1s, strNumber_symbol_vol50_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50_1s !== null && lastNumber1_symbol_vol50_1s !== null && lastNumber2_symbol_vol50_1s !== null) {
            if ((tag5_carousel8 && tag6_carousel8 && tag8_carousel8 && tag9_carousel8) || first_instance_symbol_vol50_1s == true) {
                if (lastNumber1_symbol_vol50_1s == currentRandom_symbol_vol50_1s && (first_instance_symbol_vol50_1s == true || (tag5_carousel8.textContent.trim() !== '' && tag6_carousel8.textContent.trim() !== '' && tag8_carousel8.textContent.trim() !== '' && tag9_carousel8.textContent.trim() !== '')) && (bot_set_carousel8_symbol_vol50_1s == 2 || bot_set_carousel8_cookie_symbol_vol50_1s == 2)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50_1s == 'start_bots') && ((currentvol_carousel8_symbol_vol50_1s == 5 && currentvol2_carousel8_symbol_vol50_1s == 5) || (currentvol_carousel8_cookie_symbol_vol50_1s == 5 && currentvol2_carousel8_cookie_symbol_vol50_1s == 5))) {
                        startBot_symbol_vol50_1s(martingale_active_carousel8_cookie_symbol_vol50_1s, lastNumber10_symbol_vol50_1s, lastNumber9_symbol_vol50_1s, lastNumber8_symbol_vol50_1s, lastNumber7_symbol_vol50_1s, lastNumber6_symbol_vol50_1s, lastNumber5_symbol_vol50_1s, lastNumber4_symbol_vol50_1s, lastNumber3_symbol_vol50_1s, lastNumber2_symbol_vol50_1s, lastNumber1_symbol_vol50_1s, currentRandom_symbol_vol50_1s, strNumber_symbol_vol50_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50_1s !== null && lastNumber1_symbol_vol50_1s !== null && lastNumber2_symbol_vol50_1s !== null) {
            if ((tag5_carousel8 && tag6_carousel8 && tag8_carousel8 && tag9_carousel8) || first_instance_symbol_vol50_1s == true) {
                if (lastNumber2_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber1_symbol_vol50_1s == currentRandom_symbol_vol50_1s && (first_instance_symbol_vol50_1s == true || (tag5_carousel8.textContent.trim() !== '' && tag6_carousel8.textContent.trim() !== '' && tag8_carousel8.textContent.trim() !== '' && tag9_carousel8.textContent.trim() !== '')) && (bot_set_carousel8_symbol_vol50_1s == 3 || bot_set_carousel8_cookie_symbol_vol50_1s == 3)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50_1s == 'start_bots') && ((currentvol_carousel8_symbol_vol50_1s == 5 && currentvol2_carousel8_symbol_vol50_1s == 5) || (currentvol_carousel8_cookie_symbol_vol50_1s == 5 && currentvol2_carousel8_cookie_symbol_vol50_1s == 5))) {
                        startBot_symbol_vol50_1s(martingale_active_carousel8_cookie_symbol_vol50_1s, lastNumber10_symbol_vol50_1s, lastNumber9_symbol_vol50_1s, lastNumber8_symbol_vol50_1s, lastNumber7_symbol_vol50_1s, lastNumber6_symbol_vol50_1s, lastNumber5_symbol_vol50_1s, lastNumber4_symbol_vol50_1s, lastNumber3_symbol_vol50_1s, lastNumber2_symbol_vol50_1s, lastNumber1_symbol_vol50_1s, currentRandom_symbol_vol50_1s, strNumber_symbol_vol50_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50_1s !== null && lastNumber1_symbol_vol50_1s !== null && lastNumber2_symbol_vol50_1s !== null) {
            if ((tag5_carousel8 && tag6_carousel8 && tag8_carousel8 && tag9_carousel8) || first_instance_symbol_vol50_1s == true) {
                if (lastNumber3_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber2_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber1_symbol_vol50_1s == currentRandom_symbol_vol50_1s && (first_instance_symbol_vol50_1s == true || (tag5_carousel8.textContent.trim() !== '' && tag6_carousel8.textContent.trim() !== '' && tag8_carousel8.textContent.trim() !== '' && tag9_carousel8.textContent.trim() !== '')) && (bot_set_carousel8_symbol_vol50_1s == 4 || bot_set_carousel8_cookie_symbol_vol50_1s == 4)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50_1s == 'start_bots') && ((currentvol_carousel8_symbol_vol50_1s == 5 && currentvol2_carousel8_symbol_vol50_1s == 5) || (currentvol_carousel8_cookie_symbol_vol50_1s == 5 && currentvol2_carousel8_cookie_symbol_vol50_1s == 5))) {
                        startBot_symbol_vol50_1s(martingale_active_carousel8_cookie_symbol_vol50_1s, lastNumber10_symbol_vol50_1s, lastNumber9_symbol_vol50_1s, lastNumber8_symbol_vol50_1s, lastNumber7_symbol_vol50_1s, lastNumber6_symbol_vol50_1s, lastNumber5_symbol_vol50_1s, lastNumber4_symbol_vol50_1s, lastNumber3_symbol_vol50_1s, lastNumber2_symbol_vol50_1s, lastNumber1_symbol_vol50_1s, currentRandom_symbol_vol50_1s, strNumber_symbol_vol50_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50_1s !== null && lastNumber1_symbol_vol50_1s !== null && lastNumber2_symbol_vol50_1s !== null) {
            if ((tag5_carousel8 && tag6_carousel8 && tag8_carousel8 && tag9_carousel8) || first_instance_symbol_vol50_1s == true) {
                if (lastNumber4_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber3_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber2_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber1_symbol_vol50_1s == currentRandom_symbol_vol50_1s && (first_instance_symbol_vol50_1s == true || (tag5_carousel8.textContent.trim() !== '' && tag6_carousel8.textContent.trim() !== '' && tag8_carousel8.textContent.trim() !== '' && tag9_carousel8.textContent.trim() !== '')) && (bot_set_carousel8_symbol_vol50_1s == 5 || bot_set_carousel8_cookie_symbol_vol50_1s == 5)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50_1s == 'start_bots') && ((currentvol_carousel8_symbol_vol50_1s == 5 && currentvol2_carousel8_symbol_vol50_1s == 5) || (currentvol_carousel8_cookie_symbol_vol50_1s == 5 && currentvol2_carousel8_cookie_symbol_vol50_1s == 5))) {
                        startBot_symbol_vol50_1s(martingale_active_carousel8_cookie_symbol_vol50_1s, lastNumber10_symbol_vol50_1s, lastNumber9_symbol_vol50_1s, lastNumber8_symbol_vol50_1s, lastNumber7_symbol_vol50_1s, lastNumber6_symbol_vol50_1s, lastNumber5_symbol_vol50_1s, lastNumber4_symbol_vol50_1s, lastNumber3_symbol_vol50_1s, lastNumber2_symbol_vol50_1s, lastNumber1_symbol_vol50_1s, currentRandom_symbol_vol50_1s, strNumber_symbol_vol50_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50_1s !== null && lastNumber1_symbol_vol50_1s !== null && lastNumber2_symbol_vol50_1s !== null) {
            if ((tag5_carousel8 && tag6_carousel8 && tag8_carousel8 && tag9_carousel8) || first_instance_symbol_vol50_1s == true) {
                if (lastNumber5_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber4_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber3_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber2_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber1_symbol_vol50_1s == currentRandom_symbol_vol50_1s && (first_instance_symbol_vol50_1s == true || (tag5_carousel8.textContent.trim() !== '' && tag6_carousel8.textContent.trim() !== '' && tag8_carousel8.textContent.trim() !== '' && tag9_carousel8.textContent.trim() !== '')) && (bot_set_carousel8_symbol_vol50_1s == 6 || bot_set_carousel8_cookie_symbol_vol50_1s == 6)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50_1s == 'start_bots') && ((currentvol_carousel8_symbol_vol50_1s == 5 && currentvol2_carousel8_symbol_vol50_1s == 5) || (currentvol_carousel8_cookie_symbol_vol50_1s == 5 && currentvol2_carousel8_cookie_symbol_vol50_1s == 5))) {
                        startBot_symbol_vol50_1s(martingale_active_carousel8_cookie_symbol_vol50_1s, lastNumber10_symbol_vol50_1s, lastNumber9_symbol_vol50_1s, lastNumber8_symbol_vol50_1s, lastNumber7_symbol_vol50_1s, lastNumber6_symbol_vol50_1s, lastNumber5_symbol_vol50_1s, lastNumber4_symbol_vol50_1s, lastNumber3_symbol_vol50_1s, lastNumber2_symbol_vol50_1s, lastNumber1_symbol_vol50_1s, currentRandom_symbol_vol50_1s, strNumber_symbol_vol50_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        
        if (currentRandom_symbol_vol50_1s !== null && lastNumber1_symbol_vol50_1s !== null && lastNumber2_symbol_vol50_1s !== null) {
            if ((tag5_carousel8 && tag6_carousel8 && tag8_carousel8 && tag9_carousel8) || first_instance_symbol_vol50_1s == true) {
                if (lastNumber6_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber5_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber4_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber3_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber2_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber1_symbol_vol50_1s == currentRandom_symbol_vol50_1s && (first_instance_symbol_vol50_1s == true || (tag5_carousel8.textContent.trim() !== '' && tag6_carousel8.textContent.trim() !== '' && tag8_carousel8.textContent.trim() !== '' && tag9_carousel8.textContent.trim() !== '')) && (bot_set_carousel8_symbol_vol50_1s == 7 || bot_set_carousel8_cookie_symbol_vol50_1s == 7)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50_1s == 'start_bots') && ((currentvol_carousel8_symbol_vol50_1s == 5 && currentvol2_carousel8_symbol_vol50_1s == 5) || (currentvol_carousel8_cookie_symbol_vol50_1s == 5 && currentvol2_carousel8_cookie_symbol_vol50_1s == 5))) {
                        startBot_symbol_vol50_1s(martingale_active_carousel8_cookie_symbol_vol50_1s, lastNumber10_symbol_vol50_1s, lastNumber9_symbol_vol50_1s, lastNumber8_symbol_vol50_1s, lastNumber7_symbol_vol50_1s, lastNumber6_symbol_vol50_1s, lastNumber5_symbol_vol50_1s, lastNumber4_symbol_vol50_1s, lastNumber3_symbol_vol50_1s, lastNumber2_symbol_vol50_1s, lastNumber1_symbol_vol50_1s, currentRandom_symbol_vol50_1s, strNumber_symbol_vol50_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50_1s !== null && lastNumber1_symbol_vol50_1s !== null && lastNumber2_symbol_vol50_1s !== null) {
            if ((tag5_carousel8 && tag6_carousel8 && tag8_carousel8 && tag9_carousel8) || first_instance_symbol_vol50_1s == true) {
                if (lastNumber7_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber6_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber5_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber4_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber3_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber2_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber1_symbol_vol50_1s == currentRandom_symbol_vol50_1s && (first_instance_symbol_vol50_1s == true || (tag5_carousel8.textContent.trim() !== '' && tag6_carousel8.textContent.trim() !== '' && tag8_carousel8.textContent.trim() !== '' && tag9_carousel8.textContent.trim() !== '')) && (bot_set_carousel8_symbol_vol50_1s == 8 || bot_set_carousel8_cookie_symbol_vol50_1s == 8)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50_1s == 'start_bots') && ((currentvol_carousel8_symbol_vol50_1s == 5 && currentvol2_carousel8_symbol_vol50_1s == 5) || (currentvol_carousel8_cookie_symbol_vol50_1s == 5 && currentvol2_carousel8_cookie_symbol_vol50_1s == 5))) {
                        startBot_symbol_vol50_1s(martingale_active_carousel8_cookie_symbol_vol50_1s, lastNumber10_symbol_vol50_1s, lastNumber9_symbol_vol50_1s, lastNumber8_symbol_vol50_1s, lastNumber7_symbol_vol50_1s, lastNumber6_symbol_vol50_1s, lastNumber5_symbol_vol50_1s, lastNumber4_symbol_vol50_1s, lastNumber3_symbol_vol50_1s, lastNumber2_symbol_vol50_1s, lastNumber1_symbol_vol50_1s, currentRandom_symbol_vol50_1s, strNumber_symbol_vol50_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50_1s !== null && lastNumber1_symbol_vol50_1s !== null && lastNumber2_symbol_vol50_1s !== null) {
            if ((tag5_carousel8 && tag6_carousel8 && tag8_carousel8 && tag9_carousel8) || first_instance_symbol_vol50_1s == true) {
                if (lastNumber8_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber7_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber6_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber5_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber4_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber3_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber2_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber1_symbol_vol50_1s == currentRandom_symbol_vol50_1s && (first_instance_symbol_vol50_1s == true || (tag5_carousel8.textContent.trim() !== '' && tag6_carousel8.textContent.trim() !== '' && tag8_carousel8.textContent.trim() !== '' && tag9_carousel8.textContent.trim() !== '')) && (bot_set_carousel8_symbol_vol50_1s == 9 || bot_set_carousel8_cookie_symbol_vol50_1s == 9)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50_1s == 'start_bots') && ((currentvol_carousel8_symbol_vol50_1s == 5 && currentvol2_carousel8_symbol_vol50_1s == 5) || (currentvol_carousel8_cookie_symbol_vol50_1s == 5 && currentvol2_carousel8_cookie_symbol_vol50_1s == 5))) {
                        startBot_symbol_vol50_1s(martingale_active_carousel8_cookie_symbol_vol50_1s, lastNumber10_symbol_vol50_1s, lastNumber9_symbol_vol50_1s, lastNumber8_symbol_vol50_1s, lastNumber7_symbol_vol50_1s, lastNumber6_symbol_vol50_1s, lastNumber5_symbol_vol50_1s, lastNumber4_symbol_vol50_1s, lastNumber3_symbol_vol50_1s, lastNumber2_symbol_vol50_1s, lastNumber1_symbol_vol50_1s, currentRandom_symbol_vol50_1s, strNumber_symbol_vol50_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol50_1s !== null && lastNumber1_symbol_vol50_1s !== null && lastNumber2_symbol_vol50_1s !== null) {
            if ((tag5_carousel8 && tag6_carousel8 && tag8_carousel8 && tag9_carousel8) || first_instance_symbol_vol50_1s == true) {
                if (lastNumber9_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber8_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber7_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber6_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber5_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber4_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber3_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber2_symbol_vol50_1s == currentRandom_symbol_vol50_1s && lastNumber1_symbol_vol50_1s == currentRandom_symbol_vol50_1s && (first_instance_symbol_vol50_1s == true || (tag5_carousel8.textContent.trim() !== '' && tag6_carousel8.textContent.trim() !== '' && tag8_carousel8.textContent.trim() !== '' && tag9_carousel8.textContent.trim() !== '')) && (bot_set_carousel8_symbol_vol50_1s == 10 || bot_set_carousel8_cookie_symbol_vol50_1s == 10)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol50_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol50_1s == 'start_bots') && ((currentvol_carousel8_symbol_vol50_1s == 5 && currentvol2_carousel8_symbol_vol50_1s == 5) || (currentvol_carousel8_cookie_symbol_vol50_1s == 5 && currentvol2_carousel8_cookie_symbol_vol50_1s == 5))) {
                        startBot_symbol_vol50_1s(martingale_active_carousel8_cookie_symbol_vol50_1s, lastNumber10_symbol_vol50_1s, lastNumber9_symbol_vol50_1s, lastNumber8_symbol_vol50_1s, lastNumber7_symbol_vol50_1s, lastNumber6_symbol_vol50_1s, lastNumber5_symbol_vol50_1s, lastNumber4_symbol_vol50_1s, lastNumber3_symbol_vol50_1s, lastNumber2_symbol_vol50_1s, lastNumber1_symbol_vol50_1s, currentRandom_symbol_vol50_1s, strNumber_symbol_vol50_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }
    }
};

window.addEventListener('load', function () {
    duration_amount_cookie_symbol_vol50_1s = getCookie('duration_amount_cookie');
    stake_amount_cookie_symbol_vol50_1s = getCookie('stake_amount_cookie');
    duration_unit_cookie_symbol_vol50_1s = getCookie('duration_unit_cookie');
    symbol_vol_cookie_symbol_vol50_1s = getCookie('symbol_vol_cookie');
    currency_cookie_symbol_vol50_1s = getCookie('ActiveCurrency')
    contract_text_cookie_symbol_vol50_1s = getCookie('contract_text_cookie');
    stake_or_payout_cookie_symbol_vol50_1s = getCookie('stake_or_payout_cookie')
    last_digit_prediction_cookie_symbol_vol50_1s = getCookie('last_digit_prediction_cookie')
    stake_amount_default_symbol_vol50_1s = getCookie('stake_amount_default')

    if (last_digit_prediction_cookie_symbol_vol50_1s) {
        last_digit_prediction_or_barrier_symbol_vol50_1s = last_digit_prediction_or_barrier_symbol_vol50_1s
    } else {
        let numericValue = last_digit_input_symbol_vol50_1s.value
        last_digit_prediction_or_barrier_symbol_vol50_1s = numericValue
    }
    if (symbol_vol_cookie_symbol_vol50_1s) {
        symbol_vol_symbol_vol50_1s = symbol_vol_cookie_symbol_vol50_1s;
    } else {
        symbol_vol_symbol_vol50_1s = "1HZ50V";
    }
    if (duration_unit_cookie_symbol_vol50_1s) {
        duration_unit_symbol_vol50_1s = duration_unit_cookie_symbol_vol50_1s;
    } else {
        duration_unit_symbol_vol50_1s = "t";
    }
    if (duration_amount_cookie_symbol_vol50_1s) {
        duration_amount_symbol_vol50_1s = parseInt(duration_amount_cookie_symbol_vol50_1s, 10);
    } else {
        duration_amount_symbol_vol50_1s = 1;
    }
    if (stake_amount_cookie_symbol_vol50_1s) {
        stake_amount_symbol_vol50_1s = parseFloat(stake_amount_cookie_symbol_vol50_1s);
    } else {
        stake_amount_symbol_vol50_1s = 10;
    }
    if (stake_amount_default_symbol_vol50_1s) {
        stake_amount_default_symbol_vol50_1s = parseFloat(stake_amount_default_symbol_vol50_1s);
    } else {
        stake_amount_default_symbol_vol50_1s = 10;
    }
    if (currency_cookie_symbol_vol50_1s) {
        currency_symbol_vol50_1s = currency_cookie_symbol_vol50_1s;
    } else {
        currency_symbol_vol50_1s = "USD";
    }
    if (contract_text_cookie_symbol_vol50_1s) {
        contract_symbol_vol50_1s = contract_text_cookie_symbol_vol50_1s;
    } else {
        contract_symbol_vol50_1s = "Matches/Differs";
    }
    if (stake_or_payout_cookie_symbol_vol50_1s) {
        stake_or_payout_symbol_vol50_1s = stake_or_payout_cookie_symbol_vol50_1s;
    } else {
        stake_or_payout_symbol_vol50_1s = "stake";
    }

    initializeApi(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response_symbol_General) {
            clearInterval(getAwaitingResponses)
        } else {
            
        }
    }, 2000);
});

async function order_propose_symbol_vol50_1s(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
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
                // let tooltip = document.getElementById('tooltiptext50');
                // tooltip.textContent = data.error.message;
                // tooltip.classList.add('tooltiptext10')
                
                connection.removeEventListener('message', proposalResponse, false);
                await api.disconnect();
                reject(new Error('Error in proposal'));
            } else if (data.msg_type === 'proposal') {

                proposal_id_symbol_vol50_1s = data.proposal.id;

                // let calc = displayProposalResult2(data, data.proposal.display_value, data.proposal.payout);

                // def_price_up_symbol_vol50_1s = data.proposal.display_value;
                // def_payout_up_symbol_vol50_1s = data.proposal.payout;
                // def_profit_up_symbol_vol50_1s = calc.NetProfit;
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

const unsubscribeProposal_symbol_vol50_1s = () => {
    connection.removeEventListener('message', proposalResponse_symbol_vol50_1s, false);
};

function convertTimestampTo12HourTime_symbol_vol50_1s(timestamp) {
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

function formatNumberAndBoldLastDecimal_symbol_vol50_1s(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart) {
        let lastDecimalDigit = decimalPart.slice(-1);
        decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
    } 
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}

let contract_status_html_symbol_vol50_1s = document.getElementById('contract_status_carousel8') 
let end_tic_off_trade_symbol_vol50_1s = document.getElementById('end_tic_off_trade_carousel8')            
let price_after_trade_figure_amount_symbol_vol50_1s = document.getElementById('price_after_trade_figure_amount_carousel8') 
let profit_figure_amount_symbol_vol50_1s = document.getElementById('profit_figure_amount_carousel8') 
let buy_price_figure_amount_symbol_vol50_1s = document.getElementById('buy_price_figure_amount_carousel8') 
let result_currency_html_symbol_vol50_1s = document.querySelectorAll('.result_currency')
let transaction_refrence_figure_symbol_vol50_1s = document.getElementById('transaction_refrence_figure_carousel8') 
let trade_start_time_symbol_vol50_1s = document.getElementById('trade_start_time_carousel8') 
let buy_price_text_symbol_vol50_1s = document.getElementById('buy_price_text_carousel8') 
let price_after_trade_text_symbol_vol50_1s = document.getElementById('price_after_trade_text_carousel8') 
let profit_text_symbol_vol50_1s = document.getElementById('profit_text_carousel8') 
let durr_amount_prop_count_symbol_vol50_1s = document.getElementById('durr_amount_prop_count_carousel8') 
let durr_amount_prop_symbol_vol50_1s = document.getElementById('durr_amount_prop_carousel8') 
let countdown_trade_symbol_vol50_1s = 0
let countdown_trade2_symbol_vol50_1s = 0

function before_trade_symbol_vol50_1s() {
    countdown_trade_symbol_vol50_1s = 0
    let allDigits = document.querySelectorAll('.ldgs_carousel8')
    let buy_price_text = document.getElementById('buy_price_text_carousel8')
    let price_after_trade_text = document.getElementById('price_after_trade_text_carousel8')
    let profit_text = document.getElementById('profit_text_carousel8')
    let durr_amount_prop_count = document.getElementById('durr_amount_prop_count_carousel8')
    let slide_trade_result = document.getElementById('slide_trade_result_carousel8')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel8')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel8')
    let profit_figure_amount = document.getElementById('profit_figure_amount_carousel8')
    contract_status_html_symbol_vol50_1s.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count.textContent = countdown_trade_symbol_vol50_1s
    durr_amount_prop.textContent = duration_amount_symbol_vol50_1s
    buy_price_figure_amount.textContent = def_price_up_symbol_vol50_1s
    price_after_trade_figure_amount.textContent = def_payout_up_symbol_vol50_1s
    profit_figure_amount.textContent = def_profit_up_symbol_vol50_1s

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
            if (digit.textContent != (last_digit_prediction_or_barrier_symbol_vol50_1s)) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound == 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier_symbol_vol50_1s) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}

function after_trade_symbol_vol50_1s(status, endDigit) {
    let slide_trade_result = document.getElementById('slide_trade_result_carousel8')
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

function formate_date_symbol_vol50_1s(datein) {
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

let allProposalOpenContract_symbol_vol50_1s = []
let longcodeProp_symbol_vol50_1s = null
let contract_ids_buy_symbol_vol50_1s = null
let contract_status_symbol_vol50_1s = null
let last_tick_symbol_vol50_1s = null
let profit_or_loss_symbol_vol50_1s = null
let final_price_symbol_vol50_1s = null
let payout_result_symbol_vol50_1s = null
let buy_price_symbol_vol50_1s = null
let contract_currency_symbol_vol50_1s = null
let time_of_trade_symbol_vol50_1s = null
let every_tick_symbol_vol50_1s = null
let contract_id_symbol_vol50_1s = null

let allProposalOpenContract2_symbol_vol50_1s = []
let longcodeProp2_symbol_vol50_1s = null
let contract_ids_buy2_symbol_vol50_1s = null
let contract_ids_sell2_symbol_vol50_1s = null
let contract_status2_symbol_vol50_1s = null
let last_tick2_symbol_vol50_1s = null
let profit_or_loss2_symbol_vol50_1s = null
let final_price2_symbol_vol50_1s = null
let payout_result2_symbol_vol50_1s = null
let buy_price2_symbol_vol50_1s = null
let contract_currency2_symbol_vol50_1s = null
let time_of_trade2_symbol_vol50_1s = null
let every_tick2_symbol_vol50_1s = null

function open_proposal_actions2_symbol_vol50_1s(data) {
    if (data.proposal_open_contract.contract_id == contract_id2_symbol_vol50_1s) {
        set_middle_trade1_symbol_vol50_1s(bot_is_running_or_stopped_symbol_vol50_1s)
        bot_buy_start_time_symbol_vol50_1s = formate_date_symbol_vol50_1s(data.proposal_open_contract.date_start)
        bot_buy_transaction_id_symbol_vol50_1s = data.proposal_open_contract.transaction_ids.buy
        bot_trade_type_symbol_vol50_1s = data.proposal_open_contract.contract_type
        bot_buy_price_symbol_vol50_1s = data.proposal_open_contract.buy_price
        bot_status_symbol_vol50_1s = data.proposal_open_contract.status == 'open' ? 'Pending' : data.proposal_open_contract.status
        bot_contract_id_symbol_vol50_1s = data.proposal_open_contract.contract_id
        start_trade_ref_symbol_vol50_1s(bot_buy_price_symbol_vol50_1s)

        if (firstContractReceived_symbol_vol50_1s == false) {
            append_result_symbol_vol50_1s(bot_id_symbol_vol50_1s, bot_buy_start_time_symbol_vol50_1s, bot_buy_transaction_id_symbol_vol50_1s, bot_trade_type_symbol_vol50_1s, bot_buy_price_symbol_vol50_1s, bot_status_symbol_vol50_1s);
            firstContractReceived_symbol_vol50_1s = true
        }

        longcodeProp2_symbol_vol50_1s = data.proposal_open_contract.longcode
        allProposalOpenContract2_symbol_vol50_1s.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information_carousel8').textContent = longcodeProp2_symbol_vol50_1s

        if (allProposalOpenContract2_symbol_vol50_1s.length > 0 && allProposalOpenContract2_symbol_vol50_1s[allProposalOpenContract2_symbol_vol50_1s.length - 1].length > 0) {
            let lastSubArray2 = allProposalOpenContract2_symbol_vol50_1s[allProposalOpenContract2_symbol_vol50_1s.length - 1];
            let lastElementOfLastSubArray2 = lastSubArray2[lastSubArray2.length - 1].tick_display_value;
            let numberString2 = lastElementOfLastSubArray2.toString();
            let lastCharacter2 = numberString2[numberString2.length - 1];
            handleNewNumber_symbol_vol50_1s(lastCharacter2);
            every_tick2_symbol_vol50_1s = lastElementOfLastSubArray2
            end_tic_off_trade_symbol_vol50_1s.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol50_1s(every_tick2_symbol_vol50_1s);
            if (countdown_trade2_symbol_vol50_1s < duration_amount_symbol_vol50_1s) {
                countdown_trade2_symbol_vol50_1s += 1
                durr_amount_prop_count_symbol_vol50_1s.textContent = countdown_trade_symbol_vol50_1s
            }
            if (data.proposal_open_contract.is_expired == 1 && end_slide_symbol_vol50_1s == true) {
                set_end_trade1_symbol_vol50_1s(bot_is_running_or_stopped_symbol_vol50_1s)
                end_slide_symbol_vol50_1s = false
            }
            contract_ids_buy2_symbol_vol50_1s = data.proposal_open_contract.transaction_ids.buy
            if (contract_ids_buy2_symbol_vol50_1s) {
                middle_trade_ref_symbol_vol50_1s(contract_ids_buy2_symbol_vol50_1s)
            }
            if (data.proposal_open_contract.status !== 'open') {
                let circle2_carousel8 = document.getElementById('circle2_carousel8')
                circle2_carousel8.classList.remove('circle_shadow_carousel8')
                bot_status_symbol_vol50_1s = data.proposal_open_contract.status
                bot_entry_spot_symbol_vol50_1s = data.proposal_open_contract.entry_tick
                bot_exit_spot_symbol_vol50_1s = data.proposal_open_contract.exit_tick
                bot_profit_loss_symbol_vol50_1s = data.proposal_open_contract.profit
                contract_status2_symbol_vol50_1s = data.proposal_open_contract.status
                last_tick2_symbol_vol50_1s = lastElementOfLastSubArray2
                profit_or_loss2_symbol_vol50_1s = data.proposal_open_contract.profit
                payout_result2_symbol_vol50_1s = data.proposal_open_contract.payout
                buy_price2_symbol_vol50_1s = data.proposal_open_contract.buy_price
                contract_currency2_symbol_vol50_1s = data.proposal_open_contract.currency
                contract_ids_buy2_symbol_vol50_1s = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2_symbol_vol50_1s = data.proposal_open_contract.expiry_time
                contract_ids_sell2_symbol_vol50_1s = data.proposal_open_contract.transaction_ids.sell

                end_trade_ref_symbol_vol50_1s(contract_ids_sell2_symbol_vol50_1s)
                if (profit_or_loss2_symbol_vol50_1s < 0) {
                    final_price2_symbol_vol50_1s = '0.00'
                } else if (profit_or_loss2_symbol_vol50_1s > 0) {
                    final_price2_symbol_vol50_1s = payout_result2_symbol_vol50_1s
                } else {
                    
                }
                if (contract_status2_symbol_vol50_1s == 'won' && !wonEncountered_symbol_vol50_1s) {
                    bot_total_wins_symbol_vol50_1s = bot_total_wins_symbol_vol50_1s + 1;
                    bot_total_profit_loss_symbol_vol50_1s = bot_total_profit_loss_symbol_vol50_1s + profit_or_loss2_symbol_vol50_1s;
                    bot_total_stake_symbol_vol50_1s = bot_total_stake_symbol_vol50_1s + buy_price2_symbol_vol50_1s
                    bot_total_runs_symbol_vol50_1s = bot_total_runs_symbol_vol50_1s + 1;
                    bot_total_payout_symbol_vol50_1s = bot_total_payout_symbol_vol50_1s + payout_result2_symbol_vol50_1s;
                    add_after_trade_symbol_vol50_1s(bot_id_symbol_vol50_1s, contract_id2_symbol_vol50_1s, bot_contract_id_symbol_vol50_1s, bot_entry_spot_symbol_vol50_1s, bot_exit_spot_symbol_vol50_1s, bot_profit_loss_symbol_vol50_1s, bot_status_symbol_vol50_1s, bot_total_runs_symbol_vol50_1s, bot_total_stake_symbol_vol50_1s, bot_total_payout_symbol_vol50_1s, bot_total_wins_symbol_vol50_1s, bot_total_loss_symbol_vol50_1s, bot_total_profit_loss_symbol_vol50_1s);
                    wonEncountered_symbol_vol50_1s = true;
                } else if (contract_status2_symbol_vol50_1s == 'lost') {
                    bot_total_loss_symbol_vol50_1s = bot_total_loss_symbol_vol50_1s + 1;
                    bot_total_profit_loss_symbol_vol50_1s = bot_total_profit_loss_symbol_vol50_1s + profit_or_loss2_symbol_vol50_1s;
                    bot_total_stake_symbol_vol50_1s = bot_total_stake_symbol_vol50_1s + buy_price2_symbol_vol50_1s
                    bot_total_runs_symbol_vol50_1s = bot_total_runs_symbol_vol50_1s + 1;
                    bot_total_payout_symbol_vol50_1s = bot_total_payout_symbol_vol50_1s - payout_result2_symbol_vol50_1s;
                    add_after_trade_symbol_vol50_1s(bot_id_symbol_vol50_1s, contract_id2_symbol_vol50_1s, bot_contract_id_symbol_vol50_1s, bot_entry_spot_symbol_vol50_1s, bot_exit_spot_symbol_vol50_1s, bot_profit_loss_symbol_vol50_1s, bot_status_symbol_vol50_1s, bot_total_runs_symbol_vol50_1s, bot_total_stake_symbol_vol50_1s, bot_total_payout_symbol_vol50_1s, bot_total_wins_symbol_vol50_1s, bot_total_loss_symbol_vol50_1s, bot_total_profit_loss_symbol_vol50_1s);
                    wonEncountered_symbol_vol50_1s = true;
                }
                if (contract_status2_symbol_vol50_1s == 'won' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol50_1s = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol50_1s = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol50_1s = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol50_1s = every_tick2_symbol_vol50_1s
                    bot_log_end_symbol_vol50_1s(log_buy_timestamp_bot_symbol_vol50_1s, log_sell_timestamp_bot_symbol_vol50_1s, log_message_entry_tick_symbol_vol50_1s, log_message_last_digit_symbol_vol50_1s)
                } else if (contract_status2_symbol_vol50_1s == 'lost' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol50_1s = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol50_1s = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol50_1s = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol50_1s = every_tick2_symbol_vol50_1s
                    bot_log_end_symbol_vol50_1s(log_buy_timestamp_bot_symbol_vol50_1s, log_sell_timestamp_bot_symbol_vol50_1s, log_message_entry_tick_symbol_vol50_1s, log_message_last_digit_symbol_vol50_1s)
                }
                contract_status_html_symbol_vol50_1s.textContent = contract_status2_symbol_vol50_1s
                end_tic_off_trade_symbol_vol50_1s.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol50_1s(last_tick2_symbol_vol50_1s);
                profit_figure_amount_symbol_vol50_1s.textContent = profit_or_loss2_symbol_vol50_1s
                price_after_trade_figure_amount_symbol_vol50_1s.textContent = final_price2_symbol_vol50_1s
                buy_price_figure_amount_symbol_vol50_1s.textContent = buy_price2_symbol_vol50_1s
                result_currency_html_symbol_vol50_1s.textContent = contract_currency2_symbol_vol50_1s
                transaction_refrence_figure_symbol_vol50_1s.textContent = contract_ids_buy2_symbol_vol50_1s
                trade_start_time_symbol_vol50_1s.innerHTML = convertTimestampTo12HourTime_symbol_vol50_1s(time_of_trade2_symbol_vol50_1s)
                buy_price_text_symbol_vol50_1s.textContent = 'Buy price'
                price_after_trade_text_symbol_vol50_1s.textContent = 'Final price'
                profit_text_symbol_vol50_1s.textContent = 'Profit'
                after_trade_symbol_vol50_1s(contract_status2_symbol_vol50_1s, lastCharacter2)
            } else {
            }
        } else {
            
        }
    }
}

let currentPosition1_symbol_vol50_1s = 0;
function moveSlider_symbol_vol50_1s(number) {
    const slider = document.getElementById('slide_trade_result_carousel8');
    const container = document.getElementById('last_digit_responds_carousel8');
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

    const target = document.querySelector(`.last_digits_carousel8.${stringnumber}`);
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
        currentPosition1_symbol_vol50_1s = newPosition;
    }
}

function handleNewNumber_symbol_vol50_1s(randomNumber) {
    const newPosition = randomNumber;
    moveSlider_symbol_vol50_1s(newPosition);
}

let log_close_and_info_cont_symbol_vol50_1s = document.getElementById('log_close_and_info_cont_carousel8');
let bot_log_show_cont_symbol_vol50_1s = document.getElementById('bot_log_show_cont_carousel8');
let bot_details_symbol_vol50_1s = document.getElementById('bot_details_carousel8');
let bot_details2_symbol_vol50_1s = document.getElementById('bot_details2_carousel8');

if (bot_log_show_cont_symbol_vol50_1s && bot_details_symbol_vol50_1s) {
    bot_details_symbol_vol50_1s.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol50_1s.style.display == 'none') {
            bot_log_show_cont_symbol_vol50_1s.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol50_1s.style.display = 'none'
        }
    });

    log_close_and_info_cont_symbol_vol50_1s.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_log_show_cont_symbol_vol50_1s.style.display == 'block') {
            bot_log_show_cont_symbol_vol50_1s.style.display = 'none'
        } else {
            bot_log_show_cont_symbol_vol50_1s.style.display = 'block'
        }
    });
} else {
    console.error('One or more elements are not found');
}

if (bot_log_show_cont_symbol_vol50_1s && bot_details_symbol_vol50_1s) {
    bot_details2_symbol_vol50_1s.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol50_1s.style.display == 'none') {
            bot_log_show_cont_symbol_vol50_1s.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol50_1s.style.display = 'none'
        }
    });
} else {
    console.error('One or more elements are not found');
}

let martingale_symbol_vol50_1s = document.getElementById('martingale_carousel8');
let flash_info_cont_symbol_vol50_1s = document.getElementById('flash_info_cont_carousel8');
let tick_check_amount_symbol_vol50_1s = document.getElementById('tick_check_amount_carousel8');
let settings_cont_symbol_vol50_1s = document.getElementById('settings_cont_carousel8');
let tick_check_symbol_vol50_1s = document.getElementById('tick_check_carousel8');
let martingale_jump_symbol_vol50_1s = document.getElementById('martingale_jump_carousel8');
let increase_jump_symbol_vol50_1s = document.getElementById('increase_jump_carousel8');
let reduce_jump_symbol_vol50_1s = document.getElementById('reduce_jump_carousel8');
let bot_settings_symbol_vol50_1s = document.getElementById('bot_settings_carousel8');
let bot_settings2_symbol_vol50_1s = document.getElementById('bot_settings2_carousel8');
const volumes2_symbol_vol50_1s = document.querySelectorAll(".slide_vol2_carousel8");
let tick_check2_symbol_vol50_1s = document.getElementById('tick_check2_carousel8');
let martingale2_symbol_vol50_1s = document.getElementById('martingale2_carousel8');
let martingale_jump2_symbol_vol50_1s = document.getElementById('martingale_jump2_carousel8');
let martingale_jump_set_symbol_vol50_1s = document.getElementById('martingale_jump_set_carousel8');
const last_digit_settings_symbol_vol50_1s = document.querySelectorAll(".last_digit_settings_carousel8");

martingale_symbol_vol50_1s.addEventListener('click', function () {
    if (martingale_symbol_vol50_1s.classList.contains('active_mat')) {
        martingale_symbol_vol50_1s.classList.remove('active_mat');
        martingale2_symbol_vol50_1s.classList.remove('active_mat');
        setCookie('martingale_carousel8', 'false')
        localStorage.setItem('martingale_carousel8', 'false')
        flash_info_cont_symbol_vol50_1s.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol50_1s.style.color = '#fff'
    } else {
        martingale_symbol_vol50_1s.classList.add('active_mat');
        martingale2_symbol_vol50_1s.classList.add('active_mat');
        setCookie('martingale_carousel8', 'true')
        localStorage.setItem('martingale_carousel8', 'true')
        flash_info_cont_symbol_vol50_1s.textContent = 'martigale is active'
        tick_check_amount_symbol_vol50_1s.style.color = '#fff'
    }
    if (flash_info_cont_symbol_vol50_1s.classList.contains('show_flash_info_carousel8')) {
        flash_info_cont_symbol_vol50_1s.classList.remove('show_flash_info_carousel8')
        setTimeout(() => {
            flash_info_cont_symbol_vol50_1s.classList.remove('show_flash_info_carousel8')
        }, 5000)
    } else {
        flash_info_cont_symbol_vol50_1s.classList.add('show_flash_info_carousel8')
        setTimeout(() => {
            flash_info_cont_symbol_vol50_1s.classList.remove('show_flash_info_carousel8')
        }, 5000)
    }
});

function bot_set_default_symbol_vol50_1s() {
    let curr_bot_set = localStorage.getItem('bot_set_carousel8');
    if (curr_bot_set === null) {
        setTimeout(bot_set_default_symbol_vol50_1s, 100);
        return;
    }
    tick_check_symbol_vol50_1s.textContent = curr_bot_set;
    tick_check2_symbol_vol50_1s.textContent = curr_bot_set;
}

bot_set_default_symbol_vol50_1s();

bot_settings_symbol_vol50_1s.addEventListener('click', function () {
    if (settings_cont_symbol_vol50_1s.style.display == 'none') {
        settings_cont_symbol_vol50_1s.style.display = 'block'
    } else {
        settings_cont_symbol_vol50_1s.style.display = 'none'
    }
});

document.addEventListener('click', (event) => {
    if (!bot_settings_symbol_vol50_1s.contains(event.target) && !settings_cont_symbol_vol50_1s.contains(event.target) && !martingale_jump_set_symbol_vol50_1s.contains(event.target)) {
        settings_cont_symbol_vol50_1s.style.display = 'none';
    }
});

last_digit_settings_symbol_vol50_1s.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.querySelector('.bot_text_carousel8').textContent.trim().replace(/\s+/g, ' ');
        if (bot_set == 'Last one digit bot') {
            localStorage.setItem('bot_set_carousel8', '1')
            setCookie('bot_set_carousel8', '1')
            localStorage.setItem('bot_set_store_carousel8', '1')
            setCookie('bot_set_store_carousel8', '1')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            localStorage.setItem('bot_set_carousel8', '2')
            setCookie('bot_set_carousel8', '2')
            localStorage.setItem('bot_set_store_carousel8', '2')
            setCookie('bot_set_store_carousel8', '2')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            localStorage.setItem('bot_set_carousel8', '3')
            setCookie('bot_set_carousel8', '3')
            localStorage.setItem('bot_set_store_carousel8', '3')
            setCookie('bot_set_store_carousel8', '3')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            localStorage.setItem('bot_set_carousel8', '4')
            setCookie('bot_set_carousel8', '4')
            localStorage.setItem('bot_set_store_carousel8', '4')
            setCookie('bot_set_store_carousel8', '4')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            localStorage.setItem('bot_set_carousel8', '5')
            setCookie('bot_set_carousel8', '5')
            localStorage.setItem('bot_set_store_carousel8', '5')
            setCookie('bot_set_store_carousel8', '5')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            localStorage.setItem('bot_set_carousel8', '6')
            setCookie('bot_set_carousel8', '6')
            localStorage.setItem('bot_set_store_carousel8', '6')
            setCookie('bot_set_store_carousel8', '6')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            localStorage.setItem('bot_set_carousel8', '7')
            setCookie('bot_set_carousel8', '7')
            localStorage.setItem('bot_set_store_carousel8', '7')
            setCookie('bot_set_store_carousel8', '7')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            localStorage.setItem('bot_set_carousel8', '8')
            setCookie('bot_set_carousel8', '8')
            localStorage.setItem('bot_set_store_carousel8', '8')
            setCookie('bot_set_store_carousel8', '8')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            localStorage.setItem('bot_set_carousel8', '9')
            setCookie('bot_set_carousel8', '9')
            localStorage.setItem('bot_set_store_carousel8', '9')
            setCookie('bot_set_store_carousel8', '9')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            localStorage.setItem('bot_set_carousel8', '10')
            setCookie('bot_set_carousel8', '10')
            localStorage.setItem('bot_set_store_carousel8', '10')
            setCookie('bot_set_store_carousel8', '10')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol50_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});


let jump_count_symbol_vol50_1s = 0

function jump_count_set_symbol_vol50_1s() {
    localStorage.setItem('bot_jump_carousel8', jump_count_symbol_vol50_1s)
    setCookie('bot_jump_carousel8', jump_count_symbol_vol50_1s)
}

function jump_count_set2_symbol_vol50_1s() {
    let stored_jump_count = localStorage.getItem('bot_jump_carousel8') ? localStorage.getItem('bot_jump_carousel8') : getCookie('bot_jump_carousel8');
    jump_count_symbol_vol50_1s = stored_jump_count !== null ? parseInt(stored_jump_count, 10) : 0;

    if (isNaN(jump_count_symbol_vol50_1s)) {
        jump_count_symbol_vol50_1s = 0;
    }
    if (jump_count_symbol_vol50_1s > 0) {
        martingale_jump_symbol_vol50_1s.textContent = 'j' + jump_count_symbol_vol50_1s
        martingale_jump2_symbol_vol50_1s.textContent = 'j' + jump_count_symbol_vol50_1s
    } else {
        martingale_jump_symbol_vol50_1s.textContent = ''
        martingale_jump2_symbol_vol50_1s.textContent = ''
    }
}

jump_count_set2_symbol_vol50_1s()

increase_jump_symbol_vol50_1s.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count_symbol_vol50_1s = jump_count_symbol_vol50_1s + 1
    jump_count_set_symbol_vol50_1s()
    jump_count_set2_symbol_vol50_1s()
})

reduce_jump_symbol_vol50_1s.addEventListener('click', (event) => {
    event.preventDefault()
    if (jump_count_symbol_vol50_1s > 0) {
        jump_count_symbol_vol50_1s = jump_count_symbol_vol50_1s - 1
        jump_count_set_symbol_vol50_1s()
        jump_count_set2_symbol_vol50_1s()
    }
})

bot_settings2_symbol_vol50_1s.addEventListener('click', function () {
    if (settings_cont_symbol_vol50_1s.style.display == 'none') {
        settings_cont_symbol_vol50_1s.style.display = 'block'
    } else {
        settings_cont_symbol_vol50_1s.style.display = 'none'
    }
});

martingale2_symbol_vol50_1s.addEventListener('click', function () {
    if (martingale2_symbol_vol50_1s.classList.contains('active_mat')) {
        martingale2_symbol_vol50_1s.classList.remove('active_mat');
        martingale_symbol_vol50_1s.classList.remove('active_mat');
        setCookie('martingale_carousel8', 'false')
        localStorage.setItem('martingale_carousel8', 'false')
        flash_info_cont_symbol_vol50_1s.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol50_1s.style.color = '#fff'
    } else {
        martingale2_symbol_vol50_1s.classList.add('active_mat');
        martingale_symbol_vol50_1s.classList.add('active_mat');
        setCookie('martingale_carousel8', 'true')
        localStorage.setItem('martingale_carousel8', 'true')
        flash_info_cont_symbol_vol50_1s.textContent = 'martigale is active'
        tick_check_amount_symbol_vol50_1s.style.color = '#fff'
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













































































let last_digit_input_symbol_vol75 = document.getElementById('last_digit_input')
let close_contract_result_container_symbol_vol75 = document.getElementById('close_contract_result_container_carousel4')
let buy_sell_two_symbol_vol75 = document.getElementById('buy_sell_two')
let trade_type_secound_symbol_vol75 = document.getElementById("trade_type_secound")
let attempting_buy2_carousel4_symbol_vol75 = document.getElementById("attempting_buy2_carousel4")
let buy_succeded2_carousel4_symbol_vol75 = document.getElementById("buy_succeded2_carousel4")
let contract_close2_carousel4_symbol_vol75 = document.getElementById("contract_close2_carousel4")
let stream75_carousel4_symbol_vol75 = document.getElementById('stream75_carousel4')

let last_digit_prediction_local_st_symbol_vol75 = null
let barrier_local_st_symbol_vol75 = null
let symbol_vol_text_local_st_symbol_vol75 = null
let contract_text_local_st_symbol_vol75 = null
let duration_amount_local_st_symbol_vol75 = null
let stake_amount_local_st_symbol_vol75 = null
let symbol_vol_local_st_symbol_vol75 = null
let duration_unit_local_st_symbol_vol75 = null
let last_digit_prediction_or_barrier_local_st_symbol_vol75 = null
let currency_local_st_symbol_vol75 = null
let stake_or_payout_local_st_symbol_vol75 = null
let proposal_id_local_st_symbol_vol75 = null
let last_digit_prediction_cookie_symbol_vol75 = null
let barrier_cookie_symbol_vol75 = null
let symbol_vol_text_cookie_symbol_vol75 = null
let contract_text_cookie_symbol_vol75 = null
let duration_amount_cookie_symbol_vol75 = null
let stake_amount_cookie_symbol_vol75 = null
let symbol_vol_cookie_symbol_vol75 = null
let duration_unit_cookie_symbol_vol75 = null
let last_digit_prediction_or_barrier_cookie_symbol_vol75 = null
let currency_cookie_symbol_vol75 = null
let stake_or_payout_cookie_symbol_vol75 = null
let proposal_id_cookie_symbol_vol75 = null
let stake_amount_default_symbol_vol75 = localStorage.getItem('stake_amount_default') || document.getElementById('stake_amount_input').value
let duration_unit_symbol_vol75 = null
let symbol_vol_symbol_vol75 = null
let duration_amount_symbol_vol75 = null
let stake_amount_symbol_vol75 = null
let last_digit_prediction_or_barrier_symbol_vol75 = null
let currency_symbol_vol75 = null
let contract_symbol_vol75 = null
let stake_or_payout_symbol_vol75 = null
let proposal_id_symbol_vol75 = null
let td2_account_id_carousel4_symbol_vol75 = document.getElementById('td2_account_id_carousel4')
let td2_no_of_runs_carousel4_symbol_vol75 = document.getElementById('td2_no_of_runs_carousel4')
let td2_total_stake_carousel4_symbol_vol75 = document.getElementById('td2_total_stake_carousel4')
let td2_total_payout_carousel4_symbol_vol75 = document.getElementById('td2_total_payout_carousel4')
let td2_total_wins_carousel4_symbol_vol75 = document.getElementById('td2_total_wins_carousel4')
let td2_total_loss_carousel4_symbol_vol75 = document.getElementById('td2_total_loss_carousel4')
let td2_total_profit_loss_carousel4_symbol_vol75 = document.getElementById('td2_total_profit_loss_carousel4')
let bot_total_runs_symbol_vol75 = 0
let bot_total_stake_symbol_vol75 = 0
let bot_total_payout_symbol_vol75 = 0
let bot_total_wins_symbol_vol75 = 0
let bot_total_loss_symbol_vol75 = 0
let bot_total_profit_loss_symbol_vol75 = 0
let randomNumber_symbol_vol75 = null;
let strNumber_symbol_vol75 = null;
let authorize_response_symbol_vol75 = null
let subscriptionId_symbol_vol75 = null
let randomNumber2_symbol_vol75 = null
let buy_contract_id_symbol_vol75 = null
let api_id_symbol_vol75 = null;
let api_token_symbol_vol75 = null;
let def_price_up_symbol_vol75 = null
let def_payout_up_symbol_vol75 = null
let def_profit_up_symbol_vol75 = null
let website_status_info_symbol_vol75 = 'initial'
let symbol75_symbol_vol75 = null
let symbol75_cookie_symbol_vol75 = null
let subscription_to_open_contract_symbol_vol75 = true

document.addEventListener('DOMContentLoaded', function () {
    setCookie('symbol75', 'R_75')
    localStorage.setItem('symbol75', 'R_75')

    symbol75_symbol_vol75 = localStorage.getItem('symbol75')
    symbol75_cookie_symbol_vol75 = getCookie('symbol75')

});

let bot_id_symbol_vol75 = 0
let bot_buy_start_time_symbol_vol75 = null
let bot_buy_transaction_id_symbol_vol75 = null
let bot_trade_type_symbol_vol75 = null
let bot_buy_price_symbol_vol75 = null
let bot_entry_spot_symbol_vol75 = null
let bot_exit_spot_symbol_vol75 = null
let bot_profit_loss_symbol_vol75 = null
let bot_status_symbol_vol75 = null
let firstContractReceived_symbol_vol75 = false;
let bot_is_running_or_stopped_symbol_vol75 = false
let end_slide_symbol_vol75 = true
let bot_contract_id_symbol_vol75 = null
let bot_unique_code_symbol_vol75 = null

async function add_after_trade_symbol_vol75(bot_id, botuniqueCode, allContracts, entry_spot, exit_spot, profit_loss, status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss) {
    const tbody1_carousel4 = document.getElementById('tbody1_carousel4');

    if (botuniqueCode == allContracts) {
        let row_carousel4 = document.getElementById(`bot_carousel4${bot_id}`);
        if (!row_carousel4) {
            console.error(`Row with data-unique-code "bot_carousel4${bot_id}" not found.`);
            return;
        }

        const entry_spot_html_carousel4 = document.getElementById(`td5_carousel4${bot_id}`);
        const exit_spot_html_carousel4 = document.getElementById(`td6_carousel4${bot_id}`);
        const profit_loss_html_carousel4 = document.getElementById(`td8_carousel4${bot_id}`);
        const status_html_carousel4 = document.getElementById(`td9_carousel4${bot_id}`);

        if (entry_spot_html_carousel4) {
            entry_spot_html_carousel4.textContent = entry_spot
        } else {
            
        }
        if (exit_spot_html_carousel4) {
            exit_spot_html_carousel4.textContent = exit_spot
        } else {
            
        }
        if (profit_loss_html_carousel4) {
            profit_loss_html_carousel4.textContent = profit_loss
            let profitLossNumber = parseFloat(profit_loss);
            if (profitLossNumber < 0) {
                profit_loss_html_carousel4.style.color = 'red';
            } else {
                profit_loss_html_carousel4.style.color = 'green';
            }
        } else {
            
        }
        if (status_html_carousel4) {
            status_html_carousel4.textContent = status
            if (status == 'won') {
                status_html_carousel4.style.color = 'green'
            } else {
                status_html_carousel4.style.color = 'red'
            }
        } else {
            
        }
        td2_no_of_runs_carousel4_symbol_vol75.textContent = bot_total_runs
        td2_total_stake_carousel4_symbol_vol75.textContent = bot_total_stake
        td2_total_payout_carousel4_symbol_vol75.textContent = Number(bot_total_payout_symbol_vol75.toFixed(2));
        td2_total_wins_carousel4_symbol_vol75.textContent = bot_total_wins
        td2_total_wins_carousel4_symbol_vol75.style.color = 'green'
        td2_total_loss_carousel4_symbol_vol75.textContent = bot_total_loss
        td2_total_loss_carousel4_symbol_vol75.style.color = 'red'
        td2_total_profit_loss_carousel4_symbol_vol75.textContent = Number(bot_total_profit_loss_symbol_vol75.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss_symbol_vol75.toFixed(2))) < 0) {
            td2_total_profit_loss_carousel4_symbol_vol75.style.color = 'red'
        } else {
            td2_total_profit_loss_carousel4_symbol_vol75.style.color = 'green'
        }
    }

}

const progressBar1_carousel4_symbol_vol75 = document.querySelector('.progress1_carousel4');
function fillProgressBar1_symbol_vol75() {
    progressBar1_carousel4_symbol_vol75.classList.add('prog1_carousel4')
}

const progressBar2_carousel4_symbol_vol75 = document.querySelector('.progress2_carousel4');
function fillProgressBar2_symbol_vol75() {
    progressBar2_carousel4_symbol_vol75.classList.add('prog2_carousel4')
}

function set_start_trade1_symbol_vol75(bot_is_running_or_stopped) {
    let bot_state_carousel4 = document.getElementById('bot_state_carousel4')
    let circle1_carousel4 = document.getElementById('circle1_carousel4')
    let circle2_carousel4 = document.getElementById('circle2_carousel4')
    let circle3_carousel4 = document.getElementById('circle3_carousel4')

    if (circle1_carousel4.classList.contains("buy_signal_carousel4")) {
        circle1_carousel4.classList.remove('buy_signal_carousel4')
    }
    if (circle2_carousel4.classList.contains('circle_shadow_carousel4')) {
        circle2_carousel4.classList.remove('circle_shadow_carousel4')
    }
    if (circle2_carousel4.classList.contains('add_color_carousel4')) {
        circle2_carousel4.classList.remove('add_color_carousel4')
    }
    if (circle3_carousel4.classList.contains('add_color_carousel4')) {
        circle3_carousel4.classList.remove('add_color_carousel4')
    }
    if (progressBar1_carousel4_symbol_vol75.classList.contains("prog1_carousel4")) {
        progressBar1_carousel4_symbol_vol75.classList.remove('prog1_carousel4')
    }
    if (progressBar2_carousel4_symbol_vol75.classList.contains("prog2_carousel4")) {
        progressBar2_carousel4_symbol_vol75.classList.remove('prog2_carousel4')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel4.textContent = 'Bot is running'
        circle1_carousel4.classList.add('buy_signal_carousel4')
        setTimeout(fillProgressBar1_symbol_vol75, 1000);
    } else {
        bot_state_carousel4.textContent = 'Bot has stopped'
        circle1_carousel4.classList.remove('buy_signal_carousel4')
    }

}

function start_trade_ref_symbol_vol75(buy_price_ref) {
    if (attempting_buy2_carousel4_symbol_vol75.classList.contains("attempting_buy2_show_carousel4")) {
        attempting_buy2_carousel4_symbol_vol75.classList.remove("attempting_buy2_show_carousel4")
    }
    if (buy_succeded2_carousel4_symbol_vol75.classList.contains("buy_succeded2_show_carousel4")) {
        buy_succeded2_carousel4_symbol_vol75.classList.remove("buy_succeded2_show_carousel4")
    }
    if (contract_close2_carousel4_symbol_vol75.classList.contains("contract_close2_show_carousel4")) {
        contract_close2_carousel4_symbol_vol75.classList.remove("contract_close2_show_carousel4")
    }
    attempting_buy2_carousel4_symbol_vol75.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2_carousel4_symbol_vol75.classList.add('attempting_buy2_show_carousel4')
}


function set_middle_trade1_symbol_vol75(bot_is_running_or_stopped) {
    let bot_state_carousel4 = document.getElementById('bot_state_carousel4')
    let circle1_carousel4 = document.getElementById('circle1_carousel4')
    let circle2_carousel4 = document.getElementById('circle2_carousel4')
    circle1_carousel4.classList.remove('buy_signal_carousel4')
    circle1_carousel4.classList.add('add_color_carousel4')

    function timmimg_shadow() {
        circle2_carousel4.classList.add('circle_shadow_carousel4')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel4.textContent = 'Bot is running'
        circle2_carousel4.classList.add('add_color_carousel4')
        setTimeout(timmimg_shadow, 1500);
    } else {
        bot_state_carousel4.textContent = 'Bot has stopped'
        circle2_carousel4.classList.remove('circle_shadow_carousel4_carousel4')
        circle2_carousel4.classList.remove('add-color_carousel4')
    }
}

function middle_trade_ref_symbol_vol75(buy_ref) {
    buy_succeded2_carousel4_symbol_vol75.textContent = `ID: ${buy_ref}`
    buy_succeded2_carousel4_symbol_vol75.classList.add('buy_succeded2_show_carousel4')
}

function set_end_trade1_symbol_vol75(bot_is_running_or_stopped) {
    let bot_state_carousel4 = document.getElementById('bot_state_carousel4')
    let circle2_carousel4 = document.getElementById('circle2_carousel4')
    let circle3_carousel4 = document.getElementById('circle3_carousel4')

    function timmimg_color() {
        circle3_carousel4.classList.add('add_color_carousel4')
    }
    if (circle2_carousel4.classList.contains('circle_shadow_carousel4')) {
        circle2_carousel4.classList.remove('circle_shadow_carousel4')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel4.textContent = 'Bot is running'
        setTimeout(fillProgressBar2_symbol_vol75, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state_carousel4.textContent = 'Bot has stopped'
        circle3_carousel4.classList.remove('add_color_carousel4')
    }
}
function end_trade_ref_symbol_vol75(sell_ref) {
    contract_close2_carousel4_symbol_vol75.textContent = `ID: ${sell_ref}`
    contract_close2_carousel4_symbol_vol75.classList.add('contract_close2_show_carousel4')
}

let proposal_open_contract2_symbol_vol75 = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})

const proposalOpenContractResponse2_symbol_vol75 = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol75, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {
        
        open_proposal_actions2_symbol_vol75(data)
    }
};

const getProposalOpenContract12_symbol_vol75 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol75);
    proposal_open_contract2_symbol_vol75()
};

const getProposalOpenContract22_symbol_vol75 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol75);
};

const unsubscribeProposalOpenContract2_symbol_vol75 = () => {
    connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol75, false);
};

function run_open_contract_proposal2_symbol_vol75() {
    if (subscription_to_open_contract_symbol_vol75 == true) {
        getProposalOpenContract12_symbol_vol75()
    } else {
        getProposalOpenContract22_symbol_vol75()
    }
    subscription_to_open_contract_symbol_vol75 = false
}

function generateUniqueCode_symbol_vol75(buy) {
    return buy.buy.contract_id;
}

let martingale_store_symbol_vol75 = [1.1, 11.1, 123.4, 1371.1, 15593.5]
let martingale_count_symbol_vol75 = 0
let initial_stake_symbol_vol75 = true
let contract_id2_symbol_vol75 = null
let wonEncountered_symbol_vol75 = false;

async function buy_bot_symbol_vol75(martingale, current_number) {
    const slider = document.getElementById('slide_trade_result_carousel4').style.display = 'flex';

    last_digit_prediction_or_barrier_symbol_vol75 = parseInt(current_number);
    let contract_text_local_st = localStorage.getItem('contract_text_local_st')
    let contract_text_cookie = getCookie('contract_text_cookie')

    if (martingale == 'true' && contract_status2_symbol_vol75 == 'lost') {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol75 += 1
            stake_amount_symbol_vol75 = martingale_store_symbol_vol75[martingale_count_symbol_vol75]
        } else {
            stake_amount_symbol_vol75 = stake_amount_symbol_vol75 * 10.1
        }
    } else if (initial_stake_symbol_vol75 = true || (martingale == 'true' && contract_status2_symbol_vol75 == 'won')) {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol75 = 0
            stake_amount_symbol_vol75 = martingale_store_symbol_vol75[martingale_count_symbol_vol75]
        } else {
            stake_amount_symbol_vol75 = stake_amount_default_symbol_vol75
        }
    } else {
        stake_amount_symbol_vol75 = stake_amount_default_symbol_vol75
    }


    wonEncountered_symbol_vol75 = false
    before_trade_symbol_vol75();
    allProposalOpenContract2_symbol_vol75.length = 0;
    unsubscribeProposalOpenContract2_symbol_vol75()

    try {
        await order_propose_symbol_vol75(api, stake_amount_symbol_vol75, last_digit_prediction_or_barrier_symbol_vol75, stake_or_payout_symbol_vol75, contract_symbol_vol75, currency_symbol_vol75, duration_amount_symbol_vol75, duration_unit_symbol_vol75, symbol75_symbol_vol75);

        let buy = await api.buy({
            "buy": String(proposal_id_symbol_vol75),
            "price": parseFloat(stake_amount_symbol_vol75)
        });

        contract_id2_symbol_vol75 = generateUniqueCode_symbol_vol75(buy)

        run_open_contract_proposal2_symbol_vol75()
        initial_stake_symbol_vol75 = false

    } catch (error) {
        console.error('Error during trade:', error);
    }
}

async function append_result_symbol_vol75(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status) {

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

    const tbody_carousel4 = document.getElementById('tbody1_carousel4');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel4 = document.createElement('tr');
            row_carousel4.id = `bot_carousel4${item.id}`;

            const td1_carousel4 = document.createElement('td');
            td1_carousel4.textContent = item.id;
            td1_carousel4.id = `td1_carousel4${item.id}`;
            row_carousel4.appendChild(td1_carousel4);

            const td2_carousel4 = document.createElement('td');
            td2_carousel4.textContent = item.timestamp;
            td2_carousel4.id = `td2_carousel4${item.id}`;
            row_carousel4.appendChild(td2_carousel4);

            const td3_carousel4 = document.createElement('td');
            td3_carousel4.textContent = item.reference;
            td3_carousel4.id = `td3_carousel4${item.id}`;
            row_carousel4.appendChild(td3_carousel4);

            const td4_carousel4 = document.createElement('td');
            td4_carousel4.textContent = item.tradeType;
            td4_carousel4.id = `td4_carousel4${item.id}`;
            row_carousel4.appendChild(td4_carousel4);

            const td5_carousel4 = document.createElement('td');
            td5_carousel4.textContent = item.entrySpot;
            td5_carousel4.id = `td5_carousel4${item.id}`;
            row_carousel4.appendChild(td5_carousel4);

            const td6_carousel4 = document.createElement('td');
            td6_carousel4.textContent = item.exitSpot;
            td6_carousel4.id = `td6_carousel4${item.id}`;
            row_carousel4.appendChild(td6_carousel4);

            const td7_carousel4 = document.createElement('td');
            td7_carousel4.textContent = item.buyPrice;
            td7_carousel4.id = `td7_carousel4${item.id}`;
            row_carousel4.appendChild(td7_carousel4);

            const td8_carousel4 = document.createElement('td');
            td8_carousel4.textContent = item.profitLoss;
            td8_carousel4.id = `td8_carousel4${item.id}`;
            row_carousel4.appendChild(td8_carousel4);

            const td9_carousel4 = document.createElement('td');
            td9_carousel4.textContent = item.status;
            td9_carousel4.id = `td9_carousel4${item.id}`;
            row_carousel4.appendChild(td9_carousel4);

            if (tbody_carousel4.firstChild) {
                tbody_carousel4.insertBefore(row_carousel4, tbody_carousel4.firstChild);
            } else {
                tbody_carousel4.appendChild(row_carousel4);
            }
        });
    }
    appendRows(backendData)
}

let log_timestamp_current_symbol_vol75 = null
let log_buy_timestamp_bot_symbol_vol75 = null
let log_sell_timestamp_bot_symbol_vol75 = null
let log_message10_symbol_vol75 = null
let log_message9_symbol_vol75 = null
let log_message8_symbol_vol75 = null
let log_message7_symbol_vol75 = null
let log_message6_symbol_vol75 = null
let log_message5_symbol_vol75 = null
let log_message4_symbol_vol75 = null
let log_message3_symbol_vol75 = null
let log_message2_symbol_vol75 = null
let log_message1_symbol_vol75 = null
let log_message_curr_symbol_vol75 = null
let log_message_curr_tick_symbol_vol75 = null
let log_message_last_digit_symbol_vol75 = null
let log_message_entry_tick_symbol_vol75 = null
let appended_symbol_vol75 = true
let log_id_symbol_vol75 = 0

function format_log_current_time_symbol_vol75() {
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

async function bot_log_symbol_vol75(last_ten_tick, last_nine_tick, last_eight_tick, last_seven_tick, last_six_tick, last_five_tick, last_four_tick, last_three_tick, last_two_tick, last_one_tick, current_tick, current_tick_full) {

    const backendData = [
        {
            log_message10_symbol_vol75: last_ten_tick,
            log_message9_symbol_vol75: last_nine_tick,
            log_message8_symbol_vol75: last_eight_tick,
            log_message7_symbol_vol75: last_seven_tick,
            log_message6_symbol_vol75: last_six_tick,
            log_message5_symbol_vol75: last_five_tick,
            log_message4_symbol_vol75: last_four_tick,
            log_message3_symbol_vol75: last_three_tick,
            log_message2_symbol_vol75: last_two_tick,
            log_message1_symbol_vol75: last_one_tick,
            log_message_curr_symbol_vol75: current_tick,
            log_message_curr_tick_symbol_vol75: current_tick_full,
        },
    ];

    const log_tbody_carousel4 = document.getElementById('log_tbody1_carousel4');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel4 = document.createElement('tr');
            row_carousel4.id = `log_bot_carousel4${log_id_symbol_vol75}`;

            const td1_carousel4 = document.createElement('td');
            td1_carousel4.textContent = log_timestamp_current_symbol_vol75;
            td1_carousel4.id = `log_td1_carousel4${log_id_symbol_vol75}`;
            td1_carousel4.classList.add('lod_td1_carousel4')
            row_carousel4.appendChild(td1_carousel4);

            const td2_carousel4 = document.createElement('td');

            if (log_message10_symbol_vol75 == null) {
                log_message10_symbol_vol75 = ''
            }
            if (log_message9_symbol_vol75 == null) {
                log_message9_symbol_vol75 = ''
            }
            if (log_message8_symbol_vol75 == null) {
                log_message8_symbol_vol75 = ''
            }
            if (log_message7_symbol_vol75 == null) {
                log_message7_symbol_vol75 = ''
            }
            if (log_message6_symbol_vol75 == null) {
                log_message6_symbol_vol75 = ''
            }
            if (log_message5_symbol_vol75 == null) {
                log_message5_symbol_vol75 = ''
            }

            if (log_message4_symbol_vol75 == null) {
                log_message4_symbol_vol75 = ''
            }

            if (log_message3_symbol_vol75 == null) {
                log_message3_symbol_vol75 = ''
            }

            if (log_message2_symbol_vol75 == null) {
                log_message2_symbol_vol75 = ''
            }

            if (log_message1_symbol_vol75 == null) {
                log_message1_symbol_vol75 = ''
            }

            if (log_message_curr_symbol_vol75 == null) {
                log_message_curr_symbol_vol75 = ''
            }

            td2_carousel4.textContent = `last ten ticks:  ${item.log_message10_symbol_vol75} ${item.log_message9_symbol_vol75} ${item.log_message8_symbol_vol75} ${item.log_message7_symbol_vol75} ${item.log_message6_symbol_vol75} ${item.log_message5_symbol_vol75} ${item.log_message4_symbol_vol75} ${item.log_message3_symbol_vol75} ${item.log_message2_symbol_vol75} ${item.log_message1_symbol_vol75}          current tick ${item.log_message_curr_symbol_vol75}    ${item.log_message_curr_tick_symbol_vol75}`;

            td2_carousel4.style.whiteSpace = 'pre'
            td2_carousel4.id = `log_td2_carousel4${log_id_symbol_vol75}`;
            td2_carousel4.classList.add('lod_td2_carousel4')
            row_carousel4.appendChild(td2_carousel4);

            const td3_carousel4 = document.createElement('td');
            td3_carousel4.textContent = 'this is the text'
            td3_carousel4.style.whiteSpace = 'pre'
            td3_carousel4.id = `log_td3_carousel4${log_id_symbol_vol75}`;
            td3_carousel4.classList.add('lod_td3_carousel4')
            row_carousel4.appendChild(td3_carousel4);

            if (log_tbody_carousel4.firstChild) {
                log_tbody_carousel4.insertBefore(row_carousel4, log_tbody_carousel4.firstChild);
                appended_symbol_vol75 = true
            } else {
                log_tbody_carousel4.appendChild(row_carousel4);
                appended_symbol_vol75 = true
            }
        });
    }
    appendRows(backendData)
}

async function bot_log_end_symbol_vol75(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td_carousel4 = document.getElementById(`log_td3_carousel4${log_id_symbol_vol75}`)

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

    log_buy_timestamp_bot_symbol_vol75 = formate_log_date(bot_buy_time_stamp)
    log_sell_timestamp_bot_symbol_vol75 = formate_log_date(bot_sell_time_stamp)

    if (target_td_carousel4) {
        target_td_carousel4.textContent = `buy_time:  ${log_buy_timestamp_bot_symbol_vol75}        sell_time:  ${log_sell_timestamp_bot_symbol_vol75}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

        log_id_symbol_vol75 += 1
    } else {
        
    }
}

let first_instance_symbol_vol75 = true

async function startBot_symbol_vol75(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber) {
    bot_is_running_or_stopped_symbol_vol75 = true;
    log_timestamp_current_symbol_vol75 = format_log_current_time_symbol_vol75()
    set_start_trade1_symbol_vol75(bot_is_running_or_stopped_symbol_vol75);
    bot_id_symbol_vol75 += 1;
    firstContractReceived_symbol_vol75 = false;
    end_slide_symbol_vol75 = true;
    bot_entry_spot_symbol_vol75 = '';
    bot_exit_spot_symbol_vol75 = '';
    bot_profit_loss_symbol_vol75 = '';
    bot_status_symbol_vol75 = 'pending';
    bot_log_symbol_vol75(lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
    await buy_bot_symbol_vol75(martingale, currentRandom);
    first_instance_symbol_vol75 = false
}

let bot_state_carousel4_symbol_vol75 = "stop_bot"
let all_bot_start_stop1_symbol_vol75 = null
let all_bot_start_stop1_cookie_symbol_vol75 = null
let buttonContainer_carousel4_symbol_vol75 = document.querySelector('.click_change_carousel4');

function togglePlayPause_symbol_vol75() {
    var play_button_carousel4 = document.getElementById('play_button_carousel4');
    var pause_button_carousel4 = document.getElementById('pause_button_carousel4');
    if (play_button_carousel4) {
        bot_state_carousel4_symbol_vol75 = "stop_bot"
        play_button_carousel4.parentNode.removeChild(play_button_carousel4);

        var pause_button_carousel4 = document.createElement('div');
        pause_button_carousel4.id = 'pause_button_carousel4';
        pause_button_carousel4.className = 'pause_button_carousel4';
        pause_button_carousel4.innerHTML = '&#10074;&#10074;';
        buttonContainer_carousel4_symbol_vol75.appendChild(pause_button_carousel4);
        document.getElementById('bot_state_carousel4').textContent = 'Bot has stopped';
    } else if (pause_button_carousel4) {
        bot_state_carousel4_symbol_vol75 = "start_bot"
        pause_button_carousel4.parentNode.removeChild(pause_button_carousel4);

        var play_button_carousel4 = document.createElement('div');
        play_button_carousel4.id = 'play_button_carousel4';
        play_button_carousel4.className = 'play_button_carousel4';
        play_button_carousel4.innerHTML = '&#9654;';
        buttonContainer_carousel4_symbol_vol75.appendChild(play_button_carousel4);
        document.getElementById('bot_state_carousel4').textContent = 'Bot is running';
    }
}
buttonContainer_carousel4_symbol_vol75.addEventListener('click', togglePlayPause_symbol_vol75);
function getRandom_symbol_vol75(strNumber) {
    return randomNumber_symbol_vol75 = strNumber.charAt(strNumber.length - 1);
}

let currentvol_carousel4_symbol_vol75 = null
let currentvol2_carousel4_symbol_vol75 = null
let martingale_active_carousel4_symbol_vol75 = null
let bot_set_carousel4_symbol_vol75 = null
let set_bot_jump_carousel4_symbol_vol75 = null
let initial_set_jump_symbol_vol75 = true
let currentvol_carousel4_cookie_symbol_vol75 = null
let currentvol2_carousel4_cookie_symbol_vol75 = null
let martingale_active_carousel4_cookie_symbol_vol75 = null
let bot_set_carousel4_cookie_symbol_vol75 = null
let set_bot_jump_carousel4_cookie_symbol_vol75 = null
let initial_set_jump_cookie_symbol_vol75 = true
let currentRandom_symbol_vol75 = null
let lastNumber1_symbol_vol75 = currentRandom_symbol_vol75;
let lastNumber2_symbol_vol75 = lastNumber1_symbol_vol75;
let lastNumber3_symbol_vol75 = lastNumber2_symbol_vol75;
let lastNumber4_symbol_vol75 = lastNumber3_symbol_vol75;
let lastNumber5_symbol_vol75 = lastNumber4_symbol_vol75;
let lastNumber6_symbol_vol75 = lastNumber5_symbol_vol75;
let lastNumber7_symbol_vol75 = lastNumber6_symbol_vol75;
let lastNumber8_symbol_vol75 = lastNumber7_symbol_vol75;
let lastNumber9_symbol_vol75 = lastNumber8_symbol_vol75;
let lastNumber10_symbol_vol75 = lastNumber9_symbol_vol75;

const tickResponse_symbol_vol75 = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', tickResponse_symbol_vol75, false);
        await api.disconnect();
    }

    function getRandom1(strNumber1) {
        return randomNumber_symbol_vol75 = strNumber1.charAt(strNumber1.length - 1);
    }

    lastNumber10_symbol_vol75 = lastNumber9_symbol_vol75
    lastNumber9_symbol_vol75 = lastNumber8_symbol_vol75
    lastNumber8_symbol_vol75 = lastNumber7_symbol_vol75
    lastNumber7_symbol_vol75 = lastNumber6_symbol_vol75
    lastNumber6_symbol_vol75 = lastNumber5_symbol_vol75
    lastNumber5_symbol_vol75 = lastNumber4_symbol_vol75
    lastNumber4_symbol_vol75 = lastNumber3_symbol_vol75
    lastNumber3_symbol_vol75 = lastNumber2_symbol_vol75
    lastNumber2_symbol_vol75 = lastNumber1_symbol_vol75
    lastNumber1_symbol_vol75 = currentRandom_symbol_vol75

    if (data.msg_type === 'tick') {
        let bot_start_stop = bot_state_carousel4_symbol_vol75

        subscriptionId_symbol_vol75 = data.subscription.id;
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

        if(data.echo_req.ticks === "R_75"){
            strNumber_symbol_vol75 = formatToFourDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_vol75 = getRandom1(strNumber_symbol_vol75);
        }

        stream75_carousel4_symbol_vol75.textContent = strNumber_symbol_vol75
        all_bot_start_stop1_symbol_vol75 = localStorage.getItem('all_bot_start_stop1')
        all_bot_start_stop1_cookie_symbol_vol75 = getCookie('all_bot_start_stop1')
        currentvol_carousel4_symbol_vol75 = localStorage.getItem('bot_current_vol1_carousel4');
        currentvol2_carousel4_symbol_vol75 = localStorage.getItem('bot_current_vol2_carousel4');
        martingale_active_carousel4_symbol_vol75 = localStorage.getItem('martingale_carousel4');
        bot_set_carousel4_symbol_vol75 = localStorage.getItem('bot_set_carousel4');
        set_bot_jump_carousel4_symbol_vol75 = localStorage.getItem('bot_jump_carousel4')
        currentvol_carousel4_cookie_symbol_vol75 = getCookie('bot_current_vol1_carousel4');
        currentvol2_carousel4_cookie_symbol_vol75 = getCookie('bot_current_vol2_carousel4');
        martingale_active_carousel4_cookie_symbol_vol75 = getCookie('martingale_carousel4');
        bot_set_carousel4_cookie_symbol_vol75 = getCookie('bot_set_carousel4');
        set_bot_jump_carousel4_cookie_symbol_vol75 = getCookie('bot_jump_carousel4')

        if (((set_bot_jump_carousel4_symbol_vol75 && set_bot_jump_carousel4_symbol_vol75 > 0) && contract_status2_symbol_vol75 == 'lost') || ((set_bot_jump_carousel4_cookie_symbol_vol75 && set_bot_jump_carousel4_cookie_symbol_vol75 > 0) && contract_status2_symbol_vol75 == 'lost')) {
            bot_set_carousel4_symbol_vol75 = (parseInt(bot_set_carousel4_symbol_vol75) + parseInt(set_bot_jump_carousel4_symbol_vol75)) !== null ? (parseInt(bot_set_carousel4_symbol_vol75) + parseInt(set_bot_jump_carousel4_symbol_vol75)) : (parseInt(bot_set_carousel4_cookie_symbol_vol75) + parseInt(set_bot_jump_carousel4_cookie_symbol_vol75))
            contract_status2_symbol_vol75 == 'reset'
        } else if ((initial_set_jump_symbol_vol75 == true || (contract_status2_symbol_vol75 == 'won' && (set_bot_jump_carousel4_symbol_vol75 && set_bot_jump_carousel4_symbol_vol75 > 0))) || (initial_set_jump_cookie_symbol_vol75 == true || (contract_status2_symbol_vol75 == 'won' && (set_bot_jump_carousel4_cookie_symbol_vol75 && set_bot_jump_carousel4_cookie_symbol_vol75 > 0)))) {
            bot_set_carousel4_symbol_vol75 = localStorage.getItem('bot_set_carousel4') ? localStorage.getItem('bot_set_carousel4') : getCookie('bot_set_carousel4');
            initial_set_jump_symbol_vol75 = false
            initial_set_jump_cookie_symbol_vol75 = false
        } else {
            bot_set_carousel4_symbol_vol75 = localStorage.getItem('bot_set_carousel4') ? localStorage.getItem('bot_set_carousel4') : getCookie("bot_set_carousel4");
        }
        let bot_count = bot_id_symbol_vol75

        const tag5_carousel4 = document.getElementById(`td5_carousel4${bot_count}`);
        const tag6_carousel4 = document.getElementById(`td6_carousel4${bot_count}`);
        const tag8_carousel4 = document.getElementById(`td8_carousel4${bot_count}`);
        const tag9_carousel4 = document.getElementById(`td9_carousel4${bot_count}`);

        if (currentRandom_symbol_vol75 !== null && lastNumber1_symbol_vol75 !== null && lastNumber2_symbol_vol75 !== null) {
            if ((tag5_carousel4 && tag6_carousel4 && tag8_carousel4 && tag9_carousel4) || first_instance_symbol_vol75 == true) {
                if (currentRandom_symbol_vol75 && (first_instance_symbol_vol75 == true || (tag5_carousel4.textContent.trim() !== '' && tag6_carousel4.textContent.trim() !== '' && tag8_carousel4.textContent.trim() !== '' && tag9_carousel4.textContent.trim() !== '')) && (bot_set_carousel4_symbol_vol75 == 1 || bot_set_carousel4_cookie_symbol_vol75 == 1)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75 == 'start_bots') && ((currentvol_carousel4_symbol_vol75 == 5 && currentvol2_carousel4_symbol_vol75 == 5) || (currentvol_carousel4_cookie_symbol_vol75 == 5 && currentvol2_carousel4_cookie_symbol_vol75 == 5))) {
                        startBot_symbol_vol75(martingale_active_carousel4_cookie_symbol_vol75, lastNumber10_symbol_vol75, lastNumber9_symbol_vol75, lastNumber8_symbol_vol75, lastNumber7_symbol_vol75, lastNumber6_symbol_vol75, lastNumber5_symbol_vol75, lastNumber4_symbol_vol75, lastNumber3_symbol_vol75, lastNumber2_symbol_vol75, lastNumber1_symbol_vol75, currentRandom_symbol_vol75, strNumber_symbol_vol75)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75 !== null && lastNumber1_symbol_vol75 !== null && lastNumber2_symbol_vol75 !== null) {
            if ((tag5_carousel4 && tag6_carousel4 && tag8_carousel4 && tag9_carousel4) || first_instance_symbol_vol75 == true) {
                if (lastNumber1_symbol_vol75 == currentRandom_symbol_vol75 && (first_instance_symbol_vol75 == true || (tag5_carousel4.textContent.trim() !== '' && tag6_carousel4.textContent.trim() !== '' && tag8_carousel4.textContent.trim() !== '' && tag9_carousel4.textContent.trim() !== '')) && (bot_set_carousel4_symbol_vol75 == 2 || bot_set_carousel4_cookie_symbol_vol75 == 2)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75 == 'start_bots') && ((currentvol_carousel4_symbol_vol75 == 5 && currentvol2_carousel4_symbol_vol75 == 5) || (currentvol_carousel4_cookie_symbol_vol75 == 5 && currentvol2_carousel4_cookie_symbol_vol75 == 5))) {
                        startBot_symbol_vol75(martingale_active_carousel4_cookie_symbol_vol75, lastNumber10_symbol_vol75, lastNumber9_symbol_vol75, lastNumber8_symbol_vol75, lastNumber7_symbol_vol75, lastNumber6_symbol_vol75, lastNumber5_symbol_vol75, lastNumber4_symbol_vol75, lastNumber3_symbol_vol75, lastNumber2_symbol_vol75, lastNumber1_symbol_vol75, currentRandom_symbol_vol75, strNumber_symbol_vol75)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75 !== null && lastNumber1_symbol_vol75 !== null && lastNumber2_symbol_vol75 !== null) {
            if ((tag5_carousel4 && tag6_carousel4 && tag8_carousel4 && tag9_carousel4) || first_instance_symbol_vol75 == true) {
                if (lastNumber2_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber1_symbol_vol75 == currentRandom_symbol_vol75 && (first_instance_symbol_vol75 == true || (tag5_carousel4.textContent.trim() !== '' && tag6_carousel4.textContent.trim() !== '' && tag8_carousel4.textContent.trim() !== '' && tag9_carousel4.textContent.trim() !== '')) && (bot_set_carousel4_symbol_vol75 == 3 || bot_set_carousel4_cookie_symbol_vol75 == 3)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75 == 'start_bots') && ((currentvol_carousel4_symbol_vol75 == 5 && currentvol2_carousel4_symbol_vol75 == 5) || (currentvol_carousel4_cookie_symbol_vol75 == 5 && currentvol2_carousel4_cookie_symbol_vol75 == 5))) {
                        startBot_symbol_vol75(martingale_active_carousel4_cookie_symbol_vol75, lastNumber10_symbol_vol75, lastNumber9_symbol_vol75, lastNumber8_symbol_vol75, lastNumber7_symbol_vol75, lastNumber6_symbol_vol75, lastNumber5_symbol_vol75, lastNumber4_symbol_vol75, lastNumber3_symbol_vol75, lastNumber2_symbol_vol75, lastNumber1_symbol_vol75, currentRandom_symbol_vol75, strNumber_symbol_vol75)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75 !== null && lastNumber1_symbol_vol75 !== null && lastNumber2_symbol_vol75 !== null) {
            if ((tag5_carousel4 && tag6_carousel4 && tag8_carousel4 && tag9_carousel4) || first_instance_symbol_vol75 == true) {
                if (lastNumber3_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber2_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber1_symbol_vol75 == currentRandom_symbol_vol75 && (first_instance_symbol_vol75 == true || (tag5_carousel4.textContent.trim() !== '' && tag6_carousel4.textContent.trim() !== '' && tag8_carousel4.textContent.trim() !== '' && tag9_carousel4.textContent.trim() !== '')) && (bot_set_carousel4_symbol_vol75 == 4 || bot_set_carousel4_cookie_symbol_vol75 == 4)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75 == 'start_bots') && ((currentvol_carousel4_symbol_vol75 == 5 && currentvol2_carousel4_symbol_vol75 == 5) || (currentvol_carousel4_cookie_symbol_vol75 == 5 && currentvol2_carousel4_cookie_symbol_vol75 == 5))) {
                        startBot_symbol_vol75(martingale_active_carousel4_cookie_symbol_vol75, lastNumber10_symbol_vol75, lastNumber9_symbol_vol75, lastNumber8_symbol_vol75, lastNumber7_symbol_vol75, lastNumber6_symbol_vol75, lastNumber5_symbol_vol75, lastNumber4_symbol_vol75, lastNumber3_symbol_vol75, lastNumber2_symbol_vol75, lastNumber1_symbol_vol75, currentRandom_symbol_vol75, strNumber_symbol_vol75)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75 !== null && lastNumber1_symbol_vol75 !== null && lastNumber2_symbol_vol75 !== null) {
            if ((tag5_carousel4 && tag6_carousel4 && tag8_carousel4 && tag9_carousel4) || first_instance_symbol_vol75 == true) {
                if (lastNumber4_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber3_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber2_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber1_symbol_vol75 == currentRandom_symbol_vol75 && (first_instance_symbol_vol75 == true || (tag5_carousel4.textContent.trim() !== '' && tag6_carousel4.textContent.trim() !== '' && tag8_carousel4.textContent.trim() !== '' && tag9_carousel4.textContent.trim() !== '')) && (bot_set_carousel4_symbol_vol75 == 5 || bot_set_carousel4_cookie_symbol_vol75 == 5)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75 == 'start_bots') && ((currentvol_carousel4_symbol_vol75 == 5 && currentvol2_carousel4_symbol_vol75 == 5) || (currentvol_carousel4_cookie_symbol_vol75 == 5 && currentvol2_carousel4_cookie_symbol_vol75 == 5))) {
                        startBot_symbol_vol75(martingale_active_carousel4_cookie_symbol_vol75, lastNumber10_symbol_vol75, lastNumber9_symbol_vol75, lastNumber8_symbol_vol75, lastNumber7_symbol_vol75, lastNumber6_symbol_vol75, lastNumber5_symbol_vol75, lastNumber4_symbol_vol75, lastNumber3_symbol_vol75, lastNumber2_symbol_vol75, lastNumber1_symbol_vol75, currentRandom_symbol_vol75, strNumber_symbol_vol75)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75 !== null && lastNumber1_symbol_vol75 !== null && lastNumber2_symbol_vol75 !== null) {
            if ((tag5_carousel4 && tag6_carousel4 && tag8_carousel4 && tag9_carousel4) || first_instance_symbol_vol75 == true) {
                if (lastNumber5_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber4_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber3_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber2_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber1_symbol_vol75 == currentRandom_symbol_vol75 && (first_instance_symbol_vol75 == true || (tag5_carousel4.textContent.trim() !== '' && tag6_carousel4.textContent.trim() !== '' && tag8_carousel4.textContent.trim() !== '' && tag9_carousel4.textContent.trim() !== '')) && (bot_set_carousel4_symbol_vol75 == 6 || bot_set_carousel4_cookie_symbol_vol75 == 6)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75 == 'start_bots') && ((currentvol_carousel4_symbol_vol75 == 5 && currentvol2_carousel4_symbol_vol75 == 5) || (currentvol_carousel4_cookie_symbol_vol75 == 5 && currentvol2_carousel4_cookie_symbol_vol75 == 5))) {
                        startBot_symbol_vol75(martingale_active_carousel4_cookie_symbol_vol75, lastNumber10_symbol_vol75, lastNumber9_symbol_vol75, lastNumber8_symbol_vol75, lastNumber7_symbol_vol75, lastNumber6_symbol_vol75, lastNumber5_symbol_vol75, lastNumber4_symbol_vol75, lastNumber3_symbol_vol75, lastNumber2_symbol_vol75, lastNumber1_symbol_vol75, currentRandom_symbol_vol75, strNumber_symbol_vol75)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        
        if (currentRandom_symbol_vol75 !== null && lastNumber1_symbol_vol75 !== null && lastNumber2_symbol_vol75 !== null) {
            if ((tag5_carousel4 && tag6_carousel4 && tag8_carousel4 && tag9_carousel4) || first_instance_symbol_vol75 == true) {
                if (lastNumber6_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber5_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber4_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber3_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber2_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber1_symbol_vol75 == currentRandom_symbol_vol75 && (first_instance_symbol_vol75 == true || (tag5_carousel4.textContent.trim() !== '' && tag6_carousel4.textContent.trim() !== '' && tag8_carousel4.textContent.trim() !== '' && tag9_carousel4.textContent.trim() !== '')) && (bot_set_carousel4_symbol_vol75 == 7 || bot_set_carousel4_cookie_symbol_vol75 == 7)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75 == 'start_bots') && ((currentvol_carousel4_symbol_vol75 == 5 && currentvol2_carousel4_symbol_vol75 == 5) || (currentvol_carousel4_cookie_symbol_vol75 == 5 && currentvol2_carousel4_cookie_symbol_vol75 == 5))) {
                        startBot_symbol_vol75(martingale_active_carousel4_cookie_symbol_vol75, lastNumber10_symbol_vol75, lastNumber9_symbol_vol75, lastNumber8_symbol_vol75, lastNumber7_symbol_vol75, lastNumber6_symbol_vol75, lastNumber5_symbol_vol75, lastNumber4_symbol_vol75, lastNumber3_symbol_vol75, lastNumber2_symbol_vol75, lastNumber1_symbol_vol75, currentRandom_symbol_vol75, strNumber_symbol_vol75)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75 !== null && lastNumber1_symbol_vol75 !== null && lastNumber2_symbol_vol75 !== null) {
            if ((tag5_carousel4 && tag6_carousel4 && tag8_carousel4 && tag9_carousel4) || first_instance_symbol_vol75 == true) {
                if (lastNumber7_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber6_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber5_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber4_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber3_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber2_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber1_symbol_vol75 == currentRandom_symbol_vol75 && (first_instance_symbol_vol75 == true || (tag5_carousel4.textContent.trim() !== '' && tag6_carousel4.textContent.trim() !== '' && tag8_carousel4.textContent.trim() !== '' && tag9_carousel4.textContent.trim() !== '')) && (bot_set_carousel4_symbol_vol75 == 8 || bot_set_carousel4_cookie_symbol_vol75 == 8)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75 == 'start_bots') && ((currentvol_carousel4_symbol_vol75 == 5 && currentvol2_carousel4_symbol_vol75 == 5) || (currentvol_carousel4_cookie_symbol_vol75 == 5 && currentvol2_carousel4_cookie_symbol_vol75 == 5))) {
                        startBot_symbol_vol75(martingale_active_carousel4_cookie_symbol_vol75, lastNumber10_symbol_vol75, lastNumber9_symbol_vol75, lastNumber8_symbol_vol75, lastNumber7_symbol_vol75, lastNumber6_symbol_vol75, lastNumber5_symbol_vol75, lastNumber4_symbol_vol75, lastNumber3_symbol_vol75, lastNumber2_symbol_vol75, lastNumber1_symbol_vol75, currentRandom_symbol_vol75, strNumber_symbol_vol75)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75 !== null && lastNumber1_symbol_vol75 !== null && lastNumber2_symbol_vol75 !== null) {
            if ((tag5_carousel4 && tag6_carousel4 && tag8_carousel4 && tag9_carousel4) || first_instance_symbol_vol75 == true) {
                if (lastNumber8_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber7_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber6_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber5_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber4_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber3_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber2_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber1_symbol_vol75 == currentRandom_symbol_vol75 && (first_instance_symbol_vol75 == true || (tag5_carousel4.textContent.trim() !== '' && tag6_carousel4.textContent.trim() !== '' && tag8_carousel4.textContent.trim() !== '' && tag9_carousel4.textContent.trim() !== '')) && (bot_set_carousel4_symbol_vol75 == 9 || bot_set_carousel4_cookie_symbol_vol75 == 9)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75 == 'start_bots') && ((currentvol_carousel4_symbol_vol75 == 5 && currentvol2_carousel4_symbol_vol75 == 5) || (currentvol_carousel4_cookie_symbol_vol75 == 5 && currentvol2_carousel4_cookie_symbol_vol75 == 5))) {
                        startBot_symbol_vol75(martingale_active_carousel4_cookie_symbol_vol75, lastNumber10_symbol_vol75, lastNumber9_symbol_vol75, lastNumber8_symbol_vol75, lastNumber7_symbol_vol75, lastNumber6_symbol_vol75, lastNumber5_symbol_vol75, lastNumber4_symbol_vol75, lastNumber3_symbol_vol75, lastNumber2_symbol_vol75, lastNumber1_symbol_vol75, currentRandom_symbol_vol75, strNumber_symbol_vol75)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75 !== null && lastNumber1_symbol_vol75 !== null && lastNumber2_symbol_vol75 !== null) {
            if ((tag5_carousel4 && tag6_carousel4 && tag8_carousel4 && tag9_carousel4) || first_instance_symbol_vol75 == true) {
                if (lastNumber9_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber8_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber7_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber6_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber5_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber4_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber3_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber2_symbol_vol75 == currentRandom_symbol_vol75 && lastNumber1_symbol_vol75 == currentRandom_symbol_vol75 && (first_instance_symbol_vol75 == true || (tag5_carousel4.textContent.trim() !== '' && tag6_carousel4.textContent.trim() !== '' && tag8_carousel4.textContent.trim() !== '' && tag9_carousel4.textContent.trim() !== '')) && (bot_set_carousel4_symbol_vol75 == 10 || bot_set_carousel4_cookie_symbol_vol75 == 10)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75 == 'start_bots') && ((currentvol_carousel4_symbol_vol75 == 5 && currentvol2_carousel4_symbol_vol75 == 5) || (currentvol_carousel4_cookie_symbol_vol75 == 5 && currentvol2_carousel4_cookie_symbol_vol75 == 5))) {
                        startBot_symbol_vol75(martingale_active_carousel4_cookie_symbol_vol75, lastNumber10_symbol_vol75, lastNumber9_symbol_vol75, lastNumber8_symbol_vol75, lastNumber7_symbol_vol75, lastNumber6_symbol_vol75, lastNumber5_symbol_vol75, lastNumber4_symbol_vol75, lastNumber3_symbol_vol75, lastNumber2_symbol_vol75, lastNumber1_symbol_vol75, currentRandom_symbol_vol75, strNumber_symbol_vol75)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }
    }
};

window.addEventListener('load', function () {
    duration_amount_cookie_symbol_vol75 = getCookie('duration_amount_cookie');
    stake_amount_cookie_symbol_vol75 = getCookie('stake_amount_cookie');
    duration_unit_cookie_symbol_vol75 = getCookie('duration_unit_cookie');
    symbol_vol_cookie_symbol_vol75 = getCookie('symbol_vol_cookie');
    currency_cookie_symbol_vol75 = getCookie('ActiveCurrency')
    contract_text_cookie_symbol_vol75 = getCookie('contract_text_cookie');
    stake_or_payout_cookie_symbol_vol75 = getCookie('stake_or_payout_cookie')
    last_digit_prediction_cookie_symbol_vol75 = getCookie('last_digit_prediction_cookie')
    stake_amount_default_symbol_vol75 = getCookie('stake_amount_default')

    if (last_digit_prediction_cookie_symbol_vol75) {
        last_digit_prediction_or_barrier_symbol_vol75 = last_digit_prediction_or_barrier_symbol_vol75
    } else {
        let numericValue = last_digit_input_symbol_vol75.value
        last_digit_prediction_or_barrier_symbol_vol75 = numericValue
    }
    if (symbol_vol_cookie_symbol_vol75) {
        symbol_vol_symbol_vol75 = symbol_vol_cookie_symbol_vol75;
    } else {
        symbol_vol_symbol_vol75 = "R_75";
    }
    if (duration_unit_cookie_symbol_vol75) {
        duration_unit_symbol_vol75 = duration_unit_cookie_symbol_vol75;
    } else {
        duration_unit_symbol_vol75 = "t";
    }
    if (duration_amount_cookie_symbol_vol75) {
        duration_amount_symbol_vol75 = parseInt(duration_amount_cookie_symbol_vol75, 10);
    } else {
        duration_amount_symbol_vol75 = 1;
    }
    if (stake_amount_cookie_symbol_vol75) {
        stake_amount_symbol_vol75 = parseFloat(stake_amount_cookie_symbol_vol75);
    } else {
        stake_amount_symbol_vol75 = 10;
    }
    if (stake_amount_default_symbol_vol75) {
        stake_amount_default_symbol_vol75 = parseFloat(stake_amount_default_symbol_vol75);
    } else {
        stake_amount_default_symbol_vol75 = 10;
    }
    if (currency_cookie_symbol_vol75) {
        currency_symbol_vol75 = currency_cookie_symbol_vol75;
    } else {
        currency_symbol_vol75 = "USD";
    }
    if (contract_text_cookie_symbol_vol75) {
        contract_symbol_vol75 = contract_text_cookie_symbol_vol75;
    } else {
        contract_symbol_vol75 = "Matches/Differs";
    }
    if (stake_or_payout_cookie_symbol_vol75) {
        stake_or_payout_symbol_vol75 = stake_or_payout_cookie_symbol_vol75;
    } else {
        stake_or_payout_symbol_vol75 = "stake";
    }

    initializeApi(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response_symbol_General) {
            clearInterval(getAwaitingResponses)
        } else {
            
        }
    }, 2000);
});

async function order_propose_symbol_vol75(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
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
                let tooltip = document.getElementById('tooltiptext75');
                tooltip.textContent = data.error.message;
                tooltip.classList.add('tooltiptext10')
                
                connection.removeEventListener('message', proposalResponse, false);
                await api.disconnect();
                reject(new Error('Error in proposal'));
            } else if (data.msg_type === 'proposal') {

                proposal_id_symbol_vol75 = data.proposal.id;

                // let calc = displayProposalResult2(data, data.proposal.display_value, data.proposal.payout);

                // def_price_up_symbol_vol75 = data.proposal.display_value;
                // def_payout_up_symbol_vol75 = data.proposal.payout;
                // def_profit_up_symbol_vol75 = calc.NetProfit;
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

const unsubscribeProposal_symbol_vol75 = () => {
    connection.removeEventListener('message', proposalResponse_symbol_vol75, false);
};

function convertTimestampTo12HourTime_symbol_vol75(timestamp) {
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

function formatNumberAndBoldLastDecimal_symbol_vol75(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart) {
        let lastDecimalDigit = decimalPart.slice(-1);
        decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
    } 
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}

let contract_status_html_symbol_vol75 = document.getElementById('contract_status_carousel4') 
let end_tic_off_trade_symbol_vol75 = document.getElementById('end_tic_off_trade_carousel4')            
let price_after_trade_figure_amount_symbol_vol75 = document.getElementById('price_after_trade_figure_amount_carousel4') 
let profit_figure_amount_symbol_vol75 = document.getElementById('profit_figure_amount_carousel4') 
let buy_price_figure_amount_symbol_vol75 = document.getElementById('buy_price_figure_amount_carousel4') 
let result_currency_html_symbol_vol75 = document.querySelectorAll('.result_currency')
let transaction_refrence_figure_symbol_vol75 = document.getElementById('transaction_refrence_figure_carousel4') 
let trade_start_time_symbol_vol75 = document.getElementById('trade_start_time_carousel4') 
let buy_price_text_symbol_vol75 = document.getElementById('buy_price_text_carousel4') 
let price_after_trade_text_symbol_vol75 = document.getElementById('price_after_trade_text_carousel4') 
let profit_text_symbol_vol75 = document.getElementById('profit_text_carousel4') 
let durr_amount_prop_count_symbol_vol75 = document.getElementById('durr_amount_prop_count_carousel4') 
let durr_amount_prop_symbol_vol75 = document.getElementById('durr_amount_prop_carousel4') 
let countdown_trade_symbol_vol75 = 0
let countdown_trade2_symbol_vol75 = 0

function before_trade_symbol_vol75() {
    countdown_trade_symbol_vol75 = 0
    let allDigits = document.querySelectorAll('.ldgs_carousel4')
    let buy_price_text = document.getElementById('buy_price_text_carousel4')
    let price_after_trade_text = document.getElementById('price_after_trade_text_carousel4')
    let profit_text = document.getElementById('profit_text_carousel4')
    let durr_amount_prop_count = document.getElementById('durr_amount_prop_count_carousel4')
    let slide_trade_result = document.getElementById('slide_trade_result_carousel4')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel4')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel4')
    let profit_figure_amount = document.getElementById('profit_figure_amount_carousel4')
    contract_status_html_symbol_vol75.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count.textContent = countdown_trade_symbol_vol75
    durr_amount_prop.textContent = duration_amount_symbol_vol75
    buy_price_figure_amount.textContent = def_price_up_symbol_vol75
    price_after_trade_figure_amount.textContent = def_payout_up_symbol_vol75
    profit_figure_amount.textContent = def_profit_up_symbol_vol75

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
            if (digit.textContent != (last_digit_prediction_or_barrier_symbol_vol75)) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound == 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier_symbol_vol75) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}

function after_trade_symbol_vol75(status, endDigit) {
    let slide_trade_result = document.getElementById('slide_trade_result_carousel4')
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

function formate_date_symbol_vol75(datein) {
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

let allProposalOpenContract_symbol_vol75 = []
let longcodeProp_symbol_vol75 = null
let contract_ids_buy_symbol_vol75 = null
let contract_status_symbol_vol75 = null
let last_tick_symbol_vol75 = null
let profit_or_loss_symbol_vol75 = null
let final_price_symbol_vol75 = null
let payout_result_symbol_vol75 = null
let buy_price_symbol_vol75 = null
let contract_currency_symbol_vol75 = null
let time_of_trade_symbol_vol75 = null
let every_tick_symbol_vol75 = null
let contract_id_symbol_vol75 = null

let allProposalOpenContract2_symbol_vol75 = []
let longcodeProp2_symbol_vol75 = null
let contract_ids_buy2_symbol_vol75 = null
let contract_ids_sell2_symbol_vol75 = null
let contract_status2_symbol_vol75 = null
let last_tick2_symbol_vol75 = null
let profit_or_loss2_symbol_vol75 = null
let final_price2_symbol_vol75 = null
let payout_result2_symbol_vol75 = null
let buy_price2_symbol_vol75 = null
let contract_currency2_symbol_vol75 = null
let time_of_trade2_symbol_vol75 = null
let every_tick2_symbol_vol75 = null

function open_proposal_actions2_symbol_vol75(data) {
    if (data.proposal_open_contract.contract_id == contract_id2_symbol_vol75) {
        set_middle_trade1_symbol_vol75(bot_is_running_or_stopped_symbol_vol75)
        bot_buy_start_time_symbol_vol75 = formate_date_symbol_vol75(data.proposal_open_contract.date_start)
        bot_buy_transaction_id_symbol_vol75 = data.proposal_open_contract.transaction_ids.buy
        bot_trade_type_symbol_vol75 = data.proposal_open_contract.contract_type
        bot_buy_price_symbol_vol75 = data.proposal_open_contract.buy_price
        bot_status_symbol_vol75 = data.proposal_open_contract.status == 'open' ? 'Pending' : data.proposal_open_contract.status
        bot_contract_id_symbol_vol75 = data.proposal_open_contract.contract_id
        start_trade_ref_symbol_vol75(bot_buy_price_symbol_vol75)

        if (firstContractReceived_symbol_vol75 == false) {
            append_result_symbol_vol75(bot_id_symbol_vol75, bot_buy_start_time_symbol_vol75, bot_buy_transaction_id_symbol_vol75, bot_trade_type_symbol_vol75, bot_buy_price_symbol_vol75, bot_status_symbol_vol75);
            firstContractReceived_symbol_vol75 = true
        }

        longcodeProp2_symbol_vol75 = data.proposal_open_contract.longcode
        allProposalOpenContract2_symbol_vol75.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information_carousel4').textContent = longcodeProp2_symbol_vol75

        if (allProposalOpenContract2_symbol_vol75.length > 0 && allProposalOpenContract2_symbol_vol75[allProposalOpenContract2_symbol_vol75.length - 1].length > 0) {
            let lastSubArray2 = allProposalOpenContract2_symbol_vol75[allProposalOpenContract2_symbol_vol75.length - 1];
            let lastElementOfLastSubArray2 = lastSubArray2[lastSubArray2.length - 1].tick_display_value;
            let numberString2 = lastElementOfLastSubArray2.toString();
            let lastCharacter2 = numberString2[numberString2.length - 1];
            handleNewNumber_symbol_vol75(lastCharacter2);
            every_tick2_symbol_vol75 = lastElementOfLastSubArray2
            end_tic_off_trade_symbol_vol75.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol75(every_tick2_symbol_vol75);
            if (countdown_trade2_symbol_vol75 < duration_amount_symbol_vol75) {
                countdown_trade2_symbol_vol75 += 1
                durr_amount_prop_count_symbol_vol75.textContent = countdown_trade_symbol_vol75
            }
            if (data.proposal_open_contract.is_expired == 1 && end_slide_symbol_vol75 == true) {
                set_end_trade1_symbol_vol75(bot_is_running_or_stopped_symbol_vol75)
                end_slide_symbol_vol75 = false
            }
            contract_ids_buy2_symbol_vol75 = data.proposal_open_contract.transaction_ids.buy
            if (contract_ids_buy2_symbol_vol75) {
                middle_trade_ref_symbol_vol75(contract_ids_buy2_symbol_vol75)
            }
            if (data.proposal_open_contract.status !== 'open') {
                let circle2_carousel4 = document.getElementById('circle2_carousel4')
                circle2_carousel4.classList.remove('circle_shadow_carousel4')
                bot_status_symbol_vol75 = data.proposal_open_contract.status
                bot_entry_spot_symbol_vol75 = data.proposal_open_contract.entry_tick
                bot_exit_spot_symbol_vol75 = data.proposal_open_contract.exit_tick
                bot_profit_loss_symbol_vol75 = data.proposal_open_contract.profit
                contract_status2_symbol_vol75 = data.proposal_open_contract.status
                last_tick2_symbol_vol75 = lastElementOfLastSubArray2
                profit_or_loss2_symbol_vol75 = data.proposal_open_contract.profit
                payout_result2_symbol_vol75 = data.proposal_open_contract.payout
                buy_price2_symbol_vol75 = data.proposal_open_contract.buy_price
                contract_currency2_symbol_vol75 = data.proposal_open_contract.currency
                contract_ids_buy2_symbol_vol75 = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2_symbol_vol75 = data.proposal_open_contract.expiry_time
                contract_ids_sell2_symbol_vol75 = data.proposal_open_contract.transaction_ids.sell

                end_trade_ref_symbol_vol75(contract_ids_sell2_symbol_vol75)
                if (profit_or_loss2_symbol_vol75 < 0) {
                    final_price2_symbol_vol75 = '0.00'
                } else if (profit_or_loss2_symbol_vol75 > 0) {
                    final_price2_symbol_vol75 = payout_result2_symbol_vol75
                } else {
                    
                }
                if (contract_status2_symbol_vol75 == 'won' && !wonEncountered_symbol_vol75) {
                    bot_total_wins_symbol_vol75 = bot_total_wins_symbol_vol75 + 1;
                    bot_total_profit_loss_symbol_vol75 = bot_total_profit_loss_symbol_vol75 + profit_or_loss2_symbol_vol75;
                    bot_total_stake_symbol_vol75 = bot_total_stake_symbol_vol75 + buy_price2_symbol_vol75
                    bot_total_runs_symbol_vol75 = bot_total_runs_symbol_vol75 + 1;
                    bot_total_payout_symbol_vol75 = bot_total_payout_symbol_vol75 + payout_result2_symbol_vol75;
                    add_after_trade_symbol_vol75(bot_id_symbol_vol75, contract_id2_symbol_vol75, bot_contract_id_symbol_vol75, bot_entry_spot_symbol_vol75, bot_exit_spot_symbol_vol75, bot_profit_loss_symbol_vol75, bot_status_symbol_vol75, bot_total_runs_symbol_vol75, bot_total_stake_symbol_vol75, bot_total_payout_symbol_vol75, bot_total_wins_symbol_vol75, bot_total_loss_symbol_vol75, bot_total_profit_loss_symbol_vol75);
                    wonEncountered_symbol_vol75 = true;
                } else if (contract_status2_symbol_vol75 == 'lost') {
                    bot_total_loss_symbol_vol75 = bot_total_loss_symbol_vol75 + 1;
                    bot_total_profit_loss_symbol_vol75 = bot_total_profit_loss_symbol_vol75 + profit_or_loss2_symbol_vol75;
                    bot_total_stake_symbol_vol75 = bot_total_stake_symbol_vol75 + buy_price2_symbol_vol75
                    bot_total_runs_symbol_vol75 = bot_total_runs_symbol_vol75 + 1;
                    bot_total_payout_symbol_vol75 = bot_total_payout_symbol_vol75 - payout_result2_symbol_vol75;
                    add_after_trade_symbol_vol75(bot_id_symbol_vol75, contract_id2_symbol_vol75, bot_contract_id_symbol_vol75, bot_entry_spot_symbol_vol75, bot_exit_spot_symbol_vol75, bot_profit_loss_symbol_vol75, bot_status_symbol_vol75, bot_total_runs_symbol_vol75, bot_total_stake_symbol_vol75, bot_total_payout_symbol_vol75, bot_total_wins_symbol_vol75, bot_total_loss_symbol_vol75, bot_total_profit_loss_symbol_vol75);
                    wonEncountered_symbol_vol75 = true;
                }
                if (contract_status2_symbol_vol75 == 'won' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol75 = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol75 = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol75 = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol75 = every_tick2_symbol_vol75
                    bot_log_end_symbol_vol75(log_buy_timestamp_bot_symbol_vol75, log_sell_timestamp_bot_symbol_vol75, log_message_entry_tick_symbol_vol75, log_message_last_digit_symbol_vol75)
                } else if (contract_status2_symbol_vol75 == 'lost' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol75 = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol75 = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol75 = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol75 = every_tick2_symbol_vol75
                    bot_log_end_symbol_vol75(log_buy_timestamp_bot_symbol_vol75, log_sell_timestamp_bot_symbol_vol75, log_message_entry_tick_symbol_vol75, log_message_last_digit_symbol_vol75)
                }
                contract_status_html_symbol_vol75.textContent = contract_status2_symbol_vol75
                end_tic_off_trade_symbol_vol75.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol75(last_tick2_symbol_vol75);
                profit_figure_amount_symbol_vol75.textContent = profit_or_loss2_symbol_vol75
                price_after_trade_figure_amount_symbol_vol75.textContent = final_price2_symbol_vol75
                buy_price_figure_amount_symbol_vol75.textContent = buy_price2_symbol_vol75
                result_currency_html_symbol_vol75.textContent = contract_currency2_symbol_vol75
                transaction_refrence_figure_symbol_vol75.textContent = contract_ids_buy2_symbol_vol75
                trade_start_time_symbol_vol75.innerHTML = convertTimestampTo12HourTime_symbol_vol75(time_of_trade2_symbol_vol75)
                buy_price_text_symbol_vol75.textContent = 'Buy price'
                price_after_trade_text_symbol_vol75.textContent = 'Final price'
                profit_text_symbol_vol75.textContent = 'Profit'
                after_trade_symbol_vol75(contract_status2_symbol_vol75, lastCharacter2)
            } else {
            }
        } else {
            
        }
    }
}

let currentPosition1_symbol_vol75 = 0;
function moveSlider_symbol_vol75(number) {
    const slider = document.getElementById('slide_trade_result_carousel4');
    const container = document.getElementById('last_digit_responds_carousel4');
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

    const target = document.querySelector(`.last_digits_carousel4.${stringnumber}`);
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
        currentPosition1_symbol_vol75 = newPosition;
    }
}

function handleNewNumber_symbol_vol75(randomNumber) {
    const newPosition = randomNumber;
    moveSlider_symbol_vol75(newPosition);
}

let log_close_and_info_cont_symbol_vol75 = document.getElementById('log_close_and_info_cont_carousel4');
let bot_log_show_cont_symbol_vol75 = document.getElementById('bot_log_show_cont_carousel4');
let bot_details_symbol_vol75 = document.getElementById('bot_details_carousel4');
let bot_details2_symbol_vol75 = document.getElementById('bot_details2_carousel4');

if (bot_log_show_cont_symbol_vol75 && bot_details_symbol_vol75) {
    bot_details_symbol_vol75.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol75.style.display == 'none') {
            bot_log_show_cont_symbol_vol75.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol75.style.display = 'none'
        }
    });

    log_close_and_info_cont_symbol_vol75.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_log_show_cont_symbol_vol75.style.display == 'block') {
            bot_log_show_cont_symbol_vol75.style.display = 'none'
        } else {
            bot_log_show_cont_symbol_vol75.style.display = 'block'
        }
    });
} else {
    console.error('One or more elements are not found');
}

if (bot_log_show_cont_symbol_vol75 && bot_details_symbol_vol75) {
    bot_details2_symbol_vol75.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol75.style.display == 'none') {
            bot_log_show_cont_symbol_vol75.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol75.style.display = 'none'
        }
    });
} else {
    console.error('One or more elements are not found');
}

let martingale_symbol_vol75 = document.getElementById('martingale_carousel4');
let flash_info_cont_symbol_vol75 = document.getElementById('flash_info_cont_carousel4');
let tick_check_amount_symbol_vol75 = document.getElementById('tick_check_amount_carousel4');
let settings_cont_symbol_vol75 = document.getElementById('settings_cont_carousel4');
let tick_check_symbol_vol75 = document.getElementById('tick_check_carousel4');
let martingale_jump_symbol_vol75 = document.getElementById('martingale_jump_carousel4');
let increase_jump_symbol_vol75 = document.getElementById('increase_jump_carousel4');
let reduce_jump_symbol_vol75 = document.getElementById('reduce_jump_carousel4');
let bot_settings_symbol_vol75 = document.getElementById('bot_settings_carousel4');
let bot_settings2_symbol_vol75 = document.getElementById('bot_settings2_carousel4');
const volumes2_symbol_vol75 = document.querySelectorAll(".slide_vol2_carousel4");
let tick_check2_symbol_vol75 = document.getElementById('tick_check2_carousel4');
let martingale2_symbol_vol75 = document.getElementById('martingale2_carousel4');
let martingale_jump2_symbol_vol75 = document.getElementById('martingale_jump2_carousel4');
let martingale_jump_set_symbol_vol75 = document.getElementById('martingale_jump_set_carousel4');
const last_digit_settings_symbol_vol75 = document.querySelectorAll(".last_digit_settings_carousel4");

martingale_symbol_vol75.addEventListener('click', function () {
    if (martingale_symbol_vol75.classList.contains('active_mat')) {
        martingale_symbol_vol75.classList.remove('active_mat');
        martingale2_symbol_vol75.classList.remove('active_mat');
        setCookie('martingale_carousel4', 'false')
        localStorage.setItem('martingale_carousel4', 'false')
        flash_info_cont_symbol_vol75.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol75.style.color = '#fff'
    } else {
        martingale_symbol_vol75.classList.add('active_mat');
        martingale2_symbol_vol75.classList.add('active_mat');
        setCookie('martingale_carousel4', 'true')
        localStorage.setItem('martingale_carousel4', 'true')
        flash_info_cont_symbol_vol75.textContent = 'martigale is active'
        tick_check_amount_symbol_vol75.style.color = '#fff'
    }
    if (flash_info_cont_symbol_vol75.classList.contains('show_flash_info_carousel4')) {
        flash_info_cont_symbol_vol75.classList.remove('show_flash_info_carousel4')
        setTimeout(() => {
            flash_info_cont_symbol_vol75.classList.remove('show_flash_info_carousel4')
        }, 5000)
    } else {
        flash_info_cont_symbol_vol75.classList.add('show_flash_info_carousel4')
        setTimeout(() => {
            flash_info_cont_symbol_vol75.classList.remove('show_flash_info_carousel4')
        }, 5000)
    }
});

function bot_set_default_symbol_vol75() {
    let curr_bot_set = localStorage.getItem('bot_set_carousel4');
    if (curr_bot_set === null) {
        setTimeout(bot_set_default_symbol_vol75, 100);
        return;
    }
    tick_check_symbol_vol75.textContent = curr_bot_set;
    tick_check2_symbol_vol75.textContent = curr_bot_set;
}

bot_set_default_symbol_vol75();

bot_settings_symbol_vol75.addEventListener('click', function () {
    if (settings_cont_symbol_vol75.style.display == 'none') {
        settings_cont_symbol_vol75.style.display = 'block'
    } else {
        settings_cont_symbol_vol75.style.display = 'none'
    }
});

document.addEventListener('click', (event) => {
    if (!bot_settings_symbol_vol75.contains(event.target) && !settings_cont_symbol_vol75.contains(event.target) && !martingale_jump_set_symbol_vol75.contains(event.target)) {
        settings_cont_symbol_vol75.style.display = 'none';
    }
});

last_digit_settings_symbol_vol75.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.querySelector('.bot_text_carousel4').textContent.trim().replace(/\s+/g, ' ');
        if (bot_set == 'Last one digit bot') {
            localStorage.setItem('bot_set_carousel4', '1')
            setCookie('bot_set_carousel4', '1')
            localStorage.setItem('bot_set_store_carousel4', '1')
            setCookie('bot_set_store_carousel4', '1')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            localStorage.setItem('bot_set_carousel4', '2')
            setCookie('bot_set_carousel4', '2')
            localStorage.setItem('bot_set_store_carousel4', '2')
            setCookie('bot_set_store_carousel4', '2')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            localStorage.setItem('bot_set_carousel4', '3')
            setCookie('bot_set_carousel4', '3')
            localStorage.setItem('bot_set_store_carousel4', '3')
            setCookie('bot_set_store_carousel4', '3')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            localStorage.setItem('bot_set_carousel4', '4')
            setCookie('bot_set_carousel4', '4')
            localStorage.setItem('bot_set_store_carousel4', '4')
            setCookie('bot_set_store_carousel4', '4')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            localStorage.setItem('bot_set_carousel4', '5')
            setCookie('bot_set_carousel4', '5')
            localStorage.setItem('bot_set_store_carousel4', '5')
            setCookie('bot_set_store_carousel4', '5')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            localStorage.setItem('bot_set_carousel4', '6')
            setCookie('bot_set_carousel4', '6')
            localStorage.setItem('bot_set_store_carousel4', '6')
            setCookie('bot_set_store_carousel4', '6')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            localStorage.setItem('bot_set_carousel4', '7')
            setCookie('bot_set_carousel4', '7')
            localStorage.setItem('bot_set_store_carousel4', '7')
            setCookie('bot_set_store_carousel4', '7')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            localStorage.setItem('bot_set_carousel4', '8')
            setCookie('bot_set_carousel4', '8')
            localStorage.setItem('bot_set_store_carousel4', '8')
            setCookie('bot_set_store_carousel4', '8')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            localStorage.setItem('bot_set_carousel4', '9')
            setCookie('bot_set_carousel4', '9')
            localStorage.setItem('bot_set_store_carousel4', '9')
            setCookie('bot_set_store_carousel4', '9')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            localStorage.setItem('bot_set_carousel4', '10')
            setCookie('bot_set_carousel4', '10')
            localStorage.setItem('bot_set_store_carousel4', '10')
            setCookie('bot_set_store_carousel4', '10')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});


let jump_count_symbol_vol75 = 0

function jump_count_set_symbol_vol75() {
    localStorage.setItem('bot_jump_carousel4', jump_count_symbol_vol75)
    setCookie('bot_jump_carousel4', jump_count_symbol_vol75)
}

function jump_count_set2_symbol_vol75() {
    let stored_jump_count = localStorage.getItem('bot_jump_carousel4') ? localStorage.getItem('bot_jump_carousel4') : getCookie('bot_jump_carousel4');
    jump_count_symbol_vol75 = stored_jump_count !== null ? parseInt(stored_jump_count, 10) : 0;

    if (isNaN(jump_count_symbol_vol75)) {
        jump_count_symbol_vol75 = 0;
    }
    if (jump_count_symbol_vol75 > 0) {
        martingale_jump_symbol_vol75.textContent = 'j' + jump_count_symbol_vol75
        martingale_jump2_symbol_vol75.textContent = 'j' + jump_count_symbol_vol75
    } else {
        martingale_jump_symbol_vol75.textContent = ''
        martingale_jump2_symbol_vol75.textContent = ''
    }
}

jump_count_set2_symbol_vol75()

increase_jump_symbol_vol75.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count_symbol_vol75 = jump_count_symbol_vol75 + 1
    jump_count_set_symbol_vol75()
    jump_count_set2_symbol_vol75()
})

reduce_jump_symbol_vol75.addEventListener('click', (event) => {
    event.preventDefault()
    if (jump_count_symbol_vol75 > 0) {
        jump_count_symbol_vol75 = jump_count_symbol_vol75 - 1
        jump_count_set_symbol_vol75()
        jump_count_set2_symbol_vol75()
    }
})

bot_settings2_symbol_vol75.addEventListener('click', function () {
    if (settings_cont_symbol_vol75.style.display == 'none') {
        settings_cont_symbol_vol75.style.display = 'block'
    } else {
        settings_cont_symbol_vol75.style.display = 'none'
    }
});

martingale2_symbol_vol75.addEventListener('click', function () {
    if (martingale2_symbol_vol75.classList.contains('active_mat')) {
        martingale2_symbol_vol75.classList.remove('active_mat');
        martingale_symbol_vol75.classList.remove('active_mat');
        setCookie('martingale_carousel4', 'false')
        localStorage.setItem('martingale_carousel4', 'false')
        flash_info_cont_symbol_vol75.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol75.style.color = '#fff'
    } else {
        martingale2_symbol_vol75.classList.add('active_mat');
        martingale_symbol_vol75.classList.add('active_mat');
        setCookie('martingale_carousel4', 'true')
        localStorage.setItem('martingale_carousel4', 'true')
        flash_info_cont_symbol_vol75.textContent = 'martigale is active'
        tick_check_amount_symbol_vol75.style.color = '#fff'
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

















































































let last_digit_input_symbol_vol75_1s = document.getElementById('last_digit_input')
let close_contract_result_container_symbol_vol75_1s = document.getElementById('close_contract_result_container_carousel9')
let buy_sell_two_symbol_vol75_1s = document.getElementById('buy_sell_two')
let trade_type_secound_symbol_vol75_1s = document.getElementById("trade_type_secound")
let attempting_buy2_carousel9_symbol_vol75_1s = document.getElementById("attempting_buy2_carousel9")
let buy_succeded2_carousel9_symbol_vol75_1s = document.getElementById("buy_succeded2_carousel9")
let contract_close2_carousel9_symbol_vol75_1s = document.getElementById("contract_close2_carousel9")
let stream75_1s_carousel9_symbol_vol75_1s = document.getElementById('stream75_1s_carousel9')

let last_digit_prediction_local_st_symbol_vol75_1s = null
let barrier_local_st_symbol_vol75_1s = null
let symbol_vol_text_local_st_symbol_vol75_1s = null
let contract_text_local_st_symbol_vol75_1s = null
let duration_amount_local_st_symbol_vol75_1s = null
let stake_amount_local_st_symbol_vol75_1s = null
let symbol_vol_local_st_symbol_vol75_1s = null
let duration_unit_local_st_symbol_vol75_1s = null
let last_digit_prediction_or_barrier_local_st_symbol_vol75_1s = null
let currency_local_st_symbol_vol75_1s = null
let stake_or_payout_local_st_symbol_vol75_1s = null
let proposal_id_local_st_symbol_vol75_1s = null
let last_digit_prediction_cookie_symbol_vol75_1s = null
let barrier_cookie_symbol_vol75_1s = null
let symbol_vol_text_cookie_symbol_vol75_1s = null
let contract_text_cookie_symbol_vol75_1s = null
let duration_amount_cookie_symbol_vol75_1s = null
let stake_amount_cookie_symbol_vol75_1s = null
let symbol_vol_cookie_symbol_vol75_1s = null
let duration_unit_cookie_symbol_vol75_1s = null
let last_digit_prediction_or_barrier_cookie_symbol_vol75_1s = null
let currency_cookie_symbol_vol75_1s = null
let stake_or_payout_cookie_symbol_vol75_1s = null
let proposal_id_cookie_symbol_vol75_1s = null
let stake_amount_default_symbol_vol75_1s = localStorage.getItem('stake_amount_default') || document.getElementById('stake_amount_input').value
let duration_unit_symbol_vol75_1s = null
let symbol_vol_symbol_vol75_1s = null
let duration_amount_symbol_vol75_1s = null
let stake_amount_symbol_vol75_1s = null
let last_digit_prediction_or_barrier_symbol_vol75_1s = null
let currency_symbol_vol75_1s = null
let contract_symbol_vol75_1s = null
let stake_or_payout_symbol_vol75_1s = null
let proposal_id_symbol_vol75_1s = null
let td2_account_id_carousel9_symbol_vol75_1s = document.getElementById('td2_account_id_carousel9')
let td2_no_of_runs_carousel9_symbol_vol75_1s = document.getElementById('td2_no_of_runs_carousel9')
let td2_total_stake_carousel9_symbol_vol75_1s = document.getElementById('td2_total_stake_carousel9')
let td2_total_payout_carousel9_symbol_vol75_1s = document.getElementById('td2_total_payout_carousel9')
let td2_total_wins_carousel9_symbol_vol75_1s = document.getElementById('td2_total_wins_carousel9')
let td2_total_loss_carousel9_symbol_vol75_1s = document.getElementById('td2_total_loss_carousel9')
let td2_total_profit_loss_carousel9_symbol_vol75_1s = document.getElementById('td2_total_profit_loss_carousel9')
let bot_total_runs_symbol_vol75_1s = 0
let bot_total_stake_symbol_vol75_1s = 0
let bot_total_payout_symbol_vol75_1s = 0
let bot_total_wins_symbol_vol75_1s = 0
let bot_total_loss_symbol_vol75_1s = 0
let bot_total_profit_loss_symbol_vol75_1s = 0
let randomNumber_symbol_vol75_1s = null;
let strNumber_symbol_vol75_1s = null;
let authorize_response_symbol_vol75_1s = null
let subscriptionId_symbol_vol75_1s = null
let randomNumber2_symbol_vol75_1s = null
let buy_contract_id_symbol_vol75_1s = null
let api_id_symbol_vol75_1s = null;
let api_token_symbol_vol75_1s = null;
let def_price_up_symbol_vol75_1s = null
let def_payout_up_symbol_vol75_1s = null
let def_profit_up_symbol_vol75_1s = null
let website_status_info_symbol_vol75_1s = 'initial'
let symbol75_1s_symbol_vol75_1s = null
let symbol75_1s_cookie_symbol_vol75_1s = null
let subscription_to_open_contract_symbol_vol75_1s = true

document.addEventListener('DOMContentLoaded', function () {
    setCookie('symbol75_1s', '1HZ75V')
    localStorage.setItem('symbol75_1s', '1HZ75V')

    symbol75_1s_symbol_vol75_1s = localStorage.getItem('symbol75_1s')
    symbol75_1s_cookie_symbol_vol75_1s = getCookie('symbol75_1s')

});

let bot_id_symbol_vol75_1s = 0
let bot_buy_start_time_symbol_vol75_1s = null
let bot_buy_transaction_id_symbol_vol75_1s = null
let bot_trade_type_symbol_vol75_1s = null
let bot_buy_price_symbol_vol75_1s = null
let bot_entry_spot_symbol_vol75_1s = null
let bot_exit_spot_symbol_vol75_1s = null
let bot_profit_loss_symbol_vol75_1s = null
let bot_status_symbol_vol75_1s = null
let firstContractReceived_symbol_vol75_1s = false;
let bot_is_running_or_stopped_symbol_vol75_1s = false
let end_slide_symbol_vol75_1s = true
let bot_contract_id_symbol_vol75_1s = null
let bot_unique_code_symbol_vol75_1s = null

async function add_after_trade_symbol_vol75_1s(bot_id, botuniqueCode, allContracts, entry_spot, exit_spot, profit_loss, status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss) {
    const tbody1_carousel9 = document.getElementById('tbody1_carousel9');

    if (botuniqueCode == allContracts) {
        let row_carousel9 = document.getElementById(`bot_carousel9${bot_id}`);
        if (!row_carousel9) {
            console.error(`Row with data-unique-code "bot_carousel9${bot_id}" not found.`);
            return;
        }

        const entry_spot_html_carousel9 = document.getElementById(`td5_carousel9${bot_id}`);
        const exit_spot_html_carousel9 = document.getElementById(`td6_carousel9${bot_id}`);
        const profit_loss_html_carousel9 = document.getElementById(`td8_carousel9${bot_id}`);
        const status_html_carousel9 = document.getElementById(`td9_carousel9${bot_id}`);

        if (entry_spot_html_carousel9) {
            entry_spot_html_carousel9.textContent = entry_spot
        } else {
            
        }
        if (exit_spot_html_carousel9) {
            exit_spot_html_carousel9.textContent = exit_spot
        } else {
            
        }
        if (profit_loss_html_carousel9) {
            profit_loss_html_carousel9.textContent = profit_loss
            let profitLossNumber = parseFloat(profit_loss);
            if (profitLossNumber < 0) {
                profit_loss_html_carousel9.style.color = 'red';
            } else {
                profit_loss_html_carousel9.style.color = 'green';
            }
        } else {
            
        }
        if (status_html_carousel9) {
            status_html_carousel9.textContent = status
            if (status == 'won') {
                status_html_carousel9.style.color = 'green'
            } else {
                status_html_carousel9.style.color = 'red'
            }
        } else {
            
        }
        td2_no_of_runs_carousel9_symbol_vol75_1s.textContent = bot_total_runs_symbol_vol75_1s
        td2_total_stake_carousel9_symbol_vol75_1s.textContent = bot_total_stake_symbol_vol75_1s
        td2_total_payout_carousel9_symbol_vol75_1s.textContent = Number(bot_total_payout_symbol_vol75_1s.toFixed(2));
        td2_total_wins_carousel9_symbol_vol75_1s.textContent = bot_total_wins_symbol_vol75_1s
        td2_total_wins_carousel9_symbol_vol75_1s.style.color = 'green'
        td2_total_loss_carousel9_symbol_vol75_1s.textContent = bot_total_loss_symbol_vol75_1s
        td2_total_loss_carousel9_symbol_vol75_1s.style.color = 'red'
        td2_total_profit_loss_carousel9_symbol_vol75_1s.textContent = Number(bot_total_profit_loss_symbol_vol75_1s.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss_symbol_vol75_1s.toFixed(2))) < 0) {
            td2_total_profit_loss_carousel9_symbol_vol75_1s.style.color = 'red'
        } else {
            td2_total_profit_loss_carousel9_symbol_vol75_1s.style.color = 'green'
        }
    }

}

const progressBar1_carousel9_symbol_vol75_1s = document.querySelector('.progress1_carousel9');
function fillProgressBar1_symbol_vol75_1s() {
    progressBar1_carousel9_symbol_vol75_1s.classList.add('prog1_carousel9')
}

const progressBar2_carousel9_symbol_vol75_1s = document.querySelector('.progress2_carousel9');
function fillProgressBar2_symbol_vol75_1s() {
    progressBar2_carousel9_symbol_vol75_1s.classList.add('prog2_carousel9')
}

function set_start_trade1_symbol_vol75_1s(bot_is_running_or_stopped) {
    let bot_state_carousel9 = document.getElementById('bot_state_carousel9')
    let circle1_carousel9 = document.getElementById('circle1_carousel9')
    let circle2_carousel9 = document.getElementById('circle2_carousel9')
    let circle3_carousel9 = document.getElementById('circle3_carousel9')

    if (circle1_carousel9.classList.contains("buy_signal_carousel9")) {
        circle1_carousel9.classList.remove('buy_signal_carousel9')
    }
    if (circle2_carousel9.classList.contains('circle_shadow_carousel9')) {
        circle2_carousel9.classList.remove('circle_shadow_carousel9')
    }
    if (circle2_carousel9.classList.contains('add_color_carousel9')) {
        circle2_carousel9.classList.remove('add_color_carousel9')
    }
    if (circle3_carousel9.classList.contains('add_color_carousel9')) {
        circle3_carousel9.classList.remove('add_color_carousel9')
    }
    if (progressBar1_carousel9_symbol_vol75_1s.classList.contains("prog1_carousel9")) {
        progressBar1_carousel9_symbol_vol75_1s.classList.remove('prog1_carousel9')
    }
    if (progressBar2_carousel9_symbol_vol75_1s.classList.contains("prog2_carousel9")) {
        progressBar2_carousel9_symbol_vol75_1s.classList.remove('prog2_carousel9')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel9.textContent = 'Bot is running'
        circle1_carousel9.classList.add('buy_signal_carousel9')
        setTimeout(fillProgressBar1_symbol_vol75_1s, 1000);
    } else {
        bot_state_carousel9.textContent = 'Bot has stopped'
        circle1_carousel9.classList.remove('buy_signal_carousel9')
    }

}

function start_trade_ref_symbol_vol75_1s(buy_price_ref) {
    if (attempting_buy2_carousel9_symbol_vol75_1s.classList.contains("attempting_buy2_show_carousel9")) {
        attempting_buy2_carousel9_symbol_vol75_1s.classList.remove("attempting_buy2_show_carousel9")
    }
    if (buy_succeded2_carousel9_symbol_vol75_1s.classList.contains("buy_succeded2_show_carousel9")) {
        buy_succeded2_carousel9_symbol_vol75_1s.classList.remove("buy_succeded2_show_carousel9")
    }
    if (contract_close2_carousel9_symbol_vol75_1s.classList.contains("contract_close2_show_carousel9")) {
        contract_close2_carousel9_symbol_vol75_1s.classList.remove("contract_close2_show_carousel9")
    }
    attempting_buy2_carousel9_symbol_vol75_1s.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2_carousel9_symbol_vol75_1s.classList.add('attempting_buy2_show_carousel9')
}


function set_middle_trade1_symbol_vol75_1s(bot_is_running_or_stopped) {
    let bot_state_carousel9 = document.getElementById('bot_state_carousel9')
    let circle1_carousel9 = document.getElementById('circle1_carousel9')
    let circle2_carousel9 = document.getElementById('circle2_carousel9')
    circle1_carousel9.classList.remove('buy_signal_carousel9')
    circle1_carousel9.classList.add('add_color_carousel9')

    function timmimg_shadow() {
        circle2_carousel9.classList.add('circle_shadow_carousel9')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel9.textContent = 'Bot is running'
        circle2_carousel9.classList.add('add_color_carousel9')
        setTimeout(timmimg_shadow, 1500);
    } else {
        bot_state_carousel9.textContent = 'Bot has stopped'
        circle2_carousel9.classList.remove('circle_shadow_carousel9_carousel9')
        circle2_carousel9.classList.remove('add-color_carousel9')
    }
}

function middle_trade_ref_symbol_vol75_1s(buy_ref) {
    buy_succeded2_carousel9_symbol_vol75_1s.textContent = `ID: ${buy_ref}`
    buy_succeded2_carousel9_symbol_vol75_1s.classList.add('buy_succeded2_show_carousel9')
}

function set_end_trade1_symbol_vol75_1s(bot_is_running_or_stopped) {
    let bot_state_carousel9 = document.getElementById('bot_state_carousel9')
    let circle2_carousel9 = document.getElementById('circle2_carousel9')
    let circle3_carousel9 = document.getElementById('circle3_carousel9')

    function timmimg_color() {
        circle3_carousel9.classList.add('add_color_carousel9')
    }
    if (circle2_carousel9.classList.contains('circle_shadow_carousel9')) {
        circle2_carousel9.classList.remove('circle_shadow_carousel9')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel9.textContent = 'Bot is running'
        setTimeout(fillProgressBar2_symbol_vol75_1s, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state_carousel9.textContent = 'Bot has stopped'
        circle3_carousel9.classList.remove('add_color_carousel9')
    }
}
function end_trade_ref_symbol_vol75_1s(sell_ref) {
    contract_close2_carousel9_symbol_vol75_1s.textContent = `ID: ${sell_ref}`
    contract_close2_carousel9_symbol_vol75_1s.classList.add('contract_close2_show_carousel9')
}

let proposal_open_contract2_symbol_vol75_1s = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})

const proposalOpenContractResponse2_symbol_vol75_1s = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol75_1s, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {
        
        open_proposal_actions2_symbol_vol75_1s(data)
    }
};

const getProposalOpenContract12_symbol_vol75_1s = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol75_1s);
    proposal_open_contract2_symbol_vol75_1s()
};

const getProposalOpenContract22_symbol_vol75_1s = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol75_1s);
};

const unsubscribeProposalOpenContract2_symbol_vol75_1s = () => {
    connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol75_1s, false);
};

function run_open_contract_proposal2_symbol_vol75_1s() {
    if (subscription_to_open_contract_symbol_vol75_1s == true) {
        getProposalOpenContract12_symbol_vol75_1s()
    } else {
        getProposalOpenContract22_symbol_vol75_1s()
    }
    subscription_to_open_contract_symbol_vol75_1s = false
}

function generateUniqueCode_symbol_vol75_1s(buy) {
    return buy.buy.contract_id;
}

let martingale_store_symbol_vol75_1s = [1.1, 11.1, 123.4, 1371.1, 15593.5]
let martingale_count_symbol_vol75_1s = 0
let initial_stake_symbol_vol75_1s = true
let contract_id2_symbol_vol75_1s = null
let wonEncountered_symbol_vol75_1s = false;

async function buy_bot_symbol_vol75_1s(martingale, current_number) {
    const slider = document.getElementById('slide_trade_result_carousel9').style.display = 'flex';

    last_digit_prediction_or_barrier_symbol_vol75_1s = parseInt(current_number);
    let contract_text_local_st = localStorage.getItem('contract_text_local_st')
    let contract_text_cookie = getCookie('contract_text_cookie')

    if (martingale == 'true' && contract_status2_symbol_vol75_1s == 'lost') {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol75_1s += 1
            stake_amount_symbol_vol75_1s = martingale_store_symbol_vol75_1s[martingale_count_symbol_vol75_1s]
        } else {
            stake_amount_symbol_vol75_1s = stake_amount_symbol_vol75_1s * 10.1
        }
    } else if (initial_stake_symbol_vol75_1s = true || (martingale == 'true' && contract_status2_symbol_vol75_1s == 'won')) {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol75_1s = 0
            stake_amount_symbol_vol75_1s = martingale_store_symbol_vol75_1s[martingale_count_symbol_vol75_1s]
        } else {
            stake_amount_symbol_vol75_1s = stake_amount_default_symbol_vol75_1s
        }
    } else {
        stake_amount_symbol_vol75_1s = stake_amount_default_symbol_vol75_1s
    }


    wonEncountered_symbol_vol75_1s = false
    before_trade_symbol_vol75_1s();
    allProposalOpenContract2_symbol_vol75_1s.length = 0;
    unsubscribeProposalOpenContract2_symbol_vol75_1s()

    try {
        await order_propose_symbol_vol75_1s(api, stake_amount_symbol_vol75_1s, last_digit_prediction_or_barrier_symbol_vol75_1s, stake_or_payout_symbol_vol75_1s, contract_symbol_vol75_1s, currency_symbol_vol75_1s, duration_amount_symbol_vol75_1s, duration_unit_symbol_vol75_1s, symbol75_1s_symbol_vol75_1s);

        let buy = await api.buy({
            "buy": String(proposal_id_symbol_vol75_1s),
            "price": parseFloat(stake_amount_symbol_vol75_1s)
        });

        contract_id2_symbol_vol75_1s = generateUniqueCode_symbol_vol75_1s(buy)

        run_open_contract_proposal2_symbol_vol75_1s()
        initial_stake_symbol_vol75_1s = false

    } catch (error) {
        console.error('Error during trade:', error);
    }
}

async function append_result_symbol_vol75_1s(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status) {

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

    const tbody_carousel9 = document.getElementById('tbody1_carousel9');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel9 = document.createElement('tr');
            row_carousel9.id = `bot_carousel9${item.id}`;

            const td1_carousel9 = document.createElement('td');
            td1_carousel9.textContent = item.id;
            td1_carousel9.id = `td1_carousel9${item.id}`;
            row_carousel9.appendChild(td1_carousel9);

            const td2_carousel9 = document.createElement('td');
            td2_carousel9.textContent = item.timestamp;
            td2_carousel9.id = `td2_carousel9${item.id}`;
            row_carousel9.appendChild(td2_carousel9);

            const td3_carousel9 = document.createElement('td');
            td3_carousel9.textContent = item.reference;
            td3_carousel9.id = `td3_carousel9${item.id}`;
            row_carousel9.appendChild(td3_carousel9);

            const td4_carousel9 = document.createElement('td');
            td4_carousel9.textContent = item.tradeType;
            td4_carousel9.id = `td4_carousel9${item.id}`;
            row_carousel9.appendChild(td4_carousel9);

            const td5_carousel9 = document.createElement('td');
            td5_carousel9.textContent = item.entrySpot;
            td5_carousel9.id = `td5_carousel9${item.id}`;
            row_carousel9.appendChild(td5_carousel9);

            const td6_carousel9 = document.createElement('td');
            td6_carousel9.textContent = item.exitSpot;
            td6_carousel9.id = `td6_carousel9${item.id}`;
            row_carousel9.appendChild(td6_carousel9);

            const td7_carousel9 = document.createElement('td');
            td7_carousel9.textContent = item.buyPrice;
            td7_carousel9.id = `td7_carousel9${item.id}`;
            row_carousel9.appendChild(td7_carousel9);

            const td8_carousel9 = document.createElement('td');
            td8_carousel9.textContent = item.profitLoss;
            td8_carousel9.id = `td8_carousel9${item.id}`;
            row_carousel9.appendChild(td8_carousel9);

            const td9_carousel9 = document.createElement('td');
            td9_carousel9.textContent = item.status;
            td9_carousel9.id = `td9_carousel9${item.id}`;
            row_carousel9.appendChild(td9_carousel9);

            if (tbody_carousel9.firstChild) {
                tbody_carousel9.insertBefore(row_carousel9, tbody_carousel9.firstChild);
            } else {
                tbody_carousel9.appendChild(row_carousel9);
            }
        });
    }
    appendRows(backendData)
}

let log_timestamp_current_symbol_vol75_1s = null
let log_buy_timestamp_bot_symbol_vol75_1s = null
let log_sell_timestamp_bot_symbol_vol75_1s = null
let log_message10_symbol_vol75_1s = null
let log_message9_symbol_vol75_1s = null
let log_message8_symbol_vol75_1s = null
let log_message7_symbol_vol75_1s = null
let log_message6_symbol_vol75_1s = null
let log_message5_symbol_vol75_1s = null
let log_message4_symbol_vol75_1s = null
let log_message3_symbol_vol75_1s = null
let log_message2_symbol_vol75_1s = null
let log_message1_symbol_vol75_1s = null
let log_message_curr_symbol_vol75_1s = null
let log_message_curr_tick_symbol_vol75_1s = null
let log_message_last_digit_symbol_vol75_1s = null
let log_message_entry_tick_symbol_vol75_1s = null
let appended_symbol_vol75_1s = true
let log_id_symbol_vol75_1s = 0

function format_log_current_time_symbol_vol75_1s() {
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

async function bot_log_symbol_vol75_1s(last_ten_tick, last_nine_tick, last_eight_tick, last_seven_tick, last_six_tick, last_five_tick, last_four_tick, last_three_tick, last_two_tick, last_one_tick, current_tick, current_tick_full) {

    const backendData = [
        {
            log_message10_symbol_vol75_1s: last_ten_tick,
            log_message9_symbol_vol75_1s: last_nine_tick,
            log_message8_symbol_vol75_1s: last_eight_tick,
            log_message7_symbol_vol75_1s: last_seven_tick,
            log_message6_symbol_vol75_1s: last_six_tick,
            log_message5_symbol_vol75_1s: last_five_tick,
            log_message4_symbol_vol75_1s: last_four_tick,
            log_message3_symbol_vol75_1s: last_three_tick,
            log_message2_symbol_vol75_1s: last_two_tick,
            log_message1_symbol_vol75_1s: last_one_tick,
            log_message_curr_symbol_vol75_1s: current_tick,
            log_message_curr_tick_symbol_vol75_1s: current_tick_full,
        },
    ];

    const log_tbody_carousel9 = document.getElementById('log_tbody1_carousel9');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel9 = document.createElement('tr');
            row_carousel9.id = `log_bot_carousel9${log_id_symbol_vol75_1s}`;

            const td1_carousel9 = document.createElement('td');
            td1_carousel9.textContent = log_timestamp_current_symbol_vol75_1s;
            td1_carousel9.id = `log_td1_carousel9${log_id_symbol_vol75_1s}`;
            td1_carousel9.classList.add('lod_td1_carousel9')
            row_carousel9.appendChild(td1_carousel9);

            const td2_carousel9 = document.createElement('td');

            if (log_message10_symbol_vol75_1s == null) {
                log_message10_symbol_vol75_1s = ''
            }
            if (log_message9_symbol_vol75_1s == null) {
                log_message9_symbol_vol75_1s = ''
            }
            if (log_message8_symbol_vol75_1s == null) {
                log_message8_symbol_vol75_1s = ''
            }
            if (log_message7_symbol_vol75_1s == null) {
                log_message7_symbol_vol75_1s = ''
            }
            if (log_message6_symbol_vol75_1s == null) {
                log_message6_symbol_vol75_1s = ''
            }
            if (log_message5_symbol_vol75_1s == null) {
                log_message5_symbol_vol75_1s = ''
            }

            if (log_message4_symbol_vol75_1s == null) {
                log_message4_symbol_vol75_1s = ''
            }

            if (log_message3_symbol_vol75_1s == null) {
                log_message3_symbol_vol75_1s = ''
            }

            if (log_message2_symbol_vol75_1s == null) {
                log_message2_symbol_vol75_1s = ''
            }

            if (log_message1_symbol_vol75_1s == null) {
                log_message1_symbol_vol75_1s = ''
            }

            if (log_message_curr_symbol_vol75_1s == null) {
                log_message_curr_symbol_vol75_1s = ''
            }

            td2_carousel9.textContent = `last ten ticks:  ${item.log_message10_symbol_vol75_1s} ${item.log_message9_symbol_vol75_1s} ${item.log_message8_symbol_vol75_1s} ${item.log_message7_symbol_vol75_1s} ${item.log_message6_symbol_vol75_1s} ${item.log_message5_symbol_vol75_1s} ${item.log_message4_symbol_vol75_1s} ${item.log_message3_symbol_vol75_1s} ${item.log_message2_symbol_vol75_1s} ${item.log_message1_symbol_vol75_1s}          current tick ${item.log_message_curr_symbol_vol75_1s}    ${item.log_message_curr_tick_symbol_vol75_1s}`;

            td2_carousel9.style.whiteSpace = 'pre'
            td2_carousel9.id = `log_td2_carousel9${log_id_symbol_vol75_1s}`;
            td2_carousel9.classList.add('lod_td2_carousel9')
            row_carousel9.appendChild(td2_carousel9);

            const td3_carousel9 = document.createElement('td');
            td3_carousel9.textContent = 'this is the text'
            td3_carousel9.style.whiteSpace = 'pre'
            td3_carousel9.id = `log_td3_carousel9${log_id_symbol_vol75_1s}`;
            td3_carousel9.classList.add('lod_td3_carousel9')
            row_carousel9.appendChild(td3_carousel9);

            if (log_tbody_carousel9.firstChild) {
                log_tbody_carousel9.insertBefore(row_carousel9, log_tbody_carousel9.firstChild);
                appended_symbol_vol75_1s = true
            } else {
                log_tbody_carousel9.appendChild(row_carousel9);
                appended_symbol_vol75_1s = true
            }
        });
    }
    appendRows(backendData)
}

async function bot_log_end_symbol_vol75_1s(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td_carousel9 = document.getElementById(`log_td3_carousel9${log_id_symbol_vol75_1s}`)

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

    log_buy_timestamp_bot_symbol_vol75_1s = formate_log_date(bot_buy_time_stamp)
    log_sell_timestamp_bot_symbol_vol75_1s = formate_log_date(bot_sell_time_stamp)

    if (target_td_carousel9) {
        target_td_carousel9.textContent = `buy_time:  ${log_buy_timestamp_bot_symbol_vol75_1s}        sell_time:  ${log_sell_timestamp_bot_symbol_vol75_1s}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

        log_id_symbol_vol75_1s += 1
    } else {
        
    }
}

let first_instance_symbol_vol75_1s = true

async function startBot_symbol_vol75_1s(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber) {
    bot_is_running_or_stopped_symbol_vol75_1s = true;
    log_timestamp_current_symbol_vol75_1s = format_log_current_time_symbol_vol75_1s()
    set_start_trade1_symbol_vol75_1s(bot_is_running_or_stopped_symbol_vol75_1s);
    bot_id_symbol_vol75_1s += 1;
    firstContractReceived_symbol_vol75_1s = false;
    end_slide_symbol_vol75_1s = true;
    bot_entry_spot_symbol_vol75_1s = '';
    bot_exit_spot_symbol_vol75_1s = '';
    bot_profit_loss_symbol_vol75_1s = '';
    bot_status_symbol_vol75_1s = 'pending';
    bot_log_symbol_vol75_1s(lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
    await buy_bot_symbol_vol75_1s(martingale, currentRandom);
    first_instance_symbol_vol75_1s = false
}

let bot_state_carousel9_symbol_vol75_1s = "stop_bot"
let all_bot_start_stop1_symbol_vol75_1s = null
let all_bot_start_stop1_cookie_symbol_vol75_1s = null
let buttonContainer_carousel9_symbol_vol75_1s = document.querySelector('.click_change_carousel9');

function togglePlayPause_symbol_vol75_1s() {
    var play_button_carousel9 = document.getElementById('play_button_carousel9');
    var pause_button_carousel9 = document.getElementById('pause_button_carousel9');
    if (play_button_carousel9) {
        bot_state_carousel9_symbol_vol75_1s = "stop_bot"
        play_button_carousel9.parentNode.removeChild(play_button_carousel9);

        var pause_button_carousel9 = document.createElement('div');
        pause_button_carousel9.id = 'pause_button_carousel9';
        pause_button_carousel9.className = 'pause_button_carousel9';
        pause_button_carousel9.innerHTML = '&#10074;&#10074;';
        buttonContainer_carousel9_symbol_vol75_1s.appendChild(pause_button_carousel9);
        document.getElementById('bot_state_carousel9').textContent = 'Bot has stopped';
    } else if (pause_button_carousel9) {
        bot_state_carousel9_symbol_vol75_1s = "start_bot"
        pause_button_carousel9.parentNode.removeChild(pause_button_carousel9);

        var play_button_carousel9 = document.createElement('div');
        play_button_carousel9.id = 'play_button_carousel9';
        play_button_carousel9.className = 'play_button_carousel9';
        play_button_carousel9.innerHTML = '&#9654;';
        buttonContainer_carousel9_symbol_vol75_1s.appendChild(play_button_carousel9);
        document.getElementById('bot_state_carousel9').textContent = 'Bot is running';
    }
}
buttonContainer_carousel9_symbol_vol75_1s.addEventListener('click', togglePlayPause_symbol_vol75_1s);
function getRandom_symbol_vol75_1s(strNumber) {
    return randomNumber_symbol_vol75_1s = strNumber.charAt(strNumber.length - 1);
}

let currentvol_carousel9_symbol_vol75_1s = null
let currentvol2_carousel9_symbol_vol75_1s = null
let martingale_active_carousel9_symbol_vol75_1s = null
let bot_set_carousel9_symbol_vol75_1s = null
let set_bot_jump_carousel9_symbol_vol75_1s = null
let initial_set_jump_symbol_vol75_1s = true
let currentvol_carousel9_cookie_symbol_vol75_1s = null
let currentvol2_carousel9_cookie_symbol_vol75_1s = null
let martingale_active_carousel9_cookie_symbol_vol75_1s = null
let bot_set_carousel9_cookie_symbol_vol75_1s = null
let set_bot_jump_carousel9_cookie_symbol_vol75_1s = null
let initial_set_jump_cookie_symbol_vol75_1s = true
let currentRandom_symbol_vol75_1s = null
let lastNumber1_symbol_vol75_1s = currentRandom_symbol_vol75_1s;
let lastNumber2_symbol_vol75_1s = lastNumber1_symbol_vol75_1s;
let lastNumber3_symbol_vol75_1s = lastNumber2_symbol_vol75_1s;
let lastNumber4_symbol_vol75_1s = lastNumber3_symbol_vol75_1s;
let lastNumber5_symbol_vol75_1s = lastNumber4_symbol_vol75_1s;
let lastNumber6_symbol_vol75_1s = lastNumber5_symbol_vol75_1s;
let lastNumber7_symbol_vol75_1s = lastNumber6_symbol_vol75_1s;
let lastNumber8_symbol_vol75_1s = lastNumber7_symbol_vol75_1s;
let lastNumber9_symbol_vol75_1s = lastNumber8_symbol_vol75_1s;
let lastNumber10_symbol_vol75_1s = lastNumber9_symbol_vol75_1s;

const tickResponse_symbol_vol75_1s = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', tickResponse_symbol_vol75_1s, false);
        await api.disconnect();
    }

    function getRandom1(strNumber1) {
        return randomNumber_symbol_vol75_1s = strNumber1.charAt(strNumber1.length - 1);
    }

    lastNumber10_symbol_vol75_1s = lastNumber9_symbol_vol75_1s
    lastNumber9_symbol_vol75_1s = lastNumber8_symbol_vol75_1s
    lastNumber8_symbol_vol75_1s = lastNumber7_symbol_vol75_1s
    lastNumber7_symbol_vol75_1s = lastNumber6_symbol_vol75_1s
    lastNumber6_symbol_vol75_1s = lastNumber5_symbol_vol75_1s
    lastNumber5_symbol_vol75_1s = lastNumber4_symbol_vol75_1s
    lastNumber4_symbol_vol75_1s = lastNumber3_symbol_vol75_1s
    lastNumber3_symbol_vol75_1s = lastNumber2_symbol_vol75_1s
    lastNumber2_symbol_vol75_1s = lastNumber1_symbol_vol75_1s
    lastNumber1_symbol_vol75_1s = currentRandom_symbol_vol75_1s

    if (data.msg_type === 'tick') {
        let bot_start_stop = bot_state_carousel9_symbol_vol75_1s

        subscriptionId_symbol_vol75_1s = data.subscription.id;
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

        if(data.echo_req.ticks === "1HZ75V"){
            strNumber_symbol_vol75_1s = formatToTwoDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_vol75_1s = getRandom1(strNumber_symbol_vol75_1s)
        }

        stream75_1s_carousel9_symbol_vol75_1s.textContent = strNumber_symbol_vol75_1s
        all_bot_start_stop1_symbol_vol75_1s = localStorage.getItem('all_bot_start_stop1')
        all_bot_start_stop1_cookie_symbol_vol75_1s = getCookie('all_bot_start_stop1')
        currentvol_carousel9_symbol_vol75_1s = localStorage.getItem('bot_current_vol1_carousel9');
        currentvol2_carousel9_symbol_vol75_1s = localStorage.getItem('bot_current_vol2_carousel9');
        martingale_active_carousel9_symbol_vol75_1s = localStorage.getItem('martingale_carousel9');
        bot_set_carousel9_symbol_vol75_1s = localStorage.getItem('bot_set_carousel9');
        set_bot_jump_carousel9_symbol_vol75_1s = localStorage.getItem('bot_jump_carousel9')
        currentvol_carousel9_cookie_symbol_vol75_1s = getCookie('bot_current_vol1_carousel9');
        currentvol2_carousel9_cookie_symbol_vol75_1s = getCookie('bot_current_vol2_carousel9');
        martingale_active_carousel9_cookie_symbol_vol75_1s = getCookie('martingale_carousel9');
        bot_set_carousel9_cookie_symbol_vol75_1s = getCookie('bot_set_carousel9');
        set_bot_jump_carousel9_cookie_symbol_vol75_1s = getCookie('bot_jump_carousel9')

        if (((set_bot_jump_carousel9_symbol_vol75_1s && set_bot_jump_carousel9_symbol_vol75_1s > 0) && contract_status2_symbol_vol75_1s == 'lost') || ((set_bot_jump_carousel9_cookie_symbol_vol75_1s && set_bot_jump_carousel9_cookie_symbol_vol75_1s > 0) && contract_status2_symbol_vol75_1s == 'lost')) {
            bot_set_carousel9_symbol_vol75_1s = (parseInt(bot_set_carousel9_symbol_vol75_1s) + parseInt(set_bot_jump_carousel9_symbol_vol75_1s)) !== null ? (parseInt(bot_set_carousel9_symbol_vol75_1s) + parseInt(set_bot_jump_carousel9_symbol_vol75_1s)) : (parseInt(bot_set_carousel9_cookie_symbol_vol75_1s) + parseInt(set_bot_jump_carousel9_cookie_symbol_vol75_1s))
            contract_status2_symbol_vol75_1s == 'reset'
        } else if ((initial_set_jump_symbol_vol75_1s == true || (contract_status2_symbol_vol75_1s == 'won' && (set_bot_jump_carousel9_symbol_vol75_1s && set_bot_jump_carousel9_symbol_vol75_1s > 0))) || (initial_set_jump_cookie_symbol_vol75_1s == true || (contract_status2_symbol_vol75_1s == 'won' && (set_bot_jump_carousel9_cookie_symbol_vol75_1s && set_bot_jump_carousel9_cookie_symbol_vol75_1s > 0)))) {
            bot_set_carousel9_symbol_vol75_1s = localStorage.getItem('bot_set_carousel9') ? localStorage.getItem('bot_set_carousel9') : getCookie('bot_set_carousel9');
            initial_set_jump_symbol_vol75_1s = false
            initial_set_jump_cookie_symbol_vol75_1s = false
        } else {
            bot_set_carousel9_symbol_vol75_1s = localStorage.getItem('bot_set_carousel9') ? localStorage.getItem('bot_set_carousel9') : getCookie("bot_set_carousel9");
        }
        let bot_count = bot_id_symbol_vol75_1s

        const tag5_carousel9 = document.getElementById(`td5_carousel9${bot_count}`);
        const tag6_carousel9 = document.getElementById(`td6_carousel9${bot_count}`);
        const tag8_carousel9 = document.getElementById(`td8_carousel9${bot_count}`);
        const tag9_carousel9 = document.getElementById(`td9_carousel9${bot_count}`);

        if (currentRandom_symbol_vol75_1s !== null && lastNumber1_symbol_vol75_1s !== null && lastNumber2_symbol_vol75_1s !== null) {
            if ((tag5_carousel9 && tag6_carousel9 && tag8_carousel9 && tag9_carousel9) || first_instance_symbol_vol75_1s == true) {
                if (currentRandom_symbol_vol75_1s && (first_instance_symbol_vol75_1s == true || (tag5_carousel9.textContent.trim() !== '' && tag6_carousel9.textContent.trim() !== '' && tag8_carousel9.textContent.trim() !== '' && tag9_carousel9.textContent.trim() !== '')) && (bot_set_carousel9_symbol_vol75_1s == 1 || bot_set_carousel9_cookie_symbol_vol75_1s == 1)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75_1s == 'start_bots') && ((currentvol_carousel9_symbol_vol75_1s == 5 && currentvol2_carousel9_symbol_vol75_1s == 5) || (currentvol_carousel9_cookie_symbol_vol75_1s == 5 && currentvol2_carousel9_cookie_symbol_vol75_1s == 5))) {
                        startBot_symbol_vol75_1s(martingale_active_carousel9_cookie_symbol_vol75_1s, lastNumber10_symbol_vol75_1s, lastNumber9_symbol_vol75_1s, lastNumber8_symbol_vol75_1s, lastNumber7_symbol_vol75_1s, lastNumber6_symbol_vol75_1s, lastNumber5_symbol_vol75_1s, lastNumber4_symbol_vol75_1s, lastNumber3_symbol_vol75_1s, lastNumber2_symbol_vol75_1s, lastNumber1_symbol_vol75_1s, currentRandom_symbol_vol75_1s, strNumber_symbol_vol75_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75_1s !== null && lastNumber1_symbol_vol75_1s !== null && lastNumber2_symbol_vol75_1s !== null) {
            if ((tag5_carousel9 && tag6_carousel9 && tag8_carousel9 && tag9_carousel9) || first_instance_symbol_vol75_1s == true) {
                if (lastNumber1_symbol_vol75_1s == currentRandom_symbol_vol75_1s && (first_instance_symbol_vol75_1s == true || (tag5_carousel9.textContent.trim() !== '' && tag6_carousel9.textContent.trim() !== '' && tag8_carousel9.textContent.trim() !== '' && tag9_carousel9.textContent.trim() !== '')) && (bot_set_carousel9_symbol_vol75_1s == 2 || bot_set_carousel9_cookie_symbol_vol75_1s == 2)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75_1s == 'start_bots') && ((currentvol_carousel9_symbol_vol75_1s == 5 && currentvol2_carousel9_symbol_vol75_1s == 5) || (currentvol_carousel9_cookie_symbol_vol75_1s == 5 && currentvol2_carousel9_cookie_symbol_vol75_1s == 5))) {
                        startBot_symbol_vol75_1s(martingale_active_carousel9_cookie_symbol_vol75_1s, lastNumber10_symbol_vol75_1s, lastNumber9_symbol_vol75_1s, lastNumber8_symbol_vol75_1s, lastNumber7_symbol_vol75_1s, lastNumber6_symbol_vol75_1s, lastNumber5_symbol_vol75_1s, lastNumber4_symbol_vol75_1s, lastNumber3_symbol_vol75_1s, lastNumber2_symbol_vol75_1s, lastNumber1_symbol_vol75_1s, currentRandom_symbol_vol75_1s, strNumber_symbol_vol75_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75_1s !== null && lastNumber1_symbol_vol75_1s !== null && lastNumber2_symbol_vol75_1s !== null) {
            if ((tag5_carousel9 && tag6_carousel9 && tag8_carousel9 && tag9_carousel9) || first_instance_symbol_vol75_1s == true) {
                if (lastNumber2_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber1_symbol_vol75_1s == currentRandom_symbol_vol75_1s && (first_instance_symbol_vol75_1s == true || (tag5_carousel9.textContent.trim() !== '' && tag6_carousel9.textContent.trim() !== '' && tag8_carousel9.textContent.trim() !== '' && tag9_carousel9.textContent.trim() !== '')) && (bot_set_carousel9_symbol_vol75_1s == 3 || bot_set_carousel9_cookie_symbol_vol75_1s == 3)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75_1s == 'start_bots') && ((currentvol_carousel9_symbol_vol75_1s == 5 && currentvol2_carousel9_symbol_vol75_1s == 5) || (currentvol_carousel9_cookie_symbol_vol75_1s == 5 && currentvol2_carousel9_cookie_symbol_vol75_1s == 5))) {
                        startBot_symbol_vol75_1s(martingale_active_carousel9_cookie_symbol_vol75_1s, lastNumber10_symbol_vol75_1s, lastNumber9_symbol_vol75_1s, lastNumber8_symbol_vol75_1s, lastNumber7_symbol_vol75_1s, lastNumber6_symbol_vol75_1s, lastNumber5_symbol_vol75_1s, lastNumber4_symbol_vol75_1s, lastNumber3_symbol_vol75_1s, lastNumber2_symbol_vol75_1s, lastNumber1_symbol_vol75_1s, currentRandom_symbol_vol75_1s, strNumber_symbol_vol75_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75_1s !== null && lastNumber1_symbol_vol75_1s !== null && lastNumber2_symbol_vol75_1s !== null) {
            if ((tag5_carousel9 && tag6_carousel9 && tag8_carousel9 && tag9_carousel9) || first_instance_symbol_vol75_1s == true) {
                if (lastNumber3_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber2_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber1_symbol_vol75_1s == currentRandom_symbol_vol75_1s && (first_instance_symbol_vol75_1s == true || (tag5_carousel9.textContent.trim() !== '' && tag6_carousel9.textContent.trim() !== '' && tag8_carousel9.textContent.trim() !== '' && tag9_carousel9.textContent.trim() !== '')) && (bot_set_carousel9_symbol_vol75_1s == 4 || bot_set_carousel9_cookie_symbol_vol75_1s == 4)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75_1s == 'start_bots') && ((currentvol_carousel9_symbol_vol75_1s == 5 && currentvol2_carousel9_symbol_vol75_1s == 5) || (currentvol_carousel9_cookie_symbol_vol75_1s == 5 && currentvol2_carousel9_cookie_symbol_vol75_1s == 5))) {
                        startBot_symbol_vol75_1s(martingale_active_carousel9_cookie_symbol_vol75_1s, lastNumber10_symbol_vol75_1s, lastNumber9_symbol_vol75_1s, lastNumber8_symbol_vol75_1s, lastNumber7_symbol_vol75_1s, lastNumber6_symbol_vol75_1s, lastNumber5_symbol_vol75_1s, lastNumber4_symbol_vol75_1s, lastNumber3_symbol_vol75_1s, lastNumber2_symbol_vol75_1s, lastNumber1_symbol_vol75_1s, currentRandom_symbol_vol75_1s, strNumber_symbol_vol75_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75_1s !== null && lastNumber1_symbol_vol75_1s !== null && lastNumber2_symbol_vol75_1s !== null) {
            if ((tag5_carousel9 && tag6_carousel9 && tag8_carousel9 && tag9_carousel9) || first_instance_symbol_vol75_1s == true) {
                if (lastNumber4_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber3_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber2_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber1_symbol_vol75_1s == currentRandom_symbol_vol75_1s && (first_instance_symbol_vol75_1s == true || (tag5_carousel9.textContent.trim() !== '' && tag6_carousel9.textContent.trim() !== '' && tag8_carousel9.textContent.trim() !== '' && tag9_carousel9.textContent.trim() !== '')) && (bot_set_carousel9_symbol_vol75_1s == 5 || bot_set_carousel9_cookie_symbol_vol75_1s == 5)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75_1s == 'start_bots') && ((currentvol_carousel9_symbol_vol75_1s == 5 && currentvol2_carousel9_symbol_vol75_1s == 5) || (currentvol_carousel9_cookie_symbol_vol75_1s == 5 && currentvol2_carousel9_cookie_symbol_vol75_1s == 5))) {
                        startBot_symbol_vol75_1s(martingale_active_carousel9_cookie_symbol_vol75_1s, lastNumber10_symbol_vol75_1s, lastNumber9_symbol_vol75_1s, lastNumber8_symbol_vol75_1s, lastNumber7_symbol_vol75_1s, lastNumber6_symbol_vol75_1s, lastNumber5_symbol_vol75_1s, lastNumber4_symbol_vol75_1s, lastNumber3_symbol_vol75_1s, lastNumber2_symbol_vol75_1s, lastNumber1_symbol_vol75_1s, currentRandom_symbol_vol75_1s, strNumber_symbol_vol75_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75_1s !== null && lastNumber1_symbol_vol75_1s !== null && lastNumber2_symbol_vol75_1s !== null) {
            if ((tag5_carousel9 && tag6_carousel9 && tag8_carousel9 && tag9_carousel9) || first_instance_symbol_vol75_1s == true) {
                if (lastNumber5_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber4_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber3_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber2_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber1_symbol_vol75_1s == currentRandom_symbol_vol75_1s && (first_instance_symbol_vol75_1s == true || (tag5_carousel9.textContent.trim() !== '' && tag6_carousel9.textContent.trim() !== '' && tag8_carousel9.textContent.trim() !== '' && tag9_carousel9.textContent.trim() !== '')) && (bot_set_carousel9_symbol_vol75_1s == 6 || bot_set_carousel9_cookie_symbol_vol75_1s == 6)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75_1s == 'start_bots') && ((currentvol_carousel9_symbol_vol75_1s == 5 && currentvol2_carousel9_symbol_vol75_1s == 5) || (currentvol_carousel9_cookie_symbol_vol75_1s == 5 && currentvol2_carousel9_cookie_symbol_vol75_1s == 5))) {
                        startBot_symbol_vol75_1s(martingale_active_carousel9_cookie_symbol_vol75_1s, lastNumber10_symbol_vol75_1s, lastNumber9_symbol_vol75_1s, lastNumber8_symbol_vol75_1s, lastNumber7_symbol_vol75_1s, lastNumber6_symbol_vol75_1s, lastNumber5_symbol_vol75_1s, lastNumber4_symbol_vol75_1s, lastNumber3_symbol_vol75_1s, lastNumber2_symbol_vol75_1s, lastNumber1_symbol_vol75_1s, currentRandom_symbol_vol75_1s, strNumber_symbol_vol75_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        
        if (currentRandom_symbol_vol75_1s !== null && lastNumber1_symbol_vol75_1s !== null && lastNumber2_symbol_vol75_1s !== null) {
            if ((tag5_carousel9 && tag6_carousel9 && tag8_carousel9 && tag9_carousel9) || first_instance_symbol_vol75_1s == true) {
                if (lastNumber6_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber5_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber4_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber3_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber2_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber1_symbol_vol75_1s == currentRandom_symbol_vol75_1s && (first_instance_symbol_vol75_1s == true || (tag5_carousel9.textContent.trim() !== '' && tag6_carousel9.textContent.trim() !== '' && tag8_carousel9.textContent.trim() !== '' && tag9_carousel9.textContent.trim() !== '')) && (bot_set_carousel9_symbol_vol75_1s == 7 || bot_set_carousel9_cookie_symbol_vol75_1s == 7)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75_1s == 'start_bots') && ((currentvol_carousel9_symbol_vol75_1s == 5 && currentvol2_carousel9_symbol_vol75_1s == 5) || (currentvol_carousel9_cookie_symbol_vol75_1s == 5 && currentvol2_carousel9_cookie_symbol_vol75_1s == 5))) {
                        startBot_symbol_vol75_1s(martingale_active_carousel9_cookie_symbol_vol75_1s, lastNumber10_symbol_vol75_1s, lastNumber9_symbol_vol75_1s, lastNumber8_symbol_vol75_1s, lastNumber7_symbol_vol75_1s, lastNumber6_symbol_vol75_1s, lastNumber5_symbol_vol75_1s, lastNumber4_symbol_vol75_1s, lastNumber3_symbol_vol75_1s, lastNumber2_symbol_vol75_1s, lastNumber1_symbol_vol75_1s, currentRandom_symbol_vol75_1s, strNumber_symbol_vol75_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75_1s !== null && lastNumber1_symbol_vol75_1s !== null && lastNumber2_symbol_vol75_1s !== null) {
            if ((tag5_carousel9 && tag6_carousel9 && tag8_carousel9 && tag9_carousel9) || first_instance_symbol_vol75_1s == true) {
                if (lastNumber7_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber6_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber5_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber4_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber3_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber2_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber1_symbol_vol75_1s == currentRandom_symbol_vol75_1s && (first_instance_symbol_vol75_1s == true || (tag5_carousel9.textContent.trim() !== '' && tag6_carousel9.textContent.trim() !== '' && tag8_carousel9.textContent.trim() !== '' && tag9_carousel9.textContent.trim() !== '')) && (bot_set_carousel9_symbol_vol75_1s == 8 || bot_set_carousel9_cookie_symbol_vol75_1s == 8)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75_1s == 'start_bots') && ((currentvol_carousel9_symbol_vol75_1s == 5 && currentvol2_carousel9_symbol_vol75_1s == 5) || (currentvol_carousel9_cookie_symbol_vol75_1s == 5 && currentvol2_carousel9_cookie_symbol_vol75_1s == 5))) {
                        startBot_symbol_vol75_1s(martingale_active_carousel9_cookie_symbol_vol75_1s, lastNumber10_symbol_vol75_1s, lastNumber9_symbol_vol75_1s, lastNumber8_symbol_vol75_1s, lastNumber7_symbol_vol75_1s, lastNumber6_symbol_vol75_1s, lastNumber5_symbol_vol75_1s, lastNumber4_symbol_vol75_1s, lastNumber3_symbol_vol75_1s, lastNumber2_symbol_vol75_1s, lastNumber1_symbol_vol75_1s, currentRandom_symbol_vol75_1s, strNumber_symbol_vol75_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75_1s !== null && lastNumber1_symbol_vol75_1s !== null && lastNumber2_symbol_vol75_1s !== null) {
            if ((tag5_carousel9 && tag6_carousel9 && tag8_carousel9 && tag9_carousel9) || first_instance_symbol_vol75_1s == true) {
                if (lastNumber8_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber7_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber6_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber5_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber4_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber3_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber2_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber1_symbol_vol75_1s == currentRandom_symbol_vol75_1s && (first_instance_symbol_vol75_1s == true || (tag5_carousel9.textContent.trim() !== '' && tag6_carousel9.textContent.trim() !== '' && tag8_carousel9.textContent.trim() !== '' && tag9_carousel9.textContent.trim() !== '')) && (bot_set_carousel9_symbol_vol75_1s == 9 || bot_set_carousel9_cookie_symbol_vol75_1s == 9)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75_1s == 'start_bots') && ((currentvol_carousel9_symbol_vol75_1s == 5 && currentvol2_carousel9_symbol_vol75_1s == 5) || (currentvol_carousel9_cookie_symbol_vol75_1s == 5 && currentvol2_carousel9_cookie_symbol_vol75_1s == 5))) {
                        startBot_symbol_vol75_1s(martingale_active_carousel9_cookie_symbol_vol75_1s, lastNumber10_symbol_vol75_1s, lastNumber9_symbol_vol75_1s, lastNumber8_symbol_vol75_1s, lastNumber7_symbol_vol75_1s, lastNumber6_symbol_vol75_1s, lastNumber5_symbol_vol75_1s, lastNumber4_symbol_vol75_1s, lastNumber3_symbol_vol75_1s, lastNumber2_symbol_vol75_1s, lastNumber1_symbol_vol75_1s, currentRandom_symbol_vol75_1s, strNumber_symbol_vol75_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol75_1s !== null && lastNumber1_symbol_vol75_1s !== null && lastNumber2_symbol_vol75_1s !== null) {
            if ((tag5_carousel9 && tag6_carousel9 && tag8_carousel9 && tag9_carousel9) || first_instance_symbol_vol75_1s == true) {
                if (lastNumber9_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber8_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber7_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber6_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber5_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber4_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber3_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber2_symbol_vol75_1s == currentRandom_symbol_vol75_1s && lastNumber1_symbol_vol75_1s == currentRandom_symbol_vol75_1s && (first_instance_symbol_vol75_1s == true || (tag5_carousel9.textContent.trim() !== '' && tag6_carousel9.textContent.trim() !== '' && tag8_carousel9.textContent.trim() !== '' && tag9_carousel9.textContent.trim() !== '')) && (bot_set_carousel9_symbol_vol75_1s == 10 || bot_set_carousel9_cookie_symbol_vol75_1s == 10)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol75_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol75_1s == 'start_bots') && ((currentvol_carousel9_symbol_vol75_1s == 5 && currentvol2_carousel9_symbol_vol75_1s == 5) || (currentvol_carousel9_cookie_symbol_vol75_1s == 5 && currentvol2_carousel9_cookie_symbol_vol75_1s == 5))) {
                        startBot_symbol_vol75_1s(martingale_active_carousel9_cookie_symbol_vol75_1s, lastNumber10_symbol_vol75_1s, lastNumber9_symbol_vol75_1s, lastNumber8_symbol_vol75_1s, lastNumber7_symbol_vol75_1s, lastNumber6_symbol_vol75_1s, lastNumber5_symbol_vol75_1s, lastNumber4_symbol_vol75_1s, lastNumber3_symbol_vol75_1s, lastNumber2_symbol_vol75_1s, lastNumber1_symbol_vol75_1s, currentRandom_symbol_vol75_1s, strNumber_symbol_vol75_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }
    }
};

window.addEventListener('load', function () {
    duration_amount_cookie_symbol_vol75_1s = getCookie('duration_amount_cookie');
    stake_amount_cookie_symbol_vol75_1s = getCookie('stake_amount_cookie');
    duration_unit_cookie_symbol_vol75_1s = getCookie('duration_unit_cookie');
    symbol_vol_cookie_symbol_vol75_1s = getCookie('symbol_vol_cookie');
    currency_cookie_symbol_vol75_1s = getCookie('ActiveCurrency')
    contract_text_cookie_symbol_vol75_1s = getCookie('contract_text_cookie');
    stake_or_payout_cookie_symbol_vol75_1s = getCookie('stake_or_payout_cookie')
    last_digit_prediction_cookie_symbol_vol75_1s = getCookie('last_digit_prediction_cookie')
    stake_amount_default_symbol_vol75_1s = getCookie('stake_amount_default')

    if (last_digit_prediction_cookie_symbol_vol75_1s) {
        last_digit_prediction_or_barrier_symbol_vol75_1s = last_digit_prediction_or_barrier_symbol_vol75_1s
    } else {
        let numericValue = last_digit_input_symbol_vol75_1s.value
        last_digit_prediction_or_barrier_symbol_vol75_1s = numericValue
    }
    if (symbol_vol_cookie_symbol_vol75_1s) {
        symbol_vol_symbol_vol75_1s = symbol_vol_cookie_symbol_vol75_1s;
    } else {
        symbol_vol_symbol_vol75_1s = "1HZ75V";
    }
    if (duration_unit_cookie_symbol_vol75_1s) {
        duration_unit_symbol_vol75_1s = duration_unit_cookie_symbol_vol75_1s;
    } else {
        duration_unit_symbol_vol75_1s = "t";
    }
    if (duration_amount_cookie_symbol_vol75_1s) {
        duration_amount_symbol_vol75_1s = parseInt(duration_amount_cookie_symbol_vol75_1s, 10);
    } else {
        duration_amount_symbol_vol75_1s = 1;
    }
    if (stake_amount_cookie_symbol_vol75_1s) {
        stake_amount_symbol_vol75_1s = parseFloat(stake_amount_cookie_symbol_vol75_1s);
    } else {
        stake_amount_symbol_vol75_1s = 10;
    }
    if (stake_amount_default_symbol_vol75_1s) {
        stake_amount_default_symbol_vol75_1s = parseFloat(stake_amount_default_symbol_vol75_1s);
    } else {
        stake_amount_default_symbol_vol75_1s = 10;
    }
    if (currency_cookie_symbol_vol75_1s) {
        currency_symbol_vol75_1s = currency_cookie_symbol_vol75_1s;
    } else {
        currency_symbol_vol75_1s = "USD";
    }
    if (contract_text_cookie_symbol_vol75_1s) {
        contract_symbol_vol75_1s = contract_text_cookie_symbol_vol75_1s;
    } else {
        contract_symbol_vol75_1s = "Matches/Differs";
    }
    if (stake_or_payout_cookie_symbol_vol75_1s) {
        stake_or_payout_symbol_vol75_1s = stake_or_payout_cookie_symbol_vol75_1s;
    } else {
        stake_or_payout_symbol_vol75_1s = "stake";
    }

    initializeApi(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response_symbol_General) {
            clearInterval(getAwaitingResponses)
        } else {
            
        }
    }, 2000);
});

async function order_propose_symbol_vol75_1s(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
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
                // let tooltip = document.getElementById('tooltiptext25');
                // tooltip.textContent = data.error.message;
                // tooltip.classList.add('tooltiptext10')
                
                connection.removeEventListener('message', proposalResponse, false);
                await api.disconnect();
                reject(new Error('Error in proposal'));
            } else if (data.msg_type === 'proposal') {

                proposal_id_symbol_vol75_1s = data.proposal.id;

                // let calc = displayProposalResult2(data, data.proposal.display_value, data.proposal.payout);

                // def_price_up_symbol_vol75_1s = data.proposal.display_value;
                // def_payout_up_symbol_vol75_1s = data.proposal.payout;
                // def_profit_up_symbol_vol75_1s = calc.NetProfit;
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

const unsubscribeProposal_symbol_vol75_1s = () => {
    connection.removeEventListener('message', proposalResponse_symbol_vol75_1s, false);
};

function convertTimestampTo12HourTime_symbol_vol75_1s(timestamp) {
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

function formatNumberAndBoldLastDecimal_symbol_vol75_1s(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart) {
        let lastDecimalDigit = decimalPart.slice(-1);
        decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
    } 
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}

let contract_status_html_symbol_vol75_1s = document.getElementById('contract_status_carousel9') 
let end_tic_off_trade_symbol_vol75_1s = document.getElementById('end_tic_off_trade_carousel9')            
let price_after_trade_figure_amount_symbol_vol75_1s = document.getElementById('price_after_trade_figure_amount_carousel9') 
let profit_figure_amount_symbol_vol75_1s = document.getElementById('profit_figure_amount_carousel9') 
let buy_price_figure_amount_symbol_vol75_1s = document.getElementById('buy_price_figure_amount_carousel9') 
let result_currency_html_symbol_vol75_1s = document.querySelectorAll('.result_currency')
let transaction_refrence_figure_symbol_vol75_1s = document.getElementById('transaction_refrence_figure_carousel9') 
let trade_start_time_symbol_vol75_1s = document.getElementById('trade_start_time_carousel9') 
let buy_price_text_symbol_vol75_1s = document.getElementById('buy_price_text_carousel9') 
let price_after_trade_text_symbol_vol75_1s = document.getElementById('price_after_trade_text_carousel9') 
let profit_text_symbol_vol75_1s = document.getElementById('profit_text_carousel9') 
let durr_amount_prop_count_symbol_vol75_1s = document.getElementById('durr_amount_prop_count_carousel9') 
let durr_amount_prop_symbol_vol75_1s = document.getElementById('durr_amount_prop_carousel9') 
let countdown_trade_symbol_vol75_1s = 0
let countdown_trade2_symbol_vol75_1s = 0

function before_trade_symbol_vol75_1s() {
    countdown_trade_symbol_vol75_1s = 0
    let allDigits = document.querySelectorAll('.ldgs_carousel9')
    let buy_price_text = document.getElementById('buy_price_text_carousel9')
    let price_after_trade_text = document.getElementById('price_after_trade_text_carousel9')
    let profit_text = document.getElementById('profit_text_carousel9')
    let durr_amount_prop_count = document.getElementById('durr_amount_prop_count_carousel9')
    let slide_trade_result = document.getElementById('slide_trade_result_carousel9')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel9')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel9')
    let profit_figure_amount = document.getElementById('profit_figure_amount_carousel9')
    contract_status_html_symbol_vol75_1s.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count.textContent = countdown_trade_symbol_vol75_1s
    durr_amount_prop.textContent = duration_amount_symbol_vol75_1s
    buy_price_figure_amount.textContent = def_price_up_symbol_vol75_1s
    price_after_trade_figure_amount.textContent = def_payout_up_symbol_vol75_1s
    profit_figure_amount.textContent = def_profit_up_symbol_vol75_1s

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
            if (digit.textContent != (last_digit_prediction_or_barrier_symbol_vol75_1s)) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound == 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier_symbol_vol75_1s) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}

function after_trade_symbol_vol75_1s(status, endDigit) {
    let slide_trade_result = document.getElementById('slide_trade_result_carousel9')
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

function formate_date_symbol_vol75_1s(datein) {
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

let allProposalOpenContract_symbol_vol75_1s = []
let longcodeProp_symbol_vol75_1s = null
let contract_ids_buy_symbol_vol75_1s = null
let contract_status_symbol_vol75_1s = null
let last_tick_symbol_vol75_1s = null
let profit_or_loss_symbol_vol75_1s = null
let final_price_symbol_vol75_1s = null
let payout_result_symbol_vol75_1s = null
let buy_price_symbol_vol75_1s = null
let contract_currency_symbol_vol75_1s = null
let time_of_trade_symbol_vol75_1s = null
let every_tick_symbol_vol75_1s = null
let contract_id_symbol_vol75_1s = null

let allProposalOpenContract2_symbol_vol75_1s = []
let longcodeProp2_symbol_vol75_1s = null
let contract_ids_buy2_symbol_vol75_1s = null
let contract_ids_sell2_symbol_vol75_1s = null
let contract_status2_symbol_vol75_1s = null
let last_tick2_symbol_vol75_1s = null
let profit_or_loss2_symbol_vol75_1s = null
let final_price2_symbol_vol75_1s = null
let payout_result2_symbol_vol75_1s = null
let buy_price2_symbol_vol75_1s = null
let contract_currency2_symbol_vol75_1s = null
let time_of_trade2_symbol_vol75_1s = null
let every_tick2_symbol_vol75_1s = null

function open_proposal_actions2_symbol_vol75_1s(data) {
    if (data.proposal_open_contract.contract_id == contract_id2_symbol_vol75_1s) {
        set_middle_trade1_symbol_vol75_1s(bot_is_running_or_stopped_symbol_vol75_1s)
        bot_buy_start_time_symbol_vol75_1s = formate_date_symbol_vol75_1s(data.proposal_open_contract.date_start)
        bot_buy_transaction_id_symbol_vol75_1s = data.proposal_open_contract.transaction_ids.buy
        bot_trade_type_symbol_vol75_1s = data.proposal_open_contract.contract_type
        bot_buy_price_symbol_vol75_1s = data.proposal_open_contract.buy_price
        bot_status_symbol_vol75_1s = data.proposal_open_contract.status == 'open' ? 'Pending' : data.proposal_open_contract.status
        bot_contract_id_symbol_vol75_1s = data.proposal_open_contract.contract_id
        start_trade_ref_symbol_vol75_1s(bot_buy_price_symbol_vol75_1s)

        if (firstContractReceived_symbol_vol75_1s == false) {
            append_result_symbol_vol75_1s(bot_id_symbol_vol75_1s, bot_buy_start_time_symbol_vol75_1s, bot_buy_transaction_id_symbol_vol75_1s, bot_trade_type_symbol_vol75_1s, bot_buy_price_symbol_vol75_1s, bot_status_symbol_vol75_1s);
            firstContractReceived_symbol_vol75_1s = true
        }

        longcodeProp2_symbol_vol75_1s = data.proposal_open_contract.longcode
        allProposalOpenContract2_symbol_vol75_1s.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information_carousel9').textContent = longcodeProp2_symbol_vol75_1s

        if (allProposalOpenContract2_symbol_vol75_1s.length > 0 && allProposalOpenContract2_symbol_vol75_1s[allProposalOpenContract2_symbol_vol75_1s.length - 1].length > 0) {
            let lastSubArray2 = allProposalOpenContract2_symbol_vol75_1s[allProposalOpenContract2_symbol_vol75_1s.length - 1];
            let lastElementOfLastSubArray2 = lastSubArray2[lastSubArray2.length - 1].tick_display_value;
            let numberString2 = lastElementOfLastSubArray2.toString();
            let lastCharacter2 = numberString2[numberString2.length - 1];
            handleNewNumber_symbol_vol75_1s(lastCharacter2);
            every_tick2_symbol_vol75_1s = lastElementOfLastSubArray2
            end_tic_off_trade_symbol_vol75_1s.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol75_1s(every_tick2_symbol_vol75_1s);
            if (countdown_trade2_symbol_vol75_1s < duration_amount_symbol_vol75_1s) {
                countdown_trade2_symbol_vol75_1s += 1
                durr_amount_prop_count_symbol_vol75_1s.textContent = countdown_trade_symbol_vol75_1s
            }
            if (data.proposal_open_contract.is_expired == 1 && end_slide_symbol_vol75_1s == true) {
                set_end_trade1_symbol_vol75_1s(bot_is_running_or_stopped_symbol_vol75_1s)
                end_slide_symbol_vol75_1s = false
            }
            contract_ids_buy2_symbol_vol75_1s = data.proposal_open_contract.transaction_ids.buy
            if (contract_ids_buy2_symbol_vol75_1s) {
                middle_trade_ref_symbol_vol75_1s(contract_ids_buy2_symbol_vol75_1s)
            }
            if (data.proposal_open_contract.status !== 'open') {
                let circle2_carousel9 = document.getElementById('circle2_carousel9')
                circle2_carousel9.classList.remove('circle_shadow_carousel9')
                bot_status_symbol_vol75_1s = data.proposal_open_contract.status
                bot_entry_spot_symbol_vol75_1s = data.proposal_open_contract.entry_tick
                bot_exit_spot_symbol_vol75_1s = data.proposal_open_contract.exit_tick
                bot_profit_loss_symbol_vol75_1s = data.proposal_open_contract.profit
                contract_status2_symbol_vol75_1s = data.proposal_open_contract.status
                last_tick2_symbol_vol75_1s = lastElementOfLastSubArray2
                profit_or_loss2_symbol_vol75_1s = data.proposal_open_contract.profit
                payout_result2_symbol_vol75_1s = data.proposal_open_contract.payout
                buy_price2_symbol_vol75_1s = data.proposal_open_contract.buy_price
                contract_currency2_symbol_vol75_1s = data.proposal_open_contract.currency
                contract_ids_buy2_symbol_vol75_1s = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2_symbol_vol75_1s = data.proposal_open_contract.expiry_time
                contract_ids_sell2_symbol_vol75_1s = data.proposal_open_contract.transaction_ids.sell

                end_trade_ref_symbol_vol75_1s(contract_ids_sell2_symbol_vol75_1s)
                if (profit_or_loss2_symbol_vol75_1s < 0) {
                    final_price2_symbol_vol75_1s = '0.00'
                } else if (profit_or_loss2_symbol_vol75_1s > 0) {
                    final_price2_symbol_vol75_1s = payout_result2_symbol_vol75_1s
                } else {
                    
                }
                if (contract_status2_symbol_vol75_1s == 'won' && !wonEncountered_symbol_vol75_1s) {
                    bot_total_wins_symbol_vol75_1s = bot_total_wins_symbol_vol75_1s + 1;
                    bot_total_profit_loss_symbol_vol75_1s = bot_total_profit_loss_symbol_vol75_1s + profit_or_loss2_symbol_vol75_1s;
                    bot_total_stake_symbol_vol75_1s = bot_total_stake_symbol_vol75_1s + buy_price2_symbol_vol75_1s
                    bot_total_runs_symbol_vol75_1s = bot_total_runs_symbol_vol75_1s + 1;
                    bot_total_payout_symbol_vol75_1s = bot_total_payout_symbol_vol75_1s + payout_result2_symbol_vol75_1s;
                    add_after_trade_symbol_vol75_1s(bot_id_symbol_vol75_1s, contract_id2_symbol_vol75_1s, bot_contract_id_symbol_vol75_1s, bot_entry_spot_symbol_vol75_1s, bot_exit_spot_symbol_vol75_1s, bot_profit_loss_symbol_vol75_1s, bot_status_symbol_vol75_1s, bot_total_runs_symbol_vol75_1s, bot_total_stake_symbol_vol75_1s, bot_total_payout_symbol_vol75_1s, bot_total_wins_symbol_vol75_1s, bot_total_loss_symbol_vol75_1s, bot_total_profit_loss_symbol_vol75_1s);
                    wonEncountered_symbol_vol75_1s = true;
                } else if (contract_status2_symbol_vol75_1s == 'lost') {
                    bot_total_loss_symbol_vol75_1s = bot_total_loss_symbol_vol75_1s + 1;
                    bot_total_profit_loss_symbol_vol75_1s = bot_total_profit_loss_symbol_vol75_1s + profit_or_loss2_symbol_vol75_1s;
                    bot_total_stake_symbol_vol75_1s = bot_total_stake_symbol_vol75_1s + buy_price2_symbol_vol75_1s
                    bot_total_runs_symbol_vol75_1s = bot_total_runs_symbol_vol75_1s + 1;
                    bot_total_payout_symbol_vol75_1s = bot_total_payout_symbol_vol75_1s - payout_result2_symbol_vol75_1s;
                    add_after_trade_symbol_vol75_1s(bot_id_symbol_vol75_1s, contract_id2_symbol_vol75_1s, bot_contract_id_symbol_vol75_1s, bot_entry_spot_symbol_vol75_1s, bot_exit_spot_symbol_vol75_1s, bot_profit_loss_symbol_vol75_1s, bot_status_symbol_vol75_1s, bot_total_runs_symbol_vol75_1s, bot_total_stake_symbol_vol75_1s, bot_total_payout_symbol_vol75_1s, bot_total_wins_symbol_vol75_1s, bot_total_loss_symbol_vol75_1s, bot_total_profit_loss_symbol_vol75_1s);
                    wonEncountered_symbol_vol75_1s = true;
                }
                if (contract_status2_symbol_vol75_1s == 'won' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol75_1s = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol75_1s = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol75_1s = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol75_1s = every_tick2_symbol_vol75_1s
                    bot_log_end_symbol_vol75_1s(log_buy_timestamp_bot_symbol_vol75_1s, log_sell_timestamp_bot_symbol_vol75_1s, log_message_entry_tick_symbol_vol75_1s, log_message_last_digit_symbol_vol75_1s)
                } else if (contract_status2_symbol_vol75_1s == 'lost' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol75_1s = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol75_1s = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol75_1s = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol75_1s = every_tick2_symbol_vol75_1s
                    bot_log_end_symbol_vol75_1s(log_buy_timestamp_bot_symbol_vol75_1s, log_sell_timestamp_bot_symbol_vol75_1s, log_message_entry_tick_symbol_vol75_1s, log_message_last_digit_symbol_vol75_1s)
                }
                contract_status_html_symbol_vol75_1s.textContent = contract_status2_symbol_vol75_1s
                end_tic_off_trade_symbol_vol75_1s.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol75_1s(last_tick2_symbol_vol75_1s);
                profit_figure_amount_symbol_vol75_1s.textContent = profit_or_loss2_symbol_vol75_1s
                price_after_trade_figure_amount_symbol_vol75_1s.textContent = final_price2_symbol_vol75_1s
                buy_price_figure_amount_symbol_vol75_1s.textContent = buy_price2_symbol_vol75_1s
                result_currency_html_symbol_vol75_1s.textContent = contract_currency2_symbol_vol75_1s
                transaction_refrence_figure_symbol_vol75_1s.textContent = contract_ids_buy2_symbol_vol75_1s
                trade_start_time_symbol_vol75_1s.innerHTML = convertTimestampTo12HourTime_symbol_vol75_1s(time_of_trade2_symbol_vol75_1s)
                buy_price_text_symbol_vol75_1s.textContent = 'Buy price'
                price_after_trade_text_symbol_vol75_1s.textContent = 'Final price'
                profit_text_symbol_vol75_1s.textContent = 'Profit'
                after_trade_symbol_vol75_1s(contract_status2_symbol_vol75_1s, lastCharacter2)
            } else {
            }
        } else {
            
        }
    }
}

let currentPosition1_symbol_vol75_1s = 0;
function moveSlider_symbol_vol75_1s(number) {
    const slider = document.getElementById('slide_trade_result_carousel9');
    const container = document.getElementById('last_digit_responds_carousel9');
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

    const target = document.querySelector(`.last_digits_carousel9.${stringnumber}`);
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
        currentPosition1_symbol_vol75_1s = newPosition;
    }
}

function handleNewNumber_symbol_vol75_1s(randomNumber) {
    const newPosition = randomNumber;
    moveSlider_symbol_vol75_1s(newPosition);
}

let log_close_and_info_cont_symbol_vol75_1s = document.getElementById('log_close_and_info_cont_carousel9');
let bot_log_show_cont_symbol_vol75_1s = document.getElementById('bot_log_show_cont_carousel9');
let bot_details_symbol_vol75_1s = document.getElementById('bot_details_carousel9');
let bot_details2_symbol_vol75_1s = document.getElementById('bot_details2_carousel9');

if (bot_log_show_cont_symbol_vol75_1s && bot_details_symbol_vol75_1s) {
    bot_details_symbol_vol75_1s.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol75_1s.style.display == 'none') {
            bot_log_show_cont_symbol_vol75_1s.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol75_1s.style.display = 'none'
        }
    });

    log_close_and_info_cont_symbol_vol75_1s.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_log_show_cont_symbol_vol75_1s.style.display == 'block') {
            bot_log_show_cont_symbol_vol75_1s.style.display = 'none'
        } else {
            bot_log_show_cont_symbol_vol75_1s.style.display = 'block'
        }
    });
} else {
    console.error('One or more elements are not found');
}

if (bot_log_show_cont_symbol_vol75_1s && bot_details_symbol_vol75_1s) {
    bot_details2_symbol_vol75_1s.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol75_1s.style.display == 'none') {
            bot_log_show_cont_symbol_vol75_1s.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol75_1s.style.display = 'none'
        }
    });
} else {
    console.error('One or more elements are not found');
}

let martingale_symbol_vol75_1s = document.getElementById('martingale_carousel9');
let flash_info_cont_symbol_vol75_1s = document.getElementById('flash_info_cont_carousel9');
let tick_check_amount_symbol_vol75_1s = document.getElementById('tick_check_amount_carousel9');
let settings_cont_symbol_vol75_1s = document.getElementById('settings_cont_carousel9');
let tick_check_symbol_vol75_1s = document.getElementById('tick_check_carousel9');
let martingale_jump_symbol_vol75_1s = document.getElementById('martingale_jump_carousel9');
let increase_jump_symbol_vol75_1s = document.getElementById('increase_jump_carousel9');
let reduce_jump_symbol_vol75_1s = document.getElementById('reduce_jump_carousel9');
let bot_settings_symbol_vol75_1s = document.getElementById('bot_settings_carousel9');
let bot_settings2_symbol_vol75_1s = document.getElementById('bot_settings2_carousel9');
const volumes2_symbol_vol75_1s = document.querySelectorAll(".slide_vol2_carousel9");
let tick_check2_symbol_vol75_1s = document.getElementById('tick_check2_carousel9');
let martingale2_symbol_vol75_1s = document.getElementById('martingale2_carousel9');
let martingale_jump2_symbol_vol75_1s = document.getElementById('martingale_jump2_carousel9');
let martingale_jump_set_symbol_vol75_1s = document.getElementById('martingale_jump_set_carousel9');
const last_digit_settings_symbol_vol75_1s = document.querySelectorAll(".last_digit_settings_carousel9");

martingale_symbol_vol75_1s.addEventListener('click', function () {
    if (martingale_symbol_vol75_1s.classList.contains('active_mat')) {
        martingale_symbol_vol75_1s.classList.remove('active_mat');
        martingale2_symbol_vol75_1s.classList.remove('active_mat');
        setCookie('martingale_carousel9', 'false')
        localStorage.setItem('martingale_carousel9', 'false')
        flash_info_cont_symbol_vol75_1s.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol75_1s.style.color = '#fff'
    } else {
        martingale_symbol_vol75_1s.classList.add('active_mat');
        martingale2_symbol_vol75_1s.classList.add('active_mat');
        setCookie('martingale_carousel9', 'true')
        localStorage.setItem('martingale_carousel9', 'true')
        flash_info_cont_symbol_vol75_1s.textContent = 'martigale is active'
        tick_check_amount_symbol_vol75_1s.style.color = '#fff'
    }
    if (flash_info_cont_symbol_vol75_1s.classList.contains('show_flash_info_carousel9')) {
        flash_info_cont_symbol_vol75_1s.classList.remove('show_flash_info_carousel9')
        setTimeout(() => {
            flash_info_cont_symbol_vol75_1s.classList.remove('show_flash_info_carousel9')
        }, 5000)
    } else {
        flash_info_cont_symbol_vol75_1s.classList.add('show_flash_info_carousel9')
        setTimeout(() => {
            flash_info_cont_symbol_vol75_1s.classList.remove('show_flash_info_carousel9')
        }, 5000)
    }
});

function bot_set_default_symbol_vol75_1s() {
    let curr_bot_set = localStorage.getItem('bot_set_carousel9');
    if (curr_bot_set === null) {
        setTimeout(bot_set_default_symbol_vol75_1s, 100);
        return;
    }
    tick_check_symbol_vol75_1s.textContent = curr_bot_set;
    tick_check2_symbol_vol75_1s.textContent = curr_bot_set;
}

bot_set_default_symbol_vol75_1s();

bot_settings_symbol_vol75_1s.addEventListener('click', function () {
    if (settings_cont_symbol_vol75_1s.style.display == 'none') {
        settings_cont_symbol_vol75_1s.style.display = 'block'
    } else {
        settings_cont_symbol_vol75_1s.style.display = 'none'
    }
});

document.addEventListener('click', (event) => {
    if (!bot_settings_symbol_vol75_1s.contains(event.target) && !settings_cont_symbol_vol75_1s.contains(event.target) && !martingale_jump_set_symbol_vol75_1s.contains(event.target)) {
        settings_cont_symbol_vol75_1s.style.display = 'none';
    }
});

last_digit_settings_symbol_vol75_1s.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.querySelector('.bot_text_carousel9').textContent.trim().replace(/\s+/g, ' ');
        if (bot_set == 'Last one digit bot') {
            localStorage.setItem('bot_set_carousel9', '1')
            setCookie('bot_set_carousel9', '1')
            localStorage.setItem('bot_set_store_carousel9', '1')
            setCookie('bot_set_store_carousel9', '1')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            localStorage.setItem('bot_set_carousel9', '2')
            setCookie('bot_set_carousel9', '2')
            localStorage.setItem('bot_set_store_carousel9', '2')
            setCookie('bot_set_store_carousel9', '2')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            localStorage.setItem('bot_set_carousel9', '3')
            setCookie('bot_set_carousel9', '3')
            localStorage.setItem('bot_set_store_carousel9', '3')
            setCookie('bot_set_store_carousel9', '3')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            localStorage.setItem('bot_set_carousel9', '4')
            setCookie('bot_set_carousel9', '4')
            localStorage.setItem('bot_set_store_carousel9', '4')
            setCookie('bot_set_store_carousel9', '4')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            localStorage.setItem('bot_set_carousel9', '5')
            setCookie('bot_set_carousel9', '5')
            localStorage.setItem('bot_set_store_carousel9', '5')
            setCookie('bot_set_store_carousel9', '5')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            localStorage.setItem('bot_set_carousel9', '6')
            setCookie('bot_set_carousel9', '6')
            localStorage.setItem('bot_set_store_carousel9', '6')
            setCookie('bot_set_store_carousel9', '6')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            localStorage.setItem('bot_set_carousel9', '7')
            setCookie('bot_set_carousel9', '7')
            localStorage.setItem('bot_set_store_carousel9', '7')
            setCookie('bot_set_store_carousel9', '7')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            localStorage.setItem('bot_set_carousel9', '8')
            setCookie('bot_set_carousel9', '8')
            localStorage.setItem('bot_set_store_carousel9', '8')
            setCookie('bot_set_store_carousel9', '8')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            localStorage.setItem('bot_set_carousel9', '9')
            setCookie('bot_set_carousel9', '9')
            localStorage.setItem('bot_set_store_carousel9', '9')
            setCookie('bot_set_store_carousel9', '9')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            localStorage.setItem('bot_set_carousel9', '10')
            setCookie('bot_set_carousel9', '10')
            localStorage.setItem('bot_set_store_carousel9', '10')
            setCookie('bot_set_store_carousel9', '10')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol75_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});


let jump_count_symbol_vol75_1s = 0

function jump_count_set_symbol_vol75_1s() {
    localStorage.setItem('bot_jump_carousel9', jump_count_symbol_vol75_1s)
    setCookie('bot_jump_carousel9', jump_count_symbol_vol75_1s)
}

function jump_count_set2_symbol_vol75_1s() {
    let stored_jump_count = localStorage.getItem('bot_jump_carousel9') ? localStorage.getItem('bot_jump_carousel9') : getCookie('bot_jump_carousel9');
    jump_count_symbol_vol75_1s = stored_jump_count !== null ? parseInt(stored_jump_count, 10) : 0;

    if (isNaN(jump_count_symbol_vol75_1s)) {
        jump_count_symbol_vol75_1s = 0;
    }
    if (jump_count_symbol_vol75_1s > 0) {
        martingale_jump_symbol_vol75_1s.textContent = 'j' + jump_count_symbol_vol75_1s
        martingale_jump2_symbol_vol75_1s.textContent = 'j' + jump_count_symbol_vol75_1s
    } else {
        martingale_jump_symbol_vol75_1s.textContent = ''
        martingale_jump2_symbol_vol75_1s.textContent = ''
    }
}

jump_count_set2_symbol_vol75_1s()

increase_jump_symbol_vol75_1s.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count_symbol_vol75_1s = jump_count_symbol_vol75_1s + 1
    jump_count_set_symbol_vol75_1s()
    jump_count_set2_symbol_vol75_1s()
})

reduce_jump_symbol_vol75_1s.addEventListener('click', (event) => {
    event.preventDefault()
    if (jump_count_symbol_vol75_1s > 0) {
        jump_count_symbol_vol75_1s = jump_count_symbol_vol75_1s - 1
        jump_count_set_symbol_vol75_1s()
        jump_count_set2_symbol_vol75_1s()
    }
})

bot_settings2_symbol_vol75_1s.addEventListener('click', function () {
    if (settings_cont_symbol_vol75_1s.style.display == 'none') {
        settings_cont_symbol_vol75_1s.style.display = 'block'
    } else {
        settings_cont_symbol_vol75_1s.style.display = 'none'
    }
});

martingale2_symbol_vol75_1s.addEventListener('click', function () {
    if (martingale2_symbol_vol75_1s.classList.contains('active_mat')) {
        martingale2_symbol_vol75_1s.classList.remove('active_mat');
        martingale_symbol_vol75_1s.classList.remove('active_mat');
        setCookie('martingale_carousel9', 'false')
        localStorage.setItem('martingale_carousel9', 'false')
        flash_info_cont_symbol_vol75_1s.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol75_1s.style.color = '#fff'
    } else {
        martingale2_symbol_vol75_1s.classList.add('active_mat');
        martingale_symbol_vol75_1s.classList.add('active_mat');
        setCookie('martingale_carousel9', 'true')
        localStorage.setItem('martingale_carousel9', 'true')
        flash_info_cont_symbol_vol75_1s.textContent = 'martigale is active'
        tick_check_amount_symbol_vol75_1s.style.color = '#fff'
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






















































































































let last_digit_input_symbol_vol100 = document.getElementById('last_digit_input')
let close_contract_result_container_symbol_vol100 = document.getElementById('close_contract_result_container_carousel5')
let buy_sell_two_symbol_vol100 = document.getElementById('buy_sell_two')
let trade_type_secound_symbol_vol100 = document.getElementById("trade_type_secound")
let attempting_buy2_carousel5_symbol_vol100 = document.getElementById("attempting_buy2_carousel5")
let buy_succeded2_carousel5_symbol_vol100 = document.getElementById("buy_succeded2_carousel5")
let contract_close2_carousel5_symbol_vol100 = document.getElementById("contract_close2_carousel5")
let stream100_carousel5_symbol_vol100 = document.getElementById('stream100_carousel5')

let last_digit_prediction_local_st_symbol_vol100 = null
let barrier_local_st_symbol_vol100 = null
let symbol_vol_text_local_st_symbol_vol100 = null
let contract_text_local_st_symbol_vol100 = null
let duration_amount_local_st_symbol_vol100 = null
let stake_amount_local_st_symbol_vol100 = null
let symbol_vol_local_st_symbol_vol100 = null
let duration_unit_local_st_symbol_vol100 = null
let last_digit_prediction_or_barrier_local_st_symbol_vol100 = null
let currency_local_st_symbol_vol100 = null
let stake_or_payout_local_st_symbol_vol100 = null
let proposal_id_local_st_symbol_vol100 = null
let last_digit_prediction_cookie_symbol_vol100 = null
let barrier_cookie_symbol_vol100 = null
let symbol_vol_text_cookie_symbol_vol100 = null
let contract_text_cookie_symbol_vol100 = null
let duration_amount_cookie_symbol_vol100 = null
let stake_amount_cookie_symbol_vol100 = null
let symbol_vol_cookie_symbol_vol100 = null
let duration_unit_cookie_symbol_vol100 = null
let last_digit_prediction_or_barrier_cookie_symbol_vol100 = null
let currency_cookie_symbol_vol100 = null
let stake_or_payout_cookie_symbol_vol100 = null
let proposal_id_cookie_symbol_vol100 = null
let stake_amount_default_symbol_vol100 = localStorage.getItem('stake_amount_default') || document.getElementById('stake_amount_input').value
let duration_unit_symbol_vol100 = null
let symbol_vol_symbol_vol100 = null
let duration_amount_symbol_vol100 = null
let stake_amount_symbol_vol100 = null
let last_digit_prediction_or_barrier_symbol_vol100 = null
let currency_symbol_vol100 = null
let contract_symbol_vol100 = null
let stake_or_payout_symbol_vol100 = null
let proposal_id_symbol_vol100 = null
let td2_account_id_carousel5_symbol_vol100 = document.getElementById('td2_account_id_carousel5')
let td2_no_of_runs_carousel5_symbol_vol100 = document.getElementById('td2_no_of_runs_carousel5')
let td2_total_stake_carousel5_symbol_vol100 = document.getElementById('td2_total_stake_carousel5')
let td2_total_payout_carousel5_symbol_vol100 = document.getElementById('td2_total_payout_carousel5')
let td2_total_wins_carousel5_symbol_vol100 = document.getElementById('td2_total_wins_carousel5')
let td2_total_loss_carousel5_symbol_vol100 = document.getElementById('td2_total_loss_carousel5')
let td2_total_profit_loss_carousel5_symbol_vol100 = document.getElementById('td2_total_profit_loss_carousel5')
let bot_total_runs_symbol_vol100 = 0
let bot_total_stake_symbol_vol100 = 0
let bot_total_payout_symbol_vol100 = 0
let bot_total_wins_symbol_vol100 = 0
let bot_total_loss_symbol_vol100 = 0
let bot_total_profit_loss_symbol_vol100 = 0
let randomNumber_symbol_vol100 = null;
let strNumber_symbol_vol100 = null;
let authorize_response_symbol_vol100 = null
let subscriptionId_symbol_vol100 = null
let randomNumber2_symbol_vol100 = null
let buy_contract_id_symbol_vol100 = null
let api_id_symbol_vol100 = null;
let api_token_symbol_vol100 = null;
let def_price_up_symbol_vol100 = null
let def_payout_up_symbol_vol100 = null
let def_profit_up_symbol_vol100 = null
let website_status_info_symbol_vol100 = 'initial'
let symbol100_symbol_vol100 = null
let symbol100_cookie_symbol_vol100 = null
let subscription_to_open_contract_symbol_vol100 = true

document.addEventListener('DOMContentLoaded', function () {
    setCookie('symbol100', 'R_100')
    localStorage.setItem('symbol100', 'R_100')

    symbol100_symbol_vol100 = localStorage.getItem('symbol100')
    symbol100_cookie_symbol_vol100 = getCookie('symbol100')

});

let bot_id_symbol_vol100 = 0
let bot_buy_start_time_symbol_vol100 = null
let bot_buy_transaction_id_symbol_vol100 = null
let bot_trade_type_symbol_vol100 = null
let bot_buy_price_symbol_vol100 = null
let bot_entry_spot_symbol_vol100 = null
let bot_exit_spot_symbol_vol100 = null
let bot_profit_loss_symbol_vol100 = null
let bot_status_symbol_vol100 = null
let firstContractReceived_symbol_vol100 = false;
let bot_is_running_or_stopped_symbol_vol100 = false
let end_slide_symbol_vol100 = true
let bot_contract_id_symbol_vol100 = null
let bot_unique_code_symbol_vol100 = null

async function add_after_trade_symbol_vol100(bot_id, botuniqueCode, allContracts, entry_spot, exit_spot, profit_loss, status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss) {
    const tbody1_carousel5 = document.getElementById('tbody1_carousel5');

    if (botuniqueCode == allContracts) {
        let row_carousel5 = document.getElementById(`bot_carousel5${bot_id}`);
        if (!row_carousel5) {
            console.error(`Row with data-unique-code "bot_carousel5${bot_id}" not found.`);
            return;
        }

        const entry_spot_html_carousel5 = document.getElementById(`td5_carousel5${bot_id}`);
        const exit_spot_html_carousel5 = document.getElementById(`td6_carousel5${bot_id}`);
        const profit_loss_html_carousel5 = document.getElementById(`td8_carousel5${bot_id}`);
        const status_html_carousel5 = document.getElementById(`td9_carousel5${bot_id}`);

        if (entry_spot_html_carousel5) {
            entry_spot_html_carousel5.textContent = entry_spot
        } else {
            
        }
        if (exit_spot_html_carousel5) {
            exit_spot_html_carousel5.textContent = exit_spot
        } else {
            
        }
        if (profit_loss_html_carousel5) {
            profit_loss_html_carousel5.textContent = profit_loss
            let profitLossNumber = parseFloat(profit_loss);
            if (profitLossNumber < 0) {
                profit_loss_html_carousel5.style.color = 'red';
            } else {
                profit_loss_html_carousel5.style.color = 'green';
            }
        } else {
            
        }
        if (status_html_carousel5) {
            status_html_carousel5.textContent = status
            if (status == 'won') {
                status_html_carousel5.style.color = 'green'
            } else {
                status_html_carousel5.style.color = 'red'
            }
        } else {
            
        }
        td2_no_of_runs_carousel5_symbol_vol100.textContent = bot_total_runs_symbol_vol100
        td2_total_stake_carousel5_symbol_vol100.textContent = bot_total_stake_symbol_vol100
        td2_total_payout_carousel5_symbol_vol100.textContent = Number(bot_total_payout_symbol_vol100.toFixed(2));
        td2_total_wins_carousel5_symbol_vol100.textContent = bot_total_wins_symbol_vol100
        td2_total_wins_carousel5_symbol_vol100.style.color = 'green'
        td2_total_loss_carousel5_symbol_vol100.textContent = bot_total_loss_symbol_vol100
        td2_total_loss_carousel5_symbol_vol100.style.color = 'red'
        td2_total_profit_loss_carousel5_symbol_vol100.textContent = Number(bot_total_profit_loss_symbol_vol100.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss_symbol_vol100.toFixed(2))) < 0) {
            td2_total_profit_loss_carousel5_symbol_vol100.style.color = 'red'
        } else {
            td2_total_profit_loss_carousel5_symbol_vol100.style.color = 'green'
        }
    }

}

const progressBar1_carousel5_symbol_vol100 = document.querySelector('.progress1_carousel5');
function fillProgressBar1_symbol_vol100() {
    progressBar1_carousel5_symbol_vol100.classList.add('prog1_carousel5')
}

const progressBar2_carousel5_symbol_vol100 = document.querySelector('.progress2_carousel5');
function fillProgressBar2_symbol_vol100() {
    progressBar2_carousel5_symbol_vol100.classList.add('prog2_carousel5')
}

function set_start_trade1_symbol_vol100(bot_is_running_or_stopped) {
    let bot_state_carousel5 = document.getElementById('bot_state_carousel5')
    let circle1_carousel5 = document.getElementById('circle1_carousel5')
    let circle2_carousel5 = document.getElementById('circle2_carousel5')
    let circle3_carousel5 = document.getElementById('circle3_carousel5')

    if (circle1_carousel5.classList.contains("buy_signal_carousel5")) {
        circle1_carousel5.classList.remove('buy_signal_carousel5')
    }
    if (circle2_carousel5.classList.contains('circle_shadow_carousel5')) {
        circle2_carousel5.classList.remove('circle_shadow_carousel5')
    }
    if (circle2_carousel5.classList.contains('add_color_carousel5')) {
        circle2_carousel5.classList.remove('add_color_carousel5')
    }
    if (circle3_carousel5.classList.contains('add_color_carousel5')) {
        circle3_carousel5.classList.remove('add_color_carousel5')
    }
    if (progressBar1_carousel5_symbol_vol100.classList.contains("prog1_carousel5")) {
        progressBar1_carousel5_symbol_vol100.classList.remove('prog1_carousel5')
    }
    if (progressBar2_carousel5_symbol_vol100.classList.contains("prog2_carousel5")) {
        progressBar2_carousel5_symbol_vol100.classList.remove('prog2_carousel5')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel5.textContent = 'Bot is running'
        circle1_carousel5.classList.add('buy_signal_carousel5')
        setTimeout(fillProgressBar1_symbol_vol100, 1000);
    } else {
        bot_state_carousel5.textContent = 'Bot has stopped'
        circle1_carousel5.classList.remove('buy_signal_carousel5')
    }

}

function start_trade_ref_symbol_vol100(buy_price_ref) {
    if (attempting_buy2_carousel5_symbol_vol100.classList.contains("attempting_buy2_show_carousel5")) {
        attempting_buy2_carousel5_symbol_vol100.classList.remove("attempting_buy2_show_carousel5")
    }
    if (buy_succeded2_carousel5_symbol_vol100.classList.contains("buy_succeded2_show_carousel5")) {
        buy_succeded2_carousel5_symbol_vol100.classList.remove("buy_succeded2_show_carousel5")
    }
    if (contract_close2_carousel5_symbol_vol100.classList.contains("contract_close2_show_carousel5")) {
        contract_close2_carousel5_symbol_vol100.classList.remove("contract_close2_show_carousel5")
    }
    attempting_buy2_carousel5_symbol_vol100.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2_carousel5_symbol_vol100.classList.add('attempting_buy2_show_carousel5')
}


function set_middle_trade1_symbol_vol100(bot_is_running_or_stopped) {
    let bot_state_carousel5 = document.getElementById('bot_state_carousel5')
    let circle1_carousel5 = document.getElementById('circle1_carousel5')
    let circle2_carousel5 = document.getElementById('circle2_carousel5')
    circle1_carousel5.classList.remove('buy_signal_carousel5')
    circle1_carousel5.classList.add('add_color_carousel5')

    function timmimg_shadow() {
        circle2_carousel5.classList.add('circle_shadow_carousel5')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel5.textContent = 'Bot is running'
        circle2_carousel5.classList.add('add_color_carousel5')
        setTimeout(timmimg_shadow, 1500);
    } else {
        bot_state_carousel5.textContent = 'Bot has stopped'
        circle2_carousel5.classList.remove('circle_shadow_carousel5_carousel5')
        circle2_carousel5.classList.remove('add-color_carousel5')
    }
}

function middle_trade_ref_symbol_vol100(buy_ref) {
    buy_succeded2_carousel5_symbol_vol100.textContent = `ID: ${buy_ref}`
    buy_succeded2_carousel5_symbol_vol100.classList.add('buy_succeded2_show_carousel5')
}

function set_end_trade1_symbol_vol100(bot_is_running_or_stopped) {
    let bot_state_carousel5 = document.getElementById('bot_state_carousel5')
    let circle2_carousel5 = document.getElementById('circle2_carousel5')
    let circle3_carousel5 = document.getElementById('circle3_carousel5')

    function timmimg_color() {
        circle3_carousel5.classList.add('add_color_carousel5')
    }
    if (circle2_carousel5.classList.contains('circle_shadow_carousel5')) {
        circle2_carousel5.classList.remove('circle_shadow_carousel5')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel5.textContent = 'Bot is running'
        setTimeout(fillProgressBar2_symbol_vol100, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state_carousel5.textContent = 'Bot has stopped'
        circle3_carousel5.classList.remove('add_color_carousel5')
    }
}
function end_trade_ref_symbol_vol100(sell_ref) {
    contract_close2_carousel5_symbol_vol100.textContent = `ID: ${sell_ref}`
    contract_close2_carousel5_symbol_vol100.classList.add('contract_close2_show_carousel5')
}

let proposal_open_contract2_symbol_vol100 = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})

const proposalOpenContractResponse2_symbol_vol100 = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol100, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {
        
        open_proposal_actions2_symbol_vol100(data)
    }
};

const getProposalOpenContract12_symbol_vol100 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol100);
    proposal_open_contract2_symbol_vol100()
};

const getProposalOpenContract22_symbol_vol100 = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol100);
};

const unsubscribeProposalOpenContract2_symbol_vol100 = () => {
    connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol100, false);
};

function run_open_contract_proposal2_symbol_vol100() {
    if (subscription_to_open_contract_symbol_vol100 == true) {
        getProposalOpenContract12_symbol_vol100()
    } else {
        getProposalOpenContract22_symbol_vol100()
    }
    subscription_to_open_contract_symbol_vol100 = false
}

function generateUniqueCode_symbol_vol100(buy) {
    return buy.buy.contract_id;
}

let martingale_store_symbol_vol100 = [1.1, 11.1, 123.4, 1371.1, 15593.5]
let martingale_count_symbol_vol100 = 0
let initial_stake_symbol_vol100 = true
let contract_id2_symbol_vol100 = null
let wonEncountered_symbol_vol100 = false;

async function buy_bot_symbol_vol100(martingale, current_number) {
    const slider = document.getElementById('slide_trade_result_carousel5').style.display = 'flex';

    last_digit_prediction_or_barrier_symbol_vol100 = parseInt(current_number);
    let contract_text_local_st = localStorage.getItem('contract_text_local_st')
    let contract_text_cookie = getCookie('contract_text_cookie')

    if (martingale == 'true' && contract_status2_symbol_vol100 == 'lost') {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol100 += 1
            stake_amount_symbol_vol100 = martingale_store_symbol_vol100[martingale_count_symbol_vol100]
        } else {
            stake_amount_symbol_vol100 = stake_amount_symbol_vol100 * 10.1
        }
    } else if (initial_stake_symbol_vol100 = true || (martingale == 'true' && contract_status2_symbol_vol100 == 'won')) {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol100 = 0
            stake_amount_symbol_vol100 = martingale_store_symbol_vol100[martingale_count_symbol_vol100]
        } else {
            stake_amount_symbol_vol100 = stake_amount_default_symbol_vol100
        }
    } else {
        stake_amount_symbol_vol100 = stake_amount_default_symbol_vol100
    }


    wonEncountered_symbol_vol100 = false
    before_trade_symbol_vol100();
    allProposalOpenContract2_symbol_vol100.length = 0;
    unsubscribeProposalOpenContract2_symbol_vol100()

    try {
        await order_propose_symbol_vol100(api, stake_amount_symbol_vol100, last_digit_prediction_or_barrier_symbol_vol100, stake_or_payout_symbol_vol100, contract_symbol_vol100, currency_symbol_vol100, duration_amount_symbol_vol100, duration_unit_symbol_vol100, symbol100_symbol_vol100);

        let buy = await api.buy({
            "buy": String(proposal_id_symbol_vol100),
            "price": parseFloat(stake_amount_symbol_vol100)
        });

        contract_id2_symbol_vol100 = generateUniqueCode_symbol_vol100(buy)

        run_open_contract_proposal2_symbol_vol100()
        initial_stake_symbol_vol100 = false

    } catch (error) {
        console.error('Error during trade:', error);
    }
}

async function append_result_symbol_vol100(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status) {

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

    const tbody_carousel5 = document.getElementById('tbody1_carousel5');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel5 = document.createElement('tr');
            row_carousel5.id = `bot_carousel5${item.id}`;

            const td1_carousel5 = document.createElement('td');
            td1_carousel5.textContent = item.id;
            td1_carousel5.id = `td1_carousel5${item.id}`;
            row_carousel5.appendChild(td1_carousel5);

            const td2_carousel5 = document.createElement('td');
            td2_carousel5.textContent = item.timestamp;
            td2_carousel5.id = `td2_carousel5${item.id}`;
            row_carousel5.appendChild(td2_carousel5);

            const td3_carousel5 = document.createElement('td');
            td3_carousel5.textContent = item.reference;
            td3_carousel5.id = `td3_carousel5${item.id}`;
            row_carousel5.appendChild(td3_carousel5);

            const td4_carousel5 = document.createElement('td');
            td4_carousel5.textContent = item.tradeType;
            td4_carousel5.id = `td4_carousel5${item.id}`;
            row_carousel5.appendChild(td4_carousel5);

            const td5_carousel5 = document.createElement('td');
            td5_carousel5.textContent = item.entrySpot;
            td5_carousel5.id = `td5_carousel5${item.id}`;
            row_carousel5.appendChild(td5_carousel5);

            const td6_carousel5 = document.createElement('td');
            td6_carousel5.textContent = item.exitSpot;
            td6_carousel5.id = `td6_carousel5${item.id}`;
            row_carousel5.appendChild(td6_carousel5);

            const td7_carousel5 = document.createElement('td');
            td7_carousel5.textContent = item.buyPrice;
            td7_carousel5.id = `td7_carousel5${item.id}`;
            row_carousel5.appendChild(td7_carousel5);

            const td8_carousel5 = document.createElement('td');
            td8_carousel5.textContent = item.profitLoss;
            td8_carousel5.id = `td8_carousel5${item.id}`;
            row_carousel5.appendChild(td8_carousel5);

            const td9_carousel5 = document.createElement('td');
            td9_carousel5.textContent = item.status;
            td9_carousel5.id = `td9_carousel5${item.id}`;
            row_carousel5.appendChild(td9_carousel5);

            if (tbody_carousel5.firstChild) {
                tbody_carousel5.insertBefore(row_carousel5, tbody_carousel5.firstChild);
            } else {
                tbody_carousel5.appendChild(row_carousel5);
            }
        });
    }
    appendRows(backendData)
}

let log_timestamp_current_symbol_vol100 = null
let log_buy_timestamp_bot_symbol_vol100 = null
let log_sell_timestamp_bot_symbol_vol100 = null
let log_message10_symbol_vol100 = null
let log_message9_symbol_vol100 = null
let log_message8_symbol_vol100 = null
let log_message7_symbol_vol100 = null
let log_message6_symbol_vol100 = null
let log_message5_symbol_vol100 = null
let log_message4_symbol_vol100 = null
let log_message3_symbol_vol100 = null
let log_message2_symbol_vol100 = null
let log_message1_symbol_vol100 = null
let log_message_curr_symbol_vol100 = null
let log_message_curr_tick_symbol_vol100 = null
let log_message_last_digit_symbol_vol100 = null
let log_message_entry_tick_symbol_vol100 = null
let appended_symbol_vol100 = true
let log_id_symbol_vol100 = 0

function format_log_current_time_symbol_vol100() {
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

async function bot_log_symbol_vol100(last_ten_tick, last_nine_tick, last_eight_tick, last_seven_tick, last_six_tick, last_five_tick, last_four_tick, last_three_tick, last_two_tick, last_one_tick, current_tick, current_tick_full) {

    const backendData = [
        {
            log_message10_symbol_vol100: last_ten_tick,
            log_message9_symbol_vol100: last_nine_tick,
            log_message8_symbol_vol100: last_eight_tick,
            log_message7_symbol_vol100: last_seven_tick,
            log_message6_symbol_vol100: last_six_tick,
            log_message5_symbol_vol100: last_five_tick,
            log_message4_symbol_vol100: last_four_tick,
            log_message3_symbol_vol100: last_three_tick,
            log_message2_symbol_vol100: last_two_tick,
            log_message1_symbol_vol100: last_one_tick,
            log_message_curr_symbol_vol100: current_tick,
            log_message_curr_tick_symbol_vol100: current_tick_full,
        },
    ];

    const log_tbody_carousel5 = document.getElementById('log_tbody1_carousel5');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel5 = document.createElement('tr');
            row_carousel5.id = `log_bot_carousel5${log_id_symbol_vol100}`;

            const td1_carousel5 = document.createElement('td');
            td1_carousel5.textContent = log_timestamp_current_symbol_vol100;
            td1_carousel5.id = `log_td1_carousel5${log_id_symbol_vol100}`;
            td1_carousel5.classList.add('lod_td1_carousel5')
            row_carousel5.appendChild(td1_carousel5);

            const td2_carousel5 = document.createElement('td');

            if (log_message10_symbol_vol100 == null) {
                log_message10_symbol_vol100 = ''
            }
            if (log_message9_symbol_vol100 == null) {
                log_message9_symbol_vol100 = ''
            }
            if (log_message8_symbol_vol100 == null) {
                log_message8_symbol_vol100 = ''
            }
            if (log_message7_symbol_vol100 == null) {
                log_message7_symbol_vol100 = ''
            }
            if (log_message6_symbol_vol100 == null) {
                log_message6_symbol_vol100 = ''
            }
            if (log_message5_symbol_vol100 == null) {
                log_message5_symbol_vol100 = ''
            }

            if (log_message4_symbol_vol100 == null) {
                log_message4_symbol_vol100 = ''
            }

            if (log_message3_symbol_vol100 == null) {
                log_message3_symbol_vol100 = ''
            }

            if (log_message2_symbol_vol100 == null) {
                log_message2_symbol_vol100 = ''
            }

            if (log_message1_symbol_vol100 == null) {
                log_message1_symbol_vol100 = ''
            }

            if (log_message_curr_symbol_vol100 == null) {
                log_message_curr_symbol_vol100 = ''
            }

            td2_carousel5.textContent = `last ten ticks:  ${item.log_message10_symbol_vol100} ${item.log_message9_symbol_vol100} ${item.log_message8_symbol_vol100} ${item.log_message7_symbol_vol100} ${item.log_message6_symbol_vol100} ${item.log_message5_symbol_vol100} ${item.log_message4_symbol_vol100} ${item.log_message3_symbol_vol100} ${item.log_message2_symbol_vol100} ${item.log_message1_symbol_vol100}          current tick ${item.log_message_curr_symbol_vol100}    ${item.log_message_curr_tick_symbol_vol100}`;

            td2_carousel5.style.whiteSpace = 'pre'
            td2_carousel5.id = `log_td2_carousel5${log_id_symbol_vol100}`;
            td2_carousel5.classList.add('lod_td2_carousel5')
            row_carousel5.appendChild(td2_carousel5);

            const td3_carousel5 = document.createElement('td');
            td3_carousel5.textContent = 'this is the text'
            td3_carousel5.style.whiteSpace = 'pre'
            td3_carousel5.id = `log_td3_carousel5${log_id_symbol_vol100}`;
            td3_carousel5.classList.add('lod_td3_carousel5')
            row_carousel5.appendChild(td3_carousel5);

            if (log_tbody_carousel5.firstChild) {
                log_tbody_carousel5.insertBefore(row_carousel5, log_tbody_carousel5.firstChild);
                appended_symbol_vol100 = true
            } else {
                log_tbody_carousel5.appendChild(row_carousel5);
                appended_symbol_vol100 = true
            }
        });
    }
    appendRows(backendData)
}

async function bot_log_end_symbol_vol100(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td_carousel5 = document.getElementById(`log_td3_carousel5${log_id_symbol_vol100}`)

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

    log_buy_timestamp_bot_symbol_vol100 = formate_log_date(bot_buy_time_stamp)
    log_sell_timestamp_bot_symbol_vol100 = formate_log_date(bot_sell_time_stamp)

    if (target_td_carousel5) {
        target_td_carousel5.textContent = `buy_time:  ${log_buy_timestamp_bot_symbol_vol100}        sell_time:  ${log_sell_timestamp_bot_symbol_vol100}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

        log_id_symbol_vol100 += 1
    } else {
        
    }
}

let first_instance_symbol_vol100 = true

async function startBot_symbol_vol100(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber) {
    bot_is_running_or_stopped_symbol_vol100 = true;
    log_timestamp_current_symbol_vol100 = format_log_current_time_symbol_vol100()
    set_start_trade1_symbol_vol100(bot_is_running_or_stopped_symbol_vol100);
    bot_id_symbol_vol100 += 1;
    firstContractReceived_symbol_vol100 = false;
    end_slide_symbol_vol100 = true;
    bot_entry_spot_symbol_vol100 = '';
    bot_exit_spot_symbol_vol100 = '';
    bot_profit_loss_symbol_vol100 = '';
    bot_status_symbol_vol100 = 'pending';
    bot_log_symbol_vol100(lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
    await buy_bot_symbol_vol100(martingale, currentRandom);
    first_instance_symbol_vol100 = false
}

let bot_state_carousel5_symbol_vol100 = "stop_bot"
let all_bot_start_stop1_symbol_vol100 = null
let all_bot_start_stop1_cookie_symbol_vol100 = null
let buttonContainer_carousel5_symbol_vol100 = document.querySelector('.click_change_carousel5');

function togglePlayPause_symbol_vol100() {
    var play_button_carousel5 = document.getElementById('play_button_carousel5');
    var pause_button_carousel5 = document.getElementById('pause_button_carousel5');
    if (play_button_carousel5) {
        bot_state_carousel5_symbol_vol100 = "stop_bot"
        play_button_carousel5.parentNode.removeChild(play_button_carousel5);

        var pause_button_carousel5 = document.createElement('div');
        pause_button_carousel5.id = 'pause_button_carousel5';
        pause_button_carousel5.className = 'pause_button_carousel5';
        pause_button_carousel5.innerHTML = '&#10074;&#10074;';
        buttonContainer_carousel5_symbol_vol100.appendChild(pause_button_carousel5);
        document.getElementById('bot_state_carousel5').textContent = 'Bot has stopped';
    } else if (pause_button_carousel5) {
        bot_state_carousel5_symbol_vol100 = "start_bot"
        pause_button_carousel5.parentNode.removeChild(pause_button_carousel5);

        var play_button_carousel5 = document.createElement('div');
        play_button_carousel5.id = 'play_button_carousel5';
        play_button_carousel5.className = 'play_button_carousel5';
        play_button_carousel5.innerHTML = '&#9654;';
        buttonContainer_carousel5_symbol_vol100.appendChild(play_button_carousel5);
        document.getElementById('bot_state_carousel5').textContent = 'Bot is running';
    }
}
buttonContainer_carousel5_symbol_vol100.addEventListener('click', togglePlayPause_symbol_vol100);
function getRandom_symbol_vol100(strNumber) {
    return randomNumber_symbol_vol100 = strNumber.charAt(strNumber.length - 1);
}

let currentvol_carousel5_symbol_vol100 = null
let currentvol2_carousel5_symbol_vol100 = null
let martingale_active_carousel5_symbol_vol100 = null
let bot_set_carousel5_symbol_vol100 = null
let set_bot_jump_carousel5_symbol_vol100 = null
let initial_set_jump_symbol_vol100 = true
let currentvol_carousel5_cookie_symbol_vol100 = null
let currentvol2_carousel5_cookie_symbol_vol100 = null
let martingale_active_carousel5_cookie_symbol_vol100 = null
let bot_set_carousel5_cookie_symbol_vol100 = null
let set_bot_jump_carousel5_cookie_symbol_vol100 = null
let initial_set_jump_cookie_symbol_vol100 = true
let currentRandom_symbol_vol100 = null
let lastNumber1_symbol_vol100 = currentRandom_symbol_vol100;
let lastNumber2_symbol_vol100 = lastNumber1_symbol_vol100;
let lastNumber3_symbol_vol100 = lastNumber2_symbol_vol100;
let lastNumber4_symbol_vol100 = lastNumber3_symbol_vol100;
let lastNumber5_symbol_vol100 = lastNumber4_symbol_vol100;
let lastNumber6_symbol_vol100 = lastNumber5_symbol_vol100;
let lastNumber7_symbol_vol100 = lastNumber6_symbol_vol100;
let lastNumber8_symbol_vol100 = lastNumber7_symbol_vol100;
let lastNumber9_symbol_vol100 = lastNumber8_symbol_vol100;
let lastNumber10_symbol_vol100 = lastNumber9_symbol_vol100;

const tickResponse_symbol_vol100 = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', tickResponse_symbol_vol100, false);
        await api.disconnect();
    }

    function getRandom1(strNumber1) {
        return randomNumber_symbol_vol100 = strNumber1.charAt(strNumber1.length - 1);
    }

    lastNumber10_symbol_vol100 = lastNumber9_symbol_vol100
    lastNumber9_symbol_vol100 = lastNumber8_symbol_vol100
    lastNumber8_symbol_vol100 = lastNumber7_symbol_vol100
    lastNumber7_symbol_vol100 = lastNumber6_symbol_vol100
    lastNumber6_symbol_vol100 = lastNumber5_symbol_vol100
    lastNumber5_symbol_vol100 = lastNumber4_symbol_vol100
    lastNumber4_symbol_vol100 = lastNumber3_symbol_vol100
    lastNumber3_symbol_vol100 = lastNumber2_symbol_vol100
    lastNumber2_symbol_vol100 = lastNumber1_symbol_vol100
    lastNumber1_symbol_vol100 = currentRandom_symbol_vol100

    if (data.msg_type === 'tick') {
        let bot_start_stop = bot_state_carousel5_symbol_vol100

        subscriptionId_symbol_vol100 = data.subscription.id;
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

        if(data.echo_req.ticks === "R_100"){
            strNumber_symbol_vol100 = formatToTwoDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_vol100 = getRandom1(strNumber_symbol_vol100);
        }

        stream100_carousel5_symbol_vol100.textContent = strNumber_symbol_vol100
        all_bot_start_stop1_symbol_vol100 = localStorage.getItem('all_bot_start_stop1')
        all_bot_start_stop1_cookie_symbol_vol100 = getCookie('all_bot_start_stop1')
        currentvol_carousel5_symbol_vol100 = localStorage.getItem('bot_current_vol1_carousel5');
        currentvol2_carousel5_symbol_vol100 = localStorage.getItem('bot_current_vol2_carousel5');
        martingale_active_carousel5_symbol_vol100 = localStorage.getItem('martingale_carousel5');
        bot_set_carousel5_symbol_vol100 = localStorage.getItem('bot_set_carousel5');
        set_bot_jump_carousel5_symbol_vol100 = localStorage.getItem('bot_jump_carousel5')
        currentvol_carousel5_cookie_symbol_vol100 = getCookie('bot_current_vol1_carousel5');
        currentvol2_carousel5_cookie_symbol_vol100 = getCookie('bot_current_vol2_carousel5');
        martingale_active_carousel5_cookie_symbol_vol100 = getCookie('martingale_carousel5');
        bot_set_carousel5_cookie_symbol_vol100 = getCookie('bot_set_carousel5');
        set_bot_jump_carousel5_cookie_symbol_vol100 = getCookie('bot_jump_carousel5')

        if (((set_bot_jump_carousel5_symbol_vol100 && set_bot_jump_carousel5_symbol_vol100 > 0) && contract_status2_symbol_vol100 == 'lost') || ((set_bot_jump_carousel5_cookie_symbol_vol100 && set_bot_jump_carousel5_cookie_symbol_vol100 > 0) && contract_status2_symbol_vol100 == 'lost')) {
            bot_set_carousel5_symbol_vol100 = (parseInt(bot_set_carousel5_symbol_vol100) + parseInt(set_bot_jump_carousel5_symbol_vol100)) !== null ? (parseInt(bot_set_carousel5_symbol_vol100) + parseInt(set_bot_jump_carousel5_symbol_vol100)) : (parseInt(bot_set_carousel5_cookie_symbol_vol100) + parseInt(set_bot_jump_carousel5_cookie_symbol_vol100))
            contract_status2_symbol_vol100 == 'reset'
        } else if ((initial_set_jump_symbol_vol100 == true || (contract_status2_symbol_vol100 == 'won' && (set_bot_jump_carousel5_symbol_vol100 && set_bot_jump_carousel5_symbol_vol100 > 0))) || (initial_set_jump_cookie_symbol_vol100 == true || (contract_status2_symbol_vol100 == 'won' && (set_bot_jump_carousel5_cookie_symbol_vol100 && set_bot_jump_carousel5_cookie_symbol_vol100 > 0)))) {
            bot_set_carousel5_symbol_vol100 = localStorage.getItem('bot_set_carousel5') ? localStorage.getItem('bot_set_carousel5') : getCookie('bot_set_carousel5');
            initial_set_jump_symbol_vol100 = false
            initial_set_jump_cookie_symbol_vol100 = false
        } else {
            bot_set_carousel5_symbol_vol100 = localStorage.getItem('bot_set_carousel5') ? localStorage.getItem('bot_set_carousel5') : getCookie("bot_set_carousel5");
        }
        let bot_count = bot_id_symbol_vol100

        const tag5_carousel5 = document.getElementById(`td5_carousel5${bot_count}`);
        const tag6_carousel5 = document.getElementById(`td6_carousel5${bot_count}`);
        const tag8_carousel5 = document.getElementById(`td8_carousel5${bot_count}`);
        const tag9_carousel5 = document.getElementById(`td9_carousel5${bot_count}`);

        if (currentRandom_symbol_vol100 !== null && lastNumber1_symbol_vol100 !== null && lastNumber2_symbol_vol100 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance_symbol_vol100 == true) {
                if (currentRandom_symbol_vol100 && (first_instance_symbol_vol100 == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5_symbol_vol100 == 1 || bot_set_carousel5_cookie_symbol_vol100 == 1)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100 == 'start_bots') && ((currentvol_carousel5_symbol_vol100 == 5 && currentvol2_carousel5_symbol_vol100 == 5) || (currentvol_carousel5_cookie_symbol_vol100 == 5 && currentvol2_carousel5_cookie_symbol_vol100 == 5))) {
                        startBot_symbol_vol100(martingale_active_carousel5_cookie_symbol_vol100, lastNumber10_symbol_vol100, lastNumber9_symbol_vol100, lastNumber8_symbol_vol100, lastNumber7_symbol_vol100, lastNumber6_symbol_vol100, lastNumber5_symbol_vol100, lastNumber4_symbol_vol100, lastNumber3_symbol_vol100, lastNumber2_symbol_vol100, lastNumber1_symbol_vol100, currentRandom_symbol_vol100, strNumber_symbol_vol100)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100 !== null && lastNumber1_symbol_vol100 !== null && lastNumber2_symbol_vol100 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance_symbol_vol100 == true) {
                if (lastNumber1_symbol_vol100 == currentRandom_symbol_vol100 && (first_instance_symbol_vol100 == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5_symbol_vol100 == 2 || bot_set_carousel5_cookie_symbol_vol100 == 2)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100 == 'start_bots') && ((currentvol_carousel5_symbol_vol100 == 5 && currentvol2_carousel5_symbol_vol100 == 5) || (currentvol_carousel5_cookie_symbol_vol100 == 5 && currentvol2_carousel5_cookie_symbol_vol100 == 5))) {
                        startBot_symbol_vol100(martingale_active_carousel5_cookie_symbol_vol100, lastNumber10_symbol_vol100, lastNumber9_symbol_vol100, lastNumber8_symbol_vol100, lastNumber7_symbol_vol100, lastNumber6_symbol_vol100, lastNumber5_symbol_vol100, lastNumber4_symbol_vol100, lastNumber3_symbol_vol100, lastNumber2_symbol_vol100, lastNumber1_symbol_vol100, currentRandom_symbol_vol100, strNumber_symbol_vol100)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100 !== null && lastNumber1_symbol_vol100 !== null && lastNumber2_symbol_vol100 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance_symbol_vol100 == true) {
                if (lastNumber2_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber1_symbol_vol100 == currentRandom_symbol_vol100 && (first_instance_symbol_vol100 == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5_symbol_vol100 == 3 || bot_set_carousel5_cookie_symbol_vol100 == 3)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100 == 'start_bots') && ((currentvol_carousel5_symbol_vol100 == 5 && currentvol2_carousel5_symbol_vol100 == 5) || (currentvol_carousel5_cookie_symbol_vol100 == 5 && currentvol2_carousel5_cookie_symbol_vol100 == 5))) {
                        startBot_symbol_vol100(martingale_active_carousel5_cookie_symbol_vol100, lastNumber10_symbol_vol100, lastNumber9_symbol_vol100, lastNumber8_symbol_vol100, lastNumber7_symbol_vol100, lastNumber6_symbol_vol100, lastNumber5_symbol_vol100, lastNumber4_symbol_vol100, lastNumber3_symbol_vol100, lastNumber2_symbol_vol100, lastNumber1_symbol_vol100, currentRandom_symbol_vol100, strNumber_symbol_vol100)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100 !== null && lastNumber1_symbol_vol100 !== null && lastNumber2_symbol_vol100 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance_symbol_vol100 == true) {
                if (lastNumber3_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber2_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber1_symbol_vol100 == currentRandom_symbol_vol100 && (first_instance_symbol_vol100 == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5_symbol_vol100 == 4 || bot_set_carousel5_cookie_symbol_vol100 == 4)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100 == 'start_bots') && ((currentvol_carousel5_symbol_vol100 == 5 && currentvol2_carousel5_symbol_vol100 == 5) || (currentvol_carousel5_cookie_symbol_vol100 == 5 && currentvol2_carousel5_cookie_symbol_vol100 == 5))) {
                        startBot_symbol_vol100(martingale_active_carousel5_cookie_symbol_vol100, lastNumber10_symbol_vol100, lastNumber9_symbol_vol100, lastNumber8_symbol_vol100, lastNumber7_symbol_vol100, lastNumber6_symbol_vol100, lastNumber5_symbol_vol100, lastNumber4_symbol_vol100, lastNumber3_symbol_vol100, lastNumber2_symbol_vol100, lastNumber1_symbol_vol100, currentRandom_symbol_vol100, strNumber_symbol_vol100)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100 !== null && lastNumber1_symbol_vol100 !== null && lastNumber2_symbol_vol100 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance_symbol_vol100 == true) {
                if (lastNumber4_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber3_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber2_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber1_symbol_vol100 == currentRandom_symbol_vol100 && (first_instance_symbol_vol100 == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5_symbol_vol100 == 5 || bot_set_carousel5_cookie_symbol_vol100 == 5)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100 == 'start_bots') && ((currentvol_carousel5_symbol_vol100 == 5 && currentvol2_carousel5_symbol_vol100 == 5) || (currentvol_carousel5_cookie_symbol_vol100 == 5 && currentvol2_carousel5_cookie_symbol_vol100 == 5))) {
                        startBot_symbol_vol100(martingale_active_carousel5_cookie_symbol_vol100, lastNumber10_symbol_vol100, lastNumber9_symbol_vol100, lastNumber8_symbol_vol100, lastNumber7_symbol_vol100, lastNumber6_symbol_vol100, lastNumber5_symbol_vol100, lastNumber4_symbol_vol100, lastNumber3_symbol_vol100, lastNumber2_symbol_vol100, lastNumber1_symbol_vol100, currentRandom_symbol_vol100, strNumber_symbol_vol100)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100 !== null && lastNumber1_symbol_vol100 !== null && lastNumber2_symbol_vol100 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance_symbol_vol100 == true) {
                if (lastNumber5_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber4_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber3_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber2_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber1_symbol_vol100 == currentRandom_symbol_vol100 && (first_instance_symbol_vol100 == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5_symbol_vol100 == 6 || bot_set_carousel5_cookie_symbol_vol100 == 6)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100 == 'start_bots') && ((currentvol_carousel5_symbol_vol100 == 5 && currentvol2_carousel5_symbol_vol100 == 5) || (currentvol_carousel5_cookie_symbol_vol100 == 5 && currentvol2_carousel5_cookie_symbol_vol100 == 5))) {
                        startBot_symbol_vol100(martingale_active_carousel5_cookie_symbol_vol100, lastNumber10_symbol_vol100, lastNumber9_symbol_vol100, lastNumber8_symbol_vol100, lastNumber7_symbol_vol100, lastNumber6_symbol_vol100, lastNumber5_symbol_vol100, lastNumber4_symbol_vol100, lastNumber3_symbol_vol100, lastNumber2_symbol_vol100, lastNumber1_symbol_vol100, currentRandom_symbol_vol100, strNumber_symbol_vol100)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        
        if (currentRandom_symbol_vol100 !== null && lastNumber1_symbol_vol100 !== null && lastNumber2_symbol_vol100 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance_symbol_vol100 == true) {
                if (lastNumber6_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber5_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber4_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber3_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber2_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber1_symbol_vol100 == currentRandom_symbol_vol100 && (first_instance_symbol_vol100 == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5_symbol_vol100 == 7 || bot_set_carousel5_cookie_symbol_vol100 == 7)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100 == 'start_bots') && ((currentvol_carousel5_symbol_vol100 == 5 && currentvol2_carousel5_symbol_vol100 == 5) || (currentvol_carousel5_cookie_symbol_vol100 == 5 && currentvol2_carousel5_cookie_symbol_vol100 == 5))) {
                        startBot_symbol_vol100(martingale_active_carousel5_cookie_symbol_vol100, lastNumber10_symbol_vol100, lastNumber9_symbol_vol100, lastNumber8_symbol_vol100, lastNumber7_symbol_vol100, lastNumber6_symbol_vol100, lastNumber5_symbol_vol100, lastNumber4_symbol_vol100, lastNumber3_symbol_vol100, lastNumber2_symbol_vol100, lastNumber1_symbol_vol100, currentRandom_symbol_vol100, strNumber_symbol_vol100)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100 !== null && lastNumber1_symbol_vol100 !== null && lastNumber2_symbol_vol100 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance_symbol_vol100 == true) {
                if (lastNumber7_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber6_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber5_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber4_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber3_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber2_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber1_symbol_vol100 == currentRandom_symbol_vol100 && (first_instance_symbol_vol100 == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5_symbol_vol100 == 8 || bot_set_carousel5_cookie_symbol_vol100 == 8)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100 == 'start_bots') && ((currentvol_carousel5_symbol_vol100 == 5 && currentvol2_carousel5_symbol_vol100 == 5) || (currentvol_carousel5_cookie_symbol_vol100 == 5 && currentvol2_carousel5_cookie_symbol_vol100 == 5))) {
                        startBot_symbol_vol100(martingale_active_carousel5_cookie_symbol_vol100, lastNumber10_symbol_vol100, lastNumber9_symbol_vol100, lastNumber8_symbol_vol100, lastNumber7_symbol_vol100, lastNumber6_symbol_vol100, lastNumber5_symbol_vol100, lastNumber4_symbol_vol100, lastNumber3_symbol_vol100, lastNumber2_symbol_vol100, lastNumber1_symbol_vol100, currentRandom_symbol_vol100, strNumber_symbol_vol100)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100 !== null && lastNumber1_symbol_vol100 !== null && lastNumber2_symbol_vol100 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance_symbol_vol100 == true) {
                if (lastNumber8_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber7_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber6_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber5_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber4_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber3_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber2_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber1_symbol_vol100 == currentRandom_symbol_vol100 && (first_instance_symbol_vol100 == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5_symbol_vol100 == 9 || bot_set_carousel5_cookie_symbol_vol100 == 9)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100 == 'start_bots') && ((currentvol_carousel5_symbol_vol100 == 5 && currentvol2_carousel5_symbol_vol100 == 5) || (currentvol_carousel5_cookie_symbol_vol100 == 5 && currentvol2_carousel5_cookie_symbol_vol100 == 5))) {
                        startBot_symbol_vol100(martingale_active_carousel5_cookie_symbol_vol100, lastNumber10_symbol_vol100, lastNumber9_symbol_vol100, lastNumber8_symbol_vol100, lastNumber7_symbol_vol100, lastNumber6_symbol_vol100, lastNumber5_symbol_vol100, lastNumber4_symbol_vol100, lastNumber3_symbol_vol100, lastNumber2_symbol_vol100, lastNumber1_symbol_vol100, currentRandom_symbol_vol100, strNumber_symbol_vol100)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100 !== null && lastNumber1_symbol_vol100 !== null && lastNumber2_symbol_vol100 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance_symbol_vol100 == true) {
                if (lastNumber9_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber8_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber7_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber6_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber5_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber4_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber3_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber2_symbol_vol100 == currentRandom_symbol_vol100 && lastNumber1_symbol_vol100 == currentRandom_symbol_vol100 && (first_instance_symbol_vol100 == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5_symbol_vol100 == 10 || bot_set_carousel5_cookie_symbol_vol100 == 10)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100 == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100 == 'start_bots') && ((currentvol_carousel5_symbol_vol100 == 5 && currentvol2_carousel5_symbol_vol100 == 5) || (currentvol_carousel5_cookie_symbol_vol100 == 5 && currentvol2_carousel5_cookie_symbol_vol100 == 5))) {
                        startBot_symbol_vol100(martingale_active_carousel5_cookie_symbol_vol100, lastNumber10_symbol_vol100, lastNumber9_symbol_vol100, lastNumber8_symbol_vol100, lastNumber7_symbol_vol100, lastNumber6_symbol_vol100, lastNumber5_symbol_vol100, lastNumber4_symbol_vol100, lastNumber3_symbol_vol100, lastNumber2_symbol_vol100, lastNumber1_symbol_vol100, currentRandom_symbol_vol100, strNumber_symbol_vol100)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }
    }
};

window.addEventListener('load', function () {
    duration_amount_cookie_symbol_vol100 = getCookie('duration_amount_cookie');
    stake_amount_cookie_symbol_vol100 = getCookie('stake_amount_cookie');
    duration_unit_cookie_symbol_vol100 = getCookie('duration_unit_cookie');
    symbol_vol_cookie_symbol_vol100 = getCookie('symbol_vol_cookie');
    currency_cookie_symbol_vol100 = getCookie('ActiveCurrency')
    contract_text_cookie_symbol_vol100 = getCookie('contract_text_cookie');
    stake_or_payout_cookie_symbol_vol100 = getCookie('stake_or_payout_cookie')
    last_digit_prediction_cookie_symbol_vol100 = getCookie('last_digit_prediction_cookie')
    stake_amount_default_symbol_vol100 = getCookie('stake_amount_default')

    if (last_digit_prediction_cookie_symbol_vol100) {
        last_digit_prediction_or_barrier_symbol_vol100 = last_digit_prediction_or_barrier_symbol_vol100
    } else {
        let numericValue = last_digit_input_symbol_vol100.value
        last_digit_prediction_or_barrier_symbol_vol100 = numericValue
    }
    if (symbol_vol_cookie_symbol_vol100) {
        symbol_vol_symbol_vol100 = symbol_vol_cookie_symbol_vol100;
    } else {
        symbol_vol_symbol_vol100 = "R_100";
    }
    if (duration_unit_cookie_symbol_vol100) {
        duration_unit_symbol_vol100 = duration_unit_cookie_symbol_vol100;
    } else {
        duration_unit_symbol_vol100 = "t";
    }
    if (duration_amount_cookie_symbol_vol100) {
        duration_amount_symbol_vol100 = parseInt(duration_amount_cookie_symbol_vol100, 10);
    } else {
        duration_amount_symbol_vol100 = 1;
    }
    if (stake_amount_cookie_symbol_vol100) {
        stake_amount_symbol_vol100 = parseFloat(stake_amount_cookie_symbol_vol100);
    } else {
        stake_amount_symbol_vol100 = 10;
    }
    if (stake_amount_default_symbol_vol100) {
        stake_amount_default_symbol_vol100 = parseFloat(stake_amount_default_symbol_vol100);
    } else {
        stake_amount_default_symbol_vol100 = 10;
    }
    if (currency_cookie_symbol_vol100) {
        currency_symbol_vol100 = currency_cookie_symbol_vol100;
    } else {
        currency_symbol_vol100 = "USD";
    }
    if (contract_text_cookie_symbol_vol100) {
        contract_symbol_vol100 = contract_text_cookie_symbol_vol100;
    } else {
        contract_symbol_vol100 = "Matches/Differs";
    }
    if (stake_or_payout_cookie_symbol_vol100) {
        stake_or_payout_symbol_vol100 = stake_or_payout_cookie_symbol_vol100;
    } else {
        stake_or_payout_symbol_vol100 = "stake";
    }

    initializeApi(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response_symbol_General) {
            clearInterval(getAwaitingResponses)
        } else {
            
        }
    }, 2000);
});

async function order_propose_symbol_vol100(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
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
                let tooltip = document.getElementById('tooltiptext100');
                tooltip.textContent = data.error.message;
                tooltip.classList.add('tooltiptext10')
                
                connection.removeEventListener('message', proposalResponse, false);
                await api.disconnect();
                reject(new Error('Error in proposal'));
            } else if (data.msg_type === 'proposal') {

                proposal_id_symbol_vol100 = data.proposal.id;

                // let calc = displayProposalResult2(data, data.proposal.display_value, data.proposal.payout);

                // def_price_up_symbol_vol100 = data.proposal.display_value;
                // def_payout_up_symbol_vol100 = data.proposal.payout;
                // def_profit_up_symbol_vol100 = calc.NetProfit;
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

const unsubscribeProposal_symbol_vol100 = () => {
    connection.removeEventListener('message', proposalResponse_symbol_vol100, false);
};

function convertTimestampTo12HourTime_symbol_vol100(timestamp) {
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

function formatNumberAndBoldLastDecimal_symbol_vol100(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart) {
        let lastDecimalDigit = decimalPart.slice(-1);
        decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
    } 
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}

let contract_status_html_symbol_vol100 = document.getElementById('contract_status_carousel5') 
let end_tic_off_trade_symbol_vol100 = document.getElementById('end_tic_off_trade_carousel5')            
let price_after_trade_figure_amount_symbol_vol100 = document.getElementById('price_after_trade_figure_amount_carousel5') 
let profit_figure_amount_symbol_vol100 = document.getElementById('profit_figure_amount_carousel5') 
let buy_price_figure_amount_symbol_vol100 = document.getElementById('buy_price_figure_amount_carousel5') 
let result_currency_html_symbol_vol100 = document.querySelectorAll('.result_currency')
let transaction_refrence_figure_symbol_vol100 = document.getElementById('transaction_refrence_figure_carousel5') 
let trade_start_time_symbol_vol100 = document.getElementById('trade_start_time_carousel5') 
let buy_price_text_symbol_vol100 = document.getElementById('buy_price_text_carousel5') 
let price_after_trade_text_symbol_vol100 = document.getElementById('price_after_trade_text_carousel5') 
let profit_text_symbol_vol100 = document.getElementById('profit_text_carousel5') 
let durr_amount_prop_count_symbol_vol100 = document.getElementById('durr_amount_prop_count_carousel5') 
let durr_amount_prop_symbol_vol100 = document.getElementById('durr_amount_prop_carousel5') 
let countdown_trade_symbol_vol100 = 0
let countdown_trade2_symbol_vol100 = 0

function before_trade_symbol_vol100() {
    countdown_trade_symbol_vol100 = 0
    let allDigits = document.querySelectorAll('.ldgs_carousel5')
    let buy_price_text = document.getElementById('buy_price_text_carousel5')
    let price_after_trade_text = document.getElementById('price_after_trade_text_carousel5')
    let profit_text = document.getElementById('profit_text_carousel5')
    let durr_amount_prop_count = document.getElementById('durr_amount_prop_count_carousel5')
    let slide_trade_result = document.getElementById('slide_trade_result_carousel5')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel5')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel5')
    let profit_figure_amount = document.getElementById('profit_figure_amount_carousel5')
    contract_status_html_symbol_vol100.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count.textContent = countdown_trade_symbol_vol100
    durr_amount_prop.textContent = duration_amount_symbol_vol100
    buy_price_figure_amount.textContent = def_price_up_symbol_vol100
    price_after_trade_figure_amount.textContent = def_payout_up_symbol_vol100
    profit_figure_amount.textContent = def_profit_up_symbol_vol100

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
            if (digit.textContent != (last_digit_prediction_or_barrier_symbol_vol100)) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound == 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier_symbol_vol100) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}

function after_trade_symbol_vol100(status, endDigit) {
    let slide_trade_result = document.getElementById('slide_trade_result_carousel5')
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

function formate_date_symbol_vol100(datein) {
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

let allProposalOpenContract_symbol_vol100 = []
let longcodeProp_symbol_vol100 = null
let contract_ids_buy_symbol_vol100 = null
let contract_status_symbol_vol100 = null
let last_tick_symbol_vol100 = null
let profit_or_loss_symbol_vol100 = null
let final_price_symbol_vol100 = null
let payout_result_symbol_vol100 = null
let buy_price_symbol_vol100 = null
let contract_currency_symbol_vol100 = null
let time_of_trade_symbol_vol100 = null
let every_tick_symbol_vol100 = null
let contract_id_symbol_vol100 = null

let allProposalOpenContract2_symbol_vol100 = []
let longcodeProp2_symbol_vol100 = null
let contract_ids_buy2_symbol_vol100 = null
let contract_ids_sell2_symbol_vol100 = null
let contract_status2_symbol_vol100 = null
let last_tick2_symbol_vol100 = null
let profit_or_loss2_symbol_vol100 = null
let final_price2_symbol_vol100 = null
let payout_result2_symbol_vol100 = null
let buy_price2_symbol_vol100 = null
let contract_currency2_symbol_vol100 = null
let time_of_trade2_symbol_vol100 = null
let every_tick2_symbol_vol100 = null

function open_proposal_actions2_symbol_vol100(data) {
    if (data.proposal_open_contract.contract_id == contract_id2_symbol_vol100) {
        set_middle_trade1_symbol_vol100(bot_is_running_or_stopped_symbol_vol100)
        bot_buy_start_time_symbol_vol100 = formate_date_symbol_vol100(data.proposal_open_contract.date_start)
        bot_buy_transaction_id_symbol_vol100 = data.proposal_open_contract.transaction_ids.buy
        bot_trade_type_symbol_vol100 = data.proposal_open_contract.contract_type
        bot_buy_price_symbol_vol100 = data.proposal_open_contract.buy_price
        bot_status_symbol_vol100 = data.proposal_open_contract.status == 'open' ? 'Pending' : data.proposal_open_contract.status
        bot_contract_id_symbol_vol100 = data.proposal_open_contract.contract_id
        start_trade_ref_symbol_vol100(bot_buy_price_symbol_vol100)

        if (firstContractReceived_symbol_vol100 == false) {
            append_result_symbol_vol100(bot_id_symbol_vol100, bot_buy_start_time_symbol_vol100, bot_buy_transaction_id_symbol_vol100, bot_trade_type_symbol_vol100, bot_buy_price_symbol_vol100, bot_status_symbol_vol100);
            firstContractReceived_symbol_vol100 = true
        }

        longcodeProp2_symbol_vol100 = data.proposal_open_contract.longcode
        allProposalOpenContract2_symbol_vol100.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information_carousel5').textContent = longcodeProp2_symbol_vol100

        if (allProposalOpenContract2_symbol_vol100.length > 0 && allProposalOpenContract2_symbol_vol100[allProposalOpenContract2_symbol_vol100.length - 1].length > 0) {
            let lastSubArray2 = allProposalOpenContract2_symbol_vol100[allProposalOpenContract2_symbol_vol100.length - 1];
            let lastElementOfLastSubArray2 = lastSubArray2[lastSubArray2.length - 1].tick_display_value;
            let numberString2 = lastElementOfLastSubArray2.toString();
            let lastCharacter2 = numberString2[numberString2.length - 1];
            handleNewNumber_symbol_vol100(lastCharacter2);
            every_tick2_symbol_vol100 = lastElementOfLastSubArray2
            end_tic_off_trade_symbol_vol100.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol100(every_tick2_symbol_vol100);
            if (countdown_trade2_symbol_vol100 < duration_amount_symbol_vol100) {
                countdown_trade2_symbol_vol100 += 1
                durr_amount_prop_count_symbol_vol100.textContent = countdown_trade_symbol_vol100
            }
            if (data.proposal_open_contract.is_expired == 1 && end_slide_symbol_vol100 == true) {
                set_end_trade1_symbol_vol100(bot_is_running_or_stopped_symbol_vol100)
                end_slide_symbol_vol100 = false
            }
            contract_ids_buy2_symbol_vol100 = data.proposal_open_contract.transaction_ids.buy
            if (contract_ids_buy2_symbol_vol100) {
                middle_trade_ref_symbol_vol100(contract_ids_buy2_symbol_vol100)
            }
            if (data.proposal_open_contract.status !== 'open') {
                let circle2_carousel5 = document.getElementById('circle2_carousel5')
                circle2_carousel5.classList.remove('circle_shadow_carousel5')
                bot_status_symbol_vol100 = data.proposal_open_contract.status
                bot_entry_spot_symbol_vol100 = data.proposal_open_contract.entry_tick
                bot_exit_spot_symbol_vol100 = data.proposal_open_contract.exit_tick
                bot_profit_loss_symbol_vol100 = data.proposal_open_contract.profit
                contract_status2_symbol_vol100 = data.proposal_open_contract.status
                last_tick2_symbol_vol100 = lastElementOfLastSubArray2
                profit_or_loss2_symbol_vol100 = data.proposal_open_contract.profit
                payout_result2_symbol_vol100 = data.proposal_open_contract.payout
                buy_price2_symbol_vol100 = data.proposal_open_contract.buy_price
                contract_currency2_symbol_vol100 = data.proposal_open_contract.currency
                contract_ids_buy2_symbol_vol100 = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2_symbol_vol100 = data.proposal_open_contract.expiry_time
                contract_ids_sell2_symbol_vol100 = data.proposal_open_contract.transaction_ids.sell

                end_trade_ref_symbol_vol100(contract_ids_sell2_symbol_vol100)
                if (profit_or_loss2_symbol_vol100 < 0) {
                    final_price2_symbol_vol100 = '0.00'
                } else if (profit_or_loss2_symbol_vol100 > 0) {
                    final_price2_symbol_vol100 = payout_result2_symbol_vol100
                } else {
                    
                }
                if (contract_status2_symbol_vol100 == 'won' && !wonEncountered_symbol_vol100) {
                    bot_total_wins_symbol_vol100 = bot_total_wins_symbol_vol100 + 1;
                    bot_total_profit_loss_symbol_vol100 = bot_total_profit_loss_symbol_vol100 + profit_or_loss2_symbol_vol100;
                    bot_total_stake_symbol_vol100 = bot_total_stake_symbol_vol100 + buy_price2_symbol_vol100
                    bot_total_runs_symbol_vol100 = bot_total_runs_symbol_vol100 + 1;
                    bot_total_payout_symbol_vol100 = bot_total_payout_symbol_vol100 + payout_result2_symbol_vol100;
                    add_after_trade_symbol_vol100(bot_id_symbol_vol100, contract_id2_symbol_vol100, bot_contract_id_symbol_vol100, bot_entry_spot_symbol_vol100, bot_exit_spot_symbol_vol100, bot_profit_loss_symbol_vol100, bot_status_symbol_vol100, bot_total_runs_symbol_vol100, bot_total_stake_symbol_vol100, bot_total_payout_symbol_vol100, bot_total_wins_symbol_vol100, bot_total_loss_symbol_vol100, bot_total_profit_loss_symbol_vol100);
                    wonEncountered_symbol_vol100 = true;
                } else if (contract_status2_symbol_vol100 == 'lost') {
                    bot_total_loss_symbol_vol100 = bot_total_loss_symbol_vol100 + 1;
                    bot_total_profit_loss_symbol_vol100 = bot_total_profit_loss_symbol_vol100 + profit_or_loss2_symbol_vol100;
                    bot_total_stake_symbol_vol100 = bot_total_stake_symbol_vol100 + buy_price2_symbol_vol100
                    bot_total_runs_symbol_vol100 = bot_total_runs_symbol_vol100 + 1;
                    bot_total_payout_symbol_vol100 = bot_total_payout_symbol_vol100 - payout_result2_symbol_vol100;
                    add_after_trade_symbol_vol100(bot_id_symbol_vol100, contract_id2_symbol_vol100, bot_contract_id_symbol_vol100, bot_entry_spot_symbol_vol100, bot_exit_spot_symbol_vol100, bot_profit_loss_symbol_vol100, bot_status_symbol_vol100, bot_total_runs_symbol_vol100, bot_total_stake_symbol_vol100, bot_total_payout_symbol_vol100, bot_total_wins_symbol_vol100, bot_total_loss_symbol_vol100, bot_total_profit_loss_symbol_vol100);
                    wonEncountered_symbol_vol100 = true;
                }
                if (contract_status2_symbol_vol100 == 'won' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol100 = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol100 = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol100 = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol100 = every_tick2_symbol_vol100
                    bot_log_end_symbol_vol100(log_buy_timestamp_bot_symbol_vol100, log_sell_timestamp_bot_symbol_vol100, log_message_entry_tick_symbol_vol100, log_message_last_digit_symbol_vol100)
                } else if (contract_status2_symbol_vol100 == 'lost' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol100 = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol100 = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol100 = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol100 = every_tick2_symbol_vol100
                    bot_log_end_symbol_vol100(log_buy_timestamp_bot_symbol_vol100, log_sell_timestamp_bot_symbol_vol100, log_message_entry_tick_symbol_vol100, log_message_last_digit_symbol_vol100)
                }
                contract_status_html_symbol_vol100.textContent = contract_status2_symbol_vol100
                end_tic_off_trade_symbol_vol100.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol100(last_tick2_symbol_vol100);
                profit_figure_amount_symbol_vol100.textContent = profit_or_loss2_symbol_vol100
                price_after_trade_figure_amount_symbol_vol100.textContent = final_price2_symbol_vol100
                buy_price_figure_amount_symbol_vol100.textContent = buy_price2_symbol_vol100
                result_currency_html_symbol_vol100.textContent = contract_currency2_symbol_vol100
                transaction_refrence_figure_symbol_vol100.textContent = contract_ids_buy2_symbol_vol100
                trade_start_time_symbol_vol100.innerHTML = convertTimestampTo12HourTime_symbol_vol100(time_of_trade2_symbol_vol100)
                buy_price_text_symbol_vol100.textContent = 'Buy price'
                price_after_trade_text_symbol_vol100.textContent = 'Final price'
                profit_text_symbol_vol100.textContent = 'Profit'
                after_trade_symbol_vol100(contract_status2_symbol_vol100, lastCharacter2)
            } else {
            }
        } else {
            
        }
    }
}

let currentPosition1_symbol_vol100 = 0;
function moveSlider_symbol_vol100(number) {
    const slider = document.getElementById('slide_trade_result_carousel5');
    const container = document.getElementById('last_digit_responds_carousel5');
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

    const target = document.querySelector(`.last_digits_carousel5.${stringnumber}`);
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
        currentPosition1_symbol_vol100 = newPosition;
    }
}

function handleNewNumber_symbol_vol100(randomNumber) {
    const newPosition = randomNumber;
    moveSlider_symbol_vol100(newPosition);
}

let log_close_and_info_cont_symbol_vol100 = document.getElementById('log_close_and_info_cont_carousel5');
let bot_log_show_cont_symbol_vol100 = document.getElementById('bot_log_show_cont_carousel5');
let bot_details_symbol_vol100 = document.getElementById('bot_details_carousel5');
let bot_details2_symbol_vol100 = document.getElementById('bot_details2_carousel5');

if (bot_log_show_cont_symbol_vol100 && bot_details_symbol_vol100) {
    bot_details_symbol_vol100.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol100.style.display == 'none') {
            bot_log_show_cont_symbol_vol100.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol100.style.display = 'none'
        }
    });

    log_close_and_info_cont_symbol_vol100.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_log_show_cont_symbol_vol100.style.display == 'block') {
            bot_log_show_cont_symbol_vol100.style.display = 'none'
        } else {
            bot_log_show_cont_symbol_vol100.style.display = 'block'
        }
    });
} else {
    console.error('One or more elements are not found');
}

if (bot_log_show_cont_symbol_vol100 && bot_details_symbol_vol100) {
    bot_details2_symbol_vol100.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol100.style.display == 'none') {
            bot_log_show_cont_symbol_vol100.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol100.style.display = 'none'
        }
    });
} else {
    console.error('One or more elements are not found');
}

let martingale_symbol_vol100 = document.getElementById('martingale_carousel5');
let flash_info_cont_symbol_vol100 = document.getElementById('flash_info_cont_carousel5');
let tick_check_amount_symbol_vol100 = document.getElementById('tick_check_amount_carousel5');
let settings_cont_symbol_vol100 = document.getElementById('settings_cont_carousel5');
let tick_check_symbol_vol100 = document.getElementById('tick_check_carousel5');
let martingale_jump_symbol_vol100 = document.getElementById('martingale_jump_carousel5');
let increase_jump_symbol_vol100 = document.getElementById('increase_jump_carousel5');
let reduce_jump_symbol_vol100 = document.getElementById('reduce_jump_carousel5');
let bot_settings_symbol_vol100 = document.getElementById('bot_settings_carousel5');
let bot_settings2_symbol_vol100 = document.getElementById('bot_settings2_carousel5');
const volumes2_symbol_vol100 = document.querySelectorAll(".slide_vol2_carousel5");
let tick_check2_symbol_vol100 = document.getElementById('tick_check2_carousel5');
let martingale2_symbol_vol100 = document.getElementById('martingale2_carousel5');
let martingale_jump2_symbol_vol100 = document.getElementById('martingale_jump2_carousel5');
let martingale_jump_set_symbol_vol100 = document.getElementById('martingale_jump_set_carousel5');
const last_digit_settings_symbol_vol100 = document.querySelectorAll(".last_digit_settings_carousel5");

martingale_symbol_vol100.addEventListener('click', function () {
    if (martingale_symbol_vol100.classList.contains('active_mat')) {
        martingale_symbol_vol100.classList.remove('active_mat');
        martingale2_symbol_vol100.classList.remove('active_mat');
        setCookie('martingale_carousel5', 'false')
        localStorage.setItem('martingale_carousel5', 'false')
        flash_info_cont_symbol_vol100.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol100.style.color = '#fff'
    } else {
        martingale_symbol_vol100.classList.add('active_mat');
        martingale2_symbol_vol100.classList.add('active_mat');
        setCookie('martingale_carousel5', 'true')
        localStorage.setItem('martingale_carousel5', 'true')
        flash_info_cont_symbol_vol100.textContent = 'martigale is active'
        tick_check_amount_symbol_vol100.style.color = '#fff'
    }
    if (flash_info_cont_symbol_vol100.classList.contains('show_flash_info_carousel5')) {
        flash_info_cont_symbol_vol100.classList.remove('show_flash_info_carousel5')
        setTimeout(() => {
            flash_info_cont_symbol_vol100.classList.remove('show_flash_info_carousel5')
        }, 5000)
    } else {
        flash_info_cont_symbol_vol100.classList.add('show_flash_info_carousel5')
        setTimeout(() => {
            flash_info_cont_symbol_vol100.classList.remove('show_flash_info_carousel5')
        }, 5000)
    }
});

function bot_set_default_symbol_vol100() {
    let curr_bot_set = localStorage.getItem('bot_set_carousel5');
    if (curr_bot_set === null) {
        setTimeout(bot_set_default_symbol_vol100, 100);
        return;
    }
    tick_check_symbol_vol100.textContent = curr_bot_set;
    tick_check2_symbol_vol100.textContent = curr_bot_set;
}

bot_set_default_symbol_vol100();

bot_settings_symbol_vol100.addEventListener('click', function () {
    if (settings_cont_symbol_vol100.style.display == 'none') {
        settings_cont_symbol_vol100.style.display = 'block'
    } else {
        settings_cont_symbol_vol100.style.display = 'none'
    }
});

document.addEventListener('click', (event) => {
    if (!bot_settings_symbol_vol100.contains(event.target) && !settings_cont_symbol_vol100.contains(event.target) && !martingale_jump_set_symbol_vol100.contains(event.target)) {
        settings_cont_symbol_vol100.style.display = 'none';
    }
});

last_digit_settings_symbol_vol100.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.querySelector('.bot_text_carousel5').textContent.trim().replace(/\s+/g, ' ');
        if (bot_set == 'Last one digit bot') {
            localStorage.setItem('bot_set_carousel5', '1')
            setCookie('bot_set_carousel5', '1')
            localStorage.setItem('bot_set_store_carousel5', '1')
            setCookie('bot_set_store_carousel5', '1')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            localStorage.setItem('bot_set_carousel5', '2')
            setCookie('bot_set_carousel5', '2')
            localStorage.setItem('bot_set_store_carousel5', '2')
            setCookie('bot_set_store_carousel5', '2')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            localStorage.setItem('bot_set_carousel5', '3')
            setCookie('bot_set_carousel5', '3')
            localStorage.setItem('bot_set_store_carousel5', '3')
            setCookie('bot_set_store_carousel5', '3')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            localStorage.setItem('bot_set_carousel5', '4')
            setCookie('bot_set_carousel5', '4')
            localStorage.setItem('bot_set_store_carousel5', '4')
            setCookie('bot_set_store_carousel5', '4')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            localStorage.setItem('bot_set_carousel5', '5')
            setCookie('bot_set_carousel5', '5')
            localStorage.setItem('bot_set_store_carousel5', '5')
            setCookie('bot_set_store_carousel5', '5')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            localStorage.setItem('bot_set_carousel5', '6')
            setCookie('bot_set_carousel5', '6')
            localStorage.setItem('bot_set_store_carousel5', '6')
            setCookie('bot_set_store_carousel5', '6')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            localStorage.setItem('bot_set_carousel5', '7')
            setCookie('bot_set_carousel5', '7')
            localStorage.setItem('bot_set_store_carousel5', '7')
            setCookie('bot_set_store_carousel5', '7')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            localStorage.setItem('bot_set_carousel5', '8')
            setCookie('bot_set_carousel5', '8')
            localStorage.setItem('bot_set_store_carousel5', '8')
            setCookie('bot_set_store_carousel5', '8')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            localStorage.setItem('bot_set_carousel5', '9')
            setCookie('bot_set_carousel5', '9')
            localStorage.setItem('bot_set_store_carousel5', '9')
            setCookie('bot_set_store_carousel5', '9')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            localStorage.setItem('bot_set_carousel5', '10')
            setCookie('bot_set_carousel5', '10')
            localStorage.setItem('bot_set_store_carousel5', '10')
            setCookie('bot_set_store_carousel5', '10')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});


let jump_count_symbol_vol100 = 0

function jump_count_set_symbol_vol100() {
    localStorage.setItem('bot_jump_carousel5', jump_count_symbol_vol100)
    setCookie('bot_jump_carousel5', jump_count_symbol_vol100)
}

function jump_count_set2_symbol_vol100() {
    let stored_jump_count = localStorage.getItem('bot_jump_carousel5') ? localStorage.getItem('bot_jump_carousel5') : getCookie('bot_jump_carousel5');
    jump_count_symbol_vol100 = stored_jump_count !== null ? parseInt(stored_jump_count, 10) : 0;

    if (isNaN(jump_count_symbol_vol100)) {
        jump_count_symbol_vol100 = 0;
    }
    if (jump_count_symbol_vol100 > 0) {
        martingale_jump_symbol_vol100.textContent = 'j' + jump_count_symbol_vol100
        martingale_jump2_symbol_vol100.textContent = 'j' + jump_count_symbol_vol100
    } else {
        martingale_jump_symbol_vol100.textContent = ''
        martingale_jump2_symbol_vol100.textContent = ''
    }
}

jump_count_set2_symbol_vol100()

increase_jump_symbol_vol100.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count_symbol_vol100 = jump_count_symbol_vol100 + 1
    jump_count_set_symbol_vol100()
    jump_count_set2_symbol_vol100()
})

reduce_jump_symbol_vol100.addEventListener('click', (event) => {
    event.preventDefault()
    if (jump_count_symbol_vol100 > 0) {
        jump_count_symbol_vol100 = jump_count_symbol_vol100 - 1
        jump_count_set_symbol_vol100()
        jump_count_set2_symbol_vol100()
    }
})

bot_settings2_symbol_vol100.addEventListener('click', function () {
    if (settings_cont_symbol_vol100.style.display == 'none') {
        settings_cont_symbol_vol100.style.display = 'block'
    } else {
        settings_cont_symbol_vol100.style.display = 'none'
    }
});

martingale2_symbol_vol100.addEventListener('click', function () {
    if (martingale2_symbol_vol100.classList.contains('active_mat')) {
        martingale2_symbol_vol100.classList.remove('active_mat');
        martingale_symbol_vol100.classList.remove('active_mat');
        setCookie('martingale_carousel5', 'false')
        localStorage.setItem('martingale_carousel5', 'false')
        flash_info_cont_symbol_vol100.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol100.style.color = '#fff'
    } else {
        martingale2_symbol_vol100.classList.add('active_mat');
        martingale_symbol_vol100.classList.add('active_mat');
        setCookie('martingale_carousel5', 'true')
        localStorage.setItem('martingale_carousel5', 'true')
        flash_info_cont_symbol_vol100.textContent = 'martigale is active'
        tick_check_amount_symbol_vol100.style.color = '#fff'
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























































let last_digit_input_symbol_vol100_1s = document.getElementById('last_digit_input')
let close_contract_result_container_symbol_vol100_1s = document.getElementById('close_contract_result_container_carousel10')
let buy_sell_two_symbol_vol100_1s = document.getElementById('buy_sell_two')
let trade_type_secound_symbol_vol100_1s = document.getElementById("trade_type_secound")
let attempting_buy2_carousel10_symbol_vol100_1s = document.getElementById("attempting_buy2_carousel10")
let buy_succeded2_carousel10_symbol_vol100_1s = document.getElementById("buy_succeded2_carousel10")
let contract_close2_carousel10_symbol_vol100_1s = document.getElementById("contract_close2_carousel10")
let stream100_1s_carousel10_symbol_vol100_1s = document.getElementById('stream100_1s_carousel10')

let last_digit_prediction_local_st_symbol_vol100_1s = null
let barrier_local_st_symbol_vol100_1s = null
let symbol_vol_text_local_st_symbol_vol100_1s = null
let contract_text_local_st_symbol_vol100_1s = null
let duration_amount_local_st_symbol_vol100_1s = null
let stake_amount_local_st_symbol_vol100_1s = null
let symbol_vol_local_st_symbol_vol100_1s = null
let duration_unit_local_st_symbol_vol100_1s = null
let last_digit_prediction_or_barrier_local_st_symbol_vol100_1s = null
let currency_local_st_symbol_vol100_1s = null
let stake_or_payout_local_st_symbol_vol100_1s = null
let proposal_id_local_st_symbol_vol100_1s = null
let last_digit_prediction_cookie_symbol_vol100_1s = null
let barrier_cookie_symbol_vol100_1s = null
let symbol_vol_text_cookie_symbol_vol100_1s = null
let contract_text_cookie_symbol_vol100_1s = null
let duration_amount_cookie_symbol_vol100_1s = null
let stake_amount_cookie_symbol_vol100_1s = null
let symbol_vol_cookie_symbol_vol100_1s = null
let duration_unit_cookie_symbol_vol100_1s = null
let last_digit_prediction_or_barrier_cookie_symbol_vol100_1s = null
let currency_cookie_symbol_vol100_1s = null
let stake_or_payout_cookie_symbol_vol100_1s = null
let proposal_id_cookie_symbol_vol100_1s = null
let stake_amount_default_symbol_vol100_1s = localStorage.getItem('stake_amount_default') || document.getElementById('stake_amount_input').value
let duration_unit_symbol_vol100_1s = null
let symbol_vol_symbol_vol100_1s = null
let duration_amount_symbol_vol100_1s = null
let stake_amount_symbol_vol100_1s = null
let last_digit_prediction_or_barrier_symbol_vol100_1s = null
let currency_symbol_vol100_1s = null
let contract_symbol_vol100_1s = null
let stake_or_payout_symbol_vol100_1s = null
let proposal_id_symbol_vol100_1s = null
let td2_account_id_carousel10_symbol_vol100_1s = document.getElementById('td2_account_id_carousel10')
let td2_no_of_runs_carousel10_symbol_vol100_1s = document.getElementById('td2_no_of_runs_carousel10')
let td2_total_stake_carousel10_symbol_vol100_1s = document.getElementById('td2_total_stake_carousel10')
let td2_total_payout_carousel10_symbol_vol100_1s = document.getElementById('td2_total_payout_carousel10')
let td2_total_wins_carousel10_symbol_vol100_1s = document.getElementById('td2_total_wins_carousel10')
let td2_total_loss_carousel10_symbol_vol100_1s = document.getElementById('td2_total_loss_carousel10')
let td2_total_profit_loss_carousel10_symbol_vol100_1s = document.getElementById('td2_total_profit_loss_carousel10')
let bot_total_runs_symbol_vol100_1s = 0
let bot_total_stake_symbol_vol100_1s = 0
let bot_total_payout_symbol_vol100_1s = 0
let bot_total_wins_symbol_vol100_1s = 0
let bot_total_loss_symbol_vol100_1s = 0
let bot_total_profit_loss_symbol_vol100_1s = 0
let randomNumber_symbol_vol100_1s = null;
let strNumber_symbol_vol100_1s = null;
let authorize_response_symbol_vol100_1s = null
let subscriptionId_symbol_vol100_1s = null
let randomNumber2_symbol_vol100_1s = null
let buy_contract_id_symbol_vol100_1s = null
let api_id_symbol_vol100_1s = null;
let api_token_symbol_vol100_1s = null;
let def_price_up_symbol_vol100_1s = null
let def_payout_up_symbol_vol100_1s = null
let def_profit_up_symbol_vol100_1s = null
let website_status_info_symbol_vol100_1s = 'initial'
let symbol100_1s_symbol_vol100_1s = null
let symbol100_1s_cookie_symbol_vol100_1s = null
let subscription_to_open_contract_symbol_vol100_1s = true

document.addEventListener('DOMContentLoaded', function () {
    setCookie('symbol100_1s', '1HZ100V')
    localStorage.setItem('symbol100_1s', '1HZ100V')

    symbol100_1s_symbol_vol100_1s = localStorage.getItem('symbol100_1s')
    symbol100_1s_cookie_symbol_vol100_1s = getCookie('symbol100_1s')
});

let bot_id_symbol_vol100_1s = 0
let bot_buy_start_time_symbol_vol100_1s = null
let bot_buy_transaction_id_symbol_vol100_1s = null
let bot_trade_type_symbol_vol100_1s = null
let bot_buy_price_symbol_vol100_1s = null
let bot_entry_spot_symbol_vol100_1s = null
let bot_exit_spot_symbol_vol100_1s = null
let bot_profit_loss_symbol_vol100_1s = null
let bot_status_symbol_vol100_1s = null
let firstContractReceived_symbol_vol100_1s = false;
let bot_is_running_or_stopped_symbol_vol100_1s = false
let end_slide_symbol_vol100_1s = true
let bot_contract_id_symbol_vol100_1s = null
let bot_unique_code_symbol_vol100_1s = null

async function add_after_trade_symbol_vol100_1s(bot_id, botuniqueCode, allContracts, entry_spot, exit_spot, profit_loss, status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss) {
    const tbody1_carousel10 = document.getElementById('tbody1_carousel10');

    if (botuniqueCode == allContracts) {
        let row_carousel10 = document.getElementById(`bot_carousel10${bot_id}`);
        if (!row_carousel10) {
            console.error(`Row with data-unique-code "bot_carousel10${bot_id}" not found.`);
            return;
        }

        const entry_spot_html_carousel10 = document.getElementById(`td5_carousel10${bot_id}`);
        const exit_spot_html_carousel10 = document.getElementById(`td6_carousel10${bot_id}`);
        const profit_loss_html_carousel10 = document.getElementById(`td8_carousel10${bot_id}`);
        const status_html_carousel10 = document.getElementById(`td9_carousel10${bot_id}`);

        if (entry_spot_html_carousel10) {
            entry_spot_html_carousel10.textContent = entry_spot
        } else {
            
        }
        if (exit_spot_html_carousel10) {
            exit_spot_html_carousel10.textContent = exit_spot
        } else {
            
        }
        if (profit_loss_html_carousel10) {
            profit_loss_html_carousel10.textContent = profit_loss
            let profitLossNumber = parseFloat(profit_loss);
            if (profitLossNumber < 0) {
                profit_loss_html_carousel10.style.color = 'red';
            } else {
                profit_loss_html_carousel10.style.color = 'green';
            }
        } else {
            
        }
        if (status_html_carousel10) {
            status_html_carousel10.textContent = status
            if (status == 'won') {
                status_html_carousel10.style.color = 'green'
            } else {
                status_html_carousel10.style.color = 'red'
            }
        } else {
            
        }
        td2_no_of_runs_carousel10_symbol_vol100_1s.textContent = bot_total_runs_symbol_vol100_1s
        td2_total_stake_carousel10_symbol_vol100_1s.textContent = bot_total_stake_symbol_vol100_1s
        td2_total_payout_carousel10_symbol_vol100_1s.textContent = Number(bot_total_payout_symbol_vol100_1s.toFixed(2));
        td2_total_wins_carousel10_symbol_vol100_1s.textContent = bot_total_wins_symbol_vol100_1s
        td2_total_wins_carousel10_symbol_vol100_1s.style.color = 'green'
        td2_total_loss_carousel10_symbol_vol100_1s.textContent = bot_total_loss_symbol_vol100_1s
        td2_total_loss_carousel10_symbol_vol100_1s.style.color = 'red'
        td2_total_profit_loss_carousel10_symbol_vol100_1s.textContent = Number(bot_total_profit_loss_symbol_vol100_1s.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss_symbol_vol100_1s.toFixed(2))) < 0) {
            td2_total_profit_loss_carousel10_symbol_vol100_1s.style.color = 'red'
        } else {
            td2_total_profit_loss_carousel10_symbol_vol100_1s.style.color = 'green'
        }
    }

}

const progressBar1_carousel10_symbol_vol100_1s = document.querySelector('.progress1_carousel10');
function fillProgressBar1_symbol_vol100_1s() {
    progressBar1_carousel10_symbol_vol100_1s.classList.add('prog1_carousel10')
}

const progressBar2_carousel10_symbol_vol100_1s = document.querySelector('.progress2_carousel10');
function fillProgressBar2_symbol_vol100_1s() {
    progressBar2_carousel10_symbol_vol100_1s.classList.add('prog2_carousel10')
}

function set_start_trade1_symbol_vol100_1s(bot_is_running_or_stopped) {
    let bot_state_carousel10 = document.getElementById('bot_state_carousel10')
    let circle1_carousel10 = document.getElementById('circle1_carousel10')
    let circle2_carousel10 = document.getElementById('circle2_carousel10')
    let circle3_carousel10 = document.getElementById('circle3_carousel10')

    if (circle1_carousel10.classList.contains("buy_signal_carousel10")) {
        circle1_carousel10.classList.remove('buy_signal_carousel10')
    }
    if (circle2_carousel10.classList.contains('circle_shadow_carousel10')) {
        circle2_carousel10.classList.remove('circle_shadow_carousel10')
    }
    if (circle2_carousel10.classList.contains('add_color_carousel10')) {
        circle2_carousel10.classList.remove('add_color_carousel10')
    }
    if (circle3_carousel10.classList.contains('add_color_carousel10')) {
        circle3_carousel10.classList.remove('add_color_carousel10')
    }
    if (progressBar1_carousel10_symbol_vol100_1s.classList.contains("prog1_carousel10")) {
        progressBar1_carousel10_symbol_vol100_1s.classList.remove('prog1_carousel10')
    }
    if (progressBar2_carousel10_symbol_vol100_1s.classList.contains("prog2_carousel10")) {
        progressBar2_carousel10_symbol_vol100_1s.classList.remove('prog2_carousel10')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel10.textContent = 'Bot is running'
        circle1_carousel10.classList.add('buy_signal_carousel10')
        setTimeout(fillProgressBar1_symbol_vol100_1s, 1000);
    } else {
        bot_state_carousel10.textContent = 'Bot has stopped'
        circle1_carousel10.classList.remove('buy_signal_carousel10')
    }

}

function start_trade_ref_symbol_vol100_1s(buy_price_ref) {
    if (attempting_buy2_carousel10_symbol_vol100_1s.classList.contains("attempting_buy2_show_carousel10")) {
        attempting_buy2_carousel10_symbol_vol100_1s.classList.remove("attempting_buy2_show_carousel10")
    }
    if (buy_succeded2_carousel10_symbol_vol100_1s.classList.contains("buy_succeded2_show_carousel10")) {
        buy_succeded2_carousel10_symbol_vol100_1s.classList.remove("buy_succeded2_show_carousel10")
    }
    if (contract_close2_carousel10_symbol_vol100_1s.classList.contains("contract_close2_show_carousel10")) {
        contract_close2_carousel10_symbol_vol100_1s.classList.remove("contract_close2_show_carousel10")
    }
    attempting_buy2_carousel10_symbol_vol100_1s.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2_carousel10_symbol_vol100_1s.classList.add('attempting_buy2_show_carousel10')
}


function set_middle_trade1_symbol_vol100_1s(bot_is_running_or_stopped) {
    let bot_state_carousel10 = document.getElementById('bot_state_carousel10')
    let circle1_carousel10 = document.getElementById('circle1_carousel10')
    let circle2_carousel10 = document.getElementById('circle2_carousel10')
    circle1_carousel10.classList.remove('buy_signal_carousel10')
    circle1_carousel10.classList.add('add_color_carousel10')

    function timmimg_shadow() {
        circle2_carousel10.classList.add('circle_shadow_carousel10')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel10.textContent = 'Bot is running'
        circle2_carousel10.classList.add('add_color_carousel10')
        setTimeout(timmimg_shadow, 1500);
    } else {
        bot_state_carousel10.textContent = 'Bot has stopped'
        circle2_carousel10.classList.remove('circle_shadow_carousel10_carousel10')
        circle2_carousel10.classList.remove('add-color_carousel10')
    }
}

function middle_trade_ref_symbol_vol100_1s(buy_ref) {
    buy_succeded2_carousel10_symbol_vol100_1s.textContent = `ID: ${buy_ref}`
    buy_succeded2_carousel10_symbol_vol100_1s.classList.add('buy_succeded2_show_carousel10')
}

function set_end_trade1_symbol_vol100_1s(bot_is_running_or_stopped) {
    let bot_state_carousel10 = document.getElementById('bot_state_carousel10')
    let circle2_carousel10 = document.getElementById('circle2_carousel10')
    let circle3_carousel10 = document.getElementById('circle3_carousel10')

    function timmimg_color() {
        circle3_carousel10.classList.add('add_color_carousel10')
    }
    if (circle2_carousel10.classList.contains('circle_shadow_carousel10')) {
        circle2_carousel10.classList.remove('circle_shadow_carousel10')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel10.textContent = 'Bot is running'
        setTimeout(fillProgressBar2_symbol_vol100_1s, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state_carousel10.textContent = 'Bot has stopped'
        circle3_carousel10.classList.remove('add_color_carousel10')
    }
}
function end_trade_ref_symbol_vol100_1s(sell_ref) {
    contract_close2_carousel10_symbol_vol100_1s.textContent = `ID: ${sell_ref}`
    contract_close2_carousel10_symbol_vol100_1s.classList.add('contract_close2_show_carousel10')
}

let proposal_open_contract2_symbol_vol100_1s = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})

const proposalOpenContractResponse2_symbol_vol100_1s = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol100_1s, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {
        
        open_proposal_actions2_symbol_vol100_1s(data)
    }
};

const getProposalOpenContract12_symbol_vol100_1s = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol100_1s);
    proposal_open_contract2_symbol_vol100_1s()
};

const getProposalOpenContract22_symbol_vol100_1s = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_vol100_1s);
};

const unsubscribeProposalOpenContract2_symbol_vol100_1s = () => {
    connection.removeEventListener('message', proposalOpenContractResponse2_symbol_vol100_1s, false);
};

function run_open_contract_proposal2_symbol_vol100_1s() {
    if (subscription_to_open_contract_symbol_vol100_1s == true) {
        getProposalOpenContract12_symbol_vol100_1s()
    } else {
        getProposalOpenContract22_symbol_vol100_1s()
    }
    subscription_to_open_contract_symbol_vol100_1s = false
}

function generateUniqueCode_symbol_vol100_1s(buy) {
    return buy.buy.contract_id;
}

let martingale_store_symbol_vol100_1s = [1.1, 11.1, 123.4, 1371.1, 15593.5]
let martingale_count_symbol_vol100_1s = 0
let initial_stake_symbol_vol100_1s = true
let contract_id2_symbol_vol100_1s = null
let wonEncountered_symbol_vol100_1s = false;

async function buy_bot_symbol_vol100_1s(martingale, current_number) {
    const slider = document.getElementById('slide_trade_result_carousel10').style.display = 'flex';

    last_digit_prediction_or_barrier_symbol_vol100_1s = parseInt(current_number);
    let contract_text_local_st = localStorage.getItem('contract_text_local_st')
    let contract_text_cookie = getCookie('contract_text_cookie')

    if (martingale == 'true' && contract_status2_symbol_vol100_1s == 'lost') {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol100_1s += 1
            stake_amount_symbol_vol100_1s = martingale_store_symbol_vol100_1s[martingale_count_symbol_vol100_1s]
        } else {
            stake_amount_symbol_vol100_1s = stake_amount_symbol_vol100_1s * 10.1
        }
    } else if (initial_stake_symbol_vol100_1s = true || (martingale == 'true' && contract_status2_symbol_vol100_1s == 'won')) {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_vol100_1s = 0
            stake_amount_symbol_vol100_1s = martingale_store_symbol_vol100_1s[martingale_count_symbol_vol100_1s]
        } else {
            stake_amount_symbol_vol100_1s = stake_amount_default_symbol_vol100_1s
        }
    } else {
        stake_amount_symbol_vol100_1s = stake_amount_default_symbol_vol100_1s
    }


    wonEncountered_symbol_vol100_1s = false
    before_trade_symbol_vol100_1s();
    allProposalOpenContract2_symbol_vol100_1s.length = 0;
    unsubscribeProposalOpenContract2_symbol_vol100_1s()

    try {
        await order_propose_symbol_vol100_1s(api, stake_amount_symbol_vol100_1s, last_digit_prediction_or_barrier_symbol_vol100_1s, stake_or_payout_symbol_vol100_1s, contract_symbol_vol100_1s, currency_symbol_vol100_1s, duration_amount_symbol_vol100_1s, duration_unit_symbol_vol100_1s, symbol100_1s_symbol_vol100_1s);

        let buy = await api.buy({
            "buy": String(proposal_id_symbol_vol100_1s),
            "price": parseFloat(stake_amount_symbol_vol100_1s)
        });

        contract_id2_symbol_vol100_1s = generateUniqueCode_symbol_vol100_1s(buy)

        run_open_contract_proposal2_symbol_vol100_1s()
        initial_stake_symbol_vol100_1s = false

    } catch (error) {
        console.error('Error during trade:', error);
    }
}

async function append_result_symbol_vol100_1s(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status) {

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

    const tbody_carousel10 = document.getElementById('tbody1_carousel10');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel10 = document.createElement('tr');
            row_carousel10.id = `bot_carousel10${item.id}`;

            const td1_carousel10 = document.createElement('td');
            td1_carousel10.textContent = item.id;
            td1_carousel10.id = `td1_carousel10${item.id}`;
            row_carousel10.appendChild(td1_carousel10);

            const td2_carousel10 = document.createElement('td');
            td2_carousel10.textContent = item.timestamp;
            td2_carousel10.id = `td2_carousel10${item.id}`;
            row_carousel10.appendChild(td2_carousel10);

            const td3_carousel10 = document.createElement('td');
            td3_carousel10.textContent = item.reference;
            td3_carousel10.id = `td3_carousel10${item.id}`;
            row_carousel10.appendChild(td3_carousel10);

            const td4_carousel10 = document.createElement('td');
            td4_carousel10.textContent = item.tradeType;
            td4_carousel10.id = `td4_carousel10${item.id}`;
            row_carousel10.appendChild(td4_carousel10);

            const td5_carousel10 = document.createElement('td');
            td5_carousel10.textContent = item.entrySpot;
            td5_carousel10.id = `td5_carousel10${item.id}`;
            row_carousel10.appendChild(td5_carousel10);

            const td6_carousel10 = document.createElement('td');
            td6_carousel10.textContent = item.exitSpot;
            td6_carousel10.id = `td6_carousel10${item.id}`;
            row_carousel10.appendChild(td6_carousel10);

            const td7_carousel10 = document.createElement('td');
            td7_carousel10.textContent = item.buyPrice;
            td7_carousel10.id = `td7_carousel10${item.id}`;
            row_carousel10.appendChild(td7_carousel10);

            const td8_carousel10 = document.createElement('td');
            td8_carousel10.textContent = item.profitLoss;
            td8_carousel10.id = `td8_carousel10${item.id}`;
            row_carousel10.appendChild(td8_carousel10);

            const td9_carousel10 = document.createElement('td');
            td9_carousel10.textContent = item.status;
            td9_carousel10.id = `td9_carousel10${item.id}`;
            row_carousel10.appendChild(td9_carousel10);

            if (tbody_carousel10.firstChild) {
                tbody_carousel10.insertBefore(row_carousel10, tbody_carousel10.firstChild);
            } else {
                tbody_carousel10.appendChild(row_carousel10);
            }
        });
    }
    appendRows(backendData)
}

let log_timestamp_current_symbol_vol100_1s = null
let log_buy_timestamp_bot_symbol_vol100_1s = null
let log_sell_timestamp_bot_symbol_vol100_1s = null
let log_message10_symbol_vol100_1s = null
let log_message9_symbol_vol100_1s = null
let log_message8_symbol_vol100_1s = null
let log_message7_symbol_vol100_1s = null
let log_message6_symbol_vol100_1s = null
let log_message5_symbol_vol100_1s = null
let log_message4_symbol_vol100_1s = null
let log_message3_symbol_vol100_1s = null
let log_message2_symbol_vol100_1s = null
let log_message1_symbol_vol100_1s = null
let log_message_curr_symbol_vol100_1s = null
let log_message_curr_tick_symbol_vol100_1s = null
let log_message_last_digit_symbol_vol100_1s = null
let log_message_entry_tick_symbol_vol100_1s = null
let appended_symbol_vol100_1s = true
let log_id_symbol_vol100_1s = 0

function format_log_current_time_symbol_vol100_1s() {
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

async function bot_log_symbol_vol100_1s(last_ten_tick, last_nine_tick, last_eight_tick, last_seven_tick, last_six_tick, last_five_tick, last_four_tick, last_three_tick, last_two_tick, last_one_tick, current_tick, current_tick_full) {

    const backendData = [
        {
            log_message10_symbol_vol100_1s: last_ten_tick,
            log_message9_symbol_vol100_1s: last_nine_tick,
            log_message8_symbol_vol100_1s: last_eight_tick,
            log_message7_symbol_vol100_1s: last_seven_tick,
            log_message6_symbol_vol100_1s: last_six_tick,
            log_message5_symbol_vol100_1s: last_five_tick,
            log_message4_symbol_vol100_1s: last_four_tick,
            log_message3_symbol_vol100_1s: last_three_tick,
            log_message2_symbol_vol100_1s: last_two_tick,
            log_message1_symbol_vol100_1s: last_one_tick,
            log_message_curr_symbol_vol100_1s: current_tick,
            log_message_curr_tick_symbol_vol100_1s: current_tick_full,
        },
    ];

    const log_tbody_carousel10 = document.getElementById('log_tbody1_carousel10');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel10 = document.createElement('tr');
            row_carousel10.id = `log_bot_carousel10${log_id_symbol_vol100_1s}`;

            const td1_carousel10 = document.createElement('td');
            td1_carousel10.textContent = log_timestamp_current_symbol_vol100_1s;
            td1_carousel10.id = `log_td1_carousel10${log_id_symbol_vol100_1s}`;
            td1_carousel10.classList.add('lod_td1_carousel10')
            row_carousel10.appendChild(td1_carousel10);

            const td2_carousel10 = document.createElement('td');

            if (log_message10_symbol_vol100_1s == null) {
                log_message10_symbol_vol100_1s = ''
            }
            if (log_message9_symbol_vol100_1s == null) {
                log_message9_symbol_vol100_1s = ''
            }
            if (log_message8_symbol_vol100_1s == null) {
                log_message8_symbol_vol100_1s = ''
            }
            if (log_message7_symbol_vol100_1s == null) {
                log_message7_symbol_vol100_1s = ''
            }
            if (log_message6_symbol_vol100_1s == null) {
                log_message6_symbol_vol100_1s = ''
            }
            if (log_message5_symbol_vol100_1s == null) {
                log_message5_symbol_vol100_1s = ''
            }

            if (log_message4_symbol_vol100_1s == null) {
                log_message4_symbol_vol100_1s = ''
            }

            if (log_message3_symbol_vol100_1s == null) {
                log_message3_symbol_vol100_1s = ''
            }

            if (log_message2_symbol_vol100_1s == null) {
                log_message2_symbol_vol100_1s = ''
            }

            if (log_message1_symbol_vol100_1s == null) {
                log_message1_symbol_vol100_1s = ''
            }

            if (log_message_curr_symbol_vol100_1s == null) {
                log_message_curr_symbol_vol100_1s = ''
            }

            td2_carousel10.textContent = `last ten ticks:  ${item.log_message10_symbol_vol100_1s} ${item.log_message9_symbol_vol100_1s} ${item.log_message8_symbol_vol100_1s} ${item.log_message7_symbol_vol100_1s} ${item.log_message6_symbol_vol100_1s} ${item.log_message5_symbol_vol100_1s} ${item.log_message4_symbol_vol100_1s} ${item.log_message3_symbol_vol100_1s} ${item.log_message2_symbol_vol100_1s} ${item.log_message1_symbol_vol100_1s}          current tick ${item.log_message_curr_symbol_vol100_1s}    ${item.log_message_curr_tick_symbol_vol100_1s}`;

            td2_carousel10.style.whiteSpace = 'pre'
            td2_carousel10.id = `log_td2_carousel10${log_id_symbol_vol100_1s}`;
            td2_carousel10.classList.add('lod_td2_carousel10')
            row_carousel10.appendChild(td2_carousel10);

            const td3_carousel10 = document.createElement('td');
            td3_carousel10.textContent = 'this is the text'
            td3_carousel10.style.whiteSpace = 'pre'
            td3_carousel10.id = `log_td3_carousel10${log_id_symbol_vol100_1s}`;
            td3_carousel10.classList.add('lod_td3_carousel10')
            row_carousel10.appendChild(td3_carousel10);

            if (log_tbody_carousel10.firstChild) {
                log_tbody_carousel10.insertBefore(row_carousel10, log_tbody_carousel10.firstChild);
                appended_symbol_vol100_1s = true
            } else {
                log_tbody_carousel10.appendChild(row_carousel10);
                appended_symbol_vol100_1s = true
            }
        });
    }
    appendRows(backendData)
}

async function bot_log_end_symbol_vol100_1s(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td_carousel10 = document.getElementById(`log_td3_carousel10${log_id_symbol_vol100_1s}`)

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

    log_buy_timestamp_bot_symbol_vol100_1s = formate_log_date(bot_buy_time_stamp)
    log_sell_timestamp_bot_symbol_vol100_1s = formate_log_date(bot_sell_time_stamp)

    if (target_td_carousel10) {
        target_td_carousel10.textContent = `buy_time:  ${log_buy_timestamp_bot_symbol_vol100_1s}        sell_time:  ${log_sell_timestamp_bot_symbol_vol100_1s}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

        log_id_symbol_vol100_1s += 1
    } else {
        
    }
}

let first_instance_symbol_vol100_1s = true

async function startBot_symbol_vol100_1s(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber) {
    bot_is_running_or_stopped_symbol_vol100_1s = true;
    log_timestamp_current_symbol_vol100_1s = format_log_current_time_symbol_vol100_1s()
    set_start_trade1_symbol_vol100_1s(bot_is_running_or_stopped_symbol_vol100_1s);
    bot_id_symbol_vol100_1s += 1;
    firstContractReceived_symbol_vol100_1s = false;
    end_slide_symbol_vol100_1s = true;
    bot_entry_spot_symbol_vol100_1s = '';
    bot_exit_spot_symbol_vol100_1s = '';
    bot_profit_loss_symbol_vol100_1s = '';
    bot_status_symbol_vol100_1s = 'pending';
    bot_log_symbol_vol100_1s(lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
    await buy_bot_symbol_vol100_1s(martingale, currentRandom);
    first_instance_symbol_vol100_1s = false
}

let bot_state_carousel10_symbol_vol100_1s = "stop_bot"
let all_bot_start_stop1_symbol_vol100_1s = null
let all_bot_start_stop1_cookie_symbol_vol100_1s = null
let buttonContainer_carousel10_symbol_vol100_1s = document.querySelector('.click_change_carousel10');

function togglePlayPause_symbol_vol100_1s() {
    var play_button_carousel10 = document.getElementById('play_button_carousel10');
    var pause_button_carousel10 = document.getElementById('pause_button_carousel10');
    if (play_button_carousel10) {
        bot_state_carousel10_symbol_vol100_1s = "stop_bot"
        play_button_carousel10.parentNode.removeChild(play_button_carousel10);

        var pause_button_carousel10 = document.createElement('div');
        pause_button_carousel10.id = 'pause_button_carousel10';
        pause_button_carousel10.className = 'pause_button_carousel10';
        pause_button_carousel10.innerHTML = '&#10074;&#10074;';
        buttonContainer_carousel10_symbol_vol100_1s.appendChild(pause_button_carousel10);
        document.getElementById('bot_state_carousel10').textContent = 'Bot has stopped';
    } else if (pause_button_carousel10) {
        bot_state_carousel10_symbol_vol100_1s = "start_bot"
        pause_button_carousel10.parentNode.removeChild(pause_button_carousel10);

        var play_button_carousel10 = document.createElement('div');
        play_button_carousel10.id = 'play_button_carousel10';
        play_button_carousel10.className = 'play_button_carousel10';
        play_button_carousel10.innerHTML = '&#9654;';
        buttonContainer_carousel10_symbol_vol100_1s.appendChild(play_button_carousel10);
        document.getElementById('bot_state_carousel10').textContent = 'Bot is running';
    }
}
buttonContainer_carousel10_symbol_vol100_1s.addEventListener('click', togglePlayPause_symbol_vol100_1s);
function getRandom_symbol_vol100_1s(strNumber) {
    return randomNumber_symbol_vol100_1s = strNumber.charAt(strNumber.length - 1);
}

let currentvol_carousel10_symbol_vol100_1s = null
let currentvol2_carousel10_symbol_vol100_1s = null
let martingale_active_carousel10_symbol_vol100_1s = null
let bot_set_carousel10_symbol_vol100_1s = null
let set_bot_jump_carousel10_symbol_vol100_1s = null
let initial_set_jump_symbol_vol100_1s = true
let currentvol_carousel10_cookie_symbol_vol100_1s = null
let currentvol2_carousel10_cookie_symbol_vol100_1s = null
let martingale_active_carousel10_cookie_symbol_vol100_1s = null
let bot_set_carousel10_cookie_symbol_vol100_1s = null
let set_bot_jump_carousel10_cookie_symbol_vol100_1s = null
let initial_set_jump_cookie_symbol_vol100_1s = true
let currentRandom_symbol_vol100_1s = null
let lastNumber1_symbol_vol100_1s = currentRandom_symbol_vol100_1s;
let lastNumber2_symbol_vol100_1s = lastNumber1_symbol_vol100_1s;
let lastNumber3_symbol_vol100_1s = lastNumber2_symbol_vol100_1s;
let lastNumber4_symbol_vol100_1s = lastNumber3_symbol_vol100_1s;
let lastNumber5_symbol_vol100_1s = lastNumber4_symbol_vol100_1s;
let lastNumber6_symbol_vol100_1s = lastNumber5_symbol_vol100_1s;
let lastNumber7_symbol_vol100_1s = lastNumber6_symbol_vol100_1s;
let lastNumber8_symbol_vol100_1s = lastNumber7_symbol_vol100_1s;
let lastNumber9_symbol_vol100_1s = lastNumber8_symbol_vol100_1s;
let lastNumber10_symbol_vol100_1s = lastNumber9_symbol_vol100_1s;

const tickResponse_symbol_vol100_1s = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', tickResponse_symbol_vol100_1s, false);
        await api.disconnect();
    }

    function getRandom1(strNumber1) {
        return randomNumber_symbol_vol100_1s = strNumber1.charAt(strNumber1.length - 1);
    }

    lastNumber10_symbol_vol100_1s = lastNumber9_symbol_vol100_1s
    lastNumber9_symbol_vol100_1s = lastNumber8_symbol_vol100_1s
    lastNumber8_symbol_vol100_1s = lastNumber7_symbol_vol100_1s
    lastNumber7_symbol_vol100_1s = lastNumber6_symbol_vol100_1s
    lastNumber6_symbol_vol100_1s = lastNumber5_symbol_vol100_1s
    lastNumber5_symbol_vol100_1s = lastNumber4_symbol_vol100_1s
    lastNumber4_symbol_vol100_1s = lastNumber3_symbol_vol100_1s
    lastNumber3_symbol_vol100_1s = lastNumber2_symbol_vol100_1s
    lastNumber2_symbol_vol100_1s = lastNumber1_symbol_vol100_1s
    lastNumber1_symbol_vol100_1s = currentRandom_symbol_vol100_1s

    if (data.msg_type === 'tick') {
        let bot_start_stop = bot_state_carousel10_symbol_vol100_1s

        subscriptionId_symbol_vol100_1s = data.subscription.id;
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

        if(data.echo_req.ticks === "1HZ100V"){
            strNumber_symbol_vol100_1s = formatToTwoDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_vol100_1s = getRandom1(strNumber_symbol_vol100_1s);
        }

        stream100_1s_carousel10_symbol_vol100_1s.textContent = strNumber_symbol_vol100_1s
        all_bot_start_stop1_symbol_vol100_1s = localStorage.getItem('all_bot_start_stop1')
        all_bot_start_stop1_cookie_symbol_vol100_1s = getCookie('all_bot_start_stop1')
        currentvol_carousel10_symbol_vol100_1s = localStorage.getItem('bot_current_vol1_carousel10');
        currentvol2_carousel10_symbol_vol100_1s = localStorage.getItem('bot_current_vol2_carousel10');
        martingale_active_carousel10_symbol_vol100_1s = localStorage.getItem('martingale_carousel10');
        bot_set_carousel10_symbol_vol100_1s = localStorage.getItem('bot_set_carousel10');
        set_bot_jump_carousel10_symbol_vol100_1s = localStorage.getItem('bot_jump_carousel10')
        currentvol_carousel10_cookie_symbol_vol100_1s = getCookie('bot_current_vol1_carousel10');
        currentvol2_carousel10_cookie_symbol_vol100_1s = getCookie('bot_current_vol2_carousel10');
        martingale_active_carousel10_cookie_symbol_vol100_1s = getCookie('martingale_carousel10');
        bot_set_carousel10_cookie_symbol_vol100_1s = getCookie('bot_set_carousel10');
        set_bot_jump_carousel10_cookie_symbol_vol100_1s = getCookie('bot_jump_carousel10')

        if (((set_bot_jump_carousel10_symbol_vol100_1s && set_bot_jump_carousel10_symbol_vol100_1s > 0) && contract_status2_symbol_vol100_1s == 'lost') || ((set_bot_jump_carousel10_cookie_symbol_vol100_1s && set_bot_jump_carousel10_cookie_symbol_vol100_1s > 0) && contract_status2_symbol_vol100_1s == 'lost')) {
            bot_set_carousel10_symbol_vol100_1s = (parseInt(bot_set_carousel10_symbol_vol100_1s) + parseInt(set_bot_jump_carousel10_symbol_vol100_1s)) !== null ? (parseInt(bot_set_carousel10_symbol_vol100_1s) + parseInt(set_bot_jump_carousel10_symbol_vol100_1s)) : (parseInt(bot_set_carousel10_cookie_symbol_vol100_1s) + parseInt(set_bot_jump_carousel10_cookie_symbol_vol100_1s))
            contract_status2_symbol_vol100_1s == 'reset'
        } else if ((initial_set_jump_symbol_vol100_1s == true || (contract_status2_symbol_vol100_1s == 'won' && (set_bot_jump_carousel10_symbol_vol100_1s && set_bot_jump_carousel10_symbol_vol100_1s > 0))) || (initial_set_jump_cookie_symbol_vol100_1s == true || (contract_status2_symbol_vol100_1s == 'won' && (set_bot_jump_carousel10_cookie_symbol_vol100_1s && set_bot_jump_carousel10_cookie_symbol_vol100_1s > 0)))) {
            bot_set_carousel10_symbol_vol100_1s = localStorage.getItem('bot_set_carousel10') ? localStorage.getItem('bot_set_carousel10') : getCookie('bot_set_carousel10');
            initial_set_jump_symbol_vol100_1s = false
            initial_set_jump_cookie_symbol_vol100_1s = false
        } else {
            bot_set_carousel10_symbol_vol100_1s = localStorage.getItem('bot_set_carousel10') ? localStorage.getItem('bot_set_carousel10') : getCookie("bot_set_carousel10");
        }
        let bot_count = bot_id_symbol_vol100_1s

        const tag5_carousel10 = document.getElementById(`td5_carousel10${bot_count}`);
        const tag6_carousel10 = document.getElementById(`td6_carousel10${bot_count}`);
        const tag8_carousel10 = document.getElementById(`td8_carousel10${bot_count}`);
        const tag9_carousel10 = document.getElementById(`td9_carousel10${bot_count}`);

        if (currentRandom_symbol_vol100_1s !== null && lastNumber1_symbol_vol100_1s !== null && lastNumber2_symbol_vol100_1s !== null) {
            if ((tag5_carousel10 && tag6_carousel10 && tag8_carousel10 && tag9_carousel10) || first_instance_symbol_vol100_1s == true) {
                if (currentRandom_symbol_vol100_1s && (first_instance_symbol_vol100_1s == true || (tag5_carousel10.textContent.trim() !== '' && tag6_carousel10.textContent.trim() !== '' && tag8_carousel10.textContent.trim() !== '' && tag9_carousel10.textContent.trim() !== '')) && (bot_set_carousel10_symbol_vol100_1s == 1 || bot_set_carousel10_cookie_symbol_vol100_1s == 1)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100_1s == 'start_bots') && ((currentvol_carousel10_symbol_vol100_1s == 5 && currentvol2_carousel10_symbol_vol100_1s == 5) || (currentvol_carousel10_cookie_symbol_vol100_1s == 5 && currentvol2_carousel10_cookie_symbol_vol100_1s == 5))) {
                        startBot_symbol_vol100_1s(martingale_active_carousel10_cookie_symbol_vol100_1s, lastNumber10_symbol_vol100_1s, lastNumber9_symbol_vol100_1s, lastNumber8_symbol_vol100_1s, lastNumber7_symbol_vol100_1s, lastNumber6_symbol_vol100_1s, lastNumber5_symbol_vol100_1s, lastNumber4_symbol_vol100_1s, lastNumber3_symbol_vol100_1s, lastNumber2_symbol_vol100_1s, lastNumber1_symbol_vol100_1s, currentRandom_symbol_vol100_1s, strNumber_symbol_vol100_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100_1s !== null && lastNumber1_symbol_vol100_1s !== null && lastNumber2_symbol_vol100_1s !== null) {
            if ((tag5_carousel10 && tag6_carousel10 && tag8_carousel10 && tag9_carousel10) || first_instance_symbol_vol100_1s == true) {
                if (lastNumber1_symbol_vol100_1s == currentRandom_symbol_vol100_1s && (first_instance_symbol_vol100_1s == true || (tag5_carousel10.textContent.trim() !== '' && tag6_carousel10.textContent.trim() !== '' && tag8_carousel10.textContent.trim() !== '' && tag9_carousel10.textContent.trim() !== '')) && (bot_set_carousel10_symbol_vol100_1s == 2 || bot_set_carousel10_cookie_symbol_vol100_1s == 2)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100_1s == 'start_bots') && ((currentvol_carousel10_symbol_vol100_1s == 5 && currentvol2_carousel10_symbol_vol100_1s == 5) || (currentvol_carousel10_cookie_symbol_vol100_1s == 5 && currentvol2_carousel10_cookie_symbol_vol100_1s == 5))) {
                        startBot_symbol_vol100_1s(martingale_active_carousel10_cookie_symbol_vol100_1s, lastNumber10_symbol_vol100_1s, lastNumber9_symbol_vol100_1s, lastNumber8_symbol_vol100_1s, lastNumber7_symbol_vol100_1s, lastNumber6_symbol_vol100_1s, lastNumber5_symbol_vol100_1s, lastNumber4_symbol_vol100_1s, lastNumber3_symbol_vol100_1s, lastNumber2_symbol_vol100_1s, lastNumber1_symbol_vol100_1s, currentRandom_symbol_vol100_1s, strNumber_symbol_vol100_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100_1s !== null && lastNumber1_symbol_vol100_1s !== null && lastNumber2_symbol_vol100_1s !== null) {
            if ((tag5_carousel10 && tag6_carousel10 && tag8_carousel10 && tag9_carousel10) || first_instance_symbol_vol100_1s == true) {
                if (lastNumber2_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber1_symbol_vol100_1s == currentRandom_symbol_vol100_1s && (first_instance_symbol_vol100_1s == true || (tag5_carousel10.textContent.trim() !== '' && tag6_carousel10.textContent.trim() !== '' && tag8_carousel10.textContent.trim() !== '' && tag9_carousel10.textContent.trim() !== '')) && (bot_set_carousel10_symbol_vol100_1s == 3 || bot_set_carousel10_cookie_symbol_vol100_1s == 3)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100_1s == 'start_bots') && ((currentvol_carousel10_symbol_vol100_1s == 5 && currentvol2_carousel10_symbol_vol100_1s == 5) || (currentvol_carousel10_cookie_symbol_vol100_1s == 5 && currentvol2_carousel10_cookie_symbol_vol100_1s == 5))) {
                        startBot_symbol_vol100_1s(martingale_active_carousel10_cookie_symbol_vol100_1s, lastNumber10_symbol_vol100_1s, lastNumber9_symbol_vol100_1s, lastNumber8_symbol_vol100_1s, lastNumber7_symbol_vol100_1s, lastNumber6_symbol_vol100_1s, lastNumber5_symbol_vol100_1s, lastNumber4_symbol_vol100_1s, lastNumber3_symbol_vol100_1s, lastNumber2_symbol_vol100_1s, lastNumber1_symbol_vol100_1s, currentRandom_symbol_vol100_1s, strNumber_symbol_vol100_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100_1s !== null && lastNumber1_symbol_vol100_1s !== null && lastNumber2_symbol_vol100_1s !== null) {
            if ((tag5_carousel10 && tag6_carousel10 && tag8_carousel10 && tag9_carousel10) || first_instance_symbol_vol100_1s == true) {
                if (lastNumber3_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber2_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber1_symbol_vol100_1s == currentRandom_symbol_vol100_1s && (first_instance_symbol_vol100_1s == true || (tag5_carousel10.textContent.trim() !== '' && tag6_carousel10.textContent.trim() !== '' && tag8_carousel10.textContent.trim() !== '' && tag9_carousel10.textContent.trim() !== '')) && (bot_set_carousel10_symbol_vol100_1s == 4 || bot_set_carousel10_cookie_symbol_vol100_1s == 4)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100_1s == 'start_bots') && ((currentvol_carousel10_symbol_vol100_1s == 5 && currentvol2_carousel10_symbol_vol100_1s == 5) || (currentvol_carousel10_cookie_symbol_vol100_1s == 5 && currentvol2_carousel10_cookie_symbol_vol100_1s == 5))) {
                        startBot_symbol_vol100_1s(martingale_active_carousel10_cookie_symbol_vol100_1s, lastNumber10_symbol_vol100_1s, lastNumber9_symbol_vol100_1s, lastNumber8_symbol_vol100_1s, lastNumber7_symbol_vol100_1s, lastNumber6_symbol_vol100_1s, lastNumber5_symbol_vol100_1s, lastNumber4_symbol_vol100_1s, lastNumber3_symbol_vol100_1s, lastNumber2_symbol_vol100_1s, lastNumber1_symbol_vol100_1s, currentRandom_symbol_vol100_1s, strNumber_symbol_vol100_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100_1s !== null && lastNumber1_symbol_vol100_1s !== null && lastNumber2_symbol_vol100_1s !== null) {
            if ((tag5_carousel10 && tag6_carousel10 && tag8_carousel10 && tag9_carousel10) || first_instance_symbol_vol100_1s == true) {
                if (lastNumber4_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber3_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber2_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber1_symbol_vol100_1s == currentRandom_symbol_vol100_1s && (first_instance_symbol_vol100_1s == true || (tag5_carousel10.textContent.trim() !== '' && tag6_carousel10.textContent.trim() !== '' && tag8_carousel10.textContent.trim() !== '' && tag9_carousel10.textContent.trim() !== '')) && (bot_set_carousel10_symbol_vol100_1s == 5 || bot_set_carousel10_cookie_symbol_vol100_1s == 5)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100_1s == 'start_bots') && ((currentvol_carousel10_symbol_vol100_1s == 5 && currentvol2_carousel10_symbol_vol100_1s == 5) || (currentvol_carousel10_cookie_symbol_vol100_1s == 5 && currentvol2_carousel10_cookie_symbol_vol100_1s == 5))) {
                        startBot_symbol_vol100_1s(martingale_active_carousel10_cookie_symbol_vol100_1s, lastNumber10_symbol_vol100_1s, lastNumber9_symbol_vol100_1s, lastNumber8_symbol_vol100_1s, lastNumber7_symbol_vol100_1s, lastNumber6_symbol_vol100_1s, lastNumber5_symbol_vol100_1s, lastNumber4_symbol_vol100_1s, lastNumber3_symbol_vol100_1s, lastNumber2_symbol_vol100_1s, lastNumber1_symbol_vol100_1s, currentRandom_symbol_vol100_1s, strNumber_symbol_vol100_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100_1s !== null && lastNumber1_symbol_vol100_1s !== null && lastNumber2_symbol_vol100_1s !== null) {
            if ((tag5_carousel10 && tag6_carousel10 && tag8_carousel10 && tag9_carousel10) || first_instance_symbol_vol100_1s == true) {
                if (lastNumber5_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber4_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber3_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber2_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber1_symbol_vol100_1s == currentRandom_symbol_vol100_1s && (first_instance_symbol_vol100_1s == true || (tag5_carousel10.textContent.trim() !== '' && tag6_carousel10.textContent.trim() !== '' && tag8_carousel10.textContent.trim() !== '' && tag9_carousel10.textContent.trim() !== '')) && (bot_set_carousel10_symbol_vol100_1s == 6 || bot_set_carousel10_cookie_symbol_vol100_1s == 6)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100_1s == 'start_bots') && ((currentvol_carousel10_symbol_vol100_1s == 5 && currentvol2_carousel10_symbol_vol100_1s == 5) || (currentvol_carousel10_cookie_symbol_vol100_1s == 5 && currentvol2_carousel10_cookie_symbol_vol100_1s == 5))) {
                        startBot_symbol_vol100_1s(martingale_active_carousel10_cookie_symbol_vol100_1s, lastNumber10_symbol_vol100_1s, lastNumber9_symbol_vol100_1s, lastNumber8_symbol_vol100_1s, lastNumber7_symbol_vol100_1s, lastNumber6_symbol_vol100_1s, lastNumber5_symbol_vol100_1s, lastNumber4_symbol_vol100_1s, lastNumber3_symbol_vol100_1s, lastNumber2_symbol_vol100_1s, lastNumber1_symbol_vol100_1s, currentRandom_symbol_vol100_1s, strNumber_symbol_vol100_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        
        if (currentRandom_symbol_vol100_1s !== null && lastNumber1_symbol_vol100_1s !== null && lastNumber2_symbol_vol100_1s !== null) {
            if ((tag5_carousel10 && tag6_carousel10 && tag8_carousel10 && tag9_carousel10) || first_instance_symbol_vol100_1s == true) {
                if (lastNumber6_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber5_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber4_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber3_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber2_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber1_symbol_vol100_1s == currentRandom_symbol_vol100_1s && (first_instance_symbol_vol100_1s == true || (tag5_carousel10.textContent.trim() !== '' && tag6_carousel10.textContent.trim() !== '' && tag8_carousel10.textContent.trim() !== '' && tag9_carousel10.textContent.trim() !== '')) && (bot_set_carousel10_symbol_vol100_1s == 7 || bot_set_carousel10_cookie_symbol_vol100_1s == 7)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100_1s == 'start_bots') && ((currentvol_carousel10_symbol_vol100_1s == 5 && currentvol2_carousel10_symbol_vol100_1s == 5) || (currentvol_carousel10_cookie_symbol_vol100_1s == 5 && currentvol2_carousel10_cookie_symbol_vol100_1s == 5))) {
                        startBot_symbol_vol100_1s(martingale_active_carousel10_cookie_symbol_vol100_1s, lastNumber10_symbol_vol100_1s, lastNumber9_symbol_vol100_1s, lastNumber8_symbol_vol100_1s, lastNumber7_symbol_vol100_1s, lastNumber6_symbol_vol100_1s, lastNumber5_symbol_vol100_1s, lastNumber4_symbol_vol100_1s, lastNumber3_symbol_vol100_1s, lastNumber2_symbol_vol100_1s, lastNumber1_symbol_vol100_1s, currentRandom_symbol_vol100_1s, strNumber_symbol_vol100_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100_1s !== null && lastNumber1_symbol_vol100_1s !== null && lastNumber2_symbol_vol100_1s !== null) {
            if ((tag5_carousel10 && tag6_carousel10 && tag8_carousel10 && tag9_carousel10) || first_instance_symbol_vol100_1s == true) {
                if (lastNumber7_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber6_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber5_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber4_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber3_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber2_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber1_symbol_vol100_1s == currentRandom_symbol_vol100_1s && (first_instance_symbol_vol100_1s == true || (tag5_carousel10.textContent.trim() !== '' && tag6_carousel10.textContent.trim() !== '' && tag8_carousel10.textContent.trim() !== '' && tag9_carousel10.textContent.trim() !== '')) && (bot_set_carousel10_symbol_vol100_1s == 8 || bot_set_carousel10_cookie_symbol_vol100_1s == 8)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100_1s == 'start_bots') && ((currentvol_carousel10_symbol_vol100_1s == 5 && currentvol2_carousel10_symbol_vol100_1s == 5) || (currentvol_carousel10_cookie_symbol_vol100_1s == 5 && currentvol2_carousel10_cookie_symbol_vol100_1s == 5))) {
                        startBot_symbol_vol100_1s(martingale_active_carousel10_cookie_symbol_vol100_1s, lastNumber10_symbol_vol100_1s, lastNumber9_symbol_vol100_1s, lastNumber8_symbol_vol100_1s, lastNumber7_symbol_vol100_1s, lastNumber6_symbol_vol100_1s, lastNumber5_symbol_vol100_1s, lastNumber4_symbol_vol100_1s, lastNumber3_symbol_vol100_1s, lastNumber2_symbol_vol100_1s, lastNumber1_symbol_vol100_1s, currentRandom_symbol_vol100_1s, strNumber_symbol_vol100_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100_1s !== null && lastNumber1_symbol_vol100_1s !== null && lastNumber2_symbol_vol100_1s !== null) {
            if ((tag5_carousel10 && tag6_carousel10 && tag8_carousel10 && tag9_carousel10) || first_instance_symbol_vol100_1s == true) {
                if (lastNumber8_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber7_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber6_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber5_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber4_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber3_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber2_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber1_symbol_vol100_1s == currentRandom_symbol_vol100_1s && (first_instance_symbol_vol100_1s == true || (tag5_carousel10.textContent.trim() !== '' && tag6_carousel10.textContent.trim() !== '' && tag8_carousel10.textContent.trim() !== '' && tag9_carousel10.textContent.trim() !== '')) && (bot_set_carousel10_symbol_vol100_1s == 9 || bot_set_carousel10_cookie_symbol_vol100_1s == 9)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100_1s == 'start_bots') && ((currentvol_carousel10_symbol_vol100_1s == 5 && currentvol2_carousel10_symbol_vol100_1s == 5) || (currentvol_carousel10_cookie_symbol_vol100_1s == 5 && currentvol2_carousel10_cookie_symbol_vol100_1s == 5))) {
                        startBot_symbol_vol100_1s(martingale_active_carousel10_cookie_symbol_vol100_1s, lastNumber10_symbol_vol100_1s, lastNumber9_symbol_vol100_1s, lastNumber8_symbol_vol100_1s, lastNumber7_symbol_vol100_1s, lastNumber6_symbol_vol100_1s, lastNumber5_symbol_vol100_1s, lastNumber4_symbol_vol100_1s, lastNumber3_symbol_vol100_1s, lastNumber2_symbol_vol100_1s, lastNumber1_symbol_vol100_1s, currentRandom_symbol_vol100_1s, strNumber_symbol_vol100_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }

        if (currentRandom_symbol_vol100_1s !== null && lastNumber1_symbol_vol100_1s !== null && lastNumber2_symbol_vol100_1s !== null) {
            if ((tag5_carousel10 && tag6_carousel10 && tag8_carousel10 && tag9_carousel10) || first_instance_symbol_vol100_1s == true) {
                if (lastNumber9_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber8_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber7_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber6_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber5_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber4_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber3_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber2_symbol_vol100_1s == currentRandom_symbol_vol100_1s && lastNumber1_symbol_vol100_1s == currentRandom_symbol_vol100_1s && (first_instance_symbol_vol100_1s == true || (tag5_carousel10.textContent.trim() !== '' && tag6_carousel10.textContent.trim() !== '' && tag8_carousel10.textContent.trim() !== '' && tag9_carousel10.textContent.trim() !== '')) && (bot_set_carousel10_symbol_vol100_1s == 10 || bot_set_carousel10_cookie_symbol_vol100_1s == 10)) {
                    if (bot_start_stop == 'start_bot' || (all_bot_start_stop1_symbol_vol100_1s == 'start_bots' || all_bot_start_stop1_cookie_symbol_vol100_1s == 'start_bots') && ((currentvol_carousel10_symbol_vol100_1s == 5 && currentvol2_carousel10_symbol_vol100_1s == 5) || (currentvol_carousel10_cookie_symbol_vol100_1s == 5 && currentvol2_carousel10_cookie_symbol_vol100_1s == 5))) {
                        startBot_symbol_vol100_1s(martingale_active_carousel10_cookie_symbol_vol100_1s, lastNumber10_symbol_vol100_1s, lastNumber9_symbol_vol100_1s, lastNumber8_symbol_vol100_1s, lastNumber7_symbol_vol100_1s, lastNumber6_symbol_vol100_1s, lastNumber5_symbol_vol100_1s, lastNumber4_symbol_vol100_1s, lastNumber3_symbol_vol100_1s, lastNumber2_symbol_vol100_1s, lastNumber1_symbol_vol100_1s, currentRandom_symbol_vol100_1s, strNumber_symbol_vol100_1s)
                    } else if (bot_start_stop == 'stop_bot') {
                        
                    } else {
                        
                    }
                } else {

                }
            } else {
                
            }
        }
    }
};

window.addEventListener('load', function () {
    duration_amount_cookie_symbol_vol100_1s = getCookie('duration_amount_cookie');
    stake_amount_cookie_symbol_vol100_1s = getCookie('stake_amount_cookie');
    duration_unit_cookie_symbol_vol100_1s = getCookie('duration_unit_cookie');
    symbol_vol_cookie_symbol_vol100_1s = getCookie('symbol_vol_cookie');
    currency_cookie_symbol_vol100_1s = getCookie('ActiveCurrency')
    contract_text_cookie_symbol_vol100_1s = getCookie('contract_text_cookie');
    stake_or_payout_cookie_symbol_vol100_1s = getCookie('stake_or_payout_cookie')
    last_digit_prediction_cookie_symbol_vol100_1s = getCookie('last_digit_prediction_cookie')
    stake_amount_default_symbol_vol100_1s = getCookie('stake_amount_default')

    if (last_digit_prediction_cookie_symbol_vol100_1s) {
        last_digit_prediction_or_barrier_symbol_vol100_1s = last_digit_prediction_or_barrier_symbol_vol100_1s
    } else {
        let numericValue = last_digit_input_symbol_vol100_1s.value
        last_digit_prediction_or_barrier_symbol_vol100_1s = numericValue
    }
    if (symbol_vol_cookie_symbol_vol100_1s) {
        symbol_vol_symbol_vol100_1s = symbol_vol_cookie_symbol_vol100_1s;
    } else {
        symbol_vol_symbol_vol100_1s = "1HZ100V";
    }
    if (duration_unit_cookie_symbol_vol100_1s) {
        duration_unit_symbol_vol100_1s = duration_unit_cookie_symbol_vol100_1s;
    } else {
        duration_unit_symbol_vol100_1s = "t";
    }
    if (duration_amount_cookie_symbol_vol100_1s) {
        duration_amount_symbol_vol100_1s = parseInt(duration_amount_cookie_symbol_vol100_1s, 10);
    } else {
        duration_amount_symbol_vol100_1s = 1;
    }
    if (stake_amount_cookie_symbol_vol100_1s) {
        stake_amount_symbol_vol100_1s = parseFloat(stake_amount_cookie_symbol_vol100_1s);
    } else {
        stake_amount_symbol_vol100_1s = 10;
    }
    if (stake_amount_default_symbol_vol100_1s) {
        stake_amount_default_symbol_vol100_1s = parseFloat(stake_amount_default_symbol_vol100_1s);
    } else {
        stake_amount_default_symbol_vol100_1s = 10;
    }
    if (currency_cookie_symbol_vol100_1s) {
        currency_symbol_vol100_1s = currency_cookie_symbol_vol100_1s;
    } else {
        currency_symbol_vol100_1s = "USD";
    }
    if (contract_text_cookie_symbol_vol100_1s) {
        contract_symbol_vol100_1s = contract_text_cookie_symbol_vol100_1s;
    } else {
        contract_symbol_vol100_1s = "Matches/Differs";
    }
    if (stake_or_payout_cookie_symbol_vol100_1s) {
        stake_or_payout_symbol_vol100_1s = stake_or_payout_cookie_symbol_vol100_1s;
    } else {
        stake_or_payout_symbol_vol100_1s = "stake";
    }

    initializeApi(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response_symbol_General) {
            clearInterval(getAwaitingResponses)
        } else {
            
        }
    }, 2000);
});

async function order_propose_symbol_vol100_1s(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
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
                // let tooltip = document.getElementById('tooltiptext25');
                // tooltip.textContent = data.error.message;
                // tooltip.classList.add('tooltiptext10')
                
                connection.removeEventListener('message', proposalResponse, false);
                await api.disconnect();
                reject(new Error('Error in proposal'));
            } else if (data.msg_type === 'proposal') {

                proposal_id_symbol_vol100_1s = data.proposal.id;

                // let calc = displayProposalResult2(data, data.proposal.display_value, data.proposal.payout);

                // def_price_up_symbol_vol100_1s = data.proposal.display_value;
                // def_payout_up_symbol_vol100_1s = data.proposal.payout;
                // def_profit_up_symbol_vol100_1s = calc.NetProfit;
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

const unsubscribeProposal_symbol_vol100_1s = () => {
    connection.removeEventListener('message', proposalResponse_symbol_vol100_1s, false);
};

function convertTimestampTo12HourTime_symbol_vol100_1s(timestamp) {
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

function formatNumberAndBoldLastDecimal_symbol_vol100_1s(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart) {
        let lastDecimalDigit = decimalPart.slice(-1);
        decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
    } 
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}

let contract_status_html_symbol_vol100_1s = document.getElementById('contract_status_carousel10') 
let end_tic_off_trade_symbol_vol100_1s = document.getElementById('end_tic_off_trade_carousel10')            
let price_after_trade_figure_amount_symbol_vol100_1s = document.getElementById('price_after_trade_figure_amount_carousel10') 
let profit_figure_amount_symbol_vol100_1s = document.getElementById('profit_figure_amount_carousel10') 
let buy_price_figure_amount_symbol_vol100_1s = document.getElementById('buy_price_figure_amount_carousel10') 
let result_currency_html_symbol_vol100_1s = document.querySelectorAll('.result_currency')
let transaction_refrence_figure_symbol_vol100_1s = document.getElementById('transaction_refrence_figure_carousel10') 
let trade_start_time_symbol_vol100_1s = document.getElementById('trade_start_time_carousel10') 
let buy_price_text_symbol_vol100_1s = document.getElementById('buy_price_text_carousel10') 
let price_after_trade_text_symbol_vol100_1s = document.getElementById('price_after_trade_text_carousel10') 
let profit_text_symbol_vol100_1s = document.getElementById('profit_text_carousel10') 
let durr_amount_prop_count_symbol_vol100_1s = document.getElementById('durr_amount_prop_count_carousel10') 
let durr_amount_prop_symbol_vol100_1s = document.getElementById('durr_amount_prop_carousel10') 
let countdown_trade_symbol_vol100_1s = 0
let countdown_trade2_symbol_vol100_1s = 0

function before_trade_symbol_vol100_1s() {
    countdown_trade_symbol_vol100_1s = 0
    let allDigits = document.querySelectorAll('.ldgs_carousel10')
    let buy_price_text = document.getElementById('buy_price_text_carousel10')
    let price_after_trade_text = document.getElementById('price_after_trade_text_carousel10')
    let profit_text = document.getElementById('profit_text_carousel10')
    let durr_amount_prop_count = document.getElementById('durr_amount_prop_count_carousel10')
    let slide_trade_result = document.getElementById('slide_trade_result_carousel10')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel10')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel10')
    let profit_figure_amount = document.getElementById('profit_figure_amount_carousel10')
    contract_status_html_symbol_vol100_1s.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count.textContent = countdown_trade_symbol_vol100_1s
    durr_amount_prop.textContent = duration_amount_symbol_vol100_1s
    buy_price_figure_amount.textContent = def_price_up_symbol_vol100_1s
    price_after_trade_figure_amount.textContent = def_payout_up_symbol_vol100_1s
    profit_figure_amount.textContent = def_profit_up_symbol_vol100_1s

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
            if (digit.textContent != (last_digit_prediction_or_barrier_symbol_vol100_1s)) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound == 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier_symbol_vol100_1s) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}

function after_trade_symbol_vol100_1s(status, endDigit) {
    let slide_trade_result = document.getElementById('slide_trade_result_carousel10')
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

function formate_date_symbol_vol100_1s(datein) {
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

let allProposalOpenContract_symbol_vol100_1s = []
let longcodeProp_symbol_vol100_1s = null
let contract_ids_buy_symbol_vol100_1s = null
let contract_status_symbol_vol100_1s = null
let last_tick_symbol_vol100_1s = null
let profit_or_loss_symbol_vol100_1s = null
let final_price_symbol_vol100_1s = null
let payout_result_symbol_vol100_1s = null
let buy_price_symbol_vol100_1s = null
let contract_currency_symbol_vol100_1s = null
let time_of_trade_symbol_vol100_1s = null
let every_tick_symbol_vol100_1s = null
let contract_id_symbol_vol100_1s = null

let allProposalOpenContract2_symbol_vol100_1s = []
let longcodeProp2_symbol_vol100_1s = null
let contract_ids_buy2_symbol_vol100_1s = null
let contract_ids_sell2_symbol_vol100_1s = null
let contract_status2_symbol_vol100_1s = null
let last_tick2_symbol_vol100_1s = null
let profit_or_loss2_symbol_vol100_1s = null
let final_price2_symbol_vol100_1s = null
let payout_result2_symbol_vol100_1s = null
let buy_price2_symbol_vol100_1s = null
let contract_currency2_symbol_vol100_1s = null
let time_of_trade2_symbol_vol100_1s = null
let every_tick2_symbol_vol100_1s = null

function open_proposal_actions2_symbol_vol100_1s(data) {
    if (data.proposal_open_contract.contract_id == contract_id2_symbol_vol100_1s) {
        set_middle_trade1_symbol_vol100_1s(bot_is_running_or_stopped_symbol_vol100_1s)
        bot_buy_start_time_symbol_vol100_1s = formate_date_symbol_vol100_1s(data.proposal_open_contract.date_start)
        bot_buy_transaction_id_symbol_vol100_1s = data.proposal_open_contract.transaction_ids.buy
        bot_trade_type_symbol_vol100_1s = data.proposal_open_contract.contract_type
        bot_buy_price_symbol_vol100_1s = data.proposal_open_contract.buy_price
        bot_status_symbol_vol100_1s = data.proposal_open_contract.status == 'open' ? 'Pending' : data.proposal_open_contract.status
        bot_contract_id_symbol_vol100_1s = data.proposal_open_contract.contract_id
        start_trade_ref_symbol_vol100_1s(bot_buy_price_symbol_vol100_1s)

        if (firstContractReceived_symbol_vol100_1s == false) {
            append_result_symbol_vol100_1s(bot_id_symbol_vol100_1s, bot_buy_start_time_symbol_vol100_1s, bot_buy_transaction_id_symbol_vol100_1s, bot_trade_type_symbol_vol100_1s, bot_buy_price_symbol_vol100_1s, bot_status_symbol_vol100_1s);
            firstContractReceived_symbol_vol100_1s = true
        }

        longcodeProp2_symbol_vol100_1s = data.proposal_open_contract.longcode
        allProposalOpenContract2_symbol_vol100_1s.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information_carousel10').textContent = longcodeProp2_symbol_vol100_1s

        if (allProposalOpenContract2_symbol_vol100_1s.length > 0 && allProposalOpenContract2_symbol_vol100_1s[allProposalOpenContract2_symbol_vol100_1s.length - 1].length > 0) {
            let lastSubArray2 = allProposalOpenContract2_symbol_vol100_1s[allProposalOpenContract2_symbol_vol100_1s.length - 1];
            let lastElementOfLastSubArray2 = lastSubArray2[lastSubArray2.length - 1].tick_display_value;
            let numberString2 = lastElementOfLastSubArray2.toString();
            let lastCharacter2 = numberString2[numberString2.length - 1];
            handleNewNumber_symbol_vol100_1s(lastCharacter2);
            every_tick2_symbol_vol100_1s = lastElementOfLastSubArray2
            end_tic_off_trade_symbol_vol100_1s.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol100_1s(every_tick2_symbol_vol100_1s);
            if (countdown_trade2_symbol_vol100_1s < duration_amount_symbol_vol100_1s) {
                countdown_trade2_symbol_vol100_1s += 1
                durr_amount_prop_count_symbol_vol100_1s.textContent = countdown_trade_symbol_vol100_1s
            }
            if (data.proposal_open_contract.is_expired == 1 && end_slide_symbol_vol100_1s == true) {
                set_end_trade1_symbol_vol100_1s(bot_is_running_or_stopped_symbol_vol100_1s)
                end_slide_symbol_vol100_1s = false
            }
            contract_ids_buy2_symbol_vol100_1s = data.proposal_open_contract.transaction_ids.buy
            if (contract_ids_buy2_symbol_vol100_1s) {
                middle_trade_ref_symbol_vol100_1s(contract_ids_buy2_symbol_vol100_1s)
            }
            if (data.proposal_open_contract.status !== 'open') {
                let circle2_carousel10 = document.getElementById('circle2_carousel10')
                circle2_carousel10.classList.remove('circle_shadow_carousel10')
                bot_status_symbol_vol100_1s = data.proposal_open_contract.status
                bot_entry_spot_symbol_vol100_1s = data.proposal_open_contract.entry_tick
                bot_exit_spot_symbol_vol100_1s = data.proposal_open_contract.exit_tick
                bot_profit_loss_symbol_vol100_1s = data.proposal_open_contract.profit
                contract_status2_symbol_vol100_1s = data.proposal_open_contract.status
                last_tick2_symbol_vol100_1s = lastElementOfLastSubArray2
                profit_or_loss2_symbol_vol100_1s = data.proposal_open_contract.profit
                payout_result2_symbol_vol100_1s = data.proposal_open_contract.payout
                buy_price2_symbol_vol100_1s = data.proposal_open_contract.buy_price
                contract_currency2_symbol_vol100_1s = data.proposal_open_contract.currency
                contract_ids_buy2_symbol_vol100_1s = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2_symbol_vol100_1s = data.proposal_open_contract.expiry_time
                contract_ids_sell2_symbol_vol100_1s = data.proposal_open_contract.transaction_ids.sell

                end_trade_ref_symbol_vol100_1s(contract_ids_sell2_symbol_vol100_1s)
                if (profit_or_loss2_symbol_vol100_1s < 0) {
                    final_price2_symbol_vol100_1s = '0.00'
                } else if (profit_or_loss2_symbol_vol100_1s > 0) {
                    final_price2_symbol_vol100_1s = payout_result2_symbol_vol100_1s
                } else {
                    
                }
                if (contract_status2_symbol_vol100_1s == 'won' && !wonEncountered_symbol_vol100_1s) {
                    bot_total_wins_symbol_vol100_1s = bot_total_wins_symbol_vol100_1s + 1;
                    bot_total_profit_loss_symbol_vol100_1s = bot_total_profit_loss_symbol_vol100_1s + profit_or_loss2_symbol_vol100_1s;
                    bot_total_stake_symbol_vol100_1s = bot_total_stake_symbol_vol100_1s + buy_price2_symbol_vol100_1s
                    bot_total_runs_symbol_vol100_1s = bot_total_runs_symbol_vol100_1s + 1;
                    bot_total_payout_symbol_vol100_1s = bot_total_payout_symbol_vol100_1s + payout_result2_symbol_vol100_1s;
                    add_after_trade_symbol_vol100_1s(bot_id_symbol_vol100_1s, contract_id2_symbol_vol100_1s, bot_contract_id_symbol_vol100_1s, bot_entry_spot_symbol_vol100_1s, bot_exit_spot_symbol_vol100_1s, bot_profit_loss_symbol_vol100_1s, bot_status_symbol_vol100_1s, bot_total_runs_symbol_vol100_1s, bot_total_stake_symbol_vol100_1s, bot_total_payout_symbol_vol100_1s, bot_total_wins_symbol_vol100_1s, bot_total_loss_symbol_vol100_1s, bot_total_profit_loss_symbol_vol100_1s);
                    wonEncountered_symbol_vol100_1s = true;
                } else if (contract_status2_symbol_vol100_1s == 'lost') {
                    bot_total_loss_symbol_vol100_1s = bot_total_loss_symbol_vol100_1s + 1;
                    bot_total_profit_loss_symbol_vol100_1s = bot_total_profit_loss_symbol_vol100_1s + profit_or_loss2_symbol_vol100_1s;
                    bot_total_stake_symbol_vol100_1s = bot_total_stake_symbol_vol100_1s + buy_price2_symbol_vol100_1s
                    bot_total_runs_symbol_vol100_1s = bot_total_runs_symbol_vol100_1s + 1;
                    bot_total_payout_symbol_vol100_1s = bot_total_payout_symbol_vol100_1s - payout_result2_symbol_vol100_1s;
                    add_after_trade_symbol_vol100_1s(bot_id_symbol_vol100_1s, contract_id2_symbol_vol100_1s, bot_contract_id_symbol_vol100_1s, bot_entry_spot_symbol_vol100_1s, bot_exit_spot_symbol_vol100_1s, bot_profit_loss_symbol_vol100_1s, bot_status_symbol_vol100_1s, bot_total_runs_symbol_vol100_1s, bot_total_stake_symbol_vol100_1s, bot_total_payout_symbol_vol100_1s, bot_total_wins_symbol_vol100_1s, bot_total_loss_symbol_vol100_1s, bot_total_profit_loss_symbol_vol100_1s);
                    wonEncountered_symbol_vol100_1s = true;
                }
                if (contract_status2_symbol_vol100_1s == 'won' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol100_1s = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol100_1s = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol100_1s = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol100_1s = every_tick2_symbol_vol100_1s
                    bot_log_end_symbol_vol100_1s(log_buy_timestamp_bot_symbol_vol100_1s, log_sell_timestamp_bot_symbol_vol100_1s, log_message_entry_tick_symbol_vol100_1s, log_message_last_digit_symbol_vol100_1s)
                } else if (contract_status2_symbol_vol100_1s == 'lost' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_vol100_1s = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_vol100_1s = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_vol100_1s = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_vol100_1s = every_tick2_symbol_vol100_1s
                    bot_log_end_symbol_vol100_1s(log_buy_timestamp_bot_symbol_vol100_1s, log_sell_timestamp_bot_symbol_vol100_1s, log_message_entry_tick_symbol_vol100_1s, log_message_last_digit_symbol_vol100_1s)
                }
                contract_status_html_symbol_vol100_1s.textContent = contract_status2_symbol_vol100_1s
                end_tic_off_trade_symbol_vol100_1s.innerHTML = formatNumberAndBoldLastDecimal_symbol_vol100_1s(last_tick2_symbol_vol100_1s);
                profit_figure_amount_symbol_vol100_1s.textContent = profit_or_loss2_symbol_vol100_1s
                price_after_trade_figure_amount_symbol_vol100_1s.textContent = final_price2_symbol_vol100_1s
                buy_price_figure_amount_symbol_vol100_1s.textContent = buy_price2_symbol_vol100_1s
                result_currency_html_symbol_vol100_1s.textContent = contract_currency2_symbol_vol100_1s
                transaction_refrence_figure_symbol_vol100_1s.textContent = contract_ids_buy2_symbol_vol100_1s
                trade_start_time_symbol_vol100_1s.innerHTML = convertTimestampTo12HourTime_symbol_vol100_1s(time_of_trade2_symbol_vol100_1s)
                buy_price_text_symbol_vol100_1s.textContent = 'Buy price'
                price_after_trade_text_symbol_vol100_1s.textContent = 'Final price'
                profit_text_symbol_vol100_1s.textContent = 'Profit'
                after_trade_symbol_vol100_1s(contract_status2_symbol_vol100_1s, lastCharacter2)
            } else {
            }
        } else {
            
        }
    }
}

let currentPosition1_symbol_vol100_1s = 0;
function moveSlider_symbol_vol100_1s(number) {
    const slider = document.getElementById('slide_trade_result_carousel10');
    const container = document.getElementById('last_digit_responds_carousel10');
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

    const target = document.querySelector(`.last_digits_carousel10.${stringnumber}`);
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
        currentPosition1_symbol_vol100_1s = newPosition;
    }
}

function handleNewNumber_symbol_vol100_1s(randomNumber) {
    const newPosition = randomNumber;
    moveSlider_symbol_vol100_1s(newPosition);
}

let log_close_and_info_cont_symbol_vol100_1s = document.getElementById('log_close_and_info_cont_carousel10');
let bot_log_show_cont_symbol_vol100_1s = document.getElementById('bot_log_show_cont_carousel10');
let bot_details_symbol_vol100_1s = document.getElementById('bot_details_carousel10');
let bot_details2_symbol_vol100_1s = document.getElementById('bot_details2_carousel10');

if (bot_log_show_cont_symbol_vol100_1s && bot_details_symbol_vol100_1s) {
    bot_details_symbol_vol100_1s.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol100_1s.style.display == 'none') {
            bot_log_show_cont_symbol_vol100_1s.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol100_1s.style.display = 'none'
        }
    });

    log_close_and_info_cont_symbol_vol100_1s.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_log_show_cont_symbol_vol100_1s.style.display == 'block') {
            bot_log_show_cont_symbol_vol100_1s.style.display = 'none'
        } else {
            bot_log_show_cont_symbol_vol100_1s.style.display = 'block'
        }
    });
} else {
    console.error('One or more elements are not found');
}

if (bot_log_show_cont_symbol_vol100_1s && bot_details_symbol_vol100_1s) {
    bot_details2_symbol_vol100_1s.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_vol100_1s.style.display == 'none') {
            bot_log_show_cont_symbol_vol100_1s.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_vol100_1s.style.display = 'none'
        }
    });
} else {
    console.error('One or more elements are not found');
}

let martingale_symbol_vol100_1s = document.getElementById('martingale_carousel10');
let flash_info_cont_symbol_vol100_1s = document.getElementById('flash_info_cont_carousel10');
let tick_check_amount_symbol_vol100_1s = document.getElementById('tick_check_amount_carousel10');
let settings_cont_symbol_vol100_1s = document.getElementById('settings_cont_carousel10');
let tick_check_symbol_vol100_1s = document.getElementById('tick_check_carousel10');
let martingale_jump_symbol_vol100_1s = document.getElementById('martingale_jump_carousel10');
let increase_jump_symbol_vol100_1s = document.getElementById('increase_jump_carousel10');
let reduce_jump_symbol_vol100_1s = document.getElementById('reduce_jump_carousel10');
let bot_settings_symbol_vol100_1s = document.getElementById('bot_settings_carousel10');
let bot_settings2_symbol_vol100_1s = document.getElementById('bot_settings2_carousel10');
const volumes2_symbol_vol100_1s = document.querySelectorAll(".slide_vol2_carousel10");
let tick_check2_symbol_vol100_1s = document.getElementById('tick_check2_carousel10');
let martingale2_symbol_vol100_1s = document.getElementById('martingale2_carousel10');
let martingale_jump2_symbol_vol100_1s = document.getElementById('martingale_jump2_carousel10');
let martingale_jump_set_symbol_vol100_1s = document.getElementById('martingale_jump_set_carousel10');
const last_digit_settings_symbol_vol100_1s = document.querySelectorAll(".last_digit_settings_carousel10");

martingale_symbol_vol100_1s.addEventListener('click', function () {
    if (martingale_symbol_vol100_1s.classList.contains('active_mat')) {
        martingale_symbol_vol100_1s.classList.remove('active_mat');
        martingale2_symbol_vol100_1s.classList.remove('active_mat');
        setCookie('martingale_carousel10', 'false')
        localStorage.setItem('martingale_carousel10', 'false')
        flash_info_cont_symbol_vol100_1s.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol100_1s.style.color = '#fff'
    } else {
        martingale_symbol_vol100_1s.classList.add('active_mat');
        martingale2_symbol_vol100_1s.classList.add('active_mat');
        setCookie('martingale_carousel10', 'true')
        localStorage.setItem('martingale_carousel10', 'true')
        flash_info_cont_symbol_vol100_1s.textContent = 'martigale is active'
        tick_check_amount_symbol_vol100_1s.style.color = '#fff'
    }
    if (flash_info_cont_symbol_vol100_1s.classList.contains('show_flash_info_carousel10')) {
        flash_info_cont_symbol_vol100_1s.classList.remove('show_flash_info_carousel10')
        setTimeout(() => {
            flash_info_cont_symbol_vol100_1s.classList.remove('show_flash_info_carousel10')
        }, 5000)
    } else {
        flash_info_cont_symbol_vol100_1s.classList.add('show_flash_info_carousel10')
        setTimeout(() => {
            flash_info_cont_symbol_vol100_1s.classList.remove('show_flash_info_carousel10')
        }, 5000)
    }
});

function bot_set_default_symbol_vol100_1s() {
    let curr_bot_set = localStorage.getItem('bot_set_carousel10');
    if (curr_bot_set === null) {
        setTimeout(bot_set_default_symbol_vol100_1s, 100);
        return;
    }
    tick_check_symbol_vol100_1s.textContent = curr_bot_set;
    tick_check2_symbol_vol100_1s.textContent = curr_bot_set;
}

bot_set_default_symbol_vol100_1s();

bot_settings_symbol_vol100_1s.addEventListener('click', function () {
    if (settings_cont_symbol_vol100_1s.style.display == 'none') {
        settings_cont_symbol_vol100_1s.style.display = 'block'
    } else {
        settings_cont_symbol_vol100_1s.style.display = 'none'
    }
});

document.addEventListener('click', (event) => {
    if (!bot_settings_symbol_vol100_1s.contains(event.target) && !settings_cont_symbol_vol100_1s.contains(event.target) && !martingale_jump_set_symbol_vol100_1s.contains(event.target)) {
        settings_cont_symbol_vol100_1s.style.display = 'none';
    }
});

last_digit_settings_symbol_vol100_1s.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.querySelector('.bot_text_carousel10').textContent.trim().replace(/\s+/g, ' ');
        if (bot_set == 'Last one digit bot') {
            localStorage.setItem('bot_set_carousel10', '1')
            setCookie('bot_set_carousel10', '1')
            localStorage.setItem('bot_set_store_carousel10', '1')
            setCookie('bot_set_store_carousel10', '1')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            localStorage.setItem('bot_set_carousel10', '2')
            setCookie('bot_set_carousel10', '2')
            localStorage.setItem('bot_set_store_carousel10', '2')
            setCookie('bot_set_store_carousel10', '2')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            localStorage.setItem('bot_set_carousel10', '3')
            setCookie('bot_set_carousel10', '3')
            localStorage.setItem('bot_set_store_carousel10', '3')
            setCookie('bot_set_store_carousel10', '3')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            localStorage.setItem('bot_set_carousel10', '4')
            setCookie('bot_set_carousel10', '4')
            localStorage.setItem('bot_set_store_carousel10', '4')
            setCookie('bot_set_store_carousel10', '4')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            localStorage.setItem('bot_set_carousel10', '5')
            setCookie('bot_set_carousel10', '5')
            localStorage.setItem('bot_set_store_carousel10', '5')
            setCookie('bot_set_store_carousel10', '5')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            localStorage.setItem('bot_set_carousel10', '6')
            setCookie('bot_set_carousel10', '6')
            localStorage.setItem('bot_set_store_carousel10', '6')
            setCookie('bot_set_store_carousel10', '6')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            localStorage.setItem('bot_set_carousel10', '7')
            setCookie('bot_set_carousel10', '7')
            localStorage.setItem('bot_set_store_carousel10', '7')
            setCookie('bot_set_store_carousel10', '7')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            localStorage.setItem('bot_set_carousel10', '8')
            setCookie('bot_set_carousel10', '8')
            localStorage.setItem('bot_set_store_carousel10', '8')
            setCookie('bot_set_store_carousel10', '8')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            localStorage.setItem('bot_set_carousel10', '9')
            setCookie('bot_set_carousel10', '9')
            localStorage.setItem('bot_set_store_carousel10', '9')
            setCookie('bot_set_store_carousel10', '9')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            localStorage.setItem('bot_set_carousel10', '10')
            setCookie('bot_set_carousel10', '10')
            localStorage.setItem('bot_set_store_carousel10', '10')
            setCookie('bot_set_store_carousel10', '10')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_vol100_1s()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});


let jump_count_symbol_vol100_1s = 0

function jump_count_set_symbol_vol100_1s() {
    localStorage.setItem('bot_jump_carousel10', jump_count_symbol_vol100_1s)
    setCookie('bot_jump_carousel10', jump_count_symbol_vol100_1s)
}

function jump_count_set2_symbol_vol100_1s() {
    let stored_jump_count = localStorage.getItem('bot_jump_carousel10') ? localStorage.getItem('bot_jump_carousel10') : getCookie('bot_jump_carousel10');
    jump_count_symbol_vol100_1s = stored_jump_count !== null ? parseInt(stored_jump_count, 10) : 0;

    if (isNaN(jump_count_symbol_vol100_1s)) {
        jump_count_symbol_vol100_1s = 0;
    }
    if (jump_count_symbol_vol100_1s > 0) {
        martingale_jump_symbol_vol100_1s.textContent = 'j' + jump_count_symbol_vol100_1s
        martingale_jump2_symbol_vol100_1s.textContent = 'j' + jump_count_symbol_vol100_1s
    } else {
        martingale_jump_symbol_vol100_1s.textContent = ''
        martingale_jump2_symbol_vol100_1s.textContent = ''
    }
}

jump_count_set2_symbol_vol100_1s()

increase_jump_symbol_vol100_1s.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count_symbol_vol100_1s = jump_count_symbol_vol100_1s + 1
    jump_count_set_symbol_vol100_1s()
    jump_count_set2_symbol_vol100_1s()
})

reduce_jump_symbol_vol100_1s.addEventListener('click', (event) => {
    event.preventDefault()
    if (jump_count_symbol_vol100_1s > 0) {
        jump_count_symbol_vol100_1s = jump_count_symbol_vol100_1s - 1
        jump_count_set_symbol_vol100_1s()
        jump_count_set2_symbol_vol100_1s()
    }
})

bot_settings2_symbol_vol100_1s.addEventListener('click', function () {
    if (settings_cont_symbol_vol100_1s.style.display == 'none') {
        settings_cont_symbol_vol100_1s.style.display = 'block'
    } else {
        settings_cont_symbol_vol100_1s.style.display = 'none'
    }
});

martingale2_symbol_vol100_1s.addEventListener('click', function () {
    if (martingale2_symbol_vol100_1s.classList.contains('active_mat')) {
        martingale2_symbol_vol100_1s.classList.remove('active_mat');
        martingale_symbol_vol100_1s.classList.remove('active_mat');
        setCookie('martingale_carousel10', 'false')
        localStorage.setItem('martingale_carousel10', 'false')
        flash_info_cont_symbol_vol100_1s.textContent = 'martigale is not active'
        tick_check_amount_symbol_vol100_1s.style.color = '#fff'
    } else {
        martingale2_symbol_vol100_1s.classList.add('active_mat');
        martingale_symbol_vol100_1s.classList.add('active_mat');
        setCookie('martingale_carousel10', 'true')
        localStorage.setItem('martingale_carousel10', 'true')
        flash_info_cont_symbol_vol100_1s.textContent = 'martigale is active'
        tick_check_amount_symbol_vol100_1s.style.color = '#fff'
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
        } else {s
            buy_sell_two.style.display = 'none'
            setCookie('buy_sell_two_display_cookie', false)
            localStorage.setItem('buy_sell_two_display_local_st', false)
        }
    })
}


