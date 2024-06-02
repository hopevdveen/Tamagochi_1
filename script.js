const feedButton = document.querySelector(".feedButton")
const medicineButton = document.querySelector(".medicineButton")
const playButton = document.querySelector(".playButton")
const sleepButton = document.querySelector(".sleepButton")
const hamsterElement = document.querySelector(".hamster")
const foodIcon = document.querySelector(".foodIcon")
const heartIcon = document.querySelector(".heartIcon")
const funIcon = document.querySelector(".funIcon")
const sleepIcon = document.querySelector(".sleepIcon")
const foodAudio = document.querySelector(".eating_sound")
const medicineAudio = document.querySelector(".twinkle_sound")
const playAudio = document.querySelector(".playful_sound")
const sleepAudio = document.querySelector(".yawn_sound")

let foodStatus = 0
let medicineStatus = 0
let playStatus = 0
let sleepStatus = 0

function hamsterNormaal() {
    hamsterElement.src = "images/hamster.png"
}

function feedButtonNormal() {
    feedButton.src = "images/feed_button.png"
}

function medicineButtonNormal() {
    medicineButton.src = "images/medicine.button.png"
}

function playButtonNormal() {
    playButton.src = "images/play_button.png"
}

function sleepButtonNormal() {
    sleepButton.src = "images/sleep_button.png"
}

function feed() {
    feedButton.src = "images/feed_button_clicked.png"
    hamsterElement.src = "images/hamster_eating.png"
    setTimeout(hamsterNormaal, 1200)
    setTimeout(feedButtonNormal, 200)
    setTimeout(foodIconDraining, 10000)
    if (foodStatus === 0) {
        foodIcon.src = "images/food_icon_half.png"
        foodStatus = 1;
    } else {
        foodIcon.src = "images/food_icon_full.png"
        foodStatus = 2;
    }
    foodAudio.play();
   // https://domoticx.com/javascript-audio-afspelen-in-webbrowser/ 
}

function medicine() {
    medicineButton.src = "images/medicine_button_clicked.png"
    hamsterElement.src = "images/hamster_medicine.png"
    setTimeout(hamsterNormaal, 1200)
    setTimeout(medicineButtonNormal, 200)
    setTimeout(medicineIconDraining, 10000)
    if (medicineStatus === 0) {
        heartIcon.src = "images/heart_icon_half.png"
        medicineStatus = 1;
    } else {
        heartIcon.src = "images/heart_icon_full.png"
        medicineStatus = 2;
    }
    medicineAudio.play();
}

function play() {
    playButton.src = "images/play_button_clicked.png"
    hamsterElement.src = "images/hamster_playing.png"
    setTimeout(hamsterNormaal, 1200)
    setTimeout(playButtonNormal, 200)
    setTimeout(funIconDraining, 10000)
    if (playStatus === 0) {
        funIcon.src = "images/fun_icon_half.png"
        playStatus = 1;
    } else {
        funIcon.src = "images/fun_icon_full.png"
        playStatus = 2;
    }
    playAudio.play();
}

function sleep() {
    sleepButton.src = "images/sleep_button_clicked.png"
    hamsterElement.src = "images/hamster_sleeping.png"
    setTimeout(hamsterNormaal, 5000)
    setTimeout(sleepButtonNormal, 200)
    setTimeout(sleepIconDraining, 10000)
    if (sleepStatus === 0) {
        sleepIcon.src = "images/sleep_icon_half.png"
        sleepStatus = 1;
    } else {
        sleepIcon.src = "images/sleep_icon_full.png"
        sleepStatus = 2;
    }
    sleepAudio.play();
}

function foodIconDraining() {
    if (foodStatus === 2) {
        foodIcon.src = "images/food_icon_half.png"
        foodStatus = 1
    } else if (foodStatus === 1) {
        foodIcon.src = "images/food_icon_empty.png"
        foodStatus = 0
    }
}

function medicineIconDraining() {
    if (medicineStatus === 2) {
        heartIcon.src = "images/heart_icon_half.png"
        medicineStatus = 1
    }
    else if (medicineStatus === 1) {
        heartIcon.src = "images/heart_icon_empty.png"
        medicineStatus = 0
    }
}

function funIconDraining() {
    if (playStatus === 2) {
        funIcon.src = "images/fun_icon_half.png"
        playStatus = 1
    } else if (playStatus === 1) {
        funIcon.src = "images/fun_icon_empty.png"
        playStatus = 0
    }
}

function sleepIconDraining() {
    if (sleepStatus === 2) {
        sleepIcon.src = "images/sleep_icon_half.png"
        sleepStatus = 1
    } else if (sleepStatus === 1) {
        sleepIcon.src = "images/sleep_icon_empty.png"
        sleepStatus = 0
    }
}

feedButton.addEventListener('click', feed)
medicineButton.addEventListener('click', medicine)
playButton.addEventListener('click', play)
sleepButton.addEventListener('click', sleep)















