


var LevelState = { 
    LevelMapCount:0,
    
    CheckNewMedal:false,
    FishMedalShowUp:false,
    
    AxPageCount:0,
    AxPageCompleteCount:0,
    AxPageComplete:false, 
     
    LoggingPageCount:0,
    LoggingPageCompleteCount:0,
    LoggingPageComplete:false,
    FoxLoggingBtnShowUp:false,
    
    CatchBugPageCount:0,
    CatchBugPageCompleteCount:0,
    CatchBugPageComplete:false,
    FoxCatchBugPageBtnShowUp:false,
    
    FishingPageCount:0,
    FishingPageCompleteCount:0,
    FishingPageComplete:false,
    FoxFishingBtnShowUp:false
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
        //HomeBtn---------------------------------------------------------------------------
        HomeBtnHoverArea =  game.add.sprite(centerX, 630, 'LevelBtn','BtnHover.png');
        HomeBtnHoverArea.anchor.setTo(0.5); 
        HomeBtnHoverArea.scale.setTo(1.5);
        HomeBtnHoverArea.alpha = 0; 
        
        HomeBtnHover = game.add.sprite(0, 100, 'LevelBtn','HomeBtnHover.png');
        HomeBtnHoverTween = game.add.tween(HomeBtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        HomeBtnHoverTween.pause();
        HomeBtnHover.alpha = 0; 
        
        demo.LevelMap.SetLevelBtn( HomeBtnHoverArea ,HomeBtnHover,HomeBtnHoverTween,'GameBootPage');
                
        //TutorialBtn---------------------------------------------------------------------------
        TutorialBtn = game.add.sprite(55, 270, 'LevelBtn','TutorialBtn.png');
        
        TutorialBtnHover = game.add.sprite(55, 270, 'LevelBtn','TutorialBtnHover.png');
        TutorialBtnHoverTween = game.add.tween(TutorialBtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        TutorialBtnHoverTween.pause();
        TutorialBtnHover.alpha = 0;
        
        demo.LevelMap.SetLevelBtn( TutorialBtn ,TutorialBtnHover,TutorialBtnHoverTween,'Tutorial');
        //AxPageBtn---------------------------------------------------------------------------
        FoxAxBtnHoverArea =  game.add.sprite(270, 350, 'LevelBtn','BtnHover.png');
        FoxAxBtnHoverArea.alpha = 0; 

        FoxAxBtnHover = game.add.sprite(0, 100, 'LevelBtn','AxPageBtnHover.png');
        FoxAxBtnHoverTween = game.add.tween(FoxAxBtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        FoxAxBtnHoverTween.pause();
        FoxAxBtnHover.alpha = 0; 

        demo.LevelMap.SetLevelBtn( FoxAxBtnHoverArea,FoxAxBtnHover,FoxAxBtnHoverTween,'BootAxPage');
        //LoggingPageBtn----------------------------------------------------------------------
        FoxLoggingBtn = game.add.sprite(0, 100, 'LevelBtn','FoxLoggingBtn.png');
        //FoxLoggingBtn.alpha = 0; 
        if( LevelState.AxPageComplete == false || LevelState.FoxLoggingBtnShowUp == false ){
            FoxLoggingBtn.alpha = 0;
        }

        FoxLoggingBtnHover = game.add.sprite(0, 100, 'LevelBtn','FoxLoggingBtnHover.png');
        FoxLoggingBtnHoverTween = game.add.tween(FoxLoggingBtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        FoxLoggingBtnHoverTween.pause();
        FoxLoggingBtnHover.alpha = 0; 
        
        FoxLoggingBtnHoverArea =  game.add.sprite(500, 240, 'LevelBtn','BtnHover.png');
        FoxLoggingBtnHoverArea.alpha = 0;

        demo.LevelMap.SetLevelBtn( FoxLoggingBtnHoverArea,FoxLoggingBtnHover,FoxLoggingBtnHoverTween,'BootLoggingPage');
        
        //CatchBugPageBtn----------------------------------------------------------------------
        CatchBugPageBtn = game.add.sprite(0, 100, 'LevelBtn','CatchBugBtn.png');
        if( LevelState.LoggingPageComplete == false || LevelState.FoxCatchBugPageBtnShowUp == false ){
            CatchBugPageBtn.alpha = 0;
        }        

        CatchBugPageBtnHover = game.add.sprite(0, 100, 'LevelBtn','CatchBugBtnHover.png');
        CatchBugPageBtnHoverTween = game.add.tween(CatchBugPageBtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        CatchBugPageBtnHoverTween.pause();
        CatchBugPageBtnHover.alpha = 0;
        
        CatchBugPageBtnHoverArea =  game.add.sprite(860, 290, 'LevelBtn','BtnHover.png');
        CatchBugPageBtnHoverArea.scale.setTo(0.8);
        CatchBugPageBtnHoverArea.alpha = 0;
       
        demo.LevelMap.SetLevelBtn( CatchBugPageBtnHoverArea,CatchBugPageBtnHover,CatchBugPageBtnHoverTween,'CatchBugPage');
        //FishingPageBtn-----------------------------------------------------------------------
        FoxFishingBtn = game.add.sprite(0, 100, 'LevelBtn','FoxFishingBtn.png'); 
        //FoxFishingBtn.alpha = 0;
        if( LevelState.CatchBugPageComplete == false || LevelState.FoxFishingBtnShowUp == false ){
            FoxFishingBtn.alpha = 0;
        }
               
        FoxFishingBtnHover = game.add.sprite(0, 100, 'LevelBtn','FoxFishingBtnHover.png'); 
        FoxFishingBtnHoverTween = game.add.tween(FoxFishingBtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true); 
        FoxFishingBtnHoverTween.pause();
        FoxFishingBtnHover.alpha = 0;
        
        FoxFishingBtnHoverArea =  game.add.sprite(1190, 510, 'LevelBtn','BtnHover.png');
        FoxFishingBtnHoverArea.alpha = 0;       

        demo.LevelMap.SetLevelBtn( FoxFishingBtnHoverArea,FoxFishingBtnHover,FoxFishingBtnHoverTween,'BootFishingPage');
        
        //Medal Btn----------------------------------------------------------------------------------------
        MedalBtn =  game.add.sprite(150, 200, 'Medal','MedalBtn.png');
        MedalBtn.alpha = 1;
        MedalBtn.anchor.setTo(0.5);

        MedalBtnHover =  game.add.sprite(150, 200, 'Medal','MedalBtnOver.png');
        MedalBtnHover.anchor.setTo(0.5);
        MedalBtnHoverTween = game.add.tween(MedalBtnHover).to({alpha:0.5},500,'Linear',true,0,false,true).loop(true);
        MedalBtnHoverTween.pause();
        MedalBtnHover.alpha = 0;
        demo.LevelMap.MedalBtn(MedalBtn,MedalBtnHover,MedalBtnHoverTween);
        
        //LevelBtnMask--------------------------------------------------------------------------------------------------
        /*
        LevelBtnMask = game.add.graphics();
        LevelBtnMask.beginFill(0xffffff);
        LevelBtnMask.drawRect(0,0,1600,1000);
        LevelBtnMask.alpha = 0;
        LevelBtnMask.events.onInputDown.add(LevelMapBlock, this);
        LevelBtnMask.inputEnabled = true;
        LevelBtnMask.scale.setTo(0);
        */
        
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
        demo.LevelMap.createNextIcon('NextIconAxPage',LevelState.AxPageCount,LevelState.AxPageComplete);
        demo.LevelMap.createNextIcon('NextIconLoggingPage',LevelState.LoggingPageCount,LevelState.AxPageComplete);
        demo.LevelMap.createNextIcon('NextIconCatchBugPage',LevelState.CatchBugPageCount,LevelState.LoggingPageComplete);
        demo.LevelMap.createNextIcon('NextIconFishingPage',LevelState.FishingPageCount,LevelState.CatchBugPageComplete);
        /*
        NextIconAxPage = game.add.sprite(0, 100, 'LevelBtn','NextIconAxPage.png');
        if( LevelState.AxPageCount == 0 ){
            NextIconAxPageTween = game.add.tween(NextIconAxPage).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        }else{
            NextIconAxPage.alpha = 0;
        }
        */
        
        /*
        NextIconLoggingPage = game.add.sprite(0, 100, 'LevelBtn','NextIconLoggingPage.png');
        if( LevelState.LoggingPageCount == 0 && LevelState.AxPageComplete == true ){
            NextIconLoggingPageTween = game.add.tween(NextIconLoggingPage).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        }else{
            NextIconLoggingPage.alpha = 0;
        } 
        
        NextIconCatchBugPage = game.add.sprite(0, 100, 'LevelBtn','NextIconCatchBugPage.png');
        if( LevelState.CatchBugPageCount == 0 && LevelState.LoggingPageComplete == true ){
            NextIconCatchBugPageTween = game.add.tween(NextIconCatchBugPage).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        }else{
            NextIconCatchBugPage.alpha = 0;
        }
        
        NextIconFishingPage = game.add.sprite(0, 100, 'LevelBtn','NextIconFishingPage.png');
        if( LevelState.FishingPageCount == 0 && LevelState.LoggingPageComplete == true ){
            NextIconFishingPageTween = game.add.tween(NextIconFishingPage).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        }else{
            NextIconFishingPage.alpha = 0;
        }         
        */
        NewIconMedal = game.add.sprite(-12, 80, 'LevelBtn','NewIconMedal.png');
        NewIconMedalTween = game.add.tween(NewIconMedal).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        if( LevelState.CheckNewMedal == false ){
            NewIconMedalTween.pause();
            NewIconMedal.alpha = 0;
        }
        //NewIconMedalTween.pause();
        //NewIconMedal.alpha = 0;
        
        //MedalBoard--------------------------------------------------------------------------------------
        
        demo.LevelMap.MedalBoard = {
          
            'BG':game.add.sprite(0, 100, 'Medal','MedalBoard.png'),
            'ConfirmBtn':game.add.sprite(0, 100, 'Medal','ConFirmBtn.png'),
            
            'AxMedal':game.add.sprite(0, 100, 'Medal','AxMedal.png'),
            'LoggingMedal':game.add.sprite(0, 100, 'Medal','LoggingMedal.png'),
            'BugMedal':game.add.sprite(0, 100, 'Medal','BugMedal.png'),
            'FishMedal':game.add.sprite(0, 100, 'Medal','FishMedal.png'),
            
            'ConfirmBtnHover':game.add.sprite(0, 100, 'Medal','ConFirmBtnHover.png'),
            'ConfirmBtnArea':game.add.sprite(1082, 615, 'Medal','ConFirmBtnHoverArea.png'),
        };

        demo.LevelMap.MedalBoard['ConfirmBtnArea'].events.onInputDown.add(MedalBoardConfirmBtnDown,this);
        demo.LevelMap.MedalBoard['ConfirmBtnTween'] = game.add.tween(demo.LevelMap.MedalBoard['ConfirmBtnHover']).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        demo.LevelMap.MedalBoard['ConfirmBtnTween'].pause();
        for( let i = 0;i < Object.keys(demo.LevelMap.MedalBoard).length;i++ ){
            demo.LevelMap.MedalBoard[Object.keys(demo.LevelMap.MedalBoard)[i]].alpha = 0; 
        }        
       
        //Audio----------------------------------------------------------------------------------------
        BtnOver = game.add.audio('BtnOver');
        GetMedal = game.add.audio('GetMedal');
        
        //LevelMapOpening--------------------------------------------------------------------------------
        demo.LevelMap.Opening = game.add.sprite(0,0,'blackBG');
        demo.LevelMap.Opening.alpha = 1;
        demo.LevelMap.Opening.Tween = game.add.tween(demo.LevelMap.Opening).to({alpha:0},500,'Linear',true,0);           
        demo.LevelMap.Opening.Tween.onComplete.add(function () {	
            
            demo.LevelMap.setLevelBtnEnable( true );
            demo.LevelMap.GetMedalShowUp(LevelState.FoxLoggingBtnShowUp,LevelState.AxPageComplete,LevelState.CheckNewMedal);
            demo.LevelMap.GetMedalShowUp(LevelState.FoxCatchBugPageBtnShowUp,LevelState.LoggingPageComplete,LevelState.CheckNewMedal);
            demo.LevelMap.GetMedalShowUp(LevelState.FoxFishingBtnShowUp,LevelState.CatchBugPageComplete,LevelState.CheckNewMedal);
            demo.LevelMap.GetMedalShowUp('',LevelState.FishingPageComplete,LevelState.CheckNewMedal);
            LevelState.CheckNewMedal = false;
                            
        }, this);

        //LevelMapClosing--------------------------------------------------------------------------------
        //demo.LevelMap.Closing = {};
        demo.LevelMap.Closing = game.add.sprite(0,0,'blackBG');
        demo.LevelMap.Closing.alpha = 0;        
    }

}

demo.LevelMap.createNextIcon = function(NextIcon,PageCount,PageComplete,check){
    
    if( PageCount == 0 && NextIcon == 'NextIconAxPage' ){
        //console.log(NextIcon);
        NextIcon = game.add.sprite(0, 100, 'LevelBtn',NextIcon + '.png');
        NextIcon.Tween = game.add.tween(NextIcon).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    }else if( PageCount == 0 && PageComplete == true ){
        NextIcon = game.add.sprite(0, 100, 'LevelBtn',NextIcon + '.png');
        NextIcon.Tween = game.add.tween(NextIcon).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    }else{
        NextIcon.alpha = 0;             
    }
};
/*
function LevelMapBlock(){
    console.log('BLOCK');
}
*/
function GetNewMedalConfirmBtnComplete(){
    GetNewMedalConfirmBtnArea.inputEnabled = true;
}
//Get New Medal---------------------------------------------------------------------------------------------------

function GetNewMedalConfirmBtnDown(){
    demo.LevelMap.setLevelBtnEnable(true);
    //LevelBtnMask.scale.setTo(0);
    GetNewMedalConfirmBtnArea.inputEnabled = false;
    game.add.tween(GetNewMedalText).to({alpha:0},500,'Linear',true,0); 
    game.add.tween(GetNewMedalTextLight).to({alpha:0},500,'Linear',true,0); 
    GetNewMedalTextLightTween.pause();
    GetNewMedalConfirmBtnTween = game.add.tween(GetNewMedalConfirmBtn).to({alpha:0},500,'Linear',true,0);    
    GetNewMedalConfirmBtnHoverTween.pause();
    GetNewMedalConfirmBtnHover.alpha = 0;
    
    if( LevelState.FoxLoggingBtnShowUp == false ){
        game.add.tween(FoxLoggingBtn).to({alpha:1},1000,'Linear',true,500);
        LevelState.FoxLoggingBtnShowUp = true;
      
    }
    if( LevelState.FoxCatchBugPageBtnShowUp == false && LevelState.LoggingPageComplete == true ){
        LevelState.FoxCatchBugPageBtnShowUp = true;
        game.add.tween(CatchBugPageBtn).to({alpha:1},1000,'Linear',true,500); 
       
    }
    if( LevelState.FoxFishingBtnShowUp == false && LevelState.CatchBugPageComplete == true ){
        LevelState.FoxFishingBtnShowUp = true;
        game.add.tween(FoxFishingBtn).to({alpha:1},1000,'Linear',true,500); 
       
    }    
    if( LevelState.FishingPageComplete == true && LevelState.FishMedalShowUp == false ){
        LevelState.FishMedalShowUp = true;
    
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
    demo.LevelMap.MedalBoard['ConfirmBtnTween'].pause();
    for( let i = 0;i < Object.keys(demo.LevelMap.MedalBoard).length;i++ ){
        game.add.tween(demo.LevelMap.MedalBoard[Object.keys(demo.LevelMap.MedalBoard)[i]]).to({alpha:0},500,'Linear',true,0); 
    }
    
    demo.LevelMap.setLevelBtnEnable( true );
}
function MedalBoardConfirmBtnOver(){
    
        demo.LevelMap.MedalBoard['ConfirmBtnTween'].resume();
        demo.LevelMap.MedalBoard['ConfirmBtnHover'].alpha = 1;
}
function MedalBoardConfirmBtnOut(){
        demo.LevelMap.MedalBoard['ConfirmBtnTween'].pause();
        demo.LevelMap.MedalBoard['ConfirmBtnHover'].alpha = 0;    
}
//------------------------------------------------------------------------------------------------------------
demo.LevelMap.MedalBtn = function(Btn,Hover,HoverTween){
    Btn.events.onInputDown.add(function(){
        var medal = 7;
        NewIconMedal.alpha = 0;
        NewIconMedalTween.pause();
        LevelState.CheckNewMedal = false;
        demo.LevelMap.setLevelBtnEnable(false);
    
        MedalBtnHoverTween.pause();
        MedalBtnHover.alpha = 0;
        if( LevelState.AxPageComplete == true ){
            medal--;
        }
        if( LevelState.LoggingPageComplete == true ){
            medal--;
        }
        if( LevelState.CatchBugPageComplete == true ){
            medal--;
        }        
        if( LevelState.FishingPageComplete == true ){
            medal--;
        }
        demo.LevelMap.MedalBoardShowUp(medal);
        console.log(medal);
    }, this);
    Btn.events.onInputOver.add(function(){
        BtnOver.play();    
        HoverTween.resume();
        Hover.alpha = 1;    
    }, this);
    Btn.events.onInputOut.add(function(){
        HoverTween.pause();
        Hover.alpha = 0;
    }, this);
};


demo.LevelMap.MedalBoardShowUp = function(medal){
    for( let i = 0;i < Object.keys(demo.LevelMap.MedalBoard).length-medal;i++ ){
        game.add.tween(demo.LevelMap.MedalBoard[Object.keys(demo.LevelMap.MedalBoard)[i]]).to({alpha:1},500,'Linear',true,0); 
    }
    
    demo.LevelMap.MedalBoard['ConfirmBtnArea'].inputEnabled = true;
};


//ExitPage --------------------------------------------------------------------------------------------------------
demo.LevelMap.ExitPage = function(Page){
    demo.LevelMap.setLevelBtnEnable(false);
    
    demo.LevelMap.Closing.Tween = game.add.tween(demo.LevelMap.Closing).to({alpha:1},500,'Linear',true,0); 
    demo.LevelMap.Closing.Tween.onComplete.add(function () {	
        game.state.start(Page,true,true);
    }, this);

}

demo.LevelMap.setLevelBtnEnable = function( Boolean ){
    MedalBtn.inputEnabled = Boolean;
    MedalBtn.input.useHandCursor = Boolean;
    
    TutorialBtn.inputEnabled = Boolean;
    TutorialBtn.input.useHandCursor = Boolean;  
    
    HomeBtnHoverArea.inputEnabled = Boolean;
    HomeBtnHoverArea.input.useHandCursor = Boolean; 
            
    FoxAxBtnHoverArea.inputEnabled = Boolean;
    FoxAxBtnHoverArea.input.useHandCursor = Boolean;  
    
    if( LevelState.AxPageComplete == true ){
        FoxLoggingBtnHoverArea.inputEnabled = Boolean;
        FoxLoggingBtnHoverArea.input.useHandCursor = Boolean; 
    }            
    if( LevelState.LoggingPageComplete == true ){
        CatchBugPageBtnHoverArea.inputEnabled = Boolean;
        CatchBugPageBtnHoverArea.input.useHandCursor = Boolean;      
        
    }
    if( LevelState.CatchBugPageComplete == true ){
        FoxFishingBtnHoverArea.inputEnabled = Boolean;
        FoxFishingBtnHoverArea.input.useHandCursor = Boolean;         
        
    }
};

demo.LevelMap.GetMedalShowUp = function(BtnShowUp,PageComplete,check){
    
    if( check == true && PageComplete == true ){
        //LevelBtnMask.scale.setTo(1);
        demo.LevelMap.setLevelBtnEnable(false);
        GetMedal.play();
        game.add.tween(GetNewMedalText).to({alpha:1},300,'Linear',true,0); 
        GetNewMedalTextShowUpTween = game.add.tween(GetNewMedalTextLight).to({alpha:1},300,'Linear',true,0); 
        GetNewMedalTextShowUpTween.onComplete.add(function(){
            GetNewMedalTextLightTween.resume();
        },this);
        GetNewMedalConfirmBtnTween = game.add.tween(GetNewMedalConfirmBtn).to({alpha:1},500,'Linear',true,500); 
        GetNewMedalConfirmBtnTween.onComplete.add(GetNewMedalConfirmBtnComplete,this);
    }

};

demo.LevelMap.SetLevelBtn = function( HoverArea, Hover,HoverTween,Page ){
    HoverArea.events.onInputDown.add(function(){
        demo.LevelMap.ExitPage(Page);
    }, this);
    HoverArea.events.onInputOver.add(function(){
        Hover.alpha = 1;
        HoverTween.resume();
        BtnOver.play();    
        
    }, this);
    HoverArea.events.onInputOut.add(function(){
        Hover.alpha = 0;
        HoverTween.pause();
        
    }, this);    
    
};
