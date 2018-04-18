function popMethod(_array){
    var newArray=[];
    var counter=0;
    for (var i=0;i<_array.length-1;i++){
        var element=_array[i];
       newArray[counter]=element;
       counter++;
    }
    return newArray;
}
var result=popMethod([100,200,500]);
console.log(result);
