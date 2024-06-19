// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


let stake_or_payout = null
let start_time = null
let duration_period_time = null
let duration_unit = null



document.addEventListener('DOMContentLoaded', () => {
    // Add 'active_default' class to the first div by default
    const start_time_drop_list = document.getElementById('start_time_drop_list');
    start_time_drop_list.children[0].classList.add('active_default');

    // Highlight the selected div
    highlightSelected();
});

function highlightSelected() {
    const all_start_time_drop_list = document.querySelectorAll('.start_time_drop_list .now');
    let dont_have_more_than_this = true;

    all_start_time_drop_list.forEach(option => {
        option.addEventListener('click', function () {
            let start_stake_text = document.getElementById('start_stake_text');
            let text = null;

            if (dont_have_more_than_this === true) {
                text = start_stake_text.textContent;
                start_time = text;
                setCookie('start_time', '', 7); // Store empty value for 7 days

                all_start_time_drop_list.forEach(opt => {
                    opt.classList.remove('active');
                    opt.classList.remove('active_default');
                });

                const start_time_drop_list = document.getElementById('start_time_drop_list');
                start_time_drop_list.children[0].classList.add('active_default');

            } else {
                text = option.textContent;
                start_time = text;
                setCookie('start_time', text, 7); // Store for 7 days

                all_start_time_drop_list.forEach(opt => {
                    opt.classList.remove('active');
                    opt.classList.remove('active_default');
                });

                option.classList.add('active');
            }

            start_stake_text.textContent = text;
        });
    });
}



document.addEventListener('DOMContentLoaded', () => {
    // Add 'active_default' class to the first div by default
    const duration_drop_list = document.getElementById('duration_drop_list');
    duration_drop_list.children[0].classList.add('active_default');

    // Highlight the selected div
    highlightSelected2();
});

function highlightSelected2() {
    const all_duration_drop_list = document.querySelectorAll('.duration_drop_list .durra');
    let dont_have_more_than_this = true

    all_duration_drop_list.forEach(option => {
        option.addEventListener('click', function () {
            let stake_duration_text = document.getElementById('stake_duration_text')
            let text = null

            if (dont_have_more_than_this == true) {
                text = stake_duration_text.textContent
                duration_period_time = text
                setCookie('duration_period_time', '', 7);

                all_duration_drop_list.forEach(opt => {
                    opt.classList.remove('active');
                    opt.classList.remove('active_default');
                });

                const duration_drop_list = document.getElementById('duration_drop_list');
                duration_drop_list.children[0].classList.add('active_default');
            } else {
                text = option.textContent
                duration_period_time = text
                setCookie('duration_period_time', text, 7);

                // Remove 'active' and 'active_default' classes from all divs
                all_duration_drop_list.forEach(opt => {
                    opt.classList.remove('active');
                    opt.classList.remove('active_default');
                });

                option.classList.add('active');
            }


            // Add 'active' class to the clicked div

            stake_duration_text.textContent = text
        });
    });
}




document.addEventListener('DOMContentLoaded', () => {
    // Add 'active_default' class to the first div by default
    const duration_unit_list = document.getElementById('duration_unit_list');
    duration_unit_list.children[0].classList.add('active_default');

    const stake_Minutes_text = document.getElementById('stake_Minutes_text')
    let activeUnit = localStorage.getItem('duration_unit')

    let allUnit = document.querySelectorAll('.duru')

    if (activeUnit) {
        stake_Minutes_text.textContent = activeUnit
    }

    // Remove 'active' and 'active_default' classes from all divs
    allUnit.forEach(opt => {
        opt.classList.remove('active');
        opt.classList.remove('active_default');

        if (opt.textContent === activeUnit) {
            opt.classList.add('active');
        }
    });



    // Highlight the selected div
    highlightSelected3();
});

function highlightSelected3() {
    const all_duration_unit_list = document.querySelectorAll('.duration_unit_list .duru');
    let dont_have_more_than_this = false

    all_duration_unit_list.forEach(option => {
        option.addEventListener('click', function () {
            let stake_Minutes_text = document.getElementById('stake_Minutes_text')
            let text = null

            if (dont_have_more_than_this == true) {
                text = stake_Minutes_text.textContent
                duration_unit = text
                setCookie('duration_unit', '', 7);
                localStorage.setItem('duration_unit', '', 7);

                all_duration_unit_list.forEach(opt => {
                    opt.classList.remove('active');
                    opt.classList.remove('active_default');
                });

                const duration_unit_list = document.getElementById('duration_unit_list');
                duration_unit_list.children[0].classList.add('active_default');
            } else {
                text = option.textContent
                duration_unit = text
                setCookie('duration_unit', text, 7);
                localStorage.setItem('duration_unit', text, 7);

                // Remove 'active' and 'active_default' classes from all divs
                all_duration_unit_list.forEach(opt => {
                    opt.classList.remove('active');
                    opt.classList.remove('active_default');
                });

                option.classList.add('active');
            }


            // Add 'active' class to the clicked div
            stake_Minutes_text.textContent = text
        });
    });
}











document.addEventListener('DOMContentLoaded', () => {
    // Add 'active_default' class to the first div by default
    const stake_list = document.getElementById('stake_list');
    stake_list.children[0].classList.add('active_default');

    let stake_drop_text = document.getElementById('stake_drop_text')
    let stake_or_payout = localStorage.getItem('stake_or_payout_local_st')

    let allStakeOrPayout = document.querySelectorAll('.stkp')

    if (stake_or_payout) {
        stake_drop_text.textContent = stake_or_payout
    }

    allStakeOrPayout.forEach(opt => {
        opt.classList.remove('active');
        opt.classList.remove('active_default');

        if (opt.textContent === stake_or_payout) {
            // Add 'active' class to the clicked div
            opt.classList.add('active');
        }
    });



    // Highlight the selected div
    highlightSelected4();
});

function highlightSelected4() {
    const all_stake_list = document.querySelectorAll('.stake_list .stkp');
    let dont_have_more_than_this = false

    all_stake_list.forEach(option => {
        option.addEventListener('click', function () {
            let stake_drop_text = document.getElementById('stake_drop_text')
            let text = null

            if (dont_have_more_than_this == true) {
                text = stake_drop_text.textContent
                stake_or_payout = text
                setCookie('stake_or_payout_cookie', '', 7);
                localStorage.setItem('stake_or_payout_local_st', '');

                all_stake_list.forEach(opt => {
                    opt.classList.remove('active');
                    opt.classList.remove('active_default');
                });

                const stake_list = document.getElementById('stake_list');
                stake_list.children[0].classList.add('active_default');
            } else {
                text = option.textContent
                stake_or_payout = text
                setCookie('stake_or_payout_cookie', text, 7);
                localStorage.setItem('stake_or_payout_local_st', text)

                // Remove 'active' and 'active_default' classes from all divs
                all_stake_list.forEach(opt => {
                    opt.classList.remove('active');
                    opt.classList.remove('active_default');
                });

                // Add 'active' class to the clicked div
                option.classList.add('active');
            }
            stake_drop_text.textContent = text
        });
    });
}













document.addEventListener('DOMContentLoaded', function () {
    const currencyElements = document.querySelectorAll('.currency');
    const usd_text = document.getElementById('usd_text');
    const currency_for_order = document.getElementById('currency_for_order');
    const savedCurrency = localStorage.getItem('activeCurrency');
    const savedCurrencyId = localStorage.getItem('activeCurrencyId');

    // Function to set active currency
    function setActiveCurrency(element) {
        // Remove 'active' class from all currencies
        currencyElements.forEach(currency => currency.classList.remove('active'));
        // Add 'active' class to the clicked currency
        element.classList.add('active');
        // Save the clicked currency to local storage
        if (element.parentElement.id !== 'for_crypto') {
            localStorage.setItem('activeCurrency', element.textContent);
            setCookie('activeCurrency', element.textContent)
            localStorage.setItem('activeCurrencyId', element.id);
        } else {
            localStorage.setItem('activeCurrency', element.firstElementChild.textContent);
            setCookie('activeCurrency', element.firstElementChild.textContent)
            localStorage.setItem('activeCurrencyId', element.id);
        }

    }

    // Check if there's a saved currency in local storage
    if (savedCurrencyId) {
        const savedCurrencyElement = document.getElementById(savedCurrencyId);
        if (savedCurrencyElement) {
            setActiveCurrency(savedCurrencyElement);
        }

        usd_text.textContent = savedCurrency
    } else {
        // If no saved currency, make the first currency element active
        if (currencyElements.length > 0) {
            setActiveCurrency(currencyElements[3]);
        }
    }

    // Attach click event to all currency elementss
    currencyElements.forEach(currency => {
        currency.addEventListener('click', function () {
            setActiveCurrency(currency);
            usd_text.textContent = currency.textContent

            if (currency_for_order.style.display === 'block') {
                currency_for_order.style.display = 'none'
            } else {
                currency_for_order.style.display = 'block'
            }
        });
    });
});








const overlay = document.getElementById('overlay');

// Function to show the info container and overlay
function showInfo(containerId) {
    document.getElementById(containerId).style.display = 'block';
    overlay.style.display = 'block';
}

// Function to hide the info containers and overlay
function hideInfo() {
    document.getElementById('up_proposal_info_cont').style.display = 'none';
    document.getElementById('down_proposal_info_cont').style.display = 'none';
    overlay.style.display = 'none';
}

// Event listeners for up_proposal
const upProposal = document.getElementById('up_proposal');
upProposal.addEventListener('mouseenter', function () {
    showInfo('up_proposal_info_cont');
});

upProposal.addEventListener('mouseleave', function () {
    hideInfo();
});

upProposal.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent event from bubbling up to document
    showInfo('up_proposal_info_cont');
});

// Event listeners for down_proposal
const downProposal = document.getElementById('down_proposal');
downProposal.addEventListener('mouseenter', function () {
    showInfo('down_proposal_info_cont');
});

downProposal.addEventListener('mouseleave', function () {
    hideInfo();
});

downProposal.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent event from bubbling up to document
    showInfo('down_proposal_info_cont');
});

// Event listener to hide info containers and overlay when clicking anywhere on the page
document.addEventListener('click', function () {
    hideInfo();
});