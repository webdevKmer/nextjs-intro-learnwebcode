import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <ul className='flex gap-2 font-medium'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </header>
  )
}

export default Header