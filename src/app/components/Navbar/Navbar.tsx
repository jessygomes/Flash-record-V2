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

  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div
            className={styles.nav__menuBar}
            onClick={() => setNavActive(!navActive)}
          >
            <div></div>
            <div></div>
            <div></div>
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
