const msToDays = 86400000;

const todayDate = new Date();
const wMessage = document.querySelector("#welcome")

const lastAcess = new Date(localStorage.getItem("lastAcess"))

if(!lastAcess){
    wMessage.innerHTML = `Welcome! Let us know if you have any questions.`
} else{
    const timeDif = lastAcess - todayDate;
    const dateDif = timeDif/msToDays;
    if (dateDif < 1){
        wMessage.innerHTML = `Back so soon! Awesome!`
    } else if( dateDif === 1){
        wMessage.innerHTML=`You last visited ${dateDif} day ago.`
    } else{
        wMessage.innerHTML=`You last visited ${dateDif} days ago.`
    }    
}

localStorage.setItem("lastAcess",todayDate)