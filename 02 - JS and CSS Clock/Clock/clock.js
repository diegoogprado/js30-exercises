const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')
const digSec = document.querySelector('.dig-second')
const digMin = document.querySelector('.dig-minute')
const digHour = document.querySelector('.dig-hour')

function setDate() {
    const now = new Date()
    const seconds = now.getSeconds()
    const contSeconds = seconds
    const secondsDegrees = ((contSeconds / 60) * 360)
    secondHand.style.transition = (secondsDegrees === 0) ? ('none') : 'cubic-bezier(0.1, 2.7, 0.58, 1) 0.05s'
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    digSec.innerText = (seconds < 10) ? (`0${seconds}`): (`${seconds}`)
    const minutes = now.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360)
    minuteHand.style.transition = (minutesDegrees === 0) ? ('none') : 'cubic-bezier(0.1, 2.7, 0.58, 1) 0.05s'
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    digMin.innerText = (minutes < 10) ? (`0${minutes}`): (`${minutes}`)
    const hours = now.getHours()
    const hoursDegrees = ((hours / 12) * 360)
    hourHand.style.transition = (hoursDegrees === 0) ? ('none') : 'cubic-bezier(0.1, 2.7, 0.58, 1) 0.05s'
    hourHand.style.transform = `rotate(${hoursDegrees+(minutesDegrees/60)}deg)`
    digHour.innerText = (hours < 10) ? (`0${hours}`) :(`${hours}`)

}

setInterval(setDate, 1000)