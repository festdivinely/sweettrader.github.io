// import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';

// const app_id_demo = 53334;
// const token_demo = "4FB1rDGbXX6zbKs";
// const app_id_real = 53335;
// const token_real = "Jv4SnlKSnzwkymM";


// let tick_stream = document.getElementById('vol_100')
// let last_digit_input = document.getElementById('last_digit_input')


// let trade_type_secound = document.getElementById("trade_type_secound")

// let stream100 = document.getElementById('stream100')



// let api = null

// let connection = null

// let apiAndAuthData = null


// let last_digit_prediction_local_st = null

// let barrier_local_st = null

// let symbol_vol_text_local_st = null

// let contract_text_local_st = null

// let duration_amount_local_st = null

// let stake_amount_local_st = null

// let symbol_vol_local_st = null

// let duration_unit_local_st = null

// let last_digit_prediction_or_barrier_local_st = null

// let currency_local_st = null

// let stake_or_payout_local_st = null

// let proposal_id_local_st = null





// let last_digit_prediction_cookie = null

// let barrier_cookie = null



// let symbol_vol_text_cookie = null

// let contract_text_cookie = null

// let duration_amount_cookie = null

// let stake_amount_cookie = null

// let symbol_vol_cookie = null

// let duration_unit_cookie = null

// let last_digit_prediction_or_barrier_cookie = null

// let currency_cookie = null

// let stake_or_payout_cookie = null

// let proposal_id_cookie = null







// let duration_unit = null

// let symbol_vol = null

// let duration_amount = null

// let stake_amount = null

// let last_digit_prediction_or_barrier = null

// let currency = null

// let contract = null

// let stake_or_payout = null

// let proposal_id = null






// let message1 = null


// let randomNumber = null;


// let strNumber = null;


// let authorize_response = null


// let subscriptionId = null



// let randomNumber2 = null




// let buy_contract_id = null


// let api_id = null;
// let api_token = null;




// let def_price_up = null
// let def_payout_up = null
// let def_profit_up = null


// let website_status_info = 'initial'



// let symbol100  = null




// // Function to set a cookie
// function setCookie(name, value, days) {
//     const date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     const expires = "expires=" + date.toUTCString();
//     document.cookie = name + "=" + value + ";" + expires + ";path=/";
// }

// // Function to get a cookie
// function getCookie(name) {
//     const nameEQ = name + "=";
//     const ca = document.cookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//     }
//     return null;
// }



// function deleteCookie(name) {
//     document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// }




// document.addEventListener('DOMContentLoaded', function() {
//     setCookie('symbol100', 'R_100')
//     localStorage.setItem('symbol100', 'R_100')

//     symbol100 = localStorage.getItem('symbol100')
//   });




// /**
// * Calculate the net profit and return percentage
// * @param {number} stake - The amount staked
// * @param {number} payout - The payout amount
// * @returns {Object} An object containing netProfit and returnPercentage
// */
// function calculateNetProfitAndReturn1(stake, payout) {
//     // Calculate Net Profit
//     const netProfit = payout - stake;

//     // Calculate Return as a percentage
//     const returnPercentage = (netProfit / stake) * 100;

//     return {
//         netProfit: netProfit.toFixed(2), // Format to 2 decimal places
//         returnPercentage: returnPercentage.toFixed(1) // Format to 1 decimal place
//     };
// }



// function displayProposalResult2(data, stake1, payout1) {
//     const result1 = calculateNetProfitAndReturn1(stake1, payout1);
//     return {
//         netProPerc: `Net Profit: ${result1.netProfit} USD | Return: ${result1.returnPercentage}%`,
//         NetProfit: result1.netProfit,
//         percentage: result1.returnPercentage
//     };
// }





// let website_status = () => api.websiteStatus({ "website_status": 1, "subscribe": 1 });


// const websiteStatusResponse = async (res) => {
//     const data = JSON.parse(res.data);

//     if (data.error !== undefined) {
//         console.log('Error : ', data.error?.message);
//         connection.removeEventListener('message', websiteStatusResponse, false);
//         await api.disconnect();
//     }

//     if (data.msg_type === 'website_status') {
//         let siteStatus = data.website_status.site_status;
//         website_status_info = siteStatus
//     }

// };


// const getWebsiteStatus = async () => {
//     connection.addEventListener('message', websiteStatusResponse);
//     await website_status()
// };




// const ping = () => {
//     setInterval(() => {
//         api.ping();
//     }, 30000);
// };

// const websitePingResponse = async (res) => {
//     const data = JSON.parse(res.data);

//     if (data.error !== undefined) {
//         console.log('Error : ', data.error?.message);
//         connection.removeEventListener('message', websitePingResponse, false);
//         await api.disconnect();
//     }

//     if (data.msg_type === 'ping') {

//     }
// };

// const getWebsitePing = async () => {
//     connection.addEventListener('message', websitePingResponse);
//     ping();
// };







// // Function to toggle flash and fadeout effect
// function flashAndFadeout(random, show_for_two, flash_color, fadeout_color) {

//     let alert_box = null

//     if (random == 0) {
//         alert_box = 'zero'
//     }
//     if (random == 1) {
//         alert_box = 'one'
//     }
//     if (random == 2) {
//         alert_box = 'two'
//     }
//     if (random == 3) {
//         alert_box = 'three'
//     }
//     if (random == 4) {
//         alert_box = 'four'
//     }
//     if (random == 5) {
//         alert_box = 'five'
//     }
//     if (random == 6) {
//         alert_box = 'six'
//     }
//     if (random == 7) {
//         alert_box = 'seven'
//     }
//     if (random == 8) {
//         alert_box = 'eight'
//     }
//     if (random == 9) {
//         alert_box = 'nine'
//     }

//     var textElement = document.querySelector(`.first_alert5_${alert_box}`);
//     if (textElement) {
//         textElement.textContent = show_for_two
//         textElement.classList.add(`${flash_color}`);

//         setTimeout(function () {
//             textElement.classList.remove(`${flash_color}`);
//             textElement.classList.add(`${fadeout_color}`);
//             setTimeout(function () {
//                 textElement.classList.remove(`${fadeout_color}`);
//             }, 500); // Adjust as needed
//         }, 1000); // Adjust as needed
//     } else {
//         console.error(`Element with class '.first_alert5_${alert_box}' not found.`);
//     }
// }




// function getRandom(strNumber) {
//     return randomNumber = strNumber.charAt(strNumber.length - 1);
// }


// let currentRandom = null

// let lastNumber1 = currentRandom;
// let lastNumber2 = lastNumber1;
// let lastNumber3 = lastNumber2;



// const tickStream = () => api.subscribe({ "ticks": 'R_100' });


// const tickResponse = async (res) => {
//     const data = JSON.parse(res.data);
//     if (data.error !== undefined) {
//         console.log('Error : ', data.error.message);
//         connection.removeEventListener('message', tickResponse, false);
//         await api.disconnect();
//     }



//     function getRandom1(strNumber1) {
//         return randomNumber = strNumber1.charAt(strNumber1.length - 1);
//     }



//     lastNumber3 = lastNumber2
//     lastNumber2 = lastNumber1
//     lastNumber1 = currentRandom

//     if (data.msg_type === 'tick') {
//         subscriptionId = data.subscription.id;
//         let tickStreamQuote = data.tick.quote;

//         function formatToFourDecimalPlaces(tickStreamQuote) {
//             let numStr = tickStreamQuote.toString();
//             let parts = numStr.split('.');
//             parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//             if (parts.length > 1) {
//                 parts[1] = parts[1].padEnd(4, '0');
//             } else {
//                 parts.push('0000');
//             }
//             return parts.join('.');
//         }

//         function formatToThreeDecimalPlaces(tickStreamQuote) {
//             let numStr = tickStreamQuote.toString();
//             let parts = numStr.split('.');
//             parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//             if (parts.length > 1) {
//                 parts[1] = parts[1].padEnd(3, '0');
//             } else {
//                 parts.push('000');
//             }
//             return parts.join('.');
//         }

//         function formatToTwoDecimalPlaces(tickStreamQuote) {
//             let numStr = tickStreamQuote.toString();
//             let parts = numStr.split('.');
//             parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//             if (parts.length > 1) {
//                 parts[1] = parts[1].padEnd(2, '0');
//             } else {
//                 parts.push('00');
//             }
//             return parts.join('.');
//         }



//         if (data.echo_req.ticks === "R_50" || data.echo_req.ticks === "R_75") {
//             strNumber = formatToFourDecimalPlaces(tickStreamQuote).toString();
//             currentRandom = getRandom1(strNumber);
//         } else if (data.echo_req.ticks === "R_100") {
//             strNumber = formatToTwoDecimalPlaces(tickStreamQuote).toString();
//             currentRandom = getRandom1(strNumber);
//         } else {
//             strNumber = formatToThreeDecimalPlaces(tickStreamQuote).toString();
//             currentRandom = getRandom1(strNumber);
//         }

//         tick_stream.textContent = strNumber;
//         stream100.textContent = strNumber;

//         if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
//             if (lastNumber1 == currentRandom) {
//                 let show_for_two = '2x'
//                 let flash_color = 'flash1'
//                 let fadeout_color = 'fadeout1'
//                 flashAndFadeout(currentRandom, show_for_two, flash_color, fadeout_color)
//             }
//         }

//         if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
//             if (lastNumber2 == lastNumber1 && lastNumber2 == currentRandom && lastNumber1 == currentRandom) {
//                 let show_for_two = '3x'
//                 let flash_color = 'flash2'
//                 let fadeout_color = 'fadeout2'
//                 flashAndFadeout(currentRandom, show_for_two, flash_color, fadeout_color)
//             }
//         }


//     }

// };






// async function initializeApi(message1) {

//     try {

//         if (message1 === "Demo Account" || message1 === null) {
//             api_id = app_id_demo;
//             api_token = token_demo;
//             connection = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${api_id}`);
//         } else if (message1 === "Real Account") {
//             api_id = app_id_real;
//             api_token = token_real;
//             connection = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${api_id}`);

//         } else if (api_id == null) {
//             console.log("no app id yet")
//         }
//     } catch (error) {
//         console.log("no app id yet")
//     }



//     try {
//         api = new DerivAPIBasic({ connection });
//         authorize_response = await api.authorize(api_token);
//         console.log(authorize_response)
//         if (!authorize_response.authorize) {
//             console.log("Authorization failed. Please check your API token.");
//             return null;
//         } else {

//             console.log("authirzed at vol10 js")

//         }

//         subscribeTicks()
//         getWebsiteStatus()
//         getWebsitePing()

//         return { api, authorize_response };

//     } catch (error) {
//         console.error("Error occurred during API initialization:", error);
//         return null;
//     }
// }




// const subscribeTicks = async () => {
//     await tickStream();
//     connection.addEventListener('message', tickResponse);
// };

// const unsubscribeTicks = () => {
//     connection.removeEventListener('message', tickResponse, false);
//     tickStream().unsubscribe();
// };




// window.addEventListener('load', function () {

//     duration_amount_cookie = getCookie('duration_amount_cookie');
//     stake_amount_cookie = getCookie('stake_amount_cookie');
//     duration_unit_cookie = getCookie('duration_unit_cookie');
//     symbol_vol_cookie = getCookie('symbol_vol_cookie');
//     currency_cookie = getCookie('ActiveCurrency')
//     contract_text_cookie = getCookie('contract_text_cookie');
//     stake_or_payout_cookie = getCookie('stake_or_payout_cookie')
//     last_digit_prediction_cookie = getCookie('last_digit_prediction_cookie')


//     if (last_digit_prediction_cookie) {
//         last_digit_prediction_or_barrier = last_digit_prediction_or_barrier
//     } else {
//         let numericValue = last_digit_input.value
//         last_digit_prediction_or_barrier = numericValue
//     }


//     if (symbol_vol_cookie) {
//         symbol_vol = symbol_vol_cookie;
//     } else {
//         symbol_vol = "R_100";
//     }

//     if (duration_unit_cookie) {
//         duration_unit = duration_unit_cookie;
//     } else {
//         duration_unit = "t";
//     }


//     if (duration_amount_cookie) {
//         duration_amount = parseInt(duration_amount_cookie, 10);
//     } else {
//         duration_amount = 1;
//     }


//     if (stake_amount_cookie) {
//         stake_amount = parseFloat(stake_amount_cookie);
//     } else {
//         stake_amount = 10;
//     }


//     if (currency_cookie) {
//         currency = currency_cookie;
//     } else {
//         currency = "USD";
//     }


//     if (contract_text_cookie) {
//         contract = contract_text_cookie;
//     } else {
//         contract = "Matches/Differs";
//     }

//     if (stake_or_payout_cookie) {
//         stake_or_payout = stake_or_payout_cookie;
//     } else {
//         stake_or_payout = "stake";
//     }


//     initializeApi(message1)
//     let getAwaitingResponses = setInterval(() => {

//         if (authorize_response) {
//             clearInterval(getAwaitingResponses)
//         } else {
//             console.log("no authorize response yet")
//         }
//     }, 2000);

// });







// async function order_propose(api, amount, last_digit_prediction_or_barrier, stake_or_payout, contract_type, currency, duration, duration_unit, symbol) {
//     return new Promise((resolve, reject) => {
//         let contract_type_set = null;

//         if (contract_type === 'Matches/Differs') {
//             contract_type_set = 'DIGITDIFF';
//         }

//         let proposal_to_buy = {
//             "proposal": 1,
//             "amount": parseFloat(amount),
//             "barrier": parseInt(last_digit_prediction_or_barrier),
//             "basis": String(stake_or_payout),
//             "contract_type": String(contract_type_set),
//             "currency": String(currency),
//             "duration": parseInt(duration),
//             "duration_unit": String(duration_unit),
//             "product_type": "basic",
//             "symbol": String(symbol)
//         };

//         const proposalResponse = async (res) => {
//             const data = JSON.parse(res.data);
//             if (data.error !== undefined) {
//                 console.log('Error: %s ', data.error.message);
//                 connection.removeEventListener('message', proposalResponse, false);
//                 await api.disconnect();
//                 reject(new Error('Error in proposal'));
//             } else if (data.msg_type === 'proposal') {
//                 console.log(data);

//                 proposal_id = data.proposal.id;

//                 let calc = displayProposalResult2(data, data.proposal.display_value, data.proposal.payout);

//                 def_price_up = data.proposal.display_value;
//                 def_payout_up = data.proposal.payout;
//                 def_profit_up = calc.NetProfit;

//                 console.log('Details: %s', data.proposal.longcode);
//                 console.log('Ask Price: %s', data.proposal.display_value);
//                 console.log('Payout: %f', data.proposal.payout);
//                 console.log('Spot: %f', data.proposal.spot);
//                 console.log('proposal id: %s', data.proposal.id); // Use %s for string values

//                 // Ensure proposal_id is correctly assigned
//                 console.log('Assigned proposal_id:', proposal_id); // Optional: check the value assigned

//                 resolve(); // Resolve the promise after setting proposal_id
//             }
//         };

//         const getProposal = async () => {
//             connection.addEventListener('message', proposalResponse);
//             await api.proposal(proposal_to_buy);
//         };

//         getProposal();
//     });
// }



// const unsubscribeProposal = () => {
//     connection.removeEventListener('message', proposalResponse, false);
// };










// function convertTimestampTo12HourTime(timestamp) {
//     // Convert the timestamp to a Date object
//     const date = new Date(timestamp * 1000);

//     // Extract hours, minutes, and seconds
//     let hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();

//     // Determine AM or PM
//     const ampm = hours >= 12 ? 'PM' : 'AM';

//     // Convert hours from 24-hour time to 12-hour time
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'

//     // Format minutes and seconds to be two digits
//     const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
//     const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

//     // Combine into a formatted time string
//     const formattedTime = `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;


//     return formattedTime;
// }





// function formatNumberAndBoldLastDecimal(number) {
//     // Split the number into integer and decimal parts
//     let [integerPart, decimalPart] = number.toString().split('.');

//     // Format the integer part with commas
//     let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//     // Make the last digit of the decimal part bold with a class
//     if (decimalPart) {
//         let lastDecimalDigit = decimalPart.slice(-1);
//         decimalPart = decimalPart.slice(0, -1) + `<span class="bold-last-decimal">` + lastDecimalDigit + `</span>`;
//     }

//     // Combine the integer and decimal parts
//     let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

//     return formattedNumber;
// }





// let contract_status_html = document.getElementById('contract_status')
// let end_tic_off_trade = document.getElementById('end_tic_off_trade')
// let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount')
// let profit_figure_amount = document.getElementById('profit_figure_amount')
// let buy_price_figure_amount = document.getElementById('buy_price_figure_amount')
// let result_currency_html = document.querySelectorAll('.result_currency')
// let transaction_refrence_figure = document.getElementById('transaction_refrence_figure')
// let trade_start_time = document.getElementById('trade_start_time')
// let buy_price_text = document.getElementById('buy_price_text')
// let price_after_trade_text = document.getElementById('price_after_trade_text')
// let profit_text = document.getElementById('profit_text')







// let countdown_trade = 0

// function before_trade() {
//     countdown_trade = 0
//     let allDigits = document.querySelectorAll('.ldgs')
//     let buy_price_text = document.getElementById('buy_price_text')
//     let price_after_trade_text = document.getElementById('price_after_trade_text')
//     let profit_text = document.getElementById('profit_text')
//     let durr_amount_prop_count = document.getElementById('durr_amount_prop_count')
//     let slide_trade_result = document.getElementById('slide_trade_result')
//     let buy_price_figure_amount = document.getElementById('buy_price_figure_amount')
//     let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount')
//     let profit_figure_amount = document.getElementById('profit_figure_amount')
//     contract_status_html.textContent = ''
//     buy_price_text.textContent = 'Total cost'
//     price_after_trade_text.textContent = 'Potential payout'
//     profit_text.textContent = 'Potential profit'
//     durr_amount_prop_count.textContent = countdown_trade
//     durr_amount_prop.textContent = duration_amount
//     buy_price_figure_amount.textContent = def_price_up
//     price_after_trade_figure_amount.textContent = def_payout_up
//     profit_figure_amount.textContent = def_profit_up

//     let trade_type_secound = getCookie('contract_text_cookie')

//     if (trade_type_secound == 'Matches/Differs' || trade_type_secound == 'Over/Under') {
//         allDigits.forEach(function (digit) {
//             if (digit.classList.contains('win_loose_color')) {
//                 digit.classList.remove('win_loose_color'); // Removed the dot (.)
//             }

//             if (digit.classList.contains('loose_digit-color')) {
//                 digit.classList.remove('loose_digit-color') // Removed the dot (.)
//             }

//             if (slide_trade_result.classList.contains('win_color')) {
//                 slide_trade_result.classList.remove('win_color')
//             }

//             if (slide_trade_result.classList.contains('lose_color')) {
//                 slide_trade_result.classList.remove('lose_color')
//             }
//         });
//     }



//     if (trade_type_secound == 'Matches/Differs') {
//         allDigits.forEach(function (digit) {
//             if (digit.textContent != last_digit_prediction_or_barrier) {
//                 digit.classList.add('win_loose_color'); // Removed the dot (.)
//             } else {
//                 digit.classList.remove('win_loose_color');
//             }
//         });
//     }

//     if (trade_type_secound == 'Over/Under') {
//         allDigits.forEach(function (digit) {
//             if (parseInt(digit.textContent) < last_digit_prediction_or_barrier) {
//                 digit.classList.add('win_loose_color'); // Removed the dot (.)
//             } else {
//                 digit.classList.remove('win_loose_color');
//             }
//         });
//     }
// }


// function after_trade(status, endDigit) {
//     let slide_trade_result = document.getElementById('slide_trade_result')
//     let allDigits = document.querySelectorAll('.ldgs')
//     let trade_type_secound = getCookie('contract_text_cookie')
//     if (trade_type_secound == 'Matches/Differs' || trade_type_secound == 'Over/Under') {
//         if (status === 'won') {
//             slide_trade_result.classList.add('win_color')
//         } else if (status === 'lost') {
//             slide_trade_result.classList.add('lose_color')
//             allDigits.forEach(function (digit) {
//                 if (endDigit === digit.textContent) {
//                     digit.classList.add('loose_digit-color')
//                 } else {
//                     digit.classList.remove('loose_digit-color')
//                 }
//             })
//         }
//     }
// }








// let allProposalOpenContract = []
// let longcodeProp = null
// let contract_ids_buy = null
// let contract_status = null
// let last_tick = null
// let profit_or_loss = null
// let final_price = null
// let payout_result = null
// let buy_price = null
// let contract_currency = null
// let time_of_trade = null
// let every_tick = null


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
//         longcodeProp = data.proposal_open_contract.longcode
//         allProposalOpenContract.push(data.proposal_open_contract.tick_stream)
//         document.getElementById('proposal_information').textContent = longcodeProp


//         console.log(allProposalOpenContract)
//         if (allProposalOpenContract.length > 0 && allProposalOpenContract[allProposalOpenContract.length - 1].length > 0) {
//             let lastSubArray = allProposalOpenContract[allProposalOpenContract.length - 1];
//             let lastElementOfLastSubArray = lastSubArray[lastSubArray.length - 1].tick_display_value;
//             console.log(lastElementOfLastSubArray);
//             let numberString = lastElementOfLastSubArray.toString();
//             let lastCharacter = numberString[numberString.length - 1];
//             console.log(lastCharacter)
//             handleNewNumber(lastCharacter);
//             every_tick = lastElementOfLastSubArray
//             end_tic_off_trade.innerHTML = formatNumberAndBoldLastDecimal(every_tick);
//             if (countdown_trade < duration_amount) {
//                 countdown_trade += 1
//                 durr_amount_prop_count.textContent = countdown_trade
//             }

//             if (data.proposal_open_contract.status !== 'open') {
//                 contract_status = data.proposal_open_contract.status
//                 last_tick = lastElementOfLastSubArray
//                 profit_or_loss = data.proposal_open_contract.profit
//                 payout_result = data.proposal_open_contract.payout
//                 buy_price = data.proposal_open_contract.buy_price
//                 contract_currency = data.proposal_open_contract.currency
//                 contract_ids_buy = data.proposal_open_contract.transaction_ids.buy
//                 time_of_trade = data.proposal_open_contract.expiry_time
//                 if (profit_or_loss < 0) {
//                     final_price = '0.00'
//                 } else if (profit_or_loss > 0) {
//                     final_price = payout_result
//                 } else {
//                     console.log("The number is zero.");
//                 }
//                 contract_status_html.textContent = contract_status
//                 end_tic_off_trade.innerHTML = formatNumberAndBoldLastDecimal(last_tick);
//                 profit_figure_amount.textContent = profit_or_loss
//                 price_after_trade_figure_amount.textContent = final_price
//                 buy_price_figure_amount.textContent = buy_price
//                 result_currency_html.textContent = contract_currency
//                 transaction_refrence_figure.textContent = contract_ids_buy
//                 trade_start_time.innerHTML = convertTimestampTo12HourTime(time_of_trade)
//                 buy_price_text.textContent = 'Buy price'
//                 price_after_trade_text.textContent = 'Final price'
//                 profit_text.textContent = 'Profit'
//                 after_trade(contract_status, lastCharacter)
//             } else {

//             }
//         } else {
//             console.log('no valid tick yet')
//         }

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


// let contract_id;

// const elements = document.querySelectorAll('.lgt5');

// elements.forEach(element => {
//         element.addEventListener('click', async function () {
//             const slider = document.getElementById('slide_trade_result').style.display = 'flex';

//             last_digit_prediction_or_barrier = parseInt(element.lastElementChild.textContent);

//             before_trade();
//             allProposalOpenContract.length = 0;
//             unsubscribeProposalOpenContract();

//             try {
//                 // Await the completion of order_propose
//                 await order_propose(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol100);

//                 let buy = await api.buy({
//                     "buy": String(proposal_id),
//                     "price": parseFloat(stake_amount)
//                 });

//                 contract_id = buy.buy.contract_id;

//                 getProposalOpenContract(contract_id);
//             } catch (error) {
//                 console.error('Error during trade:', error);
//                 // Handle errors or rollback operations if needed
//             }
//         });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     var button = document.getElementById('down_purchase_btn');

//     function addClickedClass() {
//         button.classList.add('clicked');
//     }

//     function removeClickedClass() {
//         setTimeout(function () {
//             button.classList.remove('clicked');
//         }, 200); // Adjust the timeout as needed
//     }

//     button.addEventListener('mousedown', addClickedClass);
//     button.addEventListener('mouseup', removeClickedClass);

//     button.addEventListener('touchstart', addClickedClass);
//     button.addEventListener('touchend', removeClickedClass);
// });



// document.addEventListener('DOMContentLoaded', () => {
//     const elements = document.querySelectorAll('.zero_d, .one_d, .two_d, .three_d, .four_d, .five_d, .six_d, .seven_d, .eight_d, .nine_d');

//     elements.forEach(element => {
//         element.addEventListener('click', () => {
//             element.classList.add('active');
//             setTimeout(() => {
//                 element.classList.remove('active');
//             }, 200);  // Adjust the duration (in milliseconds) as needed
//         });
//     });
// });





// let currentPosition1 = 0;

// function moveSlider(number) {
//     const slider = document.getElementById('slide_trade_result');
//     const container = document.getElementById('last_digit_responds');

//     let stringnumber = null;
//     if (number == 0) {
//         stringnumber = 'zero';
//     }
//     if (number == 1) {
//         stringnumber = 'one';
//     }
//     if (number == 2) {
//         stringnumber = 'two';
//     }
//     if (number == 3) {
//         stringnumber = 'three';
//     }
//     if (number == 4) {
//         stringnumber = 'four';
//     }
//     if (number == 5) {
//         stringnumber = 'five';
//     }
//     if (number == 6) {
//         stringnumber = 'six';
//     }
//     if (number == 7) {
//         stringnumber = 'seven';
//     }
//     if (number == 8) {
//         stringnumber = 'eight';
//     }
//     if (number == 9) {
//         stringnumber = 'nine';
//     }

//     const target = document.querySelector(`.last_digits.${stringnumber}`);

//     if (target) {
//         const targetPosition = target.offsetLeft;
//         const currentSliderPosition = slider.offsetLeft;

//         const direction = targetPosition > currentSliderPosition ? 'left' : 'right';

//         // Ensure the target position does not move the slider out of the container
//         const maxTranslateX = container.offsetWidth - slider.offsetWidth;
//         const newPosition = Math.min(Math.max(targetPosition, 0), maxTranslateX);

//         if (direction === 'left') {
//             slider.style.transform = `translateX(${newPosition}px)`;
//         } else {
//             slider.style.transform = `translateX(${newPosition}px)`;
//         }

//         currentPosition1 = newPosition;
//     }
// }

// function handleNewNumber(randomNumber) {
//     const newPosition = randomNumber;
//     moveSlider(newPosition);
// }

























import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';

const app_id_demo = 53334;
const token_demo = "4FB1rDGbXX6zbKs";
const app_id_real = 53335;
const token_real = "Jv4SnlKSnzwkymM";


let tick_stream = document.getElementById('vol_100') //change to 100
let last_digit_input = document.getElementById('last_digit_input')
let close_contract_result_container = document.getElementById('close_contract_result_container_carousel5')
let buy_sell_two = document.getElementById('buy_sell_two')


let trade_type_secound = document.getElementById("trade_type_secound")

let attempting_buy2_carousel5 = document.getElementById("attempting_buy2_carousel5")//change to 25
let buy_succeded2_carousel5 = document.getElementById("buy_succeded2_carousel5")//change to 25
let contract_close2_carousel5 = document.getElementById("contract_close2_carousel5")//change to 25

let stream100 = document.getElementById('stream100')//change to 25
let stream100_carousel5 = document.getElementById('stream100_carousel5')//change to 25





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



let td2_account_id_carousel5 = document.getElementById('td2_account_id_carousel5') // change to 25
let td2_no_of_runs_carousel5 = document.getElementById('td2_no_of_runs_carousel5') // change to 25
let td2_total_stake_carousel5 = document.getElementById('td2_total_stake_carousel5') // change to 25
let td2_total_payout_carousel5 = document.getElementById('td2_total_payout_carousel5') // change to 25
let td2_total_wins_carousel5 = document.getElementById('td2_total_wins_carousel5') // change to 25
let td2_total_loss_carousel5 = document.getElementById('td2_total_loss_carousel5') // change to 25
let td2_total_profit_loss_carousel5 = document.getElementById('td2_total_profit_loss_carousel5') // change to 25







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

let symbol100 = null


let subscription_to_open_contract = true

100
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
    setCookie('symbol100', 'R_100')
    localStorage.setItem('symbol100', 'R_100')

    symbol100 = localStorage.getItem('symbol100')

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
    const tbody1_carousel5 = document.getElementById('tbody1_carousel5'); // change to 25


    if (botuniqueCode == allContracts) {

        console.log('yes', botuniqueCode, allContracts)
        let row_carousel5 = document.getElementById(`bot_carousel5${bot_id}`); // change to 25

        if (!row_carousel5) {
            console.error(`Row with data-unique-code "bot_carousel5${bot_id}" not found.`);
            return;
        }

        const entry_spot_html_carousel5 = document.getElementById(`td5_carousel5${bot_id}`); // change to 25
        const exit_spot_html_carousel5 = document.getElementById(`td6_carousel5${bot_id}`); // change to 25
        const profit_loss_html_carousel5 = document.getElementById(`td8_carousel5${bot_id}`); // change to 25
        const status_html_carousel5 = document.getElementById(`td9_carousel5${bot_id}`); // change to 25


        if (entry_spot_html_carousel5) {
            entry_spot_html_carousel5.textContent = entry_spot
        } else {
            console.log('child 5 not found')
        }

        if (exit_spot_html_carousel5) {
            exit_spot_html_carousel5.textContent = exit_spot
        } else {
            console.log('child 6 not found')
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
            console.log('child 8 not found')
        }

        if (status_html_carousel5) {
            status_html_carousel5.textContent = status
            if (status == 'won') {
                status_html_carousel5.style.color = 'green'
            } else {
                status_html_carousel5.style.color = 'red'
            }
        } else {
            console.log('child 9 not found')
        }

        // uniqueCodes.splice(i, 1); // Remove 1 element at index i
        // i--; // Adjust index to account for removed element



        td2_no_of_runs_carousel5.textContent = bot_total_runs
        td2_total_stake_carousel5.textContent = bot_total_stake
        td2_total_payout_carousel5.textContent = Number(bot_total_payout.toFixed(2));
        td2_total_wins_carousel5.textContent = bot_total_wins
        td2_total_wins_carousel5.style.color = 'green'
        td2_total_loss_carousel5.textContent = bot_total_loss
        td2_total_loss_carousel5.style.color = 'red'
        td2_total_profit_loss_carousel5.textContent = Number(bot_total_profit_loss.toFixed(2));
        if (parseFloat(Number(bot_total_profit_loss.toFixed(2))) < 0) {
            td2_total_profit_loss_carousel5.style.color = 'red'
        } else {
            td2_total_profit_loss_carousel5.style.color = 'green'
        }
    }

}









// Simulate progress filling from 0% to 100%
const progressBar1_carousel5 = document.querySelector('.progress1_carousel5'); //change to 25

function fillProgressBar1() {
    progressBar1_carousel5.classList.add('prog1_carousel5') //change to 25
}

const progressBar2_carousel5 = document.querySelector('.progress2_carousel5'); //change to 25

function fillProgressBar2() {
    progressBar2_carousel5.classList.add('prog2_carousel5') //change to 25
}



function set_start_trade1(bot_is_running_or_stopped) {
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

    if (progressBar1_carousel5.classList.contains("prog1_carousel5")) {
        progressBar1_carousel5.classList.remove('prog1_carousel5')
    }

    if (progressBar2_carousel5.classList.contains("prog2_carousel5")) {
        progressBar2_carousel5.classList.remove('prog2_carousel5')
    }

    if (bot_is_running_or_stopped == true) {
        bot_state_carousel5.textContent = 'Bot is running'
        circle1_carousel5.classList.add('buy_signal_carousel5')
        setTimeout(fillProgressBar1, 1000);
    } else {
        bot_state_carousel5.textContent = 'Bot has stopped'
        circle1_carousel5.classList.remove('buy_signal_carousel5')
    }

}

function start_trade_ref(buy_price_ref) {
    if (attempting_buy2_carousel5.classList.contains("attempting_buy2_show_carousel5")) {
        attempting_buy2_carousel5.classList.remove("attempting_buy2_show_carousel5")
    }
    if (buy_succeded2_carousel5.classList.contains("buy_succeded2_show_carousel5")) {
        buy_succeded2_carousel5.classList.remove("buy_succeded2_show_carousel5")
    }
    if (contract_close2_carousel5.classList.contains("contract_close2_show_carousel5")) {
        contract_close2_carousel5.classList.remove("contract_close2_show_carousel5")
    }
    attempting_buy2_carousel5.textContent = `Buy amount: ${buy_price_ref}`
    attempting_buy2_carousel5.classList.add('attempting_buy2_show_carousel5')
}


function set_middle_trade1(bot_is_running_or_stopped) {
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

function middle_trade_ref(buy_ref) {
    buy_succeded2_carousel5.textContent = `ID: ${buy_ref}`
    buy_succeded2_carousel5.classList.add('buy_succeded2_show_carousel5')
}



function set_end_trade1(bot_is_running_or_stopped) {
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
        setTimeout(fillProgressBar2, 1000);
        setTimeout(timmimg_color, 1500);
    } else {
        bot_state_carousel5.textContent = 'Bot has stopped'
        circle3_carousel5.classList.remove('add_color_carousel5')
    }
}


function end_trade_ref(sell_ref) {
    contract_close2_carousel5.textContent = `ID: ${sell_ref}`
    contract_close2_carousel5.classList.add('contract_close2_show_carousel5')
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

let martingale_store = [1.1, 11.1, 123.4, 1371.1, 15593.5]
let martingale_count = 0
let initial_stake = true

let contract_id2 = null
let wonEncountered = false;

async function buy_bot(martingale, current_number) {

    const slider = document.getElementById('slide_trade_result_carousel5').style.display = 'flex';

    last_digit_prediction_or_barrier = parseInt(current_number);

    let contract_text_local_st = localStorage.getItem('contract_text_local_st')

    if (martingale == 'true' && contract_status2 == 'lost') {
        if(contract_text_local_st && contract_text_local_st == 'Matches/Differs'){
            martingale_count += 1
            stake_amount = martingale_store[martingale_count]
        }else{
            stake_amount = stake_amount * 10.1
        }
    } else if (initial_stake = true || (martingale == 'true' && contract_status2 == 'won')) {
        if(contract_text_local_st && contract_text_local_st == 'Matches/Differs'){
            martingale_count = 0
            stake_amount = martingale_store[martingale_count]
        }else{
            stake_amount = stake_amount_default
        }
    } else {
        stake_amount = stake_amount_default
    }


    wonEncountered = false
    before_trade();
    allProposalOpenContract2.length = 0;
    unsubscribeProposalOpenContract2()

    try {
        // Await the completion of order_propose
        await order_propose(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol100);

        let buy = await api.buy({
            "buy": String(proposal_id),
            "price": parseFloat(stake_amount)
        });

        contract_id2 = generateUniqueCode(buy)

        run_open_contract_proposal2()
        initial_stake = false

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

    const tbody_carousel5 = document.getElementById('tbody1_carousel5');

    function appendRows(data) {
        data.forEach(item => {
            // Create <tr> element
            const row_carousel5 = document.createElement('tr');
            row_carousel5.id = `bot_carousel5${item.id}`;

            // Create <td> elements and append to <tr>
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

            // Prepend <tr> to <tbody> (insert before the first child of tbody)
            if (tbody_carousel5.firstChild) {
                tbody_carousel5.insertBefore(row_carousel5, tbody_carousel5.firstChild);
            } else {
                tbody_carousel5.appendChild(row_carousel5); // If tbody is empty, just append
            }
        });
    }
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

    const log_tbody_carousel5 = document.getElementById('log_tbody1_carousel5');

    function appendRows(data) {
        data.forEach(item => {
            // Create <tr> element
            const row_carousel5 = document.createElement('tr');
            row_carousel5.id = `log_bot_carousel5${log_id}`;

            const td1_carousel5 = document.createElement('td');
            td1_carousel5.textContent = log_timestamp_current;
            td1_carousel5.id = `log_td1_carousel5${log_id}`;
            td1_carousel5.classList.add('lod_td1_carousel5')
            row_carousel5.appendChild(td1_carousel5);

            // Create <td> elements and append to <tr>
            const td2_carousel5 = document.createElement('td');

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

            td2_carousel5.textContent = `last ten ticks:  ${item.log_message10} ${item.log_message9} ${item.log_message8} ${item.log_message7} ${item.log_message6} ${item.log_message5} ${item.log_message4} ${item.log_message3} ${item.log_message2} ${item.log_message1}          current tick ${item.log_message_curr}    ${item.log_message_curr_tick}`;

            td2_carousel5.style.whiteSpace = 'pre'
            td2_carousel5.id = `log_td2_carousel5${log_id}`;
            td2_carousel5.classList.add('lod_td2_carousel5')
            row_carousel5.appendChild(td2_carousel5);

            const td3_carousel5 = document.createElement('td');
            td3_carousel5.textContent = 'this is the text'
            td3_carousel5.style.whiteSpace = 'pre'
            td3_carousel5.id = `log_td3_carousel5${log_id}`;
            td3_carousel5.classList.add('lod_td3_carousel5')
            row_carousel5.appendChild(td3_carousel5);

            // Prepend <tr> to <tbody> (insert before the first child of tbody)
            if (log_tbody_carousel5.firstChild) {
                log_tbody_carousel5.insertBefore(row_carousel5, log_tbody_carousel5.firstChild);
                appended = true
            } else {
                log_tbody_carousel5.appendChild(row_carousel5); // If tbody is empty, just append
                appended = true
            }
        });
    }

    appendRows(backendData)
}



async function bot_log_end(bot_buy_time_stamp, bot_sell_time_stamp, newValueForEntryTick, newValueForLastDigit) {
    let target_td_carousel5 = document.getElementById(`log_td3_carousel5${log_id}`)

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

    if (target_td_carousel5) {
        target_td_carousel5.textContent = `buy_time:  ${log_buy_timestamp_bot}        sell_time:  ${log_sell_timestamp_bot}    entry tick:  ${newValueForEntryTick}     last digit:  ${newValueForLastDigit}`

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




let bot_state_carousel5 = "stop_bot"
let all_bot_start_stop1 = null


let buttonContainer_carousel5 = document.querySelector('.click_change_carousel5');

// Function to toggle play and pause buttons
function togglePlayPause() {
    var play_button_carousel5 = document.getElementById('play_button_carousel5');
    var pause_button_carousel5 = document.getElementById('pause_button_carousel5');

    if (play_button_carousel5) {
        bot_state_carousel5 = "stop_bot"
        play_button_carousel5.parentNode.removeChild(play_button_carousel5);

        var pause_button_carousel5 = document.createElement('div');
        pause_button_carousel5.id = 'pause_button_carousel5';
        pause_button_carousel5.className = 'pause_button_carousel5';
        pause_button_carousel5.innerHTML = '&#10074;&#10074;';
        buttonContainer_carousel5.appendChild(pause_button_carousel5);
        document.getElementById('bot_state_carousel5').textContent = 'Bot has stopped';
    } else if (pause_button_carousel5) {
        bot_state_carousel5 = "start_bot"
        pause_button_carousel5.parentNode.removeChild(pause_button_carousel5);

        var play_button_carousel5 = document.createElement('div');
        play_button_carousel5.id = 'play_button_carousel5';
        play_button_carousel5.className = 'play_button_carousel5';
        play_button_carousel5.innerHTML = '&#9654;';
        buttonContainer_carousel5.appendChild(play_button_carousel5);
        document.getElementById('bot_state_carousel5').textContent = 'Bot is running';
    }
}

// Add click event listener to button container
buttonContainer_carousel5.addEventListener('click', togglePlayPause);




function getRandom(strNumber) {
    return randomNumber = strNumber.charAt(strNumber.length - 1);
}


let currentvol_carousel5 = null
let currentvol2_carousel5 = null
let martingale_active_carousel5 = null
let bot_set_carousel5 = null
let set_bot_jump_carousel5 = null
let initial_set_jump = true


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



const tickStream = () => api.subscribe({ "ticks": 'R_100' });


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
        let bot_start_stop = bot_state_carousel5

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
        } else if (data.echo_req.ticks === "R_100" || data.echo_req.ticks === "1HZ10V" || data.echo_req.ticks === "1HZ25V" || data.echo_req.ticks === "1HZ50V" || data.echo_req.ticks === "1HZ75V" || data.echo_req.ticks === "1HZ100V") {
            strNumber = formatToTwoDecimalPlaces(tickStreamQuote).toString();
            currentRandom = getRandom1(strNumber);
        } else {
            strNumber = formatToThreeDecimalPlaces(tickStreamQuote).toString();
            currentRandom = getRandom1(strNumber);
        }

        tick_stream.textContent = strNumber;
        stream100.textContent = strNumber
        stream100_carousel5.textContent = strNumber

        all_bot_start_stop1 = localStorage.getItem('all_bot_start_stop1')

        currentvol_carousel5 = localStorage.getItem('bot_current_vol1_carousel5');
        currentvol2_carousel5 = localStorage.getItem('bot_current_vol2_carousel5');
        martingale_active_carousel5 = localStorage.getItem('martingale_carousel5');
        bot_set_carousel5 = localStorage.getItem('bot_set_carousel5');

        set_bot_jump_carousel5 = localStorage.getItem('bot_jump_carousel5')

        if((set_bot_jump_carousel5 && set_bot_jump_carousel5 > 0) && contract_status2 == 'lost'){
            bot_set_carousel5 = parseInt(bot_set_carousel5) + parseInt(set_bot_jump_carousel5)
            contract_status2 == 'reset'
        }else if(initial_set_jump == true || (contract_status2 == 'won' && (set_bot_jump_carousel5 && set_bot_jump_carousel5 > 0))){
            bot_set_carousel5 = localStorage.getItem('bot_set_carousel5');
            initial_set_jump = false
        }else{
            bot_set_carousel5 = localStorage.getItem('bot_set_carousel5');
        }

        let bot_count = bot_id

        const tag5_carousel5 = document.getElementById(`td5_carousel5${bot_count}`);
        const tag6_carousel5 = document.getElementById(`td6_carousel5${bot_count}`);
        const tag8_carousel5 = document.getElementById(`td8_carousel5${bot_count}`);
        const tag9_carousel5 = document.getElementById(`td9_carousel5${bot_count}`);



        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance == true) {
                if (currentRandom && (first_instance == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5 == 1)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1 == 'start_bots' && ((currentvol_carousel5 == 4 && currentvol2_carousel5 == 4))) {
                        startBot(martingale_active_carousel5, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {

                }
            } else {
                console.log('elements not found')
            }
        }



        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance == true) {
                if (lastNumber1 == currentRandom && (first_instance == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5 == 2)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1 == 'start_bots' && ((currentvol_carousel5 == 4 && currentvol2_carousel5 == 4))) {
                        startBot(martingale_active_carousel5, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {

                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance == true) {
                if (lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5 == 3)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1 == 'start_bots' && ((currentvol_carousel5 == 4 && currentvol2_carousel5 == 4))) {
                        startBot(martingale_active_carousel5, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {

                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance == true) {
                if (lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5 == 4)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1 == 'start_bots' && ((currentvol_carousel5 == 4 && currentvol2_carousel5 == 4))) {
                        startBot(martingale_active_carousel5, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {

                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance == true) {
                if (lastNumber4 == currentRandom && lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5 == 5)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1 == 'start_bots' && ((currentvol_carousel5 == 4 && currentvol2_carousel5 == 4))) {
                        startBot(martingale_active_carousel5, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {

                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance == true) {
                if (lastNumber5 == currentRandom && lastNumber4 == currentRandom && lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5 == 6)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1 == 'start_bots' && ((currentvol_carousel5 == 4 && currentvol2_carousel5 == 4))) {
                        startBot(martingale_active_carousel5, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {

                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance == true) {
                if (lastNumber6 == currentRandom && lastNumber5 == currentRandom && lastNumber4 == currentRandom && lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5 == 7)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1 == 'start_bots' && ((currentvol_carousel5 == 4 && currentvol2_carousel5 == 4))) {
                        startBot(martingale_active_carousel5, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {

                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance == true) {
                if (lastNumber7 == currentRandom && lastNumber6 == currentRandom && lastNumber5 == currentRandom && lastNumber4 == currentRandom && lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5 == 8)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1 == 'start_bots' && ((currentvol_carousel5 == 4 && currentvol2_carousel5 == 4))) {
                        startBot(martingale_active_carousel5, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {

                }
            } else {
                console.log('elements not found')
            }
        }

        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance == true) {
                if (lastNumber8 == currentRandom && lastNumber7 == currentRandom && lastNumber6 == currentRandom && lastNumber5 == currentRandom && lastNumber4 == currentRandom && lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5 == 9)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1 == 'start_bots' && ((currentvol_carousel5 == 4 && currentvol2_carousel5 == 4))) {
                        startBot(martingale_active_carousel5, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {

                }
            } else {
                console.log('elements not found')
            }
        }


        if (currentRandom !== null && lastNumber1 !== null && lastNumber2 !== null) {
            if ((tag5_carousel5 && tag6_carousel5 && tag8_carousel5 && tag9_carousel5) || first_instance == true) {
                if (lastNumber9 == currentRandom && lastNumber8 == currentRandom && lastNumber7 == currentRandom && lastNumber6 == currentRandom && lastNumber5 == currentRandom && lastNumber4 == currentRandom && lastNumber3 == currentRandom && lastNumber2 == currentRandom && lastNumber1 == currentRandom && (first_instance == true || (tag5_carousel5.textContent.trim() !== '' && tag6_carousel5.textContent.trim() !== '' && tag8_carousel5.textContent.trim() !== '' && tag9_carousel5.textContent.trim() !== '')) && (bot_set_carousel5 == 10)) {
                    if (bot_start_stop == 'start_bot' || all_bot_start_stop1 == 'start_bots' && ((currentvol_carousel5 == 4 && currentvol2_carousel5 == 4))) {
                        startBot(martingale_active_carousel5, lastNumber10, lastNumber9, lastNumber8, lastNumber7, lastNumber6, lastNumber5, lastNumber4, lastNumber3, lastNumber2, lastNumber1, currentRandom, strNumber)
                    } else if (bot_start_stop == 'stop_bot') {
                        console.log('bot has stopped running')
                    } else {
                        console.log('bot is running')
                    }
                } else {

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

                td2_account_id_carousel5.textContent = authorize_response.authorize.loginid

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
        symbol_vol = "R_100";
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
                let tooltip = document.getElementById('tooltiptext25');
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
    } //change to 25

    // Combine the integer and decimal parts
    let formattedNumber = decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;

    return formattedNumber;
}




//change to 25
let contract_status_html = document.getElementById('contract_status_carousel5') //change to 25 
let end_tic_off_trade = document.getElementById('end_tic_off_trade_carousel5') //change to 25            
let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel5') //change to 25
let profit_figure_amount = document.getElementById('profit_figure_amount_carousel5') //change to 25
let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel5') //change to 25
let result_currency_html = document.querySelectorAll('.result_currency')
let transaction_refrence_figure = document.getElementById('transaction_refrence_figure_carousel5') //change to 25
let trade_start_time = document.getElementById('trade_start_time_carousel5') //change to 25
let buy_price_text = document.getElementById('buy_price_text_carousel5') //change to 25
let price_after_trade_text = document.getElementById('price_after_trade_text_carousel5') //change to 25
let profit_text = document.getElementById('profit_text_carousel5') //change to 25







let countdown_trade = 0
let countdown_trade2 = 0

function before_trade() {
    countdown_trade = 0
    let allDigits = document.querySelectorAll('.ldgs_carousel5')
    let buy_price_text = document.getElementById('buy_price_text_carousel5')
    let price_after_trade_text = document.getElementById('price_after_trade_text_carousel5')
    let profit_text = document.getElementById('profit_text_carousel5')
    let durr_amount_prop_count = document.getElementById('durr_amount_prop_count_carousel5')
    let slide_trade_result = document.getElementById('slide_trade_result_carousel5')
    let buy_price_figure_amount = document.getElementById('buy_price_figure_amount_carousel5')
    let price_after_trade_figure_amount = document.getElementById('price_after_trade_figure_amount_carousel5')
    let profit_figure_amount = document.getElementById('profit_figure_amount_carousel5')
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
        document.getElementById('proposal_information_carousel5').textContent = longcodeProp


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
        document.getElementById('proposal_information_carousel5').textContent = longcodeProp2


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
                circle2_carousel5.classList.remove('circle_shadow_carousel5')
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













const elements = document.querySelectorAll('.lgt5');

elements.forEach(element => {
    element.addEventListener('click', async function () {
        const slider = document.getElementById('slide_trade_result_carousel5').style.display = 'flex';

        last_digit_prediction_or_barrier = parseInt(element.lastElementChild.textContent);

        before_trade();
        allProposalOpenContract.length = 0;
        unsubscribeProposalOpenContract()

        try {
            // Await the completion of order_propose
            await order_propose(api, stake_amount, last_digit_prediction_or_barrier, stake_or_payout, contract, currency, duration_amount, duration_unit, symbol100);

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



let log_close_and_info_cont = document.getElementById('log_close_and_info_cont_carousel5');
let bot_log_show_cont = document.getElementById('bot_log_show_cont_carousel5');
let bot_details = document.getElementById('bot_details_carousel5');
let bot_details2 = document.getElementById('bot_details2_carousel5');

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





let martingale = document.getElementById('martingale_carousel5');
let flash_info_cont = document.getElementById('flash_info_cont_carousel5');
let tick_check_amount = document.getElementById('tick_check_amount_carousel5');
let bot_settings = document.getElementById('bot_settings_carousel5');
let settings_cont = document.getElementById('settings_cont_carousel5');
let tick_check = document.getElementById('tick_check_carousel5');
let martingale_jump = document.getElementById('martingale_jump_carousel5');
let increase_jump = document.getElementById('increase_jump_carousel5');
let reduce_jump = document.getElementById('reduce_jump_carousel5');

let bot_settings2 = document.getElementById('bot_settings2_carousel5');

const prevButton2 = document.querySelector(".prev2_carousel5");
const nextButton2 = document.querySelector(".next2_carousel5");

const volumes2 = document.querySelectorAll(".slide_vol2_carousel5");
let tick_check2 = document.getElementById('tick_check2_carousel5');
let martingale2 = document.getElementById('martingale2_carousel5');
let martingale_jump2 = document.getElementById('martingale_jump2_carousel5');
let martingale_jump_set = document.getElementById('martingale_jump_set_carousel5');

const prevButton = document.querySelector(".prev_carousel5");
const nextButton = document.querySelector(".next_carousel5");
const volumes = document.querySelectorAll(".slide_vol_carousel5");
const volumes_stream = document.querySelectorAll(".slide_vol_stream_carousel5");
const last_digit_settings = document.querySelectorAll(".last_digit_settings_carousel5");

let currentIndex = localStorage.getItem('bot_current_vol1_carousel5') || 0;
let currentIndex2 = localStorage.getItem('bot_current_vol2_carousel5') || 0;
let currentIndex3 = localStorage.getItem('bot_current_vol3_carousel5') || 0;


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
    localStorage.setItem('bot_current_vol1_carousel5', currentIndex)
    localStorage.setItem('bot_current_vol3_carousel5', currentIndex)
    setCookie('bot_current_vol1_carousel5', currentIndex)
    setCookie('bot_current_vol3_carousel5', currentIndex)
    currentIndex2 = (currentIndex2 - 1 + volumes_stream.length) % volumes_stream.length;
    localStorage.setItem('bot_current_vol2_carousel5', currentIndex)
    setCookie('bot_current_vol2_carousel5', currentIndex)
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
    localStorage.setItem('bot_current_vol1_carousel5', currentIndex)
    localStorage.setItem('bot_current_vol3_carousel5', currentIndex)
    setCookie('bot_current_vol1_carousel5', currentIndex)
    setCookie('bot_current_vol3_carousel5', currentIndex)
    currentIndex2 = (currentIndex2 + 1) % volumes_stream.length;
    localStorage.setItem('bot_current_vol2_carousel5', currentIndex)
    setCookie('bot_current_vol2_carousel5', currentIndex)
    volumes[currentIndex].classList.add("active");
    volumes2[currentIndex].classList.add("active");
    volumes_stream[currentIndex2].classList.add("active");
});




// Add click event listener
martingale.addEventListener('click', function () {
    if (martingale.classList.contains('active_mat')) {
        martingale.classList.remove('active_mat');
        martingale2.classList.remove('active_mat');
        setCookie('martingale_carousel5', 'false')
        localStorage.setItem('martingale_carousel5', 'false')
        flash_info_cont.textContent = 'martigale is not active'
        tick_check_amount.style.color = '#fff'

    } else {
        martingale.classList.add('active_mat');
        martingale2.classList.add('active_mat');
        setCookie('martingale_carousel5', 'true')
        localStorage.setItem('martingale_carousel5', 'true')
        flash_info_cont.textContent = 'martigale is active'
        tick_check_amount.style.color = '#fff'
    }

    if (flash_info_cont.classList.contains('show_flash_info_carousel5')) {
        flash_info_cont.classList.remove('show_flash_info_carousel5')

        setTimeout(() => {
            flash_info_cont.classList.remove('show_flash_info_carousel5')
        }, 5000)

    } else {
        flash_info_cont.classList.add('show_flash_info_carousel5')

        setTimeout(() => {
            flash_info_cont.classList.remove('show_flash_info_carousel5')
        }, 5000)
    }
});




function bot_set_default() {
    let curr_bot_set = localStorage.getItem('bot_set_carousel5');

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
    if (!bot_settings.contains(event.target) && !settings_cont.contains(event.target) && !martingale_jump_set.contains(event.target)) {
        settings_cont.style.display = 'none';
    }
});


last_digit_settings.forEach(function (bot_setting) {
    bot_setting.addEventListener('click', function () {
        let bot_set = this.querySelector('.bot_text_carousel5').textContent.trim().replace(/\s+/g, ' ');
        if (bot_set == 'Last one digit bot') {
            console.log('one digit')
            localStorage.setItem('bot_set_carousel5', '1')
            setCookie('bot_set_carousel5', '1')
    
            localStorage.setItem('bot_set_store_carousel5', '1')
            setCookie('bot_set_store_carousel5', '1')
    
            this.classList.add('confirm_set_click')
    
            bot_set_default()
    
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last two digit bot') {
            console.log('two digit')
            localStorage.setItem('bot_set_carousel5', '2')
            setCookie('bot_set_carousel5', '2')
    
            localStorage.setItem('bot_set_store_carousel5', '2')
            setCookie('bot_set_store_carousel5', '2')
    
    
            this.classList.add('confirm_set_click')
    
            bot_set_default()
    
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last three digit bot') {
            console.log('three digit')
            localStorage.setItem('bot_set_carousel5', '3')
            setCookie('bot_set_carousel5', '3')
    
            localStorage.setItem('bot_set_store_carousel5', '3')
            setCookie('bot_set_store_carousel5', '3')
    
            this.classList.add('confirm_set_click')
    
            bot_set_default()
    
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last four digit bot') {
            console.log('four digit')
            localStorage.setItem('bot_set_carousel5', '4')
            setCookie('bot_set_carousel5', '4')
    
            localStorage.setItem('bot_set_store_carousel5', '4')
            setCookie('bot_set_store_carousel5', '4')
    
            this.classList.add('confirm_set_click')
    
            bot_set_default()
    
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last five digit bot') {
            console.log('five digit')
            localStorage.setItem('bot_set_carousel5', '5')
            setCookie('bot_set_carousel5', '5')
    
            localStorage.setItem('bot_set_store_carousel5', '5')
            setCookie('bot_set_store_carousel5', '5')
    
            this.classList.add('confirm_set_click')
    
            bot_set_default()
    
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last six digit bot') {
            console.log('six digit')
            localStorage.setItem('bot_set_carousel5', '6')
            setCookie('bot_set_carousel5', '6')
    
            localStorage.setItem('bot_set_store_carousel5', '6')
            setCookie('bot_set_store_carousel5', '6')
    
            this.classList.add('confirm_set_click')
    
            bot_set_default()
    
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last seven digit bot') {
            console.log('seven digit')
            localStorage.setItem('bot_set_carousel5', '7')
            setCookie('bot_set_carousel5', '7')
    
            localStorage.setItem('bot_set_store_carousel5', '7')
            setCookie('bot_set_store_carousel5', '7')
    
            this.classList.add('confirm_set_click')
    
            bot_set_default()
    
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last eight digit bot') {
            console.log('eight digit')
            localStorage.setItem('bot_set_carousel5', '8')
            setCookie('bot_set_carousel5', '8')
    
            localStorage.setItem('bot_set_store_carousel5', '8')
            setCookie('bot_set_store_carousel5', '8')
    
            this.classList.add('confirm_set_click')
    
            bot_set_default()
    
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last nine digit bot') {
            console.log('nine digit')
            localStorage.setItem('bot_set_carousel5', '9')
            setCookie('bot_set_carousel5', '9')
    
            localStorage.setItem('bot_set_store_carousel5', '9')
            setCookie('bot_set_store_carousel5', '9')
    
            this.classList.add('confirm_set_click')
    
            bot_set_default()
    
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
        if (bot_set == 'Last ten digit bot') {
            console.log('ten digit')
            localStorage.setItem('bot_set_carousel5', '10')
            setCookie('bot_set_carousel5', '10')
    
            localStorage.setItem('bot_set_store_carousel5', '10')
            setCookie('bot_set_store_carousel5', '10')
    
            this.classList.add('confirm_set_click')
    
            bot_set_default()
    
            setTimeout(() => {
                this.classList.remove('confirm_set_click')
            }, 2000)
        }
    })
});



let jump_count = 0

function jump_count_set() {
    localStorage.setItem('bot_jump_carousel5', jump_count)
    setCookie('bot_jump_carousel5', jump_count)
}

function jump_count_set2() {
    let stored_jump_count = localStorage.getItem('bot_jump_carousel5');

    // Parse the value and handle the case where it is null or NaN
    jump_count = stored_jump_count !== null ? parseInt(stored_jump_count, 10) : 0;

    if (isNaN(jump_count)) {
        jump_count = 0;
    }


    if (jump_count > 0) {
        martingale_jump.textContent = 'j' + jump_count
        martingale_jump2.textContent = 'j' + jump_count
    } else {
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
    if (jump_count > 0) {
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
    localStorage.setItem('bot_current_vol1_carousel5', currentIndex)
    localStorage.setItem('bot_current_vol3_carousel5', currentIndex)
    setCookie('bot_current_vol1_carousel5', currentIndex)
    setCookie('bot_current_vol3_carousel5', currentIndex)
    currentIndex2 = (currentIndex2 - 1 + volumes_stream.length) % volumes_stream.length;
    localStorage.setItem('bot_current_vol2_carousel5', currentIndex)
    setCookie('bot_current_vol2_carousel5', currentIndex)
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
    localStorage.setItem('bot_current_vol1_carousel5', currentIndex)
    localStorage.setItem('bot_current_vol3_carousel5', currentIndex)
    setCookie('bot_current_vol1_carousel5', currentIndex)
    setCookie('bot_current_vol3_carousel5', currentIndex)
    currentIndex2 = (currentIndex2 + 1) % volumes_stream.length;
    localStorage.setItem('bot_current_vol2_carousel5', currentIndex)
    setCookie('bot_current_vol2_carousel5', currentIndex)
    volumes[currentIndex].classList.add("active");
    volumes2[currentIndex].classList.add("active");
    volumes_stream[currentIndex2].classList.add("active");
});



// Add click event listener
martingale2.addEventListener('click', function () {
    if (martingale2.classList.contains('active_mat')) {
        martingale2.classList.remove('active_mat');
        martingale.classList.remove('active_mat');
        setCookie('martingale_carousel5', 'false')
        localStorage.setItem('martingale_carousel5', 'false')
        flash_info_cont.textContent = 'martigale is not active'
        tick_check_amount.style.color = '#fff'

    } else {
        martingale2.classList.add('active_mat');
        martingale.classList.add('active_mat');
        setCookie('martingale_carousel5', 'true')
        localStorage.setItem('martingale_carousel5', 'true')
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