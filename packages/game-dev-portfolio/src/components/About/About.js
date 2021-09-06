import React from "react";
import UserContext from "../context/UserContext";
import { Container, Paper, Typography } from "@material-ui/core";
// import { GitHub, LinkedIn } from "@material-ui/icons";
import { css } from "@emotion/react";

const About = () => {
  return (
    <UserContext.Consumer>
      {({
        about: {
          acf: { about },
        },
      }) => (
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            css={aboutStyle}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "transparent",
              backgroundImage: "none",
              boxShadow: "none",
              marginBottom: "1rem",
            }}
          >
            <div className="wrapper">
              <img id="clipped" alt="Profile picture" src={about.picture} />
              <Typography variant="h1" gutterBottom>
                {about.name}
              </Typography>
              <Typography variant="h2" gutterBottom>
                {about.title}
              </Typography>
            </div>
            {/* <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
                backgroundImage: "none",
                boxShadow: "none",
              }}
            >
              <GitHub fontSize="large" />
              <LinkedIn fontSize="large" />
            </Paper> */}
          </Paper>
          <Paper
            sx={{
              padding: "1rem",
              backgroundColor: "transparent",
              backgroundImage: "none",
              boxShadow: "none",
            }}
          >
            <Typography variant="body1" gutterBottom>
              {about.description}
            </Typography>
          </Paper>
        </Container>
      )}
    </UserContext.Consumer>
  );
};

const aboutStyle = css`
  #clipped {
    height: 300px;
    -webkit-clip-path: polygon(
      50% 0%,
      95% 25%,
      95% 75%,
      50% 100%,
      5% 75%,
      5% 25%
    );
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default About;
