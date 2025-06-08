import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-linear-to-r/decreasing from-indigo-500 to-teal-400'>{children}</div>
  )
}

export default AuthLayout