package cara.dojo.fizzbuzz;

import java.util.Arrays;

class FizzBuzz {

  FizzBuzzComposer.FizzBuzzMatcher[] matchers = (new FizzBuzzComposer()).matchers;

  String say(int number) {
    return Arrays.stream(matchers)
            .map(matcher -> matcher.match(number))
            .filter(matcherResult -> matcherResult.match)
            .map(matcherResult -> matcherResult.say)
            .findFirst()
            .orElseGet(() -> String.valueOf(number));
  }
}
