var str11 = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
var result11 = str11.match(/love/ig); //[ 'Love', 'love', 'love' ]
console.log(result11 === null || result11 === void 0 ? void 0 : result11.length); //3
var str22 = "You cannot end a sentence with because because because is a conjunction";
var result22 = str22.match(/because/ig); //[ 'because', 'because', 'because' ]
console.log(result22 === null || result22 === void 0 ? void 0 : result22.length); //3
var ct = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
var ctarr = ct.split(" ");
console.log(ctarr);
ctarr.forEach(function (element) {
    function rec(element1, len) {
        if (element1.includes("%" || "&" || "@" || "!" || "?") || len) {
            console.log(element1 + " ");
            element1 = element1.replace("%" || "&" || "@" || "!" || "?", "");
            console.log(element1 + " ");
        }
        rec(element1, element1.length - 1);
    }
    rec(element, element.length);
});
