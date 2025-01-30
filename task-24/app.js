// #1
// let i = prompt("Ikirəqəmli ədəd daxil edin")
// i = Number(i);
// while (i<100) {
//     i += 7;
// }
// console.log(i);


// #2
// let anyNum = prompt("Ededi daxiledin")
// anyNum = Number(anyNum);
// while (anyNum>0) {
//     console.log("I know how to use cycles");
//     anyNum--;
// }

// #3
// for (let i = 100; i < 1000; i+=10) {
//     console.log(i);
// }


// #4
// let sum = 0;
// for (let i = 1; i < 100; i++) {
//     if(i%2!=0){
//         sum += i;
        
//     }
    
// }
// console.log(sum);


// #5///////////////
// let num = prompt("Eded daxil edin")
// let sum = 0;
// for (let i = 1; i <=1000; i++) {
//    if (i%num===0) {
//     sum += i;
//    }
    
// }
// console.log(sum);

// #5
// let num = prompt("Deyeri daxil edin")
// for (let i = 100; i <= 999; i++) {
//     if (i%num == 0) {
//         console.log(i);
        
//     }
    
// }






// #6///////////////
// let x = prompt("Eded daxil edin")


// function isPrime(n){
//     let prime = true;
//     for (let i = 2; i < n; i++) {
//         if (n%i == 0) {
//             prime = false
//         }
        
//     }
//     return prime
// }

// function numbers(n){
//     for (let i = n; i >= 1; i--) {
//         if (isPrime(i)) {
//             console.log(i);
            
//         }
        
//     }
// }
// numbers(x)






// #7
// let sum = 1;
// for (let i = 1; i < 11; i++) {
//     sum *= i;
    
// }
// console.log(sum);



// vurma cedveli
// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
       
//         console.log(`${i} x ${j} = ${i*j}`);
        
//     }
    
// }



// #8//////////////
// let text = prompt("Metn daxil edin")
// let reversedText = '';
// for (let i = text.length - 1; i >= 0; i--) {
//   reversedText += text[i];
// }
// console.log(reversedText);



// let str = prompt("Texti daxil edin")


// function reversString(){
//     let reversedStr = ""
//     for (let i = str.length -1; i >= 0 ; i--) {
//         reversedStr+=str[i]
        
//     }
//     return reversedStr
// }
// console.log(reversString(str));




// #9
// let text = prompt("Metni daxil et")
// let index = text.indexOf(".")
// console.log(index);


// let str = "Hel.lo."
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == ".") {
//         console.log(i);
//         break
//     }
    
// }



// #10///////////
// let text = prompt("Metni daxil et")
// if (/\d/.test(text)) {
//     console.log("Metnde reqemlerden istifade olunub");
    
// }else{
//     console.log("Metnde reqemlerden istifade olunmayib");
// }


// let str = "Hello"
// function reqemVar(string){
//     let isTrue = false;
//     for (let i = 0; i < string.length; i++) {
//         if (!isNaN(string[i])) {
//             isTrue = true;
//             return isTrue
//         }
        
//     }
//     return isTrue;
// }

// function test(str){
// if (reqemVar(str)) {
//     console.log("Metnde reqem var");
    
// }else{
//     console.log("Metnde reqem yoxdur");
    
// }
// }
// test(str)