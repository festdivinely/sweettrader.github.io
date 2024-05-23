// document.getElementById('csvFile').addEventListener('change', handleFileSelect, false);

// function handleFileSelect(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = function (event) {
//         const csvData = event.target.result;
//         const rows = csvData.split('\n');
//         const consecutiveOccurrences = 6; // Change this value to specify the desired number of consecutive occurrences
//         const result = findConsecutiveOccurrences(rows, consecutiveOccurrences);

//         displayResult(result);
//     };

//     reader.readAsText(file);
// }

// function findConsecutiveOccurrences(rows, consecutiveOccurrences) {
//     const result = {};
//     for (let i = 1; i < rows.length; i++) { // start from index 1 to skip header
//         const columns = rows[i].split(',');
//         if (columns.length > 1) {
//             const lastDigit = columns[1].trim().charAt(columns[1].length - 1);
//             const number = parseInt(lastDigit);
//             if (checkConsecutiveOccurrences(rows, i, number, consecutiveOccurrences)) {
//                 result[number] = i;
//             }
//         }
//     }
//     return result;
// }

// function checkConsecutiveOccurrences(rows, startIndex, targetNumber, consecutiveOccurrences) {
//     let count = 1;
//     for (let i = startIndex + 1; i < rows.length; i++) {
//         const columns = rows[i].split(',');
//         if (columns.length > 1) {
//             const lastDigit = columns[1].trim().charAt(columns[1].length - 1);
//             const number = parseInt(lastDigit);
//             if (number === targetNumber) {
//                 count++;
//                 if (count === consecutiveOccurrences) {
//                     return true;
//                 }
//             } else {
//                 return false;
//             }
//         }
//     }
//     return false;
// }

// function displayResult(result) {
//     const outputDiv = document.getElementById('output');
//     outputDiv.innerHTML = `<h3>Numbers under the last digit appearing ${Object.keys(result).length} times in a row:</h3>`;
//     for (const number in result) {
//         if (result.hasOwnProperty(number)) {
//             outputDiv.innerHTML += `<p>Number: ${number}, Starting from Line: ${result[number]}</p>`;
//         }
//     }
// }




// const ticks_history_request = {
//     ticks_history: 'R_75',
//     adjust_start_time: 1,
//     count: 1000,
//     end: 'latest',
//     start: 1,
//     style: 'ticks',
// };



// const ticksHistoryResponse = async (res) => {
//     const data = JSON.parse(res.data);
//     if (data.error !== undefined) {
//         console.log('Error : ', data.error.message);
//         connection.removeEventListener('message', ticksHistoryResponse, false);
//         await api.disconnect();
//     }

//     if (data.msg_type === 'history') {
//         console.log(data.history);

//         // Process the prices
//         const processedData = processPrices(data.history);

//         // Convert the processed data to a string
//         const processedDataString = JSON.stringify(processedData, null, 2);

//         // Display the processed data in the HTML console
//         document.getElementById('output').textContent = processedDataString;

//         // Display last digits separately
//         const lastDigitsString = processedData.lastDigits.join(', ');
//         document.getElementById('lastDigits').textContent = 'Last digits: ' + lastDigitsString;

//     }

//     connection.removeEventListener('message', ticksHistoryResponse, false);
// };




// const getTicksHistory = async () => {
//     connection.addEventListener('message', ticksHistoryResponse);
//     await api.ticksHistory(ticks_history_request);
// };



// const ticks_history_button = document.querySelector('#ticks-history');
// ticks_history_button.addEventListener('click', getTicksHistory);






// function processPrices(data) {
//     // Find the maximum decimal places in prices
//     let maxDecimalPlaces = 0;
//     data.prices.forEach(price => {
//         const decimalPlaces = price.toString().includes('.') ? price.toString().split('.')[1].length : 0;
//         if (decimalPlaces > maxDecimalPlaces) {
//             maxDecimalPlaces = decimalPlaces;
//         }
//     });

//     // Format prices with trailing zeros
//     const formattedPrices = data.prices.map(price => {
//         const decimalPlaces = price.toString().includes('.') ? price.toString().split('.')[1].length : 0;
//         let formattedPrice = price.toFixed(maxDecimalPlaces);
//         return formattedPrice;
//     });

//     // Generate the index array
//     const indexArray = Array.from({ length: data.prices.length }, (_, i) => i);

//     // Extract last digits
//     const lastDigits = formattedPrices.map(price => price.slice(-1));

//     // Return the formatted data with index and last digits
//     return {
//         prices: formattedPrices,
//         times: data.times,
//         index: indexArray,
//         lastDigits: lastDigits
//     };
// }






// stop here so continue from here upwards

















































// document.getElementById('csvFile').addEventListener('change', handleFileSelect, false);

// function handleFileSelect(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = function(event) {
//         const csvData = event.target.result;
//         const rows = csvData.split('\n');
//         const columnValues = getColumnValues(rows, 1); // Change 0 to the index of the column you want to analyze

//         displayColumnValues(columnValues);
//     };

//     reader.readAsText(file);
// }

// function getColumnValues(rows, columnIndex) {
//     const columnValues = [];
//     for (let i = 0; i < rows.length; i++) {
//         const columns = rows[i].split(',');
//         if (columns.length > columnIndex) {
//             columnValues.push(columns[columnIndex].trim());
//         }
//     }
//     return columnValues;
// }























