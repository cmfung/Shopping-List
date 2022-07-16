const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const newButton = document.createElement('button');

  listItem.appendChild(listText);
  listItem.textContent = myItem;

  listItem.appendChild(newButton);
  newButton.textContent = 'Delete';

  list.appendChild(listItem);

  newButton.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
})