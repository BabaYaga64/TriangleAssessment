var triangleType = function(side1, side2, side3) {

   //checks to see if it is a triangle at all
   if (side1 >= (side2 + side3) || (side2 >= (side1 + side3)) || (side3 >= (side1 + side2))) {
        return 'not a triangle';

    //EQUILATERAL: all sides equal to each other
    } else if (side1 === side2 && side2 === side3) {
        return 'equilateral';

    //ISOSCELES: two sides equal to each other
    } else if ((side1 === side2 && side2 !== side3) || (side2 === side3 && side3 !== side1)|| (side3 === side1 && side1 !== side2)) {
        return 'isosceles';

    //SCALENE: no sides equal to each other
    } else if (side1 !== side2 && side2 !== side3) {
         return 'scalene';
    }

};

$(document).ready(function() {
    $("form#triangle").submit(function(event) {
        var side1 = parseInt($("input#side1").val());
        var side2 = parseInt($("input#side2").val());
        var side3 = parseInt($("input#side3").val());
        var result = triangleType(side1, side2, side3);

        $(".side1").text(side1);
        $(".side2").text(side2);
        $(".side3").text(side3);

        $(".result").text(result);

        $("#result").show();

        event.preventDefault();
    });
});
