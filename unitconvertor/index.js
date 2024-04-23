function convert() {
    // Get input value and unit
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var inputUnit = document.getElementById("inputUnit").value;
    
    // Perform conversions
    var meter, feet, inch;
    
    switch(inputUnit) {
        case "meter":
            meter = inputValue;
            feet = inputValue * 3.28084;
            inch = inputValue * 39.3701;
            break;
        case "feet":
            feet = inputValue;
            meter = inputValue * 0.3048;
            inch = inputValue * 12;
            break;
        case "inch":
            inch = inputValue;
            meter = inputValue * 0.0254;
            feet = inputValue * 0.0833333;
            break;
        default:
            break;
    }
    
    // Display conversions
    document.getElementById("output").innerHTML = `
        <p>${inputValue} ${inputUnit} is equal to:</p>
        <ul>
            <li>${meter.toFixed(2)} meters</li>
            <li>${feet.toFixed(2)} feet</li>
            <li>${inch.toFixed(2)} inches</li>
        </ul>
    `;
}
