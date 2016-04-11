describe("FizzBuzz should", function () {

    var fizzbuzz = new FizzBuzz();
    it('say the number', function () {
        expect(fizzbuzz.say(1)).to.be.equals("1");
        expect(fizzbuzz.say(2)).to.be.equals("2");
        expect(fizzbuzz.say(4)).to.be.equals("4");
    });

    it("says fizz for 3", function () {
        expect(fizzbuzz.say(3)).to.be.equals("fizz");
        expect(fizzbuzz.say(6)).to.be.equals("fizz");
    })

    it("says buzz for multiples of 5", function () {
        expect(fizzbuzz.say(5)).to.be.equals("buzz");
        expect(fizzbuzz.say(10)).to.be.equals("buzz");
    })

    it("says bang for multiples of 7", function () {
        expect(fizzbuzz.say(7)).to.be.equals("bang");
        expect(fizzbuzz.say(14)).to.be.equals("bang");
    })

    it("says all of fizz buzz bang for combined multiples ", function () {
        expect(fizzbuzz.say(3 * 5)).to.be.equals("fizzbuzz");
        expect(fizzbuzz.say(3 * 7)).to.be.equals("fizzbang");
        expect(fizzbuzz.say(5 * 7)).to.be.equals("buzzbang");
        expect(fizzbuzz.say(3 * 5 * 7)).to.be.equals("fizzbuzzbang");
    })



});