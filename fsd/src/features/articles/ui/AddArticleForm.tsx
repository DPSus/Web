import React, { useState } from 'react'

interface Props { onAdd: (title: string, summary: string) => void }

export const AddArticleForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!title.trim() || !summary.trim()) return
    onAdd(title.trim(), summary.trim())
    setTitle('')
    setSummary('')
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 items-stretch">
      <input className="flex-1 px-3 py-2 border rounded" placeholder="Заголовок статьи" value={title} onChange={e => setTitle(e.target.value)} />
      <input className="flex-1 px-3 py-2 border rounded" placeholder="Короткое описание" value={summary} onChange={e => setSummary(e.target.value)} />
      <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded">Добавить статью</button>
    </form>
  )
}
