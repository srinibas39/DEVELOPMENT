var name = "steve";
function fun() {
    var b = 10;
    console.log(name);
    function y() {
        console.log(b);
    }
    b=100;
    return y;
    


}
var newfun = fun();
newfun();