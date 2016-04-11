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

    var matchingExpressions = specialExpressionMatchers.filter(matcher => matcher.matches(number))

    var concatenatedSpecialCases = matchingExpressions.map(expression => expression.word).join('')

    var firstNonEmptyStringOf = _.find;

    return firstNonEmptyStringOf([concatenatedSpecialCases, number.toString()])
}
