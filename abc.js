




function mapForEach(arr, fn) {
    var newArr =[];
    for (var i = 0; i< arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    }
    return newArr;
}

var arr = [1, 2, 3];
/**
 * Old Implementation, with bind
*/

var checkPastLimit = function(limiter, item) {
    console.log(item)
    return item > limiter;

};

var result = mapForEach(arr, checkPastLimit.bind(this, 1));

console.log(result);
/**
 * NEW without bind
*/

//var checkpastLimitNoBind = ... implement function here

//results must be the same as above
//var results must be the same as above
//var result = mapForEach(arr, checkPastLimitNoBind(1));
//[ false, true, true ]

function checkPastLimitNoBind(limiter) {

    return function(item) {
    
        return item > limiter;
        
    }
}
var limit1 = checkPastLimitNoBind(1);

var result2 = mapForEach(arr, checkPastLimitNoBind(1));
console.log(result2)