function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDateTime = document.getElementById('taskDateTime');
    const taskText = taskInput.value.trim();
    const dateTime = taskDateTime.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
  
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <input type="datetime-local" class="edit-input" value="${dateTime}">
        <button class="delete-btn" onclick="deleteTask(this)">remove</button>
        <button class="edit-btn" onclick="editTask(this)">edit</button>
      `;
  
      taskList.appendChild(li);
  
      taskInput.value = '';
      taskDateTime.value = '';
    }
  }
  
  function deleteTask(btn) {
    const li = btn.parentElement;
    li.remove();
  }
  
  function editTask(btn) {
    const li = btn.parentElement;
    const span = li.querySelector('span');
    const input = li.querySelector('.edit-input');
    const editBtn = li.querySelector('.edit-btn');
  
    if (span.contentEditable !== 'true') {
      span.contentEditable = 'true';
      input.style.display = 'block';
      input.focus();
      editBtn.textContent = 'done';
    } else {
      span.contentEditable = 'false';
      input.style.display = 'done';
      editBtn.textContent = 'edit';
    }
  }
  