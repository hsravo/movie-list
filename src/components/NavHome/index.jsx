import Navbar from "react-bootstrap/Navbar";
import {Button} from "react-bootstrap";
import "./style.scss";

const NavHome = () => {
    return (
      <Navbar id="nav">
        <Navbar.Brand id="main-title">My Movie List</Navbar.Brand>
        <Button id="main-button" href="https://github.com/hsravo/movie-list" target="_blank">
          ABOUT
        </Button>
      </Navbar>
    )
}

export default NavHome;