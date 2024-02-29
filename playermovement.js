AFRAME.registerComponent("playermovement",{
    init: function(){
        this.walk()
    },
    walk:function(){
        window.addEventListener("keydown", (e)=>{
            if(e.key=="ArrowUp" || e.key=="ArrowDown" || e.key=="ArrowLeft" || e.key=="ArrownRight"){
                var soundE = document.querySelector("#sound1")
                soundE.components.sound.playSound()
            }
        })
    }
})