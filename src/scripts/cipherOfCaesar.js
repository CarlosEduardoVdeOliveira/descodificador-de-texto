const textareaInput = document.querySelector("textarea");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");
const textareaOutput = document.querySelector(".text-area-output");
const sapnNotice = document.querySelector(".crypto-notice");

function encryptAndDecryptText(text, jump) {
   let cryptograph = "";
   for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
         charCode = ((charCode - 97 + jump) % 26) + 97;
      }
      cryptograph += String.fromCharCode(charCode);
   }
   return cryptograph;
}

const isLowerCase = (text) => /[^a-z$]/g.test(text);
const clearTextareaInput = () => (textareaInput.value = "");
const focusTextareaInput = () => textareaInput.focus();

const removeTheDangerClassOverTime = () => {
   const interval = 5000;
   return setInterval(() => {
      sapnNotice.classList.remove("danger");
   }, interval);
};

const showResult = (callback) => {
   const text = textareaInput.value;
   if (text.length > 0) {
      textareaOutput.classList.add("text-cryption-whit");
      return (textareaOutput.innerHTML = `
         <textarea class='textarea-output' disabled>${callback}</textarea>
         <button class='button-copy' id='copy' onclick='copyText()'>
            Copiar
         </button>
      `);
   }
   return alert("Preencha sua mensagem!");
};

function encryptText() {
   const text = textareaInput.value;
   const jump = 5;
   if (!isLowerCase(text)) {
      showResult(encryptAndDecryptText(text, jump));
      clearTextareaInput();
      focusTextareaInput();
   } else {
      sapnNotice.classList.add("danger");
      removeTheDangerClassOverTime();
      clearTextareaInput();
      focusTextareaInput();
   }
}

function decryptText() {
   const text = textareaInput.value;
   const jump = -5;
   if (!isLowerCase(text)) {
      showResult(encryptAndDecryptText(text, jump));
      clearTextareaInput();
      focusTextareaInput();
   } else {
      sapnNotice.classList.add("danger");
      removeTheDangerClassOverTime();
      clearTextareaInput();
      focusTextareaInput();
   }
}

buttonCryptography.addEventListener("click", encryptText);
buttonDecryption.addEventListener("click", decryptText);
