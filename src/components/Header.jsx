import './Header.css'

function Header() {
    return (
        <>
            <header className='header-bg'>
                <div className='header container'>
                    <a href="./">
                    <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" width="136" height="32" alt="Bicraft"></img>
                    </a>
                <nav>
                <ul className='header-menu'>
                        <li><a href="#bicycles">Bicycles</a></li>
                        <li><a href="#insurance">Insurance</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                </div>
            </header>
        </>
    )
}

export default Header