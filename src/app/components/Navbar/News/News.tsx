import Video from "next-video";
import Image from "next/image";
import Link from "next/link";
import styles from "./News.module.css";

export default function News() {
  return (
    <div>
      <div className={styles.newsTitleContainer}>
        <h1 className={styles.title}>Actualités</h1>
      </div>
      <section className={styles.newsContainer}>
        <div className={styles.sortieContainer}>
          <article className={styles.articleNews}>
            <h2 className={styles.title2}>Dernière Sortie</h2>
            <div className={styles.containerTiktok}>
              <Video
                className={styles.tiktok__video}
                src="/videos/yendtrailermp4.mp4"
                controls={false}
                muted
                autoPlay
                playsInline
                loop
              />
            </div>
            <div className={styles.containerButtons}>
              <p className={styles.tiktokText}>YEND - VALHALLAH</p>
              <Link
                href="https://www.youtube.com/@flashrecordsofficiel"
                target="blank"
                className={styles.button}
              >
                YouTube
              </Link>
              <Link
                href="https://www.youtube.com/@flashrecordsofficiel"
                target="blank"
                className={styles.button}
              >
                Streaming
              </Link>
            </div>
          </article>
          {/* <h2 className={styles.title2}>Events</h2> */}
          <article className={styles.articleNews}>
            <div className={styles.containerTiktok}>
              <Image
                className={styles.tiktok__video}
                src="/assets/Affiche_digitale.jpg"
                alt="Affiche digitale"
                width="300"
                height="300"
              />
            </div>
            <div className={styles.containerButtons}>
              <Link
                href="https://www.youtube.com/@flashrecordsofficiel"
                target="blank"
                className={styles.button}
              >
                Billeterie
              </Link>
            </div>
          </article>
        </div>
      </section>
      <div className={styles.separatorNeon}></div>
    </div>
  );
}
