import os
import re

with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# Extract Common Head
head_match = re.search(r'(<!DOCTYPE html>.*?<link rel="stylesheet" href="assets/css/apple-style\.css">\s*</head>)', index_html, re.DOTALL)
common_head_template = head_match.group(1)

# Extract Header & Nav
header_match = re.search(r'(<header class="apple-header">.*?</header>)', index_html, re.DOTALL)
header_html = header_match.group(1)

# Extract Mobile Drawer
drawer_match = re.search(r'(<div class="mobile-drawer" id="mobileDrawer">.*?</div>\s*</div>)', index_html, re.DOTALL)
drawer_html = drawer_match.group(1)

# Extract Footer
footer_match = re.search(r'(<footer class="apple-footer">.*?</footer>)', index_html, re.DOTALL)
footer_html = footer_match.group(1)

# Extract Modals and Scripts
modals_match = re.search(r'(<!-- ==========================================================================\s*MODALS:.*?</html>)', index_html, re.DOTALL)
modals_html = modals_match.group(1)

def build_page(page_id, title, page_hero_tag, page_hero_title, page_hero_desc, content_body):
    # Customize Head Title
    page_head = common_head_template.replace(
        '<title>NACCI Energy — LiFePO4 Battery Supplier & ODM/OEM Leader</title>',
        f'<title>{title} — NACCI Energy</title>'
    )
    
    # Set active nav link
    page_header = header_html
    # replace active in nav
    page_header = re.sub(r'class="nav-link active"', 'class="nav-link"', page_header)
    page_header = page_header.replace(f'href="{page_id}.html" class="nav-link"', f'href="{page_id}.html" class="nav-link active"')
    
    # Sub-header strip with breadcrumb
    breadcrumb_strip = f'''
  <div class="sub-header-strip">
    <div class="sub-header-inner">
      <div class="page-breadcrumb">
        <a href="index.html">Home</a>
        <span>/</span>
        <span style="color: var(--text-primary); font-weight: 600;">{title}</span>
      </div>
      <div style="font-size: 11px; color: var(--text-tertiary); display: flex; gap: 16px;">
        <span>Direct Email: <strong>nacci@naccisz.com</strong></span>
        <span>Lead Time: <strong>30 Days Mass Production</strong></span>
      </div>
    </div>
  </div>
'''

    hero_html = f'''
  <div class="page-hero">
    <div class="page-hero-inner">
      <span class="section-tag">{page_hero_tag}</span>
      <h1 class="page-hero-title">{page_hero_title}</h1>
      <p class="page-hero-desc">{page_hero_desc}</p>
    </div>
  </div>
'''

    full_page = f'''{page_head}
<body>
{page_header}
{drawer_html}
{breadcrumb_strip}
{hero_html}
{content_body}
{footer_html}
{modals_html}
'''
    with open(f'{page_id}.html', 'w', encoding='utf-8') as out:
        out.write(full_page)
    print(f'Successfully generated {page_id}.html')

print("Generator script template ready.")
