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
        <body>
            <Header />
            {children}
            <Footer />
            </body>
      </html>
    )
  }