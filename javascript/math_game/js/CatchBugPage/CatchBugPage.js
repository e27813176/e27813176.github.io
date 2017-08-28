
demo.CatchBugPage = function() {};
demo.CatchBugPage.prototype = {
    init: function(){
        t = 100;
        level = 5;
        demo.CatchBugPage.correctAnswer = 0;
        demo.CatchBugPage.AnswerRange = 0;
    },

    create: function() {
        LevelState.CatchBugPageCount++;
        //define backgroung
        game.stage.backgroundColor = "#000";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.add.sprite(0,100,'BG');
        
        demo.CatchBugPage.flyingBug.create();
        demo.CatchBugPage.fox.create();      
        
        demo.CatchBugPage.panel.create();
           
        
        CatchBugPageExitBtn = game.add.sprite(0,100,'Panel',"ExitBtn.png");
        CatchBugPageExitTextGlow = game.add.sprite(0,100,'Panel',"ExitTextGlow.png");

        game.add.tween(CatchBugPageExitTextGlow).to({alpha:0.2},500,'Quad.easeInOut',true,0,false,true).loop(true);
        
        CatchBugPageExitBtnHover = game.add.sprite(70,720,'Panel',"ExitBtnHover.png");
        CatchBugPageExitBtnHover.alpha = 0;
        CatchBugPageExitBtnHover.events.onInputDown.add(demo.CatchBugPage.ExitPage, this);
        CatchBugPageExitBtnHover.inputEnabled = true;        
        CatchBugPageExitBtnHover.input.useHandCursor = true;
        
        demo.CatchBugPage.getBoard.create();
        demo.CatchBugPage.task.create();  
        //Tutorial-------------------------------------------------------------------------------------------
        
        demo.CatchBugPage.OpeningBG = game.add.sprite(0,0,'blackBG');
        demo.CatchBugPage.OpeningBG.alpha = 1;
        demo.CatchBugPage.OpeningBG.events.onInputDown.add(Block, this);
        demo.CatchBugPage.OpeningBG.inputEnabled = true;
        demo.CatchBugPage.OpeningBG.Tween = game.add.tween(demo.CatchBugPage.OpeningBG).to({alpha:0},500,'Linear',true,0);  
        demo.CatchBugPage.OpeningBG.Tween.onComplete.add(function(){
            demo.CatchBugPage.OpeningBG.scale.setTo(0);
            if( LevelState.CatchBugPageCount == 1 ){
                demo.CatchBugPage.tutorial.create();
                demo.CatchBugPage.tutorial.askToStart();
                
            }else{
                //demo.CatchBugPage.task.showTask();
                TutorialBlackBG.scale.setTo(0);
            }    
        },this);
        //Audio----------------------------------------------------------------------------------------
        CatchBugPageBG = game.add.audio('CatchBugPageBG');
        GetMedal = game.add.audio('GetMedal');
        CatchBugPageBG.loopFull(1); 

        demo.createQuestionNum(level,demo.CatchBugPage.AnswerRange);
        demo.BlackBG.create();
        //demo.CatchBugPage.task.showTask();
    },     
    update: function() {
        if( FoxCatchingAnimate.frame == 4 ){
            demo.CatchBugPage.flyingBug.flyingBug.alpha = 0;
            demo.CatchBugPage.flyingBug.stop();
        }
        
    }    
}
function Block(){}
demo.CatchBugPage.ExitPage = function(){
    demo.BlackBG.ExitPage('BootLevelMap');
};



