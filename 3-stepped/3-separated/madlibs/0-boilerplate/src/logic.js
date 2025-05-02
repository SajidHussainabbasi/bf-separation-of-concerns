export function getInputValues(formEl) {
  const formData = new FormData(formEl);
  const values = {};
  for (let [key, value] of formData.entries()) {
    values[key] = value.trim();
  }
  return values;
}

export function generateStory({ adjective, noun, verb }) {
  return `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} all day long.`;
}

export function displayStory(storyText) {
  const output = document.getElementById('output');
  output.textContent = storyText;
  output.classList.remove('hidden');
}

export function clearInputs(formEl) {
  formEl.reset();
}
