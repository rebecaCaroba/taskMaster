import { Link } from 'react-router-dom';
import Container from './Container';

import logo from '../../assets/favicon.png'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={style.navBar}>
      <Container>
            <Link to='/'>
              <img src={logo} alt='taskMaster' width={80} height={80} />
            </Link>
          
        <ul className={style.list}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/projeto'>Projetos</Link>
          </li>
          <li>
            <Link to='/empresa'>Empresa</Link>
          </li>
          <li>
            <Link to='/contato'>Contatos</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar;
