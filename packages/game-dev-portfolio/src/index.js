import Theme from "./components";

export default {
  name: "game-dev-portfolio",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {
      isDarkMode: true,
    },
  },
  actions: {
    theme: {
      toggleDarkMode: ({ state }) => {
        state.theme.isDarkMode = !state.theme.isDarkMode;
      },
    },
  },
  libraries: {
    html2react: {},
  },
};
