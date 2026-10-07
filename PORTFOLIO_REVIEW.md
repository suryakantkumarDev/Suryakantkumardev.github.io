# Portfolio review — 7 October 2026

## Assessment

The original local page made it hard for a potential client to judge fit and credibility. This is an assessment of the portfolio, not a proven explanation for a lack of enquiries: no visitor analytics, Upwork proposal history, or conversion data was available.

| Finding | Change |
| --- | --- |
| Four hero actions, a talking avatar, and a long catalogue competed for attention. | One main enquiry action, a work link, and a clear sequence: work → services → process → background → contact. |
| Broad claims such as “zero post-release defects,” fixed 2–4 week delivery, and precise project performance numbers lacked supporting evidence in the supplied material. | Removed universal guarantees, automatic quotes, and unsupported metrics. Scope and pricing are discussed after requirements. |
| Named testimonials and verified badges had no review URLs or source records. | Removed them from the page. Kept a direct Upwork profile link without rating claims. |
| Enterprise brands appeared to be direct clients or endorsements. | Described them as deployments delivered through employment at Winit. |
| Project details were mostly behind modal interactions. | Visible problem/contribution summaries, with native expandable engineering details. |
| An animated avatar was presented as an AI guide although the logic used scripted responses. | Replaced it with a real portrait and project-specific workflow illustrations. |
| The form showed “Sending message” but only launched a mail client. | Explicit email-draft preparation, review, copy fallback, and no false success notification. |
| Employment structured data referenced Atomstate, while the résumé describes a later Winit role. | Removed stale employer metadata and used the résumé’s dated experience on the page. |
| Large styles, scripts, and third-party font/icon dependencies added complexity. | Small static implementation with system fonts and native browser features. |

The design uses warm neutral backgrounds, dark green typography, a restrained lime accent, a real portrait, and a consistent editorial hierarchy. Motion adds emphasis through staggered entrances, scroll reveals, restrained portrait interaction, and project hover states. No sound, autoplay media, or motion is required to use the site.

## Basis for content and design

- The supplied `resume.tex` is the source for roles, technologies, and project responsibilities. Those statements have not been independently verified.
- Existing contact/profile links and the résumé PDF were retained.
- No client quotes, sales figures, results, or screenshots were invented. Project visuals explicitly identify themselves as illustrations or system overviews.
- Credibility guidance informed the emphasis on specific information and transparent contact actions: [Nielsen Norman Group — Trustworthiness in Web Design](https://www.nngroup.com/articles/trustworthy-design/).

## Verification

- Browser layouts checked at 1440, 1024, 768, 760, 390, and 320 CSS pixels; no horizontal overflow after the mobile headline fix.
- Mobile navigation, Escape handling, service preselection, native project details, anchors, and résumé download checked.
- Email drafting checked for URL encoding, safe rendering of user text, correct recipient, clipboard copying, and stale-draft invalidation.
- JavaScript-disabled navigation and contact fallback checked.
- Reduced-motion behavior and desktop pointer interaction checked.
- Automated axe-core checks against WCAG 2 A/AA and WCAG 2.1 AA rules found zero violations at desktop and mobile widths after correcting diagram-label contrast. Automated checks do not replace a full manual accessibility audit.
- Public portfolio and AI product URLs returned HTTP 200 during verification; this checks availability, not all product behavior.
- No external publication or enquiry messages were sent.

## Next evidence to add

1. Permission-approved product screenshots or a short walkthrough of the AI website product. Real product evidence is stronger than a diagram.
2. Two or three attributable client reviews with source links and permission to quote.
3. One measured outcome for each project, including what was measured and the baseline. Avoid numbers that cannot be demonstrated.
4. Confirm that the existing PDF, current employment, project URL, and Upwork profile are up to date.
5. Track which relevant proposals bring portfolio visits and qualified conversations before judging conversion. A redesign can improve the presentation; it cannot establish demand or guarantee clients.

For Upwork outreach, link the project that matches the client’s problem and explain your relevant contribution. Keep the proposal specific to the job rather than relying on animations to make the case.
