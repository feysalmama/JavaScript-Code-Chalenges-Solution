
// sum of intiger that are divided to 3 and 5 
/*
function solution(number){
  var sum=0;
  for( let i = 0; i < number; i++){
    if (i<0){
      return 0;
    }else if (i%3==0 & i%5==0){
        sum = sum+i;
    }else{
        if(i%3==0){
          sum = sum +i;
        }else if(i%5==0){
          sum = sum+i;
        }else{
          sum = sum+0;
        }
    }
  
  }

  return sum;
}

*/


function descendingOrder(n){
  //...
  var rearranged=[];
  var current = 0;
  var next = 0;
 
    splitdigit =  Array.from(String(n),Number);
    for (let i = 1; i< splitdigit.length; i++) {
         for(let j=i-1; j >-1;j--){
           if(splitdigit[j+1] < splitdigit[j]){
             [splitdigit[j+1],splitdigit[j]]=[splitdigit[j],splitdigit[j+1]];
           }
         }
        
    }
    return Number(splitdigit.join(""));
    
}

console.log(descendingOrder(712309453));





