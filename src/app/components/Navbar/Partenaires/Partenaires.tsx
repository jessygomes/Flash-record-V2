import Image from "next/image";
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
            <div className={styles.partenairesList}>
              <div className={styles.partenaires}>
                <Image
                  alt="LEONE"
                  src="/assets/Partenaires/CRIJ.png"
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.partenaires}>
                <Image
                  alt="LEONE"
                  src="/assets/Partenaires/FLEX_REA.png"
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.partenaires}>
                <Image
                  alt="LEONE"
                  src="/assets/Partenaires/LE_108.png"
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.partenaires}>
                <Image
                  alt="LEONE"
                  src="/assets/Partenaires/ORL_MAIRIE.png"
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.partenaires}>
                <Image
                  alt="LEONE"
                  src="/assets/Partenaires/POLYSONIC.png"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <p className={styles.textPropos}>
              Orlinside est une boite de production spécialisée dans la création
              audiovisuelle et l&apos;organisation d&apos;événement culturelle.
              Fondé en 2019, cette structure composée de 12 membres. Le projet
              d&apos;action est de mettre en lumière les artistes, les idées
              nouvelles, les marques, les concepts innovants ainsi promouvoir
              leur potentiel à une plus grande échelle que les limites
              géographiques.
            </p>
            <div className={styles.partenairesOrlinside}>
              <Image
                alt="LEONE"
                src="/assets/Partenaires/LOGO_ORLINSIDE_VECTO_BLANC.png"
                width={400}
                height={400}
              />
            </div>
          </article>
        </div>
      </section>
      <div className={styles.separatorNeon}></div>
    </div>
  );
}
