const settings = {
  name: "game-dev-portfolio",
  state: {
    frontity: {
      url: "https://juansanchezg.dev",
      title: "Portfolio",
      description: "Game developer portfolio",
    },
  },
  packages: [
    {
      name: "game-dev-portfolio",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://juansanchezg.dev",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
  ],
};

export default settings;
