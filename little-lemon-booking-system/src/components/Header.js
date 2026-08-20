import Nav from './Nav';
import './Header.css';
import logo from '../images/logo.png';

function Header() {
  return (
    <header>
      <div className="logo-title">
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;