var Light2D = new Array();
var Light2DTween = new Array();
var Light2DShowUpTween = new Array();



demo.MixingPage = function() {};
demo.MixingPage.prototype = {
    preload: function() {
        game.load.image('MixingPageBG','javascript/math_game/assets/MixingPage/MixingPageBG.jpg');
 
        game.load.atlas('Light', 'javascript/math_game/assets/MixingPage/Light.png', 'javascript/math_game/assets/MixingPage/Light.json');
        
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#000";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //BG--------------------------------------------------------------
        MixingPageBG = game.add.sprite(0,100,'MixingPageBG');
        MixingPageBG.events.onInputDown.add(MixingPageBGDown, this);
        MixingPageBG.inputEnabled = true;
        //Light---------------------------------------------------------------------------------
        for (i = 0 ; i < 9 ; i++) {
            Light2D[i] = new Array(9);
            Light2DTween[i] = new Array(9);
            //Light2DShowUpTween[i] = new Array(9);
        }
        for (i = 0 ; i < 9 ; i++) {
            for (j = 0 ; j < 9 ; j++) {
                Light2D[i][j] = game.add.sprite(47*j,100,'Light','Light1-'+(i+1)+'.png');
                Light2DTween[i][j] = game.add.tween(Light2D[i][j]).to({alpha:0.8},500,'Linear',true,j*100,false,true).loop(true);
                Light2DTween[i][j].pause();
                Light2D[i][j].alpha = 0;
            }
        }        
    },     
    
    update: function() {}    
}
function MixingPageBGDown(){
    height = Math.floor(Math.random()*10)+1;
    width = Math.floor(Math.random()*10)+1;
    for (i = 0 ; i < 9 ; i++) {
        for (j = 0 ; j < 9 ; j++) {
            Light2DTween[i][j].pause();
            Light2D[i][j].alpha = 0;
        }
    }    
    for (i = 0 ; i < 9 ; i++) {
        Light2DShowUpTween[i] = new Array(9);
    }
    for (i = 0 ; i < height ; i++) {
        for (j = 0 ; j < width ; j++) {
            if( j > 0 ){
                Light2DShowUpTween[i][j] = game.add.tween(Light2D[i][j]).to({alpha:1},100,'Linear',true,height*100 + 100*j);
                
            }else{
                Light2DShowUpTween[i][j] = game.add.tween(Light2D[i][j]).to({alpha:1},100,'Linear',true,i*100+j*500);
            
            }
        }
    }
    Light2DShowUpTween[height-1][width-1].onComplete.add(function(){
        console.log('ShowUp');
        for (i = 0 ; i < height ; i++) {
            for (j = 0 ; j < width ; j++) {
                Light2DTween[i][j].resume();
            }
        }
    },this); 
    
    /*
    for(let i = 1;i<height;i++){                 
        //game.add.tween(Light1[i]).to({alpha:1},200,'Linear',true,i*100+500);
        // game.add.tween(Light1[i]).to({alpha:0.5},500,'Linear',true,i*100,false,true).loop(true);
            
    }
    */
}