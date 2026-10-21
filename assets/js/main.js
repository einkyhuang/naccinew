/**
 * NACCI ENERGY — APPLE INTERACTIVE EXPERIENCE ENGINE
 * Includes Bilingual Dictionary, Product Catalog Engine, 
 * Interactive ROI Calculator, Article Reader & Modal Architecture.
 */

// ==========================================================================
// 1. BILINGUAL DICTIONARY (EN / 中文)
// ==========================================================================
const I18N = {
  en: {
    nav_home: "Home",
    nav_products: "Products",
    nav_solutions: "Solutions",
    nav_tech: "Engineering",
    nav_calc: "ROI Calculator",
    nav_oem: "OEM/ODM",
    nav_about: "About NACCI",
    nav_insights: "Insights",
    nav_faq: "FAQ & Warranty",
    nav_contact: "Contact Us",
    nav_support: "Support",
    btn_quote: "Request a Quote",
    ticker_text: "80,000 Pcs Monthly Production | 15+ Global Markets | 5-Year Standard Warranty",
    
    // Hero
    hero_eyebrow: "Next-Generation LiFePO₄ Energy Architecture",
    hero_title: "Powering What's Next. Built for Decades.",
    hero_sub: "Engineering premium Lithium Iron Phosphate battery systems for residential energy storage, industrial microgrids, automated AGVs, and critical telecom infrastructure.",
    btn_explore: "Explore Product Matrix",
    btn_custom: "Start Custom Project",
    
    metric_exp: "20+ Years",
    metric_exp_lbl: "Energy Innovation",
    metric_exp_sub: "R&D Heritage Since 2003",
    metric_cap: "80,000 Pcs",
    metric_cap_lbl: "Monthly Production",
    metric_cap_sub: "15+ Global Markets",
    metric_cycles: "6,000+",
    metric_cycles_lbl: "Deep Life Cycles",
    metric_cycles_sub: "80% DoD @ 10+ Yrs",
    metric_temp: "-25°C ~ +60°C",
    metric_temp_lbl: "Extreme Cold & Heat",
    metric_temp_sub: "PTC Active Preheating",
    metric_warranty: "5 Years",
    metric_warranty_lbl: "Full Replacement",
    metric_warranty_sub: "Automotive Quality",

    // Products Section
    prod_tag: "Comprehensive Product Ecosystem",
    prod_title: "Precision Engineered for Every Megawatt.",
    prod_desc: "Browse our standard and modular lithium iron phosphate solutions. Each unit is equipped with automotive-grade Grade-A cells and multi-tier intelligent BMS protection.",
    cat_all: "All Systems",
    cat_res: "Residential ESS",
    cat_com: "C&I Energy Storage",
    cat_agv: "AGV & Motive Power",
    cat_tel: "Telecom Base Station",
    cat_ups: "UPS Data Center",
    cat_la: "Lead-Acid Replacement",
    btn_quickview: "Quick Specs",
    btn_inquire: "Inquire Model",

    // Engineering Bento
    tech_tag: "The Engineering Inside",
    tech_title: "Zero Compromises.<br> Built from the Atom Up.",
    tech_desc: "Every NACCI battery pack combines chemical stability, intelligent edge computing, and automotive-level manufacturing standards.",
    bento_bms_tag: "Intelligent Brain",
    bento_bms_title: "Smart BMS with Millisecond Telemetry",
    bento_bms_desc: "Integrated battery management system monitoring cell voltages, active thermal balancing, and overcharge protection. Supports OTA cloud firmware upgrades.",
    bento_cell_tag: "Grade-A Chemistry",
    bento_cell_title: "Cobalt-Free LiFePO₄ Prismatic Cells",
    bento_cell_desc: "Inherently non-combustible and non-explosive even under severe nail penetration or crush conditions. Eco-conscious with zero heavy metal toxins.",
    bento_temp_tag: "All-Weather Armor",
    bento_temp_title: "Reliable Down to -25°C Sub-Zero",
    bento_temp_desc: "Optional active PTC heating elements enable full-speed charging in Arctic conditions without lithium plating damage.",
    bento_mes_tag: "Industry 4.0",
    bento_mes_title: "Automated Production & 200+ Test Checkpoints",
    bento_mes_desc: "Manufactured under strict IATF 16949 automotive standards with end-to-end traceability and 200+ precision testing instruments.",

    // Calculator
    calc_tag: "Interactive Sizing & Financial Model",
    calc_title: "Calculate Your Energy & ROI Advantage",
    calc_desc: "Select your project scenario and daily energy demand to discover your optimal battery configuration and 5-year cost savings over traditional lead-acid.",
    calc_lbl_app: "Application Scenario",
    calc_app_home: "Residential Solar & Backup (5 - 30 kWh)",
    calc_app_com: "Commercial & Industrial Peak Shaving (50 - 200 kWh)",
    calc_app_agv: "Warehouse AGV & Robotics Fleet (2 - 15 kWh)",
    calc_app_tel: "Telecom Tower / Data Center (5 - 50 kWh)",
    calc_lbl_demand: "Target Daily Energy Capacity",
    calc_lbl_voltage: "System Bus Voltage",
    calc_rec_label: "Engineered Recommendation",
    calc_stat_saving: "Estimated 5-Yr Savings",
    calc_stat_weight: "Weight Reduction",
    calc_stat_cycles: "Cycle Life Advantage",
    calc_stat_efficiency: "Round-Trip Efficiency",
    btn_calc_quote: "Configure This Spec With Engineers",

    // OEM/ODM
    oem_tag: "Tailored Engineering (ODM / OEM)",
    oem_title: "From Concept to Mass Production in 30 Days",
    oem_desc: "Supporting small-batch customization to multi-megawatt volume supply with free schematic drawings and rapid prototyping.",
    oem_s1_time: "Phase 1: 1–3 Days",
    oem_s1_title: "Specification & Workload Analysis",
    oem_s1_desc: "In-depth review of voltage, peak discharge current, dimension constraints, IP rating, inverter protocol, and thermal environments.",
    oem_s2_time: "Phase 2: 3 Days (First Draft)",
    oem_s2_title: "3D CAD & Schematic Engineering",
    oem_s2_desc: "Our engineering department produces precise mechanical drawings and wiring schematics. Includes 3 free full revision iterations.",
    oem_s3_time: "Phase 3: 30 Days",
    oem_s3_title: "Automated Prototyping & Mass Production",
    oem_s3_desc: "Rapid CNC prototyping, automated laser welding, end-of-line cycle aging, and international compliance certification (CE, UN38.3, UL).",

    // Solutions
    sol_tag: "Comprehensive Scenarios",
    sol_title: "Energy Independence Across Every Industry",
    sol_desc: "Discover how NACCI lithium energy systems provide uninterrupted power, eliminate fuel costs, and guarantee operational continuity.",

    // About
    about_tag: "Heritage & Scale",
    about_title: "20+ Years Dedicated to New Energy Solutions",
    about_quote: "“Quality is the foundation of NACCI as well as the reason for global partners to choose us.”",
    about_p1: "NACCI is a premier high-tech enterprise committed to the research, development, automated manufacturing, and global sales of lithium iron phosphate power and energy storage systems.",
    about_p2: "Focusing on the global transition from fossil fuels to clean electricity, our systems power homes, off-grid microgrids, commercial facilities, AGV robots, and marine vessels across 50+ countries with over 1.5 GWh in cumulative deployment.",
    test_lab_title: "Comprehensive In-House Testing Laboratories (Compliant with IEC / ISO / UL / UN38.3)",
    test_lab_desc: "Equipped with 200+ precision testing instruments across electrical, chemical, environmental, and thermal safety domains.",
    test_chip_1: "Battery Cell Testing",
    test_desc_1: "IEC 62619 & UN38.3 Drop / Nail Penetration",
    test_chip_2: "BMS Logic & Short Circuit",
    test_desc_2: "Overcharge, Overdischarge & Sub-ms Isolation",
    test_chip_3: "Charger & DC-DC Testing",
    test_desc_3: "High-Rate Pulse & Bus Ripple Simulation",
    test_chip_4: "Hybrid Inverter Matching",
    test_desc_4: "CAN / RS485 Multi-Protocol Interoperability",
    test_chip_5: "Thermal Runaway Isolation",
    test_desc_5: "Aerosol Fire Suppression & Thermal Barriers",
    test_chip_6: "-40°C ~ +85°C Temp Chamber",
    test_desc_6: "Arctic Soak & Thermal Shock Aging",

    // FAQ & Warranty
    faq_tag: "Assurance & Knowledge",
    faq_title: "5-Year Warranty Statement & FAQ",
    faq_desc: "Transparent warranties and answers to essential technical inquiries regarding battery safety, cycle life, low temperature operation, and charging guidelines.",

    // Insights
    news_tag: "Knowledge Base & Guides",
    news_title: "Battery Industry Insights & Buying Guides",
    news_desc: "In-depth technical guides written by NACCI power engineers to help importers and project managers maximize battery longevity and lower total cost.",
    blog_tab_all: "All Articles",
    blog_tab_solar: "Solar & ESS",
    blog_tab_motive: "Golf Cart & Motive",
    blog_tab_forklift: "Forklift & Industrial",
    blog_tab_48v: "48V Systems",
    blog_tab_marine: "Marine & Boat",
    blog_tab_ups: "UPS Power",
    blog_tab_market: "Market Prices",

    // Contact
    contact_tag: "Global Support",
    contact_title: "Connect with NACCI Power Engineers",
    contact_desc: "Whether you need small-batch sample customization, distributor partnership, or multi-megawatt project quotes, our technical team responds within 24 hours.",
    form_name: "Full Name",
    form_email: "Work Email",
    form_phone: "Phone / WhatsApp",
    form_product: "Interested Product / Series",
    form_msg: "Project Details, Voltage, Capacity, Quantity Requirements...",
    btn_submit: "Send Engineering Inquiry",
    contact_privacy: "*We respect your confidentiality. All technical schematics and client details are strictly protected under NDA."
  },

  zh: {
    nav_home: "首页",
    nav_products: "全系产品",
    nav_solutions: "储能方案",
    nav_tech: "核心技术",
    nav_calc: "收益测算",
    nav_oem: "定制服务",
    nav_about: "关于南驰",
    nav_insights: "行业智库",
    nav_faq: "质保与支持",
    nav_contact: "联系采购",
    nav_support: "服务支持",
    btn_quote: "获取定制报价",
    ticker_text: "月均产能 80,000 套 | 远销海外 15+ 国家 | 5年品质质保换新承诺",

    // Hero
    hero_eyebrow: "新一代车规级磷酸铁锂能源架构",
    hero_title: "驱动未来，专为数十年可靠运转而生。",
    hero_sub: "南驰能源专注于研发与制造车规级磷酸铁锂（LiFePO₄）电池系统。广泛应用于户用光储、工商业微电网、工业AGV搬运机器人及通信基站备用电源。",
    btn_explore: "浏览全系产品矩阵",
    btn_custom: "发起 OEM/ODM 定制",

    metric_exp: "20+ 年",
    metric_exp_lbl: "新能源研发沉淀",
    metric_exp_sub: "专注锂电始于2003",
    metric_cap: "80,000 套",
    metric_cap_lbl: "月均生产交付",
    metric_cap_sub: "15+ 出口国家与地区",
    metric_cycles: "6,000+ 次",
    metric_cycles_lbl: "长循环寿命",
    metric_cycles_sub: "80% DoD使用超10年",
    metric_temp: "-25°C ~ +60°C",
    metric_temp_lbl: "严寒与高热全天候",
    metric_temp_sub: "PTC电芯智能预热",
    metric_warranty: "5 年",
    metric_warranty_lbl: "品质质保换新",
    metric_warranty_sub: "车规级质保保障",

    // Products Section
    prod_tag: "全场景产品矩阵",
    prod_title: "精工细作，每一度电都值得信赖。",
    prod_desc: "探索南驰标准化与模块化磷酸铁锂储能设备。全系标配高安全车规级A品方形电芯与多重智能BMS主动安全防护系统。",
    cat_all: "全部产品",
    cat_res: "户用储能系统",
    cat_com: "工商业储能柜",
    cat_agv: "AGV工业动力电池",
    cat_tel: "通信机房备电",
    cat_ups: "UPS高压储能",
    cat_la: "铅酸替代锂电",
    btn_quickview: "规格参数",
    btn_inquire: "询盘此型号",

    // Engineering Bento
    tech_tag: "硬核工程研发",
    tech_title: "微米级严谨把控，从电芯到系统的质变。",
    tech_desc: "南驰每一套电池模组均融合了先进电化学安全配方、毫秒级智能边缘计算与汽车级智能制造标准。",
    bento_bms_tag: "智慧大脑",
    bento_bms_title: "集成式智能BMS电池管理系统",
    bento_bms_desc: "精准监控单体电芯压差、主动均衡、过充过放全向熔断防护，支持云端OTA远程算法固件无感升级。",
    bento_cell_tag: "A品电化学",
    bento_cell_title: "无钴高安全磷酸铁锂方形电芯",
    bento_cell_desc: "即便在严苛针刺、重度挤压或高温冲击下亦不起火、不爆炸。零重金属污染，符合全球绿色环保标准。",
    bento_temp_tag: "极寒抗御",
    bento_temp_title: "耐受-25°C低温严酷工况",
    bento_temp_desc: "可选内置PTC智能自加热矩阵，寒冬冷库或极地气候下快速预热充电，防止析锂衰减伤害电芯。",
    bento_mes_tag: "工业4.0智造",
    bento_mes_title: "自动化MES产线与200+道严苛质检",
    bento_mes_desc: "严格执行IATF 16949汽车质量体系标准，每块电池全生命周期追溯，配备超200台精密检测仪器保障品质。",

    // Calculator
    calc_tag: "交互式能源测算与投资回报模型",
    calc_title: "量身测算您的储能方案与省钱收益",
    calc_desc: "选择应用场景与每日用电需求，智能模型将即时为您匹配最佳南驰电池型号，并计算相比传统铅酸电池的5年综合降本效益。",
    calc_lbl_app: "应用场景分类",
    calc_app_home: "户用光伏与家庭备电 (5 - 30 kWh)",
    calc_app_com: "工商业厂区削峰填谷 (50 - 200 kWh)",
    calc_app_agv: "智能仓储 AGV / 机器人车队 (2 - 15 kWh)",
    calc_app_tel: "通信基站 / 数据中心备用 (5 - 50 kWh)",
    calc_lbl_demand: "目标日用储能电量",
    calc_lbl_voltage: "系统推荐母线电压",
    calc_rec_label: "系统智能推荐型号",
    calc_stat_saving: "预计5年节省运营成本",
    calc_stat_weight: "机身减重幅度",
    calc_stat_cycles: "使用寿命周期倍数",
    calc_stat_efficiency: "综合充放电往返效率",
    btn_calc_quote: "以此配置对接南驰工程师",

    // OEM/ODM
    oem_tag: "专精ODM/OEM定制流程",
    oem_title: "从技术沟通到量产交付，30天全周期可控",
    oem_desc: "支持小批量敏捷定制与兆瓦级批量供货，免费提供三套专业工程图纸方案，助力全球客户高效落地。",
    oem_s1_time: "第一阶段：1–3 天",
    oem_s1_title: "电池技术需求对接与参数确认",
    oem_s1_desc: "详细沟通电压、放电峰值电流、外壳最大尺寸限制、防水等级（IP）、逆变器通讯协议及工作温区要求。",
    oem_s2_time: "第二阶段：3 天 (初稿完成)",
    oem_s2_title: "3D CAD图纸与电气原理图设计",
    oem_s2_desc: "南驰资深工程师团队设计出具完整机械外观与拓扑电路图纸。免费提供3次全套图纸方案修改服务。",
    oem_s3_time: "第三阶段：30 天",
    oem_s3_title: "样品打样与全自动量产交付",
    oem_s3_desc: "依照确认方案快速开模打样、全自动激光焊接、全功率老化测试，并通过国际合规认证后准时发货。",

    // Solutions
    sol_tag: "全场景落地矩阵",
    sol_title: "赋能各行各业实现能源自主与绿色低碳",
    sol_desc: "了解南驰电池如何在户用住宅、工业园区、智能移动机器人和偏远海岛通信中提供源源不断的可靠能量。",

    // About
    about_tag: "企业底蕴与交付规模",
    about_title: "深耕新能源领域二十余载的坚守与创新",
    about_quote: "“质量是南驰立足之本，也是全球众多品牌与集成商选择我们的决定性原因。”",
    about_p1: "南驰能源是一家专注于磷酸铁锂电池与新能源储能系统研发、自动化生产与全球销售的高新技术企业，提供从电芯模组到整机系统的一站式解决方案。",
    about_p2: "致力于从铅酸到锂电、从化石能源到清洁电力的全方位转型升级。南驰产品已远销欧美、东南亚、非洲等50多个国家和地区，全球累计交付容量突破 1.5GWh+。",
    test_lab_title: "国家级标准综合自建测试实验室（符合 IEC / ISO / UL / UN38.3 标准）",
    test_lab_desc: "自建现代化综合检测中心，配备200+台专业仪器，全面覆盖电芯、BMS、逆变器与极端工况防护验证。",
    test_chip_1: "电芯性能与安全测试",
    test_desc_1: "IEC 62619 / UN38.3 跌落、挤压与针刺实验",
    test_chip_2: "BMS逻辑与硬件短路",
    test_desc_2: "多级过充过放保护，毫秒级快速切断隔离",
    test_chip_3: "充电机与DC-DC工况",
    test_desc_3: "高倍率脉冲冲击与直流母线纹波模拟检测",
    test_chip_4: "主流逆变器协议匹配",
    test_desc_4: "CAN / RS485 多协议跨品牌实时通信联调",
    test_chip_5: "热失控物理阻隔防护",
    test_desc_5: "气溶胶主动抑火与电芯级纳米级隔热阻燃",
    test_chip_6: "-40°C ~ +85°C 宽温测试",
    test_desc_6: "极寒极热高低温冲击老化与耐候可靠性",

    // FAQ & Warranty
    faq_tag: "安心保障与技术答疑",
    faq_title: "5年官方质保声明与技术常见问题",
    faq_desc: "透明清晰的质保换新条款，解答关于电芯安全性、BMS保护机制、循环寿命、极寒使用与快充优势的专业疑问。",

    // Insights
    news_tag: "南驰智库与行业干货",
    news_title: "深度技术指南与锂电采购宝典",
    news_desc: "由南驰一线资深电气工程师精心撰写的技术文章，助您深度理解电池原理、规避采购陷阱并最大化电池投资价值。",
    blog_tab_all: "全部文章指南",
    blog_tab_solar: "光储与住宅微网",
    blog_tab_motive: "球车与轻出行动力",
    blog_tab_forklift: "叉车与工业重载",
    blog_tab_48v: "48V标品系统",
    blog_tab_marine: "船舶与深循环",
    blog_tab_ups: "UPS机房备电",
    blog_tab_market: "市场行情与价格",

    // Contact
    contact_tag: "全球互联与采购对接",
    contact_title: "立即与南驰资深电池工程师建立联系",
    contact_desc: "无论是小批量样品定制测试、区域经销代理合作，还是兆瓦级储能工程采购，我们的专业团队均在24小时内极速响应。",
    form_name: "您的姓名",
    form_email: "工作邮箱",
    form_phone: "电话 / 微信 / WhatsApp",
    form_product: "感兴趣的产品系列",
    form_msg: "请详细填写您的项目电压、容量、尺寸要求或具体工况...",
    btn_submit: "提交工程技术询盘",
    contact_privacy: "*我们严格尊重商业保密协议，所有客户技术资料与询盘参数均受法律级别安全保护。"
  }
};

// Current Active Language
let CURRENT_LANG = 'en';

// ==========================================================================
// 2. BLOG & KNOWLEDGE BASE DATABASE (Full Article Reader Content)
// ==========================================================================
const ARTICLES_DATA = [
  {
    id: "reduce-cost",
    slug: "reduce-battery-costs",
    category: "Cost Optimization", category_cn: "采购降本",
    date: "2026-03-19",
    title: "How Small Battery Importers Can Reduce Cost by 20–30%",
    title_cn: "小型电池进口商与采购商如何削减 20–30% 综合采购成本",
    summary: "Proven procurement strategies for importers: optimizing MOQ packaging, standardizing BCI enclosure sizes, and leveraging factory-direct OEM modularization.",
    summary_cn: "为中小采购商与进口商打造的实用采购秘籍：优化MOQ装运标准、利用标准化BCI机箱外壳、与源头工厂建立直采模块化合作。",
    content: `
      <h3>Executive Summary</h3>
      <p>For small to medium-scale battery importers, wholesale distributors, and renewable energy contractors, unit price is rarely the only factor dictating profit margins. In reality, hidden costs—such as fragmented SKU packaging, custom tooling fees, sea freight dead space, and warranty failure rates—can inflate overall expenditure by up to 35%.</p>
      
      <h3>1. Standardize on Common BCI and Rack Sizes</h3>
      <p>Instead of ordering bespoke casing dimensions that require specialized tooling and dedicated stamping dies, standardizing on global formats (such as 19-inch rack-mount chassis for telecom and Group 24/27/31 for marine and golf carts) immediately saves 10-15% in manufacturing setup costs.</p>

      <h3>2. Leverage Modular Battery Blocks (Parallel Expansion)</h3>
      <p>Rather than stocking dozens of discrete battery capacities (e.g., 5kWh, 10kWh, 15kWh, 20kWh separately), smart distributors stock standardized 5.12kWh modular blocks. By combining identical blocks in parallel, distributors fulfill custom customer requests from a single core inventory item, cutting warehousing holding costs by 25%.</p>

      <h3>3. Grade-A Cells Eliminate In-Warranty Replacement Overhead</h3>
      <p>Grade-B or repurposed EV cells may appear 15% cheaper initially, but their uneven degradation causes high warranty claim rates (3-8%). Partnering with certified manufacturers like NACCI who use 100% brand-new Grade-A prismatic cells guarantees zero premature cell failure and cuts post-sale technical support costs to near zero.</p>
    `,
    content_cn: `
      <h3>核心概要</h3>
      <p>对于中小型储能进口商、区域批发经销商以及光伏工程承包商而言，电芯或成品的单价绝非决定利润率的唯一指标。实际上，杂乱的SKU规格、不必要的模具定制费、海运集装箱装箱死角以及售后电芯失效率，往往会导致隐性成本增加高达35%。</p>

      <h3>1. 优选国际通用标准尺寸（标准化机箱与机架）</h3>
      <p>避免在起步阶段盲目定制奇形怪状的模具外壳。建议优先采用国际通行的19英寸标准机架尺寸（通信与数据中心专用）或通用BCI尺寸（Group 24/27/31高尔夫球车与游艇通用）。这能让每批次省去高昂模具开发费与额外测试成本。</p>

      <h3>2. 采用模块化并联架构统一库存</h3>
      <p>无需同时囤积5度电、10度电、15度电等多种分散SKU。聪明的进口商通常主推标准5.12kWh模块，通过现场简易堆叠或并联线束扩展，既能满足终端客户大容量定制诉求，又能大幅盘活库存流动资金。</p>

      <h3>3. 坚持纯A品车规电芯，彻底杜绝售后退换隐性巨额亏损</h3>
      <p>市场上所谓的二手梯次利用电芯虽然表面便宜10-15%，但压差大、内阻不均极易导致早期损坏，售后跨国退换货运费与声誉损失不可估量。南驰坚持100%全新车规A品方形电芯，从源头确保长达5-10年的免维护高可靠性。</p>
    `
  },
  {
    id: "offgrid-vs-gridtie",
    slug: "differences-between-solar-energy-and-grid-connected-energy-storage",
    category: "Technical Guide", category_cn: "技术对比",
    date: "2026-03-22",
    title: "Off Grid Solar Battery vs Grid-Tied Energy Storage: What Buyers Need to Know",
    title_cn: "离网太阳能储能电池 vs 并网储能系统：采购必读技术对比指南",
    summary: "Comprehensive architectural breakdown between DC-coupled off-grid systems and AC-coupled grid-tied energy storage, including inverter matching and C-rate demands.",
    summary_cn: "离网直流耦合与并网交流耦合储能系统的架构深度剖析，涵盖逆变器通讯协议匹配、充放电倍率要求与实际电网断电应急切换。",
    content: `
      <h3>Understanding the Fundamental Differences</h3>
      <p>When selecting a lithium energy storage solution, identifying whether the installation is pure off-grid, hybrid grid-tied with backup, or grid-tied for economic peak shaving dictates the required battery chemistry, discharge rate, and inverter protocol.</p>
      
      <h3>Key Decision Factors:</h3>
      <ul>
        <li><strong>Continuous Discharge Current (C-Rate):</strong> Off-grid systems must handle heavy inductive startup surges from air conditioning compressors, water pumps, and electric motors without tripping the BMS protection. NACCI batteries feature high-surge BMS handling up to 2C-3C instantaneous surges for 10 seconds.</li>
        <li><strong>Inverter Communication (CAN / RS485):</strong> Grid-tied storage requires closed-loop communication with hybrid inverters (e.g. Deye, Growatt, Victron, Solis) to modulate charge limits dynamically according to grid tariffs.</li>
        <li><strong>Depth of Discharge (DOD):</strong> While lead-acid batteries degrade rapidly if discharged beyond 50%, NACCI LiFePO4 batteries reliably deliver 90-100% DOD across 6,000 cycles.</li>
      </ul>
    `,
    content_cn: `
      <h3>厘清两大系统的本质差异</h3>
      <p>在为终端用户配置锂电系统时，明确系统属于纯离网微电网、带备电功能的混合光储，还是纯经济型并网削峰填谷系统，直接决定了电芯选型、放电倍率及逆变器闭环通讯协议。</p>

      <h3>核心考量维度：</h3>
      <ul>
        <li><strong>持续放电能力与抗冲击倍率：</strong> 离网工况需要直面空调压缩机、水泵、大功率电机的瞬间感性启动冲击。南驰储能系统内置工业级重载BMS，支持2C-3C瞬间脉冲放电（10秒），保障设备平稳启动而不跳闸。</li>
        <li><strong>逆变器通讯闭环（CAN / RS485）：</strong> 并网系统必须与主流混合逆变器（如德业、古瑞瓦特、锦浪、Victron等）建立毫秒级握手通讯，根据阶梯电价动态调节充放功率。</li>
        <li><strong>放电深度（DOD）：</strong> 传统铅酸电池如果放电超过50%寿命将急剧缩水，而南驰磷酸铁锂电池即使保持90%-100%全深度放电，依然具备6000次以上超长循环。</li>
      </ul>
    `
  },
  {
    id: "commercial-ess-selection",
    category: "C&I Project", category_cn: "工商业储能",
    date: "2026-04-08",
    title: "How to Select the Right Energy Storage Battery System for a Commercial Project",
    title_cn: "工商业储能项目如何选型：30kW/50kWh 到 100kW/215kWh 全流程方案指南",
    summary: "Crucial design parameters for industrial parks, manufacturing plants, and EV charging stations, covering high-voltage DC architecture, fire suppression, and EMS.",
    summary_cn: "针对工业园区、智造工厂及光储充一体化电站的关键工程参数设计：涵盖高压直流母线、三级自动防灭火消防及智慧EMS能量调度。",
    content: `
      <h3>Sizing Commercial Battery Systems for Maximum ROI</h3>
      <p>Commercial and Industrial (C&I) projects generate revenue primarily through two mechanisms: peak-valley electricity tariff arbitrage and demand charge reduction (peak shaving).</p>

      <h3>System Architecture Considerations:</h3>
      <p>High voltage (384V - 800V DC) is standard for C&I applications because it minimizes thermal resistance and transmission losses, yielding an overall round-trip system efficiency exceeding 91%.</p>
      <p>Integrated outdoor cabinets (like the NACCI RPCI series) include HVAC air-conditioning or liquid cooling to ensure all internal cells remain within a strict temperature differential of ≤3°C, extending pack lifespan by over 40%.</p>
    `,
    content_cn: `
      <h3>工商业储能选型与投资回收模型</h3>
      <p>工商业（C&I）储能项目的核心盈利逻辑在于两点：峰谷电价差套利，以及变压器最大需量控制（削峰减少基本电费支出）。</p>

      <h3>系统核心架构考量：</h3>
      <p>工商业通常采用384V - 800V高压直流架构，大幅降低整机线损，使得整套系统交直流综合往返效率（RTE）稳定保持在91%以上。</p>
      <p>南驰RPCI一体化室外储能柜标配工业级精密温控空调（或液冷管路），将整柜内部电芯温差严格锁定在≤3°C以内，显著延缓电芯衰减，整体寿命延长40%以上。</p>
    `
  },
  {
    id: "10kwh-home-battery",
    category: "Residential ESS", category_cn: "户用储能",
    date: "2026-01-22",
    title: "What is a 10 kWh Household Battery? What are its Applications?",
    title_cn: "什么是 10 kWh 家用储能电池？它的典型应用场景与带载能力测算",
    summary: "Detailed practical breakdown of 10kWh residential systems: how many hours of home power it provides, appliance load calculations, and wall-mount vs wheeled ergonomics.",
    summary_cn: "10度电家庭储能系统的全景生活测算：可支撑全屋电器运转多久、关键负荷启动计算、壁挂式与滚轮落地式的空间选型对比。",
    content: `
      <h3>What Can 10 kWh Actually Power in a Modern Home?</h3>
      <p>A 10 kWh (10,240 Wh) lithium iron phosphate battery represents the sweet spot for residential solar setups. In typical emergency grid outages, 10 kWh provides:</p>
      <ul>
        <li>Standard Refrigerator (150W): Up to 50 hours of continuous preservation</li>
        <li>LED Home Lighting (100W total): 80+ hours</li>
        <li>Inverter Split Air Conditioner (800W): 10 to 12 hours of comfort</li>
        <li>Wi-Fi Router, Laptops, Mobile Devices (80W): Over 100 hours</li>
      </ul>
      <p>Paired with a 5kW-8kW rooftop solar array, a 10 kWh NACCI storage system achieves 80-95% grid independence for the average household.</p>
    `,
    content_cn: `
      <h3>10度电（10 kWh）能为现代家庭带来什么？</h3>
      <p>10 kWh（即10.24度电）是目前全球户用光储市场公认的“黄金容量”。在突发电网停电或极端风暴天气下，一块南驰10kWh电池可轻松支撑：</p>
      <ul>
        <li>全尺寸双门变频冰箱（150W）：持续保鲜冷藏运转超 50 小时</li>
        <li>全屋LED照明系统（100W）：明亮照明长达 80+ 小时</li>
        <li>大1.5匹变频冷暖空调（800W）：提供舒适温度达 10 至 12 小时</li>
        <li>光纤路由器、笔记本电脑与手机充电（80W）：持续在线 100+ 小时</li>
      </ul>
      <p>搭配屋顶5kW-8kW光伏板，南驰10kWh户用储能系统可助普通家庭实现80%-95%的日常用电自给自足。</p>
    `
  },
  {
    id: "ups-guide-2026",
    slug: "ups-power-supply-guide-2026-how-it-works-types-specs-explained",
    category: "Data Center", category_cn: "关键电力",
    date: "2026-01-07",
    title: "UPS Power Supply Guide 2026 — How It Works, Types & Specs Explained",
    title_cn: "2026年 UPS 应急电源技术白皮书：原理、分类及高倍率锂电替换趋势",
    summary: "Technical guide on online double-conversion UPS, high-rate lithium replacement benefits over lead-acid, 60% floor space savings, and millisecond transfer times.",
    summary_cn: "在线双变换式UPS工作原理深度解读，高倍率磷酸铁锂替代传统铅酸（VRLA）的颠覆性优势：占地释放60%、承重减负70%、毫秒级断电切换。",
    content: `
      <h3>The Great Transition from VRLA to LiFePO4 in Critical Power</h3>
      <p>Historically, Uninterruptible Power Supplies (UPS) in data centers and healthcare depended on Valve Regulated Lead-Acid (VRLA) batteries. However, VRLA suffers from short design life (3-5 years), high ambient sensitivity requiring massive air conditioning, and excessive physical weight.</p>
      
      <h3>Why High-Rate LiFePO4 is the Superior Choice:</h3>
      <ul>
        <li><strong>Footprint & Floor Load:</strong> LiFePO4 cuts battery room footprint by 60% and weight by 70%, allowing data centers to install more server compute racks per square meter.</li>
        <li><strong>10-15 Year Service Life:</strong> Eliminates two to three disruptive, expensive battery replacement cycles over the UPS operating lifespan.</li>
        <li><strong>High-Rate Discharge:</strong> NACCI UPS lithium systems support 5C-8C high-current discharge bursts, sustaining full mission-critical load during the critical 15-minute gap until backup diesel generators synchronize.</li>
      </ul>
    `,
    content_cn: `
      <h3>关键应急电力从铅酸走向高倍率磷酸铁锂的历史变革</h3>
      <p>传统上，大型云计算中心、金融机房及重症监护室依赖阀控式密封铅酸蓄电池（VRLA）。但铅酸寿命短（3-5年需大换一次）、对环境温度极端敏感（需巨额空调制冷）、笨重沉底等缺陷日益凸显。</p>

      <h3>南驰高倍率磷酸铁锂的核心优势：</h3>
      <ul>
        <li><strong>空间与承重革命：</strong> 体积减少60%，重量减轻70%，极大降低机房建筑承重要求，并在有限空间内容纳更多算力服务器机架。</li>
        <li><strong>长达10-15年服役寿命：</strong> 在整个UPS生命周期内几乎无需频繁更换电池组，综合运营维护成本（TCO）节省达45%以上。</li>
        <li><strong>高倍率爆发性大电流放电：</strong> 支持5C-8C瞬时大倍率放电，在市电突发中断到备用柴油发电机平稳接管的关键15分钟内，提供稳如磐石的电力支撑。</li>
      </ul>
    `
  }
];

// ==========================================================================
// 3. CORE DOM & APP INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguageEngine();
  initHeroSlider();
  initCategoryTabs();
  const urlCat = new URLSearchParams(window.location.search).get('cat') || 'all';
  renderProductsCatalog(urlCat);
  initCalculator();
  initModals();
  initFaqAccordion();
  renderArticles();
  initSearchPalette();
  initContactForm();
  initScrollNav();
  initFooterTrustCarousel();
});

// ==========================================================================
// 4. BILINGUAL LANGUAGE SWITCHER ENGINE
// ==========================================================================
function initLanguageEngine() {
  const langBtn = document.getElementById('langSwitchBtn');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }
  const drawerLangBtn = document.getElementById('drawerLangSwitchBtn');
  if (drawerLangBtn) {
    drawerLangBtn.addEventListener('click', toggleLanguage);
  }
  applyLanguage(CURRENT_LANG);
}

function toggleLanguage() {
  CURRENT_LANG = CURRENT_LANG === 'en' ? 'zh' : 'en';
  localStorage.setItem('nacci_lang', CURRENT_LANG);
  applyLanguage(CURRENT_LANG);
}

function toggleFooterAccordion(headerEl) {
  const col = headerEl.closest('.footer-col-accordion');
  if (col) {
    col.classList.toggle('open');
  }
}

// ==========================================================================
// 4b. MOBILE FOOTER TRUST BADGES CAROUSEL
// ==========================================================================
function initFooterTrustCarousel() {
  const strips = document.querySelectorAll('.footer-trust-strip');
  if (!strips.length) return;

  strips.forEach(strip => {
    const items = strip.querySelectorAll('.footer-trust-item');
    if (items.length <= 1) return;

    strip.classList.add('js-carousel-ready');

    // Dot indicators
    let indicatorsWrap = strip.querySelector('.footer-trust-indicators');
    if (!indicatorsWrap) {
      indicatorsWrap = document.createElement('div');
      indicatorsWrap.className = 'footer-trust-indicators';
      items.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `footer-trust-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Trust badge ${idx + 1}`);
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          stopTimer();
          goToSlide(idx, idx > currentIndex ? 'next' : 'prev');
          startTimer();
        });
        indicatorsWrap.appendChild(dot);
      });
      strip.appendChild(indicatorsWrap);
    }

    let currentIndex = 0;
    let autoTimer = null;
    let isTransitioning = false;

    // Reset items
    items.forEach((item, idx) => {
      item.classList.remove('active', 'slide-out-left', 'slide-out-right', 'prepare-left', 'prepare-right');
      if (idx === 0) {
        item.classList.add('active');
      }
    });

    function goToSlide(nextIndex, direction = 'next') {
      if (isTransitioning || nextIndex === currentIndex) return;
      isTransitioning = true;

      const currentItem = items[currentIndex];
      const nextItem = items[nextIndex];

      // Prepare next slide position before animating
      nextItem.classList.remove('slide-out-left', 'slide-out-right', 'active', 'prepare-left', 'prepare-right');
      if (direction === 'next') {
        nextItem.classList.add('prepare-right');
      } else {
        nextItem.classList.add('prepare-left');
      }

      // Force layout reflow
      void nextItem.offsetWidth;

      // Animate current out
      currentItem.classList.remove('active', 'prepare-left', 'prepare-right', 'slide-out-left', 'slide-out-right');
      if (direction === 'next') {
        currentItem.classList.add('slide-out-left');
      } else {
        currentItem.classList.add('slide-out-right');
      }

      // Animate next in
      nextItem.classList.remove('prepare-left', 'prepare-right');
      nextItem.classList.add('active');

      // Update dots
      const dots = strip.querySelectorAll('.footer-trust-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === nextIndex);
      });

      currentIndex = nextIndex;

      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }

    function nextSlide() {
      const nextIndex = (currentIndex + 1) % items.length;
      goToSlide(nextIndex, 'next');
    }

    function prevSlide() {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      goToSlide(prevIndex, 'prev');
    }

    function startTimer() {
      stopTimer();
      if (window.innerWidth <= 768) {
        autoTimer = setInterval(nextSlide, 3500);
      }
    }

    function stopTimer() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    startTimer();

    // Touch swipe support
    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    strip.addEventListener('touchstart', (e) => {
      if (window.innerWidth > 768) return;
      stopTimer();
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = true;
    }, { passive: true });

    strip.addEventListener('touchend', (e) => {
      if (!isSwiping || window.innerWidth > 768) return;
      isSwiping = false;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = endX - startX;
      const diffY = endY - startY;

      if (Math.abs(diffX) > 30 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      startTimer();
    }, { passive: true });

    // Handle resize
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        if (!autoTimer) startTimer();
      } else {
        stopTimer();
      }
    });
  });
}

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  
  // Update button labels
  const langBtn = document.getElementById('langSwitchBtn');
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? '中文 / EN' : 'EN / 中文';
  }
  const drawerLangBtn = document.getElementById('drawerLangSwitchBtn');
  if (drawerLangBtn) {
    const textSpan = drawerLangBtn.querySelector('.lang-text');
    if (textSpan) {
      textSpan.textContent = lang === 'en' ? '中文 / English' : 'English / 中文';
    }
  }

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (dict[key].includes('<')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  
  // Subpage titles & descriptions
  const heroTitle = document.querySelector('.page-hero-title');
  const heroDesc = document.querySelector('.page-hero-desc');
  const breadcrumbCurrent = document.querySelector('.page-breadcrumb-current');

  if (window.location.pathname.includes('products.html')) {
    if (heroTitle) heroTitle.textContent = lang === 'zh' ? '全系工业与储能锂电池矩阵' : 'Engineered Battery Systems Matrix.';
    if (heroDesc) heroDesc.textContent = lang === 'zh' ? '涵盖户用太阳能储能、工商业高压集装箱储能、AGV智能物流动力及通信机房后备电池。' : 'From residential solar storage and multi-megawatt C&I containers to heavy-duty AGV motive packs and telecom tower backups.';
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = lang === 'zh' ? '全系产品' : 'Products';
  } else if (window.location.pathname.includes('about.html')) {
    if (heroTitle) heroTitle.textContent = lang === 'zh' ? '关于南驰：二十余载深耕新能源' : '20+ Years Dedicated to New Energy Solutions.';
    if (heroDesc) heroDesc.textContent = lang === 'zh' ? '国家高新技术企业，拥有自建智能制造工厂、200+专业检测仪器与覆盖全球15+国家的交付版图。' : 'Tier-1 manufacturer committed to high-safety LiFePO4 cells, automated PACK manufacturing, and global zero-carbon deployment.';
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = lang === 'zh' ? '关于南驰' : 'About NACCI';
  } else if (window.location.pathname.includes('solutions.html')) {
    if (heroTitle) heroTitle.textContent = lang === 'zh' ? '全场景新能源与动力解决方案' : 'Cross-Industry Energy Storage Solutions.';
    if (heroDesc) heroDesc.textContent = lang === 'zh' ? '针对户用微网、工厂削峰填谷、高尔夫球车锂电化及极端恶劣工况定制的系统解决方案。' : 'Discover how NACCI lithium energy systems provide uninterrupted power, eliminate fuel costs, and guarantee operational continuity.';
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = lang === 'zh' ? '解决方案' : 'Solutions';
  } else if (window.location.pathname.includes('engineering.html')) {
    if (heroTitle) heroTitle.textContent = lang === 'zh' ? '工程研发与极限测试实验室' : 'Research, Engineering & Testing Labs.';
    if (heroDesc) heroDesc.textContent = lang === 'zh' ? '由100+电化学、热力学与嵌入式软件工程师组成的资深团队，配备200+台原厂测试仪器。' : 'Driven by 100+ electrochemical engineers, automated laser manufacturing lines, and 200+ precision testing instruments.';
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = lang === 'zh' ? '工程与研发' : 'Engineering';
  } else if (window.location.pathname.includes('calculator.html')) {
    if (heroTitle) heroTitle.textContent = lang === 'zh' ? '光储容量与投资回报测算器' : 'Solar & Energy Storage Sizing Calculator.';
    if (heroDesc) heroDesc.textContent = lang === 'zh' ? '根据您的用电负载与光伏配置，秒级计算储能电池容量、备电时长及投资回收周期。' : 'Evaluate battery capacity, backup runtime, and diesel replacement payback with precision engineering formulas.';
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = lang === 'zh' ? '容量测算器' : 'Sizing Calculator';
  } else if (window.location.pathname.includes('oem.html')) {
    if (heroTitle) heroTitle.textContent = lang === 'zh' ? 'OEM/ODM 定制化电池智造服务' : 'OEM / ODM Rapid Battery Engineering.';
    if (heroDesc) heroDesc.textContent = lang === 'zh' ? '3天出具CAD拓扑工程图纸，30天全自动开模量产交付，严苛遵守保密协议。' : '3-day 3D CAD schematic turnaround, 30-day mass production delivery, and dedicated engineering consultation.';
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = lang === 'zh' ? 'OEM定制服务' : 'OEM / ODM';
  } else if (window.location.pathname.includes('insights.html')) {
    if (heroTitle) heroTitle.textContent = lang === 'zh' ? '行业智库与锂电技术采购指南' : 'Battery Industry Insights & Buying Guides.';
    if (heroDesc) heroDesc.textContent = lang === 'zh' ? '由南驰资深工程师撰写的33+篇专业技术指南与市场深度分析，助您规避采购风险。' : 'Over 33 in-depth technical guides and market forecasts authored by NACCI power engineers.';
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = lang === 'zh' ? '行业指南' : 'Industry Insights';
  } else if (window.location.pathname.includes('faq.html')) {
    if (heroTitle) heroTitle.textContent = lang === 'zh' ? '5年官方质保声明与技术答疑' : '5-Year Warranty Statement & FAQ.';
    if (heroDesc) heroDesc.textContent = lang === 'zh' ? '透明透明的质保换新条款，解答关于电芯安全性、BMS保护、极寒放电与快充的常见疑问。' : 'Transparent warranty policies and technical guidance directly from our factory engineering team.';
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = lang === 'zh' ? '质保与答疑' : 'Warranty & FAQ';
  } else if (window.location.pathname.includes('contact.html')) {
    if (heroTitle) heroTitle.textContent = lang === 'zh' ? '联系南驰：全球工程技术咨询' : 'Get in Touch with Power Engineers.';
    if (heroDesc) heroDesc.textContent = lang === 'zh' ? '无论您是需要技术选型、样品打样还是大批量采购，我们工程师团队均在24小时内响应。' : 'Request datasheets, schedule a video factory audit, or obtain engineering pricing within 24 hours.';
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = lang === 'zh' ? '联系我们' : 'Contact Us';
  }


  // Modal titles & labels
  const rfqTitle = document.querySelector('#inquiryModal h3');
  const rfqDesc = document.querySelector('#inquiryModal p');
  const rfqSubmit = document.querySelector('#inquiryModal button[type="submit"]');
  if (rfqTitle) rfqTitle.textContent = lang === 'zh' ? '申请原厂工程技术报价' : 'Request Engineering Quote';
  if (rfqDesc) rfqDesc.textContent = lang === 'zh' ? '南驰电化学工程师将评估您的实际工况并在24小时内提供完整技术参数表与报价。' : 'Our electrochemical engineers will evaluate your workload and send complete technical datasheets and pricing within 24 hours.';
  if (rfqSubmit) rfqSubmit.textContent = lang === 'zh' ? '提交报价需求' : 'Submit Quote Request';

// Footer bio & global texts
  const footerBios = document.querySelectorAll('.footer-brand-bio');
  footerBios.forEach(bio => {
    if (lang === 'zh') {
      bio.innerHTML = '<strong>南驰能源（NACCI Energy）</strong>是一家专注于车规级磷酸铁锂（LiFePO4）动力电池与新能源储能系统的国家高新技术企业。致力于推动全球零碳转型，产品已远销全球15+国家与地区，累计交付并网超 1.5 GWh。';
    } else {
      bio.innerHTML = '<strong>NACCI Energy</strong> is an innovative Tier-1 high-tech manufacturer specializing in automotive-grade Lithium Iron Phosphate (LiFePO4) power and energy storage systems. Dedicated to driving global decarbonization with over 1.5 GWh in cumulative international deployment across 15+ countries.';
    }
  });

  const footerNewsTitles = document.querySelectorAll('.footer-newsletter-title');
  footerNewsTitles.forEach(t => {
    t.textContent = lang === 'zh' ? '订阅电池工程技术白皮书与价格行情' : 'Subscribe to Battery Engineering & Price Bulletins';
  });


  // Re-render dynamic components
  const activeTab = document.querySelector('.cat-tab-btn.active');
  const cat = activeTab ? activeTab.getAttribute('data-cat') : 'all';
  renderProductsCatalog(cat);
  renderArticles();
  updateCalculatorResults();
}

// ==========================================================================
// 5. HERO CINEMATIC SLIDER (Green Living ESS & Norvik Powerhouse Architecture)
// ==========================================================================
let currentHeroSlideIndex = 0;
let heroSliderTimer = null;
const HERO_SLIDE_DURATION = 7500;

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-carousel-slide');
  const pills = document.querySelectorAll('.hero-slider-pill');
  if (!slides.length || slides.length <= 1) return;

  function setSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove('active');
        void slide.offsetWidth; // Force DOM reflow to re-trigger cinematic entrance animations
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
    pills.forEach((pill, i) => {
      pill.classList.toggle('active', i === index);
      const fill = pill.querySelector('.pill-bar-fill');
      if (fill) {
        fill.style.transition = 'none';
        fill.style.height = '0%';
      }
    });

    currentHeroSlideIndex = index;
    animateProgressBar(index);
  }

  function animateProgressBar(index) {
    const activePill = pills[index];
    if (!activePill) return;
    const fill = activePill.querySelector('.pill-bar-fill');
    if (!fill) return;

    requestAnimationFrame(() => {
      fill.style.transition = `height ${HERO_SLIDE_DURATION}ms linear`;
      fill.style.height = '100%';
    });
  }

  window.switchHeroSlide = function(index) {
    if (index === currentHeroSlideIndex) return;
    setSlide(index);
    resetHeroTimer();
  };

  window.nextHeroSlide = function() {
    const nextIdx = (currentHeroSlideIndex + 1) % slides.length;
    setSlide(nextIdx);
    resetHeroTimer();
  };

  window.prevHeroSlide = function() {
    const prevIdx = (currentHeroSlideIndex - 1 + slides.length) % slides.length;
    setSlide(prevIdx);
    resetHeroTimer();
  };

  function startHeroTimer() {
    stopHeroTimer();
    heroSliderTimer = setInterval(() => {
      const nextIdx = (currentHeroSlideIndex + 1) % slides.length;
      setSlide(nextIdx);
    }, HERO_SLIDE_DURATION);
  }

  function stopHeroTimer() {
    if (heroSliderTimer) {
      clearInterval(heroSliderTimer);
      heroSliderTimer = null;
    }
  }

  function resetHeroTimer() {
    stopHeroTimer();
    startHeroTimer();
  }

  // Initial state
  setSlide(0);
  startHeroTimer();

  // Pause on hover
  const heroSection = document.querySelector('.apple-hero');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopHeroTimer);
    heroSection.addEventListener('mouseleave', startHeroTimer);

    // Touch swipe gesture for hero on mobile
    let touchStartX = 0;
    let touchStartY = 0;
    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      stopHeroTimer();
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const dx = touchEndX - touchStartX;
      const dy = touchEndY - touchStartY;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) {
          window.nextHeroSlide();
        } else {
          window.prevHeroSlide();
        }
      }
      startHeroTimer();
    }, { passive: true });
  }
}

// ==========================================================================
// 6. PRODUCT CATALOG & MATRIX RENDER ENGINE
// ==========================================================================
let HOME_PRODUCTS_EXPANDED = false;

function initCategoryTabs() {
  const tabs = document.querySelectorAll('.cat-tab-btn');
  if (!tabs.length) return;

  // Auto-activate tab if ?cat= URL query parameter exists
  const urlParams = new URLSearchParams(window.location.search);
  const targetCat = urlParams.get('cat');
  if (targetCat) {
    tabs.forEach(t => {
      if (t.getAttribute('data-cat') === targetCat) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-cat') || 'all';
      // Reset homepage expand state back to 2 rows when changing category
      HOME_PRODUCTS_EXPANDED = false;
      renderProductsCatalog(cat);
    });
  });
}

function renderProductsCatalog(category = 'all', searchQuery = '') {
  const grid = document.getElementById('productsGrid');
  if (!grid || typeof NACCI_PRODUCTS === 'undefined') return;

  grid.innerHTML = '';
  const isZh = CURRENT_LANG === 'zh';

  // Identify whether we are on the dedicated products list page (products.html)
  const isProductsPage = window.location.pathname.includes('products.html') || 
                         document.querySelector('.page-content-wrapper .products-grid') !== null;

  const filtered = NACCI_PRODUCTS.filter(p => {
    const matchCat = (category === 'all') || (p.category === category);
    const matchQuery = !searchQuery || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.title_cn && p.title_cn.includes(searchQuery));
    return matchCat && matchQuery;
  });

  const expandWrap = document.getElementById('productsExpandWrap');

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-tertiary);">
        <p style="font-size: 18px; margin-bottom: 8px;">${isZh ? '未找到匹配的产品型号' : 'No matching product models found'}</p>
        <p style="font-size: 14px;">${isZh ? '请尝试搜索其他关键词或选择全部系列' : 'Try searching another keyword or select All Systems'}</p>
      </div>
    `;
    if (expandWrap) expandWrap.innerHTML = '';
    return;
  }

  // Display Slicing Rule:
  // 1. Products List Page (products.html): Always show ALL filtered products (No folding).
  // 2. Homepage (index.html):
  //    - Default: 2 rows (4 columns/row -> 8 cards)
  //    - Expanded: 4 rows (4 columns/row -> 16 cards)
  let displayItems = filtered;
  if (!isProductsPage) {
    const limit = HOME_PRODUCTS_EXPANDED ? 16 : 8;
    displayItems = filtered.slice(0, limit);
  }

  displayItems.forEach(p => {
    const card = document.createElement('div');
    card.className = 'apple-product-card';

    const title = isZh ? (p.title_cn || p.title) : p.title;
    const catName = isZh ? (p.category_name_cn || p.category_name) : p.category_name;
    const btnQuick = isZh ? '规格参数' : 'Quick Specs';
    const btnInq = isZh ? '询盘咨询' : 'Inquire';

    card.innerHTML = `
      <div class="product-card-top" onclick="window.location.href='products/${p.id}.html'" style="cursor: pointer;">
        <div class="product-badge-row">
          <span class="series-chip">${catName}</span>
          <span class="voltage-chip">${p.voltage}</span>
        </div>
        <div class="product-img-box">
          <img src="${p.image}" alt="${title}" onerror="this.src='${p.fallback_image}'" loading="lazy">
        </div>
      </div>
      <div class="product-card-body">
        <h3 class="product-card-title" title="${title}">
          <a href="products/${p.id}.html" style="color: inherit; text-decoration: none;">${title}</a>
        </h3>
        <div class="product-card-model">${p.model}</div>
        <div class="specs-mini-list">
          <div class="spec-mini-item">
            <span class="spec-mini-lbl">${isZh ? '标称容量' : 'Capacity'}</span>
            <span class="spec-mini-val">${p.capacity}</span>
          </div>
          <div class="spec-mini-item">
            <span class="spec-mini-lbl">${isZh ? '额定能量' : 'Energy'}</span>
            <span class="spec-mini-val">${p.energy}</span>
          </div>
          <div class="spec-mini-item">
            <span class="spec-mini-lbl">${isZh ? '循环寿命' : 'Cycle Life'}</span>
            <span class="spec-mini-val">${p.cycle_life.split('@')[0]}</span>
          </div>
        </div>
        <div class="card-action-bar">
          <a href="products/${p.id}.html" class="btn-card-quickview" style="text-decoration: none; display: flex; align-items: center; justify-content: center;">
            ${isZh ? '产品详情' : 'View Details'}
          </a>
          <button class="btn-card-inquire" onclick="openInquiryModal('${p.model}', '${title.replace(/'/g, "\\'")}')">${btnInq}</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Render expand / collapse controls on homepage if total exceeds 2 rows (8 items)
  if (!isProductsPage && expandWrap) {
    if (filtered.length > 8) {
      const btnText = HOME_PRODUCTS_EXPANDED
        ? (isZh ? '收起为两行' : 'Collapse to 2 Rows')
        : (isZh ? '展开更多产品 (显示前4行)' : 'Show More Products (4 Rows)');
      const btnClass = HOME_PRODUCTS_EXPANDED ? 'btn-expand-products expanded' : 'btn-expand-products';
      const targetQuery = category !== 'all' ? `?cat=${category}` : '';
      const exploreLinkText = isZh 
        ? `查看全部产品列表 (${filtered.length}款) &rarr;` 
        : `Explore Full Catalog (${filtered.length} SKUs) &rarr;`;

      expandWrap.innerHTML = `
        <button class="${btnClass}" id="btnToggleProducts">
          <span>${btnText}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <a href="products.html${targetQuery}" class="btn-view-all-products">
          <span>${exploreLinkText}</span>
        </a>
      `;

      const toggleBtn = document.getElementById('btnToggleProducts');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          HOME_PRODUCTS_EXPANDED = !HOME_PRODUCTS_EXPANDED;
          renderProductsCatalog(category, searchQuery);
          if (!HOME_PRODUCTS_EXPANDED) {
            const section = document.getElementById('products');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      }
    } else {
      const targetQuery = category !== 'all' ? `?cat=${category}` : '';
      expandWrap.innerHTML = `
        <a href="products.html${targetQuery}" class="btn-view-all-products">
          <span>${isZh ? '前往完整产品列表页 &rarr;' : 'Explore Full Catalog &rarr;'}</span>
        </a>
      `;
    }
  } else if (expandWrap) {
    expandWrap.innerHTML = '';
  }
}

// ==========================================================================
// 7. PRODUCT QUICK-VIEW MODAL
// ==========================================================================
window.openProductQuickView = function(productId) {
  const p = NACCI_PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const isZh = CURRENT_LANG === 'zh';
  const title = isZh ? (p.title_cn || p.title) : p.title;
  const catName = isZh ? (p.category_name_cn || p.category_name) : p.category_name;
  const features = isZh ? (p.features_cn || p.features) : p.features;

  let specsHtml = '';
  if (p.specs) {
    for (const [key, val] of Object.entries(p.specs)) {
      specsHtml += `<tr><td>${key}</td><td>${val}</td></tr>`;
    }
  }

  let featListHtml = '';
  if (features) {
    features.forEach(f => {
      featListHtml += `<li style="margin-bottom: 6px;">• ${f}</li>`;
    });
  }

  const modalBody = document.getElementById('productModalBody');
  modalBody.innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-product-img">
        <img src="${p.image}" alt="${title}" onerror="this.src='${p.fallback_image}'">
        <div style="margin-top: 14px; font-size: 12px; color: var(--apple-blue); font-weight: 600;">
          Grade-A LiFePO4 Prismatic Cells
        </div>
      </div>
      <div>
        <span class="series-chip" style="margin-bottom: 8px; display: inline-block;">${catName}</span>
        <h2 style="font-size: 22px; color: var(--text-primary); margin-bottom: 4px; line-height: 1.3;">${title}</h2>
        <div style="font-family: var(--font-mono); color: var(--apple-blue); font-size: 14px; margin-bottom: 16px;">
          Model: ${p.model}
        </div>
        
        <h4 style="font-size: 13px; text-transform: uppercase; color: var(--text-tertiary); letter-spacing: 0.05em; margin-bottom: 8px;">
          ${isZh ? '主要技术参数' : 'Key Technical Specifications'}
        </h4>
        <table class="modal-specs-table">
          <tbody>
            ${specsHtml}
          </tbody>
        </table>

        <h4 style="font-size: 13px; text-transform: uppercase; color: var(--text-tertiary); letter-spacing: 0.05em; margin-bottom: 8px;">
          ${isZh ? '核心亮点与防护机制' : 'Key Engineering Highlights'}
        </h4>
        <ul style="font-size: 13px; color: var(--text-secondary); list-style: none; padding-left: 0; margin-bottom: 24px;">
          ${featListHtml}
        </ul>

        <div style="display: flex; gap: 12px;">
          <button class="btn-apple-primary" style="flex: 1;" onclick="openInquiryModal('${p.model}', '${title.replace(/'/g, "\\'")}')">
            ${isZh ? '立即询盘此产品 / 获取报价' : 'Request Quotation for This Model'}
          </button>
        </div>
      </div>
    </div>
  `;

  openModal('productModal');
};

// ==========================================================================
// 8. INTERACTIVE ENERGY SIZING & ROI CALCULATOR
// ==========================================================================
function initCalculator() {
  const appSelect = document.getElementById('calcAppSelect');
  const demandRange = document.getElementById('calcDemandRange');
  const demandVal = document.getElementById('calcDemandVal');

  if (appSelect) {
    appSelect.addEventListener('change', updateCalculatorResults);
  }
  if (demandRange) {
    demandRange.addEventListener('input', (e) => {
      if (demandVal) demandVal.textContent = e.target.value + ' kWh';
      updateCalculatorResults();
    });
  }

  updateCalculatorResults();
}

function updateCalculatorResults() {
  const appSelect = document.getElementById('calcAppSelect');
  const demandRange = document.getElementById('calcDemandRange');
  if (!appSelect || !demandRange) return;

  const app = appSelect.value;
  const kwh = parseInt(demandRange.value, 10);
  const isZh = CURRENT_LANG === 'zh';

  let recModel = '';
  let recDesc = '';
  let savingPercent = '70%';
  let weightSaving = '65%';
  let cycleTimes = '10x';

  if (app === 'residential') {
    if (kwh <= 7) {
      recModel = isZh ? 'RPES-WM5 壁挂储能魔方 (5.12kWh)' : 'RPES-WM5 Wall-Mounted Cube (5.12kWh)';
      recDesc = isZh ? '超薄挂墙不占空间，纯静音无风扇散热' : 'Ultra-slim wall mount with zero-noise natural convection';
    } else if (kwh <= 15) {
      recModel = isZh ? 'RPES-W3 滚轮式移动储能 (10.24kWh / 14.3kWh)' : 'RPES-W3 Wheel-Mounted Storage (10.24kWh / 14.3kWh)';
      recDesc = isZh ? '重载工业滚轮，大容量整屋备电' : 'Heavy-duty casters for flexible whole-home emergency backup';
    } else {
      recModel = isZh ? 'RPES-HVSM1 高压乐高堆叠系统 (20kWh - 30kWh)' : 'RPES-HVSM1 High-Voltage Stackable System (20kWh - 30kWh)';
      recDesc = isZh ? '500V高压直流母线，综合光伏自发自用率>97%' : '500V High voltage bus for peak solar utilization >97%';
    }
  } else if (app === 'commercial') {
    if (kwh <= 60) {
      recModel = isZh ? 'RPCI-HVC1 一体化工商业机柜 (30kW / 50kWh)' : 'RPCI-HVC1 Integrated C&I Cabinet (30kW / 50kWh)';
      recDesc = isZh ? '交钥匙IP54户外柜，内置空调与自动灭火' : 'Turnkey IP54 outdoor cabinet with integrated HVAC & fire suppression';
    } else {
      recModel = isZh ? 'RPCI-HVC7 大型工商业旗舰 (50kW / 100kWh - 215kWh)' : 'RPCI-HVC7 Mega Industrial System (50kW / 100kWh - 215kWh)';
      recDesc = isZh ? '支持多柜并联拓展至2MWh+，削峰填谷套利神器' : 'Scalable to 2MWh+ clustering for maximum demand charge arbitrage';
    }
    savingPercent = '68%';
    weightSaving = '70%';
    cycleTimes = '12x';
  } else if (app === 'agv') {
    recModel = isZh ? 'RPPB-APM1 / APM2 工业AGV专用动力包 (24V/48V/80V)' : 'RPPB-APM1/APM2 Heavy AGV Motive Pack (24V/48V/80V)';
    recDesc = isZh ? '支持1C-2C午休极速快充，抗震IP67密封' : 'Supports 1C-2C opportunity fast charging & IP67 vibration proof';
    savingPercent = '75%';
    weightSaving = '70%';
    cycleTimes = '8x';
  } else {
    // telecom / ups
    recModel = isZh ? 'RPTB-HM1 机架式基站备电 / RP-UPS-WG 高倍率UPS' : 'RPTB-HM1 19-inch Telecom Rack / RP-UPS-WG High-Rate UPS';
    recDesc = isZh ? '标准19英寸3U外形，释放机房60%宝贵占地' : 'Standard 19-inch 3U rack-mount form factor saving 60% server room floor';
    savingPercent = '65%';
    weightSaving = '68%';
    cycleTimes = '10x';
  }

  const recModelEl = document.getElementById('calcRecModel');
  const recDescEl = document.getElementById('calcRecDesc');
  const statSavingEl = document.getElementById('calcStatSaving');
  const statWeightEl = document.getElementById('calcStatWeight');
  const statCyclesEl = document.getElementById('calcStatCycles');

  if (recModelEl) recModelEl.textContent = recModel;
  if (recDescEl) recDescEl.textContent = recDesc;
  if (statSavingEl) statSavingEl.textContent = savingPercent;
  if (statWeightEl) statWeightEl.textContent = weightSaving;
  if (statCyclesEl) statCyclesEl.textContent = cycleTimes;
}

window.configureCalculatedSpec = function() {
  const recModel = document.getElementById('calcRecModel').textContent;
  const kwh = document.getElementById('calcDemandRange').value;
  const app = document.getElementById('calcAppSelect').value;
  openInquiryModal(recModel, `${app.toUpperCase()} Storage Project (${kwh} kWh Target)`);
};

// ==========================================================================
// 9. ARTICLES & KNOWLEDGE BASE READER (Featured Big Card + Right 2x2 Grid)
// ==========================================================================
function renderArticles() {
  const container = document.getElementById('articlesGrid');
  if (container) {
    container.innerHTML = '';
    const isZh = CURRENT_LANG === 'zh';

    if (ARTICLES_DATA && ARTICLES_DATA.length > 0) {
      // 1. Featured Big Lead Card (First Article)
      const featured = ARTICLES_DATA[0];
      const fTitle = isZh ? (featured.title_cn || featured.title) : featured.title;
      const fSummary = isZh ? (featured.summary_cn || featured.summary) : featured.summary;
      const fReadBtn = isZh ? '深度阅读指南' : 'Read Full In-Depth Guide';

      const bigCard = document.createElement('div');
      bigCard.className = 'article-featured-card';
      bigCard.onclick = () => {
        if (featured.slug) {
          window.location.href = `articles/${featured.slug}.html`;
        } else {
          openArticleReader(featured.id);
        }
      };

      bigCard.innerHTML = `
        <div class="article-featured-badge">
          <span>★ ${isZh ? '重磅推荐指南' : 'Featured Guide'}</span>
        </div>
        <div class="article-featured-content">
          <div class="article-meta">
            <span class="article-cat-tag">${isZh ? (featured.category_cn || featured.category) : featured.category}</span>
            <span>${featured.date}</span>
          </div>
          <h3 class="article-title">${fTitle}</h3>
          <p class="article-summary">${fSummary}</p>
          <div class="article-read-link">
            <span>${fReadBtn}</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
      `;
      container.appendChild(bigCard);

      // 2. Right Sub-Grid (Remaining 4 Articles in 2x2)
      const rightGrid = document.createElement('div');
      rightGrid.className = 'articles-subgrid';

      const remaining = ARTICLES_DATA.slice(1, 5);
      remaining.forEach(art => {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.onclick = () => {
          if (art.slug) {
            window.location.href = `articles/${art.slug}.html`;
          } else {
            openArticleReader(art.id);
          }
        };

        const title = isZh ? (art.title_cn || art.title) : art.title;
        const summary = isZh ? (art.summary_cn || art.summary) : art.summary;
        const cat = isZh ? (art.category_cn || art.category) : art.category;
        const readBtn = isZh ? '阅读完整指南' : 'Read Guide';

        card.innerHTML = `
          <div class="article-meta">
            <span class="article-cat-tag">${cat}</span>
            <span>${art.date}</span>
          </div>
          <h3 class="article-title">${title}</h3>
          <p class="article-summary">${summary}</p>
          <div class="article-read-link">
            <span>${readBtn}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        `;
        rightGrid.appendChild(card);
      });

      container.appendChild(rightGrid);
    }
  }

  // 3. If on insights.html, render the full 33-article directory in #articlesContainer
  initFullBlogDirectory();
}

let activeBlogCategory = 'all';
let activeBlogSearch = '';

function initFullBlogDirectory() {
  const container = document.getElementById('articlesContainer');
  if (!container) return;

  const list = window.NACCI_ARTICLES || [];
  if (list.length === 0) return;

  renderBlogCards(list);
}

function renderBlogCards(articles) {
  const container = document.getElementById('articlesContainer');
  const emptyMsg = document.getElementById('noArticlesMsg');
  if (!container) return;

  container.innerHTML = '';

  const filtered = articles.filter(art => {
    const matchCat = (activeBlogCategory === 'all') || (art.category && art.category.toLowerCase().includes(activeBlogCategory.toLowerCase()));
    const q = activeBlogSearch.toLowerCase().trim();
    const matchSearch = !q || art.title.toLowerCase().includes(q) || (art.meta_desc && art.meta_desc.toLowerCase().includes(q)) || (art.tags && art.tags.some(t => t.toLowerCase().includes(q)));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    if (emptyMsg) emptyMsg.style.display = 'block';
    return;
  }
  if (emptyMsg) emptyMsg.style.display = 'none';

  filtered.forEach(art => {
    const card = document.createElement('a');
    card.href = `articles/${art.slug}.html`;
    card.className = 'article-card';
    card.style.cssText = 'text-decoration: none; color: inherit; display: flex; flex-direction: column; overflow: hidden; padding: 0; border-radius: var(--radius-xl);';

    const featImg = art.feat_img || 'assets/images/hero-banner1.webp';

    card.innerHTML = `
      <div style="width: 100%; height: 210px; overflow: hidden; position: relative; background: #0f172a;">
        <img src="${featImg}" alt="${art.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
        <span style="position: absolute; top: 14px; left: 14px; background: rgba(255,255,255,0.92); backdrop-filter: blur(10px); color: var(--apple-blue); font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: var(--radius-full); box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-transform: uppercase;">
          ${art.category}
        </span>
      </div>
      <div style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
        <div class="article-meta" style="margin-bottom: 8px;">
          <span>📅 ${art.date}</span>
          <span class="meta-dot"></span>
          <span>⏱️ ${art.read_time || '5 min read'}</span>
        </div>
        <h3 class="article-title" style="font-size: 17px; margin-bottom: 10px; -webkit-line-clamp: 2;">${art.title}</h3>
        <p class="article-summary" style="font-size: 13px; line-height: 1.55; margin-bottom: 18px; color: #475569; -webkit-line-clamp: 3;">${art.meta_desc}</p>
        <div class="article-read-link" style="margin-top: auto; font-weight: 700; color: var(--apple-blue); display: inline-flex; align-items: center; gap: 6px;">
          <span>Read Full Article</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    `;

    // Add image scale effect on hover
    card.addEventListener('mouseenter', () => {
      const img = card.querySelector('img');
      if (img) img.style.transform = 'scale(1.06)';
    });
    card.addEventListener('mouseleave', () => {
      const img = card.querySelector('img');
      if (img) img.style.transform = 'scale(1)';
    });

    container.appendChild(card);
  });
}

window.filterArticlesByCategory = function(category, btnElement) {
  activeBlogCategory = category;
  if (btnElement) {
    const parent = btnElement.parentElement;
    if (parent) {
      parent.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btnElement.classList.add('active');
    }
  }
  renderBlogCards(window.NACCI_ARTICLES || []);
};

window.filterArticlesBySearch = function(query) {
  activeBlogSearch = query;
  renderBlogCards(window.NACCI_ARTICLES || []);
};

window.openArticleReader = function(articleId) {
  const art = ARTICLES_DATA.find(a => a.id === articleId);
  if (!art) return;

  const isZh = CURRENT_LANG === 'zh';
  const title = isZh ? (art.title_cn || art.title) : art.title;
  const content = isZh ? (art.content_cn || art.content) : art.content;

  const modalBody = document.getElementById('articleModalBody');
  modalBody.innerHTML = `
    <div class="reader-container">
      <div class="reader-header">
        <div class="reader-meta" style="margin-bottom: 6px;">${art.category} • ${art.date} • NACCI Energy Engineering Team</div>
        <h1 class="reader-title">${title}</h1>
      </div>
      <div class="reader-body">
        ${content}
      </div>
      <div style="margin-top: 36px; padding-top: 20px; border-top: 1px solid var(--border-glass); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 13px; color: var(--text-tertiary);">${isZh ? '南驰电池技术智库' : 'NACCI Battery Engineering Repository'}</span>
        <button class="btn-apple-primary" onclick="openInquiryModal('Consultation from ' + '${art.id}', '${title.replace(/'/g, "\\'")}')">
          ${isZh ? '针对本文议题咨询工程师' : 'Consult an Engineer on This Topic'}
        </button>
      </div>
    </div>
  `;

  openModal('articleModal');
};

// ==========================================================================
// 10. SEARCH PALETTE (CMD+K / Instant Search)
// ==========================================================================
function initSearchPalette() {
  const trigger = document.getElementById('searchTriggerBtn');
  const input = document.getElementById('paletteSearchInput');

  if (trigger) {
    trigger.addEventListener('click', () => {
      openModal('searchModal');
      setTimeout(() => { if (input) input.focus(); }, 100);
    });
  }

  // Keyboard shortcut Cmd+K or /
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openModal('searchModal');
      setTimeout(() => { if (input) input.focus(); }, 100);
    }
  });

  if (input) {
    input.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }
}

function performSearch(query) {
  const resultsContainer = document.getElementById('searchResultsList');
  if (!resultsContainer) return;

  if (!query || query.trim().length === 0) {
    resultsContainer.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-tertiary); font-size: 13px;">${CURRENT_LANG === 'zh' ? '输入产品型号、电压或应用场景关键词...' : 'Type model name, voltage, or application...'}</div>`;
    return;
  }

  const q = query.toLowerCase();
  const isZh = CURRENT_LANG === 'zh';

  const matches = NACCI_PRODUCTS.filter(p => {
    return p.title.toLowerCase().includes(q) ||
           p.model.toLowerCase().includes(q) ||
           p.voltage.toLowerCase().includes(q) ||
           (p.title_cn && p.title_cn.toLowerCase().includes(q));
  });

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-tertiary); font-size: 13px;">${isZh ? '未找到相关结果' : 'No matching results'}</div>`;
    return;
  }

  resultsContainer.innerHTML = '';
  matches.forEach(m => {
    const item = document.createElement('div');
    item.className = 'search-res-item';
    const title = isZh ? (m.title_cn || m.title) : m.title;
    item.innerHTML = `
      <div>
        <div class="search-res-title">${title}</div>
        <div style="font-size: 12px; color: var(--text-tertiary); font-family: var(--font-mono);">${m.model} • ${m.voltage} • ${m.capacity}</div>
      </div>
      <span class="search-res-cat">${m.category_name}</span>
    `;
    item.onclick = () => {
      closeAllModals();
      openProductQuickView(m.id);
    };
    resultsContainer.appendChild(item);
  });
}

// ==========================================================================
// 11. FAQ ACCORDION LOGIC
// ==========================================================================
function initFaqAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      const isOpen = parent.classList.contains('open');

      // Close all other items in this accordion
      const container = parent.parentElement;
      container.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('open');
      });

      if (!isOpen) {
        parent.classList.add('open');
      }
    });
  });
}

// ==========================================================================
// 12. INQUIRY & CONTACT FORM DISPATCHER
// ==========================================================================
window.openInquiryModal = function(model = '', contextTitle = '') {
  const modal = document.getElementById('inquiryModal');
  const modelField = document.getElementById('inquiryModelField');
  const msgField = document.getElementById('inquiryMsgField');

  if (modelField) {
    if (model) {
      modelField.value = contextTitle ? `${model} (${contextTitle})` : model;
    } else {
      modelField.value = CURRENT_LANG === 'zh' ? '全系产品定制 / 工程采购询价' : 'General Battery Pack / Project Inquiry';
    }
  }
  if (msgField) {
    if (!msgField.value || msgField.value.includes('您好') || msgField.value.includes('Hello')) {
      if (model) {
        msgField.value = CURRENT_LANG === 'zh'
          ? `您好，我们对 ${model} 非常感兴趣，请提供规格书、详细报价及交付周期。`
          : `Hello, we are interested in ${model} (${contextTitle}). Please provide detailed technical datasheet, quotation, and delivery lead time.`;
      } else {
        msgField.value = CURRENT_LANG === 'zh'
          ? '您好，我们有新能源电池定制/采购项目需求，请安排工程师对接提供技术选型及批量报价。'
          : 'Hello, we have a battery pack customization / project procurement requirement. Please have an engineer contact us with datasheets and pricing.';
      }
    }
  }

  openModal('inquiryModal');
};

function initContactForm() {
  const form = document.getElementById('rfqForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('rfqName').value;
    const email = document.getElementById('rfqEmail').value;
    const phone = document.getElementById('rfqPhone').value;
    const product = document.getElementById('rfqProduct').value;
    const message = document.getElementById('rfqMessage').value;

    const subject = encodeURIComponent(`Inquiry from NACCI Website: ${product} - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone/WhatsApp: ${phone}\n` +
      `Interested Product: ${product}\n\n` +
      `Project Details / Requirements:\n${message}\n\n` +
      `-- Sent via NACCI Energy Portal`
    );

    // Provide immediate user feedback
    const isZh = CURRENT_LANG === 'zh';
    alert(isZh 
      ? `感谢您的询盘，${name}！您的技术需求已记录，我们将立即启动邮件客户端发送至 nacci@naccisz.com。工程师团队将在24小时内与您对接。`
      : `Thank you, ${name}! Your request has been recorded. Launching email client to nacci@naccisz.com. Our engineering team will contact you within 24 hours.`
    );

    // Open email client
    window.location.href = `mailto:nacci@naccisz.com?subject=${subject}&body=${body}`;
  });

  const modalForm = document.getElementById('modalRfqForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isZh = CURRENT_LANG === 'zh';
      alert(isZh 
        ? "询盘已成功提交！南驰客户经理将尽快与您联系。" 
        : "Inquiry successfully submitted! A NACCI account manager will follow up promptly."
      );
      closeAllModals();
    });
  }
}

// ==========================================================================
// 13. MODAL CONTROLS & ESCAPE DISMISSAL
// ==========================================================================
function initModals() {
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

function openModal(modalId) {
  closeAllModals();
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
}

// ==========================================================================
// 14. SCROLL NAVIGATION & STICKY HEADER
// ==========================================================================
function initScrollNav() {
  const header = document.querySelector('.apple-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu drawer
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
    });
  }
}
