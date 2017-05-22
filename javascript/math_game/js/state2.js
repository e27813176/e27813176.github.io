
demo.state2 = function() {};
demo.state2.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    preload: function() {
        game.load.image('fox_logo','javascript/math_game/assets/loadingpage/LOGO.jpg');
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#000000";
        game.state.start('loadingpage');
  
    }

}
    
