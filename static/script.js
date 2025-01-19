const API_URL = "http://localhost:5000";

const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoTitle = document.getElementById("todo-title");
const todoDescription = document.getElementById("todo-description");
const notification = document.getElementById("notification");

async function fetchTodos() {
  try {
    const response = await fetch(`${API_URL}/todos`);
    const todos = await response.json();
    renderTodos(todos);
  } catch (error) {
    showNotification("Failed to fetch tasks", "error");
  }
}

function renderTodos(todos) {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;
    li.innerHTML = `
            <div class="todo-content">
                <h3>${todo.title}</h3>
                ${todo.description ? `<p>${todo.description}</p>` : ""}
            </div>
            <div class="todo-actions">
                <button onclick="toggleTodo(${todo.id}, ${!todo.completed})">
                    ${todo.completed ? "↩️ Undo" : "✅ Complete"}
                </button>
                <button onclick="editTodo(${todo.id})">✏️ Edit</button>
                <button onclick="deleteTodo(${todo.id})">🗑️ Delete</button>
            </div>
        `;
    todoList.appendChild(li);
  });
}

async function addTodo(event) {
  event.preventDefault();
  const title = todoTitle.value.trim();
  const description = todoDescription.value.trim();

  if (!title) {
    showNotification("Please enter a task title", "error");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    if (response.ok) {
      const newTodo = await response.json();
      todoTitle.value = "";
      todoDescription.value = "";
      renderNewTodo(newTodo);
      showNotification("Task added successfully", "success");
    } else {
      showNotification("Failed to add task", "error");
    }
  } catch (error) {
    showNotification("Failed to add task", "error");
  }
}

function renderNewTodo(todo) {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `
        <div class="todo-content">
            <h3>${todo.title}</h3>
            ${todo.description ? `<p>${todo.description}</p>` : ""}
        </div>
        <div class="todo-actions">
            <button onclick="toggleTodo(${todo.id}, true)">✅ Complete</button>
            <button onclick="editTodo(${todo.id})">✏️ Edit</button>
            <button onclick="deleteTodo(${todo.id})">🗑️ Delete</button>
        </div>
    `;
  li.style.animation = "fadeIn 0.5s";
  todoList.prepend(li);
}

async function toggleTodo(id, completed) {
  try {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });

    if (response.ok) {
      fetchTodos();
      showNotification("Task updated successfully", "success");
    } else {
      showNotification("Failed to update task", "error");
    }
  } catch (error) {
    showNotification("Failed to update task", "error");
  }
}

async function editTodo(id) {
  const newTitle = prompt("Enter new title:");
  if (newTitle) {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });

      if (response.ok) {
        fetchTodos();
        showNotification("Task updated successfully", "success");
      } else {
        showNotification("Failed to update task", "error");
      }
    } catch (error) {
      showNotification("Failed to update task", "error");
    }
  }
}

async function deleteTodo(id) {
  if (confirm("Are you sure you want to delete this task?")) {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchTodos();
        showNotification("Task deleted successfully", "success");
      } else {
        showNotification("Failed to delete task", "error");
      }
    } catch (error) {
      showNotification("Failed to delete task", "error");
    }
  }
}

function showNotification(message, type = "info") {
  notification.textContent = message;
  notification.className = `notification ${type} show`;
  setTimeout(() => {
    notification.className = "notification";
  }, 3000);
}

todoForm.addEventListener("submit", addTodo);
fetchTodos();
