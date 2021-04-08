import './Footer.css';
import teamImg from './the-godfather-logo-300w.png';

/**
 * @module footer/footer
 */


/**
 * Reindeniza a página footer
 * @param {object} props.footer
 *
 */

function Footer() {
    return (
        <div className="footer">
            <img src={teamImg} alt="Grupo Azul's logo" id="footer-im" />
            <p>Grupo Azul</p>
        </div>
    );
}

export default Footer;
