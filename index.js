/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 19;
if(votingAge > 18){
    console.log(true);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)//

let first_var;
let sec_var = 4;
if(sec_var => 5){
    first_var="Rafiullah Rahmati"
}
console.log(first_var);


//Task c: Convert string ("1999") to integer (1999)  (no function required) 
// hint look up the Number method
var x = "1999"
Number(x)
console.log(x);



//Task d: Write a function to multiply a*b 

function multiply(a,b){
    return a*b;
}
multiply(5,4);


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function inDogYears(){
    let age = prompt("What is your age?");
    let formula = age * 7;
    return formula;
}
console.log("This is your age for Dog" , inDogYears());



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

function dogFeeder(w,a){
    let food2EET = 0;
    if(a >= 1){
        if(w <= 5){
            food2EET = (w * .05) ;
            return food2EET;
        } else if(w <= 10 && w >= 6){
            food2EET = (w * .04) ;
            return food2EET;
        } else if(w <= 15 && w >= 11){
            food2EET = (w * .03) ;
            return food2EET;
        } else if(w > 15 ) {
            food2EET =  (w * .02);
            return food2EET;
        }
    } else{
        if (a < 1 && a >= 7 / 12) {
            return w * 0.04;
        } else if (a < 7 / 12 && a >= 4 / 12) {
            return w * 0.05;
        } else if (a < 4 / 12 && a >= 2 / 12) {
            return w * 0.1;
        } else if (a <= 1 / 12) {
            return 'mother';
        }
    }
}

console.log(dogFeeder(15,1));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function km_to_miles(km){
    return km*0.621
}
console.log(km_to_miles(1))



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feet_to_cm(feet){
    return feet*30.48;
}
console.log(Math.round(feet_to_cm(3)));




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(num){
    for(let i = 99; i<num;i--){

    }
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grade_score(grade){
    if(grade>=90 && grade<=100){
      console.log("A Grad")
    }
    else if(grade>=80 && grade<=90){
      console.log("B Grade")
    }
    else if(grade>=70 && grade<=80){
      console.log("Cs Grade")
    }
    else if(grade>60 && grade<=70){
      console.log("D Grade")
    }
    else{
      console.log("F you are faild")
    }
  }
grade_score(90);
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(let i = 0; i < str1.length ; i++)
  {
    if (vowel_list.indexOf(str1[i]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("Rafiullah Rahmati"))




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





