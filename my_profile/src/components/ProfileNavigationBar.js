import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ProfileNavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Gaurav Bhardwaj</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><b style={{color:'red'}}>Patents**</b></Nav.Link>
            <Nav.Link href="#link">Tech Self-Rating</Nav.Link>
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">General Views</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Daily Updates
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">On-Going Tasks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Repositories
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ProfileNavigationBar;