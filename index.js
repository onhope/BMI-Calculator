const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditonEl = document.getElementById("weight-conditon");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiInputEl.value = bmiValue;

  if(bmiValue < 18.5) {
    weightConditonEl.innerText = "Under weight";
  } else if(bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditonEl.innerText = "Normal weight";
  } else if (bmiValue >= 25.8 && bmiValue < 29.9) {
    weightConditonEl.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightConditonEl.innerText = "Obesity";
  }
  
}

btnEl.addEventListener("click", calculateBMI);