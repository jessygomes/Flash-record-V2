import Navbar from "../app/components/Navbar/Navbar";
import HomePage from "./components/Navbar/HomePage/HomePage";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
      </main>
    </>
  );
}
