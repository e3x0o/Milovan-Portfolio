import { useEffect, useState } from 'react';
import './App.css';

const CONTACT = {
  email: '01kdcl01@gmail.com',
  github: 'https://github.com/e3x0o',
  linkedin: 'https://www.linkedin.com/in/milovan-caniullan-663069400'
};

// Archivo del currículum: guárdalo en la carpeta public/cv/ con este nombre
const CV_FILE = '/cv/CV-Milovan-Caniullan.pdf';

// Título técnico: archivo en public/docs/ (copia con el RUN tapado)
const DOC_FILE = '/docs/Titulo-Milovan-Caniullan.pdf';

// Repositorio del proyecto Kira IA
const KIRA_REPO = 'https://github.com/e3x0o/Kira---IA';

const sectionIds = [
  'inicio',
  'sobre-mi',
  'formacion',
  'experiencia',
  'habilidades',
  'membresias',
  'proyectos',
  'curriculum',
  'contacto'
];

const translations = {
  es: {
    nav: [
      'Inicio',
      'Sobre mí',
      'Formación',
      'Experiencia',
      'Habilidades',
      'Membresías',
      'Proyectos',
      'Currículum',
      'Contacto'
    ],
    menuLabel: 'Abrir menú de navegación',
    talk: 'Hablemos',
    welcome: 'Bienvenido a mi portafolio',
    greeting: 'Hola, soy',
    role: 'Desarrollador en formación.',
    description:
      'Me apasiona la tecnología, la programación y crear soluciones que conviertan ideas en proyectos reales. Este es mi espacio para compartir lo que aprendo y construyo.',
    projectsButton: 'Ver proyectos',
    aboutButton: 'Conóceme',
    heroTags: ['PROGRAMACIÓN', 'TECNOLOGÍA', 'INNOVACIÓN'],
    photoAlt: 'Fotografía de Milovan',
    codeRole: 'Desarrollador',
    passion: 'Tecnología',
    learning: 'Cada día',
    codeMessage: 'Construyendo algo genial...',
    codeStatus: 'Siempre aprendiendo, siempre construyendo.',
    aboutLabel: '01 / SOBRE MÍ',
    aboutTitle: 'Construyendo mi camino en la tecnología.',
    aboutText: [
      'Soy una persona responsable, proactiva y comprometida con el aprendizaje continuo, con un gran interés por la informática y la tecnología.',
      'Me caracterizo por mi capacidad de adaptación, pensamiento lógico y disposición para enfrentar nuevos desafíos. Valoro el trabajo en equipo, la comunicación efectiva y la resolución de problemas.',
      'Mi objetivo es seguir desarrollándome profesionalmente en el área informática, fortalecer mis habilidades técnicas y adquirir experiencia participando en proyectos que permitan crear soluciones tecnológicas útiles e innovadoras.'
    ],
    formationLabel: '02 / FORMACIÓN ACADÉMICA',
    degree: 'Ingeniería Civil en Informática y Telecomunicaciones',
    university: 'Universidad Finis Terrae',
    student: 'Estudiante universitario',
    experienceLabel: '03 / EXPERIENCIA',
    experienceTitle: 'Dónde he trabajado.',
    current: 'Actualidad',
    docTitle: 'Título de Técnico de Nivel Medio en Administración',
    docSub: 'Mención Recursos Humanos',
    viewDoc: 'Ver título',
    downloadDoc: 'Descargar',
    experiences: [
      {
        badge: 'BB',
        role: 'Organizador administrativo',
        org: 'BitBastion',
        period: 'oct. de 2026 hasta la actualidad · 2 meses',
        location: 'Área metropolitana de Santiago',
        skill: 'Organización administrativa',
        current: true
      },
      {
        badge: 'MP',
        role: 'Asistente Administrativo',
        org: 'Municipalidad de Peñaflor · Contrato de formación',
        period: 'dic. de 2021 · 1 mes',
        location: 'Peñaflor, Región Metropolitana de Santiago, Chile · Presencial',
        description:
          'Encargado de la administración y gestión del área de permisos de circulación vehicular del lado administrativo.',
        skill: 'Práctica de enseñanza media',
        doc: true
      }
    ],
    skillsLabel: '04 / HABILIDADES TÉCNICAS',
    skillsTitle: 'Tecnologías y herramientas',
    skillsDescription:
      'Herramientas que utilizo y con las que continúo desarrollando mis conocimientos en informática.',
    programming: 'Programación',
    databases: 'Bases de datos',
    versionControl: 'Control de versiones',
    collaboration: 'Repositorios y colaboración',
    membershipsLabel: '05 / MEMBRESÍAS PROFESIONALES',
    membershipsTitle: 'Participación en comunidades tecnológicas',
    studentMember: 'Miembro estudiante de IEEE',
    societyMember: 'Miembro de la sociedad especializada en comunicaciones',
    membership: 'Membresía estudiantil · 2026',
    projectsLabel: '06 / PROYECTOS',
    projectsTitle: 'Lo que estoy construyendo.',
    projectsText: 'Proyectos y trabajos que he desarrollado.',
    soon: 'Próximamente',
    soonText: 'Estoy preparando esta sección con mis primeros proyectos.',
    viewRepo: 'Ver en GitHub',
    projects: [
      {
        badge: 'KI',
        name: 'Kira IA',
        subtitle: 'Asistente de videojuegos con RAG',
        description:
          'Asistente que responde en español sobre reseñas y fichas técnicas de PC, PlayStation, Xbox, Switch y móviles. Combina búsqueda semántica y BM25, entiende nombres de juegos mal escritos, consulta precios en vivo y enmascara los datos personales antes de enviarlos al modelo. Incluye registro con verificación por correo, login con JWT, despliegue con Docker y 70 pruebas automáticas.',
        tags: ['Python', 'Flask', 'ChromaDB', 'Gemini', 'MySQL', 'Docker'],
        repo: KIRA_REPO
      }
    ],
    cvLabel: '07 / CURRÍCULUM',
    cvTitle: 'Conoce mi trayectoria completa.',
    cvText: 'Descarga mi currículum en formato PDF con mi formación, experiencia y habilidades.',
    cvButton: 'Descargar currículum',
    cvFormat: 'Formato PDF',
    contactLabel: '08 / CONTACTO',
    contactTitle: '¿Creamos algo interesante?',
    contactText: 'Estoy abierto a aprender, colaborar y desarrollar nuevas ideas.',
    emailLabel: 'Correo',
    footer: 'Diseñado y desarrollado por Milovan.'
  },
  en: {
    nav: [
      'Home',
      'About me',
      'Education',
      'Experience',
      'Skills',
      'Memberships',
      'Projects',
      'Resume',
      'Contact'
    ],
    menuLabel: 'Open navigation menu',
    talk: "Let's talk",
    welcome: 'Welcome to my portfolio',
    greeting: "Hi, I'm",
    role: 'Developer in training.',
    description:
      'I am passionate about technology, programming, and creating solutions that turn ideas into real projects. This is my space to share what I learn and build.',
    projectsButton: 'View projects',
    aboutButton: 'About me',
    heroTags: ['PROGRAMMING', 'TECHNOLOGY', 'INNOVATION'],
    photoAlt: 'Photo of Milovan',
    codeRole: 'Developer',
    passion: 'Technology',
    learning: 'Every day',
    codeMessage: 'Building something great...',
    codeStatus: 'Always learning, always building.',
    aboutLabel: '01 / ABOUT ME',
    aboutTitle: 'Building my path in technology.',
    aboutText: [
      'I am a responsible, proactive person committed to continuous learning, with a strong interest in computing and technology.',
      'I stand out for my adaptability, logical thinking, and willingness to take on new challenges. I value teamwork, effective communication, and problem solving.',
      'My goal is to keep growing professionally in the IT field, strengthen my technical skills, and gain experience by taking part in projects that create useful and innovative technology solutions.'
    ],
    formationLabel: '02 / EDUCATION',
    degree: 'Civil Engineering in Computer Science and Telecommunications',
    university: 'Universidad Finis Terrae',
    student: 'University student',
    experienceLabel: '03 / EXPERIENCE',
    experienceTitle: 'Where I have worked.',
    current: 'Current',
    docTitle: 'Mid-level Technician Diploma in Administration',
    docSub: 'Human Resources specialization',
    viewDoc: 'View diploma',
    downloadDoc: 'Download',
    experiences: [
      {
        badge: 'BB',
        role: 'Administrative organizer',
        org: 'BitBastion',
        period: 'Oct 2026 to present · 2 months',
        location: 'Greater Santiago area',
        skill: 'Administrative organization',
        current: true
      },
      {
        badge: 'MP',
        role: 'Administrative assistant',
        org: 'Municipalidad de Peñaflor · Training contract',
        period: 'Dec 2021 · 1 month',
        location: 'Peñaflor, Santiago Metropolitan Region, Chile · On site',
        description:
          'In charge of the administration and management of the vehicle circulation permits area, on the administrative side.',
        skill: 'High school internship',
        doc: true
      }
    ],
    skillsLabel: '04 / TECHNICAL SKILLS',
    skillsTitle: 'Technologies and tools',
    skillsDescription: 'Tools I use while continuing to develop my knowledge in computing.',
    programming: 'Programming',
    databases: 'Databases',
    versionControl: 'Version control',
    collaboration: 'Repositories and collaboration',
    membershipsLabel: '05 / PROFESSIONAL MEMBERSHIPS',
    membershipsTitle: 'Participation in technology communities',
    studentMember: 'IEEE student member',
    societyMember: 'Member of the communications-focused society',
    membership: 'Student membership · 2026',
    projectsLabel: '06 / PROJECTS',
    projectsTitle: 'What I am building.',
    projectsText: 'Projects and work I have developed.',
    soon: 'Coming soon',
    soonText: 'I am preparing this section with my first projects.',
    viewRepo: 'View on GitHub',
    projects: [
      {
        badge: 'KI',
        name: 'Kira IA',
        subtitle: 'RAG video game assistant',
        description:
          'Assistant that answers in Spanish about reviews and technical sheets for PC, PlayStation, Xbox, Switch, and mobile games. It combines semantic search and BM25, understands misspelled game titles, checks live prices, and masks personal data before sending it to the model. It includes email-verified sign-up, JWT login, Docker deployment, and 70 automated tests.',
        tags: ['Python', 'Flask', 'ChromaDB', 'Gemini', 'MySQL', 'Docker'],
        repo: KIRA_REPO
      }
    ],
    cvLabel: '07 / RESUME',
    cvTitle: 'Get to know my full background.',
    cvText: 'Download my resume as a PDF with my education, experience, and skills.',
    cvButton: 'Download resume',
    cvFormat: 'PDF format',
    contactLabel: '08 / CONTACT',
    contactTitle: 'Shall we create something interesting?',
    contactText: 'I am open to learning, collaborating, and developing new ideas.',
    emailLabel: 'Email',
    footer: 'Designed and developed by Milovan.'
  }
};

const skills = [
  { tag: 'PY', name: 'Python', key: 'programming' },
  { tag: 'SQL', name: 'SQL', key: 'databases' },
  { tag: 'GIT', name: 'Git', key: 'versionControl' },
  { tag: 'GH', name: 'GitHub', key: 'collaboration' }
];

function App() {
  const [language, setLanguage] = useState('es');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('inicio');
  const [photoOk, setPhotoOk] = useState(true);

  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Navbar con fondo al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Resalta la sección activa en el menú
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Animación de entrada al hacer scroll
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Bloquea el scroll de fondo con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio">
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <a href="#inicio" className="logo" onClick={closeMenu}>
          <span className="logo-symbol">&lt;/&gt;</span>
          <span className="logo-full">Milovan Danilo Caniullan Lefiñir</span>
          <span className="logo-mid">Milovan Caniullan</span>
          <span className="logo-short">Milovan</span>
          <span className="logo-dot">.</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {t.nav.map((item, index) => (
            <a
              key={sectionIds[index]}
              href={`#${sectionIds[index]}`}
              className={activeId === sectionIds[index] ? 'link-active' : ''}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <div className="language-switch" role="group" aria-label="Language">
            <button
              className={language === 'es' ? 'language-active' : ''}
              onClick={() => setLanguage('es')}
            >
              ES
            </button>
            <span aria-hidden="true">|</span>
            <button
              className={language === 'en' ? 'language-active' : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>

          <a href="#contacto" className="nav-button">
            {t.talk}
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.menuLabel}
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-content text-box">
          <div className="hero-top">
            <p className="welcome">
              <span className="status-dot"></span>
              {t.welcome}
            </p>
            <span className="alias-box">e3x0o</span>
          </div>

          <h1>
            {t.greeting} <span>Milovan Danilo Caniullan Lefiñir.</span>
            <br />
            {t.role}
          </h1>

          <p className="hero-description">{t.description}</p>

          <div className="hero-buttons">
            <a href="#proyectos" className="primary-button">
              {t.projectsButton} <span>↗</span>
            </a>

            <a href="#sobre-mi" className="secondary-button">
              {t.aboutButton}
            </a>
          </div>

          <div className="hero-footer">
            {t.heroTags.map((tag, i) => (
              <span key={tag} className={i > 0 ? 'tag-with-sep' : ''}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>

          <div className="profile-frame">
            {photoOk ? (
              <img
                src="/images/perfil.jpg"
                alt={t.photoAlt}
                className="profile-image"
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <div className="profile-fallback" aria-hidden="true">
                MC
              </div>
            )}
          </div>

          <div className="code-card">
            <div className="card-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>developer.js</p>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span> developer = {'{'}
              </p>
              <p className="indent">
                name: <span className="code-green">'Milovan Danilo Caniullan Lefiñir'</span>,
              </p>
              <p className="indent">
                alias: <span className="code-green">'e3x0o'</span>,
              </p>
              <p className="indent">
                role: <span className="code-green">'{t.codeRole}'</span>,
              </p>
              <p className="indent">
                passion: <span className="code-green">'{t.passion}'</span>,
              </p>
              <p className="indent">
                learning: <span className="code-green">'{t.learning}'</span>
              </p>
              <p>{'};'}</p>
              <br />
              <p>
                <span className="code-purple">console</span>.log(
              </p>
              <p className="indent code-blue">'{t.codeMessage}'</p>
              <p>);</p>
            </div>

            <div className="card-status">
              <span className="status-dot"></span>
              {t.codeStatus}
            </div>
          </div>

          <div className="floating-symbol symbol-one">{'{ }'}</div>
          <div className="floating-symbol symbol-two">&lt;/&gt;</div>
        </div>
      </section>

      <section className="section about-section" id="sobre-mi">
        <div className="section-inner reveal">
          <div className="text-box">
            <p className="section-label">{t.aboutLabel}</p>
            <h2>{t.aboutTitle}</h2>
            {t.aboutText.map((paragraph) => (
              <p className="section-description" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section formation-section" id="formacion">
        <div className="section-inner reveal">
          <div className="text-box text-box-sm">
            <p className="section-label">{t.formationLabel}</p>
          </div>

          <div className="info-card">
            <span className="info-icon" aria-hidden="true">
              🎓
            </span>
            <div>
              <h3>{t.degree}</h3>
              <p>{t.university}</p>
              <span className="info-detail">{t.student}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experiencia">
        <div className="section-inner reveal">
          <div className="text-box">
            <p className="section-label">{t.experienceLabel}</p>
            <h2>{t.experienceTitle}</h2>
          </div>

          <div className="experience-list">
            {t.experiences.map((job) => (
              <article className="experience-card" key={job.role + job.org}>
                <div className="experience-badge" aria-hidden="true">
                  {job.badge}
                </div>

                <div className="experience-body">
                  <div className="experience-top">
                    <h3>{job.role}</h3>
                    {job.current && <span className="current-tag">{t.current}</span>}
                  </div>
                  <p className="experience-org">{job.org}</p>
                  <p className="experience-meta">{job.period}</p>
                  <p className="experience-meta">{job.location}</p>

                  {job.description && (
                    <p className="experience-description">{job.description}</p>
                  )}
                  {job.skill && <span className="info-detail">{job.skill}</span>}
                </div>

                {job.doc && (
                  <div className="experience-doc">
                    <div className="doc-head">
                      <span className="doc-icon" aria-hidden="true">PDF</span>
                      <div className="doc-text">
                        <p className="doc-title">{t.docTitle}</p>
                        <p className="doc-sub">{t.docSub}</p>
                      </div>
                    </div>
                    <div className="doc-actions">
                      <a href={DOC_FILE} target="_blank" rel="noreferrer" className="secondary-button">{t.viewDoc}</a>
                      <a href={DOC_FILE} download className="primary-button">{t.downloadDoc} <span>↓</span></a>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-section" id="habilidades">
        <div className="section-inner reveal">
          <div className="text-box">
            <p className="section-label">{t.skillsLabel}</p>
            <h2>{t.skillsTitle}</h2>
            <p className="section-description">{t.skillsDescription}</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <span>{skill.tag}</span>
                <h3>{skill.name}</h3>
                <p>{t[skill.key]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section memberships-section" id="membresias">
        <div className="section-inner reveal">
          <div className="text-box">
            <p className="section-label">{t.membershipsLabel}</p>
            <h2>{t.membershipsTitle}</h2>
          </div>

          <div className="membership-list">
            <div className="membership-card">
              <div className="membership-symbol">IEEE</div>
              <div>
                <h3>IEEE Student Member</h3>
                <p>{t.studentMember}</p>
                <span className="info-detail">{t.membership}</span>
              </div>
            </div>

            <div className="membership-card">
              <div className="membership-symbol">COMSOC</div>
              <div>
                <h3>IEEE Communications Society</h3>
                <p>{t.societyMember}</p>
                <span className="info-detail">2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="proyectos">
        <div className="section-inner reveal">
          <div className="text-box">
            <p className="section-label">{t.projectsLabel}</p>
            <h2>{t.projectsTitle}</h2>
            <p className="section-description">{t.projectsText}</p>
          </div>

          {t.projects.length > 0 ? (
            <div className="projects-list">
              {t.projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-badge" aria-hidden="true">
                    {project.badge}
                  </div>

                  <div className="project-body">
                    <h3>{project.name}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-description">{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="secondary-button"
                      >
                        {t.viewRepo} <span>↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="project-placeholder">
              <span className="project-icon" aria-hidden="true">
                {'{ }'}
              </span>
              <h3>{t.soon}</h3>
              <p>{t.soonText}</p>
            </div>
          )}
        </div>
      </section>

      <section className="section cv-section" id="curriculum">
        <div className="section-inner reveal">
          <div className="text-box">
            <p className="section-label">{t.cvLabel}</p>
            <h2>{t.cvTitle}</h2>
            <p className="section-description">{t.cvText}</p>
          </div>

          <div className="cv-card">
            <span className="cv-icon" aria-hidden="true">
              PDF
            </span>
            <div className="cv-info">
              <h3>Milovan Caniullan</h3>
              <p>{t.cvFormat}</p>
            </div>
            <a href={CV_FILE} download className="primary-button">
              {t.cvButton} <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contacto">
        <div className="section-inner reveal">
          <p className="section-label">{t.contactLabel}</p>
          <h2>{t.contactTitle}</h2>
          <p className="section-description">{t.contactText}</p>

          <div className="contact-links">
            <a href={`mailto:${CONTACT.email}`} className="primary-button">
              {t.emailLabel} <span>↗</span>
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="secondary-button">
              GitHub · e3x0o
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="secondary-button">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-box text-box">
          <p>{t.footer}</p>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}

export default App;