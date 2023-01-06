function arrayFor(array){
    for(var i=0; i<array.length ; i++){
        console.log (array[i])
    }
       
}

function arrayWhile(array){
    var i=0
     while ( i<array.length ){
         console.log(array[i])
         i++
     }
 }

 function sum(array){
    var result=0;
     for(var i=0;i<array.length;i++){
        result+=array[i];
   
    }      
 return result
 }


 function sumEveryOther(array){
    var result=0;
     for(var i=0;i<array.length;i=i+2){
    result+=array[i]
    }      
 return result
 }
 
