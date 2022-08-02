const repeatString = function(string,number) {

    if(number>=0){
        let result = "";
        for(let i = 0; i<number; i++){
            result += string;
        }
        return result;

    }else return result = "ERROR";
}

// Do not edit below this line
module.exports = repeatString;
