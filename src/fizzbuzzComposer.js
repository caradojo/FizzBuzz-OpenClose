
function fizzbuzzComposer() {

    function isDividableBy(i) {
        return function(number) {return number % i == 0}
    }
    var specialExpressionMatchers = [
        {matches: isDividableBy(3), word: "fizz"},
        {matches: isDividableBy(5), word: "buzz"},
        {matches: isDividableBy(7), word: "bang"},
    ]

    return new FizzBuzz(specialExpressionMatchers)
}