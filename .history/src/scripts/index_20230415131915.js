const elementTextarea = document.querySelector("textarea");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");

buttonDecryption.setAttribute("disabled", '');
const jump = Number(prompt("Digite em que posição o alfabeto deve começar. \n O número deve estar entre 0 = "/a/" e 25 = 'z'."));


function encryptText() {   
   const textareaValue = elementTextarea.value;
   if (textareaValue.length > 0) {
      disabledButtonDecrypt()
      areaCryption.classList.add("text-cryption-whit-text")
      return areaCryption.innerHTML = `
         <textarea class="textarea-output" disabled>${cipherOfCesar(textareaValue, jump)}</textarea>
         <button class="button-copy" id='copy' onclick="copyText()">Copiar</button>
         `;
         
      }
   return alert("Preencha sua mensagem!");
}

// Cifra de César
function cipherOfCesar(text, jump){
   let cryptograph = ''
   for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i)
      if(charCode >= 97 && charCode <= 122){
         charCode = ((charCode - 97 + jump) % 26) + 97
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
   if (textareaValue.length > 0) {
      return areaCryption.innerHTML = `
            <textarea class="textarea-output" disabled>${textareaValue}</textarea>
            <button class="button-copy" id='copy' onclick="copyText()">Copiar</button>
         `;
   }
   return alert("Preencha sua mensagem!")
}

function copyText() {
   const textareaOutput = document.querySelector('.textarea-output');
   textareaOutput.removeAttribute('disabled');
   textareaOutput.select();
   document.execCommand('copy');
   alert("Texto copiado para área de trasferência!");
   textareaOutput.setAttribute('disabled', '')
}

buttonCryptography.addEventListener('click', encryptText);
buttonDecryption.addEventListener('click', decryptText);
