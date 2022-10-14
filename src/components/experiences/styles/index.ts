import styled from "styled-components";

export const StyledExperiences = styled.section`
  margin-top: 4rem;

  .xp-title {
    font-size: 2rem;
  }

  .xp-card-title {
    font-size: 1.3rem;
    padding-left: 10px;
    border-left: solid 2px #296bd6;
  }

  .xp-content {
    padding: 20px;
  }

  .xp-card {
    width: 50%;
    padding: 1rem;
    margin: 20px 0;
  }

  @media (max-width: 767px) {
    .xp-card {
      width: 80%;
    }
  }
`;
