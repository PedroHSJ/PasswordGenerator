const letrasMin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const letrasMai = letrasMin.map(letra => {
    return letra.toUpperCase();
});
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const caracEsp = ['$', '&', '*', '-', '_', '#','%','!','?'];

const btn = document.getElementById('btn');
const checkMai = document.getElementById('letrasMaiusculas');
const checkMin = document.getElementById('letrasMinusculas');
const checkNum = document.getElementById('numeros');
const checkEspec = document.getElementById('especiais');

const display = document.getElementById('display');

console.log(checkMai)

function random(array) {
    return array.sort(() => 0.5 - Math.random())
}


function gerar() {
    if (checkMai.checked == true && checkMin.checked == false && checkNum.checked == false && checkEspec.checked == false) {

        let arrayResultado = [];
        random(letrasMai);
        arrayResultado = letrasMai.slice(0, 8);

        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if (checkMai.checked == true && checkMin.checked == true && checkNum.checked == false && checkEspec.checked == false) {
        
        let arrayResultado = [];
        arrayResultado = arrayResultado.concat(letrasMai, letrasMin);
        random(arrayResultado);
        arrayResultado = arrayResultado.slice(0,8)
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if(checkMai.checked == true && checkMin.checked == true && checkNum.checked == true && checkEspec.checked == false){
        let arrayResultado = [];
        arrayResultado = arrayResultado.concat(letrasMai, letrasMin, num);
        random(arrayResultado);
        arrayResultado = arrayResultado.slice(0,8)
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;
        
    } else if(checkMai.checked == true && checkMin.checked == true && checkNum.checked == true && checkEspec.checked == true){
        
        let arrayResultado = [];
        arrayResultado = arrayResultado.concat(letrasMai, letrasMin, num, caracEsp);
        random(arrayResultado);
        arrayResultado = arrayResultado.slice(0,8)
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if(checkMai.checked == true && checkMin.checked == false && checkNum.checked == true && checkEspec.checked == false){
        
        let arrayResultado = [];
        arrayResultado = arrayResultado.concat(letrasMai, num);
        random(arrayResultado);
        arrayResultado = arrayResultado.slice(0,8)
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if(checkMai.checked == true && checkMin.checked == false && checkNum.checked == false && checkEspec.checked == true){
        
        let arrayResultado = [];
        arrayResultado = arrayResultado.concat(letrasMai, caracEsp);
        random(arrayResultado);
        arrayResultado = arrayResultado.slice(0,8)
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if(checkMai.checked == true && checkMin.checked == true && checkNum.checked == false && checkEspec.checked == true){
        
        let arrayResultado = [];
        arrayResultado = arrayResultado.concat(letrasMai, letrasMin, caracEsp);
        random(arrayResultado);
        arrayResultado = arrayResultado.slice(0,8)
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if(checkMai.checked == false && checkMin.checked == true && checkNum.checked == false && checkEspec.checked == false){
        
        let arrayResultado = [];
        random(letrasMin);
        arrayResultado = letrasMin.slice(0,8);
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if(checkMai.checked == false && checkMin.checked == true && checkNum.checked == true && checkEspec.checked == false){
        
        let arrayResultado = [];
        arrayResultado = arrayResultado.concat(letrasMin, num);
        random(arrayResultado);
        arrayResultado = arrayResultado.slice(0,8)
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if(checkMai.checked == false && checkMin.checked == true && checkNum.checked == false && checkEspec.checked == true){
        
        let arrayResultado = [];
        arrayResultado = arrayResultado.concat(letrasMin, caracEsp);
        random(arrayResultado);
        arrayResultado = arrayResultado.slice(0,8)
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if(checkMai.checked == false && checkMin.checked == true && checkNum.checked == true && checkEspec.checked == true){
        
        let arrayResultado = [];
        arrayResultado = arrayResultado.concat(letrasMin, num, caracEsp);
        random(arrayResultado);
        arrayResultado = arrayResultado.slice(0,8)
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if(checkMai.checked == false && checkMin.checked == false && checkNum.checked == true && checkEspec.checked == false){
        
        let arrayResultado = [];
        random(num);
        arrayResultado = num.slice(0,8);
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if(checkMai.checked == false && checkMin.checked == false && checkNum.checked == true && checkEspec.checked == true){
        
        let arrayResultado = [];
        arrayResultado = arrayResultado.concat(num, caracEsp);
        random(arrayResultado);
        arrayResultado = arrayResultado.slice(0,8)
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if(checkMai.checked == false && checkMin.checked == false && checkNum.checked == false && checkEspec.checked == true){
        
        let arrayResultado = [];
        random(caracEsp);
        arrayResultado = caracEsp.slice(0,8);
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else if(checkMai.checked == true && checkMin.checked == false && checkNum.checked == true && checkEspec.checked == true){
        
        let arrayResultado = [];
        arrayResultado = arrayResultado.concat(letrasMai, num, caracEsp);
        random(arrayResultado);
        arrayResultado = arrayResultado.slice(0,8)
        let res = arrayResultado.toString();
        let senha = res.replace(/,/g, '');

        display.innerText = senha;

    } else alert('[ERRO] Selecione ao menos um tipo de caractere')
}

window.onload = addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        gerar()
    }
})