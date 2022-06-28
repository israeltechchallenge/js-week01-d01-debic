function modulo(x,y) {

let z = x % y;

  if (x > y) {
    console.log("The number " + x + " is bigger than " + y);
  } 
  
  if (x > y & z !==0) {
    console.log("The modulo of " + x + " % " + y + " is " + z);
  
  } 

  else if (x < y){
    console.log("The number " + x + " is less than " + y);
  }
  else if (x = y){
    console.log("The number " + x + " is equal to " + y);
  } 
}

/*Extend your code, to print “The modulo of X % Y is Z”, only if X is bigger than Y, and if the module to X % Y isn’t zero. It still should print the previous lines in case X is less than Y or X equals Y. To test this exercise run: npm run testex4*/

// Do not remove or change this line, or the tests won't work
export { modulo };
