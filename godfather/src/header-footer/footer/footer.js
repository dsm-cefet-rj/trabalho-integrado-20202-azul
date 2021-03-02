import './Footer.css';
import teamImg from './the-godfather-logo-300w.png';

function Footer() {
    return (
        <div className="footer">
            <img src={teamImg} alt="Grupo Azul's logo" id="footer-im"></img>
            <p>Grupo Azul</p>
        </div>
    );
}

export default Footer;