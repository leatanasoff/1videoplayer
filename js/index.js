const $video= document.querySelector("#video")
    const $play= document.querySelector("#play")
    const $pause= document.querySelector("#pause")
    const $backward= document.querySelector("#backward")
    const $forward= document.querySelector("#forward")
    $play.addEventListener("click", handlePlay)
    $pause.addEventListener("click", handlePause)
    $backward.addEventListener("click", handleBackward)
    $forward.addEventListener("click", handleForward)
    
    function handlePlay(){
        $video.play()
        $play.hidden = true
        $pause.hidden = false
        console.log("le diste click al botón play")
    }
    function handlePause(){
        $video.pause()
        $pause.hidden = true
        $play.hidden = false
        console.log("le diste click al botón pause")
    }

    function handleBackward() {
        $video.currentTime = $video.currentTime - 10
         console.log("para atras 10 segundos", $video.currentTime)
    }

    function handleForward() {
        $video.currentTime = $video.currentTime + 10
         console.log("para adelante 10 segundos", $video.currentTime)
    }
    const $progress= document.querySelector("#progress")
    $video.addEventListener("loadedmetadata", handleLoaded)
    $video.addEventListener("timeupdate", handleTimeupdate)
    
    function handleLoaded(){
        $progress.max = $video.duration
        console.log("ha cargado mi video", $video.duration)
    }
    
    function handleTimeupdate() {
    $progress.value = $video.currentTime 
    }

    $progress.addEventListener("input", handleInput)

    function handleInput(){
        $video.currentTime = $progress.value 
        console.log($progress.value)
    }