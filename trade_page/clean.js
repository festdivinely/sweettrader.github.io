

import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';


let choose_account_trade_type_current_balance_in_init_js = document.getElementById("current_balance_fig")
let total_asset_display_in_init_js = document.getElementById("ass_fig")


let login_id_in_init_js = document.getElementById("curr2")
let nav_current_balance_in_init_js = document.getElementById("balance_amount")
let nav_balance_currency_in_init_js = document.getElementById("balance_currency")

let volatilities2 = document.querySelectorAll(".each")
let tradeTypes2 = document.querySelectorAll("types")
let allDurationUnit2 = document.querySelectorAll("duru")


let current_balance2 = document.getElementById("current_balance_cont")
let account_type_change_cont2 = document.getElementById("curr_acc")

let trade_type_secound2 = document.getElementById("trade_type_secound")

let down_purchase_btn2 = document.getElementById('down_purchase_btn')

let down_proposal2 = document.getElementById("down_proposal")


let stake_info22 = document.getElementById("stake_info2")
let payout_info22 = document.getElementById("payout_info2")
let account_type2 = document.getElementById('curr')



let authorize_response2 = null





const app_id_demo2 = 53334;
const token_demo2 = "4FB1rDGbXX6zbKs";
const app_id_real2 = 53335;
const token_real2 = "Jv4SnlKSnzwkymM";


let api_id2 = null
let api_token2 = null

let api2 = null

let message12 = null


let connection2 = null

let apiAndAuthData2 = null



let last_digit_prediction_cookie2 = null

let barrier_cookie2 = null




let contract_text_cookie2 = null

let duration_amount_cookie2 = null

let stake_amount_cookie2 = null

let symbol_vol_cookie2 = null

let duration_unit_cookie2 = null

let last_digit_prediction_or_barrier_cookie2 = null

let currency_cookie2 = null

let stake_or_payout_cookie2 = null

let proposal_id_cookie2 = null







let duration_unit2 = null

let symbol_vol2 = null

let duration_amount2 = null

let stake_amount2 = null

let last_digit_prediction_or_barrier2 = null

let currency2= null

let contract2 = null

let stake_or_payout2 = null

let proposal_id2 = null


let subscriptionId2 = null












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
* @param {number} stake2 - The amount staked
* @param {number} payout2 - The payout amount
* @returns {Object} An object containing netProfit and returnPercentage
*/
function calculateNetProfitAndReturn12(stake2, payout2) {
    // Calculate Net Profit
    const netProfit2 = payout2 - stake2;

    // Calculate Return as a percentage
    const returnPercentage2 = (netProfit2 / stake2) * 100;

    return {
        netProfit2: netProfit2.toFixed(2), // Format to 2 decimal places
        returnPercentage2: returnPercentage2.toFixed(1) // Format to 1 decimal place
    };
}




function displayProposalResult12(data2, stake12, payout12) {
    let down_order_btn_down = document.getElementById('down_order_btn_down')
    const result12 = calculateNetProfitAndReturn12(stake12, payout12);
    down_order_btn_down.innerHTML = `Net Profit: ${result12.netProfit2} USD | Return: ${result12.returnPercentage2}%`
}

function displayProposalResult22(data2, stake12, payout12) {
    const result12 = calculateNetProfitAndReturn12(stake12, payout12);
    return (`Net Profit: ${result12.netProfit2} USD | Return: ${result12.returnPercentage2}%`)
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

    const proposalResponse2= async (res) => {
        try {
            const data = JSON.parse(res.data);

            // Check if there is an error object
            if (data.error) {


                setCookie('proposal_error2', data.error.message, 7)
                localStorage.setItem('proposal_error2', data.error.message)

                let proposal_id2 = getCookie('proposal_id2')
                if (proposal_id2) {
                    deleteCookie('proposal_id2')
                }

                let proposal_id_lc2 = localStorage.getItem('proposal_id2')
                if (proposal_id_lc2) {
                    localStorage.removeItem('proposal_id2')
                }

                proposal_id2 = null

                // Safely access the error message
                const errorMessage = data.error.message;
                console.log('Error: %s ', errorMessage);
                document.getElementById('down_order_btn_down').textContent = errorMessage;
                document.getElementById('down_proposal_info_cont').textContent = errorMessage;
                connection2.removeEventListener('message', proposalResponse2, false);
                await api2.disconnect();
            } else if (data.msg_type === 'proposal') {
                // Check if there's no error or the error message is null or empty
                if (!data.error || !data.error.message) {

                    let proposal_error2 = getCookie('proposal_error2')
                    if (proposal_error2) {
                        deleteCookie('proposal_error2')
                    }

                    let proposal_error_lc2 = localStorage.getItem('proposal_error2')
                    if (proposal_error_lc2) {
                        localStorage.removeItem('proposal_error2')
                    }

                    setCookie('proposal_id2', data.proposal.id, 7)
                    localStorage.setItem('proposal_id2', data.proposal.id)

                    proposal_id2 = data.proposal.id

                    displayProposalResult12(data, data.proposal.display_value, data.proposal.payout);
                    let calc = displayProposalResult22(data, data.proposal.display_value, data.proposal.payout)
                    
                    const infoContainer = document.getElementById('down_proposal_info_cont');
                    infoContainer.innerHTML = `
                        <p>${calc}</p>
                        <p>Details: ${data.proposal.longcode}</p>
                        <p>Ask Price: ${data.proposal.display_value}</p>
                        <p>Payout: ${data.proposal.payout}</p>
                        <p>Spot: ${data.proposal.spot}</p>
                        <p>ID: ${data.proposal.id}</p>
                    `;
                    stake_info22.textContent = data.proposal.display_value
                    payout_info22.textContent = data.proposal.payout
                } else {
                    // If there's an error message, display it
                    document.getElementById('down_order_btn_down').textContent = data.error.message;
                }
            }
        } catch (error) {
            console.error('Failed to process response:', error);
        }
    };



    const getProposal2 = async () => {
        connection2.addEventListener('message', proposalResponse2);
        await api2.proposal(proposal_to_buy);
    };

    getProposal2()

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



    const proposalResponse2 = async (res) => {
        try {
            const data = JSON.parse(res.data);

            // Check if there is an error object
            if (data.error) {


                setCookie('proposal_error2', data.error.message, 7)
                localStorage.setItem('proposal_error2', data.error.message)

                let proposal_id2 = getCookie('proposal_id2')
                if (proposal_id2) {
                    deleteCookie('proposal_id2')
                }

                let proposal_id_lc2 = localStorage.getItem('proposal_id2')
                if (proposal_id_lc2) {
                    localStorage.removeItem('proposal_id2')
                }

                proposal_id2 = null
                // Safely access the error message
                const errorMessage = data.error.message;
                console.log('Error: %s ', errorMessage);
                document.getElementById('down_order_btn_down').textContent = errorMessage;
                document.getElementById('down_proposal_info_cont').textContent = errorMessage;
                connection2.removeEventListener('message', proposalResponse2, false);
                await api2.disconnect();
            } else if (data.msg_type === 'proposal') {
                // Check if there's no error or the error message is null or empty
                if (!data.error || !data.error.message) {

                    let proposal_error2 = getCookie('proposal_error2')
                    if (proposal_error2) {
                        deleteCookie('proposal_error2')
                    }

                    let proposal_error_lc2 = localStorage.getItem('proposal_error2')
                    if (proposal_error_lc2) {
                        localStorage.removeItem('proposal_error2')
                    }

                    setCookie('proposal_id2', data.proposal.id, 7)
                    localStorage.setItem('proposal_id2', data.proposal.id)

                    proposal_id2 = data.proposal.id

                    displayProposalResult12(data, data.proposal.display_value, data.proposal.payout);
                    let calc = displayProposalResult22(data, data.proposal.display_value, data.proposal.payout)
                    // Display proposal details inside the up_proposal_info_cont
                    const infoContainer = document.getElementById('down_proposal_info_cont');
                    infoContainer.innerHTML = `
                        <p>${calc}</p>
                        <p>Details: ${data.proposal.longcode}</p>
                        <p>Ask Price: ${data.proposal.display_value}</p>
                        <p>Payout: ${data.proposal.payout}</p>
                        <p>Spot: ${data.proposal.spot}</p>
                        <p>ID: ${data.proposal.id}</p>
                    `;
                    stake_info22.textContent = data.proposal.display_value
                    payout_info22.textContent = data.proposal.payout
                } else {
                    // If there's an error message, display it
                    document.getElementById('down_order_btn_down').textContent = data.error.message;
                }
            }
        } catch (error) {
            console.error('Failed to process response:', error);
        }
    };

    const getProposal2 = async () => {
        connection2.addEventListener('message', proposalResponse2);
        await api2.proposal(proposal_to_buy);
    };

    getProposal2()

}










export async function initializeApiInit(message12) {

    try {

        if (message12 === "Demo Account" || message12 === null) {
            api_id2 = app_id_demo2;
            api_token2 = token_demo2;
            connection2 = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${api_id2}`);
        } else if (message12 === "Real Account") {
            api_id2 = app_id_real2;
            api_token2 = token_real2;
            connection2 = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${api_id2}`);

        } else if (api_id2 == null) {
            console.log("no app id yet")
        }
    } catch (error) {
        console.log(error, api_id2)
        console.log("no app id yet")
    }



    try {
        api2 = new DerivAPIBasic({ connection2 });
        authorize_response2 = await api2.authorize(api_token2);
        console.log(authorize_response2)
        if (!authorize_response2.authorize) {
            console.log("Authorization failed. Please check your API token.");
            return null;
        } else {

            console.log("authirzed at init js")

            if (authorize_response2.authorize.loginid.startsWith("CR")) {


                setCookie('real_balance', authorize_response2.authorize.balance)
                setCookie("real_id", authorize_response2.authorize.loginid)
                setCookie("real_icon_usd", true)
                setCookie("demo_icon_usd", false)


                localStorage.setItem('real_balance', authorize_response2.authorize.balance)
                localStorage.setItem("real_id", authorize_response2.authorize.loginid)
                localStorage.setItem("real_icon_usd", true)
                localStorage.setItem("demo_icon_usd", false)



            } else {
                setCookie('demo_balance', authorize_response2.authorize.balance)
                setCookie('demo_id', authorize_response2.authorize.loginid)
                setCookie("real_icon_usd", false)
                setCookie("demo_icon_usd", true)



                localStorage.setItem('demo_balance', authorize_response2.authorize.balance)
                localStorage.setItem('demo_id', authorize_response2.authorize.loginid)
                localStorage.setItem("real_icon_usd", false)
                localStorage.setItem("demo_icon_usd", true)
            }

        }



        return { api2, authorize_response2 };

    } catch (error) {
        console.error("Error occurred during API initialization:", error);
        return null;
    }
}





window.addEventListener('load', function () {

    duration_amount_cookie2 = getCookie('duration_amount_cookie');
    stake_amount_cookie2 = getCookie('stake_amount_cookie');
    duration_unit_cookie2 = getCookie('duration_unit_cookie');
    last_digit_prediction_or_barrier_cookie2 = getCookie('last_digit_prediction_or_barrier_cookie')
    symbol_vol_cookie2 = getCookie('symbol_vol_cookie');
    currency_cookie2 = getCookie('ActiveCurrency')
    contract_text_cookie2 = getCookie('contract_text_cookie');
    stake_or_payout_cookie2 = getCookie('stake_or_payout_cookie')


    last_digit_prediction_cookie2 = getCookie('last_digit_prediction_cookie')
    barrier_cookie2 = getCookie('barrier_cookie')


    // Get the existing values of the cookies and local storage items
    var contract_text_cookie2 = getCookie('contract_text_cookie');


    if (symbol_vol_cookie2) {
        symbol_vol2 = symbol_vol_cookie2;
    } else {
        symbol_vol2 = "R_10";
    }

    if (duration_unit_cookie2) {
        duration_unit2 = duration_unit_cookie2;
    } else {
        duration_unit2 = "t";
    }


    if (duration_amount_cookie2) {
        duration_amount2 = parseInt(duration_amount_cookie2, 10);
    } else {
        duration_amount2 = 1;
    }


    if (stake_amount_cookie2) {
        stake_amount2 = parseFloat(stake_amount_cookie2);
    } else {
        stake_amount2 = 10;
    }

    if (trade_type_secound2.textContent === 'Higher/Lower') {
        last_digit_prediction_or_barrier2 = document.getElementById('barrier_input').value
    } else if (trade_type_secound2.textContent === 'Matches/Differs' || trade_type_secound2.textContent === 'Over/under') {
        last_digit_prediction_or_barrier2 = document.getElementById('last_digit_input').value
    } else {
        if (last_digit_prediction_or_barrier2 && /^[+-]/.test(last_digit_prediction_or_barrier2)) {
            let numericValue2 = parseFloat(last_digit_prediction_or_barrier2);
            last_digit_prediction_or_barrier2 = last_digit_prediction_or_barrier_cookie2 ? (numericValue2 >= 0 ? '+' : '') + numericValue2.toString() : '0';
        } else {
            last_digit_prediction_or_barrier2 = last_digit_prediction_or_barrier_cookie2 ? last_digit_prediction_or_barrier_cookie2 : '0';
        }

    }


    if (currency_cookie2) {
        currency2 = currency_cookie2;
    } else {
        currency2 = "USD";
    }


    if (contract_text_cookie2) {
        contract2 = contract_text_cookie2;
    } else {
        contract2 = "Matches/Differs";
    }

    if (stake_or_payout_cookie2) {
        stake_or_payout2 = stake_or_payout_cookie2;
    } else {
        stake_or_payout2 = "stake";
    }


    initializeApiInit(message12)
    let getAwaitingResponses2 = setInterval(() => {

        if (authorize_response2) {
            clearInterval(getAwaitingResponses2)
        } else {
            console.log("no authorize response yet")
        }
    }, 2000);



    if (trade_type_secound2.textContent === 'Rise/Fall' || trade_type_secound2.textContent === 'Odd/Even') {
        setTimeout(() => {
            order_propose4(api2, stake_amount2, stake_or_payout2, contract, currency2, duration_amount2, duration_unit2, symbol_vol2);
        }, 2000);
    } else {
        setTimeout(() => {
            order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
        }, 2000);
    }


    // Utility function to debounce an event handler
    function debounce2(func, delay) {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }

    // Function to handle the input event for duration amount input
    function handleDurationAmountInputEvent2(event) {
        const currentValue2 = event.target.value;

        // Proceed only if the input is not empty
        if (currentValue2 === '') {
            return;
        }

        // Check if the input is a number
        if (!isNaN(currentValue2)) {
            duration_amount2 = parseInt(currentValue2);

            initializeApiInit(message12)
            if (trade_type_secound2.textContent === 'Rise/Fall' || trade_type_secound2.textContent === 'Odd/Even') {
                setTimeout(() => {
                    order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
                }, 2000);
            } else {
                setTimeout(() => {
                    order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
                }, 2000);
            }        

        } else {

            initializeApiInit(message12)
            if (trade_type_secound2.textContent === 'Rise/Fall' || trade_type_secound2.textContent === 'Odd/Even') {
                setTimeout(() => {
                    order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
                }, 2000);
            } else {
                setTimeout(() => {
                    order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
                }, 2000);
            }        

        }
    }

    // Attach the debounced event listener to the input element
    document.getElementById('duration_amount_input').addEventListener('input', debounce2(handleDurationAmountInputEvent2, 300)); // 300ms delay



    // Utility function to debounce an event handler
    function debounce2(func, delay) {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }

    // Function to handle the input event for stake amount input
    function handleStakeAmountInputEvent2(event) {
        const currentValue2 = event.target.value;

        // Proceed only if the input is not empty
        if (currentValue2 === '') {
            return;
        }

        // Check if the input is a number and within the range of 0 to 50000
        if (!isNaN(currentValue2) && currentValue2 >= 0 && currentValue2 <= 50000) {
            stake_amount2 = parseFloat(currentValue2);
            initializeApiInit(message12)
            if (trade_type_secound2.textContent === 'Rise/Fall' || trade_type_secound2.textContent === 'Odd/Even') {
                setTimeout(() => {
                    order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
                }, 2000);
            } else {
                setTimeout(() => {
                    order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
                }, 2000);
            }        

        } else {

            initializeApiInit(message12)
            if (trade_type_secound2.textContent !== 'Rise/Fall' || trade_type_secound2.textContent !== 'Odd/Even') {
                order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)

            } else {
                order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)
            }
        }
    }

    // Attach the debounced event listener to the input element
    document.getElementById('stake_amount_input').addEventListener('input', debounce2(handleStakeAmountInputEvent2, 300)); // 300ms delay



    // Utility function to debounce an event handler
    function debounce2(func, delay) {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }

    // Function to handle the input event
    function handleInputEvent2(event) {
        const currentValue2 = event.target.value;

        if (trade_type_secound2.textContent === 'Rise/Fall') {
            return
        }

        // Proceed only if the input is not empty
        if (currentValue2 === '') {
            console.log('Input is empty. No action taken.');
            return;
        }

        // Check if the input is a number and within the range of 0 to 9
        if (!isNaN(currentValue2) && currentValue2 >= 0 && currentValue2 <= 9) {
            last_digit_prediction_or_barrier2 = currentValue2;

            initializeApiInit(message12)
            order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);

        } else {

            initializeApiInit(message12)
            order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
        }
    }

    // Attach the debounced event listener to the input element
    document.getElementById('last_digit_input').addEventListener('input', debounce2(handleInputEvent2, 300)); // 300ms delay


    // Utility function to debounce an event handler
    function debounce2(func, delay) {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }

    // Function to handle the input event for barrier input
    function handleBarrierInputEvent2(event) {
        var inputValue2 = event.target.value;


        if (trade_type_secound2.textContent === 'Rise/Fall') {
            return
        }

        // Proceed only if the input is not empty
        if (inputValue2 === '') {
            return;
        }

        // Check if input starts with '+' or '-' and then parse the float
        if (!/^[+-]/.test(inputValue2)) {

            initializeApiInit(message12)
            order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
            return;
        }

        var currentValue2 = parseFloat(inputValue2);

        if (isNaN(currentValue2)) {

            initializeApiInit(message12)
            order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
        } else if ((currentValue2 === 0) || (currentValue2 === 0.001) || (currentValue2 === -0.001) || (currentValue2 > 0.001 && currentValue2 <= 4683) || (currentValue2 < -0.001 && currentValue2 >= -4683)) {
            // Ensure the value is formatted with a sign
            var formattedValue2 = (currentValue2 >= 0 ? '+' : '') + currentValue2.toString();

            last_digit_prediction_or_barrier2 = formattedValue2;

            initializeApiInit(message12)
            order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
        } else {

            initializeApiInit(message12)
            order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
        }

    }

    // Attach the debounced event listener to the input element
    document.getElementById('barrier_input').addEventListener('input', debounce2(handleBarrierInputEvent2, 300)); // 300ms delay


});




if (account_type_change_cont2 && current_balance2) {
    current_balance2.addEventListener('click', (event) => {
        event.stopPropagation();
        if (account_type2.textContent == 'Demo') {
            let message1_set2 = 'Demo Account'

            message12 = message1_set2

            apiAndAuthData2 = initializeApiInit(message12)


        } else if (account_type2.textContent == 'US Dollar') {
            let message1_set2 = 'Real Account'

            message12 = message1_set2

            apiAndAuthData2 = initializeApiInit(message12)

        }
    });
} else {
    console.error('One or more elements are not found');
}















const handleVolatilityClick2 = function () {

    unsubscribeTicks(); // Unsubscribe when volatility button is clicke
    let type = "Synthetics"


    // Logic for volatility buttons
    if (this.textContent == "Volatility 10 Index") {
        let symbol_vol_set2 = "R_10";
        symbol_vol2 = symbol_vol_set2
        api.forget(subscriptionId)
        initializeApiInit(message12)

        if (trade_type_secound2.textContent === 'Higher/Lower') {
            last_digit_prediction_or_barrier2 = document.getElementById('barrier_input').value
        } else if (trade_type_secound2.textContent === 'Matches/Differs' || trade_type_secound2.textContent === 'Over/Under') {
            last_digit_prediction_or_barrier2 = document.getElementById('last_digit_input').value
        } else {
            if (last_digit_prediction_or_barrier2 && /^[+-]/.test(last_digit_prediction_or_barrier2)) {
                let numericValue2 = parseFloat(last_digit_prediction_or_barrier2);
                last_digit_prediction_or_barrier2 = last_digit_prediction_or_barrier_cookie2 ? (numericValue2 >= 0 ? '+' : '') + numericValue2.toString() : '0';
            } else {
                last_digit_prediction_or_barrier2 = last_digit_prediction_or_barrier_cookie2 ? last_digit_prediction_or_barrier_cookie2 : '0';
            }

        }
        if (trade_type_secound2.textContent === 'Rise/Fall' || trade_type_secound2.textContent === 'Odd/Even') {
            setTimeout(() => {
                order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
            }, 2000);
        }



    } else if (this.textContent == "Volatility 25 Index") {
        let symbol_vol_set2 = "R_25";
        symbol_vol2 = symbol_vol_set2
      
        api.forget(subscriptionId)

        initializeApiInit(message12)

        if (trade_type_secound2.textContent === 'Higher/Lower') {
            last_digit_prediction_or_barrier2 = document.getElementById('barrier_input').value
        } else if (trade_type_secound2.textContent === 'Matches/Differs' || trade_type_secound2.textContent === 'Over/Under') {
            last_digit_prediction_or_barrier2 = document.getElementById('last_digit_input').value
        } else {
            if (last_digit_prediction_or_barrier2 && /^[+-]/.test(last_digit_prediction_or_barrier2)) {
                let numericValue2 = parseFloat(last_digit_prediction_or_barrier2);
                last_digit_prediction_or_barrier2 = last_digit_prediction_or_barrier_cookie2 ? (numericValue2 >= 0 ? '+' : '') + numericValue2.toString() : '0';
            } else {
                last_digit_prediction_or_barrier2 = last_digit_prediction_or_barrier_cookie2 ? last_digit_prediction_or_barrier_cookie2 : '0';
            }

        }
        if (trade_type_secound2.textContent === 'Rise/Fall' || trade_type_secound2.textContent === 'Odd/Even') {
            setTimeout(() => {
                order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
            }, 2000);
        }

    } else if (this.textContent == "Volatility 50 Index") {
        let symbol_vol_set2 = "R_50";
        symbol_vol2 = symbol_vol_set2
        api.forget(subscriptionId)
        initializeApiInit(message12)

        if (trade_type_secound2.textContent === 'Higher/Lower') {
            last_digit_prediction_or_barrier2 = document.getElementById('barrier_input').value
        } else if (trade_type_secound2.textContent === 'Matches/Differs' || trade_type_secound2.textContent === 'Over/Under') {
            last_digit_prediction_or_barrier2 = document.getElementById('last_digit_input').value
        } else {
            if (last_digit_prediction_or_barrier2 && /^[+-]/.test(last_digit_prediction_or_barrier2)) {
                let numericValue2 = parseFloat(last_digit_prediction_or_barrier2);
                last_digit_prediction_or_barrier2 = last_digit_prediction_or_barrier_cookie2 ? (numericValue2 >= 0 ? '+' : '') + numericValue2.toString() : '0';
            } else {
                last_digit_prediction_or_barrier2 = last_digit_prediction_or_barrier_cookie2 ? last_digit_prediction_or_barrier_cookie2 : '0';
            }

        }
        if (trade_type_secound2.textContent === 'Rise/Fall' || trade_type_secound2.textContent === 'Odd/Even') {
            setTimeout(() => {
                order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
            }, 2000);
        }


    } else if (this.textContent == "Volatility 75 Index") {
        let symbol_vol_set2 = "R_75";
        symbol_vol2 = symbol_vol_set2
        api.forget(subscriptionId)
        initializeApiInit(message12)

        if (trade_type_secound2.textContent === 'Higher/Lower') {
            last_digit_prediction_or_barrier2 = document.getElementById('barrier_input').value
        } else if (trade_type_secound2.textContent === 'Matches/Differs' || trade_type_secound2.textContent === 'Over/Under') {
            last_digit_prediction_or_barrier2 = document.getElementById('last_digit_input').value
        } else {
            if (last_digit_prediction_or_barrier2 && /^[+-]/.test(last_digit_prediction_or_barrier2)) {
                let numericValue2 = parseFloat(last_digit_prediction_or_barrier2);
                last_digit_prediction_or_barrier2 = last_digit_prediction_or_barrier_cookie2 ? (numericValue2 >= 0 ? '+' : '') + numericValue2.toString() : '0';
            } else {
                last_digit_prediction_or_barrier2 = last_digit_prediction_or_barrier_cookie2 ? last_digit_prediction_or_barrier_cookie2 : '0';
            }

        }
        if (trade_type_secound2.textContent === 'Rise/Fall' || trade_type_secound2.textContent === 'Odd/Even') {
            setTimeout(() => {
                order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
            }, 2000);
        }


    } else if (this.textContent == "Volatility 100 Index") {
        let symbol_vol_set2 = "R_100";
        symbol_vol2 = symbol_vol_set2
        api.forget(subscriptionId)
        initializeApiInit(message12)

        if (trade_type_secound2.textContent === 'Higher/Lower') {
            last_digit_prediction_or_barrier2 = document.getElementById('barrier_input').value
        } else if (trade_type_secound2.textContent === 'Matches/Differs' || trade_type_secound2.textContent === 'Over/Under') {
            last_digit_prediction_or_barrier2 = document.getElementById('last_digit_input').value
        } else {
            if (last_digit_prediction_or_barrier2 && /^[+-]/.test(last_digit_prediction_or_barrier2)) {
                let numericValue2 = parseFloat(last_digit_prediction_or_barrier2);
                last_digit_prediction_or_barrier2 = last_digit_prediction_or_barrier_cookie2 ? (numericValue2 >= 0 ? '+' : '') + numericValue2.toString() : '0';
            } else {
                last_digit_prediction_or_barrier2 = last_digit_prediction_or_barrier_cookie2 ? last_digit_prediction_or_barrier_cookie2 : '0';
            }

        }
        if (trade_type_secound2.textContent === 'Rise/Fall' || trade_type_secound2.textContent === 'Odd/Even') {
            setTimeout(() => {
                order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
            }, 2000);
        } else {
            setTimeout(() => {
                order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
            }, 2000);
        }



    } else {
        let symbol_vol_set2 = ''
        symbol_vol2 = symbol_vol_set2
        initializeApiInit(message12)
    }


};

volatilities2.forEach(function (volatility) {
    // Attach handleVolatilityClick function to click event listener of each volatility button
    volatility.addEventListener("click", handleVolatilityClick2);

});





const handleTradeTypeClick2 = function () {

    // Logic for volatility buttons
    if (this.textContent == "Matches/Differs") {
        contract2 = this.textContent;
        last_digit_prediction_or_barrier2 = document.getElementById('last_digit_input').value
        initializeApiInit(message12)
        order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)

    } else if (this.textContent == "Over/Under") {
        contract2 = this.textContent;
        last_digit_prediction_or_barrier2 = document.getElementById('last_digit_input').value
        initializeApiInit(message12)
        order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)

    } else if (this.textContent == "Odd/Even") {
        contract2 = this.textContent;
        initializeApiInit(message12)
        order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)

    } else if (this.textContent == "Rise/Fall") {
        contract2 = this.textContent;
        initializeApiInit(message12)
        order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)

    } else if (this.textContent == "Higher/Lower") {
        contract2 = this.textContent;
        last_digit_prediction_or_barrier2 = document.getElementById('barrier_input').value
        initializeApiInit(message12)
        order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract, currency2, duration_amount2, duration_unit2, symbol_vol2)

    } else {

    }

};


tradeTypes2.forEach(function (types) {
    types.addEventListener("click", handleTradeTypeClick2);
});







function handleUnitTypeClick2() {
    if (this.textContent == 'ticks') {
        duration_unit2 = 't'
        initializeApiInit(message12)
        if (trade_type_secound2.textContent !== 'Rise/Fall') {
            order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)

        } else {
            order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)
        }

    } else if (this.textContent == 'secounds') {
        duration_unit2 = 's'
        initializeApiInit(message12)
        if (trade_type_secound2.textContent !== 'Rise/Fall') {
            order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)

        } else {
            order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)
        }

    } else if (this.textContent == 'minutes') {
        duration_unit2 = 'm'
        initializeApiInit(message12)
        if (trade_type_secound2.textContent !== 'Rise/Fall') {
            order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)

        } else {
            order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)
        }

    } else if (this.textContent == 'hours') {
        duration_unit2 = 'h'
        initializeApiInit(message12)
        if (trade_type_secound2.textContent !== 'Rise/Fall') {
            order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency, duration_amount2, duration_unit2, symbol_vol2)

        } else {
            order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)
        }

    } else if (this.textContent == 'days') {
        duration_unit2 = 'd'
        initializeApiInit(message12)
        if (trade_type_secound2.textContent !== 'Rise/Fall') {
            order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)

        } else {
            order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2)
        }

    }
}




allDurationUnit2.forEach(function (unit) {
    unit.addEventListener('click', handleUnitTypeClick)
})









function convertTimestampTo12HourTime2(timestamp) {
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





function formatNumberAndBoldLastDecimal2(number) {
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





let contract_status_html2 = document.getElementById('contract_status')
let end_tic_off_trade2 = document.getElementById('end_tic_off_trade')
let price_after_trade_figure_amount2 = document.getElementById('price_after_trade_figure_amount')
let profit_figure_amount2 = document.getElementById('profit_figure_amount')
let buy_price_figure_amount2 = document.getElementById('buy_price_figure_amount')
let result_currency_html2 = document.querySelectorAll('.result_currency')
let transaction_refrence_figure2 = document.getElementById('transaction_refrence_figure')
let trade_start_time2 = document.getElementById('trade_start_time')
let buy_price_text2 = document.getElementById('buy_price_text')
let price_after_trade_text2 = document.getElementById('price_after_trade_text')
let profit_text2 = document.getElementById('profit_text')







let countdown_trade2 = 0

function before_trade2() {
    countdown_trade2 = 0
    let allDigits2 = document.querySelectorAll('.ldgs')
    let buy_price_text2 = document.getElementById('buy_price_text')
    let price_after_trade_text2 = document.getElementById('price_after_trade_text')
    let profit_text2 = document.getElementById('profit_text')
    let durr_amount_prop_count2 = document.getElementById('durr_amount_prop_count')
    let slide_trade_result2 = document.getElementById('slide_trade_result')
    contract_status_html2.textContent = ''
    buy_price_text2.textContent = 'Total cost'
    price_after_trade_text2.textContent = 'Potential payout'
    profit_text2.textContent = 'Potential profit'
    durr_amount_prop_count2.textContent = countdown_trade
    durr_amount_prop2.textContent = duration_amount

    
    if (trade_type_secound2.textContent === 'Matches/Differs') {
        allDigits2.forEach(function (digit) {
            if (digit.classList.contains('win_loose_color')) {
                digit.classList.remove('win_loose_color'); // Removed the dot (.)
            } 

            if (digit.classList.contains('loose_digit-color')) {
                digit.classList.remove('loose_digit-color') // Removed the dot (.)
            } 

            if (slide_trade_result2.classList.contains('win_color')) {
                slide_trade_result2.classList.remove('win_color')
            }

            if (slide_trade_result2.classList.contains('lose_color')) {
                slide_trade_result2.classList.remove('lose_color')
            }
        });
    }



    if (trade_type_secound2.textContent === 'Matches/Differs') {
        allDigits2.forEach(function (digit) {
            if (digit.textContent === last_digit_prediction_or_barrier2) {
                digit.classList.add('win_loose_color'); // Removed the dot (.)
            } else {
                digit.classList.remove('win_loose_color');
            }
        });
    }
}


function after_trade2(status2, endDigit2) {
    let slide_trade_result2 = document.getElementById('slide_trade_result')
    let allDigits2 = document.querySelectorAll('.ldgs')
    if (trade_type_secound2.textContent === 'Matches/Differs') {
        if (status2 === 'won') {
            slide_trade_result2.classList.add('win_color')
        }else if(status2 === 'lost'){
            slide_trade_result2.classList.add('lose_color')
            allDigits2.forEach(function (digit){
                if(endDigit2 === digit.textContent){
                    digit.classList.add('loose_digit-color')
                }else {
                    digit.classList.remove('loose_digit-color')
                }
            })
        }
    }
}








let allProposalOpenContract2 = []
let longcodeProp2 = null
let contract_ids_buy2 = null
let contract_status2 = null
let last_tick2 = null
let profit_or_loss2 = null
let final_price2 = null
let payout_result2 = null
let buy_price2 = null
let contract_currency2 = null
let time_of_trade2 = null
let every_tick2 = null


let proposalOpenContract2 = (contract_id2) => proposalOpenContract({
    "proposal_open_contract": 1,
    "contract_id": contract_id2,
    "subscribe": 1
})



const proposalOpenContractResponse2 = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        console.log('Error: %s ', data.error.message);
        connection.removeEventListener('message', proposalOpenContractResponse2, false);
        await api.disconnect();

    } else if (data.msg_type === 'proposal_open_contract') {
        console.log(data)
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
            handleNewNumber2(lastCharacter2);
            every_tick2 = lastElementOfLastSubArray2
            end_tic_off_trade2.innerHTML = formatNumberAndBoldLastDecimal2(every_tick2);
            if (countdown_trade2 < duration_amount2) {
                countdown_trade2 += 1
                durr_amount_prop_count2.textContent = countdown_trade2
            }

            if (data.proposal_open_contract.status !== 'open') {
                contract_status2 = data.proposal_open_contract.status
                last_tick2 = lastElementOfLastSubArray2
                profit_or_loss2 = data.proposal_open_contract.profit
                payout_result2 = data.proposal_open_contract.payout
                buy_price2 = data.proposal_open_contract.buy_price
                contract_currency2 = data.proposal_open_contract.currency
                contract_ids_buy2 = data.proposal_open_contract.transaction_ids.buy
                time_of_trade2 = data.proposal_open_contract.expiry_time
                if (profit_or_loss2 < 0) {
                    final_price2 = '0.00'
                } else if (profit_or_loss2 > 0) {
                    final_price2 = payout_result2
                } else {
                    console.log("The number is zero.");
                }
                contract_status_html2.textContent = contract_status
                end_tic_off_trade2.innerHTML = formatNumberAndBoldLastDecimal2(last_tick2);
                profit_figure_amount2.textContent = profit_or_loss2
                price_after_trade_figure_amount2.textContent = final_price2
                buy_price_figure_amount2.textContent = buy_price2
                result_currency_html2.textContent = contract_currency2
                transaction_refrence_figure2.textContent = contract_ids_buy2
                trade_start_time2.innerHTML = convertTimestampTo12HourTime2(time_of_trade2)
                buy_price_text2.textContent = 'Buy price'
                price_after_trade_text2.textContent = 'Final price'
                profit_text2.textContent = 'Profit'
                after_trade2(contract_status2, lastCharacter2)
            } else {

            }
        } else {
            console.log('no valid tick yet')
        }

    }
};

const getProposalOpenContract2 = async (contract_id2) => {
    connection2.addEventListener('message', proposalOpenContractResponse);
    await api2.proposalOpenContract({
        "proposal_open_contract": 1,
        "contract_id": contract_id2,
        "subscribe": 1
    })
};

const unsubscribeProposalOpenContract2 = () => {
    connection2.removeEventListener('message', proposalOpenContractResponse, false);
};




let contract_id2
down_purchase_btn2.addEventListener('click', async function () {
    const slider2 = document.getElementById('slide_trade_result').style.display = 'flex'

    before_trade2()
    allProposalOpenContract2.length = 0
    unsubscribeProposalOpenContract2()

    if (trade_type_secound2.textContent === 'Rise/Fall' || trade_type_secound2.textContent === 'Odd/Even') {
        order_propose4(api2, stake_amount2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
    } else {
        order_propose2(api2, stake_amount2, last_digit_prediction_or_barrier2, stake_or_payout2, contract2, currency2, duration_amount2, duration_unit2, symbol_vol2);
    }

    let buy2 = await api2.buy({
        "buy": String(proposal_id2),
        "price": parseFloat(stake_amount2)
    });

    contract_id2 = buy2.buy.contract_id;

    getProposalOpenContract2(contract_id2)

});




document.addEventListener('DOMContentLoaded', function () {
    var button2 = document.getElementById('down_purchase_btn');

    function addClickedClass2() {
        button2.classList.add('clicked');
    }

    function removeClickedClass2() {
        setTimeout(function () {
            button2.classList.remove('clicked');
        }, 200); // Adjust the timeout as needed
    }

    button2.addEventListener('mousedown', addClickedClass2);
    button2.addEventListener('mouseup', removeClickedClass2);

    button2.addEventListener('touchstart', addClickedClass2);
    button2.addEventListener('touchend', removeClickedClass2);
});



document.addEventListener('DOMContentLoaded', () => {
    const elements2 = document.querySelectorAll('.zero_d, .one_d, .two_d, .three_d, .four_d, .five_d, .six_d, .seven_d, .eight_d, .nine_d');

    elements2.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.add('active');
            setTimeout(() => {
                element.classList.remove('active');
            }, 200);  // Adjust the duration (in milliseconds) as needed
        });
    });
});





let currentPosition12 = 0;

function moveSlider2(number2) {
    const slider2 = document.getElementById('slide_trade_result');
    const container2 = document.getElementById('last_digit_responds');

    let stringnumber2 = null;
    if (number2 == 0) {
        stringnumber2 = 'zero';
    }
    if (number2 == 1) {
        stringnumber2 = 'one';
    }
    if (number2 == 2) {
        stringnumber2 = 'two';
    }
    if (number2 == 3) {
        stringnumber2 = 'three';
    }
    if (number2 == 4) {
        stringnumber2 = 'four';
    }
    if (number2 == 5) {
        stringnumber2 = 'five';
    }
    if (number2 == 6) {
        stringnumber2 = 'six';
    }
    if (number2 == 7) {
        stringnumber2 = 'seven';
    }
    if (number2 == 8) {
        stringnumber2 = 'eight';
    }
    if (number2 == 9) {
        stringnumber2 = 'nine';2
    }

    const target2 = document.querySelector(`.last_digits.${stringnumber2}`);

    if (target2) {
        const targetPosition2 = target2.offsetLeft;
        const currentSliderPosition2 = slider2.offsetLeft;

        const direction2 = targetPosition2 > currentSliderPosition2 ? 'left' : 'right';

        // Ensure the target position does not move the slider out of the container
        const maxTranslateX2 = container2.offsetWidth - slider2.offsetWidth;
        const newPosition2 = Math.min(Math.max(targetPosition2, 0), maxTranslateX2);

        if (direction2 === 'left') {
            slider2.style.transform = `translateX(${newPosition2}px)`;
        } else {
            slider2.style.transform = `translateX(${newPosition2}px)`;
        }

        currentPosition12 = newPosition2;
    }
}

function handleNewNumber2(randomNumber2) {
    const newPosition2 = randomNumber2;
    moveSlider2(newPosition2);
}











































































