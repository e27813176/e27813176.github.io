var user = {
    name:'FunFang',
    password:'',
    level:1
};

demo.user = {
    create:function(){
        var style = { font: "bold 20px Arial", fill: "#f6ebab", align: "center" }; 
        this.panel = game.add.image(100,150,'UserPanel');
        this.name = game.add.text(250,188,user.name, style);
        style.font = 'bold 25px Arial';
        this.level = game.add.text(117,239,user.level, style);
    }
}