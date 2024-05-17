document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const unit = document.getElementById("unit");
    const convertButton = document.getElementById("convert");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(input.value);
        const selectedUnit = unit.value;
        
        if (!isNaN(temperature)) {
            if (selectedUnit === "celsius") {
                const fahrenheit = (temperature * 9/5) + 32;
                resultDiv.textContent = `${temperature} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit`;
            } else if (selectedUnit === "fahrenheit") {
                const celsius = (temperature - 32) * 5/9;
                resultDiv.textContent = `${temperature} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius`;
            }
        } else {
            resultDiv.textContent = "Try adding a valid temperature.";
        }
    });
});