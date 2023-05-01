const elementTextarea = document.querySelector("textarea");
const areaCryption = document.querySelector(".text-cryption");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");


const vowels = ['a', 'e', 'i', 'o', 'u'];
const newVowels = ["ai", "enter", "imes", "ober", "ufat"];
const text = elementTextarea.value;

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
   const text = elementTextarea.value;
   let result = '';
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
   const text = 'gaitober';
   let result = '';
   for (let i = 0; i < text.length; i++) {
      if (text.includes(newVowels[i])) {
         result = vowels[i]
         console.log(i, result);
      }
   }
   return result;
}
aluraCipherCode()

function showResult(callback){
   const text = elementTextarea.value;
   if (text.length > 0) {
      areaCryption.classList.add("text-cryption-whit-text");
      return areaCryption.innerHTML = `
         <textarea class="textarea-output" disabled>${callback}</textarea>
         <button class="button-copy" id='copy' onclick="copyText()">Copiar</button>
         `;
   }
   return alert("Preencha sua mensagem!");
}

function encrypt(){
   showResult(cipherOfAlura())
}

function decrypt(){
   showResult(aluraCipherCode())
}


buttonCryptography.addEventListener('click', encrypt)
buttonDecryption.addEventListener('click', decrypt)
