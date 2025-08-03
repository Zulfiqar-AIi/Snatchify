import React from 'react'
interface Props{
    children: React.ReactNode;
    className?: string;
}

const Container = ({children, className}: Props) => {
  return (
    <div>{children}</div>
  )
}

export default Container