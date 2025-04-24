import { state } from '../data/state.js';

debugger; // once when the program is initialized

// ==== the user can add a new number to state ====

document.getElementById('next-number').addEventListener('change', (event) => {
    debugger; // each time the user changes the 'next-number' input

    // --- read the user's input ---
    const inputValue = event.target.value;
    const nextNumber = Number(inputValue);

    // --- update state ---
    state.allNumbers.push(nextNumber);
    state.currentNumber = state.allNumbers.at(-1);

    // --- update UI ---
    const liString = `<li class="number-item">${state.currentNumber}</li>`;
    const backwardsContainer = document.getElementById('number-history');
    backwardsContainer.innerHTML = liString + backwardsContainer.innerHTML;
});

// ==== the user can change the input's value ====

document.getElementById('number-history').addEventListener('mouseover', (event) => {
    debugger; // each time the user moves the mouse over 'number-history'

    if (event.target.nodeName !== 'LI') {
        return;
    }

    const targetText = event.target.innerText;
    const userNumber = Number(targetText);

    state.currentNumber = userNumber;

    document.getElementById('next-number').value = state.currentNumber;
});

// ==== remove a number when it's clicked ====

document.getElementById('number-history').addEventListener('click', (event) => {
    if (event.target.nodeName !== 'LI') {
        return;
    }

    const clickedNumber = Number(event.target.innerText);

    // --- update state: remove the number from the array ---
    const index = state.allNumbers.indexOf(clickedNumber);
    if (index !== -1) {
        state.allNumbers.splice(index, 1);
    }

    // if the removed number was the currentNumber, reset or update it
    if (state.currentNumber === clickedNumber) {
        state.currentNumber = state.allNumbers.at(-1) || null;
        document.getElementById('next-number').value = state.currentNumber ?? '';
    }

    // --- update UI: remove the clicked element ---
    event.target.remove();
});
