import { handleSubmit } from './handler.js';

export function attachListeners() {
  document.getElementById('word-form').addEventListener('submit', handleSubmit);
}
