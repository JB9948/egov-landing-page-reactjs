import './App.css';
import { useState, useEffect } from "react";
import productsData from "./data/products";

function App() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    const sections = ['home', 'features', 'insights', 'impact', 'contact'];
    const onScroll = () => {
      let current = 'home';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const sectionTop = el.offsetTop - 100;
          const sectionHeight = el.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };


  const filteredProducts = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category)
    );
  });

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom py-3" aria-label="Main navigation">
        <div className="container">

          {/* Logo */}
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
            <span className="brand-dot me-2"></span>
            eGov Foundation
          </a>

          {/* Toggle (mobile) */}
          <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-expanded={navbarOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse justify-content-between ${navbarOpen ? 'show' : ''}`} id="navbarNav">

            {/* Center Links */}
            <ul className="navbar-nav mx-auto gap-3">
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} href="#home" onClick={() => setNavbarOpen(false)}>Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'features' ? 'active' : ''}`} href="#features" onClick={() => setNavbarOpen(false)}>Features</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'insights' ? 'active' : ''}`} href="#insights" onClick={() => setNavbarOpen(false)}>Insights</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'impact' ? 'active' : ''}`} href="#impact" onClick={() => setNavbarOpen(false)}>Impact</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => setNavbarOpen(false)}>Contact</a>
              </li>
            </ul>

            {/* Right Buttons */}
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary btn-sm px-3">
                Portal Access
              </button>
              <button className="btn btn-primary btn-sm px-3">
                Explore Platform
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <span className="hero-badge">
                <i className="bi bi-building"></i> Public Digital Infrastructure
              </span>

              <h1 className="hero-title">
                Transforming <br />
                <span className="hero-title-gradient">Public Service Delivery</span>
              </h1>

              <p className="hero-subtitle">
                Enabling governments to deliver efficient, transparent, and scalable public services.
              </p>

              <div className="d-flex gap-3 mt-3">
                <button className="btn btn-primary px-4 py-2 fw-semibold">
                  Our Approach →
                </button>
                <button className="btn btn-outline-secondary px-4 py-2 fw-semibold">
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-lg-6 d-flex justify-content-center">
              <div className="hero-ui-box">
                <span>Public Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="impact" className="stats-section">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3 text-center">
              <h2 className="stat-number">1B+</h2>
              <p className="stat-label">Citizens Served</p>
            </div>
            <div className="col-6 col-md-3 text-center">
              <h2 className="stat-number">200+</h2>
              <p className="stat-label">Programs Enabled</p>
            </div>
            <div className="col-6 col-md-3 text-center">
              <h2 className="stat-number">20+</h2>
              <p className="stat-label">States Impacted</p>
            </div>
            <div className="col-6 col-md-3 text-center">
              <h2 className="stat-number">500+</h2>
              <p className="stat-label">Services Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Core Solutions</span>
            <h2 className="section-title">Everything you need to deliver at scale</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="feature-icon-wrapper feature-icon-purple">
                  <i className="bi bi-heart-pulse"></i>
                </div>
                <h3 className="h5 mb-3">Digital Health Systems</h3>
                <p className="text-muted">
                  Improve health outcomes using digital tools.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="feature-icon-wrapper feature-icon-coral">
                  <i className="bi bi-cash-coin"></i>
                </div>
                <h3 className="h5 mb-3">Public Finance Platforms</h3>
                <p className="text-muted">
                  Transparent budgeting and payments.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="feature-icon-wrapper feature-icon-teal">
                  <i className="bi bi-building-gear"></i>
                </div>
                <h3 className="h5 mb-3">Governance Systems</h3>
                <p className="text-muted">
                  Data-driven decision systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS (🔥 DYNAMIC PART) */}
      <section id="insights" className="products-section">
        <div className="container">

          <div className="section-header text-center">
            <span className="section-tag">Insights</span>
            <h2 className="section-title">Latest perspectives and resources</h2>
          </div>

          {/* SEARCH + FILTER */}
          <div className="products-controls d-flex flex-column align-items-center mb-5">
            <div className="search-wrapper mb-3">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search articles..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="category-filters">
              <button
                className={`filter-btn ${category === "All" ? "active" : ""}`}
                onClick={() => setCategory("All")}
              >
                All
              </button>
              <button
                className={`filter-btn ${category === "Governance" ? "active" : ""}`}
                onClick={() => setCategory("Governance")}
              >
                Governance
              </button>
              <button
                className={`filter-btn ${category === "Health" ? "active" : ""}`}
                onClick={() => setCategory("Health")}
              >
                Health
              </button>
              <button
                className={`filter-btn ${category === "Policy" ? "active" : ""}`}
                onClick={() => setCategory("Policy")}
              >
                Policy
              </button>
            </div>
          </div>

          {/* LOADING */}
          {loading && <p className="text-center">Loading...</p>}

          {/* NO RESULTS */}
          {!loading && filteredProducts.length === 0 && (
            <p className="text-center">No results found</p>
          )}

          {/* CARDS */}
          <div className="row g-4">
            {!loading &&
              filteredProducts.map((item) => (
                <div className="col-lg-4 col-md-6" key={item.id}>
                  <article className="card product-card h-100">
                    <div className={`product-image ${item.category.toLowerCase()}`}>
                      {item.category}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-muted">{item.text}</p>
                      <p className="price">{item.price}</p>
                    </div>
                  </article>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-section text-center">
        <div className="container">
          <h2 className="cta-title">Explore our technology-for-good platform</h2>
          <p className="cta-subtitle">
            Start building better public services today — no obligation required.
          </p>

          <div className="cta-buttons">
            <button className="btn-cta-primary">Explore Platform</button>
            <button className="btn-cta-outline">Contact Us</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section text-center">
        <div className="container">
          <p>© 2026 eGov Foundation</p>
        </div>
      </footer>

    </div>
  );
}

export default App;