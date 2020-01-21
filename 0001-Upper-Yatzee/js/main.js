// inital values of dice
diceRolls = [4,3,5,5,1];
//time vars for use will larger amount of dice rolls
var d; 
var stime, etime;

//used to figure if a unique number was found in the dice rolls
var added = false;

// a double array to hold the unique number and how many times it has appeared in the rolls
var count = [];

//the sum of the unique number mulitplied by its count
// its honestly not needed but makes the code a little bit cleaner to read and see whats going on.
var sum = [];

//the largest sum found so far
var max = 0;

main();

function main() {
  d = new Date();
  stime = d.getTime() / 1000;
  getDiceCount();
  CountScore();
  findLargestScore();
  d = new Date();
  etime = d.getTime() / 1000;
  console.log("Start Time : " + stime)
  console.log("End Time : " + etime)
  console.log("Time Taken : " + (etime - stime))
  console.log("Upper Yahtzee : " + max);
}

/*
this function is used to run through the dice rolls and find all the unique numbers and how often they appear. 
This helps narrow down how many calculations we have to do later.  though with a small dice size it doesn't make much of a diffrence.
*/
function CountDice(){
  for(let i = 0; i < diceRolls.length; i++){
    added = false;
    for(let k = 0; k < count.length; k++){  
      if(diceRolls[i] == count[k][0]){
        count[k][1]++;
        added = true;
      }
    }
    if(!added){
    count.push([diceRolls[i], 1]);
    }
  }
}

// this function runs through the calculations and stores them in the sum array 
function CountScore() {
    for(let k = 0; k < count.length; k++){
    if(count[k][1] > 1){
      sum.push(count[k][0] * count[k][1]);
    }
  }
}

//this function runs through the sum array comparing each number to the last largest number it has found in the array. if its larger it sets that number as the new largest.
function findLargestScore() {
  for(let i = 0; i < sum.length; i++){
    if(sum[i] > max){
      max = sum[i];
   }
  }
}