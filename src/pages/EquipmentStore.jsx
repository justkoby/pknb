import { useState } from 'react';

// Product Data
const PRODUCTS = [
  // SOLAR & ENERGY PACKAGES
  {
    id: 'solar-essentials',
    name: 'Essentials Solar Package',
    category: 'Power Solutions',
    subcategory: 'Solar Packages',
    price: 'GHS 15,000',
    tag: 'Starter Package',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&q=80',
    specs: '3KVA hybrid inverter, 2.5KWh lithium battery, 4x 450W solar panels.',
    idealFor: 'Basic homes, apartments, and budget-conscious families looking for load shedding backup.',
    powers: ['LED Lights', 'Smart TV', 'WiFi Router', 'Standing Fans', 'Laptop Chargers'],
    features: ['Auto-switch during grid outages', 'Safe lithium battery chemistry', 'Zero noise & low maintenance'],
    includes: ['Hybrid solar inverter', 'High-capacity lithium storage', 'Mono-crystalline solar panels', 'Professional installation support']
  },
  {
    id: 'solar-comfort',
    name: 'Comfort Solar Package',
    category: 'Power Solutions',
    subcategory: 'Solar Packages',
    price: 'GHS 35,000',
    tag: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80',
    specs: '5KVA hybrid inverter, 5.0KWh lithium battery, 8x 450W solar panels.',
    idealFor: 'Medium-sized family homes and small offices wanting major grid independence.',
    powers: ['Double-door Refrigerator', 'Microwave', 'Washing Machine (Daytime)', 'Water Pump', 'Basic lights, fans, TV'],
    features: ['High surge capacity', 'Expandable battery bank', 'Web-monitored performance tracking'],
    includes: ['Smart 5KVA hybrid inverter', '5KWh Premium Lithium Battery', '8x high-efficiency solar panels', 'Full mounting gear & installation']
  },
  {
    id: 'solar-plusplus',
    name: 'Plus Plus Solar Package',
    category: 'Power Solutions',
    subcategory: 'Solar Packages',
    price: 'GHS 50,000',
    tag: 'Extended Runtime',
    image: 'https://images.unsplash.com/photo-1620025707541-356914c80b91?w=400&q=80',
    specs: '8KVA hybrid inverter, 10.0KWh premium storage, 12x 450W panels.',
    idealFor: 'Larger families and mid-scale businesses needing reliable overnight backup for heavy loads.',
    powers: ['Multiple Fridges & Freezers', 'Washing Machine & Iron', '1x Inverter Air Conditioner (6 hours)', 'Water Pumps & Lights'],
    features: ['Massive overnight battery capacity', 'Rapid battery charging from solar/grid', 'Industrial-grade breaker protection'],
    includes: ['Heavy-duty 8KVA Inverter', '10KWh LiFePO4 battery pack', '12x high-efficiency solar panels', 'Smart electrical integration']
  },
  {
    id: 'solar-premium',
    name: 'Premium Solar Package',
    category: 'Power Solutions',
    subcategory: 'Solar Packages',
    price: 'GHS 90,000',
    tag: 'Full Independence',
    image: 'https://images.unsplash.com/photo-1548613053-220cdbd2d0a0?w=400&q=80',
    specs: '12KVA hybrid inverter, 20.0KWh scalable storage, 16x 450W panels.',
    idealFor: 'Luxury estates, manufacturing workshops, and offices desiring full energy autonomy.',
    powers: ['3x Air Conditioners (Full runtime)', 'Electric Water Heaters', 'Water Pumps & Heavy Machinery', 'Whole-facility backup'],
    features: ['Seamless UPS transfer (<10ms)', 'Heavy industrial electrical engineering integration', 'Full off-grid autonomy mode enabled'],
    includes: ['Dual 12KVA commercial inverters', '20KWh Ultra-capacity battery array', '16x premium solar modules', 'Accra-wide premium standard installation']
  },
  
  // GENERATORS
  {
    id: 'gen-firman',
    name: 'FIRMAN ECO8990ES Generator',
    category: 'Power Solutions',
    subcategory: 'Generators',
    price: 'Call for Pricing',
    tag: 'In Stock',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&q=80',
    specs: '8.5KVA peak output, key start & remote control, low oil shutdown.',
    idealFor: 'Commercial buildings, offices, and large residential estates needing robust mechanical backup.',
    powers: ['Air Conditioners', 'Refrigerators', 'Construction Tools', 'Whole building lighting'],
    features: ['Extremely low fuel consumption', 'Long run fuel tank (25L)', 'Industrial copper alternator'],
    includes: ['FIRMAN generator unit', 'Maintenance tool kit', 'Battery for key start', '12-month manufacturer warranty']
  },
  {
    id: 'gen-kama',
    name: 'KAMA Silent Diesel Generator',
    category: 'Power Solutions',
    subcategory: 'Generators',
    price: 'Call for Pricing',
    tag: 'Heavy Duty',
    image: 'https://images.unsplash.com/photo-1540339830292-4509e47db2f2?w=400&q=80',
    specs: '5.0KVA rated, soundproof enclosure, automatic voltage regulation (AVR).',
    idealFor: 'Offices and residential locations requiring quiet, long-running alternative power.',
    powers: ['Computers & Servers', 'Air Conditioners', 'Pumps', 'Grid lighting systems'],
    features: ['Ultra-silent acoustic canopy', 'Highly reliable diesel core', 'ATS compatible interface'],
    includes: ['KAMA generator unit', 'Sound insulation kit', 'Startup starter battery', 'Full inspection check']
  },
  {
    id: 'gen-tiger',
    name: 'TIGER TG950 Utility Generator',
    category: 'Power Solutions',
    subcategory: 'Generators',
    price: 'GHS 2,800',
    tag: 'Highly Portable',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80',
    specs: '650W peak, 2-stroke single cylinder, recoil start.',
    idealFor: 'Small kiosks, market stalls, camping trips, and essential lighting backup.',
    powers: ['LED lights', 'Cell phone chargers', 'WiFi routers', 'Small standing fans'],
    features: ['Highly lightweight & portable design', 'Very low fuel operation cost', 'Simple manual override mechanics'],
    includes: ['TIGER generator unit', 'Oil mixing container', 'Manual kit', 'Plug socket attachment']
  },

  // EMERGENCY BULB
  {
    id: 'bulb-emergency',
    name: 'Smart Rechargeable Emergency LED Bulb',
    category: 'Emergency Solutions',
    subcategory: 'Lighting',
    price: 'GHS 120 (Bulk rates available)',
    tag: 'Bestselling Utility',
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400&q=80',
    specs: '15W output, 4 hours runtime on backup battery, standard screw/bayonet socket.',
    idealFor: 'Homes, hostels, restaurants, and warehouses seeking automatic illumination during blackout.',
    powers: ['Backup power outages', 'Emergency flashlight', 'Outdoor campsite utility'],
    features: ['Automatic charge when grid is active', 'Instantly switches on when power drops', 'Energy saving A+ grade bulbs'],
    includes: ['15W rechargeable smart bulb', 'Hanger hook adapter for outdoor use', 'Protective plastic sleeve']
  },

  // SAFETY EQUIPMENT (PPE)
  {
    id: 'ppe-helmet',
    name: 'B2B Professional Safety Helmet',
    category: 'Safety Equipment',
    subcategory: 'PPE Gear',
    price: 'GHS 280',
    tag: 'In Stock',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=400&q=80',
    specs: 'High-density polyethylene (HDPE) shell, ANSI Z89.1 approved.',
    idealFor: 'Construction workers, civil engineers, factories, and site assessment officers.',
    powers: ['Impact protection', 'Electrical shock safety', 'Sun glare shielding'],
    features: ['6-point suspension harness', 'Adjustable ratchet dial fit', 'Universal side slots for earmuffs'],
    includes: ['PPE helmet shell', 'Sweatband lining', 'Adjustable chin strap']
  },
  {
    id: 'ppe-vest',
    name: 'High-Visibility Reflective Vest',
    category: 'Safety Equipment',
    subcategory: 'PPE Gear',
    price: 'GHS 95',
    tag: 'High Visibility',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=400&q=80',
    specs: 'Fluorescent polyester, retroreflective strips, ANSI Class 2.',
    idealFor: 'Road construction, night shifts, facility managers, and safety compliance officers.',
    powers: ['High visibility alert', 'B2B crew identification', 'Day/night outdoor safety'],
    features: ['Highly breathable mesh structure', 'Multiple chest pockets for tools', 'Premium zipper closure'],
    includes: ['Class 2 reflective vest garment']
  },
  {
    id: 'ppe-gloves',
    name: 'Heavy-Duty Leather Welding Gloves',
    category: 'Safety Equipment',
    subcategory: 'PPE Gear',
    price: 'GHS 150',
    tag: 'In Stock',
    image: 'https://images.unsplash.com/photo-1594818821995-11852536b66d?w=400&q=80',
    specs: 'Split cowhide leather, cotton flannel lining, heat resistant.',
    idealFor: 'Welding workshops, hot work sectors, metal fabrication, and grinding operations.',
    powers: ['High temperature protection', 'Anti-spark safety', 'Scrape and puncture prevention'],
    features: ['Reinforced thumb design', 'Extended gauntlet cuff for forearm shield', 'Fire-retardant Kevlar stitching'],
    includes: ['1x pair heavy-duty welding gloves']
  },
  {
    id: 'ppe-goggles',
    name: 'Industrial Anti-Fog Goggles',
    category: 'Safety Equipment',
    subcategory: 'PPE Gear',
    price: 'GHS 75',
    tag: 'UV Protected',
    image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?w=400&q=80',
    specs: 'Polycarbonate lenses, scratch resistant, wrap-around protection.',
    idealFor: 'Chemical laboratories, metal cutting spaces, dusty construction zones.',
    powers: ['Impact flying debris defense', 'Chemical splashes prevention', 'UV rays protection'],
    features: ['Direct ventilation airflow', 'Soft PVC frame sealing', 'Elastic adjustable headband'],
    includes: ['Anti-fog industrial goggles unit']
  },

  // INDUSTRIAL TOOLS (BOSCH)
  {
    id: 'tool-drill',
    name: 'BOSCH GSB 13 RE Impact Drill',
    category: 'Industrial Tools',
    subcategory: 'Bosch Power Tools',
    price: 'Call for Pricing',
    tag: 'Professional',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80',
    specs: '650W input power, 13mm chuck, forward/reverse rotation.',
    idealFor: 'Maintenance workshops, electrical installations, brickwork, and timber drilling.',
    powers: ['Masonry drilling', 'Steel & wood drilling', 'Screwdriving utility'],
    features: ['Highly ergonomic slimline grip', 'Robust keyless chuck mechanics', 'Electronic speed control trigger'],
    includes: ['BOSCH GSB 13 RE drill', 'Side auxiliary handle', 'Depth stop guide', 'Hard carrying case']
  },
  {
    id: 'tool-grinder',
    name: 'BOSCH GWS 750 Angle Grinder',
    category: 'Industrial Tools',
    subcategory: 'Bosch Power Tools',
    price: 'Call for Pricing',
    tag: 'In Stock',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&q=80',
    specs: '750W motor, 115mm disc diameter, spindle lock.',
    idealFor: 'Metal fabricators, masonry cutting, rust removal, and brick smoothing.',
    powers: ['Metal grinding & cutting', 'Stone scoring', 'Abrasive sanding'],
    features: ['Extremely compact body grip', 'Dust protection air vents', 'High overload resistance capacity'],
    includes: ['BOSCH GWS 750 grinder', 'Protective safety guard', 'Pin wrench tool', 'Cardboard packaging box']
  },
  {
    id: 'tool-saw',
    name: 'BOSCH GKS 190 Circular Saw',
    category: 'Industrial Tools',
    subcategory: 'Bosch Power Tools',
    price: 'Call for Pricing',
    tag: 'Precision Tool',
    image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?w=400&q=80',
    specs: '1400W powerful motor, 190mm blade, 70mm cut depth.',
    idealFor: 'Carpenters, building structural framing, heavy plywood sawing, roofing contractors.',
    powers: ['Plywood and solid wood cutting', 'Bevel angle slicing', 'Groove board cutting'],
    features: ['Strong double metal support base', 'Turbo dust blower mechanism', 'Anti-snag protective lower guard'],
    includes: ['BOSCH GKS 190 circular saw unit', 'Slicing wood blade (190mm)', 'Parallel guide brace', 'Hex wrench key']
  },

  // ABRASIVES
  {
    id: 'abr-cutting',
    name: 'Premium Metal Cutting Disc',
    category: 'Abrasives',
    subcategory: 'Consumables',
    price: 'GHS 45 (pack of 10)',
    tag: 'In Stock',
    image: 'https://images.unsplash.com/photo-1513828729020-56f22295a73c?w=400&q=80',
    specs: '115mm diameter, 1.0mm thickness, maximum 13,300 RPM.',
    idealFor: 'Metal fabrication shops, cutting steel rods, rebar slicing, sheet metal fabricators.',
    powers: ['Stainless steel cutting', 'Carbon steel rebar', 'Iron pipes profile'],
    features: ['Ultra-thin profile for fast slicing', 'Minimal burr and waste creation', 'Fiberglass reinforced structure'],
    includes: ['Pack of 10 industrial cutting discs']
  },
  {
    id: 'abr-wheel',
    name: 'Industrial Grinding Wheel',
    category: 'Abrasives',
    subcategory: 'Consumables',
    price: 'GHS 65 (pack of 5)',
    tag: 'Heavy Grinding',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&q=80',
    specs: '125mm diameter, 6.0mm thickness, aluminum oxide abrasive.',
    idealFor: 'Smoothing weld seams, removing excess metal, scale scraping, casting processing.',
    powers: ['Welded joint leveling', 'Heavy iron beveling', 'Anti-scale scraping'],
    features: ['Premium aluminum oxide grain structure', 'Long lifespan usage ratio', 'Safe heavy vibration tolerance'],
    includes: ['Pack of 5 heavy grinding wheels']
  }
];

export default function EquipmentStore() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // SOLAR CALCULATOR STATE
  const [calcAnswers, setCalcAnswers] = useState({
    facility: '',
    appliances: '',
    outages: ''
  });
  const [calcResult, setCalcResult] = useState(null);

  // FILTER LOGIC
  const filteredProducts = PRODUCTS.filter(prod => {
    const matchesTab = activeTab === 'ALL' || prod.category.toUpperCase() === activeTab.toUpperCase();
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // CALCULATOR LOGIC
  const handleCalcSelect = (field, val) => {
    const updated = { ...calcAnswers, [field]: val };
    setCalcAnswers(updated);

    // Calculate once we have at least facility and appliances
    if (updated.facility && updated.appliances) {
      let recommended = null;

      if (updated.appliances === 'heavy' || updated.facility === 'commercial') {
        recommended = PRODUCTS.find(p => p.id === 'solar-premium');
      } else if (updated.appliances === 'ac' || updated.facility === 'office') {
        recommended = PRODUCTS.find(p => p.id === 'solar-plusplus');
      } else if (updated.appliances === 'fridge') {
        recommended = PRODUCTS.find(p => p.id === 'solar-comfort');
      } else {
        recommended = PRODUCTS.find(p => p.id === 'solar-essentials');
      }

      setCalcResult(recommended);
    }
  };

  // WHATSAPP URL GENERATOR
  const getWhatsAppLink = (product, isCalc = false) => {
    let msg = '';
    if (isCalc) {
      msg = `Hello PKNB Consult, I completed your Solar Calculator on the website. I have a ${calcAnswers.facility || 'property'} requiring backup for ${calcAnswers.appliances === 'basic' ? 'Basic Lights & WiFi' : calcAnswers.appliances === 'fridge' ? 'Fridges & Basic power' : calcAnswers.appliances === 'ac' ? 'ACs & Freezers' : 'Heavy equipment'}. The calculator recommended the ${product.name}. I would like to request a formal proposal and site inspection.`;
    } else {
      msg = `Hello PKNB Consult, I'm interested in the "${product.name}" (${product.specs}) which I saw on your website. I would like more information about B2B pricing, availability, and delivery options.`;
    }
    return `https://wa.me/233241307209?text=${encodeURIComponent(msg)}`;
  };

  const getEmailLink = (product) => {
    const subject = `Inquiry: ${product.name}`;
    const body = `Hello PKNB Consult Team,\n\nI am writing to inquire about the "${product.name}" featured on your store page.\n\nProduct Details:\n- Specs: ${product.specs}\n- Price: ${product.price}\n\nKindly provide more details regarding current bulk B2B pricing, availability, and nationwide delivery timelines to my location.\n\nThank you.`;
    return `mailto:hello@pknbconsult.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="equipment-page">
      {/* HERO SECTION */}
      <header className="shop-hero">
        <div className="wrap">
          <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
            <span className="eyebrow reveal" style={{ color: 'var(--orange)' }}>Industrial Solutions &amp; Supplies</span>
            <h1 className="hero__title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', lineHeight: 1.1, margin: '1rem 0' }}>
              Reliable Industrial Equipment &amp; <br />
              <span style={{ color: 'var(--orange)' }}>Engineering Supplies</span>
            </h1>
            <p className="hero__lead" style={{ opacity: 0.9 }}>
              From heavy-duty off-grid solar packages and quiet generators to safety gear, Bosch tools, and grinding consumables. PKNB Consult supplies dependable, genuine products designed for B2B procurement, manufacturing, and construction sites.
            </p>
            <div className="hero__cta-row" style={{ marginTop: '2.5rem' }}>
              <a href="#solar-packages" className="btn btn--primary" style={{ background: 'var(--orange)', borderColor: 'var(--orange)', color: 'var(--bg-navy)' }}>
                Solar Packages
              </a>
              <a href="#all-products" className="btn btn--ghost" style={{ border: '1px solid var(--border-tech)' }}>
                Browse Catalog
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* WHY CHOOSE SECTION */}
      <section className="section" style={{ background: 'var(--bg-navy-elev)', borderBottom: '1px solid var(--border-tech)' }}>
        <div className="wrap">
          <header className="sec-head" style={{ marginBottom: '3rem' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why PKNB Equipment</span>
              <h2>Premium Standards, Guaranteed supply.</h2>
            </div>
          </header>

          <div className="services__grid">
            <div className="service-card" style={{ background: 'var(--bg-navy)', border: '1px solid var(--border-tech)', padding: '2rem' }}>
              <div className="service-card__num" style={{ color: 'var(--orange)' }}>01</div>
              <h4 style={{ margin: '1rem 0' }}>Genuine Equipment</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}>We strictly partner with top tier brands like BOSCH and FIRMAN, guaranteeing 100% genuine industrial specifications.</p>
            </div>
            <div className="service-card" style={{ background: 'var(--bg-navy)', border: '1px solid var(--border-tech)', padding: '2rem' }}>
              <div className="service-card__num" style={{ color: 'var(--orange)' }}>02</div>
              <h4 style={{ margin: '1rem 0' }}>Engineering Expertise</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}>We are not just sellers; we are engineers. We run detailed assessments to verify that any solar/power packages perfectly fit your demands.</p>
            </div>
            <div className="service-card" style={{ background: 'var(--bg-navy)', border: '1px solid var(--border-tech)', padding: '2rem' }}>
              <div className="service-card__num" style={{ color: 'var(--orange)' }}>03</div>
              <h4 style={{ margin: '1rem 0' }}>Nationwide Delivery</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}>Fast, secure delivery directly to industrial facilities, mining grids, warehouses, and homes across Ghana.</p>
            </div>
            <div className="service-card" style={{ background: 'var(--bg-navy)', border: '1px solid var(--border-tech)', padding: '2rem' }}>
              <div className="service-card__num" style={{ color: 'var(--orange)' }}>04</div>
              <h4 style={{ margin: '1rem 0' }}>Full Technical Support</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}>Ongoing equipment support, troubleshooting assistance, replacement parts supply, and site checkups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLAR PACKAGES STACK (FEATURED FIRST) */}
      <section id="solar-packages" className="section" style={{ background: 'var(--bg-navy)' }}>
        <div className="wrap">
          <header className="sec-head" style={{ marginBottom: '3rem' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Backup Power &amp; Off-Grid</span>
              <h2>Smart Solar &amp; Backup Energy Packages</h2>
              <p style={{ maxWidth: '600px', color: 'var(--ink-dim)', marginTop: '0.5rem' }}>
                Affordable solar and backup power configurations designed for apartments, homes, high-end estates, and corporate complexes across Africa.
              </p>
            </div>
          </header>

          {/* SOLAR FIND MY PACKAGE CALCULATOR */}
          <div className="calc-card">
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--orange)' }}>Find My Solar Package</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)', marginBottom: '2rem' }}>Answer three quick questions to let our engineering logic recommend the absolute best package for your load demand.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="calc-question">
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>1. What type of property do you want to back up?</p>
                <div className="calc-options">
                  {[
                    { id: 'apartment', label: 'Apartment / Small Flat' },
                    { id: 'house', label: 'Residential House' },
                    { id: 'office', label: 'Corporate Office' },
                    { id: 'commercial', label: 'Factory / Large Clinic' }
                  ].map(opt => (
                    <button 
                      key={opt.id}
                      className={`calc-option-btn ${calcAnswers.facility === opt.id ? 'is-selected' : ''}`}
                      onClick={() => handleCalcSelect('facility', opt.id)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="calc-question">
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>2. Which appliances are absolutely essential?</p>
                <div className="calc-options">
                  {[
                    { id: 'basic', label: 'Lights, TV, WiFi, Fan' },
                    { id: 'fridge', label: 'Fridge + Basic power' },
                    { id: 'ac', label: '1-2 Air Conditioners + Fridge' },
                    { id: 'heavy', label: 'Heavy loads / Heavy machinery' }
                  ].map(opt => (
                    <button 
                      key={opt.id}
                      className={`calc-option-btn ${calcAnswers.appliances === opt.id ? 'is-selected' : ''}`}
                      onClick={() => handleCalcSelect('appliances', opt.id)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="calc-question">
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>3. How frequently do you suffer load shedding?</p>
                <div className="calc-options">
                  {[
                    { id: 'low', label: 'Rarely (occasional surges)' },
                    { id: 'mid', label: 'Moderately (2-4 hours)' },
                    { id: 'high', label: 'Frequently (long hours)' }
                  ].map(opt => (
                    <button 
                      key={opt.id}
                      className={`calc-option-btn ${calcAnswers.outages === opt.id ? 'is-selected' : ''}`}
                      onClick={() => handleCalcSelect('outages', opt.id)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {calcResult && (
              <div className="calc-result">
                <span className="badge" style={{ background: 'var(--orange)', color: 'var(--bg-navy)', padding: '0.2rem 0.5rem', fontSize: '0.6rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Recommended Package</span>
                <h3 style={{ margin: '0.5rem 0' }}>{calcResult.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}><strong>Specs:</strong> {calcResult.specs}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)', margin: '0.5rem 0' }}><strong>Starting From:</strong> <span style={{ color: 'var(--orange)', fontWeight: 'bold' }}>{calcResult.price}</span></p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <a href={getWhatsAppLink(calcResult, true)} target="_blank" rel="noreferrer" className="modal-btn-wa" style={{ textDecoration: 'none', borderRadius: '4px' }}>
                    Request Quote on WhatsApp
                  </a>
                  <button onClick={() => setSelectedProduct(calcResult)} className="modal-btn-email" style={{ borderRadius: '4px' }}>
                    View Package Details
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* PREMIUM HORIZONTAL SOLAR PACKAGES CARDS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '4rem' }}>
            {PRODUCTS.filter(p => p.subcategory === 'Solar Packages').map(p => (
              <div key={p.id} className="service-card" style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '2rem', background: 'var(--bg-navy-elev)', border: '1px solid var(--border-tech)', padding: '2rem', alignItems: 'center' }}>
                <div style={{ overflow: 'hidden', border: '1px solid var(--border-tech)', aspectRatio: '1.4' }}>
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="eyebrow" style={{ color: 'var(--orange)', margin: 0 }}>{p.tag}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--orange)', fontSize: '1.1rem', fontWeight: 'bold' }}>{p.price}</span>
                  </div>
                  <h3 style={{ margin: '0.5rem 0' }}>{p.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}><strong>Specs:</strong> {p.specs}</p>
                  
                  <div style={{ margin: '1rem 0' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--orange)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ideal For powering:</p>
                    <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.2rem 1rem', paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--ink-dim)' }}>
                      {p.powers.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                    <a href={getWhatsAppLink(p)} target="_blank" rel="noreferrer" className="modal-btn-wa" style={{ textDecoration: 'none', borderRadius: '4px', fontSize: '0.65rem' }}>
                      WhatsApp Lead
                    </a>
                    <a href={`tel:+233241307209`} className="modal-btn-call" style={{ textDecoration: 'none', borderRadius: '4px', fontSize: '0.65rem' }}>
                      Call B2B Desk
                    </a>
                    <button onClick={() => setSelectedProduct(p)} className="modal-btn-email" style={{ borderRadius: '4px', padding: '0.6rem 1rem', fontSize: '0.65rem' }}>
                      Full Specifications
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SOLAR COMPARISON TABLE */}
          <div style={{ marginTop: '5rem' }}>
            <h3 style={{ color: 'var(--orange)', marginBottom: '1rem' }}>Comparative Package Grid</h3>
            <div className="comp-table-container">
              <table className="comp-table">
                <thead>
                  <tr>
                    <th>Package Name</th>
                    <th>Inverter Capacity</th>
                    <th>Lithium Storage</th>
                    <th>Solar Array</th>
                    <th>Starting From</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS.filter(p => p.subcategory === 'Solar Packages').map(p => (
                    <tr key={p.id}>
                      <td style={{ fontWeight: 'bold' }}>{p.name}</td>
                      <td>{p.specs.split(',')[0]}</td>
                      <td>{p.specs.split(',')[1]}</td>
                      <td>{p.specs.split(',')[2] || 'Grid Only'}</td>
                      <td style={{ color: 'var(--orange)', fontWeight: 'bold' }}>{p.price}</td>
                      <td>
                        <button onClick={() => setSelectedProduct(p)} className="shop-tab-btn" style={{ padding: '0.4rem 0.8rem', width: 'auto' }}>
                          Specs &amp; Quote
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY LED BULB SPLIT SHOWCASE */}
      <section className="section" style={{ background: 'var(--bg-navy-elev)', borderTop: '1px solid var(--border-tech)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ border: '1px solid var(--border-tech)', overflow: 'hidden', background: '#080b11', padding: '2rem', display: 'grid', placeItems: 'center' }}>
              <img 
                src="https://images.unsplash.com/photo-1550985616-10810253b84d?w=500&q=80" 
                alt="Emergency Smart Bulb" 
                style={{ maxWidth: '80%', height: 'auto', border: '1px solid var(--border-tech)' }} 
              />
            </div>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Featured Product Spotlight</span>
              <h2 style={{ margin: '1rem 0' }}>15W Smart Rechargeable Emergency LED Bulb</h2>
              <p style={{ color: 'var(--ink-dim)', marginBottom: '1.5rem' }}>
                Say goodbye to sudden blackouts! This high-luminance smart bulb operates exactly like a standard LED bulb when power is on, and automatically switches to its high-durability internal lithium battery when the power cut hits, providing up to 4 hours of bright continuous illumination.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--orange)', fontWeight: 'bold' }}>✓</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}><strong>4-Hour Backup Power:</strong> Instant power outage illumination.</div>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--orange)', fontWeight: 'bold' }}>✓</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}><strong>Auto-charging:</strong> Recharges automatically during normal usage.</div>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--orange)', fontWeight: 'bold' }}>✓</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}><strong>Dual Functionality:</strong> Can be hung outdoor as a portable flashlight.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://wa.me/233241307209?text=Hello%20PKNB,%20I'm%20interested%20in%20ordering%20the%20Emergency%20Smart%20Rechargeable%20LED%20Bulbs%20in%20bulk.%20Please%20provide%20bulk%20rates." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="modal-btn-wa" 
                  style={{ textDecoration: 'none', borderRadius: '4px' }}
                >
                  Order Bulk on WhatsApp
                </a>
                <button 
                  onClick={() => setSelectedProduct(PRODUCTS.find(p => p.id === 'bulb-emergency'))} 
                  className="modal-btn-email" 
                  style={{ borderRadius: '4px' }}
                >
                  Full Technical Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CATALOG & FILTERS */}
      <section id="all-products" className="section" style={{ background: 'var(--bg-navy)', borderTop: '1px solid var(--border-tech)' }}>
        <div className="wrap">
          <header className="sec-head" style={{ marginBottom: '3rem' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Product Catalog</span>
              <h2>Powering Industry &amp; Safety Supplies</h2>
            </div>
          </header>

          <div className="shop-grid">
            {/* SIDEBAR TABS & SEARCH */}
            <div className="shop-sidebar">
              <div className="search-box">
                <input 
                  type="text" 
                  placeholder="Search gear or tools..." 
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div>
                <h5 className="shop-filter-title">Filter Categories</h5>
                <ul className="shop-tabs">
                  {['ALL', 'Power Solutions', 'Safety Equipment', 'Industrial Tools', 'Abrasives'].map(tab => (
                    <li key={tab}>
                      <button 
                        className={`shop-tab-btn ${activeTab === tab ? 'is-active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PRODUCT GRID */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                {filteredProducts.map(p => (
                  <div key={p.id} className="product-card">
                    <span className="product-card__tag">{p.tag}</span>
                    <div className="product-card__image-container">
                      <img src={p.image} alt={p.name} className="product-card__image" />
                    </div>
                    <span className="product-card__category">{p.subcategory}</span>
                    <h4 style={{ margin: '0.2rem 0' }}>{p.name}</h4>
                    <p className="product-card__specs">{p.specs}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--orange)', fontSize: '0.85rem', fontWeight: 'bold' }}>{p.price}</span>
                      <button 
                        onClick={() => setSelectedProduct(p)} 
                        className="shop-tab-btn" 
                        style={{ width: 'auto', padding: '0.4rem 0.8rem', border: '1px solid var(--orange)', color: 'var(--orange)' }}
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--ink-dim)' }}>
                  <p style={{ fontFamily: 'var(--font-mono)' }}>No products found matching "{searchQuery}".</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK VIEW MODAL POPUP */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>CLOSE [X]</button>
            
            <div className="modal-image-container">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            </div>

            <div className="modal-info">
              <span className="eyebrow" style={{ color: 'var(--orange)', margin: 0 }}>{selectedProduct.subcategory}</span>
              <h2 style={{ fontSize: '1.8rem', lineHeight: '1.2' }}>{selectedProduct.name}</h2>
              <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--orange)', fontSize: '1.1rem', fontWeight: 'bold' }}>{selectedProduct.price}</p>
              
              <hr style={{ border: 'none', borderTop: '1px solid var(--border-tech)' }} />

              <div>
                <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Specification</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}>{selectedProduct.specs}</p>
              </div>

              <div>
                <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Key Features</h5>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--ink-dim)', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  {selectedProduct.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Ideal For</h5>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-dim)' }}>{selectedProduct.idealFor}</p>
              </div>

              <div className="modal-cta-group">
                <a href={getWhatsAppLink(selectedProduct)} target="_blank" rel="noreferrer" className="modal-btn-wa" style={{ textDecoration: 'none', borderRadius: '4px' }}>
                  Inquire on WhatsApp
                </a>
                <a href="tel:+233241307209" className="modal-btn-call" style={{ textDecoration: 'none', borderRadius: '4px' }}>
                  Call B2B Sales Desk
                </a>
                <a href={getEmailLink(selectedProduct)} className="modal-btn-email" style={{ textDecoration: 'none', borderRadius: '4px' }}>
                  Send Email Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
