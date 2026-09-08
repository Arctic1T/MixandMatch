import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, ChevronDown, Clock3, Coffee, MapPin, Menu, Phone, X } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";
import FadeContent from "@/components/FadeContent";
import TextLoop from "@/components/TextLoop";

type Language = "en" | "es";

type Copy = {
  nav: { story: string; menu: string; gallery: string; visit: string };
  welcomeKicker: string;
  welcomeTitle: string;
  welcomeBody: string;
  enter: string;
  heroKicker: string;
  heroTitle: string;
  heroBody: string;
  heroCta: string;
  scroll: string;
  freshKicker: string;
  freshTitle: string;
  freshBody: string;
  explore: string;
  menuKicker: string;
  menuTitle: string;
  menuBody: string;
  menuCta: string;
  galleryKicker: string;
  galleryTitle: string;
  galleryBody: string;
  visitKicker: string;
  visitTitle: string;
  visitBody: string;
  hours: string;
  location: string;
  call: string;
  footer: string;
  googleReview: string;
  pickup: string;
  phone: string;
  unavailable: string;
  backToTop: string;
  openNav: string;
  switchLanguage: string;
  closeImage: string;
  closeReview: string;
  heroImageAlt: string;
  fruitPrepAlt: string;
  brandAlt: string;
};

const copy: Record<Language, Copy> = {
  en: {
    nav: { story: "Our story", menu: "Menu", gallery: "Gallery", visit: "Visit" },
    welcomeKicker: "A little joy in every mix",
    welcomeTitle: "Welcome to Mix\nand Match.",
    welcomeBody: "Fresh fruit, good coffee, warm waffles, and a place to make your morning brighter.",
    enter: "Enter in English",
    heroKicker: "Freshly mixed in Ciudad Sandino",
    heroTitle: "Mix it.\nMatch it.\nLove it.",
    heroBody: "Fresh food, smoothies, coffees, and more—made with care every day. Come hungry, leave happy.",
    heroCta: "Explore the menu",
    scroll: "Scroll for something fresh",
    freshKicker: "Made with love",
    freshTitle: "A fresh little\nreason to smile.",
    freshBody: "At Mix and Match, every dish is made with love, bringing together fresh ingredients and the rich flavors of Nicaraguan culture. Our café is a welcoming place where tradition meets modern style in every bite.",
    explore: "Meet the menu",
    menuKicker: "Your kind of craving",
    menuTitle: "Pick your\nperfect mix.",
    menuBody: "Sweet, fruity, savory, or a little bit of everything. Start with a favorite, then make it yours.",
    menuCta: "See the gallery",
    galleryKicker: "Made to be shared",
    galleryTitle: "A scroll full\nof good things.",
    galleryBody: "Save your favorites, bring a friend, and let the colors do the talking.",
    visitKicker: "Come on in",
    visitTitle: "Your next\nhappy break.",
    visitBody: "Whether you are starting the morning or taking a quick afternoon break, everything is served fresh and with care.",
    hours: "Monday – Sunday · 7:00–11:00 AM + 2:00–8:00 PM",
    location: "5M43+7X8, Ciudad Sandino, Nicaragua",
    call: "Call to order: BLANK",
    footer: "Mix it. Match it. Love it.",
    googleReview: "Leave a review on Google",
    pickup: "Want pickup? Call to order: BLANK",
    phone: "BLANK",
    unavailable: "Phone number coming soon",
    backToTop: "Back to the top",
    openNav: "Open navigation",
    switchLanguage: "Switch language",
    closeImage: "Close image",
    closeReview: "Close review form",
    heroImageAlt: "Fresh orange smoothie in a Mix and Match cup",
    fruitPrepAlt: "Fresh fruit and a blender prepared for a smoothie",
    brandAlt: "Mix and Match",
  },
  es: {
    nav: { story: "Nuestra historia", menu: "Menú", gallery: "Galería", visit: "Visítanos" },
    welcomeKicker: "Un poquito de alegría en cada mezcla",
    welcomeTitle: "Bienvenido a\nMix and Match.",
    welcomeBody: "Fruta fresca, buen café, waffles calientitos y un lugar para alegrar tu mañana.",
    enter: "Entrar en español",
    heroKicker: "Recién mezclado en Ciudad Sandino",
    heroTitle: "Mézclalo.\nCombínalo.\nÁmalo.",
    heroBody: "Comida fresca, smoothies, café y mucho más—preparado con cariño todos los días. Ven con hambre, sal feliz.",
    heroCta: "Ver el menú",
    scroll: "Desliza por algo fresco",
    freshKicker: "Hecho con amor",
    freshTitle: "Una razón\nfresca para sonreír.",
    freshBody: "En Mix and Match, cada platillo se prepara con amor, uniendo ingredientes frescos con los sabores de la cultura nicaragüense. Nuestro café es un lugar acogedor donde la tradición se encuentra con un estilo moderno en cada bocado.",
    explore: "Conoce el menú",
    menuKicker: "Tu antojo, a tu manera",
    menuTitle: "Elige tu\nmezcla perfecta.",
    menuBody: "Dulce, frutal, salado o un poquito de todo. Empieza con tu favorito y hazlo tuyo.",
    menuCta: "Ver la galería",
    galleryKicker: "Hecho para compartir",
    galleryTitle: "Un scroll lleno\nde cosas buenas.",
    galleryBody: "Guarda tus favoritos, invita a un amigo y deja que los colores hablen.",
    visitKicker: "Pasa adelante",
    visitTitle: "Tu próxima\npausa feliz.",
    visitBody: "Ya sea que empieces la mañana o tomes un descanso por la tarde, todo se sirve fresco y con cariño.",
    hours: "Lunes – Domingo · 7:00–11:00 AM + 2:00–8:00 PM",
    location: "5M43+7X8, Ciudad Sandino, Nicaragua",
    call: "Llama para ordenar: BLANK",
    footer: "Mézclalo. Combínalo. Ámalo.",
    googleReview: "Déjanos una reseña en Google",
    pickup: "¿Quieres recoger tu pedido? Llama: BLANK",
    phone: "BLANK",
    unavailable: "Número de teléfono próximamente",
    backToTop: "Volver arriba",
    openNav: "Abrir navegación",
    switchLanguage: "Cambiar idioma",
    closeImage: "Cerrar imagen",
    closeReview: "Cerrar formulario de reseña",
    heroImageAlt: "Smoothie de naranja fresco en un vaso de Mix and Match",
    fruitPrepAlt: "Fruta fresca y una licuadora listas para preparar un smoothie",
    brandAlt: "Mix and Match",
  },
};

const ASSETS = {
  logo: "/manus-storage/image2_0f1a77ae.png",
  strawberry: "/manus-storage/image3_577e14a4.png",
  cookies: "/manus-storage/image4_eb42a3fb.png",
  waffleTreat: "/manus-storage/image5_2955b4e4.png",
  mango: "/manus-storage/image6_ae3e5270.png",
  fruitWaffles: "/manus-storage/image7_5fff7a5c.png",
  classicWaffle: "/manus-storage/image8_37416667.jpeg",
  doubleWaffle: "/manus-storage/image9_47565c2c.jpeg",
  sandwich: "/manus-storage/image10_96dcc2a0.jpeg",
  interior: "/manus-storage/mix-match-cafe-interior_ae0780bd.jpg",
  fruitPrep: "/manus-storage/mix-match-fruit-prep_7f6ce883.jpg",
  paper: "/manus-storage/mix-match-paper-texture_34b077b0.jpg",
  fruitSticker: "/manus-storage/mix-match-fruit-sticker_57922086.png",
  fruitMark: "/manus-storage/mix-match-fruit-mark_06311542.png",
  galleryPinkSmoothie: "/manus-storage/mix-match-gallery-smoothie-pink_7c1df939.png",
  galleryGreenSmoothie: "/manus-storage/mix-match-gallery-smoothie-green_b2e4703c.png",
  galleryWaffles: "/manus-storage/mix-match-gallery-waffles_d439451e.jpeg",
};

const menuItems = [
  { id: "strawberry", tag: "Smoothie", esTag: "Smoothie", name: "Strawberry Cloud", esName: "Nube de Fresa", description: "Strawberry, cream, and a little whipped-up joy.", esDescription: "Fresa, crema y un poquito de alegría batida.", image: ASSETS.strawberry, color: "pink" },
  { id: "mango", tag: "Smoothie", esTag: "Smoothie", name: "Tropical Match", esName: "Mezcla Tropical", description: "Mango, banana, and strawberry—sunshine in a cup.", esDescription: "Mango, banano y fresa—sol en un vasito.", image: ASSETS.mango, color: "orange" },
  { id: "cookies", tag: "Smoothie", esTag: "Smoothie", name: "Cookies & Cream", esName: "Galleta y Crema", description: "A creamy chocolate-cookie treat with a soft finish.", esDescription: "Un gustito cremoso de chocolate y galleta.", image: ASSETS.cookies, color: "cream" },
  { id: "waffle", tag: "Waffles", esTag: "Waffles", name: "Classic Match Waffle", esName: "Waffle Classic Match", description: "3 mini waffles + 1 topping.", esDescription: "3 mini waffles + 1 topping.", image: ASSETS.classicWaffle, color: "yellow" },
  { id: "double", tag: "Waffles", esTag: "Waffles", name: "Double Match Waffles", esName: "Waffles Double Match", description: "3 mini waffles + 2 toppings + strawberry or banana.", esDescription: "3 mini waffles + 2 toppings + fresa o banano.", image: ASSETS.doubleWaffle, color: "rose" },
  { id: "sandwich", tag: "Savory", esTag: "Salado", name: "Classic Match Sandwich", esName: "Sándwich Classic Match", description: "Ham, lettuce, tomato, cheddar or mozzarella.", esDescription: "Jamón, lechuga, tomate, queso cheddar o mozzarella.", image: ASSETS.sandwich, color: "blue" },
];

const galleryImages = [
  { src: ASSETS.strawberry, label: "Strawberry Cloud", esLabel: "Nube de Fresa" },
  { src: ASSETS.waffleTreat, label: "Waffle break", esLabel: "Pausa con waffles" },
  { src: ASSETS.fruitWaffles, label: "Fruit-topped waffles", esLabel: "Waffles con fruta" },
  { src: ASSETS.mango, label: "Tropical Match", esLabel: "Mezcla Tropical" },
  { src: ASSETS.cookies, label: "Cookies & Cream", esLabel: "Galleta y Crema" },
  { src: ASSETS.sandwich, label: "Classic Match Sandwich", esLabel: "Sándwich Classic Match" },
  { src: ASSETS.galleryPinkSmoothie, label: "Pink smoothie moment", esLabel: "Momento de smoothie rosado" },
  { src: ASSETS.galleryGreenSmoothie, label: "Green smoothie at the cafe", esLabel: "Smoothie verde en el café" },
  { src: ASSETS.galleryWaffles, label: "Strawberry banana waffles", esLabel: "Waffles de fresa y banano" },
];

export default function Home() {
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  const [language, setLanguage] = useState<Language>(requestedLanguage === "es" ? "es" : "en");
  const [languageChooserOpen, setLanguageChooserOpen] = useState(!requestedLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);
  const t = copy[language];

  const chooseLanguage = (next: Language) => {
    setLanguage(next);
    setLanguageChooserOpen(false);
    window.setTimeout(() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" }), 40);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };


  return (
    <main className="mix-site">
      {languageChooserOpen && (
        <div className="language-chooser-backdrop" role="presentation">
          <div className="language-chooser-card" role="dialog" aria-modal="true" aria-labelledby="language-chooser-title">
            <button className="language-chooser-close" onClick={() => setLanguageChooserOpen(false)} aria-label={language === "es" ? "Cerrar selector de idioma" : "Close language chooser"}>
              <X size={18} />
            </button>
            <img src={ASSETS.logo} alt={t.brandAlt} className="language-chooser-logo" />
            <span className="language-chooser-kicker"><span className="orange-dot" /> {language === "es" ? "Bienvenido a Mix and Match" : "Welcome to Mix and Match"}</span>
            <h1 id="language-chooser-title">{language === "es" ? "Elige tu idioma." : "Choose your language."}</h1>
            <p>{language === "es" ? "Explora el café en español o inglés." : "Explore the cafe in English or Spanish."}</p>
            <div className="language-actions">
              <button className="language-button primary" onClick={() => chooseLanguage("es")}><span>ES</span> Español <ArrowDownRight size={17} /></button>
              <button className="language-button" onClick={() => chooseLanguage("en")}><span>EN</span> English <ArrowDownRight size={17} /></button>
            </div>
          </div>
        </div>
      )}
      <header className="mix-header">
        <button className="mix-brand" onClick={() => scrollTo("top")} aria-label={t.backToTop}>
          <img src={ASSETS.fruitMark} alt="" />
          <span>Mix <b>and</b> Match</span>
        </button>
        <nav className="mix-nav" aria-label="Primary navigation">
          <button onClick={() => scrollTo("story")}>{t.nav.story}</button>
          <button onClick={() => scrollTo("menu")}>{t.nav.menu}</button>
          <button onClick={() => scrollTo("gallery")}>{t.nav.gallery}</button>
          <button onClick={() => scrollTo("visit")}>{t.nav.visit}</button>
        </nav>
        <div className="header-actions">
          <button className="language-switch" onClick={() => setLanguage(language === "en" ? "es" : "en")} aria-label={t.switchLanguage}>{language === "en" ? "ES" : "EN"}</button>
          <button className="header-order" onClick={() => scrollTo("visit")}>{language === "en" ? "Come by" : "Ven a visitarnos"} <ArrowUpRight size={15} /></button>
        </div>
        <button className="mix-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.openNav} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>

      {menuOpen && <nav className="mix-mobile-nav" aria-label="Mobile navigation">
        <button onClick={() => scrollTo("story")}>{t.nav.story}</button>
        <button onClick={() => scrollTo("menu")}>{t.nav.menu}</button>
        <button onClick={() => scrollTo("gallery")}>{t.nav.gallery}</button>
        <button onClick={() => scrollTo("visit")}>{t.nav.visit}</button>
        <button className="mobile-language" onClick={() => setLanguage(language === "en" ? "es" : "en")}>{language === "en" ? "Español" : "English"}</button>
      </nav>}

      <section className="mix-hero" id="top">
        <div className="hero-color-wash" aria-hidden="true" />
        <div className="hero-sun" aria-hidden="true" />
        <div className="hero-fruit-orbit orbit-one" aria-hidden="true"><img src={ASSETS.mango} alt="" /></div>
        <div className="hero-fruit-orbit orbit-two" aria-hidden="true"><img src={ASSETS.strawberry} alt="" /></div>
        <div className="hero-fruit-orbit orbit-three" aria-hidden="true"><img src={ASSETS.cookies} alt="" /></div>
        <div className="hero-product"><img src={ASSETS.mango} alt={t.heroImageAlt} /></div>
        <div className="hero-sticker"><img src={ASSETS.logo} alt={t.brandAlt} /></div>
        <div className="hero-content">
          <FadeContent duration={760} initialOpacity={0} className="hero-kicker"><span className="orange-dot" /> {t.heroKicker}</FadeContent>
          <FadeContent blur duration={1050} delay={80} initialOpacity={0} className="mix-hero-title"><h1>{t.heroTitle.split("\n").map((line, index) => <span key={line} className={index === 1 ? "accent-line" : ""}>{line}</span>)}</h1></FadeContent>
          <FadeContent duration={850} delay={230} initialOpacity={0} className="hero-copy"><p>{t.heroBody}</p><button className="orange-button" onClick={() => scrollTo("menu")}>{t.heroCta} <ArrowDownRight size={18} /></button></FadeContent>
        </div>
        <div className="hero-side-note"><span>01</span><i /><span>05</span></div>
        <button className="mix-scroll-cue" onClick={() => scrollTo("story")}><span>{t.scroll}</span><ChevronDown size={17} /></button>
      </section>

      <section className="story-section" id="story">
        <div className="section-rail"><span>02</span><i /></div>
        <FadeContent duration={840} className="story-media"><img src={ASSETS.fruitPrep} alt={t.fruitPrepAlt} /><span>{language === "en" ? "Fresh fruit. Every day." : "Fruta fresca. Cada día."}</span></FadeContent>
        <FadeContent duration={950} delay={110} className="story-copy"><p className="eyebrow">{t.freshKicker}</p><h2>{t.freshTitle.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h2><p className="body-copy">{t.freshBody}</p><button className="text-button" onClick={() => scrollTo("menu")}>{t.explore} <ArrowDownRight size={18} /></button></FadeContent>
      </section>


      <section className="menu-section" id="menu">
        <div className="section-rail rail-light"><span>03</span><i /></div>
        <FadeContent duration={820} className="section-heading"><div><p className="eyebrow">{t.menuKicker}</p><h2>{t.menuTitle.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h2></div><p>{t.menuBody}</p></FadeContent>
        <div className="menu-grid">
          {menuItems.map((item, index) => <FadeContent key={item.id} duration={720} delay={index * 70} className="menu-card-wrap"><BorderGlow className="mix-menu-card" borderRadius={26} glowRadius={34} glowColor="22 86 54" glowIntensity={0.75} backgroundColor="#fffdf7" colors={["#ef4f1e", "#ffd23f", "#ff9eba"]} fillOpacity={0.58} animated={index === 0}><article className="menu-card"><div className={`menu-photo ${item.color}`}><img src={item.image} alt={language === "en" ? item.name : item.esName} /></div><div className="menu-card-copy"><span>{language === "en" ? item.tag : item.esTag}</span><h3>{language === "en" ? item.name : item.esName}</h3><p>{language === "en" ? item.description : item.esDescription}</p></div></article></BorderGlow></FadeContent>)}
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-paper" aria-hidden="true" />
        <div className="section-rail"><span>04</span><i /></div>
        <FadeContent duration={820} className="section-heading gallery-heading"><div><p className="eyebrow">{t.galleryKicker}</p><h2>{t.galleryTitle.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h2></div><p>{t.galleryBody}</p></FadeContent>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => <FadeContent key={image.src} duration={760} delay={index * 60} className={`gallery-item gallery-${index + 1}`}><button onClick={() => setSelectedGallery(index)}><img src={image.src} alt={language === "en" ? image.label : image.esLabel} /><span>{language === "en" ? image.label : image.esLabel} <ArrowUpRight size={15} /></span></button></FadeContent>)}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="section-rail rail-light"><span>05</span><i /></div>
        <FadeContent duration={860} className="visit-copy"><p className="eyebrow">{t.visitKicker}</p><h2>{t.visitTitle.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h2><p className="body-copy">{t.visitBody}</p><div className="hours-pill"><Clock3 size={16} /><span>{t.hours}</span></div></FadeContent>
        <FadeContent duration={920} delay={120} className="visit-card-wrap"><BorderGlow className="visit-card" borderRadius={28} glowRadius={38} glowColor="22 86 54" glowIntensity={0.7} backgroundColor="#fffdf7" colors={["#ef4f1e", "#ffd23f", "#ff9eba"]} fillOpacity={0.52} animated><div className="visit-card-inner"><div className="visit-card-top"><img src={ASSETS.fruitMark} alt="" /><span>Mix <b>and</b> Match</span></div><h3>{language === "en" ? "Good things are waiting." : "Te esperan cosas buenas."}</h3><div className="visit-details"><span><MapPin size={16} /> {t.location}</span><span><Clock3 size={16} /> {t.hours}</span><span><Phone size={16} /> {t.pickup}</span></div><div className="visit-card-note"><Coffee size={17} /><span>{language === "en" ? "Freshly made for pickup or a happy cafe break." : "Recién preparado para recoger o disfrutar en el café."}</span></div></div></BorderGlow></FadeContent>
      </section>


      <footer className="mix-footer"><div className="footer-logo"><img src={ASSETS.logo} alt={t.brandAlt} /></div><div><p>{t.footer}</p><small>{t.location} · {t.hours}</small></div><a className="footer-review-link" href="https://www.google.com/search?q=Mix+and+Match+Ciudad+Sandino+Nicaragua" target="_blank" rel="noreferrer">{t.googleReview} <ArrowUpRight size={16} /></a><button onClick={() => scrollTo("top")}>{t.backToTop} <ArrowUpRight size={16} /></button></footer>

      {selectedGallery !== null && <div className="gallery-modal" role="presentation" onMouseDown={() => setSelectedGallery(null)}><div className="gallery-modal-inner" role="dialog" aria-modal="true" onMouseDown={(event) => event.stopPropagation()}><button onClick={() => setSelectedGallery(null)} aria-label={t.closeImage}><X size={20} /></button><img src={galleryImages[selectedGallery].src} alt={language === "en" ? galleryImages[selectedGallery].label : galleryImages[selectedGallery].esLabel} /><p>{language === "en" ? galleryImages[selectedGallery].label : galleryImages[selectedGallery].esLabel}</p></div></div>}

    </main>
  );
}
