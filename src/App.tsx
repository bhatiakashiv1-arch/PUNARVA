import { useEffect, useState } from 'react';

// --- Inline SVG Icons ---

function FabricLayersIcon() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 30 L24 20 L42 30 L24 38 Z" />
      <path d="M6 24 L24 14 L42 24" opacity="0.6" />
      <path d="M6 18 L24 8 L42 18" opacity="0.35" />
    </svg>
  );
}

function HandStitchIcon() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 24 L12 30 L18 24 L24 30 L30 24 L36 30 L42 24" />
      <path d="M6 30 L12 36 L18 30 L24 36 L30 30 L36 36 L42 30" opacity="0.5" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 34 L6 18 L42 18 L42 34" />
      <path d="M6 28 L42 28" />
      <path d="M6 18 L6 12 L42 12 L42 18" opacity="0.5" />
      <path d="M10 28 L10 24 L20 24 L20 28" opacity="0.5" />
    </svg>
  );
}

function HeritageIcon() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4 L8 14 L40 14 Z" />
      <path d="M12 14 L12 36 L36 36 L36 14" />
      <path d="M20 36 L20 24 L28 24 L28 36" />
      <path d="M8 40 L40 40" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 8 C24 8 8 18 8 36 L8 40 L12 40 C30 40 40 24 40 8 Z" />
      <path d="M10 38 C18 28 28 20 36 12" opacity="0.5" />
    </svg>
  );

}

function RecycleIcon() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8 L24 18 L12 18" />
      <path d="M12 18 L8 26" />
      <path d="M30 40 L24 30 L36 30" />
      <path d="M36 30 L40 22" />
      <path d="M40 26 A16 16 0 0 1 12 32" opacity="0.4" />
      <path d="M8 22 A16 16 0 0 1 36 16" opacity="0.4" />
    </svg>
  );
}

// Step icons
function CollectionIcon() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 16 L16 10 L32 10 L38 16 L38 38 L10 38 Z" />
      <path d="M16 16 L32 16" opacity="0.5" />
      <path d="M20 24 L28 24" opacity="0.5" />
      <path d="M20 30 L28 30" opacity="0.5" />
    </svg>
  );
}

function CleaningIcon() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="22" r="14" />
      <path d="M18 18 Q18 14 22 14 Q26 14 26 18" opacity="0.4" />
      <path d="M20 26 Q20 30 24 30 Q28 30 28 26" opacity="0.4" />
      <path d="M24 38 L24 44" />
      <path d="M16 44 L32 44" />
    </svg>
  );
}

function LayeringIcon() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="12" width="32" height="6" rx="2" />
      <rect x="8" y="20" width="32" height="6" rx="2" opacity="0.7" />
      <rect x="8" y="28" width="32" height="6" rx="2" opacity="0.4" />
    </svg>
  );
}

function StitchingIcon() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 20 L12 26 L18 20 L24 26 L30 20 L36 26 L42 20" />
      <path d="M6 28 L12 34 L18 28 L24 34 L30 28 L36 34 L42 28" opacity="0.5" />
    </svg>
  );
}

function QualityCheckIcon() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="22" r="14" />
      <path d="M16 22 L20 26 L28 18" />
      <path d="M32 32 L40 40" />
    </svg>
  );
}

function FinishedProductIcon() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 30 L8 18 L40 18 L40 30" />
      <path d="M8 24 L40 24" />
      <path d="M8 18 L8 12 L40 12 L40 18" opacity="0.5" />
      <path d="M14 30 L14 24 L22 24 L22 30" opacity="0.5" />
    </svg>
  );
}

// Impact icons
function ReduceWasteIcon() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6 L40 14 L40 30 C40 36 32 42 24 44 C16 42 8 36 8 30 L8 14 Z" />
      <path d="M16 24 L22 30 L32 18" />
    </svg>
  );
}

function PreserveCraftIcon() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6 L12 14 L12 30 L24 38 L36 30 L36 14 Z" />
      <path d="M24 6 L24 38" opacity="0.4" />
      <path d="M12 14 L36 14" opacity="0.4" />
    </svg>
  );
}

function SupportArtisansIcon() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="18" r="6" />
      <path d="M12 40 Q12 28 24 28 Q36 28 36 40" />
    </svg>
  );
}

// Contact icons
function MailIcon() {
  return (
    <svg viewBox="0 0 48 48" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="12" width="36" height="24" rx="3" />
      <path d="M6 16 L24 28 L42 16" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 48 48" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8 L20 8 L22 18 L18 22 Q20 28 26 30 L30 26 L40 28 L40 34 Q40 40 34 40 Q18 40 8 24 Q8 14 14 8 Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 48 48" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6 C16 6 10 12 10 20 C10 30 24 42 24 42 C24 42 38 30 38 20 C38 12 32 6 24 6 Z" />
      <circle cx="24" cy="20" r="5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M10 16 L38 16" />
      <path d="M10 24 L38 24" />
      <path d="M10 32 L38 32" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M12 12 L36 36" />
      <path d="M36 12 L12 36" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 48 48" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 8 L24 38" />
      <path d="M14 28 L24 38 L34 28" />
    </svg>
  );
}

function SproutIcon() {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 42 L24 22" />
      <path d="M24 22 C24 16 18 12 10 12 C10 20 16 24 24 24" />
      <path d="M24 28 C24 22 30 18 38 18 C38 26 32 30 24 30" opacity="0.6" />
    </svg>
  );
}

// --- Data ---

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Story', href: '#story' },
  { label: 'Product', href: '#product' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why' },
  { label: 'Impact', href: '#impact' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
];

const productFeatures = [
  {
    icon: FabricLayersIcon,
    title: 'Reused Fabric Layers',
    desc: 'Each Khandolu is built from carefully selected layers of reusable old garments, giving textiles a meaningful second life.',
  },
  {
    icon: HandStitchIcon,
    title: 'Traditional Hand-Stitching',
    desc: 'Artisans hand-stitch every layer using time-honoured techniques passed down through generations of Himachali families.',
  },
  {
    icon: BedIcon,
    title: 'Multipurpose Bedding',
    desc: 'Versatile by design — use it as a warm bedroll, a cosy floor mat, or a decorative heritage piece for your home.',
  },
  {
    icon: HeritageIcon,
    title: 'Heritage Craftsmanship',
    desc: 'Every piece carries the soul of Himachali tradition, preserving a craft that has warmed households for centuries.',
  },
  {
    icon: RecycleIcon,
    title: 'Sustainable Material Reuse',
    desc: 'By repurposing textiles that would otherwise be discarded, we reduce waste and champion a circular, mindful economy.',
  },
];

const steps = [
  { icon: CollectionIcon, title: 'Collection', desc: 'Gently-used garments are gathered from households and communities.' },
  { icon: CleaningIcon, title: 'Cleaning', desc: 'Fabrics are thoroughly washed, sanitised, and prepared for reuse.' },
  { icon: LayeringIcon, title: 'Layering', desc: 'Clean fabric pieces are arranged into warm, even, multilayer stacks.' },
  { icon: StitchingIcon, title: 'Stitching', desc: 'Skilled artisans hand-stitch the layers using traditional patterns.' },
  { icon: QualityCheckIcon, title: 'Quality Check', desc: 'Each Khandolu is inspected for durability, comfort, and finish.' },
  { icon: FinishedProductIcon, title: 'Finished Product', desc: 'A beautiful, handcrafted Khandolu is ready to warm a new home.' },
];

const reasons = [
  {
    icon: LeafIcon,
    title: 'Sustainable Living',
    desc: 'Every Khandolu diverts textiles from landfills, making sustainable living a tangible part of your everyday home.',
  },
  {
    icon: HeritageIcon,
    title: 'Traditional Heritage',
    desc: 'We preserve a centuries-old Himachali craft, ensuring ancestral knowledge is not lost to modern mass production.',
  },
  {
    icon: HandStitchIcon,
    title: 'Handmade Quality',
    desc: 'No machines, no shortcuts. Each piece is stitched by hand with care, resulting in durable, one-of-a-kind bedding.',
  },
  {
    icon: BedIcon,
    title: 'Everyday Comfort',
    desc: 'Layered fabric provides natural insulation — warm in winter, breathable in summer, and comforting all year round.',
  },
];

const impacts = [
  {
    icon: ReduceWasteIcon,
    title: 'Reduce Textile Waste',
    desc: 'By transforming old clothes into functional bedding, we extend the life of every fabric and reduce what reaches the landfill.',
  },
  {
    icon: PreserveCraftIcon,
    title: 'Preserve Traditional Craftsmanship',
    desc: 'We revive and protect the art of Khandolu-making, keeping ancestral skills alive for future generations to learn and value.',
  },
  {
    icon: SupportArtisansIcon,
    title: 'Support Rural Artisans',
    desc: 'Every purchase directly sustains rural Himachali artisans, creating dignified livelihoods within their own communities.',
  },
];

const visionPoints = [
  'Build a recognizable Indian sustainable bedding brand rooted in heritage and craftsmanship.',
  'Expand artisan partnerships across Himachal Pradesh and beyond, scaling livelihood opportunities.',
  'Introduce innovative handcrafted products that blend tradition with contemporary home needs.',
];

// Editable contact placeholders — replace these with real details
const CONTACT_EMAIL = 'your-email@example.com';
const CONTACT_PHONE = '+91-XXXXXXXXXX';
const CONTACT_LOCATION = 'Himachal Pradesh, India';

// --- Component ---

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={closeMenu} aria-label="PUNARVA home">
            <SproutIcon />
            <span className="nav-logo-text">PUNARVA</span>
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <button
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="nav-mobile">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>{link.label}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <main id="main">
        {/* 1. Hero */}
        <section id="hero" className="hero">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-eyebrow">PUNARVA &middot; Team VIRAASAT</p>
            <h1 className="hero-title">Yesterday's Fabrics.<br />Tomorrow's Comfort.</h1>
            <p className="hero-subtitle">Handcrafted heritage, reimagined for a sustainable future.</p>
            <p className="hero-tagline">Every Thread Deserves a Second Life.</p>
            <div className="hero-buttons">
              <a href="#story" className="btn btn-primary">Explore Our Story</a>
              <a href="#product" className="btn btn-secondary">Discover Khandolu</a>
            </div>
            <a href="#story" className="hero-scroll" aria-label="Scroll to story">
              <ArrowDownIcon />
            </a>
          </div>
        </section>

        {/* 2. Our Story */}
        <section id="story" className="section section-cream">
          <div className="container">
            <div className="section-header">
              <p className="section-eyebrow">Our Story</p>
              <h2 className="section-title">A Heritage Reborn</h2>
            </div>
            <div className="story-grid">
              <div className="story-text">
                <p>
                  In the hills of Himachal Pradesh, generations of families practiced a quiet
                  art: transforming old, worn garments into <strong>Khandolu</strong> —
                  traditional handmade multilayer bedding. Every piece of fabric, no matter
                  how faded, was given a second life as warm, durable bedding that lasted
                  for years.
                </p>
                <p>
                  This craft was not just practical — it was deeply sustainable, deeply
                  personal, and deeply connected to the land. Each Khandolu carried the
                  memory of garments that had served a family, stitched together with care
                  into something new and comforting.
                </p>
                <p>
                  <strong>PUNARVA</strong> was born from a simple conviction: that this
                  heritage should not fade away. Founded by <strong>Team VIRAASAT</strong>,
                  we are reviving the art of Khandolu-making — preserving ancestral
                  craftsmanship, reducing textile waste, and creating dignified livelihood
                  opportunities for rural artisans.
                </p>
                <p>
                  Every Khandolu we create is a bridge between yesterday and tomorrow —
                  between the fabrics that served us and the comfort that awaits. This is
                  our promise: to honour tradition while building a more sustainable future,
                  one stitch at a time.
                </p>
              </div>
              <div className="story-image">
                <div className="image-placeholder">
                  <div className="image-placeholder-inner">
                    <BedIcon />
                    <p>Khandolu</p>
                    <span>Traditional handmade multilayer bedding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Product */}
        <section id="product" className="section section-sage">
          <div className="container">
            <div className="section-header">
              <p className="section-eyebrow">Our Product</p>
              <h2 className="section-title">Khandolu — Heritage Bedding</h2>
              <p className="section-lead">
                Traditional Himachali multilayer bedding, handcrafted from reusable fabrics.
                Each piece is unique, warm, and built to last for years.
              </p>
            </div>
            <div className="feature-grid">
              {productFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="feature-card">
                    <div className="feature-card-icon">
                      <Icon />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section id="process" className="section section-cream">
          <div className="container">
            <div className="section-header">
              <p className="section-eyebrow">How It Works</p>
              <h2 className="section-title">From Fabric to Comfort</h2>
              <p className="section-lead">
                Six careful steps bring each Khandolu to life — honouring tradition at every stage.
              </p>
            </div>
            <div className="steps-grid">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="step-card">
                    <div className="step-number">{i + 1}</div>
                    <div className="step-icon"><Icon /></div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                    {i < steps.length - 1 && <span className="step-arrow" aria-hidden="true">&rarr;</span>}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Why PUNARVA */}
        <section id="why" className="section section-forest">
          <div className="container">
            <div className="section-header section-header-light">
              <p className="section-eyebrow">Why PUNARVA?</p>
              <h2 className="section-title">More Than Just Bedding</h2>
              <p className="section-lead">
                We believe sustainability, heritage, and comfort belong together — in every home.
              </p>
            </div>
            <div className="reason-grid">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <article key={reason.title} className="reason-card">
                    <div className="reason-card-icon"><Icon /></div>
                    <h3>{reason.title}</h3>
                    <p>{reason.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Our Impact */}
        <section id="impact" className="section section-cream">
          <div className="container">
            <div className="section-header">
              <p className="section-eyebrow">Our Impact</p>
              <h2 className="section-title">The Change We Strive For</h2>
              <p className="section-lead">
                Our goals go beyond products — we aim to reshape how textiles, tradition, and communities connect.
              </p>
            </div>
            <div className="impact-grid">
              {impacts.map((impact) => {
                const Icon = impact.icon;
                return (
                  <article key={impact.title} className="impact-card">
                    <div className="impact-card-icon"><Icon /></div>
                    <h3>{impact.title}</h3>
                    <p>{impact.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. Our Vision */}
        <section id="vision" className="section section-sage-dark">
          <div className="container">
            <div className="section-header section-header-light">
              <p className="section-eyebrow">Our Vision</p>
              <h2 className="section-title">Building the Future of Sustainable Bedding</h2>
            </div>
            <div className="vision-content">
              <p className="vision-intro">
                We envision PUNARVA growing into a recognizable Indian sustainable bedding
                brand — one that carries the warmth of Himachali heritage into homes across
                the country and beyond.
              </p>
              <ul className="vision-list">
                {visionPoints.map((point, i) => (
                  <li key={i}>
                    <span className="vision-marker" aria-hidden="true">
                      <SproutIcon />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. Contact */}
        <section id="contact" className="section section-cream">
          <div className="container">
            <div className="section-header">
              <p className="section-eyebrow">Contact</p>
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-lead">
                Interested in PUNARVA? We'd love to hear from you. Reach out using the details below.
              </p>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-item-icon"><MailIcon /></span>
                  <div>
                    <p className="contact-label">Email</p>
                    {/* EDITABLE: Replace this email with your real address */}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="contact-value">{CONTACT_EMAIL}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon"><PhoneIcon /></span>
                  <div>
                    <p className="contact-label">Phone</p>
                    {/* EDITABLE: Replace this phone with your real number */}
                    <span className="contact-value">{CONTACT_PHONE}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon"><LocationIcon /></span>
                  <div>
                    <p className="contact-label">Location</p>
                    <span className="contact-value">{CONTACT_LOCATION}</span>
                  </div>
                </div>
              </div>

              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  /* EDITABLE: Replace CONTACT_EMAIL with your real address to enable the enquiry button */
                  window.location.href = `mailto:${CONTACT_EMAIL}?subject=PUNARVA Enquiry`;
                }}
              >
                <p className="contact-form-note">
                  {/* EDITABLE: Replace the email above to make this enquiry button send to your inbox */}
                  The enquiry button opens your email app. Replace the placeholder email in the code with your real address.
                </p>
                <div className="form-field">
                  <label htmlFor="cf-name">Name</label>
                  <input id="cf-name" type="text" placeholder="Your name" autoComplete="name" />
                </div>
                <div className="form-field">
                  <label htmlFor="cf-email">Email</label>
                  <input id="cf-email" type="email" placeholder="Your email" autoComplete="email" />
                </div>
                <div className="form-field">
                  <label htmlFor="cf-message">Message</label>
                  <textarea id="cf-message" rows="4" placeholder="Your enquiry" />
                </div>
                <button type="submit" className="btn btn-primary btn-full">Send Enquiry</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <SproutIcon />
            <span>PUNARVA</span>
          </div>
          <p className="footer-tagline">Every Thread Deserves a Second Life.</p>
          <p className="footer-credits">
            PUNARVA &nbsp;|&nbsp; Team VIRAASAT &nbsp;|&nbsp; Himachal Pradesh, India
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
