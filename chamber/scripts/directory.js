const msToDays = 86400000;

const todayDate = new Date();
const wMessage = document.querySelector("#welcome")

const lastAcess = localStorage.getItem("lastAcess")

if(!lastAcess){
    wMessage.innerHTML = `Welcome! Let us know if you have any questions.`
}else{
    const lastDate = new Date(lastAcess);
    const timeDif = todayDate - lastDate;
    const dateDif = Math.floor(timeDif/msToDays);
    console.log(dateDif)
    if (dateDif < 1){
        wMessage.innerHTML = `Back so soon! Awesome!`
    } else if( dateDif === 1){
        wMessage.innerHTML=`You last visited 1 day ago.`
    } else{
        wMessage.innerHTML=`You last visited ${dateDif} days ago.`
    }    
}

localStorage.setItem("lastAcess",todayDate)