var fs=require("fs");
var os=require("os");

var user=os.userInfo();
console.log(user);

fs.appendFile('greting.txt','hello world',function(err){
    if(err) throw err;
    console.log('data appended');
});
fs.readFile('greting.txt','utf8',function(err,data){
    if(err) throw err;
    console.log(data);
});
