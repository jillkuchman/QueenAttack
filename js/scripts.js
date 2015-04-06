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
