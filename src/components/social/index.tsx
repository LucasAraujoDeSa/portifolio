import React from "react";
import { StyledSocial } from "./styles";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

export const Social: React.FC = () => {
  return (
    <StyledSocial>
      <div className="social-media">
        <Link href="https://github.com/LucasAraujoDeSa">
          <a>
            <BsGithub />
          </a>
        </Link>
      </div>
      <div className="social-media">
        <Link href="https://www.instagram.com/__andre_lucas_/">
          <a>
            <BsInstagram />
          </a>
        </Link>
      </div>
      <div className="social-media">
        <Link href="https://www.linkedin.com/in/lucas-araujo-769b881a4/">
          <a>
            <BsLinkedin />
          </a>
        </Link>
      </div>
    </StyledSocial>
  );
};
