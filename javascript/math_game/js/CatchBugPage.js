
demo.CatchBugPage = function() {};
demo.CatchBugPage.prototype = {
    init: function(){
        t = 100;
        level = 5;
        CatchBugPageCorrectAnswer = 0;
        CatchBugPageRand = 0;
    },
    preload: function() {
        game.load.image('BG','javascript/math_game/assets/CatchBugPage/CatchBugPageBG.jpg');
        game.load.atlas('FlyingBug', 'javascript/math_game/assets/CatchBugPage/FlyingBug.png', 'javascript/math_game/assets/CatchBugPage/FlyingBug.json'); 
        game.load.atlas('FoxStanding', 'javascript/math_game/assets/CatchBugPage/FoxStanding.png', 'javascript/math_game/assets/CatchBugPage/FoxStanding.json');    
        game.load.atlas('FoxCatching', 'javascript/math_game/assets/CatchBugPage/FoxCatching.png', 'javascript/math_game/assets/CatchBugPage/FoxCatching.json');     
        game.load.atlas('FoxFalling', 'javascript/math_game/assets/CatchBugPage/FoxFalling.png', 'javascript/math_game/assets/CatchBugPage/FoxFalling.json');  
        game.load.atlas('FoxHitting001', 'javascript/math_game/assets/CatchBugPage/FoxHitting001.png', 'javascript/math_game/assets/CatchBugPage/FoxHitting001.json');          
        game.load.atlas('FoxHitting', 'javascript/math_game/assets/CatchBugPage/FoxHitting.png', 'javascript/math_game/assets/CatchBugPage/FoxHitting.json');    
        game.load.atlas('FoxStandUp', 'javascript/math_game/assets/CatchBugPage/FoxStandUp.png', 'javascript/math_game/assets/CatchBugPage/FoxStandUp.json');    
        game.load.atlas('FruitDrop', 'javascript/math_game/assets/CatchBugPage/FruitDrop.png', 'javascript/math_game/assets/CatchBugPage/FruitDrop.json');    
        game.load.atlas('Board', 'javascript/math_game/assets/CatchBugPage/Board.png', 'javascript/math_game/assets/CatchBugPage/Board.json');      
        
        game.load.image('blackBG','javascript/math_game/assets/CatchBugPage/blackBG.jpg');
        game.load.atlas('Panel', 'javascript/math_game/assets/CatchBugPage/Panel.png', 'javascript/math_game/assets/CatchBugPage/Panel.json');   
        
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#000";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.add.sprite(0,100,'BG');
        
        FlyingBug = game.add.sprite(0,100,'FlyingBug');
        FlyingBugAnimate = FlyingBug.animations.add("FlyingBug",Phaser.Animation.generateFrameNames('FlyingBug_',0,39,'.png',5),30,true);
        //FlyingBugAnimate.play('',false);
        FlyingBugAnimate.onComplete.add(function(){
            t = Math.floor(Math.random()*4)*60+60;
            
        });
        FoxStanding = game.add.sprite(0,100,'FoxStanding');
        FoxStandingAnimate = FoxStanding.animations.add("FoxStanding",Phaser.Animation.generateFrameNames('FoxStanding_',11,40,'.png',5),30,true);
        FoxStandingAnimate.play('',true);
        
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
            answerNum[i] = game.add.text(centerX+90*i-445,centerY+140+2,i+11, style);
            answerNum[i].anchor.setTo(0.5);
            answerNum[i].alpha = 0;
        }
        
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
        CatchBugClosing = game.add.sprite(0,0,'blackBG');
        CatchBugClosing.alpha = 0;
        CreateCatchBugPageNumber();
        
        
    },     
    update: function() {
        if( t > 0 && FlyingBugAnimate.isPlaying == false ){
            t--;
            if(t == 0){
               FlyingBugAnimate.play('',false); 
                FlyingBug.alpha = 1;
            }
        }
        if( FoxCatchingAnimate.frame == 4 ){
            
            FlyingBug.alpha = 0;
            //FlyingBugAnimate.stop();
        }
       console.log(t);
 
    }    
}
function GetBugBoardContinueBtnDown(){
    game.add.tween(GetBugBoard.scale).to({x:0,y:0},300,'Quad.easeIn',true,0);
    GetBugBoardFinishBtn.inputEnabled = false;
    GetBugBoardContinueBtn.inputEnabled = false; 
    
    for(let i = 0;i<5;i++){
        AnswerPanel[i].inputEnabled = true;
    }
    UpdateCreateCatchBugPageNumber();
}
function GetBugBoardFinishBtnDown(){

    ExitCatchBugPage();
}

function ExitCatchBugPage(){
    GetBugBoardFinishBtn.inputEnabled = false;
    GetBugBoardContinueBtn.inputEnabled = false;
    CatchBugClosingTween = game.add.tween(CatchBugClosing).to({alpha:1},500,'Linear',true,0);  
    CatchBugClosingTween.onComplete.add(function(){
        game.state.start('BootLevelMap');
    },this);
}

function CatchBugCheck( AnswerPanel ){

    console.log( AnswerPanel.variable );
    if( AnswerPanel.variable == CatchBugPageCorrectAnswer - 10 ){
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
    FoxStandingAnimate.stop();        
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
                FoxStandingAnimate.play('',true);
                
                for(let i = 0;i<5;i++){
                    AnswerPanel[i].inputEnabled = true;
                }     
                
            });
        });
        
    });        
}
function CreateCatchBugPageNumber(){

    var equation = createEquation(level);
    console.log(equation);
    var style = { font: "60px Arial", fill: "#74e4f3", align: "center" };      
    if( level == 5 ){
        NumSum = game.add.text(centerX-265,centerY-118,'?', style);
        NumSum.anchor.set(0.5);
    
        NumAdd1 = game.add.text(centerX-265 - 110,centerY-5,equation[0], style);
        NumAdd1.anchor.set(0.5);    

        NumAdd2 = game.add.text(centerX-265 + 105,centerY-5,equation[1], style);
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

    if( level == 5 ){
        CreateCatchBugPageAnswerNum(1);
        if( CatchBugPageRand == 0 ){
            CatchBugPageCorrectAnswer = equation[2];
            //AnswerPanel[equation[2]-1].inputEnabled = true;
        }else{
            LoggingPageCorrectAnswer = equation[2] - 5;
            //AnswerPanel[equation[2]-6].inputEnabled = true;    
        }
        
    }
    if( level == 4 ){
        CreateLoggingPageAnswerNum(0);
        if( CatchBugPageRand == 0 ){
            CatchBugPageCorrectAnswer = equation[1];
            
            //AnswerPanel[equation[1]-1].inputEnabled = true;
        }
        else{
            LoggingPageCorrectAnswer = equation[1] - 5;
            //AnswerPanel[equation[1]-6].inputEnabled = true;    
        }
            
    }
}

function UpdateCreateCatchBugPageNumber(){

    //AxPageRand = Math.floor(Math.random() * 2);
    var equation = createEquation(level);
    console.log(equation);
    if( level == 5  ){
        NumAdd1.setText(equation[0]);
        NumAdd2.setText(equation[1]);        
        if( CatchBugPageRand == 0 ){
            CatchBugPageCorrectAnswer = equation[2];      
            //AnswerPanel[equation[2]-1].inputEnabled = true;
        
        }else{
            LoggingPageCorrectAnswer = equation[2] - 5;      
            //AnswerPanel[equation[2]-6].inputEnabled = true;    
        }
        
    }
    if( level == 4 ){
        NumAdd1.setText(equation[0]);
        NumAdd2.setText('?');
        NumSum.setText(equation[2]);
        
        if( LoggingPageRand == 0 ){
            LoggingPageCorrectAnswer = equation[1];      
            //AnswerPanel[equation[1]-1].inputEnabled = true;
        
        }else{
            LoggingPageCorrectAnswer = equation[1] - 5;      
            //AnswerPanel[equation[1]-6].inputEnabled = true;    
        }
        
    }
}

function FoxCatch(){
    
    //FlyingBug.alpha = 0;
    if( FlyingBugAnimate.frame > 0 && FlyingBugAnimate.frame < 22 ){
        //FoxStanding.inputEnabled = false;
        for(let i = 0;i<5;i++){
            AnswerPanel[i].inputEnabled = false;
        }
        FoxStanding.alpha = 0;
        FoxStandingAnimate.stop();
        FoxCatching.alpha =1;
        FoxCatchingAnimate.play('',false);
        FoxCatchingAnimate.onComplete.add(function(){
            FoxStanding.alpha = 1;
            FoxCatching.alpha = 0;
            FoxStandingAnimate.play('',true);

            console.log('Complete');
            ShowUpBugBoard();
            //FoxStanding.inputEnabled = true;
            //FoxStanding.input.useHandCursor = true;

        });

        
    }else{
        for(let i = 0;i<5;i++){
            AnswerPanel[i].inputEnabled = false;
        }        
        FoxStanding.alpha = 0;
        FoxStandingAnimate.stop();
        FoxFalling.alpha = 1;
        FoxFallingAnimate.play('',false);  
        FoxFallingAnimate.onComplete.add(function(){
            FoxStanding.alpha = 1;
            FoxStandingAnimate.play('',true);
            FoxFalling.alpha = 0;
            for(let i = 0;i<5;i++){
                AnswerPanel[i].inputEnabled = true;
            }
        });
    }
    
}
function ShowUpBugBoard(){

    GetBugBoard.alpha = 1;
    GetBugBoard.scale.setTo(0);
    ShowUpBugBoardTween = game.add.tween(GetBugBoard.scale).to({x:1,y:1},300,'Quad.easeOut',true,100);
    ShowUpBugBoardTween.onComplete.add(function(){
        GetBugBoardFinishBtn.inputEnabled = true;
        GetBugBoardContinueBtn.inputEnabled = true;
    });

}


function CreateCatchBugPageAnswerNum(param){

    
    if( param == 1 ){
        for(let i = 0;i<5;i++){
            answerNum[i].alpha = 1;
            answerNum[i].setText(i+11);
            
        }
    }    
    if( param == 6 ){
        for(let i = 0;i<5;i++){
            answerNum[i].setText(i+6);
        }
    }    
}