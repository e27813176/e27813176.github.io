demo.BackPack = [];

var FishingLevel = 1;
var AnswerPanelLight = [];

var timer;
demo.FishingPage = function() {};
demo.FishingPage.prototype = {
    
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        answercount = 0;
        CorrectCount = 0;
        PlayingTime = 0;
        game.time.advancedTiming = true;
        foxtail_time = 200;
        playing_status = false;
        addmode = true;
        
    },
   
    create: function() {
        
        LevelState.FishingPageCount++;
        //define backgroung        
        game.add.sprite(0,100,'BG'),  
        
        //ScoreBar
        demo.FishingPage.scoreBar.create();    
        
        //create fox dynamic
        demo.FishingPage.Fox.create();
        
        //create fish dynamic
        demo.FishingPage.createFish();
        
        //get fish board
        demo.FishingPage.createGetFishBoard();
        
        //Fail Board
        demo.FishingPage.failBoard.create();
        
        //fishbox
        demo.FishingPage.FishBox.create();
        //fishing question
        demo.FishingPage.question.create();
        //energyTransfer
        demo.FishingPage.energyTransfer.create();
        
        //mark
        mark = game.add.sprite(400, 300,"mark_tutorial");
        mark.scale.setTo(0);
        mark.anchor.setTo(0.5,0.5);

        //BlackBG
        demo.BlackBG.create();     
        
        //sound----------------------------------------------------------------------------------------------------------------
        rightFX = game.add.audio('rightFX');
        wrongFX = game.add.audio('wrongFX');
        successFX = game.add.audio('successFX');
        startFX = game.add.audio('startFX');
        failureFX = game.add.audio('failureFX');
        clickFX = game.add.audio('clickFX');
        add_energyFX = game.add.audio('add_energyFX');            
        alertFX = game.add.audio('alertFX');
        fishingBG = game.add.audio('fishingBG');
        fishingBG.loopFull(1);

        // Create our Timer
        timer = game.time.create(false);

        // Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, updateCounter, this);    
        //start
        demo.FishingPage.waitToStart();
    },   
            
    update: function() {
 
        if(ScoreBar.y < 500 && playing_status == true){
            if( FishingLevel == 13 ){
                ScoreBar.y += 0.6;
                ScoreBarRed.y += 0.6;
                
            }else{
                ScoreBar.y += 0.5;
                ScoreBarRed.y += 0.5;
            }
        }
        if(ScoreBar.y >= 500 && playing_status == true){
           demo.FishingPage.fail();
        }
    }
}

demo.FishingPage.waitToStart = function(){
    waitingTime = Math.floor(Math.random()*4+2);
    
    markShowUp = game.add.tween(mark.scale).to({x:1,y:1},200,Phaser.Easing.Elastic.Out,true,waitingTime*1000);
    markShowUp.onComplete.add(function(){
        alertFX.play();
        markFadeOut = game.add.tween(mark.scale).to({x:0,y:0},50,Phaser.Easing.Elastic.Out,true,1500);
        markFadeOut.onComplete.add(function(){
            this.start();        
        },this);
                
    },this);    
};


demo.FishingPage.restart = function(){
    this.waitToStart();
    
    playing_status = false;    

    game.add.tween(FailBoardBG).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(FailBoardBtn).to({alpha:0},250,'Quad.easeOut',true,0);    
    
    demo.FishingPage.Fox.sitting();
    demo.FishingPage.Fox.cleanFall();
    fishingBG.loopFull(1);
    
    startFX.play();
};



var counter = 0;

function updateCounter() {
    if( playing_status == true ){
        counter++;
    }
}

demo.FishingPage.start = function(){
    
    timer.start();
    
    counter = 0;
    console.log('Level:'+FishingLevel);
    
    this.Fox.stopSitting();
    this.Fox.pulling();
    
    ScoreBar.y = 300; 
    ScoreBarRed.y = 300; 
    mark.scale.setTo(0,0);      
    playing_status = true;       
    mark.inputEnabled = false;
    
    answercount = 0;
    CorrectCount = 0;
    PlayingTime = 0;
    
    this.question.start();

    game.add.tween(ScoreBarBG).to({alpha:1},300,'Quad.easeInOut',true);
    game.add.tween(ScoreBarTop).to({alpha:1},300,'Quad.easeInOut',true);
    game.add.tween(ScoreBar).to({alpha:1},300,'Quad.easeInOut',true);    
    ScoreBarTween.resume();

    startFX.play();
    fishingBG.stop(); 
    game_fishing_music = game.add.audio('fishing');
    game_fishing_music.loopFull(1);

};


var success;

demo.FishingPage.finishfishing = function(){
    timer.stop(false);
    
    playing_status = false; 
    
    demo.FishingPage.question.cleanPanel();
    demo.FishingPage.GetFishAnimate();

    ScorebarTopSuccessLight.alpha = 1;
    ScorebarTopSuccessLightTween = game.add.tween(ScorebarTopSuccessLight).to({alpha:'-0.2'},500,'Quad.easeInOut',true,0,false,true).loop(true);

    this.Fox.stopPulling();

    success = true;
    LevelState.FishingPageComplete = true;
    LevelState.FishingPageCompleteCount++;
    
    if( LevelState.FishingPageCompleteCount == 1 ){
        LevelState.CheckNewMedal = true;
    }

    demo.FishingPage.ShowUpGetFishBoard();   
    game_fishing_music.stop();
    successFX.play();   

    if( FishingLevel < 13) FishingLevel++;
    
    console.log('答對題數:'+CorrectCount);
    console.log('總答題數:'+answercount);
    console.log('完成時間:' + counter + '秒' );
};

demo.FishingPage.fail = function(){
    
    playing_status = false; 
    
    ScoreBarTween.pause();
    ScoreBar.alpha = 0;
    
    this.question.cleanPanel();
    this.Fox.stopPulling();
    this.Fox.falling();
    
    
    showupfailboard();
    game_fishing_music.stop();
    failureFX.play();
};

demo.FishingPage.continue = function(){
    
    playing_status = false;
    this.waitToStart();
    this.cleanStopFish();
    this.cleanFishBoard();
    
    game.add.tween(ScoreBarBG).to({alpha:0},300,'Quad.easeInOut',true);
    game.add.tween(ScoreBarTop).to({alpha:0},300,'Quad.easeInOut',true);
    game.add.tween(ScoreBar).to({alpha:0},300,'Quad.easeInOut',true);  
    
    demo.FishingPage.Fox.sitting();
    ScoreBarTween.pause();
        
  
    fishingBG.loopFull(1);
    startFX.play();
 
    ScorebarTopSuccessLight.alpha = 0;
    ScorebarTopSuccessLightTween.pause();
};

function showupfailboard(){
    FailBoardBG.scale.setTo(0);
    FailBoardBG.alpha = 1;
    game.add.tween(FailBoardBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    FailBoardBtnTween = game.add.tween(FailBoardBtn).to({alpha:1},500,'Quad.easeOut',true,3000);
    FailBoardBtnTween.onComplete.add(function(){
        ScorebarWrongFx.alpha = 0;
        FailBoardExitBtnHoverArea.inputEnabled = true;
        FailBoardRestartBtnHoverArea.inputEnabled = true;          
    },this); 
}


demo.createAnimate = function(name,string,startframe,endframe,frameRate,loop){
    name.animate = name.animations.add(string,Phaser.Animation.generateFrameNames(string + '_',startframe,endframe,'.png',5),frameRate,loop);
};

demo.BlackBG = {
    create:function(){
        this.BG = game.add.graphics();
        this.BG.beginFill(0x000000);
        this.BG.drawRect(0,0,1600,1000); 
        this.opening();    
    },
    opening:function(){
        game.add.tween(this.BG).to({alpha:0},1000,'Quad.easeIn',true); 
    },
    ExitPage:function(page){
        this.BG.tween = game.add.tween(this.BG).to({alpha:1},1000,'Quad.easeIn',true);
        this.BG.tween.onComplete.add(function () {
            game.state.start(page,true,true); 
        }, this);
    }
};