const IconCreatedConfirmation = () => {
  const button = document.querySelector("#copy");
  const classIconAddOrRemove = ["fa-sharp", "fa-solid", "fa-circle-check"];
  const interval = 3000;
  const addIconConfirmation = document.createElement("i");
  for (let i of classIconAddOrRemove) {
    addIconConfirmation.classList.add(i);
  }
  addIconConfirmation.style.width = "2rem";
  addIconConfirmation.style.color = "#25a155";
  button.appendChild(addIconConfirmation);
  button.style.borderColor = "#25a155";
  button.style.color = "#25a155";

  setInterval(() => {
    for (let i of classIconAddOrRemove) {
      addIconConfirmation.classList.remove(i);
    }
    addIconConfirmation.style.width = "0";
    button.style.color = "#0A3871";
    button.style.borderColor = "#0A3871";
    addIconConfirmation.style.animation = "opacityAttribute";
  }, interval);
};

const copyText = () => {
  const textareaOutput = document.querySelector(".textarea-output");
  textareaOutput.removeAttribute("disabled");
  textareaOutput.select();
  navigator.clipboard.writeText(textareaOutput.value);
  IconCreatedConfirmation();
  textareaOutput.setAttribute("disabled", "");
};
