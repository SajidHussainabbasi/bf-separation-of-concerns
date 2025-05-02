import { handleGenerate } from './handler.js';

export function attachListeners() {
  const button = document.getElementById('generate-btn');
  button.addEventListener('click', handleGenerate);
}
