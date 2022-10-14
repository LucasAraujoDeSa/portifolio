import styled from "styled-components";

export const StyledAbout = styled.section`
  display: flex;
  justify-content: space-between;

  margin-top: 7rem;

  .about-photo {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .icon-profile {
    border-radius: 50%;
  }

  .about {
    width: 40%;
    text-align: left;
    font-size: 1.5rem;
  }

  .about-role {
    font-size: 3rem;
  }

  .about-desc {
    font-size: 1.3rem;
    margin-top: 4rem;
  }

  @media (max-width: 1280px) {
    margin-top: 5rem;
    .about-photo {
      display: none;
      width: 0%;
    }
    .icon-profile {
      display: none;
    }

    .about {
      width: 90%;
      text-align: left;
      font-size: 1.5rem;
    }

    .about-desc {
      font-size: 1.3rem;
      margin-top: 1rem;
    }

    .about-role {
      font-size: 2rem;
    }
  }

  @media (max-width: 300px) {
    .about-role {
      font-size: 1.5rem;
    }
  }
`;
