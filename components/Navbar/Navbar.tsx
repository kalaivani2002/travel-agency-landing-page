'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src="/images/Logo.svg" alt="Jadoo Logo" className={styles.logoImg} />
        </Link>

        {/* Hamburger - mobile only */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li><Link href="#destinations">Destinations</Link></li>
          <li><Link href="#hotels">Hotels</Link></li>
          <li><Link href="#flights">Flights</Link></li>
          <li><Link href="#bookings">Bookings</Link></li>
        </ul>

        {/* Right Side */}
        <div className={`${styles.navActions} ${menuOpen ? styles.open : ''}`}>
          <Link href="#" className={styles.loginBtn}>Login</Link>
          <Link href="#" className={styles.signupBtn}>Sign up</Link>
          <button className={styles.langBtn}>
            EN <span className={styles.chevron}></span>
          </button>
        </div>

      </div>
    </nav>
  );
}