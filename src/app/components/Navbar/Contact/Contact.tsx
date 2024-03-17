import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div>
      <div className={styles.newsTitleContainer}>
        <h1 className={styles.title}>Contactez-nous</h1>
      </div>
      <section className={styles.newsContainer}>
        <div className={styles.sortieContainer}>
          <article className={styles.articleNews}></article>
        </div>
      </section>
      <div className={styles.separatorNeon}></div>
    </div>
  );
}
