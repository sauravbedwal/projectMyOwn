const endDate = "18 June 2023 11:59:59 PM"

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")    

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end)
    // console.log(end)

    const diff = (end - now) / 1000;          //difference is in seconds after dividing it by 1000 as earlier it was in mili-seconds

    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convert into hours;
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // convert into minutes;
    inputs[2].value = Math.floor(diff / 60) % 60;
    // convert into seconds;
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)