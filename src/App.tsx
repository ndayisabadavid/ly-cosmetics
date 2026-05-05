import { type ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Droplets,
  Heart,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  X,
} from 'lucide-react';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';

const WHATSAPP_NUMBER = '256761630215';
const WHATSAPP_DISPLAY = '0761 630 215';
const CALL_DISPLAY = '0766 212 121';
const CALL_HREF = 'tel:+256766212121';

const makeWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const whatsappMessages = {
  generalOrder: `Hello LY Cosmetics, I would like to place an order.

Product:
Quantity:
My name:
My location:
Delivery or pickup:
Phone number:`,
  hairGrowthOil: `Hello LY Cosmetics, I would like to order Hair Growth Oil.

Product: Hair Growth Oil
Price: 25,000 UGX
Quantity:
My name:
My location:
Delivery or pickup:
Phone number:`,
  hydratingLipGloss: `Hello LY Cosmetics, I would like to order Hydrating Lip Gloss.

Product: Hydrating Lip Gloss
Flavor:
Price: 25,000 UGX
Quantity:
My name:
My location:
Delivery or pickup:
Phone number:`,
  chocolateLipGloss: `Hello LY Cosmetics, I would like to order Chocolate Lip Gloss.

Product: Chocolate Lip Gloss
Price: 25,000 UGX
Quantity:
My name:
My location:
Delivery or pickup:
Phone number:`,
  strawberryLipGloss: `Hello LY Cosmetics, I would like to order Strawberry Lip Gloss.

Product: Strawberry Lip Gloss
Price: 25,000 UGX
Quantity:
My name:
My location:
Delivery or pickup:
Phone number:`,
  crystalClearLipGloss: `Hello LY Cosmetics, I would like to order Crystal Clear Lip Gloss.

Product: Crystal Clear Lip Gloss
Price: 25,000 UGX
Quantity:
My name:
My location:
Delivery or pickup:
Phone number:`,
  askProducts: `Hello LY Cosmetics, I have a question about your products.

Product I am interested in:
My question:`,
  askOil: `Hello LY Cosmetics, I have a question about the Hair Growth Oil.

My question:`,
};

const whatsappLinks = {
  generalOrder: makeWhatsAppUrl(whatsappMessages.generalOrder),
  hairGrowthOil: makeWhatsAppUrl(whatsappMessages.hairGrowthOil),
  hydratingLipGloss: makeWhatsAppUrl(whatsappMessages.hydratingLipGloss),
  chocolateLipGloss: makeWhatsAppUrl(whatsappMessages.chocolateLipGloss),
  strawberryLipGloss: makeWhatsAppUrl(whatsappMessages.strawberryLipGloss),
  crystalClearLipGloss: makeWhatsAppUrl(whatsappMessages.crystalClearLipGloss),
  askProducts: makeWhatsAppUrl(whatsappMessages.askProducts),
  askOil: makeWhatsAppUrl(whatsappMessages.askOil),
};

const orderNote =
  'No cart needed - order directly on WhatsApp. Choose your product, send your details, and our team will confirm availability, delivery, and payment.';

const getProductOrderUrl = (productName: string) =>
  productName === 'Hair Growth Oil' ? whatsappLinks.hairGrowthOil : whatsappLinks.hydratingLipGloss;

const getChatActionWhatsAppUrl = (action: string) =>
  action === 'Order Now' ? whatsappLinks.generalOrder : undefined;

const assets = {
  hero: '/assets/hero-products.jpeg',
  hairBottle: '/assets/hair-oil-bottle.jpeg',
  hairLifestyle: '/assets/hair-lifestyle.jpeg',
  hairApplication: '/assets/hair-application.jpeg',
  oilTexture: '/assets/oil-texture.jpeg',
  lipLineup: '/assets/lip-lineup.jpeg',
  lipTextures: '/assets/lip-textures.jpeg',
  lipApplication: '/assets/lip-application.jpeg',
  lipStrawberry: '/assets/lip-strawberry.jpeg',
  lipChocolate: '/assets/lip-chocolate.jpeg',
  ownerApplying: '/assets/owner-applying.jpeg',
  ownerProduct: '/assets/owner-product.jpeg',
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
];

const products = [
  {
    name: 'Hair Growth Oil',
    category: 'Hair Care',
    price: '25,000 UGX',
    image: assets.hairBottle,
    description:
      'A lightweight oil for nourished roots, a moisturized scalp, and healthier-looking natural hair.',
    benefits: ['Strengthens roots', 'Moisturizes dry scalp', 'Helps reduce breakage', 'Adds soft shine'],
  },
  {
    name: 'Hydrating Lip Gloss',
    category: 'Lip Care',
    price: '25,000 UGX',
    image: assets.lipLineup,
    description:
      'Glossy everyday hydration in chocolate, strawberry, and crystal clear finishes.',
    benefits: ['Chocolate', 'Strawberry', 'Crystal Clear', 'Glossy finish'],
  },
];

const shopChoiceItems = [
  {
    icon: Droplets,
    label: 'Hair Growth Oil',
    text: 'Choose this if you want scalp care, stronger roots, moisture, and a healthier hair routine.',
  },
  {
    icon: Sparkles,
    label: 'Hydrating Lip Gloss',
    text: 'Choose this if you want soft lips, smooth shine, and an easy everyday beauty finish.',
  },
];

const shopOrderSteps = [
  'Choose your product',
  'Click Order on WhatsApp',
  'Fill in your details in WhatsApp',
  'Receive confirmation from LY Cosmetics',
];

const confidencePoints = ['Direct WhatsApp support', 'Easy ordering', 'Friendly customer guidance'];

const aboutLeaders = [
  {
    initials: 'DL',
    name: 'Dushime Louange',
    title: 'Founder and Co-CEO',
    text: 'Dedicated to building a beauty brand that feels polished, welcoming, and useful for everyday customers.',
  },
  {
    initials: 'MB',
    name: 'Manirambona Belyse',
    title: 'Co-Founder and Co-CEO',
    text: 'Passionate about creating beauty care that supports confidence, clear service, and everyday glow.',
  },
];

const aboutValues = [
  {
    icon: Sparkles,
    label: 'Confidence',
    text: 'We believe beauty should help every customer feel good.',
  },
  {
    icon: Heart,
    label: 'Care',
    text: 'We guide customers before and after they order.',
  },
  {
    icon: Award,
    label: 'Quality',
    text: 'We focus on products that look premium and feel easy to use.',
  },
  {
    icon: ShieldCheck,
    label: 'Trust',
    text: 'We keep our service clear, friendly, and honest.',
  },
];

const trustItems = [
  { icon: Leaf, label: 'Beauty with care', text: 'Thoughtful products for daily hair and lip routines.' },
  { icon: ShieldCheck, label: 'Direct WhatsApp support', text: 'Ask questions before buying and order with confidence.' },
  { icon: Truck, label: 'Kampala delivery', text: 'Fast order support for customers around Kampala.' },
];

const homeProducts = [
  {
    name: 'Hair Growth Oil',
    category: 'Hair Care',
    price: '25,000 UGX',
    image: assets.hairBottle,
    description:
      'A lightweight oil for nourished roots, a moisturized scalp, and healthier-looking natural hair.',
  },
  {
    name: 'Hydrating Lip Gloss',
    category: 'Lip Care',
    price: '25,000 UGX',
    image: assets.lipLineup,
    description:
      'Glossy everyday hydration in chocolate, strawberry, and crystal clear finishes.',
  },
];

const orderSteps = [
  {
    label: 'Choose your product',
    text: 'Pick Hair Growth Oil or Lip Gloss.',
  },
  {
    label: 'Send your details',
    text: 'Share your name, product, quantity, and location.',
  },
  {
    label: 'Confirm on WhatsApp',
    text: 'Our team confirms price, delivery, and payment details.',
  },
  {
    label: 'Receive your order',
    text: 'Get your beauty product and start your glow-up.',
  },
];

const whyChooseItems = [
  { icon: Leaf, label: 'Beauty with care', text: 'Thoughtful products for daily hair and lip routines.' },
  { icon: ShieldCheck, label: 'Direct WhatsApp support', text: 'Ask questions before buying and order with confidence.' },
  { icon: Truck, label: 'Kampala delivery', text: 'Fast order support for customers around Kampala.' },
  { icon: Sparkles, label: 'Made for confidence', text: 'Every product is created to help you glow better and feel better.' },
];

const ritualSteps = [
  {
    icon: Droplets,
    label: 'Apply',
    text: 'Part the hair and apply a small amount directly to the scalp.',
  },
  {
    icon: Heart,
    label: 'Massage',
    text: 'Massage gently so the oil spreads through roots without feeling heavy.',
  },
  {
    icon: Sparkles,
    label: 'Glow',
    text: 'Use consistently for a softer, healthier-looking finish.',
  },
];

const shadeCards = [
  { name: 'Chocolate', text: 'Warm, polished shine.', image: assets.lipChocolate },
  { name: 'Strawberry', text: 'Fresh pink gloss.', image: assets.lipStrawberry },
  { name: 'Crystal Clear', text: 'Clean glossy finish.', image: assets.lipTextures },
];

const testimonials = [
  {
    quote: 'The hair oil looks premium and feels light enough for my everyday routine.',
    name: 'Amina',
  },
  {
    quote: 'The gloss collection is beautiful. The colors look clean, fresh, and easy to wear.',
    name: 'Claire',
  },
  {
    quote: 'Ordering was easy, and the team answered my questions quickly on WhatsApp.',
    name: 'Sarah',
  },
];

const customerReviews = [
  {
    quote: 'The lip gloss feels smooth and gives my lips a beautiful shine.',
  },
  {
    quote: 'The hair oil makes my scalp feel cared for and my hair routine easier.',
  },
  {
    quote: 'Ordering was simple and the team was helpful on WhatsApp.',
  },
];

const Reveal = ({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  key?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.68, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

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
        <Link to="/" className="brand-mark" aria-label="LY Cosmetics home">
          <span className="brand-mark__icon">LY</span>
          <span>
            <span className="block text-base font-bold leading-none">LY Cosmetics</span>
            <span className="block text-[11px] font-medium uppercase text-luxury-ink/55">
              Hair and Beauty Care
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
          <a href={whatsappLinks.askProducts} target="_blank" rel="noreferrer" className="button-outline">
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
              <a href={whatsappLinks.generalOrder} target="_blank" rel="noreferrer" className="button-whatsapp justify-center">
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
  <footer id="contact" className="border-t border-luxury-ink/10 bg-white pb-28 md:pb-0">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
      <div>
        <h2 className="mb-4 text-2xl font-bold">LY Cosmetics</h2>
        <p className="max-w-md leading-7 text-luxury-ink/68">
          Premium hair and lip care from Kampala, Uganda. Order directly, ask questions, and shop with confidence.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#" className="icon-button" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href={whatsappLinks.askProducts} target="_blank" rel="noreferrer" className="icon-button" aria-label="WhatsApp">
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
            <a href={CALL_HREF} className="footer-link">
              <Phone className="h-4 w-4" />
              {CALL_DISPLAY}
            </a>
          </li>
          <li>
            <a href={whatsappLinks.askProducts} target="_blank" rel="noreferrer" className="footer-link">
              <MessageCircle className="h-4 w-4" />
              {WHATSAPP_DISPLAY}
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
    <div className="border-t border-luxury-ink/10 px-5 py-5 text-center text-xs uppercase text-luxury-ink/45">
      Copyright 2026 LY Cosmetics. All rights reserved.
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a
    href={whatsappLinks.generalOrder}
    target="_blank"
    rel="noreferrer"
    className="whatsapp-float"
    aria-label="Order on WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
    <span className="hidden font-semibold md:inline">Order</span>
  </a>
);

const ContactBand = () => (
  <section className="contact-band" aria-label="LY Cosmetics contact options">
    <div>
      <p className="eyebrow-dark">Need help choosing?</p>
      <h2>Talk to LY Cosmetics before you order.</h2>
      <p>
        Ask about products, delivery, shades, routines, or order details. We keep beauty shopping simple, warm, and direct.
      </p>
    </div>
    <div className="contact-band__actions">
      <a href={whatsappLinks.askProducts} target="_blank" rel="noreferrer" className="button-whatsapp justify-center">
        WhatsApp Us
        <MessageCircle className="h-4 w-4" />
      </a>
      <a href={CALL_HREF} className="button-outline justify-center">
        Call {CALL_DISPLAY}
        <Phone className="h-4 w-4" />
      </a>
    </div>
  </section>
);

type ChatMessage = {
  text: string;
  isUser: boolean;
  actions?: string[];
};

const mainChatActions = [
  'Shop Products',
  'Recommend Product',
  'Price',
  'Order Now',
  'Delivery',
  'Payment',
  'Hair Growth Oil Guide',
  'Lip Gloss Guide',
  'Product Safety',
  'Track My Order',
  'Report a Problem',
  'Location',
  'Contact Support',
  'Meet the CEOs',
];

const welcomeChatMessage: ChatMessage = {
  text: `Hi beauty, welcome to LY Cosmetics. I am your LY Glow Assistant. I can help you choose products, check prices, place an order, learn how to use our products, or talk to support.

How can I help you today?`,
  isUser: false,
  actions: mainChatActions,
};

const makeBotMessage = (text: string, actions?: string[]): ChatMessage => ({
  text,
  isUser: false,
  actions,
});

const normalizeChatText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const hasAny = (text: string, terms: string[]) => terms.some((term) => text.includes(term));

const getChatResponse = (rawMessage: string): ChatMessage => {
  const message = normalizeChatText(rawMessage);

  if (['hi', 'hello', 'hey'].includes(message)) {
    return makeBotMessage('Hi beauty, welcome to LY Cosmetics. How can I help you today?', mainChatActions);
  }

  if (hasAny(message, ['thank you', 'thanks', 'thank u'])) {
    return makeBotMessage(
      'You are welcome, beauty. Thank you for choosing LY Cosmetics. Glow better. Feel better. Be unforgettable.',
      ['Shop Products', 'Order Now', 'Contact Support'],
    );
  }

  if (hasAny(message, ['bye', 'goodbye', 'close chat', 'finish chat'])) {
    return makeBotMessage(`Thank you for chatting with LY Cosmetics. We are happy to be part of your glow-up journey.

For faster help or to place your order, WhatsApp us on 0761 630 215.

LY Cosmetics - Glow better. Feel better. Be unforgettable.`);
  }

  if (hasAny(message, ['real person', 'human', 'agent', 'talk to someone', 'talk to support'])) {
    return makeBotMessage(`Our team can help you directly.

WhatsApp: 0761 630 215
Call: 0766 212 121
Email: lycosmetics1@gmail.com`);
  }

  if (message === 'shop products' || hasAny(message, ['products', 'shop'])) {
    return makeBotMessage(`At LY Cosmetics, we offer beauty products made to help you glow with confidence.

Lip Gloss Collection
Soft, shiny, hydrated lips with a beautiful non-sticky glow.

Hair Growth Oil
A lightweight oil for nourishing the scalp, caring for roots, and supporting a healthier-looking hair routine.

Price: UGX 25,000`, ['Lip Gloss Guide', 'Hair Growth Oil Guide', 'Price', 'Order Now']);
  }

  if (message === 'recommend product' || hasAny(message, ['recommend', 'choose product', 'best product'])) {
    return makeBotMessage(
      'I can help you choose the best LY Cosmetics product for your routine. What do you need today?',
      ['Dry lips', 'Shiny lips', 'Hair growth', 'Dry scalp', 'Hair shedding', 'I want both'],
    );
  }

  if (hasAny(message, ['price fixed', 'fixed price'])) {
    return makeBotMessage(
      'Our current product price is UGX 25,000. For bulk orders, promotions, or special requests, please contact us directly on WhatsApp: 0761 630 215.',
      ['Order Now', 'Contact Support'],
    );
  }

  if (hasAny(message, ['discount', 'promo', 'promotion', 'deal'])) {
    return makeBotMessage(
      'We sometimes offer special deals and promotions. Please contact us on WhatsApp to confirm if there is an active offer today: 0761 630 215.',
      ['Order Now', 'Contact Support'],
    );
  }

  if (hasAny(message, ['wholesale', 'bulk'])) {
    return makeBotMessage(
      'Thank you for your interest in LY Cosmetics. For wholesale or bulk orders, please contact us directly so we can discuss quantity, pricing, and delivery. WhatsApp: 0761 630 215. Call: 0766 212 121.',
      ['Contact Support', 'Order Now'],
    );
  }

  if (message === 'price' || hasAny(message, ['how much', 'cost', 'ugx 25000'])) {
    return makeBotMessage(`Our LY Cosmetics product price is UGX 25,000.

To order faster, WhatsApp us on 0761 630 215.`, ['Order Now', 'Delivery', 'Contact Support']);
  }

  if (message === 'order now' || message === 'order' || hasAny(message, ['place order', 'buy now', 'buy'])) {
    return makeBotMessage(`Thank you for choosing LY Cosmetics. To place your order, please send us these details:

Name:
Product:
Quantity:
Location:
Delivery or pickup:
Phone number:

For faster order confirmation, WhatsApp us on 0761 630 215.`, ['Delivery', 'Payment', 'Contact Support']);
  }

  if (hasAny(message, ['delivery fee', 'delivery cost'])) {
    return makeBotMessage(
      'Delivery cost depends on your location. Please send us your location, and we shall confirm the delivery fee. WhatsApp: 0761 630 215.',
      ['Order Now', 'Contact Support'],
    );
  }

  if (hasAny(message, ['delivery time', 'how long delivery', 'when delivery'])) {
    return makeBotMessage(
      'Delivery time depends on your location and order confirmation time. Please contact us on WhatsApp so we can confirm the estimated delivery time for your area: 0761 630 215.',
      ['Order Now', 'Contact Support'],
    );
  }

  if (hasAny(message, ['pickup', 'pick up', 'collect'])) {
    return makeBotMessage(
      'Pickup may be available. We are located in Kira, Kitukutwe, Kampala, Uganda. Please call or WhatsApp us before coming. Call: 0766 212 121. WhatsApp: 0761 630 215.',
      ['Location', 'Contact Support'],
    );
  }

  if (message === 'delivery' || hasAny(message, ['deliver'])) {
    return makeBotMessage(`Yes, delivery may be arranged depending on your location. Please send us your location on WhatsApp, and we shall confirm the delivery fee and delivery time.

WhatsApp: 0761 630 215`, ['Order Now', 'Payment', 'Contact Support']);
  }

  if (message === 'payment' || hasAny(message, ['pay', 'payment number', 'mobile money'])) {
    return makeBotMessage(`Payment details will be shared when you confirm your order. Please contact us on WhatsApp so we can guide you safely.

WhatsApp: 0761 630 215`, ['Order Now', 'Contact Support']);
  }

  if (message === 'hair growth oil guide' || hasAny(message, ['hair oil guide', 'hair growth oil'])) {
    return makeBotMessage(`Our LY Cosmetics Hair Growth Oil is made to care for your crown.

It helps to:
- Nourish the scalp
- Strengthen hair roots
- Moisturize dry scalp
- Reduce shedding caused by dryness
- Support a healthier-looking hair routine

For best results, use it consistently and massage it into your scalp.`, [
      'How to Use',
      'Hair Oil Results',
      'Product Safety',
      'Order Now',
    ]);
  }

  if (message === 'how to use' || hasAny(message, ['how to use it', 'use hair oil', 'apply hair oil'])) {
    return makeBotMessage(`To use LY Cosmetics Hair Growth Oil:

1. Apply a small amount directly to your scalp
2. Massage gently for 3-5 minutes
3. Use 2-4 times a week
4. Be consistent for better results

You can use it on natural hair, relaxed hair, braids, and protective styles.`, ['Price', 'Order Now', 'Product Safety']);
  }

  if (message === 'hair oil results' || hasAny(message, ['how long results', 'results take', 'when results'])) {
    return makeBotMessage(
      'Results are different for everyone. Some customers may notice softer, stronger-feeling hair earlier, while growth results may take more time. For best results, use the oil consistently for several weeks and maintain a healthy hair routine.',
      ['How to Use', 'Order Now', 'Product Safety'],
    );
  }

  if (hasAny(message, ['guarantee hair growth', 'guaranteed hair growth', 'can you guarantee', 'guarantee growth'])) {
    return makeBotMessage(
      'We cannot guarantee the same results for everyone because hair growth depends on scalp condition, hair care routine, diet, genetics, and consistency. Our hair growth oil supports a healthy scalp, stronger roots, and reduced dryness and shedding.',
      ['How to Use', 'Product Safety', 'Contact Support'],
    );
  }

  if (hasAny(message, ['stop hair loss', 'stops hair loss', 'hair loss'])) {
    return makeBotMessage(
      'Our hair growth oil can help strengthen roots, moisturize the scalp, and reduce shedding caused by dryness or weak hair. Serious hair loss can be caused by health, hormones, stress, or medical conditions. If hair loss is severe or sudden, we recommend speaking to a health professional.',
      ['Product Safety', 'Contact Support'],
    );
  }

  if (message === 'lip gloss guide' || hasAny(message, ['lip gloss'])) {
    return makeBotMessage(`Our LY Cosmetics Lip Gloss Collection is made for soft, smooth, shiny, and hydrated lips.

Benefits include:
- Deep hydration
- Non-sticky shine
- Long-lasting glow
- Smooth feeling
- Perfect for everyday wear

Available options include chocolate, strawberry, and crystal clear.`, ['Flavors', 'Is it sticky?', 'Dry lips', 'Order Now']);
  }

  if (message === 'is it sticky' || hasAny(message, ['sticky', 'non sticky'])) {
    return makeBotMessage(
      'Our lip gloss is designed to give a beautiful shine while feeling smooth and comfortable, without a heavy sticky feeling.',
      ['Price', 'Order Now', 'Lip Gloss Guide'],
    );
  }

  if (message === 'flavors' || hasAny(message, ['flavour', 'flavor', 'chocolate', 'strawberry'])) {
    return makeBotMessage(
      'Our lip gloss options include chocolate, strawberry, and crystal clear. Please contact us to confirm what is available today. WhatsApp: 0761 630 215.',
      ['Price', 'Order Now', 'Contact Support'],
    );
  }

  if (hasAny(message, ['how long it lasts', 'long lasting', 'lasts'])) {
    return makeBotMessage(
      'The lip gloss gives a long-lasting glow, but the exact time can depend on eating, drinking, and how often you reapply. For best shine, you can reapply when needed during the day.',
      ['Lip Gloss Guide', 'Order Now'],
    );
  }

  if (message === 'dry lips' || hasAny(message, ['good for dry lips', 'lips feel dry'])) {
    return makeBotMessage(
      'For dry lips, we recommend our LY Cosmetics Lip Gloss. It helps keep your lips soft, smooth, hydrated, and glowing.',
      ['Price', 'Order Now', 'Lip Gloss Guide'],
    );
  }

  if (message === 'shiny lips') {
    return makeBotMessage(
      'For shiny lips, we recommend our LY Cosmetics Lip Gloss. It gives your lips a beautiful glossy look with a smooth, comfortable feeling.',
      ['Price', 'Order Now', 'Lip Gloss Guide'],
    );
  }

  if (message === 'hair growth') {
    return makeBotMessage(
      'For hair growth support, we recommend our LY Cosmetics Hair Growth Oil. It helps nourish the scalp, strengthen roots, and support healthy-looking hair when used consistently.',
      ['How to Use', 'Price', 'Order Now'],
    );
  }

  if (message === 'dry scalp') {
    return makeBotMessage(
      'For dry scalp, we recommend our LY Cosmetics Hair Growth Oil. It helps moisturize the scalp and support a healthier hair routine.',
      ['How to Use', 'Price', 'Order Now'],
    );
  }

  if (message === 'hair shedding') {
    return makeBotMessage(
      'For shedding or weak roots, we recommend our LY Cosmetics Hair Growth Oil. It helps strengthen hair roots and reduce shedding caused by dryness or weak hair.',
      ['How to Use', 'Price', 'Order Now'],
    );
  }

  if (message === 'i want both' || hasAny(message, ['want both', 'both products'])) {
    return makeBotMessage(
      'Great choice. You can create a complete glow-up routine with our Lip Gloss and Hair Growth Oil.',
      ['Price', 'Order Now', 'Contact Support'],
    );
  }

  if (message === 'product safety' || message === 'safety') {
    return makeBotMessage(`Your safety and confidence matter to us. Before using any beauty product, please note:

- Results may differ from person to person
- For sensitive skin or scalp, do a patch test first
- If irritation happens, stop using the product
- If you have allergies, pregnancy concerns, scalp wounds, or medical conditions, ask a health professional before use
- Store products in a cool, dry place
- Avoid direct sunlight
- Keep products away from small children`, ['Order Now', 'Contact Support']);
  }

  if (hasAny(message, ['pregnant', 'pregnancy', 'breastfeeding'])) {
    return makeBotMessage(
      'For pregnancy or breastfeeding, we recommend checking the ingredients and asking a health professional before using any new product. Your safety comes first.',
      ['Product Safety', 'Contact Support'],
    );
  }

  if (hasAny(message, ['sensitive skin', 'sensitive scalp', 'allergy', 'allergies', 'irritation'])) {
    return makeBotMessage(
      'If you have sensitive skin or scalp, we recommend doing a small patch test first. Apply a small amount and wait to see if there is any irritation. If irritation happens, stop using the product. For allergies, pregnancy, wounds, or medical concerns, please speak to a health professional before use.',
      ['Product Safety', 'Contact Support'],
    );
  }

  if (hasAny(message, ['side effect', 'side effects'])) {
    return makeBotMessage(
      'Everyone can react differently. If you have sensitive skin, allergies, or scalp irritation, please do a patch test before using. If irritation happens, stop using the product. For serious reactions, please seek medical advice.',
      ['Product Safety', 'Contact Support'],
    );
  }

  if (hasAny(message, ['is your product safe', 'product safe', 'is it safe'])) {
    return makeBotMessage(
      'Our products are made for beauty care use. If you have sensitive skin, allergies, scalp wounds, pregnancy concerns, or a medical condition, we recommend doing a patch test first or asking a health professional before use. If irritation occurs, stop using the product.',
      ['Product Safety', 'Contact Support'],
    );
  }

  if (message === 'track my order' || hasAny(message, ['track order', 'check order'])) {
    return makeBotMessage(`To check your order, please send us:

Name used for order:
Phone number:
Product ordered:
Location:
Date ordered:

Our team will check and update you. For faster help, WhatsApp us on 0761 630 215.`, ['Contact Support']);
  }

  if (hasAny(message, ['order delayed', 'delayed', 'late delivery'])) {
    return makeBotMessage(
      'We are sorry for the delay. Delivery time may depend on location, rider availability, weather, or traffic. Please contact us with your name and order details so we can check and update you. WhatsApp: 0761 630 215.',
      ['Track My Order', 'Contact Support'],
    );
  }

  if (message === 'report a problem' || hasAny(message, ['problem', 'complaint'])) {
    return makeBotMessage(`We are sorry for the inconvenience. Please send us these details so our team can help you:

Name:
Phone number:
Product bought:
Date bought:
Problem noticed:
Photo, if available:

Our team will review and assist you. WhatsApp: 0761 630 215.`, ['Contact Support']);
  }

  if (hasAny(message, ['not happy', 'unhappy'])) {
    return makeBotMessage(
      'We are sorry to hear that. Your experience matters to us. Please share what happened, and our team will do our best to help you. You can also contact us directly on WhatsApp: 0761 630 215.',
      ['Report a Problem', 'Contact Support'],
    );
  }

  if (hasAny(message, ['damaged my hair', 'damage my hair'])) {
    return makeBotMessage(
      'We are sorry to hear about your experience. Please stop using the product immediately and contact us with details of how you used it, your hair type, and any reaction you noticed. For serious irritation, pain, or sudden hair loss, we recommend speaking to a health professional. WhatsApp: 0761 630 215.',
      ['Report a Problem', 'Contact Support'],
    );
  }

  if (hasAny(message, ['money back', 'refund'])) {
    return makeBotMessage(
      'We are sorry for the inconvenience. Please contact us with your order details so our team can review the issue and guide you according to our order policy. WhatsApp: 0761 630 215.',
      ['Report a Problem', 'Contact Support'],
    );
  }

  if (hasAny(message, ['wrong product', 'received wrong'])) {
    return makeBotMessage(
      'We are sorry for that inconvenience. Please contact us immediately with your order details and a clear photo of the product received. Our team will review and help you as soon as possible. WhatsApp: 0761 630 215.',
      ['Report a Problem', 'Contact Support'],
    );
  }

  if (message === 'location') {
    return makeBotMessage(`We are located in Kira, Kitukutwe, Kampala, Uganda.

Please contact us before visiting.

Call: 0766 212 121
WhatsApp: 0761 630 215
Email: lycosmetics1@gmail.com`, ['Order Now', 'Contact Support']);
  }

  if (message === 'contact support' || hasAny(message, ['contact', 'phone', 'email', 'whatsapp'])) {
    return makeBotMessage(`You can contact LY Cosmetics through:

Location: Kira, Kitukutwe, Kampala, Uganda
Email: lycosmetics1@gmail.com
Call: 0766 212 121
WhatsApp: 0761 630 215

For faster help, WhatsApp us on 0761 630 215.`, ['Order Now', 'Location']);
  }

  if (message === 'meet the ceos' || hasAny(message, ['ceo', 'ceos', 'founder', 'founders'])) {
    return makeBotMessage(`LY Cosmetics is led by Dushime Louange & Manirambona Belyse.

They created LY Cosmetics to help people feel confident, beautiful, and unforgettable through quality beauty products.

Our mission is simple: Glow better. Feel better. Be unforgettable.`, ['Shop Products', 'Contact Support']);
  }

  if (hasAny(message, ['why should i trust', 'trust your brand', 'trust'])) {
    return makeBotMessage(
      'Thank you for asking. At LY Cosmetics, we focus on beauty, confidence, and customer care. We are based in Kira, Kitukutwe, Kampala, Uganda, and customers can contact us directly through call, WhatsApp, or email.',
      ['Contact Support', 'Meet the CEOs'],
    );
  }

  if (hasAny(message, ['does not work', "doesn t work", 'not work for me'])) {
    return makeBotMessage(
      'Results can be different for each person, especially with hair products. We recommend using the product consistently and following the correct instructions. If you have concerns, please contact us directly so we can guide you on proper use. WhatsApp: 0761 630 215.',
      ['How to Use', 'Contact Support'],
    );
  }

  if (hasAny(message, ['ingredient', 'ingredients'])) {
    return makeBotMessage(
      'Please contact us directly for ingredient details and product information. WhatsApp: 0761 630 215. Email: lycosmetics1@gmail.com. If you have allergies or sensitive skin, please ask us before buying so we can guide you better.',
      ['Product Safety', 'Contact Support'],
    );
  }

  if (hasAny(message, ['return', 'returns'])) {
    return makeBotMessage(
      'For hygiene and safety reasons, beauty products may not always be returnable after opening or use. If there is any issue with your order, please contact us immediately so we can assist you. WhatsApp: 0761 630 215.',
      ['Report a Problem', 'Contact Support'],
    );
  }

  if (hasAny(message, ['stock', 'available', 'availability'])) {
    return makeBotMessage(
      'Please contact us on WhatsApp to confirm what is available today: 0761 630 215.',
      ['Order Now', 'Contact Support'],
    );
  }

  return makeBotMessage(`Sorry beauty, I did not understand that clearly. Please choose one of these options:

- Shop Products
- Price
- Order Now
- Delivery
- Location
- Contact Support

For faster help, WhatsApp us on 0761 630 215.`, ['Shop Products', 'Price', 'Order Now', 'Delivery', 'Location', 'Contact Support']);
};
const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeChatMessage]);
  const [inputMessage, setInputMessage] = useState('');

  const sendCustomerMessage = (message: string) => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      { text: message, isUser: true },
      getChatResponse(message),
    ]);
  };

  const sendMessage = () => {
    const currentMessage = inputMessage.trim();
    if (!currentMessage) return;

    setInputMessage('');
    sendCustomerMessage(currentMessage);
  };

  return (
    <>
      <button onClick={() => setIsChatOpen(true)} className="chat-float" aria-label="Chat with assistant">
        <MessageCircle className="h-6 w-6" />
        <span className="hidden font-semibold md:inline">Chat</span>
      </button>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4"
            onClick={() => setIsChatOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="w-full max-w-md rounded-[8px] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-luxury-ink/10 p-4">
                <h3 className="font-semibold text-luxury-ink">LY Glow Assistant 💫</h3>
                <button onClick={() => setIsChatOpen(false)} className="icon-button" aria-label="Close chat">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="h-80 space-y-4 overflow-y-auto p-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className="max-w-[88%]">
                      <div className={`chat-message ${message.isUser ? 'chat-message--user' : 'chat-message--bot'}`}>
                        {message.text}
                      </div>
                      {!message.isUser && message.actions && (
                        <div className="chat-actions">
                          {message.actions.map((action) => {
                            const actionUrl = getChatActionWhatsAppUrl(action);

                            if (actionUrl) {
                              return (
                                <a
                                  key={`${index}-${action}`}
                                  href={actionUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="chat-action"
                                >
                                  {action}
                                </a>
                              );
                            }

                            return (
                              <button
                                key={`${index}-${action}`}
                                type="button"
                                className="chat-action"
                                onClick={() => sendCustomerMessage(action)}
                              >
                                {action}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-luxury-ink/10 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 rounded-[6px] border border-luxury-ink/18 px-3 py-2 text-sm focus:border-luxury-rose focus:outline-none"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim()}
                    className="icon-button disabled:opacity-50"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HomePage = () => (
  <main>
    <section className="hero-section">
      <picture className="hero-media" aria-hidden="true">
        <img src={assets.hero} alt="" />
      </picture>
      <div className="hero-overlay" />

      <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-7xl items-center px-5 pb-12 pt-28 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="hero-copy"
        >
          <p className="eyebrow">Kampala Hair & Beauty Care</p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-white md:text-7xl">LY Cosmetics</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/84">
            Premium hair oil and lip gloss made to nourish your beauty routine, boost your confidence, and help you glow every day.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#home-products" className="button-light">
              Shop Products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={whatsappLinks.generalOrder} target="_blank" rel="noreferrer" className="button-ghost">
              Order on WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>2</strong>
              <span>beauty categories</span>
            </div>
            <div>
              <strong>3</strong>
              <span>lip gloss finishes</span>
            </div>
            <div>
              <strong>25k</strong>
              <span>UGX product price</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 md:px-8">
        {trustItems.map((item, index) => (
          <Reveal key={item.label} className="feature-tile" delay={index * 0.08}>
            <item.icon className="h-6 w-6 text-luxury-rose" />
            <div>
              <h3 className="font-semibold">{item.label}</h3>
              <p className="mt-1 text-sm leading-6 text-luxury-ink/62">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section id="home-products" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow-dark">Shop LY Cosmetics</p>
            <h2 className="section-title mt-4">Premium beauty care for lips, hair, and confidence.</h2>
          </div>
          <Link to="/shop" className="button-outline w-fit">
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          {homeProducts.map((item, index) => (
            <Reveal key={item.name} className="product-card" delay={index * 0.08}>
              <img src={item.image} alt={item.name} />
              <div className="product-card__body">
                <p className="eyebrow-dark">{item.category}</p>
                <h3 className="mt-3 text-3xl font-semibold">{item.name}</h3>
                <p className="mt-4 leading-7 text-luxury-ink/68">{item.description}</p>
                <div className="mt-6">
                  <span className="price-pill">{item.price}</span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a href={getProductOrderUrl(item.name)} target="_blank" rel="noreferrer" className="button-whatsapp justify-center">
                    Order Now
                    <ShoppingBag className="h-4 w-4" />
                  </a>
                  <a href={whatsappLinks.askProducts} target="_blank" rel="noreferrer" className="button-outline justify-center">
                    Ask on WhatsApp
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <p className="eyebrow-dark">Simple WhatsApp ordering</p>
          <h2 className="section-title mt-4">How to order from LY Cosmetics</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-4">
          {orderSteps.map((step, index) => (
            <Reveal key={step.label} className="step-card" delay={index * 0.07}>
              <span>{index + 1}</span>
              <h3>{step.label}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <a href={whatsappLinks.generalOrder} target="_blank" rel="noreferrer" className="button-whatsapp justify-center">
            Order on WhatsApp
            <MessageCircle className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>

    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.92fr_1.08fr] md:px-8">
        <Reveal className="owner-photo-stack">
          <div className="owner-photo owner-photo--front">
            <img src={assets.ownerApplying} alt="LY Cosmetics CEO applying hair growth oil" />
            <span className="owner-photo__tag">Owner routine</span>
          </div>
          <div className="owner-photo owner-photo--back">
            <img src={assets.ownerProduct} alt="LY Cosmetics CEO holding the hair growth oil" />
            <span className="owner-photo__tag">Product moment</span>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="eyebrow-dark">Meet the CEOs</p>
          <h2 className="section-title mt-4">Real beauty care from the people behind the brand.</h2>
          <p className="mt-5 text-lg font-semibold text-luxury-ink">
            Dushime Louange & Manirambona Belyse
          </p>
          <p className="mt-5 max-w-2xl leading-8 text-luxury-ink/68">
            The vision behind LY Cosmetics is to create beauty care that feels personal, confident, and easy to use every day.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="owner-note">
              <CheckCircle2 className="h-5 w-5 text-luxury-rose" />
              <span>Real brand care</span>
            </div>
            <div className="owner-note">
              <Sparkles className="h-5 w-5 text-luxury-rose" />
              <span>Confidence in every routine</span>
            </div>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLinks.askOil} target="_blank" rel="noreferrer" className="button-dark justify-center">
              Ask About the Oil
              <MessageCircle className="h-4 w-4" />
            </a>
            <Link to="/about" className="button-outline justify-center">
              Meet the Brand
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] md:px-8">
        <Reveal className="editorial-image">
          <img src={assets.hairApplication} alt="LY Cosmetics hair oil application to scalp" />
        </Reveal>
        <Reveal delay={0.12}>
          <p className="eyebrow-dark">Hair growth ritual</p>
          <h2 className="section-title mt-4">A beautiful routine from scalp to shine.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-luxury-ink/68">
            Part, apply, and massage the oil into the scalp for a simple routine that leaves hair feeling nourished, soft, and cared for.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {ritualSteps.map((step, index) => (
              <Reveal key={step.label} className="ritual-card" delay={index * 0.08}>
                <step.icon className="h-6 w-6 text-luxury-rose" />
                <h3 className="mt-5 text-xl font-semibold">{step.label}</h3>
                <p className="mt-3 text-sm leading-6 text-luxury-ink/62">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section-shell">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] md:px-8">
        <Reveal>
          <p className="eyebrow-dark">Lip gloss collection</p>
          <h2 className="section-title mt-4">Chocolate, strawberry, and crystal clear hydration.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-luxury-ink/68">
            Choose a soft everyday shine, a sweet pink finish, or a clean clear gloss that layers beautifully with any look.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {shadeCards.map((shade, index) => (
              <Reveal key={shade.name} className="shade-card" delay={index * 0.08}>
                <span className={`shade-dot shade-dot--${shade.name.toLowerCase().replace(/\s+/g, '-')}`} />
                <img src={shade.image} alt={`${shade.name} lip gloss`} />
                <h3>{shade.name}</h3>
                <p>{shade.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <a href={whatsappLinks.hydratingLipGloss} target="_blank" rel="noreferrer" className="button-whatsapp justify-center">
              Order Lip Gloss
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
        <Reveal className="editorial-image editorial-image--soft" delay={0.12}>
          <img src={assets.lipLineup} alt="LY Cosmetics lip gloss collection lineup" />
        </Reveal>
      </div>
    </section>

    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow-dark">Customer confidence</p>
          <h2 className="section-title mt-4">Why customers choose LY Cosmetics</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseItems.map((item, index) => (
            <Reveal key={item.label} className="choice-card" delay={index * 0.07}>
              <item.icon className="h-6 w-6 text-luxury-rose" />
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow-dark">Reviews</p>
            <h2 className="section-title mt-4">What our customers say</h2>
          </div>
          <a href={whatsappLinks.generalOrder} target="_blank" rel="noreferrer" className="button-whatsapp w-fit">
            Order Yours Today
            <Sparkles className="h-4 w-4" />
          </a>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {customerReviews.map((review, index) => (
            <Reveal key={review.quote} className="review-card" delay={index * 0.08}>
              <div className="mb-5 flex gap-1 text-luxury-gold" aria-label="Customer review">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote>"{review.quote}"</blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="care-note">
          <h2>Beauty care note</h2>
          <p>
            Our products are made for beauty care routines. Results may differ from person to person. If you have sensitive skin, allergies, scalp wounds, pregnancy concerns, or a medical condition, please do a patch test first or speak to a health professional before use.
          </p>
        </Reveal>
      </div>
    </section>
  </main>
);

const ShopPage = () => (
  <main className="page-shell">
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <Reveal className="mb-10 max-w-3xl">
        <p className="eyebrow-dark">Shop LY Cosmetics</p>
        <h1 className="section-title mt-4">Hair care and lip gloss essentials.</h1>
        <p className="mt-4 leading-7 text-luxury-ink/68">
          Choose your beauty essential and order directly through WhatsApp for availability, delivery details, and personal support.
        </p>
        <p className="shop-intro-note">No cart needed - order directly on WhatsApp with fast support.</p>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-2">
        {products.map((item, index) => (
          <Reveal key={item.name} className="shop-card" delay={index * 0.08}>
            <img src={item.image} alt={item.name} />
            <div className="shop-card__body">
              <div>
                <p className="eyebrow-dark">{item.category}</p>
                <h2 className="mt-3 text-3xl font-semibold">{item.name}</h2>
                <div className="mt-4 flex items-center gap-1 text-luxury-gold" aria-label="Five star product">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 leading-7 text-luxury-ink/68">{item.description}</p>
                <p className="mt-6">
                  <span className="price-pill">{item.price}</span>
                </p>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {item.benefits.map((benefit) => (
                  <div key={benefit} className="check-row">
                    <Sparkles className="h-5 w-5 text-luxury-rose" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={getProductOrderUrl(item.name)} target="_blank" rel="noreferrer" className="button-whatsapp justify-center">
                  Order on WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a href={CALL_HREF} className="button-outline justify-center">
                  Call Now
                  <Phone className="h-4 w-4" />
                </a>
              </div>
              <p className="order-note mt-4">Order directly through WhatsApp for quick confirmation.</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <Reveal className="mb-8 max-w-2xl">
        <p className="eyebrow-dark">Quick guide</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">How to choose the right product</h2>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {shopChoiceItems.map((item, index) => (
          <Reveal key={item.label} className="shop-choice-card" delay={index * 0.08}>
            <item.icon className="h-6 w-6 text-luxury-rose" />
            <h3>{item.label}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 lg:grid-cols-[0.9fr_1.1fr] md:px-8">
      <Reveal className="ingredient-panel">
        <img src={assets.oilTexture} alt="Golden oil texture close up" />
      </Reveal>
      <Reveal className="product-panel" delay={0.12}>
        <div className="flex items-center gap-3">
          <Award className="h-5 w-5 text-luxury-gold" />
          <p className="eyebrow-dark">Customer confidence</p>
        </div>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Choose with confidence before you order.</h2>
        <p className="mt-4 leading-8 text-luxury-ink/68">
          Ask about ingredients, delivery, product use, and shade choices directly on WhatsApp. The LY Cosmetics team is ready to help you choose what fits you best.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {confidencePoints.map((point) => (
            <div key={point} className="support-point">
              <CheckCircle2 className="h-5 w-5 text-luxury-rose" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <Reveal className="shop-order-panel">
        <div>
          <p className="eyebrow-dark">Shop page ordering</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">How to order from the Shop page</h2>
        </div>
        <div className="shop-order-steps">
          {shopOrderSteps.map((step, index) => (
            <div key={step} className="shop-order-step">
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
        <a href={whatsappLinks.generalOrder} target="_blank" rel="noreferrer" className="button-whatsapp justify-center">
          Order on WhatsApp
          <MessageCircle className="h-4 w-4" />
        </a>
      </Reveal>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <Reveal className="mb-8 max-w-2xl">
        <p className="eyebrow-dark">Reviews</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">What customers are saying</h2>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} className="testimonial-card" delay={index * 0.08}>
            <blockquote className="text-lg leading-8 text-luxury-ink/76">"{testimonial.quote}"</blockquote>
            <figcaption className="mt-5 text-sm font-bold uppercase text-luxury-rose">
              - {testimonial.name}
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <Reveal className="care-note">
        <h2>Beauty care note</h2>
        <p>
          Our products are made for beauty care routines. Results may differ from person to person. If you have sensitive skin, allergies, scalp wounds, pregnancy concerns, or a medical condition, please do a patch test first or speak to a health professional before use.
        </p>
      </Reveal>
    </section>
  </main>
);

const AboutPage = () => (
  <main className="page-shell">
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] md:px-8">
      <Reveal className="editorial-image">
        <img src={assets.hairLifestyle} alt="Confident LY Cosmetics customer with healthy natural hair" />
      </Reveal>
      <Reveal delay={0.12}>
        <p className="eyebrow-dark">About the brand</p>
        <h1 className="section-title mt-4">A beauty brand built around confidence, care, and clear service.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-luxury-ink/68">
          LY Cosmetics is a Kampala-based hair and beauty care brand created to make everyday beauty feel simple, polished, and confidence-building. Our products are easy to order, easy to use, and supported with direct customer guidance.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/shop" className="button-dark justify-center">
            Shop Products
            <ShoppingBag className="h-4 w-4" />
          </Link>
          <a href={whatsappLinks.generalOrder} target="_blank" rel="noreferrer" className="button-whatsapp justify-center">
            Order on WhatsApp
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <Reveal className="mb-8 max-w-3xl">
        <p className="eyebrow-dark">Meet the CEOs</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">The people behind the glow.</h2>
        <p className="mt-4 leading-8 text-luxury-ink/68">
          LY Cosmetics is personal, local, and built with accountability. Customers can order knowing there are real people ready to guide them with product questions, order support, and delivery details.
        </p>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="owner-story-card owner-story-card--product">
          <img src={assets.ownerProduct} alt="LY Cosmetics CEO presenting hair growth oil" />
          <div>
            <p className="eyebrow-dark">CEO approved</p>
            <h3 className="mt-3 text-2xl font-semibold">Presented with pride.</h3>
            <p className="mt-3 leading-7 text-luxury-ink/65">
              Each order is handled with care, from product questions to final delivery details.
            </p>
          </div>
        </Reveal>
        <Reveal className="owner-story-card owner-story-card--routine" delay={0.1}>
          <img src={assets.ownerApplying} alt="LY Cosmetics CEO applying hair growth oil to natural hair" />
          <div>
            <p className="eyebrow-dark">Real routine</p>
            <h3 className="mt-3 text-2xl font-semibold">Natural hair confidence.</h3>
            <p className="mt-3 leading-7 text-luxury-ink/65">
              Our hair oil is made for everyday routines that support softness, moisture, and a polished natural finish.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        {aboutLeaders.map((person, index) => (
          <Reveal key={person.name} className="leader-card" delay={index * 0.08}>
            <div className="leader-avatar">{person.initials}</div>
            <div>
              <h2 className="text-2xl font-semibold">{person.name}</h2>
              <p className="mt-2 text-sm uppercase text-luxury-ink/50">{person.title}</p>
              <p className="mt-5 leading-7 text-luxury-ink/65">
                {person.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <Reveal className="mission-vision-panel">
        <div className="max-w-2xl">
          <p className="eyebrow-dark">Our mission and vision</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Beauty care with a clear purpose.</h2>
        </div>
        <div className="mission-vision-grid">
          <div>
            <h3>Mission</h3>
            <p>
              To help customers feel confident, cared for, and beautiful through simple hair and lip care products that fit everyday routines.
            </p>
          </div>
          <div>
            <h3>Vision</h3>
            <p>
              To grow LY Cosmetics into a trusted beauty brand known for confidence, care, and clear customer service.
            </p>
          </div>
        </div>
      </Reveal>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <Reveal className="mb-8 max-w-2xl">
        <p className="eyebrow-dark">Our values</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">The standards behind every order.</h2>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {aboutValues.map((value, index) => (
          <Reveal key={value.label} className="about-value-card" delay={index * 0.07}>
            <value.icon className="h-6 w-6 text-luxury-rose" />
            <h3>{value.label}</h3>
            <p>{value.text}</p>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <Reveal className="brand-story">
        <div>
          <p className="eyebrow-dark">Our promise</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Professional service with a personal touch.</h2>
        </div>
        <p className="max-w-2xl leading-8 text-luxury-ink/68">
          From product questions to delivery details, LY Cosmetics keeps the shopping experience clear, friendly, and simple so every customer can buy with confidence.
        </p>
      </Reveal>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <Reveal className="about-cta">
        <div>
          <p className="eyebrow-dark">Glow better. Feel better. Be unforgettable.</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Ready to start your glow-up?</h2>
          <p className="mt-4 max-w-2xl leading-8 text-luxury-ink/68">
            Explore our hair oil and lip gloss collection, then order directly through WhatsApp for fast support.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Link to="/shop" className="button-dark justify-center">
            Shop Products
            <ShoppingBag className="h-4 w-4" />
          </Link>
          <a href={whatsappLinks.generalOrder} target="_blank" rel="noreferrer" className="button-whatsapp justify-center">
            Order on WhatsApp
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
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
        <ContactBand />
        <Footer />
        <WhatsAppButton />
        <ChatButton />
      </div>
    </Router>
  );
}

