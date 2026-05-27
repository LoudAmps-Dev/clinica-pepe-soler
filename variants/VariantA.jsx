/* global React */

const C = {
  teal700: "#115e59", teal600: "#0f766e", teal500: "#14b8a6",
  teal300: "#5eead4", teal100: "#d2f1ea", teal50:  "#effaf7",
  ink: "#0b1f1d", muted: "#4f6b6a", rule: "#dfeae8", paper: "#ffffff", bg: "#f4f8f7",
};

// ─── Icons ────────────────────────────────────────────────────────
const Ico = ({ d, size = 20, sw = 1.6, fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}
       stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

const IcoPhone = (p) => <Ico {...p} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />;
// Official WhatsApp brand icon (speech bubble + phone handset) — Simple Icons / WhatsApp brand kit
const IcoWhats = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L0 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);
const IcoPin     = (p) => <Ico {...p} d={["M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z","M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"]} />;
const IcoClock   = (p) => <Ico {...p} d={["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z","M12 6v6l4 2"]} />;
const IcoMail    = (p) => <Ico {...p} d={["M4 6h16a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1Z","m3 7 9 7 9-7"]} />;
const IcoCheck   = (p) => <Ico {...p} d="M5 12.5 10 17.5 19.5 8" />;
const IcoArrow   = (p) => <Ico {...p} d={["M5 12h14","m13 5 7 7-7 7"]} />;
const IcoSpine   = (p) => <Ico {...p} d={["M12 3v18","M9 6h6","M8.5 9h7","M9 12h6","M8.5 15h7","M9 18h6"]} />;
const IcoHand    = (p) => <Ico {...p} d={["M9 11V5a2 2 0 1 1 4 0v6","M13 11V4a2 2 0 1 1 4 0v9","M17 11V6a2 2 0 1 1 4 0v9a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7v-1a2 2 0 1 1 4 0"]} />;
const IcoHeart   = (p) => <Ico {...p} d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.5 12 21 12 21Z" />;
const IcoRun     = (p) => <Ico {...p} d={["M13 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z","M5 19l3-5 2-2-2-3 3-2 3 2 2 4 4 1","M7 13l-3 1","M14 22l-1-5-3-2"]} />;

// Filled star (fixes the invisible stars bug — stroke=0 on outline SVG = nothing)
const IcoStarFilled = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="m12 2.5 2.95 6 6.6.96-4.78 4.65 1.13 6.57L12 17.6l-5.9 3.1 1.13-6.58-4.78-4.65 6.6-.96L12 2.5Z"/>
  </svg>
);

// ─── Scroll reveal hook ───────────────────────────────────────────
const useReveal = () => {
  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

// ─── Photo/placeholder component ──────────────────────────────────
const Ph = ({ src, alt, label, h = "100%", w = "100%", radius = 0, icon, style = {}, objectPosition = "center" }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const showImage = src && !failed;

  return (
    <div style={{
      position: "relative", width: w, height: h, borderRadius: radius, overflow: "hidden",
      background: "linear-gradient(135deg, #f8fafa, #f0f4f3 50%, #e8f0ee)", ...style,
    }}>
      {/* dot texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(12,74,74,.08) 1px, transparent 1px)",
        backgroundSize: "20px 20px", opacity: .5,
      }} />
      {/* icon */}
      {icon && !loaded && (
        <div style={{
          position: "absolute", inset: 0, display: "grid", placeItems: "center",
          color: C.teal600, opacity: .4,
        }}>{icon}</div>
      )}
      {/* label */}
      {!loaded && (
        <div style={{
          position: "absolute", left: 14, bottom: 12, zIndex: 2,
          background: "rgba(255,255,255,.80)", color: "#0c4a4a",
          fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
          fontWeight: 700, padding: "6px 11px", borderRadius: 999,
        }}>{label}</div>
      )}
      {showImage && (
        <img
          src={src} alt={alt || label}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition,
            opacity: loaded ? 1 : 0, transition: "opacity .3s ease",
          }}
        />
      )}
    </div>
  );
};

// ─── Brand mark ───────────────────────────────────────────────────
const BrandMark = ({ size = 40, dark = false }) => (
  <a href="#" style={{ display: "flex", alignItems: "center", gap: 12 }}>
    <img src="assets/logo-mark-circle.png" alt="Logo Clínica Pepe Soler"
         width={size} height={size}
         style={{ width: size, height: size, display: "block", flexShrink: 0, objectFit: "contain" }}
    />
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <div style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase",
        color: dark ? "rgba(255,255,255,.65)" : C.muted, fontWeight: 600 }}>Clínica</div>
      <div style={{ fontSize: 17, fontWeight: 400, fontFamily: "DM Serif Display, Georgia, serif",
        color: dark ? "#fff" : C.ink, letterSpacing: "-.005em", marginTop: 3 }}>Pepe Soler</div>
    </div>
  </a>
);

// ─── Navigation ───────────────────────────────────────────────────
const LINKS = [
  ["Tratamientos", "#tratamientos"],
  ["Sobre Pepe",   "#sobre"],
  ["Cómo llegar",  "#llegar"],
  ["Contacto",     "#contacto"],
];

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`cps-nav${scrolled ? " is-scrolled" : ""}`}>
        <BrandMark />

        <nav className="cps-nav__links" aria-label="Navegación principal">
          {LINKS.map(([l, h]) => (
            <a key={l} href={h} className="cps-nav__link">{l}</a>
          ))}
        </nav>

        <div className="cps-nav__actions">
          <a href="tel:+34968295860" className="cps-nav__phone" aria-label="Llamar al 968 29 58 60">
            <IcoPhone size={16} /> 968 29 58 60
          </a>
          <a href="https://wa.me/34645752082" target="_blank" rel="noopener noreferrer"
             className="cps-btn-wa" aria-label="Contactar por WhatsApp">
            <IcoWhats size={16} /><span>WhatsApp</span>
          </a>
          <button
            className={`cps-nav__burger${open ? " is-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`cps-drawer${open ? " is-open" : ""}`} onClick={close} aria-hidden={!open}>
        <div className="cps-drawer__panel" onClick={(e) => e.stopPropagation()}
             role="dialog" aria-modal="true" aria-label="Menú de navegación">
          <div className="cps-drawer__head">
            <BrandMark size={36} />
            <button className="cps-drawer__close" onClick={close} aria-label="Cerrar menú">✕</button>
          </div>
          <div className="cps-drawer__body">
            {LINKS.map(([l, h]) => (
              <a key={l} href={h} className="cps-drawer__link" onClick={close}>
                {l} <IcoArrow size={16} />
              </a>
            ))}
            <div className="cps-drawer__ctas">
              <a href="tel:+34968295860" className="cps-btn cps-btn-outline">
                <IcoPhone size={17} /> 968 29 58 60
              </a>
              <a href="https://wa.me/34645752082" target="_blank" rel="noopener noreferrer"
                 className="cps-btn cps-btn-green">
                <IcoWhats size={17} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────
const Hero = () => (
  <section className="cps-hero">
    <div className="cps-hero__grid">
      {/* Left: copy */}
      <div className="reveal">
        <div className="pill">
          <span className="pill__dot cps-pulse" />
          Murcia · desde 1998
        </div>

        <h1 className="cps-hero__h1">
          Te ayudamos a<br />moverte sin dolor.
        </h1>

        <p className="cps-hero__lead">
          Osteopatía y fisioterapia con un trato cercano y un tratamiento hecho a tu medida.
          Más de 25 años cuidando de pacientes en Murcia.
        </p>

        <div className="cps-hero__ctas">
          <a href="https://wa.me/34645752082" target="_blank" rel="noopener noreferrer"
             className="cps-btn cps-btn-green">
            <IcoWhats size={18} /> Escríbenos por WhatsApp
          </a>
          <a href="tel:+34968295860" className="cps-btn cps-btn-outline">
            <IcoPhone size={18} /> Llámanos · 968 29 58 60
          </a>
        </div>

        {/* Trust strip */}
        <div className="cps-hero__trust">
          <div style={{ display: "flex", gap: 3, color: C.teal500 }}>
            {[1,2,3,4,5].map((i) => <IcoStarFilled key={i} size={17} />)}
          </div>
          <div style={{ width: 1, height: 26, background: C.teal100, flexShrink: 0 }} />
          <div style={{ fontSize: 13.5, color: C.ink }}>
            <strong>Fisioterapeuta Col. 39</strong> · Osteópata D.O. (F.) <strong>MROE-226</strong>
          </div>
        </div>
      </div>

      {/* Right: image */}
      <div style={{ position: "relative" }} className="reveal">
        {/* Offset border frame */}
        <div className="cps-hero-deco" aria-hidden style={{
          position: "absolute", inset: 0,
          transform: "translate(16px, 16px)",
          borderRadius: 0, border: `2px solid ${C.teal200}`,
          zIndex: 0,
        }} />

        {/* Image frame */}
        <div className="cps-hero-img-wrap">
          <Ph
            src="assets/hero.jpg"
            alt="Sesión de fisioterapia en camilla"
            label="Foto · sesión en camilla"
            icon={<IcoSpine size={88} sw={1} />}
          />
          <div aria-hidden style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "linear-gradient(180deg, rgba(255,255,255,.07), transparent 18%, transparent 82%, rgba(6,47,44,.18))",
          }} />
          <div aria-hidden style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "linear-gradient(135deg, rgba(20,184,166,.08), rgba(17,94,89,.08))",
            mixBlendMode: "multiply",
          }} />
          <div aria-hidden style={{
            position: "absolute", bottom: 20, left: 20, zIndex: 2,
            fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase",
            color: "rgba(255,255,255,.85)", fontWeight: 500,
            textShadow: "0 1px 4px rgba(0,0,0,.4)",
          }}>Calle Pina Nº 6 · Murcia</div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Trust strip ──────────────────────────────────────────────────
const TrustStrip = () => (
  <section className="cps-trust">
    <div className="cps-trust__grid">
      {[
        { n: "+25",      l: "años de experiencia en Murcia" },
        { n: "Col. 39",  l: "colegiado oficial\nde fisioterapia" },
        { n: "MROE-226", l: "Registro de\nOsteópatas de España" },
        { n: "+18.000",  l: "sesiones\nrealizadas" },
      ].map((s) => (
        <div key={s.n} className="cps-trust__item">
          <div className="cps-trust__num">{s.n}</div>
          <div className="cps-trust__label">{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);

// ─── Treatments ───────────────────────────────────────────────────
const DISCIPLINES = [
  {
    num: "01",
    ico: <IcoSpine size={22} />,
    name: "Osteopatía",
    desc: "Tratamiento manual global del cuerpo. Trabaja la estructura, las vísceras, el cráneo y la esfera emocional para restablecer el equilibrio.",
    items: ["Pediátrica", "Estructural", "Craneal", "Visceral", "Somato-emocional", "Posturología"],
    dark: false,
  },
  {
    num: "02",
    ico: <IcoHand size={22} />,
    name: "Fisioterapia",
    desc: "Recuperación funcional de lesiones musculoesqueléticas, postoperatorios y patología crónica mediante técnicas activas y pasivas.",
    items: ["Electroterapia", "Mecanoterapia", "Cinesiterapia", "RPG", "Masoterapia", "Magnetoterapia"],
    dark: true,
  },
];

const Treatments = () => (
  <section
    id="tratamientos"
    className="cps-section cps-tx-section"
    style={{ background: C.bg, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
  >
    {/* Header — padded independently */}
    <div className="reveal cps-tx-header">
      <div className="cps-overline" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ display: "inline-block", width: 24, height: 1.5, background: "var(--c-teal-500)", flexShrink: 0, marginBottom: 1 }} />
        Tratamientos · 25 años de experiencia
      </div>
      <h2 className="cps-h2" style={{ maxWidth: 560 }}>
        Dos disciplinas.<br/>Todo lo que necesitas.
      </h2>
    </div>

    {/* Split panels — flush to section edges */}
    <div className="cps-tx-panels">
      {DISCIPLINES.map((d) => (
        <div key={d.num} className={`cps-tx-panel reveal${d.dark ? " cps-tx-panel--dk" : ""}`}>

          {/* Panel content */}
          <div className="cps-tx-panel__inner">
            <div className="cps-tx-top">
              <div className="cps-tx-badge">{d.ico}</div>
              <h3 className="cps-tx-name">{d.name}</h3>
            </div>

            <p className="cps-tx-desc">{d.desc}</p>

            <ul className="cps-tx-list">
              {d.items.map((t) => (
                <li key={t} className="cps-tx-item">{t}</li>
              ))}
            </ul>

            <a
              href="https://wa.me/34645752082"
              target="_blank" rel="noopener noreferrer"
              className="cps-tx-cta"
            >
              Solicitar cita <IcoArrow size={14} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ─── About ────────────────────────────────────────────────────────
const About = () => (
  <section id="sobre" className="cps-section" style={{ background: C.bg }}>
    <div className="cps-about__grid">
      {/* Photo col */}
      <div style={{ position: "relative" }} className="reveal">
        {/* Offset border frame */}
        <div className="cps-hero-deco" aria-hidden style={{
          position: "absolute", inset: 0,
          transform: "translate(-16px, -16px)",
          borderRadius: 0, border: `2px solid ${C.teal200}`,
          zIndex: 0,
        }} />

        <div className="cps-about-img-wrap">
          <Ph
            src="assets/pepe.jpg"
            alt="Retrato de Pepe Soler, fisioterapeuta y osteópata"
            label="Foto · Pepe Soler"
            icon={<IcoHand size={80} sw={1} />}
            objectPosition="center 20%"
          />
          <div aria-hidden style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "linear-gradient(180deg, rgba(255,255,255,.07), transparent 30%, transparent 65%, rgba(6,47,44,.52))",
          }} />
          <div aria-hidden style={{
            position: "absolute", bottom: 16, right: 16, zIndex: 2,
            display: "inline-flex", alignItems: "center", gap: 7,
            padding: "7px 12px",
            background: "rgba(6,47,44,.55)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,.12)",
            fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
            color: "rgba(255,255,255,.92)", fontWeight: 500,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--c-teal-300)", flexShrink: 0 }} />
            Pepe Soler · Desde 1998
          </div>
        </div>
      </div>

      {/* Text col */}
      <div className="reveal">
        <h2 className="cps-h2">Manos con oficio,<br/>escucha de verdad.</h2>
        <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.62, margin: "20px 0 0", maxWidth: 540 }}>
          Soy Pepe Soler, fisioterapeuta y osteópata. Llevo más de dos décadas tratando dolor
          de espalda, lesiones deportivas, dolor crónico y procesos psicosomáticos desde
          una mirada integradora: cuerpo y emoción.
        </p>

        <ul className="cps-creds-list">
          {[
            "Fisioterapeuta colegiado nº 39",
            "Osteópata D.O. (F.) — MROE-226",
            "Liberación somatoemocional",
            "Formación continua en EU Osteopatía",
            "Tratamiento de lesiones deportivas",
            "Patología neurológica y reumatológica",
          ].map((t) => (
            <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, color: C.ink }}>
              <span style={{
                width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                background: C.teal100, color: C.teal700,
                display: "grid", placeItems: "center", marginTop: 1,
              }}><IcoCheck size={13} sw={2.4} /></span>
              {t}
            </li>
          ))}
        </ul>

        <blockquote style={{ marginTop: 36, position: "relative" }}>
          <div aria-hidden style={{
            fontFamily: "DM Serif Display, Georgia, serif",
            fontSize: "clamp(5rem, 7vw, 7.5rem)",
            lineHeight: 0.75,
            color: C.teal100,
            marginBottom: -20,
            userSelect: "none",
            letterSpacing: "-.02em",
          }}>"</div>
          <p style={{
            fontFamily: "DM Serif Display, Georgia, serif",
            fontSize: "clamp(1.1rem, 1.4vw, 1.275rem)",
            lineHeight: 1.58,
            fontStyle: "italic",
            color: C.ink,
            margin: 0,
          }}>
            Cada cuerpo cuenta una historia. Mi trabajo es escucharla
            con las manos y devolverle el movimiento que le pertenece.
          </p>
          <footer style={{
            marginTop: 18,
            fontSize: 11,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: C.muted,
            fontStyle: "normal",
          }}>— Pepe Soler</footer>
        </blockquote>
      </div>
    </div>
  </section>
);


// ─── Find us ──────────────────────────────────────────────────────
const FindUs = () => (
  <section id="llegar" className="cps-section" style={{ background: C.paper }}>
    <div className="cps-findus__grid">
      {/* Info col */}
      <div className="reveal">
        <div className="cps-overline" style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <IcoPin size={12} />
          Murcia · Barrio Santa María de Gracia
        </div>
        <h2 className="cps-h2" style={{ maxWidth: 380 }}>
          En Santa María de Gracia, fácil de encontrar.
        </h2>
        <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.62, marginTop: 18, maxWidth: 400 }}>
          En el barrio de Santa María de Gracia (Murcia), junto a la Avenida Miguel de Cervantes
          y a un paso de Plaza Circular. Parking público cercano y bien conectada en bus.
        </p>

        <div style={{
          marginTop: 28, padding: "22px 24px",
          border: `1px solid ${C.rule}`, borderRadius: 16,
          background: C.bg, display: "flex", flexDirection: "column", gap: 16,
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10, background: C.teal600, color: "#fff",
              display: "grid", placeItems: "center", flexShrink: 0,
            }}><IcoPin size={20} /></div>
            <div>
              <div style={{ fontSize: 11.5, color: C.muted, letterSpacing: ".06em",
                textTransform: "uppercase", fontWeight: 600 }}>Dirección</div>
              <div style={{ fontSize: 16, color: C.ink, fontWeight: 600, marginTop: 2 }}>
                Calle Pina, Nº 6 — Bajo
              </div>
              <div style={{ fontSize: 14.5, color: C.muted }}>30009 Murcia</div>
            </div>
          </div>
          <div style={{ height: 1, background: C.rule }} />
          <a href="https://maps.google.com/?q=Clínica+Osteopatia+Fisioterapia+Pepe+Soler+Calle+Pina+6+Murcia"
             target="_blank" rel="noopener noreferrer"
             style={{ display: "inline-flex", alignItems: "center", gap: 10,
               color: C.teal700, fontWeight: 600, fontSize: 14.5,
               transition: "gap 150ms", }}>
            Cómo llegar en Google Maps <IcoArrow size={16} />
          </a>
        </div>
      </div>

      {/* Map */}
      <div className="cps-map-wrap reveal">
        <div className="cps-map-wrap__bar">
          <IcoPin size={11} aria-hidden />
          Clínica Pepe Soler · Calle Pina Nº 6, 30009 Murcia
        </div>
        <iframe
          title="Mapa Clínica Pepe Soler"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.2397172286696!2d-1.1442086239636888!3d37.99486869945106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63818cc5b596ab%3A0xfc914bc0c41afb47!2sCl%C3%ADnica%20de%20Osteopatia%20y%20Fisioterapia%20Pepe%20Soler!5e0!3m2!1ses!2ses!4v1779796072636!5m2!1ses!2ses"
          width="100%" height="100%"
          style={{ border: 0 }}
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

// ─── Hours + Contact ──────────────────────────────────────────────
const HoursContact = () => (
  <section id="contacto" className="cps-section" style={{ background: C.bg }}>
    <div className="cps-contact__grid">
      {/* Hours */}
      <div className="reveal" style={{
        background: C.paper, borderRadius: 22,
        padding: "36px 36px 32px", border: `1px solid ${C.rule}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 11, background: C.teal50, color: C.teal700,
            display: "grid", placeItems: "center", flexShrink: 0,
          }}><IcoClock size={20} /></div>
          <div>
            <div className="cps-overline" style={{ marginBottom: 4 }}>Horarios</div>
            <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-.01em" }}>
              Estamos aquí cuando nos necesitas
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${C.rule}` }}>
          {[
            ["Lunes",     "09:00 — 13:00 · 16:00 — 19:30", true],
            ["Martes",    "09:00 — 13:00 · 16:00 — 19:30", true],
            ["Miércoles", "09:00 — 13:00 · 16:00 — 19:30", true],
            ["Jueves",    "09:00 — 13:00 · 16:00 — 19:30", true],
            ["Viernes",   "09:00 — 13:00 · 16:00 — 19:30", true],
            ["Sábado",    "Cerrado", false],
            ["Domingo",   "Cerrado", false],
          ].map(([d, h, open]) => (
            <div key={d} className="cps-hour-row">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                  background: open ? C.teal500 : "#cbd5cf",
                }} />
                <span style={{ fontWeight: 600, color: C.ink }}>{d}</span>
              </div>
              <span style={{
                color: open ? C.muted : "#94a8a6",
                fontVariantNumeric: "tabular-nums",
                fontSize: 14,
              }}>{h}</span>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 22, fontSize: 13.5, color: C.muted, lineHeight: 1.55 }}>
          Atención sólo con cita previa. Si tienes una urgencia fuera de horario, escríbenos
          por WhatsApp y te respondemos lo antes posible.
        </p>
      </div>

      {/* Contact */}
      <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <h2 className="cps-h2" style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)" }}>
            Llámanos o escríbenos.
          </h2>
        </div>

        <a href="tel:+34968295860" className="cps-contact-link">
          <div style={{ width: 44, height: 44, borderRadius: 12, background: C.teal50,
            color: C.teal700, display: "grid", placeItems: "center", flexShrink: 0 }}>
            <IcoPhone size={20} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11.5, color: C.muted, letterSpacing: ".06em",
              textTransform: "uppercase", fontWeight: 600 }}>Llámanos</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: C.ink, marginTop: 2 }}>968 29 58 60</div>
          </div>
          <IcoArrow size={18} />
        </a>

        <a href="https://wa.me/34645752082" target="_blank" rel="noopener noreferrer"
           className="cps-contact-link">
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "#22c55e15",
            color: "#16a34a", display: "grid", placeItems: "center", flexShrink: 0 }}>
            <IcoWhats size={22} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11.5, color: C.muted, letterSpacing: ".06em",
              textTransform: "uppercase", fontWeight: 600 }}>WhatsApp</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: C.ink, marginTop: 2 }}>645 75 20 82</div>
          </div>
          <IcoArrow size={18} />
        </a>

        <a href="mailto:clinicapepesoler@hotmail.com" className="cps-contact-link">
          <div style={{ width: 44, height: 44, borderRadius: 12, background: C.teal50,
            color: C.teal700, display: "grid", placeItems: "center", flexShrink: 0 }}>
            <IcoMail size={20} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11.5, color: C.muted, letterSpacing: ".06em",
              textTransform: "uppercase", fontWeight: 600 }}>Email</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: C.ink, marginTop: 2,
              wordBreak: "break-all" }}>clinicapepesoler@hotmail.com</div>
          </div>
          <IcoArrow size={18} />
        </a>

        <a href="https://wa.me/34645752082" target="_blank" rel="noopener noreferrer"
           className="cps-btn cps-btn-green" style={{ marginTop: 6 }}>
          <IcoWhats size={18} /> Hablar por WhatsApp
        </a>
      </div>
    </div>
  </section>
);

// ─── Footer ───────────────────────────────────────────────────────
const Footer = () => (
  <footer className="cps-footer">
    <div>
      © 2026 Clínica de Osteopatía y Fisioterapia Pepe Soler ·{" "}
      Fisioterapeuta Col. 39 · Osteópata D.O. (F.) MROE-226
    </div>
    <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
      <a href="#">Aviso legal</a>
      <a href="#">Privacidad</a>
      <a href="#">Cookies</a>
    </div>
  </footer>
);

// ─── Root ─────────────────────────────────────────────────────────
const VariantA = () => {
  useReveal();
  return (
    <div className="cps-root">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Treatments />
        <About />
        <FindUs />
        <HoursContact />
      </main>
      <Footer />
    </div>
  );
};

window.VariantA = VariantA;
