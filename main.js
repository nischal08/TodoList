const btn = document.getElementById('btn');
const output = document.getElementById('output');

document.querySelector('form').addEventListener('submit', () => {
  let task = document.getElementById('task').value;
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
});
