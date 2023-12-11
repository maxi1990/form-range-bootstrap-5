const inputRango = document.getElementById('inputRango');
const visitas = document.getElementById('visitas');
const precio = document.getElementById('precio')

const arrayVisitas = ['10k','50k','100k','500k','1M']

inputRango.addEventListener('input',()=>{
    precio.textContent = inputRango.value;
    visitas.textContent = arrayVisitas[(inputRango.value / 8 - 1)]
})