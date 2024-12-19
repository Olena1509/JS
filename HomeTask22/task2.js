 // -------------------
        // 2. Дата останнього входу
        // -------------------
        const lastVisitKey = "lastVisitDate";
        const lastVisit = localStorage.getItem(lastVisitKey);
        const currentVisit = new Date().toLocaleString();

        if (lastVisit) {
            document.getElementById("last-login").innerText = 
                `Ваш останній вхід був: ${lastVisit}`;
        } else {
            document.getElementById("last-login").innerText = 
                "Це ваш перший вхід.";
        }

        localStorage.setItem(lastVisitKey, currentVisit);

        // -------------------
        // 4. To-Do List
        // -------------------
        const todoKey = "todoList";

        // Отримання списку завдань з localStorage
        function getTasks() {
            return JSON.parse(localStorage.getItem(todoKey)) || [];
        }

        // Збереження списку завдань у localStorage
        function saveTasks(tasks) {
            localStorage.setItem(todoKey, JSON.stringify(tasks));
        }

        // Додавання нового завдання
        function addTask() {
            const title = document.getElementById("todo-title").value;
            const date = document.getElementById("todo-date").value;
            const description = document.getElementById("todo-description").value;

            if (!title || !date || !description) {
                alert("Заповніть усі поля!");
                return;
            }

            const tasks = getTasks();
            tasks.push({ title, date, description, isDone: false });
            saveTasks(tasks);
            renderTasks();
        }

        // Видалення завдання
        function deleteTask(index) {
            const tasks = getTasks();
            tasks.splice(index, 1);
            saveTasks(tasks);
            renderTasks();
        }

        // Позначення завдання як виконане
        function toggleTask(index) {
            const tasks = getTasks();
            tasks[index].isDone = !tasks[index].isDone;
            saveTasks(tasks);
            renderTasks();
        }

        // Рендеринг списку завдань
        function renderTasks() {
            const tasks = getTasks();
            const list = document.getElementById("todo-list");
            list.innerHTML = "";

            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <strong>${task.title}</strong> (${task.date})<br>
                    <span>${task.description}</span><br>
                    <button onclick="toggleTask(${index})">
                        ${task.isDone ? "Скасувати виконання" : "Відмітити як виконане"}
                    </button>
                    <button onclick="deleteTask(${index})">Видалити</button>
                `;
                li.style.textDecoration = task.isDone ? "line-through" : "none";
                list.appendChild(li);
            });
        }

        // Ініціалізація списку завдань
        renderTasks();

        // -------------------
        // 5. Таймер сесії
        // -------------------
        const sessionKey = "sessionStart";

        let sessionStart = sessionStorage.getItem(sessionKey);
        if (!sessionStart) {
            sessionStart = Date.now();
            sessionStorage.setItem(sessionKey, sessionStart);
        }

        function updateTimer() {
            const now = Date.now();
            const elapsedSeconds = Math.floor((now - sessionStart) / 1000);
            document.getElementById("timer").innerText = 
                `Ви перебуваєте на сторінці ${elapsedSeconds} секунд.`;
        }

        setInterval(updateTimer, 1000);