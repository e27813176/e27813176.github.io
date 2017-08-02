var FoxLoggingBtnShowUp = false;
var FoxFishingBtnShowUp = false;
var FishMedalShowUp = false;
var BackPackFish = [];

var LevelState = { 
    LevelMapCount:0,
    
    CheckNewMedal:false,
    
    AxPageCount:0,
    AxPageCompleteCount:0,
    AxPageComplete:false, 
     
    LoggingPageCount:0,
    LoggingPageCompleteCount:0,
    LoggingPageComplete:false,
    
    FishingPageCount:0,
    FishingPageCompleteCount:0,
    FishingPageComplete:false 
};

demo.LevelMap = function() {};
demo.LevelMap.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    preload: function() {
    },
    create: function() {
        //define backgroung------------------------------------------------------------------------
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
        TutorialBtn = game.add.sprite(55, 270, 'LevelBtn','TutorialBtn.png');
        TutorialBtn.events.onInputDown.add(TutorialBtnDown, this);

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
        if( LevelState.AxPageComplete == false || FoxLoggingBtnShowUp == false ){
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
        if( LevelState.LoggingPageComplete == false || FoxFishingBtnShowUp == false ){
            FoxFishingBtn.alpha = 0;
            
        }
               
        FoxFishingBtnHover = game.add.sprite(0, 100, 'LevelBtn','FoxFishingBtnHover.png'); 
        FoxFishingBtnHover.alpha = 0;
        
        FoxFishingBtnHoverArea =  game.add.sprite(1190, 510, 'LevelBtn','BtnHover.png');
        FoxFishingBtnHoverArea.alpha = 0;       
        FoxFishingBtnHoverArea.events.onInputDown.add(FoxFishingBtnDown, this);
        FoxFishingBtnHoverArea.events.onInputOver.add(FoxFishingBtnOver, this);
        FoxFishingBtnHoverArea.events.onInputOut.add(FoxFishingBtnOut, this);

        //Medal----------------------------------------------------------------------------------------
        MedalBtn =  game.add.sprite(150, 200, 'Medal','MedalBtn.png');
        MedalBtn.alpha = 1;
        MedalBtn.anchor.setTo(0.5);
        MedalBtn.events.onInputDown.add(MedalBtnDown, this);
        MedalBtn.events.onInputOver.add(MedalBtnOver, this);
        MedalBtn.events.onInputOut.add(MedalBtnOut, this);      
        
        MedalBtnHover =  game.add.sprite(150, 200, 'Medal','MedalBtnOver.png');
        MedalBtnHover.anchor.setTo(0.5);
        MedalBtnHoverTween = game.add.tween(MedalBtnHover).to({alpha:0.5},500,'Linear',true,0,false,true).loop(true);
        MedalBtnHoverTween.pause();
        MedalBtnHover.alpha = 0;

        
        //GetNewMedal------------------------------------------------------------------------------------
        GetNewMedalText = game.add.sprite(0, 100, 'GetNewMedal','GetNewMedalText.png');
        GetNewMedalText.alpha = 0;        
        
        GetNewMedalTextLight = game.add.sprite(0, 100, 'GetNewMedal','GetNewMedalTextLight.png');
        GetNewMedalTextLightTween = game.add.tween(GetNewMedalTextLight).to({alpha:0.4},500,'Linear',true,0,false,true).loop(true);
        GetNewMedalTextLightTween.pause();
        GetNewMedalTextLight.alpha = 0;        
        
        GetNewMedalConfirmBtn = game.add.sprite(0, 100, 'GetNewMedal','GetNewMedalConfirmBtn.png');
        GetNewMedalConfirmBtn.alpha = 0; 
        
        GetNewMedalConfirmBtnHover = game.add.sprite(0, 100, 'GetNewMedal','GetNewMedalConfirmBtnHover.png');
        GetNewMedalConfirmBtnHoverTween = game.add.tween(GetNewMedalConfirmBtnHover).to({alpha:0.4},500,'Linear',true,0,false,true).loop(true);
        GetNewMedalConfirmBtnHoverTween.pause();
        GetNewMedalConfirmBtnHover.alpha = 0; 
        
        GetNewMedalConfirmBtnArea = game.add.sprite(978, 496, 'GetNewMedal','GetNewMedalConfirmBtnArea.png');
        GetNewMedalConfirmBtnArea.alpha = 0;  
        GetNewMedalConfirmBtnArea.events.onInputDown.add(GetNewMedalConfirmBtnDown, this);
        GetNewMedalConfirmBtnArea.events.onInputOver.add(GetNewMedalConfirmBtnOver, this);
        GetNewMedalConfirmBtnArea.events.onInputOut.add(GetNewMedalConfirmBtnOut, this);          
        //NextIcon---------------------------------------------------------------------------------------
        NextIconAxPage = game.add.sprite(0, 100, 'LevelBtn','NextIconAxPage.png');
        if( LevelState.AxPageCount == 0 ){
            NextIconAxPageTween = game.add.tween(NextIconAxPage).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        }else{
            NextIconAxPage.alpha = 0;
        }
        
        NextIconLoggingPage = game.add.sprite(0, 100, 'LevelBtn','NextIconLoggingPage.png');
        if( LevelState.LoggingPageCount == 0 && LevelState.AxPageComplete == true ){
            NextIconLoggingPageTween = game.add.tween(NextIconLoggingPage).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        }else{
            NextIconLoggingPage.alpha = 0;
        } 
        
        NextIconFishingPage = game.add.sprite(0, 100, 'LevelBtn','NextIconFishingPage.png');
        if( LevelState.FishingPageCount == 0 && LevelState.LoggingPageComplete == true ){
            NextIconFishingPageTween = game.add.tween(NextIconFishingPage).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        }else{
            NextIconFishingPage.alpha = 0;
        }         

        NewIconMedal = game.add.sprite(-12, 80, 'LevelBtn','NewIconMedal.png');
        NewIconMedalTween = game.add.tween(NewIconMedal).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        if( LevelState.CheckNewMedal == false ){
            NewIconMedalTween.pause();
            NewIconMedal.alpha = 0;
        }
            //NewIconMedalTween.pause();
        //NewIconMedal.alpha = 0;
        //MedalBoard--------------------------------------------------------------------------------------        
        MedalBoard =  game.add.sprite(0, 100, 'Medal','MedalBoard.png');
        MedalBoard.alpha = 0;        
        
        FishMedal =  game.add.sprite(0, 100, 'Medal','FishMedal.png');
        FishMedal.alpha = 0;   
        
        LoggingMedal =  game.add.sprite(0, 100, 'Medal','LoggingMedal.png');
        LoggingMedal.alpha = 0;   
        
        AxMedal =  game.add.sprite(0, 100, 'Medal','AxMedal.png');
        AxMedal.alpha = 0;   
        
        MedalBoardConfirmBtn = game.add.sprite(0, 100, 'Medal','ConFirmBtn.png');
        MedalBoardConfirmBtn.alpha = 0;

        MedalBoardConfirmBtnHover = game.add.sprite(0, 100, 'Medal','ConFirmBtnHover.png');
        MedalBoardConfirmBtnHoverTween = game.add.tween(MedalBoardConfirmBtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        MedalBoardConfirmBtnHoverTween.pause();
        MedalBoardConfirmBtnHover.alpha = 0;
        
        MedalBoardConfirmBtnArea = game.add.sprite(1082, 615, 'Medal','ConFirmBtnHoverArea.png');
        MedalBoardConfirmBtnArea.alpha = 0;
        MedalBoardConfirmBtnArea.events.onInputDown.add(MedalBoardConfirmBtnDown, this);
        MedalBoardConfirmBtnArea.events.onInputOver.add(MedalBoardConfirmBtnOver, this);
        MedalBoardConfirmBtnArea.events.onInputOut.add(MedalBoardConfirmBtnOut, this);          
        //Audio----------------------------------------------------------------------------------------
        BtnOver = game.add.audio('BtnOver');
        GetMedal = game.add.audio('GetMedal');
        
        //LevelMapOpening--------------------------------------------------------------------------------
        LevelMapOpening = game.add.sprite(0,0,'blackBG');
        LevelMapOpening.alpha = 1;
        LevelMapOpeningTween = game.add.tween(LevelMapOpening).to({alpha:0},500,'Linear',true,0);           
        LevelMapOpeningTween.onComplete.add(function () {	
                
            MedalBtn.inputEnabled = true;
            MedalBtn.input.useHandCursor = true;             
            HomeBtnHoverArea.inputEnabled = true;
            HomeBtnHoverArea.input.useHandCursor = true; 
            TutorialBtn.inputEnabled = true;
            TutorialBtn.input.useHandCursor = true;  
            FoxAxBtnHoverArea.inputEnabled = true;
            FoxAxBtnHoverArea.input.useHandCursor = true;  

        
            if( LevelState.AxPageComplete == true ){
                FoxLoggingBtnHoverArea.inputEnabled = true;
                FoxLoggingBtnHoverArea.input.useHandCursor = true; 


                if( FoxLoggingBtnShowUp == false ){
                    MedalBtn.inputEnabled = false;
                    HomeBtnHoverArea.inputEnabled = false;
                    TutorialBtn.inputEnabled = false;
                    FoxAxBtnHoverArea.inputEnabled = false;
                    FoxLoggingBtnHoverArea.inputEnabled = false;
                    GetMedal.play();
                    game.add.tween(GetNewMedalText).to({alpha:1},300,'Linear',true,0); 
                    GetNewMedalTextShowUpTween = game.add.tween(GetNewMedalTextLight).to({alpha:1},300,'Linear',true,0); 
                    GetNewMedalTextShowUpTween.onComplete.add(function(){
                        GetNewMedalTextLightTween.resume();
                    },this);
                    GetNewMedalConfirmBtnTween = game.add.tween(GetNewMedalConfirmBtn).to({alpha:1},500,'Linear',true,500); 
                    GetNewMedalConfirmBtnTween.onComplete.add(GetNewMedalConfirmBtnComplete,this);
                    
                    
                }
                
            }
            if( LevelState.LoggingPageComplete == true ){
                FoxFishingBtnHoverArea.inputEnabled = true;
                FoxFishingBtnHoverArea.input.useHandCursor = true; 

                 
                if( FoxFishingBtnShowUp == false ){
                    MedalBtn.inputEnabled = false;
                    HomeBtnHoverArea.inputEnabled = false;
                    TutorialBtn.inputEnabled = false;
                    FoxAxBtnHoverArea.inputEnabled = false;
                    FoxLoggingBtnHoverArea.inputEnabled = false;
                    FoxFishingBtnHoverArea.inputEnabled = false;
                    
                    GetMedal.play();
                    game.add.tween(GetNewMedalText).to({alpha:1},300,'Linear',true,0); 
                    GetNewMedalTextShowUpTween = game.add.tween(GetNewMedalTextLight).to({alpha:1},300,'Linear',true,0); 
                    GetNewMedalTextShowUpTween.onComplete.add(function(){
                        GetNewMedalTextLightTween.resume();
                    },this);
                    GetNewMedalConfirmBtnTween = game.add.tween(GetNewMedalConfirmBtn).to({alpha:1},500,'Linear',true,500); 
                    GetNewMedalConfirmBtnTween.onComplete.add(GetNewMedalConfirmBtnComplete,this);

                    
                }               
                
            }
            if( LevelState.FishingPageComplete == true && FishMedalShowUp == false ){

                
                MedalBtn.inputEnabled = false;
                HomeBtnHoverArea.inputEnabled = false;
                TutorialBtn.inputEnabled = false;
                FoxAxBtnHoverArea.inputEnabled = false;
                FoxLoggingBtnHoverArea.inputEnabled = false;
                FoxFishingBtnHoverArea.inputEnabled = false; 
                GetMedal.play();
                game.add.tween(GetNewMedalText).to({alpha:1},300,'Linear',true,0); 
                GetNewMedalTextShowUpTween = game.add.tween(GetNewMedalTextLight).to({alpha:1},300,'Linear',true,0); 
                GetNewMedalTextShowUpTween.onComplete.add(function(){
                    GetNewMedalTextLightTween.resume();
                },this);
                GetNewMedalConfirmBtnTween = game.add.tween(GetNewMedalConfirmBtn).to({alpha:1},500,'Linear',true,500); 
                GetNewMedalConfirmBtnTween.onComplete.add(GetNewMedalConfirmBtnComplete,this);

            }        
        }, this);

        //LevelMapClosing--------------------------------------------------------------------------------
        LevelMapClosingBG = game.add.sprite(0,0,'blackBG');
        LevelMapClosingBG.alpha = 0;        
    }

}
function GetNewMedalConfirmBtnComplete(){
    GetNewMedalConfirmBtnArea.inputEnabled = true;
}
//Get New Medal---------------------------------------------------------------------------------------------------
function GetNewMedalConfirmBtnDown(){

    GetNewMedalConfirmBtnArea.inputEnabled = false;
    game.add.tween(GetNewMedalText).to({alpha:0},500,'Linear',true,0); 
    game.add.tween(GetNewMedalTextLight).to({alpha:0},500,'Linear',true,0); 
    GetNewMedalTextLightTween.pause();
    GetNewMedalConfirmBtnTween = game.add.tween(GetNewMedalConfirmBtn).to({alpha:0},500,'Linear',true,0);    
    GetNewMedalConfirmBtnHoverTween.pause();
    GetNewMedalConfirmBtnHover.alpha = 0;
    
    MedalBtn.inputEnabled = true;
    MedalBtn.input.useHandCursor = true;             
    HomeBtnHoverArea.inputEnabled = true;
    HomeBtnHoverArea.input.useHandCursor = true; 
    TutorialBtn.inputEnabled = true;
    TutorialBtn.input.useHandCursor = true;  
    FoxAxBtnHoverArea.inputEnabled = true;
    FoxAxBtnHoverArea.input.useHandCursor = true;     
    
    if( FoxLoggingBtnShowUp == false ){
        game.add.tween(FoxLoggingBtn).to({alpha:1},1000,'Linear',true,500);
        FoxLoggingBtnShowUp = true;
        FoxLoggingBtnHoverArea.inputEnabled = true;
        FoxLoggingBtnHoverArea.input.useHandCursor = true;        
    }
    if( FoxFishingBtnShowUp == false && LevelState.LoggingPageComplete == true ){
        FoxFishingBtnShowUp = true;
        game.add.tween(FoxFishingBtn).to({alpha:1},1000,'Linear',true,500); 
        FoxLoggingBtnHoverArea.inputEnabled = true;
        FoxLoggingBtnHoverArea.input.useHandCursor = true;          
        FoxFishingBtnHoverArea.inputEnabled = true;
        FoxFishingBtnHoverArea.input.useHandCursor = true;         
    }
    if( LevelState.FishingPageComplete == true && FishMedalShowUp == false ){
        FishMedalShowUp = true;
        FoxLoggingBtnHoverArea.inputEnabled = true;
        FoxLoggingBtnHoverArea.input.useHandCursor = true;         
        FoxFishingBtnHoverArea.inputEnabled = true;
        FoxFishingBtnHoverArea.input.useHandCursor = true;         
    }
}
function GetNewMedalConfirmBtnOver(){
    GetNewMedalConfirmBtnHoverTween.resume();
    GetNewMedalConfirmBtnHover.alpha = 1; 
    
}
function GetNewMedalConfirmBtnOut(){
    GetNewMedalConfirmBtnHoverTween.pause();
    GetNewMedalConfirmBtnHover.alpha = 0; 
    
}
//Medal-----------------------------------------------------------------------------------------------------------
function MedalBoardConfirmBtnDown(){

    game.add.tween(MedalBoard).to({alpha:0},500,'Linear',true,0); 
    MedalBoardConfirmBtnHoverTween.pause();
    game.add.tween(MedalBoardConfirmBtnHover).to({alpha:0},500,'Linear',true,0); 
    game.add.tween(MedalBoardConfirmBtn).to({alpha:0},500,'Linear',true,0);
    game.add.tween(AxMedal).to({alpha:0},300,'Linear',true,0);
    game.add.tween(LoggingMedal).to({alpha:0},300,'Linear',true,0);
    game.add.tween(FishMedal).to({alpha:0},300,'Linear',true,0);
    
    MedalBtn.inputEnabled = true;
    MedalBtn.input.useHandCursor = true;             
    HomeBtnHoverArea.inputEnabled = true;
    HomeBtnHoverArea.input.useHandCursor = true; 
    TutorialBtn.inputEnabled = true;
    TutorialBtn.input.useHandCursor = true;  
    FoxAxBtnHoverArea.inputEnabled = true;
    FoxAxBtnHoverArea.input.useHandCursor = true;  
    if( LevelState.AxPageComplete == true ){
        FoxLoggingBtnHoverArea.inputEnabled = true;
        FoxLoggingBtnHoverArea.input.useHandCursor = true; 
    }
    if( LevelState.LoggingPageComplete == true ){
        FoxFishingBtnHoverArea.inputEnabled = true;
        FoxFishingBtnHoverArea.input.useHandCursor = true;                 
    }    
       
    
}
function MedalBoardConfirmBtnOver(){
    
        MedalBoardConfirmBtnHoverTween.resume();
        MedalBoardConfirmBtnHover.alpha = 1;
}
function MedalBoardConfirmBtnOut(){
        MedalBoardConfirmBtnHoverTween.pause();
        MedalBoardConfirmBtnHover.alpha = 0;    
}
//------------------------------------------------------------------------------------------------------------
function MedalBtnDown(){
    NewIconMedal.alpha = 0;
    NewIconMedalTween.pause();
    LevelState.CheckNewMedal = false;
    
    MedalBtnHoverTween.pause();
    MedalBtnHover.alpha = 0;
    game.add.tween(MedalBoard).to({alpha:1},500,'Linear',true,0); 
    MedalBoardConfirmBtnShowUp = game.add.tween(MedalBoardConfirmBtn).to({alpha:1},500,'Linear',true,500);
    MedalBoardConfirmBtnShowUp.onComplete.add(function(){
        MedalBoardConfirmBtnArea.inputEnabled = true;
        
    },this);
    if( LevelState.AxPageComplete == true ){
        game.add.tween(AxMedal).to({alpha:1},500,'Linear',true,500); 
        
        if( FoxLoggingBtnShowUp == false ){
                    
        }
    }
    if( LevelState.LoggingPageComplete == true ){
        game.add.tween(LoggingMedal).to({alpha:1},500,'Linear',true,600); 
    
    }
    if( LevelState.FishingPageComplete == true ){
        game.add.tween(FishMedal).to({alpha:1},500,'Linear',true,700); 
    
    }
    MedalBtn.inputEnabled = false;
    HomeBtnHoverArea.inputEnabled = false;
    TutorialBtn.inputEnabled = false;
    FoxAxBtnHoverArea.inputEnabled = false;
    FoxLoggingBtnHoverArea.inputEnabled = false;
    FoxFishingBtnHoverArea.inputEnabled = false;

}
function MedalBtnOver(){
    BtnOver.play();    
    MedalBtnHoverTween.resume();
    MedalBtnHover.alpha = 1;
}
function MedalBtnOut(){
    MedalBtnHoverTween.pause();
    MedalBtnHover.alpha = 0;
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
    LevelState.AxPageCount++;
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
    LevelState.LoggingPageCount++;
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
    LevelState.FishingPageCount++;
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
    TutorialBtn.inputEnabled = false;
    FoxAxBtnHoverArea.inputEnabled = false;
    FoxLoggingBtnHoverArea.inputEnabled = false;
    FoxFishingBtnHoverArea.inputEnabled = false;
    
    LevelMapClosingBGTween = game.add.tween(LevelMapClosingBG).to({alpha:1},500,'Linear',true,0); 
    LevelMapClosingBGTween.onComplete.add(function () {	
            
        game.state.start(Page,true,true);
    }, this);

}