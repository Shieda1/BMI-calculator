const weight =  document.getElementById('weight');
const height = document.getElementById('height');
const btn = document.getElementById('btn');
const result = document.getElementById('result');



btn.addEventListener('click', function() {
  result.textContent = `Monthly Payment = ${computeBMI().toFixed(2)}kg/m²`;
})


function computeBMI() {
  const heightInCm = Number(height.value) / 100;
  return Number(weight.value) / Math.pow(heightInCm, 2);
}