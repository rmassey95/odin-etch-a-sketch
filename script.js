const container = document.querySelector('#container');
createSquares(16);

function randomColor(){
  return Math.floor(Math.random() * (255 - 0 + 1));
}

function createSquares(numOfSquares){
  for (i=0;i<numOfSquares;i++){
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.display = 'flex';
    row.style.justifyContent = 'center';
  
    for (n=0;n<numOfSquares;n++){
      const box = document.createElement('div');
      const dimension = 800/numOfSquares;
      box.classList.add('box');
      box.style.width = `${dimension}px`;
      box.style.height = `${dimension}px`;
      box.style.backgroundColor = 'black';
  
      row.appendChild(box);
    }
    container.append(row);
  }
  const boxes = document.querySelectorAll('.box');
  
  boxes.forEach(box =>{
    let entered = false;
    let turn = 10;
    let rBlack = 0;
    let gBlack = 0;
    let bBlack = 0;

    box.addEventListener('mouseenter', (e) => {
      if (!entered){
        entered = true;
        const r = randomColor();
        const g = randomColor();
        const b = randomColor();
        rBlack = 0.1*r;
        gBlack = 0.1*g;
        bBlack = 0.1*b;
        e.target.style.backgroundColor=`rgb(${r},${g},${b})`;
      } else {
        turn -= 1;
        if (turn >= 0){
          e.target.style.backgroundColor=`rgb(${rBlack*turn},${gBlack*turn},${bBlack*turn})`;
        } else {
          turn = 10;
        }
      }
    });
  })
}

function removeSquares(){
  const rows = document.querySelectorAll('.row');
  rows.forEach(row => {
    container.removeChild(row);
  });
}

const btn = document.querySelector('#clr-grid');
btn.addEventListener('click', (e) => {
  removeSquares();
  let num = 0;
  do{
    num = prompt("Enter number of squares you want? (max of 100): ");
  } while (num > 100);
  createSquares(num);
});