import React from "react";
import { StyledSocial } from "./styles";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export const Social: React.FC = () => {
  return (
    <StyledSocial>
      <div className="social-media">
        <Link href="https://github.com/LucasAraujoDeSa">
          <a target="_blank">
            <BsGithub />
          </a>
        </Link>
      </div>
      <div className="social-media">
        <Link href="https://www.instagram.com/__andre_lucas_/">
          <a target="_blank">
            <BsInstagram />
          </a>
        </Link>
      </div>
      <div className="social-media">
        <Link href="https://www.linkedin.com/in/lucas-araujo-769b881a4/">
          <a target="_blank">
            <BsLinkedin />
          </a>
        </Link>
      </div>
      <div className="social-media">
        <Link href="https://api.whatsapp.com/send?phone=5592995272722">
          <a target="_blank">
            <BsWhatsapp />
          </a>
        </Link>
      </div>
    </StyledSocial>
  );
};
