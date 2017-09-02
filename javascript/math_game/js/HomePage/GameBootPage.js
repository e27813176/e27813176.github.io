var demo = {};
var centerX = 1600 / 2,
    centerY = 1000 / 2;

demo.GameBootPage = {};
demo.GameBootPage.init = function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
};

demo.GameBootPage.preload = function() {
    game.load.image('FoxLogo','javascript/math_game/assets/loadingpage/LOGO.jpg');
    game.load.image('LoadingBar','javascript/math_game/assets/loadingpage/LoadingBar.jpg');
    game.load.image('LoadingBarFrame','javascript/math_game/assets/loadingpage/LoadingBarFrame.png');
    
};

demo.GameBootPage.create = function() {
    //define backgroung
    this.game.add.text(0, 0, "載入中...", {font:"20px SourceHanSansHWTC-Regular", fill:"#ffffff"});
    game.stage.backgroundColor = "#000000";
    game.state.start('LoadingHomeMenu');

};

