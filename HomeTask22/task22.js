//*Має бути 2 html сторіки та 2 js файлика

//1. Створіть HTML сторінку, яка відображає, скільки разів користувач її відвідував.
 //  Використовуйте localStorage для збереження кількості відвідувань.

 //  Результат:
  //  На сторінці повинно з’являтися щось на кшталт: "Ви відвідали цю сторінку 5 разів."


//2. Реалізуйте просту форму входу (2 prompt), де користувач вводить ім'я та пароль.
//   Після входу ім'я користувача зберігається у sessionStorage.
  // На іншій вкладці перевіряйте, чи користувач увійшов (при завантаженні сторінки),
 //  і виводьте повідомлення: "Привіт, [Ім'я користувача]".


//3. Реалізуйте таймер сесії, який показує, скільки часу користувач провів на сторінці.
 //  Час початку сесії зберігайте у cookie при оновленні сторінки він має продовжувати відлік.

 // -------------------
        // 1. Кількість відвідувань сторінки
        // -------------------
        const visitKey = "visitCount";
        const visitCount = localStorage.getItem(visitKey) || 0;
        localStorage.setItem(visitKey, +visitCount + 1);
        document.getElementById("visit-count").innerText = 
            `Ви відвідали цю сторінку ${+visitCount + 1} разів.`;

        // -------------------
        // 2. Форма входу
        // -------------------
        const userKey = "loggedInUser";
        const userName = sessionStorage.getItem(userKey);

        if (userName) {
            // Якщо користувач вже ввійшов
            document.getElementById("greeting").innerText = `Привіт, ${userName}`;
        } else {
            // Логін через prompt
            const name = prompt("Введіть ваше ім'я:");
            const password = prompt("Введіть ваш пароль:");
            if (name && password) {
                sessionStorage.setItem(userKey, name);
                document.getElementById("greeting").innerText = `Привіт, ${name}`;
            } else {
                document.getElementById("greeting").innerText = "Вхід не виконано.";
            }
        }

        // -------------------
        // 3. Таймер сесії
        // -------------------
        function getCookie(name) {
            const cookies = document.cookie.split("; ");
            for (let cookie of cookies) {
                const [key, value] = cookie.split("=");
                if (key === name) return decodeURIComponent(value);
            }
            return null;
        }

        function setCookie(name, value, days = 1) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
        }

        let sessionStart = getCookie("sessionStart");
        if (!sessionStart) {
            sessionStart = Date.now();
            setCookie("sessionStart", sessionStart);
        }

        function updateTimer() {
            const now = Date.now();
            const elapsedSeconds = Math.floor((now - sessionStart) / 1000);
            document.getElementById("timer").innerText = 
                `Ви перебуваєте на сторінці ${elapsedSeconds} секунд.`;
        }

        setInterval(updateTimer, 1000);