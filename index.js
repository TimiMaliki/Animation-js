const powerBtn = document.querySelector(".bi-power")
const semiCircle = document.querySelector(".smaller-cirlce");
const switchBtn = document.querySelector(".switch")

const sunSet = document.querySelector(".sun-set")
const sunDown = document.querySelector(".sun-dawn")

const halfMoon = document.querySelector(".half-moon");
const fullMoon = document.querySelector(".full-moon");
const faraway = document.querySelector(".faraway")



// POWER BTN (TURN ON)
powerBtn.addEventListener('click' , (e) =>{
   // TOGGLE CLASS
    faraway.classList.toggle('visibility')
    faraway.classList.add("faraway")
    semiCircle.classList.toggle('visibility')
})

// SUNSET 
sunSet.addEventListener( "click" , (e) => {

    

    //SWITCHING PLACES
      sunSet.classList.add("switchPlay-SunDown")
      sunDown.classList.add("switchPlay-FullMoon")
      fullMoon.classList.add("switchPlay-HalfMoon")
      halfMoon.classList.add("switchPlay-SUNSET")
})

