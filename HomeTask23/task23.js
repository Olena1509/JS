/*1. Зміна стилю елементу: Створіть HTML-сторінку з декількома елементами, такими як кнопки або тексти.
   Використовуючи JavaScript, змініть стиль одного або декількох елементів 
   (наприклад, колір фону або розмір шрифту).

2. Зміна текстового вмісту: Створіть елементи, які містять текст. 
   За допомогою JavaScript, змініть текстовий вміст одного або декількох елементів.

3. Додавання нового елементу: За допомогою JavaScript,
   додайте 3 нові елемент до DOM-структури.

4. Видалення елементу: За допомогою JavaScript, видаліть декілька елементів з DOM.

5. Зміна атрибутів: Створіть елементи, які мають атрибути 
   (наприклад, "src" для зображення або "href" для посилання).
   За допомогою JavaScript, змініть атрибути цих елементів.

6. Сортування списку: Створіть список (наприклад, список <ul>) з декількома пунктами. 
   Використовуючи JavaScript, відсортуйте цей список в алфавітному порядку.

7. Зміна порядку елементів: Створіть декілька елементів. За допомогою JavaScript,
   змініть порядок цих елементів в DOM.

8. Видалення дочірніх елементів: Створіть батьківський елемент, який містить декілька дочірніх елементів.
   Використовуючи JavaScript, видаліть всі дочірні елементи цього батьківського елемента.

9. Зміна класів: Створіть сторінку з елементами, які мають CSS-класи. За допомогою JavaScript, змініть класи цих елементів без використання подій.

10. Зміна HTML-структури: Створіть сторінку з деревом DOM-структури. 
    Використовуючи JavaScript, змініть HTML-структуру шляхом додавання нових елементів,
    переміщення або видалення існуючих елементів.*/

// 1. Зміна стилю елемента
document.getElementById("change-style").style.backgroundColor = "lightblue";
document.getElementById("change-style").style.fontSize = "18px";
// 2. Зміна текстового вмісту
document.getElementById("text").innerText = "Текст змінено за допомогою JavaScript!";

// 3. Додавання нового елемента
const list = document.getElementById("list");
for (let i = 1; i <= 3; i++) {
    const newItem = document.createElement("li");
    newItem.textContent = `Новий елемент ${i}`;
    list.appendChild(newItem);
}

// 4. Видалення елемента
list.removeChild(list.children[0]); // Видалення першого елемента
list.removeChild(list.children[0]); // Видалення другого елемента

// 5. Зміна атрибутів
const img = document.getElementById("image");
img.src = "new-image.jpg"; // Зміна src
img.alt = "Нове зображення";

const link = document.getElementById("link");
link.href = "https://new-link.com"; // Зміна href
link.innerText = "Нове посилання";
// 6. Сортування списку
const items = Array.from(list.children); // Перетворюємо HTMLCollection у масив
items.sort((a, b) => a.textContent.localeCompare(b.textContent)); // Сортування
list.innerHTML = ""; // Очищення списку
items.forEach(item => list.appendChild(item)); // Додавання елементів у відсортованому порядку

// 7. Зміна порядку елементів
const parent = document.getElementById("parent");
const children = Array.from(parent.children);
children.reverse(); // Зміна порядку
parent.innerHTML = ""; // Очищення контейнера
children.forEach(child => parent.appendChild(child)); // Додавання в новому порядку
// 8. Видалення всіх дочірніх елементів
while (parent.firstChild) {
    parent.removeChild(parent.firstChild); // Видаляємо дочірні елементи
}

 // 9. Зміна класів
 const textElement = document.getElementById("text");
 textElement.classList.remove("red-text"); // Видалення класу
 textElement.classList.add("highlight");  // Додавання класу
// 10. Зміна HTML-структури
const container = document.createElement("div");
container.innerHTML = `
    <h2>Новий блок</h2>
    <p>Це новий параграф всередині блоку.</p>
`;
document.body.appendChild(container); // Додавання нового блоку в кінець сторінки
