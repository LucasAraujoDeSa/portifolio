import React from "react";
import { StyledSkills } from "./styles";
import { FaPython, FaNodeJs, FaAws, FaReact, FaDatabase } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
  SiGithubactions,
  SiNestjs,
  SiFastapi,
} from "react-icons/si";
import { BsBookFill } from "react-icons/bs";
import { TbTestPipe2 } from "react-icons/tb";
import { MdArchitecture } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";

export const Skills: React.FC = () => {
  return (
    <StyledSkills id="3">
      <h1 className="skills-title">Skills</h1>
      <section className="skills-content">
        <div className="skill">
          <FaPython className="skill-icon" />
          Python
        </div>
        <div className="skill">
          <FaNodeJs className="skill-icon" />
          NodeJs
        </div>
        <div className="skill">
          <SiJavascript className="skill-icon" />
          JavaScript
        </div>
        <div className="skill">
          <SiTypescript className="skill-icon" />
          TypeScript
        </div>

        <div className="skill">
          <BsBookFill className="skill-icon" />
          Design Patterns
        </div>
        <div className="skill">
          <TbTestPipe2 className="skill-icon" />
          TDD
        </div>
        <div className="skill">
          <BsBookFill className="skill-icon" />
          Clean Code
        </div>
        <div className="skill">
          <MdArchitecture className="skill-icon" />
          Clean architecture
        </div>

        <div className="skill">
          <FaAws className="skill-icon" />
          AWS
        </div>
        <div className="skill">
          <SiFirebase className="skill-icon" />
          Firebase
        </div>
        <div className="skill">
          <FaReact className="skill-icon" />
          React
        </div>
        <div className="skill">
          <SiNextdotjs className="skill-icon" />
          Next
        </div>
        <div className="skill">
          <SiGithubactions className="skill-icon" />
          CI/CD
        </div>

        <div className="skill">
          <SiNestjs className="skill-icon" />
          Nest
        </div>
        <div className="skill">
          <SiFastapi className="skill-icon" />
          FastApi
        </div>
        <div className="skill">
          <AiFillApi className="skill-icon" />
          Integracao com Apis
        </div>
        <div className="skill">
          <FaDatabase className="skill-icon" />
          Banco de Dados
        </div>
      </section>
    </StyledSkills>
  );
};
