const powerBtn = document.querySelector(".bi-power")
const biggerCircle = document.querySelector(".bigger-cirlce");
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


     TOGGLE
      sunSetImage.classList.toggle('visibility')
})

// SUNSET 

// function changeBg(){
//     if(semiCircle.has("smaller-cirlce")){
//         biggerCircle.removeChild(semiCircle)
//     }
// }

sunSet.addEventListener( "click" , (e) => {

    const sunSetImage = document.createElement("div")
    sunSetImage.classList.add("SunsetImg")
     biggerCircle.append(sunSetImage)
    

    //SWITCHING PLACES
      sunSet.classList.add("switchPlay-SunDown")
      sunDown.classList.add("switchPlay-FullMoon")
      fullMoon.classList.add("switchPlay-HalfMoon")
      halfMoon.classList.add("switchPlay-SUNSET")
})

