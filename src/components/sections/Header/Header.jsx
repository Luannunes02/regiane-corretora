import { Link } from "react-router-dom";

import "./style.scss"

import Logo from "../../../assets/logo.png";


export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg" id="navbar">
                <div className="container">
                    <Link className="navbar-brand ms-5" to="/" >
                        <img src={Logo} alt='logo' id='logoteste' />
                    </Link>
                    <button id='menuBtn' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse me-5" id="navbarNav">
                        <ul className="navbar-nav" id="ul">
                            <li className="nav-item">
                                <a className="nav-link btn" href="/#start" id='navbar-item'>
                                    INÍCIO
                                    <div className="background"></div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn" href="/#about" id='navbar-item'>
                                    SOBRE
                                    <div className="background"></div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn" href="/#services" id='navbar-item'>
                                    SERVIÇO
                                    <div className="background"></div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn" href="/#imoveisContainer" id='navbar-item'>
                                    IMÓVEIS
                                    <div className="background"></div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn" href="/#contact" id='navbar-item'>
                                    CONTATO
                                    <div className="background"></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}