// // Function to move the element
// function moveElement() {
//     // Select the element to be moved
//     var minimumInputText = document.querySelector('.minimum_input_text');

//     // Select the element before which you want to insert the moved element
//     var stakeMinutesCont = document.querySelector('.stake_Minutes_cont');

//     // Insert the element before the stakeMinutesCont element
//     stakeMinutesCont.parentNode.insertBefore(minimumInputText, stakeMinutesCont);
// }

// // Check screen size when the page loads
// window.addEventListener('load', function(){
//     if (window.matchMedia('(max-width: 768px)').matches) {
//         moveElement();
//     }
// })


// // Check screen size whenever it changes
// window.addEventListener('resize', function() {
//     if (window.matchMedia('(max-width: 768px)').matches) {
//         moveElement();
//     }
// });