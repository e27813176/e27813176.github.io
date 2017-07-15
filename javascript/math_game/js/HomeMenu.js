var FromInside = false;
demo.HomeMenu = function() {};
demo.HomeMenu.prototype = {
    init: function(){
       
        FoxDynamicRand = Math.floor(Math.random() * 11);
        scorebarX = 1450;
        scorebarY = 500;
        buttonpositionY = 500;

    },    
    preload: function() {
        
    },
    create: function() {
        //define backgroung


        
        game.stage.backgroundColor = "#000000";
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        HomePageBG = game.add.sprite(0,100,'HomePageBG');
    
        //Audio-------------------------------------------------------------------------------------------
        if(FromInside == false){
    
            game_menu_music = game.add.audio('menu');
        
            game_menu_music.loopFull(1);        
        }
        BtnOver = game.add.audio('BtnOver');
       
       /*
       //scorebar----------------------------------------------------------------------------------------------------
        scorebarBG = game.add.sprite(scorebarX+10,210,'scorebar_body_BG');
        scorebarBG.anchor.setTo(0.5, 0);
        scorebarBG.scale.setTo(1,1);
        scorebarBG.alpha = 0;
        
        scorebar = game.add.sprite(scorebarX+10,scorebarY,'scorebar');
        scorebar.anchor.setTo(0.5, 0);
        scorebar.scale.setTo(1,1);
        scorebar.alpha = 1;
        scorebar_tween = game.add.tween(scorebar).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
        scorebar_tween.pause();
        scorebar.alpha = 0;
 
        scorebarred = game.add.sprite(scorebarX+10,scorebarY,'scorebar_red');
        scorebarred.anchor.setTo(0.5, 0);
        scorebarred.scale.setTo(1,1);
        scorebarred.alpha = 0;
        
        scorebar_body_Glass = game.add.sprite(scorebarX+10,210,'scorebar_body_Glass');
        scorebar_body_Glass.anchor.setTo(0.5, 0);
        scorebar_body_Glass.scale.setTo(1,1);
        scorebar_body_Glass.alpha = 0;
        
        scorebar_top = game.add.sprite(scorebarX+10,100,'scorebar_top');
        scorebar_top.anchor.setTo(0.5, 0);
        scorebar_top.scale.setTo(1,1);
        scorebar_top.alpha = 0;   
        
        scorebar_top_light = game.add.sprite(scorebarX+10,100,'scorebar_top_light');
        scorebar_top_light.anchor.setTo(0.5, 0);
        scorebar_top_light.scale.setTo(1,1);
        scorebar_top_light.alpha = 0;   
        
        scorebar_top_success_light = game.add.sprite(scorebarX+10,100,'scorebar_top_light');
        scorebar_top_success_light.anchor.setTo(0.5, 0);
        scorebar_top_success_light.scale.setTo(1,1);
        scorebar_top_success_light.alpha = 0;
        
        mask = game.add.graphics();
        mask.beginFill(0xffffff);
        mask.drawRect(scorebarX-10,196,60,600);
        scorebar.mask = mask;
        scorebarred.mask = mask;
        
        for(var i = 0;i<=2;i++){
            answerpannel_tutorial[i] = game.add.sprite( questionpositionX+150*(i-1), buttonpositionY,'answer_panel');
            answerpannel_tutorial[i].scale.setTo(0.8,0.8); 
            answerpannel_tutorial[i].anchor.setTo(0.5,0.5);
            answerpannel_tutorial[i].alpha = 0; 
   
        }    
        bonds = game.add.sprite(questionpositionX,questionpositionY,"bonds");
        bonds.anchor.setTo(0.5,2);
        bonds.alpha = 0;
       
        question_green_pannel = game.add.sprite(questionpositionX,questionpositionY-150,'green_panel');
        question_green_pannel.anchor.setTo(0.5,0.5);
        question_green_pannel.alpha = 0;
        
        question_blue_pannel1 = game.add.sprite(questionpositionX+150,questionpositionY,'blue_panel');
        question_blue_pannel1.anchor.setTo(0.5,0.5);
        question_blue_pannel1.alpha = 0;
        
        question_blue_pannel2 = game.add.sprite(questionpositionX-150,questionpositionY,'blue_panel');
        question_blue_pannel2.anchor.setTo(0.5,0.5);
        question_blue_pannel2.alpha = 0;
        
        question_pannel1_create_fx = game.add.sprite(questionpositionX,questionpositionY-150,'fishingpage_sheet005');
        question_pannel1_create_fx.anchor.setTo(0.5,0.5);
        question_pannel1_create_fx.alpha = 0;
        question_pannel1_create_fx_animation = question_pannel1_create_fx.animations.add("question_pannel1_create_fx",Phaser.Animation.generateFrameNames('question_pannel_create_fx',1,9, '.png', 4), 10, true);
        
        question_pannel2_create_fx = game.add.sprite(questionpositionX+150,questionpositionY,'fishingpage_sheet005');
        question_pannel2_create_fx.anchor.setTo(0.5,0.5);
        question_pannel2_create_fx.alpha = 0;
        question_pannel2_create_fx_animation = question_pannel2_create_fx.animations.add("question_pannel2_create_fx",Phaser.Animation.generateFrameNames('question_pannel_create_fx',1,9, '.png', 4), 10, true);

        question_pannel3_create_fx = game.add.sprite(questionpositionX-150,questionpositionY,'fishingpage_sheet005');
        question_pannel3_create_fx.anchor.setTo(0.5,0.5);
        question_pannel3_create_fx.alpha = 0;
        question_pannel3_create_fx_animation = question_pannel3_create_fx.animations.add("question_pannel3_create_fx",Phaser.Animation.generateFrameNames('question_pannel_create_fx',1,9, '.png', 4), 10, true);
        //FX-------------------------------------------------------------------------------------------------------------------------------
        blue_FX_sheet = game.add.sprite(questionpositionX+150,questionpositionY,'fishingpage_sheet005');
        blue_FX_sheet.anchor.setTo(0.5,0.5);
        blue_FX_sheet.animations.add("blue_FX",Phaser.Animation.generateFrameNames('blue_FX_sheet',0,8,'.png', 4), 10, true);
        blue_FX_sheet.alpha = 0;
        
        green_FX_sheet = game.add.sprite(questionpositionX,questionpositionY-150,'fishingpage_sheet005');
        green_FX_sheet.anchor.setTo(0.5,0.5);
        green_FX_sheet.animations.add("green_FX",Phaser.Animation.generateFrameNames('blue_FX_sheet',0,8, '.png', 4), 10, true);
        green_FX_sheet.alpha = 0;

        red_FX_sheet1 = game.add.sprite(questionpositionX,questionpositionY-150,'fishingpage_sheet005');
        red_FX_sheet1.anchor.setTo(0.5,0.5);
        red_FX_sheet1.animations.add("red_FX1",Phaser.Animation.generateFrameNames('redlight_FX',1,8, '.png', 4), 10, true);
        red_FX_sheet1.alpha = 0;

        red_FX_sheet2 = game.add.sprite(questionpositionX+150,questionpositionY,'fishingpage_sheet005');
        red_FX_sheet2.anchor.setTo(0.5,0.5);
        red_FX_sheet2.animations.add("red_FX2",Phaser.Animation.generateFrameNames('redlight_FX',1,8, '.png', 4), 10, true);
        red_FX_sheet2.alpha = 0;
        
        red_FX_sheet3 = game.add.sprite(questionpositionX-150,questionpositionY,'fishingpage_sheet005');
        red_FX_sheet3.anchor.setTo(0.5,0.5);
        red_FX_sheet3.animations.add("red_FX3",Phaser.Animation.generateFrameNames('redlight_FX',1,8, '.png', 4), 10, true);
        red_FX_sheet3.alpha = 0;
        
        energy_transfer_sheet = game.add.sprite(questionpositionX,questionpositionY-150,'fishingpage_sheet005');
        energy_transfer_sheet.animations.add("energy_transfer_sheet_dynamic",Phaser.Animation.generateFrameNames('energy_transfer_',0,7, '.png', 5), 10, true);
        energy_transfer_sheet.anchor.setTo(0.5,0.5);
        energy_transfer_sheet.alpha = 0;
        
        energy_transfer_sheet1 = game.add.sprite(questionpositionX,questionpositionY-150,'fishingpage_sheet005');
        energy_transfer_sheet1.animations.add("energy_transfer_sheet1_dynamic",Phaser.Animation.generateFrameNames('energy_transfer_',0,7, '.png', 5), 10, true);
        energy_transfer_sheet1.anchor.setTo(0.5,0.5);
        energy_transfer_sheet1.alpha = 0;
        
        energy_transfer_sheet2 = game.add.sprite(questionpositionX+150,questionpositionY,'fishingpage_sheet005');
        energy_transfer_sheet2.animations.add("energy_transfer_sheet2_dynamic",Phaser.Animation.generateFrameNames('energy_transfer_',0,7, '.png', 5), 10, true);
        energy_transfer_sheet2.anchor.setTo(0.5,0.5);
        energy_transfer_sheet2.alpha = 0;
        
        //-------------------------------------------------------------------------------------------------------------------
        scorebar_wrong_fx_sheet = game.add.sprite(scorebarX+10,110, "scorebar_fx_atlas");
        scorebar_wrong_fx_sheet.animations.add("scorebar_wrong_fx_dynamic",Phaser.Animation.generateFrameNames('scorebar_wrong_fx',0,13, '.png', 4), 10, true);
        scorebar_wrong_fx_sheet.anchor.setTo(0.5,0);
        scorebar_wrong_fx_sheet.alpha = 0;
        
        scorebar_right_fx_sheet = game.add.sprite(scorebarX+10,110, "scorebar_fx_atlas");
        scorebar_right_fx_sheet.animations.add("scorebar_right_fx_dynamic",Phaser.Animation.generateFrameNames('scorebar_right_fx',0,11, '.png', 4), 10, true);
        scorebar_right_fx_sheet.anchor.setTo(0.5,0);
        scorebar_right_fx_sheet.alpha = 0;
        */
        //btn---------------------------------------------------------------------------------------------------------------------
        DoorBtn = game.add.button(830, 422, 'DoorBtn', GoInsideHouse, this, 'DoorBtnHover.png','DoorBtn.png'); 
        DoorBtn.onInputOver.add(DoorBtnOver, this);
        DoorBtn.onInputOut.add(DoorBtnOut, this);
        DoorBtn.inputEnabled = false;
        DoorBtn.alpha = 1;

        HomeMailBtn = game.add.button(1246, 320, 'HomeMailBtn', OpenMail, this, 'HomeMailHover.png','HomeMail.png');
        HomeMailBtn.onInputOver.add(HomeMailOver, this);
        HomeMailBtn.onInputOut.add(HomeMailOut, this);
        HomeMailBtn.inputEnabled = false;
        HomeMailBtn.alpha = 1;
        
        SettingBtnBG = game.add.sprite(1506, 200, 'SettingBtnBG');
        SettingBtnBG.anchor.setTo(0.5);
        
        SettingBtnSheet = game.add.button(1469, 152, 'SettingBtnSheet', OpenSetting, this, 'SettingBtnHover.png','SettingBtn.png');
        SettingBtnSheet.onInputOver.add(SettingBtnOver, this);
        SettingBtnSheet.onInputOut.add(SettingBtnOut, this);
        SettingBtnSheet.inputEnabled = false;
        SettingBtnSheet.alpha = 1;
        /*
        RoadBtn = game.add.button(300, 800, 'RoadHover', GoToFishingMenu);
        RoadBtn.onInputOver.add(RoadBtnOver, this);
        RoadBtn.onInputOut.add(RoadBtnOut, this);
        RoadBtn.inputEnabled = false;
        RoadBtn.alpha = 0;
        */
        //Text--------------------------------------------------------------------------------------------------------------------
        FoxHomeText = game.add.sprite(centerX,0,'FoxHomeText');
        FoxHomeText.anchor.setTo(0.5,0);
        
        HomeMailText = game.add.sprite(centerX,0,'HomeMailText');
        HomeMailText.anchor.setTo(0.5,0);
        
        GameSettingText = game.add.sprite(centerX,0,'GameSettingText');
        GameSettingText.anchor.setTo(0.5,0);
        
        HomeTreeText = game.add.sprite(centerX,0,'HomeTreeText');
        HomeTreeText.anchor.setTo(0.5,0);

        FoxGoFishingText = game.add.sprite(centerX,0,'FoxGoFishingText');
        FoxGoFishingText.anchor.setTo(0.5,0);

        
        HomeTextmask = game.add.graphics();
        HomeTextmask.beginFill(0xffffff);
        HomeTextmask.drawRect(0,150,1600,600);
        
        FoxHomeText.mask = HomeTextmask;
        HomeMailText.mask = HomeTextmask;
        GameSettingText.mask = HomeTextmask;
        HomeTreeText.mask = HomeTextmask;
        FoxGoFishingText.mask = HomeTextmask;
        
        //add 0~10 answer number image------------------------------------------------------------------------------------------------    
        /*
        for(var i = 1;i<11;i++){
      
            answer_number0[i] = game.add.sprite(questionpositionX-150, buttonpositionY,'fishingpage_sheet001',i+'.png');    
            answer_number0[i].scale.setTo(0.8,0.8); 
            answer_number0[i].anchor.setTo(0.5,0.5);   
            answer_number0[i].alpha = 0;     
                
            answer_number1[i] = game.add.sprite(questionpositionX, buttonpositionY,'fishingpage_sheet001',i+'.png');    
            answer_number1[i].scale.setTo(0.8,0.8); 
            answer_number1[i].anchor.setTo(0.5,0.5);   
            answer_number1[i].alpha = 0; 
                
            answer_number2[i] = game.add.sprite(questionpositionX+150, buttonpositionY,'fishingpage_sheet001',i+'.png');    
            answer_number2[i].scale.setTo(0.8,0.8); 
            answer_number2[i].anchor.setTo(0.5,0.5);   
            answer_number2[i].alpha = 0; 
   
        }    
        answer_number0[0] = game.add.sprite(questionpositionX-150, buttonpositionY,'fishingpage_sheet001','0.png');    
        answer_number0[0].scale.setTo(0.8,0.8); 
        answer_number0[0].anchor.setTo(0.5,0.5);   
        answer_number0[0].alpha = 0;     
                
        answer_number1[0] =  game.add.sprite(questionpositionX, buttonpositionY,'fishingpage_sheet001','0.png');    
        answer_number1[0].scale.setTo(0.8,0.8); 
        answer_number1[0].anchor.setTo(0.5,0.5);   
        answer_number1[0].alpha = 0; 
                
        answer_number2[0] =  game.add.sprite(questionpositionX+150, buttonpositionY,'fishingpage_sheet001','0.png');    
        answer_number2[0].scale.setTo(0.8,0.8); 
        answer_number2[0].anchor.setTo(0.5,0.5);   
        answer_number2[0].alpha = 0;  
        //add question text image--------------------------------------------------------------------------------------------------
        for(var i = 0;i<=10;i++){
            question_text0[i] =  game.add.sprite(questionpositionX,questionpositionY-150,'fishingpage_sheet001','Q'+i+'_green.png');    
            question_text0[i].anchor.setTo(0.5,0.5);
            question_text0[i].scale.setTo(0.8,0.8); 
            question_text0[i].alpha = 0;     
                
            question_text1[i] =  game.add.sprite(questionpositionX+150,questionpositionY,'fishingpage_sheet001','Q'+i+'_blue.png');    
            question_text1[i].anchor.setTo(0.5,0.5);   
            question_text1[i].scale.setTo(0.8,0.8);
            question_text1[i].alpha = 0; 
                
            question_text2[i] =  game.add.sprite(questionpositionX-150,questionpositionY,'fishingpage_sheet001','Q'+i+'_blue.png');    
            question_text2[i].anchor.setTo(0.5,0.5);
            question_text2[i].scale.setTo(0.8,0.8);
            question_text2[i].alpha = 0; 
        }
        //add question mark image-------------------------------------------------------------------------------------------------- 
        question_mark0 =  game.add.sprite(questionpositionX,questionpositionY-150,'fishingpage_sheet001','Qmark_green.png');    
        question_mark0.anchor.setTo(0.5,0.5);   
        question_mark0.alpha = 0;     
                
        question_mark1 =  game.add.sprite(questionpositionX+150,questionpositionY,'fishingpage_sheet001','Qmark_blue.png');    
        question_mark1.anchor.setTo(0.5,0.5);   
        question_mark1.alpha = 0;         
        //tutorialPage----------------------------------------------------------------------------------------------------

        tutorial_number_2 = game.add.sprite(questionpositionX-150,questionpositionY,'fishingpage_sheet001','2_tutorial.png');    
        tutorial_number_2.scale.setTo(0.8,0.8); 
        tutorial_number_2.anchor.setTo(0.5,0.5);   
        tutorial_number_2.alpha = 0; 
        
        tutorial_number_4 = game.add.sprite(questionpositionX+150,questionpositionY,'fishingpage_sheet001','4_tutorial.png');    
        tutorial_number_4.scale.setTo(0.8,0.8); 
        tutorial_number_4.anchor.setTo(0.5,0.5);   
        tutorial_number_4.alpha = 0; 
        
        tutorial2_number_2 = game.add.sprite(questionpositionX-150,questionpositionY,'fishingpage_sheet001','2_tutorial.png');    
        tutorial2_number_2.scale.setTo(0.8,0.8); 
        tutorial2_number_2.anchor.setTo(0.5,0.5);   
        tutorial2_number_2.alpha = 0;
        
        tutorial2_number_9 = game.add.sprite(questionpositionX,questionpositionY-150,'fishingpage_sheet001','9_tutorial.png');    
        tutorial2_number_9.scale.setTo(0.8,0.8); 
        tutorial2_number_9.anchor.setTo(0.5,0.5);   
        tutorial2_number_9.alpha = 0;
        
        plus_tutorial = game.add.sprite(questionpositionX,questionpositionY,'fishingpage_sheet001','plus.png');    
        plus_tutorial.scale.setTo(0.8,0.8); 
        plus_tutorial.anchor.setTo(0.5,0.5);   
        plus_tutorial.alpha = 0;
        
        minus_tutorial = game.add.sprite(questionpositionX-500,questionpositionY,'fishingpage_sheet001','minus.png');    
        minus_tutorial.scale.setTo(0.4,0.4); 
        minus_tutorial.anchor.setTo(0.5,0.5);   
        minus_tutorial.alpha = 0;
        
        Qmark_tutorial = game.add.sprite(questionpositionX,questionpositionY-150,'fishingpage_sheet001','Qmark_tutorial.png');    
        Qmark_tutorial.anchor.setTo(0.5,0.5);   
        Qmark_tutorial.alpha = 0;    
        Qmark_tutorial2 = game.add.sprite(questionpositionX+150,questionpositionY,'fishingpage_sheet001','Qmark_tutorial.png');    
        Qmark_tutorial2.anchor.setTo(0.5,0.5);   
        Qmark_tutorial2.alpha = 0; 
        equal_mark_tutorial = game.add.sprite(questionpositionX-390,questionpositionY,'fishingpage_sheet001','equal_mark_tutorial.png');  
        equal_mark_tutorial.anchor.setTo(0.5,0.5);   
        equal_mark_tutorial.alpha = 0;
        
        var textpositionX = 200,
            textpositionY = 250;
        
        var foxpositionX = 150,
            foxpositionY = 500;
        
        finger_pointer = game.add.sprite(foxpositionX+250, foxpositionY-50,'fishingpage_sheet001',"finger_pointer.png");
        finger_pointer.alpha = 0;
        finger_pointer.anchor.setTo(0.5,0.5);
        
        get_fish_tutorial = game.add.sprite(foxpositionX+500, foxpositionY-150,'fishingpage_sheet001',"get_fish_tutorial.png");
        get_fish_tutorial.anchor.setTo(0.5,0.5);
        get_fish_tutorial.scale.setTo(0,0);

        add_mode_text2 = game.add.sprite(questionpositionX-440,buttonpositionY-120 ,'fishingpage_sheet001',"add_mode_text2.png");
        add_mode_text2.alpha = 0;
        add_mode_text2.anchor.setTo(0.5,0.5);
        add_mode_text2.scale.setTo(0.5,0.5);

        minus_mode_text2 = game.add.sprite(questionpositionX-440,buttonpositionY-120 ,'fishingpage_sheet001',"minus_mode_text2.png");
        minus_mode_text2.alpha = 0;
        minus_mode_text2.anchor.setTo(0.5,0.5);
        minus_mode_text2.scale.setTo(0.5,0.5);
        */

        
        /*
        //fx---------------------------------------------------------------------------------------------------------------------
        correct_fx = game.add.sprite(0,0,'correct_fx');
        correct_fx.alpha = 0;

        tutorial_frame_sheet = game.add.sprite(questionpositionX-440,questionpositionY+40,'fishingpage_sheet005');
        tutorial_frame_sheet.anchor.setTo(0.5,0.5);
        tutorial_frame_sheet.scale.setTo(0.9,0.9);
        tutorial_frame_sheet.animations.add("tutorial_frame_sheet_dyn",Phaser.Animation.generateFrameNames('tutorial_frame_',1,10,'.png',5), 10, true);
        tutorial_frame_sheet.alpha = 0;        
        //fx-------------------------------------------------------------------------------------------------------------------------
        for(var i = 0;i<=2;i++){
            anwser_pannel_light[i] = game.add.sprite(questionpositionX+150*(i-1), buttonpositionY,'fishingpage_sheet001','anwser_pannel_light.png');
            anwser_pannel_light[i].anchor.setTo(0.5,0.5);   
            anwser_pannel_light[i].alpha = 0;  

        }        
        */
        //FoxDynamic----------------------------------------------------------------------------------------------------------------------
        
        FoxStanding = game.add.sprite(0,100,'FoxStanding');
        FoxStandingAnimate = FoxStanding.animations.add("FoxStanding",Phaser.Animation.generateFrameNames('FoxStanding_',0,11,'.png',5),10,true);

        FoxStanding.alpha = 0;
        
        //FoxTurnLeft--------------------------------------------------------------------------------------------------------------
        FoxTurnLeftStanding = game.add.sprite(0,100,'FoxStanding');
        FoxTurnLeftStandingAnimate = FoxTurnLeftStanding.animations.add("FoxTurnLeftStanding",Phaser.Animation.generateFrameNames('FoxTurnLeftStanding_',0,11,'.png',5),10,true);
        
        FoxTurnLeftStanding.alpha = 0;

        FoxTurnLeftWalking = game.add.sprite(0,100,'FoxStanding');
        FoxTurnLeftWalkingAnimate = FoxTurnLeftWalking.animations.add("FoxTurnLeftWalking",Phaser.Animation.generateFrameNames('FoxTurnLeftWalking_',12,30,'.png',5),10,true);      
        FoxTurnLeftWalking.alpha = 0;       
        
        //FoxTurnRight--------------------------------------------------------------------------------------------------------------
        FoxTurnRightStanding = game.add.sprite(0,100,'FoxStanding');
        FoxTurnRightStandingAnimate = FoxTurnRightStanding.animations.add("FoxTurnRightStanding",Phaser.Animation.generateFrameNames('FoxTurnRightStanding_',0,11,'.png',5),10,true);
             
        FoxTurnRightStanding.alpha = 0;
 
        FoxTurnRightWalking = game.add.sprite(0,100,'FoxStanding');
        FoxTurnRightWalkingAnimate = FoxTurnRightWalking.animations.add("FoxTurnRightWalking",Phaser.Animation.generateFrameNames('FoxTurnRightWalking_',12,30,'.png',5),10,true);
     
        FoxTurnRightWalking.alpha = 0;        
        
        
        FoxStandingHover = game.add.sprite(535,600,'FoxStanding','FoxStandingHover.jpg');
        FoxStandingHover.events.onInputDown.add(FoxStandingDown, this);
        FoxStandingHover.events.onInputOver.add(FoxStandingOver, this);
        FoxStandingHover.events.onInputOut.add(FoxStandingOut, this);
        FoxStandingHover.inputEnabled = false;
        FoxStandingHover.alpha = 0;
        
        FoxDynamic();        
        
        
        
        //animation----------------------------------------------------------------------------------------------------------------------
        
        HomeTreeFrame1 = game.add.button(1,159, 'HomeTreeFrame1', HomePageTree);
        HomeTreeFrame1.onInputOver.add(HomeTreeBtnOver, this);
        HomeTreeFrame1.onInputOut.add(HomeTreeBtnOut, this);
        HomeTreeFrame1.onInputUp.add(HomeTreeBtnUp, this);
        HomeTreeFrame1.inputEnabled = false; 
        HomeTreeFrame1.alpha = 1;
        
        HomeTreeAnimate = game.add.sprite(0,100,'HomePageTreeSheet');
        HomeTreeAnimate.animations.add("HomeTreeDynamic",Phaser.Animation.generateFrameNames('HomeTree_',0,14,'.png',5),10,true);
        HomeTreeAnimate.alpha = 0;
        
        grass = game.add.sprite(0,100,'grass');
        
        //ArrowSheet------------------------------------------------------------------------------------------------------------------
        ArrowSheet = game.add.sprite(0,100,'ArrowSheet');
        ArrowSheet.animations.add("ArrowSheetDynamic",Phaser.Animation.generateFrameNames('ArrowSheet_',0,8,'.png',5),10,true);
        ArrowSheet.alpha = 0;
        

        //sound-------------------------------------------------------------------------------------------------------------------
        rightFX = game.add.audio('rightFX');
        wrongFX = game.add.audio('wrongFX');
        successFX = game.add.audio('successFX');
        startFX = game.add.audio('startFX');
        failureFX = game.add.audio('failureFX');
        clickFX = game.add.audio('clickFX');
        add_energyFX = game.add.audio('add_energyFX');            
        alertFX = game.add.audio('alertFX');        
        
        blackBG_opening = game.add.sprite(0,0,'blackBG');
        blackBG_opening.alpha = 1;
        BlackOpeningTween = game.add.tween(blackBG_opening).to({alpha:0},2000,'Linear',true,0);           
        BlackOpeningTween.onComplete.add(function () {	
            DoorBtn.inputEnabled = true;
            HomeMailBtn.inputEnabled = true;
            SettingBtnSheet.inputEnabled = true;
            //HomeTreeFrame1.inputEnabled = true; 
            FoxStandingHover.inputEnabled = true;            
            /*
            if(FromInside == true){
                DoorBtn.inputEnabled = true;
                HomeMailBtn.inputEnabled = true;
                SettingBtnSheet.inputEnabled = true;
                HomeTreeFrame1.inputEnabled = true; 
                RoadBtn.inputEnabled = true;
            }
            */
        }, this);

    },     
    update: function() {}    
}
function FoxStandingDown(){
    BlackClosingTween1 = game.add.tween(blackBG_opening).to({alpha:1},1000,'Quad.easeOut',true,0); 
    BlackClosingTween1.onComplete.add(function () {	
        game.state.start('LevelMap',true,true);
    }, this); 
}
function FoxStandingOver(){
    ArrowSheet.x = FoxStanding.x -232;
    ArrowSheet.y = 120;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;
    
    game.add.tween(FoxGoFishingText).to({y:150},500,'Quad.easeOut',true,0); 
    BtnOver.play();

}
function FoxStandingOut(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;    

    game.add.tween(FoxGoFishingText).to({y:0},500,'Quad.easeOut',true,0); 

}

function HomePageTree(){
    
}
function HomeTreeBtnUp(){
     
    HomeTreeFrame1.alpha = 0;
    HomeTreeAnimate.alpha = 1;
    HomeTreeAnimation = HomeTreeAnimate.animations.play("HomeTreeDynamic",15,false);  
    HomeTreeAnimation.onComplete.add(function () {	
        HomeTreeAnimate.alpha = 0;
        HomeTreeFrame1.alpha = 1;
    }, this);
}
function HomeTreeBtnOver(){
    ArrowSheet.x = -600;
    ArrowSheet.y = -160;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;
    game.add.tween(HomeTreeText).to({y:150},500,'Quad.easeOut',true,0); 
    BtnOver.play();
}
function HomeTreeBtnOut(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;
    game.add.tween(HomeTreeText).to({y:0},500,'Quad.easeOut',true,0); 
}

function OpenSetting(){
    
}
function SettingBtnOver(){
    
    
    SettingBtnSheet.alpha = 0.8;
    
    game.add.tween(GameSettingText).to({y:150},500,'Quad.easeOut',true,0); 
    BtnOver.play();
}
function SettingBtnOut(){
    
    game.add.tween(GameSettingText).to({y:0},500,'Quad.easeOut',true,0); 
    
}

function OpenMail(){
    
}
function HomeMailOver(){
    ArrowSheet.x = 625;
    ArrowSheet.y = -100;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;    
    
    HomeMailBtn.alpha = 1;
    //FoxHomeText.y = 0;
    game.add.tween(HomeMailBtn).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    game.add.tween(HomeMailText).to({y:150},500,'Quad.easeOut',true,0); 
    BtnOver.play();
        
}
function HomeMailOut(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;
    
    game.add.tween(HomeMailText).to({y:0},500,'Quad.easeOut',true,0); 
    
}

function DoorBtnOver(){
    ArrowSheet.x = 95;
    ArrowSheet.y = -50;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;    
    
    DoorBtn.alpha = 1;
    //FoxHomeText.y = 0;
    game.add.tween(DoorBtn).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    game.add.tween(FoxHomeText).to({y:150},500,'Quad.easeOut',true,0); 
    BtnOver.play();
    
}
function DoorBtnOut(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;
    
    game.add.tween(FoxHomeText).to({y:0},500,'Quad.easeOut',true,0);
}
function GoInsideHouse(){
    BlackClosingTween = game.add.tween(blackBG_opening).to({alpha:1},1000,'Quad.easeOut',true,0); 
    BlackClosingTween.onComplete.add(function () {	
        game.state.start('HomeInsidePage',true);
    }, this); 
}
/*

function skip_tutorial(){
    game.add.tween(button_start_sheet).to({alpha:0},500,'Linear',true);
    game.add.tween(BG_tutorial).to({alpha:0},500,'Linear',true);
    button_tutorial_sheet.inputEnabled = false;
    game.add.tween(button_tutorial_sheet).to({alpha:0},500,'Linear',true);
    button_start_sheet.inputEnabled = false;    
    fishingpage_center_tween = game.add.tween(fishingpage_center).to({alpha:0},500,'Linear',true);
    
    
    first_try = false;
    
    fishingrod_tween.resume();
    foxbody_tween.resume();
    foxtail_tween.resume();
    
    game.add.tween(foxtail).to({alpha:1},500,'Linear',true);
    game.add.tween(foxbody).to({alpha:1},500,'Linear',true);
    game.add.tween(fishingrod).to({alpha:1},500,'Linear',true);
    
    
    fishingpage_center_tween.onComplete.add(completed_fishingpage_center_tween, this);    
}

function completed_fishingpage_center_tween(){
    game.state.start('fishingLevel');
}
*/

function FoxDynamic(){
    
    console.log(FoxDynamicRand);
    if( FoxDynamicRand <= 2 ){
        FoxStanding.animations.play("FoxStanding",15,false);
        FoxStanding.alpha = 1;
        FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this); ;
        
    }
    if( FoxDynamicRand <= 5 && FoxDynamicRand >= 3 ){
        FoxTurnLeftStanding.animations.play("FoxTurnLeftStanding",15,false);
        FoxTurnLeftStanding.alpha = 1;
        FoxTurnLeftStandingAnimate.onComplete.add(FoxTurnLeftStandingAnimateComplete, this);
        
        //console.log(FoxDynamicRand+'TurnLeft');
    }
    if( FoxDynamicRand <= 8 && FoxDynamicRand >= 6 ){
        FoxTurnRightStanding.animations.play("FoxTurnRightStanding",15,false);
        FoxTurnRightStanding.alpha = 1;
        FoxTurnRightStandingAnimate.onComplete.add(FoxTurnRightStandingAnimateComplete, this);       
        //console.log(FoxDynamicRand+'TurnRight');
    }
    if( FoxDynamicRand == 9 ){
        FoxTurnRightWalking.animations.play("FoxTurnRightWalking",15,false); 
        FoxTurnRightWalking.alpha = 1;
        FoxTurnRightWalkingAnimate.onComplete.add(FoxTurnRightWalkingAnimateComplete, this);
    }
    if( FoxDynamicRand == 10 ){
        FoxTurnLeftWalking.animations.play("FoxTurnLeftWalking",15,false); 
        FoxTurnLeftWalking.alpha = 1;
        FoxTurnLeftWalkingAnimate.onComplete.add(FoxTurnLeftWalkingAnimateComplete, this);
        
    }
}
function FoxStandingAnimateComplete(){
    FoxStandingHover.inputEnabled = true;
    FoxDynamicRand = Math.floor(Math.random() * 21);
    if( FoxDynamicRand <= 16 ){
        FoxStanding.animations.play("FoxStanding",15,false);
        FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);
        
    }
    if( FoxDynamicRand == 17 ){
        FoxTurnLeftStanding.animations.play("FoxTurnLeftStanding",15,false);
        FoxTurnLeftStanding.alpha = 1;
        FoxTurnLeftStandingAnimate.onComplete.add(FoxTurnLeftStandingAnimateComplete, this);

        FoxStanding.alpha = 0;
        //console.log(FoxDynamicRand+'TurnLeft');
    }
    if( FoxDynamicRand == 18 ){
        FoxTurnRightStanding.animations.play("FoxTurnRightStanding",15,false);
        FoxTurnRightStanding.alpha = 1;
        FoxTurnRightStandingAnimate.onComplete.add(FoxTurnRightStandingAnimateComplete, this);       
        
        FoxStanding.alpha = 0;
        //console.log(FoxDynamicRand+'TurnRight');
    }
    
    if( FoxDynamicRand == 19 ){
        if( FoxStanding.x == -200 ){
            FoxStanding.animations.play("FoxStanding",15,false);
            FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);        
        }else{
            FoxTurnRightWalking.animations.play("FoxTurnRightWalking",15,false); 
            FoxTurnRightWalking.alpha = 1;
            FoxTurnRightWalkingAnimate.onComplete.add(FoxTurnRightWalkingAnimateComplete, this);
    
            FoxStanding.alpha = 0;           
        }

    }
    if( FoxDynamicRand == 20 ){
        if( FoxStanding.x == 200 ){
            FoxStanding.animations.play("FoxStanding",15,false);
            FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);        
        }else{
            FoxTurnLeftWalking.animations.play("FoxTurnLeftWalking",15,false); 
            FoxTurnLeftWalking.alpha = 1;
            FoxTurnLeftWalkingAnimate.onComplete.add(FoxTurnLeftWalkingAnimateComplete, this);
        
            FoxStanding.alpha = 0;            
        }        

    } 
    
}
function FoxTurnLeftStandingAnimateComplete(){
    FoxStandingHover.inputEnabled = true;
    if( FoxStanding.x == 0 || FoxStanding.x == -200 ){
        FoxDynamicRand = Math.floor(Math.random() * 21);   
    }else{
        FoxDynamicRand = Math.floor(Math.random() * 20);
    }   
    
    if( FoxDynamicRand <= 18 ){
        FoxTurnLeftStanding.animations.play("FoxTurnLeftStanding",15,false);
        FoxTurnLeftStandingAnimate.onComplete.add(FoxTurnLeftStandingAnimateComplete, this); ;
        
    }
    if( FoxDynamicRand == 19 ){
        FoxStanding.animations.play("FoxStanding",15,false);
        FoxStanding.alpha = 1;
        FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);

        FoxTurnLeftStanding.alpha = 0;
        //console.log(FoxDynamicRand+'TurnLeft');
    }

    if( FoxDynamicRand == 20 ){
        FoxTurnLeftWalking.animations.play("FoxTurnLeftWalking",15,false); 
        FoxTurnLeftWalking.alpha = 1;
        FoxTurnLeftWalkingAnimate.onComplete.add(FoxTurnLeftWalkingAnimateComplete, this);
        
        FoxTurnLeftStanding.alpha = 0;
    }    
}
function FoxTurnRightStandingAnimateComplete(){
    FoxStandingHover.inputEnabled = true;
    if( FoxStanding.x == 0 || FoxStanding.x == 200 ){
        FoxDynamicRand = Math.floor(Math.random() * 21);   
    }else{
        FoxDynamicRand = Math.floor(Math.random() * 20);
    }   
    
    if( FoxDynamicRand <= 18 ){
        FoxTurnRightStanding.animations.play("FoxTurnRightStanding",15,false);
        FoxTurnRightStandingAnimate.onComplete.add(FoxTurnRightStandingAnimateComplete, this); ;
        
    }
    if( FoxDynamicRand == 19 ){
        FoxStanding.animations.play("FoxStanding",15,false);
        FoxStanding.alpha = 1;
        FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);

        FoxTurnRightStanding.alpha = 0;
        //console.log(FoxDynamicRand+'TurnLeft');
    }

    if( FoxDynamicRand == 20 ){
        FoxTurnRightWalking.animations.play("FoxTurnRightWalking",15,false); 
        FoxTurnRightWalking.alpha = 1;
        FoxTurnRightWalkingAnimate.onComplete.add(FoxTurnRightWalkingAnimateComplete, this);
    
        FoxTurnRightStanding.alpha = 0;
    }

}
function FoxTurnRightWalkingAnimateComplete(){
    FoxStandingHover.inputEnabled = false;
    FoxTurnLeftStanding.x -= 200;
    FoxTurnRightStanding.x -= 200;
    FoxStanding.x -= 200;
    FoxTurnRightWalking.x -= 200;
    FoxTurnLeftWalking.x -= 200;
    FoxStandingHover.x -= 200;

    
    if( FoxStanding.x == 0){
        FoxDynamicRand = Math.floor(Math.random() * 21);   
    }else{
        FoxDynamicRand = Math.floor(Math.random() * 20);
    }    
    
    FoxDynamicRand = Math.floor(Math.random() * 21);
    if( FoxDynamicRand <= 18 ){
        FoxTurnRightStanding.animations.play("FoxTurnRightStanding",15,false);
        FoxTurnRightStandingAnimate.onComplete.add(FoxTurnRightStandingAnimateComplete, this);
        FoxTurnRightStanding.alpha = 1; 
        FoxTurnRightWalking.alpha = 0;
        
    }
    if( FoxDynamicRand == 19 ){
        FoxStanding.animations.play("FoxStanding",15,false);
        FoxStanding.alpha = 1;
        FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);

        FoxTurnRightWalking.alpha = 0;
        //console.log(FoxDynamicRand+'TurnLeft');
    }

    if( FoxDynamicRand == 20 ){
        FoxTurnRightWalking.animations.play("FoxTurnRightWalking",15,false); 
        FoxTurnRightWalkingAnimate.onComplete.add(FoxTurnRightWalkingAnimateComplete, this);        

    }     
}
function FoxTurnLeftWalkingAnimateComplete(){
    FoxStandingHover.inputEnabled = false;
    FoxTurnLeftStanding.x += 200;
    FoxTurnRightStanding.x += 200;
    FoxStanding.x += 200;
    FoxTurnRightWalking.x += 200;
    FoxTurnLeftWalking.x += 200;
    FoxStandingHover.x += 200;

    
    if( FoxStanding.x == 0){
        FoxDynamicRand = Math.floor(Math.random() * 21);   
    }else{
        FoxDynamicRand = Math.floor(Math.random() * 20);
    }
    
    
    if( FoxDynamicRand <= 18 ){
        FoxTurnLeftStanding.animations.play("FoxTurnLeftStanding",15,false);
        FoxTurnLeftStandingAnimate.onComplete.add(FoxTurnLeftStandingAnimateComplete, this);
        FoxTurnLeftStanding.alpha = 1; 
        FoxTurnLeftWalking.alpha = 0;
        
    }
    if( FoxDynamicRand == 19 ){
        FoxStanding.animations.play("FoxStanding",15,false);
        FoxStanding.alpha = 1;
        FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);

        FoxTurnLeftWalking.alpha = 0;
        //console.log(FoxDynamicRand+'TurnLeft');
    }
=
    if( FoxDynamicRand == 20 ){
        FoxTurnLeftWalking.animations.play("FoxTurnLeftWalking",15,false); 
        
        FoxTurnLeftWalkingAnimate.onComplete.add(FoxTurnLeftWalkingAnimateComplete, this);        
    }    
}