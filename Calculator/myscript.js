

//to display numbers on screen

function screen(num){ //expects a number

    /* let content=document.getElementById("result")
    console.log(content); 

    instead o f accessing an id like this..simply type

    idname.content (in this case there is no content only value)
    
    */

   display.value += num;
}


//to clear display display contents are replaced with empty string
function clearAll(){
    display.value ="";
}


//back button  slice(START INDEX,END INDEX)----negative value given to end index so that the last value will get spliced
function back(){
    display.value =display.value.slice(0,-1);
}


//display result

function result(){
    try {
        display.value=eval(display.value) //eval() evaluates the expression
        
    } catch (error) {
        display.value=`syntax error`
        setTimeout(() => {
            clearAll()   
        }, 2000);
    }
}