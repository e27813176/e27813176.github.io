var LevelLock = new Array;
var LevelPanel = new Array;
var LevelOneComplete = false;
demo.fishingLevel = function() {};
demo.fishingLevel.prototype = {

    preload: function() {
        game.load.image('LevelOne','javascript/math_game/assets/fishingpage/LevelOne.png');
        game.load.image('LevelLock','javascript/math_game/assets/fishingpage/LevelLock.png');
        game.load.image('LevelPanel','javascript/math_game/assets/fishingpage/LevelPanel.png');
        game.load.image('LevelPanelTwo','javascript/math_game/assets/fishingpage/LevelPanelTwo.png');
        game.load.image('LevelPanelThree','javascript/math_game/assets/fishingpage/LevelPanelThree.png');
        game.load.image('LevelPanelFour','javascript/math_game/assets/fishingpage/LevelPanelFour.png');
        game.load.image('LevelPanelFive','javascript/math_game/assets/fishingpage/LevelPanelFive.png');
        game.load.image('LevelPanelSix','javascript/math_game/assets/fishingpage/LevelPanelSix.png');
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#103040";
         
        LevelOne = game.add.sprite(game.world.centerX-500,game.world.centerY, 'LevelOne');
        LevelOne.anchor.setTo(0.5);
        LevelOne.events.onInputDown.add(GoToPracticeMode, {param1:1});
        LevelOne.inputEnabled = true;
        
        for( let i = 1 ; i<6 ; i++ ){
            LevelPanel[i] = game.add.sprite(game.world.centerX-500 + 200*i,game.world.centerY, 'LevelPanel');
            LevelPanel[i].anchor.setTo(0.5); 
            LevelPanel[i].events.onInputDown.add(GoToPracticeMode, {param1:i+1});
            //LevelLock[i] = game.add.sprite(game.world.centerX-500 + 200*i,game.world.centerY, 'LevelLock');
            //LevelLock[i].anchor.setTo(0.5);
            LevelPanel[i].inputEnabled = true;
        }

        for( let i = 0 ; i<6 ; i++ ){

            LevelPanel[i+6] = game.add.button(game.world.centerX-500 + 200*i,game.world.centerY+200, 'LevelPanel');
            LevelPanel[i+6].anchor.setTo(0.5); 
            LevelPanel[i+6].events.onInputDown.add(GoToPracticeMode, {param1:i+7});
            LevelPanel[i+6].inputEnabled = true;
            //LevelLock2 = game.add.sprite(game.world.centerX-500 + 200*i,game.world.centerY+200, 'LevelLock');
            //LevelLock2.anchor.setTo(0.5);            
        }
        
        LevelPanelTwo = game.add.sprite(game.world.centerX-500 + 200,game.world.centerY, 'LevelPanelTwo');
        LevelPanelTwo.anchor.setTo(0.5);
        LevelPanelTwo.scale.setTo(1);
        
        LevelPanelThree = game.add.sprite(game.world.centerX-500 + 400,game.world.centerY, 'LevelPanelThree');
        LevelPanelThree.anchor.setTo(0.5);
        LevelPanelThree.scale.setTo(1);
        
        LevelPanelFour = game.add.sprite(game.world.centerX-500 + 600,game.world.centerY, 'LevelPanelFour');
        LevelPanelFour.anchor.setTo(0.5);
        LevelPanelFour.scale.setTo(1);

        LevelPanelFive = game.add.sprite(game.world.centerX-500 + 800,game.world.centerY, 'LevelPanelFive');
        LevelPanelFive.anchor.setTo(0.5);
        LevelPanelFive.scale.setTo(1);
        
        LevelPanelSix = game.add.sprite(game.world.centerX-500 + 1000,game.world.centerY, 'LevelPanelSix');
        LevelPanelSix.anchor.setTo(0.5);
        LevelPanelSix.scale.setTo(1);

        /*
        if( LevelOneComplete == true ){
            addLevelTwo();
            LevelPanel[1].inputEnabled = true;
        }
        */
    }

}

    
function GoToPracticeMode(){
    game.state.start('practiceModeLevel'+this.param1,true,true);
    console.log(this.param1);
}
/*
function addLevelTwo(){
    game.add.tween(LevelLock[1].scale).to({x:0,y:0},500,'Quad.easeInOut',true,0);
    game.add.tween(LevelPanelTwo.scale).to({x:1,y:1},500,'Quad.easeInOut',true,500);  
}
*/