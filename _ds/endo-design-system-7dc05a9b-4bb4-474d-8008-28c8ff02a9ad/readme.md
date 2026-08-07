# endo — Desenvolvimento Humano · Design System

> Toda transformação começa por dentro.

endo is a human and organizational development consultancy founded by **Fabiana Domingues**, an organizational psychologist with 20+ years working with people, senior leaders, HR teams and organizations. The brand accompanies people and companies through growth, transition, change and reinvention — at the intersection of human development, organizational culture and business.

endo does not sell formulas. It creates the conditions for people and organizations to recognise what is already true, understand what needs to change, and build sustainable movement.

## Sources this system was built from

| Source | What was taken from it |
| --- | --- |
| `uploads/Apresentacao_ENDO_compressed.pdf` — *Branding & Identidade Visual, ENDO, 2026*, by **Eco Criativo** (brandmkt studio, Brasil / Portugal / Itália), 36 pages | Positioning, naming rationale, the five concepts, colour palette (p.19), logo anatomy (p.18), applications (p.28–31), social structure (p.32–35) |
| `uploads/Assets_Marca-*.svg / .png`, `ENDO_BRAND-*.png` | Every logo lockup, the ensō "O" mark, the five concept badges, the handwritten signature — copied into `assets/` |
| `uploads/*.ttf / *.otf` | BioRhyme (5 weights), Autography, Helvetica family — copied into `assets/fonts/` |

No codebase, Figma file or website was supplied. There is therefore **no product UI** in this system: the surfaces recreated are the ones the brand actually has — social, printed and correspondence applications, and the presentation deck.

## Índice

- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`
- `assets/` — `logos/`, `marks/`, `icons/` (the five concept badges), `fonts/`
- `components/` — `brand/`, `core/`, `forms/`, `content/` (see below)
- `guidelines/` — the foundation specimen cards shown in the Design System tab
- `slides/` — seven 1280×720 slide layouts taken from the brand presentation
- `ui_kits/social/` — Instagram profile, highlights, feed and stories
- `ui_kits/brand-applications/` — business cards, e-mail signature, service cards, Travessia à Origem
- `SKILL.md` — Agent Skills entry point

### Components

**brand/** — `Logo`, `ConceptIcon`, `EnsoField`, `Signature`
**core/** — `Button`, `Card`, `Tag`, `SectionLabel`, `Statement`, `Quote`
**forms/** — `Input`, `Select`, `Checkbox`
**content/** — `ServiceCard`, `ConceptRow`, `PairList`

Each folder holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML.

**Intentional additions.** The source is a brand book, not a component library, so the primitives above were authored from the brand's own patterns. `Statement`, `PairList`, `ConceptRow`, `ServiceCard`, `SectionLabel`, `EnsoField` and `Signature` are direct transcriptions of layouts in the presentation. `Button`, `Input`, `Select`, `Checkbox`, `Card`, `Tag` and `Quote` are the minimum interface set needed to build a site or form in the brand — they have no counterpart in the source and should be reviewed by the brand owner.

---

## CONTENT FUNDAMENTALS

**The brand name.** Always **endo**, lowercase, even at the start of a sentence — "a endo não nasce de uma oportunidade de mercado". Uppercase ENDO appears only when the deck is presenting the naming concept itself. Full signature: *endo — Desenvolvimento Humano*.

**Language.** Brazilian Portuguese, first. Translate only when the audience requires it; keep the Japanese concept names (Sunao, Makoto, Nagare, Ikigai, Ensō) untranslated and add the one-line meaning.

**Person.** Speaks as *nós*/impersonal about the work, and directly as *você* to the reader — "Você não escolheu esse nome. Você o reencontrou." Fabiana is named in the first person only where she is personally present (bio, mentoring, Travessia).

**The turn.** The signature move of the voice: a light line that states the ordinary reading, then a bold line that turns it.
- "A endo não nasce de uma oportunidade de mercado. **Nasce de um reencontro.**"
- "Nada disso foi criado. **Tudo isso foi reconhecido.**"
- "As marcas mais verdadeiras não são inventadas. **São reveladas.**"

**Sentence shape.** Short. Often a fragment. One idea per line, with line breaks used as pauses — the deck breaks lines by meaning, not by measure. Paragraphs rarely exceed three sentences.

**Two truths at once.** Whenever the brand describes itself it names a pair, never a single adjective: *Humano & estratégico · Profundo & acessível · Sereno & forte · Orgânico & contemporâneo · Sensível & profissional · Individual & organizacional · Origem & movimento*.

**Para quem.** Every offer is described by who it is for, not by what it delivers: "Para líderes que querem conduzir com mais consciência."

**Casing.** Sentence case everywhere, including buttons and section labels. Uppercase only for the tiny 12px eyebrow token and for the occasional display moment in the deck ("APLICAÇÕES"). Section labels are prefixed with a mid dot: "· Conceito criativo".

**CTAs are invitations.** "Agendar uma conversa", "Conhecer a Jornada", "Vamos conversar". Never "Comece agora", "Garanta sua vaga", "Destrave seu potencial".

**Never write.** Transformação instantânea · destrave seu potencial · alta performance a qualquer custo · torne-se uma nova versão de você · fórmulas · "o segredo de" · countdown urgency · exclamation marks in body copy · emoji. **Emoji are not part of this brand — anywhere.**

**Punctuation.** No exclamation marks. Quotation marks are the typographic pair “ ”. The em dash is used sparingly; the brand prefers a full stop and a new line.

---

## VISUAL FOUNDATIONS

**Colour.** Three families, named in the brand book: **Consciência** (navy `#102945`, blue `#3C537C`), **Humanidade** (rose `#A27173`, wine `#8E5F63`), **Direção** (coral `#F58B6C`, peach `#F9C3A3`). Neutrals are warm: paper `#ECEBE3`, cream `#EAE3D1`, off-white `#FFFDED`. **Never pure white as a page background** and never a saturated technological blue. One dominant field colour per composition; the accent occupies less than 10% of the surface.

**Type.** Three families, three jobs.
- `--font-sans` **Helvetica** does almost everything: Light 300 for statements and headings, Regular 400 for body, Bold 700 for the turn. Headings are *light*, not bold — weight is used for emphasis inside a thought, not to announce hierarchy.
- `--font-display` **BioRhyme** (slab serif) is reserved for the "Desenvolvimento Humano" descriptor and rare brand moments.
- `--font-script` **Autography** sets the signature phrase only. Once per surface, at the end. Minimum 28px.
Body copy runs 15–17px at 1.72 line-height, capped at 58ch. Statements are 28–62px at 1.2–1.28, capped at ~34ch.

**Layout.** Editorial and asymmetric, never modular. Big margins (`--page-margin` up to 120px), sections breathing 96–160px apart. Content aligns to a soft left column with a wide empty right side; the wordmark parks top-right on deck slides and stays there. Two-column splits are 1.1 : 1, not 50/50, and are separated by a hairline rule rather than a gap alone.

**Backgrounds.** Flat colour fields — no gradients as decoration. The one permitted "image" is the **ensō**: oversized, cropped by an edge, at 10–25% opacity on deep fields or 45–75% on cream. Printed pieces show a subtle paper grain; on screen that is approximated by the warm paper colour, not by a noise overlay. Photography is warm, low-contrast, interior, natural light — Fabiana at work, studios, architecture. Text over photography always sits on a darkened half, never on the image itself.

**The ensō rule.** One per composition. Cropped or oversized. Never a small, complete, centred circle used as a bullet or a decorative ring — that reads as generic wellness and is the fastest way to break this brand.

**Corners.** Nothing is sharp. Cards 20px, chips and buttons fully rounded (`--radius-pill`), business cards ~26px, large panels 24–32px. Concept badges are perfect circles.

**Shadows.** Warm, wide, very low contrast — `0 10px 30px -18px rgba(16,41,69,.28)`. Objects rest on paper; they never float. No inner shadows except the 1px cream hairline (`--shadow-inset-soft`) used to separate a cream card from a cream page. Borders are hairlines at 10–16% opacity, never a coloured left-border accent.

**Cards.** Rounded 20px, 32px padding, one surface colour, optional hairline border, `--shadow-card`. They lift 2px and deepen to `--shadow-raised` on hover — the only movement a card makes.

**States.** Hover darkens a filled action one step (`--action-primary-hover`) or lays a 7% blue wash under an outline/ghost. Press scales to 0.985 and does not change colour. Disabled drops to 42% opacity, no greying. Focus is a 2px `--focus-ring` outline at 3px offset. No underlines on hover; links change colour blue → wine.

**Motion.** Everything opens from a centre and expands — scale-and-fade from 0.2 with `--ease-enter`, 900ms for a brand reveal, 280ms for interface, 160ms for hover. Nothing bounces, nothing slides in from off-screen, nothing overshoots. The ensō may draw itself once on a page load; it never loops.

**Transparency and blur.** Used almost never. Overlays on photography are a solid `--veil-deep` gradient, not a blur. Cream at 8–14% opacity is the only tint used on navy fields (form wells, tags).

---

## ICONOGRAPHY

The brand has exactly **one icon set: the five concept badges** — circular, hand-drawn, supplied as SVG and PNG in `assets/icons/` (`concept-sunao`, `concept-makoto`, `concept-nagare`, `concept-ikigai`, `concept-enso`). Each is a filled circle with a single brushed gesture inside, and each maps to one território and one frente de trabalho:

| Badge | Conceito | Frente |
| --- | --- | --- |
| Sunao (rose) | Abrir e escutar antes de mudar | Desenvolvimento Organizacional |
| Makoto (blue) | A verdade que só aparece na permanência | Programa de Liderança |
| Nagare (off-white) | O tempo certo de esperar e mover | Consultoria para Profissionais de RH |
| Ikigai (peach) | A direção que devolve sentido ao movimento | Mentorias e Coaching |
| Ensō (navy) | Reencontrar o centro para seguir em movimento | Jornada à Origem |

They are brand marks, not UI icons: never recoloured, never outlined, never used as a bullet or a button glyph.

**There is no interface icon set in the source.** For UI affordances (chevrons, close, arrow) the deck uses plain typographic glyphs and thin CSS-drawn chevrons — that is what the components do here (`Select`'s chevron is a rotated border, `Checkbox`'s tick is two borders). If a real icon set is ever needed, use **Lucide** at 1.5px stroke and round caps from CDN, and flag it: it is a substitution, not brand-approved. Unicode marks in use: the mid dot `·` before section labels, the single guillemet `›` closing the Instagram bio, typographic quotes “ ”. **No emoji, ever.**

---

## Font substitutions

**One, forced.** The supplied **Helvetica Light** file (`uploads/helvetica-light-587ebe5a59211.ttf`) does not load in any browser — the sfnt structure is valid and the file is served correctly, but every font sanitiser rejects it (`document.fonts` reports `status: "error"` for weight 300; re-encoding it without the `kern`/`post`/`gasp` tables did not help). Because `--weight-light: 300` carries the brand's entire quiet voice — every heading, every `Statement`, every slide — the 300 `@font-face` now resolves through `local("Helvetica Neue Light")`. On macOS that is the real Light face; everywhere else weight 300 falls back to Helvetica Regular. Nothing is faux-bolded and nothing errors, but **outside macOS the light voice currently renders one step too heavy.** Please re-export a working Helvetica Light (WOFF2 preferred).

Every other font is a supplied file, used as delivered. Note that the *wordmark itself* is custom lettering delivered as artwork — it is never re-typeset in BioRhyme, Autography or Helvetica. Always place `assets/logos/*`.

## Known gaps — please send

1. **Photography.** No brand images were supplied. Slides and social tiles that call for a photo are left as flat fields with a note.
2. **Paper texture.** The printed pieces show a fine grain; no texture file was provided.
3. **Website.** No site exists in the source, so no marketing-site UI kit was built. Say the word and one can be designed on these foundations.
4. **A working Helvetica Light file** (WOFF2 or a clean TTF) — the supplied one is unreadable by browsers; see "Font substitutions" above.
5. **Helvetica licensing.** The supplied Helvetica files are used as delivered; confirm the licence covers web embedding before shipping.
