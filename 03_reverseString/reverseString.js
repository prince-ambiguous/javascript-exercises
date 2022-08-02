const reverseString = function(String) {
    let revArray =  reverseArray(splitStr(String));
    let reverseString = revArray.join("");
    return reverseString;
};

function splitStr(text){
    
    const Array = text.split("");
    return Array;
}

function reverseArray(Array){
    Array.reverse();
    return Array;
}
// Do not edit below this line
module.exports = reverseString;
