demo.createQuestionNum = function(level,Range){
    var equation = demo.createEquation(level,Range);
    console.log(equation);
    if( level%2 == 1 ){        
        NumSum.setText('?');
        NumSum.alpha = 1;
        NumAdd1.setText(equation[0]);
        NumAdd1.alpha = 1;
        NumAdd2.setText(equation[1]);
        NumAdd2.alpha = 1;
    }
    if( level%2 == 0 ){
        NumSum.setText(equation[2]);
        NumSum.alpha = 1;
        NumAdd1.setText(equation[0]);
        NumAdd1.alpha = 1;    
        NumAdd2.setText('?');
        NumAdd2.alpha = 1;  
    }

    if( level == 5 ){
        if( Range == 0 ){
            demo.createAnswerNum(11);
            demo.CatchBugPage.correctAnswer = equation[2];
            //AnswerPanel[equation[2]-1].inputEnabled = true;
        }else{
            demo.createAnswerNum(16);
            demo.CatchBugPage.correctAnswer = equation[2] - 5;
            //AnswerPanel[equation[2]-6].inputEnabled = true;    
        }
    }
    if( level == 6 ){
        demo.createAnswerNum(1);
        if( Range == 0 ){
            demo.CatchBugPage.correctAnswer = equation[1];
            
            //AnswerPanel[equation[1]-1].inputEnabled = true;
        }
        else{
            demo.CatchBugPage.correctAnswer = equation[1] - 5;
            //AnswerPanel[equation[1]-6].inputEnabled = true;    
        }        
    }  
};
demo.createEquation = function(level,Range){
    var numberA;
    var numberB = -100;
    var numberSum = 100;

    if( level == 5 && Range == 0 ){
        this.rand = Math.floor(Math.random()*2)+1;
        switch(this.rand)
        {
            case 1:
                //console.log('case1');
                numberA = Math.floor(Math.random() * 5) + 1;
                numberB = 10;
                break;
            case 2:
                //console.log('case2');
                numberA = 10;
                numberB = Math.floor(Math.random() * 5) + 1;
                break;  
        }
        numberSum = numberA + numberB;
    }else if( level == 5 && Range == 1 ){
        this.rand = Math.floor(Math.random()*2)+1;
        switch(this.rand)
        {
            case 1:
                //console.log('case1');
                numberA = Math.floor(Math.random() * 5) + 6;
                numberB = 10;
                break;
            case 2:
                //console.log('case2');
                numberA = 10;
                numberB = Math.floor(Math.random() * 5) + 6;
                break;  
        }
        numberSum = numberA + numberB;             
    }
    var Equation = [numberA, numberB, numberSum];
    return Equation;    
    
};

function createEquation(level){
    if( level == 1 || level == 2 ){ 
        return createPlusLevelOne();
    }
    if( level == 3 || level == 4 ){
        return createPlusLevelTwo();
    }
    if( level == 5 || level == 6 ){
        return createPlusLevelThree();
    }
    if( level == 7 || level == 8 ){
        return createPlusLevelFour();
    }
    /*
    if( level == 20 ){
        return createFishingEquation();
    }
    */
    if( level == 'Tutorial' ){
        return createTutorialEquation();
        
    }
}
function createTutorialEquation(){
    var numberA;
    var numberB;

    var numberSum = 100;
    while (numberSum > 5) {

     
        numberA = Math.floor(Math.random() * 5) + 1;
        numberB = Math.floor(Math.random() * 5) + 1;

        numberSum = numberA + numberB;
    }

    var plusEquation = [numberA, numberB, numberSum];
    return plusEquation;
    
}

function createFishingEquation( ModeRand ) {
    var numberA;
    var numberB = -100;

    var numberSum = 100; //initialize numberSum,and make it bigger than 10.
    if( FishingLevel == 1 ){
        while (numberSum > 10) {
            numberA = Math.floor(Math.random() * 8) + 2;
            numberB = Math.floor(Math.random() * 2) + 1;
            
            numberSum = numberA + numberB;
        }
    }else if( FishingLevel == 2 ){
        while (numberB < 1) {
            numberSum = Math.floor(Math.random() * 9) + 1; 
            numberA = Math.floor(Math.random() * 2) + 1;
            numberB = numberSum - numberA;
        }
    }else if( FishingLevel == 3 ){
        while (numberSum > 10) {
            numberA = Math.floor(Math.random() * 9) + 1;
            numberB = Math.floor(Math.random() * 9) + 1;
            
            numberSum = numberA + numberB;
        }
    }else if( FishingLevel == 4 ){
        while (numberB < 1 ) {
            numberSum = Math.floor(Math.random() * 9) + 1;
            numberA = Math.floor(Math.random() * 8) + 1;
            
            numberB = numberSum - numberA;
        }
    }else if( FishingLevel == 5 ){

        this.rand = Math.floor(Math.random()*2)+1;
        console.log(this.rand);
        switch(this.rand)
        {
            case 1:
                //console.log('case1');
                numberA = Math.floor(Math.random() * 9) + 1;
                numberB = 10;
                break;
            case 2:
                //console.log('case2');
                numberA = 10;
                numberB = Math.floor(Math.random() * 9) + 1;
                break;  
        }
        numberSum = numberA + numberB;
    }else if( FishingLevel == 6 ){
        while( numberB < 1 || numberB > 10 ){
            numberSum = Math.floor(Math.random() * 9) + 11;
            numberA = Math.floor(Math.random() * 10) + 1;
                   
            numberB = numberSum - numberA;
            
        }
    }else if( FishingLevel == 7 ){
        numberA = Math.floor(Math.random() * 10) + 1;
        numberB = numberA;
                   
        numberSum = numberA + numberB;
    }else if( FishingLevel == 8 ){
        while( numberB < 1 || numberB > 10 ){
            numberSum = 10;    
            numberA = Math.floor(Math.random() * 9) + 1;
            numberB = numberSum - numberA;
            
        }        
    }else if( FishingLevel == 9 ){
        
        numberA = Math.floor(Math.random() * 10) + 1;
        numberB = Math.floor(Math.random() * 10) + 1;
            
        numberSum = numberA + numberB;
        
    }else if( FishingLevel == 10 ){
        while( numberB > 10 || numberB < 1 ){
            numberSum = Math.floor(Math.random() * 8) + 11;
            numberA = Math.floor(Math.random() * 9) + 1;
            
            numberB = numberSum - numberA;
        }
    }else if( FishingLevel == 11 ){
        numberA = Math.floor(Math.random() * 10) + 1;
        numberB = Math.floor(Math.random() * 10) + 1;
            
        numberSum = numberA + numberB;
    }else if( FishingLevel == 12 ){
        while( numberB < 1 || numberB > 10  ){
            numberSum = Math.floor(Math.random() * 18) + 1;
            numberA = Math.floor(Math.random() * 9) + 1;
            
            numberB = numberSum - numberA;
        }
    }else if( FishingLevel == 13 && ModeRand == 0 ){

        numberA = Math.floor(Math.random() * 10) + 1;
        numberB = Math.floor(Math.random() * 10) + 1;
                
        numberSum = numberA + numberB;
        
    }else if( FishingLevel == 13 && ModeRand == 1 ){
        while( numberB < 1 || numberB > 10  ){
            numberSum = Math.floor(Math.random() * 18) + 1;
            numberA = Math.floor(Math.random() * 9) + 1;
            
            numberB = numberSum - numberA;
        }
    }       

    var plusEquation = [numberA, numberB, numberSum];
    return plusEquation;
}

//Create plus_questions of level one, including 3 numbers - A, B, Sum (A + B = Sum).  
function createPlusLevelOne() {
    var numberA;
    var numberB = -100;
    //console.log(AxPageRand);
    var numberSum = 100; //initialize numberSum,and make it bigger than 10.
    if( AxPageRand == 0 ){
        if( level%2 == 1 ){
            while (numberSum > 5) {
       
                numberA = Math.floor(Math.random() * 9) + 1;
                numberB = Math.floor(Math.random() * 2) + 1;

                numberSum = numberA + numberB;
                //console.log(numberSum);
            }
        }
        if( level%2 == 0 ){
            while (numberB < 1 || numberB > 5 ) {

                numberSum = Math.floor(Math.random() * 9) + 1; 
                numberA = Math.floor(Math.random() * 2) + 1;
                numberB = numberSum - numberA;       
                /*
                numberA = Math.floor(Math.random() * 2) + 1;
                numberB = Math.floor(Math.random() * 5) + 1;

                numberSum = numberA + numberB;
                */
            }
            
        }
        
    }
    if( AxPageRand == 1 ){
        if( level%2 == 1 ){
            while (numberSum > 10 || numberSum < 6 ) {
       
                numberA = Math.floor(Math.random() * 9) + 1;
                numberB = Math.floor(Math.random() * 2) + 1;

                numberSum = numberA + numberB;
            }
            
        }
        if( level%2 == 0 ){
            while (numberB > 10 || numberB < 6 ) {
                numberSum = Math.floor(Math.random() * 9) + 1; 
                numberA = Math.floor(Math.random() * 2) + 1;
                numberB = numberSum - numberA; 
                /*
                numberA = Math.floor(Math.random() * 2) + 1;
                numberB = Math.floor(Math.random() * 5) + 6;

                numberSum = numberA + numberB;
                */
            }
            
        }

    }


    var plusEquation = [numberA, numberB, numberSum];
    return plusEquation;
}

//Create plus_questions of level two, including 3 numbers - A, B, Sum (A + B = Sum).  
function createPlusLevelTwo() {
    var numberA;
    var numberB = -100;

    var numberSum = 100; //initialize numberSum,and make it bigger than 10.
    if( LoggingPageRand == 0 ){
        if( level == 3 ){
            while (numberSum > 5) {
       
                numberA = Math.floor(Math.random() * 9) + 1;
                numberB = Math.floor(Math.random() * 9) + 1;

                numberSum = numberA + numberB;
            }
        }
        if( level == 4 ){
            while ( numberB < 1 || numberB > 5 ) {
                
                numberSum = Math.floor(Math.random() * 9) + 1;
                numberA = Math.floor(Math.random() * 8) + 1;
            
                numberB = numberSum - numberA;
                /*   
                numberA = Math.floor(Math.random() * 5) + 1;
                numberB = Math.floor(Math.random() * 5) + 1;

                numberSum = numberA + numberB;
                */
            }
            
        }
        
    }else{
        if( level == 3 ){
            while (numberSum > 10 || numberSum < 6 ) {
       
                numberA = Math.floor(Math.random() * 9) + 1;
                numberB = Math.floor(Math.random() * 9) + 1;

                numberSum = numberA + numberB;
            }
            
        }
        if( level == 4 ){
            while ( numberB > 10 || numberB < 6 ) {
                
                numberSum = Math.floor(Math.random() * 9) + 1;
                numberA = Math.floor(Math.random() * 8) + 1;
            
                numberB = numberSum - numberA;            
                /*
                numberA = Math.floor(Math.random() * 5) + 1;
                numberB = Math.floor(Math.random() * 5) + 6;

                numberSum = numberA + numberB;
                */
            }
            
        }

    }


    var plusEquation = [numberA, numberB, numberSum];
    return plusEquation;
}

function createPlusLevelThree() {
    var numberA;
    var numberB;

    var numberSum = 100; //initialize numberSum,and make it bigger than 10.
    if( level == 5 ){
        if( level%2 == 1 ){
            while (numberSum > 15) {
                this.rand = Math.floor(Math.random()*2)+1;
                console.log(this.rand);
                    switch(this.rand)
                    {
                    case 1:
                        console.log('case1');
                        numberA = Math.floor(Math.random() * 9) + 1;
                        numberB = 10;
                        break;
                    case 2:
                            console.log('case2');
                        numberA = 10;
                        numberB = Math.floor(Math.random() * 9) + 1;
                        break;  
                    }
                numberSum = numberA + numberB;

            }
        }
        if( level%2 == 0 ){
            while ( numberSum > 20 || numberSum < 10 ) {
                numberA = Math.floor(Math.random() * 10) + 1;
                numberB = Math.floor(Math.random() * 5) + 1;

                numberSum = numberA + numberB;
            }
            
        }
        
    }else{
        if( level%2 == 1 ){
            while (numberSum < 16 || numberSum > 19 ) {
                this.rand = Math.floor(Math.random()*2)+1;
                console.log(this.rand);
                    switch(this.rand)
                    {
                    case 1:
                        console.log('case1');
                        numberA = Math.floor(Math.random() * 9) + 1;
                        numberB = 10;
                        break;
                    case 2:
                            console.log('case2');
                        numberA = 10;
                        numberB = Math.floor(Math.random() * 9) + 1;
                        break;  
                    }
                numberSum = numberA + numberB;

            }        
        }
        if( level%2 == 0 ){
            while ( numberSum > 20 || numberSum < 10 ) {
                numberA = Math.floor(Math.random() * 10) + 1;
                numberB = Math.floor(Math.random() * 5) + 6;

                numberSum = numberA + numberB;
            }
            
        }

    }


    var plusEquation = [numberA, numberB, numberSum];
    return plusEquation;
}

//Create plus_questions of level four, including 3 numbers - A, B, Sum (A + B = Sum).
//In level four, A = B. So there is only numberA.
function createPlusLevelFour() {
    var numberA;
    var numberB;

    var numberSum = 100; //initialize numberSum,and make it bigger than 10.
    if( answercount <= totalAnswerCount/2 ){
        if( level%2 == 1 ){
  
            numberA = Math.floor(Math.random() * 5) + 1;
            numberB = numberA;
                   
            numberSum = numberA + numberB;

        }
        if( level%2 == 0 ){
            while ( numberSum > 20 || numberSum < 10 ) {
                numberA = Math.floor(Math.random() * 10) + 1;
                numberB = Math.floor(Math.random() * 5) + 1;

                numberSum = numberA + numberB;
            }
            
        }
        
    }else{
        if( level%2 == 1 ){
            while ( numberSum < 10 ) {
                numberA = Math.floor(Math.random() * 9) + 1;
                numberB = numberA;
                   
                numberSum = numberA + numberB;

            }
        }
        if( level%2 == 0 ){
            while ( numberSum > 20 || numberSum < 10 ) {
                numberA = Math.floor(Math.random() * 10) + 1;
                numberB = Math.floor(Math.random() * 5) + 6;

                numberSum = numberA + numberB;
            }
            
        }
    }
    var plusEquation = [numberA, numberB, numberSum];
    return plusEquation;    
}


//Create minus_questions of level four, including 3 numbers - A, B, Diff (A - B = Diff).  
function createMinusLevelFour() {
    var rangeB = range(1, 10);
    var numberA = 10;
    var numberB = rangeB[Math.floor(Math.random() * rangeB.length)];

    var numberDiff = numberA - numberB;

    var plusEquation = [numberA, numberB, numberDiff];
    return plusEquation;
};


//Create plus_questions of level five, including 3 numbers - A, B, Sum (A + B = Sum).  
function createPlusLevelFive() {
    var rangeAB = range(1, 11);
    var numberA = 0;
    var numberB = 0;

    var numberSum = 100; //initialize numberSum,and make it bigger than 10.

    while (numberSum > 21 || numberSum < 10) {
        numberA = rangeAB[Math.floor(Math.random() * rangeAB.length)];
        numberB = rangeAB[Math.floor(Math.random() * rangeAB.length)];

        numberSum = numberA + numberB;
    }

    var plusEquation = [numberA, numberB, numberSum];
    return plusEquation;
};


//Create minus_questions of level five, including 3 numbers - A, B, Diff (A - B = Diff).  
function createMinusLevelFive() {
    var rangeA = range(11, 19);
    var rangeB = range(2, 10);
    var numberA = 0;
    var numberB = 0;

    var numberDiff = 100; //initialize numberDiff,and make it bigger than 9.

    while (numberDiff > 9) {
        numberA = rangeA[Math.floor(Math.random() * rangeA.length)];
        numberB = rangeB[Math.floor(Math.random() * rangeB.length)];

        numberDiff = numberA - numberB;
    }

    var plusEquation = [numberA, numberB, numberDiff];
    return plusEquation;
};


//Create plus_questions of level six, including 3 numbers - A, B, Sum (A + B = Sum).  
function createPlusLevelSix() {
    var rangeAB = range(1, 11);
    var numberA = rangeAB[Math.floor(Math.random() * rangeAB.length)];
    var numberB = rangeAB[Math.floor(Math.random() * rangeAB.length)];

    var numberSum = numberA + numberB;
    
    var plusEquation = [numberA, numberB, numberSum];
    return plusEquation;
};


//Create minus_questions of level Six, including 3 numbers - A, B, Diff (A - B = Diff).  
function createMinusLevelSix() {
    var rangeA = range(2, 19);
    var rangeB = range(1, 10);

    var numberDiff = -100; //initialize numberDiff,and make it less than 1.

    while (numberDiff < 1) {
        numberA = rangeA[Math.floor(Math.random() * rangeA.length)];
        numberB = rangeB[Math.floor(Math.random() * rangeB.length)];

        numberDiff = numberA - numberB;
    }

    var plusEquation = [numberA, numberB, numberDiff];
    return plusEquation;
};