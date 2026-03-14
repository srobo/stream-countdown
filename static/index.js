const COUNTDOWN_ELEMENT_ID = "countdown";
const MESSAGE_ELEMENT_ID = "message";

function showMessage(text) {
    document.getElementById(COUNTDOWN_ELEMENT_ID).innerText = "";
    document.getElementById(MESSAGE_ELEMENT_ID).innerText = text;
}

function updateCountdown(target) {
    const duration = target.diffNow();
    if (duration.valueOf() <= 0) {
        showMessage("Starting \nSoon!");
    } else {
        document.getElementById(COUNTDOWN_ELEMENT_ID).innerText = `Starting \nin ${duration.toFormat("hh:mm:ss")}`;
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

    fitty("#" + COUNTDOWN_ELEMENT_ID);
    fitty("#" + MESSAGE_ELEMENT_ID);
})
