var answer_panel = new Array();
var AxBarX = -243,AxBarLevel2X = - 243;
var AxPageComplete = false;
var AxPageCorrectAnswer;
var AxBarCenterX = (AxBarX + 100) /2; 

demo.AxPage = function(){};
demo.AxPage = {
    
    
  init: function(){
      Sharpening = false;
      AxPageRand = 0;
      answercount = 0;
      level = 1;
  },
  preload: function(){

  },
  create: function(){
      console.log(level); 
        
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
      game.stage.backgroundColor = "#000000";
      game.add.sprite(0,100,'AxPageBG');
     
      //AxBar------------------------------------------------------------------------------------------------------
      AxBarBG = game.add.sprite(100,100,'AxBar','AxBarBG.png');
      AxBarBG.alpha = 0;
      //Bar----------------------------------------------------------------------------------------------------------------
      AxBarSharp = game.add.sprite(AxBarX,100,'AxBar','AxBarSharp.png');
      AxBarSharpTween = game.add.tween(AxBarSharp).to({alpha:'-0.2'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      AxBarSharpTween.pause();      
      AxBarSharp.alpha = 0;
    

      AxBarSharpLevel2 = game.add.sprite(AxBarLevel2X,100,'AxBar','AxBarSharpLevel2.png');
      AxBarSharpLevel2Tween = game.add.tween(AxBarSharpLevel2).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      AxBarSharpLevel2Tween.pause();      
      AxBarSharpLevel2.alpha = 0;
              
      AxBarmask = game.add.graphics();
      AxBarmask.beginFill(0xffffff);
      AxBarmask.drawRect(250,170,350,50);
      AxBarSharp.mask = AxBarmask;
      AxBarSharpLevel2.mask = AxBarmask;
      
      AxBar = game.add.sprite(100,100,'AxBar','AxBar.png');
      AxBar.alpha = 0;
      AxBarLight = game.add.sprite(100,100,'AxBar','AxBarLight.png');
      AxBarLight.alpha = 0;
      
        
      AxBarLightLevel1 = game.add.sprite(100,100,'AxBar','AxBarLight.png');
      AxBarLightLevel1Tween = game.add.tween(AxBarLightLevel1).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      AxBarLightLevel1Tween.pause();  
      AxBarLightLevel1.alpha = 0;     
      
      AxBarEnergy = game.add.sprite(100,100,'AxBar','AxBarEnergy.png');
      AxBarEnergy.alpha = 0;      

      AxBarLightLevel2 = game.add.sprite(100,100,'AxBar','AxBarLightFull.png');
      AxBarLightLevel2Tween = game.add.tween(AxBarLightLevel2).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      AxBarLightLevel2Tween.pause();  
      AxBarLightLevel2.alpha = 0;      
      
      //FoxSitting------------------------------------------------------------------------------------------------------
      FoxSitting = game.add.sprite(300,400,'FoxWithAx001');
      FoxSittingAnimate = FoxSitting.animations.add("FoxSittingDynamic",Phaser.Animation.generateFrameNames('FoxWithAx001_',10,17,'.png',5),10,true);
      FoxSitting.animations.play("FoxSittingDynamic",5,true); 
      FoxSitting.events.onInputDown.add(FoxSittingDown, this);
      FoxSitting.events.onInputOver.add(FoxSittingOver, this);
      FoxSitting.events.onInputOut.add(FoxSittingOut, this);
      FoxSitting.inputEnabled = true;
      FoxSitting.input.useHandCursor = true; 
      
      FoxSitting002 = game.add.sprite(300,400,'FoxSitting002');
      FoxSitting002Animate = FoxSitting002.animations.add("FoxSitting002Dynamic",Phaser.Animation.generateFrameNames('FoxSitting002_',10,24,'.png',5),10,true);
      FoxSitting002.alpha = 0;

      
      FoxWithAx = game.add.sprite(300,400,'FoxWithAx');
      FoxWithAxAnimate = FoxWithAx.animations.add("FoxWithAxDynamic",Phaser.Animation.generateFrameNames('FoxWithAx002_',0,9,'.png',5),10,true);
      FoxWithAx.alpha = 0;
      FoxWithAx.events.onInputDown.add(StopSharpening, this);
      FoxWithAx.events.onInputOver.add(FoxWithAxOver, this);
      FoxWithAx.events.onInputOut.add(FoxWithAxOut, this);
      FoxWithAx.inputEnabled = false;
      
      FoxWithGoldenAx = game.add.sprite(300,400,'FoxWithAx003');
      FoxWithGoldenAxAnimate = FoxWithGoldenAx.animations.add("FoxWithGoldenAxDynamic",Phaser.Animation.generateFrameNames('FoxWithAx003_',0,9,'.png',5),10,true);
      FoxWithGoldenAx.alpha = 0;
      FoxWithGoldenAx.events.onInputDown.add(StopSharpening, this);
      FoxWithGoldenAx.events.onInputOver.add(FoxWithAxOver, this);
      FoxWithGoldenAx.events.onInputOut.add(FoxWithAxOut, this);
      FoxWithGoldenAx.inputEnabled = false;      

      //Text-----------------------------------------------------------------------------------------------------------------
      StartSharpenText = game.add.sprite(centerX,0,'AxPageText',"StartSharpenText.jpg");
      StartSharpenText.anchor.setTo(0.5,0);
  
      StopSharpenText = game.add.sprite(centerX,0,'AxPageText',"StopSharpenText.jpg");
      StopSharpenText.anchor.setTo(0.5,0);

      ExitAxPageText = game.add.sprite(centerX,0,'AxPageText',"ExitAxPageText.jpg");
      ExitAxPageText.anchor.setTo(0.5,0);        
    
      AxPagemask = game.add.graphics();
      AxPagemask.beginFill(0xffffff);
      AxPagemask.drawRect(0,150,1600,600);
        
      StartSharpenText.mask = AxPagemask;
      StopSharpenText.mask = AxPagemask;
      ExitAxPageText.mask = AxPagemask;
      
      //Panel---------------------------------------------------------------------------------------------------------------------
      QuestionPanel = game.add.sprite(0,100,'Panel','QuestionPanel.png');
      QuestionPanel.alpha = 0;

      QuestionPanelGolden = game.add.sprite(0,100,'Panel','QuestionPanelGolden.png');
      QuestionPanelGolden.alpha = 1;
      QuestionPanelGoldenTween = game.add.tween(QuestionPanelGolden).to({alpha:'-0.5'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      QuestionPanelGoldenTween.pause();
      QuestionPanelGolden.alpha = 0;      
      for(let i = 0;i<5;i++){
          answer_panel[i] = game.add.sprite(centerX+100*i,centerY+98,'Panel','AnswerPanel.png');
          answer_panel[i].anchor.setTo(0.5);
          
          answer_panel[i].alpha = 0;
          
          answer_panel[i].events.onInputDown.add(AxPageCheckAnswerDown, this);
          answer_panel[i].variable = i+1;
          answer_panel[i].inputEnabled = false;
      }
      //PanelGlow------------------------------------------------------------------------------------------------------------------
      PanelGlowNumSum = game.add.sprite(0,100,'Panel','PanelGlowNumSum.png');
      PanelGlowNumSum.alpha = 0;
      
      PanelGlowNumAdd = game.add.sprite(0,100,'Panel','PanelGlowNumAdd.png');
        
      PanelGlowNumAdd.alpha = 0;
      
      
      QuestionPanelWrongFx = game.add.sprite(0,100,'QuestionPanelWrongFx');
      QuestionPanelWrongFxAnimate = QuestionPanelWrongFx.animations.add("QuestionPanelWrongFx",Phaser.Animation.generateFrameNames('QuestionPanelWrongFx_',0,20,'.png',5),10,true);
      QuestionPanelWrongFx.alpha = 0;
      
      QuestionPanelRightFx = game.add.sprite(0,100,'QuestionPanelRightFx');
      QuestionPanelRightFxAnimate = QuestionPanelRightFx.animations.add("QuestionPanelRightFx",Phaser.Animation.generateFrameNames('QuestionPanelRightFx_',0,20,'.png',5),10,true);
      QuestionPanelRightFx.alpha = 0;      
      
      //EnergyTransfer-------------------------------------------------------------------------------------------------------------
      //EnergyNumSum = game.add.sprite(0,100,'Panel','PanelGlowNumSum.png');
      //EnergyNumSum.alpha = 0;
      
      EnergyNumAdd = game.add.sprite(0,100,'AxBar','AxBarEnergyBall.png');
      EnergyNumAdd.alpha = 0;      
      //ArrowSheet------------------------------------------------------------------------------------------------------------------
        
      ArrowSheet = game.add.sprite(0,100,'ArrowSheet');
      ArrowSheet.animations.add("ArrowSheetDynamic",Phaser.Animation.generateFrameNames('ArrowSheet_',0,8,'.png',5),10,true);
      //ArrowSheet.alpha = 0;
      ArrowSheet.x = -330;
      ArrowSheet.y = -50;
      ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
      ArrowSheet.alpha = 1;     
    
      //Fire---------------------------------------------------------------------------------------------------------------
      Fire001 = game.add.sprite(0,0,'Fire');
      Fire001.animations.add("Fire001",Phaser.Animation.generateFrameNames('Fire001_',0,25,'.png',5),10,true);
      Fire001.animations.play("Fire001",30,true);
      
      Fire002 = game.add.sprite(0,0,'Fire');
      Fire002.animations.add("Fire002",Phaser.Animation.generateFrameNames('Fire002_',0,25,'.png',5),10,true);
      Fire002.animations.play("Fire002",25,true);      
      //Board-----------------------------------------------------------------------------------------------------------
      BoardBG = game.add.sprite(centerX,centerY,'Board','BoardBG.png');
      BoardBG.anchor.setTo(0.5);
      BoardBG.alpha = 0;

      BoardSeal = game.add.sprite(0,100,'Board','BoardSeal.png');
      BoardSeal.alpha = 0;

      BoardBackBtn = game.add.sprite(0,100,'Board','BoardBackBtn.png');
      BoardBackBtn.alpha = 0;

      BoardBackBtnHover = game.add.sprite(0,100,'Board','BoardBackBtnHover.png');
      BoardBackBtnHoverTween = game.add.tween(BoardBackBtnHover).to({alpha:'-0.5'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      BoardBackBtnHoverTween.pause();
      BoardBackBtnHover.alpha = 0;

      BoardBackBtnHoverArea = game.add.sprite(858,576,'Board','BoardBackBtnHoverArea.png');
      BoardBackBtnHoverArea.alpha = 0;
      BoardBackBtnHoverArea.events.onInputDown.add(BoardBackBtnDown, this);
      BoardBackBtnHoverArea.events.onInputOver.add(BoardBackBtnOver, this);
      BoardBackBtnHoverArea.events.onInputOut.add(BoardBackBtnOut, this);
      //BoardBackBtnHoverArea.inputEnabled = true;      
      //ExitBtn---------------------------------------------------------------------------------------------------
      /*
      ExitBtn = game.add.sprite(1150,550,'ExitBtn');
      ExitBtn.alpha = 0;      
      ExitBtn.events.onInputDown.add(ExitAxPage, this);
      ExitBtn.inputEnabled = true;
      ExitBtn.input.useHandCursor = true; 
      */
      //Btn-----------------------------------------------------------------------------------------------------------------
      AxPageBackBtn = game.add.sprite(458,376,'Btn','BackBtn.png');
      AxPageBackBtn.alpha = 1;
      AxPageBackBtn.scale.setTo(0);
      AxPageBackBtn.anchor.setTo(1,1);
      AxPageBackBtn.events.onInputDown.add(AxPageBackBtnDown, this);
      AxPageBackBtn.events.onInputOver.add(AxPageBackBtnOver, this);
      AxPageBackBtn.events.onInputOut.add(AxPageBackBtnOut, this);

      AxPageStartBtn = game.add.sprite(481,376,'Btn','StartBtn.png');
      AxPageStartBtn.alpha = 1;
      AxPageStartBtn.scale.setTo(0)
      AxPageStartBtn.anchor.setTo(0,1);
      AxPageStartBtn.events.onInputDown.add(AxPageStartBtnDown, this);
      AxPageStartBtn.events.onInputOver.add(AxPageStartBtnOver, this);
      AxPageStartBtn.events.onInputOut.add(AxPageStartBtnOut, this);      
      //AxPageOpening--------------------------------------------------------------------------------------------------------
      AxPageOpening = game.add.sprite(0,100,'BlackBG');
      AxPageOpening.alpha = 1;      
      game.add.tween(AxPageOpening).to({alpha:0},500,'Linear',true,0);  
      
      //AxPageClosing--------------------------------------------------------------------------------------------------------
      AxPageClosing = game.add.sprite(0,100,'BlackBG');
      AxPageClosing.alpha = 0;      
      
      //sound----------------------------------------------------------------------------------------------------------------
      rightFX = game.add.audio('rightFX');
      AxFX = game.add.audio('AxFX');
      AddEnergyFX = game.add.audio('AddEnergyFX');
      AxPagePlay = game.add.audio('AxPagePlay');
      AxPageSuccess = game.add.audio('AxPageSuccess');
      WrongFX = game.add.audio('wrongFX');
      
      //AxPageMusicBG.loopFull(1);
  },
  update: function(){
      if( AxBarSharpLevel2.x > -243 && AxBarSharpLevel2.x <= 100 && Sharpening == true ){
          AxBarSharpLevel2.x -= 0.1;
      }
  } 
}
//AxPageBackBtnDown-----------------------------------------------------------------------------------------------------------------------
function AxPageBackBtnDown(){
    AxBarX = AxBarSharp.x;
    AxBarLevel2X = AxBarSharpLevel2.x;
    AxPageClosingTween = game.add.tween(AxPageClosing).to({alpha:1},500,'Linear',true,0);
    AxPageClosingTween.onComplete.add(function(){
        game.state.start('BootLevelMap');

    },this);    
}
function AxPageBackBtnOver(){
    AxPageBackBtnScaleTween = game.add.tween(AxPageBackBtn.scale).to({x:1.1,y:1.1},500,'Quad.easeInOut',true,0,false,true).loop(true);
    
}
function AxPageBackBtnOut(){
    AxPageBackBtnScaleTween.pause();
    AxPageBackBtn.scale.setTo(1);
}
//AxPageStartBtnDown------------------------------------------------------------------------------------------------------------------------
function AxPageStartBtnDown(){
    StartSharpening();
}
function AxPageStartBtnOver(){
    AxPageStartBtnScaleTween = game.add.tween(AxPageStartBtn.scale).to({x:1.1,y:1.1},500,'Quad.easeInOut',true,0,false,true).loop(true);
}
function AxPageStartBtnOut(){
    AxPageStartBtnScaleTween.pause();
    AxPageStartBtn.scale.setTo(1);
    //game.add.tween(AxPageStartBtn.scale).to({x:1,y:1},100,'Linear',true,0);
}
//BoardBackBtnDown---------------------------------------------------------------------------------------------------------------------------
function BoardBackBtnDown(){
    
    AxBarX = AxBarSharp.x;
    AxBarLevel2X = AxBarSharpLevel2.x;
    AxPageClosingTween = game.add.tween(AxPageClosing).to({alpha:1},500,'Linear',true,0);
    AxPageClosingTween.onComplete.add(function(){
        game.state.start('BootLevelMap');

    },this);    
}
function BoardBackBtnOver(){
    BoardBackBtnHoverTween.resume();
    BoardBackBtnHover.alpha = 1;    
}
function BoardBackBtnOut(){
    BoardBackBtnHoverTween.pause();
    BoardBackBtnHover.alpha = 0;
}
//----------------------------------------------------------------------------------------------------------------------------------------------
function ExitAxPage(){
    ExitBtn.inputEnabled = false;
    AxBarX = AxBarSharp.x;
    AxBarLevel2X = AxBarSharpLevel2.x;    
    AxPageClosingTween = game.add.tween(AxPageClosing).to({alpha:1},500,'Linear',true,0);  
    AxPageClosingTween.onComplete.add(function(){
        game.state.start('BootLevelMap');
    },this);
}
//FoxSittingDown---------------------------------------------------------------------------------------------------------------------------
function FoxSittingDown(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;     
    
    FoxSitting.inputEnabled = false;
    game.add.tween(AxPageBackBtn.scale).to({x:1,y:1},500,Phaser.Easing.Back.Out,true,0);
    AxPageStartBtnTween = game.add.tween(AxPageStartBtn.scale).to({x:1,y:1},500,Phaser.Easing.Back.Out,true,0);
    AxPageStartBtnTween.onComplete.add(function(){
        AxPageBackBtn.inputEnabled = true;
        AxPageBackBtn.input.useHandCursor = true;
        AxPageStartBtn.inputEnabled = true;
        AxPageStartBtn.input.useHandCursor = true;
    },this);
}
function FoxSittingOver(){
    /*
    ArrowSheet.x = -330;
    ArrowSheet.y = -50;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;    
    */
    //game.add.tween(StartSharpenText).to({y:150},500,'Quad.easeOut',true,0); 
}
function FoxSittingOut(){
     
    //ArrowSheet.animations.stop();
    //ArrowSheet.alpha = 0;      
    //game.add.tween(StartSharpenText).to({y:0},500,'Quad.easeOut',true,0); 
}
//FoxWithAxOverBtn------------------------------------------------------------------------------------------------------------------------
function FoxWithAxOver(){
    /*
    ArrowSheet.x = -330;
    ArrowSheet.y = -50;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;     
    */
    //game.add.tween(StopSharpenText).to({y:150},500,'Quad.easeOut',true,0); 
}
function FoxWithAxOut(){
    //ArrowSheet.animations.stop();
    //ArrowSheet.alpha = 0;      
    //game.add.tween(StopSharpenText).to({y:0},500,'Quad.easeOut',true,0); 
}

function StartSharpening(){
    //game.add.tween(StartSharpenText).to({y:0},500,'Quad.easeOut',true,0);
   
    AxPagePlay.loopFull(1);
    Sharpening = true;
    game.add.tween(AxPageBackBtn.scale).to({x:0,y:0},300,'Quad.easeIn',true,0);
    game.add.tween(AxPageStartBtn.scale).to({x:0,y:0},300,'Quad.easeIn',true,0);
    AxPageBackBtn.inputEnabled = false;
    AxPageStartBtn.inputEnabled = false;
    
    AxPageStartBtnScaleTween.pause();
    FoxSitting.alpha = 0;
    FoxSitting.animations.stop();
    
    FoxSitting002.alpha = 0;
    FoxSitting002.animations.stop();    
    FoxSitting.inputEnabled = false;
    if( AxBarSharp.x > 100 ){
        FoxWithGoldenAx.alpha = 1;
        FoxWithGoldenAx.animations.play("FoxWithGoldenAxDynamic",15,true); 
        AxBarLightLevel1.alpha = 1;
        AxBarLightLevel1Tween.resume();       
    }
    if( AxBarSharp.x < 100 ){
        FoxWithAx.alpha = 1;
        AxFX.play();
        FoxWithAxAnimate = FoxWithAx.animations.play("FoxWithAxDynamic",15,true); 
        FoxWithAxAnimate.onLoop.add(function(){
            //console.log("Start");
            AxFX.play();
        }, this);
        /* 
        if(FoxWithAxAnimate.frame == 0){
            AxFX.play();
        }
        */
    }
    if( AxBarSharpLevel2.x > -243){
        AxBarSharpLevel2.alpha = 1;
        AxBarSharpLevel2Tween.resume();
    }
    //AxFX.loopFull(1);
    FoxWithAx.inputEnabled = true;
    FoxWithAx.input.useHandCursor = true;
    //ExitBtn.inputEnabled = false;
    
    AxBarBG.alpha = 1;
    AxBarSharp.alpha = 1;
    AxBarSharpTween.resume();
    
    AxBar.alpha = 1;
    game.add.tween(QuestionPanel).to({alpha:1},500,'Quad.easeOut',true,0); 
    
    for(let i = 0;i<5;i++){
        game.add.tween(answer_panel[i]).to({alpha:1},500,'Quad.easeOut',true,0); 
        //answer_panel[i].alpha = 1;    
    }
    CreateAxPageNumber();
}

function StopSharpening(){
      ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
      ArrowSheet.alpha = 1;     
    
    AxPagePlay.stop();
    Sharpening = false;
    //AxFX.stop();
    game.add.tween(StopSharpenText).to({y:0},500,'Quad.easeOut',true,0); 
    FoxWithAx.alpha = 0;
    FoxWithAx.animations.stop();
    FoxWithGoldenAx.alpha = 0;
    FoxWithGoldenAx.animations.stop(); 
    FoxWithAx.inputEnabled = false;
    
    if( AxBarSharp.x >= 100 ){
        FoxSitting002.alpha = 1;
        FoxSitting002.animations.play("FoxSitting002Dynamic",15,true); 
        
    }else{
        FoxSitting.alpha = 1;
        FoxSittingAnimate.play();
        
    }

    FoxSitting.inputEnabled = true;
    FoxSitting.input.useHandCursor = true;
      
    AxBarBG.alpha = 0;
    AxBarSharpTween.pause();
    AxBarSharp.alpha = 0;

    AxBarSharpLevel2Tween.pause();
    AxBarSharpLevel2.alpha = 0;
    
    AxBar.alpha = 0;
    AxBarLight.alpha = 0;
    AxBarLightLevel1Tween.pause();
    AxBarLightLevel1.alpha = 0;
    game.add.tween(QuestionPanel).to({alpha:0},500,'Quad.easeOut',true,0);
    game.add.tween(QuestionPanelGolden).to({alpha:0},500,'Quad.easeOut',true,0);
        
    QuestionPanelGoldenTween.pause();    
    //QuestionPanel.alpha = 0;
    for(let i = 0;i<5;i++){
        game.add.tween(answer_panel[i]).to({alpha:0},500,'Quad.easeOut',true,0); 
        answer_panel[i].inputEnabled = false;    
    }
    NumSum.destroy();
    NumAdd1.destroy();
    NumAdd2.destroy();
    for(let i = 0;i<5;i++){
        answerNum[i].destroy();
    }
        
}
//Question-----------------------------------------------------------------------------------------------------------
var NumSum,NumAdd1,NumAdd2;

function CreateAxPageNumber(){
    AxPageRand = 0;
    var equation = createEquation(level);
    var style = { font: "60px Arial", fill: "#d8cdaa", align: "center" };      
    if( level == 1 ){
        NumSum = game.add.text(centerX+208,centerY-179,'?', style);
        NumSum.anchor.set(0.5);
    
        NumAdd1 = game.add.text(centerX+208-120,centerY-63,equation[0], style);
        NumAdd1.anchor.set(0.5);    

        NumAdd2 = game.add.text(centerX+208+120,centerY-63,equation[1], style);
        NumAdd2.anchor.set(0.5);  
    }
    if( level == 2 ){
        NumSum = game.add.text(centerX+208,centerY-179,equation[2], style);
        NumSum.anchor.set(0.5);
    
        NumAdd1 = game.add.text(centerX+208-120,centerY-63,equation[0], style);
        NumAdd1.anchor.set(0.5);    

        NumAdd2 = game.add.text(centerX+208+120,centerY-63,'?', style);
        NumAdd2.anchor.set(0.5);  
    }

    if( level == 1 ){
        CreateAxPageAnswerNum(0);
        
        if( AxPageRand == 0 ){
            //answer_panel[equation[2]-1].inputEnabled = true;
            AxPageCorrectAnswer = equation[2];
        }
        
    }
    if( level == 2 ){
        CreateAxPageAnswerNum(0);
        
        
        if( AxPageRand == 0 ){
            //answer_panel[equation[1]-1].inputEnabled = true;
            AxPageCorrectAnswer = equation[1];
        }
        
    }
    for(let i = 0;i<5;i++){
        answer_panel[i].inputEnabled = true;   
    }
}
function AxPageCheckAnswerDown(answer_panel){

    if( answer_panel.variable == AxPageCorrectAnswer ){
        console.log('answer_panel.variable');
        QuestionPanelRightFx.alpha = 1;
        game.add.tween(QuestionPanelRightFx).to({alpha:0},500,'Quad.easeOut',true,200);
        QuestionPanelRightFx.animations.play("QuestionPanelRightFx",30,false);
        /*
        QuestionPanelRightFxAnimate.onComplete.add(function(){
            QuestionPanelRightFx.alpha = 0;
        },this);
        */
        answercount++;            
        AxPageCheckAnswer();
        answercount++;
    }else{
        WrongFX.play();
        QuestionPanelWrongFx.alpha = 1;
        QuestionPanelWrongFx.animations.play("QuestionPanelWrongFx",45,false);
        QuestionPanelWrongFxAnimate.onComplete.add(function(){
            QuestionPanelWrongFx.alpha = 0;
        },this);
        answercount++;
    }
    
}


function AxPageCheckAnswer(){
    //RightFx-------------------------------
    rightFX.play();
    
    AxBarLight.alpha = 1;
    game.add.tween(AxBarLight).to({alpha:0},1000,'Quad.easeOut',true,0);

    if( level == 1 ){
        PanelGlowNumSum.alpha = 1;
        game.add.tween(PanelGlowNumSum).to({alpha:0},500,'Quad.easeOut',true,0);
        
    }else if( level == 2 ){
        PanelGlowNumAdd.alpha = 1;
        game.add.tween(PanelGlowNumAdd).to({alpha:0},500,'Quad.easeOut',true,0);
    }
        
    //AxPageRand Change---------------------------------------------------------------
    if( AxBarSharp.x >= AxBarCenterX - 30 && level == 1 ){
        AxPageRand = 1;
    }else if( AxBarSharpLevel2.x >= AxBarCenterX - 30 ){
        console.log(AxPageRand);
        AxPageRand = 1;
    }
    //-----------------------------------------------------------------------------------------------
    if( AxBarSharp.x < 100 ){
        //AxBarSharpPlusTween = game.add.tween(AxBarSharp).to({x:'+300'},250,'Quad.easeOut',true,0);
        AxBarSharpPlusTween = game.add.tween(AxBarSharp).to({x:'+30'},250,'Quad.easeOut',true,0);
    }
    
    if( AxBarSharp.x >= 81 && AxBarSharpLevel2.x <= -243 ){
        AxPageRand = 0;
        level = 2;
        
        AxBarSharpLevel2Tween.resume();      
        AxBarSharpLevel2.alpha = 1;
 
        AxBarLightLevel1.alpha = 1;
        AxBarLightLevel1Tween.resume();
        
        FoxWithAx.alpha = 0;
        FoxWithAxAnimate.stop();
        
        AxFX.play();
        FoxWithGoldenAx.alpha = 1;
        FoxWithGoldenAx.animations.play("FoxWithGoldenAxDynamic",17,true); 
        FoxWithGoldenAxAnimate.onLoop.add(function(){
            AxFX.play();                     
        },this);
            
        game.add.tween(QuestionPanelGoldenTween).to({alpha:1},500,'Quad.easeOut',true,0);
        QuestionPanelGoldenTween.resume();
        
        
    }
    //Level2-----------------------------------------------------------------------------------
    if( AxBarSharp.x >= 100 && AxBarSharpLevel2.x < 100){
        
        AxPageEnergyTranfer();
        
    }
    if( AxBarSharpLevel2.x > 71 ){
        AxPageComplete = true;
        AxPageSuccess.play();
        AxPagePlay.stop(); 
        FinishSharpening();
    }
    
    /*
    for(let i = 0;i<5;i++){
        answer_panel[i].inputEnabled = false;
    }
    */
    if( AxPageRand == 0 ){
        
        CreateAxPageAnswerNum(1);
    }    
    if( AxPageRand == 1 ){
        
        CreateAxPageAnswerNum(6);
    }
    //console.log(answercount);
    //console.log(level);
    
    if( AxBarSharpLevel2.x <= 71 ){
        UpdateCreateAxPageNumber();
    }    
    
}
function AxPageEnergyTranfer(){
    EnergyNumAdd.alpha = 1;
    EnergyNumAdd.x = 0;
    EnergyNumAdd.y = 100;
    EnergyNumAddTween = game.add.tween(EnergyNumAdd).to({x:AxBarSharpLevel2.x-600,y:-130},300,'Quad.easeIn',true,0);
    EnergyNumAddTween.onComplete.add(function(){
        EnergyNumAdd.alpha = 0;
        //game.add.tween(AxBarSharpLevel2).to({x:'+300'},250,'Quad.easeOut',true,0);
        
        game.add.tween(AxBarSharpLevel2).to({x:'+30'},250,'Quad.easeOut',true,0);
        AddEnergyFX.play();
        AxBarEnergy.alpha = 1;
        game.add.tween(AxBarEnergy).to({alpha:0},1000,'Quad.easeOut',true,0);
    },this);
}
function FinishSharpening(){
    Sharpening = false;
    AxFX.stop();
    game.add.tween(StopSharpenText).to({y:0},500,'Quad.easeOut',true,0); 
    FoxWithAx.alpha = 0;
    FoxWithAx.animations.stop();
    FoxWithGoldenAx.alpha = 0;
    FoxWithGoldenAx.animations.stop(); 
    FoxWithAx.inputEnabled = false;
    
    if( AxBarSharp.x >= 0 ){
        FoxSitting002.alpha = 1;
        FoxSitting002.animations.play("FoxSitting002Dynamic",15,true); 
        
    }else{
        FoxSitting.alpha = 1;
        FoxSittingAnimate.play();
        
    }

    game.add.tween(QuestionPanel).to({alpha:0},500,'Quad.easeOut',true,0);
    game.add.tween(QuestionPanelGolden).to({alpha:0},500,'Quad.easeOut',true,0);
        
    QuestionPanelGoldenTween.pause();    
    //QuestionPanel.alpha = 0;
    for(let i = 0;i<5;i++){
        game.add.tween(answer_panel[i]).to({alpha:0},500,'Quad.easeOut',true,0); 
        answer_panel[i].inputEnabled = false; 
        //answer_panel[i].alpha = 0;    
    }
    NumSum.destroy();
    NumAdd1.destroy();
    NumAdd2.destroy();
    for(let i = 0;i<5;i++){
        answerNum[i].destroy();
    }    
    AxBarLightLevel2.alpha = 1;
    AxBarLightLevel2Tween.resume();
    
    BoardBG.scale.setTo(0);
    BoardBG.alpha = 1;
    game.add.tween(BoardBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,1000);
    game.add.tween(BoardSeal).to({alpha:1},500,'Quad.easeOut',true,1500);
    BoardBackBtnTween = game.add.tween(BoardBackBtn).to({alpha:1},500,'Quad.easeOut',true,2500);
    BoardBackBtnTween.onComplete.add(function(){
        BoardBackBtnHoverArea.inputEnabled = true;
        BoardBackBtnHoverArea.input.useHandCursor = true;
    },this);

}
function UpdateCreateAxPageNumber(){

    //AxPageRand = Math.floor(Math.random() * 2);
    var equation = createEquation(level);
    if( level == 1  ){
        NumAdd1.setText(equation[0]);
        NumAdd2.setText(equation[1]);        
        if( AxPageRand == 0 ){
            
            AxPageCorrectAnswer = equation[2];
            //answer_panel[equation[2]-1].inputEnabled = true;
        }else{
            AxPageCorrectAnswer = equation[2] - 5;
            //answer_panel[equation[2]-6].inputEnabled = true;    
        }
    }
    if( level == 2 ){
        NumAdd1.setText(equation[0]);
        NumAdd2.setText('?');
        NumSum.setText(equation[2]);
        
        if( AxPageRand == 0 ){
            AxPageCorrectAnswer = equation[1];
            //answer_panel[equation[1]-1].inputEnabled = true;
        }else{
            AxPageCorrectAnswer = equation[1]-5;
            //answer_panel[equation[1]-6].inputEnabled = true;    
        }
    }
}

function CreateAxPageAnswerNum(param){
    
    if( param == 0 ){
        for(let i = 0;i<5;i++){
            var style = { font: "40px Arial", fill: "#dfc985", align: "center" };
            answerNum[i] = game.add.text(centerX+100*i,centerY+100,i+1, style);
            answerNum[i].anchor.setTo(0.5);
            
        }
    }
    if( param == 1 ){
        for(let i = 0;i<5;i++){
            answerNum[i].setText(i+1);
            
        }
    }    
    if( param == 6 ){
        for(let i = 0;i<5;i++){
            answerNum[i].setText(i+6);
        }
    }    
}
















function createNumber(){
    
    var equation = createEquation(level);
    //console.log( equation );
    var style = { font: "60px Arial", fill: "#ffffff", align: "center" };      
    if( level % 2 == 1 ){
        NumSum = game.add.text(centerX+200,centerY-265,'?', style);
        NumSum.anchor.set(0.5);
    
        NumAdd1 = game.add.text(centerX+85,centerY-150,equation[0], style);
        NumAdd1.anchor.set(0.5);    

        NumAdd2 = game.add.text(centerX+315,centerY-150,equation[1], style);
        NumAdd2.anchor.set(0.5);  
    }
    if( level % 2 == 0 ){
        NumSum = game.add.text(centerX+200,centerY-265,equation[2], style);
        NumSum.anchor.set(0.5);
    
        NumAdd1 = game.add.text(centerX+85,centerY-150,equation[0], style);
        NumAdd1.anchor.set(0.5);    

        NumAdd2 = game.add.text(centerX+315,centerY-150,'?', style);
        NumAdd2.anchor.set(0.5);  
    }
    
    
    if( level == 5 ){
        createAnswerNum(11);
        if( answercount <= totalAnswerCount/2 ){
            answer_panel[equation[2]-11].inputEnabled = true;
        }else{
            answer_panel[equation[2]-16].inputEnabled = true;    
        }

    }
    if( level%2 == 1 && level < 5 ){
        createAnswerNum(1);
        if( answercount <= totalAnswerCount/2 ){
            answer_panel[equation[2]-1].inputEnabled = true;
        }else{
            answer_panel[equation[2]-6].inputEnabled = true;    
        }
    }
    if( level%2 == 0 ){
        createAnswerNum(1);
        if( answercount <= totalAnswerCount/2 ){
            answer_panel[equation[1]-1].inputEnabled = true;
        }else{
            answer_panel[equation[1]-6].inputEnabled = true;    
        }
    }
    if( level == 7 ){
        createAnswerNum(2);
        if( answercount <= totalAnswerCount/2 ){
            answer_panel[equation[2]/2 - 1].inputEnabled = true;
        }else{
            answer_panel[equation[2]-16].inputEnabled = true;    
        }

    }    

}

function updatecreateNumber(){

    var equation = createEquation(level);
    if( level == 5 ){
        NumAdd1.setText(equation[0]);
        NumAdd2.setText(equation[1]);        
        if( answercount <= totalAnswerCount/2 ){
            answer_panel[equation[2]-11].inputEnabled = true;
        }else{
            answer_panel[equation[2]-16].inputEnabled = true;    
        }

    }
    if( level%2 == 1 && level < 5 ){
        NumAdd1.setText(equation[0]);
        NumAdd2.setText(equation[1]);        
        if( answercount <= totalAnswerCount/2 ){
            answer_panel[equation[2]-1].inputEnabled = true;
        }else{
            answer_panel[equation[2]-6].inputEnabled = true;    
        }
    }
    if( level%2 == 0 ){
        NumAdd1.setText(equation[0]);
        NumSum.setText(equation[2]);
        
        if( answercount <= totalAnswerCount/2 ){
            answer_panel[equation[1]-1].inputEnabled = true;
        }else{
            answer_panel[equation[1]-6].inputEnabled = true;    
        }
    }
    if( level == 7 ){
        NumAdd1.setText(equation[0]);
        NumAdd2.setText(equation[1]);        
        
        if( answercount <= totalAnswerCount/2 ){
            answer_panel[equation[2]/2 - 1].inputEnabled = true;
        }else{
            answer_panel[equation[2]-16].inputEnabled = true;    
        }

    }     
}


function cleanPracticeButton(){


    for(let i = 0;i<5;i++){
        answer_panel[i].inputEnabled = false;
    }
    
    if( answercount == totalAnswerCount/2 && level < 5 ){
        
        createAnswerNum(6);
    }
    if( answercount == totalAnswerCount/2 && level == 5 ){
        
        createAnswerNum(16);
    } 
    if( answercount == totalAnswerCount/2 && level == 6 ){
        
        createAnswerNum(6);
    }
    //console.log(answercount);

    answercount++;
    updatecreateNumber();
}


var answerNum = new Array;
function createAnswerNum(param){
    
    if( param == 1 ){
        for(let i = 0;i<5;i++){
            var style = { font: "60px Arial", fill: "#100010", align: "center" };
            answerNum[i] = game.add.text(centerX+100*i,centerY,i+1, style);
            answerNum[i].anchor.setTo(0.5);
            
        }
    }

    if( param == 2 ){
        for(let i = 0;i<5;i++){
            var style = { font: "60px Arial", fill: "#100010", align: "center" };
            answerNum[i] = game.add.text(centerX+100*i,centerY,2*i+2, style);
            answerNum[i].anchor.setTo(0.5);
            
        }
    }
    
    
    if( param == 6 ){
        for(let i = 0;i<5;i++){
            answerNum[i].setText(i+6);
        }
    }    
    if( param == 11 ){
        for(let i = 0;i<5;i++){
            var style = { font: "60px Arial", fill: "#100010", align: "center" };
            answerNum[i] = game.add.text(centerX+100*i,centerY,i+11, style);
            answerNum[i].anchor.setTo(0.5);
        }
    }      
    if( param == 16 ){
        for(let i = 0;i<5;i++){
            answerNum[i].setText(i+16);
        }
    } 
}
