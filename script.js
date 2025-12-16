const hexArrayOne  =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexArrayTwo =['F','E','D','C','B','A',9,8,7,6,5,4,3,2,1,0];
const borderStyles=['dotted','dashed', 'double','groove','ridge','inset','outset'];
const WidthArray = [10,14,18,22,26,30,34,38,42,46,50,54];


const wrapper    = document.querySelector('.wrapper')
const button     = document.querySelector('.button');
const modButton  = document.querySelector('.modButton')
const one        = document.querySelector('.one');
const two        = document.querySelector('.two');
const three      = document.querySelector('.three');
const four       = document.querySelector('.four');
const five       = document.querySelector('.five');
const six        = document.querySelector('.six');
const seven      = document.querySelector('.seven');
const eight      = document.querySelector('.eight');

const  nine      = document.querySelector('.nine');         
const  ten       = document.querySelector('.ten');      
const  eleven    = document.querySelector('.eleven');    
const  twelve    = document.querySelector('.twelve');   
const  thirteen  = document.querySelector('.thirteen');  
const  fourteen  = document.querySelector('.fourteen'); 
const  fifteen   = document.querySelector('.fifteen');
const  sixteen   = document.querySelector('.sixteen');
const  seventeen = document.querySelector('.seventeen');
const  eighteen  = document.querySelector('.eighteen');

const  rangeSlider  = document.querySelector('.rangeSlider');
let speed = 1000;


let randomModifier = 0;
let randomStyle= Math.floor(Math.random()*borderStyles.length);



button.addEventListener('click', start);
button.addEventListener('click', buttonColor);
modButton.addEventListener('click', mod);

rangeSlider.onchange = function () {
     speed = rangeSlider.value;

}

function buttonColor() {
    
    button.style.backgroundColor = 'red';
    setTimeout(resetButton, 500);
    
}

function resetButton(){
    button.style.backgroundColor = 'white';

}

function mod() {
    randomModifier = Math.floor(Math.random()*borderStyles.length);
    if((randomModifier + randomStyle) >borderStyles.length) {
       
    }
    console.log(randomModifier);
}

function start(){
    let hexOne = '#';
    let hexTwo = '#';
    let randomStyle= Math.floor(Math.random()*borderStyles.length);
    let randomWidth= Math.floor(Math.random()*WidthArray.length);
    let width = WidthArray[randomWidth] + 'px';
    //console.log('border width-- ' + width + 'px');

    

        for(let i = 0; i < 6; i++){
            let random = Math.floor(Math.random()*hexArrayOne.length);

            hexOne += hexArrayOne[random];
            hexTwo += hexArrayTwo[random];

        }
//change all of the styles after the calculations are done
        one.style.backgroundColor   = hexOne;
        one.style.borderColor       = hexTwo;
        one.style.borderStyle       = borderStyles[randomStyle];
        one.style.borderWidth       = width;
        
        three.style.backgroundColor  = hexOne;
        three.style.borderColor      = hexTwo;
        three.style.borderStyle      = borderStyles[randomStyle];
        three.style.borderWidth      = width;

        five.style.backgroundColor   = hexOne;
        five.style.borderColor       = hexTwo;
        five.style.borderStyle       = borderStyles[randomStyle];
        five.style.borderWidth       = width;

        seven.style.backgroundColor = hexOne;
        seven.style.borderColor     = hexTwo;
        seven.style.borderStyle     = borderStyles[randomStyle];
        seven.style.borderWidth     = width;

        nine.style.backgroundColor   = hexOne;
        nine.style.borderColor       = hexTwo;
        nine.style.borderStyle       = borderStyles[randomStyle];
        nine.style.borderWidth       = width;

        eleven.style.backgroundColor   = hexOne;
        eleven.style.borderColor       = hexTwo;
        eleven.style.borderStyle       = borderStyles[randomStyle];
        eleven.style.borderWidth       = width;

        thirteen.style.backgroundColor   = hexOne;
        thirteen.style.borderColor       = hexTwo;
        thirteen.style.borderStyle       = borderStyles[randomStyle];
        thirteen.style.borderWidth       = width;

        fifteen.style.backgroundColor   = hexOne;
        fifteen.style.borderColor       = hexTwo;
        fifteen.style.borderStyle       = borderStyles[randomStyle];
        fifteen.style.borderWidth       = width;

        seventeen.style.backgroundColor   = hexOne;
        seventeen.style.borderColor       = hexTwo;
        seventeen.style.borderStyle       = borderStyles[randomStyle];
        seventeen.style.borderWidth       = width;
        



        two.style.backgroundColor = hexTwo;
        two.style.borderColor     = hexOne;
        two.style.borderStyle     = borderStyles[randomStyle + randomModifier];
        two.style.borderWidth     = width;

        four.style.backgroundColor  = hexTwo;
        four.style.borderColor      = hexOne;
        four.style.borderStyle      = borderStyles[randomStyle + randomModifier];
        four.style.borderWidth      = width;

        six.style.backgroundColor = hexTwo;
        six.style.borderColor     = hexOne;
        six.style.borderStyle     = borderStyles[randomStyle + randomModifier];
        six.style.borderWidth     = width;

        eight.style.backgroundColor  = hexTwo;
        eight.style.borderColor      = hexOne;
        eight.style.borderStyle      = borderStyles[randomStyle + randomModifier];
        eight.style.borderWidth      = width;

        ten.style.backgroundColor  = hexTwo;
        ten.style.borderColor      = hexOne;
        ten.style.borderStyle      = borderStyles[randomStyle + randomModifier];
        ten.style.borderWidth      = width;

        twelve.style.backgroundColor  = hexTwo;
        twelve.style.borderColor      = hexOne;
        twelve.style.borderStyle      = borderStyles[randomStyle + randomModifier];
        twelve.style.borderWidth      = width;

        fourteen.style.backgroundColor  = hexTwo;
        fourteen.style.borderColor      = hexOne;
        fourteen.style.borderStyle      = borderStyles[randomStyle + randomModifier];
        fourteen.style.borderWidth      = width;

        sixteen.style.backgroundColor  = hexTwo;
        sixteen.style.borderColor      = hexOne;
        sixteen.style.borderStyle      = borderStyles[randomStyle + randomModifier];
        sixteen.style.borderWidth      = width;

        eighteen.style.backgroundColor  = hexTwo;
        eighteen.style.borderColor      = hexOne;
        eighteen.style.borderStyle      = borderStyles[randomStyle + randomModifier];
        eighteen.style.borderWidth      = width;


        //console.log(hexOne);
       // console.log(hexTwo);
       console.log(randomStyle);
        console.log(randomStyle + randomModifier + 'mod'); 

        setTimeout(start,speed);
        
    }

    //function wait(ms){
//    var d = new Date();
//    var d2 = null;
//    do { 
//        d2 = new Date(); 
//    }
//    while(d2-d < ms);
//    }

        

