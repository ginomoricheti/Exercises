import { createGlobalStyle } from "styled-components";
//@ts-ignore
import BGImage from './assets/towfiqu-barbhuiya-5u6bz2tYhX8-unsplash.jpg'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    paddding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
  }
`