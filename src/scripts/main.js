'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  input.placeholder = label.textContent;
  input.parentNode.insertBefore(label, input);
});
