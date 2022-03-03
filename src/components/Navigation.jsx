import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoPalmhr from "./Navigation.module.scss";

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
            <Navbar.Brand className={`fs-3 opacity-50 ${logoPalmhr.logo}`}>
              Weather Web App
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className="me-4"
                target="_blank"
                href="https://github.com/nikolav/palmhr-gddsxoybumg.git"
              >
                <i className="fs-4 fa-brands fa-github"></i>
              </Nav.Link>
              <Nav.Link onClick={logout} className="--ms-4">
                <i className="fs-4 fa-solid fa-arrow-right-from-bracket"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
