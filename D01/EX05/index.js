function moduloEx5(x,y) {

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

    console.log(text);
  }



  /*In D01/EX05, in the JS file, edit the function provided. Use as template your previous function. Change your code to have only one console.log after all of the if-else statements (hint: use a string variable, and change it accordingly to the logic of your code). To test this exercise run: npm run testex5*/

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
