

function moduloEx6(x,y) {

  let z = x % y;
  let text = ""
  
    if (x > y) {
      if (x > y & z !==0) {
        text = "The number " + x + " is bigger than " + y + ". But the modulo of " + x + " % " + y + " is " + z;
      
      } else 
      {text = "The number " + x + " is bigger than " + y;}
    } 
    

  
    else if (x < y){
      text = "The number " + x + " is less than " + y;
    }
    else if (x = y){
      text = "The number " + x + " is equal to " + y;
    } 

  document.getElementById("output").innerHTML=text;
  }


  /* In D01/EX06, create a website that runs the JS attached file. In that file, edit the function provided. Use as template your previous function. Instead of logging a string to the console, create a h3 tag with an id of ‘output’, and change the text of the tag according to the logic you implemented. This exercise does not have an automated test. Run it in your browser, and check the results.

*/ 