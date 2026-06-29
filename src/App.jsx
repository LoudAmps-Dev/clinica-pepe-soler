import React from "react";

const C = {
  teal700: "#115e59", teal600: "#0f766e", teal500: "#14b8a6",
  teal300: "#5eead4", teal100: "#d2f1ea", teal50:  "#effaf7",
  ink: "#0b1f1d", muted: "#4f6b6a", rule: "#dfeae8", paper: "#ffffff", bg: "#f4f8f7",
};
const WHATSAPP_PHONE = "34645752082";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;
const INSTAGRAM_URL = "https://www.instagram.com/osteopatiapsoler/";

const CONSENT_KEY = "cps_cookie_consent";

const loadGoogleFonts = () => {
  if (document.querySelector("link[data-gfonts]")) return;
  const hrefs = ["https://fonts.googleapis.com", "https://fonts.gstatic.com"];
  hrefs.forEach((href, i) => {
    const pre = document.createElement("link");
    pre.rel = "preconnect";
    pre.href = href;
    if (i === 1) pre.crossOrigin = "anonymous";
    document.head.appendChild(pre);
  });
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.dataset.gfonts = "1";
  link.href =
    "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap";
  document.head.appendChild(link);
};

const lockBody = () => {
  const n = parseInt(document.body.dataset.scrollLock || "0", 10);
  document.body.dataset.scrollLock = n + 1;
  if (n === 0) document.body.style.overflow = "hidden";
};
const unlockBody = () => {
  const n = Math.max(0, parseInt(document.body.dataset.scrollLock || "0", 10) - 1);
  document.body.dataset.scrollLock = n;
  if (n === 0) document.body.style.overflow = "";
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
const IcoInstagram = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const IcoPin     = (p) => <Ico {...p} d={["M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z","M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"]} />;
const IcoClock   = (p) => <Ico {...p} d={["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z","M12 6v6l4 2"]} />;
const IcoMail    = (p) => <Ico {...p} d={["M4 6h16a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1Z","m3 7 9 7 9-7"]} />;
const IcoArrow   = (p) => <Ico {...p} d={["M5 12h14","m13 5 7 7-7 7"]} />;
const IcoSpine   = (p) => <Ico {...p} d={["M12 3v18","M9 6h6","M8.5 9h7","M9 12h6","M8.5 15h7","M9 18h6"]} />;
const IcoHand    = (p) => <Ico {...p} d={["M9 11V5a2 2 0 1 1 4 0v6","M13 11V4a2 2 0 1 1 4 0v9","M17 11V6a2 2 0 1 1 4 0v9a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7v-1a2 2 0 1 1 4 0"]} />;
const IcoHeart   = (p) => <Ico {...p} d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.5 12 21 12 21Z" />;

// ─── Active nav section hook ──────────────────────────────────────
const useActiveSection = () => {
  const [active, setActive] = React.useState("pepe");
  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const ids = ["pepe", "equipo", "tratamientos", "cita"];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-54px 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return active;
};

// ─── Scroll reveal hook ───────────────────────────────────────────
const useReveal = () => {
  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); }
      }),
      { threshold: 0.01, rootMargin: "0px 0px 140px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener?.("change", update);
    return () => query.removeEventListener?.("change", update);
  }, []);

  return reduced;
};

const usePageProgress = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
};

const useAnimatedNumber = (value, { duration = 950 } = {}) => {
  const ref = React.useRef(null);
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = React.useState(reduced ? value : 0);

  React.useEffect(() => {
    if (reduced) {
      setCount(value);
      return undefined;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setCount(value);
      return undefined;
    }

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.45 });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, reduced, value]);

  return [ref, count];
};

const useSliderDots = (count) => {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(0);

  const update = React.useCallback(() => {
    const rail = ref.current;
    if (!rail) return;

    const items = Array.from(rail.children);
    const center = rail.scrollLeft + rail.clientWidth / 2;
    const next = items.reduce((best, item, index) => {
      const itemCenter = item.offsetLeft + item.clientWidth / 2;
      const distance = Math.abs(itemCenter - center);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Infinity }).index;

    setActive(next);
  }, []);

  React.useEffect(() => {
    const rail = ref.current;
    if (!rail) return undefined;

    update();
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      rail.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const goTo = React.useCallback((index) => {
    const rail = ref.current;
    const item = rail?.children[index];
    if (!rail || !item) return;

    rail.scrollTo({
      left: item.clientWidth >= rail.clientWidth * 0.9 ? item.offsetLeft : item.offsetLeft - 16,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, []);

  return { ref, active: Math.min(active, count - 1), goTo };
};

const AnimatedStat = ({ prefix = "", value, suffix = "", label }) => {
  const [ref, count] = useAnimatedNumber(value);

  return (
    <div className="cps-landing-stat" ref={ref}>
      <strong>{prefix}{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
};

const SliderDots = ({ count, active, onSelect, label }) => (
  <div className="cps-slide-dots" aria-label={label}>
    {Array.from({ length: count }, (_, i) => (
      <button
        key={i}
        type="button"
        className={i === active ? "is-active" : ""}
        onClick={() => onSelect(i)}
        aria-label={`${label}: elemento ${i + 1}`}
        aria-current={i === active ? "true" : undefined}
      />
    ))}
  </div>
);

// ─── Photo/placeholder component ──────────────────────────────────
const Ph = ({ src, alt, label, h = "100%", w = "100%", radius = 0, icon, style = {}, objectPosition = "center" }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [srcIndex, setSrcIndex] = React.useState(0);
  const sources = Array.isArray(src) ? src : [src];
  const currentSrc = sources[srcIndex];
  const showImage = currentSrc && srcIndex < sources.length;

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
          src={currentSrc} alt={alt || label}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setLoaded(false);
            setSrcIndex((i) => i + 1);
          }}
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
const BrandMark = ({ size = 40, dark = false, onClick }) => (
  <a href="#" onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 12 }}>
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

// ─── Clinic header ────────────────────────────────────────────────
const ClinicHeader = () => (
  <header className="cps-clinic-header">
    <a href="#" className="cps-clinic-header__brand" aria-label="Clínica Pepe Soler">
      <img
        src="assets/logo-mark-circle.png"
        alt="Logo Clínica Pepe Soler"
        className="cps-clinic-header__logo"
        width="58"
        height="58"
        style={{ width: 58, height: 58, display: "block", flexShrink: 0, objectFit: "contain" }}
      />
      <div className="cps-clinic-header__copy">
        <div className="cps-clinic-header__name">Clínica Pepe Soler</div>
        <div className="cps-clinic-header__sub">Consulta sanitaria de Osteopatía y Fisioterapia</div>
      </div>
    </a>
    <div className="cps-clinic-header__meta" aria-label="Información de la clínica">
      <span className="cps-clinic-header__address">Calle Pina Nº 6, Bajo · Murcia</span>
      <a href="tel:+34968295860" className="cps-clinic-header__phone">968 29 58 60</a>
      <a href="mailto:clinicapepesoler@hotmail.com" className="cps-clinic-header__email">clinicapepesoler@hotmail.com</a>
    </div>
  </header>
);

// ─── Navigation ───────────────────────────────────────────────────
const LINKS = [
  ["Pepe Soler", "#pepe"],
  ["Equipo", "#equipo"],
  ["Tratamientos", "#tratamientos"],
  ["Contacto", "#cita"],
];

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const progress = usePageProgress();
  const activeSection = useActiveSection();

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    lockBody();
    return () => unlockBody();
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`cps-nav${scrolled ? " is-scrolled" : ""}`}>
        <div
          className="cps-nav__progress"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
        <nav className="cps-nav__links" aria-label="Navegación principal">
          {LINKS.map(([l, h]) => (
            <a key={l} href={h}
               className={`cps-nav__link${activeSection === h.slice(1) ? " is-active" : ""}`}>{l}</a>
          ))}
        </nav>

        <button
          className={`cps-nav__burger${open ? " is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="cps-nav__burger-label">Menú</span>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <rect y="0"  width="18" height="1.8" rx="1" fill="rgba(11,31,29,.82)" />
            <rect y="6"  width="18" height="1.8" rx="1" fill="rgba(11,31,29,.82)" />
            <rect y="12" width="18" height="1.8" rx="1" fill="rgba(11,31,29,.82)" />
          </svg>
        </button>
      </header>

      {/* Mobile drawer */}
      <div className={`cps-drawer${open ? " is-open" : ""}`} onClick={close} aria-hidden={!open}>
        <div className="cps-drawer__panel" onClick={(e) => e.stopPropagation()}
             role="dialog" aria-modal="true" aria-label="Menú de navegación">
          <div className="cps-drawer__head">
            <BrandMark size={36} onClick={close} />
            <button className="cps-drawer__close" onClick={close} aria-label="Cerrar menú">
              <span />
              <span />
            </button>
          </div>
          <div className="cps-drawer__body">
            {LINKS.map(([l, h]) => (
              <a key={l} href={h} className="cps-drawer__link" onClick={close}>
                {l} <IcoArrow size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// ─── Treatments ───────────────────────────────────────────────────
const DISCIPLINES = [
  {
    num: "01",
    ico: <IcoSpine size={22} />,
    name: "Osteopatía",
    desc: "Tratamiento manual global del cuerpo. Trabaja la estructura, las vísceras, el cráneo y la esfera emocional para restablecer el equilibrio corporal.",
    items: ["Pediátrica", "Estructural", "Craneal", "Visceral", "Somato-emocional", "Posturología", "Deportiva"],
    dark: false,
  },
  {
    num: "02",
    ico: <IcoHand size={22} />,
    name: "Fisioterapia",
    desc: "Recuperación funcional de lesiones musculoesqueléticas, postoperatorios y patología crónica mediante técnicas activas y pasivas.",
    items: ["Electroterapia", "Mecanoterapia", "Cinesiterapia", "RPG", "Masoterapia", "Magnetoterapia", "Ondas de choque", "Neuralterapia (neuromodulación)", "Presoterapia"],
    dark: true,
  },
];

const Treatments = ({ onAppointment }) => {
  const { ref: txRef, active: txActive, goTo: txGoTo } = useSliderDots(DISCIPLINES.length);
  return (
    <section
      id="tratamientos"
      className="cps-section cps-tx-section"
      style={{ background: C.bg, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
    >
      <div className="reveal cps-tx-header">
        <div className="cps-overline" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-block", width: 24, height: 1.5, background: "var(--c-teal-500)", flexShrink: 0, marginBottom: 1 }} />
          Tratamientos
        </div>
        <h2 className="cps-h2" style={{ maxWidth: 560 }}>
          Osteopatía y Fisioterapia.
        </h2>
      </div>

      <div className="cps-tx-panels" ref={txRef}>
        {DISCIPLINES.map((d) => (
          <div key={d.num} className={`cps-tx-panel reveal${d.dark ? " cps-tx-panel--dk" : ""}`}>
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

              <button
                type="button"
                className="cps-tx-cta"
                onClick={() => onAppointment(d.name)}
              >
                Solicitar cita <IcoArrow size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <SliderDots count={DISCIPLINES.length} active={txActive} onSelect={txGoTo} label="Tratamientos" />
    </section>
  );
};

// ─── Condensed landing ────────────────────────────────────────────

const TEAM = [
  {
    name: "José Antonio Soler García",
    role: "Osteópata D.O. (F.)",
    text: "Máster Universitario en Osteopatía Pediátrica",
    photo: "assets/Equipo/Jose%20Antonio%20Soler%20Garcia.jpg",
  },
  {
    name: "César Cerezo",
    role: "Fisioterapeuta",
    text: "Máster en Fisioterapia Neurológica",
    photo: "assets/Equipo/Cesar%20Cerezo.jpg",
  },
  {
    name: "Lydia Rubio",
    role: "Fisioterapeuta",
    text: "Máster en Fisioterapia Deportiva",
    photo: "assets/Equipo/Lydia%20Rubio.jpg",
  },
  {
    name: "Juana Pérez Valero",
    role: "Recepcionista",
    text: "",
    photo: "assets/Equipo/Juana%20Perez%20Valero.jpg",
  },
];

const PepeLanding = ({ onAppointment }) => (
  <section id="pepe" className="cps-landing-hero">
    <div className="cps-landing-hero__photo reveal">
      <Ph
        src="assets/Equipo/Pepe.jpg"
        alt="Pepe Soler, fisioterapeuta y osteópata"
        label="Foto · Pepe Soler"
        icon={<IcoHand size={84} sw={1} />}
        objectPosition="center 20%"
      />
    </div>

    <div className="cps-landing-hero__copy reveal">
      <div className="cps-overline">Clínica sanitaria en Murcia desde 1993</div>
      <h1 className="cps-hero__h1">Pepe Soler</h1>
      <p className="cps-landing-hero__role">
        FISIOTERAPEUTA COL. 039 · Osteópata D.O. (F.) MROE-226
      </p>
      <p className="cps-hero__lead">
        Doctor por la Universidad de Murcia y director de su Escuela de Osteopatía.
        Más de 45 años integrando exploración, razonamiento clínico y tratamiento manual.
      </p>

      <div className="cps-landing-stats">
        <AnimatedStat prefix="+" value={45} label="años de experiencia" />
        <AnimatedStat prefix="+" value={26} suffix="K" label="historias clínicas" />
        <AnimatedStat value={1993} label="clínica en Murcia" />
      </div>

      <div className="cps-hero__ctas">
        <button type="button" className="cps-btn cps-btn-primary" onClick={() => onAppointment()}>
          Reservar cita
        </button>
        <a href="tel:+34968295860" className="cps-btn cps-btn-outline">
          <IcoPhone size={18} /> Llamar
        </a>
        <a href="mailto:clinicapepesoler@hotmail.com" className="cps-btn cps-btn-outline">
          <IcoMail size={18} /> Contactar
        </a>
      </div>
    </div>
  </section>
);

const TeamSection = () => {
  const { ref: teamRef, active: teamActive, goTo: teamGoTo } = useSliderDots(TEAM.length);
  return (
    <section id="equipo" className="cps-landing-section">
      <div className="cps-landing-section__head reveal">
        <div>
          <div className="cps-overline">Equipo clínico</div>
          <h2 className="cps-h2">Conoce al equipo.</h2>
        </div>
      </div>
      <div className="cps-team-grid" ref={teamRef}>
        {TEAM.map((member) => (
          <article key={member.name} className="cps-team-card reveal">
            <div className="cps-team-card__photo">
              <Ph
                src={member.photo}
                alt={member.name}
                label={member.name}
                icon={<IcoHeart size={24} />}
                objectPosition="center 18%"
              />
            </div>
            <div>
              <h3>{member.name}</h3>
              <p className="cps-team-card__role">{member.role}</p>
              {member.text && <p className="cps-team-card__detail">{member.text}</p>}
            </div>
          </article>
        ))}
      </div>
      <SliderDots count={TEAM.length} active={teamActive} onSelect={teamGoTo} label="Equipo clínico" />
    </section>
  );
};

const GALLERY = [
  ["assets/Equipo/clinica1.jpg", "Consulta de Clínica Pepe Soler"],
  ["assets/Equipo/clinica2.jpg", "Sala de tratamiento de Clínica Pepe Soler"],
  ["assets/Equipo/clinica3.jpg", "Instalaciones de Clínica Pepe Soler"],
];

const MAPS_URL = "https://maps.google.com/?q=Cl%C3%ADnica+Osteopatia+Fisioterapia+Pepe+Soler+Calle+Pina+6+Murcia";

const ClinicGallery = () => {
  const { ref: galleryRef, active: galleryActive, goTo: galleryGoTo } = useSliderDots(GALLERY.length);
  const previousSlide = () => galleryGoTo((galleryActive - 1 + GALLERY.length) % GALLERY.length);
  const nextSlide = () => galleryGoTo((galleryActive + 1) % GALLERY.length);

  return (
    <section className="cps-landing-section cps-clinic-gallery">
      <div className="cps-landing-section__head reveal">
        <div>
          <div className="cps-overline">La clínica</div>
          <h2 className="cps-h2">Consulta en Murcia.</h2>
          <p>
            Consulta sanitaria en Calle Pina Nº 6, Murcia.{" "}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cps-inline-link"
            >
              Cómo llegar <IcoArrow size={13} />
            </a>
          </p>
        </div>
      </div>

      <div className="cps-clinic-gallery__slider reveal">
        <div className="cps-clinic-gallery__grid" ref={galleryRef}>
          {GALLERY.map(([src, alt]) => (
            <div key={src} className="cps-clinic-gallery__item">
              <Ph src={src} alt={alt} label="Clínica Pepe Soler" objectPosition="center" />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="cps-clinic-gallery__control cps-clinic-gallery__control--prev"
          onClick={previousSlide}
          aria-label="Ver foto anterior de la clínica"
        >
          <IcoArrow size={18} />
        </button>
        <button
          type="button"
          className="cps-clinic-gallery__control cps-clinic-gallery__control--next"
          onClick={nextSlide}
          aria-label="Ver foto siguiente de la clínica"
        >
          <IcoArrow size={18} />
        </button>
      </div>
      <SliderDots count={GALLERY.length} active={galleryActive} onSelect={galleryGoTo} label="La clínica" />
    </section>
  );
};

const VisitSummary = () => {
  return (
    <section id="cita" className="cps-landing-section cps-visit">
      <div className="cps-landing-section__head reveal">
        <div className="cps-overline">Información práctica</div>
        <h2 className="cps-h2">Contacto y cita previa.</h2>
        <p>Atención en consulta con cita previa.</p>
      </div>

      <div className="cps-visit-grid">
        <div className="cps-visit-card reveal">
          <IcoPhone size={20} />
          <h3>Contacto</h3>
          <a href="tel:+34968295860">968 29 58 60</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">645 75 20 82</a>
          <a href="mailto:clinicapepesoler@hotmail.com">clinicapepesoler@hotmail.com</a>
        </div>

        <div className="cps-visit-card reveal">
          <IcoClock size={20} />
          <h3>Horario</h3>
          <p>Lunes a viernes</p>
          <strong>09:00 - 13:00 · 16:00 - 19:30</strong>
          <p>Sábado y domingo: cerrado</p>
        </div>

        <div className="cps-visit-card reveal">
          <IcoPin size={20} />
          <h3>Ubicación</h3>
          <p>Calle Pina, Nº 6 - Bajo</p>
          <p>30009 Murcia</p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            Cómo llegar <IcoArrow size={14} />
          </a>
        </div>
      </div>

    </section>
  );
};

// ─── WhatsApp flotante ────────────────────────────────────────────
const WaFloat = ({ onAppointment }) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const target = document.getElementById("equipo");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={() => onAppointment()}
      className={`cps-wa-float${visible ? " is-visible" : ""}`}
      aria-label="Pedir cita por WhatsApp"
    >
      <IcoWhats size={22} />
      <span>Pedir cita</span>
    </button>
  );
};

const APPOINTMENT_DEFAULTS = {
  name: "",
  reason: "Dolor o molestia",
  treatment: "No lo sé, prefiero que me orientéis",
  time: "Me adapto",
  note: "",
};

const AppointmentModal = ({ open, initialTreatment, onClose }) => {
  const [form, setForm] = React.useState(APPOINTMENT_DEFAULTS);

  React.useEffect(() => {
    if (!open) return undefined;

    setForm({
      ...APPOINTMENT_DEFAULTS,
      treatment: initialTreatment || APPOINTMENT_DEFAULTS.treatment,
    });

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    lockBody();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      unlockBody();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [initialTreatment, onClose, open]);

  if (!open) return null;

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const send = (event) => {
    event.preventDefault();

    const lines = [
      "Hola, me gustaría pedir cita en Clínica Pepe Soler.",
      form.name.trim() ? `Nombre: ${form.name.trim()}` : "",
      `Motivo: ${form.reason}`,
      `Tratamiento: ${form.treatment}`,
      `Preferencia de horario: ${form.time}`,
      form.note.trim() ? `Comentario: ${form.note.trim()}` : "",
    ].filter(Boolean);

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="cps-appointment" role="dialog" aria-modal="true" aria-labelledby="appointment-title">
      <button type="button" className="cps-appointment__backdrop" aria-label="Cerrar" onClick={onClose} />
      <form className="cps-appointment__panel" onSubmit={send}>
        <div className="cps-appointment__head">
          <div>
            <div className="cps-overline">Cita previa</div>
            <h2 id="appointment-title">Cuéntanos qué necesitas.</h2>
          </div>
          <button type="button" className="cps-appointment__close" onClick={onClose} aria-label="Cerrar">
            <span />
            <span />
          </button>
        </div>

        <label className="cps-field">
          <span>Nombre</span>
          <input value={form.name} onChange={update("name")} placeholder="Opcional" />
        </label>

        <label className="cps-field">
          <span>Motivo</span>
          <select value={form.reason} onChange={update("reason")}>
            <option>Dolor o molestia</option>
            <option>Lesión deportiva</option>
            <option>Revisión o mantenimiento</option>
            <option>Consulta para bebé o niño</option>
            <option>Postoperatorio</option>
            <option>Otro</option>
          </select>
        </label>

        <label className="cps-field">
          <span>Horario</span>
          <select value={form.time} onChange={update("time")}>
            <option>Me adapto</option>
            <option>Mañana</option>
            <option>Tarde</option>
          </select>
        </label>

        <label className="cps-field">
          <span>Comentario</span>
          <textarea value={form.note} onChange={update("note")} rows="3" placeholder="Opcional" />
        </label>

        <div className="cps-appointment__actions">
          <button type="submit" className="cps-btn cps-btn-primary">
            Pedir cita por WhatsApp <IcoWhats size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

// ─── Cookie banner ────────────────────────────────────────────────
const CookieBanner = ({ onAccept, onDecline }) => (
  <div className="cps-cookie-banner" role="dialog" aria-label="Aviso de cookies">
    <p className="cps-cookie-banner__text">
      Esta web carga tipografías desde Google Fonts, lo que implica enviar tu IP a Google.{" "}
      <a href="/cookies.html" className="cps-cookie-banner__link">Política de cookies</a>
    </p>
    <div className="cps-cookie-banner__actions">
      <button type="button" className="cps-cookie-banner__decline" onClick={onDecline}>
        Solo esenciales
      </button>
      <button type="button" className="cps-cookie-banner__accept" onClick={onAccept}>
        Aceptar
      </button>
    </div>
  </div>
);

// ─── Footer ───────────────────────────────────────────────────────
const Footer = () => (
  <footer className="cps-footer">
    <div className="cps-footer__legal">
      <span>© 2026 Clínica de Osteopatía y Fisioterapia Pepe Soler</span>
      <span>Fisioterapeuta Col. 39 · Osteópata D.O. (F.) MROE-226</span>
    </div>
    <div className="cps-footer__credit">
      Made in Murcia by{" "}
      <a href="mailto:danimeseguerdev@gmail.com" aria-label="Enviar email a Dani Meseguer">
        Dani Meseguer
      </a>{" "}
      🍋
    </div>
    <div className="cps-footer__links">
      <a
        href={INSTAGRAM_URL}
        className="cps-footer__social"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Síguenos en Instagram"
      >
        <IcoInstagram size={16} />
        Síguenos en Instagram
      </a>
      <a href="/aviso-legal.html">Aviso legal</a>
      <a href="/privacidad.html">Privacidad</a>
      <a href="/cookies.html">Cookies</a>
    </div>
  </footer>
);

// ─── Root ─────────────────────────────────────────────────────────
const VariantA = () => {
  useReveal();
  const [consent, setConsent] = React.useState(() => localStorage.getItem(CONSENT_KEY));
  const [appointment, setAppointment] = React.useState({ open: false, treatment: "" });

  React.useEffect(() => {
    if (consent === "accepted") loadGoogleFonts();
  }, [consent]);

  const acceptCookies = React.useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
  }, []);

  const declineCookies = React.useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
  }, []);

  const openAppointment = React.useCallback((treatment = "") => {
    setAppointment({ open: true, treatment });
  }, []);
  const closeAppointment = React.useCallback(() => {
    setAppointment((current) => ({ ...current, open: false }));
  }, []);

  return (
    <div className="cps-root">
      <ClinicHeader />
      <Nav />
      <main>
        <PepeLanding onAppointment={openAppointment} />
        <TeamSection />
        <Treatments onAppointment={openAppointment} />
        <ClinicGallery />
        <VisitSummary />
      </main>
      <Footer />
      <WaFloat onAppointment={openAppointment} />
      <AppointmentModal
        open={appointment.open}
        initialTreatment={appointment.treatment}
        onClose={closeAppointment}
      />
      {consent === null && (
        <CookieBanner onAccept={acceptCookies} onDecline={declineCookies} />
      )}
    </div>
  );
};

export default VariantA;
