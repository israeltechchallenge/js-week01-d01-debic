function getRandomInt() {
  return Math.floor(Math.random() * 100) + 1;

}



function moduloEx7() {
  let x = getRandomInt();
  let y = getRandomInt();
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

moduloEx7();