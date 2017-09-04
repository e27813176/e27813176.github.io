var user = {
    name:'111',
    password:'111',
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

/*
User
|  |-- id
|  |-- password
|  |-- storage password
|  |-- etc
|
Characters
|  |-- name
|  |-- id (User)
|  |-- Equipment1 on head //store item by equipping
|  |-- Equipment2 as armor
|  |-- etc
|
Storage
|  |--id_storage
|  |--id (User)
|  |--id_item (Item) //store item by storage
|  |--etc
|
Item
   |--id_item
   |--item name
   |--item description
   |--etc
   
*/