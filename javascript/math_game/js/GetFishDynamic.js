var rand_fish;
function GetFishAnimation(){
    if( FishingLevel == 13 ){
        rand_fish = Math.floor(Math.random()*20);
    }
    FoxGetFish.animations.play("FoxGetFish",20,false);
    FoxGetFish.alpha = 1;
        
    FoxGetFishRod.animations.play("FoxGetFishRod",20,false);
    FoxGetFishRod.alpha = 1;        


    if( FishingLevel == 1 || FishingLevel == 2 ){
        OrangeFish.animations.play("OrangeFish",20,false);
        OrangeFish.alpha = 1;     

        FoxGetFishAnimate.onComplete.add(function () {	
            OrangeFish.alpha = 0;
            OrangeFishStop.alpha = 1;
            OrangeFishStop.animations.play("OrangeFishStop",30,true);
            
        }, this);        
    }else if( FishingLevel == 3 || FishingLevel == 4 ){
        RedFish.animations.play("RedFish",20,false);
        RedFish.alpha = 1;     
        
        FoxGetFishAnimate.onComplete.add(function () {	
            RedFish.alpha = 0;
            RedFishStop.alpha = 1;
            RedFishStop.animations.play("RedFishStop",30,true);
            
        }, this);     
    }else if( FishingLevel == 5 || FishingLevel == 6 ){
        YellowFish.animations.play("YellowFish",20,false);
        YellowFish.alpha = 1;     
        
        FoxGetFishAnimate.onComplete.add(function () {	
            YellowFish.alpha = 0;
            YellowFishStop.alpha = 1;
            YellowFishStop.animations.play("YellowFishStop",30,true);
            
        }, this);        
        
    }else if( FishingLevel == 7 || FishingLevel == 8 ){
        LightGreenFish.animations.play("LightGreenFish",20,false);
        LightGreenFish.alpha = 1;     
        
        FoxGetFishAnimate.onComplete.add(function () {	
            LightGreenFish.alpha = 0;
            LightGreenFishStop.alpha = 1;
            LightGreenFishStop.animations.play("LightGreenFishStop",30,true);
            
        }, this);        
           
    }else if( FishingLevel == 9 || FishingLevel == 10 ){
        LightBlueFish.animations.play("LightBlueFish",20,false);
        LightBlueFish.alpha = 1;     
        
        FoxGetFishAnimate.onComplete.add(function () {	
            LightBlueFish.alpha = 0;
            LightBlueFishStop.alpha = 1;
            LightBlueFishStop.animations.play("LightBlueFishStop",30,true);
            
        }, this);        
           
    }else if( FishingLevel == 11 || FishingLevel == 12 ){
        PurpleFish.animations.play("PurpleFish",20,false);
        PurpleFish.alpha = 1;     
        
        FoxGetFishAnimate.onComplete.add(function () {	
            PurpleFish.alpha = 0;
            PurpleFishStop.alpha = 1;
            PurpleFishStop.animations.play("PurpleFishStop",30,true);
            
        }, this);        
           
    }else if( FishingLevel == 13 ){
        
    }

}
function clean_fish_dynamic(){
    game.add.tween(OrangeFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(RedFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(YellowFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(LightGreenFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(LightBlueFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(PurpleFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
    
    game.add.tween(GetFishBoxHighlight).to({alpha:0},250,'Quad.easeOut',true,0);  
    GetFishBoxHighlightAnimate.stop();
    
    OrangeFishStopAnimate.stop();
    OrangeFishStop.alpha = 0;
    
    RedFishStopAnimate.stop();
    RedFishStop.alpha = 0;
    
    YellowFishStopAnimate.stop();
    YellowFishStop.alpha = 0;
    
    LightGreenFishStopAnimate.stop();
    LightGreenFishStop.alpha = 0;    
    
    LightBlueFishStopAnimate.stop();
    LightBlueFishStop.alpha = 0;   
    
    PurpleFishStopAnimate.stop();
    PurpleFishStop.alpha = 0;       
    
    FoxGetFish.alpha = 0;
    FoxGetFishRod.alpha = 0;

}
function FishBoxDynamic(){
     
    game.add.tween(GetFishBoxHighlight).to({alpha:1 },500,'Quad.easeOut',true,2500);
    GetFishBoxHighlight.animations.play("GetFishBoxHighlight",30,true);
    if( FishingLevel == 1 || FishingLevel == 2 ){
        
        game.add.tween(OrangeFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }else if ( FishingLevel == 3 || FishingLevel == 4 ){
        
        game.add.tween(RedFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }else if ( FishingLevel == 5 || FishingLevel == 6 ){

        game.add.tween(YellowFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }else if ( FishingLevel == 7 || FishingLevel == 8 ){

        game.add.tween(LightGreenFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }else if ( FishingLevel == 9 || FishingLevel == 10 ){

        game.add.tween(LightBlueFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }else if ( FishingLevel == 11 || FishingLevel == 12 ){

        game.add.tween(PurpleFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }else if ( FishingLevel == 13 ){

        game.add.tween(PurpleFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }
    GetFishBoardSeal.alpha = 0;
    GetFishBoardSeal.scale.setTo(20);
    game.add.tween(GetFishBoardSeal.scale).to({x:1,y:1},1000,'Quad.easeIn',true,3000);
    game.add.tween(GetFishBoardSeal).to({alpha:1},1000,'Quad.easeIn',true,3000);

    /*
    else if ( rand_fish == 3 ){
        game.add.tween(fishbox_green.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }else if ( rand_fish == 4 ){
        game.add.tween(fishbox_light_blue.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }else if ( rand_fish == 5 ){
        game.add.tween(fishbox_grey.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }else if ( rand_fish == 6 ){
        game.add.tween(fishbox_dark_blue.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }else if ( rand_fish == 7 ){
        game.add.tween(fishbox_red.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    }
   */
}