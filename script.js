:root {
    --primary: #0b4d3b;
    --secondary: #2f6d4d;
    --accent: #3a9e7a;
    --gold: #d4af37;
    --light: #f7f9f8;
    --dark: #222;
    --gray: #6c757d;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background: var(--light);
    color: var(--dark);
    line-height: 1.6;
    scroll-behavior: smooth;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
header {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 80px 20px 60px;
    text-align: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

.header-content {
    max-width: 800px;
    margin: 0 auto;
}

header img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid white;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 700;
}

header p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 25px;
}

.header-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 8px 20px;
    border-radius: 30px;
    font-size: 0.9rem;
    margin-top: 10px;
}

/* Botón flotante */
.floating-button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: var(--accent);
    color: white;
    padding: 14px 18px;
    border-radius: 50px;
    font-weight: 600;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    z-index: 99;
}

.floating-button:hover {
    background: var(--secondary);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    color: white;
}

/* Secciones */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
}

.section-title h2 {
    display: inline-block;
    color: var(--primary);
    border-bottom: 3px solid var(--accent);
    padding-bottom: 10px;
    font-size: 2rem;
    position: relative;
}

.section-title p {
    max-width: 700px;
    margin: 15px auto 0;
    color: var(--gray);
}

/* Sobre mí */
.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    align-items: start;
}

.about-text {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.about-text p {
    margin-bottom: 20px;
    text-align: justify;
}

.about-details {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.detail-list {
    list-style: none;
}

.detail-list li {
    display: flex;
    padding: 12px 0;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.08);
}

.detail-label {
    min-width: 150px;
    font-weight: 600;
    color: var(--primary);
}

/* Experiencia */
.experience-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.experience-category {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.experience-category h3 {
    color: var(--secondary);
    font-size: 1.4rem;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--accent);
    display: flex;
    align-items: center;
    gap: 10px;
}

.experience-category h3 i {
    color: var(--primary);
}

.experience-list {
    list-style: none;
}

.experience-list li {
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: flex-start;
    gap: 12px;
}

.experience-list li:last-child {
    border-bottom: none;
}

.experience-list li i {
    color: var(--accent);
    margin-top: 5px;
    flex-shrink: 0;
}

.experience-details {
    flex: 1;
}

.experience-details h4 {
    color: var(--primary);
    margin-bottom: 5px;
    font-size: 1.1rem;
}

.experience-details p {
    color: var(--gray);
    font-size: 0.95rem;
    margin: 0;
}

/* Proyectos */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
}

.project-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.project-content {
    padding: 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.project-card h4 {
    color: var(--secondary);
    margin-bottom: 12px;
    font-size: 1.2rem;
    padding-right: 85px;
    min-height: 60px;
    display: flex;
    align-items: center;
}

.project-card p {
    color: var(--gray);
    margin-bottom: 15px;
    flex-grow: 1;
}

.project-links {
    margin-top: auto;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.project-links a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 8px;
    background: rgba(47, 109, 77, 0.08);
    color: var(--secondary);
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s;
    text-decoration: none;
}

.project-links a:hover {
    background: var(--accent);
    color: white;
    text-decoration: none;
}

/* Ribbon para proyectos destacados */
.ribbon {
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(180deg, var(--gold), #b58f24);
    color: #222;
    font-weight: 700;
    padding: 6px 10px;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    font-size: 0.75rem;
    z-index: 2;
    max-width: 80px;
    text-align: center;
    line-height: 1.2;
}

.winner-border {
    border: 3px solid rgba(212, 175, 55, 0.2);
}

/* Categorías de proyectos */
.project-category {
    margin-bottom: 60px;
}

.cat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 12px;
}

.cat-header h3 {
    color: var(--secondary);
    font-size: 1.5rem;
    margin: 0;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--accent);
}

/* Modal para imágenes */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
}

.modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    max-height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
}

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

/* Footer */
footer {
    background: var(--primary);
    color: white;
    padding: 60px 0 30px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 40px;
    text-align: center;
}

.footer-info h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: white;
}

.footer-contact {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.contact-item i {
    width: 20px;
    color: var(--accent);
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 20px;
    justify-content: center;
}

.social-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transition: all 0.3s;
    text-decoration: none;
}

.social-links a:hover {
    background: var(--accent);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Responsive */
@media (max-width: 1024px) {
    .about-content,
    .experience-container,
    .footer-content {
        grid-template-columns: 1fr;
    }

    .projects-grid {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
}

@media (max-width: 768px) {
    .floating-button {
        bottom: 20px;
        right: 20px;
        padding: 12px 16px;
        font-size: 0.9rem;
    }

    header {
        padding: 60px 20px 40px;
    }

    header h1 {
        font-size: 2rem;
    }

    .section-title h2 {
        font-size: 1.6rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .project-card h4 {
        padding-right: 0;
        min-height: auto;
    }

    .ribbon {
        position: relative;
        top: 0;
        right: 0;
        margin-bottom: 10px;
        max-width: 100%;
    }

    .modal-content {
        width: 95%;
    }
}

@media (max-width: 480px) {
    header img {
        width: 120px;
        height: 120px;
    }

    header h1 {
        font-size: 1.7rem;
    }

    .section-title h2 {
        font-size: 1.4rem;
    }

    .about-text,
    .about-details,
    .experience-category {
        padding: 20px;
    }
}
