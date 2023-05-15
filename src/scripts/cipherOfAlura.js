const textareaInput = document.querySelector("textarea");
const textareaOutput = document.querySelector(".text-area-output");
const sapnNotice = document.querySelector(".crypto-notice");
const buttonCryptography = document.querySelector(".button-cryptography");
const buttonDecryption = document.querySelector(".button-decryption");

const vowels = ["a", "e", "i", "o", "u"];
const newVowels = ["ai", "enter", "imes", "ober", "ufat"];

const encryptAndDecryptText = (text, vowels, newVowels) => {
  let result = "";
  let i = 0;
  while (i < text.length) {
    let matched = false;
    for (let j = 0; j < newVowels.length; j++) {
      if (text.slice(i, i + newVowels[j].length) === newVowels[j]) {
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
};

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

const encrypt = () => {
  const text = textareaInput.value;
  if (!isLowerCase(text)) {
    showResult(encryptAndDecryptText(text, newVowels, vowels));
    clearTextareaInput();
    focusTextareaInput();
  } else {
    sapnNotice.classList.add("danger");
    removeTheDangerClassOverTime();
    clearTextareaInput();
    focusTextareaInput();
  }
};

const decrypt = () => {
  const text = textareaInput.value;
  if (!isLowerCase(text)) {
    showResult(encryptAndDecryptText(text, vowels, newVowels));
    clearTextareaInput();
    focusTextareaInput();
  } else {
    sapnNotice.classList.add("danger");
    removeTheDangerClassOverTime();
    clearTextareaInput();
    focusTextareaInput();
  }
};

buttonCryptography.addEventListener("click", encrypt);
buttonDecryption.addEventListener("click", decrypt);
