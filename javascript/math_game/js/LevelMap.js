var FoxLoggingBtnShowUp = false;
demo.LevelMap = function() {};
demo.LevelMap.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    preload: function() {
        game.load.image('LevelMapBG','javascript/math_game/assets/LevelMap/LevelMapBG.jpg');
        game.load.atlas('LevelBtn', 'javascript/math_game/assets/LevelMap/LevelBtn.png', 'javascript/math_game/assets/LevelMap/LevelBtn.json');
        
        //BlackBG------------------------------------------------------------------------------
        game.load.image('blackBG','javascript/math_game/assets/fishingpage/blackBG.jpg');
        //Audio--------------------------------------------------------------------------------
        game.load.audio('BtnOver', 'javascript/math_game/assets/audio/BtnOver.mp3');
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#000000";
        game.add.sprite(0,100,'LevelMapBG');
        //HomeMenuBtn---------------------------------------------------------------------------
        HomeBtnHoverArea =  game.add.sprite(centerX, 630, 'LevelBtn','BtnHover.png');
        HomeBtnHoverArea.anchor.setTo(0.5); 
        HomeBtnHoverArea.scale.setTo(1.5);
        HomeBtnHoverArea.alpha = 0; 
        HomeBtnHoverArea.events.onInputDown.add(HomeBtnDown, this);
        HomeBtnHoverArea.events.onInputOver.add(HomeBtnOver, this);
        HomeBtnHoverArea.events.onInputOut.add(HomeBtnOut, this);

        
        HomeBtnHover = game.add.sprite(0, 100, 'LevelBtn','HomeBtnHover.png');
        HomeBtnHover.alpha = 0; 
                
        //TutorialBtn---------------------------------------------------------------------------
        TutorialBtnHoverArea =  game.add.sprite(155, 580, 'LevelBtn','BtnHover.png');
        TutorialBtnHoverArea.scale.setTo(1.2,0.8);
        TutorialBtnHoverArea.alpha = 0; 
        TutorialBtnHoverArea.events.onInputDown.add(TutorialBtnDown, this);
        TutorialBtnHoverArea.events.onInputOver.add(TutorialBtnOver, this);
        TutorialBtnHoverArea.events.onInputOut.add(TutorialBtnOut, this);

        
        TutorialBtnHover = game.add.sprite(0, 100, 'LevelBtn','TutorialBtnHover.png');
        TutorialBtnHover.alpha = 0; 
        
        //AxPageBtn---------------------------------------------------------------------------
        FoxAxBtnHoverArea =  game.add.sprite(270, 350, 'LevelBtn','BtnHover.png');
        FoxAxBtnHoverArea.alpha = 0; 
        FoxAxBtnHoverArea.events.onInputDown.add(FoxAxBtnDown, this);
        FoxAxBtnHoverArea.events.onInputOver.add(FoxAxBtnOver, this);
        FoxAxBtnHoverArea.events.onInputOut.add(FoxAxBtnOut, this);

        
        FoxAxBtnHover = game.add.sprite(0, 100, 'LevelBtn','AxPageBtnHover.png');
        FoxAxBtnHover.alpha = 0; 
        
        //LoggingPageBtn----------------------------------------------------------------------
        FoxLoggingBtn = game.add.sprite(0, 100, 'LevelBtn','FoxLoggingBtn.png');
        //FoxLoggingBtn.alpha = 0; 
        if( AxPageComplete == false || FoxLoggingBtnShowUp == false ){
            FoxLoggingBtn.alpha = 0;
            
        }
        
        FoxLoggingBtnHover = game.add.sprite(0, 100, 'LevelBtn','FoxLoggingBtnHover.png');
        FoxLoggingBtnHover.alpha = 0; 
        
        
        FoxLoggingBtnHoverArea =  game.add.sprite(500, 240, 'LevelBtn','BtnHover.png');
        FoxLoggingBtnHoverArea.alpha = 0;
        FoxLoggingBtnHoverArea.events.onInputDown.add(FoxLoggingBtnDown, this);
        FoxLoggingBtnHoverArea.events.onInputOver.add(FoxLoggingBtnOver, this);
        FoxLoggingBtnHoverArea.events.onInputOut.add(FoxLoggingBtnOut, this);

        
        //FishingPageBtn-----------------------------------------------------------------------
        FoxFishingBtn = game.add.sprite(0, 100, 'LevelBtn','FoxFishingBtn.png'); 
        //FoxFishingBtn.alpha = 0;
        if( LoggingPageComplete == false ){
            FoxFishingBtn.alpha = 0;
            
        }
               
        FoxFishingBtnHover = game.add.sprite(0, 100, 'LevelBtn','FoxFishingBtnHover.png'); 
        FoxFishingBtnHover.alpha = 0;

        
        FoxFishingBtnHoverArea =  game.add.sprite(1190, 510, 'LevelBtn','BtnHover.png');
        FoxFishingBtnHoverArea.alpha = 0;       
        FoxFishingBtnHoverArea.events.onInputDown.add(FoxFishingBtnDown, this);
        FoxFishingBtnHoverArea.events.onInputOver.add(FoxFishingBtnOver, this);
        FoxFishingBtnHoverArea.events.onInputOut.add(FoxFishingBtnOut, this);

        
        //Audio----------------------------------------------------------------------------------------
        BtnOver = game.add.audio('BtnOver');
        
        //LevelMapOpening--------------------------------------------------------------------------------
        LevelMapOpening = game.add.sprite(0,0,'blackBG');
        LevelMapOpening.alpha = 1;
        LevelMapOpeningTween = game.add.tween(LevelMapOpening).to({alpha:0},500,'Linear',true,0);           
        LevelMapOpeningTween.onComplete.add(function () {	
            
            HomeBtnHoverArea.inputEnabled = true;
            HomeBtnHoverArea.input.useHandCursor = true; 
            TutorialBtnHoverArea.inputEnabled = true;
            TutorialBtnHoverArea.input.useHandCursor = true;  
            FoxAxBtnHoverArea.inputEnabled = true;
            FoxAxBtnHoverArea.input.useHandCursor = true;  
            if( AxPageComplete == true ){
                FoxLoggingBtnHoverArea.inputEnabled = true;
                FoxLoggingBtnHoverArea.input.useHandCursor = true; 
                if( FoxLoggingBtnShowUp == false ){
                    console.log('ShowUp');
                    FoxLoggingBtnShowUp = true;
                    game.add.tween(FoxLoggingBtn).to({alpha:1},1000,'Linear',true,0); 
                    
                }
                
            }
            if( LoggingPageComplete == true ){
                FoxFishingBtnHoverArea.inputEnabled = true;
                FoxFishingBtnHoverArea.input.useHandCursor = true; 
                
                
            }
        
        }, this);
        //LevelMapClosing--------------------------------------------------------------------------------
        LevelMapClosingBG = game.add.sprite(0,0,'blackBG');
        LevelMapClosingBG.alpha = 0;        
    }

}
//Home Page function---------------------------------------------------------------------------------------------
function HomeBtnDown(){
    LevelMapClosing('GameBootPage');
}
function HomeBtnOver(){
    HomeBtnHover.alpha = 1;
    HomeBtnHoverTween = game.add.tween(HomeBtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    BtnOver.play();    
}
function HomeBtnOut(){
    HomeBtnHover.alpha = 0;
    HomeBtnHoverTween.pause();
}

//Tutorial page function----------------------------------------------------------------------------------------------------
function TutorialBtnDown(){
    game.state.start('Tutorial');
}
function TutorialBtnOver(){
    TutorialBtnHover.alpha = 1;
    TutorialBtnHoverTween = game.add.tween(TutorialBtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    BtnOver.play();    
}
function TutorialBtnOut(){
    TutorialBtnHover.alpha = 0;
    TutorialBtnHoverTween.pause();    
}

//Ax Page function-----------------------------------------------------------------------------------------------------    
function FoxAxBtnDown(){
    LevelMapClosing('BootAxPage');
}
function FoxAxBtnOver(){
    FoxAxBtnHover.alpha = 1;
    FoxAxBtnHoverTween = game.add.tween(FoxAxBtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    BtnOver.play();
    
}
function FoxAxBtnOut(){
    FoxAxBtnHover.alpha = 0;
    FoxAxBtnHoverTween.pause();
}
//Logging Page function-------------------------------------------------------------------------------------------------
function FoxLoggingBtnDown(){
    
    LevelMapClosing('BootLoggingPage');    
}
function FoxLoggingBtnOver(){
    FoxLoggingBtnHover.alpha = 1;
    FoxLoggingBtnHoverTween = game.add.tween(FoxLoggingBtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    BtnOver.play();  
}
function FoxLoggingBtnOut(){
    FoxLoggingBtnHover.alpha = 0;
    FoxLoggingBtnHoverTween.pause();    
}
//Fishing Page function--------------------------------------------------------------------------------------------------
function FoxFishingBtnDown(){
    LevelMapClosing('BootFishingPage',true);
}
function FoxFishingBtnOver(){
    FoxFishingBtnHover.alpha = 1;
    FoxFishingBtnHoverTween = game.add.tween(FoxFishingBtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true); 
    BtnOver.play();
}
function FoxFishingBtnOut(){
    FoxFishingBtnHover.alpha = 0;
    FoxFishingBtnHoverTween.pause();        
}
//LevelMapClosing--------------------------------------------------------------------------------------------------------
function LevelMapClosing(Page){
    HomeBtnHoverArea.inputEnabled = false;
    TutorialBtnHoverArea.inputEnabled = false;
    FoxAxBtnHoverArea.inputEnabled = false;
    FoxLoggingBtnHoverArea.inputEnabled = false;
    FoxFishingBtnHoverArea.inputEnabled = false;
    
    LevelMapClosingBGTween = game.add.tween(LevelMapClosingBG).to({alpha:1},500,'Linear',true,0); 
    LevelMapClosingBGTween.onComplete.add(function () {	
            
        game.state.start(Page,true,false);
    }, this);

}