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

    var matchingExpressions = specialExpressionMatchers.filter(function (matcher) {
        return matcher.matches(number)
    })

    var specialCases = matchingExpressions.map(function (matchingExpression) {
        return matchingExpression.word
    }).join('')

    var firstNonEmptyString = _.find;

    return firstNonEmptyString([specialCases, number.toString()])
}
