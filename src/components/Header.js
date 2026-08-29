import Nav from './Nav';
import logo from '../images/logo.png';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>

      <div>
        <h1>Little Lemon Restaurant</h1>
        </div>

      <Nav />
    </header>
  );
}

export default Header;