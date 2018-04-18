function methodPush(arr,elem){
    var pos=arr.length;
    var newArray=[];
    var counter=0;
    for(var i=0;i<=pos;i++){
        if(i==pos){
            arr[i]=elem;
        }
        newArray[counter]=arr[i]
    counter++;
    }
    return newArray;
}
console.log(methodPush([0,200,300],'ivana'));
