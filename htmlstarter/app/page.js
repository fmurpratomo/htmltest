export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Welcome to Your Starter</h1>
          <p className="hero-subtitle">
            A clean Next.js + CSS foundation — ready to build on.
          </p>
          <div className="hero-actions">
            <a href="#features" className="btn btn-primary">Get Started</a>
            <a href="#" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" id="features">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <p className="section-subtitle">Everything you need to hit the ground running.</p>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">⚡</div>
              <h3>Fast by Default</h3>
              <p>Built on Next.js with server-side rendering and static generation out of the box.</p>
            </div>
            <div className="card">
              <div className="card-icon">🎨</div>
              <h3>Clean CSS</h3>
              <p>Minimal, well-organised global styles with CSS custom properties for easy theming.</p>
            </div>
            <div className="card">
              <div className="card-icon">📱</div>
              <h3>Responsive</h3>
              <p>Mobile-first layout that looks great on every screen size.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to build something great?</h2>
          <p>Start customising this template and ship your next project faster.</p>
          <a href="#" className="btn btn-primary">Get Started Free</a>
        </div>
      </section>
    </>
  );
}
