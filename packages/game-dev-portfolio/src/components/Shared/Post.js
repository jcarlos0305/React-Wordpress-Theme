import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { css } from "@emotion/react";
import { connect } from "frontity";

const Post = ({ post, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const card = (
    <CardContent>
      <Html2React html={post.title} />
      <Html2React html={post.content.rendered} />
    </CardContent>
  );
  return <Card css={cardStyle}>{card}</Card>;
};

export default connect(Post);

const cardStyle = css`
  margin: 1rem 0;
  // padding: 2rem;
  background-color: #424242;
  color: #fff;
`;
