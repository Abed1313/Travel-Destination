import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='des'>
        <Link to='/'>Home</Link>
      </nav>
    </>
  )
};
export default Navbar;