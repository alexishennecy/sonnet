var poem = document.getElementById("sonnet").innerHTML; //this is line 2


console.log(poem.indexOf("orphans")); //this is line 3
console.log(poem.length); //this is line 4


var words = poem.replace("winter","yuletide"); //this is line 5
console.log(words);

// this is another way to write it out
// var swap = / the  /gi; //swap is replacing the globally
// var largePoem = words.replace(swap, ' a large '); //largePoem is holding the sonnet with the new replaced words
// console.log(largePoem);

// document.getElementById("sonnet").innerHTML = largePoem;



document.body.innerHTML = document.body.innerHTML.replace("winter","yuletide"); //this is line 5

//this is line 6 and 7
document.body.innerHTML = document.body.innerHTML.replace(/ the /gi, " a large ");








