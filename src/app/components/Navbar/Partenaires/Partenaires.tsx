import styles from "./Partenaires.module.css";

export default function Partenaires() {
  return (
    <div>
      <div className={styles.newsTitleContainer}>
        <h1 className={styles.title}>Nos Partenaires</h1>
      </div>
      <section className={styles.newsContainer}>
        <div className={styles.sortieContainer}>
          <article className={styles.articleNews}>
            <div className={styles.logoPartenaire}></div>
            <p className={styles.textPropos}>
              Flash s&apos;appuie sur ces précieux partenaires pour proposer le
              meilleur contenu et les meilleures conditions de production. Cette
              collaboration permet à notre collectif et aux artistes
              collaborateurs de travailler dans des conditions professionnels
              (studio photoshooting professionnel, studio d&apos;enregistrement,
              plateau de tournage…). Ces partenaires apportent un soutien
              nécessaire au bon développement du projet Flash et permettent
              d&apos;agrandir la visibilité lors des processus de diffusion.
            </p>
          </article>
        </div>
      </section>
      <div className={styles.separatorNeon}></div>
    </div>
  );
}
