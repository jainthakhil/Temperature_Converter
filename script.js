document.getElementById("result-btn").addEventListener("click", function(){
    const temp = parseFloat(document.getElementById("tempValue").value);
    const inputUnitValue = inputUnit.options[inputUnit.selectedIndex].value;
    const outputUnitvalue = outputUnit.options[outputUnit.selectedIndex].value;

    console.log(inputUnitValue);
    console.log(outputUnitvalue);
    console.log(temp);

    let resultValue;

    if(inputUnitValue === "celcius" && outputUnitvalue === "celcius"){
        resultValue = temp;
        alert("Conversion to same Unit, please change them");
        document.getElementById("convertedValue").innerHTML = resultValue + " ℃ ";

    } else if(inputUnitValue === "celcius" && outputUnitvalue === "fahrenheit"){
        resultValue = parseFloat((temp* 9/5) + 32);
        document.getElementById("convertedValue").innerHTML = resultValue + " ℉ ";

    } else if(inputUnitValue === "fahrenheit" && outputUnitvalue === "fahrenheit"){
        resultValue = temp;
        alert("Conversion to same Unit, please change them");
        document.getElementById("convertedValue").innerHTML = resultValue + " ℉ ";

    } else if(inputUnitValue === "fahrenheit" && outputUnitvalue === "celcius"){ 
        resultValue = ((temp-32 ) * 5/9).toFixed(2);
        document.getElementById("convertedValue").innerHTML = resultValue + " ℃ ";
    } else {
        alert("Enter valid number");
    }
    
});
    
    

    

    

