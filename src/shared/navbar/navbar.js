import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.svg";
import { Link } from 'react-router-dom';
import "./navbar.css"
import { TiArrowBackOutline } from "react-icons/ti";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <div className="return-button">
    <a href="https://higorbuueno.github.io"><TiArrowBackOutline /></a>
    </div>
    <Container>
      <Navbar.Brand>
        <img src={logo} alt="Logo" width="60px" />
      </Navbar.Brand>
      <Nav className="me-auto text-link">
        <Nav.Link><Link to="react-app"> Home </Link></Nav.Link>
        <Nav.Link><Link to="como-funciona"> Como funciona? </Link></Nav.Link>
        <Nav.Link><Link to="consultador"> Consultador de API </Link></Nav.Link>
        <Nav.Link><Link to="formatador"> Formatador de JSON </Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
