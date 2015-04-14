describe('triangleType', function() {

    //input: third side larger than or equal to the sum of other two sides
    //output: not a triangle
    it("returns an output of 'not a triangle' if the third side is larger than or equal to the sum of the other two sides", function() {
        expect(triangleType(7, 2, 3)).to.equal('not a triangle');
    });

    //input: all sides equal to each other
    //output: equilateral
    it("returns an output of 'equilateral' if all of the sides are equal", function() {
        expect(triangleType(2, 2, 2)).to.equal('equilateral');
    });


    //input: two sides equal to each other and third side is less than their sum
    //output: isosceles
    it("returns an output of 'isosceles' if two sides are equal to each other and the third side not equal to either of them", function() {
        expect(triangleType(7, 7, 2)).to.equal('isosceles');
    });

    //input: no sides equal to each other
    //output: scalene
    it("returns an output of 'scalene' if none of the sides are equal to each other", function() {
        expect(triangleType(2, 3, 4)).to.equal('scalene');
    });

});
