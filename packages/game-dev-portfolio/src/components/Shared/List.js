import React from "react";
import Post from "./Post";
import Container from "@material-ui/core/Container";
import UserContext from "../context/UserContext";

const List = () => (
  <UserContext.Consumer>
    {(context) => (
      <Container maxWidth="md">
        {context.posts.map((item) => {
          return <Post key={item.id} post={item} />;
        })}
      </Container>
    )}
  </UserContext.Consumer>
);

export default List;
