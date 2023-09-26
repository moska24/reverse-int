module.exports = function reverse (n) {
        let i;
        n = Math.abs(n);
        let numberString = String(n);
        let result = ``;
        for (i = 0;  i < numberString.length; i++){
            result = `${numberString[i]}${result}`;
        }
        return result;
    }
    
