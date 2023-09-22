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

const caesarCipher = () => {
    
}

const analyzeArray = () => {
    
}

export { 
    capitalize,
    reverseString,
    calculatorFactory,
    caesarCipher,
    analyzeArray
};