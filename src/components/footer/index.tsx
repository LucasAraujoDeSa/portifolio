import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { StyledFooter } from "./styles";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <section className="footer-content">
        <section className="social-medias">
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
          <div className="social-media">
            <Link href="https://api.whatsapp.com/send?phone=5592995272722">
              <a>
                <BsWhatsapp />
              </a>
            </Link>
          </div>
        </section>
      </section>
    </StyledFooter>
  );
};
