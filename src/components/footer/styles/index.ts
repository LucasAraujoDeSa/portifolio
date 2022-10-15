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

  .social-media {
    margin: 0 10px;
    a {
      text-decoration: none;
      color: #f2ebe9;
    }
  }

  @media (max-width: 767px) {
    .footer-content {
      width: 90%;
      display: block;
      margin: auto;
    }

    .social-medias {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;
