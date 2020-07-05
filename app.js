document.addEventListener('DOMContentLoaded', () => {
    

    document.addEventListener('keypress', controller)
    function controller(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) 
        if (!audio) return
        audio.currentTime = 0
        audio.play()
    }

    
})