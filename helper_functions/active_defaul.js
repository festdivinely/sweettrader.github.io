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

                if (start_time_drop_list && start_time_drop_list.children.length > 0) {
                    start_time_drop_list.children[0].classList.add('active_default');
                }

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

    // Highlight the selected div
    highlightSelected4();
});

function highlightSelected4() {
    const all_stake_list = document.querySelectorAll('.stake_list .stkp');
    let dont_have_more_than_this = true

    all_stake_list.forEach(option => {
        option.addEventListener('click', function () {
            let stake_drop_text = document.getElementById('stake_drop_text')
            let text = null

            if (dont_have_more_than_this == true) {
                text = stake_drop_text.textContent
                stake_or_payout = text
                setCookie('stake_or_payout', '', 7);

                all_stake_list.forEach(opt => {
                    opt.classList.remove('active');
                    opt.classList.remove('active_default');
                });

                const stake_list = document.getElementById('stake_list');
                stake_list.children[0].classList.add('active_default');
            } else {
                text = option.textContent
                stake_or_payout = text
                setCookie('stake_or_payout', text, 7);


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