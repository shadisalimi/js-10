// According to your js10 session, write a code that shows why we shouldn't use var?
// we can declure many time It causes mistakes, just work true in function

var names="Shadi"
var names="hosna"

console.log(names);
// show hosna to us

for(var i=0 ; i<=10 ;i++){
    console.log(i);
}
console.log(i);
// we can get clg anywhere not just in curly braces
