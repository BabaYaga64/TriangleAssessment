
$(document).ready(function() {

var triangleType = function(side1, side2, side3) {

   //checks to see if it is a triangle at all
   if (side1 >= (side2 + side3) || (side2 >= (side1 + side3)) || (side3 >= (side1 + side2))) {
        return 'Not a triangle. The third side must be larger than the sum of the first two sides.';

    //EQUILATERAL: all sides equal to each other
    } else if (side1 === side2 && side2 === side3) {
        return 'Equilateral Triangle';

    //ISOSCELES: two sides equal to each other
    } else if ((side1 === side2 && side2 !== side3) || (side2 === side3 && side3 !== side1)|| (side3 === side1 && side1 !== side2)) {
        return 'Isosceles Triangle';

    //SCALENE: no sides equal to each other
    } else if (side1 !== side2 && side2 !== side3) {
         return 'Scalene Triangle';
    }

};


    if(result === "Equilateral Triangle") {
        $(".imagedisplay").append('<img src="../img/equilateral.png" />');
    }


    $("form#triangle").submit(function(event) {
        var side1 = parseInt($("input#side1").val());
        var side2 = parseInt($("input#side2").val());
        var side3 = parseInt($("input#side3").val());
        var result = triangleType(side1, side2, side3);

        $(".resultdisplay").text(result);

        $(".resultdisplay").show();
        event.preventDefault();
    });
});
