var triangleType = function(side1, side2, side3) {

var type_of_triangle = "";

    //all sides equal to zero
    if (side1 === 0 || side2 === 0 || side3 === 0) {
        type_of_triangle = 'this is not a triangle';

    //third side larger than the sum of other two sides
    } else if (side1 > (side2 + side3) || side2 > (side1 + side3) || side3 > (side1 + side2)) {
        type_of_triangle = 'not a triangle. third side cannot be larger than the sum of two other sides';

    //two sides equal to each other and third side is less than their sum
    //side 1 not equal to side 3
    } else if ((side1 === side2 && side3 < side1 + side2 && side1 !== side3)

    //side 1 not equal to side 2
    || (side2 === side3 && side1 < side2 + side3 && side1 !== side2)

    //side 2 not equal to side 3
    || (side3 === side1 && side2 < side3 + side1 && side2 !== side3)) {
        type_of_triangle = 'isosceles';

    //no sides equal to each other
    } else if (side1 !== side2 !== side3) {
        type_of_triangle = 'scalene';

    //all sides equal to each other
} else if ((side1 === side2 && side2 === side3 && side1 === side3)) {
        type_of_triangle = 'equilateral';
    }

    // if (side1 === side2 === side3) {
    //     type_of_triangle = "Equilateral";





    return type_of_triangle;

};
