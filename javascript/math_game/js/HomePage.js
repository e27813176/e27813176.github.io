var index = new Array();
var questionindex = new Array(); 
var answercount;

var blackBG_open_fishing,blackBG_close_fishing;

var scorebar,scorebarX,scorebarY,scorebarcompleted,mask;

var foxtail_time,t2;

var foxpulling,fishingrodpullingsheet;

var playing_status,complete_status;
var waitingclick;

var anwser_pannel_light = new Array();


var answerpannel_tutorial= new Array();

var game_fishing_music,rightFX,wrongFX,successFX,alertFX,startFX,failureFX,fishingBG;

var buttonpositionY;

var first_try = true;

var show_up_time,waiting_time;

var tween_continue_text,
    foxbody_tween,foxtail_tween,
    fishingrod_tween,
    scorebar_full_tween;

var foxtail_animation,
    question_green_pannel_animation,
    question_blue_pannel1_animation,
    question_blue_pannel2_animation,
    foxgetfishingsheet_animation,
    get_stone_fish_animation,
    get_light_blue_fish_animation,
    foxgetfishing_purple_sheet_animation,
    foxgetfishing_yellow_sheet_animation,
    fishsheet_animation,
    fish_blue_light_animation,
    fish_sheet_purple_animation,
    fish_sheet_light_blue_animation,
    fish_sheet_grey_animation,
    fish_sheet_yellow_animation,
    fish_sheet_dark_blue_animation,
    fish_sheet_red_animation,
    fishbox_sheet_highlight_animation,
    mark_tween,
    mark_showing_tween;

var mode;

demo.HomePage = function() {};
demo.HomePage.prototype = {
    init: function(){
       
        mode = 0;         
        answercount = 0;
        scorebarX = 1450;
        scorebarY = 500;
        foxtail_time = 200;
        buttonpositionY = 500;
        playing_status = false;
        waitingclick = false;
        complete_status = false;

    },
    create: function() {
        //define backgroung
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.time.advancedTiming = true;

        //BG---------------------------------------------------------------------------------------------------------
        game.add.sprite(0,0,'HomePageBG');
        sunlight1 = game.add.sprite(200,0,'fishingpage_sheet003','sunlight1.png');
        sunlight2 = game.add.sprite(0,0,'fishingpage_sheet003','sunlight2.png');
        game.add.tween(sunlight1).to({alpha:0.2},1000,'Quad.easeInOut',true,0,false,true).loop(true); 
        game.add.tween(sunlight2).to({alpha:0.2},1000,'Quad.easeInOut',true,1000,false,true).loop(true); 

        
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
        //----------------------------------------------------------------------------------------------------
        var foxpositionX = 150,
            foxpositionY = 500;
        
        fishingrod = game.add.sprite(foxpositionX+275, foxpositionY+400,'fishingpage_sheet001','fishingrod.png');
        fishingrod.anchor.setTo(-0.1,1.2);
        fishingrod.alpha = 0;
        fishingrod_tween = game.add.tween(fishingrod).to({angle:'-1'},1000,'Quad.easeInOut',true,0,false,true).loop(true);   
        fishingrod_tween.pause();
        //------------------------------------------------------------------------------------------------------------------------
        
        foxbody = game.add.sprite(foxpositionX+280, foxpositionY+290, 'fishingpage_sheet001',"fox_fishingbody.png");
        foxbody.anchor.setTo(0.7,0.9);
        foxbody.alpha = 0;
        foxbody_tween = game.add.tween(foxbody).to({angle:'-1'},1000,'Quad.easeInOut',true,0,false,true).loop(true); 
        foxbody_tween.pause();
        
        foxtail = game.add.sprite(foxpositionX + 145, foxpositionY +300, 'fishingpage_sheet001');
        foxtail_animation = foxtail.animations.add("fishing", Phaser.Animation.generateFrameNames('tailsheet',0,6, '.png', 4), 10, true);
        foxtail.anchor.setTo(0.6,0.9);
        foxtail.alpha = 0;
        foxtail_tween = game.add.tween(foxtail).to({angle:'-1'},1000,'Quad.easeInOut',true,0,false,true).loop(true);        
        foxtail_tween.pause();
        
        //-------------------------------------------------------------------------------------------------------------------------------
        fishingrodpullingsheet = game.add.sprite(foxpositionX+670, foxpositionY+290, 'fishingpage_sheet001');
        fishingrodpullingsheet.animations.add("fishingrodpulling",Phaser.Animation.generateFrameNames('fishingrod',0,4, '.png', 4), 10, true);
        fishingrodpullingsheet.anchor.setTo(0.7,0.9);
        fishingrodpullingsheet.alpha = 0;
        
        foxpulling = game.add.sprite(foxpositionX+250, foxpositionY+300, 'fishingpage_sheet001');
        foxpulling.animations.add("pulling",Phaser.Animation.generateFrameNames('fox_pullingsheet',0,6, '.png', 4), 10, true);
        foxpulling.anchor.setTo(0.7,0.9);
        foxpulling.alpha = 0;

        foxfalling = game.add.sprite(foxpositionX+400, foxpositionY+300, 'fishingpage_sheet001');
        foxfalling.animations.add("foxfalling",Phaser.Animation.generateFrameNames('fox_fallingsheet',0,7, '.png', 4), 10, true);
        foxfalling.anchor.setTo(0.7,0.9);
        foxfalling.alpha = 0;

        dropfishingrod = game.add.sprite(foxpositionX+400, foxpositionY+300, 'fishingpage_sheet001');
        dropfishingrod.animations.add("dropfishingrod",Phaser.Animation.generateFrameNames('dropfishingrod',0,2, '.png', 4), 10, true);
        dropfishingrod.anchor.setTo(0.7,0.9);
        dropfishingrod.alpha = 0;
        
        //get fish-------------------------------------------------------------------------------------------------------------------      
        foxgetfishingsheet = game.add.sprite(foxpositionX+500, foxpositionY+300,'fishingpage_sheet002');
        foxgetfishingsheet_animation = foxgetfishingsheet.animations.add("foxgetfishingsheet",  Phaser.Animation.generateFrameNames('fox_getfishsheet_',1,10, '.png', 5), 10, true);
        foxgetfishingsheet.anchor.setTo(0.7,0.9);
        foxgetfishingsheet.alpha = 0;
        
        get_stone_fish = game.add.sprite(foxpositionX+500, foxpositionY+300,'get_stone_fish_atlas');
        get_stone_fish_animation = get_stone_fish.animations.add("get_stone_fish",  Phaser.Animation.generateFrameNames('fox_get_stone_fish_',1,11, '.png',5), 10, true);
        get_stone_fish.anchor.setTo(0.7,0.9);
        get_stone_fish.alpha = 0;
        
        get_light_blue_fish = game.add.sprite(foxpositionX+504, foxpositionY+300,'get_light_blue_fish_atlas');
        get_light_blue_fish_animation = get_light_blue_fish.animations.add("get_light_blue_fish",  Phaser.Animation.generateFrameNames('fox_get_light_blue_fish_',2,10,'.png',5),10, true);
        get_light_blue_fish.anchor.setTo(0.7,0.9);
        get_light_blue_fish.alpha = 0;
        
        
        fishsheet = game.add.sprite(foxpositionX+420, foxpositionY+290,'fishingpage_sheet001');
        fishsheet.anchor.setTo(0.5,0.4);
        fishsheet.angle = -90;
        fishsheet.alpha = 0;       
        fishsheet_animation = fishsheet.animations.add("fishsheet_dynamic",Phaser.Animation.generateFrameNames('fish_sheet_orange_',0,2, '.png', 4), 10, true);
        
        fish_blue_light = game.add.sprite(foxpositionX+300, foxpositionY-50,'get_light_blue_fish_atlas');
        fish_blue_light.anchor.setTo(0.5,0.4);
        fish_blue_light.alpha = 0;       
        fish_blue_light_animation = fish_blue_light.animations.add("fish_blue_light",Phaser.Animation.generateFrameNames('fish_blue_light',1,3,'.png',4), 10, true);
 
        fox_getfishsheet_lastframe = game.add.sprite(foxpositionX+500, foxpositionY+300,'fishingpage_sheet002', "fox_getfishsheet_lastframe.png");
        fox_getfishsheet_lastframe.anchor.setTo(0.7,0.9);
        fox_getfishsheet_lastframe.alpha = 0;
        
        //fishboard---------------------------------------------------------------------------------------------------------------------
        var getfishboardX = centerX,
            getfishboardY = 500;
        
        getfishBG = game.add.sprite(getfishboardX, getfishboardY,'fishingpage_sheet002', "getfishboardBG.png");
        getfishBG.anchor.setTo(0.5,0.5);
        getfishBG.scale.setTo(0,0);
        
        failBG = game.add.sprite(getfishboardX, getfishboardY,'fishingpage_sheet001', "failboardBG.png");
        failBG.anchor.setTo(0.5,0.5);
        failBG.scale.setTo(0,0);
        
        //button------------------------------------------------------------------------------------------------------------------------
        btn_getfish_backhome = game.add.button(getfishboardX+1, getfishboardY, 'button_finish_sheet', backhome, this, 1, 0);
        btn_getfish_backhome.anchor.setTo(0,-1);
        btn_getfish_backhome.scale.setTo(0,0);
        btn_getfish_backhome.inputEnabled = false;
        
        btn_getfish_continue = game.add.button(getfishboardX-1, getfishboardY, 'button_getfish_continue',continuefishing, this, 1, 0);
        btn_getfish_continue.anchor.setTo(1,-1);
        btn_getfish_continue.scale.setTo(0,0);
        btn_getfish_continue.inputEnabled = false;
        
        button_restart_sheet = game.add.button(getfishboardX-1, getfishboardY, 'button_restart_sheet', continuefishing, this, 1, 0);
        button_restart_sheet.anchor.setTo(1,-1);
        button_restart_sheet.scale.setTo(0,0);
        button_restart_sheet.inputEnabled = false; 
        
        //fishbox-----------------------------------------------------------------------------------------------------------------------
        fishbox_orange = game.add.sprite(getfishboardX, getfishboardY,'fishingpage_sheet001',"fishbox_orange.png");
        fishbox_orange.anchor.setTo(0.5,0.5);
        fishbox_orange.scale.setTo(0,0);
        
        fishbox_stone_fish = game.add.sprite(getfishboardX, getfishboardY,'get_stone_fish_atlas',"fishbox_stone_fish.png");
        fishbox_stone_fish.anchor.setTo(0.5,0.5);
        fishbox_stone_fish.scale.setTo(0,0);
        
        fishbox_light_blue = game.add.sprite(getfishboardX, getfishboardY,'get_light_blue_fish_atlas',"fishbox_light_blue.png");
        fishbox_light_blue.anchor.setTo(0.5,0.5);
        fishbox_light_blue.scale.setTo(0,0);
        
        fishbox_sheet_highlight = game.add.sprite(getfishboardX, getfishboardY,'fishingpage_sheet005');
        fishbox_sheet_highlight.anchor.setTo(0.5,0.5);
        fishbox_sheet_highlight.scale.setTo(0,0);
        fishbox_sheet_highlight_animation = fishbox_sheet_highlight.animations.add("fishbox_sheet_highlight",Phaser.Animation.generateFrameNames('fishbox_highlight',1,8,'.png',4), 10, true);
        
        //open BG-----------------------------------------------------------------------------------------------------------------
        blackBG_open_fishing = game.add.sprite(0,0,"blackBG");
        game.add.tween(blackBG_open_fishing).to({alpha:0},1000,'Quad.easeIn',true); 
        //close BG---------------------------------------------------------------------------------------------------------------
        blackBG_close_fishing = game.add.sprite(0,0,"blackBG");
        blackBG_close_fishing.alpha = 0;
        
        //fx---------------------------------------------------------------------------------------------------------------------
        correct_fx = game.add.sprite(0,0,'correct_fx');
        correct_fx.alpha = 0;

        tutorial_frame_sheet = game.add.sprite(questionpositionX-440,questionpositionY+40,'fishingpage_sheet005');
        tutorial_frame_sheet.anchor.setTo(0.5,0.5);
        tutorial_frame_sheet.scale.setTo(0.9,0.9);
        tutorial_frame_sheet.animations.add("tutorial_frame_sheet_dyn",Phaser.Animation.generateFrameNames('tutorial_frame_',1,10,'.png',5), 10, true);
        tutorial_frame_sheet.alpha = 0;

        //---------------------------------------------------------------------------------------------------------------------------
        for(var i = 0;i<=2;i++){
            answerpannel[i] = game.add.sprite( questionpositionX+150*(i-1), buttonpositionY,'answer_panel');
            answerpannel[i].scale.setTo(0.8,0.8); 
            answerpannel[i].anchor.setTo(0.5,0.5);
            answerpannel[i].alpha = 0; 
   
        }
        for(var i = 0;i<=2;i++){
            answerpannel_tutorial[i] = game.add.sprite( questionpositionX+150*(i-1), buttonpositionY,'answer_panel');
            answerpannel_tutorial[i].scale.setTo(0.8,0.8); 
            answerpannel_tutorial[i].anchor.setTo(0.5,0.5);
            answerpannel_tutorial[i].alpha = 0; 
   
        }        
        //add 0~10 answer number image------------------------------------------------------------------------------------------------    
        
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

        //question number bond image------------------------------------------------------------------------------------------
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
                

        
        //tutorial page----------------------------------------------------------------------------------------------------------------
        if( first_try == true ){
            fishingpage_center = game.add.button(centerX,centerY+150, 'fishingpage_center');
            fishingpage_center.anchor.setTo(0.5,0.5);
            
            button_start_sheet = game.add.button(centerX-265,centerY+235, 'button_start_sheet',skip_tutorial, this, 1, 0);
            button_start_sheet.anchor.setTo(0.5,0.5);
            button_start_sheet.scale.setTo(0.7,0.7);
            button_start_sheet.inputEnabled = true;
        
            button_tutorial_sheet = game.add.button(centerX+265,centerY+235, 'button_tutorial_sheet',startfishing_tutorial, this, 1, 0);
            button_tutorial_sheet.anchor.setTo(0.5,0.5);
            button_tutorial_sheet.inputEnabled = true;
            button_tutorial_sheet.scale.setTo(0.7,0.7);

            mark_tutorial = game.add.button(foxpositionX+250, foxpositionY-150,'mark_tutorial',startfishing_tutorial);
            mark_tutorial.scale.setTo(0,0);
            mark_tutorial.anchor.setTo(0.5,0.5);
            
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
        }
        
        mark = game.add.sprite(foxpositionX+250, foxpositionY-150,"mark_tutorial");
        mark.scale.setTo(0,0);
        mark.anchor.setTo(0.5,0.5);
  
        var textpositionX = 200,
            textpositionY = 250;
        
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

        start_game_text = game.add.sprite(centerX,centerY+200,'fishingpage_sheet001',"start_game_text.png");
        start_game_text.alpha = 0;
        start_game_text.scale.setTo(0.5,0.5);
        start_game_text.anchor.setTo(0.5,0.5);  

        
        //fx-------------------------------------------------------------------------------------------------------------------------
        for(var i = 0;i<=2;i++){
            anwser_pannel_light[i] = game.add.sprite(questionpositionX+150*(i-1), buttonpositionY,'fishingpage_sheet001','anwser_pannel_light.png');
            anwser_pannel_light[i].anchor.setTo(0.5,0.5);   
            anwser_pannel_light[i].alpha = 0;  

        }
        //opening--------------------------------------------------------------------------------------------------------------------
        blackBG_opening = game.add.sprite(0,0,'blackBG');
        blackBG_opening.alpha = 1;
        game.add.tween(blackBG_opening).to({alpha:0},500,'Quad.easeOut',true,0);
     
        //sound-------------------------------------------------------------------------------------------------------------------
        rightFX = game.add.audio('rightFX');
        wrongFX = game.add.audio('wrongFX');
        successFX = game.add.audio('successFX');
        startFX = game.add.audio('startFX');
        failureFX = game.add.audio('failureFX');
        clickFX = game.add.audio('clickFX');
        add_energyFX = game.add.audio('add_energyFX');            
        alertFX = game.add.audio('alertFX');
        fishingBG = game.add.audio('fishingBG');
        fishingBG.loopFull(1);
        
        console.log("game.tweens getALL:"+ game.tweens.getAll());
    },   
    
    update: function() {
        
        if(playing_status == false && waitingclick == false && complete_status == false  && first_try == false ){
            
            waiting_time = Math.floor(Math.random()*4+1);
            show_up_time = waiting_time*60;
            waitingclick = true;

        }
        
        if(show_up_time > 0 && mark.scale.x == 0 && playing_status == false && complete_status == false ){
            show_up_time--;          
        }
        if(show_up_time == 0 && mark.scale.x == 0 && playing_status == false && complete_status == false ){
            alertFX.play();
            t2 = 60;
            mark_tween = game.add.tween(mark.scale).to({x:1,y:1},200,Phaser.Easing.Elastic.Out,true);
            
        }
        
        if(t2>0 && waitingclick == true ){
            t2--;
           
        }else if(t2 == 0 && waitingclick == true ){
            t2 = -1;
            waitingclick = false;            
            startfishing();
        }       
            
        if(scorebar.y < 800 && playing_status == true){
            scorebar.y += 0.8;
            scorebarred.y += 0.8;
            
        }
        if(scorebar.y >= 800 && playing_status == true){
           failfishing();
            
        }
        
        if(scorebar.y <= 215 && playing_status == true){
            finishfishing();
        }
        
        if( foxtail_time == 0 && playing_status == false && complete_status == false && first_try == false ){
            foxtail_animation = foxtail.animations.play("fishing",9,false);
            foxtail_time = 200;
        }else if( foxtail_animation.isPlaying == false  && playing_status == false && complete_status == false && first_try == false ){
            foxtail_time--;
            foxtail_animation.stop();
            foxtail_animation.frame = 0;
        }
    },
    shutdown: function(){
        //console.log("game.tweens getALL:"+ game.tweens.getAll());
        //game.tweens.removeAll();
        //console.log("game.tweens getALL after: "+ game.tweens.getAll());
        fishingBG.stop();
        fishingBG = null;
        BG = null;
        this.rightFX = 'null';
    },
    render: function(){
    
    }
    
}

var foxpulling_tween,fishingrodpullingsheet_tween;

function startfishing(){
    
    var foxpositionX = 150,
        foxpositionY = 500;
    

    
    foxpulling.x = foxpositionX+250;
    foxpulling.y = foxpositionY+300;

    foxpulling.animations.play("pulling",25,true);
    foxpulling.alpha = 1;
    fishingrodpullingsheet.animations.play("fishingrodpulling",20,true);
    fishingrodpullingsheet.alpha = 1;
    
    foxpulling_tween = game.add.tween(foxpulling).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    fishingrodpullingsheet_tween = game.add.tween(fishingrodpullingsheet).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    
    mark.scale.setTo(0,0);
    
    scorebar.y = 500; 
    scorebarred.y = 500; 
    mark.scale.setTo(0,0);      
    playing_status = true;       

    
    create_question(); 
    create_answer_button();
    
    fishingrod_tween.pause();
    foxbody_tween.pause();
    foxtail_tween.pause();
    
    game.add.tween(scorebarBG).to({alpha:1},300,'Quad.easeInOut',true);  
    game.add.tween(scorebar_body_Glass).to({alpha:0.5},300,'Quad.easeInOut',true);  
    game.add.tween(scorebar_top).to({alpha:1},300,'Quad.easeInOut',true);  
    game.add.tween(scorebar).to({alpha:1},300,'Quad.easeInOut',true);    
    scorebar_tween.resume();
    
    foxtail.alpha = 0;
    foxtail.animations.stop("fishing");
    foxbody.alpha = 0;
    fishingrod.alpha = 0;
    
    startFX.play();
    fishingBG.stop(); 
    game_fishing_music = game.add.audio('fishing');
    game_fishing_music.loopFull(1);

}

function clean_pannel(){
    
    for(var n = 0;n<=10;n++){
        answer_number0[n].alpha = 0;
        answer_number1[n].alpha = 0;
        answer_number2[n].alpha = 0;
        
        question_text0[n].alpha = 0;
        question_text1[n].alpha = 0;
        question_text2[n].alpha = 0;

    }
    
    question_mark0.alpha = 0;
    question_mark1.alpha = 0;

    for(var i = 0;i<=2;i++){
        answerpannel[i].alpha = 0;
        answerpannel[i].inputEnabled = false; 
    }
    game.add.tween(question_green_pannel).to({alpha:0},500,'Linear',true,300);
    game.add.tween(question_blue_pannel1).to({alpha:0},500,'Linear',true,300);
    game.add.tween(question_blue_pannel2).to({alpha:0},500,'Linear',true,300);
    game.add.tween(bonds).to({alpha:0},500,'Linear',true,300);
}

var success;

function finishfishing(){

    complete_status = true;
    playing_status = false; 
    
    scorebar.y = 210;
    
    clean_pannel();
    fish_sheet();
    
    scorebar_top_success_light.alpha = 1;

    foxpulling_tween.pause();
    fishingrodpullingsheet_tween.pause();
    foxpulling.alpha = 0;
    fishingrodpullingsheet.alpha = 0;
    
    success = true;
    
    showupfishboard();    
    game_fishing_music.stop();
    successFX.play();   
    
    if( mode == 1){
        mode = 0;
    }else{
        mode = 1;
    }
    

}

function failfishing(){
    
    complete_status = true;
    playing_status = false; 
    
    scorebar_tween.pause();
    
    game.add.tween(scorebar).to({alpha:0},300,'Quad.easeInOut',true);  
    game.add.tween(scorebarBG).to({alpha:0},300,'Quad.easeInOut',true);  
    game.add.tween(scorebar_body_Glass).to({alpha:0},300,'Quad.easeInOut',true);  
    game.add.tween(scorebar_top).to({alpha:0},300,'Quad.easeInOut',true); 
    
    clean_pannel();
    
    foxpulling.animations.stop("fishing");
    foxpulling.alpha = 0;
    fishingrodpullingsheet.alpha = 0;
    foxpulling_tween.pause();
    fishingrodpullingsheet_tween.pause();
    foxfalling.animations.play("foxfalling",9,false);
    game.add.tween(foxfalling).to({x:'+40'},400,'Quad.easeOut',true);
    foxfalling.alpha = 1;
    
    dropfishingrod.animations.play("dropfishingrod",12,false,true);
    game.add.tween(dropfishingrod).to({x:'+500'},100,'Quad.easeOut',true);
    dropfishingrod.alpha = 1;
    
    showupfailboard();
    game_fishing_music.stop();
    failureFX.play();

}

var blackBG_close_fishing_tween;

function backhome(){
    blackBG_close_fishing_tween = game.add.tween(blackBG_close_fishing).to({alpha:1},1000,'Quad.easeIn',true); 
    blackBG_close_fishing_tween.onComplete.add(function () {

        game.state.start('state8',true,true);
      }, this);
    
}

function continuefishing(){
    complete_status = false;
    waitingclick = false;
        

    playing_status = false;
    btn_getfish_backhome.inputEnabled = false;
    btn_getfish_continue.inputEnabled = false;
    clean_fish_dynamic();
    
    game.add.tween(scorebar).to({alpha:0},300,'Quad.easeInOut',true);  
    game.add.tween(scorebarBG).to({alpha:0},300,'Quad.easeInOut',true);  
    game.add.tween(scorebar_body_Glass).to({alpha:0},300,'Quad.easeInOut',true);  
    game.add.tween(scorebar_top).to({alpha:0},300,'Quad.easeInOut',true); 
    scorebar_tween.pause();

    game.add.tween(btn_getfish_continue.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(btn_getfish_backhome.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(button_restart_sheet.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(getfishBG.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);
    game.add.tween(failBG.scale).to({x:0,y:0},250,'Quad.easeOut',true,0);

    foxfalling.alpha = 0;
    
    fishingrod.alpha = 1;
    foxbody.alpha = 1;
    foxtail.alpha = 1;
    
    fishingrod_tween.resume();
    foxbody_tween.resume();
    foxtail_tween.resume();
    
    fishingBG.loopFull(1);
    startFX.play();
    
    if( success == true ){
        game.add.tween(scorebar_top_success_light).to({alpha:0},500,'Quad.easeInOut',true);
        success = false;
    }
}

function showupfishboard(){
    fish_box_dynamic();
    game.add.tween(btn_getfish_continue.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    btn_getfish_continue.inputEnabled = true;
    game.add.tween(btn_getfish_backhome.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    game.add.tween(getfishBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    btn_getfish_backhome.inputEnabled = true;
}

function showupfailboard(){
    
    game.add.tween(button_restart_sheet.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    game.add.tween(btn_getfish_backhome.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    game.add.tween(failBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    
    btn_getfish_backhome.inputEnabled = true;
    button_restart_sheet.inputEnabled = true;
}
