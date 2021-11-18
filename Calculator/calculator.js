let number=document.querySelectorAll(".num"); // note : querySelectorAll returns a nodelist of elements so we have to use a for loop to iterate in it like an array if we want to add event listener
let display= document.getElementById('display');//div id="display"
let equal= document.getElementById('equal');//= button
let del =document.getElementById('del'); //delete button
let AC =document.getElementById('AC');//AC button
var expression='' ; 
let container =document.querySelector('#container');
let screen = document.getElementById('screen'); //screen element
let width =screen.offsetWidth; //width of screen

let i=0;
let original;
 if(width < 400)
 original='45px';              //original font to retain the first font after pressing AC
 else original='60px';       
 font=original
 screen.style.fontSize=font;


 //to check if the number is bigger than the display
function checkSize(){

        if (display.offsetWidth +20 > screen.offsetWidth) //if overflow of display
        {
            if(i==0)//if first time overflowed
            {
                i++;
                font=original.slice(0,2)-20+'px'; //decrease the font by width/30  
                screen.style.fontSize=font;
                  return true;//can type more
            }    
            else // second time 
               return false;//cant type
          }
         
      

}

/*function checkSize(){      
    if(expression.length>24)  //if there are > 25 no more elements can be added to expressio or display
        return false
       else
    if(expression.length>15)
    {                          //if there are >15 elements thr font size is decreased so they can fit in display
        display.style.fontSize=font-20; 
        return true
        
    }
   else
    {display.style.fontSize=font;}// normal font size if elements < 15
    return true 

}*/
//to display the number or operator on display
function displayNum(btn){

    if(checkSize()==false)//check if numbers are bigger then display, if bigger :the number will not be displayed
    return  //does nothing , cannot add numbers


    expression+=(btn.innerText);//add the text of the button to the expression
    display.innerText=expression;//put the expression in the display element to show on screen
    

}

//for loop to add event listener on all buttons (numbers and operator)
//iterate through every button and add an event listener
for( let i=0;i<number.length;i++)
{
    number[i].addEventListener("click",function(){
    displayNum(number[i]);

    })
}
 
  
function calc(exp){
    return exp=eval(exp).toString();     //eval() to calculate the exression ,   toString sincr eval() function returns a number type and i want a string

}
equal.addEventListener('click',function(){

   expression=calc(expression);//calculate the expression

    display.innerText=expression;//display

})
//to delete the las element form expression
function delt(exp){
    
 return exp.slice(0,exp.length-1);
}
del.addEventListener('click',function(){

    expression=delt(expression);//delete last element from expression
   
    display.innerText=expression;//display


})

AC.addEventListener('click',function(){

    i=0;
    expression=''; 
    font=original;
    screen.style.fontSize=font;

          //delete everything in expression
    display.innerText=expression;//display


})

//dispplay numbers on pressing on keyboard
window.addEventListener('keypress',function(e){
if(e.key.match(/[1234567890+-/*]/))// for pressing numbers or operators
   { 
       //same as before
       if(checkSize()==false)
       return// does nothing if false
       expression+=e.key;
       display.innerText=expression;
     
}

})

// calculate on pressing = on keyboard
window.addEventListener('keydown',function(e){
if(e.key=='=')
       { 
           
           expression=calc(expression);
           if(checkSize()==false)
           return
           display.innerText=expression;

    }
    
    })

    //delete last element form expression whan pressin backspace or delete on keyboard
    window.addEventListener('keydown',function(e){
        if(e.key=='Backspace'||e.key=='Delete')
       
                   
                   expression=delt(expression)
           display.innerText=expression;


            })

            //clear all on pressing c or a on keyboard
            
window.addEventListener('keydown',function(e){
            
            if(e.key=='a'||e.key=='c')
               {
                   i=0;
                   expression='';
                   font=original;
               screen.style.fontSize=font;
               display.innerText=expression;
            }
            
            })

