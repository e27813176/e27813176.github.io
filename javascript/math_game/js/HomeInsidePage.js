
demo.HomeInsidePage = function() {};
demo.HomeInsidePage.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        FromInside = true;
    },
    preload: function() {
        game.load.image('HomeInsidePageBG','javascript/math_game/assets/HomeInsidePage/HomeInsidePageBG.jpg');
        game.load.image('DoorInsideBtn','javascript/math_game/assets/HomeInsidePage/DoorBtn.jpg');
        
        //Text----------------------------------------------------------------------------------------------------
        game.load.image('GoOutsideText','javascript/math_game/assets/HomeInsidePage/GoOutsideText.jpg');
        
        //BlackBG--------------------------------------------------------------------------------------
        game.load.image('blackBG','javascript/math_game/assets/fishingpage/blackBG.jpg');
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#000000";
        HomeInsidePageBG = game.add.sprite(0,100,'HomeInsidePageBG');
        
        DoorInsideBtn = game.add.button(351, 322,'DoorInsideBtn',GoOutside); 
        DoorInsideBtn.onInputOver.add(DoorInsideBtnOver, this);
        DoorInsideBtn.onInputOut.add(DoorInsideBtnOut, this);
        DoorInsideBtn.inputEnabled = true;
        DoorInsideBtn.alpha = 0;
        
        //Text---------------------------------------------------------------------
        GoOutsideText = game.add.sprite(centerX,0,'GoOutsideText');
        GoOutsideText.anchor.setTo(0.5,0);

        
        HomeTextmask = game.add.graphics();
        HomeTextmask.beginFill(0xffffff);
        HomeTextmask.drawRect(0,150,1600,600);
        
        GoOutsideText.mask = HomeTextmask;
        
        blackBGHomeInside = game.add.sprite(0,0,'blackBG');
        blackBGHomeInside.alpha = 1;
        HomeInsideOpeningTween = game.add.tween(blackBGHomeInside).to({alpha:0},1000,'Linear',true,0);          
    }

}

function GoOutside(){
    HomeInsideClosingTween = game.add.tween(blackBGHomeInside).to({alpha:1},1000,'Linear',true,0);     
    HomeInsideClosingTween.onComplete.add(function () {	
        game.state.start('HomeMenu',true,false);
    }, this); 
}
function DoorInsideBtnOver(){
       
    game.add.tween(GoOutsideText).to({y:150},500,'Quad.easeOut',true,0); 
}
function DoorInsideBtnOut(){
    game.add.tween(GoOutsideText).to({y:0},500,'Quad.easeOut',true,0); 
}