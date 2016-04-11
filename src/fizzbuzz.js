function FizzBuzz(specialExpressionMatchers)
{
    this.specialExpressionMatchers = specialExpressionMatchers
}


FizzBuzz.prototype.say = function(number)
{

    var matchingExpressions = this.specialExpressionMatchers.filter(matcher => matcher.matches(number))

    var concatenatedSpecialCases = matchingExpressions.map(expression => expression.word).join('')

    // this would probably be clearer
    // return concatenatedSpecialCases ? concatenatedSpecialCases : number.toString()
    //
    // but the functional style would be:
    var firstNonEmptyStringOf = _.find;
    return firstNonEmptyStringOf([concatenatedSpecialCases, number.toString()])
}
