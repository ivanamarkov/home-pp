function numberWith100(num){
    resultNum="";
    var element=num+'';
    counter=0;
    for(var i=1;i<100;i++){
         resultNum+=element;
         counter++;
    }
    return parseFloat(resultNum);
}

console.log(numberWith100(9));
console.log(parseFloat(resultNum));