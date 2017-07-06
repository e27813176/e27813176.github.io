demo.practiceModeLevel6 = function(){};
demo.practiceModeLevel6 = {
    
    init: function(){
        totalAnswerCount = 20;
        level = 6;
        answercount = 1;
    },
    preload: function(){
     
        game.load.image('question_panel','javascript/math_game/assets/practiceMode/panel.png');
        game.load.image('answer_panel','javascript/math_game/assets/practiceMode/answer_panel.png');
    },
    create: function(){
        console.log('Level6');
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.stage.backgroundColor = "#100010";
      
        question_panel = game.add.sprite(centerX,centerY-200,'question_panel');
        question_panel.anchor.setTo(0.5);
      
        for(let i = 0;i<5;i++){
            answer_panel[i] = game.add.sprite(centerX-400+200*i,centerY+200,'answer_panel');
            answer_panel[i].anchor.setTo(0.5);
          
            answer_panel[i].events.onInputDown.add(cleanPracticeButton, this);
            answer_panel[i].inputEnabled = false;
        }
      
        createNumber();
      
    },
    update: function(){

    } 
}