import React from 'react';

export default function Article({ title, summary }){
  return (
    <article className="article">
      <h2>{title}</h2>
      <p>{summary}</p>
    </article>
  );
}
