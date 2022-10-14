import { StyledContacts } from "./styles";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contacts: React.FC = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    const service_id = String(process.env.SERVICE_ID);
    const template_id = String(process.env.TEMPLATE_ID);
    const public_key = String(process.env.PUBLIC_KEY);

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <StyledContacts id="4">
      <h1 className="contacts-title">Contatos</h1>
      <section className="contacts-content">
        <form ref={form} onSubmit={sendEmail}>
          <section className="inputs-row">
            <input type="text" name="user_name" placeholder="nome" />
            <input type="email" name="user_email" placeholder="email" />
          </section>
          <section className="textarea-row">
            <textarea name="message" placeholder="Mensagem"></textarea>
          </section>
          <section className="form-btn-area">
            <input type="submit" value="Enviar" className="form-btn" />
          </section>
        </form>
      </section>
    </StyledContacts>
  );
};
