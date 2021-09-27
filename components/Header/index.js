import React from 'react'
import _ from './style.module.css'
import Link from 'next/link'

const Header = () => (
  <header className={_.header}>
    <Link href="/">
      <a><img src="../logo.svg" alt="logo" /></a>
    </Link>

  </header>
)
export default Header