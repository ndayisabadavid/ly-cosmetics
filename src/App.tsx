import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  X,
} from 'lucide-react';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';

const whatsappUrl = 'https://wa.me/256761630215?text=Hello%20Ly%20Cosmetics%2C%20I%20would%20like%20to%20order%20Hair%20Growth%20Oil.';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
];

const product = {
  name: 'Ly Cosmetics Hair Growth Oil',
  category: 'Hair Care',
  price: '25,000 UGX',
  image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1600&auto=format&fit=crop',
  description:
    'A nourishing oil blend made to support a healthier scalp, moisturized roots, and stronger-looking natural hair.',
  benefits: ['Supports healthy growth', 'Moisturizes dry scalp', 'Helps reduce breakage', 'Lightweight shine'],
};

const trustItems = [
  { icon: Leaf, label: 'Nourishing formula', text: 'Made for everyday hair care routines.' },
  { icon: ShieldCheck, label: 'Real support', text: 'Order directly and ask questions before you buy.' },
  { icon: Truck, label: 'Kampala delivery', text: 'Easy WhatsApp ordering for local customers.' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="brand-mark" aria-label="Ly Cosmetics home">
          <span className="brand-mark__icon">LY</span>
          <span>
            <span className="block text-base font-bold leading-none tracking-[0.18em]">LY COSMETICS</span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.24em] text-luxury-ink/55">
              Hair and beauty care
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'nav-link--active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-outline">
            WhatsApp
          </a>
          <Link to="/shop" className="button-dark">
            Shop
            <ShoppingBag className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="icon-button md:hidden"
          type="button"
          aria-label="Open navigation"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-luxury-ink/10 bg-white px-5 py-5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {[...navLinks, { name: 'Contact', path: '#contact' }].map((link) =>
                link.path.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="mobile-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="mobile-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-dark justify-center">
                Order on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => (
  <footer id="contact" className="border-t border-luxury-ink/10 bg-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
      <div>
        <h2 className="mb-4 text-2xl font-bold tracking-[0.16em]">LY COSMETICS</h2>
        <p className="max-w-md leading-7 text-luxury-ink/68">
          Glow better. Feel better. Be unforgettable. Ly Cosmetics delivers simple, confidence-building beauty care from Kampala, Uganda.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#" className="icon-button" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="icon-button" aria-label="WhatsApp">
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div>
        <h3 className="footer-title">Contact</h3>
        <ul className="space-y-4 text-sm">
          <li>
            <a href="mailto:lycosmetics1@gmail.com" className="footer-link">
              <Mail className="h-4 w-4" />
              lycosmetics1@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+256766212121" className="footer-link">
              <Phone className="h-4 w-4" />
              0766 212 121
            </a>
          </li>
          <li>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="footer-link">
              <MessageCircle className="h-4 w-4" />
              0761 630 215
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="footer-title">Location</h3>
        <div className="footer-link items-start">
          <MapPin className="mt-1 h-4 w-4" />
          <span>
            Kira, Kitukutwe
            <br />
            Kampala, Uganda
          </span>
        </div>
      </div>
    </div>
    <div className="border-t border-luxury-ink/10 px-5 py-5 text-center text-xs uppercase tracking-[0.22em] text-luxury-ink/45">
      Copyright {new Date().getFullYear()} Ly Cosmetics. All rights reserved.
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Order on WhatsApp">
    <MessageCircle className="h-6 w-6" />
    <span className="hidden font-semibold md:inline">Order</span>
  </a>
);

const HomePage = () => (
  <main>
    <section className="hero-section">
      <div className="hero-media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2200&auto=format&fit=crop"
          alt=""
        />
      </div>
      <div className="hero-overlay" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-28 md:grid-cols-[1.05fr_0.95fr] md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Kampala beauty care</p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-white md:text-7xl">
            Glow different. Grow confident.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/82">
            Shop nourishing hair and beauty essentials made for soft shine, healthy roots, and a polished everyday glow.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/shop" className="button-light">
              Shop collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-ghost">
              Order on WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7, ease: 'easeOut' }}
          className="hero-product-card"
        >
          <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-luxury-rose">Featured product</p>
            <h2 className="mt-3 text-2xl font-semibold">{product.name}</h2>
            <p className="mt-3 leading-7 text-luxury-ink/68">{product.description}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xl font-bold">{product.price}</span>
              <Link to="/shop" className="small-link">
                View details
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 md:px-8">
        {trustItems.map((item) => (
          <div key={item.label} className="feature-tile">
            <item.icon className="h-6 w-6 text-luxury-rose" />
            <div>
              <h3 className="font-semibold">{item.label}</h3>
              <p className="mt-1 text-sm leading-6 text-luxury-ink/62">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section-shell">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="eyebrow-dark">Why customers choose us</p>
          <h2 className="section-title mt-4">Beauty care that feels clear, modern, and easy to trust.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {['Made for natural hair routines', 'Simple ordering by WhatsApp', 'Friendly product guidance', 'Fresh, polished brand experience'].map((item) => (
            <div key={item} className="check-row">
              <CheckCircle2 className="h-5 w-5 text-luxury-sage" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

const ShopPage = () => (
  <main className="page-shell">
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow-dark">Shop Ly Cosmetics</p>
        <h1 className="section-title mt-4">The Hair Growth Collection</h1>
        <p className="mt-4 leading-7 text-luxury-ink/68">
          Start with our signature oil, then order directly through WhatsApp for guidance, availability, and delivery details.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="product-image-wrap">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="product-panel">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-luxury-rose">{product.category}</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{product.name}</h2>
          <div className="mt-4 flex items-center gap-1 text-luxury-gold" aria-label="Five star product">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="mt-5 text-lg leading-8 text-luxury-ink/70">{product.description}</p>
          <p className="mt-6 text-3xl font-bold">{product.price}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {product.benefits.map((benefit) => (
              <div key={benefit} className="check-row">
                <Sparkles className="h-5 w-5 text-luxury-rose" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-dark justify-center">
              Order on WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="tel:+256766212121" className="button-outline justify-center">
              Call now
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
);

const AboutPage = () => (
  <main className="page-shell">
    <section className="mx-auto max-w-5xl px-5 py-16 text-center md:px-8">
      <p className="eyebrow-dark">About the brand</p>
      <h1 className="section-title mx-auto mt-4 max-w-4xl">
        Ly Cosmetics is built for customers who want beauty products that feel fresh, helpful, and confidence-building.
      </h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-luxury-ink/68">
        We believe beauty should feel effortless and empowering. Our focus is simple: offer products that support your natural glow and make ordering easy, personal, and friendly.
      </p>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { initials: 'DL', name: 'Dushime Louange', title: 'Founder and Co-CEO' },
          { initials: 'MB', name: 'Manirambona Belyse', title: 'Co-Founder and Co-CEO' },
        ].map((person) => (
          <div key={person.name} className="leader-card">
            <div className="leader-avatar">{person.initials}</div>
            <div>
              <h2 className="text-2xl font-semibold">{person.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-luxury-ink/50">{person.title}</p>
              <p className="mt-5 leading-7 text-luxury-ink/65">
                Dedicated to building a beauty brand that feels polished, welcoming, and useful for everyday customers.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-luxury-cream text-luxury-ink selection:bg-luxury-rose selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
