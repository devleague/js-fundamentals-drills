/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2) 
  }
  return result
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays = function (arr1, arr2) {
  var sum = 0;
  for (var i = 0; i<arr1.length;i++) {
    sum += arr2[i] + arr1[i]
  }
  return sum
}


/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function (str) {
  return str.length;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function (arr) {
  return arr.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function (arr) {
  var sum = 0;
  for (var i=0; i<arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {String}
 * @return {Array}
 */
var countStrings = function (arr) {
    var result = []
  for (var i=0; i<arr.length; i++) {
    result.push(arr[i].length)
  }
  return result
}


/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings = function (arr) {
    var sum = 0;
  for (var i=0; i<arr.length; i++) {
    sum += arr[i].length;
  }
  return sum
}


/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function (obj) {
   var array = []
  for (var key in obj) {
    array.push(obj[key])
  }
  return array
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function (obj) {

 var count = 0;
  for (var key in obj) {
    count++
  }
  return count 

}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray = function (num) {
  var result = [];
  for (var i=1; i<=num; i++) {
    result.push(0)
  }
  return result
}


/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function (arr) {
  var result = [];
  for (var i=0; i<arr.length-1; i++) {
    result.push(arr[i]);
  }
  return result
}
/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function (str) {
  var result = [];
  for (var i=0; i<str.length;i++) {
    result.push(str[i])
  }
  return result
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast = function(arr) {
  var last = arr.pop()
  return last.length
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function (arr) {
  var sum = 0;
  for (var i=0;i<arr.length;i++) {
    if(arr[i]<=10) {
      sum+=arr[i];
    } 
  }
  return sum
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters = function(arr) {
  var count = 0
  for (var i=0;i<arr.length;i++){
    if(arr[i].length>=10){
      count++
    }
  }
  return count
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function (arr) {
  var sum =1;
  for (var i=0;i<arr.length;i++){
    sum*=arr[i]
  } 
  return sum
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj) {
  var result = [];
  for (var key in obj) {
    result.push(key)
  }
  return result
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive = function (arr) {
  var sum = 0;
  for (var i=0; i<arr.length;i++) {
    if(arr[i]>=0){
      sum+=arr[i]
    }
  }
    return sum
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arr) {
  var count =0;
  for (var i=0;i<arr.length;i++){
    if(arr[i].length <= 3) {
      count++
    }
  }
  return count
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function (arr) {
  var count = 0
  for (var i = 0; i<arr.length; i++){
    if(typeof arr[i] === 'object') {
      count++
    }
  }
  return count
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function (obj) {
  var result = [];
  for (var key in obj) {
    result.push(key)
  }
  return result
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function (obj) {
  var result = [];
  for (var key in obj) {
    result.push(obj[key])
  }
  return result
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(str1, str2) {
  var result = {};
  result[str1] = str2
  return result
 }

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse = function(str1, str2) {
  var result = {};
  result[str2] = str1
  return result
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arr) {
  var result = {};
  for (var i=0; i<arr.length;i++){
    result[arr[0]] = arr[1];
  }
  return result
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr) {
  var result = {};
  for (var i=0; i<arr.length;i++){
    result[arr[1]] = arr[0];
  }
  return result
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function (arr) {
  var result = {};
  for (var i=0; i<arr.length;i++){
    result[arr[i]] = 0
  }
  return result
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function (obj) {
 var result = [];
  for (var key in obj) {
    result.push(obj[key])
  }
  return result
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj) {
    var result = [];
  for (var key in obj) {
    result.push(key)
  }
  return result
}


/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function (obj) {
  var result = [];
  for (var key in obj) {
    var arr = []; 
    arr.push(key, obj[key]);
    result.push(arr);
  }
  return result
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function (arr) {
  var result = {};
  for (var i=0; i<arr.length; i++){
  result[arr[i]] = false
  }
  return result
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function (arr1, arr2) {
  var result = {};
  for (var i=0;i<arr1.length;i++){
    result[arr1[i]] = arr2[i]
  }
  return result
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function (obj1, obj2) {
  var result = [];
  for (var key in obj1) {
    var arr = [];
    arr.push(key, obj1[key])
    result.push(arr)
  }

  for (var key in obj2){
    var arr2 = [];
    arr2.push(key, obj2[key])
    result.push(arr2)
  }
  return result
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(arr) {
  var result = {};
  for (var i=0; i<arr.length;i++){
  result[arr[i]] = true
  }
  return result
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function (arr) {
  var result = {};
  for (var i = 0; i<arr.length; i++) {
    if (arr[i].length >= 5){
      result[arr[i]] = true
    } else {
      result[arr[i]] = false
    }
  }
  return result
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr) {
  var result = {};
  for (var i=0; i<arr.length; i++){
    result[arr[i]] = true
  }
  return result
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function (str) {
  var result = {};
  for (var i=0; i<str.length;i++) {
    result[str[i]] = true
  }
  return result
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function (arr) {
  var result = {};
  for (var i=0; i<arr.length; i++){
    result[arr[i]] = arr[i].length;
  }
  return result
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
var frequencyMap = function (str) {
 // var count = 1
  var result = {};
  for (var i=0; i<str.length;i++) {
    if (result[str[i]]) {
      result[str[i]]++
    } else {
      result[str[i]] = 1
    }
  }
  return result
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject = function (arr) {
  var result = {} 

  for (var i=0; i<arr.length; i++) {
    var arr2 = arr[i];
    for (var j=0; j<arr2.length; j++){
      result[arr2[0]] = arr2[1]
    }
  }
  return result
}


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}