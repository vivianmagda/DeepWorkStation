const lofiTrack = document.getElementById(`lofiTrack`)
const lofiVolume = document.getElementById(`lofiVolume`)

lofiTrack.volume = 0.3

lofiVolume.addEventListener(`input`, function(e){
    lofiTrack.volume = e.target.value
})

function playLofi(){
    lofiTrack.play()
}

function pauseLofi(){
    lofiTrack.pause()
}