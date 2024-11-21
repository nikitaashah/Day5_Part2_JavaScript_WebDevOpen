// assignment (one equal sign)
let currentForecast = "sunny";

// equality comparison (three equal signs)
if (currentForecast === "rain") {
  let recommendation = "Bring your umbrella! ☔";
}

// Mistake alert!
// Only one equals sign, 
// means that this assigns 'rain' to currentForecast

// instead of the triple equals, 
// which would check if currentForecast is set to 'rain'
if (currentForecast = "rain") {
  let recommendation = "Bring your umbrella! ☔";
}
