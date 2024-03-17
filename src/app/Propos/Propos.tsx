import styles from "./Propos.module.css";

export default function Propos() {
  return (
    <div>
      <div className={styles.newsTitleContainer}>
        <h1 className={styles.title}>à Propos</h1>
      </div>
      <section className={styles.newsContainer}>
        <div className={styles.sortieContainer}>
          <article className={styles.articleNews}>
            <p className={styles.textPropos}>
              FLASH est une émission musicale mettant en avant des artistes
              émergents à travers des épisodes diffusés sur les réseaux sociaux
              et sur les plateformes de streaming. Chaque épisode est composé
              d&apos;un photoshooting, de la réalisation d&apos;un son exclusif
              et du tournage d&apos;un clip. Chacun de ces contenus respecte une
              direction artistique similaire propre à l&apos;univers de FLASH.
              Ce concept implique la collaboration entre le collectif artistique
              de l&apos;équipe FLASH et l&apos;artiste en question.
            </p>
            <p className={styles.textPropos}>
              Ce concept est structuré en tant que label sous le nom de Flash
              Records. L&apos;émission musicale est produite par la boite de
              production ORLINSIDE. La volonté du groupe souhaite marquer
              l&apos;univers FLASH par l&apos;esthétique de son décor, qui
              illustre clairement son identité. La dynamique du projet implique
              un aspect événementiel à travers l&apos;organisation de concert
              afin de donner un maximum de visibilité aux acteurs avec lesquels
              nous collaborons.
            </p>
          </article>
        </div>
      </section>
      <div className={styles.separatorNeon}></div>
    </div>
  );
}
