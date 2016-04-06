function FizzBuzz()
{
    
}

FizzBuzz.prototype.say = function(number)
{
    var threes = {
        0: function(number) { return "fizz" }
    }
    var fives = {
        0: function (number) { return "buzz"}
    }
    var fivesResult = fives[number % 5]
    var threesResult = threes[number % 3]
    
    var numToString = function(number) { return number.toString()}
    function emptyString(number) {
        return '' 
    }
    
    var array = [
       fivesResult,
       threesResult,
       emptyString,
    ];
    
    var result = "";
    for (var i = 0; i <array.length; i++)
    {
        if (array[i])
          result+=array[i](number); 
    }     
       
    
    return result // _.find([fivesResult,threesResult, numToString])(number)
    /*function emptyString(number) {
        return ''
    }
    var special = [threesResult, fivesResult, emptyString].filter(function(fn) {
        if (fn)  return fn(number)
        else return
    })
    return _.find([special, numToString])(number)*/
    //return _.some([threesResult, fivesResult, numToString])(number)
    
    
}
