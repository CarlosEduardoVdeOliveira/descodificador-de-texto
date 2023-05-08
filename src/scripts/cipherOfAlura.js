const textareaInput = document.querySelector("textarea");
const textareaOutput = document.querySelector(".text-area-output");
const sapnNotice = document.querySelector(".crypto-notice");
const iconNotice = document.querySelector(".fa-circle-exclamation");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");

const vowels = ["a", "e", "i", "o", "u"];
const newVowels = ["ai", "enter", "imes", "ober", "ufat"];

function encryptText(text, vowels, newVowels) {
   let result = "";
   for (let i = 0; i < text.length; i++) {
      if(vowels.includes(text[i])){
         result += newVowels[vowels.indexOf(text[i])];
      }else {
         result += text[i];
      }
   }
   return result
}

function decryptText(text, vowels, newVowels){
   let result = "";
   let i = 0;
   while (i < text.length) {
      let matched = false;
      for (let j = 0; j < newVowels.length; j++) {
      if (text.slice(i, i+newVowels[j].length) === newVowels[j]) {
         result += vowels[j];
         i += newVowels[j].length;
         matched = true;
         break;
      }
      }
      if (!matched) {
         result += text[i];
         i++;
      }
   }
   return result;
}
const checkThatAllLettersAreLowerCase = (text) => /[a-z]/.test(text);
const clearTextareaInput = () => textareaInput.value = '';
const focusTextareaInput = () => textareaInput.focus();

function showResult(callback) {
   const text = textareaInput.value;
   if (text.length > 0) {
      textareaOutput.classList.add("text-cryption-whit");
      return (textareaOutput.innerHTML = `
         <textarea class='textarea-output' disabled>${callback}</textarea>
         <button class='button-copy' id='copy' onclick='copyText()'>Copiar</button>
         `);
   }
   return alert("Preencha sua mensagem!");
}

function encrypt() {
   const text = textareaInput.value;
   if(checkThatAllLettersAreLowerCase(text)){
      showResult(encryptText(text, vowels, newVowels));
      sapnNotice.classList.remove('danger');
      clearTextareaInput();
      focusTextareaInput();
   }else{
      sapnNotice.classList.add('danger');
      clearTextareaInput();
      focusTextareaInput();
      setTimeout(() => {
         sapnNotice.classList.remove('danger');
      }, 3000);
   }
}

function decrypt() {
   const text = textareaInput.value;
   if(checkThatAllLettersAreLowerCase(text)){
      showResult(decryptText(text, vowels, newVowels));
      sapnNotice.classList.remove('danger');
      clearTextareaInput();
      focusTextareaInput();
   }else{
      sapnNotice.classList.add('danger');
      clearTextareaInput();
      focusTextareaInput();
   }
}

function copyText(){
   const textareaOutput = document.querySelector('.textarea-output');
   textareaOutput.removeAttribute('disabled');
   textareaOutput.select();
   navigator.clipboard.writeText(textareaOutput.value);
   alert("Texto copiado para área de trasferência!");
   textareaOutput.setAttribute('disabled', '')
}

buttonCryptography.addEventListener("click", encrypt);
buttonDecryption.addEventListener("click", decrypt);
