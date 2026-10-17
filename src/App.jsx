import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Globe2, Menu, Search, X } from 'lucide-react';

const stories = [
  { type: 'ESTRATEGIA', title: 'Una marca que encuentra su propio camino', style: 'story-art art-path', tag: 'IDENTIDAD · 2026', symbol: 'LOGO' },
  { type: 'IDENTIDAD', title: 'Ideas simples. Marcas imposibles de ignorar.', style: 'story-art art-form', tag: 'BRANDING · 2026', symbol: 'FORMA' },
  { type: 'DIGITAL', title: 'Del primer clic a una gran conexión', style: 'story-art art-digital', tag: 'EXPERIENCIA · 2026', symbol: '01—∞' },
  { type: 'PUNTO DE VISTA', title: 'El futuro se diseña en equipo', style: 'story-art art-note', tag: 'ESTUDIO · 2026', symbol: '✳' },
];

function Logo({ compact = false, hoverPreview = false }) {
  return <a className={`brand ${compact ? 'brand-compact' : ''}`} href="#inicio" aria-label="Volver al inicio">
    <span className="brand-mark"><img src="/brand-logo.png" alt="" /></span>
    {!compact && <span className="brand-word">ESTUDIO<small>CREATIVO</small></span>}
    {hoverPreview && <span className="brand-preview" aria-hidden="true"><img className="brand-preview-icon" src="/quanti-icon.png" alt="" /><span className="brand-preview-word">{'Quanti'.split('').map((letter, index) => <span key={`${letter}-${index}`}>{letter}</span>)}</span></span>}
  </a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const closeMenu = () => setMenuOpen(false);
  const searchResults = stories.filter((story) => `${story.type} ${story.title} ${story.tag}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <>
    <header className="topbar">
      <Logo hoverPreview />
      <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'navigation is-open' : 'navigation'}>
        <a href="#servicios" onClick={closeMenu}>Lo que hacemos <span className="nav-chevron">⌄</span></a>
        <a href="#ideas" onClick={closeMenu}>Lo que pensamos</a>
        <a href="#estudio" onClick={closeMenu}>Quiénes somos <span className="nav-chevron">⌄</span></a>
        <a href="#contacto" onClick={closeMenu}>Contacto <span className="nav-chevron">↗</span></a>
      </nav>
      <div className="top-actions"><button className="icon-link search-trigger" aria-label="Abrir búsqueda" onClick={() => setSearchOpen(true)}><Search size={18} strokeWidth={2.2} /></button><span className="locale"><Globe2 size={15} /> Argentina</span></div>
    </header>
    {searchOpen && <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Buscar en el sitio" onMouseDown={(event) => { if (event.target === event.currentTarget) setSearchOpen(false); }}><div className="search-panel"><div className="search-heading"><span className="eyebrow">BUSCÁ UNA IDEA</span><button className="search-close" aria-label="Cerrar búsqueda" onClick={() => setSearchOpen(false)}><X /></button></div><label className="search-input-wrap"><Search size={20} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === 'Escape') setSearchOpen(false); }} placeholder="Estrategia, identidad, digital…" /></label><div className="search-results" aria-live="polite">{searchResults.length ? searchResults.map((story, index) => <a key={story.title} href={`#proyecto-${stories.indexOf(story) + 1}`} onClick={() => setSearchOpen(false)}><span>0{stories.indexOf(story) + 1} / {story.type}</span><b>{story.title}</b><ArrowUpRight size={17} /></a>) : <p>No encontramos resultados. Probá con otra palabra.</p>}</div></div></div>}
    <main id="inicio">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-orbit" aria-hidden="true"><img src="/brand-logo.png" alt="" /></div>
        <div className="hero-grid">
          <div className="hero-title-wrap"><p className="eyebrow"><span className="eyebrow-dot" />ESTUDIO CREATIVO INDEPENDIENTE</p><h1 id="hero-heading">Juntos,<br /><span>imaginamos</span><br />lo que sigue.</h1></div>
          <div className="hero-copy"><span className="orange-rule" /><p>Las marcas que dejan huella empiezan con una buena pregunta. Nosotros te acompañamos a encontrar las respuestas y transformarlas en algo real.</p><a className="text-link" href="#servicios">Descubrí lo que hacemos <span className="link-box"><ArrowRight size={18} /></span></a></div>
        </div>
        <div className="hero-controls"><span className="hero-counter"><i /> 01 <span>/</span> 03</span><a href="#ideas" className="scroll-cue">BAJÁ PARA EXPLORAR <ArrowDown size={13} /></a><span className="hero-coordinates">34°36' S&nbsp;&nbsp; 58°22' O</span></div>
      </section>
      <section className="stories" id="ideas" aria-label="Ideas y proyectos">
        {stories.map((story, i) => <a href="#contacto" className="story-card" id={`proyecto-${i + 1}`} key={story.title}>
          <div className={story.style}><span className="art-kicker">{story.type}</span>{story.symbol === 'LOGO' ? <img className="art-logo" src="/brand-logo.png" alt="" /> : <span className="art-symbol">{story.symbol}</span>}<span className="art-caption">{story.tag}</span><span className="card-arrow"><ArrowUpRight size={19} /></span></div>
          <div className="story-title"><span className="story-index">0{i + 1}</span><h2>{story.title}</h2></div>
        </a>)}
      </section>
      <section className="intro section-shell" id="estudio"><div className="intro-label"><span className="orange-rule" /><span>UN ESTUDIO, MUCHAS POSIBILIDADES</span></div><div><h2>Lo hacemos<br />con <em>intención.</em></h2><p>Somos un estudio creativo que cruza estrategia, diseño y tecnología para ayudar a las marcas a avanzar. Pensamos cada detalle. Creamos cada oportunidad en equipo.</p><a className="text-link" href="#servicios">Conocé el estudio <span className="link-box"><ArrowRight size={18} /></span></a></div></section>
      <section className="services section-shell" id="servicios"><div className="services-head"><span className="eyebrow">LO QUE HACEMOS</span><h2>Una idea, de principio a fin.</h2></div><div className="service-list"><a href="#contacto"><span>01</span><b>Estrategia & marca</b><small>Una dirección clara para crecer.</small><ArrowUpRight /></a><a href="#contacto"><span>02</span><b>Identidad & diseño</b><small>Una marca con algo propio para decir.</small><ArrowUpRight /></a><a href="#contacto"><span>03</span><b>Experiencias digitales</b><small>Ideas que también se viven online.</small><ArrowUpRight /></a></div></section>
      <section className="contact section-shell" id="contacto"><div><span className="eyebrow">¿LO PENSAMOS JUNTOS?</span><h2>Tu próxima idea<br />empieza acá.</h2></div><a className="contact-button" href="mailto:hola@tumarca.com">HABLEMOS <ArrowUpRight size={18} /></a></section>
    </main>
    <footer className="footer"><Logo /><span>© 2026 TU MARCA · HECHO CON INTENCIÓN</span><a href="mailto:hola@tumarca.com">HOLA@TUMARCA.COM ↗</a></footer>
  </>;
}

export default App;


