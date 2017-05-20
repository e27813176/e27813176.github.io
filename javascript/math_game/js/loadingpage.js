
demo.loadingpage = function() {};
demo.loadingpage.prototype = {
    preload: function() {
       
    },

    create: function() {
        game.stage.backgroundColor = '#182d3b';
        game.load.onLoadStart.add(loadStart, this);
        game.load.onFileComplete.add(fileComplete, this);
        game.load.onLoadComplete.add(loadComplete, this);
        start();
 
    },
    update: function() {
 
    }
  

    
};

function start() {
        game.load.atlas('fishingpage_sheet001', 'assets/fishingpage_atlas001.png', 'assets/fishingpage_atlas001.json');
        game.load.atlas('fishingpage_sheet002', 'assets/fishingpage_atlas002.png', 'assets/fishingpage_atlas002.json');
        game.load.atlas('fishingpage_sheet003', 'assets/fishingpage_atlas003.png', 'assets/fishingpage_atlas003.json');
        game.load.atlas('fishingpage_sheet004', 'assets/fishingpage_atlas004.png', 'assets/fishingpage_atlas004.json');
        game.load.atlas('fishingpage_sheet005', 'assets/fishingpage_atlas005.png', 'assets/fishingpage_atlas005.json');
        game.load.atlas('scorebar_fx_atlas', 'assets/scorebar_fx_atlas.png', 'assets/scorebar_fx_atlas.json');
        
        game.load.image('blackBG','assets/blackBG.jpg');
        game.load.image('BG','assets/BG.jpg');
        game.load.image('correct_fx','assets/whiteBG.png');
        
        //button--------------------------------------------------------------------------------------------------------
        game.load.spritesheet('button_getfish_continue','assets/fishingpage/button_continue_sheet.png',134,82);
        game.load.spritesheet('button_getfish_backhome','assets/fishingpage/button_back_home_sheet.png',134,82);
        game.load.spritesheet('button_finish_sheet','assets/fishingpage/button_finish_sheet.png',134,82);
        game.load.spritesheet('button_restart_sheet','assets/fishingpage/button_restart_sheet.png',134,82);
  
        game.load.image('mark_tutorial','assets/mark.png');
        //fx
   
        game.load.audio('fishing', 'assets/audio/fishing.mp3');
        game.load.audio('rightFX', 'assets/audio/rightFX.mp3');
        game.load.audio('wrongFX', 'assets/audio/wrongFX.mp3');
        game.load.audio('successFX', 'assets/audio/successFX.mp3');
        game.load.audio('failureFX', 'assets/audio/failureFX.mp3');
        game.load.audio('alertFX', 'assets/audio/alertFX.mp3');
        game.load.audio('startFX', 'assets/audio/startFX.mp3');
        game.load.audio('fishingBG', 'assets/audio/fishingBG.mp3');
        game.load.audio('clickFX', 'assets/audio/clickFX.mp3');  
        game.load.audio('add_energyFX', 'assets/audio/add_energyFX.mp3');  
        game.load.start();


}
var text;
var x = 32;
var y = 80;

function loadStart() {
    
	text = game.add.text(32, 32, 'Click to start load', { fill: '#ffffff' });

}

//	This callback is sent the following parameters:
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

	text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

	var newImage = game.add.image(x, y, cacheKey);

	newImage.scale.set(0.3);

	x += newImage.width + 20;

	if (x > 700)
	{
		x = 32;
		y += 332;
	}

}

function loadComplete() {

    game.state.start('state3');

}