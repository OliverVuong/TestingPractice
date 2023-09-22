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