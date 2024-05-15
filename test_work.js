const purchase_match_button = document.getElementById('purchase_match_button')
const purchase_differ_button = document.getElementById('purchase_differ_button')

var slide_trade_result = document.getElementById("slide_trade_result");
var last_digit_mirror = document.getElementById("last_digit_mirror");


var demo_account = document.getElementById("demo_account");
var real_account = document.getElementById("real_account");


var tick_stream = document.getElementById("tick_stream");
var tick_stream_symbols_drop = document.getElementById("tick_stream_symbols_drop");


var logi_id = document.getElementById("logi_id");
var account_balance = document.getElementById("account_balance");

var dropdown_icon_container = document.getElementById("dropdown_icon_container");

var volatilities = document.querySelectorAll(".vol");



var account_balance = document.getElementById("account_balance");

var trade_page_right_cont = document.getElementById("trade_page_right_cont");

var symbol_display = document.getElementById("symbol_display");

var submit_btn = document.getElementById("submit_btn");




import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';










const app_id_demo = sessionStorage.getItem('app_id_demo');
const token_demo = sessionStorage.getItem('token_demo');
const app_id_real = sessionStorage.getItem('app_id_real');
const token_real = sessionStorage.getItem('token_real');

// Use the retrieved values as needed
console.log(app_id_demo, token_demo, app_id_real, token_real);




var api = null

var connection = null

var apiAndAuthData = null

var symbol_vol = null

var message1 = null


var randomNumber = null;
var strNumber = null;


var authorize_response = null
// Loop through each element

var subscriptionId = null



var randomNumber2 = null

let balance_default = null


let buy_contract_id = null




import { animateButton } from './helper_functions/animate_button.js';

import { displayDrops } from './helper_functions/drop_drown_up_display.js';

































































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
            tick_stream_symbols_drop.children.item(0).textContent = formatNumber1(tickStreamQuote);
        } else {
            tick_stream_symbols_drop.children.item(0).textContent = formatNumber2(tickStreamQuote);
        }

    }
};












let api_id = null;
let api_token = null;



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
            logi_id.textContent = authorize_response.authorize.loginid
            account_balance.children.item(0).textContent = authorize_response.authorize.balance;
            balance_default = api.balance({ "balance": 1, "subscribe": 1 });
        }


        subscribeTicks();



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

























































const handleVolatilityClick = function () {
    unsubscribeTicks(); // Unsubscribe when volatility button is clicke


    // Logic for volatility buttons
    if (this.textContent == "Volatility 10 index") {
        symbol_vol = "R_10";
        symbol_display.textContent = "Volatility 10 index"
    } else if (this.textContent == "Volatility 25 index") {
        symbol_vol = "R_25";
        symbol_display.textContent = "Volatility 25 index"
    } else if (this.textContent == "Volatility 50 index") {
        symbol_vol = "R_50";
        symbol_display.textContent = "Volatility 50 index"
    } else if (this.textContent == "Volatility 75 index") {
        symbol_vol = "R_75";
        symbol_display.textContent = "Volatility 75 index"
    } else if (this.textContent == "Volatility 100 index") {
        symbol_vol = "R_100";
        symbol_display.textContent = "Volatility 100 index"
    } else {
        symbol_vol = "R_10";
        symbol_display.textContent = "Volatility 10 index"
    }

    api.forget(subscriptionId)


    setTimeout(() => {
        subscribeTicks()
        console.log("subscribed again")
    }, 1000)


};

volatilities.forEach(function (volatility) {
    // Attach handleVolatilityClick function to click event listener of each volatility button
    volatility.addEventListener("click", handleVolatilityClick);

});






























real_account.onclick = function () {
    message1 = real_account.textContent
    apiAndAuthData = initializeApi(message1)
}

demo_account.onclick = function () {
    message1 = demo_account.textContent
    apiAndAuthData = initializeApi(message1)
}







dropdown_icon_container.addEventListener("click", () => {
    displayDrops()
})




window.addEventListener('load', function () {

    initializeApi(message1)

    let getAwaitingResponses = setInterval(() => {

        if (authorize_response) {
            if (authorize_response.authorize.loginid) {
                logi_id.textContent = authorize_response.authorize.loginid
                clearInterval(getAwaitingResponses)
            } else {
                logi_id.textContent = "VRTC2324567"
            }

            if (authorize_response.authorize.balance) {
                var account_balance_fig = this.document.getElementById("account_balance_fig")
                if (account_balance_fig) {
                    account_balance_fig = authorize_response.authorize.balance
                } else {
                    console.log("not available")
                }
            } else {
                account_balance.textContent = "10 USD"
            }
        } else {
            console.log("no authorize response yet")
        }
    }, 2000);

});





















































function removeTradeList() {

    slide_trade_result.classList.remove(
        "slideInFromLeftAnimation0",
        "slideInFromLeftAnimation1",
        "slideInFromLeftAnimation2",
        "slideInFromLeftAnimation3",
        "slideInFromLeftAnimation4",
        "slideInFromLeftAnimation5",
        "slideInFromLeftAnimation6",
        "slideInFromLeftAnimation7",
        "slideInFromLeftAnimation8",
        "slideInFromLeftAnimation9"
    );

}








// Function to generate and store random number every second
function generateAndStoreRandomNumber() {

    removeTradeList()

    // If the condition is true, add the animation
    if (randomNumber == 0) {
        // Add the animation class
        slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
        // Ensure that display is set to block when adding the animation class
        slide_trade_result.style.display = "block";
        last_digit_mirror.textContent = randomNumber
    } else if (randomNumber == 1) {
        // Add the animation class
        slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
        // Ensure that display is set to block when adding the animation class
        slide_trade_result.style.display = "block";
        last_digit_mirror.textContent = randomNumber
    } else if (randomNumber == 2) {
        // Add the animation class
        slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
        // Ensure that display is set to block when adding the animation class
        slide_trade_result.style.display = "block";
        last_digit_mirror.textContent = randomNumber
    } else if (randomNumber == 3) {
        // Add the animation class
        slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
        // Ensure that display is set to block when adding the animation class
        slide_trade_result.style.display = "block";
        last_digit_mirror.textContent = randomNumber
    } else if (randomNumber == 4) {
        // Add the animation class
        slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
        // Ensure that display is set to block when adding the animation class
        slide_trade_result.style.display = "block";
        last_digit_mirror.textContent = randomNumber
    } else if (randomNumber == 5) {
        // Add the animation class
        slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
        // Ensure that display is set to block when adding the animation class
        slide_trade_result.style.display = "block";
        last_digit_mirror.textContent = randomNumber
    } else if (randomNumber == 6) {
        // Add the animation class
        slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
        // Ensure that display is set to block when adding the animation class
        slide_trade_result.style.display = "block";
        last_digit_mirror.textContent = randomNumber
    } else if (randomNumber == 7) {
        // Add the animation class
        slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
        // Ensure that display is set to block when adding the animation class
        slide_trade_result.style.display = "block";
        last_digit_mirror.textContent = randomNumber
    } else if (randomNumber == 8) {
        // Add the animation class
        slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
        // Ensure that display is set to block when adding the animation class
        slide_trade_result.style.display = "block";
        last_digit_mirror.textContent = randomNumber
    } else if (randomNumber == 9) {
        // Add the animation class
        slide_trade_result.classList.add("slideInFromLeftAnimation" + randomNumber);
        // Ensure that display is set to block when adding the animation class
        slide_trade_result.style.display = "block";
        last_digit_mirror.textContent = randomNumber
    } else if (randomNumber == null) {
        // Add the animation class
        slide_trade_result.classList.add("slideInFromLeftAnimation" + '0');
        // Ensure that display is set to block when adding the animation class
        slide_trade_result.style.display = "block";
        last_digit_mirror.textContent = randomNumber
    }
}

// Interval to call the function every second
setInterval(generateAndStoreRandomNumber, 1000);























































var dropdown_icon_times_display = document.getElementById("dropdown_icon_times_display")
var dropup_icon_times_display = document.getElementById("dropup_icon_times_display")
var times_display = document.getElementById("times_display")
var times_select_cont = document.getElementById("times_select_cont")
var times_display_drop_cont = document.getElementById("times_display_drop_cont")



var trade_types_select_cont = document.getElementById("trade_types_select_cont")
var drop_icon_trade_display_cont = document.getElementById("drop_icon_trade_display_cont")
var dropdown_icon_trade_display = document.getElementById("dropdown_icon_trade_display")
var dropup_icon_trade_display = document.getElementById("dropup_icon_trade_display")
var trade_types_display = document.getElementById("trade_types_display")



var times = document.querySelectorAll(".times");
var trade_types = document.querySelectorAll(".trade_types");



let duration_unit = null
let tradeType = null










drop_icon_trade_display_cont.addEventListener('click', function () {
    if (dropdown_icon_trade_display.style.display == 'block') {
        dropdown_icon_trade_display.style.display = "none"
        dropup_icon_trade_display.style.display = 'block'
        trade_types_select_cont.style.display = 'block'
    } else {
        dropdown_icon_trade_display.style.display = 'block'
        dropup_icon_trade_display.style.display = 'none'
        trade_types_select_cont.style.display = 'none'
    }
})




times_display_drop_cont.addEventListener("click", function () {

    if (dropdown_icon_times_display.style.display == 'block') {
        dropdown_icon_times_display.style.display = "none"
        dropup_icon_times_display.style.display = 'block'
        times_select_cont.style.display = 'block'
    } else {
        dropdown_icon_times_display.style.display = 'block'
        dropup_icon_times_display.style.display = 'none'
        times_select_cont.style.display = 'none'
    }


})




const handleDurationClick = function () {


    // Logic for volatility buttons_unit
    if (this.textContent == "tick") {
        duration_unit = "t";
        times_display.textContent = "tick"
    } else if (this.textContent == "seconnds") {
        duration_unit = "s";
        times_display.textContent = "seconnds"
    } else if (this.textContent == "minutes") {
        duration_unit = "m";
        times_display.textContent = "minutes"
    } else if (this.textContent == "hours") {
        duration_unit = "h";
        times_display.textContent = "hours"
    } else if (this.textContent == "days") {
        duration_unit = "d";
        times_display.textContent = "days"
    } else {
        duration_unit = "t";
        times_display.textContent = "ticks"
    }
};

times.forEach(function (time) {
    // Attach handleVolatilityClick function to click event listener of each volatility button
    time.addEventListener("click", handleDurationClick);

});




const handleTradeTypeClick = function () {

    // Logic for volatility buttons
    if (this.textContent == "Match/Differs") {
        tradeType = "Matches/differs";
        trade_types_display.textContent = "Match/Differs"
    } else if (this.textContent == "Even/Odd") {
        tradeType = "Even/Odd";
        trade_types_display.textContent = "Even/Odd"
    } else if (this.textContent == "Over/Under") {
        tradeType = "Over/Under";
        trade_types_display.textContent = "Over/Under"
    } else {
        tradeType = "Matches/Differs";
        trade_types_display.textContent = "Matches/Differs"
    }
};

trade_types.forEach(function (type) {
    // Attach handleVolatilityClick function to click event listener of each volatility button
    type.addEventListener("click", handleTradeTypeClick);

});






























































let duration_fig = null
let amount_fig = null
let barrier_fig = null

// Get the input element using its id
var duration_input_main = document.getElementById('duration_input_main');

// Function to handle input change
function handleChange1() {
    // Grab the value of the input
    duration_fig = duration_input_main.value;
    console.log(duration_fig)
}

// Add an event listener to listen for keyup events
duration_input_main.addEventListener('keyup', handleChange1);


// Get the input element using its id
var amount_input_main = document.getElementById('amount_input_main');

// Function to handle input change
function handleChange2() {
    // Grab the value of the input
    amount_fig = amount_input_main.value;
    console.log(amount_fig)
}

// Add an event listener to listen for keyup events
amount_input_main.addEventListener('keyup', handleChange2);


// Get the input element using its id
var barrier_input_main = document.getElementById('barrier_input_main');

// Function to handle input change
function handleChange3() {
    // Grab the value of the input
    barrier_fig = barrier_input_main.value;
    console.log(barrier_fig)
}

// Add an event listener to listen for keyup events
barrier_input_main.addEventListener('keyup', handleChange3);



var hamburger1 = document.getElementById("hamburger1")
var hamburger2 = document.getElementById("hamburger2")
var amount_duration_cont = document.getElementById("amount_duration_cont")
var trade_page_top_right = document.getElementById("trade_page_top_right")
var btn_show_first = document.getElementById("btn_show_first")
var btn_show_second = document.getElementById("btn_show_second")
var overlay = document.getElementById("overlay")

hamburger1.addEventListener("click", function () {
    if (amount_duration_cont.style.display == 'none' && overlay.style.display == 'none') {
        amount_duration_cont.style.display = 'flex'
        overlay.style.display = 'flex'
    } else {
        amount_duration_cont.style.display = 'none'
        overlay.style.display = 'none'
    }

    if (trade_page_top_right.style.display == 'flex') {
        trade_page_top_right.style.display = 'none'
    }
})

hamburger2.addEventListener("click", function () {
    if (trade_page_top_right.style.display == 'none' && overlay.style.display == 'none') {
        trade_page_top_right.style.display = 'flex'
        overlay.style.display = 'flex'
    } else {
        trade_page_top_right.style.display = 'none'
        overlay.style.display = 'none'
    }

    if (amount_duration_cont.style.display == 'flex') {
        amount_duration_cont.style.display = 'none'
    }

})



window.addEventListener('resize', function () {
    if (window.innerWidth > 1450) {
        amount_duration_cont.style.display = 'flex';
        btn_show_first.style.display = 'none'
    } else {
        amount_duration_cont.style.display = 'none';
        btn_show_first.style.display = 'flex'
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 1350) {
        trade_page_top_right.style.display = 'flex';
        btn_show_second.style.display = 'none'
    } else {
        trade_page_top_right.style.display = 'none';
        btn_show_second.style.display = 'flex'
    }
});
















































































































let proposalDigitDiffer = {
    "proposal": 1,
    "amount": 10,
    "barrier": "9",
    "basis": "stake",
    "contract_type": "DIGITDIFF",
    "currency": "USD",
    "duration": 1,
    "duration_unit": "t",
    "product_type": "basic",
    "symbol": "R_10"
}

let proposalDigitMatch = {
    "proposal": 1,
    "amount": 10,
    "barrier": "9",
    "basis": "stake",
    "contract_type": "DIGITMATCH",
    "currency": "USD",
    "duration": 1,
    "duration_unit": "t",
    "product_type": "basic",
    "symbol": "R_10"
}







// Send a ping every 30 seconds to keep the connection alive
// Needs to use the same websocket connection as the one you want to maintain.
const ping = () => {
    setInterval(() => {
        api.ping();
    }, 30000);
};

const proposalResponse = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        console.log('Error: %s ', data.error.message);
        connection.removeEventListener('message', proposalResponse, false);
        await api.disconnect();
    } else if (data.msg_type === 'proposal_open_contract') {
        console.log('Details: %s', data.proposal_open_contract.longcode);
        console.log('Ask Price: %s', data.proposal_open_contract.current_spot_display_value);
        console.log('Payout: %f', data.proposal_open_contract.payout);
        console.log('Spot: %f', data.proposal_open_contract.current_spot);
    } else if (data.msg_type === 'proposal') {
        console.log('Details: %s', data.proposal.longcode);
        console.log('Ask Price: %s', data.proposal.display_value);
        console.log('Payout: %f', data.proposal.payout);
        console.log('Spot: %f', data.proposal.spot);
        console.log('date_start: %f', data.proposal.date_start);
        console.log('date_expiry: %f', data.proposal.date_expiry);
    } else if (data.msg_type === 'ping') {
        console.log('ping');
    }
};

const proposalOpenContractResponse = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        console.log('Error: %s ', data.error.message);
        connection.removeEventListener('message', proposalOpenContractResponse, false);
        await api.disconnect();
    } else if (data.msg_type === 'proposal_open_contract') {
        console.log('Details: %s', data.proposal_open_contract.longcode);
        console.log('Ask Price: %s', data.proposal_open_contract.current_spot_display_value);
        console.log('Payout: %f', data.proposal_open_contract.payout);
        console.log('Spot: %f', data.proposal_open_contract.current_spot);
    } else if (data.msg_type === 'ping') {
        console.log('ping');
    }
};


const balance = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        console.log('Error: %s ', data.error.message);
        connection.removeEventListener('message', balance, false);
        await api.disconnect();
    } else if (data.msg_type === 'balance') {
        console.log('balance: %s', data.balance.balance);
        console.log('Ask Price: %s', data.balance.loginid);
        console.log('currency: %f', data.balance.currency);
    } else if (data.msg_type === 'ping') {
        console.log('ping');
    }
};




const checkSignal = () => {
    proposal();
    ping();
    connection.addEventListener('message', proposalResponse);
};

const endCall = () => {
    connection.removeEventListener('message', proposalResponse, false);
    proposal().unsubscribe();
};








async function seeContractResult() {
    if (api) {
        let proposalOpenContract = await api.proposalOpenContract({ "proposal_open_contract": 1, "contract_id": buy_contract_id, "subscribe": 1 })

        if (proposalOpenContract) {
            console.log(proposalOpenContract)
        } else {
            console.log("no proposal open contract yet")
        }

    } else {
        console.log("no api yet")
    }
}










purchase_match_button.onclick = function () {

    animateButton(purchase_match_button)
    let proposeButton = purchase_match_button.textContent

    async function propose() {
        let proposeRes = await api.proposal(proposalDigitMatch)
        console.log(proposeRes)
        let buy = await api.buy({ "buy": proposeRes.proposal.id, "price": 10 })
        account_balance.children.item(0).textContent = buy.buy.balance_after
        buy_contract_id = buy.buy.contract_id


        setTimeout(() => {
            let getBal = async () => {
                let balance = await api.balance({ "balance": 1 })
                if (balance.balance.balance) {
                    var account_balance_fig = document.getElementById("account_balance_fig")
                    if (account_balance_fig) {
                        account_balance_fig.textContent = balance.balance.balance
                        console.log(balance.balance.balance)
                        console.log(balance)
                    } else {
                        console.log("no account balace fig")
                    }
                } else {
                    console.log(" no balance.balance.balance")
                }


            }
            getBal()
        }, 3000)

    }

    propose()

    // Options for the observer (which mutations to observe)
    const config = { attributes: false, childList: true, subtree: false, characterData: true };

    // Callback function to execute when mutations are observed
    const callback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.target === tick_stream) {
                getRandom(strNumber);
                observer.disconnect(); // Disconnect the observer after performing the task
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(tick_stream, config);


};

purchase_differ_button.onclick = function () {
    animateButton(purchase_differ_button)
    let proposeButton = purchase_differ_button.textContent

    async function propose() {
        let proposeRes = await api.proposal(proposalDigitDiffer)
        console.log(proposeRes)
        let buy = await api.buy({ "buy": proposeRes.proposal.id, "price": 10 })
        account_balance.children.item(0).textContent = buy.buy.balance_after
        console.log(buy)
        buy_contract_id = buy.buy.contract_id


        setTimeout(() => {
            let getBal = async () => {
                let balance = await api.balance({ "balance": 1 })
                if (balance.balance.balance) {
                    var account_balance_fig = document.getElementById("account_balance_fig")
                    if (account_balance_fig) {
                        account_balance_fig.textContent = balance.balance.balance
                        console.log(balance.balance.balance)
                        console.log(balance)
                    } else {
                        console.log("no account balace fig")
                    }
                } else {
                    console.log(" no balance.balance.balance")
                }


            }
            getBal()
        }, 3000)
    }

    propose()

    // Options for the observer (which mutations to observe)
    const config = { attributes: false, childList: true, subtree: false, characterData: true };

    // Callback function to execute when mutations are observed
    const callback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.target === tick_stream) {
                getRandom(strNumber);
                observer.disconnect(); // Disconnect the observer after performing the task
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(tick_stream, config);

};











// Function to add zero to single-digit numbers
function addZeroIfNeeded(number) {
    return (number < 10 ? '0' : '') + number;
}

// Function to display current time in the specified element
function displayCurrentTime() {
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth() + 1; // Months are zero-based
    var day = currentTime.getDate();
    var hours = currentTime.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var formattedTime = year + "-" + addZeroIfNeeded(month) + "-" + addZeroIfNeeded(day) + " " + addZeroIfNeeded(hours) + ":" + addZeroIfNeeded(minutes) + ":" + addZeroIfNeeded(seconds) + " " + ampm;
    targetTime.push(formattedTime)
}





var botIcon = document.getElementById("bot");

botIcon.addEventListener("click", () => {
    var botAnalyzer = document.getElementById("table_container");
    botAnalyzer.classList.toggle("hidden");
    botIcon.classList.toggle('shift');
})


var trCounter = 0; // Initialize a counter for <tr> elements
var tdCounter = 0; // Initialize a counter for <td> elements

function createTRWithTD(count) {
    // Create a new <tr> element
    var tr = document.createElement('tr');

    // Set unique ID and classname for the <tr>
    tr.id = 'tr' + trCounter;
    tr.className = 'tr-class' + trCounter;

    for (var i = 0; i < count; i++) {
        // Create a new <td> element
        var td = document.createElement('td');

        // Add class and id based on counter
        td.className = 'class' + tdCounter;
        td.id = 'id' + tdCounter;

        // Increment counter for the next call
        tdCounter++;

        // Append the <td> element to the <tr>
        tr.appendChild(td);
    }

    // Increment counter for the next <tr>
    trCounter++;

    // Return the created <tr> element
    return tr;
}





let targetValue = []
let targetTime = []

let currentRandom = null

let lastNumber1 = currentRandom;
let lastNumber2 = lastNumber1;
// let lastNumber3 = lastNumber2;

let currentTimePush = null

window.onload = function () {
    let checkApi = setInterval(() => {
        if (api) {
            const tickResponse2 = async (res) => {
                const data = JSON.parse(res.data);
                if (data.error !== undefined) {
                    console.log('Error : ', data.error.message);
                    connection.removeEventListener('message', tickResponse2, false);
                    await api.disconnect();
                }

                // Define currentRandom outside the block

                function getRandom1(strNumber1) {
                    return randomNumber2 = strNumber1.charAt(strNumber1.length - 1);
                }

                function getRandom2(strNumber2) {
                    return randomNumber2 = strNumber2.charAt(strNumber2.length - 1);
                }


                // lastNumber3 = lastNumber2
                lastNumber2 = lastNumber1
                lastNumber1 = currentRandom

                if (data.msg_type === 'tick') {
                    let subscriptionId2 = data.subscription.id;
                    let tickStreamQuote2 = data.tick.quote;

                    function formatNumber3(tickStreamQuote2) {
                        let numStr = tickStreamQuote2.toString();
                        let parts = numStr.split('.');
                        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        if (parts.length > 1) {
                            parts[1] = parts[1].padEnd(3, '0');
                        } else {
                            parts.push('000');
                        }
                        return parts.join('.');
                    }

                    function formatNumber4(tickStreamQuote2) {
                        let numStr = tickStreamQuote2.toString();
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

                        let strNumber1 = formatNumber3(tickStreamQuote2).toString();
                        currentRandom = getRandom1(strNumber1);
                    } else {

                        let strNumber2 = formatNumber4(tickStreamQuote2).toString();
                        currentRandom = getRandom2(strNumber2);
                    }
                }



                if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
                    if (lastNumber2 == lastNumber1 && lastNumber2 !== currentRandom && lastNumber1 !== currentRandom) {
                        // console.log(lastNumber2, lastNumber1, currentRandom)
                        targetValue.push(lastNumber2)
                        displayCurrentTime()
                        currentTimePush = new Date();
                        currentTimePush = new Date(currentTimePush.getTime() + 1000);
                        // console.log(targetValue)
                        // console.log(targetTime)
                    }
                }

                let currentTimeCheck = new Date();

                if (currentTimeCheck > currentTimePush) {
                    if (targetValue.length > 0 && targetTime.length > 0) {
                        for (let i = 0; i < targetValue.length; i++) {
                            if (targetValue[i] === lastNumber1 && targetValue[i] !== currentRandom) {
                                // console.log("seen", targetValue[i], "caught", lastNumber1, "pass", currentRandom)
                                targetValue.splice(i, 1)
                                targetTime.splice(i, 1)
                                // console.log(targetValue)
                                // console.log(targetTime)
                            }
                        }
                    }
                }

            };




            const tickStream2 = () => api.subscribe({ "ticks": symbol_vol == null ? 'R_10' : symbol_vol });




            const subscribeTicks2 = async () => {
                await tickStream2();
                connection.addEventListener('message', tickResponse2);
            };

            subscribeTicks2()



            const unsubscribeTicks2 = () => {
                connection.removeEventListener('message', tickResponse2, false);
                tickStream2().unsubscribe();
            };


            clearInterval(checkApi)
        } else {
            console.log("theres no api", api)
        }
    }, 1000)
}




















































const ticks_history_request = {
    ticks_history: 'R_10',
    adjust_start_time: 1,
    count: 50000,
    end: 'latest',
    start: 1,
    style: 'ticks',
};

const ticksHistoryResponse = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        console.log('Error : ', data.error.message);
        connection.removeEventListener('message', ticksHistoryResponse, false);
        await api.disconnect();
    }
    if (data.msg_type === 'history') {
        console.log(data.history.prices);

        let tickData = data.history.prices;

        if (tickData) {

            // Create a CSV content
            let csvContent = "Tick Data,Last Digit,Row Number\n";

            // Add data rows
            tickData.forEach(function (value, index) {
                const tickValue = value.toString(); // Convert value to string
                const lastDigit = tickValue[tickValue.length - 1]; // Get the last character (last digit)
                const rowNumber = index + 1; // Row number starts from 1
                csvContent += `${tickValue},${lastDigit},${rowNumber}\n`;
            });

            // Create a Blob object with the CSV content
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

            // Create a download link
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "tick_data.csv");
            document.body.appendChild(link); // Append the link to the DOM
            link.click(); // Click the link to trigger the download

            // Remove the temporary URL
            setTimeout(function () {
                URL.revokeObjectURL(url);
            }, 100);
        } else {
            console.log("no tick data yet")
        }

    }
    connection.removeEventListener('message', ticksHistoryResponse, false);
};

const getTicksHistory = async () => {
    connection.addEventListener('message', ticksHistoryResponse);
    await api.ticksHistory(ticks_history_request);
};

const ticks_history_button = document.getElementById('ticks_history');
ticks_history_button.addEventListener('click', getTicksHistory);





