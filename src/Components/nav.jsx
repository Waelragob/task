import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { CiDark, CiLight } from "react-icons/ci";
import { ThemeContext } from '../Conteex/ThemeContext'; // Adjust the path as necessary

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar className= {theme}   expand="lg" > 
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand href="#" className="font-weight-bold">SHAHADA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#" className="nav-link">About Us</Nav.Link>
            <Nav.Link href="#" className="nav-link">Blog</Nav.Link>
            <Nav.Link href="#" className="nav-link">Contact</Nav.Link>
          </Nav>
          <div className='m-3 d-flex align-items-center gap-3'>
            <FaSearch style={{ fontSize: '24px' }} />
            <div onClick={toggleTheme} style={{ cursor: 'pointer' }} className="theme-toggle">
              {theme === 'light' ? (
                <CiDark style={{ fontSize: '32px' }} />
              ) : (
                <CiLight style={{ fontSize: '32px' }} />
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;