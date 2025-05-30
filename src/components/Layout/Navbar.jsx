import React, { useState } from "react";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            style={{
                background: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)",
                padding: "0.5rem 2rem",
                boxShadow: "0 2px 8px rgba(30,60,114,0.1)",
                position: "sticky",
                top: 0,
                zIndex: 100,
            }}
        >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {/* Logo */}
                <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#fff", letterSpacing: "2px" }}>
                    <span role="img" aria-label="rocket">🚀</span> Creativo
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    style={{
                        background: "none",
                        border: "none",
                        color: "#fff",
                        fontSize: "2rem",
                        cursor: "pointer",
                        display: "none",
                    }}
                    className="navbar-hamburger"
                    aria-label="Abrir menú"
                >
                    ☰
                </button>

                {/* Links */}
                <ul
                    style={{
                        display: "flex",
                        gap: "2rem",
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                    }}
                    className="navbar-links"
                >
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                style={{
                                    color: "#fff",
                                    textDecoration: "none",
                                    fontWeight: "500",
                                    fontSize: "1.1rem",
                                    position: "relative",
                                    transition: "color 0.2s",
                                }}
                                onMouseOver={e => e.target.style.color = "#ffd700"}
                                onMouseOut={e => e.target.style.color = "#fff"}
                            >
                                {link.name}
                                <span
                                    style={{
                                        display: "block",
                                        height: "3px",
                                        width: "0%",
                                        background: "#ffd700",
                                        transition: "width 0.3s",
                                        position: "absolute",
                                        bottom: "-5px",
                                        left: 0,
                                    }}
                                    className="navbar-underline"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Responsive styles */}
            <style>{`
                @media (max-width: 768px) {
                    .navbar-links {
                        display: ${open ? "flex" : "none"};
                        flex-direction: column;
                        gap: 1rem;
                        background: #1e3c72;
                        position: absolute;
                        top: 60px;
                        left: 0;
                        width: 100%;
                        padding: 1rem 0;
                    }
                    .navbar-hamburger {
                        display: block;
                    }
                }
                .navbar-links li a:hover .navbar-underline {
                    width: 100%;
                }
            `}</style>
        </nav>
    );
}