import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import logo from './assets/Logo.svg';

function App() {
  return (
    <>
    <header>
      {logo && <img src={logo} alt="Little Lemon Logo" />}
      <h1>Littel Lemon Restaurant</h1>
    </header>

    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>

    <main>

    </main>

    <footer>
      <div>
        <img></img>

        <div>
          Copyright © 2026 Little Lemon, All Rights Reserved
        </div>
      </div>

    </footer>

    </>
  )
}
export default App;
