function reverse(num) {
    var num1='';
    num1+=num;
    // num = num + "";//pretvaram u string
    var output = "";
    var lastIndex = num1.length - 1;
    for (var i = 0; i < num1.length; i++) {
        var element = num1[lastIndex - i];
        output += element;

    }
    var reverseNum = parseFloat(output);
    return reverseNum;

}
var result = reverse(98765);
console.log(typeof result);
console.log(result);

