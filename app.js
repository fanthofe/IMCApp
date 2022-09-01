const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.6, 25] },
  { name: "Surpoids", color: "lightcoral", range: [26, 30] },
  { name: "Obésité modérée", color: "orange", range: [31, 35] },
  { name: "Obésité sévère", color: "crimson", range: [36, 40] },
  { name: "Obésité morbide", color: "purple", range: 41 },
];

const form = document.querySelector("form");

form.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();
  calculBMI();
}

const inputs = document.querySelectorAll("input");
const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

function calculBMI(){
  const height = inputs[0].value;
  const weight = inputs[1].value; 
  const resultBMI = (weight / ((height / 100) * (height / 100))).toFixed(1);
  console.log(resultBMI);
  if (!height || !weight || height <= 0 || weight <= 0)
  {
    handleError();
    return;
  }
  else if (weight > 0 && height > 0) {
    showResult(resultBMI);
  }
}

function handleError() {
  displayBMI.textContent ="Mauvaise information";
  displayBMI.style.color = "inherit";
  result.textContent = "Les inputs sont vides !";
}

function showResult(BMI) {
  const rank = BMIData.find(data => {
    if(BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if(typeof data.range === "number" && BMI >= data.range) return data;
  });

  displayBMI.textContent = BMI;
  displayBMI.style.color = `${rank.color}`;
  result.textContent = `Résultat : ${rank.name}`;
  
}