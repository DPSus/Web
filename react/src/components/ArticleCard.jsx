import React from 'react';

export default function ArticleCard({ article, onToggle }){
  return (
    <div>
      <h4 className="title">{article.title}</h4>
      <p className="summary">{article.summary}</p>
      <div className="controls"><button className="btn read-btn" onClick={onToggle}>{article.read ? 'Не прочитано' : 'Прочитано'}</button></div>
    </div>
  );
}
