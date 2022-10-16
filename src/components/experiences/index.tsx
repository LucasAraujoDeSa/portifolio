import React from "react";
import { StyledExperiences } from "./styles";

export const Experiences: React.FC = () => {
  return (
    <StyledExperiences id="2">
      <h1 className="xp-title">Experiencias</h1>
      <section className="xp-content">
        <div className="xp-card">
          <span className="xp-card-title">Instituto Sidia</span>
          <p className="xp-desc">
            Estagiário em desenvolvimento de software, onde participei de
            automações visando agilizar processos internos
          </p>
        </div>
        <div className="xp-card">
          <span className="xp-card-title">
            ITriad <strong>(posicao atual)</strong>
          </span>
          <p className="xp-desc">
            Desenvolvedor de Software Jr, presente em projetos com a finalidade
            de automação industrial.
          </p>
        </div>
        <div className="xp-card">
          <span className="xp-card-title">Freelancer</span>
          <p className="xp-desc">
            Participação em diversos projetos para diferentes nichos e com
            diferentes complexidades.
          </p>
        </div>
      </section>
    </StyledExperiences>
  );
};
