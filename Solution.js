
/**
 * @param {string} input
 * @return {string}
 */
var clearDigits = function (input) {
    const clearDigits = new Array();
    
    for (let current of input) {
        if (isDigit(current) && clearDigits.length > 0) {
            clearDigits.pop();
            continue;
        }
        clearDigits.push(current);
    }
    
    return clearDigits.join('');
};

/**
 * @param {string} char
 * @return {boolean}
 */
function isDigit(char) {
    return char >= '0' && char <= '9';
}
