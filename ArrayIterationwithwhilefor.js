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

 function sumStartAt(array,index){
    var result=0;
    for (var x=index;x<array.length;x++){
        result+=array[x]
    }
        return result
}
 

function min(array){
    var x=array[0];
    for (var i=0;i<array.length;i++){
        if (array[i]< x){
            return array[i]
        }
        if (array[i]> x){
            return x
        }
    }
}

function max(array){
    var x=array[array.length-1];
    for (var i=0;i<array.length;i++){
        if (array[i]>x){
            return array[i]
        }
        if (array[i]<x){
            return x
        }
    }
}


function shortestString(array){
    var x=array[0].length;
    for (var i=0;i<array.length;i++){
        if (array[i].length <x){
            return array[i].length
        }
    if (array[i].length >x){
        return x
    }
    }
}


function longestString(array){
    var x=array[array.length-1];
    for (var i=0;i<array.length;i++){
        if (array[i].length > x.length){
            return array[i].length
        }
    if (array[i].length < x.length){
        return x.length
    }
    }
}