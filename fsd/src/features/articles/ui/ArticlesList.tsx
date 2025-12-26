import React from 'react'
import { ArticleCard } from './ArticleCard'
import { Article } from '../model/types'

interface Props {
  articles: Article[]
  onToggleRead?: (id: string) => void
}

export const ArticlesList: React.FC<Props> = ({ articles, onToggleRead }) => {
  return (
    <div>
      {articles.map(a => <ArticleCard key={a.id} article={a} onToggle={onToggleRead} />)}
    </div>
  )
}
