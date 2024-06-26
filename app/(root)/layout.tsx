import React, { Children, ReactNode } from 'react'

const RootLayout = ({Children}: {Children: ReactNode}) => {
  return (
    <main>
        nav
        {Children}
        footer
    </main>
  )
}
export default RootLayout