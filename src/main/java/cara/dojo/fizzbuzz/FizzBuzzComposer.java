package cara.dojo.fizzbuzz;

import lombok.AllArgsConstructor;

class FizzBuzzComposer {

  @AllArgsConstructor
  class MatcherResult {
    boolean match;
    String say;
  }

  @FunctionalInterface
  interface FizzBuzzMatcher {
    MatcherResult match(int number);
  }

  FizzBuzzMatcher[] matchers;

  FizzBuzzComposer() {
    matchers = new FizzBuzzMatcher[3];
    matchers[0] = number -> dividerMatch(number, 3, "fizz");
    matchers[1] = number -> dividerMatch(number, 5, "buzz");
    matchers[2] = number -> dividerMatch(number, 7, "bang");
  }

  private MatcherResult dividerMatch(int number, int divider, String val) {
    boolean match = number % divider == 0;
    return new MatcherResult(match, val);
  }
}
