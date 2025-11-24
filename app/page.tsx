import Image from 'next/image';

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconSpark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2l1.8 5.4L19 9l-5.2 2.1L12 16l-1.8-4.9L5 9l5.2-1.6L12 2z" fill="currentColor" opacity="0.8"/>
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.2 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.3 1.76.55 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.06a2 2 0 0 1 2.11-.45c.84.25 1.71.43 2.6.55A2 2 0 0 1 22 16.92z" fill="currentColor"/>
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M19.11 17.33c-.26-.13-1.52-.75-1.76-.83-.24-.09-.42-.13-.61.13-.18.26-.7.83-.85 1-.15.17-.31.2-.57.07-.26-.13-1.08-.4-2.06-1.28-.76-.67-1.27-1.5-1.42-1.76-.15-.26-.02-.41.11-.53.12-.12.26-.31.38-.46.13-.15.17-.26.26-.44.09-.18.04-.33-.02-.46-.06-.13-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.46-.15 0-.33-.02-.51-.02-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.19 0 1.29.95 2.54 1.08 2.72.13.18 1.87 2.85 4.54 4 .64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.52-.62 1.73-1.23.21-.61.21-1.14.15-1.23-.06-.09-.24-.15-.5-.28z" fill="currentColor"/>
      <path d="M16.02 3.2C9.79 3.2 4.77 8.21 4.77 14.45c0 2.01.56 3.88 1.54 5.49L5 27.55l7.81-1.27c1.55.85 3.33 1.34 5.21 1.34 6.23 0 11.25-5.01 11.25-11.25S22.24 3.2 16.02 3.2zm0 19.97c-1.8 0-3.47-.53-4.87-1.44l-.35-.22-4.64.75.95-4.52-.23-.37a9.22 9.22 0 0 1-1.4-4.93c0-5.13 4.2-9.32 9.33-9.32 5.13 0 9.32 4.19 9.32 9.32s-4.19 9.33-9.32 9.33z" fill="currentColor"/>
    </svg>
  );
}

export default function Page() {
  const phoneE164 = '+447700900123';
  const waHref = `https://wa.me/${phoneE164.replace(/[^+\d]/g, '')}?text=${encodeURIComponent('Hi! I am interested in BMW ECU programming and tuning.')}`;

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: 28 }}>
          <div>
            <div className="badge" aria-label="Supported ECUs">
              <IconSpark />
              BMW ECU: MS41 ? MS42 ? MS43 ? ME7.2
            </div>
            <h1 className="h1" style={{ marginTop: 16 }}>BMW ECU Programming & Tuning Services</h1>
            <p className="p muted" style={{ marginTop: 14, maxWidth: 720 }}>
              Precision ECU remapping and reverse-engineering for classic and modern BMWs. Unlock power, refine drivability, and solve immobilizer and error issues with expert tooling and safe calibration practices.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 22, flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href={waHref} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <IconWhatsApp /> WhatsApp
              </a>
              <a className="btn btn-ghost" href={`tel:${phoneE164}`} aria-label="Call now">
                <IconPhone /> Call Now
              </a>
              <a className="btn btn-ghost" href="#contact" aria-label="Go to contact">
                <IconSpark /> Contact
              </a>
            </div>
            <div className="kpi" style={{ marginTop: 28 }}>
              <div className="item"><div className="value">10+ yrs</div><div className="muted">Hands-on experience</div></div>
              <div className="item"><div className="value">300+ ECUs</div><div className="muted">Serviced successfully</div></div>
              <div className="item"><div className="value">OEM-safe</div><div className="muted">Methodology</div></div>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop"
              alt="BMW engine bay close-up"
              width={1200}
              height={900}
              priority
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="h2">Professional Services</h2>
          <p className="p muted" style={{ marginTop: 8, marginBottom: 18 }}>Tailored solutions for your BMW ECU.</p>
          <div className="grid grid-3">
            {[
              { title: 'ECU Tuning & Remapping', desc: 'Custom maps for power, torque, throttle, and economy with safety margins.' },
              { title: 'Immo Off', desc: 'Disable immobilizer when keys or EWS are unavailable (for off-road/approved use).'},
              { title: 'Pops & Bangs', desc: 'Calibrated overrun burble enabling on supported models/firmware.'},
              { title: 'Hard Cut', desc: 'Fuel-cut limiter implementation where hardware permits.'},
              { title: 'EWS Delete', desc: 'EWS alignment, delete options, and sync fixes (where legal).'},
              { title: 'Diagnostics & Error Fixing', desc: 'Deep ECU fault tracing, DTC handling, bench flashing, and recovery.'}
            ].map((s) => (
              <article key={s.title} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="badge" style={{ padding: '6px 10px' }}><IconSpark /> Service</span>
                  <h3 className="h2" style={{ fontSize: 18 }}>{s.title}</h3>
                </div>
                <p className="p muted" style={{ marginTop: 10 }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
                  <span className="badge" style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', color: 'var(--text)' }}>
                    <IconCheck /> OEM-safe
                  </span>
                  <span className="badge" style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', color: 'var(--text)' }}>
                    <IconCheck /> Bench/OBD
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* SUPPORTED ECUs */}
      <section id="ecus" className="section-sm">
        <div className="container">
          <h2 className="h2">Supported ECUs</h2>
          <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
            {['MS41', 'MS42', 'MS43', 'ME7.2'].map((ecu) => (
              <span key={ecu} className="badge">{ecu}</span>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container grid grid-2" style={{ alignItems: 'start' }}>
          <div>
            <h2 className="h2">About Me</h2>
            <p className="p muted" style={{ marginTop: 10 }}>
              I specialize in BMW engine management systems with a focus on MS41/MS42/MS43 and ME7.2 platforms. My workflow blends factory tooling with custom reverse-engineering, allowing precise control over calibration areas such as fuelling, ignition, VANOS, rev/limiter logic, and torque strategies. Each project is validated for thermal, knock, and drivability margins.
            </p>
            <ul className="p" style={{ marginTop: 12, listStyle: 'none', padding: 0 }}>
              {['Bench flashing and recovery', 'Bootmode unlocks and checksum correction', 'Datalogging, detonation safety, and sensor validation', 'Tailored maps for road, track, or restoration builds'].map((item) => (
                <li key={item} className="muted" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <IconCheck /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
              alt="BMW on dyno rollers"
              width={1200}
              height={900}
            />
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="h2">Portfolio Highlights</h2>
          <p className="p muted" style={{ marginTop: 8, marginBottom: 18 }}>Selected before/after results and successful projects.</p>
          <div className="grid grid-3">
            {[
              { title: 'E46 330i (MS43)', before: '225hp / 300Nm', after: '240hp / 320Nm', img: 'https://images.unsplash.com/photo-1549921296-3b4a69a4a93c?q=80&w=1200&auto=format&fit=crop' },
              { title: 'E39 528i (MS41)', before: '193hp / 280Nm', after: '205hp / 295Nm', img: 'https://images.unsplash.com/photo-1518306727298-4c1d94d69f24?q=80&w=1200&auto=format&fit=crop' },
              { title: 'E36 Swap (ME7.2)', before: 'Stock mapping', after: 'Custom hard cut + pops', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop' },
            ].map((p) => (
              <article key={p.title} className="card">
                <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <Image src={p.img} alt={p.title} width={800} height={600} />
                </div>
                <h3 className="h2" style={{ fontSize: 18, marginTop: 10 }}>{p.title}</h3>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 6 }}>
                  <span className="badge" style={{ color: '#ffadb0', borderColor: 'rgba(255,173,176,0.35)', background: 'rgba(255,173,176,0.08)' }}>Before: {p.before}</span>
                  <span className="badge" style={{ color: '#a7ffbf', borderColor: 'rgba(167,255,191,0.35)', background: 'rgba(167,255,191,0.08)' }}>After: {p.after}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="h2">Get In Touch</h2>
            <p className="p muted" style={{ marginTop: 10 }}>Based in London, UK. Remote bench services available internationally.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href={waHref} target="_blank" rel="noopener noreferrer">
                <IconWhatsApp /> WhatsApp
              </a>
              <a className="btn btn-ghost" href={`tel:${phoneE164}`}>
                <IconPhone /> {phoneE164}
              </a>
            </div>
          </div>
          <div className="card" style={{ display: 'grid', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="badge"><IconCheck /> Availability</span>
              <span className="muted">Mon?Sat, 09:00?18:00</span>
            </div>
            <div className="muted">Email on request. WhatsApp for quickest response.</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <div className="muted">? {new Date().getFullYear()} BMW ECU Programming</div>
          <div className="muted" style={{ display: 'flex', gap: 14 }}>
            <a href="#services" className="muted" style={{ textDecoration: 'none' }}>Services</a>
            <a href="#ecus" className="muted" style={{ textDecoration: 'none' }}>ECUs</a>
            <a href="#about" className="muted" style={{ textDecoration: 'none' }}>About</a>
            <a href="#portfolio" className="muted" style={{ textDecoration: 'none' }}>Portfolio</a>
            <a href="#contact" className="muted" style={{ textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
