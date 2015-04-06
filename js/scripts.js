var queenAttack = function(position1a, position1b, position2a, position2b) {
    var xDifference = position2a - position1a;
    var yDifference = position2b - position1b;
    if(yDifference === 0 || xDifference === 0 || yDifference === xDifference) {
        return true;
    }
    else {
        return false;
    }
};

$(document).ready(function() {
    $("form#queen-attack").submit(function(event) {
        var x1 = parseInt($("input#x1").val());
        var y1 = parseInt($("input#y1").val());
        var x2 = parseInt($("input#x2").val());
        var y2 = parseInt($("input#y2").val());

        var result = queenAttack(x1, y1, x2, y2);

        if (!result) {
            $(".not").text("not");
        }
        else {
            $(".not").text("");
        }

        $("#result").show();
        event.preventDefault();
    });
});
