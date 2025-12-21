import React, { useState } from 'react';

export default function AddArticleForm({ onAdd }){
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if(!title.trim() || !summary.trim()) return;
    onAdd(title.trim(), summary.trim());
    setTitle(''); setSummary('');
  };

  return (
    <form id="addArticleForm" className="form-inline" onSubmit={submit}>
      <input id="articleTitle" className="input" placeholder="Заголовок статьи" value={title} onChange={e => setTitle(e.target.value)} required />
      <input id="articleSummary" className="input" placeholder="Короткое описание" value={summary} onChange={e => setSummary(e.target.value)} required />
      <button className="btn" type="submit">Добавить статью</button>
    </form>
  );
}
