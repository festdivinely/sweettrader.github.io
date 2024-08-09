
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

let last_digit_input_symbol_bear = document.getElementById('last_digit_input')
let close_contract_result_container_symbol_bear = document.getElementById('close_contract_result_container_carousel16')
let buy_sell_two_symbol_bear = document.getElementById('buy_sell_two')
let trade_type_secound_symbol_bear = document.getElementById("trade_type_secound")
let attempting_buy2_carousel16_symbol_bear = document.getElementById("attempting_buy2_carousel16")
let buy_succeded2_carousel16_symbol_bear = document.getElementById("buy_succeded2_carousel16")
let contract_close2_carousel16_symbol_bear = document.getElementById("contract_close2_carousel16")
let stream_bear_carousel16_symbol_bear = document.getElementById('stream_bear_carousel16')

let last_digit_prediction_local_st_symbol_bear = null
let barrier_local_st_symbol_bear = null
let symbol_vol_text_local_st_symbol_bear = null
let contract_text_local_st_symbol_bear = null
let duration_amount_local_st_symbol_bear = null
let stake_amount_local_st_symbol_bear = null
let symbol_vol_local_st_symbol_bear = null
let duration_unit_local_st_symbol_bear = null
let last_digit_prediction_or_barrier_local_st_symbol_bear = null
let currency_local_st_symbol_bear = null
let stake_or_payout_local_st_symbol_bear = null
let proposal_id_local_st_symbol_bear = null
let last_digit_prediction_cookie_symbol_bear = null
let barrier_cookie_symbol_bear = null
let symbol_vol_text_cookie_symbol_bear = null
let contract_text_cookie_symbol_bear = null
let duration_amount_cookie_symbol_bear = null
let stake_amount_cookie_symbol_bear = null
let symbol_vol_cookie_symbol_bear = null
let duration_unit_cookie_symbol_bear = null
let last_digit_prediction_or_barrier_cookie_symbol_bear = null
let currency_cookie_symbol_bear = null
let stake_or_payout_cookie_symbol_bear = null
let proposal_id_cookie_symbol_bear = null
let stake_amount_default_symbol_bear = localStorage.getItem('stake_amount_default') || document.getElementById('stake_amount_input').value
let duration_unit_symbol_bear = null
let symbol_vol_symbol_bear = null
let duration_amount_symbol_bear = null
let stake_amount_symbol_bear = null
let last_digit_prediction_or_barrier_symbol_bear = null
let currency_symbol_bear = null
let contract_symbol_bear = null
let stake_or_payout_symbol_bear = null
let proposal_id_symbol_bear = null
let td2_account_id_carousel16_symbol_bear = document.getElementById('td2_account_id_carousel16')
let td2_no_of_runs_carousel16_symbol_bear = document.getElementById('td2_no_of_runs_carousel16')
let td2_total_stake_carousel16_symbol_bear = document.getElementById('td2_total_stake_carousel16')
let td2_total_payout_carousel16_symbol_bear = document.getElementById('td2_total_payout_carousel16')
let td2_total_wins_carousel16_symbol_bear = document.getElementById('td2_total_wins_carousel16')
let td2_total_loss_carousel16_symbol_bear = document.getElementById('td2_total_loss_carousel16')
let td2_total_profit_loss_carousel16_symbol_bear = document.getElementById('td2_total_profit_loss_carousel16')
let bot_total_runs_symbol_bear = 0
let bot_total_stake_symbol_bear = 0
let bot_total_payout_symbol_bear = 0
let bot_total_wins_symbol_bear = 0
let bot_total_loss_symbol_bear = 0
let bot_total_profit_loss_symbol_bear = 0
let randomNumber_symbol_bear = null;
let strNumber_symbol_bear = null;
let authorize_response_symbol_bear = null
let subscriptionId_symbol_bear = null
let randomNumber2_symbol_bear = null
let buy_contract_id_symbol_bear = null
let api_id_symbol_bear = null;
let api_token_symbol_bear = null;
let def_price_up_symbol_bear = null
let def_payout_up_symbol_bear = null
let def_profit_up_symbol_bear = null
let website_status_info_symbol_bear = 'initial'
let symbol_bear_symbol_bear = null
let symbol_bear_cookie_symbol_bear = null
let subscription_to_open_contract_symbol_bear = true

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
    setCookie('symbol_bear', 'RDBEAR')
    localStorage.setItem('symbol_bear', 'RDBEAR')

    symbol_bear_symbol_bear = localStorage.getItem('symbol_bear')
    symbol_bear_cookie_symbol_bear = getCookie('symbol_bear')
});

let bot_id_symbol_bear = 0
let bot_buy_start_time_symbol_bear = null
let bot_buy_transaction_id_symbol_bear = null
let bot_trade_type_symbol_bear = null
let bot_buy_price_symbol_bear = null
let bot_entry_spot_symbol_bear = null
let bot_exit_spot_symbol_bear = null
let bot_profit_loss_symbol_bear = null
let bot_status_symbol_bear = null
let firstContractReceived_symbol_bear = false;
let bot_is_running_or_stopped_symbol_bear = false
let end_slide_symbol_bear = true
let bot_contract_id_symbol_bear = null
let bot_unique_code_symbol_bear = null

async function add_after_trade_symbol_bear(bot_id, botuniqueCode, allContracts, entry_spot, exit_spot, profit_loss, status, bot_total_runs, bot_total_stake, bot_total_payout, bot_total_wins, bot_total_loss, bot_total_profit_loss) {
    const tbody1_carousel16 = document.getElementById('tbody1_carousel16');

    if (botuniqueCode == allContracts) {
        let row_carousel16 = document.getElementById(`bot_carousel16${bot_id}`);
        if (!row_carousel16) {
            console.error(`Row with data-unique-code "bot_carousel16${bot_id}" not found.`);
            return;
        }

        const entry_spot_html_carousel16 = document.getElementById(`td5_carousel16${bot_id}`);
        const exit_spot_html_carousel16 = document.getElementById(`td6_carousel16${bot_id}`);
        const profit_loss_html_carousel16 = document.getElementById(`td8_carousel16${bot_id}`);
        const status_html_carousel16 = document.getElementById(`td9_carousel16${bot_id}`);

        if (entry_spot_html_carousel16) {
            entry_spot_html_carousel16.textContent = entry_spot
        } else {
            
        }
        if (exit_spot_html_carousel16) {
            exit_spot_html_carousel16.textContent = exit_spot
        } else {
            
        }
        if (profit_loss_html_carousel16) {
            profit_loss_html_carousel16.textContent = profit_loss
            let profitLossNumber = parseFloat(profit_loss);
            if (profitLossNumber < 0) {
                profit_loss_html_carousel16.style.color = 'red';
            } else {
                profit_loss_html_carousel16.style.color = 'green';
            }
        } else {
            
        }
        if (status_html_carousel16) {
            status_html_carousel16.textContent = status
            if (status == 'won') {
                status_html_carousel16.style.color = 'green'
            } else {
                status_html_carousel16.style.color = 'red'
            }
        } else {
            
        }
        td2_no_of_runs_carousel16_symbol_bear.textContent = bot_total_runs_symbol_bear
        td2_total_stake_carousel16_symbol_bear.textContent = bot_total_stake_symbol_bear
        td2_total_payout_carousel16_symbol_bear.textContent = Number(bot_total_payout_symbol_bear.toFixed(2));
        td2_total_wins_carousel16_symbol_bear.textContent = bot_total_wins_symbol_bear
        td2_total_wins_carousel16_symbol_bear.style.color = 'green'
        td2_total_loss_carousel16_symbol_bear.textContent = bot_total_loss_symbol_bear
        td2_total_loss_carousel16_symbol_bear.style.color = 'red'
        td2_total_profit_loss_carousel16_symbol_bear.textContent = Number(bot_total_profit_loss_symbol_bear.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss_symbol_bear.toFixed(2))) < 0) {
            td2_total_profit_loss_carousel16_symbol_bear.style.color = 'red'
        } else {
            td2_total_profit_loss_carousel16_symbol_bear.style.color = 'green'
        }
    }

}

const progressBar1_carousel16_symbol_bear = document.querySelector('.progress1_carousel16');
function fillProgressBar1_symbol_bear() {
    progressBar1_carousel16_symbol_bear.classList.add('prog1_carousel16')
}

const progressBar2_carousel16_symbol_bear = document.querySelector('.progress2_carousel16');
function fillProgressBar2_symbol_bear() {
    progressBar2_carousel16_symbol_bear.classList.add('prog2_carousel16')
}

function set_start_trade1_symbol_bear(bot_is_running_or_stopped) {
    let bot_state_carousel16 = document.getElementById('bot_state_carousel16')
    let circle1_carousel16 = document.getElementById('circle1_carousel16')
    let circle2_carousel16 = document.getElementById('circle2_carousel16')
    let circle3_carousel16 = document.getElementById('circle3_carousel16')

    if (circle1_carousel16.classList.contains("buy_signal_carousel16")) {
        circle1_carousel16.classList.remove('buy_signal_carousel16')
    }
    if (circle2_carousel16.classList.contains('circle_shadow_carousel16')) {
        circle2_carousel16.classList.remove('circle_shadow_carousel16')
    }
    if (circle2_carousel16.classList.contains('add_color_carousel16')) {
        circle2_carousel16.classList.remove('add_color_carousel16')
    }
    if (circle3_carousel16.classList.contains('add_color_carousel16')) {
        circle3_carousel16.classList.remove('add_color_carousel16')
    }
    if (progressBar1_carousel16_symbol_bear.classList.contains("prog1_carousel16")) {
        progressBar1_carousel16_symbol_bear.classList.remove('prog1_carousel16')
    }
    if (progressBar2_carousel16_symbol_bear.classList.contains("prog2_carousel16")) {
        progressBar2_carousel16_symbol_bear.classList.remove('prog2_carousel16')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel16.textContent = 'Bot is running'
        circle1_carousel16.classList.add('buy_signal_carousel16')
        setTimeout(fillProgressBar1_symbol_bear, 1000);
    } else {
        bot_state_carousel16.textContent = 'Bot has stopped'
        circle1_carousel16.classList.remove('buy_signal_carousel16')
    }

}

function start_trade_ref_symbol_bear(buy_price_ref) {
    if (attempting_buy2_carousel16_symbol_bear.classList.contains("attempting_buy2_show_carousel16")) {
        attempting_buy2_carousel16_symbol_bear.classList.remove("attempting_buy2_show_carousel16")
    }
    if (buy_succeded2_carousel16_symbol_bear.classList.contains("buy_succeded2_show_carousel16")) {
        buy_succeded2_carousel16_symbol_bear.classList.remove("buy_succeded2_show_carousel16")
    }
    if (contract_close2_carousel16_symbol_bear.classList.contains("contract_close2_show_carousel16")) {
        contract_close2_carousel16_symbol_bear.classList.remove("contract_close2_show_carousel16")
    }
    attempting_buy2_carousel16_symbol_bear.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2_carousel16_symbol_bear.classList.add('attempting_buy2_show_carousel16')
}


function set_middle_trade1_symbol_bear(bot_is_running_or_stopped) {
    let bot_state_carousel16 = document.getElementById('bot_state_carousel16')
    let circle1_carousel16 = document.getElementById('circle1_carousel16')
    let circle2_carousel16 = document.getElementById('circle2_carousel16')
    circle1_carousel16.classList.remove('buy_signal_carousel16')
    circle1_carousel16.classList.add('add_color_carousel16')

    function timmimg_shadow() {
        circle2_carousel16.classList.add('circle_shadow_carousel16')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel16.textContent = 'Bot is running'
        circle2_carousel16.classList.add('add_color_carousel16')
        setTimeout(timmimg_shadow, 1500);
    } else {
        bot_state_carousel16.textContent = 'Bot has stopped'
        circle2_carousel16.classList.remove('circle_shadow_carousel16_carousel16')
        circle2_carousel16.classList.remove('add-color_carousel16')
    }
}

function middle_trade_ref_symbol_bear(buy_ref) {
    buy_succeded2_carousel16_symbol_bear.textContent = `ID: ${buy_ref}`
    buy_succeded2_carousel16_symbol_bear.classList.add('buy_succeded2_show_carousel16')
}

function set_end_trade1_symbol_bear(bot_is_running_or_stopped) {
    let bot_state_carousel16 = document.getElementById('bot_state_carousel16')
    let circle2_carousel16 = document.getElementById('circle2_carousel16')
    let circle3_carousel16 = document.getElementById('circle3_carousel16')

    function timmimg_color() {
        circle3_carousel16.classList.add('add_color_carousel16')
    }
    if (circle2_carousel16.classList.contains('circle_shadow_carousel16')) {
        circle2_carousel16.classList.remove('circle_shadow_carousel16')
    }
    if (bot_is_running_or_stopped == true) {
        bot_state_carousel16.textContent = 'Bot is running'
        setTimeout(fillProgressBar2_symbol_bear, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state_carousel16.textContent = 'Bot has stopped'
        circle3_carousel16.classList.remove('add_color_carousel16')
    }
}
function end_trade_ref_symbol_bear(sell_ref) {
    contract_close2_carousel16_symbol_bear.textContent = `ID: ${sell_ref}`
    contract_close2_carousel16_symbol_bear.classList.add('contract_close2_show_carousel16')
}

let proposal_open_contract2_symbol_bear = () => api.proposalOpenContract({
    "proposal_open_contract": 1,
    "subscribe": 1
})

const proposalOpenContractResponse2_symbol_bear = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        
        connection.removeEventListener('message', proposalOpenContractResponse2_symbol_bear, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {
        
        open_proposal_actions2_symbol_bear(data)
    }
};

const getProposalOpenContract12_symbol_bear = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_bear);
    proposal_open_contract2_symbol_bear()
};

const getProposalOpenContract22_symbol_bear = async (contract_id) => {
    connection.addEventListener('message', proposalOpenContractResponse2_symbol_bear);
};

const unsubscribeProposalOpenContract2_symbol_bear = () => {
    connection.removeEventListener('message', proposalOpenContractResponse2_symbol_bear, false);
};

function run_open_contract_proposal2_symbol_bear() {
    if (subscription_to_open_contract_symbol_bear == true) {
        getProposalOpenContract12_symbol_bear()
    } else {
        getProposalOpenContract22_symbol_bear()
    }
    subscription_to_open_contract_symbol_bear = false
}

function generateUniqueCode_symbol_bear(buy) {
    return buy.buy.contract_id;
}

let martingale_store_symbol_bear = [0.35, 3.5, 38.9, 432.3]
let martingale_count_symbol_bear = 0
let initial_stake_symbol_bear = true
let contract_id2_symbol_bear = null
let wonEncountered_symbol_bear = false;

async function buy_bot_symbol_bear(martingale, current_number) {
    const slider = document.getElementById('slide_trade_result_carousel16').style.display = 'flex';

    last_digit_prediction_or_barrier_symbol_bear = parseInt(current_number);
    let contract_text_local_st = localStorage.getItem('contract_text_local_st')
    let contract_text_cookie = getCookie('contract_text_cookie')

    if (martingale == 'true' && contract_status2_symbol_bear == 'lost') {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_bear += 1
            stake_amount_symbol_bear = martingale_store_symbol_bear[martingale_count_symbol_bear]
        } else {
            stake_amount_symbol_bear = stake_amount_symbol_bear * 10.1
        }
    } else if (initial_stake_symbol_bear = true || (martingale == 'true' && contract_status2_symbol_bear == 'won')) {
        if (contract_text_local_st && contract_text_local_st == 'Matches/Differs' || contract_text_cookie && contract_text_cookie == 'Matches/Differs') {
            martingale_count_symbol_bear = 0
            stake_amount_symbol_bear = martingale_store_symbol_bear[martingale_count_symbol_bear]
        } else {
            stake_amount_symbol_bear = stake_amount_default_symbol_bear
        }
    } else {
        stake_amount_symbol_bear = stake_amount_default_symbol_bear
    }


    wonEncountered_symbol_bear = false
    before_trade_symbol_bear();
    allProposalOpenContract2_symbol_bear.length = 0;
    unsubscribeProposalOpenContract2_symbol_bear()

    try {
        await order_propose_symbol_bear(api, stake_amount_symbol_bear, last_digit_prediction_or_barrier_symbol_bear, stake_or_payout_symbol_bear, contract_symbol_bear, currency_symbol_bear, duration_amount_symbol_bear, duration_unit_symbol_bear, symbol_bear_symbol_bear);

        let buy = await api.buy({
            "buy": String(proposal_id_symbol_bear),
            "price": parseFloat(stake_amount_symbol_bear)
        });

        contract_id2_symbol_bear = generateUniqueCode_symbol_bear(buy)

        run_open_contract_proposal2_symbol_bear()
        initial_stake_symbol_bear = false

    } catch (error) {
        console.error('Error during trade:', error);
        setTimeout(() => {
            initializeApi(message1)
        }, 5000);
    }
}

async function append_result_symbol_bear(bot_id, bot_buy_start_time, bot_buy_transaction_id, bot_trade_type, bot_buy_price, bot_status) {

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

    const tbody_carousel16 = document.getElementById('tbody1_carousel16');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel16 = document.createElement('tr');
            row_carousel16.id = `bot_carousel16${item.id}`;

            const td1_carousel16 = document.createElement('td');
            td1_carousel16.textContent = item.id;
            td1_carousel16.id = `td1_carousel16${item.id}`;
            row_carousel16.appendChild(td1_carousel16);

            const td2_carousel16 = document.createElement('td');
            td2_carousel16.textContent = item.timestamp;
            td2_carousel16.id = `td2_carousel16${item.id}`;
            row_carousel16.appendChild(td2_carousel16);

            const td3_carousel16 = document.createElement('td');
            td3_carousel16.textContent = item.reference;
            td3_carousel16.id = `td3_carousel16${item.id}`;
            row_carousel16.appendChild(td3_carousel16);

            const td4_carousel16 = document.createElement('td');
            td4_carousel16.textContent = item.tradeType;
            td4_carousel16.id = `td4_carousel16${item.id}`;
            row_carousel16.appendChild(td4_carousel16);

            const td5_carousel16 = document.createElement('td');
            td5_carousel16.textContent = item.entrySpot;
            td5_carousel16.id = `td5_carousel16${item.id}`;
            row_carousel16.appendChild(td5_carousel16);

            const td6_carousel16 = document.createElement('td');
            td6_carousel16.textContent = item.exitSpot;
            td6_carousel16.id = `td6_carousel16${item.id}`;
            row_carousel16.appendChild(td6_carousel16);

            const td7_carousel16 = document.createElement('td');
            td7_carousel16.textContent = item.buyPrice;
            td7_carousel16.id = `td7_carousel16${item.id}`;
            row_carousel16.appendChild(td7_carousel16);

            const td8_carousel16 = document.createElement('td');
            td8_carousel16.textContent = item.profitLoss;
            td8_carousel16.id = `td8_carousel16${item.id}`;
            row_carousel16.appendChild(td8_carousel16);

            const td9_carousel16 = document.createElement('td');
            td9_carousel16.textContent = item.status;
            td9_carousel16.id = `td9_carousel16${item.id}`;
            row_carousel16.appendChild(td9_carousel16);

            if (tbody_carousel16.firstChild) {
                tbody_carousel16.insertBefore(row_carousel16, tbody_carousel16.firstChild);
            } else {
                tbody_carousel16.appendChild(row_carousel16);
            }
        });
    }
    appendRows(backendData)
}

let log_timestamp_current_symbol_bear = null
let log_buy_timestamp_bot_symbol_bear = null
let log_sell_timestamp_bot_symbol_bear = null
let log_message10_symbol_bear = null
let log_message9_symbol_bear = null
let log_message8_symbol_bear = null
let log_message7_symbol_bear = null
let log_message6_symbol_bear = null
let log_message5_symbol_bear = null
let log_message4_symbol_bear = null
let log_message3_symbol_bear = null
let log_message2_symbol_bear = null
let log_message1_symbol_bear = null
let log_message_curr_symbol_bear = null
let log_message_curr_tick_symbol_bear = null
let log_message_last_digit_symbol_bear = null
let log_message_entry_tick_symbol_bear = null
let appended_symbol_bear = true
let log_id_symbol_bear = 0

function format_log_current_time_symbol_bear() {
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

async function bot_log_symbol_bear(last_ten_tick, last_nine_tick, last_eight_tick, last_seven_tick, last_six_tick, last_five_tick, last_four_tick, last_three_tick, last_two_tick, last_one_tick, current_tick, current_tick_full) {

    const backendData = [
        {
            log_message10_symbol_bear: last_ten_tick,
            log_message9_symbol_bear: last_nine_tick,
            log_message8_symbol_bear: last_eight_tick,
            log_message7_symbol_bear: last_seven_tick,
            log_message6_symbol_bear: last_six_tick,
            log_message5_symbol_bear: last_five_tick,
            log_message4_symbol_bear: last_four_tick,
            log_message3_symbol_bear: last_three_tick,
            log_message2_symbol_bear: last_two_tick,
            log_message1_symbol_bear: last_one_tick,
            log_message_curr_symbol_bear: current_tick,
            log_message_curr_tick_symbol_bear: current_tick_full,
        },
    ];

    const log_tbody_carousel16 = document.getElementById('log_tbody1_carousel16');

    function appendRows(data) {
        data.forEach(item => {
            const row_carousel16 = document.createElement('tr');
            row_carousel16.id = `log_bot_carousel16${log_id_symbol_bear}`;

            const td1_carousel16 = document.createElement('td');
            td1_carousel16.textContent = log_timestamp_current_symbol_bear;
            td1_carousel16.id = `log_td1_carousel16${log_id_symbol_bear}`;
            td1_carousel16.classList.add('lod_td1_carousel16')
            row_carousel16.appendChild(td1_carousel16);

            const td2_carousel16 = document.createElement('td');

            if (log_message10_symbol_bear == null) {
                log_message10_symbol_bear = ''
            }
            if (log_message9_symbol_bear == null) {
                log_message9_symbol_bear = ''
            }
            if (log_message8_symbol_bear == null) {
                log_message8_symbol_bear = ''
            }
            if (log_message7_symbol_bear == null) {
                log_message7_symbol_bear = ''
            }
            if (log_message6_symbol_bear == null) {
                log_message6_symbol_bear = ''
            }
            if (log_message5_symbol_bear == null) {
                log_message5_symbol_bear = ''
            }

            if (log_message4_symbol_bear == null) {
                log_message4_symbol_bear = ''
            }

            if (log_message3_symbol_bear == null) {
                log_message3_symbol_bear = ''
            }

            if (log_message2_symbol_bear == null) {
                log_message2_symbol_bear = ''
            }

            if (log_message1_symbol_bear == null) {
                log_message1_symbol_bear = ''
            }

            if (log_message_curr_symbol_bear == null) {
                log_message_curr_symbol_bear = ''
            }

            td2_carousel16.textContent = `last ten ticks:  ${item.log_message10_symbol_bear} ${item.log_message9_symbol_bear} ${item.log_message8_symbol_bear} ${item.log_message7_symbol_bear} ${item.log_message6_symbol_bear} ${item.log_message5_symbol_bear} ${item.log_message4_symbol_bear} ${item.log_message3_symbol_bear} ${item.log_message2_symbol_bear} ${item.log_message1_symbol_bear}          current tick ${item.log_message_curr_symbol_bear}    ${item.log_message_curr_tick_symbol_bear}`;

            td2_carousel16.style.whiteSpace = 'pre'
            td2_carousel16.id = `log_td2_carousel16${log_id_symbol_bear}`;
            td2_carousel16.classList.add('lod_td2_carousel16')
            row_carousel16.appendChild(td2_carousel16);

            const td3_carousel16 = document.createElement('td');
            td3_carousel16.textContent = 'this is the text'
            td3_carousel16.style.whiteSpace = 'pre'
            td3_carousel16.id = `log_td3_carousel16${log_id_symbol_bear}`;
            td3_carousel16.classList.add('lod_td3_carousel16')
            row_carousel16.appendChild(td3_carousel16);

            if (log_tbody_carousel16.firstChild) {
                log_tbody_carousel16.insertBefore(row_carousel16, log_tbody_carousel16.firstChild);
                appended_symbol_bear = true
            } else {
                log_tbody_carousel16.appendChild(row_carousel16);
                appended_symbol_bear = true
            }
        });
    }
    appendRows(backendData)
}

async function bot_log_end_symbol_bear(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td_carousel16 = document.getElementById(`log_td3_carousel16${log_id_symbol_bear}`)

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

    log_buy_timestamp_bot_symbol_bear = formate_log_date(bot_buy_time_stamp)
    log_sell_timestamp_bot_symbol_bear = formate_log_date(bot_sell_time_stamp)

    if (target_td_carousel16) {
        target_td_carousel16.textContent = `buy_time:  ${log_buy_timestamp_bot_symbol_bear}        sell_time:  ${log_sell_timestamp_bot_symbol_bear}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

        log_id_symbol_bear += 1
    } else {
        
    }
}

let first_instance_symbol_bear = true

async function startBot_symbol_bear(martingale, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber) {
    if(first_instance_symbol_bear == true){
        bot_id_symbol_bear = 0
    }
    bot_is_running_or_stopped_symbol_bear = true;
    log_timestamp_current_symbol_bear = format_log_current_time_symbol_bear()
    set_start_trade1_symbol_bear(bot_is_running_or_stopped_symbol_bear);
    bot_id_symbol_bear += 1;
    firstContractReceived_symbol_bear = false;
    end_slide_symbol_bear = true;
    bot_entry_spot_symbol_bear = '';
    bot_exit_spot_symbol_bear = '';
    bot_profit_loss_symbol_bear = '';
    bot_status_symbol_bear = 'pending';
    bot_log_symbol_bear(lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
    await buy_bot_symbol_bear(martingale, currentRandom);
    first_instance_symbol_bear = false
}

let bot_state_carousel16_symbol_bear = null
let bot_state_carousel16_cookie_symbol_bear = null
let all_bot_start_stop1_symbol_bear = null
let all_bot_start_stop1_cookie_symbol_bear = null
let buttonContainer_carousel16_symbol_bear = document.querySelector('.click_change_carousel16');

function togglePlayPause_symbol_bear() {
    var play_button_carousel16 = document.getElementById('play_button_carousel16');
    var pause_button_carousel16 = document.getElementById('pause_button_carousel16');

    if (play_button_carousel16) {
        localStorage.setItem('bot_state_carousel16', 'stop_bot');
        setCookie('bot_state_carousel16', 'stop_bot');
        localStorage.setItem('bots_state_carousel16', 'stop_bots');
        setCookie('bots_state_carousel16', 'stop_bots');

        let bot_state_carousel16 = localStorage.getItem('bot_state_carousel16');
        let bot_state_carousel16_cookie = getCookie('bot_state_carousel16');
        let bots_state_carousel16 = localStorage.getItem('bots_state_carousel16');
        let bots_state_carousel16_cookie = getCookie('bots_state_carousel16');

        play_button_carousel16.parentNode.removeChild(play_button_carousel16);

        var pause_button_carousel16 = document.createElement('div');
        pause_button_carousel16.id = 'pause_button_carousel16';
        pause_button_carousel16.className = 'pause_button_carousel16';
        pause_button_carousel16.innerHTML = '&#10074;&#10074;';
        buttonContainer_carousel16_symbol_bear.appendChild(pause_button_carousel16);

        if ((bot_state_carousel16 == 'stop_bot' || bot_state_carousel16_cookie == 'stop_bot') && (bots_state_carousel16 == 'stop_bots' || bots_state_carousel16_cookie == 'stop_bots')) {
            bot_is_running_or_stopped_symbol_bear = false;
            document.getElementById('bot_state_carousel16').textContent = 'Bot has stopped';
        }

    } else if (pause_button_carousel16) {

        localStorage.setItem('bot_state_carousel16', 'start_bot');
        setCookie('bot_state_carousel16', 'start_bot');
        localStorage.setItem('bots_state_carousel16', 'start_bots');
        setCookie('bots_state_carousel16', 'start_bots');

        let bot_state_carousel16 = localStorage.getItem('bot_state_carousel16');
        let bot_state_carousel16_cookie = getCookie('bot_state_carousel16');
        let bots_state_carousel16 = localStorage.getItem('bots_state_carousel16');
        let bots_state_carousel16_cookie = getCookie('bots_state_carousel16');

        pause_button_carousel16.parentNode.removeChild(pause_button_carousel16);

        var play_button_carousel16 = document.createElement('div');
        play_button_carousel16.id = 'play_button_carousel16';
        play_button_carousel16.className = 'play_button_carousel16';
        play_button_carousel16.innerHTML = '&#9654;';
        buttonContainer_carousel16_symbol_bear.appendChild(play_button_carousel16);

        if ((bot_state_carousel16 == 'start_bot' || bot_state_carousel16_cookie == 'start_bot') && (bots_state_carousel16 == 'start_bots' || bots_state_carousel16_cookie == 'start_bots')) {
            bot_is_running_or_stopped_symbol_bear = true;
            document.getElementById('bot_state_carousel16').textContent = 'Bot is running';
        }
    }
}

buttonContainer_carousel16_symbol_bear.addEventListener('click', togglePlayPause_symbol_bear);
function getRandom_symbol_bear(strNumber) {
    return randomNumber_symbol_bear = strNumber.charAt(strNumber.length - 1);
}

let set_vol_bear_trade_carousel16_symbol_bear = null
let martingale_active_carousel16_symbol_bear = null
let bot_set_carousel16_symbol_bear = null
let set_bot_jump_carousel16_symbol_bear = null
let initial_set_jump_symbol_bear = true

let set_vol_bear_trade_carousel16_cookie_symbol_bear = null
let martingale_active_carousel16_cookie_symbol_bear = null
let bot_set_carousel16_cookie_symbol_bear = null
let set_bot_jump_carousel16_cookie_symbol_bear = null
let initial_set_jump_cookie_symbol_bear = true

let checkCount_symbol_bear = 0

let currentRandom_symbol_bear = null
let lastNumber1_symbol_bear = currentRandom_symbol_bear;
let lastNumber2_symbol_bear = lastNumber1_symbol_bear;
let lastNumber3_symbol_bear = lastNumber2_symbol_bear;
let lastNumber4_symbol_bear = lastNumber3_symbol_bear;
let lastNumber5_symbol_bear = lastNumber4_symbol_bear;
let lastNumber6_symbol_bear = lastNumber5_symbol_bear;
let lastNumber7_symbol_bear = lastNumber6_symbol_bear;
let lastNumber8_symbol_bear = lastNumber7_symbol_bear;
let lastNumber9_symbol_bear = lastNumber8_symbol_bear;
let lastNumber10_symbol_bear = lastNumber9_symbol_bear;

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

const tickStream_symbol_bear = () => api.subscribe({ "ticks": 'RDBEAR' });

const tickResponse_symbol_bear = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {

        connection.removeEventListener('message', tickResponse_symbol_bear, false);
        await api.disconnect();
    }

    function getRandom1(strNumber1) {
        return randomNumber_symbol_bear = strNumber1.charAt(strNumber1.length - 1);
    }

    lastNumber10_symbol_bear = lastNumber9_symbol_bear
    lastNumber9_symbol_bear = lastNumber8_symbol_bear
    lastNumber8_symbol_bear = lastNumber7_symbol_bear
    lastNumber7_symbol_bear = lastNumber6_symbol_bear
    lastNumber6_symbol_bear = lastNumber5_symbol_bear
    lastNumber5_symbol_bear = lastNumber4_symbol_bear
    lastNumber4_symbol_bear = lastNumber3_symbol_bear
    lastNumber3_symbol_bear = lastNumber2_symbol_bear
    lastNumber2_symbol_bear = lastNumber1_symbol_bear
    lastNumber1_symbol_bear = currentRandom_symbol_bear

    if (data.msg_type === 'tick') {

        subscriptionId_symbol_bear = data.subscription.id;
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

        if (data.echo_req.ticks === "RDBEAR") {
            strNumber_symbol_bear = formatToFourDecimalPlaces(tickStreamQuote).toString();
            currentRandom_symbol_bear = getRandom1(strNumber_symbol_bear);
        }

        stream_bear_carousel16_symbol_bear.textContent = strNumber_symbol_bear

        all_bot_start_stop1_symbol_bear = localStorage.getItem('bots_state_carousel16')
        all_bot_start_stop1_cookie_symbol_bear = getCookie('bots_state_carousel16')

        bot_state_carousel16_symbol_bear = localStorage.getItem('bot_state_carousel16')
        bot_state_carousel16_cookie_symbol_bear = getCookie('bot_state_carousel16')

        set_vol_bear_trade_carousel16_symbol_bear = localStorage.getItem('set_vol_bear_trade')
        martingale_active_carousel16_symbol_bear = localStorage.getItem('martingale_carousel16');
        bot_set_carousel16_symbol_bear = localStorage.getItem('bot_set_carousel16');
        set_bot_jump_carousel16_symbol_bear = localStorage.getItem('bot_jump_carousel16')

        set_vol_bear_trade_carousel16_cookie_symbol_bear = localStorage.getItem('set_vol_bear_trade')
        martingale_active_carousel16_cookie_symbol_bear = getCookie('martingale_carousel16');
        bot_set_carousel16_cookie_symbol_bear = getCookie('bot_set_carousel16');
        set_bot_jump_carousel16_cookie_symbol_bear = getCookie('bot_jump_carousel16')

        if (((set_bot_jump_carousel16_symbol_bear && set_bot_jump_carousel16_symbol_bear > 0) && contract_status2_symbol_bear == 'lost') || ((set_bot_jump_carousel16_cookie_symbol_bear && set_bot_jump_carousel16_cookie_symbol_bear > 0) && contract_status2_symbol_bear == 'lost')) {
            bot_set_carousel16_symbol_bear = (parseInt(bot_set_carousel16_symbol_bear) + parseInt(set_bot_jump_carousel16_symbol_bear)) !== null ? (parseInt(bot_set_carousel16_symbol_bear) + parseInt(set_bot_jump_carousel16_symbol_bear)) : (parseInt(bot_set_carousel16_cookie_symbol_bear) + parseInt(set_bot_jump_carousel16_cookie_symbol_bear))
            contract_status2_symbol_bear == 'reset'
        } else if ((initial_set_jump_symbol_bear == true || (contract_status2_symbol_bear == 'won' && (set_bot_jump_carousel16_symbol_bear && set_bot_jump_carousel16_symbol_bear > 0))) || (initial_set_jump_cookie_symbol_bear == true || (contract_status2_symbol_bear == 'won' && (set_bot_jump_carousel16_cookie_symbol_bear && set_bot_jump_carousel16_cookie_symbol_bear > 0)))) {
            bot_set_carousel16_symbol_bear = localStorage.getItem('bot_set_carousel16') ? localStorage.getItem('bot_set_carousel16') : getCookie('bot_set_carousel16');
            initial_set_jump_symbol_bear = false
            initial_set_jump_cookie_symbol_bear = false
        } else {
            bot_set_carousel16_symbol_bear = localStorage.getItem('bot_set_carousel16') ? localStorage.getItem('bot_set_carousel16') : getCookie("bot_set_carousel16");
        }
        let bot_count = bot_id_symbol_bear

        const tag5_carousel16 = document.getElementById(`td5_carousel16${bot_count}`);
        const tag6_carousel16 = document.getElementById(`td6_carousel16${bot_count}`);
        const tag8_carousel16 = document.getElementById(`td8_carousel16${bot_count}`);
        const tag9_carousel16 = document.getElementById(`td9_carousel16${bot_count}`);
        
        processNumber(currentRandom_symbol_bear);

        if (currentRandom_symbol_bear !== null && lastNumber1_symbol_bear !== null && lastNumber2_symbol_bear !== null) {
            if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
                if (currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 1 || bot_set_carousel16_cookie_symbol_bear == 1)) {
                    if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
                        startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
                    } else {
        
                    } 
                }else {

                }
            } else {
        
            }
        }
        
        if (currentRandom_symbol_bear !== null && lastNumber1_symbol_bear !== null && lastNumber2_symbol_bear !== null) {
            if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
                if (lastNumber1_symbol_bear == currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 2 || bot_set_carousel16_cookie_symbol_bear == 2)) {
                   if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
                        startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
                    } else {
        
                    } 
                } else {

                }
            } else {
        
            }
        }

        if (currentRandom_symbol_bear) {
            if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
                for (let i = 0; i < resultArray.length; i++) {
                    if (resultArray[i] == currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 3 || bot_set_carousel16_cookie_symbol_bear == 3)) {
                        if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
                            startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
                            resultArray.splice(i, 1);
                        } else {
        
                        }
                    }
                }
            }
        }
        
        if (currentRandom_symbol_bear !== null && lastNumber1_symbol_bear !== null && lastNumber2_symbol_bear !== null) {
            if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
                if (lastNumber3_symbol_bear == currentRandom_symbol_bear && lastNumber2_symbol_bear == currentRandom_symbol_bear && lastNumber1_symbol_bear == currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 4 || bot_set_carousel16_cookie_symbol_bear == 4)) {
                    if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
                        startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
                    } else if (bot_start_stop == 'stop_bot') {
        
                    } else {
        
                    }
                } else {

                }
            } else {
        
            }
        }

         if (currentRandom_symbol_bear !== null && lastNumber1_symbol_bear !== null && lastNumber2_symbol_bear !== null) {
            if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
                if (lastNumber4_symbol_bear == currentRandom_symbol_bear && lastNumber3_symbol_bear == currentRandom_symbol_bear && lastNumber2_symbol_bear == currentRandom_symbol_bear && lastNumber1_symbol_bear == currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 5 || bot_set_carousel16_cookie_symbol_bear == 5)) {
                    if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
                        startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
                    } else {
        
                    } 
                } else {

                }
            } else {
        
            }
        }

        if (tag5_carousel16 && tag5_carousel16 && tag8_carousel16 && tag9_carousel16) {
            if (tag5_carousel16.textContent.trim() === '' && tag6_carousel16.textContent.trim() === '' && tag8_carousel16.textContent.trim() === '' && tag9_carousel16.textContent.trim() === '') {
                console.log('Tags are empty:', tag5_carousel16.textContent, tag5_carousel16.textContent, tag8_carousel16.textContent, tag9_carousel16.textContent);
                checkCount_symbol_bear += 1;
                console.log('checkCount', checkCount_symbol_bear);
        
                if (checkCount_symbol_bear == 500) {
                    console.log('hanged');
                    initializeApi(message1);
                }
            }
        }
        
        // if (currentRandom_symbol_bear !== null && lastNumber1_symbol_bear !== null && lastNumber2_symbol_bear !== null) {
        //     if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
        //         if (lastNumber2_symbol_bear == currentRandom_symbol_bear && lastNumber1_symbol_bear == currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 3 || bot_set_carousel16_cookie_symbol_bear == 3)) {
        //             if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
        //                 startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
        //             } else{
        
        //             } 
        //         } else if (tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') {
        //             checkCount_symbol_bear += 1
        //            if ((tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') && checkCount_symbol_bear == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {
        
        //     }
        // }
        
        // if (currentRandom_symbol_bear !== null && lastNumber1_symbol_bear !== null && lastNumber2_symbol_bear !== null) {
        //     if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
        //         if (lastNumber3_symbol_bear == currentRandom_symbol_bear && lastNumber2_symbol_bear == currentRandom_symbol_bear && lastNumber1_symbol_bear == currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 4 || bot_set_carousel16_cookie_symbol_bear == 4)) {
        //             if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
        //                 startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
        //             } else if (bot_start_stop == 'stop_bot') {
        
        //             } else {
        
        //             }
        //         } else if (tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') {
        //             checkCount_symbol_bear += 1
        //            if ((tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') && checkCount_symbol_bear == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {
        
        //     }
        // }
        
        // if (currentRandom_symbol_bear !== null && lastNumber1_symbol_bear !== null && lastNumber2_symbol_bear !== null) {
        //     if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
        //         if (lastNumber4_symbol_bear == currentRandom_symbol_bear && lastNumber3_symbol_bear == currentRandom_symbol_bear && lastNumber2_symbol_bear == currentRandom_symbol_bear && lastNumber1_symbol_bear == currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 5 || bot_set_carousel16_cookie_symbol_bear == 5)) {
        //             if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
        //                 startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
        //             } else {
        
        //             } 
        //         } else if (tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') {
        //             checkCount_symbol_bear += 1
        //            if ((tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') && checkCount_symbol_bear == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {
        
        //     }
        // }
        
        // if (currentRandom_symbol_bear !== null && lastNumber1_symbol_bear !== null && lastNumber2_symbol_bear !== null) {
        //     if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
        //         if (lastNumber5_symbol_bear == currentRandom_symbol_bear && lastNumber4_symbol_bear == currentRandom_symbol_bear && lastNumber3_symbol_bear == currentRandom_symbol_bear && lastNumber2_symbol_bear == currentRandom_symbol_bear && lastNumber1_symbol_bear == currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 6 || bot_set_carousel16_cookie_symbol_bear == 6)) {
        //             if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
        //                 startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
        //             } else {
        
        //             }
        //         } else if (tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') {
        //             checkCount_symbol_bear += 1
        //            if ((tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') && checkCount_symbol_bear == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {
        
        //     }
        // }
        
        
        // if (currentRandom_symbol_bear !== null && lastNumber1_symbol_bear !== null && lastNumber2_symbol_bear !== null) {
        //     if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
        //         if (lastNumber6_symbol_bear == currentRandom_symbol_bear && lastNumber5_symbol_bear == currentRandom_symbol_bear && lastNumber4_symbol_bear == currentRandom_symbol_bear && lastNumber3_symbol_bear == currentRandom_symbol_bear && lastNumber2_symbol_bear == currentRandom_symbol_bear && lastNumber1_symbol_bear == currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 7 || bot_set_carousel16_cookie_symbol_bear == 7)) {
        //             if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
        //                 startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
        //             } else  {
        
        //             } 
        //         } else if (tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') {
        //             checkCount_symbol_bear += 1
        //            if ((tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') && checkCount_symbol_bear == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {
        
        //     }
        // }
        
        // if (currentRandom_symbol_bear !== null && lastNumber1_symbol_bear !== null && lastNumber2_symbol_bear !== null) {
        //     if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
        //         if (lastNumber7_symbol_bear == currentRandom_symbol_bear && lastNumber6_symbol_bear == currentRandom_symbol_bear && lastNumber5_symbol_bear == currentRandom_symbol_bear && lastNumber4_symbol_bear == currentRandom_symbol_bear && lastNumber3_symbol_bear == currentRandom_symbol_bear && lastNumber2_symbol_bear == currentRandom_symbol_bear && lastNumber1_symbol_bear == currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 8 || bot_set_carousel16_cookie_symbol_bear == 8)) {
        //             if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
        //                 startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
        //             } else{
        
        //             } 
        //         } else if (tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') {
        //             checkCount_symbol_bear += 1
        //            if ((tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') && checkCount_symbol_bear == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {
        
        //     }
        // }
        
        // if (currentRandom_symbol_bear !== null && lastNumber1_symbol_bear !== null && lastNumber2_symbol_bear !== null) {
        //     if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
        //         if (lastNumber8_symbol_bear == currentRandom_symbol_bear && lastNumber7_symbol_bear == currentRandom_symbol_bear && lastNumber6_symbol_bear == currentRandom_symbol_bear && lastNumber5_symbol_bear == currentRandom_symbol_bear && lastNumber4_symbol_bear == currentRandom_symbol_bear && lastNumber3_symbol_bear == currentRandom_symbol_bear && lastNumber2_symbol_bear == currentRandom_symbol_bear && lastNumber1_symbol_bear == currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 9 || bot_set_carousel16_cookie_symbol_bear == 9)) {
        //             if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
        //                 startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
        //             } else {
        
        //             } 
        //         } else if (tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') {
        //             checkCount_symbol_bear += 1
        //            if ((tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') && checkCount_symbol_bear == 500){
        //             console.log('hanged')
        //             initializeApi(message1)
        //            }
        //         }
        //     } else {
        
        //     }
        // }
        
        // if (currentRandom_symbol_bear !== null && lastNumber1_symbol_bear !== null && lastNumber2_symbol_bear !== null) {
        //     if ((tag5_carousel16 && tag6_carousel16 && tag8_carousel16 && tag9_carousel16) || first_instance_symbol_bear == true) {
        //         if (lastNumber9_symbol_bear == currentRandom_symbol_bear && lastNumber8_symbol_bear == currentRandom_symbol_bear && lastNumber7_symbol_bear == currentRandom_symbol_bear && lastNumber6_symbol_bear == currentRandom_symbol_bear && lastNumber5_symbol_bear == currentRandom_symbol_bear && lastNumber4_symbol_bear == currentRandom_symbol_bear && lastNumber3_symbol_bear == currentRandom_symbol_bear && lastNumber2_symbol_bear == currentRandom_symbol_bear && lastNumber1_symbol_bear == currentRandom_symbol_bear && (first_instance_symbol_bear == true || (tag5_carousel16.textContent.trim() !== '' && tag6_carousel16.textContent.trim() !== '' && tag8_carousel16.textContent.trim() !== '' && tag9_carousel16.textContent.trim() !== '')) && (bot_set_carousel16_symbol_bear == 10 || bot_set_carousel16_cookie_symbol_bear == 10)) {
        //             if (((bot_state_carousel16_symbol_bear == 'start_bot' || bot_state_carousel16_cookie_symbol_bear == 'start_bot') && (all_bot_start_stop1_symbol_bear == 'start_bots' || all_bot_start_stop1_cookie_symbol_bear == 'start_bots')) && ((set_vol_bear_trade_carousel16_symbol_bear == 'vol_bear_trade') || (set_vol_bear_trade_carousel16_cookie_symbol_bear == 'vol_bear_trade'))) {
        //                 startBot_symbol_bear(martingale_active_carousel16_cookie_symbol_bear, lastNumber10_symbol_bear, lastNumber9_symbol_bear, lastNumber8_symbol_bear, lastNumber7_symbol_bear, lastNumber6_symbol_bear, lastNumber5_symbol_bear, lastNumber4_symbol_bear, lastNumber3_symbol_bear, lastNumber2_symbol_bear, lastNumber1_symbol_bear, currentRandom_symbol_bear, strNumber_symbol_bear)
        //             } else  {
        
        //             } 
        //         } else if (tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') {
        //             checkCount_symbol_bear += 1
        //            if ((tag5_carousel16.textContent.trim() == '' && tag6_carousel16.textContent.trim() == '' && tag8_carousel16.textContent.trim() == '' && tag9_carousel16.textContent.trim() == '') && checkCount_symbol_bear == 500){
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
    await tickStream_symbol_bear();
    connection.addEventListener('message', tickResponse_symbol_bear);
};

const unsubscribeTicks_symbol_vol_general = () => {
    connection.removeEventListener('message', tickResponse_symbol_bear, false);
    tickStream_symbol_bear().unsubscribe();
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
    duration_amount_cookie_symbol_bear = getCookie('duration_amount_cookie');
    stake_amount_cookie_symbol_bear = getCookie('stake_amount_cookie');
    duration_unit_cookie_symbol_bear = getCookie('duration_unit_cookie');
    symbol_vol_cookie_symbol_bear = getCookie('symbol_vol_cookie');
    currency_cookie_symbol_bear = getCookie('ActiveCurrency')
    contract_text_cookie_symbol_bear = getCookie('contract_text_cookie');
    stake_or_payout_cookie_symbol_bear = getCookie('stake_or_payout_cookie')
    last_digit_prediction_cookie_symbol_bear = getCookie('last_digit_prediction_cookie')
    stake_amount_default_symbol_bear = getCookie('stake_amount_default')

    if (last_digit_prediction_cookie_symbol_bear) {
        last_digit_prediction_or_barrier_symbol_bear = last_digit_prediction_cookie_symbol_bear
    } else {
        let numericValue = last_digit_input_symbol_bear.value
        last_digit_prediction_or_barrier_symbol_bear = numericValue
    }
    if (symbol_vol_cookie_symbol_bear) {
        symbol_vol_symbol_bear = symbol_vol_cookie_symbol_bear;
    } else {
        symbol_vol_symbol_bear = "formatToFourDecimalPlaces";
    }
    if (duration_unit_cookie_symbol_bear) {
        duration_unit_symbol_bear = duration_unit_cookie_symbol_bear;
    } else {
        duration_unit_symbol_bear = "t";
    }
    if (duration_amount_cookie_symbol_bear) {
        duration_amount_symbol_bear = parseInt(duration_amount_cookie_symbol_bear, 10);
    } else {
        duration_amount_symbol_bear = 1;
    }
    if (stake_amount_cookie_symbol_bear) {
        stake_amount_symbol_bear = parseFloat(stake_amount_cookie_symbol_bear);
    } else {
        stake_amount_symbol_bear = 10;
    }
    if (stake_amount_default_symbol_bear) {
        stake_amount_default_symbol_bear = parseFloat(stake_amount_default_symbol_bear);
    } else {
        stake_amount_default_symbol_bear = 10;
    }
    if (currency_cookie_symbol_bear) {
        currency_symbol_bear = currency_cookie_symbol_bear;
    } else {
        currency_symbol_bear = "USD";
    }
    if (contract_text_cookie_symbol_bear) {
        contract_symbol_bear = contract_text_cookie_symbol_bear;
    } else {
        contract_symbol_bear = "Matches/Differs";
    }
    if (stake_or_payout_cookie_symbol_bear) {
        stake_or_payout_symbol_bear = stake_or_payout_cookie_symbol_bear;
    } else {
        stake_or_payout_symbol_bear = "stake";
    }

    initializeApi(message1)
    let getAwaitingResponses = setInterval(() => {

        if (authorize_response_symbol_General) {
            clearInterval(getAwaitingResponses)
        } else {
            
        }
    }, 2000);
});

async function order_propose_symbol_bear(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
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

                proposal_id_symbol_bear = data.proposal.id;

                // let calc = displayProposalResult2(data, data.proposal.display_value, data.proposal.payout);

                // def_price_up_symbol_bear = data.proposal.display_value;
                // def_payout_up_symbol_bear = data.proposal.payout;
                // def_profit_up_symbol_bear = calc.NetProfit;
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

const unsubscribeProposal_symbol_bear = () => {
    connection.removeEventListener('message', proposalResponse_symbol_bear, false);
};

function convertTimestampTo12HourTime_symbol_bear(timestamp) {
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

function formatNumberAndBoldLastDecimal_symbol_bear(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart) {
        let lastDecimalDigit = decimalPart.slice(-1);
        decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
    } 
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}

let contract_status_html_symbol_bear = document.getElementById('contract_status_carousel16') 
let end_tic_off_trade_symbol_bear = document.getElementById('end_tic_off_trade_carousel16')            
let price_after_trade_figure_amount_symbol_bear = document.getElementById('price_after_trade_figure_amount_carousel16') 
let profit_figure_amount_symbol_bear = document.getElementById('profit_figure_amount_carousel16') 
let buy_price_figure_amount_symbol_bear = document.getElementById('buy_price_figure_amount_carousel16') 
let result_currency_html_symbol_bear = document.querySelectorAll('.result_currency')
let transaction_refrence_figure_symbol_bear = document.getElementById('transaction_refrence_figure_carousel16') 
let trade_start_time_symbol_bear = document.getElementById('trade_start_time_carousel16') 
let buy_price_text_symbol_bear = document.getElementById('buy_price_text_carousel16') 
let price_after_trade_text_symbol_bear = document.getElementById('price_after_trade_text_carousel16') 
let profit_text_symbol_bear = document.getElementById('profit_text_carousel16') 
let durr_amount_prop_count_symbol_bear = document.getElementById('durr_amount_prop_count_carousel16') 
let durr_amount_prop_symbol_bear = document.getElementById('durr_amount_prop_carousel16') 
let countdown_trade_symbol_bear = 0
let countdown_trade2_symbol_bear = 0

function before_trade_symbol_bear() {
    countdown_trade_symbol_bear = 0
    let allDigits = document.querySelectorAll('.ldgs_carousel16')
    let buy_price_text = document.getElementById('buy_price_text_carousel16')
    let price_after_trade_text = document.getElementById('price_after_trade_text_carousel16')
    let profit_text = document.getElementById('profit_text_carousel16')
    let slide_trade_result = document.getElementById('slide_trade_result_carousel16')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel16')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel16')
    let profit_figure_amount = document.getElementById('profit_figure_amount_carousel16')
    contract_status_html_symbol_bear.textContent = ''
    buy_price_text.textContent = 'Total cost'
    price_after_trade_text.textContent = 'Potential payout'
    profit_text.textContent = 'Potential profit'
    durr_amount_prop_count_symbol_bear.textContent = countdown_trade_symbol_bear
    durr_amount_prop_symbol_bear.textContent = duration_amount_symbol_bear
    buy_price_figure_amount.textContent = def_price_up_symbol_bear
    price_after_trade_figure_amount.textContent = def_payout_up_symbol_bear
    profit_figure_amount.textContent = def_profit_up_symbol_bear

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
            if (digit.textContent != (last_digit_prediction_or_barrier_symbol_bear)) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }

    if (trade_type_secound == 'Over/Under') {
        allDigits.forEach(function (digit) {
            if (parseInt(digit.textContent) < last_digit_prediction_or_barrier_symbol_bear) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}

function after_trade_symbol_bear(status, endDigit) {
    let slide_trade_result = document.getElementById('slide_trade_result_carousel16')
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

function formate_date_symbol_bear(datein) {
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

let allProposalOpenContract_symbol_bear = []
let longcodeProp_symbol_bear = null
let contract_ids_buy_symbol_bear = null
let contract_status_symbol_bear = null
let last_tick_symbol_bear = null
let profit_or_loss_symbol_bear = null
let final_price_symbol_bear = null
let payout_result_symbol_bear = null
let buy_price_symbol_bear = null
let contract_currency_symbol_bear = null
let time_of_trade_symbol_bear = null
let every_tick_symbol_bear = null
let contract_id_symbol_bear = null

let allProposalOpenContract2_symbol_bear = []
let longcodeProp2_symbol_bear = null
let contract_ids_buy2_symbol_bear = null
let contract_ids_sell2_symbol_bear = null
let contract_status2_symbol_bear = null
let last_tick2_symbol_bear = null
let profit_or_loss2_symbol_bear = null
let final_price2_symbol_bear = null
let payout_result2_symbol_bear = null
let buy_price2_symbol_bear = null
let contract_currency2_symbol_bear = null
let time_of_trade2_symbol_bear = null
let every_tick2_symbol_bear = null

function open_proposal_actions2_symbol_bear(data) {
    if (data.proposal_open_contract.contract_id == contract_id2_symbol_bear) {
        set_middle_trade1_symbol_bear(bot_is_running_or_stopped_symbol_bear)
        bot_buy_start_time_symbol_bear = formate_date_symbol_bear(data.proposal_open_contract.date_start)
        bot_buy_transaction_id_symbol_bear = data.proposal_open_contract.transaction_ids.buy
        bot_trade_type_symbol_bear = data.proposal_open_contract.contract_type
        bot_buy_price_symbol_bear = data.proposal_open_contract.buy_price
        bot_status_symbol_bear = data.proposal_open_contract.status == 'open' ? 'Pending' : data.proposal_open_contract.status
        bot_contract_id_symbol_bear = data.proposal_open_contract.contract_id
        start_trade_ref_symbol_bear(bot_buy_price_symbol_bear)

        if (firstContractReceived_symbol_bear == false) {
            append_result_symbol_bear(bot_id_symbol_bear, bot_buy_start_time_symbol_bear, bot_buy_transaction_id_symbol_bear, bot_trade_type_symbol_bear, bot_buy_price_symbol_bear, bot_status_symbol_bear);
            firstContractReceived_symbol_bear = true
        }

        longcodeProp2_symbol_bear = data.proposal_open_contract.longcode
        allProposalOpenContract2_symbol_bear.push(data.proposal_open_contract.tick_stream)
        document.getElementById('proposal_information_carousel16').textContent = longcodeProp2_symbol_bear

        if (allProposalOpenContract2_symbol_bear.length > 0 && allProposalOpenContract2_symbol_bear[allProposalOpenContract2_symbol_bear.length - 1].length > 0) {
            let lastSubArray2 = allProposalOpenContract2_symbol_bear[allProposalOpenContract2_symbol_bear.length - 1];
            let lastElementOfLastSubArray2 = lastSubArray2[lastSubArray2.length - 1].tick_display_value;
            let numberString2 = lastElementOfLastSubArray2.toString();
            let lastCharacter2 = numberString2[numberString2.length - 1];
            handleNewNumber_symbol_bear(lastCharacter2);
            every_tick2_symbol_bear = lastElementOfLastSubArray2
            end_tic_off_trade_symbol_bear.innerHTML = formatNumberAndBoldLastDecimal_symbol_bear(every_tick2_symbol_bear);
            if (countdown_trade2_symbol_bear < duration_amount_symbol_bear) {
                countdown_trade2_symbol_bear += 1
                durr_amount_prop_count_symbol_bear.textContent = countdown_trade_symbol_bear
            }
            if (data.proposal_open_contract.is_expired == 1 && end_slide_symbol_bear == true) {
                set_end_trade1_symbol_bear(bot_is_running_or_stopped_symbol_bear)
                end_slide_symbol_bear = false
            }
            contract_ids_buy2_symbol_bear = data.proposal_open_contract.transaction_ids.buy
            if (contract_ids_buy2_symbol_bear) {
                middle_trade_ref_symbol_bear(contract_ids_buy2_symbol_bear)
            }
            if (data.proposal_open_contract.status !== 'open') {
                let circle2_carousel16 = document.getElementById('circle2_carousel16')
                circle2_carousel16.classList.remove('circle_shadow_carousel16')
                bot_status_symbol_bear = data.proposal_open_contract.status
                bot_entry_spot_symbol_bear = data.proposal_open_contract.entry_tick
                bot_exit_spot_symbol_bear = data.proposal_open_contract.exit_tick
                bot_profit_loss_symbol_bear = data.proposal_open_contract.profit
                contract_status2_symbol_bear = data.proposal_open_contract.status
                last_tick2_symbol_bear = lastElementOfLastSubArray2
                profit_or_loss2_symbol_bear = data.proposal_open_contract.profit
                payout_result2_symbol_bear = data.proposal_open_contract.payout
                buy_price2_symbol_bear = data.proposal_open_contract.buy_price
                contract_currency2_symbol_bear = data.proposal_open_contract.currency
                contract_ids_buy2_symbol_bear = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2_symbol_bear = data.proposal_open_contract.expiry_time
                contract_ids_sell2_symbol_bear = data.proposal_open_contract.transaction_ids.sell

                end_trade_ref_symbol_bear(contract_ids_sell2_symbol_bear)
                if (profit_or_loss2_symbol_bear < 0) {
                    final_price2_symbol_bear = '0.00'
                } else if (profit_or_loss2_symbol_bear > 0) {
                    final_price2_symbol_bear = payout_result2_symbol_bear
                } else {
                    
                }
                if (contract_status2_symbol_bear == 'won' && !wonEncountered_symbol_bear) {
                    bot_total_wins_symbol_bear = bot_total_wins_symbol_bear + 1;
                    bot_total_profit_loss_symbol_bear = bot_total_profit_loss_symbol_bear + profit_or_loss2_symbol_bear;
                    bot_total_stake_symbol_bear = bot_total_stake_symbol_bear + buy_price2_symbol_bear
                    bot_total_runs_symbol_bear = bot_total_runs_symbol_bear + 1;
                    bot_total_payout_symbol_bear = bot_total_payout_symbol_bear + payout_result2_symbol_bear;
                    add_after_trade_symbol_bear(bot_id_symbol_bear, contract_id2_symbol_bear, bot_contract_id_symbol_bear, bot_entry_spot_symbol_bear, bot_exit_spot_symbol_bear, bot_profit_loss_symbol_bear, bot_status_symbol_bear, bot_total_runs_symbol_bear, bot_total_stake_symbol_bear, bot_total_payout_symbol_bear, bot_total_wins_symbol_bear, bot_total_loss_symbol_bear, bot_total_profit_loss_symbol_bear);
                    wonEncountered_symbol_bear = true;
                } else if (contract_status2_symbol_bear == 'lost') {
                    bot_total_loss_symbol_bear = bot_total_loss_symbol_bear + 1;
                    bot_total_profit_loss_symbol_bear = bot_total_profit_loss_symbol_bear + profit_or_loss2_symbol_bear;
                    bot_total_stake_symbol_bear = bot_total_stake_symbol_bear + buy_price2_symbol_bear
                    bot_total_runs_symbol_bear = bot_total_runs_symbol_bear + 1;
                    bot_total_payout_symbol_bear = bot_total_payout_symbol_bear - payout_result2_symbol_bear;
                    add_after_trade_symbol_bear(bot_id_symbol_bear, contract_id2_symbol_bear, bot_contract_id_symbol_bear, bot_entry_spot_symbol_bear, bot_exit_spot_symbol_bear, bot_profit_loss_symbol_bear, bot_status_symbol_bear, bot_total_runs_symbol_bear, bot_total_stake_symbol_bear, bot_total_payout_symbol_bear, bot_total_wins_symbol_bear, bot_total_loss_symbol_bear, bot_total_profit_loss_symbol_bear);
                    wonEncountered_symbol_bear = true;
                }
                if (contract_status2_symbol_bear == 'won' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_bear = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_bear = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_bear = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_bear = every_tick2_symbol_bear
                    bot_log_end_symbol_bear(log_buy_timestamp_bot_symbol_bear, log_sell_timestamp_bot_symbol_bear, log_message_entry_tick_symbol_bear, log_message_last_digit_symbol_bear)
                } else if (contract_status2_symbol_bear == 'lost' && data.proposal_open_contract.date_expiry) {
                    log_buy_timestamp_bot_symbol_bear = data.proposal_open_contract.date_start
                    log_sell_timestamp_bot_symbol_bear = data.proposal_open_contract.date_expiry
                    log_message_entry_tick_symbol_bear = data.proposal_open_contract.entry_tick
                    log_message_last_digit_symbol_bear = every_tick2_symbol_bear
                    bot_log_end_symbol_bear(log_buy_timestamp_bot_symbol_bear, log_sell_timestamp_bot_symbol_bear, log_message_entry_tick_symbol_bear, log_message_last_digit_symbol_bear)
                }
                contract_status_html_symbol_bear.textContent = contract_status2_symbol_bear
                end_tic_off_trade_symbol_bear.innerHTML = formatNumberAndBoldLastDecimal_symbol_bear(last_tick2_symbol_bear);
                profit_figure_amount_symbol_bear.textContent = profit_or_loss2_symbol_bear
                price_after_trade_figure_amount_symbol_bear.textContent = final_price2_symbol_bear
                buy_price_figure_amount_symbol_bear.textContent = buy_price2_symbol_bear
                result_currency_html_symbol_bear.textContent = contract_currency2_symbol_bear
                transaction_refrence_figure_symbol_bear.textContent = contract_ids_buy2_symbol_bear
                trade_start_time_symbol_bear.innerHTML = convertTimestampTo12HourTime_symbol_bear(time_of_trade2_symbol_bear)
                buy_price_text_symbol_bear.textContent = 'Buy price'
                price_after_trade_text_symbol_bear.textContent = 'Final price'
                profit_text_symbol_bear.textContent = 'Profit'
                after_trade_symbol_bear(contract_status2_symbol_bear, lastCharacter2)
            } else {
            }
        } else {
            
        }
    }
}

let currentPosition1_symbol_bear = 0;
function moveSlider_symbol_bear(number) {
    const slider = document.getElementById('slide_trade_result_carousel16');
    const container = document.getElementById('last_digit_responds_carousel16');
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

    const target = document.querySelector(`.last_digits_carousel16.${stringnumber}`);
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
        currentPosition1_symbol_bear = newPosition;
    }
}

function handleNewNumber_symbol_bear(randomNumber) {
    const newPosition = randomNumber;
    moveSlider_symbol_bear(newPosition);
}

let log_close_and_info_cont_symbol_bear = document.getElementById('log_close_and_info_cont_carousel16');
let bot_log_show_cont_symbol_bear = document.getElementById('bot_log_show_cont_carousel16');
let bot_details_symbol_bear = document.getElementById('bot_details_carousel16');
let bot_details2_symbol_bear = document.getElementById('bot_details2_carousel16');

if (bot_log_show_cont_symbol_bear && bot_details_symbol_bear) {
    bot_details_symbol_bear.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_bear.style.display == 'none') {
            bot_log_show_cont_symbol_bear.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_bear.style.display = 'none'
        }
    });

    log_close_and_info_cont_symbol_bear.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bot_log_show_cont_symbol_bear.style.display == 'block') {
            bot_log_show_cont_symbol_bear.style.display = 'none'
        } else {
            bot_log_show_cont_symbol_bear.style.display = 'block'
        }
    });
} else {
    console.error('One or more elements are not found');
}

if (bot_log_show_cont_symbol_bear && bot_details_symbol_bear) {
    bot_details2_symbol_bear.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        if (bot_log_show_cont_symbol_bear.style.display == 'none') {
            bot_log_show_cont_symbol_bear.style.display = 'block'
        } else {
            bot_log_show_cont_symbol_bear.style.display = 'none'
        }
    });
} else {
    console.error('One or more elements are not found');
}

let martingale_symbol_bear = document.getElementById('martingale_carousel16');
let flash_info_cont_symbol_bear = document.getElementById('flash_info_cont_carousel16');
let tick_check_amount_symbol_bear = document.getElementById('tick_check_amount_carousel16');
let settings_cont_symbol_bear = document.getElementById('settings_cont_carousel16');
let tick_check_symbol_bear = document.getElementById('tick_check_carousel16');
let martingale_jump_symbol_bear = document.getElementById('martingale_jump_carousel16');
let increase_jump_symbol_bear = document.getElementById('increase_jump_carousel16');
let reduce_jump_symbol_bear = document.getElementById('reduce_jump_carousel16');
let bot_settings_symbol_bear = document.getElementById('bot_settings_carousel16');
let bot_settings2_symbol_bear = document.getElementById('bot_settings2_carousel16');
const volumes2_symbol_bear = document.querySelectorAll(".slide_vol2_carousel16");
let tick_check2_symbol_bear = document.getElementById('tick_check2_carousel16');
let martingale2_symbol_bear = document.getElementById('martingale2_carousel16');
let martingale_jump2_symbol_bear = document.getElementById('martingale_jump2_carousel16');
let martingale_jump_set_symbol_bear = document.getElementById('martingale_jump_set_carousel16');
const last_digit_settings_symbol_bear = document.querySelectorAll(".last_digit_settings_carousel16");

martingale_symbol_bear.addEventListener('click', function () {
    if (martingale_symbol_bear.classList.contains('active_mat')) {
        martingale_symbol_bear.classList.remove('active_mat');
        martingale2_symbol_bear.classList.remove('active_mat');
        setCookie('martingale_carousel16', 'false')
        localStorage.setItem('martingale_carousel16', 'false')
        flash_info_cont_symbol_bear.textContent = 'martigale is not active'
        tick_check_amount_symbol_bear.style.color = '#fff'
    } else {
        martingale_symbol_bear.classList.add('active_mat');
        martingale2_symbol_bear.classList.add('active_mat');
        setCookie('martingale_carousel16', 'true')
        localStorage.setItem('martingale_carousel16', 'true')
        flash_info_cont_symbol_bear.textContent = 'martigale is active'
        tick_check_amount_symbol_bear.style.color = '#fff'
    }
    if (flash_info_cont_symbol_bear.classList.contains('show_flash_info_carousel16')) {
        flash_info_cont_symbol_bear.classList.remove('show_flash_info_carousel16')
        setTimeout(() => {
            flash_info_cont_symbol_bear.classList.remove('show_flash_info_carousel16')
        }, 5000)
    } else {
        flash_info_cont_symbol_bear.classList.add('show_flash_info_carousel16')
        setTimeout(() => {
            flash_info_cont_symbol_bear.classList.remove('show_flash_info_carousel16')
        }, 5000)
    }
});

function bot_set_default_symbol_bear() {
    let curr_bot_set = localStorage.getItem('bot_set_carousel16');
    if (curr_bot_set === null) {
        setTimeout(bot_set_default_symbol_bear, 100);
        return;
    }
    tick_check_symbol_bear.textContent = curr_bot_set;
    tick_check2_symbol_bear.textContent = curr_bot_set;
}

bot_set_default_symbol_bear();

bot_settings_symbol_bear.addEventListener('click', function () {
    if (settings_cont_symbol_bear.style.display == 'none') {
        settings_cont_symbol_bear.style.display = 'block'
    } else {
        settings_cont_symbol_bear.style.display = 'none'
    }
});

document.addEventListener('click', (event) => {
    if (!bot_settings_symbol_bear.contains(event.target) && !settings_cont_symbol_bear.contains(event.target) && !martingale_jump_set_symbol_bear.contains(event.target)) {
        settings_cont_symbol_bear.style.display = 'none';
    }
});

last_digit_settings_symbol_bear.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.querySelector('.bot_text_carousel16').textContent.trim().replace(/\s+/g, ' ');
        if (bot_set == 'Last one digit bot') {
            localStorage.setItem('bot_set_carousel16', '1')
            setCookie('bot_set_carousel16', '1')
            localStorage.setItem('bot_set_store_carousel16', '1')
            setCookie('bot_set_store_carousel16', '1')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_bear()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            localStorage.setItem('bot_set_carousel16', '2')
            setCookie('bot_set_carousel16', '2')
            localStorage.setItem('bot_set_store_carousel16', '2')
            setCookie('bot_set_store_carousel16', '2')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_bear()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            localStorage.setItem('bot_set_carousel16', '3')
            setCookie('bot_set_carousel16', '3')
            localStorage.setItem('bot_set_store_carousel16', '3')
            setCookie('bot_set_store_carousel16', '3')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_bear()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            localStorage.setItem('bot_set_carousel16', '4')
            setCookie('bot_set_carousel16', '4')
            localStorage.setItem('bot_set_store_carousel16', '4')
            setCookie('bot_set_store_carousel16', '4')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_bear()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            localStorage.setItem('bot_set_carousel16', '5')
            setCookie('bot_set_carousel16', '5')
            localStorage.setItem('bot_set_store_carousel16', '5')
            setCookie('bot_set_store_carousel16', '5')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_bear()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            localStorage.setItem('bot_set_carousel16', '6')
            setCookie('bot_set_carousel16', '6')
            localStorage.setItem('bot_set_store_carousel16', '6')
            setCookie('bot_set_store_carousel16', '6')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_bear()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            localStorage.setItem('bot_set_carousel16', '7')
            setCookie('bot_set_carousel16', '7')
            localStorage.setItem('bot_set_store_carousel16', '7')
            setCookie('bot_set_store_carousel16', '7')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_bear()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            localStorage.setItem('bot_set_carousel16', '8')
            setCookie('bot_set_carousel16', '8')
            localStorage.setItem('bot_set_store_carousel16', '8')
            setCookie('bot_set_store_carousel16', '8')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_bear()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            localStorage.setItem('bot_set_carousel16', '9')
            setCookie('bot_set_carousel16', '9')
            localStorage.setItem('bot_set_store_carousel16', '9')
            setCookie('bot_set_store_carousel16', '9')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_bear()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            localStorage.setItem('bot_set_carousel16', '10')
            setCookie('bot_set_carousel16', '10')
            localStorage.setItem('bot_set_store_carousel16', '10')
            setCookie('bot_set_store_carousel16', '10')
            this.classList.add('confirm_set_click')
            bot_set_default_symbol_bear()
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});


let jump_count_symbol_bear = 0

function jump_count_set_symbol_bear() {
    localStorage.setItem('bot_jump_carousel16', jump_count_symbol_bear)
    setCookie('bot_jump_carousel16', jump_count_symbol_bear)
}

function jump_count_set2_symbol_bear() {
    let stored_jump_count = localStorage.getItem('bot_jump_carousel16') ? localStorage.getItem('bot_jump_carousel16') : getCookie('bot_jump_carousel16');
    jump_count_symbol_bear = stored_jump_count !== null ? parseInt(stored_jump_count, 10) : 0;

    if (isNaN(jump_count_symbol_bear)) {
        jump_count_symbol_bear = 0;
    }
    if (jump_count_symbol_bear > 0) {
        martingale_jump_symbol_bear.textContent = 'j' + jump_count_symbol_bear
        martingale_jump2_symbol_bear.textContent = 'j' + jump_count_symbol_bear
    } else {
        martingale_jump_symbol_bear.textContent = ''
        martingale_jump2_symbol_bear.textContent = ''
    }
}

jump_count_set2_symbol_bear()

increase_jump_symbol_bear.addEventListener('click', (event) => {
    event.preventDefault()
    jump_count_symbol_bear = jump_count_symbol_bear + 1
    jump_count_set_symbol_bear()
    jump_count_set2_symbol_bear()
})

reduce_jump_symbol_bear.addEventListener('click', (event) => {
    event.preventDefault()
    if (jump_count_symbol_bear > 0) {
        jump_count_symbol_bear = jump_count_symbol_bear - 1
        jump_count_set_symbol_bear()
        jump_count_set2_symbol_bear()
    }
})

bot_settings2_symbol_bear.addEventListener('click', function () {
    if (settings_cont_symbol_bear.style.display == 'none') {
        settings_cont_symbol_bear.style.display = 'block'
    } else {
        settings_cont_symbol_bear.style.display = 'none'
    }
});

martingale2_symbol_bear.addEventListener('click', function () {
    if (martingale2_symbol_bear.classList.contains('active_mat')) {
        martingale2_symbol_bear.classList.remove('active_mat');
        martingale_symbol_bear.classList.remove('active_mat');
        setCookie('martingale_carousel16', 'false')
        localStorage.setItem('martingale_carousel16', 'false')
        flash_info_cont_symbol_bear.textContent = 'martigale is not active'
        tick_check_amount_symbol_bear.style.color = '#fff'
    } else {
        martingale2_symbol_bear.classList.add('active_mat');
        martingale_symbol_bear.classList.add('active_mat');
        setCookie('martingale_carousel16', 'true')
        localStorage.setItem('martingale_carousel16', 'true')
        flash_info_cont_symbol_bear.textContent = 'martigale is active'
        tick_check_amount_symbol_bear.style.color = '#fff'
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


