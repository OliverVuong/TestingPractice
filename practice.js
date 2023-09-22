const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const reverseString = (str) => {
    let output = '';
    for(let i = str.length - 1; i >= 0; i--){
        output += str.charAt(i);
    }
    return output;
}

const calculatorFactory = () => {
    const add = (a, b) => {
        return a + b;
    }
    const subtract = (a, b) => {
        return a - b;
    }
    const divide = (a, b) => {
        return a / b;
    }
    const multiply = (a, b) => {
        return a * b;
    }
    return {add, subtract, divide, multiply };
}

const shift = (char, shiftFactor = 0) => {
    if(char.charCodeAt() < 'a'.charCodeAt() ||
       char.charCodeAt() >= 'z'.charCodeAt()) {
        return char;
    }

    let advanceCode = char.charCodeAt() + shiftFactor;
    advanceCode = advanceCode > 'z'.charCodeAt() ? advanceCode - 26 : advanceCode;

    return String.fromCharCode(advanceCode);
}

const caesarCipher = (str, shiftFactor) => {
    let output = '';
    for(let i = 0; i < str.length; i++) {
        output += shift(str[i], shiftFactor);
    }
    return output;
}

const analyzeArray = (arr) => {
    let total = 0;
    let min = arr[0];
    let max = arr[0];
    let length = 0;

    for(let n of arr){
        total += n;
        min = min < n ? min : n;
        max = max > n ? max : n;
        length++;
    }
    let average = total / length;

    return { average, min, max, length };
}

export { 
    capitalize,
    reverseString,
    calculatorFactory,
    caesarCipher,
    analyzeArray
};