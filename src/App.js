import './App.css';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Components/Home';
import Doctors from './Components/Doctors';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Components/Home';

function App() {
  return (
    // <BrowserRouter>
    //   <header>
    //     <Navbar bg="dark" expand="lg" variant="dark">
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />

    //       <p>Pregnancy Medical</p>
    //       <nav>
    //         <Link to="/">HOME</Link>
    //         <Link to="/doctors">OUR DOCTORS</Link>
    //       </nav>
    //     </Navbar>
    //   </header>
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/doctors" exact component={Doctors} />
    //   </Switch>
    // </BrowserRouter>
    // ===============
    // <BrowserRouter>
    //   <Navbar collapseOnSelect className="Navbar" expand="lg">
    //     <Container>
    //       <Navbar.Brand href="/home">
    //         <img src="https://www.linkpicture.com/q/logo_13.png" width="380" height="60" className="d-inline-block align-top" alt="React Bootstrap logo" />
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="me-auto"></Nav>
    //         <Nav>
    //           <Link to="/home">HOME</Link>
    //           <Link to="/doctors">OUR DOCTORS</Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    //   <Switch>
    //     <Route path="/home" exact component={Home} />
    //     <Route path="/doctors" exact component={Doctors} />
    //   </Switch>
    // </BrowserRouter>
    <BrowserRouter>
      <Container>
        <Navbar collapseOnSelect className="Navbar " expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img src="https://www.linkpicture.com/q/logo_13.png" width="380" height="60" className="d-inline-block align-top" alt="React Bootstrap logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/doctors">OUR DOCTOR</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/doctors" exact component={Doctors} />
      </Switch>
    </BrowserRouter>
    // <>

    /* <Container>
        <Card className=" bg-light text-Dark">
          <Card.Img src="https://www.linkpicture.com/q/baby-bg.jpeg" alt="Card image" width={500} height={500} />
          <Card.ImgOverlay>
            <BrowserRouter>
              <Navbar collapseOnSelect className="Navbar" expand="lg">
                <Container>
                  <Navbar.Brand href="/">
                    <img src="https://www.linkpicture.com/q/logo_13.png" width="380" height="60" className="d-inline-block align-top" alt="React Bootstrap logo" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                      <Nav.Link href="/">HOME</Nav.Link>
                      <Nav.Link href="/doctors" exact component={Doctors}>
                        OUR DOCTOR
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </BrowserRouter>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Card.Title className="title-1 ">
              WE CARE ABOUT YOUR <span className=" text-info">PREGNANCY </span>
            </Card.Title>

            <Card.Text> CHECK YOUR PREGNANCY</Card.Text>
            <Button variant="outline-info">MAKE AN APPOINMENT</Button>
          </Card.ImgOverlay>
        </Card>

        <CardGroup className=" text-center">
          <Card>
            <Card.Body className=" body-1">
              <Card.Title>TOP DOCTOR</Card.Title>
              <Card.Text>
                <br />
                There’s never been a doctor who served many patients who, despite their best efforts, did not lose some of them to death. But they understood that was part of life itself.
                <br />
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className=" body-2">
              <Card.Title>PROFESSIONAL STAFF</Card.Title>
              <Card.Text>
                <br />
                Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className=" body-3">
              <Card.Title>24/7 SERVICES</Card.Title>
              <Card.Text>
                <br />
                The future depends on what you do today.
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup className="text-center">
          <Card>
            <Card.Body className=" body-4">
              <Card.Title>
                <br />
                PREGNANCY MEDICAL
              </Card.Title>
              <Card.Text>
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className=" body-5">
              <Card.Title>
                KELOMPOK 40
                <br />
                Firsta Adi Pradana
                <br />
                Damarjati Rahmandaru
              </Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/doctors" exact component={Doctors} />
        </Switch>
      </BrowserRouter>
    </> */
  );
}

export default App;
