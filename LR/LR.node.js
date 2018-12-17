var spawn=require('child_process').spawn;
console.log(spawn("./codeball2018.exe","--p1 tcp-31001 --p2 tcp-31002 --team-size 2 --duration 20000 --nitro false".split(" ")));
setTimeout(()=>{
  spawn("./app.exe","127.0.0.1 31001 9000".split(" "));
  spawn("./app.exe","127.0.0.1 31002 9000".split(" "));
},3000);
