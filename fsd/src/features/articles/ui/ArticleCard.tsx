import React from 'react'
import { Article } from '../model/types'

interface Props { article: Article; onToggle?: (id: string) => void }

export const ArticleCard: React.FC<Props> = ({ article, onToggle }) => {
  return (
    <article className="bg-white p-4 rounded shadow-sm mb-3">
      <h4 className="font-semibold text-lg">{article.title}</h4>
      <p className="text-slate-600">{article.summary}</p>
      <div className="flex justify-end mt-3">
        <button className="px-3 py-1 rounded bg-teal-500 text-white text-sm" onClick={() => onToggle?.(article.id)}>
          {article.read ? 'Не прочитано' : 'Прочитано'}
        </button>
      </div>
    </article>
  )
}
