import styled from "styled-components";

export const StyledSocial = styled.section`
  position: fixed;
  background-color: #30343d;
  left: 0;
  top: 40%;
  padding: 5px;
  font-size: 20px;

  .social-media {
    cursor: pointer;
    margin: 3px;
  }

  a {
    color: #f2ebe9;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
