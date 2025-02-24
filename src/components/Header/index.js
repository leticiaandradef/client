"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const alternarMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <Image className={styles.logo} src='/image/logo.png' alt="logo" width={100} height={90} />

            <button 
                onClick={alternarMenu}
                className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
            >
                ☰
            </button>

            <nav className={`${styles.navMenu} ${isMenuOpen ? styles.showMenu : ''}`}>
                <ul className={styles.lista}>
                    <li className={styles.li}><Link href="/">Home</Link></li>
                    <li 
                        className={styles.li} 
                        onMouseEnter={() => setHoveredItem("Medico")}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <Link href="/medicos">Medico</Link>
                        {hoveredItem === "Medico" && (
                            <ul className={styles.submenu}>
                                <li><Link href="./medicos">Listar</Link></li>
                                <li><Link href="/medicos/adicionar">Adicionar</Link></li>
                                <li><Link href="/medicos/editar">Editar</Link></li>
                                <li><Link href="/medicos/excluir">Excluir</Link></li>
                            </ul>
                        )}
                    </li>
                    <li 
                        className={styles.li} 
                        onMouseEnter={() => setHoveredItem("Paciente")}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <Link href="/pacientes">Paciente</Link>
                        {hoveredItem === "Paciente" && (
                            <ul className={styles.submenu}>
                                <li><Link href="./pacientes">Listar</Link></li>
                                <li><Link href="/pacientes/adicionar">Adicionar</Link></li>
                                <li><Link href="/pacientes/editar">Editar</Link></li>
                                <li><Link href="/pacientes/excluir">Excluir</Link></li>
                            </ul>
                        )}
                    </li>
                    <li 
                        className={styles.li} 
                        onMouseEnter={() => setHoveredItem("Consulta")}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <Link href="/consulta">Consulta</Link>
                        {hoveredItem === "Consulta" && (
                            <ul className={styles.submenu}>
                                <li><Link href="./consulta">Listar</Link></li>
                                <li><Link href="/consulta/adicionar">Adicionar</Link></li>
                                <li><Link href="/consulta/editar">Editar</Link></li>
                                <li><Link href="/consulta/excluir">Excluir</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
