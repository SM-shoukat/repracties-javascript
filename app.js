// alert("welcome to js land..");
// alert("happy coding 1\nenjoyyyy");

// var userName = "shoukat";
// var message = "hellow world";
// alert(message);

// var pizza = "pizza\npizz\npiz\npi\np";
// alert(pizza);

// document.write("yay im write html through javascript ")

// var visitor = prompt("visitor name")
// var productTitle = prompt("productTitle")
// var quantity = +prompt("quantity")
// document.write(`${visitor} ordered ${quantity}${productTitle} on my store`);

// var a = 3,
//     b = 5,
//     c = 7;
// document.write(a + b + c);

// var a;
// document.write(a + "<br>" ); 

// a = 5 
// document.write(a + "<br>" );

// a = ++a
// document.write(a + "<br>" );

// a = a + 7
// document.write(a + "<br>" );

// a = --a
// document.write(a + "<br>" );

// a = a % 3
// document.write(a + "<br>" )

// var a = 4;
// document.write("4 * 1 = " + a * 1 + "<br>");
// document.write("4 * 2 = " + a * 2 + "<br>");
// document.write("4 * 3 = " + a * 3 + "<br>");
// document.write("4 * 4 = " + a * 4    + "<br>");

// var signal = prompt("whats your signal light")

// if(signal === "red"){
//     alert("must stop")
// }
// else if(signal === "yellow"){
//     alert("get ready to stop")
// }
// else if(signal === "green"){
//     alert("go") 
// }

// var a = +prompt("first letter");
// var b = prompt("write operator");
// var c = +prompt("second letter");
// console.log(a,b,c)
// if(b === "+"){
//    var plus =  a + c;
//    alert(plus);
// }
// else if(b === "-"){
//     var plus =  a - c;
//     alert(plus);
//  }
// else if(b === "*"){
//     var plus =  a * c;
//     alert(plus);
//  }
// else if(b === "%"){
//    var plus =  a % c;
//    alert(plus);
// }
// else{
//     alert("no operator");
// }

// var arr = ["eat", "ate", "tea", "rat", "tar"];

// function groupAnagrams(words) {
//     var grouped = []; // This will hold the final groups of anagrams
//     var used = []; // This will keep track of which words have been grouped

//     for (var i = 0; i < words.length; i++) {
//         if (used[i]) continue; // Skip if this word has already been used

//         var currentGroup = [words[i]]; // Start a new group with the current word
//         var sortedCurrentWord = words[i].split('').sort().join(''); // Sort the current word

//         for (var j = i + 1; j < words.length; j++) {
//             if (used[j]) continue; // Skip if this word has already been used

//             var sortedWord = words[j].split('').sort().join(''); // Sort the next word

//             // If the sorted words match, they are anagrams
//             if (sortedCurrentWord === sortedWord) {
//                 currentGroup.push(words[j]); // Add to the current group
//                 used[j] = true; // Mark this word as used
//             }
//         }

//         grouped.push(currentGroup); // Add the current group to the final result
//     }

//     return grouped; // Return the grouped anagrams
// }

// var groupedAnagrams = groupAnagrams(arr);
// console.log(groupedAnagrams);

// var prom1 = +prompt("first num")
// var prom2 = +prompt("second num")

// if(prom1 > prom2){
//     var store = prom1;
//     alert(store)
    
// }else if(prom1 === prom2){
//     alert("your number is equal")
// }
// else{
//     alert(prom2);
// }

// var arr = ["keyboard","monitor","mouse","printer"];

// for(var i = arr.length - 1; i >= 0; i--){
//     document.write(arr[i] + "<br>")  
// }


//  var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
//  document.write('<label for="phones">Choose a manufacturer:</label>');
//  document.write('<select id="phones">');
//  for (var i = 0; i < manufacturers.length; i++) {
//      document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
//  }
//  document.write('</select>');

// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(arr[0] + "<br>" + arr[1] + "<br>" + arr[2] + "<br>");

// var prom = +prompt("konsa table chahye he")
// var prom1 = +prompt("kahan tk chahye he");

// for(var i = 1; i < prom1; i++){
//     document.write(`${prom} x ${i} = ${i*prom} <br>`)
// }

// for(var i = 0; i <= 10; i = i + 2){
//     console.log(i)
// }

// var arr = [100,80,30,140,50,60];
// var store = [0];
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] > store){
//         store = arr[i]
//     }
// }
// console.log(store)

// var city = "pakistan";
// console.log(city.indexOf("t"))

// var city = "islamabad"
// city = city.replace(city ,"lahore")
// console.log(city)

// var prom = prompt();
// var store = prom.charAt(0).toUpperCase() + prom.slice(1).toLowerCase();
// console.log(store)

// var num = 35.36;
// var result = num.toString().replace(".", "");
// console.log(result); // Output: "3536"
// var symbols = ["!","@","#","$","%","^","&","*","(",")","_","+","?"];
// var store = false;
// var prom = prompt("enter your usernname");

//  for(var i = 0; i < prom.length; i++){
//     for(var j = 0; j < symbols.length; j++){
//        if(prom[i] == symbols[j]){
//             store = true;
//             alert(prom + " is invalid username");
//             break;
//        }
       
//     }
//     if(store == true){
//         break;
//         }
// };
// if(!store){
//     // store = prom;
//     alert(prom + " is valid username");
//     // break;
//    }
// var items = ["cake","patties","chips","cookie","apple pie"]
// var prom = prompt("what do you want");
// prom = prom.toLowerCase();
// var flag = true;
// for(var i = 0; i < items.length;i++){
//     if(prom == items[i]){
//         alert(prom + " is available in index of " + i);
//         flag = false;
//     }
// }
// if(flag){
//     alert(prom + " is not available");
// }
// var store = items.indexOf(prom)
// if(-1 !== store){
//     alert(prom + " is available in index of " + store);
// }
// else{
//     alert(prom + " is not available");
// }


// var count = 0;
// var symbols = ["!","@","#","$","%","^","&","*","(",")","_","+","?"];
// var store = false;
// var prom = prompt("enter your password");

// for (var i = 0; i < prom.length; i++) {
//     for (var j = 0; j < symbols.length; j++) {
//         if (prom[i] === symbols[j]) {
//             store = true;
//             break;
//         }
//     };
    
//     if (store) {
//         break;
//     }
// }

// if (store) {
//     alert(prom + ' "INVALID PASSWORD: It should contain only alphabets and numbers."');
//     count++
// }

// for (var k = 0; k < prom.length; k++) {
//     if(prom.length < 6){
//         alert(prom + ' " it must at least 6 characters long."');
//         count++
//         store = true;    
//         break;
//     }if( !isNaN(prom.charAt(0)) ){
//         store = true;
//         alert("Password should not start with a number.");
//         count++
//     }
//     if (store) {
//         break;
//     }
// }

// if (count == 0 ) {
//     alert("password is valid");
// }


// var uni = "university of pakistan";
// uni = uni.split([]);
// console.log( uni);

// var Lname = prompt("last name");
// Lname = Lname.charAt(Lname.length - 1)
// alert(Lname);

// var easy = "the quick brown fox jumps over the lazy dog the dog the house the bank";
// var count = 0;
// var store;
// for(var i = 0;i < easy.length;i++){
//     if(easy.slice(i, i + 3) == "the"){
//         store = count++
//         console.log(store);
//     }
// }

// var num = prompt("give a number")
// num = Math.round(num);
// document.write(num)
// num = Math.ceil(num);
// document.write(num)
// num = Math.floor(num);
// document.write(num)



// var num = +prompt("write any number")
// num =  Math.abs(num)
// alert(num)


// var num = (Math.random() * 6);
// num = Math.round(num)
// document.write(num)




// var num = (Math.random() * 100)
// num = Math.round(num);
// document.write("random number betweem 1 to 100 : " + num)









