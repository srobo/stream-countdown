const COUNTDOWN_ELEMENT_ID = "countdown";

function showMessage(text) {
    document.getElementById(COUNTDOWN_ELEMENT_ID).innerText = "";
    document.getElementById("message").innerText = text;
}

function updateCountdown(target) {
    const duration = target.diffNow();
    if (duration.valueOf() <= 0) {
        showMessage("Starting soon!");
    } else {
        document.getElementById(COUNTDOWN_ELEMENT_ID).innerText = duration.toFormat("hh:mm:ss");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("target");

    if (queryParam == null) {
        showMessage("No date provided.");
    } else {
        setInterval(updateCountdown.bind(null, luxon.DateTime.fromISO(queryParam)), 250);
    }

})
