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
        CorrectCount++;
        answercount++;
        UpdateQuestion();
        

    }else if(answerpannelcheck[0] == false && minusmode == true){
        scorebar_wrong_fx(0);
        answercount++;
        //update_question();
        
    }else if(answerpannelcheck[0] == true && addmode == true){
        energy_transfer(0);
        CorrectCount++;
        answercount++;
        UpdateQuestion();
        
        
        
    }else if(answerpannelcheck[0] == false && addmode == true){
        scorebar_wrong_fx(0);
        answercount++;
        //update_question();
    }
}

function checkanswer_fishing1(){
    if(answerpannelcheck[1] == true && minusmode == true){
        energy_transfer(1);
        CorrectCount++;
        answercount++;
        UpdateQuestion();
        

    }else if(answerpannelcheck[1] == false && minusmode == true){
        scorebar_wrong_fx(1); 
        answercount++;
        //update_question();
        
    }else if(answerpannelcheck[1] == true && addmode == true){
        energy_transfer(1);
        CorrectCount++;
        answercount++;
        UpdateQuestion();
        
        
        
    }else if(answerpannelcheck[1] == false && addmode == true){
        scorebar_wrong_fx(1);
        answercount++;
        //update_question();
    }
}

function checkanswer_fishing2(){
    if(answerpannelcheck[2] == true && minusmode == true){
        energy_transfer(2);
        CorrectCount++;
        answercount++;
        UpdateQuestion();
        

    }else if(answerpannelcheck[2] == false && minusmode == true){
        scorebar_wrong_fx(2); 
        answercount++;
        //update_question();
        
    }else if(answerpannelcheck[2] == true && addmode == true){
        energy_transfer(2);
        CorrectCount++;
        answercount++;
        UpdateQuestion();
        
        
        
    }else if(answerpannelcheck[2] == false && addmode == true){      
        scorebar_wrong_fx(2);
        answercount++;
        //update_question();
    }
}

//create question---------------------------------------------------------------------------------------

var rand;
var question_circle1,question_circle2,question_circle3,bonds;


function CreateFishingPagePanel(){

    PanelStartFx001.alpha = 1;
    PanelStartFx002.alpha = 1;
    PanelStartFx003.alpha = 1;
    PanelStartFx001Animation = PanelStartFx001.animations.play("PanelStartFx001",30,false);
    PanelStartFx002Animation = PanelStartFx002.animations.play("PanelStartFx002",30,false);
    PanelStartFx003Animation = PanelStartFx003.animations.play("PanelStartFx003",30,false);
    PanelStartFx003Animation.onComplete.add(function () {	
        PanelStartFx001.alpha = 0;
        PanelStartFx002.alpha = 0;
        PanelStartFx003.alpha = 0;
    }, this);

    game.add.tween(QuestionPanel).to({alpha:1},300,'Linear',true,300);
    UpdateQuestion();
}

function UpdateQuestion(){
    //rand = Math.floor(Math.random()*6);   
    //rand = Math.floor(Math.random()*3)*2+mode;
    var style = { font: "60px Arial", fill: "#5981A7", align: "center" };
    var ModeRand;
    if( FishingLevel == 13 ){
        ModeRand = Math.floor(Math.random()*2);    
    }else if( FishingLevel%2 == 1 ){
        ModeRand = 0;
    }else if( FishingLevel%2 == 0 ){
        ModeRand = 1;
    }
    
    var equation = createFishingEquation( ModeRand );
    //console.log(equation)
    
    //console.log(answercount);
    if( answercount == 0 ){
        if( ModeRand == 0 ){
            NumSum = game.add.text(centerX+295,centerY-229,'?', style);
            NumSum.anchor.set(0.5);
        
            NumAdd1 = game.add.text(centerX+295-95,centerY-121,equation[0], style);
            NumAdd1.anchor.set(0.5);    

            NumAdd2 = game.add.text(centerX+295+95,centerY-121,equation[1], style);
            NumAdd2.anchor.set(0.5);  
            /*
            show_question_text(-1,0);
            show_question_text(equation[0],1);
            show_question_text(equation[1],2);
            */
            minusmode = false;
            addmode = true;

        }
        if( ModeRand == 1 ){
            NumSum = game.add.text(centerX+295,centerY-229,equation[2], style);
            NumSum.anchor.set(0.5);
    
            NumAdd1 = game.add.text(centerX+295-95,centerY-121,equation[0], style);
            NumAdd1.anchor.set(0.5);    

            NumAdd2 = game.add.text(centerX+295+95,centerY-121,'?', style);
            NumAdd2.anchor.set(0.5);
            /*
            show_question_text(equation[2],0);
            show_question_text(-1,1);
            show_question_text(equation[1],2);
            */
            addmode = false;
            minusmode = true;
        }
    }
    if( answercount >= 1 ){
        //console.log('UpdateQuestion');
        if( ModeRand%2 == 0 ){
            NumSum.setText('?');
            NumAdd1.setText(equation[0]);
            NumAdd2.setText(equation[1]);
            minusmode = false;
            addmode = true;

        }   
        if( ModeRand%2 == 1 ){
            NumAdd1.setText(equation[0]);
            NumAdd2.setText('?');
            NumSum.setText(equation[2]);
            addmode = false;
            minusmode = true;          
        }

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

var FishingAnswerNum = new Array();

function create_answerstring(equation){
    var style = { font: "40px Arial", fill: "#ffffff", align: "center" };
    var answerindex = 0;
    createanswervalue(equation);
    //console.log(answer);
    var AnswerRand = Math.floor(Math.random()*3);
    for(var i = 0;i<=2;i++){
        if( answercount == 0 ){
            if( AnswerRand%3 == i ){
                if(addmode == true){
                    FishingAnswerNum[i] = game.add.text(1000+100*i, 552,equation[2], style);
                    FishingAnswerNum[i].anchor.set(0.5);
                
                    //show_number(equation[2],i);
                    answerpannelcheck[i] = true;
                }
                if(minusmode == true){
                    FishingAnswerNum[i] = game.add.text(1000+100*i, 552,equation[1], style);
                    FishingAnswerNum[i].anchor.set(0.5);
                    //show_number(equation[1],i);
                    answerpannelcheck[i] = true;
                }
            }else{
                FishingAnswerNum[i] = game.add.text(1000+100*i, 552,answer[answerindex], style);
                FishingAnswerNum[i].anchor.set(0.5);           
                //show_number(answer[answerindex],i);
                answerpannelcheck[i] = false;
                answerindex++;
            }
        }
        if( answercount >= 1 ){
             if( AnswerRand%3 == i ){
                if(addmode == true){
                    FishingAnswerNum[i].setText(equation[2]);
             
                
                    //show_number(equation[2],i);
                    answerpannelcheck[i] = true;
                }
                if(minusmode == true){
                    FishingAnswerNum[i].setText(equation[1]);
            
                    //show_number(equation[1],i);
                    answerpannelcheck[i] = true;
                }
            }else{
                FishingAnswerNum[i].setText(answer[answerindex]);
                
                //show_number(answer[answerindex],i);
                answerpannelcheck[i] = false;
                answerindex++;
            }           
        }
    }
}


function createanswervalue(equation){
    //console.log(equation);
    
    answer[0] = Math.floor(Math.random()*10);
    answer[1] = Math.floor(Math.random()*10);
    if(addmode == true){
        if(answer[0] == answer[1] || answer[0] == equation[2] || answer[1] == equation[2]){
            createanswervalue(equation);
        
        }
    }
    if(minusmode == true){
        if(answer[0] == answer[1] || answer[0] == equation[1] || answer[1] == equation[1]){
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