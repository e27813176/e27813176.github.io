var FishingLevel = 1;
var AnswerPanelLight =  new Array();
var FishingPageComplete = false;
var text = 0;
var timer;
demo.FishingPage = function() {};
demo.FishingPage.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        answercount = 0;
        CorrectCount = 0;
        PlayingTime = 0;
    },
    preload: function() {
        
    },
    create: function() {
        //define backgroung
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        //init parameter
        game.time.advancedTiming = true;
        promote_mode = true;
        addChangeStateEvent();
        foxtail_time = 200;
        buttonpositionY = 500;
        playing_status = false;
        waitingclick = false;
        complete_status = false;
        first_try = false;
        
        addmode = true;

        game.add.sprite(0,100,'BG');

        //ScoreBar-------------------------------------------------------------------------------------------------
    
        ScoreBarBG = game.add.sprite(0,100,'ScoreBarAtlas','ScoreBarBG.png');
        ScoreBarBG.alpha = 0;
        
        ScoreBar = game.add.sprite(0,100,'ScoreBarAtlas','EnergyBar.png');
        ScoreBar.alpha = 1;
        ScoreBarTween = game.add.tween(ScoreBar).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
        ScoreBarTween.pause();
        ScoreBar.alpha = 0;

        
        ScoreBarRed = game.add.sprite(0,100,'ScoreBarAtlas','EnergyBarRed.png');
        ScoreBarRed.alpha = 0;
        

        ScoreBarTop = game.add.sprite(0,100,'ScoreBarAtlas','ScoreBarTop.png');
        ScoreBarTop.alpha = 0;   
        
        ScoreBarTopLight = game.add.sprite(0,100,'ScoreBarAtlas','ScoreBarTopLight.png');
        ScoreBarTopLight.alpha = 0;   
        
        ScorebarTopSuccessLight = game.add.sprite(0,100,'ScoreBarAtlas','ScoreBarTopLight.png');
        ScorebarTopSuccessLight.alpha = 0;
        
        ScoreBarMask = game.add.graphics();
        ScoreBarMask.beginFill(0xffffff);
        ScoreBarMask.drawRect(1430,340,100,400);
        ScoreBar.mask = ScoreBarMask;
        ScoreBarRed.mask = ScoreBarMask;
        
        ScorebarWrongFx = game.add.sprite(0,100, "ScoreBarAtlas");
        ScorebarWrongFxAnimate = ScorebarWrongFx.animations.add("ScorebarWrongFx",Phaser.Animation.generateFrameNames('ScoreBarWrongFx_',0,9, '.png', 5), 10, true);
        ScorebarWrongFx.alpha = 0;
        
        ScorebarRightFx = game.add.sprite(0,100, "ScoreBarAtlas");
        ScorebarRightFxAnimate = ScorebarRightFx.animations.add("ScorebarRightFx",Phaser.Animation.generateFrameNames('ScoreBarRightFx_',0,9, '.png', 5), 10, true);
        ScorebarRightFx.alpha = 0;
        //-------------------------------------------------------------------------------------------------------------
        
        var foxpositionX = 150,
            foxpositionY = 400;

        FoxSittingRod = game.add.sprite(0, 100, 'FoxSittingRod');
        FoxSittingRodAnimate = FoxSittingRod.animations.add("FoxSittingRod",Phaser.Animation.generateFrameNames('FoxSittingRod_',11,27, '.png', 5), 10, true);
        FoxSittingRod.alpha = 1;        
        FoxSittingRod.animations.play("FoxSittingRod",20,true);
        
        FoxSitting = game.add.sprite(0, 100, 'FoxSitting');
        FoxSittingAnimate = FoxSitting.animations.add("FoxSitting",Phaser.Animation.generateFrameNames('FoxSitting_',11,27, '.png', 5), 10, true);
        FoxSitting.alpha = 1;
        FoxSitting.animations.play("FoxSitting",20,true);
        
        //-------------------------------------------------------------------------------------------------------------------------------

        FoxPullingRod = game.add.sprite(0, 100, 'FoxPullingRod');
        FoxPullingRodAnimate = FoxPullingRod.animations.add("FoxPullingRod",Phaser.Animation.generateFrameNames('FoxPullingRod_',0,18, '.png', 5), 10, true);
        FoxPullingRod.alpha = 0;
        
        FoxPulling = game.add.sprite(0, 100, 'FoxPulling');
        FoxPullingAnimate = FoxPulling.animations.add("FoxPulling",Phaser.Animation.generateFrameNames('FoxPulling_',0,18, '.png', 5), 10, true);
        FoxPulling.alpha = 0;

        FoxFallingRod = game.add.sprite(0, 100, 'FoxFalling');
        FoxFallingRodAnimate = FoxFallingRod.animations.add("FoxFallingRod",Phaser.Animation.generateFrameNames('FoxFallingRod_',0,20, '.png', 5), 10, true);
        FoxFallingRod.alpha = 0;
        
        FoxFalling = game.add.sprite(0, 100, 'FoxFalling');
        FoxFallingAnimate = FoxFalling.animations.add("FoxFalling",Phaser.Animation.generateFrameNames('FoxFalling_',0,20, '.png', 5), 10, true);
        FoxFalling.alpha = 0;

        
        //get fish --------------------------------------------------------------------------------------------------------------     
        /*
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
        */
        FoxGetFishRod = game.add.sprite(0,100,'FoxGetFish');
        FoxGetFishRodAnimate = FoxGetFishRod.animations.add("FoxGetFishRod",Phaser.Animation.generateFrameNames('FoxGetFishRod_',0,20, '.png', 5), 10, true);
        FoxGetFishRod.alpha = 0; 
        
        FoxGetFish = game.add.sprite(0,100,'FoxGetFish');
        FoxGetFishAnimate = FoxGetFish.animations.add("FoxGetFish",Phaser.Animation.generateFrameNames('FoxGetFish_',0,20,'.png', 5), 10, true);
        FoxGetFish.alpha = 0;
        

        //FishDynamic-----------------------------------------------------------------------------------------------------------------
        OrangeFish = game.add.sprite(0,100,'Fish');
        OrangeFishAnimate = OrangeFish.animations.add("OrangeFish",Phaser.Animation.generateFrameNames('OrangeFish_',0,20, '.png',5), 10, true);
        OrangeFish.alpha = 0;             
        
        OrangeFishStop = game.add.sprite(0,100,'Fish');
        OrangeFishStopAnimate = OrangeFishStop.animations.add("OrangeFishStop",Phaser.Animation.generateFrameNames('OrangeFishStop_',20,25, '.png', 5), 10, true);
        OrangeFishStop.alpha = 0;         
        
        RedFish = game.add.sprite(0,100,'Fish');
        RedFishAnimate = RedFish.animations.add("RedFish",Phaser.Animation.generateFrameNames('RedFish_',0,20, '.png',5), 10, true);
        RedFish.alpha = 0;             
        
        RedFishStop = game.add.sprite(0,100,'Fish');
        RedFishStopAnimate = RedFishStop.animations.add("RedFishStop",Phaser.Animation.generateFrameNames('RedFishStop_',20,25, '.png', 5), 10, true);
        RedFishStop.alpha = 0;          
        
        YellowFish = game.add.sprite(0,100,'Fish');
        YellowFishAnimate = YellowFish.animations.add("YellowFish",Phaser.Animation.generateFrameNames('YellowFish_',0,20, '.png',5), 10, true);
        YellowFish.alpha = 0;             
        
        YellowFishStop = game.add.sprite(0,100,'Fish');
        YellowFishStopAnimate = YellowFishStop.animations.add("YellowFishStop",Phaser.Animation.generateFrameNames('YellowFishStop_',20,25, '.png', 5), 10, true);
        YellowFishStop.alpha = 0;
        
        LightGreenFish = game.add.sprite(0,100,'Fish');
        LightGreenFishAnimate = LightGreenFish.animations.add("LightGreenFish",Phaser.Animation.generateFrameNames('LightGreenFish_',0,20, '.png',5), 10, true);
        LightGreenFish.alpha = 0;             
        
        LightGreenFishStop = game.add.sprite(0,100,'Fish');
        LightGreenFishStopAnimate = LightGreenFishStop.animations.add("LightGreenFishStop",Phaser.Animation.generateFrameNames('LightGreenFishStop_',20,25, '.png', 5), 10, true);
        LightGreenFishStop.alpha = 0;
        
        LightBlueFish = game.add.sprite(0,100,'Fish');
        LightBlueFishAnimate = LightBlueFish.animations.add("LightBlueFish",Phaser.Animation.generateFrameNames('LightBlueFish_',0,20, '.png',5), 10, true);
        LightBlueFish.alpha = 0;             
        
        LightBlueFishStop = game.add.sprite(0,100,'Fish');
        LightBlueFishStopAnimate = LightBlueFishStop.animations.add("LightBlueFishStop",Phaser.Animation.generateFrameNames('LightBlueFishStop_',20,25, '.png', 5), 10, true);
        LightBlueFishStop.alpha = 0;
        
        PurpleFish = game.add.sprite(0,100,'Fish');
        PurpleFishAnimate = PurpleFish.animations.add("PurpleFish",Phaser.Animation.generateFrameNames('PurpleFish_',0,20, '.png',5), 10, true);
        PurpleFish.alpha = 0;             
        
        PurpleFishStop = game.add.sprite(0,100,'Fish');
        PurpleFishStopAnimate = PurpleFishStop.animations.add("PurpleFishStop",Phaser.Animation.generateFrameNames('PurpleFishStop_',20,25, '.png', 5), 10, true);
        PurpleFishStop.alpha = 0;        

        GlowBlueFish = game.add.sprite(0,100,'Fish');
        GlowBlueFishAnimate = GlowBlueFish.animations.add("GlowBlueFish",Phaser.Animation.generateFrameNames('GlowBlueFish_',0,20, '.png',5), 10, true);
        GlowBlueFish.alpha = 0;             
        
        GlowBlueFishStop = game.add.sprite(0,100,'Fish');
        GlowBlueFishStopAnimate = GlowBlueFishStop.animations.add("GlowBlueFishStop",Phaser.Animation.generateFrameNames('GlowBlueFishStop_',20,25, '.png', 5), 10, true);
        GlowBlueFishStop.alpha = 0;  

        ElectricFish = game.add.sprite(0,100,'Fish');
        ElectricFishAnimate = ElectricFish.animations.add("ElectricFish",Phaser.Animation.generateFrameNames('ElectricFish_',0,20, '.png',5), 10, true);
        ElectricFish.alpha = 0;             
        
        ElectricFishStop = game.add.sprite(0,100,'Fish');
        ElectricFishStopAnimate = ElectricFishStop.animations.add("ElectricFishStop",Phaser.Animation.generateFrameNames('ElectricFishStop_',20,27, '.png', 5), 10, true);
        ElectricFishStop.alpha = 0;           

        FireFish = game.add.sprite(0,100,'Fish002');
        FireFishAnimate = FireFish.animations.add("FireFish",Phaser.Animation.generateFrameNames('FireFish_',0,20, '.png',5), 10, true);
        FireFish.alpha = 0;             
        
        FireFishStopFire = game.add.sprite(0,100,'Fish002');
        FireFishStopFireAnimate = FireFishStopFire.animations.add("FireFishStopFire",Phaser.Animation.generateFrameNames('FireFishStopFire_',20,34, '.png', 5), 10, true);
        FireFishStopFire.alpha = 0; 
        
        FireFishStop = game.add.sprite(0,100,'Fish002');
        FireFishStopAnimate = FireFishStop.animations.add("FireFishStop",Phaser.Animation.generateFrameNames('FireFishStop_',20,27, '.png', 5), 10, true);
        FireFishStop.alpha = 0;        

        WifiFish = game.add.sprite(0,100,'Fish002');
        WifiFishAnimate = WifiFish.animations.add("WifiFish",Phaser.Animation.generateFrameNames('WifiFish_',0,20, '.png',5), 10, true);
        WifiFish.alpha = 0;             
        
        WifiFishStop = game.add.sprite(0,100,'Fish002');
        WifiFishStopAnimate = WifiFishStop.animations.add("WifiFishStop",Phaser.Animation.generateFrameNames('WifiFishStop_',20,35, '.png', 5), 10, true);
        WifiFishStop.alpha = 0;    
        
        MedicineFish = game.add.sprite(0,100,'Fish002');
        MedicineFishAnimate = MedicineFish.animations.add("MedicineFish",Phaser.Animation.generateFrameNames('MedicineFish_',0,20, '.png',5), 10, true);
        MedicineFish.alpha = 0;             
        
        MedicineFishStop = game.add.sprite(0,100,'Fish002');
        MedicineFishStopAnimate = MedicineFishStop.animations.add("MedicineFishStop",Phaser.Animation.generateFrameNames('MedicineFishStop_',20,32, '.png', 5), 10, true);
        MedicineFishStop.alpha = 0;           
        //fishboard---------------------------------------------------------------------------------------------------------------------
        var getfishboardX = centerX,
            getfishboardY = 500;

        GetFishBoardBG = game.add.sprite(centerX,centerY,'GetFishBoard', "GetFishBoard.png");
        GetFishBoardBG.anchor.setTo(0.5);
        GetFishBoardBG.alpha = 0;
        
        GetFishBoardBtn = game.add.sprite(centerX,centerY,'GetFishBoard', "GetFishBoardBtn.png");
        GetFishBoardBtn.anchor.setTo(0.5);
        GetFishBoardBtn.alpha = 0;
        
        GetFishBoardSeal = game.add.sprite(centerX,centerY,'GetFishBoard', "GetFishBoardSeal.png");
        GetFishBoardSeal.anchor.setTo(0.5);
        GetFishBoardSeal.alpha = 0;
        
        GetFishAmazingSeal = game.add.sprite(centerX,centerY,'GetFishBoard', "AmazingSeal.png");
        GetFishAmazingSeal.anchor.setTo(0.5);
        GetFishAmazingSeal.alpha = 0;        
        
        GetFishContinueBtnHover = game.add.sprite(centerX,centerY,'GetFishBoard', "ContinueBtnHover.png");
        GetFishContinueBtnHover.anchor.setTo(0.5);
        GetFishContinueBtnHoverTween = game.add.tween(GetFishContinueBtnHover).to({alpha:0.4},500,'Quad.easeInOut',true,0,false,true).loop(true);
        GetFishContinueBtnHoverTween.pause();        
        GetFishContinueBtnHover.alpha = 0;
        
        GetFishExitBtnHover = game.add.sprite(centerX,centerY,'GetFishBoard', "ExitBtnHover.png");
        GetFishExitBtnHover.anchor.setTo(0.5); 
        GetFishExitBtnHoverTween = game.add.tween(GetFishExitBtnHover).to({alpha:0.4},500,'Quad.easeInOut',true,0,false,true).loop(true);
        GetFishExitBtnHoverTween.pause();           
        GetFishExitBtnHover.alpha = 0;
        
        GetFishExitBtnHoverArea = game.add.sprite(centerX+150,centerY+102,'GetFishBoard', "BtnArea.png");
        GetFishExitBtnHoverArea.anchor.setTo(0.5);
        GetFishExitBtnHoverArea.events.onInputDown.add(GetFishExitBtnDown, this);
        GetFishExitBtnHoverArea.events.onInputOver.add(GetFishExitBtnOver, this);
        GetFishExitBtnHoverArea.events.onInputOut.add(GetFishExitBtnOut, this);        
        GetFishExitBtnHoverArea.alpha = 0;
        
        GetFishContinueBtnHoverArea = game.add.sprite(centerX+50,centerY+102,'GetFishBoard', "BtnArea.png");
        GetFishContinueBtnHoverArea.anchor.setTo(0.5); 
        GetFishContinueBtnHoverArea.events.onInputDown.add(GetFishContinueBtnDown, this);
        GetFishContinueBtnHoverArea.events.onInputOver.add(GetFishContinueBtnOver, this);
        GetFishContinueBtnHoverArea.events.onInputOut.add(GetFishContinueBtnOut, this);          
        GetFishContinueBtnHoverArea.alpha = 0;        
        
        //FailBoard------------------------------------------------------------------------------------------------
        FailBoardBG = game.add.sprite(centerX,centerY,'FailBoard', "FailBoard.png");
        FailBoardBG.anchor.setTo(0.5);
        FailBoardBG.alpha = 0;
        
        FailBoardBtn = game.add.sprite(centerX,centerY,'FailBoard', "FailBoardBtn.png");
        FailBoardBtn.anchor.setTo(0.5);
        FailBoardBtn.alpha = 0;
                
        FailBoardExitBtnHover = game.add.sprite(centerX,centerY,'FailBoard', "FailBoardExitBtnHover.png");
        FailBoardExitBtnHover.anchor.setTo(0.5);
        FailBoardExitBtnHoverTween = game.add.tween(FailBoardExitBtnHover).to({alpha:0.4},500,'Quad.easeInOut',true,0,false,true).loop(true);
        FailBoardExitBtnHoverTween.pause();        
        FailBoardExitBtnHover.alpha = 0;
        
        FailBoardRestartBtnHover = game.add.sprite(centerX,centerY,'FailBoard', "FailBoardRestartBtnHover.png");
        FailBoardRestartBtnHover.anchor.setTo(0.5); 
        FailBoardRestartBtnHoverTween = game.add.tween(FailBoardRestartBtnHover).to({alpha:0.4},500,'Quad.easeInOut',true,0,false,true).loop(true);
        FailBoardRestartBtnHoverTween.pause();           
        FailBoardRestartBtnHover.alpha = 0;
        
        FailBoardExitBtnHoverArea = game.add.sprite(centerX+49,centerY+70,'FailBoard', "FailBoardBtnArea.png");
        FailBoardExitBtnHoverArea.anchor.setTo(0.5);
        FailBoardExitBtnHoverArea.events.onInputDown.add(FailBoardExitBtnDown, this);
        FailBoardExitBtnHoverArea.events.onInputOver.add(FailBoardExitBtnOver, this);
        FailBoardExitBtnHoverArea.events.onInputOut.add(FailBoardExitBtnOut, this);        
        FailBoardExitBtnHoverArea.alpha = 0;
        //FailBoardExitBtnHoverArea.inputEnabled = true;
        
        FailBoardRestartBtnHoverArea = game.add.sprite(centerX-49,centerY+70,'FailBoard', "FailBoardBtnArea.png");
        FailBoardRestartBtnHoverArea.anchor.setTo(0.5); 
        FailBoardRestartBtnHoverArea.events.onInputDown.add(FailBoardRestartBtnDown, this);
        FailBoardRestartBtnHoverArea.events.onInputOver.add(FailBoardRestartBtnOver, this);
        FailBoardRestartBtnHoverArea.events.onInputOut.add(FailBoardRestartBtnOut, this);          
        FailBoardRestartBtnHoverArea.alpha = 0;   
        //FailBoardRestartBtnHoverArea.inputEnabled = true;
        


        
        //fishbox-----------------------------------------------------------------------------------------------------------------------
        OrangeFishBox = game.add.sprite(centerX,centerY,'GetFishBoard', "OrangeFishBox.png");
        OrangeFishBox.anchor.setTo(0.5);
        OrangeFishBox.alpha = 0; 

        RedFishBox = game.add.sprite(centerX,centerY,'GetFishBoard', "RedFishBox.png");
        RedFishBox.anchor.setTo(0.5);
        RedFishBox.alpha = 0;
        
        YellowFishBox = game.add.sprite(centerX,centerY,'GetFishBoard', "YellowFishBox.png");
        YellowFishBox.anchor.setTo(0.5);
        YellowFishBox.alpha = 0;
        
        LightGreenFishBox = game.add.sprite(centerX,centerY,'GetFishBoard', "LightGreenFishBox.png");
        LightGreenFishBox.anchor.setTo(0.5);
        LightGreenFishBox.alpha = 0;        
        
        LightBlueFishBox = game.add.sprite(centerX,centerY,'GetFishBoard', "LightBlueBox.png");
        LightBlueFishBox.anchor.setTo(0.5);
        LightBlueFishBox.alpha = 0;      
        
        PurpleFishBox = game.add.sprite(centerX,centerY,'GetFishBoard', "PurpleFishBox.png");
        PurpleFishBox.anchor.setTo(0.5);
        PurpleFishBox.alpha = 0;              
        
        GlowBlueFishBox = game.add.sprite(centerX,centerY,'GetFishBoard', "GlowBlueBox.png");
        GlowBlueFishBox.anchor.setTo(0.5);
        GlowBlueFishBox.alpha = 0;              
        
        ElectricFishBox = game.add.sprite(centerX,centerY,'GetFishBoard', "ElectricFishBox.png");
        ElectricFishBox.anchor.setTo(0.5);
        ElectricFishBox.alpha = 0;         

        FireFishBox = game.add.sprite(centerX,centerY,'GetFishBoard', "FireFishBox.png");
        FireFishBox.anchor.setTo(0.5);
        FireFishBox.alpha = 0;  
        
        WifiFishBox = game.add.sprite(centerX,centerY,'GetFishBoard', "WifiFishBox.png");
        WifiFishBox.anchor.setTo(0.5);
        WifiFishBox.alpha = 0;         

        MedicineFishBox = game.add.sprite(centerX,centerY,'GetFishBoard', "MedicineFishBox.png");
        MedicineFishBox.anchor.setTo(0.5);
        MedicineFishBox.alpha = 0;         
                
        GetFishBoxHighlight = game.add.sprite(centerX,centerY,'GetFishBoard');
        GetFishBoxHighlight.anchor.setTo(0.5,0.5);
        GetFishBoxHighlight.alpha = 0;
        //GetFishBoxHighlight.scale.setTo(0,0);
        GetFishBoxHighlightAnimate = GetFishBoxHighlight.animations.add("GetFishBoxHighlight",Phaser.Animation.generateFrameNames('FishBoxHighlight_',0,20,'.png',5), 30, true);
        

        
        //fx---------------------------------------------------------------------------------------------------------------------
        correct_fx = game.add.sprite(0,0,'correct_fx');
        correct_fx.alpha = 0;

        //AnswerPanel--------------------------------------------------------------------------------------------------------------------
        
        
        for(var i = 0;i<=2;i++){
            answerpannel[i] = game.add.sprite( 1100+100*(i-1), 550,'Panel','AnswerPanel.png');
            answerpannel[i].scale.setTo(0.8,0.8); 
            answerpannel[i].anchor.setTo(0.5,0.5);
            answerpannel[i].alpha = 0; 

            AnswerPanelLight[i] = game.add.sprite( 1100+100*(i-1), 550,'Panel','AnswerPanelRightLight.png');
            AnswerPanelLight[i].anchor.setTo(0.5);
            AnswerPanelLight[i].alpha = 0;
        }


        //question number bond image------------------------------------------------------------------------------------------

        QuestionPanel = game.add.sprite( 0, 100,'Panel','QuestionPanel.png');
        QuestionPanel.alpha = 0;
        
        PanelStartFx001 = game.add.sprite(0,100,'Panel');
        PanelStartFx001.alpha = 0;
        PanelStartFx001Animation = PanelStartFx001.animations.add("PanelStartFx001",Phaser.Animation.generateFrameNames('PanelStartFx001_',0,15, '.png', 5), 10, true);
        
        PanelStartFx002 = game.add.sprite(0,100,'Panel');
        PanelStartFx002.alpha = 0;
        PanelStartFx002Animation = PanelStartFx002.animations.add("PanelStartFx002",Phaser.Animation.generateFrameNames('PanelStartFx002_',0,15, '.png', 5), 10, true);

        PanelStartFx003 = game.add.sprite(0,100,'Panel');
        PanelStartFx003.alpha = 0;
        PanelStartFx003Animation = PanelStartFx003.animations.add("PanelStartFx003",Phaser.Animation.generateFrameNames('PanelStartFx003_',0,15, '.png', 5), 10, true);

        PanelWrongFx001 = game.add.sprite(0,100,'Panel');
        PanelWrongFx001.alpha = 0;
        PanelWrongFx001Animation = PanelWrongFx001.animations.add("PanelWrongFx001",Phaser.Animation.generateFrameNames('PanelWrongFx001_',0,10, '.png', 5), 10, true);

        PanelWrongFx002 = game.add.sprite(0,100,'Panel');
        PanelWrongFx002.alpha = 0;
        PanelWrongFx002Animation = PanelWrongFx002.animations.add("PanelWrongFx002",Phaser.Animation.generateFrameNames('PanelWrongFx002_',0,10, '.png', 5), 10, true);

        PanelWrongFx003 = game.add.sprite(0,100,'Panel');
        PanelWrongFx003.alpha = 0;
        PanelWrongFx003Animation = PanelWrongFx003.animations.add("PanelWrongFx003",Phaser.Animation.generateFrameNames('PanelWrongFx003_',0,10, '.png', 5), 10, true);        
        //FX--------------------------------------------------------------------------------------------------------------------------------
        EnergyTransfer = game.add.sprite(questionpositionX,questionpositionY-150,'EnergyTransfer');
        EnergyTransfer.animations.add("EnergyTransfer",Phaser.Animation.generateFrameNames('EnergyTransfer_',0,19, '.png', 5), 10, true);
        EnergyTransfer.anchor.setTo(0.5,0.5);
        EnergyTransfer.scale.setTo(0.8);
        EnergyTransfer.alpha = 0;

        mark = game.add.sprite(foxpositionX+250, foxpositionY-150,"mark_tutorial");
        mark.scale.setTo(0,0);
        mark.anchor.setTo(0.5,0.5);
         
        var textpositionX = 200,
            textpositionY = 250;
        

        //Opening BG-----------------------------------------------------------------------------------------------------------------
        BlackOpeningBG = game.add.sprite(0,0,"blackBG");
        BlackOpeningBG.alpha = 1;
        game.add.tween(BlackOpeningBG).to({alpha:0},1000,'Quad.easeIn',true); 
        //close BG
        blackBG_close_fishing = game.add.sprite(0,0,"blackBG");
        blackBG_close_fishing.alpha = 0;

     
        //sound----------------------------------------------------------------------------------------------------------------
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

        //  Create our Timer
        timer = game.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, updateCounter, this);        
    },   
            
    update: function() {
        
        if(playing_status == false && waitingclick == false && complete_status == false  && first_try == false ){
            waiting_time = Math.floor(Math.random()*4+1);
            show_up_time = waiting_time*60;
            waitingclick = true;
            //console.log(waitingclick);
        }
        
        if(show_up_time > 0 && mark.scale.x == 0 && playing_status == false && complete_status == false ){
            show_up_time--;          
        }
        if(show_up_time == 0 && mark.scale.x == 0 && playing_status == false && complete_status == false ){
            alertFX.play();
            t2 = 80;
            
            mark_tween = game.add.tween(mark.scale).to({x:1,y:1},200,Phaser.Easing.Elastic.Out,true);
            mark_tween.onComplete.add(completed_mark_tween,this);
            
            
        }
        
        if(t2>0 && waitingclick == true ){
            t2--;
           
        }else if(t2 == 0 && waitingclick == true ){
            t2 = -1;
            waitingclick = false;
            mark.scale.setTo(0,0);
            
            startfishing();
        }       
            
        if(ScoreBar.y < 500 && playing_status == true){

            //console.log(PlayingTime);
            ScoreBar.y += 0.6;
            ScoreBarRed.y += 0.6;
            
        }
        if(ScoreBar.y >= 500 && playing_status == true){
           failfishing();
            
        }
        /*
        if(ScoreBar.y <= 100 && playing_status == true){
            finishfishing();
        }
        */
    },
    render: function() {

       //game.debug.text("Time until event: " + timer.duration, 32, 32);

    }
}

function FailBoardRestartBtnDown(){
    FailBoardRestartBtnHoverTween.pause();        
    FailBoardRestartBtnHover.alpha = 0;  
    FailBoardExitBtnHoverArea.inputEnabled = false;
    FailBoardRestartBtnHoverArea.inputEnabled = false;  
    restartfishing();
}
function FailBoardRestartBtnOver(){
    FailBoardRestartBtnHoverTween.resume();        
    FailBoardRestartBtnHover.alpha = 1;    
}
function FailBoardRestartBtnOut(){
    FailBoardRestartBtnHoverTween.pause();        
    FailBoardRestartBtnHover.alpha = 0;
}

function FailBoardExitBtnDown(){
    ExitFishingPage();
    FailBoardExitBtnHoverArea.inputEnabled = false;
    FailBoardRestartBtnHoverArea.inputEnabled = false;
    FailBoardExitBtnHoverTween.pause();        
    FailBoardExitBtnHover.alpha = 0;    
}
function FailBoardExitBtnOver(){
    FailBoardExitBtnHoverTween.resume();        
    FailBoardExitBtnHover.alpha = 1;    
}
function FailBoardExitBtnOut(){
    FailBoardExitBtnHoverTween.pause();        
    FailBoardExitBtnHover.alpha = 0;    
}

function GetFishContinueBtnDown(){
    timer.stop(false);
    ContinueFishing();
    GetFishExitBtnHoverArea.inputEnabled = false;
    GetFishContinueBtnHoverArea.inputEnabled = false;       
    GetFishContinueBtnHoverTween.pause();           
    GetFishContinueBtnHover.alpha = 0;        
}
function GetFishContinueBtnOver(){
    GetFishContinueBtnHoverTween.resume();           
    GetFishContinueBtnHover.alpha = 1;        
}
function GetFishContinueBtnOut(){
    GetFishContinueBtnHoverTween.pause();           
    GetFishContinueBtnHover.alpha = 0;    
    
}

function GetFishExitBtnDown(){
    GetFishExitBtnHoverArea.inputEnabled = false;
    GetFishContinueBtnHoverArea.inputEnabled = false;       
    
    GetFishExitBtnHoverTween.pause();           
    GetFishExitBtnHover.alpha = 0;    
    ExitFishingPage();
}
function GetFishExitBtnOver(){
    GetFishExitBtnHoverTween.resume();           
    GetFishExitBtnHover.alpha = 1;    
    
}
function GetFishExitBtnOut(){
    GetFishExitBtnHoverTween.pause();           
    GetFishExitBtnHover.alpha = 0;    
}

function completed_mark_tween(){
    //mark_showing_tween = game.add.tween(mark.scale).to({x:'-0.1',y:'-0.1'},400,'Quad.easeInOut',true,0,false,true).loop(true); 
}

function restartfishing(){
    complete_status = false;
    waitingclick = false;
    
    playing_status = false;    

    game.add.tween(FailBoardBG).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(FailBoardBtn).to({alpha:0},250,'Quad.easeOut',true,0);    
    FoxFalling.alpha = 0;

    FoxSitting.alpha = 1;
    FoxSittingRod.alpha = 1;
    FoxSittingAnimate.play();
    FoxSittingRodAnimate.play();    
    fishingBG.loopFull(1);
    
    startFX.play();

}


var foxpulling_tween,fishingrodpullingsheet_tween;

var counter = 0;

function updateCounter() {
    if( playing_status == true ){
        counter++;
        
    }

    //text.setText('Counter: ' + counter);
    //text.setText('Counter: ' + game.time.events.duration.toFixed(0));
    

}

function startfishing(){
    
    timer.start();
    //game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);     
    
    counter = 0;
    console.log('Level:'+FishingLevel);
    
    FoxPullingRod.animations.play("FoxPullingRod",30,true);
    FoxPullingRod.alpha = 1;
    FoxPulling.animations.play("FoxPulling",30,true);
    FoxPulling.alpha = 1;
    /*
    fishingrodpullingsheet.animations.play("fishingrodpulling",20,true);
    fishingrodpullingsheet.alpha = 1;
    
    foxpulling_tween = game.add.tween(foxpulling).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    fishingrodpullingsheet_tween = game.add.tween(fishingrodpullingsheet).to({x:'-10'},1000,'Linear',true,0,false,false).loop(true); 
    */
    ScoreBar.y = 300; 
    ScoreBarRed.y = 300; 
    mark.scale.setTo(0,0);      
    playing_status = true;       
    mark.inputEnabled = false;
    
    answercount = 0;
    CorrectCount = 0;
    PlayingTime = 0;
    
    CreateFishingPagePanel();
    create_answer_button();
    
    FoxSitting.alpha = 0;
    FoxSittingRod.alpha = 0;
    FoxSittingAnimate.stop();
    FoxSittingRodAnimate.stop();
    /*
    fishingrod_tween.pause();
    foxbody_tween.pause();
    foxtail_tween.pause();
    */
    
    game.add.tween(ScoreBarBG).to({alpha:1},300,'Quad.easeInOut',true);
    game.add.tween(ScoreBarTop).to({alpha:1},300,'Quad.easeInOut',true);
    game.add.tween(ScoreBar).to({alpha:1},300,'Quad.easeInOut',true);    
    ScoreBarTween.resume();
    /*
    foxtail.alpha = 0;
    foxtail.animations.stop("fishing");
    foxbody.alpha = 0;
    fishingrod.alpha = 0;
    */
    
    startFX.play();
    fishingBG.stop(); 
    game_fishing_music = game.add.audio('fishing');
    game_fishing_music.loopFull(1);

}
function CleanPannel(){

    NumSum.destroy();
    NumAdd1.destroy();
    NumAdd2.destroy();
    
    for(let i = 0;i<3;i++){
        FishingAnswerNum[i].destroy();
    }
       
    for(var i = 0;i<=2;i++){
        game.add.tween(answerpannel[i]).to({alpha:0},500,'Quad.easeInOut',true);
        answerpannel[i].inputEnabled = false; 
    }

    /*
    game.add.tween(bonds).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(question_green_pannel).to({alpha:0},500,'Quad.easeInOut',true,500);
    game.add.tween(question_blue_pannel1).to({alpha:0},500,'Quad.easeInOut',true,500);
    game.add.tween(question_blue_pannel2).to({alpha:0},500,'Quad.easeInOut',true,500);
    */
    game.add.tween(QuestionPanel).to({alpha:0},500,'Quad.easeInOut',true);

}

var success;

function finishfishing(){
    timer.stop(false);
    
    complete_status = true;
    playing_status = false; 
    
    CleanPannel();
    GetFishAnimation();
    /*
    scorebar_full.alpha = 1;
    scorebar_full_tween = game.add.tween(scorebar_full).to({alpha:'-0.2'},500,'Quad.easeInOut',true,0,false,true).loop(true);
    */
    ScorebarTopSuccessLight.alpha = 1;
    ScorebarTopSuccessLightTween = game.add.tween(ScorebarTopSuccessLight).to({alpha:'-0.2'},500,'Quad.easeInOut',true,0,false,true).loop(true);
    /*
    scorebar.alpha = 0;
    scorebar_tween.pause();
    */
    /*
    foxpulling_tween.pause();
    fishingrodpullingsheet_tween.pause();
    foxpulling.alpha = 0;
    fishingrodpullingsheet.alpha = 0;
    */
    FoxPulling.alpha = 0;
    FoxPullingRod.alpha = 0;
    FoxPullingAnimate.stop();
    FoxPullingRodAnimate.stop();

    success = true;
    FishingPageComplete = true;

    showupfishboard();    
    game_fishing_music.stop();
    successFX.play();   
    //FishingLevel++  ----------------------------------------------------------------------------------------------
    //console.log(FishingLevel);
    if( FishingLevel < 13){
        FishingLevel++;
        
    }
    //console.log('Add:'+FishingLevel);
    
    console.log('答對題數:'+CorrectCount);
    console.log('總答題數:'+answercount);
    //console.log('答對率:'+ (CorrectCount/answercount)*100 + '%');
    //console.log('完成時間:'+ Math.floor(PlayingTime/60) + ':' + Math.floor((PlayingTime%60)*(5/3)));
    console.log('完成時間:' + counter + '秒' );
}

function failfishing(){
    complete_status = true;
    playing_status = false; 
    
    ScoreBarTween.pause();
    ScoreBar.alpha = 0;
    
    CleanPannel();
    
    /*
    foxpulling.animations.stop("fishing");
    foxpulling.alpha = 0;
    fishingrodpullingsheet.alpha = 0;
    foxpulling_tween.pause();
    fishingrodpullingsheet_tween.pause();
    */

    
    FoxPulling.alpha = 0;
    FoxPullingRod.alpha = 0;
    FoxPullingAnimate.stop();
    FoxPullingRodAnimate.stop();    
    
    FoxFalling.animations.play("FoxFalling",25,false);
    FoxFalling.alpha = 1;
    FoxFallingRod.animations.play("FoxFallingRod",25,false);
    FoxFallingRod.alpha = 1;
 
    
    showupfailboard();
    game_fishing_music.stop();
    failureFX.play();
}

var blackBG_close_fishing_tween;

function ExitFishingPage(){
    blackBG_close_fishing_tween = game.add.tween(blackBG_close_fishing).to({alpha:1},1000,'Quad.easeIn',true); 
    blackBG_close_fishing_tween.onComplete.add(function () {
        game.state.start('LevelMap',true,true); 
        //game.state.clearCurrentState();

      }, this);
}
function level_up_fishing(){
    minusmode = true;
    addmode = false;
    ContinueFishing();
}

function ContinueFishing(){
    
    complete_status = false;
    waitingclick = false;
    
    playing_status = false;
    clean_fish_dynamic();
    game.add.tween(GetFishBoardBG).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(GetFishBoardBtn).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(GetFishBoardSeal).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(GetFishAmazingSeal).to({alpha:0},250,'Quad.easeOut',true,0);
    
    game.add.tween(ScoreBarBG).to({alpha:0},300,'Quad.easeInOut',true);
    game.add.tween(ScoreBarTop).to({alpha:0},300,'Quad.easeInOut',true);
    game.add.tween(ScoreBar).to({alpha:0},300,'Quad.easeInOut',true);  
    
    
    ScoreBarTween.pause();
        
    FoxSitting.alpha = 1;
    FoxSittingRod.alpha = 1;
    FoxSittingAnimate.play();
    FoxSittingRodAnimate.play();    
    fishingBG.loopFull(1);
    startFX.play();
 
    ScorebarTopSuccessLight.alpha = 0;
    ScorebarTopSuccessLightTween.pause();
}

function showupfishboard(){
    FishBoxDynamic();
    
    GetFishBoardBG.scale.setTo(0);
    GetFishBoardBG.alpha = 1;
    game.add.tween(GetFishBoardBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    
    GetFishBoardBtn.alpha = 0;
    GetFishBoardBtnTween = game.add.tween(GetFishBoardBtn).to({alpha:1},500,'Quad.easeOut',true,4000);  
    GetFishBoardBtnTween.onComplete.add(function(){
        GetFishExitBtnHoverArea.inputEnabled = true;
        GetFishContinueBtnHoverArea.inputEnabled = true;        
    },this);
}

function showupfailboard(){
    FailBoardBG.scale.setTo(0);
    FailBoardBG.alpha = 1;
    game.add.tween(FailBoardBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    FailBoardBtnTween = game.add.tween(FailBoardBtn).to({alpha:1},500,'Quad.easeOut',true,3000);
    FailBoardBtnTween.onComplete.add(function(){
        FailBoardExitBtnHoverArea.inputEnabled = true;
        FailBoardRestartBtnHoverArea.inputEnabled = true;          
    },this); 

}