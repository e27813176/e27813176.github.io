demo.CatchBugPage.task = {
    create:function(){
        this.complete = false;
        this.BG = game.add.sprite(0,100,'TaskBoard','TaskBoard.png');    
        this.BG.alpha = 0;
        
        this.BlackBG = game.add.graphics();
        this.BlackBG.beginFill(0x000000);
        this.BlackBG.drawRect(0,0,1600,1000); 
        this.BlackBG.alpha = 0;
        
        this.taskConfirm = game.add.sprite(0,100,'TaskBoard','TaskBoardConfirm.png');
        this.taskConfirm.alpha = 0;
        this.taskConfirm.events.onInputDown.add(this.confirm, this);

        this.taskComplete = game.add.sprite(0,100,'TaskBoard','TaskBoardComplete.png');
        this.taskComplete.alpha = 0;
        this.taskComplete.events.onInputDown.add(this.cleanCompleteBoard, this);
        
        this.GoldenBug = game.add.sprite(0,100,'TaskBoard','TaskBoardGoldenBug.png');            
        this.GoldenBug.alpha = 0;
        this.IceBug = game.add.sprite(0,100,'TaskBoard','TaskBoardIceBug.png');    
        this.IceBug.alpha = 0;
        this.FireBug = game.add.sprite(0,100,'TaskBoard','TaskBoardFireBug.png');    
        this.FireBug.alpha = 0;
    },
    openBugdex:function(bug){

        if( this[bug].alpha == 0){
            game.add.tween(this[bug]).to({alpha :1},300,'Quad.easeOut',true);   
        }        
    },
    showTask:function(){

        this.taskConfirm.inputEnabled = true;
        game.add.tween(this.taskConfirm).to({alpha:1},300,'Quad.easeOut',true);
        
    },
    confirm:function(){
        this.taskConfirm.inputEnabled = false;
        this.taskConfirm.fadeOut = game.add.tween(this.taskConfirm).to({alpha :0},300,'Quad.easeOut',true);
        this.taskConfirm.fadeOut.onComplete.add(function(){
            demo.CatchBugPage.task.taskConfirm.scale.setTo(0);
        },this);
        
        game.add.tween(this.BG).to({alpha :1},300,'Quad.easeOut',true,500);
        demo.CatchBugPage.flyingBug.createDelay();
        demo.CatchBugPage.panel.setAnswerPanelEnable(true);

    },
    completeTask:function(){
        
        LevelState.CatchBugPageCompleteCount++;

        if( LevelState.CatchBugPageCompleteCount == 1 ){
            LevelState.CheckNewMedal = true;
            this.showUpCompleteBoard();            
        }
        LevelState.CatchBugPageComplete = true;           
        
    },
    showUpCompleteBoard:function(){
        GetMedal.play();
        game.add.tween(this.BlackBG).to({alpha :0.5},300,'Quad.easeOut',true,500);
        game.add.tween(this.taskComplete)
            .to({alpha :1},300,'Quad.easeOut',true,500)
            .onComplete.add(function(){
            this.taskComplete.inputEnabled = true;
            
        },this);
    },
    cleanCompleteBoard:function(){
        this.taskComplete.inputEnabled = false;
        game.add.tween(this.BlackBG).to({alpha :0},300,'Quad.easeOut',true,0);

        game.add.tween(this.taskComplete)
            .to({alpha :0},300,'Quad.easeOut',true,0)
            .onComplete.add(function(){
            this.taskComplete.scale.setTo(0);
        },this);
    }
};