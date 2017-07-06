var AnswerPanel = new Array();


demo.LoggingPage = function(){};
demo.LoggingPage = {
    
    init: function(){
        totalAnswerCount = 100;
        level = 3;
        answercount = 1;
    },
    preload: function(){
        //Panel------------------------------------------------------------------------------------------
        game.load.atlas('Panel','javascript/math_game/assets/LoggingPage/Panel.png', 'javascript/math_game/assets/LoggingPage/Panel.json');
        //game.load.image('answer_panel','javascript/math_game/assets/practiceMode/answer_panel.png');
        
        game.load.image('LoggingPage','javascript/math_game/assets/LoggingPage/LoggingPage.jpg');
        game.load.image('LoggingPageFront','javascript/math_game/assets/LoggingPage/LoggingPageFront.png');
    
        //FoxLoggingBtn-------------------------------------------------------------------------------------------
        game.load.image('FoxLoggingBtn','javascript/math_game/assets/LoggingPage/FoxLoggingBtn.jpg');

        
        //FoxLogging--------------------------------------------------------------------------------------------
        game.load.atlas('FoxLogging', 'javascript/math_game/assets/LoggingPage/FoxLogging.png', 'javascript/math_game/assets/LoggingPage/FoxLogging.json');

        game.load.atlas('FoxLogging001', 'javascript/math_game/assets/LoggingPage/FoxLogging001.png', 'javascript/math_game/assets/LoggingPage/FoxLogging001.json');

        game.load.atlas('FoxLogging002', 'javascript/math_game/assets/LoggingPage/FoxLogging002.png', 'javascript/math_game/assets/LoggingPage/FoxLogging002.json');

        game.load.atlas('FoxLogging003', 'javascript/math_game/assets/LoggingPage/FoxLogging003.png', 'javascript/math_game/assets/LoggingPage/FoxLogging003.json');
        //FoxBounce--------------------------------------------------------------------------------------------
        game.load.atlas('FoxBounce001', 'javascript/math_game/assets/LoggingPage/FoxBounce001.png', 'javascript/math_game/assets/LoggingPage/FoxBounce001.json');

        game.load.atlas('FoxBounce002', 'javascript/math_game/assets/LoggingPage/FoxBounce002.png', 'javascript/math_game/assets/LoggingPage/FoxBounce002.json');
        
        //FoxStanding--------------------------------------------------------------------------------------------        

        game.load.atlas('FoxStanding', 'javascript/math_game/assets/LoggingPage/FoxStanding.png', 'javascript/math_game/assets/LoggingPage/FoxStanding.json');
     
        //AxBar-------------------------------------------------------------------------------------------------------------------------
        game.load.atlas('AxBar', 'javascript/math_game/assets/AxPage/AxBar.png', 'javascript/math_game/assets/AxPage/AxBar.json');
        
        //Btn---------------------------------------------------------------------------------------------------------------------------
        game.load.image('ExitLoggingBtn','javascript/math_game/assets/LoggingPage/ExitLoggingPage.jpg');
       //audio-----------------------------------------------------------------------------------------------------------------------   
        game.load.audio('rightFX', 'javascript/math_game/assets/audio/rightFX.mp3');      
        
    },
    create: function(){
        console.log('Level2');
        console.log(level);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.stage.backgroundColor = "#100010";
        game.add.sprite(0,100,'LoggingPage')
        
        //FoxBounceAnimation------------------------------------------------------------------------------------------------------
        FoxBounce001 = game.add.sprite(-10,100,'FoxBounce001');
        FoxBounce001Animation = FoxBounce001.animations.add("FoxBounce001Dynamic",Phaser.Animation.generateFrameNames('FoxBounce_',100,128,'.png',5),10,true);
        FoxBounce001.alpha = 0;
        
        FoxBounce002 = game.add.sprite(-10,100,'FoxBounce002');
        FoxBounce002Animation = FoxBounce002.animations.add("FoxBounce002Dynamic",Phaser.Animation.generateFrameNames('FoxBounce_',120,128,'.png',5),10,true);
        FoxBounce002.alpha = 0;
        
         
        FoxBounce001Animation.onComplete.add(function () {	
            FoxBounce001.alpha = 0;
            FoxBounce002.alpha = 1;
            FoxBounce002.animations.play("FoxBounce002Dynamic",15,false);
        }, this);   
        FoxBounce002Animation.onComplete.add(function () {	
            FoxBounce002.alpha = 0;
            FoxBounce001.alpha = 1;
            FoxBounce001.animations.play("FoxBounce001Dynamic",15,false);
        }, this);   
        //FoxLoggingAnimation------------------------------------------------------------------------------------------------------
        /*
        FoxLogging = game.add.sprite(420,420,'FoxLogging');
        FoxLogging.animations.add("FoxLoggingDynamic",Phaser.Animation.generateFrameNames('foxLogging004_',0,18,'.png',5),10,true);
        FoxLogging.animations.play("FoxLoggingDynamic",10,true);     
        */
        FoxLogging001 = game.add.sprite(-10,100,'FoxLogging001');
        FoxLogging001Animation = FoxLogging001.animations.add("FoxLogging001Dynamic",Phaser.Animation.generateFrameNames('FoxLogging_',0,28,'.png',5),10,true);
        FoxLogging001.alpha = 0;
        
        FoxLogging002 = game.add.sprite(-10,100,'FoxLogging002');
        FoxLogging002Animation = FoxLogging002.animations.add("FoxLogging002Dynamic",Phaser.Animation.generateFrameNames('FoxLogging_',29,45,'.png',5),10,true);
        FoxLogging002.alpha = 0;
        
        FoxLogging003 = game.add.sprite(-10,100,'FoxLogging003');
        FoxLogging003Animation = FoxLogging003.animations.add("FoxLogging003Dynamic",Phaser.Animation.generateFrameNames('FoxLogging_',46,71,'.png',5),10,true);
        FoxLogging003.alpha = 0;

        
        //FoxLoggingBtn------------------------------------------------------------------------------------------------------
        FoxLoggingBtn = game.add.sprite(600,470,'FoxLoggingBtn');
        FoxLoggingBtn.alpha = 0;
        FoxLoggingBtn.events.onInputDown.add(StartLogging, this);
        FoxLoggingBtn.events.onInputOver.add(StartLoggingOver, this);
        FoxLoggingBtn.events.onInputOut.add(StartLoggingOut, this);
        FoxLoggingBtn.inputEnabled = true;
        FoxLoggingBtn.input.useHandCursor = true; 
        //FoxStopLoggingBtn---------------------------------------------------------------------------------------------------
        FoxStopLoggingBtn = game.add.sprite(600,470,'FoxLoggingBtn');
        FoxStopLoggingBtn.alpha = 0;
        FoxStopLoggingBtn.events.onInputDown.add(StopLogging, this);
        FoxStopLoggingBtn.events.onInputOver.add(StopLoggingOver, this);
        FoxStopLoggingBtn.events.onInputOut.add(StopLoggingOut, this);
        FoxStopLoggingBtn.inputEnabled = false;

        
        FoxLogging001Animation.onComplete.add(function () {	
            FoxLogging001.alpha = 0;
            FoxLogging002.alpha = 1;
            FoxLogging002.animations.play("FoxLogging002Dynamic",30,false);
        }, this);
        
        FoxLogging002Animation.onComplete.add(function () {	
            FoxLogging002.alpha = 0;
            FoxLogging003.alpha = 1;
            FoxLogging003.animations.play("FoxLogging003Dynamic",30,false);
            if( AxBarSharp.x > -243 ){
                game.add.tween(AxBarSharp).to({x:'-20'},500,'Quad.easeOut',true,0); 
            }
        }, this);
        
        FoxLogging003Animation.onComplete.add(function () {	
            FoxLogging003.alpha = 0;
            if( AxBarSharp.x <= -243 ){
                FoxBounce001.alpha = 1;
                FoxBounce001.animations.play("FoxBounce001Dynamic",15,false);        
            }
            if( AxBarSharp.x > -243 ){
                FoxLogging001.alpha = 1;
                FoxLogging001.animations.play("FoxLogging001Dynamic",30,false);

            }
        }, this);        
        
        //FoxStandingAnimation------------------------------------------------------------------------------------------------------
        FoxStanding = game.add.sprite(-10,100,'FoxStanding');
        FoxStandingAnimation = FoxStanding.animations.add("FoxStandingDynamic",Phaser.Animation.generateFrameNames('FoxStanding_',78,99,'.png',5),10,true);
        FoxStanding.animations.play("FoxStandingDynamic",15,true);
        /*
        FoxStanding.events.onInputDown.add(StartLogging, this);
        FoxStanding.events.onInputOver.add(StartLoggingOver, this);
        FoxStanding.events.onInputOut.add(StartLoggingOut, this);
        FoxStanding.inputEnabled = true;
        FoxStanding.input.useHandCursor = true; 
        */
        
        game.add.sprite(0,100,'LoggingPageFront');
       
      
        //Panel------------------------------------------------------------------------------------------------------
        QuestionPanel = game.add.sprite(0,100,'Panel',"QuestionPanel.png");
        QuestionPanel.alpha = 0;
        //QuestionPanel.anchor.setTo(0.5);
        //QuestionPanel.scale.setTo(0.5);
      
        for(let i = 0;i<5;i++){
            AnswerPanel[i] = game.add.sprite(centerX+90*i+280,centerY+240,'Panel',"AnswerPanel.png");
            AnswerPanel[i].anchor.setTo(0.5);
            AnswerPanel[i].alpha = 0;
      
          
            AnswerPanel[i].events.onInputDown.add(CleanLoggingPageButton, this);
            AnswerPanel[i].inputEnabled = false;
        }
        //PanelGlow-------------------------------------------------------------------------------------------------
      
        PanelGlowNumSum = game.add.sprite(0,100,'Panel','PanelGlowSum.png');
        PanelGlowNumSum.alpha = 0;
      
        PanelGlowNumAdd = game.add.sprite(0,100,'Panel','PanelGlowAdd.png');
        
        PanelGlowNumAdd.alpha = 0;        
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
      
        //ExitLoggingBtn-----------------------------------------------------------------------------------------------------
        ExitLoggingBtn = game.add.sprite(150,420,'ExitLoggingBtn');
        ExitLoggingBtn.alpha = 0;
        ExitLoggingBtn.events.onInputDown.add(ExitLoggingPage, this);
        ExitLoggingBtn.inputEnabled = true;
        ExitLoggingBtn.input.useHandCursor = true; 
      
        //sound----------------------------------------------------------------------------------------------------------------
      
        rightFX = game.add.audio('rightFX');        
    },
    update: function(){

    } 
}
function ExitLoggingPage(){
    AxBarX = AxBarSharp.x;
    game.state.start('LevelMap');
}

function StartLogging(){
    FoxStanding.alpha = 0;
    FoxStanding.animations.stop();
    if( AxBarSharp.x <= -243 ){
        FoxBounce001.alpha = 1;
        FoxBounce001.animations.play("FoxBounce001Dynamic",15,false);        
    }
    if( AxBarSharp.x > -243 ){
        FoxLogging001.alpha = 1;
        FoxLogging001.animations.play("FoxLogging001Dynamic",30,false);

    }
    
    FoxLoggingBtn.inputEnabled = false;
    
    FoxStopLoggingBtn.inputEnabled = true;
    FoxStopLoggingBtn.input.useHandCursor = true;  
    
    game.add.tween(QuestionPanel).to({alpha:1},300,'Linear',true,0);
        
    for(let i = 0;i<5;i++){
        game.add.tween(AnswerPanel[i]).to({alpha:1},300,'Linear',true,0);
    }
    AxBarBG.alpha = 1;
    AxBarSharp.alpha = 1;
    AxBarSharpTween.resume();
    AxBar.alpha = 1;
    
    CreateLoggingPageNumber();
    ExitLoggingBtn.inputEnabled = false;
}
function StartLoggingOver(){}
function StartLoggingOut(){}

function StopLogging(){
    FoxStanding.alpha = 1;
    FoxStanding.animations.play("FoxStandingDynamic",15,true);
    
    FoxLogging001.alpha = 0;
    FoxLogging001.animations.stop();
    FoxLogging002.alpha = 0;
    FoxLogging002.animations.stop();
    FoxLogging003.alpha = 0;
    FoxLogging003.animations.stop();
    
    FoxBounce001.alpha = 0;
    FoxBounce001.animations.stop();
    FoxBounce002.alpha = 0;
    FoxBounce002.animations.stop();
    
    FoxLoggingBtn.inputEnabled = true;
    FoxLoggingBtn.input.useHandCursor = true;
    FoxStopLoggingBtn.inputEnabled = false;

    game.add.tween(QuestionPanel).to({alpha:0},300,'Linear',true,0); 
    for(let i = 0;i<5;i++){
        game.add.tween(AnswerPanel[i]).to({alpha:0},300,'Linear',true,0);
    }
    NumSum.destroy();
    NumAdd1.destroy();
    NumAdd2.destroy();
    for(let i = 0;i<5;i++){
        answerNum[i].destroy();
    }    
    //AxBarBG------------------------------------------------------------------
    AxBarBG.alpha = 0;
    AxBarSharpTween.pause();
    AxBarSharp.alpha = 0;
    
    AxBar.alpha = 0;
    AxBarLight.alpha = 0;
    AxBarFullLightTween.pause();
    AxBarFullLight.alpha = 0;
        
    ExitLoggingBtn.inputEnabled = true;
    ExitLoggingBtn.input.useHandCursor = true;     
    
}
function StopLoggingOver(){}
function StopLoggingOut(){}

function CreateLoggingPageNumber(){
    AxPageRand = 0;
    var equation = createEquation(level);
    console.log(equation);
    var style = { font: "60px Arial", fill: "#3a311f", align: "center" };      
    if( level == 3 ){
        NumSum = game.add.text(centerX+462,centerY-178,'?', style);
        NumSum.anchor.set(0.5);
    
        NumAdd1 = game.add.text(centerX+462-106,centerY-71,equation[0], style);
        NumAdd1.anchor.set(0.5);    

        NumAdd2 = game.add.text(centerX+462+106,centerY-71,equation[1], style);
        NumAdd2.anchor.set(0.5);  
    }
    if( level == 4 ){
        NumSum = game.add.text(centerX+462,centerY-178,equation[2], style);
        NumSum.anchor.set(0.5);
    
        NumAdd1 = game.add.text(centerX+462-106,centerY-71,equation[0], style);
        NumAdd1.anchor.set(0.5);    

        NumAdd2 = game.add.text(centerX+462+106,centerY-71,'?', style);
        NumAdd2.anchor.set(0.5);  
    }

    if( level == 3 ){
        CreateLoggingPageAnswerNum(0);
        //if( AxPageRand == 0 ){
            AnswerPanel[equation[2]-1].inputEnabled = true;
        //}
        /*
        else{
            answer_panel[equation[2]-6].inputEnabled = true;    
        }
        */
    }
    if( level == 4 ){
        CreateLoggingPageAnswerNum(0);
        if( AxPageRand == 0 ){
            AnswerPanel[equation[1]-1].inputEnabled = true;
        }
        /*
        else{
            answer_panel[equation[1]-6].inputEnabled = true;    
        }
        */
    }
}

function CleanLoggingPageButton(){
    PanelGlowNumSum.alpha = 1;
    game.add.tween(PanelGlowNumSum).to({alpha:0},500,'Quad.easeOut',true,0);
    rightFX.play();
    
    for(let i = 0;i<5;i++){
        AnswerPanel[i].inputEnabled = false;
    }
    if( AxPageRand == 0 ){
        
        CreateAxPageAnswerNum(1);
    }    
    if( AxPageRand == 1 ){
        
        CreateAxPageAnswerNum(6);
    }
    //console.log(answercount);

    answercount++;
    UpdateCreateLoggingPageNumber();
}

function UpdateCreateLoggingPageNumber(){

    //AxPageRand = Math.floor(Math.random() * 2);
    var equation = createEquation(level);
    console.log(equation);
    if( level == 3  ){
        NumAdd1.setText(equation[0]);
        NumAdd2.setText(equation[1]);        
        //if( AxPageRand == 0 ){
            
            AnswerPanel[equation[2]-1].inputEnabled = true;
        /*
        }else{
            AnswerPanel[equation[2]-6].inputEnabled = true;    
        }
        */
    }
    if( level == 4 ){
        NumAdd1.setText(equation[0]);
        NumAdd2.setText('?');
        NumSum.setText(equation[2]);
        
        //if( AxPageRand == 0 ){
            AnswerPanel[equation[1]-1].inputEnabled = true;
        /*
        }else{
            AnswerPanel[equation[1]-6].inputEnabled = true;    
        }
        */
    }
}

function CreateLoggingPageAnswerNum(param){
    
    if( param == 0 ){
        for(let i = 0;i<5;i++){
            var style = { font: "50px Arial", fill: "#fef1ba", align: "center" };
            answerNum[i] = game.add.text(centerX+90*i+280,centerY+240,i+1, style);
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

