"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    fonction: "",
    objet: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2wk87pr",
        "template_u9m00rn",
        e.currentTarget,
        "OQpdfRliSb-itPKwp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setForm({
            name: "",
            fonction: "",
            objet: "",
            email: "",
            message: "",
          });
          setConfirmationMessage("Email envoyé avec succès !");
          setTimeout(() => {
            setConfirmationMessage("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className={styles.newsTitleContainer}>
        <h1 id="contact" className={styles.title}>
          Contactez-nous
        </h1>
      </div>
      <section className={styles.newsContainer}>
        <form onSubmit={handleSubmit} className={styles.formulaire}>
          {confirmationMessage && (
            <p className="text-white font-aldrich text-center">
              {confirmationMessage}
            </p>
          )}
          <p className={styles.mail}>flash.records.off@gmail.com</p>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="NOM & PRENOM"
              className={styles.inputForm}
              onChange={handleChange}
              value={form.name}
              minLength={2}
              maxLength={30}
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="fonction"
              name="fonction"
              placeholder="STATUT : ARTISTE / PRODUCTEUR / LABEL / ..."
              className={styles.inputForm}
              onChange={handleChange}
              value={form.fonction}
              minLength={2}
              maxLength={20}
            />
          </div>
          <div>
            <input
              type="text"
              id="objet"
              name="objet"
              placeholder="OBJET"
              className={styles.inputForm}
              onChange={handleChange}
              value={form.objet}
              minLength={2}
              maxLength={20}
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="EMAIL"
              className={styles.inputForm}
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="MESSAGE"
              className={styles.inputFormArea}
              onChange={handleChange}
              value={form.message}
              required
              minLength={2}
              maxLength={350}
            />
          </div>
          <button type="submit" className={styles.inputBtn}>
            ENVOYER
          </button>
        </form>
      </section>
      <div className={styles.separatorNeon}></div>
    </div>
  );
}
