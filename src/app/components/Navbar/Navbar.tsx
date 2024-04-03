"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { useState } from "react";

const itemNavbar = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Actualités",
    link: "#actualites",
  },
  {
    text: "A Propos",
    link: "#apropos",
  },
  {
    text: "Nos Partenaires",
    link: "#nospartenaires",
  },
  {
    text: "Contact",
    link: "#contact",
  },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const pathname = usePathname();

  //! BURGER TO CROSS
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setNavActive(!navActive);
  };

  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div
            className={`${styles.nav__menuBar} ${
              isActive ? styles.active : ""
            }`}
            onClick={handleClick}
          >
            <div className={`${styles.line} ${styles.l1}`}></div>
            <div className={`${styles.line} ${styles.l2}`}></div>
            <div className={`${styles.line} ${styles.l3}`}></div>
          </div>

          <div
            className={`${navActive ? styles.active : ""} ${
              styles.nav__menuList
            }`}
          >
            {itemNavbar.map((item, index) => {
              const active =
                item.link === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.link);
              return (
                <div
                  className={styles.nav__itemContainer}
                  key={index}
                  onClick={() => {
                    setActiveLink(item.link), setNavActive(false);
                  }}
                >
                  <Link
                    href={item.link}
                    className={`${styles.nav__item} ${
                      active ? styles.activeLink : ""
                    }`}
                  >
                    {item.text}
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>
      </header>
    </div>
  );
}
