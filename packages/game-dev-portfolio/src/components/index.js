import React from "react";
import { connect, Head } from "frontity";
import { Global, css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import CssBaseline from "@material-ui/core/CssBaseline";
import { UserProvider, ThemeContext } from "./context";

import About from "./About";
import { List } from "./Shared";
import Experience from "./Experience";

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <React.Fragment>
      <CssBaseline />
      <Global styles={GlobalStyles} />
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <UserProvider>
        <ThemeProvider theme={ThemeContext}>
          {data.isReady && (
            <Main>
              <About />
              <Experience />
              {/* <List /> */}
            </Main>
          )}
        </ThemeProvider>
      </UserProvider>
    </React.Fragment>
  );
};

export default connect(Theme);

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 2rem;
`;

const GlobalStyles = css`
body {
  background-color: #333;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  max-width: 100vw;
}
html {
  background: "#333" : "#fff"};
}
`;
