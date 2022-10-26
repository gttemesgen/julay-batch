function reverseString(reverseMe) {
    var reversed = "";
    for (var i = reverseMe.length - 1; i >= 0; i--) {
        reversed += reverseMe[i];
        console.log(reversed);
    }
    return reversed;
}


function reheatPizza(numSlices) {
    let heatingTime = 0;
    let item = pizza;
    numSlices = 5;
    item = pizza;
    if (numSlices === 1 && item === pizza) {
        console.log("heatingTime" + 20 + "minutes");
    } else if (numSlices === 5 && item === pizza) {
        console.log("heat, for 20 minutes")
    } else {
        console.log("heat for 20 minutes")
    }
}

function makeALine(length) {
    let line = "";
    for (let k = 0; k <= length; k++) {
        line = +"*"
    }
    return line + "\n";
}
console.log(makeALine(20))


console.log("Hi, " + reverseString("temesgen") + "! My name is " + reverseString("Julia"));