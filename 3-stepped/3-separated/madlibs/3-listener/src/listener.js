import { handleMadLib } from './handler.js';

export function attachListeners() {
  const button = document.getElementById('user-action');
  button.addEventListener('click', handleMadLib);
}
