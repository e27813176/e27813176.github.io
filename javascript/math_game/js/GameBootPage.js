var demo = {};
var centerX = 1600 / 2,
    centerY = 1000 / 2;
demo.GameBootPage = function() {};
demo.GameBootPage.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    preload: function() {
        game.load.image('FoxLogo','javascript/math_game/assets/loadingpage/LOGO.jpg');
        game.load.image('LoadingBar','javascript/math_game/assets/loadingpage/LoadingBar.jpg');
        game.load.image('LoadingBarFrame','javascript/math_game/assets/loadingpage/LoadingBarFrame.png');
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#000000";
        game.state.start('LoadingHomeMenu');
  
    }

}
    
