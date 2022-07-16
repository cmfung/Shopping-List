const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
  const ingredient = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');

  listItem.appendChild(span);
  span.textContent = ingredient;
  listItem.appendChild(deleteButton);
  deleteButton.textContent = 'Delete';

  list.appendChild(listItem);

  deleteButton.addEventListener('click', function() {
    list.removeChild(listItem);
  })

  input.focus()
})