import { getInputValues, generateStory, clearInputs } from './logic.js';
import { displayStory } from './logic.js';

export function handleSubmit(e) {
  e.preventDefault();
  const formEl = e.target;
  const words = getInputValues(formEl);
  const story = generateStory(words);
  displayStory(story);
  clearInputs(formEl);
}
