var triangleType = function(side1, side2, side3) {

//do you need to parseInt all of these values first?

var type_of_triangle = "";

    //all sides equal to zero
    if (side1 === 0 || side2 === 0 || side3 === 0) {
        type_of_triangle = 'this is not a triangle';

    //third side larger than or equal to the sum of other two sides
    } else if (side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side1 + side2) {
        type_of_triangle = 'not a triangle, third side too long';

    //ISOSCELES: two sides equal to each other and third side is less than their sum
    //side 1 not equal to side 3
    } else if ((side1 === side2) && (side3 < side1 + side2) && (side1 !== side3)) {
        type_of_triangle = 'isosceles';
    //side 1 not equal to side 2
    } else if (side2 === side3 && side1 < side2 + side3 && side1 !== side2) {
        type_of_triangle = 'isosceles';
    //side 2 not equal to side 3
    } else if (side3 === side1 && side2 < side3 + side1 && side2 !== side3) {
        type_of_triangle = 'isosceles';

    //SCALENE: no sides equal to each other

    //side1 less than sum of side2 and side3
    } else if (side1 !== side2 !== side3 && (side1 < side2 + side3)) {
        type_of_triangle = 'scalene';
     //side2 less than sum of side1 and side3
    } else if (side1 !== side2 !== side3 && (side2 < side1 + side3)) {
        type_of_triangle = 'scalene';
     //side3 less than sum of side1 and side2
    } else if (side1 !== side2 !== side3 && (side3 < side1 + side2)) {
        type_of_triangle = 'scalene';

    //EQUILATERAL: all sides equal to each other

    //side1 less than sum of side2 and side3
    } else if (side1 === side2 === side3 && side1 < side2 + side3
    //side2 less than sum of side1 and side3
    || (side1 === side2 === side3 && side2 < side1 + side3)
    //side3 less than sum of side1 and side2
    || (side1 === side2 === side3 && side3 < side1 + side2)) {
        type_of_triangle = 'equilateral';
    }

    return type_of_triangle;

};
