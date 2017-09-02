demo.HomeMenu.chatroom = {

    create:function(){
        this.messageList = [];
        this.ChatRoom = game.add.graphics();
        this.ChatRoom.lineStyle(4, 0x2e0000, 1);
        this.ChatRoom.beginFill(0x8c614d);
        this.ChatRoom.drawRect(200,300,400,500);
        let Property = {
            font: '18px Arial',
            fill: '#ffffff',
            fillAlpha:1,
            fontWeight: 'bold',
            font: '25px Arial',
            width: 250,
            height:30,
            padding: 8,
            borderWidth: 1,
            borderColor: '#2e0000',
            borderRadius: 3,
            placeHolder: 'type message',
            cursorColor: '#ffffff',
            backgroundColor:'#2e0000'
            
        }
        this.message = game.add.inputField(210,720,Property);
        
        this.sendBtn = game.add.graphics();
        this.sendBtn.beginFill(0x2e0000);
        this.sendBtn.drawRect(490,720,80,50);
        this.sendBtn.events.onInputDown.add(this.sendMessage, this);
        this.sendBtn.inputEnabled = true;
        this.sendBtn.input.useHandCursor = true; 
        
        this.sendKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.sendKey.onDown.add(this.sendMessage, this);        
        
        
        var style = { font: "bold 25px Arial", fill: "#8c614d", align: "center" }; 
        this.sendText = game.add.text(500,730,'Send',style)
    
        this.messageWindow = game.add.graphics();
        this.messageWindow.beginFill(0x2e0000);
        this.messageWindow.drawRect(210,320,280,380);
        
        this.minimize = game.add.graphics();
        this.minimize.lineStyle(4, 0x2e0000, 1);
        this.minimize.beginFill(0x8c614d);
        this.minimize.drawCircle(600, 300,50);
        this.minimize.lineStyle(0);
        this.minimize.beginFill(0x2e0000);        
        this.minimize.drawRect(585, 300,30,4);
        this.minimize.events.onInputDown.add(this.hide, this);
        this.minimize.inputEnabled = true;
        this.minimize.input.useHandCursor = true; 
    
        for(let item in this){
            this[item].alpha = 0;
        }
    },
    sendMessage:function(){
        //console.log('send');
        
        if( this.message.value != '' ){
            this.messageList.push(this.message.value);
            this.message.value = '';
        }
    },
    showUp:function(){
        for(let item in this){
            game.add.tween(this[item]).to({alpha:1},500,'Linear',true,500);
        }
    },
    hide:function(){
        for(let item in this){
            game.add.tween(this[item]).to({alpha:0},500,'Linear',true,0);
        } 
        demo.HomeMenu.chatIcon.showIcon();
        
    },
};
            
            
demo.HomeMenu.chatIcon = {
    create:function(){
        this.Icon = game.add.graphics();
        this.Icon.lineStyle(4, 0x2e0000, 1);
        this.Icon.beginFill(0x8c614d);
        
        this.Icon.drawCircle(200, 300,60);
        this.Icon.lineStyle(0);
        this.Icon.beginFill(0x2e0000);
        this.Icon.drawRect(184, 290,25,4);
        this.Icon.drawRect(184, 300,25,4);
        this.Icon.drawRect(184, 310,25,4);
        
        this.Icon.drawCircle(214, 292,6);
        this.Icon.drawCircle(214, 302,6);
        this.Icon.drawCircle(214, 312,6); 
        this.Icon.anchor.setTo(200);
        
        this.Icon.events.onInputUp.add(this.hideIcon, this);
        this.Icon.inputEnabled = true;
        this.Icon.input.useHandCursor = true; 
    },
    hideIcon:function(){
        demo.HomeMenu.chatroom.showUp();
        game.add.tween(this.Icon).to({alpha:0},500,'Linear',true);
        this.Icon.inputEnabled = false;
        this.Icon.input.useHandCursor = false; 
    },
    showIcon:function(){
        game.add.tween(this.Icon).to({alpha:1},500,'Linear',true,500);
        this.Icon.inputEnabled = true;
        this.Icon.input.useHandCursor = true; 
    }
};