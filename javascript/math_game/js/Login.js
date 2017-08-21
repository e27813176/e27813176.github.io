demo.userAccount = {};

demo.Login = function() {};
demo.Login.prototype = {
    preload: function() {
        game.load.atlas('LoginPage', 'javascript/math_game/assets/LoginPage/LoginPage.png', 'javascript/math_game/assets/LoginPage/LoginPage.json'); 
        game.load.audio('BtnOver', 'javascript/math_game/assets/audio/BtnOver.mp3');
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#3d3660";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.add.sprite(0,100,'LoginPage','LoginPageBG.png');
        
        passwordText = game.add.sprite(0,100,'LoginPage','password.png');
        usernameText = game.add.sprite(0,100,'LoginPage','username.png');
        
        LogInBtnHover = game.add.sprite(0,100,'LoginPage','LogInText.png');
        LogInBtnHover.Tween = game.add.tween(LogInBtnHover).to({alpha:'-0.4'},300,'Quad.easeInOut',true,0,false,true).loop(true);
        LogInBtnHover.Tween.pause();
        LogInBtnHover.alpha = 0;
        LogInBtnArea = game.add.sprite(630,610,'LoginPage','BtnArea.png');
        LogInBtnArea.alpha = 0;
        demo.Login.SetBtnHover(LogInBtnArea,LogInBtnHover);
        
        CreateNewBtnHover = game.add.sprite(0,100,'LoginPage','CreateNewAccountText.png');
        CreateNewBtnHover.Tween = game.add.tween(CreateNewBtnHover).to({alpha:'-0.4'},300,'Quad.easeInOut',true,0,false,true).loop(true);
        CreateNewBtnHover.Tween.pause();
        CreateNewBtnHover.alpha = 0;
        CreateNewBtnArea = game.add.sprite(670,690,'LoginPage','BtnArea.png');
        CreateNewBtnArea.scale.setTo(0.8,0.5);
        CreateNewBtnArea.alpha = 0;
        demo.Login.SetBtnHover(CreateNewBtnArea,CreateNewBtnHover);
        BtnOver = game.add.audio('BtnOver');
    },     
    update: function() {}    
}

demo.Login.SetBtnHover = function( HoverArea, Hover ){
    HoverArea.inputEnabled = true;
    HoverArea.input.useHandCursor = true;
    
    HoverArea.events.onInputDown.add(function(){
        
    }, this);
    HoverArea.events.onInputOver.add(function(){
        Hover.alpha = 1;
        Hover.Tween.resume();
        BtnOver.play();    
        
    }, this);
    HoverArea.events.onInputOut.add(function(){
        Hover.alpha = 0;
        Hover.Tween.pause();
        
    }, this);    
    
};

