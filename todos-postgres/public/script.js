document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todoList");
  
    // Fetch todos from the server
    function fetchTodos() {
      fetch("/todos")
        .then(response => response.json())
        .then(todos => {
          todoList.innerHTML = "";
          todos.forEach(todo => {
            const li = document.createElement("li");
            li.innerHTML = `
              <span>${todo.title}</span>
              <button onclick="deleteTodo(${todo.id})">Delete</button>
              <button onclick="editTodo(${todo.id}, '${todo.title}', ${todo.completed})">Edit</button>
            `;
            todoList.appendChild(li);
          });
        })
        .catch(error => console.error("Error fetching todos:", error));
    }
  
    // Add todo
    document.getElementById("addTodoForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const title = document.getElementById("title").value;
      const completed = document.getElementById("completed").checked;
      fetch("/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, completed })
      })
        .then(() => {
          fetchTodos();
          document.getElementById("addTodoForm").reset();
        })
        .catch(error => console.error("Error adding todo:", error));
    });
  
    // Delete todo
    window.deleteTodo = function (id) {
      fetch(`/todos/${id}`, {
        method: "DELETE"
      })
        .then(() => fetchTodos())
        .catch(error => console.error("Error deleting todo:", error));
    };
  
    // Edit todo
    window.editTodo = function (id, title, completed) {
      const newTitle = prompt("Enter new title:", title);
      if (newTitle !== null) {
        fetch(`/todos/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ title: newTitle, completed })
        })
          .then(() => fetchTodos())
          .catch(error => console.error("Error updating todo:", error));
      }
    };
  
    // Initial fetch of todos
    fetchTodos();
  });
  