class Game{
    constructor(){
        this.isPlace1 = false
       
    }
    



    start() {
        person = new Person();

        form = new Form()
        form.display();
        pathsGroup = new Group();
        ballonGroup = new Group();
        // tudo o que precisa ser carregado antes do jogo vem aqui 
        path1  = createSprite(200,200,30,30)
        path1.addImage(pathImg);
        pathsGroup.add(path1)

        path2 = createSprite(230,250,30,30);
        path2.addImage(pathImg);
        path2.rotation = 90
        pathsGroup.add(path2)
        

        witch1 = new Witch(50,50)
       

       
        this.showPainel();

        this.addBalloons(10)
               
    }
    
    // você pode determinar a quantidade de balões conforme o nivel da fase (controlar o nivel com gameState)
    addBalloons(numberOfBallons){
        for(var i = 0; i < numberOfBallons ; i++){
            var ballon = createSprite( 200, 200, 30,30);
            ballon.shapeColor = "red";
            ballonGroup.add(ballon);
            console.log("teste")
        }
    }


    play() {
       // console.log("game play")
        form.playButton.hide()
        ballonGroup.bounceOff(pathsGroup)

        this.handlePainel();
            
    }
 

    showPainel(){
        this.btn1 = createButton("bruxa");
        this.btn1.position(680,50)

    }

    showPlaces(){
        if(this.isPlace1 === false){
            this.place1 = createButton("click");
            this.place1.position(130,150);
            this.place1.size(50,50)
        }
        

        this.place2 = createButton("click");
        this.place2.position(130,200);
        this.place2.size(50,50)


        this.place3 = createButton("click");
        this.place3.position(130,250);
        this.place3.size(50,50)
    }

    hidePlaces(){
        this.place1.hide()
        this.place2.hide()
        this.place3.hide()
    }
    
    handlePainel(){
        this.btn1.mouseClicked(()=>{
        // desabilitar os botões ja usados
            this.showPlaces()
            var positionX = 0;
            var positionY = 0;

            
 
            this.place1.mouseClicked(()=>{
                positionX = 130;
                positionY = 150;

                this.hidePlaces();
                var witch = new Witch(positionX, positionY)
                this.isPlace1 = true
            })
    
            this.place2.mouseClicked(()=>{
                positionX = 130;
                positionY = 200;

                this.hidePlaces();
                var witch = new Witch(positionX, positionY)
            })
           
        })
    }
}