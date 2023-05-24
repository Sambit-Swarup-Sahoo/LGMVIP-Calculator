
const opBox = document.querySelector('.op_box');
const btns = document.querySelectorAll('button');

let expression = '';


function updateDisplay() {
  opBox.textContent = expression;
}


btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (value === '=') {
     
      try {
        expression = eval(expression);
      } catch (error) {
        expression = 'Error';
      }
    } else if (value === 'c') {
      
      expression = '';
    } else {
      
      expression += value;
    }

    updateDisplay();
  });
});
