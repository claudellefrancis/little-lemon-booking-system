import Nav from './Nav';
import logo from '../images/logo.png';

function Header() {
  return (
    <header className="header">
      {logo}
      <Nav />
    </header>
  );
}

export default Header;