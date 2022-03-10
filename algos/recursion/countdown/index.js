function countdown(n){
   
    if(n == 1){
    return 1;
  }
    
    return countdown(n - 1)
  }
console.log(countdown(5));
module.exports = countdown