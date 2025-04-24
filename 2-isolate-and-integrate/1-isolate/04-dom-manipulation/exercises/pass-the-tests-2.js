'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <p>frog</p>
  <li>salamander</li>
  <li>fish</li>
`;
console.log(ulEl.nodeName + ' (before)', ulEl.cloneNode(true));

// --- write some code ---
// find the <p> and replace it with an <li>
const pEl = ulEl.querySelector('p');
const liEl = document.createElement('li');
liEl.innerHTML = pEl.innerHTML;
ulEl.replaceChild(liEl, pEl);

// remove the last <li> (fish)
ulEl.removeChild(ulEl.lastElementChild);
// --- --- --- --- --- ---

console.log(ulEl.nodeName + ' (after)', ulEl.cloneNode(true));

console.assert(
  ulEl.childElementCount === 3,
  'Test: .childElementCount should be 3',
);

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actualNodeName = ulEl.children[i].nodeName;
  console.assert(actualNodeName === 'LI', `Test: child ${i} .nodeName`);

  const actualInnerHTML = ulEl.children[i].innerHTML.trim(); // trim whitespace
  const expectedInnerHTML = expectedInnerHTMLs[i];
  console.assert(
    actualInnerHTML === expectedInnerHTML,
    `Test: child ${i} .innerHTML (expected "${expectedInnerHTML}", got "${actualInnerHTML}")`,
  );
}
