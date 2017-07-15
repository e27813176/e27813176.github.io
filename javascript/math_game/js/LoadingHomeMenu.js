var FirstStart = true;

demo.LoadingHomeMenu = function() {};
demo.LoadingHomeMenu.prototype = {
    preload: function() {
       
        loadingBar = this.add.sprite(game.width/2-300,720,"LoadingBar");
        loadingBar.alpha = 1;
        
        loadingBar.anchor.setTo(0,0.5);
        this.load.setPreloadSprite(loadingBar,0);
        

        
        this.FoxLogo = this.add.sprite(centerX,centerY,'FoxLogo');
        this.FoxLogo.anchor.setTo(0.5);
        FoxLogoTween = game.add.tween(this.FoxLogo).to({alpha:0.3},800,'Quad.easeInOut',true,0,false,true).loop(true); 

        LoadingBarFrame = this.add.sprite(game.width/2,720,"LoadingBarFrame");
        LoadingBarFrame.alpha = 1;
        LoadingBarFrame.anchor.setTo(0.5,0.5);
        
        game.load.atlas('fishingpage_sheet001', 'javascript/math_game/assets/fishingpage/fishingpage_atlas001.png', 'javascript/math_game/assets/fishingpage/fishingpage_atlas001.json');
        
        game.load.image('HomePageBG','javascript/math_game/assets/HomePage/Home_page.jpg');
        game.load.spritesheet('button_start_sheet','javascript/math_game/assets/fishingpage/start_button_sheet.png',239,239);
        game.load.spritesheet('button_tutorial_sheet','javascript/math_game/assets/fishingpage/tutorial_button_sheet.png',239,239);

        game.load.image('FoxIconCenter','javascript/math_game/assets/loadingpage/FoxIconCenter.png');
        game.load.image('grass','javascript/math_game/assets/HomePage/grass.png');
        game.load.image('HomeTreeFrame1','javascript/math_game/assets/HomePage/HomeTreeFrame1.png');

        
        game.load.image('blackBG','javascript/math_game/assets/fishingpage/blackBG.jpg');
 
        game.load.audio('menu', 'javascript/math_game/assets/audio/game_menu_BG.mp3');
        
        //btn---------------------------------------------------------------------------------------------------------------
        game.load.atlas('DoorBtn', 'javascript/math_game/assets/HomePage/DoorBtn.png', 'javascript/math_game/assets/HomePage/DoorBtn.json');
        game.load.atlas('HomeMailBtn', 'javascript/math_game/assets/HomePage/HomeMailBtn.png', 'javascript/math_game/assets/HomePage/HomeMailBtn.json');
        
        game.load.image('SettingBtnBG', 'javascript/math_game/assets/HomePage/SettingBtnBG.png');
        game.load.atlas('SettingBtnSheet', 'javascript/math_game/assets/HomePage/SettingBtnSheet.png', 'javascript/math_game/assets/HomePage/SettingBtnSheet.json');
         
        game.load.atlas('HomePageTreeSheet', 'javascript/math_game/assets/HomePage/HomeTree.png', 'javascript/math_game/assets/HomePage/HomeTree.json');  
        
        game.load.atlas('ArrowSheet', 'javascript/math_game/assets/HomePage/ArrowSheet.png', 'javascript/math_game/assets/HomePage/ArrowSheet.json');  
        
        game.load.image('RoadHover', 'javascript/math_game/assets/HomePage/RoadHover.png');
        game.load.image('HomeTreeHover', 'javascript/math_game/assets/HomePage/HomeTreeHover.jpg');
        
        
        //Text----------------------------------------------------------------------------------------------------------------------------
        game.load.image('FoxHomeText','javascript/math_game/assets/HomePage/FoxHomeText.jpg');
        game.load.image('HomeMailText','javascript/math_game/assets/HomePage/HomeMailText.jpg');
        game.load.image('GameSettingText','javascript/math_game/assets/HomePage/GameSettingText.jpg');
        game.load.image('HomeTreeText','javascript/math_game/assets/HomePage/HomeTreeText.jpg');
        game.load.image('FoxGoFishingText','javascript/math_game/assets/HomePage/FoxGoFishingText.jpg');       
        game.load.image('StartText','javascript/math_game/assets/loadingpage/StartText.png');        
              
        //Fox------------------------------------------------------------------------------------------------
        game.load.atlas('FoxStanding', 'javascript/math_game/assets/HomePage/FoxStanding.png', 'javascript/math_game/assets/HomePage/FoxStanding.json'); 
        
        /*        
        game.load.atlas('fishingpage_sheet002', 'javascript/math_game/assets/fishingpage/fishingpage_atlas002.png', 'javascript/math_game/assets/fishingpage/fishingpage_atlas002.json');
        game.load.atlas('fishingpage_sheet003', 'javascript/math_game/assets/fishingpage/fishingpage_atlas003.png', 'javascript/math_game/assets/fishingpage/fishingpage_atlas003.json');
       
        game.load.atlas('fishingpage_sheet005', 'javascript/math_game/assets/fishingpage/fishingpage_atlas005.png', 'javascript/math_game/assets/fishingpage/fishingpage_atlas005.json');
        game.load.atlas('get_stone_fish_atlas', 'javascript/math_game/assets/fishingpage/get_stone_fish_atlas.png', 'javascript/math_game/assets/fishingpage/get_stone_fish_atlas.json');
        game.load.atlas('get_light_blue_fish_atlas', 'javascript/math_game/assets/fishingpage/get_light_blue_fish_atlas.png', 'javascript/math_game/assets/fishingpage/get_light_blue_fish_atlas.json');

        
        
        game.load.atlas('scorebar_fx_atlas', 'javascript/math_game/assets/fishingpage/scorebar_fx_atlas.png', 'javascript/math_game/assets/fishingpage/scorebar_fx_atlas.json');
        
        console.log(loading);
        loading++;
        //BG--------------------------------------------------------------------------------------------
        game.load.image('blackBG','javascript/math_game/assets/fishingpage/blackBG.jpg');
        
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
        */
        //Audio-----------------------------------------------------------------------------------------------
        game.load.audio('StartBtnDown', 'javascript/math_game/assets/audio/StartBtnDown.mp3');
        game.load.audio('BtnOver', 'javascript/math_game/assets/audio/BtnOver.mp3');
    },

    create: function() {
        if( FirstStart == true ){
            FirstStart = false;
            FoxIconCenter = game.add.sprite(0,100, 'FoxIconCenter');
            FoxIconCenter.alpha = 0;
            game.add.tween(FoxIconCenter).to({alpha:1},1000,'Linear',true);
            //loadingBarTween.pause();
            //loadingBarTween = game.add.tween(loadingBar).to({alpha:'-0.5'},400,'Quad.easeInOut',true,0,false,true).loop(true); 
            FoxLogoTween.pause();  
            game.add.tween(this.FoxLogo).to({alpha:0},500,'Linear',true);
        
            StartText = game.add.sprite(0,100,'StartText');
            StartText.alpha = 1;
           
            StartText.events.onInputDown.add(StartGame, this);
            StartText.inputEnabled = true;
            StartTextTween = game.add.tween(StartText).to({alpha:0.2},500,'Linear',true,0,false,false).loop(true);   
        
        
            //Audio-------------------------------------------------------------------------------------------------------
            StartBtnDown = game.add.audio('StartBtnDown');
            
        }else{
            game.state.start('HomeMenu',true,false);
        }
    },
    shutdown: function(){
        this.fox_logo = null; 
        this.tweens.removeAll();
    }

    
};
function StartGame(){
    StartBtnDown.play();
    console.log('Hello');
    StartTextTween.stop();
    StartText.inputEnabled = false;
    //loadingBarTween.pause();
    game.add.tween(loadingBar).to({alpha:0},500,'Linear',true);
    game.add.tween(LoadingBarFrame).to({alpha:0},500,'Linear',true);
    game.add.tween(FoxIconCenter).to({alpha:0},500,'Linear',true);
    StartGameTextTween = game.add.tween(StartText).to({alpha:0},500,'Linear',true);
    StartGameTextTween.onComplete.add(function () {	
        game.state.start('HomeMenu',true,false);    
        /*
        DoorBtn.inputEnabled = true;
        HomeMailBtn.inputEnabled = true;
        SettingBtnSheet.inputEnabled = true;
        HomeTreeFrame1.inputEnabled = true; 
        RoadBtn.inputEnabled = true;
        */
    }, this);
}
