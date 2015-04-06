var queenAttack = function(position1a, position1b, position2a, position2b) {
    var difference = [];
    var xDifference = position2a - position1a;
    var yDifference = position2b - position1b;
    difference.push(xDifference);
    difference.push(yDifference);
    if((difference[0] === 1) && (difference[1] === 0)) {
        return true;
    }
    else {
        return false;
    }
};
