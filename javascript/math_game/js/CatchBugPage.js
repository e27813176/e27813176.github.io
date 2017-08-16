
demo.CatchBugPage = function() {};
demo.CatchBugPage.prototype = {
    init: function(){
        t = -1;
        level = 5;
        demo.CatchBugPage.correctAnswer = 0;
        demo.CatchBugPage.AnswerRange = 0;
    },
    preload: function() {

        
    },
    create: function() {
        LevelState.CatchBugPageCount++;
        //define backgroung
        game.stage.backgroundColor = "#000";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.add.sprite(0,100,'BG');
        
        FlyingBug = game.add.sprite(0,100,'FlyingBug');
        //game.add.tween(FlyingBug).to({alpha:0.5},500,'Quad.easeInOut',true,0,false,true).loop(true);
        FlyingBugAnimate = FlyingBug.animations.add("FlyingBug",Phaser.Animation.generateFrameNames('FlyingBug_',0,39,'.png',5),30,true);

        //FlyingBugAnimate.play('',false);
        FlyingBugAnimate.onComplete.add(function(){
            t = Math.floor(Math.random()*4)*60+60;    
        });        

        
        
        FoxStanding = game.add.sprite(0,100,'FoxStanding');
        FoxStanding.Animate = FoxStanding.animations.add("FoxStanding",Phaser.Animation.generateFrameNames('FoxStanding_',11,40,'.png',5),30,true);
        FoxStanding.Animate.play('',true);
        
        FoxFalling = game.add.sprite(0,100,'FoxFalling');
        FoxFallingAnimate = FoxFalling.animations.add("FoxFalling",Phaser.Animation.generateFrameNames('FoxFalling_',41,57,'.png',5),30,true);
        FoxFalling.alpha = 0;

        FoxHitting001 = game.add.sprite(0,100,'FoxHitting001');
        FoxHitting001Animate = FoxHitting001.animations.add("FoxHitting001",Phaser.Animation.generateFrameNames('FoxHitting_',58,70,'.png',5),30,true);
        FoxHitting001.alpha = 0;            
        
        FoxHitting = game.add.sprite(0,100,'FoxHitting');
        FoxHittingAnimate = FoxHitting.animations.add("FoxHitting",Phaser.Animation.generateFrameNames('FoxHitting_',71,106,'.png',5),30,true);
        FoxHitting.alpha = 0;        
        //FoxFallingAnimate.play('',true);        
        /*
        FoxStanding.events.onInputDown.add(FoxCatch, this);
        FoxStanding.inputEnabled = true;
        FoxStanding.input.useHandCursor = true;
        */
        FoxStandUp = game.add.sprite(0,100,'FoxStandUp');
        FoxStandUpAnimate = FoxStandUp.animations.add("FoxStandUp",Phaser.Animation.generateFrameNames('FoxStandUp_',101,145,'.png',5),30,true);
        FoxStandUp.alpha = 0;        
        
        FoxCatching = game.add.sprite(0,100,'FoxCatching');
        FoxCatchingAnimate = FoxCatching.animations.add("FoxCatching",Phaser.Animation.generateFrameNames('FoxCatching_',0,10,'.png',5),30,true);
        FoxCatching.alpha = 0;
        
        FruitDrop = game.add.sprite(0,100,'FruitDrop');
        FruitDropAnimate = FruitDrop.animations.add("FruitDrop",Phaser.Animation.generateFrameNames('FruitDrop_',59,96,'.png',5),30,true);
        FruitDrop.alpha = 0;        
        
        QuestionPanel = game.add.sprite(0,100,'Panel','QuestionPanel.png');
        
        
        
        for(let i = 0;i<5;i++){
            AnswerPanel[i] = game.add.sprite(centerX+90*i-445,centerY+140,'Panel',"AnswerPanel.png");
            AnswerPanel[i].anchor.setTo(0.5);
          
            AnswerPanel[i].events.onInputDown.add(CatchBugCheck, this);
            AnswerPanel[i].inputEnabled = true;
            AnswerPanel[i].input.useHandCursor = true;
            AnswerPanel[i].variable = i+1;
            var style = { font: "40px Arial", fill: "#3a42a5", align: "center" };
            answerNum[i] = game.add.text(centerX+90*i-445,centerY+140+2,'', style);
            answerNum[i].anchor.setTo(0.5);
            answerNum[i].alpha = 1;
        }
        var style = { font: "60px Arial", fill: "#74e4f3", align: "center" }; 
        NumSum = game.add.text(centerX-265,centerY-118,'', style);
        NumSum.anchor.set(0.5);
        NumSum.alpha = 1;
        
        NumAdd1 = game.add.text(centerX-265 - 110,centerY-5,'', style);
        NumAdd1.anchor.set(0.5);    
        NumAdd1.alpha = 1;
        
        NumAdd2 = game.add.text(centerX-265 + 105,centerY-5,'', style);
        NumAdd2.anchor.set(0.5);          
        NumAdd2.alpha = 1;
        
        CatchBugPageExitBtn = game.add.sprite(0,100,'Panel',"ExitBtn.png");
        CatchBugPageExitTextGlow = game.add.sprite(0,100,'Panel',"ExitTextGlow.png");

        game.add.tween(CatchBugPageExitTextGlow).to({alpha:0.2},500,'Quad.easeInOut',true,0,false,true).loop(true);
        
        CatchBugPageExitBtnHover = game.add.sprite(70,720,'Panel',"ExitBtnHover.png");
        CatchBugPageExitBtnHover.alpha = 0;
        CatchBugPageExitBtnHover.events.onInputDown.add(demo.CatchBugPage.ExitPage, this);
        CatchBugPageExitBtnHover.inputEnabled = true;        
        CatchBugPageExitBtnHover.input.useHandCursor = true;
        
        GetBugBoard = game.add.sprite(800,500,'Board','Board.png');
        GetBugBoard.anchor.setTo(0.5);
        GetBugBoard.alpha = 0;
        
        GetBugBoardFinishBtn = game.add.sprite(centerX+58,611,'Board','BtnArea.png');
        GetBugBoardFinishBtn.anchor.setTo(0.5);
        GetBugBoardFinishBtn.alpha = 0;
        GetBugBoardFinishBtn.events.onInputDown.add(GetBugBoardFinishBtnDown, this);
        
        
        GetBugBoardContinueBtn = game.add.sprite(centerX-58,611,'Board','BtnArea.png');
        GetBugBoardContinueBtn.anchor.setTo(0.5);
        GetBugBoardContinueBtn.alpha = 0;
        GetBugBoardContinueBtn.events.onInputDown.add(GetBugBoardContinueBtnDown, this);
        //GetBugBoard.alpha = 0;        

        //CreateCatchBugPageAnswerNum(0);
        //Tutorial-------------------------------------------------------------------------------------------

       
        
    
        TutorialBlackBG = game.add.graphics();
        TutorialBlackBG.beginFill(0x000000);
        TutorialBlackBG.drawRect(0,0,1600,1000);
        TutorialBlackBG.alpha = 0;
        TutorialBlackBG.events.onInputDown.add(Block, this);
        TutorialBlackBG.inputEnabled = true;
        //TutorialBlackBG.scale.setTo(0);
        TutorialText1 = game.add.sprite(0,100,'TutorialText','TutorialText1.png');
        TutorialText1.alpha = 0;
        TutorialText2 = game.add.sprite(0,100,'TutorialText','TutorialText2.png');
        TutorialText2.alpha = 0;
        TutorialText3 = game.add.sprite(0,100,'TutorialText','TutorialText3.png');
        TutorialText3.alpha = 0;
        StartText = game.add.sprite(centerX,centerY,'TutorialText','StartText.png');
        StartText.anchor.setTo(0.5);
        StartText.alpha = 0;
        
        
        TutorialAskBoard = game.add.sprite(0,100,'TutorialText','TutorialAsk.png');
        TutorialAskBoard.alpha = 0;              
        
        TutorialNoBtn = game.add.sprite(922,504,'TutorialText','TutorialBtn.png');
        TutorialNoBtn.alpha = 0;
        TutorialNoBtn.events.onInputDown.add(demo.CatchBugPage.tutorialSkip, this);

        TutorialYesBtn = game.add.sprite(867,504,'TutorialText','TutorialBtn.png');
        TutorialYesBtn.alpha = 0;
        TutorialYesBtn.events.onInputDown.add(demo.CatchBugPage.tutorialStart, this);
        
        CircleWave = game.add.sprite(0,100,'TutorialText');
        CircleWave.Animate = CircleWave.animations.add("CircleWave",Phaser.Animation.generateFrameNames('CircleWave_',0,28,'.png',5),30,true);
        CircleWave.alpha = 0;   
        
        demo.CatchBugPage.OpeningBG = game.add.sprite(0,0,'blackBG');
        demo.CatchBugPage.OpeningBG.alpha = 1;
        demo.CatchBugPage.OpeningBG.events.onInputDown.add(Block, this);
        demo.CatchBugPage.OpeningBG.inputEnabled = true;
        demo.CatchBugPage.OpeningBG.Tween = game.add.tween(demo.CatchBugPage.OpeningBG).to({alpha:0},500,'Linear',true,0);  
        demo.CatchBugPage.OpeningBG.Tween.onComplete.add(function(){
            demo.CatchBugPage.OpeningBG.scale.setTo(0);
            if( LevelState.CatchBugPageCount == 1 ){
                demo.CatchBugPage.AskToStartTutorial();
            }else{
                TutorialBlackBG.scale.setTo(0);
                t = Math.floor(Math.random()*4)*60+60;    
            }    
        },this);
        CatchBugClosing = game.add.sprite(0,0,'blackBG');
        CatchBugClosing.alpha = 0;
        

        demo.createQuestionNum(level,demo.CatchBugPage.AnswerRange);
        
    },     
    update: function() {
        if( t > 0 && FlyingBugAnimate.isPlaying == false ){
            t--;
            if(t == 0){
                FlyingBug.alpha = 1;
                FlyingBugAnimate.play('',false);
                if( demo.CatchBugPage.tutorialMode == true ){
                   CircleWave.alpha = 1; 
                   CircleWave.Animate.play('',false);   
                }
                
            }
        }
        if( FoxCatchingAnimate.frame == 4 ){
            
            FlyingBug.alpha = 0;
            //FlyingBugAnimate.stop();
        }
       //console.log(t);
 
    }    
}
function Block(){
    
}

function GetBugBoardContinueBtnDown(){
    if( demo.CatchBugPage.AnswerRange == 0 ){
        demo.CatchBugPage.AnswerRange = 1;
    }else{
        demo.CatchBugPage.AnswerRange = 0;
    }
    game.add.tween(GetBugBoard.scale).to({x:0,y:0},300,'Quad.easeIn',true,0);
    GetBugBoardFinishBtn.inputEnabled = false;
    GetBugBoardContinueBtn.inputEnabled = false; 
    
    for(let i = 0;i<5;i++){
        AnswerPanel[i].inputEnabled = true;
    }
    demo.createQuestionNum(level,demo.CatchBugPage.AnswerRange);
}
function GetBugBoardFinishBtnDown(){

    demo.CatchBugPage.ExitPage();
}

demo.CatchBugPage.ExitPage = function(){
    GetBugBoardFinishBtn.inputEnabled = false;
    GetBugBoardContinueBtn.inputEnabled = false;
    CatchBugClosingTween = game.add.tween(CatchBugClosing).to({alpha:1},500,'Linear',true,0);  
    CatchBugClosingTween.onComplete.add(function(){
        game.state.start('BootLevelMap');
    },this);
};

function CatchBugCheck( AnswerPanel ){

    console.log( AnswerPanel.variable );
    if( AnswerPanel.variable == demo.CatchBugPage.correctAnswer - 10 ){
        FoxCatch();
    }else{
        FoxHittingByFruit();
        
    }
    
}
function FoxHittingByFruit(){
    
    for(let i = 0;i<5;i++){
        AnswerPanel[i].inputEnabled = false;
    }    
    
    FoxStanding.alpha = 0;
    FoxStanding.Animate.stop();        
    FoxHitting001.alpha = 1;
    FoxHitting001Animate.play('',false);
    FruitDrop.alpha = 1;
    FruitDropAnimate.play('',false);
    FoxHitting001Animate.onComplete.add(function(){
        FoxHitting001.alpha = 0;
        FoxHitting.alpha = 1;
        FoxHittingAnimate.play('',false);

        FoxHittingAnimate.onComplete.add(function(){
            FoxHitting.alpha = 0;
            FoxStandUp.alpha = 1;
            FoxStandUpAnimate.play('',false);
                
            FoxStandUpAnimate.onComplete.add(function(){
                FoxStandUp.alpha = 0;
                        
                FoxStanding.alpha = 1;
                FoxStanding.Animate.play('',true);
                
                for(let i = 0;i<5;i++){
                    AnswerPanel[i].inputEnabled = true;
                }     
                
            });
        });
        
    });        
}

function FoxCatch(){
    
    //FlyingBug.alpha = 0;
    if( FlyingBugAnimate.frame > 0 && FlyingBugAnimate.frame < 22 ){
        //FoxStanding.inputEnabled = false;
        for(let i = 0;i<5;i++){
            AnswerPanel[i].inputEnabled = false;
        }
        FoxStanding.alpha = 0;
        FoxStanding.Animate.stop();
        FoxCatching.alpha =1;
        FoxCatchingAnimate.play('',false);
        FoxCatchingAnimate.onComplete.add(function(){
            FoxStanding.alpha = 1;
            FoxCatching.alpha = 0;
            FoxStanding.Animate.play('',true);

            if( demo.CatchBugPage.tutorialMode == true ){
               
                demo.CatchBugPage.tutorialFinish();
            }else{
                ShowUpBugBoard();   
            } 
            
            //FoxStanding.inputEnabled = true;
            //FoxStanding.input.useHandCursor = true;

        });

        
    }else{
        for(let i = 0;i<5;i++){
            AnswerPanel[i].inputEnabled = false;
        }        
        FoxStanding.alpha = 0;
        FoxStanding.Animate.stop();
        FoxFalling.alpha = 1;
        FoxFallingAnimate.play('',false);  
        FoxFallingAnimate.onComplete.add(function(){
            FoxStanding.alpha = 1;
            FoxStanding.Animate.play('',true);
            FoxFalling.alpha = 0;
            for(let i = 0;i<5;i++){
                AnswerPanel[i].inputEnabled = true;
            }
        });
    }
}

function ShowUpBugBoard(){
    LevelState.CatchBugPageCompleteCount++;
    if( LevelState.CatchBugPageCompleteCount == 1 ){
        LevelState.CheckNewMedal = true;
    }
    LevelState.CatchBugPageComplete = true;
    GetBugBoard.alpha = 1;
    GetBugBoard.scale.setTo(0);
    ShowUpBugBoardTween = game.add.tween(GetBugBoard.scale).to({x:1,y:1},300,'Quad.easeOut',true,100);
    ShowUpBugBoardTween.onComplete.add(function(){
        GetBugBoardFinishBtn.inputEnabled = true;
        GetBugBoardContinueBtn.inputEnabled = true;
    });
}



demo.createAnimation = function(Name,startFrame,endFrame,FrameRate){
    var String = Name;
    Name = game.add.sprite(0,100,String);
    Name.Animate = Name.animations.add(String,Phaser.Animation.generateFrameNames(Name+'_',startFrame,endFrame,'.png',5),FrameRate,true);
    
};
demo.CatchBugPage.AskToStartTutorial = function(){
    game.add.tween(TutorialBlackBG).to({alpha :0.5},800,'Quad.easeOut',true);
    game.add.tween(TutorialAskBoard).to({alpha:1},800,'Quad.easeOut',true);
    TutorialNoBtn.inputEnabled = true;        
    TutorialNoBtn.input.useHandCursor = true;
    TutorialYesBtn.inputEnabled = true;        
    TutorialYesBtn.input.useHandCursor = true;
    
    
};
demo.CatchBugPage.tutorialSkip = function(){
    TutorialBlackBG.Tween = game.add.tween(TutorialBlackBG).to({alpha :0},800,'Quad.easeOut',true);
    game.add.tween(TutorialAskBoard).to({alpha:0},800,'Quad.easeOut',true);
    TutorialBlackBG.Tween.onComplete.add(function(){
        TutorialBlackBG.scale.setTo(0);
        
    },this);
    t = 100;
};
demo.CatchBugPage.tutorialStart = function(){
    game.add.tween(TutorialBlackBG).to({alpha :0},800,'Quad.easeOut',true);
    game.add.tween(TutorialAskBoard).to({alpha:0},800,'Quad.easeOut',true);
    
    demo.CatchBugPage.tutorialMode = true;
    for(let i = 0;i<5;i++){
        AnswerPanel[i].inputEnabled = false;
    }    
        TutorialText2ShowUp = game.add.tween(TutorialText2).to({alpha:1},300,'Quad.easeOut',true,1000);
        TutorialText2ShowUp.onComplete.add(function(){
            TutorialBlackBG.scale.setTo(0);
            for(let i = 0;i<5;i++){
                AnswerPanel[i].inputEnabled = true;
            }      
            t = 100;     
        },this);

};
demo.CatchBugPage.tutorialFinish = function(){
    t = -1;  
    FlyingBugAnimate.stop();
    //TutorialText2.alpha = 0;
    TutorialText3ShowUp = game.add.tween(TutorialText3).to({alpha:1},500,Phaser.Easing.Elastic.Out,true);
    TutorialText3ShowUp.onComplete.add(function(){
        TutorialText3FadeOut = game.add.tween(TutorialText3).to({alpha:0},1000,'Quad.easeIn',true,2000);
        game.add.tween(TutorialText2).to({alpha:0},1000,'Quad.easeIn',true,2000);
        game.add.tween(TutorialText1).to({alpha:0},1000,'Quad.easeIn',true,2000);
            
        TutorialText3FadeOut.onComplete.add(function(){
            StartText.scale.setTo(0);
            StartText.alpha = 1;
            //TutorialBlackBG.scale.setTo(1);
            //game.add.tween(TutorialBlackBG).to({alpha :0.5},100,'Quad.easeOut',true,1000);
            StartText.ShowUp = game.add.tween(StartText.scale).to({x:1,y:1},200,'Quad.easeIn',true,1000);
            StartText.ShowUp.onComplete.add(function(){
                //game.add.tween(TutorialBlackBG).to({alpha :0},100,'Quad.easeOut',true,1500);
                StartText.FadeOut = game.add.tween(StartText.scale).to({x:0,y:0},200,'Quad.easeIn',true,1500);
                StartText.FadeOut.onComplete.add(function(){
                    //TutorialBlackBG.scale.setTo(0);
                    for(let i = 0;i<5;i++){
                        AnswerPanel[i].inputEnabled = true;
                    }
                    demo.createQuestionNum(level,demo.CatchBugPage.AnswerRange);  
                    t = Math.floor(Math.random()*4)*60+60;    
                    demo.CatchBugPage.tutorialMode = false;
                },this);
            },this);
        },this);
    },this);
};