import React from "react";
import { Typography, Box, Card, CardContent } from "@material-ui/core";
import { css } from "@emotion/react";
import Container from "@material-ui/core/Container";
import UserContext from "../context/UserContext";

const Experience = () => {
  return (
    <UserContext.Consumer>
      {(context) => (
        <Container maxWidth="md">
          {context.experience.map(({ acf: { experience } }, index) => {
            return (
              experience && (
                <Card key={index} css={cardStyle}>
                  <CardContent>
                    <Box sx={{ display: "flex", marginBottom: "1rem" }}>
                      <img css={imageStyle} src={experience.image} />
                      <Box sx={{ marginLeft: "1rem" }}>
                        <Typography variant="subtitle2">
                          {experience.name}
                        </Typography>
                        <Typography variant="subtitle2">
                          {experience.company} - {experience.location}
                        </Typography>
                        <Typography variant="subtitle2">
                          {experience.date.start_date}-
                          {experience.date.end_date}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography>{experience.description}</Typography>
                  </CardContent>
                </Card>
              )
            );
          })}
        </Container>
      )}
    </UserContext.Consumer>
  );
};

export default Experience;

const cardStyle = css`
  margin: 1rem 0;
  // padding: 2rem;
  background-color: #424242;
  color: #fff;
`;

const imageStyle = css`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  object-position: 50% 50%;
`;
