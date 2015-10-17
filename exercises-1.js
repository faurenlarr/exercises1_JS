

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){

for (i=0;i < array.length; i++) {
  var a = array[i];
  console.log(a);
  callback(a);
}

}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array

    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
  var total = 0;
  for (var i=0;i<args.length; i++) {
    total += args[i];
  }
  return total;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// for each example

var total = 0
args.forEach(function(el,index,array) {
  total +=el ;

});
return total ;
}
// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var avg = 0;
    for (i=0; i < args.length; i+=1) {
      avg += args [i];
    }
    return avg/args.length;
}
average(2,3,4,5)

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var large = 0;
    for(i=0;i<args.length;i++) {
      if(args[i]>large){
        large= args[i]
      }
}
return large;
}
console.assert( largest(2, 4, 6, 8) === 8 )

// forEAch example

args.forEach(function (element,index, array) {
  if (element > largest) {
    largest = element;
  }
})
return largest;
}
// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    length = 0;
    longer = " ";
    for (i=0;i<args.length; i++){
      if(args[i].length> length){
        length=args[i].length;
        longer = args[i];
      }
    }
    return longer;
};

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */
function arrayEquals(array1,array2) {
    if (array1.length!=array2.length){
  return false;}

  for(var i = 0 ; array1.length < i ; i++ ){
    if (array1[i]!= array2[i]);
    return false;
  };
    {return true;}
  //compare array lengths, return false if different.
  //compare each item in the arrays

}
// .sort()
var family = ["Lauren", "Janis", "Eric", "Ken"];
family.sort();
console.assert(family[1] === "Janis");
// .concat()
var family = ["Lauren"];
var lastName = ["Farr"];
var fullName = family.concat(lastName);
console.log(fullName);
console.assert(fullName[1]=== "Farr");
// .indexOf()
var array1 = ["Lauren", "Janis", "Eric", "Ken"];
var array2 = array1.indexOf("Janis");
console.assert(arrayEquals([array2],[1]));
// .split()
var str = "Janis,Ken,Eric,Lauren";
var str2 = str.split(",");
console.assert (str2[0] === "Janis");
// .join()
var array1 = ["Lauren", "Janis", "Eric", "Ken"];
var array2 = array1.join(",");
console.assert (arrayEquals([array2], ["Lauren, Janis, Eric, Ken"]));
// .pop()
var family = ["Lauren", "Janis", "Eric", "Ken"];
family.pop();
console.log(family);
console.assert (family[3] === undefined);
// .push()
var family = ["Lauren", "Janis", "Eric", "Ken"];
family.push("Bella");
console.log(family);
console.assert (family[4] === "Bella");

// .slice()
var array1 = ["Lauren", "Janis", "Eric", "Ken"];
var array2 = array1.slice(2,3);
console.assert (arrayEquals([array2], ["Eric"]));

// .splice()
var array1 = ["Lauren", "Janis", "Eric", "Ken"];
var array2 = array1.splice(0,1);
console.assert (arrayEquals([array2],["Lauren"]))

// .shift()
var family = ["Lauren", "Janis", "Eric", "Ken"];
family.shift();
console.log(family);
console.assert (family[0] === "Janis");
// .unshift()
var family = ["Lauren", "Janis", "Eric", "Ken"];
family.unshift("Bella");
console.log(family);
console.assert (family[0] === "Bella");
// .filter()
function lessThanFive(value){
return value < 5 };
var array = [2,3,5,6];
var newArray = array.filter(lessThanFive);
console.assert(newArray[2] === undefined);
// .map()
function multiplyTen(value){
return value * 10;
};
var array = [1,2,3,4];
var newArray = array.map(multiplyTen);
console.assert(newArray[0] === 10);
