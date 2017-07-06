
demo.LevelMap = function() {};
demo.LevelMap.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    preload: function() {
        game.load.image('LevelMapBG','javascript/math_game/assets/LevelMap/LevelMapBG.jpg');
        game.load.atlas('LevelBtn', 'javascript/math_game/assets/LevelMap/LevelBtn.png', 'javascript/math_game/assets/LevelMap/LevelBtn.json');
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#000000";
        game.add.sprite(0,100,'LevelMapBG');
        
        FoxAxBtn = game.add.button(200, 500, 'LevelBtn',GoToFoxAx,this,'FoxAx.png'); 
        FoxAxBtn.onInputOver.add(FoxAxBtnOver, this);
        FoxAxBtn.onInputOut.add(FoxAxBtnOut, this);
        FoxAxBtn.inputEnabled = true;
        FoxAxBtn.alpha = 1;        
        FoxAxHover = game.add.sprite(194, 494, 'LevelBtn','FoxAxHover.png'); 
        FoxAxHover.alpha = 0; 
        
        FoxLoggingBtn = game.add.button(400, 250, 'LevelBtn', GoLogging, this,'FoxLogging.png','FoxLogging.png'); 
        FoxLoggingBtn.onInputOver.add(FoxLoggingBtnOver, this);
        FoxLoggingBtn.onInputOut.add(FoxLoggingBtnOut, this);
        FoxLoggingBtn.inputEnabled = true;
        FoxLoggingBtn.alpha = 1;  
        FoxLoggingHover = game.add.sprite(394, 244, 'LevelBtn','FoxLoggingHover.png'); 
        FoxLoggingHover.alpha = 0;    
        
        FoxFishingBtn = game.add.button(800, 600, 'LevelBtn', GoFishing, this,'FoxFishing.png','FoxFishing.png'); 
        FoxFishingBtn.onInputOver.add(FoxFishingBtnOver, this);
        FoxFishingBtn.onInputOut.add(FoxFishingBtnOut, this);
        FoxFishingBtn.inputEnabled = true;
        FoxFishingBtn.alpha = 1;  
        FoxFishingHover = game.add.sprite(794, 594, 'LevelBtn','FoxFishingHover.png'); 
        FoxFishingHover.alpha = 0;             
    }

}
    
function GoToFoxAx(){
    game.state.start('LoadingAxPage');
}
function FoxAxBtnOver(){
    FoxAxHover.alpha = 1;
    FoxAxHoverTween = game.add.tween(FoxAxHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    
}
function FoxAxBtnOut(){
    FoxAxHover.alpha = 0;
    FoxAxHoverTween.pause();
}

function GoLogging(){
    
    game.state.start('LoggingPage',true,false);    
}
function FoxLoggingBtnOver(){
    FoxLoggingHover.alpha = 1;
    FoxLoggingHoverTween = game.add.tween(FoxLoggingHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
      
}
function FoxLoggingBtnOut(){
    FoxLoggingHover.alpha = 0;
    FoxLoggingHoverTween.pause();    
}

function GoFishing(){
    game.state.start('LoadingFishingPage',true,true);
}
function FoxFishingBtnOver(){
    FoxFishingHover.alpha = 1;
    FoxFishingHoverTween = game.add.tween(FoxFishingHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);    
}
function FoxFishingBtnOut(){
    FoxFishingHover.alpha = 0;
    FoxFishingHoverTween.pause();        
}