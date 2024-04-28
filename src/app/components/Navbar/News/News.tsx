import Video from "next-video";
import Image from "next/image";
import Link from "next/link";
import styles from "./News.module.css";

export default function News() {
  return (
    <div>
      <div className={styles.newsTitleContainer}>
        <h1 id="actualites" className={styles.title}>
          Actualités
        </h1>
      </div>
      <div className={styles.separatorNeon}></div>
      <section className={styles.newsContainer}>
        <div className={styles.sortieContainer}>
          <article className={styles.articleNews}>
            <h2 className={styles.title2}>Dernière Sortie</h2>
            <div className={styles.containerTiktok}>
              <Video
                className={styles.tiktok__video}
                src="/videos/leoneteaser.mp4"
                controls={false}
                muted
                autoPlay
                playsInline
                loop
              />
              <p className={styles.tiktokText}>
                LEONE{" "}
                <Link
                  className={styles.instagram}
                  href="https://www.instagram.com/leone_shwarks?igsh=MTFscmFtNmpvMDQwMw=="
                >
                  @LEONE_SHWARKS
                </Link>{" "}
                - LOUBARD
              </p>
            </div>
            <div className={styles.containerButtons}>
              <Link
                href="https://www.youtube.com/watch?v=sxtqwDAkciU"
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
          </article>

          <article className={styles.articleNews}>
            <h2 className={styles.title2}>Events</h2>
            <div className={styles.containerTiktok}>
              <Image
                className={styles.tiktok__video}
                src="/assets/astro1.jpg"
                alt="Affiche digitale"
                width="300"
                height="300"
              />
            </div>
            <div className={styles.containerButtons}>
              <Link
                href="https://www.helloasso.com/associations/orlinside/evenements/flash-x-astrolabe-ii"
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
