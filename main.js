import './style.css'

const passwordElement = document.querySelector('#password');
const lengthTextElement = document.querySelector('#password-length');
const rangeElement = document.querySelector('#range');
const buttonGenerateElement = document.querySelector('#generate-password');

const allowedChars = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890+-.,!"·$%&/()=?{}';
let passwordLength = rangeElement.value;
lengthTextElement.innerText = passwordLength;

const setPasswordLength = (event) => {
  passwordLength = event.target.value;
  lengthTextElement.innerText = passwordLength;
};

const printPassword = (password) => passwordElement.value = password;

const generatePassword = () => {
  let newPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * allowedChars.length);
    const randomChar = allowedChars[randomNumber];
    newPassword += randomChar;
  }
  printPassword(newPassword);
};

// Listener que escucha el valor del range y lo imprime en la información de la longitud del password
rangeElement.addEventListener('input', setPasswordLength);

// Listener que genera el password aplicando una elección aleatoria en un bucle dentro de los caracteres de allowedChars con el número de caracteres especificados en el valor del range.
buttonGenerateElement.addEventListener('click', generatePassword);