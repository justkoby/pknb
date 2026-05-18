import { useState } from 'react';

// Product Database covering all 15 B2B Industrial Categories
const PRODUCTS = [
  // 1. SOLAR PACKAGES
  {
    id: 'solar-essentials',
    name: 'Essentials Solar Package',
    category: 'Solar Packages',
    subcategory: 'Solar Backup Systems',
    price: 'GHS 15,000',
    tag: 'Starter Package',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&q=80',
    specs: '3KVA hybrid inverter, 2.5KWh lithium battery, 4x 450W solar panels.',
    idealFor: 'Basic homes, apartments, and budget-conscious families looking for load shedding backup.',
    features: ['Auto-switch during grid outages', 'Safe lithium battery chemistry', 'Zero noise & low maintenance'],
    powers: ['LED Lights', 'Smart TV', 'WiFi Router', 'Standing Fans', 'Laptops']
  },
  {
    id: 'solar-comfort',
    name: 'Comfort Solar Package',
    category: 'Solar Packages',
    subcategory: 'Solar Backup Systems',
    price: 'GHS 35,000',
    tag: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80',
    specs: '5KVA hybrid inverter, 5.0KWh lithium battery, 8x 450W solar panels.',
    idealFor: 'Medium-sized family homes and small offices wanting major grid independence.',
    features: ['High surge capacity', 'Expandable battery bank', 'Web-monitored performance tracking'],
    powers: ['Double-door Refrigerator', 'Microwave', 'Washing Machine (Daytime)', 'Water Pump', 'Basic lights, fans, TV']
  },
  {
    id: 'solar-plusplus',
    name: 'Plus Plus Solar Package',
    category: 'Solar Packages',
    subcategory: 'Solar Backup Systems',
    price: 'GHS 50,000',
    tag: 'Extended Runtime',
    image: 'https://images.unsplash.com/photo-1620025707541-356914c80b91?w=400&q=80',
    specs: '8KVA hybrid inverter, 10.0KWh premium storage, 12x 450W panels.',
    idealFor: 'Larger families and mid-scale businesses needing reliable overnight backup for heavy loads.',
    features: ['Massive overnight battery capacity', 'Rapid battery charging from solar/grid', 'Industrial-grade breaker protection'],
    powers: ['Multiple Fridges & Freezers', 'Washing Machine & Iron', '1x Inverter Air Conditioner (6 hours)', 'Water Pumps & Lights']
  },
  {
    id: 'solar-premium',
    name: 'Premium Solar Package',
    category: 'Solar Packages',
    subcategory: 'Solar Backup Systems',
    price: 'GHS 90,000',
    tag: 'Full Independence',
    image: 'https://images.unsplash.com/photo-1548613053-220cdbd2d0a0?w=400&q=80',
    specs: '12KVA hybrid inverter, 20.0KWh scalable storage, 16x 450W panels.',
    idealFor: 'Luxury estates, manufacturing workshops, and offices desiring full energy autonomy.',
    features: ['Seamless UPS transfer (<10ms)', 'Heavy industrial electrical engineering integration', 'Full off-grid autonomy mode enabled'],
    powers: ['3x Air Conditioners (Full runtime)', 'Electric Water Heaters', 'Water Pumps & Heavy Machinery', 'Whole-facility backup']
  },

  // 2. SOLAR COMPONENTS
  {
    id: 'comp-inverter',
    name: 'PKNB Smart 5KVA Hybrid Inverter',
    category: 'Solar Components',
    subcategory: 'Inverters',
    price: 'Call for Pricing',
    tag: 'Premium Component',
    image: 'https://images.unsplash.com/photo-1620025707541-356914c80b91?w=400&q=80',
    specs: '5KVA pure sine wave inverter, built-in 80A MPPT controller.',
    idealFor: 'Custom residential solar builds and battery backup systems.',
    features: ['Configurable AC/Solar input priority', 'Smart battery charger design', 'Compatible with LiFePO4 batteries'],
    powers: ['System energy control']
  },
  {
    id: 'comp-battery-lith',
    name: '100Ah 48V LiFePO4 Lithium Battery',
    category: 'Solar Components',
    subcategory: 'Solar Batteries',
    price: 'GHS 24,000',
    tag: 'Highly Durable',
    image: '',
    specs: '5.12KWh storage capacity, 6,000 charge cycles, smart BMS system.',
    idealFor: 'Replacing lead-acid batteries in older inverter networks.',
    features: ['Zero maintenance required', 'Deep discharge tolerance (95%)', 'Built-in overcharge/temperature protection'],
    powers: ['Backup storage']
  },
  {
    id: 'comp-battery-gel',
    name: '200Ah 12V Deep Cycle Gel Battery',
    category: 'Solar Components',
    subcategory: 'Solar Batteries',
    price: 'GHS 4,800',
    tag: 'Bestselling Component',
    image: '',
    specs: '2.4KWh gel battery, robust deep discharge technology.',
    idealFor: 'Off-grid lighting and starter solar arrays.',
    features: ['Completely sealed leak-proof casing', 'Excellent temperature resistance', 'Cost-effective alternative for backup'],
    powers: ['Backup storage']
  },
  {
    id: 'comp-floodlight',
    name: '200W Commercial Solar Flood Light',
    category: 'Solar Components',
    subcategory: 'Solar Street Lights',
    price: 'GHS 850',
    tag: 'IP67 Waterproof',
    image: '',
    specs: '20,000 lumens output, large mono solar panel, remote control operation.',
    idealFor: 'Industrial yards, corporate perimeter lighting, and outdoor parking lots.',
    features: ['Automatic day/night dusk-to-dawn sensors', 'High capacity lithium-iron battery', 'Heavy-duty die-cast aluminum frame'],
    powers: ['Yard security lighting']
  },

  // 3. GENERATORS & POWER SYSTEMS
  {
    id: 'gen-firman',
    name: 'FIRMAN ECO8990ES Generator',
    category: 'Generators & Power Systems',
    subcategory: 'Generators',
    price: 'Call for Pricing',
    tag: 'In Stock',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&q=80',
    specs: '8.5KVA peak output, key start & remote control, low oil shutdown.',
    idealFor: 'Commercial buildings, offices, and large residential estates needing robust mechanical backup.',
    features: ['Extremely low fuel consumption', 'Long run fuel tank (25L)', 'Industrial copper alternator'],
    powers: ['Air Conditioners', 'Refrigerators', 'Construction Tools', 'Whole building lighting']
  },
  {
    id: 'gen-kama',
    name: 'KAMA Silent Diesel Generator',
    category: 'Generators & Power Systems',
    subcategory: 'Generators',
    price: 'Call for Pricing',
    tag: 'Heavy Duty',
    image: '',
    specs: '5.0KVA rated, soundproof enclosure, automatic voltage regulation (AVR).',
    idealFor: 'Offices and residential locations requiring quiet, long-running alternative power.',
    features: ['Ultra-silent acoustic canopy', 'Highly reliable diesel core', 'ATS compatible interface'],
    powers: ['Computers & Servers', 'Air Conditioners', 'Pumps', 'Grid lighting systems']
  },
  {
    id: 'gen-tiger',
    name: 'TIGER TG950 Utility Generator',
    category: 'Generators & Power Systems',
    subcategory: 'Generators',
    price: 'GHS 2,800',
    tag: 'Highly Portable',
    image: '',
    specs: '650W peak, 2-stroke single cylinder, recoil start.',
    idealFor: 'Small kiosks, market stalls, camping trips, and essential lighting backup.',
    features: ['Highly lightweight & portable design', 'Very low fuel operation cost', 'Simple manual override mechanics'],
    powers: ['LED lights', 'Cell phone chargers', 'WiFi routers', 'Small standing fans']
  },

  // 4. EMERGENCY LIGHTING
  {
    id: 'bulb-emergency-15',
    name: '15W Smart Rechargeable Emergency LED Bulb',
    category: 'Emergency Lighting',
    subcategory: 'Lighting',
    price: 'GHS 120 (Bulk rates available)',
    tag: 'Bestselling Utility',
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400&q=80',
    specs: '15W output, 4 hours runtime on backup battery, standard E27/B22 socket.',
    idealFor: 'Homes, hostels, restaurants, and warehouses seeking automatic illumination during blackout.',
    features: ['Automatic charge when grid is active', 'Instantly switches on when power drops', 'Energy saving A+ grade bulbs'],
    powers: ['Backup power outages', 'Emergency flashlight', 'Outdoor campsite utility']
  },
  {
    id: 'bulb-emergency-7',
    name: '7W LED Emergency Backup Bulb',
    category: 'Emergency Lighting',
    subcategory: 'Lighting',
    price: 'GHS 75',
    tag: 'Compact Utility',
    image: '',
    specs: '7W power output, 3.5 hours internal lithium runtime.',
    idealFor: 'Bedrooms, corridors, and small offices seeking low load safety lighting.',
    features: ['High-efficiency energy-saving glow', 'Low temperature operational design', 'Screw/Bayonet dual options'],
    powers: ['Accent lighting backup', 'Nightlight utility']
  },

  // 5. INDUSTRIAL TOOLS
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
    features: ['Highly ergonomic slimline grip', 'Robust keyless chuck mechanics', 'Electronic speed control trigger'],
    powers: ['Masonry drilling', 'Steel & wood drilling', 'Screwdriving utility']
  },
  {
    id: 'tool-grinder',
    name: 'BOSCH GWS 750 Angle Grinder',
    category: 'Industrial Tools',
    subcategory: 'Bosch Power Tools',
    price: 'Call for Pricing',
    tag: 'In Stock',
    image: '',
    specs: '750W motor, 115mm disc diameter, spindle lock.',
    idealFor: 'Metal fabricators, masonry cutting, rust removal, and brick smoothing.',
    features: ['Extremely compact body grip', 'Dust protection air vents', 'High overload resistance capacity'],
    powers: ['Metal grinding & cutting', 'Stone scoring', 'Abrasive sanding']
  },

  // 6. SAFETY EQUIPMENT (PPE)
  {
    id: 'ppe-helmet-white',
    name: 'B2B Professional Safety Helmet (White)',
    category: 'Safety Equipment (PPE)',
    subcategory: 'Head Protection',
    price: 'GHS 280',
    tag: 'Certified Site Gear',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=400&q=80',
    specs: 'High-density polyethylene (HDPE) shell, ANSI Z89.1 approved.',
    idealFor: 'Construction managers, site supervisors, engineers, and plant visitors.',
    features: ['6-point suspension harness for comfort', 'Adjustable ratchet dial fit', 'Universal side slots for hearing protection'],
    powers: ['Impact protection', 'Electrical shock safety']
  },
  {
    id: 'ppe-helmet-yellow',
    name: 'Industrial Safety Helmet (Yellow)',
    category: 'Safety Equipment (PPE)',
    subcategory: 'Head Protection',
    price: 'GHS 250',
    tag: 'In Stock',
    image: '',
    specs: 'Heavy-duty HDPE shell, adjustable chin strap, high-impact rated.',
    idealFor: 'General laborers, earthmoving crew, and steel fabrication workers.',
    features: ['Replaceable brow sweatband', 'Highly robust lightweight shell', 'Class E electrical rating'],
    powers: ['Impact protection']
  },
  {
    id: 'ppe-gloves-weld',
    name: 'Heavy-Duty Leather Welding Gloves',
    category: 'Safety Equipment (PPE)',
    subcategory: 'Hand Protection',
    price: 'GHS 150',
    tag: 'Heat Resistant',
    image: '',
    specs: 'Split cowhide leather, cotton flannel lining, heat resistant.',
    idealFor: 'Welding workshops, hot work sectors, metal fabrication, and grinding operations.',
    features: ['Reinforced thumb design', 'Extended gauntlet cuff for forearm shield', 'Fire-retardant Kevlar stitching'],
    powers: ['High temperature protection', 'Anti-spark safety']
  },
  {
    id: 'ppe-goggles',
    name: 'Industrial Anti-Fog Goggles',
    category: 'Safety Equipment (PPE)',
    subcategory: 'Eye Protection',
    price: 'GHS 75',
    tag: 'UV Protected',
    image: '',
    specs: 'Polycarbonate lenses, scratch resistant, wrap-around protection.',
    idealFor: 'Chemical laboratories, metal cutting spaces, dusty construction zones.',
    features: ['Direct ventilation airflow', 'Soft PVC frame sealing', 'Elastic adjustable headband'],
    powers: ['Flying debris defense', 'UV rays protection']
  },
  {
    id: 'ppe-vest',
    name: 'High-Visibility Reflective Vest',
    category: 'Safety Equipment (PPE)',
    subcategory: 'Body Protection',
    price: 'GHS 95',
    tag: 'High Visibility',
    image: '',
    specs: 'Fluorescent polyester, retroreflective strips, ANSI Class 2.',
    idealFor: 'Road construction, night shifts, facility managers, and safety compliance officers.',
    features: ['Highly breathable mesh structure', 'Multiple chest pockets for tools', 'Premium zipper closure'],
    powers: ['High visibility alert']
  },

  // 7. ABRASIVES & CONSUMABLES
  {
    id: 'abr-cutting',
    name: 'Premium Metal Cutting Disc',
    category: 'Abrasives & Consumables',
    subcategory: 'Grinding & Cutting',
    price: 'GHS 45 (pack of 10)',
    tag: 'In Stock',
    image: 'https://images.unsplash.com/photo-1513828729020-56f22295a73c?w=400&q=80',
    specs: '115mm diameter, 1.0mm thickness, maximum 13,300 RPM.',
    idealFor: 'Metal fabrication shops, cutting steel rods, rebar slicing, sheet metal fabricators.',
    features: ['Ultra-thin profile for fast slicing', 'Minimal burr and waste creation', 'Fiberglass reinforced structure'],
    powers: ['Stainless steel cutting', 'Carbon steel rebar', 'Iron pipes profile']
  },
  {
    id: 'abr-wheel',
    name: 'Industrial Grinding Wheel',
    category: 'Abrasives & Consumables',
    subcategory: 'Grinding & Cutting',
    price: 'GHS 65 (pack of 5)',
    tag: 'Heavy Grinding',
    image: '',
    specs: '125mm diameter, 6.0mm thickness, aluminum oxide abrasive.',
    idealFor: 'Smoothing weld seams, removing excess metal, scale scraping, casting processing.',
    features: ['Premium aluminum oxide grain structure', 'Long lifespan usage ratio', 'Safe heavy vibration tolerance'],
    powers: ['Welded joint leveling', 'Heavy iron beveling']
  },

  // 8. ELECTRICAL & ENGINEERING SUPPLIES
  {
    id: 'elec-reel',
    name: 'Industrial Extension Cable Reel',
    category: 'Electrical & Engineering Supplies',
    subcategory: 'Power Accessories',
    price: 'GHS 1,450',
    tag: 'Site Grade',
    image: '',
    specs: '50-meter heavy-duty cable, 4 drum sockets with thermal cut-out.',
    idealFor: 'Running power tools across large construction yards or mining floors.',
    features: ['Robust metal standing frame', 'Thermal overload protection switch', 'Heavy-gauge highly flexible copper wiring'],
    powers: ['Drills, grinders & workspace lighting']
  },
  {
    id: 'elec-stabilizer',
    name: 'B2B 5KVA Automatic Voltage Regulator',
    category: 'Electrical & Engineering Supplies',
    subcategory: 'Voltage Stabilizers',
    price: 'GHS 3,200',
    tag: 'Heavy Duty',
    image: '',
    specs: '5000VA capacity, digital meter indicator, automatic voltage regulation.',
    idealFor: 'Protecting expensive office servers, printers, and sensitive lab equipment.',
    features: ['Ultra-fast voltage surge response', 'Dual output protection channels', 'Built-in fan cooling core'],
    powers: ['Computers, medical gear, high-end fridges']
  },

  // 9. WATER & PUMP SYSTEMS
  {
    id: 'pump-booster',
    name: 'BOSCH-Grade Water Booster Pump',
    category: 'Water & Pump Systems',
    subcategory: 'Water Pumps',
    price: 'GHS 1,850',
    tag: 'In Stock',
    image: '',
    specs: '1HP motor, cast iron impeller, maximum 45m head.',
    idealFor: 'Boosting municipal water pressure to tall residential buildings or garden irrigation grids.',
    features: ['Automatic pressure switch controls', 'Highly reliable thermal overload protection', 'Rust-resistant brass impellers'],
    powers: ['Water pumping']
  },

  // 10. WELDING & FABRICATION
  {
    id: 'weld-machine',
    name: 'PKNB Pro-Arc 200 welding machine',
    category: 'Welding & Fabrication',
    subcategory: 'Welding Machines',
    price: 'Call for Pricing',
    tag: 'Site Approved',
    image: '',
    specs: '200A output, IGBT inverter technology, hot-start trigger.',
    idealFor: 'Heavy steel fabrication, mechanical piping installation, site structural welding.',
    features: ['Highly lightweight portable body', 'Stable arc output with low splatters', 'Digital current readout panel'],
    powers: ['Structural steel arc welding']
  },

  // 11. SMART ENERGY PRODUCTS
  {
    id: 'smart-switch',
    name: 'Smart WiFi Home Energy Monitor',
    category: 'Smart Energy Products',
    subcategory: 'Smart Monitors',
    price: 'GHS 680',
    tag: 'IoT Utility',
    image: '',
    specs: 'Real-time dual-clamp power monitoring, Tuya app integration.',
    idealFor: 'Homeowners wanting to trace power consumption metrics instantly on their phones.',
    features: ['Live wattage consumption charts', 'Automated high surge load alerts', 'Saves logs to prevent utility billing errors'],
    powers: ['Total electricity tracking']
  },

  // 12. AIR & COOLING SOLUTIONS
  {
    id: 'cool-fan',
    name: 'Industrial High-Velocity Standing Fan',
    category: 'Air & Cooling Solutions',
    subcategory: 'Industrial Fans',
    price: 'GHS 1,200',
    tag: 'Heavy Duty',
    image: '',
    specs: '26-inch metal blades, heavy cast iron base, 3-speed control.',
    idealFor: 'Cooling open-air manufacturing floors, events centers, workshops, and warehouse docks.',
    features: ['Dual-bearing long life copper motor', 'Heavy-gauge steel wire safety guards', '90-degree oscillation support'],
    powers: ['High volume ventilation flow']
  },

  // 13. LIGHTING SOLUTIONS
  {
    id: 'light-flood',
    name: '150W LED Commercial Floodlight',
    category: 'Lighting Solutions',
    subcategory: 'LED Floodlights',
    price: 'GHS 480',
    tag: 'Super Bright',
    image: '',
    specs: '150W LED chip, 15,000 lumens, IP66 waterproof.',
    idealFor: 'Warehouse perimeters, parking spaces, outdoor billboards, and site safety illumination.',
    features: ['Durable powder-coated steel chassis', 'High heat dissipation cooling fins', 'Highly adjustable bracket mountings'],
    powers: ['Outdoor area lighting']
  },

  // 14. MEASURING & ENGINEERING TOOLS
  {
    id: 'meas-multimeter',
    name: 'Professional Digital Clamp Multimeter',
    category: 'Measuring & Engineering Tools',
    subcategory: 'Clamp Meters',
    price: 'GHS 780',
    tag: 'Precision Tool',
    image: '',
    specs: 'True RMS, 600A AC current clamp meter, live wire detection.',
    idealFor: 'Electricians, site electrical audit engineers, and solar installation specialists.',
    features: ['Non-contact voltage detection sensors', 'Large backlit digital LCD display', 'Overload resistance fuse protection'],
    powers: ['Electrical testing']
  },

  // 15. NETWORKING & OFFICE BACKUP
  {
    id: 'net-ups',
    name: '1000VA B2B Line-Interactive UPS',
    category: 'Networking & Office Backup',
    subcategory: 'UPS Systems',
    price: 'GHS 1,950',
    tag: 'In Stock',
    image: '',
    specs: '1000VA/600W rating, automatic voltage regulation (AVR), 4 backup ports.',
    idealFor: 'Protecting computer desks and core internet routers from power dips.',
    features: ['Provides up to 25 mins router runtime', 'Built-in transient surge suppression', 'Audible alert alarms on battery switch'],
    powers: ['Desktop PC, Router, Modem']
  }
];

// Custom Product Image Component with dynamic technical Blueprint SVG fallback
function ProductImage({ src, alt, category, className = 'modal-image' }) {
  const [error, setError] = useState(!src || src.includes('placeholder') || src === '');

  if (error) {
    let icon = null;
    let bg = 'radial-gradient(circle at center, rgba(242, 114, 28, 0.09) 0%, transparent 75%)';

    if (category === 'Solar Packages' || category === 'Solar Components') {
      // Solar Panel Blueprint
      icon = (
        <svg viewBox="0 0 100 100" style={{ width: '45%', height: '45%', opacity: 0.85 }}>
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="var(--orange)" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="20" y1="40" x2="80" y2="40" stroke="var(--orange)" strokeWidth="1.5" />
          <line x1="20" y1="60" x2="80" y2="60" stroke="var(--orange)" strokeWidth="1.5" />
          <line x1="40" y1="20" x2="40" y2="80" stroke="var(--orange)" strokeWidth="1.5" />
          <line x1="60" y1="20" x2="60" y2="80" stroke="var(--orange)" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="var(--orange)" strokeWidth="2" />
          <line x1="50" y1="8" x2="50" y2="16" stroke="var(--orange)" strokeWidth="2.5" />
          <line x1="50" y1="84" x2="50" y2="92" stroke="var(--orange)" strokeWidth="2.5" />
          <line x1="8" y1="50" x2="16" y2="50" stroke="var(--orange)" strokeWidth="2.5" />
          <line x1="84" y1="50" x2="92" y2="50" stroke="var(--orange)" strokeWidth="2.5" />
        </svg>
      );
    } else if (category === 'Generators & Power Systems') {
      // Mechanical Generator outline
      icon = (
        <svg viewBox="0 0 100 100" style={{ width: '45%', height: '45%', opacity: 0.85 }}>
          <rect x="25" y="28" width="50" height="38" rx="3" fill="none" stroke="var(--orange)" strokeWidth="2.5" />
          <circle cx="38" cy="47" r="7" fill="none" stroke="var(--orange)" strokeWidth="2" />
          <circle cx="62" cy="47" r="7" fill="none" stroke="var(--orange)" strokeWidth="2" />
          <line x1="15" y1="66" x2="85" y2="66" stroke="var(--orange)" strokeWidth="3" />
          <line x1="30" y1="36" x2="70" y2="36" stroke="var(--orange)" strokeWidth="1.5" />
          <line x1="30" y1="40" x2="70" y2="40" stroke="var(--orange)" strokeWidth="1.5" />
          <path d="M 20 48 L 20 22 L 80 22 L 80 48" fill="none" stroke="var(--orange)" strokeWidth="2" />
        </svg>
      );
    } else if (category === 'Safety Equipment (PPE)') {
      // Safety Shield & Lock icon
      icon = (
        <svg viewBox="0 0 100 100" style={{ width: '42%', height: '42%', opacity: 0.85 }}>
          <path d="M 50 15 C 65 15 80 20 80 35 C 80 60 50 85 50 85 C 50 85 20 60 20 35 C 20 20 35 15 50 15 Z" fill="none" stroke="var(--orange)" strokeWidth="2.5" />
          <circle cx="50" cy="44" r="7" fill="none" stroke="var(--orange)" strokeWidth="2" />
          <line x1="50" y1="51" x2="50" y2="68" stroke="var(--orange)" strokeWidth="2.5" />
          <line x1="35" y1="38" x2="65" y2="38" stroke="var(--orange)" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      );
    } else if (category === 'Industrial Tools') {
      // Mechanical Drill / tool design
      icon = (
        <svg viewBox="0 0 100 100" style={{ width: '45%', height: '45%', opacity: 0.85 }}>
          <path d="M 25 35 L 75 35 L 75 52 L 60 52 L 60 76 L 40 76 L 40 52 L 25 52 Z" fill="none" stroke="var(--orange)" strokeWidth="2.5" />
          <line x1="50" y1="35" x2="50" y2="76" stroke="var(--orange)" strokeWidth="1.5" strokeDasharray="2 4" />
          <circle cx="50" cy="43" r="5" fill="none" stroke="var(--orange)" strokeWidth="2" />
          <path d="M 15 43 L 25 43" stroke="var(--orange)" strokeWidth="3" />
        </svg>
      );
    } else if (category === 'Abrasives & Consumables') {
      // Cutting Disc Geometry
      icon = (
        <svg viewBox="0 0 100 100" style={{ width: '45%', height: '45%', opacity: 0.85 }}>
          <circle cx="50" cy="50" r="35" fill="none" stroke="var(--orange)" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="var(--orange)" strokeWidth="2" />
          <circle cx="50" cy="50" r="3" fill="var(--orange)" />
          <circle cx="50" cy="50" r="23" fill="none" stroke="var(--orange)" strokeWidth="1" strokeDasharray="6 4" />
          <line x1="15" y1="50" x2="85" y2="50" stroke="var(--orange)" strokeWidth="1.2" strokeDasharray="2 4" />
        </svg>
      );
    } else {
      // Technical Blueprint Grid default
      icon = (
        <svg viewBox="0 0 100 100" style={{ width: '45%', height: '45%', opacity: 0.85 }}>
          <rect x="22" y="22" width="56" height="56" fill="none" stroke="var(--orange)" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="18" fill="none" stroke="var(--orange)" strokeWidth="2" />
          <line x1="12" y1="12" x2="88" y2="88" stroke="var(--orange)" strokeWidth="1.2" />
          <line x1="88" y1="12" x2="12" y2="88" stroke="var(--orange)" strokeWidth="1.2" />
        </svg>
      );
    }

    return (
      <div 
        className={className} 
        style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          background: bg,
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(242, 114, 28, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242, 114, 28, 0.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none'
        }} />
        {icon}
        <div style={{
          position: 'absolute',
          bottom: '0.8rem',
          left: '0.8rem',
          right: '0.8rem',
          textAlign: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.52rem',
          color: 'var(--orange)',
          opacity: 0.6,
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          PKNB B2B SPEC SHEET · {category}
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)} 
    />
  );
}

export default function Shop() {
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

  // CATEGORIES LIST
  const CATEGORIES = [
    'ALL',
    'Solar Packages',
    'Solar Components',
    'Generators & Power Systems',
    'Emergency Lighting',
    'Industrial Tools',
    'Safety Equipment (PPE)',
    'Abrasives & Consumables',
    'Electrical & Engineering Supplies',
    'Water & Pump Systems',
    'Welding & Fabrication',
    'Smart Energy Products',
    'Air & Cooling Solutions',
    'Lighting Solutions',
    'Measuring & Engineering Tools',
    'Networking & Office Backup'
  ];

  // FILTER LOGIC
  const filteredProducts = PRODUCTS.filter(prod => {
    const matchesTab = activeTab === 'ALL' || prod.category === activeTab;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // CALCULATOR LOGIC
  const handleCalcSelect = (field, val) => {
    const updated = { ...calcAnswers, [field]: val };
    setCalcAnswers(updated);

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

  // CONTACT INQUIRY BUILDERS
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
    const body = `Hello PKNB Consult Team,\n\nI am writing to inquire about the "${product.name}" featured on your store page.\n\nProduct Details:\n- Category: ${product.category}\n- Specs: ${product.specs}\n- Price: ${product.price}\n\nKindly provide more details regarding B2B discount margins, stock availability, and nationwide shipping options to our facility.\n\nThank you.`;
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
              Reliable Equipment for <br />
              <span style={{ color: 'var(--orange)' }}>Industrial Operations</span>
            </h1>
            <p className="hero__lead" style={{ opacity: 0.9 }}>
              Powering industry safely. PKNB Consult is your strategic partner for premium off-grid solar packages, standby diesel power units, heavy-duty Bosch tools, certified PPE compliance wear, and industrial mechanical consumables. 
            </p>
            <div className="hero__cta-row" style={{ marginTop: '2.5rem' }}>
              <a href="#solar-packages" className="btn btn--primary" style={{ background: 'var(--orange)', borderColor: 'var(--orange)', color: 'var(--bg-navy)' }}>
                Solar Packages
              </a>
              <a href="#all-products" className="btn btn--ghost" style={{ border: '1px solid var(--border-tech)' }}>
                Industrial Catalog
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* VALUE PROP SECTION */}
      <section className="section" style={{ background: 'var(--bg-navy-elev)', borderBottom: '1px solid var(--border-tech)' }}>
        <div className="wrap">
          <header className="sec-head" style={{ marginBottom: '3rem' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>B2B Procurement Excellence</span>
              <h2>Premium Standards, Guaranteed Supply</h2>
            </div>
          </header>

          <div className="services__grid">
            <div className="service-card" style={{ background: 'var(--bg-navy)', border: '1px solid var(--border-tech)', padding: '2rem' }}>
              <div className="service-card__num" style={{ color: 'var(--orange)' }}>01</div>
              <h4 style={{ margin: '1rem 0' }}>100% Genuine Brands</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}>We supply only fully warrantied global brands including BOSCH, FIRMAN, and KAMA, ensuring zero substandard equipment.</p>
            </div>
            <div className="service-card" style={{ background: 'var(--bg-navy)', border: '1px solid var(--border-tech)', padding: '2rem' }}>
              <div className="service-card__num" style={{ color: 'var(--orange)' }}>02</div>
              <h4 style={{ margin: '1rem 0' }}>B2B RFQ Handling</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}>Engineered B2B sales flow. Get custom pricing models, bulk discounts, and dedicated procurement account assistance.</p>
            </div>
            <div className="service-card" style={{ background: 'var(--bg-navy)', border: '1px solid var(--border-tech)', padding: '2rem' }}>
              <div className="service-card__num" style={{ color: 'var(--orange)' }}>03</div>
              <h4 style={{ margin: '1rem 0' }}>Technical Commissioning</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}>We do not just drop boxes. Our site engineering division fully installs, verifies, and services all backup systems and arrays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLAR PACKAGES STACK (FEATURED FIRST) */}
      <section id="solar-packages" className="section" style={{ background: 'var(--bg-navy)' }}>
        <div className="wrap">
          <header className="sec-head" style={{ marginBottom: '3rem' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Energy &amp; Safety Solutions</span>
              <h2>Featured Solar Packages &amp; Backup Arrays</h2>
              <p style={{ maxWidth: '600px', color: 'var(--ink-dim)', marginTop: '0.5rem' }}>
                Engineered off-grid and hybrid backup configurations optimized for residential apartments, corporate office towers, and industrial spaces.
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
                    View Package Specifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* PREMIUM HORIZONTAL SOLAR PACKAGES CARDS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '4rem' }}>
            {PRODUCTS.filter(p => p.category === 'Solar Packages').map(p => (
              <div key={p.id} className="service-card" style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '2rem', background: 'var(--bg-navy-elev)', border: '1px solid var(--border-tech)', padding: '2rem', alignItems: 'center' }}>
                <div style={{ overflow: 'hidden', border: '1px solid var(--border-tech)', aspectRatio: '1.4', background: 'var(--bg-navy)', position: 'relative' }}>
                  <ProductImage src={p.image} alt={p.name} category={p.category} className="product-card__image" />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="eyebrow" style={{ color: 'var(--orange)', margin: 0 }}>{p.tag}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--orange)', fontSize: '1.1rem', fontWeight: 'bold' }}>{p.price}</span>
                  </div>
                  <h3 style={{ margin: '0.5rem 0' }}>{p.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)' }}><strong>Specs:</strong> {p.specs}</p>
                  
                  <div style={{ margin: '1rem 0' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--orange)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ideal For Powering:</p>
                    <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.2rem 1rem', paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--ink-dim)' }}>
                      {p.powers.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                    <a href={getWhatsAppLink(p)} target="_blank" rel="noreferrer" className="modal-btn-wa" style={{ textDecoration: 'none', borderRadius: '4px', fontSize: '0.65rem' }}>
                      WhatsApp Quote
                    </a>
                    <a href="tel:+233241307209" className="modal-btn-call" style={{ textDecoration: 'none', borderRadius: '4px', fontSize: '0.65rem' }}>
                      Call B2B Desk
                    </a>
                    <button onClick={() => setSelectedProduct(p)} className="modal-btn-email" style={{ borderRadius: '4px', padding: '0.6rem 1rem', fontSize: '0.65rem' }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CATALOG & FILTERS */}
      <section id="all-products" className="section" style={{ background: 'var(--bg-navy)', borderTop: '1px solid var(--border-tech)' }}>
        <div className="wrap">
          <header className="sec-head" style={{ marginBottom: '3rem' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>PKNB Site Supplies</span>
              <h2>Industrial Superstore Catalog</h2>
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
                  {CATEGORIES.map(tab => (
                    <li key={tab}>
                      <button 
                        className={`shop-tab-btn ${activeTab === tab ? 'is-active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab === 'ALL' ? 'Show All Products' : tab}
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
                      <ProductImage src={p.image} alt={p.name} category={p.category} className="product-card__image" />
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
                        Details
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
              <ProductImage src={selectedProduct.image} alt={selectedProduct.name} category={selectedProduct.category} className="modal-image" />
            </div>

            <div className="modal-info">
              <span className="eyebrow" style={{ color: 'var(--orange)', margin: 0 }}>{selectedProduct.subcategory}</span>
              <h2 style={{ fontSize: '1.8rem', lineHeight: '1.2' }}>{selectedProduct.name}</h2>
              <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--orange)', fontSize: '1.1rem', fontWeight: 'bold' }}>{selectedProduct.price}</p>
              
              <hr style={{ border: 'none', borderTop: '1px solid var(--border-tech)' }} />

              <div>
                <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Specification</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-dim)', lineHeight: '1.4' }}>{selectedProduct.specs}</p>
              </div>

              <div>
                <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Key Features</h5>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--ink-dim)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {selectedProduct.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Ideal For</h5>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-dim)', lineHeight: '1.4' }}>{selectedProduct.idealFor}</p>
              </div>

              <div className="modal-cta-group">
                <a href={getWhatsAppLink(selectedProduct)} target="_blank" rel="noreferrer" className="modal-btn-wa" style={{ textDecoration: 'none', borderRadius: '4px' }}>
                  Inquire on WhatsApp
                </a>
                <a href="tel:+233241307209" className="modal-btn-call" style={{ textDecoration: 'none', borderRadius: '4px' }}>
                  Call B2B Sales Desk
                </a>
                <a href={getEmailLink(selectedProduct)} className="modal-btn-email" style={{ textDecoration: 'none', borderRadius: '4px' }}>
                  Send Email RFQ
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
