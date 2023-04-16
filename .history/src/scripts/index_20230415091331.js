const elementTextarea = document.querySelector("textarea");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");


buttonDecryption.setAttribute("disabled", '');


function encryptText() {   
   const textareaValue = elementTextarea.value;
   if (textareaValue.length > 0) {
      disabledButtonDecrypt()
      areaCryption.classList.add("text-cryption-whit-text")
      return areaCryption.innerHTML = `
         <textarea class="textarea-output">${cipherOfCesar(textareaValue)}</textarea>
         <button class="button-copy" id='copy' onclick="copyText()">Copiar</button>
         `;
         
      }
   return alert("Preencha o campo!")
}

// cifra de César com salto de 5 casas
function cipherOfCesar(text){
   let cryptograph = ''
   for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i)
      if(charCode >= 97 && charCode <= 122){
         charCode = ((charCode - 97 + 5) % 26) + 97
      }
      cryptograph += String.fromCharCode(charCode);
   }
   return cryptograph
}

function disabledButtonDecrypt(){
   buttonDecryption.removeAttribute("disabled");
   buttonDecryption.style.cursor = 'pointer';
}


function decryptText() {
   const textareaValue = elementTextarea.value;
   return areaCryption.innerHTML = `
         <textarea class="textarea-output">${textareaValue}</textarea>
         <button class="button-copy" id='copy' onclick="copyText()">Copiar</button>
      `;
}

async function copyText() {
   const textareaOutput = document.querySelector('.textarea-output');
   await textareaOutput.select();
   document.execCommand('copy');
   alert("Texto copiado para área de trasferência!");
}

buttonCryptography.addEventListener('click', encryptText);
buttonDecryption.addEventListener('click', decryptText);

/**
 * a b c d e f g h i j k l m n o p q r s t u v w x y z
 * r s t u v w x y z a b c d e f g h i j k l m n o p q
 * jhysvz
 * carlos
 * 97 até 122
 * a  ==  j
 * 97 == 106
 * se o codigo for igual a 97 ele recebe j
 * se ele for igual a 122 ele recebe 113
 */


