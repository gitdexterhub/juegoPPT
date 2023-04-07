const parrafoResp = document.querySelector('.metion_ok');
const secundParraf = document.querySelector('.metion-2');
const finalParraf = document.querySelector('.metion_final');
const pCount = document.querySelector('.count');
const input1 = document.querySelector('.inp1');
const botonJuego = document.querySelector('.mention_btn');

let userWins = 0;
let machineWins = 0;

const options = ['Piedra', 'Papel', 'Tijeras'];

function play(numberSelect){
  let userSelection, machineSelect, result;

  if(numberSelect > 0 && numberSelect < 4){
    userSelection = options[numberSelect - 1];
    machineSelect = options[Math.floor(Math.random()*3)];

    if(userSelection === 'Piedra' && machineSelect === 'Tijeras' || userSelection === 'Papel' && machineSelect === 'Piedra' || userSelection === 'Tijeras' && machineSelect === 'Papel'){
      result = 'Usted ha ganado';
      userWins++;
    }
    else if(userSelection == machineSelect){
      result = 'Esto es un empate';
    }
    else{
      result = 'Usted ha perdido';
      machineWins++;
    }

    parrafoResp.innerText = 'Usted ha seleccionado ' + userSelection;
    secundParraf.innerText = 'Su oponente ha seleccionado ' + machineSelect;
    finalParraf.innerText = result;
    pCount.innerText = `La máquina ha ganado ${machineWins}  y usted ha ganado ${userWins}`;

    if(userWins === 3){
        parrafoResp.innerText = '¡Felicitaciones! Has ganado.';
        secundParraf.innerText = '';
        finalParraf.innerText = '';
        pCount.innerText = '';
        userWins = 0;
        machineWins = 0;
    }
    else if (machineWins === 3){
        parrafoResp.innerText = 'Lo siento, tu oponente ha ganado.';
        secundParraf.innerText = '';
        finalParraf.innerText = '';
        pCount.innerText = '';
        machineWins = 0;
        userWins = 0;
    }

  }
  else{
    result = 'Los valores ingresados no son válidos';
    parrafoResp.innerText = result;
    secundParraf.innerText = '';
    finalParraf.innerText = '';
  }
 
}

botonJuego.addEventListener('click', function(){
  let inputValue = input1.value;
  play(inputValue);
});






