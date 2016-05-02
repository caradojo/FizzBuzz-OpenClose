package cara.dojo.fizzbuzz;

import org.fest.assertions.Assertions;
import org.junit.Test;

public class FizzBuzzTest {

  FizzBuzz fizzBuzz = new FizzBuzz();

  @Test
  public void fizz() {
    // given
    int integer = 3;
    // when / then
    Assertions.assertThat(fizzBuzz.say(integer)).isEqualTo("fizz");
  }

  @Test
  public void buzz() {
    // given
    int integer = 5;
    // when / then
    Assertions.assertThat(fizzBuzz.say(integer)).isEqualTo("buzz");
  }

  @Test
  public void bang() {
    // given
    int integer = 7;
    // when / then
    Assertions.assertThat(fizzBuzz.say(integer)).isEqualTo("bang");
  }

  @Test
  public void number() {
    // given
    int integer = 1;
    // when / then
    Assertions.assertThat(fizzBuzz.say(integer)).isEqualTo("1");
  }
}
