import Logo from './images/Logo-for-web.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';

function Navigation() {

    const[color, setColor] = useState(false)
    const changeColor = ()=>{
        if (window.scrollY >=90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll',changeColor)

    return (
        <Navbar className="w-100" expand="lg">
            <Container className={color ? 'navbarfullresponsive': 'navbarfullwidth '}>
                <Navbar.Brand href="#home"><img className='logoimagemav' src={Logo} alt="Vite System LLC" /></Navbar.Brand>
                <Navbar.Toggle className="" aria-controls="basic-navbar-nav"> <GiHamburgerMenu/> </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown className=" uionav" title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home" className="">Home</Nav.Link>
                        <Nav.Link href="#link" className="">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;