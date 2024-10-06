
      const todoInput = document.getElementById("todo-input");
      const prioritySelect = document.getElementById("priority-select");
      const addTaskBtn = document.getElementById("add-task-btn");
      const todoList = document.getElementById("todo-list");
      const doneList = document.getElementById("done-list");
      const deleteAllBtn = document.getElementById("delete-all-btn");
      const profileName = document.getElementById("profile-name");
      const profileRole = document.getElementById("profile-role");
      const currentTime = document.getElementById("current-time");

      // Set profile information
      profileName.innerText = "Zidan Dhiya";
      profileRole.innerText = "Fullstack Web Developer";

      // Set current time
      function updateTime() {
        const now = new Date();
        const day = now.toLocaleString("en-US", { weekday: "long" });
        const date = now.toLocaleDateString();
        currentTime.innerHTML = `<p>${day}</p><p>${date}</p>`;
      }
      updateTime();

      // Add new task
      addTaskBtn.addEventListener("click", () => {
        const task = todoInput.value;
        const priority = prioritySelect.value;
        if (task.trim() === "") return; // Don't add empty tasks

        const listItem = document.createElement("li");
        listItem.className = `p-2 mb-2 border-b flex justify-between items-center ${
          priority === "high"
            ? "bg-red-100"
            : priority === "medium"
            ? "bg-yellow-100"
            : "bg-green-100"
        }`;
        listItem.innerHTML = `
        <div>
          <input type="checkbox" class="mr-2">
          <span>${task}</span> <span class="text-xs text-gray-500">(${priority} priority)</span>
        </div>
        <span>${new Date().toLocaleDateString()}</span>
      `;

        const checkbox = listItem.querySelector('input[type="checkbox"]');
        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
            listItem.classList.add("line-through");
            doneList.appendChild(listItem);
          } else {
            listItem.classList.remove("line-through");
            todoList.appendChild(listItem);
          }
        });

        todoList.appendChild(listItem);
        todoInput.value = ""; // Clear input
      });

      // Delete all tasks
      deleteAllBtn.addEventListener("click", () => {
        todoList.innerHTML = "";
        doneList.innerHTML = "";
      });