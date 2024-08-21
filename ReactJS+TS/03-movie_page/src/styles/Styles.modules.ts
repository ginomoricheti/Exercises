import styled from "styled-components";

/* FONTS
  MONTSERRAT
  // <uniquifier>: Use a unique and descriptive class name
  // <weight>: Use a value from 100 to 900

  .montserrat-<uniquifier> {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  }

  HIND
  .hind-light {
  font-family: "Hind", system-ui;
  font-weight: 300;
  font-style: normal;
  }

  .hind-regular {
  font-family: "Hind", system-ui;
  font-weight: 400;
  font-style: normal;
  }

  .hind-medium {
  font-family: "Hind", system-ui;
  font-weight: 500;
  font-style: normal;
  }

  .hind-semibold {
  font-family: "Hind", system-ui;
  font-weight: 600;
  font-style: normal;
  }

  .hind-bold {
  font-family: "Hind", system-ui;
  font-weight: 700;
  font-style: normal;
  }
*/

// Header.tsx file starts
export const NavbarWrapper = styled.div`
  .logoText {
    font-size: 2.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    letter-spacing: 2px;
    color: #fff;
    background: linear-gradient(to right, rgb(164, 127, 72), #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .navLinks,
  .loginBtn {
    margin-left: auto;
  }

  .navLinks a.active {
    padding: 14px 0 17px 0;
    background-color: rgba(168, 166, 152, 0.4);
    pointer-events: none;
  }
    
  .links {
    padding: 0 auto;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    &:hover {
    color: #333;
    background-color: #ffffe4;
    }

  .loginBtn{
    font-family: "Montserrat", sans-serif;
  }
}

  @media (max-width: 1060px) {
    .logo {
      font-size: 1.6rem;
    }

    .links,
    .loginBtn {
      font-size: 12px;
    }
  }
`;
// Header.tsx file ends

// CoverPage.tsx file starts
export const Cover = styled.div`
  position: relative;
  text-align: center;
  margin: 50px auto 0;
  width: 80%;

  .coverText {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 30%;
    color: #fff;
    letter-spacing: 1px;
    line-height: 1;
    text-shadow: 1px 1px 3px lightgray;

    > h1 {
      font-family: "Montserrat", sans-serif;
      font-size: 3rem;
      text-transform: uppercase;
    }

    > p {
      font-family: "Hind", system-ui;
      font-weight: 600;
      font-size: 1.5rem;
    }

    em {
      margin-top: 10px;
      font-family: "Hind", system-ui;
      font-weight: 300;
      font-style: italic;
      font-size: 0.9rem;
    }
  }

  > img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    border-bottom-left-radius: 240px;
    border-bottom-right-radius: 240px;
  }

  @media (max-width: 1020px) {
    .coverText {
      letter-spacing: 1px;
      line-height: 0.2;
      > h1 {
        font-size: 2.2rem;
      }
      > p,
      em { 
      font-size: 15px;
      }
    }
    &::before,
    img {
      height: 240px;
    }
  }
  
  @media (max-width: 800px) {
    width: 100%;
    margin: 4rem 0 0;

    .coverText {
      line-height: 0.2;
      > h1 {
        font-size: 2.2rem;
      }
      > p,
      em { 
        font-size: 15px;
      }
    }
    &::before,
    img {
      height: 240px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

export const SearchBar = styled.div`
  > input,
  > button {
    position: absolute;
    top: 100%;
    transform: translate(-50%, -50%);
    margin: auto;
    height: 45px;
    text-align: center;
    outline: 0;
    border: 0;
    border-radius: 20px;
  }

  > input {
    padding: 10px;
    width: 60%;
    font-family: "Hind", system-ui;
    font-weight: 300;
    font-size: 16px;
    box-shadow: 1px 1px 6px 2px grey;

    &::placeholder {
      font-size: 14px;
    }
  }

  > button {
    padding: 0;
    width: 45px;
    font-family: "Hind", system-ui;
    font-weight: 600;
    font-size: 17px;
    left: 78.6%;
    color: #fff;
    background: rgb(164, 127, 72);
    cursor: pointer;
  }
}
`;
// CoverPage.tsx file ends

// DisplayItems.tsx file starts
export const MovieShowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 4rem 0 0;
  border-radius: 10px;

  .loadingOverlay {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    color: #fff;
    background-color: rgba(3, 37, 65, 0.4);
    z-index: 9999;
    > p {
      margin-top: 1rem;
      font-family: "Hind", system-ui;
      font-weight: 500;
      font-size: 2rem;
      letter-spacing: 2px;
    }
  }

  .movieHeading {
    width: 100%;
    > h1 {
      margin-bottom: 1.5rem;
      font-family: "Montserrat", sans-serif;
      font-size: 2rem;
      font-weight: 700;
      color: #333;
      text-transform: uppercase;
    }
  }

  .movieCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;

    .movie {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-self: center;
      width: 200px;
      padding: 10px;
      transition: all 0.4s ease-in-out;

      .movieImage {
        display: flex;
        cursor: pointer;
        > img {
          height: 250px;
          padding: 5px;
          background-color: rgb(38, 33, 37);
          border-radius: 7px;
          border-top-left-radius: 25px;
          border-bottom-right-radius: 25px;
          box-shadow: 1px 1px 10px 1px #000;
        }
      }

      > span {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        align-self: center;
        width: 35px;
        height: 35px;
        margin-top: -23px;
        font-family: "Hind", system-ui;
        font-weight: 500;
        font-size: 14px;
        line-height: 38px;
        color: #fff;
        background-color: rgb(164, 127, 72);
        border: 2px solid #fff;
        border-radius: 50%;
      }

      &:hover {
        transform: scale(1.04);
      }

      .movieInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > h4 {
          margin-top: 5px;
          width: 200px;
          overflow: hidden;
          font-family: "Montserrat", sans-serif;
          font-weight: 600;
          color: #333;
          text-align: center;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        > p {
          margin-top: -20px;
          font-family: "Hind", system-ui;
          font-weight: 300;
          font-size: 0.9rem;
          color: #555;
        }
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    width: 30%;
    margin-top: 20px;

    .btnPrev {
    }

    .btnNext {
    }

    > p {
      font-family: "Hind", system-ui;
      font-size: 1.1rem;
      color: #555;
      > span {
        font-weight: 800;
        color: #ffa500;
      }
    }
  }
`;
// DisplayItems.tsx file ends
