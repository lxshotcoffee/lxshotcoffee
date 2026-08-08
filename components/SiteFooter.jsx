import Link from 'next/link';

export default function SiteFooter() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={`${basePath}/assets/logo.png`} alt="LX SHOT logo" className="brand-logo-img" />
          <div>
            <strong>LX SHOT</strong>
            <p className="muted">Specialty coffee roasts crafted for refined daily rituals.</p>
          </div>
        </div>

        <div className="footer-links">
          <div className="col">
            <h4>Shop</h4>
            <Link href="/shop/">All coffee</Link>
            <Link href="/shop/velvet-espresso/">Whole bean</Link>
            <Link href="/shop/ember-ground/">Ground</Link>
          </div>
          <div className="col">
            <h4>Company</h4>
            <Link href="/story/">Our story</Link>
            <a href="mailto:info@lxshot.com">info@lxshot.com</a>
            <a href="mailto:order@lxshot.com">order@lxshot.com</a>
          </div>
          <div className="col contact">
            <h4>Support</h4>
            <p>Order support</p>
            <a href="mailto:order@lxshot.com">order@lxshot.com</a>
          </div>
        </div>
      </div>
      <div className="legal-bar">© {new Date().getFullYear()} LX SHOT. All rights reserved.</div>
    </footer>
  );
}
