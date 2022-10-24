import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.svg";
import { Link } from 'react-router-dom';
import "./navbar.css"
import { TiArrowBackOutline } from "react-icons/ti";

const Header = () => (
  <Navbar bg="dark" variant="dark" className="nav-bar">
    <div className="return-button">
      <a href="https://higorbuueno.github.io"><TiArrowBackOutline /></a>
    </div>
    <Container className="my-container">
      <Navbar.Brand className="logo">
        <img src={logo} alt="Logo" id="logo-react" width="60px" />
      </Navbar.Brand>
      <Nav className="me-auto text-link">
        <Nav.Link><Link to="react-app"> Home </Link></Nav.Link> {/** I've to put react-app before link because of gh-pages */}
        <Nav.Link><Link to="react-app/como-funciona"> Como funciona? </Link></Nav.Link>{/** I've to put react-app before link because of gh-pages */}
        <Nav.Link><Link to="react-app/consultador"> Consultador de API </Link></Nav.Link>{/** I've to put react-app before link because of gh-pages */}
        <Nav.Link><Link to="react-app/formatador"> Formatador de JSON </Link></Nav.Link>{/** I've to put react-app before link because of gh-pages */}
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
