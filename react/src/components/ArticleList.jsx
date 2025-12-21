import React from 'react';
import ArticleCard from './ArticleCard';

export default function ArticleList({ articles, query, onToggleRead }){
  const q = query.trim().toLowerCase();
  const filtered = articles.filter(a => {
    if(!q) return true;
    return (a.title || '').toLowerCase().includes(q) || (a.summary || '').toLowerCase().includes(q);
  });

  return (
    <ul id="articles" className="cards">
      {filtered.map(a => (
        <li className={`article card ${a.read ? 'read' : ''}`} key={a.id}>
          <ArticleCard article={a} onToggle={() => onToggleRead(a.id)} />
        </li>
      ))}
    </ul>
  );
}
