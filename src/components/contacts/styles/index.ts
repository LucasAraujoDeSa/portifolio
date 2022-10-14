import styled from "styled-components";

export const StyledContacts = styled.section`
  margin-top: 4rem;

  .contacts-title {
    font-size: 2.2rem;
  }

  .contacts-content {
    width: 50%;
    padding: 20px;
    display: flex;
  }

  .inputs-row {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    input {
      margin: 5px;
      padding: 5px;
      outline: none;
      border: none;
      width: 90%;
      background-color: #30343d;
      color: #f2ebe9;
      font-size: 1rem;
    }

    input:focus {
      box-shadow: inset 0 0 10px #296bd6;
    }
  }

  .textarea-row {
    padding: 2px 10px;

    textarea {
      margin: 5px;
      height: 100px;
      width: 95%;
      background-color: #30343d;
      border: none;
      outline: none;
      padding: 5px;
      font-size: 1rem;
      color: #f2ebe9;
    }

    textarea:focus {
      box-shadow: inset 0 0 10px #296bd6;
    }
  }

  .form-btn-area {
    padding: 15px;
  }

  .form-btn {
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 8px;
    background-color: #296bd6;
    color: #f2ebe9;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .contacts-content {
      width: 90%;
      justify-content: center;
      margin: auto;
    }

    .textarea-row {
      textarea {
        width: 90%;
      }
    }

    .inputs-row {
      display: block;
    }

    .form-btn-area {
      width: 90%;
    }

    .form-btn {
      width: 100%;
    }
  }
`;
