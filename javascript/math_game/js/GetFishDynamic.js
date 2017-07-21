var FishRand;
function GetFishAnimation(){
    
    if( FishingLevel == 13 ){
        FishRand = Math.floor(Math.random()*0);
    }
    FoxGetFish.animations.play("FoxGetFish",20,false);
    FoxGetFish.alpha = 1;
        
    FoxGetFishRod.animations.play("FoxGetFishRod",20,false);
    FoxGetFishRod.alpha = 1;        
    
    
    if( FishingLevel == 1 || FishingLevel == 2 ){
        OrangeFish.animations.play("OrangeFish",20,false);
        OrangeFish.alpha = 1;     

        OrangeFishAnimate.onComplete.add(function () {
            OrangeFish.alpha = 0;
            OrangeFishStop.alpha = 1;
            OrangeFishStop.animations.play("OrangeFishStop",30,true);
        
        }, this); 	

    }else if( FishingLevel == 3 || FishingLevel == 4 ){

        FireFish.animations.play("FireFish",20,false);
        FireFish.alpha = 1;     
        
        FireFishAnimate.onComplete.add(function () {      
            FireFish.alpha = 0;
            FireFishStop.alpha = 1;
            FireFishStop.animations.play("FireFishStop",30,true);
            FireFishStopFire.alpha = 1;
            FireFishStopFire.animations.play("FireFishStopFire",30,false);

        },this);

    }else if( FishingLevel == 5 || FishingLevel == 6 ){
        ElectricFish.animations.play("ElectricFish",20,false);
        ElectricFish.alpha = 1;     
        
        ElectricFishAnimate.onComplete.add(function () {      
            ElectricFish.alpha = 0;
            ElectricFishStop.alpha = 1;
            ElectricFishStop.animations.play("ElectricFishStop",30,true);
        },this);
        
    }else if( FishingLevel == 7 || FishingLevel == 8 ){
        WifiFish.animations.play("WifiFish",20,false);
        WifiFish.alpha = 1;     
        
        WifiFishAnimate.onComplete.add(function () {      
            WifiFish.alpha = 0;
            WifiFishStop.alpha = 1;
            WifiFishStop.animations.play("WifiFishStop",30,true);
        },this);
            
       
    }else if( FishingLevel == 9 || FishingLevel == 10 ){
        LightBlueFish.animations.play("LightBlueFish",20,false);
        LightBlueFish.alpha = 1;     
        LightBlueFishAnimate.onComplete.add(function () {      
            LightBlueFish.alpha = 0;
            LightBlueFishStop.alpha = 1;
            LightBlueFishStop.animations.play("LightBlueFishStop",30,true);
        },this);
           
    }else if( FishingLevel == 11 || FishingLevel == 12 ){
        MedicineFish.animations.play("MedicineFish",20,false);
        MedicineFish.alpha = 1;     
        
        MedicineFishAnimate.onComplete.add(function () {      
            MedicineFish.alpha = 0;
            MedicineFishStop.alpha = 1;
            MedicineFishStop.animations.play("MedicineFishStop",30,true);
        },this);
            

    }else if( FishingLevel == 13 ){
        if( FishRand == 0 ){
            
            GlowBlueFish.animations.play("GlowBlueFish",20,false);
            GlowBlueFish.alpha = 1;     
        
            GlowBlueFishAnimate.onComplete.add(function () {      
                GlowBlueFish.alpha = 0;
                GlowBlueFishStop.alpha = 1;
                GlowBlueFishStop.animations.play("GlowBlueFishStop",30,true);
            },this);      
        /*
        }else if( FishRand >= 1 ){
        */    
        }
        
          
    }
                 
 

}
function clean_fish_dynamic(){
    game.add.tween(OrangeFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(FireFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(ElectricFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(WifiFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(LightBlueFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(MedicineFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(GlowBlueFishBox).to({alpha:0},250,'Quad.easeOut',true,0);    
    
    game.add.tween(GetFishBoxHighlight).to({alpha:0},250,'Quad.easeOut',true,0);  
    GetFishBoxHighlightAnimate.stop();
    
    OrangeFishStopAnimate.stop();
    OrangeFishStop.alpha = 0;
    
    RedFishStopAnimate.stop();
    RedFishStop.alpha = 0;
    
    ElectricFishStopAnimate.stop();
    ElectricFishStop.alpha = 0;
    
    WifiFishStopAnimate.stop();
    WifiFishStop.alpha = 0;    
    
    LightBlueFishStopAnimate.stop();
    LightBlueFishStop.alpha = 0;   
    
    MedicineFishStopAnimate.stop();
    MedicineFishStop.alpha = 0;       

    GlowBlueFishStopAnimate.stop();
    GlowBlueFishStop.alpha = 0; 
    
    FireFishStopAnimate.stop();
    FireFishStop.alpha = 0;
    FireFishStopFireAnimate.stop();
    FireFishStopFire.alpha = 0;    
    
    FoxGetFish.alpha = 0;
    FoxGetFishRod.alpha = 0;

}
function FishBoxDynamic(){
     
    game.add.tween(GetFishBoxHighlight).to({alpha:1 },500,'Quad.easeOut',true,2500);
    GetFishBoxHighlight.animations.play("GetFishBoxHighlight",30,true);
    if( FishingLevel == 1 || FishingLevel == 2 ){
        
        game.add.tween(OrangeFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }else if ( FishingLevel == 3 || FishingLevel == 4 ){
        
        game.add.tween(FireFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }else if ( FishingLevel == 5 || FishingLevel == 6 ){

        game.add.tween(ElectricFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }else if ( FishingLevel == 7 || FishingLevel == 8 ){

        game.add.tween(WifiFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }else if ( FishingLevel == 9 || FishingLevel == 10 ){

        game.add.tween(LightBlueFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }else if ( FishingLevel == 11 || FishingLevel == 12 ){

        game.add.tween(MedicineFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }else if ( FishingLevel == 13 ){
 
        game.add.tween(GlowBlueFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
    }
    if( FishingLevel < 13 ){
        GetFishBoardSeal.alpha = 0;
        GetFishBoardSeal.scale.setTo(20);
        game.add.tween(GetFishBoardSeal.scale).to({x:1,y:1},1000,'Quad.easeIn',true,3000);
        game.add.tween(GetFishBoardSeal).to({alpha:1},1000,'Quad.easeIn',true,3000);
        
    }else if( FishingLevel == 13 ){
    
        GetFishAmazingSeal.alpha = 0;
        GetFishAmazingSeal.scale.setTo(20);
        game.add.tween(GetFishAmazingSeal.scale).to({x:1,y:1},1000,'Quad.easeIn',true,3000);
        game.add.tween(GetFishAmazingSeal).to({alpha:1},1000,'Quad.easeIn',true,3000);    
    }

}