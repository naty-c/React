import './Footer.css'
import './Header'

function Footer() {
    return (
        <>
            <footer className='footer-bg'>
                <div className='footer container'>
                    <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" width="136" height="32" alt="Bicraft"></img>
                    <div className='footer-contact'>
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="tel:+552199999999">+55 21 9999-9999</a></li>
                            <li><a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a></li>
                            <li>Rua Ali Perto, 42 - Botafogo</li>
                            <li>Rio de Janeiro - RJ</li>
                        </ul>
                        <div className='social-media'>
                            <a href="./"><img src="./src/assets/instagram.svg" alt="Instagram" /></a>
                            <a href="./"><img src="./src/assets/facebook.svg" alt="Facebook" /></a>
                            <a href="./"><img src="./src/assets/youtube.svg" alt="YouTube" /></a>
                        </div>
                    </div>
                    <div className='footer-info'>
                        <h3>Information</h3>
                        <nav>
                            <ul>
                                <li><a href="#">Bicycles</a></li>
                                <li><a href="#">Insurance</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                            </ul>
                        </nav>
                    </div>
                    <p className='footer-copy'>Bikcraft © Some rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer