
const removeFromArray = function(Array,...theArgs) {
    
    for(const arg of theArgs){
        Array = Array.filter( element => element !== arg )
    }

    return Array;
    
};




// Do not edit below this line
module.exports = removeFromArray;
