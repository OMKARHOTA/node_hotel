const add=function(a,b,prince){
    var result=a+b;
    console.log(result);
    prince();
}
function callback(){
console.log('now callback');
}
add(3,4,function(){
    console.log('mow node');
});

console.log("server page loaded");
