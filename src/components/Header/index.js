'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.logo}>

                {<Image className={styles.logo} src='/image/logo.png' alt="Imagem Logo sanrio" width={100} height={90}/>}
            </div>

            <div 
            className={styles.menuIcon} 
              onClick={menuOpen ? closeMenu : openMenu}>
                  {menuOpen ? '✖' : '☰'}
            </div>

            <ul className={`${styles.lista} ${menuOpen ? styles.open : ''}`}>
                <li>
                    <Link href="/">Médicos</Link>
                </li>
                <li>
                    <Link href="/sobre">Consultórios</Link>
                </li>
                <li>
                    <Link href="/personagens">Agendamentos</Link>
                </li>
            </ul>
        </header>
    );
}