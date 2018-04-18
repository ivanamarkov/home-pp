function falsy(a) {
    var rez = [];
    var counter =0;

    for (var i = 0; i < a.length; i++) {
        var resultElement = a[i];

        if (!!resultElement) {
            rez[counter] = resultElement;
            counter++;
        }


    }


    return rez;

}
var result = falsy([NaN, 0, 15, false, -22, '', undefined, 47, null]);

console.log(result);
