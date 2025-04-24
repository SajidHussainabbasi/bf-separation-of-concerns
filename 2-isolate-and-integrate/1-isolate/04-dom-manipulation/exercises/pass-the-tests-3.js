'use strict';

// Use a div instead of ul to hold the table
const divEl = document.createElement('div');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr></tr>
      <tr></tr>
    </tbody>
  </table>
`;

console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  you want to create a 2x2 table with a, b, c, d in the squares

const values = ['a', 'b', 'c', 'd'];
const rows = divEl.querySelectorAll('tr');
let valueIndex = 0;

rows.forEach((row) => {
  for (let i = 0; i < 2; i++) {
    const td = document.createElement('td');
    td.textContent = values[valueIndex++];
    row.appendChild(td);
  }
});

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

// Validate
const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.querySelector('tbody');
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(
      actual === expected,
      `expected "${expected}" but got "${actual}"`,
    );
  }
}
