
demo.LoadingLoggingPage = function() {};
demo.LoadingLoggingPage.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    preload: function() {
        //Panel------------------------------------------------------------------------------------------
        game.load.atlas('Panel','javascript/math_game/assets/LoggingPage/Panel.png', 'javascript/math_game/assets/LoggingPage/Panel.json');
        //game.load.image('answer_panel','javascript/math_game/assets/practiceMode/answer_panel.png');
        
        game.load.image('LoggingPage','javascript/math_game/assets/LoggingPage/LoggingPage.jpg');
        game.load.image('LoggingPageFront','javascript/math_game/assets/LoggingPage/LoggingPageFront.png');
    
        //FoxLoggingBtn-------------------------------------------------------------------------------------------
        game.load.image('FoxLoggingBtn','javascript/math_game/assets/LoggingPage/FoxLoggingBtn.jpg');
        //BlackBG--------------------------------------------------------------------------------------------------
        game.load.image('BlackBG','javascript/math_game/assets/fishingpage/blackBG.jpg');
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
        
        //TreeBloodBar----------------------------------------------------------------------------------------------------------------------
        game.load.atlas('TreeBloodBar', 'javascript/math_game/assets/LoggingPage/TreeBloodBar.png', 'javascript/math_game/assets/LoggingPage/TreeBloodBar.json');
        
        //Btn---------------------------------------------------------------------------------------------------------------------------
        game.load.image('ExitLoggingBtn','javascript/math_game/assets/LoggingPage/ExitLoggingPage.jpg');
       //audio-----------------------------------------------------------------------------------------------------------------------   
        game.load.audio('rightFX', 'javascript/math_game/assets/audio/rightFX.mp3');      
        
        //ScoreBoard------------------------------------------------------------------------------------------------------------------
        game.load.atlas('ScoreBoard', 'javascript/math_game/assets/LoggingPage/ScoreBoard.png', 'javascript/math_game/assets/LoggingPage/ScoreBoard.json');
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#000000";
        game.state.start('LoggingPage',true,false);
  
    }

}