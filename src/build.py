"""Prerender site/index.html into static, SEO-ready pages: dist/index.html (HU, default) and dist/en/index.html."""
import json, shutil, pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "site" / "index.html"
DIST = ROOT / "dist"
BASE = "https://spicecube.hu"

META = {
 "hu": {"path": "/", "title": "SpiceCube | Indiai és pakisztáni halal étterem, Budapest VII.",
        "desc": "Halal indiai és pakisztáni étterem a Rózsa utcában: butter chicken, biryani, smash burger, deep-pan pizza és peri peri csirke. 4,9 csillag a Google-on, 756 értékelés.",
        "locale": "hu_HU"},
 "en": {"path": "/en/", "title": "SpiceCube | Halal Indian & Pakistani Restaurant in Budapest",
        "desc": "Halal Indian and Pakistani restaurant in Budapest District VII: butter chicken, biryani, smash burgers, deep-pan pizza and peri peri chicken. Rated 4.9 on Google from 756 reviews.",
        "locale": "en_GB"},
}

def head_extra(lang):
    m = META[lang]
    return f"""
<meta name="description" content="{m['desc']}">
<link rel="canonical" href="{BASE}{m['path']}">
<link rel="alternate" hreflang="hu" href="{BASE}/">
<link rel="alternate" hreflang="en" href="{BASE}/en/">
<link rel="alternate" hreflang="x-default" href="{BASE}/">
<meta property="og:type" content="restaurant">
<meta property="og:site_name" content="SpiceCube">
<meta property="og:title" content="{m['title']}">
<meta property="og:description" content="{m['desc']}">
<meta property="og:url" content="{BASE}{m['path']}">
<meta property="og:image" content="{BASE}/img/og.jpg">
<meta property="og:locale" content="{m['locale']}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0A0A0A">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" as="image" href="/img/burger-check.webp">
"""

JS_STRIP = r"""
(lang) => {
  setLang(lang);
  const other = lang === 'hu' ? 'en' : 'hu';
  document.querySelectorAll(`[lang="${other}"]`).forEach(e => { if (e !== document.documentElement) e.remove(); });
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.documentElement.dataset.fixed = lang;
  document.querySelector('meta[name="claude:viewport-fit-sides"]')?.remove();
  document.querySelector('meta[name="description"]')?.remove();
  // Menu schema from the live data
  const name = it => lang === 'hu' ? it.hu : it.en;
  const desc = it => lang === 'hu' ? it.dhu : it.den;
  const offer = p => ({"@type":"Offer","price":String(p),"priceCurrency":"HUF"});
  const menu = {"@context":"https://schema.org","@type":"Menu","name":"SpiceCube","inLanguage":lang,
    "hasMenuSection": MENU.map(c => ({"@type":"MenuSection","name": lang==='hu'?c.hu:c.en,
      "hasMenuItem": c.items.map(it => ({"@type":"MenuItem","name":name(it),"description":desc(it),
         "offers": Array.isArray(it.p) ? it.p.map(offer) : offer(it.p),
         ...((it.t||[]).includes('veg') ? {"suitableForDiet":"https://schema.org/VegetarianDiet"} : {})}))}))};
  const faq = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": FAQ.map(f => ({"@type":"Question","name": lang==='hu'?f[1]:f[0],
      "acceptedAnswer":{"@type":"Answer","text": lang==='hu'?f[3]:f[2]}}))};
  for (const obj of [menu, faq]) { const s=document.createElement('script'); s.type='application/ld+json'; s.textContent=JSON.stringify(obj); document.body.appendChild(s); }
  return document.documentElement.outerHTML;
}
"""

def build():
    if DIST.exists(): shutil.rmtree(DIST)
    (DIST / "en").mkdir(parents=True)
    shutil.copytree(ROOT / "site" / "img", DIST / "img")
    with sync_playwright() as pw:
        b = pw.chromium.launch()
        for lang in ("hu", "en"):
            p = b.new_page()
            p.route("**/fonts.g*/**", lambda r: r.abort())
            p.goto(SRC.as_uri(), wait_until="domcontentloaded"); p.wait_for_timeout(600)
            html = p.evaluate(JS_STRIP, lang)
            html = html.replace('src="img/', 'src="/img/').replace('`<img src="img/', '`<img src="/img/').replace('src="img/${', 'src="/img/${')
            html = html.replace("<title>SpiceCube Budapest</title>", f"<title>{META[lang]['title']}</title>{head_extra(lang)}", 1)
            out = DIST / ("index.html" if lang == "hu" else "en/index.html")
            out.write_text("<!doctype html>\n" + html, encoding="utf-8")
            print(lang, len(html))
        b.close()
    (DIST / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {BASE}/sitemap.xml\n")
    (DIST / "sitemap.xml").write_text(f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url><loc>{BASE}/</loc><xhtml:link rel="alternate" hreflang="hu" href="{BASE}/"/><xhtml:link rel="alternate" hreflang="en" href="{BASE}/en/"/><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>{BASE}/en/</loc><xhtml:link rel="alternate" hreflang="hu" href="{BASE}/"/><xhtml:link rel="alternate" hreflang="en" href="{BASE}/en/"/><changefreq>weekly</changefreq><priority>0.9</priority></url>
</urlset>
""")
    (DIST / "favicon.svg").write_text('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#0A0A0A"/><rect x="7" y="7" width="18" height="18" rx="4" fill="#fff"/><rect x="12" y="12" width="8" height="8" rx="1.5" fill="#0A0A0A"/></svg>')
    (DIST / "_headers").write_text("/img/*\n  Cache-Control: public, max-age=31536000, immutable\n/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n")
    from PIL import Image
    Image.open(ROOT / "graded" / "burger-platter.jpg").convert("RGB").resize((1200, 1600)).crop((0, 400, 1200, 1030)).save(DIST / "img" / "og.jpg", quality=85)

if __name__ == "__main__":
    build()
