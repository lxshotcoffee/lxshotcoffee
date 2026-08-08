import Head from 'next/head';
import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

export default function StoryPage() {
  return (
    <main className="page-shell">
      <Head>
        <title>Our Story | LX SHOT</title>
        <meta name="description" content="Learn the LX SHOT story and our commitment to luxury specialty coffee sourcing, roasting, and packaging." />
      </Head>
      <SiteHeader />

      <section className="hero-card">
        <div>
          <h1>Our Story</h1>
          <p className="muted">LX SHOT was founded to create refined, small-batch coffees with a focus on terroir and craft.</p>
        </div>
      </section>

      <section className="showcase-card">
        <div className="showcase-copy">
          <h2>From seed to cup</h2>
          <p className="muted">We work directly with growers to source unique lots and roast them to highlight clarity and sweetness.</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
