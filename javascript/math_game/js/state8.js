var loading = 0;

var newscardX = centerX - 250,
    newscardY = centerY - 44;

var daitytaskcardX = centerX + 100,
    daitytaskcardY = centerY - 44;

var white_BG_animation;

var sunlight1_tween,sunlight2_tween,black_BG_tween;

demo.state8 = function(){};
demo.state8.prototype = {
  preload: function(){
        
      game.time.advancedTiming = true;
      //button--------------------------------------------------------------------------------------------------
      game.load.atlas('fishing_button', 'javascript/math_game/assets/game_menu/fishing_button_atlas.png', 'javascript/math_game/assets/game_menu/fishing_button_atlas.json');
      game.load.atlas('home_button', 'javascript/math_game/assets/game_menu/home_button_atlas.png', 'javascript/math_game/assets/game_menu/home_button_atlas.json');
      
      //light----------------------------------------------------------------------------------------------------
      game.load.atlas('sunlight_atlas', 'javascript/math_game/assets/game_menu/sunlight_atlas.png', 'javascript/math_game/assets/game_menu/sunlight_atlas.json');
      //BG--------------------------------------------------------------------------------------------------------
      game.load.image('BG','javascript/math_game/assets/game_menu/BG.jpg');
      game.load.image('whiteBG','javascript/math_game/assets/game_menu/whiteBG.jpg');
      game.load.image('blackBG','javascript/math_game/assets/game_menu/blackBG.jpg');
      //Audio--------------------------------------------------------------------------------------------------------
      game.load.audio('menu', 'javascript/math_game/assets/audio/game_menu_BG.mp3');
      
  },
  create: function(){
  	
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      game.stage.backgroundColor = "#000000";

      game_menu_music = game.add.audio('menu');
      game_menu_music.loopFull(1);
      
      
      BG = game.add.sprite(0,0,'BG');
      sunlight1 = game.add.sprite(0,0,'sunlight_atlas','sunlight1.png');
      sunlight1.alpha = 1;
      sunlight1_tween = game.add.tween(sunlight1).to({alpha:0.2},1000,'Quad.easeInOut',true,0,false,true).loop(true);  
      
      sunlight2 = game.add.sprite(0,0,'sunlight_atlas','sunlight2.png');
      sunlight2.alpha = 1;
      sunlight2_tween = game.add.tween(sunlight2).to({alpha:0.2},1200,'Quad.easeInOut',true,0,false,true).loop(true);
      
      home_button = game.add.button(1207, 40, 'home_button', gohome, this,'home_button_hover.png','home_button.png');    
      home_button.inputEnabled = false;
      
      fishing_button = game.add.button(260, 440, 'fishing_button', gofishing, this,"fishingboard_btn_hover.png","fishingboard_btn.png");
      fishing_button.inputEnabled = false;

      white_BG = game.add.sprite(0,0,'whiteBG'); 
      
      white_BG_animation = game.add.tween(white_BG).to({alpha:0},4000,'Quad.easeInOut',true); 
        
      white_BG_animation.onComplete.add(function () {	    
          home_button.inputEnabled = true;
          fishing_button.inputEnabled = true;
      }, this);
       
      black_BG = game.add.sprite(0,0,'blackBG'); 
      black_BG.alpha = 0;
      
  
  },
      

    
    update: function(){
    },

    shutdown: function(){
 

    },
    render: function(){
        //game.debug.text(game.time.fps || '--', 10, 20, "#000000");   
    }
}
function gohome(){
    game.state.start('state9',true,true);
}

function gofishing(){
    fishing_button.inputEnabled = false;
    
    
    black_BG_tween = game.add.tween(black_BG).to({alpha:1},2000,'Quad.easeInOut',true);
    
    black_BG_tween.onComplete.add(function () {
         
        sunlight1_tween.pause();
        sunlight2_tween.pause();
        game_menu_music.stop();
        game.state.start('state2',true,true);

      }, this);
        
}