import React from "react";
import Image from "next/image";
import { StyledAbout } from "./styles";

export const About: React.FC = () => {
  return (
    <StyledAbout id="1">
      <section className="about-photo">
        <Image
          src={"https://github.com/LucasAraujoDeSa.png"}
          alt={"foto do cara"}
          width={300}
          height={300}
          className="icon-profile"
        />
      </section>
      <section className="about">
        <h1 className="about-role">Desenvolvedor de Software</h1>
        <article className="about-desc">
          Desde 2020 atuo na área, Tendo atuado em diversas empresas e projetos
          freelancer.
        </article>
      </section>
    </StyledAbout>
  );
};
