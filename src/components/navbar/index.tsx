import { StyledNavbar } from "./styles";
import Link from "next/link";
import React from "react";

export const NavBar: React.FC = () => {
  return (
    <StyledNavbar>
      <section className="navbar-content">
        <section className="logo">
          {"<"} LucasDeSa {"/>"}
        </section>
        <section className="sections-nav">
          <ul>
            <li>
              <Link href="#1">
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <Link href="#2">
                <a>Experiencia</a>
              </Link>
            </li>
            <li>
              <Link href="#3">
                <a>Skills</a>
              </Link>
            </li>
            <li>
              <Link href="#4">
                <a>Contatos</a>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </StyledNavbar>
  );
};
