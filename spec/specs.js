describe("triangleType", function() {
    //input: all sides equal to zero
    //output: all sides must be larger than zero
    it("returns an output of 'this is not a triangle' if the input is 0, 0, 0", function() {
    expect(triangleType(0, 0, 0)).to.equal('this is not a triangle');
    });

    //input: one side equal to zero
    //output: all sides must be larger than zero
    // it("returns an output of 'all sides must be larger than zero' if any one of the inputs is 0", function() {
    //     expect(triangleType(0, 1, 1)).to.equal('all sides must be larger than zero');
    // });

    //input: third side larger than or equal to the sum of other two sides
    //output: this is not a triangle
    it("returns an output of 'not a triangle' if the third side is larger than or equal to the sum of the other two sides", function() {
        expect(triangleType(7, 2, 3)).to.equal('not a triangle');
    });

    //input: two sides equal to each other and third side is less than their sum
    //output: isosceles
    it("returns an output of 'isosceles' if two sides are equal to each other and the third side is less than their sum", function() {
        expect(triangleType(7, 7, 2)).to.equal('isosceles');
    });

    //input: no sides equal to each other
    //output: scalene
    it("returns an output of 'scalene' if none of the sides are equal to each other", function() {
        expect(triangleType(2, 3, 5)).to.equal('scalene');
    });

    //input: all sides equal to each other
    //output: equilateral
    it("returns an output of 'equilateral' if all of the sides are equal", function() {
        expect(triangleType(2, 2, 2)).to.equal('equilateral');
    });

});
