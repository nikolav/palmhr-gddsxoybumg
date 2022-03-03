import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = ({ logout }) => {
  return (
    <>
      <Navbar
        bg="--light"
        expand="sm"
        variant="dark"
        className="mb-5 bg-custom-01 border-0"
      >
        <Container fluid="sm">
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand className="fs-3 opacity-50">Weather Web App</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                target="_blank"
                href="https://github.com/nikolav/palmhr-gddsxoybumg.git"
              >
                <i className="fs-5 fa-brands fa-github"></i>
              </Nav.Link>
              <Nav.Link onClick={logout} className="ms-4">
                <i className="fs-5 fa-solid fa-arrow-right-from-bracket"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
