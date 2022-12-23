import Link from 'next/link';
import * as React from 'react';
import styles from './Header.module.css';
export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.nav_item}>Home</Link>
      <Link href="/" className={styles.nav_item}>Questions</Link>
      <Link href="/pets" className={styles.nav_item}>Pets</Link>
    </nav>
  );
}
