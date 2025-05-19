const table = document.getElementById('myTable');
  const rows = 5;
  const cols = 5;

  // 🛠️ Створюємо таблицю 5x5
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const td = document.createElement('td');
      td.dataset.row = i;
      td.dataset.col = j;
      td.textContent = `${i},${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  let firstCell = null;

  // 👆 Обробка кліків
  table.addEventListener('click', (e) => {
    if (e.target.tagName !== 'TD') return;

    const cell = e.target;

    // Якщо вже вибрані обидві — скидаємо
    if (firstCell && firstCell.classList.contains('selected') && document.querySelectorAll('.selected').length > 1) {
      document.querySelectorAll('.selected').forEach(td => td.classList.remove('selected'));
      firstCell = null;
    }

    // Якщо це перший клік
    if (!firstCell) {
      firstCell = cell;
      cell.classList.add('selected');
    } else {
      // Це другий клік — виділяємо все між ними
      const row1 = parseInt(firstCell.dataset.row);
      const col1 = parseInt(firstCell.dataset.col);
      const row2 = parseInt(cell.dataset.row);
      const col2 = parseInt(cell.dataset.col);

      const rowStart = Math.min(row1, row2);
      const rowEnd = Math.max(row1, row2);
      const colStart = Math.min(col1, col2);
      const colEnd = Math.max(col1, col2);

      for (let i = rowStart; i <= rowEnd; i++) {
        for (let j = colStart; j <= colEnd; j++) {
          const td = table.rows[i].cells[j];
          td.classList.add('selected');
        }
      }

      firstCell = null; // Готові до наступного виділення
    }
  });