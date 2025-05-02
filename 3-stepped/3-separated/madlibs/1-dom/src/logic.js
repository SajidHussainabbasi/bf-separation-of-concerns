export function getInputValues(formEl) {
  const inputs = formEl.querySelectorAll('input[type="text"]');
  const values = {};
  inputs.forEach((input) => {
    values[input.name] = input.value.trim();
  });
  return values;
}

export function generateStory({ noun, verb, adjective, adverb }) {
  return `The ${adjective} ${noun} decided to ${verb} ${adverb}. It was hilarious!`;
}

export function displayStory(storyText) {
  const output = document.getElementById('output');
  output.textContent = storyText;
}

export function clearInputs(formEl) {
  const inputs = formEl.querySelectorAll('input[type="text"]');
  inputs.forEach((input) => (input.value = ''));
}
