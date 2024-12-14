import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, Card } from "react-bootstrap";
import { FaTasks, FaHome, FaUserPlus, FaSignOutAlt } from "react-icons/fa"; // Added FaUserPlus for Add User

const DashBoard = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUSerEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const Uname = window.localStorage.getItem("userName");
    const Uemail = window.localStorage.getItem("userEmail");

    if (!Uname) {
      navigate("/home");
    }

    setUserName(Uname);
    setUSerEmail(Uemail);
  }, [navigate]);

  const logout = () => {
    window.localStorage.clear();
    navigate("/home");
  };

  return (
    <>
      {/* Navbar Section */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow">
        <Container>
          <Navbar.Brand href="#">Admin Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Navbar.Text className="me-3 text-light">
                Welcome: <strong>{userName}</strong>
              </Navbar.Text>
              <Navbar.Text className="me-3 text-light">
                Email: <strong>{userEmail}</strong>
              </Navbar.Text>
              <Button variant="outline-danger" size="sm" onClick={logout}>
                <FaSignOutAlt /> Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content Section */}
      <Container fluid>
        <Row>
          {/* Sidebar Section */}
          <Col md={3} className="mb-4">
            <Card className="shadow">
              <Card.Header className="bg-dark text-white text-center">
                <h5>Admin Menu</h5>
              </Card.Header>
              <Card.Body>
                <Nav className="flex-column">
                  <Nav.Link
                    as={Link}
                    to="adminhome"
                    className="text-dark mb-3 d-flex align-items-center"
                  >
                    <FaHome className="me-2" /> Show Data
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="addtask"
                    className="text-dark mb-3 d-flex align-items-center"
                  >
                    <FaTasks className="me-2" /> Add Task
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="userregister"
                    className="text-dark d-flex align-items-center"
                  >
                    <FaUserPlus className="me-2" /> Add User
                  </Nav.Link>
                </Nav>
              </Card.Body>
            </Card>
          </Col>

          {/* Dashboard Content Section */}
          <Col md={9}>
            <Card className="shadow">
              
              <Card.Body>
                <Outlet />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashBoard;
