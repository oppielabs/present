import createTheme from "../../createTheme";

const colors = {
  primary: "white",
  secondary: "#222222", // almost black w/ blueish tint
  tertiary: "#20c9a1", // bright teal
  quaternary: "#CECECE" // pale gray
};

const theme = createTheme(colors, {
    primary: "Barlow",
    secondary: "Raleway"
  }, {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: '4rem',
          padding: '0 0 1rem'
        },
        h2: {
          fontSize: '3.5rem',
          padding: '0 0 1rem'
        },
        h3: {
          fontSize: '3rem',
          padding: '0 0 .5rem'
        },
        h4: {
          fontSize: '2.5rem',
          padding: '0 0 .5rem'
        },
        h5: {
          fontSize: '2rem',
          padding: '0 0 .5rem'
        },
        h6: {
          fontSize: '1.5rem',
          padding: '0 0 .5rem'
        }
      },
      codePane: {
        fontSize: '2rem'
      }
    }
  });

export default theme;