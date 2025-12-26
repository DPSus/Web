import React, { useMemo, useState } from 'react'
import { ArticlesList } from '../../features/articles/ui/ArticlesList'
import { sampleArticles } from '../../features/articles/lib/sampleData'
import { AddArticleForm } from '../../features/articles/ui/AddArticleForm'

export const HomePage: React.FC = () => {
  const [articles, setArticles] = useState(sampleArticles)
  const [query, setQuery] = useState('')

  const addArticle = (title: string, summary: string) => {
    const next = { id: String(Date.now()), title, summary }
    setArticles(prev => [...prev, next])
  }

  const toggleRead = (id: string) => {
    setArticles(prev => prev.map(a => a.id === id ? { ...a, read: !a.read } : a))
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if(!q) return articles
    return articles.filter(a => (a.title || '').toLowerCase().includes(q) || (a.summary || '').toLowerCase().includes(q))
  }, [articles, query])

  return (
    <div>
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Главная новость: Мини-новостник</h2>
        <p className="text-slate-600">Учебный мини-проект, демонстрирующий FSD, TypeScript и Tailwind.</p>
      </section>

      <section>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold">Последние статьи</h3>
          <div className="flex gap-2">
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Поиск статей..." className="input px-3 py-2 border rounded" />
          </div>
        </div>

        <ArticlesList articles={filtered} onToggleRead={toggleRead} />

        <div className="mt-4">
          <AddArticleForm onAdd={addArticle} />
        </div>
      </section>

      <section id="about" className="about mt-8">
        <h3 className="text-lg font-semibold">О проекте</h3>
        <p className="text-slate-600 mt-2">Учебный мини-проект, первоначально реализованный как простая HTML/CSS/JS страница (лабораторная 1). В этой лабораторной работу сайт перенесён на React + TypeScript с архитектурой Feature-Sliced Design и стилизован при помощи Tailwind CSS. Добавлены компоненты, типизация и улучшенная структура проекта.</p>
      </section>
    </div>
  )
}
