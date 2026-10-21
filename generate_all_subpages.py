import re

with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# Common head
head_match = re.search(r'(<!DOCTYPE html>.*?<link rel="stylesheet" href="assets/css/apple-style\.css">\s*</head>)', index_html, re.DOTALL)
common_head = head_match.group(1)

# Header & Nav
header_match = re.search(r'(<header class="apple-header">.*?</header>)', index_html, re.DOTALL)
header_html = header_match.group(1)

# Mobile Drawer
drawer_match = re.search(r'(<div class="mobile-drawer" id="mobileDrawer">.*?</div>\s*</div>)', index_html, re.DOTALL)
drawer_html = drawer_match.group(1)

# Footer
footer_match = re.search(r'(<footer class="apple-footer">.*?</footer>)', index_html, re.DOTALL)
footer_html = footer_match.group(1)

# Modals & Scripts
modals_match = re.search(r'(<!-- ==========================================================================\s*MODALS:.*?</html>)', index_html, re.DOTALL)
modals_html = modals_match.group(1)

# Function to extract section from index.html
def extract_section(section_id):
    pattern = rf'(<section class="section-wrapper"[^>]*id="{section_id}".*?</section>)'
    match = re.search(pattern, index_html, re.DOTALL)
    if match:
        return match.group(1)
    return ""

def render_page(filename, page_id, meta_title, hero_tag, hero_title, hero_desc, main_content):
    page_head = common_head.replace(
        '<title>NACCI Energy — LiFePO4 Battery Supplier & ODM/OEM Leader</title>',
        f'<title>{meta_title} — NACCI Energy</title>'
    )

    page_header = re.sub(r'class="nav-link active"', 'class="nav-link"', header_html)
    page_header = page_header.replace(f'href="{filename}" class="nav-link"', f'href="{filename}" class="nav-link active"')

    breadcrumb = f'''
  <!-- Sub-header Live Status Ticker & Breadcrumb -->
  <div class="sub-header-strip">
    <div class="sub-header-inner">
      <div class="page-breadcrumb">
        <a href="index.html">Home</a>
        <span>/</span>
        <span style="color: var(--text-primary); font-weight: 600;">{meta_title}</span>
      </div>
      <div style="font-size: 11px; color: var(--text-tertiary); display: flex; gap: 16px;">
        <span>Direct Email: <strong>nacci@naccisz.com</strong></span>
        <span>Lead Time: <strong>30 Days Mass Production</strong></span>
      </div>
    </div>
  </div>
'''

    hero = f'''
  <div class="page-hero">
    <div class="page-hero-inner">
      <span class="section-tag">{hero_tag}</span>
      <h1 class="page-hero-title">{hero_title}</h1>
      <p class="page-hero-desc">{hero_desc}</p>
    </div>
  </div>
'''

    full_html = f'''{page_head}
<body>
{page_header}
{drawer_html}
{breadcrumb}
{hero}
{main_content}
{footer_html}
{modals_html}
'''
    with open(filename, 'w', encoding='utf-8') as f_out:
        f_out.write(full_html)
    print(f"Generated {filename}")

# =========================================================================
# 1. products.html
# =========================================================================
products_body = f'''
  <div class="page-content-wrapper">
    <!-- Category Filter Tabs -->
    <div class="category-tabs-nav">
      <button class="cat-tab-btn active" data-cat="all" data-i18n="cat_all">All Systems</button>
      <button class="cat-tab-btn" data-cat="residential" data-i18n="cat_res">Residential ESS</button>
      <button class="cat-tab-btn" data-cat="commercial" data-i18n="cat_com">C&I Energy Storage</button>
      <button class="cat-tab-btn" data-cat="agv" data-i18n="cat_agv">AGV & Motive Power</button>
      <button class="cat-tab-btn" data-cat="telecom" data-i18n="cat_tel">Telecom Base Station</button>
      <button class="cat-tab-btn" data-cat="ups" data-i18n="cat_ups">UPS Data Center</button>
      <button class="cat-tab-btn" data-cat="leadacid" data-i18n="cat_la">Lead-Acid Replacement</button>
    </div>

    <!-- Dynamic Product Cards Grid (All 20+ Models available with filter) -->
    <div class="products-grid" id="productsGrid">
      <!-- Populated dynamically via main.js from NACCI_PRODUCTS -->
    </div>
  </div>
'''
render_page(
    'products.html',
    'products',
    'Product Ecosystem',
    'Comprehensive LiFePO₄ Catalog',
    'Precision Engineered for Every Megawatt.',
    'Explore our complete family of standardized and customizable lithium iron phosphate battery packs, all engineered with Grade-A prismatic cells and multi-stage BMS protection.',
    products_body
)

# =========================================================================
# 2. solutions.html
# =========================================================================
solutions_body = f'''
  <div class="page-content-wrapper">
    <!-- Solution 1: Residential ESS -->
    <div class="sol-detail-card">
      <div class="sol-detail-img-box">
        <img src="assets/images/residential-ess.avif" alt="Residential Solar Energy Storage" loading="lazy">
      </div>
      <div class="sol-detail-body">
        <span class="sol-detail-tag">Residential Solar & Micro-Storage</span>
        <h2 class="sol-detail-title">Home Energy Independence & Solar PV</h2>
        <p class="sol-detail-desc">
          High-voltage and low-voltage residential energy storage architectures. Supports seamless solar self-consumption, grid peak-shaving, and sub-10ms automatic transfer during blackouts. Compatible with Victron, Deye, Growatt, Goodwe, and SMA inverters.
        </p>
        <div class="sol-spec-chips">
          <span class="sol-chip">5 kWh – 30 kWh Modular</span>
          <span class="sol-chip">51.2V Low Voltage / 500V High Voltage</span>
          <span class="sol-chip">Wall-Mount & Wheel Stackable</span>
          <span class="sol-chip">6,000+ Deep Cycles</span>
        </div>
        <div>
          <button class="btn-apple-primary" onclick="openInquiryModal('Residential ESS Solution', 'Home Solar PV Storage')">
            <span>Inquire Residential Solution</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Solution 2: C&I ESS -->
    <div class="sol-detail-card">
      <div class="sol-detail-img-box">
        <img src="assets/images/ci-ess-series.avif" alt="Commercial & Industrial Energy Storage" loading="lazy">
      </div>
      <div class="sol-detail-body">
        <span class="sol-detail-tag">Commercial & Industrial (C&I)</span>
        <h2 class="sol-detail-title">Factory Microgrids & Peak Demand Shaving</h2>
        <p class="sol-detail-desc">
          Engineered for industrial facilities, commercial plazas, and solar-diesel microgrids. Significantly reduces maximum demand charges through intelligent TOU (time-of-use) arbitrage while providing high-power backup during critical utility disruptions.
        </p>
        <div class="sol-spec-chips">
          <span class="sol-chip">50 kWh – 2 MWh+ Scalable</span>
          <span class="sol-chip">30kW - 500kW Hybrid Inverters</span>
          <span class="sol-chip">Liquid or Forced Air Thermal Balancing</span>
          <span class="sol-chip">Outdoor IP55 Weatherproof Casing</span>
        </div>
        <div>
          <button class="btn-apple-primary" onclick="openInquiryModal('C&I Storage Solution', 'Commercial Microgrid Project')">
            <span>Inquire C&I Solution</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Solution 3: AGV & Industrial Motive -->
    <div class="sol-detail-card">
      <div class="sol-detail-img-box">
        <img src="assets/images/agv-series.avif" alt="AGV & Warehouse Robotics Power" loading="lazy">
      </div>
      <div class="sol-detail-body">
        <span class="sol-detail-tag">Automation & Industrial Motive</span>
        <h2 class="sol-detail-title">AGV, AMR Fleet & Forklift Power</h2>
        <p class="sol-detail-desc">
          Continuous multi-shift robotic operations demand rapid opportunity charging. NACCI AGV batteries support 1C–2C fast charging during 15-minute breaks, completely eliminating battery swapping downtime and doubling asset uptime.
        </p>
        <div class="sol-spec-chips">
          <span class="sol-chip">24V / 48V / 80V High Current</span>
          <span class="sol-chip">Opportunity Fast Charging (1C-2C)</span>
          <span class="sol-chip">CANbus 2.0B Real-Time Telemetry</span>
          <span class="sol-chip">Shock & Vibration Resistant Casing</span>
        </div>
        <div>
          <button class="btn-apple-primary" onclick="openInquiryModal('AGV / Motive Battery Solution', 'Warehouse Logistics Fleet')">
            <span>Inquire AGV Solution</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Solution 4: Telecom & UPS Infrastructure -->
    <div class="sol-detail-card">
      <div class="sol-detail-img-box">
        <img src="assets/images/telecom-battery.avif" alt="Telecom Base Station Backup" loading="lazy">
      </div>
      <div class="sol-detail-body">
        <span class="sol-detail-tag">Critical Mission Infrastructure</span>
        <h2 class="sol-detail-title">Telecom Base Station & Data Center UPS</h2>
        <p class="sol-detail-desc">
          Standard 19-inch rack-mount lithium backup packs designed to replace toxic, space-consuming lead-acid banks in cellular base stations, edge computing rooms, and enterprise data centers. 70% lighter with zero routine water maintenance.
        </p>
        <div class="sol-spec-chips">
          <span class="sol-chip">48V 50Ah / 100Ah / 200Ah Rackmount</span>
          <span class="sol-chip">Standard 3U / 4U / 5U Enclosure</span>
          <span class="sol-chip">Anti-Theft Gyroscope & GPS Optional</span>
          <span class="sol-chip">10-15 Year Float Service Life</span>
        </div>
        <div>
          <button class="btn-apple-primary" onclick="openInquiryModal('Telecom & UPS Backup Solution', 'Data Center & Telecom Station')">
            <span>Inquire Telecom Solution</span>
          </button>
        </div>
      </div>
    </div>
  </div>
'''
render_page(
    'solutions.html',
    'solutions',
    'Energy Solutions',
    'Versatile Industry Solutions',
    'Energy Independence Across Every Industry.',
    'From residential solar self-consumption to multi-megawatt industrial microgrids and zero-downtime automated warehouse robotics, discover how NACCI delivers custom-fit power architectures.',
    solutions_body
)

# =========================================================================
# 3. engineering.html
# =========================================================================
engineering_section = extract_section('engineering')
engineering_body = f'''
  <div class="page-content-wrapper" style="padding-top: 20px;">
    {engineering_section}

    <!-- Detailed Laboratory & Testing Capabilities from Crawled Data -->
    <div style="margin-top: 60px;">
      <div class="section-header">
        <span class="section-tag">IATF 16949 Standards</span>
        <h2 class="section-title">Comprehensive Testing Capabilities & 200+ Instruments</h2>
        <p class="section-desc">
          Complied with international and North American safety standards including IEC 62619, UN38.3, UL 1973, and CE.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 36px;">
        <div class="bento-feature-item" style="padding: 24px;">
          <h4 style="font-size: 16px; font-weight: 700; color: #1d1d1f; margin-bottom: 8px;">Battery Cell & Material Testing</h4>
          <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
            Electrochemical impedance spectroscopy (EIS), internal resistance sorting, nail penetration, thermal shock (-40°C to +85°C), and vibration aging.
          </p>
        </div>
        <div class="bento-feature-item" style="padding: 24px;">
          <h4 style="font-size: 16px; font-weight: 700; color: #1d1d1f; margin-bottom: 8px;">BMS Edge Computing Validation</h4>
          <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
            Hardware-in-the-loop (HIL) simulation, multi-inverter CAN/RS485 handshake protocol verification, overcharge isolation test in &lt;1ms.
          </p>
        </div>
        <div class="bento-feature-item" style="padding: 24px;">
          <h4 style="font-size: 16px; font-weight: 700; color: #1d1d1f; margin-bottom: 8px;">End-of-Line 100% Full-Cycle Burn-In</h4>
          <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
            Every pack undergoes full-depth charge/discharge cycle aging under automated MES software logging before individual serial barcode generation.
          </p>
        </div>
      </div>
    </div>
  </div>
'''
render_page(
    'engineering.html',
    'engineering',
    'Core Engineering & R&D',
    'Hardcore Technology',
    'Zero Compromises.<br> Built from the Atom Up.',
    'Every NACCI battery pack combines chemical stability, intelligent edge computing, and automotive-level manufacturing standards.',
    engineering_body
)

# =========================================================================
# 4. calculator.html
# =========================================================================
calculator_section = extract_section('calculator')
calculator_body = f'''
  <div class="page-content-wrapper" style="padding-top: 20px;">
    {calculator_section}
  </div>
'''
render_page(
    'calculator.html',
    'calculator',
    'Interactive ROI Calculator',
    'Financial Modeling & Sizing',
    'Calculate Your Energy & ROI Advantage.',
    'Estimate capacity, cycle lifespan advantage, weight savings, and 5-year operating expenditure reductions comparing NACCI LiFePO4 against traditional lead-acid.',
    calculator_body
)

# =========================================================================
# 5. oem.html
# =========================================================================
oem_section = extract_section('oem')
oem_body = f'''
  <div class="page-content-wrapper" style="padding-top: 20px;">
    {oem_section}

    <!-- Customization Capabilities Overview -->
    <div style="margin-top: 70px; background: #ffffff; border: 1px solid var(--border-glass); border-radius: var(--radius-xl); padding: 50px 40px; box-shadow: var(--shadow-card);">
      <div class="section-header" style="margin-bottom: 36px;">
        <span class="section-tag">Custom Engineering Scope</span>
        <h2 class="section-title">What We Can Customize For Your Brand</h2>
        <p class="section-desc">From internal cell architecture to external branding and communication protocol tailoring.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;">
        <div style="background: #f5f5f7; padding: 24px; border-radius: var(--radius-md);">
          <div style="font-weight: 700; font-size: 16px; margin-bottom: 8px; color: #1d1d1f;">Mechanical & Casing</div>
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">Sheet metal stamping, die-cast aluminum, ABS mold design, handle placement, heavy-duty caster brackets, and laser-engraved logos.</div>
        </div>
        <div style="background: #f5f5f7; padding: 24px; border-radius: var(--radius-md);">
          <div style="font-weight: 700; font-size: 16px; margin-bottom: 8px; color: #1d1d1f;">Electrical & Power</div>
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">Custom nominal voltage (12V - 800V), discharge current up to 500A, busbar laser welding, and dual-connector Anderson / REMA sockets.</div>
        </div>
        <div style="background: #f5f5f7; padding: 24px; border-radius: var(--radius-md);">
          <div style="font-weight: 700; font-size: 16px; margin-bottom: 8px; color: #1d1d1f;">Smart BMS Protocol</div>
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">Tailored firmware for CANbus, RS485, RS232, Modbus, Bluetooth App, 4G cloud IoT gateway, and customized inverter handshake tables.</div>
        </div>
        <div style="background: #f5f5f7; padding: 24px; border-radius: var(--radius-md);">
          <div style="font-weight: 700; font-size: 16px; margin-bottom: 8px; color: #1d1d1f;">Compliance & Certs</div>
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">Full laboratory assistance for UN38.3 test summaries, CE-EMC/LVD certificates, MSDS sea transport reports, and UL 1973 readiness.</div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 40px;">
        <button class="btn-apple-primary" onclick="openInquiryModal('OEM/ODM Custom Project', 'Full Specification Customization')">
          <span>Start Your Custom Design with Free Drawings</span>
        </button>
      </div>
    </div>
  </div>
'''
render_page(
    'oem.html',
    'oem',
    'ODM / OEM Customization',
    'Tailored Engineering',
    'From Concept to Mass Production in 30 Days.',
    'Supporting small-batch customization to multi-megawatt volume supply with free schematic drawings, fast 3D CAD modeling, and rapid prototyping.',
    oem_body
)

# =========================================================================
# 6. about.html
# =========================================================================
about_section = extract_section('about')
about_body = f'''
  <div class="page-content-wrapper" style="padding-top: 20px;">
    {about_section}

    <!-- Corporate Vision, Mission & Quality Policy from Crawled Data -->
    <div style="margin-top: 60px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
      <div style="background: #ffffff; border: 1px solid var(--border-glass); border-radius: var(--radius-xl); padding: 36px 30px; box-shadow: var(--shadow-card);">
        <span class="section-tag" style="margin-bottom: 8px;">Vision</span>
        <h3 style="font-size: 22px; font-weight: 700; color: #1d1d1f; margin-bottom: 12px;">Energy Innovation, Better Life</h3>
        <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">
          Focusing on innovation in energy from lead-acid to lithium and fossil fuel to electricity, powering homes, industry, and zero-carbon transport worldwide.
        </p>
      </div>

      <div style="background: #ffffff; border: 1px solid var(--border-glass); border-radius: var(--radius-xl); padding: 36px 30px; box-shadow: var(--shadow-card);">
        <span class="section-tag" style="margin-bottom: 8px;">Mission</span>
        <h3 style="font-size: 22px; font-weight: 700; color: #1d1d1f; margin-bottom: 12px;">Convenient & Eco-Friendly Lifestyle</h3>
        <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">
          To help build a convenient, highly reliable, and environmentally conscious lifestyle through advanced electrochemical storage solutions.
        </p>
      </div>

      <div style="background: #ffffff; border: 1px solid var(--border-glass); border-radius: var(--radius-xl); padding: 36px 30px; box-shadow: var(--shadow-card);">
        <span class="section-tag" style="margin-bottom: 8px;">Quality Policy</span>
        <h3 style="font-size: 22px; font-weight: 700; color: #1d1d1f; margin-bottom: 12px;">Foundation of Trust</h3>
        <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">
          "Quality is the foundation of NACCI as well as the reason for global partners to choose us." Strictly governed by IATF 16949 manufacturing standards.
        </p>
      </div>
    </div>
  </div>
'''
render_page(
    'about.html',
    'about',
    'About NACCI',
    'Heritage & Scale',
    '20+ Years Dedicated to New Energy Solutions.',
    'NACCI is a premier high-tech enterprise committed to the research, development, automated manufacturing, and global sales of lithium iron phosphate power and energy storage systems.',
    about_body
)

# =========================================================================
# 7. insights.html
# =========================================================================
insights_section = extract_section('insights')
insights_body = f'''
  <div class="page-content-wrapper" style="padding-top: 20px;">
    {insights_section}
  </div>
'''
render_page(
    'insights.html',
    'insights',
    'Industry Insights & Guides',
    'Knowledge Base & Engineering Insights',
    'Battery Industry Insights & Buying Guides.',
    'In-depth technical guides written by NACCI power engineers to help importers and project managers maximize battery longevity and lower total cost.',
    insights_body
)

# =========================================================================
# 8. faq.html
# =========================================================================
faq_section = extract_section('faq')
faq_body = f'''
  <div class="page-content-wrapper" style="padding-top: 20px;">
    {faq_section}

    <!-- Official 5-Year Warranty Terms Breakdown -->
    <div style="margin-top: 70px; background: #ffffff; border: 1px solid var(--border-glass); border-radius: var(--radius-xl); padding: 48px; box-shadow: var(--shadow-card);">
      <div class="section-header" style="margin-bottom: 30px;">
        <span class="section-tag">Official Coverage</span>
        <h2 class="section-title">5-Year Warranty Terms & Claim Procedure</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
        <div style="background: #f5f5f7; padding: 24px; border-radius: var(--radius-md);">
          <div style="font-weight: 700; color: #1d1d1f; font-size: 16px; margin-bottom: 8px;">Battery Modules: 5 Years</div>
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">All brand-new Grade-A LiFePO4 cells and integrated BMS are guaranteed against manufacturing defects for 5 full years from delivery date.</div>
        </div>
        <div style="background: #f5f5f7; padding: 24px; border-radius: var(--radius-md);">
          <div style="font-weight: 700; color: #1d1d1f; font-size: 16px; margin-bottom: 8px;">Accessories: 1 Year</div>
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">External charging units, communication cables, display meters, and wiring harnesses are warranted for 1 year with free replacement parts.</div>
        </div>
        <div style="background: #f5f5f7; padding: 24px; border-radius: var(--radius-md);">
          <div style="font-weight: 700; color: #1d1d1f; font-size: 16px; margin-bottom: 8px;">Fast-Track RMA Resolution</div>
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">Once technical telemetry verifies hardware abnormality, replacement modules are dispatched promptly with express shipping support.</div>
        </div>
      </div>
    </div>
  </div>
'''
render_page(
    'faq.html',
    'faq',
    'FAQ & Warranty',
    'Assurance & Knowledge',
    '5-Year Warranty Statement & FAQ.',
    'Transparent warranties and answers to essential technical inquiries regarding battery safety, cycle life, low temperature operation, and charging guidelines.',
    faq_body
)

# =========================================================================
# 9. contact.html
# =========================================================================
contact_section = extract_section('contact')
contact_body = f'''
  <div class="page-content-wrapper" style="padding-top: 20px;">
    {contact_section}
  </div>
'''
render_page(
    'contact.html',
    'contact',
    'Contact Us',
    'Global Engineering Support',
    'Connect with NACCI Power Engineers.',
    'Whether you need small-batch sample customization, distributor partnership, or multi-megawatt project quotes, our technical team responds within 24 hours.',
    contact_body
)

print("All 9 dedicated subpages successfully generated!")
