const ticks_history_request = {
  ticks_history: 'R_75',
  adjust_start_time: 1,
  count: 1000,
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
      console.log(data.history);

      // Process the prices
      const processedData = processPrices(data.history);

      // Check for repetition of a value four consecutive times in last digits
      const repetitionDetails = checkRepetitionDetails(processedData.lastDigits);

      // Display repetition details
      displayRepetitionDetails(repetitionDetails);

      // Display data in the table
      displayData(processedData);

      // Convert the processed data to a string
      const processedDataString = JSON.stringify(processedData, null, 2);

      // Display the processed data in the HTML console
      // document.getElementById('output').textContent = processedDataString;

      // Display last digits separately
      const lastDigitsString = processedData.lastDigits.join(', ');
      // document.getElementById('lastDigits').textContent = 'Last digits: ' + lastDigitsString;

      // Log repetition index
      console.log('Repetition Details:', repetitionDetails);
  }

  connection.removeEventListener('message', ticksHistoryResponse, false);
};

const getTicksHistory = async () => {
  connection.addEventListener('message', ticksHistoryResponse);
  await api.ticksHistory(ticks_history_request);
};

const ticks_history_button = document.querySelector('#ticks-history');
ticks_history_button.addEventListener('click', getTicksHistory);

function processPrices(data) {
  // Find the maximum decimal places in prices
  let maxDecimalPlaces = 0;
  data.prices.forEach(price => {
      const decimalPlaces = price.toString().includes('.') ? price.toString().split('.')[1].length : 0;
      if (decimalPlaces > maxDecimalPlaces) {
          maxDecimalPlaces = decimalPlaces;
      }
  });

  // Format prices with trailing zeros
  const formattedPrices = data.prices.map(price => {
      const decimalPlaces = price.toString().includes('.') ? price.toString().split('.')[1].length : 0;
      let formattedPrice = price.toFixed(maxDecimalPlaces);
      return formattedPrice;
  });

  // Generate the index array
  const indexArray = Array.from({ length: data.prices.length }, (_, i) => i);

  // Extract last digits
  const lastDigits = formattedPrices.map(price => price.slice(-1));

  // Return the formatted data with index and last digits
  return {
      prices: formattedPrices,
      times: data.times,
      index: indexArray,
      lastDigits: lastDigits
  };
}




function checkRepetitionDetails(lastDigits) {
  const repetitionDetails = {
      twoRepetitions: [],
      threeRepetitions: [],
      fourRepetitions: [],
      fiveRepetitions: [],
      sixRepetitions: []
  };

  const countRepetitions = (startIndex, endIndex) => endIndex - startIndex + 1;

  for (let i = 0; i < lastDigits.length - 1; i++) {
      // Check for two repetitions
      if (lastDigits[i] === lastDigits[i + 1]) {
          const repetitions = countRepetitions(i, i + 1);
          repetitionDetails.twoRepetitions.push({
              digit: lastDigits[i],
              startIndex: i,
              endIndex: i + 1,
              count: repetitions
          });
      }

      // Check for three repetitions
      if (lastDigits[i] === lastDigits[i + 1] && lastDigits[i] === lastDigits[i + 2]) {
          const repetitions = countRepetitions(i, i + 2);
          repetitionDetails.threeRepetitions.push({
              digit: lastDigits[i],
              startIndex: i,
              endIndex: i + 2,
              count: repetitions
          });
      }

      // Check for four repetitions
      if (lastDigits[i] === lastDigits[i + 1] && lastDigits[i] === lastDigits[i + 2] && lastDigits[i] === lastDigits[i + 3]) {
          const repetitions = countRepetitions(i, i + 3);
          repetitionDetails.fourRepetitions.push({
              digit: lastDigits[i],
              startIndex: i,
              endIndex: i + 3,
              count: repetitions
          });
      }

      // Check for five repetitions
      if (lastDigits[i] === lastDigits[i + 1] && lastDigits[i] === lastDigits[i + 2] && lastDigits[i] === lastDigits[i + 3] && lastDigits[i] === lastDigits[i + 4]) {
          const repetitions = countRepetitions(i, i + 4);
          repetitionDetails.fiveRepetitions.push({
              digit: lastDigits[i],
              startIndex: i,
              endIndex: i + 4,
              count: repetitions
          });
      }

      // Check for six repetitions
      if (lastDigits[i] === lastDigits[i + 1] && lastDigits[i] === lastDigits[i + 2] && lastDigits[i] === lastDigits[i + 3] && lastDigits[i] === lastDigits[i + 4] && lastDigits[i] === lastDigits[i + 5]) {
          const repetitions = countRepetitions(i, i + 5);
          repetitionDetails.sixRepetitions.push({
              digit: lastDigits[i],
              startIndex: i,
              endIndex: i + 5,
              count: repetitions
          });
      }
  }

  return repetitionDetails;
}


function displayRepetitionDetails(repetitionDetails) {
  const repetitionDetailsDiv = document.getElementById('repetitionDetails');
  repetitionDetailsDiv.innerHTML = '<h2>Repetition Details:</h2>';
  
  // Display two repetitions
  repetitionDetails.twoRepetitions.forEach((repetition, index) => {
      repetitionDetailsDiv.innerHTML += `<p>Two repetitions: Digit - ${repetition.digit}, Start Index - ${repetition.startIndex}, End Index - ${repetition.endIndex}</p>`;
  });

  // Display three repetitions
  repetitionDetails.threeRepetitions.forEach((repetition, index) => {
      repetitionDetailsDiv.innerHTML += `<p>Three repetitions: Digit - ${repetition.digit}, Start Index - ${repetition.startIndex}, End Index - ${repetition.endIndex}</p>`;
  });

  // Display four repetitions
  repetitionDetails.fourRepetitions.forEach((repetition, index) => {
      repetitionDetailsDiv.innerHTML += `<p>Four repetitions: Digit - ${repetition.digit}, Start Index - ${repetition.startIndex}, End Index - ${repetition.endIndex}</p>`;
  });

  // Display five repetitions
  repetitionDetails.fiveRepetitions.forEach((repetition, index) => {
      repetitionDetailsDiv.innerHTML += `<p>Five repetitions: Digit - ${repetition.digit}, Start Index - ${repetition.startIndex}, End Index - ${repetition.endIndex}</p>`;
  });

  // Display six repetitions
  repetitionDetails.sixRepetitions.forEach((repetition, index) => {
      repetitionDetailsDiv.innerHTML += `<p>Six repetitions: Digit - ${repetition.digit}, Start Index - ${repetition.startIndex}, End Index - ${repetition.endIndex}</p>`;
  });
}


function displayData(data) {
  const tableBody = document.querySelector('#data-table tbody');
  tableBody.innerHTML = '';
  data.prices.forEach((price, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${price}</td>
          <td>${data.times[index]}</td>
          <td>${data.index[index]}</td>
          <td>${data.lastDigits[index]}</td>
      `;
      tableBody.appendChild(row);
  });
}











































































































































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























