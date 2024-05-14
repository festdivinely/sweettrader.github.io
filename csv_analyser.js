document.getElementById('csvFile').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const csvData = event.target.result;
        const rows = csvData.split('\n');
        const consecutiveOccurrences = 6; // Change this value to specify the desired number of consecutive occurrences
        const result = findConsecutiveOccurrences(rows, consecutiveOccurrences);

        displayResult(result);
    };

    reader.readAsText(file);
}

function findConsecutiveOccurrences(rows, consecutiveOccurrences) {
    const result = {};
    for (let i = 1; i < rows.length; i++) { // start from index 1 to skip header
        const columns = rows[i].split(',');
        if (columns.length > 1) {
            const lastDigit = columns[1].trim().charAt(columns[1].length - 1);
            const number = parseInt(lastDigit);
            if (checkConsecutiveOccurrences(rows, i, number, consecutiveOccurrences)) {
                result[number] = i;
            }
        }
    }
    return result;
}

function checkConsecutiveOccurrences(rows, startIndex, targetNumber, consecutiveOccurrences) {
    let count = 1;
    for (let i = startIndex + 1; i < rows.length; i++) {
        const columns = rows[i].split(',');
        if (columns.length > 1) {
            const lastDigit = columns[1].trim().charAt(columns[1].length - 1);
            const number = parseInt(lastDigit);
            if (number === targetNumber) {
                count++;
                if (count === consecutiveOccurrences) {
                    return true;
                }
            } else {
                return false;
            }
        }
    }
    return false;
}

function displayResult(result) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h3>Numbers under the last digit appearing ${Object.keys(result).length} times in a row:</h3>`;
    for (const number in result) {
        if (result.hasOwnProperty(number)) {
            outputDiv.innerHTML += `<p>Number: ${number}, Starting from Line: ${result[number]}</p>`;
        }
    }
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























