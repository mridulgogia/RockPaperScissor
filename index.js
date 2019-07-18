const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const resultText = document.querySelector('.result-text');
let userScore = 0;
let compScore = 0;

function loadGame(){
  userScore = 0;
  compScore = 0;

  document.getElementById('user-score').innerHTML = userScore;
  document.getElementById('comp-score').innerHTML = compScore;
}

rock.addEventListener('click', () =>{
  game('rock');
});

paper.addEventListener('click', () =>{
  game('paper');
});

scissor.addEventListener('click', () =>{
  game('scissor');
});

function game(userChoice){
  const compChoice = getCompChoice()
  const userVScomp = userChoice + compChoice;

  switch (userVScomp) {
    case 'rockscissor':
    case 'paperrock':
    case 'scissorpaper':
      win(userChoice, compChoice);
      break;
    case 'rockpaper':
    case 'paperscissor':
    case 'scissorrock':
      loss(userChoice, compChoice);
      break;

    default: draw(userChoice, compChoice);
  }
}

getCompChoice = () => {
  const option = ['rock', 'paper', 'scissor'];

  let randNumber = Math.random()*3;
  randNumber = Math.floor(randNumber);
  console.log(randNumber);

  return option[randNumber]
}

win = (userChoice, compChoice) => {
  userScore++;
  updateScore();
  resultText.innerHTML = `<p>${userChoice}</p><sub>user</sub> beats <p>${compChoice}</p><sub>computer</sub>`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('green-glow');
  }, 400);
}

loss = (userChoice, compChoice) => {
  compScore++;
  updateScore();
  resultText.innerHTML = `<p>${userChoice}</p><sub>user</sub> losses <p>${compChoice}</p><sub>computer</sub>`
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('red-glow');
    }, 400);
}
draw = (userChoice, compChoice) => {
  resultText.innerHTML = `It's a draw`;
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('grey-glow');
  }, 400);
}
updateScore = () => {

    document.getElementById('user-score').innerHTML = userScore;
    document.getElementById('comp-score').innerHTML = compScore;
}
