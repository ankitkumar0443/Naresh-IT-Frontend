let x=2.5252,k=2555695899;
console.log(typeof x); //number

let y = k.toString(16)
console.log(y) //9854d31b

console.log(typeof y)//string
console.log(typeof x)//number
let z = x.toFixed(2)
console.log(z) //2.53
// Math Methods
let a = 64, b = 27;
console.log(Math.sqrt(a)) //8
console.log(Math.cbrt(b)) //3
console.log(Math.max(5, 8, 7, 2, 6, 21))//21
console.log(Math.min(5, 8, 7, 2, 6, 21))//2
console.log(Math.round(5.24888))//5
console.log(Math.ceil(Math.random() * 6));//3 or 1 or 6 (a random number between 1 and 6 (inclusive))
console.log(Math.ceil(-3.14));//-3
console.log(Math.floor(-3.14))//-4
console.log(Math.abs(-1.41))//1.41

// // let x=2.5252,k=2555695899;
 // // console.log(typeof x);
 // // let y = k.toString(16)
 // // console.log(y)
 // // console.log(typeof y)
 // // console.log(typeof x)
 // // let z = x.toFixed(2)
 // // console.log(z) //2.53
 // // // Math Methods
 // // let a = 64, b = 27;
 // // console.log(Math.sqrt(a))
 // // console.log(Math.cbrt(b))
 // // console.log(Math.max(5, 8, 7, 2, 6, 21))
 // // console.log(Math.min(5, 8, 7, 2, 6, 21))
 // // console.log(Math.round(5.24888))
 // // console.log(Math.ceil(Math.random() * 6));
 // // console.log(Math.ceil(-3.14));
 // // console.log(Math.floor(-3.14))
 // // console.log(Math.abs(-1.41))
 
 
 // let msg = "I've understood";
 // let x = 'The gandhi said, "Good night"'
 // let y= ' hi i\'am "alok" '
 // console.log(y) //hi i'am "alok"

 // let a = 5,b=4;
 // console.log("the value is"+a+" the value of b is"+b+"and sum is "+(a+b)) //the value is5 the value of b is4and sum is 9

 // console.log(` the value is ${a} the value of b is ${b} and sum is ${(a+b)} `)
    // the value is 5 the value of b is 4 and sum is 9

 
 // let n = "prasad"
 // console.log("my name is " + n)//my name is prasad

 // console.log(`My name is  ${n}`)//My name is prasad

 
 
 // let p = "javascript";
 // console.log(p.length) //10
 // console.log(p.toUpperCase()); //JAVASCRIPT
 // console.log(p)  // javascript because strings are immutable
 // console.log(p.toLowerCase()); //javascript
 // console.log(p.charAt(4));
 // console.log(p.indexOf('a'))//1
 // console.log(p.lastIndexOf('a')) //3
 // console.log(p.concat(" is easy"))//javascript is easy
 // console.log(p.includes('scr'));//true
 // console.log(p.startsWith('ja'));//true
 // console.log(p.endsWith("ka"));//false
 // let str="JS is easy", p1="prasad"
 // console.log(str.split(' '))  //["js","is","easy"]//[ 'js', 'is', 'easy' ]

 // console.log(["js","is","easy"].join(' ')) //JS is easy
 // console.log(p1.split('a')) //["pr","s","d"]
 // console.log(p1.replace('a', 'k')) //prksad
 // console.log(p1.replaceAll('a', 'k')) //prkskd
 // console.log(p1.slice(2, 5)) //asa
 
 console.log(a)//64
 // console.log(b)
 var c = 25;
 console.log(c)//25
 let p = [5, 4, 3]
 p[20] = 55;
 console.log(p[4])//undefined