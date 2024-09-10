'use client'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original';

const React95Wrapper = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div>
        <ThemeProvider theme={original}>
            {children}
        </ThemeProvider>
    </div>
  )
}

export default React95Wrapper