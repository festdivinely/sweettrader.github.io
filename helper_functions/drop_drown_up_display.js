export function displayDrops() {
    var dropdown_icon = document.getElementById("dropdown_icon");
    var dropup_icon = document.getElementById("dropup_icon");
    let all_symbols_cont = document.getElementById("all_symbols_cont");

    let dropdDownDisplay = dropdown_icon.style.display
    let dropdUpDisplay = dropup_icon.style.display

    if (dropdDownDisplay == 'block') {
        dropdown_icon.style.display = "none"
        all_symbols_cont.style.display = 'block'
    } else {
        dropdown_icon.style.display = 'block'
        all_symbols_cont.style.display = 'none'
    }

    if (dropdUpDisplay == 'none') {
        dropup_icon.style.display = "block"
        all_symbols_cont.style.display = 'none'
    } else {
        dropup_icon.style.display = 'none'
        all_symbols_cont.style.display = 'block'
    }

}
