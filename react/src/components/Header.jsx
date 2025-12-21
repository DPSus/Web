import React from 'react';

export default function Header({ dark, onToggle, query, setQuery }){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="logo">WebLab Новости <small style={{fontWeight:600,fontSize:'0.8rem',opacity:0.85}}>(React)</small></h1>
        <nav>
          <ul className="nav">
            <li><a href="#home">Главная</a></li>
            <li><a href="#categories">Рубрики</a></li>
            <li><a href="#about">О проекте</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <input id="searchInput" className="input search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Поиск статей..." />
          <button id="themeToggle" className="btn" onClick={onToggle}>{dark ? 'Светлая тема' : 'Тёмная тема'}</button>
        </div>
      </div>
    </header>
  );
}
