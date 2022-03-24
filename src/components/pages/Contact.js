import React from "react";
import GoToTop from "../gototop/GoToTop";
import Form from "../layout/Form";
import styles from "./Contact.module.css";
import emailjs, { init } from "@emailjs/browser";
init("Q8esOQNBeIjtRDAeB");

function Contact() {
  function sendEmail(e) {
    emailjs.sendForm("service_lvi7f1d", "template_tqdb2hq", e.target);
    console.log(e);
    e.target.reset();
  }
  return (
    <div className={styles.contact}>
      <Form handleSubmit={sendEmail} />
      <GoToTop />
    </div>
  );
}

export default Contact;
