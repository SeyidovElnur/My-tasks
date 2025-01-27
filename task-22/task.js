// #1
// let bookPrice = 750;
// let bookAmount = 14;
// console.log(bookPrice*bookAmount);

// #2
// let kmhSpeed = 75;
// let msSpeed = kmhSpeed*1000/3600;
// console.log(msSpeed);

// #3
// let age = prompt("Yasinizi daxil edin")
// console.log(age*365);

// #4
// let num = prompt("Ededi daxil edin")
// let first = num**5
// let second = num%3
// let numem = `${first} ${second}`
// console.log(numem);

// #5
// let firstName = prompt("Adinizi daxil edin")
// let lastName = prompt("Soyadinizi daxil edin")
// let fullName = `Sizin adiniz ${firstName} ${lastName}. Tanışlığımıza çox şadam!`
// console.log(fullName);

// #6
// let firstName = prompt("Adinizi daxil edin")
// let lastName = prompt("Soyadinizi daxil edin")
// let fullName = `Sizi bir daha görməyimizə şadıq,  ${firstName} ${lastName}.`
// console.log(fullName);

// #7
// let fullName = "Murad Orucov"
// console.log(fullName.length);

// #8
// let firstName = "Murad"
// let lastName = "Orucov"
// let fullName = firstName.charAt(0) + " " + lastName.charAt(0);
// console.log(fullName);

// #9
// let firstName = prompt("Adinizi daxil edin")
// let lastName = prompt("Soyadinizi daxil edin")
// let eks = firstName.replaceAll(firstName,lastName) + " " + lastName.replaceAll(lastName,firstName)
// console.log(eks);

// #10
// let firstName = prompt("Adinizi daxil edin")
// let helloName = `Salam ${firstName}!`
// console.log(helloName);

// #11
// let firstNum = prompt("Birinci reqemi daxil edin")
// let lastNum = prompt("Ikinci reqemi daxil edin")
// console.log(+firstNum + +lastNum);
// console.log(firstNum-lastNum);
// console.log(firstNum*lastNum);
// console.log(firstNum/lastNum);

// #12
// let a = 12345
// let b = 98765
// let cem = a*b
// let cemStr = cem.toString()
// let altinci = cemStr.charAt(5)
// console.log(altinci);

// #13
// 1, -1, NaN, 2, 9px, $9, 2, NaNpx, Infinity, -95, -14, 1, NaN

// #14 
// let firstNum = prompt("Birinci reqemi daxil edin")
// let secondNum = prompt("Ikinci reqemi daxil edin")
// let thirtNum = prompt("Ucuncu reqemi daxil edin")
// let lastNum = prompt("Dorduncu reqemi daxil edin")
// let sum = +firstNum + +secondNum + +thirtNum + +lastNum
// console.log(sum);

// #15 
// let fullName = prompt("Adinizi ve Soyadinizi daxil edin")
// let firstName = fullName.split(" ")[0]
// let fnm = `Salam, ${firstName}`
// console.log(fnm);

// #16
// let price = prompt("Deyer daxil edin")
// let manat = price.split(".")[0]
// let coin = price.split(".")[1]
// let total = `${manat} manat ${coin} qepik`
// console.log(total);

// #17
// let maash = prompt("Emek haqqinizi daxil edin")
// let vergi = maash * 13 / 100
// let notvergi = +vergi + +maash
// console.log(notvergi);

// #18
// let fullName = prompt("Adinizi Soyadinizi ve Atanizin adini daxil edin")
// let ad = fullName.split(" ")[0]
// let soyad = fullName.split(" ")[1]
// let ata = fullName.split(" ")[2]
// let soyad1 = soyad.charAt(0)
// let ata1 = ata.charAt(0)
// let otec = `${ad}.${soyad1}.${ata1}`
// console.log(otec);

// #19
// let a = 10
// let b = 20
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);

// #20
// let age = prompt("Yasinizi daxil edin")
// if(age>=18){
//     console.log("Access denied");
    
// }else{
//     console.log("Access granted");
    
// }

// #21 ///////
// let reqem = prompt("Uç ikirəqəmli ədəd daxil edin")
// let num1 = reqem.split(" ")[0]
// let num2 = reqem.split(" ")[0]
// let num3 = reqem.split(" ")[0]
// if(num1<num2){
//     console.log(num2);
    
// }else if(num1>num2){
//     console.log(num1);
    
// }else if (num2<num3){
//     console.log(num2);
      
// }else if(num2>num3){
//     console.log(num3);
// }else{
//     console.log("Ferqli reqemleri daxil edin");
    
// }


// #22
// let year = prompt("Il daxil edin")
// let uzun = year%4==0
// if(uzun){
//     console.log("İl uzun ildir");
    
// }else{
//     console.log("İl uzun il deyil");
    
// }

// #23
// let gender = prompt("Cinsinizi daxil edin")
// if(gender=="M"){
//     console.log("Male");
    
// }else if(gender=="F"){
//     console.log("Female");
    
// }else{
//     console.log("Yalnisdir");
    
// }


// №21 chatgpt
// let reqem = prompt("Üç fərqli ikirəqəmli ədəd daxil edin"); 
// let nums = reqem.split(" "); // Разделяем введённые числа по пробелу

// // Преобразуем их в числа
// let num1 = parseInt(nums[0]);
// let num2 = parseInt(nums[1]);
// let num3 = parseInt(nums[2]);

// // Проверка на уникальность чисел
// if (num1 === num2 || num1 === num3 || num2 === num3) {
//     console.log("Xətalı giriş! Ədədler təkrarlanır.");
// } else {
//     // Находим среднее число из трёх
//     let sortedNums = [num1, num2, num3].sort((a, b) => a - b); // Сортируем числа
//     console.log("Orta ədəd: " + sortedNums[1]); // Выводим среднее (второе число после сортировки)
// }




// #21
// let nums = prompt("3 dene 2 reqemli eded daxil edin")
// let num1 = nums.split(" ")[0]
// let num2 = nums.split(" ")[1]
// let num3 = nums.split(" ")[2]


// // num3>num1>num2

// if (+num1 > +num2 && +num1 < +num3 || +num1 < +num2 && +num1 > +num3) {
//     console.log(num1);
    
// }else if (+num2 > +num1 && +num2 < +num3 || +num2 < +num1 && +num2 > +num3) {
//     console.log(num2);
// }else if (+num3 > +num1 && +num3 < +num2 || +num3 < +num1 && +num3 > +num2) {
//     console.log(num3);
// }else{
//     console.log("Dogru deyer daxil edin");
    
// }
