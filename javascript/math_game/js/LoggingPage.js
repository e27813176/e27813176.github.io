var AnswerPanel = new Array();
var TreeBloodBarX = 0;
var LoggingPageComplete = false;
demo.LoggingPage = function(){};
demo.LoggingPage = {
    
    init: function(){
        totalAnswerCount = 100;
        level = 3;
        answercount = 1;
    },
    preload: function(){

    },
    create: function(){
        console.log('Level2');
        console.log(level);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.stage.backgroundColor = "#100010";
        game.add.sprite(0,100,'LoggingPage')
        //sound----------------------------------------------------------------------------------------------------------------
      
        rightFX = game.add.audio('rightFX');
        Logging = game.add.audio('Logging');
        LoggingBounce = game.add.audio('LoggingBounce');
                
        //FoxBounceAnimation------------------------------------------------------------------------------------------------------
        FoxBounce001 = game.add.sprite(-10,100,'FoxBounce001');
        FoxBounce001Animation = FoxBounce001.animations.add("FoxBounce001Dynamic",Phaser.Animation.generateFrameNames('FoxBounce_',100,128,'.png',5),10,true);
        FoxBounce001.alpha = 0;
        
        FoxBounce002 = game.add.sprite(-10,100,'FoxBounce002');
        FoxBounce002Animation = FoxBounce002.animations.add("FoxBounce002Dynamic",Phaser.Animation.generateFrameNames('FoxBounce_',120,128,'.png',5),10,true);
        FoxBounce002.alpha = 0;
        
         
        FoxBounce001Animation.onComplete.add(function () {
            //LoggingBounce.play();
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
            Logging.play();
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
            AnswerPanel[i] = game.add.sprite(centerX+90*i+280,centerY+140,'Panel',"AnswerPanel.png");
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
        //Bar---------------------------------------------------------------------------------------------------------------
        AxBarSharp = game.add.sprite(AxBarX,100,'AxBar','AxBarSharp.png');
        AxBarSharpTween = game.add.tween(AxBarSharp).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
        AxBarSharpTween.pause();      
        AxBarSharp.alpha = 0;

        /*
        AxBarSharpLevel2 = game.add.sprite(AxBarXLevel2,100,'AxBar','AxBarSharpLevel2.png');
        AxBarSharpLevel2Tween = game.add.tween(AxBarSharpLevel2).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
        AxBarSharpLevel2Tween.pause();      
        AxBarSharpLevel2.alpha = 0;
        */
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
      
        //TreeBloodBar------------------------------------------------------------------------------------------------------
        TreeBloodBarBG = game.add.sprite(0,100,'TreeBloodBar','TreeBloodBarBG.png');
        TreeBloodBarBG.alpha = 0;
        
        TreeBloodBar = game.add.sprite(TreeBloodBarX,100,'TreeBloodBar','TreeBloodBar.png');
        TreeBloodBarTween = game.add.tween(TreeBloodBar).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
        TreeBloodBarTween.pause();      
        TreeBloodBar.alpha = 0;
        
        TreeBloodBarmask = game.add.graphics();
        TreeBloodBarmask.beginFill(0xffffff);
        TreeBloodBarmask.drawRect(827,800,360,50);
        TreeBloodBar.mask = TreeBloodBarmask;        
        
        TreeBloodBarTop = game.add.sprite(0,100,'TreeBloodBar','TreeBloodBarTop.png');
        TreeBloodBarTop.alpha = 0;
        //ExitLoggingBtn-----------------------------------------------------------------------------------------------------
        ExitLoggingBtn = game.add.sprite(150,420,'ExitLoggingBtn');
        ExitLoggingBtn.alpha = 0;
        ExitLoggingBtn.events.onInputDown.add(ExitLoggingPage, this);
        ExitLoggingBtn.inputEnabled = true;
        ExitLoggingBtn.input.useHandCursor = true; 
        //ScoreBoard------------------------------------------------------------------------------------------------------------
        ScoreBoardBG = game.add.sprite(800,500,'ScoreBoard','ScoreBoardBG.png');
        ScoreBoardBG.anchor.set(0.5);
        ScoreBoardBG.alpha = 0;    
        
        ScoreBoardBtn = game.add.sprite(0,100,'ScoreBoard','ScoreBoardBtn.png');
        ScoreBoardBtn.alpha = 0; 

        ScoreBoardHomeBtnHover = game.add.sprite(0,100,'ScoreBoard','ScoreBoardHomeBtnHover.png');
        ScoreBoardHomeBtnHover.alpha = 0;
        
        ScoreBoardContinueBtnHover = game.add.sprite(0,100,'ScoreBoard','ScoreBoardContinueBtnHover.png');
        ScoreBoardContinueBtnHover.alpha = 0;        

        ScoreBoardHomeBtn = game.add.sprite(885,563,'ScoreBoard','ScoreBoardBtnHover.png');        
        ScoreBoardHomeBtn.alpha = 0;
        ScoreBoardHomeBtn.events.onInputDown.add(ScoreBoardHomeBtnDown, this);
        ScoreBoardHomeBtn.events.onInputOver.add(ScoreBoardHomeBtnOver, this);
        ScoreBoardHomeBtn.events.onInputOut.add(ScoreBoardHomeBtnOut, this);
        
        ScoreBoardContinueBtn = game.add.sprite(783,563,'ScoreBoard','ScoreBoardBtnHover.png');        
        ScoreBoardContinueBtn.alpha = 0;
        ScoreBoardContinueBtn.events.onInputDown.add(ScoreBoardContinueBtnDown, this);
        ScoreBoardContinueBtn.events.onInputOver.add(ScoreBoardContinueBtnOver, this);
        ScoreBoardContinueBtn.events.onInputOut.add(ScoreBoardContinueBtnOut, this);
        
        ScoreBoardSeal = game.add.sprite(800,500,'ScoreBoard','ScoreBoardSeal.png');
        ScoreBoardSeal.anchor.set(0.5);
        ScoreBoardSeal.alpha = 0; 

        //BlackBGOpening-----------------------------------------------------------------------------------------
        BlackBGOpening = game.add.sprite(0,100,'BlackBG');
        BlackBGOpening.alpha = 1;
        game.add.tween(BlackBGOpening).to({alpha:0},500,'Linear',true,0);
        
        //BlackBGClosing-----------------------------------------------------------------------------------------
        BlackBGClosing = game.add.sprite(0,100,'BlackBG');
        BlackBGClosing.alpha = 0;
        
        
    },
    update: function(){

    } 
}
function ExitLoggingPage(){
    AxBarX = AxBarSharp.x;
    TreeBloodBarX = TreeBloodBar.x;
    LoggingPageClosingTween001 = game.add.tween(BlackBGClosing).to({alpha:1},500,'Linear',true,0);        

    LoggingPageClosingTween001.onComplete.add(function () {	
        game.state.start('LevelMap');
    }, this);      
    
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
    
    game.add.tween(TreeBloodBarTop).to({alpha:1},300,'Linear',true,0);
    game.add.tween(TreeBloodBar).to({alpha:1},300,'Linear',true,0);
    game.add.tween(TreeBloodBarBG).to({alpha:1},300,'Linear',true,0);
    TreeBloodBarTween.resume();      
        
    
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
    game.add.tween(TreeBloodBarTop).to({alpha:0},300,'Linear',true,0);
    game.add.tween(TreeBloodBar).to({alpha:0},300,'Linear',true,0);
    game.add.tween(TreeBloodBarBG).to({alpha:0},300,'Linear',true,0);    
    TreeBloodBarTween.pause();      

    NumSum.destroy();
    NumAdd1.destroy();
    NumAdd2.destroy();
    for(let i = 0;i<5;i++){
        answerNum[i].destroy();
    }    
    
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
function FinishLogging(){
    LoggingPageComplete = true;
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
    
    FoxStopLoggingBtn.inputEnabled = false;

    game.add.tween(QuestionPanel).to({alpha:0},300,'Linear',true,0); 
    for(let i = 0;i<5;i++){
        game.add.tween(AnswerPanel[i]).to({alpha:0},300,'Linear',true,0);
    }
    game.add.tween(TreeBloodBarTop).to({alpha:0},300,'Linear',true,0);
    game.add.tween(TreeBloodBar).to({alpha:0},300,'Linear',true,0);
    game.add.tween(TreeBloodBarBG).to({alpha:0},300,'Linear',true,0);    
    TreeBloodBarTween.pause();      

    NumSum.destroy();
    NumAdd1.destroy();
    NumAdd2.destroy();
    for(let i = 0;i<5;i++){
        answerNum[i].destroy();
    }    
    
    AxBarBG.alpha = 0;
    AxBarSharpTween.pause();
    AxBarSharp.alpha = 0;
    
    AxBar.alpha = 0;
    AxBarLight.alpha = 0;
    AxBarFullLightTween.pause();
    AxBarFullLight.alpha = 0;   
    
    ScoreBoardBG.scale.set(0);
    ScoreBoardBG.alpha = 1;
    game.add.tween(ScoreBoardBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,1000);
    
    ScoreBoardSeal.scale.set(20);
    game.add.tween(ScoreBoardSeal).to({alpha:1},1000,'Quad.easeIn',true,1500);        
    game.add.tween(ScoreBoardSeal.scale).to({x:1,y:1},1000,'Quad.easeIn',true,1500);    
    
    ScoreBoardBtnTween = game.add.tween(ScoreBoardBtn).to({alpha:1},500,'Linear',true,3000);        
    ScoreBoardBtnTween.onComplete.add(function () {	
    
        ScoreBoardHomeBtn.inputEnabled = true;
        ScoreBoardContinueBtn.inputEnabled = true;
        
    }, this);      
}

function ScoreBoardHomeBtnDown(){
        
    ScoreBoardHomeBtn.inputEnabled = false;
    ScoreBoardContinueBtn.inputEnabled = false;    
    LoggingPageClosingTween002 = game.add.tween(BlackBGClosing).to({alpha:1},1000,'Linear',true,0);        

    
    LoggingPageClosingTween002.onComplete.add(function () {	
        game.state.start('LevelMap',true,true);
    }, this);      
    
}
function ScoreBoardHomeBtnOver(){
    ScoreBoardHomeBtnHover.alpha = 1;
    ScoreBoardHomeBtnHoverTween = game.add.tween(ScoreBoardHomeBtnHover).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
}
function ScoreBoardHomeBtnOut(){
    ScoreBoardHomeBtnHover.alpha = 0;
    ScoreBoardHomeBtnHoverTween.pause();
}
function ScoreBoardContinueBtnDown(){
    game.add.tween(ScoreBoardBG).to({alpha:0},500,'Quad.easeIn',true);
    game.add.tween(ScoreBoardBtn).to({alpha:0},500,'Quad.easeIn',true);
    game.add.tween(ScoreBoardSeal).to({alpha:0},500,'Quad.easeIn',true);
    
    ScoreBoardHomeBtn.inputEnabled = false;
    ScoreBoardContinueBtn.inputEnabled = false;
    TreeBloodBar.x = 0;
    StopLogging();
    
}
function ScoreBoardContinueBtnOver(){
    ScoreBoardContinueBtnHover.alpha = 1;
    ScoreBoardContinueBtnHoverTween = game.add.tween(ScoreBoardContinueBtnHover).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);    
}
function ScoreBoardContinueBtnOut(){
    ScoreBoardContinueBtnHover.alpha = 0;
    ScoreBoardContinueBtnHoverTween.pause();
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
    if( AxBarSharp.x <= -243 && TreeBloodBar.x > -364 ){
        game.add.tween(TreeBloodBar).to({x:'-1'},300,'Linear',true,0);
        //test
        //game.add.tween(TreeBloodBar).to({x:'-200'},300,'Linear',true,0);
    }
    if( AxBarSharp.x > -243 ){
        //TreeBloodBarMinusTween = game.add.tween(TreeBloodBar).to({x:'-20'},300,'Linear',true,0);
        TreeBloodBarMinusTween = game.add.tween(TreeBloodBar).to({x:'-200'},300,'Linear',true,0);
        TreeBloodBarMinusTween.onComplete.add(function () {	
            if( TreeBloodBar.x <= -362 ){
                
                FinishLogging();
            }
        }, this);
    
    }
    

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
            answerNum[i] = game.add.text(centerX+90*i+280,centerY+140,i+1, style);
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

