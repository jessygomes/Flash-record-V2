import Image from "next/image";
import styles from "./HomePage.module.css";
import Link from "next/link";
import Video from "next-video";
import News from "../News/News";
import Propos from "@/app/Propos/Propos";
import Partenaires from "../Partenaires/Partenaires";
import Contact from "../Contact/Contact";

export default function HomePage() {
  return (
    <div>
      <section className={styles.homepageContainer}>
        <div className={styles.videoContainer}>
          <Video
            className={styles.bg__video}
            src="/videos/vidpres4mo.mp4"
            controls={false}
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
      </section>
      <div className={styles.logoDesktop}>
        <Image
          className={styles.logoD}
          src="/Flash_Orange.png"
          alt="Logo"
          width="300"
          height="300"
        />
        <div className={styles.separator}></div>
        <div className={styles.containerButtons}>
          <Link
            href="https://www.youtube.com/@flashrecordsofficiel"
            target="blank"
            className={styles.button}
          >
            YouTube
          </Link>
          <Link
            href="https://linktr.ee/flash.0ff"
            target="blank"
            className={styles.button}
          >
            Streaming
          </Link>
        </div>
        <Link
          target="_blank"
          href="https://www.helloasso.com/associations/orlinside/evenements/flash-x-astrolabe-ii"
          className={styles.astrolab}
        >
          ASTROLABE - 18 MAI 2024
        </Link>
        <div className={styles.logoMobile}></div>
      </div>
      <div className={styles.contenuContainer}>
        {/* <div className={styles.separatorNeon}></div> */}
        <News />
        <Propos />
        <Partenaires />
        <Contact />
      </div>
    </div>
  );
}
