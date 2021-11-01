var myVar = "global"; // myVar defined globally

{
    let myVar = "block";
    function scopeBlock(){
        alert("Value of variable myVar in the block: " + myVar)
    }
}

function scopeFunction(){
    var myVar = "function";
    alert("Value of variable myVar in the function: " + myVar)
}

function scopeGlobal(){
    alert("Value of variable myVar globally: " + myVar)
}