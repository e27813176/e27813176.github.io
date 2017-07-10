demo.LoadingFishingPage = function() {};
demo.LoadingFishingPage.prototype = {
    preload: function() {
       /*
        this.fox_logo = this.add.sprite(centerX,centerY,'fox_logo');
        this.fox_logo.anchor.setTo(0.5);
        fox_logo_tween = game.add.tween(this.fox_logo).to({alpha:0.3},800,'Quad.easeInOut',true,0,false,true).loop(true); 
         */       
         game.load.atlas('fishingpage_sheet001', 'javascript/math_game/assets/fishingpage/fishingpage_atlas001.png', 'javascript/math_game/assets/fishingpage/fishingpage_atlas001.json');
        game.load.atlas('fishingpage_sheet002', 'javascript/math_game/assets/fishingpage/fishingpage_atlas002.png', 'javascript/math_game/assets/fishingpage/fishingpage_atlas002.json');
        game.load.atlas('fishingpage_sheet003', 'javascript/math_game/assets/fishingpage/fishingpage_atlas003.png', 'javascript/math_game/assets/fishingpage/fishingpage_atlas003.json');
       
        
        game.load.atlas('fishingpage_sheet005', 'javascript/math_game/assets/fishingpage/fishingpage_atlas005.png', 'javascript/math_game/assets/fishingpage/fishingpage_atlas005.json');
        
        game.load.atlas('get_stone_fish_atlas', 'javascript/math_game/assets/fishingpage/get_stone_fish_atlas.png', 'javascript/math_game/assets/fishingpage/get_stone_fish_atlas.json');
        game.load.atlas('get_light_blue_fish_atlas', 'javascript/math_game/assets/fishingpage/get_light_blue_fish_atlas.png', 'javascript/math_game/assets/fishingpage/get_light_blue_fish_atlas.json');

        
        
        game.load.atlas('scorebar_fx_atlas', 'javascript/math_game/assets/fishingpage/scorebar_fx_atlas.png', 'javascript/math_game/assets/fishingpage/scorebar_fx_atlas.json');
        
        console.log(loading);
        loading++;
        //panel----------------------------------------------------------------------------------------------------------------------
        /*
        game.load.image('bonds','javascript/math_game/assets/fishingpage/bonds.png');
        game.load.image('green_panel','javascript/math_game/assets/fishingpage/green_panel.png');
        game.load.image('blue_panel','javascript/math_game/assets/fishingpage/blue_panel.png');
        
        game.load.image('answer_panel','javascript/math_game/assets/fishingpage/answer_panel.png');
        game.load.image('answer_panel_circle','javascript/math_game/assets/fishingpage/answer_panel_circle.png');
        */
        game.load.atlas('Panel', 'javascript/math_game/assets/fishingpage/Panel.png', 'javascript/math_game/assets/fishingpage/Panel.json');
        
        //scorebar-------------------------------------------------------------------------------------------------------------------
        /*
        game.load.image('scorebar','javascript/math_game/assets/fishingpage/scorebar.png');
        game.load.image('scorebar_red','javascript/math_game/assets/fishingpage/scorebarred.png');
        game.load.image('scorebar_body_BG','javascript/math_game/assets/fishingpage/scorebar_body_BG.png');       
        game.load.image('scorebar_body_Glass','javascript/math_game/assets/fishingpage/scorebar_body_Glass.png');       
        game.load.image('scorebar_top','javascript/math_game/assets/fishingpage/scorebar_top.png');     
        game.load.image('scorebar_top_light','javascript/math_game/assets/fishingpage/scorebar_top_light.png');    
        */
        game.load.atlas('ScoreBar', 'javascript/math_game/assets/fishingpage/ScoreBar.png', 'javascript/math_game/assets/fishingpage/ScoreBar.json');
        //BG--------------------------------------------------------------------------------------------
        game.load.image('blackBG','javascript/math_game/assets/fishingpage/blackBG.jpg');
        game.load.image('BG','javascript/math_game/assets/fishingpage/BG.jpg');
        game.load.image('correct_fx','javascript/math_game/assets/fishingpage/whiteBG.png');
        
        
        //panel----------------------------------------------------------------------------------------------------------------------
        game.load.image('bonds','javascript/math_game/assets/fishingpage/bonds.png');
        game.load.image('green_panel','javascript/math_game/assets/fishingpage/green_panel.png');
        game.load.image('blue_panel','javascript/math_game/assets/fishingpage/blue_panel.png');
        
        game.load.image('answer_panel','javascript/math_game/assets/fishingpage/answer_panel.png');
        game.load.image('answer_panel_circle','javascript/math_game/assets/fishingpage/answer_panel_circle.png');
        
        //scorebar-------------------------------------------------------------------------------------------------------------------
        game.load.image('scorebar','javascript/math_game/assets/fishingpage/scorebar.png');
        game.load.image('scorebar_red','javascript/math_game/assets/fishingpage/scorebarred.png');
        game.load.image('scorebar_body_BG','javascript/math_game/assets/fishingpage/scorebar_body_BG.png');       
        game.load.image('scorebar_body_Glass','javascript/math_game/assets/fishingpage/scorebar_body_Glass.png');       
        game.load.image('scorebar_top','javascript/math_game/assets/fishingpage/scorebar_top.png');     
        game.load.image('scorebar_top_light','javascript/math_game/assets/fishingpage/scorebar_top_light.png');     

        //button---------------------------------------------------------------------------------------------------------------------
        game.load.spritesheet('button_getfish_continue','javascript/math_game/assets/fishingpage/button_continue_sheet.png',134,82);
        game.load.spritesheet('button_getfish_backhome','javascript/math_game/assets/fishingpage/button_back_home_sheet.png',134,82);
        game.load.spritesheet('button_finish_sheet','javascript/math_game/assets/fishingpage/button_finish_sheet.png',134,82);
        game.load.spritesheet('button_restart_sheet','javascript/math_game/assets/fishingpage/button_restart_sheet.png',134,82);

        game.load.image('mark_tutorial','javascript/math_game/assets/fishingpage/mark.png');
        game.load.image('skip_text','javascript/math_game/assets/fishingpage/skip_text.png');
        
        
        //audio-----------------------------------------------------------------------------------------------------------------------   
        game.load.audio('fishing', 'javascript/math_game/assets/audio/fishing.mp3');
        game.load.audio('rightFX', 'javascript/math_game/assets/audio/rightFX.mp3');
        game.load.audio('wrongFX', 'javascript/math_game/assets/audio/wrongFX.mp3');
        game.load.audio('successFX', 'javascript/math_game/assets/audio/successFX.mp3');
        game.load.audio('failureFX', 'javascript/math_game/assets/audio/failureFX.mp3');
        game.load.audio('alertFX', 'javascript/math_game/assets/audio/alertFX.mp3');
        game.load.audio('startFX', 'javascript/math_game/assets/audio/startFX.mp3');
        game.load.audio('fishingBG', 'javascript/math_game/assets/audio/fishingBG.mp3');
        game.load.audio('clickFX', 'javascript/math_game/assets/audio/clickFX.mp3');  
        game.load.audio('add_energyFX', 'javascript/math_game/assets/audio/add_energyFX.mp3'); 
    },

    create: function() {
        game.state.start('FishingPage',true,false);
    },
    shutdown: function(){
        this.fox_logo = null; 
        this.tweens.removeAll();
    }

    
};
