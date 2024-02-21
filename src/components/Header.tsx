import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref>
        <a className="navbar-brand">
          Home
        </a>
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/products" passHref>
          <a className="nav-link me-2">
            Products
          </a>
        </Link>
        <Link href="/cart" passHref>
          <a className="nav-link">
            Cart
          </a>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;