// Завдання 1: Зміна кольору другого кубика при кліку на перший
document.getElementById('box1').addEventListener('click', () => {
  const randomColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
  document.getElementById('box2').style.backgroundColor = randomColor;
});
function rand() {
  return Math.floor(Math.random() * 256);
}

// Завдання 2: Заборонити копіювання тексту
document.getElementById('copyBlock').addEventListener('copy', (e) => {
  e.preventDefault();
  alert("Текст неможливо скопіювати!!");
});

// Завдання 3: Зміна кольору кубика залежно від координат миші
const colorBox = document.getElementById('colorBox');
document.addEventListener('mousemove', (e) => {
  const r = e.clientX % 256;
  const g = e.clientY % 256;
  const b = Math.floor((r + g) / 2);
  colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Завдання 4: Вкладені кубики з console.log
document.getElementById('outer').addEventListener('click', () => {
  console.log('Клік по Зовнішньому');
});
document.getElementById('middle').addEventListener('click', () => {
  console.log('Клік по Середньому');
});
document.getElementById('inner').addEventListener('click', () => {
  console.log('Клік по Внутрішньому');
});

// Завдання 5: Зупинка поширення івентів
document.getElementById('boxA').addEventListener('click', () => {
  console.log('Клік на A');
}, true); // Використання capture фази

document.getElementById('boxB').addEventListener('click', (e) => {
  console.log('Клік на B (зупиняю подію)');
  e.stopPropagation(); // Зупиняємо подальше розповсюдження
}, true);

document.getElementById('boxC').addEventListener('click', () => {
  console.log('Клік на C');
}, true);

// Завдання 6: Форма та отримання даних як об’єкт
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Відміна стандартної поведінки
  const formData = new FormData(this);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  console.log("Дані форми:", formObject);
});
