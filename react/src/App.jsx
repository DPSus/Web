import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import AddArticleForm from './components/AddArticleForm';
import Footer from './components/Footer';
import './style.css';

const initialArticles = [
  { id: 1, title: 'JavaScript: основы и примеры', summary: 'Краткий обзор базовых концепций языка и примеры кода для начинающих.', read: false },
  { id: 2, title: 'CSS: современные приёмы', summary: 'Советы по вёрстке: Flexbox, Grid и адаптивность.', read: false }
];

export default function App(){
  const [articles, setArticles] = useState(initialArticles);
  const [query, setQuery] = useState('');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  const addArticle = (title, summary) => {
    const next = { id: Date.now(), title, summary, read: false };
    setArticles(prev => [...prev, next]);
  };

  const toggleRead = (id) => {
    setArticles(prev => prev.map(a => a.id === id ? { ...a, read: !a.read } : a));
  };

  return (
    <div className="container">
      <Header dark={dark} onToggle={() => setDark(d => !d)} query={query} setQuery={setQuery} />

      <main>
        <section id="featured" className="featured">
          <article className="article featured-article">
            <h2 className="title">Главная новость: Мини-новостник для лабораторной</h2>
            <p className="meta">Автор: Преподаватель · 21 дек. 2025</p>
            <p className="summary">Небольшой учебный проект, демонстрирующий семантическую разметку, CSS и JavaScript-интерактивность.</p>
          </article>
        </section>

        <section id="news" className="news-list">
          <h3>Последние статьи</h3>
          <ArticleList articles={articles} query={query} onToggleRead={toggleRead} />
          <AddArticleForm onAdd={addArticle} />
        </section>

        <section id="about" className="about">
          <h3>О проекте</h3>
          <p>Учебный мини-проект, переделанный под новостной сайт. Продемонстрированы: семантика HTML, стилизация и простая интерактивность на JS.</p>
          <p style={{marginTop:'.5rem',color:'var(--muted)'}}><strong>Интеграция React:</strong> интерфейс переписан на React, сборка — через Webpack и Babel, стили подключаются через Webpack (css-loader, style-loader).</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
