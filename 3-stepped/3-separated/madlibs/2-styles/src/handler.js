import {
  getInputValues,
  generateStory,
  clearInputs,
  displayStory,
} from './logic.js';

export function handleGenerate() {
  const form = document.querySelector('form');
  const words = getInputValues(form);
  const story = generateStory(words);
  displayStory(story);
  clearInputs(form);
}
