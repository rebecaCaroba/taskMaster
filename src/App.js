import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Empresa from "./components/pages/Empresa";
import NovoProjeto from "./components/pages/NovoProjeto";

import Projeto from "./components/pages/projetos";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <Navbar />
      <Container custom='test'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/novoprojeto' element={<NovoProjeto />} />
          <Route path='/projeto' element={<Projeto/>} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Container>
      <Footer/>
    </Router >
  );
}

export default App;
