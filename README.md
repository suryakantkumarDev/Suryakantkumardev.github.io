# Suryakant Kumar — Portfolio

A client-focused portfolio for full-stack development, SaaS products, AI integrations, and mobile work. Built with HTML, CSS, and JavaScript; no build step, framework, analytics, or third-party runtime dependencies.

## Preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. GitHub Pages can serve this repository directly; publishing depends on the repository’s configured Pages source. This review does not publish changes.

## Files

- `index.html`: content, project summaries, services, experience, contact brief, and SEO metadata.
- `css/style.css`: responsive visual design, hover states, print styles, and reduced-motion support.
- `js/main.js`: mobile navigation, email-draft builder, clipboard controls, and progressive motion.
- `assets/`: existing portrait and downloadable résumé.
- `PORTFOLIO_REVIEW.md`: findings, rationale, validation, and remaining evidence to gather.

## Contact flow

The project form prepares a `mailto:` draft. It does **not** submit to a backend or send email. Visitors review their draft, open an email app, or copy the brief into another email service. Form contents remain on the page and are not stored. Changes to the input invalidate the previous draft. Email and WhatsApp links work directly.

Without JavaScript, the navigation, project details, FAQ, and direct contact links remain usable; the draft builder is hidden.

## Motion

Entrances use the native Web Animations API and IntersectionObserver. Scroll progress updates through requestAnimationFrame. Portrait tilt runs only for desktop pointers. The voice illustration animates briefly while visible. Content stays visible if animation is unsupported. Reduced-motion preferences disable movement, including when the preference changes during a visit.

## Content maintenance

Project descriptions and employment dates are based on the supplied `resume.tex`. Enterprise brands are identified as deployments through Winit, not direct freelance endorsements. Illustrations are labelled as diagrams, not product screenshots. Add testimonials, measurable outcomes, prices, or availability claims only after verifying them.

The downloadable PDF is the existing file. Check that it matches your latest résumé before sharing the portfolio.

## Upwork enquiries

The Upwork links use the replacement profile URL supplied by Suryakant. The project form supports an Upwork brief: it does not request an email address and prepares text to copy before opening the profile. Nothing is posted automatically. Visiting `?via=upwork` selects this mode. Project anchors (`#saas-project`, `#mobile-project`, `#voice-project`) also select the relevant service on page load.

`UPWORK_STARTER_KIT.md` contains draft profile copy, a proposal template, and links to relevant projects. Publish the website changes before sharing those public links.
