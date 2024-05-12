import React from 'react'
import Header from './Header'
import Footer from './Footer'

import './globals.css'


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" data-theme="cupcake">
        <body className='p-4'>
            <Header />
            {children}
            <Footer />
            </body>
      </html>
    )
  }