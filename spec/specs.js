describe("triangleType", function() {
    //input: one side equal to zero
    //output: all sides must be larger than zero
    it("returns an output of 'this is not a triangle' if the input is 0, 0, 0", function() {
    expect(triangleType(0, 0, 0)).to.equal('this is not a triangle');
    });

    //input: one side equal to zero
    //output: all sides must be larger than zero
    // it("returns an output of 'all sides must be larger than zero' if any one of the inputs is 0", function() {
    //     expect(triangleType(0, 1, 1)).to.equal('all sides must be larger than zero');
    // });

    //input: third side larger than the sum of other two sides
    //output: this is not a triangle
    it("returns an output of 'not a triangle. third side cannot be larger than the sum of two other sides'", function() {
        expect(triangleType(7, 2, 3)).to.equal('not a triangle. third side cannot be larger than the sum of two other sides');
    });

    //input: two sides equal to each other and third side is less than their sum
    //output: isosceles

    //input: no sides equal to each other
    //output: scalene

    //input: all sides equal to each other
    //output: equilateral



});
