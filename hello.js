// var a=6
// var b=5
// var c=a+b+7
// console.log(c);
// console.log(17+34)
// console.log(add(a+5,b));
// var fun=(a,b)=>a+b;
// var t=fun(69,54);
// console.log(t);
// function add(a,b)
// {
//     return a+b;
// }
// function callback()
// {
//     console.log("My name is Ajit ");
// }
// var add=function(a,b,callback)
// {
//   var c=a+b;
//   console.log("c = "+c);
//   callback();
// }
// add(3,4,callback)
// var fs=require("fs");
// var os=require("os");
// var user=os.userInfo();
// console.log(user);
// console.log(user.username);
// // fs.appendFile('greeting.txt','Hi '+user.username+'!',()=>
// // {
// //     console.log('file is created');
// // });
// console.log(fs);
const notes=require("./notes.js");
console.log("Hi, i am Ajit Kumar ")
var age=notes.age;
console.log(age);
var temp=notes.addnumber(30,14);
console.log(temp);
var _=require('lodash');
var data=["Ajit","kumar",2,2,4,3,"Ajit"];
var filter=_.uniq(data);
console.log(filter);
console.log(_.isNumber(69));
console.log(_.isString(4))