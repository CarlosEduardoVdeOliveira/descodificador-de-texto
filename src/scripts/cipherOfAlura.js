const elementTextarea = document.querySelector("textarea");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");

const vowels = ["a", "e", "i", "o", "u"];
const newVowels = ["ai", "enter", "imes", "ober", "ufat"];


function cipherOfAlura(text, codeDecript, codeEncript) {
   let result = "";
   for (let i = 0; i < text.length; i++) {
      if(codeDecript.includes(text[i])){
         result += codeEncript[codeDecript.indexOf(text[i])];
      }else {
         result += text[i];
      }
   }
   return result
}

function test(){
   let text = 'gaitober'
   let res = ''
   for (let i = 0; i < text.length; i++) {
      if(newVowels.includes(text[i])){
         res += vowels[newVowels.indexOf(text[i])];
      }else{
         res += text[i];
      }
   }
   return res
}

console.log(test());

function showResult(callback) {
   let text = elementTextarea.value;
   if (text.length > 0) {
      areaCryption.classList.add("text-cryption-whit-text");
      return (areaCryption.innerHTML = `
         <textarea class='textarea-output' disabled>${callback}</textarea>
         <button class='button-copy' id='copy' onclick='copyText()'>Copiar</button>
         `);
   }
   return alert("Preencha sua mensagem!");
}

function encrypt() {
   let text = elementTextarea.value;
   showResult(cipherOfAlura(text, vowels, newVowels));
}

function decrypt() {
   let text = elementTextarea.value;
   showResult(cipherOfAlura(text, newVowels, vowels));
}

function copyText(){
   const textareaOutput = document.querySelector('.textarea-output');
   textareaOutput.removeAttribute('disabled');
   textareaOutput.select();
   document.execCommand('copy');
   alert("Texto copiado para área de trasferência!");
   textareaOutput.setAttribute('disabled', '')
}

buttonCryptography.addEventListener("click", encrypt);
buttonDecryption.addEventListener("click", decrypt);
