import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: #30343d;
  z-index: 1;

  .navbar-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem 1rem 3rem;
  }

  .logo {
    font-size: 1.3rem;
    display: flex;
  }

  .sections-nav {
    ul {
      display: flex;
    }

    li {
      list-style: none;
      margin: 0 8px;
      cursor: pointer;
    }

    li:hover {
      text-decoration: underline;
    }

    a {
      font-size: 1.1rem;
      text-decoration: none;
      color: #f2ebe9;
    }
  }

  @media (max-width: 767px) {
    .navbar-content {
      width: 90%;
      padding: 0;
    }

    .sections-nav {
      display: none;
    }
  }
`;
