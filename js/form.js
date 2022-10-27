class Form{
    constructor(){
        this.playButton = createButton("Play");
        this.playButton.position(400,200);


    }

    handlePlayButton(){
        this.playButton.mouseClicked(()=>{
           gameState = 1
           // determina a velocidade dos baloes já dentro do grupinho
           game.ballonGroup.setVelocityXEach(3)
        })
    }

    display(){
        this.handlePlayButton()
    }
}