import React from 'react'
import { Header } from '../widgets/header/Header'
import { HomePage } from '../pages/HomePage/HomePage'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <HomePage />
      </main>
      <footer className="text-center py-6 text-sm text-slate-500">© 2025 Lab3 — FSD + TypeScript + Tailwind</footer>
    </div>
  )
}
