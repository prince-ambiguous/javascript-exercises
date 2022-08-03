const sumAll = function(Num1,Num2) {

    if(typeof Num1 === "number" & typeof Num2 === "number"){
        if(Num1<0 | Num2<0){
            return "ERROR";
        }else if(Num1<Num2){
            return sum_small_to_large(Num1,Num2)
        }else if(Num1>Num2){
            return sum_large_to_small(Num1,Num2)
        }
    }else{
        return "ERROR";
    }
   
};

function sum_small_to_large(startNum,endNum){
    let result = 0;
    for(let i = startNum; i<=endNum; i++){
        result += i;
    }
    return result;
}

function sum_large_to_small(startNum,endNum){
    let result = 0;
    for(let i = endNum; i<=startNum; i++){
        result += i;
    }
    return result;
}

// Do not edit below this line
module.exports = sumAll;
