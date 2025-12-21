// Элементы страницы
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const addArticleForm = document.getElementById('addArticleForm');
const articleTitle = document.getElementById('articleTitle');
const articleSummary = document.getElementById('articleSummary');
const articlesList = document.getElementById('articles');

// Переключение темы
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? 'Светлая тема' : 'Тёмная тема';
});

// Фильтрация статей по вводу (событие input)
searchInput.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  const items = articlesList.querySelectorAll('.article');
  items.forEach(item => {
    const title = item.querySelector('.title')?.textContent.toLowerCase() || '';
    const summary = item.querySelector('.summary')?.textContent.toLowerCase() || '';
    const match = !q || title.includes(q) || summary.includes(q);
    item.style.display = match ? '' : 'none';
  });
});

// Добавление новой статьи (submit)
addArticleForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = articleTitle.value.trim();
  const summary = articleSummary.value.trim();
  if(!title || !summary) return;

  const li = document.createElement('li');
  li.className = 'article card';
  li.innerHTML = `
    <h4 class="title"></h4>
    <p class="summary"></p>
    <div class="controls"><button class="btn read-btn">Прочитано</button></div>
  `;
  li.querySelector('.title').textContent = title;
  li.querySelector('.summary').textContent = summary;

  articlesList.appendChild(li);
  articleTitle.value = '';
  articleSummary.value = '';
});

// Делегирование кликов на кнопки "Прочитано"
articlesList.addEventListener('click', (e) => {
  if(e.target && e.target.matches('.read-btn')){
    const li = e.target.closest('.article');
    if(!li) return;
    li.classList.toggle('read');
    e.target.textContent = li.classList.contains('read') ? 'Не прочитано' : 'Прочитано';
  }
});
