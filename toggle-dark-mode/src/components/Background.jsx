import React from 'react'

const Background = ({children}) => {
  return (
    <body className='bg-slate-50 dark:bg-slate-900 transition-all'>{children}</body>
  )
}

export default Background;