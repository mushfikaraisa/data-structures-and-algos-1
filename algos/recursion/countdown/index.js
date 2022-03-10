function countdown(n){
    let countdownString = ""
    if(n <= 0){
    return countdownString + "Liftoff!";
  } else {
    countdownString += `${n}, `
  }
     return countdownString += countdown(n - 1)
  }
console.log(countdown(5));
module.exports = countdown
