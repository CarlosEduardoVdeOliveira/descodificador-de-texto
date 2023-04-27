const elementTextarea = document.querySelector("textarea");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");


const vowels = ['a', 'e', 'i', 'o', 'u'];
const newVowels = ["ai", "enter", "imes", "ober", "ufat"];
//const text = elementTextarea.value
//let text = 'o rato roeu a roupa do rei de roma'

/* function myEncrypt(){
   let result = ''
   for (let i = 0; i < text.length; i++) {
      if (vowels.includes(text[i])) {
         result = text.replaceAll(text[i], newVowels[i])
      }
   }
   return result
}

console.log(myEncrypt()); */
function cipherOfAlura() {
   let result = '';
   const text = elementTextarea.value
   for (let i = 0; i < text.length; i++) {
      if (vowels.includes(text[i])) {
         const index = vowels.indexOf(text[i]);
         result += newVowels[index];
      } else {
         result += text[i];
      }
   }
   return result;
}

function aluraCipherCode(){
      let result = '';
   const text = elementTextarea.value
   for (let i = 0; i < text.length; i++) {
      if (newVowels.includes(text[i])) {
         const index = newVowels.indexOf(text[i]);
         result += vowels[index];
      } else {
         result += text[i];
      }
   }
   return result;
}

function encrypt(){
   const textareaValue = elementTextarea.value;
   if (textareaValue.length > 0) {
      areaCryption.classList.add("text-cryption-whit-text")
      return areaCryption.innerHTML = `
         <textarea class="textarea-output" disabled>${cipherOfAlura()}</textarea>
         <button class="button-copy" id='copy' onclick="copyText()">Copiar</button>
         `;
   }
   return alert("Preencha sua mensagem!");
}

function decrypt(){
   const textareaValue = elementTextarea.value;
   if (textareaValue.length > 0) {
      areaCryption.classList.add("text-cryption-whit-text")
      return areaCryption.innerHTML = `
         <textarea class="textarea-output" disabled>${aluraCipherCode()}</textarea>
         <button class="button-copy" id='copy' onclick="copyText()">Copiar</button>
         `;
   }
   return alert("Preencha sua mensagem!");
}


buttonCryptography.addEventListener('click', encrypt)
buttonDecryption.addEventListener('click', decrypt)
