const promena1 = 5;
const promena2 = 3;

function obs_kruh(r){
    if(r>0){
        return 3.14* (r**2);
    }
    else{
        return "Zadal jsi nulovou nebo zápornou hodnotu"
    }

}

/** 
 * Zadejte polomer kruhu r:
 * @param {number} r - Polomer kruhu
 * @returns {number|string} - Obvod kruhu nebo 
*/

function obv_kruh(r){

    if (r !== "number" ) {
        return "Zadal jsi neplatný typ hodnoty";
    }
    if (r > 0)
}


function obs_obd(a, b){
    if((a > 0) && (b > 0)){
        return a**2 + b**2;
    }
    else{
        return "Zadal jsi nulovou nebo zápornou hodnotu"
    }
}

console.log(obv_kruh(promena1));
console.log(obs_kruh(promena1));
console.log("Obsah obdélníku je: ", obs_obd(promena2));