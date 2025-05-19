
// Завдання 1: Ввід URL у prompt
document.getElementById('goToSiteBtn').addEventListener('click', () => {
  const site = prompt("Введіть URL сайту (наприклад, https://google.com):");
  if (site && site.startsWith("http")) {
    window.location.href = site;
  } else {
    alert("Некоректна адреса!");
  }
});

// ===========================================================
//Завдання 2: Показати координати та URL поточної сторінки
// ===========================================================
document.getElementById('getInfoBtn').addEventListener('click', () => {
  const infoDiv = document.getElementById('infoBlock');
  const url = window.location.href;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        infoDiv.innerHTML = `
          <p><strong>Поточна URL-адреса:</strong> ${url}</p>
          <p><strong>Широта:</strong> ${latitude}</p>
          <p><strong>Довгота:</strong> ${longitude}</p>
        `;
      },
      () => {
        infoDiv.innerHTML = `<p>Неможливо отримати геолокацію.</p><p><strong>URL:</strong> ${url}</p>`;
      }
    );
  } else {
    infoDiv.innerHTML = `<p>Геолокація не підтримується.</p><p><strong>URL:</strong> ${url}</p>`;
  }
});

// ===============================================
// Завдання 3: Стрім з мікрофону та веб-камери
// ===============================================
const video = document.getElementById('videoStream');

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error("Помилка доступу до медіа:", err);
    video.insertAdjacentHTML("beforebegin", `<p>⚠️ Не вдалося отримати доступ до камери/мікрофона.</p>`);
  });
