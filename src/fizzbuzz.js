function FizzBuzz()
{
    
}


FizzBuzz.prototype.say = function(number)
{

    function isDividableBy(i) {
        return function(number) {return number % i == 0}
    }
    var specialExpressionMatchers = [
        {matches: isDividableBy(3), word: "fizz"},
        {matches: isDividableBy(5), word: "buzz"},
        {matches: isDividableBy(7), word: "bang"},
    ]

    var result = ''
    specialExpressionMatchers.forEach(matcher => {
        if (matcher.matches(number)) {
            result += matcher.word
        }
    })

    if (result) {
        return result
    } else {
        return number.toString()
    }

}
