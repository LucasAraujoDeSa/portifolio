import styled from "styled-components";

export const StyledSkills = styled.section`
  margin-top: 2rem;

  .skills-title {
    font-size: 2.2rem;
  }

  .skills {
    margin: 1rem;
    padding: 1rem;
  }

  .skills-content {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }

  .skill {
    margin: 10px;
    padding: 1px 6px;
    text-align: center;
    background-color: #f2ebe9;
    color: #242526;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .skill-icon {
    margin-right: 5px;
  }
`;
