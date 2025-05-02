import { generateMadLib } from './logic.js';

export function handleMadLib() {
  const noun = document.querySelector('input[name="noun"]').value.trim();
  const verb = document.querySelector('input[name="verb"]').value.trim();
  const adjective = document
    .querySelector('input[name="adjective"]')
    .value.trim();
  const adverb = document.querySelector('input[name="adverb"]').value.trim();

  if (!noun || !verb || !adjective || !adverb) {
    alert('Please fill in all fields!');
    return;
  }

  const result = generateMadLib({ noun, verb, adjective, adverb });
  document.querySelector('.fancy-text').textContent = result;
}
