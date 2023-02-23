var number = function(busStops){
let ans = 0;
   for (let i = 0; i < busStops.length; i++){
    
        ans = ans + busStops[i][0]; 
        ans = ans - busStops[i][1];
     }     
     return ans
  }
  

