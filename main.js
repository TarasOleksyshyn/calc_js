'use strict'
const field = document.querySelector('.field');
const btns = document.querySelectorAll('.calc-btn');

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {

    switch (e.target.innerText) {
      case 'AC':
        field.innerText = '0';
        break;

      case '=': {
        try {
          field.innerText = eval(field.innerText);
        } catch (e) {
          field.innerText = 'Error!';
        }
        break;
      }

      case '+/-': {
        if (Number(field.innerText) < 0) {
          field.innerText = field.innerText.slice(1);
          break;
        } else if (Number(field.innerText) > 0) {
          field.innerText = '-' + field.innerText;
          break;
        }
        break;
      }

      case '%': {
        field.innerText = eval(field.innerText + '/100');
        break;
      }

      default:
        if (field.innerText === '0' && e.target.innerText !== '.') {
          field.innerText = e.target.innerText;
          break
        }
        else {
          field.innerText += e.target.innerText;
          break;
        }
    }
  })
})