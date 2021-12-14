let outDay = document.getElementById('day')
let outHours = document.getElementById('hour')
let outMin = document.getElementById('min')
let outSec = document.getElementById('sec')
let changeDate = () => {
    let inputDate = document.querySelector('input')
    let inputArr = inputDate.value.split("-")
    let birthday = new Date(inputArr[0], inputArr[1] - 1, inputArr[2])

    setInterval(function () {
        let today = new Date()
        let distance = birthday - today

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        outDay.innerHTML = `${days}`
        outHours.innerHTML = `${hours}`
        outMin.innerHTML = `${minutes}`
        outSec.innerHTML = `${seconds}`
        console.log('Days ' + days + ' Hours ' + hours + ' Minutes ' + minutes + ' Seconds ' + seconds)
    }, 1000)
}