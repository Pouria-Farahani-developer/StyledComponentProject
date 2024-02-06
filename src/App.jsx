import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import content from "../content.js";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={item.id} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
