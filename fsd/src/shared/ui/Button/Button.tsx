import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ children, ...rest }) => (
  <button className="px-3 py-1 rounded bg-indigo-600 text-white" {...rest}>{children}</button>
)
