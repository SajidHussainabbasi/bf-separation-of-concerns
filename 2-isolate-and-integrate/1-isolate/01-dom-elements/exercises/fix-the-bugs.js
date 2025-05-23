'use strict';

const element = document.createElement('button');
element.innerHTML = 'go home';
element.className = 'large-btn';

console.assert(element.nodeName === 'BUTTON', 'Test 1: nodeName');
console.assert(element.innerHTML === 'go home', 'Test 2: innerHTML');
console.assert(element.className === 'large-btn', 'Test 3: className');
