var thunder1img, thunder2img, thunder3img, thunder4img, manImg;
var  man;


function preload(){
    thunder1img = loadImage("image/thunderbolt/1.png")
    thunder2img = loadImage("image/thunderbolt/2.png")
    thunder3img = loadImage("image/thunderbolt/3.png")
    thunder4img = loadImage("image/thunderbolt/4.png")
    

    manImg = loadImage("image/Walking Frame/walking1.png", "image/Walking Frame/walking2.png", "image/Walking Frame/walking3.png", "image/Walking Frame/walking4.png", "image/Walking Frame/walking5.png", "image/Walking Frame/walking6.png", "image/Walking Frame/walking6.png", "image/Walking Frame/walking7.png", "image/Walking Frame/walking8.png")

}

function setup(){
   man = createSprite(650, 60, 50, 90)

   thunder = createSprite(100, 50, 100, 50)
    
}

function draw(){
    createCanvas( 700, 600)
    backGround(0)
    if(frameCount%50 === 0){
        var Rand = math.Round(random(1, 4))
        switch(rand){
            case 1:
                thunder.addImage("thunder", thunder1img)
                break
            case 2:
                thunder.addImage("thunder", thunder2img)
                break
            case 3:
                thunder.addImage("thunder", thunder3img)
                break
            case 4:
                thunder.addImage("thunder", thunder4img)
                break
                
        }
    }
    
    man.addImage("man", manImg)



    drawSprites()
}   

