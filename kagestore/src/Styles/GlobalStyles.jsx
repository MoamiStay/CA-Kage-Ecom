import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --color-primary: rgb(222, 134, 0);
    --color-secondary: rgb(222, 0, 0);
    --color-primaryText: rgb(12, 12, 12);
};

.hidden {
    display: none;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* border: 1px solid black; */
};

body {
min-width: 200px;
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(252,245,234,1) 100%);
}

.nav-bar {
  display: grid;
  gap: 0;
  grid-template-columns: 1fr auto 1fr;
  justify-items: flex-end;
  padding: 15px;
}

#mobile-logo {
  max-width: 5rem;
  margin: auto;
}

#mobile-logo > img{
  max-width: 100%;
}

#desktop-logo > img {
    display: none;
}

ul, li, li > a, p, h1, h2, h3, h4 {
    list-style-type: none;
    text-decoration: none;
    color: ${(props) => props.theme.color.primaryText};
};

h1, h2, h3, h4, p, button, input, a, li {
    font-family: 'Noto Serif JP', serif;
};

.main-container {
    margin: auto;
    min-height: 100vh;
    max-width: 100%;
    background-color: white;
    padding-top: 20px;
    border-left: solid 1px black;
    border-right: solid 1px black;
}

main {
    max-width: 80%;
    min-height: calc(100vh - 253.313px); // 20 + 43.313 + 48 + 48 = (159.313) + <footer height>
    margin: 3rem auto 3rem auto;
}

input {
  max-width: 8rem;
  padding: 2px 5px 2px 5px;
  border: solid 1px ${(props) => props.theme.color.primary};
  border-radius: 5px;
}

@media screen and (min-width: 320px) {

.nav-bar {
  /* grid-template-columns: 1fr auto 1fr; */
  gap: 50px;
  justify-items: center;
  padding: 10px;
}

.main-container {
    max-width: 90%;
    /* background-color: #ffa7a7; */

}
}

@media screen and (min-width: 768px) {

#mobile-logo {
  display: none;
}

#desktop-logo {
    max-width: 7rem;
}

#desktop-logo > img {
    max-width: 100%;
    display: block;
}

.main-container {
    max-width: 70%;
    /* background-color: #a00202; */
}

main {
    max-width: 85%;
}
}

@media screen and (min-width: 1200px) {

.main-container {
    max-width: 70%;
    /* background-color: #097702; */
}

main {
    max-width: 70%;
}
}

`;

export default GlobalStyle;