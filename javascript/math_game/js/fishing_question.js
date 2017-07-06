var answerpannelcheck = new Array();

var answer_number0 = new Array();
var answer_number1 = new Array();
var answer_number2 = new Array();

var question_text0 = new Array();
var question_text1 = new Array();
var question_text2 = new Array();

var questionpositionX = 1050,
    questionpositionY = 300;

var question_mark0,question_mark1;

//check answer---------------------------------------------------------------------------------------

function checkanswer_fishing0(){
    
    if(answerpannelcheck[0] == true && minusmode == true){
        energy_transfer(0);
        update_question();
        answercount++;

    }else if(answerpannelcheck[0] == false && minusmode == true){
        scorebar_wrong_fx(0);
        //update_question();
        
    }else if(answerpannelcheck[0] == true && addmode == true){
        energy_transfer(0);     
        update_question();
        answercount++;
        
        
    }else if(answerpannelcheck[0] == false && addmode == true){
        scorebar_wrong_fx(0);
        //update_question();
    }
}

function checkanswer_fishing1(){
    if(answerpannelcheck[1] == true && minusmode == true){
        energy_transfer(1);
        update_question();
        answercount++;

    }else if(answerpannelcheck[1] == false && minusmode == true){
        scorebar_wrong_fx(1);      
        //update_question();
        
    }else if(answerpannelcheck[1] == true && addmode == true){
        energy_transfer(1);
        update_question();
        answercount++;
        
        
    }else if(answerpannelcheck[1] == false && addmode == true){
        scorebar_wrong_fx(1);        
        //update_question();
    }
}

function checkanswer_fishing2(){
    if(answerpannelcheck[2] == true && minusmode == true){
        energy_transfer(2);
        update_question();
        answercount++;

    }else if(answerpannelcheck[2] == false && minusmode == true){
        scorebar_wrong_fx(2);     
        //update_question();
        
    }else if(answerpannelcheck[2] == true && addmode == true){
        energy_transfer(2);
        update_question();
        answercount++;
        
        
    }else if(answerpannelcheck[2] == false && addmode == true){      
        scorebar_wrong_fx(2);      
        //update_question();
    }
}

//create question---------------------------------------------------------------------------------------

var rand;
var question_circle1,question_circle2,question_circle3,bonds;


function create_question(){

    question_pannel1_create_fx.alpha = 1;
    question_pannel2_create_fx.alpha = 1;
    question_pannel3_create_fx.alpha = 1;
    question_pannel1_create_fx_animation = question_pannel1_create_fx.animations.play("question_pannel1_create_fx",25,false);
    question_pannel2_create_fx_animation = question_pannel2_create_fx.animations.play("question_pannel2_create_fx",25,false);
    question_pannel3_create_fx_animation = question_pannel3_create_fx.animations.play("question_pannel3_create_fx",25,false);
    /*
    question_green_pannel.animations.play("question_green_pannel_dyn",10,true);
    question_blue_pannel1.animations.play("question_blue_pannel_dyn1",10,true);
    question_blue_pannel2.animations.play("question_blue_pannel_dyn2",10,true);
    */
    game.add.tween(question_green_pannel).to({alpha:1},300,'Linear',true,300);
    game.add.tween(question_blue_pannel1).to({alpha:1},300,'Linear',true,300);
    game.add.tween(question_blue_pannel2).to({alpha:1},300,'Linear',true,300);
    game.add.tween(bonds).to({alpha:1},500,'Linear',true,300);

    update_question();
}

function update_question(){
    var equation = createEquation(20);
    //console.log(equation)
    //rand = Math.floor(Math.random()*6);   
    //rand = Math.floor(Math.random()*3)*2+mode;
    rand = Math.floor(Math.random()*3);
    if( rand%2 == 0 ){
        console.log('123');
        show_question_text(-1,0);
        show_question_text(equation[0],1);
        show_question_text(equation[1],2);

        minusmode = false;
        addmode = true;

    }
    if( rand%2 == 1 ){
        console.log('321');
        show_question_text(equation[2],0);
        show_question_text(-1,1);
        show_question_text(equation[1],2);
       
        addmode = false;
        minusmode = true;  
    }
    create_answerstring(equation);
}

function create_answer_button(){

    for(var i = 0;i<=2;i++){
        game.add.tween(answerpannel[i]).to({alpha:0.8},200,'Quad.easeInOut',true,100*i);
        answerpannel[i].inputEnabled = true;  
    }
    answerpannel[0].events.onInputDown.add(checkanswer_fishing0);
    answerpannel[1].events.onInputDown.add(checkanswer_fishing1);
    answerpannel[2].events.onInputDown.add(checkanswer_fishing2);
 
}

var answernumberX = 775,
    answernumberY = 460;

function create_answerstring(equation){

    var answerindex = 0;
    createanswervalue(equation);
   
    for(var i = 0;i<=2;i++){
        if( rand%3 == i ){
            if(addmode == true){
                show_number(equation[2],i);
                answerpannelcheck[i] = true;
            }
            if(minusmode == true){
                show_number(equation[0],i);
                answerpannelcheck[i] = true;
            }
        }else{
            show_number(answer[answerindex],i);
            answerpannelcheck[i] = false;
            answerindex++;
        }
    }
}


function createanswervalue(equation){
    console.log(equation);
    
    answer[0] = Math.floor(Math.random()*10);
    answer[1] = Math.floor(Math.random()*10);
    if(addmode == true){
        if(answer[0] == answer[1] || answer[0] == equation[2] || answer[1] == equation[2]){
            createanswervalue(equation);
        
        }
    }
    if(minusmode == true){
        if(answer[0] == answer[1] || answer[0] == equation[0] || answer[1] == equation[0]){
            createanswervalue(equation);
        
        }
    }

}

//show number image------------------------------------------------------------------------------------------------------


function show_number(num,i){
    var index = num;
    
    for(var n = 0;n<=10;n++){
        if(n == index && i == 0){
            answer_number0[n].alpha = 1;
        }else if(n != index && i == 0){
            answer_number0[n].alpha = 0;
        }else if(n == index && i == 1){
            answer_number1[n].alpha = 1;
        }else if(n != index && i == 1){
            answer_number1[n].alpha = 0;
        }else if(n == index && i == 2){
            answer_number2[n].alpha = 1;
        }else if(n != index && i == 2){
            answer_number2[n].alpha = 0;
        }
    }
 
}

function show_question_text(num,i){
    var index = num;
    
    if(num == -1 && i == 0){
        question_mark0.alpha = 0.8;
        question_mark1.alpha = 0;
        for(var n = 0;n<=10;n++){
            question_text0[n].alpha = 0;
        }
    }
    if(num == -1 && i == 1){
        question_mark0.alpha = 0;
        question_mark1.alpha = 0.8;
        for(var n = 0;n<=10;n++){
            question_text1[n].alpha = 0;
        }
    }
    
    for(var n = 0;n<=10;n++){
        if(n == index && i == 0){
            question_text0[n].alpha = 0.8;
        }else if(n != index && i == 0){
            question_text0[n].alpha = 0;
        }else if(n == index && i == 1){
            question_text1[n].alpha = 0.8;
        }else if(n != index && i == 1){
            question_text1[n].alpha = 0;
        }else if(n == index && i == 2){
            question_text2[n].alpha = 0.8;
        }else if(n != index && i == 2){
            question_text2[n].alpha = 0;
        }
    }
 
}