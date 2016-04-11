function FizzBuzz(specialExpressionMatchers)
{
    this.specialExpressionMatchers = specialExpressionMatchers
}

FizzBuzz.prototype.say = function(number)
{

    var result = ''
    this.specialExpressionMatchers.forEach(matcher => {
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
