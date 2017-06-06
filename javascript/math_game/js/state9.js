var matches_animationl,fish_rolling_animation;

var question_text0 = new Array();
var question_text1 = new Array();
var question_text2 = new Array();


demo.state9 = function(){};
demo.state9.prototype = {
  preload: function(){
    
      game.load.atlas('matches', 'javascript/math_game/assets/cookingpage/matches.png', 'javascript/math_game/assets/cookingpage/matches.json');
            
      game.load.atlas('fish_rolling', 'javascript/math_game/assets/cookingpage/fish_rolling.png', 'javascript/math_game/assets/cookingpage/fish_rolling.json');
      
      //BG--------------------------------------------------------------------------------------------------------
      game.load.image('BG','javascript/math_game/assets/cookingpage/cookingpage.jpg');
      //----------------------------------------------------------------------------------------------------------------
      game.load.image('fox','javascript/math_game/assets/cookingpage/fox.png');
      
      //----------------------------------------------------------------------------------------------------------------
      game.load.atlas('fishingpage_sheet001', 'javascript/math_game/assets/fishingpage/fishingpage_atlas001.png', 'javascript/math_game/assets/fishingpage/fishingpage_atlas001.json');
      
      
  },
  create: function(){
      game.stage.backgroundColor = "#000000";
      BG = game.add.sprite(0,0,'BG');
      
      fox = game.add.sprite(350,650,'fox');
      fox.anchor.setTo(0.5,0.5);
      fox.alpha = 1; 

      fish_rolling = game.add.sprite(350,750,'fish_rolling');
      fish_rolling.anchor.setTo(0.5,0.5);
      
      fish_rolling.alpha = 1;
      fish_rolling_animation = fish_rolling.animations.add("fish_rolling",Phaser.Animation.generateFrameNames('fish_rolling',0,7, '.png', 4), 10, true);      
      
      
      matches = game.add.sprite(350,800,'matches');
      matches.anchor.setTo(0.5,0.5);
      matches.alpha = 1;
      matches_animation = matches.animations.add("matches",Phaser.Animation.generateFrameNames('matches_',0,10, '.png', 5), 10, true);      
      
      matches.animations.play("matches",10,true);
      
      multiply_mark = game.add.sprite(850,600,'fishingpage_sheet001','plus.png');
      multiply_mark.angle = -45;
      multiply_mark.anchor.setTo(0.5,0.5);
      
      equal_mark_tutorial = game.add.sprite(950,600,'fishingpage_sheet001','equal_mark_tutorial.png');    
      equal_mark_tutorial.anchor.setTo(0.5,0.5);  
      
    
      
        
      for(var i = 0;i<=10;i++){
            

          question_text1[i] =  game.add.sprite(800,600,'fishingpage_sheet001',i+'.png');    
          question_text1[i].anchor.setTo(0.5,0.5);   
          question_text1[i].scale.setTo(0.8,0.8);
          question_text1[i].alpha = 0; 
              
          question_text2[i] =  game.add.sprite(900,600,'fishingpage_sheet001',i+'.png');    
          question_text2[i].anchor.setTo(0.5,0.5);
          question_text2[i].scale.setTo(0.8,0.8);
          question_text2[i].alpha = 0; 
        
          
      }
      
         
      for(var i = 0;i<=2;i++){
            
          answerpannel[i] = game.add.sprite( 900+150*(i-1), 800,'fishingpage_sheet001','anwser_pannel1.png');
          answerpannel[i].scale.setTo(0.8,0.8); 
          answerpannel[i].anchor.setTo(0.5,0.5);
          answerpannel[i].alpha = 1;  
          answerpannel[i].inputEnabled = true;
      }
          
      answerpannel[0].events.onInputDown.add(rolling);
      answerpannel[1].events.onInputDown.add(rolling);    
      answerpannel[2].events.onInputDown.add(rolling);
      
      create_multiply_question();
  },
  update: function(){},
}

function create_multiply_question(){
    
    var rand1 = Math.floor(Math.random()*9)+1;
    var rand2 = Math.floor(Math.random()*9)+1;
    show_question_text(rand1,1);
    show_question_text(rand2,2);
    
    
    
    
}
function rolling(){
    fish_rolling.animations.play("fish_rolling",15,false);
           
    fish_rolling_animation.onComplete.add(function () {	
            
        fish_rolling_animation.frame = 0;
        create_multiply_question();

    }, this);  
}


