import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#">CRUD</Navbar.Brand>
                <Nav className="me-auto">
                    
                </Nav>
                <Nav style={{float:'right',color:"white"}}>
                    <Nav.Link href='/signup'>Sign Up</Nav.Link>
                </Nav>
                <Nav style={{float:'right',color:"white"}}>
                    <Nav.Link href='/'>Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default Header