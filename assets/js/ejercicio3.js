const resultadoElement = document.querySelector('.resultado');
const valor1Input = document.getElementById('valor1');
const valor2Input = document.getElementById('valor2');
const sumarButton = document.getElementById('btn-sumar');
const restarButton = document.getElementById('btn-restar');

sumarButton.addEventListener('click', () => {
    const valor1 = parseFloat(valor1Input.value);
    const valor2 = parseFloat(valor2Input.value);
    const resultado = valor1 + valor2;
    resultadoElement.textContent = resultado;
});

restarButton.addEventListener('click', () => {
    const valor1 = parseFloat(valor1Input.value);
    const valor2 = parseFloat(valor2Input.value);
    let resultado = valor1 - valor2;
    resultado = resultado < 0 ? 0 : resultado; 
    resultadoElement.textContent = resultado;
});