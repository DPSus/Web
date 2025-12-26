import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold">WebLab Новости <span className="text-sm font-normal text-slate-500">(React + TS)</span></div>
        <nav>
          <ul className="flex gap-4 text-slate-600">
            <li><a href="#home" className="hover:text-slate-900">Главная</a></li>
            <li><a href="#about" className="hover:text-slate-900">О проекте</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
