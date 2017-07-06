var answer_panel = new Array();
var AxBarX = -243;

demo.AxPage = function(){};
demo.AxPage = {
    
    
  init: function(){
      AxPageRand = 0;
      answercount = 1;
      level = 1;
  },
  preload: function(){
      
      game.load.image('AxPageBG','javascript/math_game/assets/AxPage/AxPage.jpg');
      //Panel-----------------------------------------------------------------------------------------------------------------------
      game.load.atlas('Panel', 'javascript/math_game/assets/AxPage/Panel.png', 'javascript/math_game/assets/AxPage/Panel.json');
      //Btn------------------------------------------------------------------------------------------------------------------------
        
      game.load.image('ExitBtn','javascript/math_game/assets/AxPage/ExitBtn.jpg');
      
      //FoxWithAx--------------------------------------------------------------------------------------------------------------------------
      game.load.atlas('FoxWithAx001', 'javascript/math_game/assets/AxPage/FoxWithAx001.png', 'javascript/math_game/assets/AxPage/FoxWithAx001.json');
      game.load.atlas('FoxSitting002', 'javascript/math_game/assets/AxPage/FoxSitting002.png', 'javascript/math_game/assets/AxPage/FoxSitting002.json');

      game.load.atlas('FoxWithAx', 'javascript/math_game/assets/AxPage/FoxWithAx.png', 'javascript/math_game/assets/AxPage/FoxWithAx.json');
      game.load.atlas('FoxWithAx003', 'javascript/math_game/assets/AxPage/FoxWithAx003.png', 'javascript/math_game/assets/AxPage/FoxWithAx003.json');

    
      //AxBar-------------------------------------------------------------------------------------------------------------------------------
      game.load.atlas('AxBar', 'javascript/math_game/assets/AxPage/AxBar.png', 'javascript/math_game/assets/AxPage/AxBar.json');
      
      //Text-------------------------------------------------------------------------------------------------------------------------------
      game.load.atlas('AxPageText', 'javascript/math_game/assets/AxPage/AxPageText.png', 'javascript/math_game/assets/AxPage/AxPageText.json');
      
      //---------------------------------------------------------------------------------------------------------------------------------
    
      game.load.atlas('ArrowSheet', 'javascript/math_game/assets/HomePage/ArrowSheet.png', 'javascript/math_game/assets/HomePage/ArrowSheet.json');
      
        //audio-----------------------------------------------------------------------------------------------------------------------   
        game.load.audio('rightFX', 'javascript/math_game/assets/audio/rightFX.mp3');      

  },
  create: function(){
      
        console.log('Level1'); 
        console.log(level); 
        
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
      game.stage.backgroundColor = "#000000";
      game.add.sprite(0,100,'AxPageBG');
     
      //AxBar------------------------------------------------------------------------------------------------------
      AxBarBG = game.add.sprite(100,100,'AxBar','AxBarBG.png');
      AxBarBG.alpha = 0;
      AxBarSharp = game.add.sprite(AxBarX,100,'AxBar','AxBarSharp.png');
      AxBarSharpTween = game.add.tween(AxBarSharp).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      AxBarSharpTween.pause();      
      AxBarSharp.alpha = 0;
      
      AxBarmask = game.add.graphics();
      AxBarmask.beginFill(0xffffff);
      AxBarmask.drawRect(250,170,350,50);
      AxBarSharp.mask = AxBarmask;
     
      AxBar = game.add.sprite(100,100,'AxBar','AxBar.png');
      AxBar.alpha = 0;
      AxBarLight = game.add.sprite(100,100,'AxBar','AxBarLight.png');
      AxBarLight.alpha = 0;
      
        
      AxBarFullLight = game.add.sprite(100,100,'AxBar','AxBarLight.png');
      AxBarFullLightTween = game.add.tween(AxBarFullLight).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      AxBarFullLightTween.pause();  
      AxBarFullLight.alpha = 0;      
      
      //FoxSitting------------------------------------------------------------------------------------------------------
      FoxSitting = game.add.sprite(300,400,'FoxWithAx001');
      FoxSittingAnimate = FoxSitting.animations.add("FoxSittingDynamic",Phaser.Animation.generateFrameNames('FoxWithAx001_',10,17,'.png',5),10,true);
      FoxSitting.animations.play("FoxSittingDynamic",5,true); 
      FoxSitting.events.onInputDown.add(StartSharpening, this);
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
      for(let i = 0;i<5;i++){
          answer_panel[i] = game.add.sprite(centerX+100*i,centerY+98,'Panel','AnswerPanel.png');
          answer_panel[i].anchor.setTo(0.5);
          
          answer_panel[i].alpha = 0;
          
          answer_panel[i].events.onInputDown.add(CleanAxPageButton, this);
          answer_panel[i].inputEnabled = false;
      }
      //PanelGlow------------------------------------------------------------------------------------------------------------------
      PanelGlowNumSum = game.add.sprite(0,100,'Panel','PanelGlowNumSum.png');
      PanelGlowNumSum.alpha = 0;
      
      PanelGlowNumAdd = game.add.sprite(0,100,'Panel','PanelGlowNumAdd.png');
        
      PanelGlowNumAdd.alpha = 0;
      //ArrowSheet------------------------------------------------------------------------------------------------------------------
        
      ArrowSheet = game.add.sprite(0,100,'ArrowSheet');
      ArrowSheet.animations.add("ArrowSheetDynamic",Phaser.Animation.generateFrameNames('ArrowSheet_',0,8,'.png',5),10,true);
      ArrowSheet.alpha = 0;
      
      //ExitBtn---------------------------------------------------------------------------------------------------
      ExitBtn = game.add.sprite(1150,550,'ExitBtn');
      ExitBtn.alpha = 0;      
      ExitBtn.events.onInputDown.add(ExitAxPage, this);
      ExitBtn.inputEnabled = true;
      ExitBtn.input.useHandCursor = true; 
      
        
      //sound----------------------------------------------------------------------------------------------------------------
      rightFX = game.add.audio('rightFX');      
      
  },
  update: function(){} 
}
function ExitAxPage(){
    AxBarX = AxBarSharp.x;
    game.state.start('LevelMap');
}
function FoxSittingOver(){
    ArrowSheet.x = -330;
    ArrowSheet.y = -50;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;    
    //game.add.tween(StartSharpenText).to({y:150},500,'Quad.easeOut',true,0); 
}
function FoxSittingOut(){
     
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;      
    //game.add.tween(StartSharpenText).to({y:0},500,'Quad.easeOut',true,0); 
}
function FoxWithAxOver(){
    ArrowSheet.x = -330;
    ArrowSheet.y = -50;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;     
    //game.add.tween(StopSharpenText).to({y:150},500,'Quad.easeOut',true,0); 
}
function FoxWithAxOut(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;      
    //game.add.tween(StopSharpenText).to({y:0},500,'Quad.easeOut',true,0); 
}

function StartSharpening(){
    //game.add.tween(StartSharpenText).to({y:0},500,'Quad.easeOut',true,0); 
    FoxSitting.alpha = 0;
    FoxSitting.animations.stop();
    
    FoxSitting002.alpha = 0;
    FoxSitting002.animations.stop();    
    FoxSitting.inputEnabled = false;
    if( AxBarSharp.x > 100 ){
        FoxWithGoldenAx.alpha = 1;
        FoxWithGoldenAx.animations.play("FoxWithGoldenAxDynamic",15,true); 
        AxBarFullLight.alpha = 1;
        AxBarFullLightTween.resume();       
    }
    if( AxBarSharp.x < 100 ){
        FoxWithAx.alpha = 1;
        FoxWithAx.animations.play("FoxWithAxDynamic",15,true); 
        
    }
    FoxWithAx.inputEnabled = true;
    FoxWithAx.input.useHandCursor = true;
    ExitBtn.inputEnabled = false;
    
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

    FoxSitting.inputEnabled = true;
    FoxSitting.input.useHandCursor = true;
      
    ExitBtn.inputEnabled = true;
    ExitBtn.input.useHandCursor = true;     
    
    AxBarBG.alpha = 0;
    AxBarSharpTween.pause();
    AxBarSharp.alpha = 0;
    
    AxBar.alpha = 0;
    AxBarLight.alpha = 0;
    AxBarFullLightTween.pause();
    AxBarFullLight.alpha = 0;
    game.add.tween(QuestionPanel).to({alpha:0},500,'Quad.easeOut',true,0); 
    //QuestionPanel.alpha = 0;
    for(let i = 0;i<5;i++){
        game.add.tween(answer_panel[i]).to({alpha:0},500,'Quad.easeOut',true,0); 
        //answer_panel[i].alpha = 0;    
    }
    NumSum.destroy();
    NumAdd1.destroy();
    NumAdd2.destroy();
    for(let i = 0;i<5;i++){
        answerNum[i].destroy();
    }
        
}
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
            answer_panel[equation[2]-1].inputEnabled = true;
        }
        /*
        else{
            answer_panel[equation[2]-6].inputEnabled = true;    
        }
        */
    }
    if( level == 2 ){
        CreateAxPageAnswerNum(0);
        if( AxPageRand == 0 ){
            answer_panel[equation[1]-1].inputEnabled = true;
        }
        /*
        else{
            answer_panel[equation[1]-6].inputEnabled = true;    
        }
        */
    }
}

function CleanAxPageButton(){
    rightFX.play();
    if( level == 1 ){
        PanelGlowNumSum.alpha = 1;
        game.add.tween(PanelGlowNumSum).to({alpha:0},500,'Quad.easeOut',true,0);
        
    }
    if( level == 2 ){
        PanelGlowNumAdd.alpha = 1;
        game.add.tween(PanelGlowNumAdd).to({alpha:0},500,'Quad.easeOut',true,0);
        
    }
        
    AxBarLight.alpha = 1;
    game.add.tween(AxBarLight).to({alpha:0},1000,'Quad.easeOut',true,0);
    if( AxBarSharp.x >= -50 ){
        level = 2;
    }
    if( AxBarSharp.x < 100 ){
        AxBarSharpPlusTween = game.add.tween(AxBarSharp).to({x:'+50'},250,'Quad.easeOut',true,0);
        AxBarSharpPlusTween.onComplete.add(function () {	
    
            if( AxBarSharp.x >= 100 ){
        
                console.log('Light');
                AxBarFullLight.alpha = 1;
                AxBarFullLightTween.resume();
                FoxWithAx.alpha = 0;
                FoxWithAx.animations.play("FoxWithAxDynamic",15,true); 
                FoxWithGoldenAx.alpha = 1;
                FoxWithGoldenAx.animations.play("FoxWithGoldenAxDynamic",17,true); 
            }    
        }, this);
    }
    
    //CleanAnswerPanel------------------------------------------------------------------------------
    AxPageRand = Math.floor(Math.random() * 2);
    for(let i = 0;i<5;i++){
        answer_panel[i].inputEnabled = false;
    }
    if( AxPageRand == 0 ){
        
        CreateAxPageAnswerNum(1);
    }    
    if( AxPageRand == 1 ){
        
        CreateAxPageAnswerNum(6);
    }
    //console.log(answercount);

    answercount++;
    UpdateCreateAxPageNumber();
}

function UpdateCreateAxPageNumber(){

    //AxPageRand = Math.floor(Math.random() * 2);
    var equation = createEquation(level);
    if( level == 1  ){
        NumAdd1.setText(equation[0]);
        NumAdd2.setText(equation[1]);        
        if( AxPageRand == 0 ){
            answer_panel[equation[2]-1].inputEnabled = true;
        }else{
            answer_panel[equation[2]-6].inputEnabled = true;    
        }
    }
    if( level == 2 ){
        NumAdd1.setText(equation[0]);
        NumAdd2.setText('?');
        NumSum.setText(equation[2]);
        
        if( AxPageRand == 0 ){
            answer_panel[equation[1]-1].inputEnabled = true;
        }else{
            answer_panel[equation[1]-6].inputEnabled = true;    
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
    console.log( equation );
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

    /* 
    if( answercount == totalAnswerCount ){
        LevelOneComplete = true;
        game.state.start('LevelMap',true,false);
    } 
    */
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
    console.log(answercount);

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
