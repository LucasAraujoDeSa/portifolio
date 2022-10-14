import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  background-color: #30343d;

  .footer-content {
    width: 90%;
    display: flex;
  }

  .social-medias {
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }

  .contact {
    width: 50%;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1rem;
  }

  .social-media {
    margin: 0 10px;
    a {
      text-decoration: none;
      color: #f2ebe9;
    }
  }

  .contact-number {
    margin-left: 7px;
  }

  @media (max-width: 767px) {
    .footer-content {
      width: 90%;
      display: block;
      margin: auto;
    }

    .contact {
      width: 70%;
      font-size: 0.9rem;
      justify-content: flex-start;
      margin-bottom: 1rem;
      font-size: 1rem;
    }

    .social-medias {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;
