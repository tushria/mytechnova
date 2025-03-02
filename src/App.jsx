import Home from './Home';
import Contact from './Contact';
import About from './About';
import Signup from './Signup';
import Gallery from './Gallery';
import Event from './Events';
import Register_form from './Register_form';
import Header from './Components/Header';
import GoToTop from './Components/GoToTop';
import { GlobalStyle } from "./GlobalStyle";
import Footer from './Components/Footer';
import Error from './Error';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },

  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoToTop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event' element={<Event />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/registerform'>
            <Route path=':id' element={<Register_form />} />
          </ Route>
          <Route path='/*' element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
