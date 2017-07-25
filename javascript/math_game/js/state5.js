
demo.state5 = function() {};
demo.state5.prototype = {
    preload: function() {
        game.load.image('button','assets/button/redbutton.png');
 
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#ffff1f";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        
        
    },     
    update: function() {}    
}

