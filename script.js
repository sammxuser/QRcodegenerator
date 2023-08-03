const inputText = document.querySelector('.container input');
const generateButton = document.querySelector('.container button');

let qrText = '';
let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');

function getText() {
  qrText = inputText.value;
}

generateButton.addEventListener('click', function () {
  getText();
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrText}`;
});
