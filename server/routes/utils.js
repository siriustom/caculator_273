module.exports = (function () {
    function add(tempResult, num) {
        tempResult += num;
        return tempResult;
    }

    function sub(tempResult, num) {
        tempResult -= num;
        return tempResult;
    }

    function mul(tempResult, num) {
        tempResult *= num;
        return tempResult;
    }

    function div(tempResult, num) {
        tempResult /= num;
        return tempResult;
    }

    return {
        add: add,
        sub: sub,
        mul: mul,
        div: div,
    }
})();
