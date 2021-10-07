// import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
// import { Home } from "./Components/Home";
// import Doctors from "./Components/Doctors";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Components/navbar";

// class Navbar extends Component {
//     state = {
//       komponen1: false,
//       komponen2: false,
//     };
  
//     ubahkomponen1 = () => {
//       this.setState((state) => {
//         return { komponen1: !this.state.komponen1 };
//       });
//     };
//     ubahkomponen2 = () => {
//         this.setState((state) => {
//           return { komponen2: !this.state.komponen2 };
//         });
//       };
  
//     render() {
//       return (
//         <div>
//              <BrowserRouter>
//       <Navbar collapseOnSelect className="Navbar" expand="lg">
//         <Container>
//           <Navbar.Brand href="/">
//             <img
//               src="https://www.linkpicture.com/q/logo_13.png"
//               width="380"
//               height="60"
//               className="d-inline-block align-top"
//               alt="React Bootstrap logo"
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto"></Nav>
//             <Nav>
//             {this.state.komponen1 ? <Index /> : ''}
//         <Link onClick={this.ubahkomponen1}>
//           {this.state.komponen1} HOME
//         </Link>
//         {this.state.komponen2 ? <Index /> : ''}
//         <Link onClick={this.ubahkomponen1}>
//           {this.state.komponen2} OUR DOCTORS
//         </Link>
//               {/* <Link to="/">HOME</Link>
//               <Link to="/doctors">OUR DOCTORS</Link> */}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/doctors" exact component={Doctors} />
//       </Switch>
//     </BrowserRouter>
//         {/* {this.state.komponen1 ? <Index /> : ''}
//         <button className="button bg-danger" onClick={this.ubahkomponen1}>
//           {this.state.komponen1 ? 'Sembunyikan' : 'Tampilkan'} Data Makanan
//         </button> */}
//       </div>
//     );
//   }
// }
// export default Detail;