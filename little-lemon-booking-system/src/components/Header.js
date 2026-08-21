import Nav from './Nav';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="logo" className="logo" />
        </div>
        <Nav />
    </header>
  );
}

export default Header;