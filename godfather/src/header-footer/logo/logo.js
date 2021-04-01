import './Logo.css'
import { Link } from 'react-router-dom'

function Logo() {
return (
  <div className="Logo">
    <Link to="/">
      <h1 className="display-1">The Godfather</h1>
    </Link>
  </div>
  );
}

export default Logo
