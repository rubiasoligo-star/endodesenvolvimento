/* @ds-bundle: {"format":4,"namespace":"EndoDesignSystem_7dc05a","components":[{"name":"CONCEPTS","sourcePath":"components/brand/ConceptIcon.jsx"},{"name":"ConceptIcon","sourcePath":"components/brand/ConceptIcon.jsx"},{"name":"EnsoField","sourcePath":"components/brand/EnsoField.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Signature","sourcePath":"components/brand/Signature.jsx"},{"name":"ConceptRow","sourcePath":"components/content/ConceptRow.jsx"},{"name":"PairList","sourcePath":"components/content/PairList.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Quote","sourcePath":"components/core/Quote.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Statement","sourcePath":"components/core/Statement.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/brand/ConceptIcon.jsx":"4a52b1d9b8ef","components/brand/EnsoField.jsx":"3f92f0b4a623","components/brand/Logo.jsx":"64fc0e13808e","components/brand/Signature.jsx":"314b92da75d5","components/content/ConceptRow.jsx":"6df466cc01ec","components/content/PairList.jsx":"d98387f94325","components/content/ServiceCard.jsx":"2370d51e080d","components/core/Button.jsx":"00a4615bbee0","components/core/Card.jsx":"62cf1aeb0fa4","components/core/Quote.jsx":"e26bec1fa75c","components/core/SectionLabel.jsx":"aabc7a9f3791","components/core/Statement.jsx":"025d460e96a2","components/core/Tag.jsx":"0ded4a064f67","components/forms/Checkbox.jsx":"750fbc5da211","components/forms/Input.jsx":"cc8333a8a065","components/forms/Select.jsx":"58ea5056a6ca","ui_kits/brand-applications/Applications.jsx":"af1803c2c1ac","ui_kits/social/InstagramProfile.jsx":"b44331dc1077","ui_kits/social/StoryDeck.jsx":"e3511cdf1cd7"},"inlinedExternals":[],"unexposedExports":[{"name":"assetBase","sourcePath":"components/brand/Logo.jsx"}]} */

(() => {

const __ds_ns = (window.EndoDesignSystem_7dc05a = window.EndoDesignSystem_7dc05a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  'horizontal|blue': 'logos/endo-horizontal-blue.png',
  'horizontal|cream': 'logos/endo-horizontal-cream.png',
  'stacked|blue': 'logos/endo-stacked-blue.png',
  'stacked|cream': 'logos/endo-stacked-cream.png',
  'signature|cream': 'logos/signature-cream.png',
  'signature|blue': 'logos/signature-cream.png'
};
function assetBase(override) {
  if (override) return override.replace(/\/$/, '');
  if (typeof window !== 'undefined' && window.__endoAssetBase) return window.__endoAssetBase.replace(/\/$/, '');
  return 'assets';
}

/** The endo wordmark. Never re-typeset it — always the supplied artwork. */
function Logo({
  variant = 'horizontal',
  tone = 'blue',
  height = 40,
  assetBase: base,
  style,
  ...rest
}) {
  const key = FILES[variant + '|' + tone] || FILES['horizontal|blue'];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetBase(base) + '/' + key,
    alt: "endo \u2014 Desenvolvimento Humano",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { assetBase, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/ConceptIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CONCEPTS = {
  sunao: {
    label: 'Sunao',
    meaning: 'Abrir e escutar antes de mudar.'
  },
  makoto: {
    label: 'Makoto',
    meaning: 'A verdade que só aparece na permanência.'
  },
  nagare: {
    label: 'Nagare',
    meaning: 'O tempo certo de esperar e mover.'
  },
  ikigai: {
    label: 'Ikigai',
    meaning: 'A direção que devolve sentido ao movimento.'
  },
  enso: {
    label: 'Ensō',
    meaning: 'Reencontrar o centro para seguir em movimento.'
  }
};

/** One of the five conceptual territories, as the supplied circular badge artwork. */
function ConceptIcon({
  concept = 'enso',
  size = 56,
  assetBase: base,
  style,
  ...rest
}) {
  const c = CONCEPTS[concept] ? concept : 'enso';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: __ds_scope.assetBase(base) + '/icons/concept-' + c + '.png',
    alt: CONCEPTS[c].label,
    title: CONCEPTS[c].meaning,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'block',
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { CONCEPTS, ConceptIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ConceptIcon.jsx", error: String((e && e.message) || e) }); }

// components/brand/EnsoField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The open ensō "O" used as a background gesture: cropped, oversized, low contrast. */
function EnsoField({
  size = 520,
  opacity = 0.5,
  position = 'right',
  crop = true,
  assetBase: base,
  children,
  style,
  ...rest
}) {
  const pos = {
    right: {
      right: crop ? -size * 0.22 : 32,
      top: '50%',
      transform: 'translateY(-50%)'
    },
    left: {
      left: crop ? -size * 0.22 : 32,
      top: '50%',
      transform: 'translateY(-50%)'
    },
    center: {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)'
    },
    bottom: {
      left: '50%',
      bottom: crop ? -size * 0.35 : 24,
      transform: 'translateX(-50%)'
    }
  }[position];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.assetBase(base) + '/marks/enso-o-cream.png',
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      width: size,
      height: 'auto',
      opacity,
      pointerEvents: 'none',
      ...pos
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { EnsoField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/EnsoField.jsx", error: String((e && e.message) || e) }); }

// components/brand/Signature.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The brand phrase set in the Autography script. Closing moments only. */
function Signature({
  children = 'Toda transformação começa por dentro',
  size = 40,
  tone = 'cream',
  style,
  ...rest
}) {
  const color = {
    cream: 'var(--endo-cream-300)',
    blue: 'var(--endo-blue-500)',
    navy: 'var(--endo-navy-800)',
    rose: 'var(--endo-rose-500)'
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: size,
      lineHeight: 1.35,
      color,
      display: 'inline-block',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Signature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Signature.jsx", error: String((e && e.message) || e) }); }

// components/content/ConceptRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The five territories as a calm list — badge, name, one line. */
function ConceptRow({
  concept = 'enso',
  name,
  meaning,
  tone = 'light',
  size = 44,
  style,
  ...rest
}) {
  const c = __ds_scope.CONCEPTS[concept] || __ds_scope.CONCEPTS.enso;
  const onDeep = tone === 'deep';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-24)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ConceptIcon, {
    concept: concept,
    size: size
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 96,
      fontSize: 'var(--text-body-md)',
      fontWeight: 'var(--weight-bold)',
      color: onDeep ? 'var(--endo-cream-300)' : 'var(--text-strong)'
    }
  }, name || c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-md)',
      color: onDeep ? 'var(--text-on-deep-muted)' : 'var(--text-body)'
    }
  }, meaning || c.meaning));
}
Object.assign(__ds_scope, { ConceptRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ConceptRow.jsx", error: String((e && e.message) || e) }); }

// components/content/PairList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The "Humano & estratégico" tension list — right-aligned italic, ampersand, roman. */
function PairList({
  pairs = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      columnGap: 'var(--space-16)',
      rowGap: 'var(--space-12)',
      justifyContent: 'start',
      ...style
    }
  }, rest), pairs.map(([a, b], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontStyle: 'italic',
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-strong)'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--endo-rose-400)',
      fontSize: 'var(--text-body-lg)'
    }
  }, "&"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-strong)'
    }
  }, b))));
}
Object.assign(__ds_scope, { PairList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PairList.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  cream: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    title: 'var(--text-strong)'
  },
  paper: {
    background: 'var(--endo-cream-300)',
    color: 'var(--text-body)',
    title: 'var(--text-strong)'
  },
  navy: {
    background: 'var(--surface-deep)',
    color: 'var(--text-on-deep-muted)',
    title: 'var(--endo-cream-300)'
  },
  blue: {
    background: 'var(--surface-blue)',
    color: 'rgba(234,227,209,.8)',
    title: 'var(--endo-cream-300)'
  },
  rose: {
    background: 'var(--surface-rose)',
    color: 'rgba(255,253,237,.85)',
    title: 'var(--endo-cream-100)'
  }
};

/** One of endo's five frentes: concept badge, title, who it is for. */
function ServiceCard({
  concept = 'enso',
  kicker,
  title,
  description,
  surface = 'cream',
  footer,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SURFACES[surface];
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)',
      padding: 32,
      borderRadius: 'var(--radius-card)',
      background: s.background,
      color: s.color,
      boxShadow: hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-calm), transform var(--dur-base) var(--ease-calm)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ConceptIcon, {
    concept: concept,
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, kicker ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label)',
      letterSpacing: '.10em',
      textTransform: 'uppercase',
      opacity: .7
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-h3)',
      lineHeight: 'var(--leading-snug)',
      color: s.title
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-md)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, description)), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-8)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '9px 18px',
    fontSize: 'var(--text-body-sm)'
  },
  md: {
    padding: '13px 26px',
    fontSize: 'var(--text-body-md)'
  },
  lg: {
    padding: '17px 34px',
    fontSize: 'var(--text-body-lg)'
  }
};
const TONES = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--endo-cream-100)',
    border: '1px solid transparent'
  },
  accent: {
    background: 'var(--action-accent)',
    color: 'var(--endo-cream-100)',
    border: '1px solid transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-brand)',
    border: '1px solid var(--endo-blue-500)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-brand)',
    border: '1px solid transparent'
  },
  onDeep: {
    background: 'var(--endo-cream-300)',
    color: 'var(--endo-navy-800)',
    border: '1px solid transparent'
  }
};
const HOVER = {
  primary: {
    background: 'var(--action-primary-hover)'
  },
  accent: {
    background: 'var(--action-accent-hover)'
  },
  outline: {
    background: 'rgba(60,83,124,.07)'
  },
  ghost: {
    background: 'rgba(60,83,124,.07)'
  },
  onDeep: {
    background: 'var(--endo-cream-100)'
  }
};

/** endo's calm pill button. No shouting verbs, no shadows on press — it settles. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  full = false,
  iconLeft,
  iconRight,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: full ? 'flex' : 'inline-flex',
      width: full ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-8)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.42 : 1,
      transition: 'background var(--dur-fast) var(--ease-calm), transform var(--dur-fast) var(--ease-calm), color var(--dur-fast) var(--ease-calm)',
      transform: press && !disabled ? 'scale(.985)' : 'scale(1)',
      ...SIZES[size],
      ...TONES[variant],
      ...(hover && !disabled ? HOVER[variant] : null),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  cream: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)'
  },
  paper: {
    background: 'var(--endo-cream-300)',
    color: 'var(--text-body)'
  },
  navy: {
    background: 'var(--surface-deep)',
    color: 'var(--text-on-deep)'
  },
  blue: {
    background: 'var(--surface-blue)',
    color: 'var(--endo-cream-300)'
  },
  rose: {
    background: 'var(--surface-rose)',
    color: 'var(--endo-cream-100)'
  },
  peach: {
    background: 'var(--surface-peach)',
    color: 'var(--endo-navy-800)'
  }
};

/** Soft, roomy container. Rounded 20px, warm low shadow, generous padding. */
function Card({
  surface = 'cream',
  padding = 32,
  bordered = false,
  elevation = 'card',
  children,
  style,
  ...rest
}) {
  const shadow = {
    none: 'none',
    rest: 'var(--shadow-rest)',
    card: 'var(--shadow-card)',
    raised: 'var(--shadow-raised)'
  }[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: shadow,
      border: bordered ? '1px solid var(--border-cream)' : '1px solid transparent',
      ...SURFACES[surface],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pull quote with the brand's oversized quotation marks. */
function Quote({
  children,
  attribution,
  tone = 'cream',
  size = 28,
  style,
  ...rest
}) {
  const color = {
    cream: 'var(--endo-cream-300)',
    strong: 'var(--text-strong)',
    blue: 'var(--text-brand)',
    rose: 'var(--endo-rose-400)'
  }[tone];
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: size,
      lineHeight: 'var(--leading-snug)',
      textWrap: 'pretty'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .55,
      marginRight: 6
    }
  }, "\u201C"), children, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .55,
      marginLeft: 4
    }
  }, "\u201D")), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-16)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-regular)',
      opacity: .75
    }
  }, attribution) : null);
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The small rose eyebrow that opens every section, prefixed with the brand's mid dot. */
function SectionLabel({
  children,
  tone = 'accent',
  style,
  ...rest
}) {
  const color = {
    accent: 'var(--text-accent)',
    coral: 'var(--endo-coral-500)',
    cream: 'var(--endo-cream-300)',
    blue: 'var(--endo-blue-500)'
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-label)',
      letterSpacing: '.10em',
      color,
      ...style
    }
  }, rest), "\xB7 ", children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Statement.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A large, light-weight statement line — the brand's main voice on any surface. */
function Statement({
  children,
  emphasis,
  size = 'md',
  tone = 'strong',
  align = 'left',
  style,
  ...rest
}) {
  const fs = {
    sm: 'var(--text-h1)',
    md: 'var(--text-statement)',
    lg: 'var(--text-display-2)'
  }[size];
  const color = {
    strong: 'var(--text-strong)',
    cream: 'var(--endo-cream-300)',
    blue: 'var(--text-brand)',
    rose: 'var(--text-accent)'
  }[tone];
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: fs,
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-display)',
      color,
      textAlign: align,
      maxWidth: 'var(--measure-narrow)',
      textWrap: 'pretty',
      margin: 0,
      ...style
    }
  }, rest), children, emphasis ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 'var(--weight-bold)'
    }
  }, emphasis)) : null);
}
Object.assign(__ds_scope, { Statement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Statement.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'rgba(60,83,124,.08)',
    color: 'var(--endo-blue-500)'
  },
  rose: {
    background: 'var(--endo-rose-200)',
    color: 'var(--endo-wine-700)'
  },
  peach: {
    background: 'var(--endo-peach-200)',
    color: 'var(--endo-wine-700)'
  },
  onDeep: {
    background: 'rgba(234,227,209,.14)',
    color: 'var(--endo-cream-300)'
  }
};

/** Small, quiet metadata pill. */
function Tag({
  children,
  tone = 'neutral',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 1.2,
      ...TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with a soft square and the brand blue check. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  tone = 'light',
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const onDeep = tone === 'deep';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-12)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      background: on ? 'var(--endo-blue-500)' : onDeep ? 'rgba(234,227,209,.08)' : 'var(--endo-cream-100)',
      border: '1px solid ' + (on ? 'var(--endo-blue-500)' : onDeep ? 'var(--border-on-deep)' : 'var(--border-cream)'),
      display: 'grid',
      placeItems: 'center',
      transition: 'background var(--dur-fast) var(--ease-calm)'
    }
  }, on ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 5,
      borderLeft: '2px solid var(--endo-cream-100)',
      borderBottom: '2px solid var(--endo-cream-100)',
      transform: 'rotate(-45deg) translate(1px,-1px)'
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-md)',
      lineHeight: 1.45,
      color: onDeep ? 'var(--endo-cream-300)' : 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text field: cream well, hairline underline focus, no hard box. */
function Input({
  label,
  hint,
  error,
  type = 'text',
  multiline = false,
  rows = 4,
  tone = 'light',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const onDeep = tone === 'deep';
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '14px 18px',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-body-md)',
    color: onDeep ? 'var(--endo-cream-300)' : 'var(--text-strong)',
    background: onDeep ? 'rgba(234,227,209,.08)' : 'var(--endo-cream-100)',
    border: '1px solid ' + (error ? 'var(--endo-wine-600)' : focus ? 'var(--endo-blue-500)' : onDeep ? 'var(--border-on-deep)' : 'var(--border-cream)'),
    borderRadius: multiline ? 'var(--radius-md)' : 'var(--radius-pill)',
    outline: 'none',
    resize: multiline ? 'vertical' : undefined,
    transition: 'border-color var(--dur-fast) var(--ease-calm), background var(--dur-fast) var(--ease-calm)'
  };
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 'var(--space-8)',
      fontSize: 'var(--text-body-sm)',
      color: onDeep ? 'var(--text-on-deep-muted)' : 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }, rest)), hint && !error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, hint) : null, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--endo-wine-600)'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select styled as a pill well with a hairline chevron. */
function Select({
  label,
  options = [],
  tone = 'light',
  style,
  ...rest
}) {
  const onDeep = tone === 'deep';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 'var(--space-8)',
      fontSize: 'var(--text-body-sm)',
      color: onDeep ? 'var(--text-on-deep-muted)' : 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      width: '100%',
      appearance: 'none',
      boxSizing: 'border-box',
      padding: '14px 44px 14px 18px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-md)',
      color: onDeep ? 'var(--endo-cream-300)' : 'var(--text-strong)',
      background: onDeep ? 'rgba(234,227,209,.08)' : 'var(--endo-cream-100)',
      border: '1px solid ' + (onDeep ? 'var(--border-on-deep)' : 'var(--border-cream)'),
      borderRadius: 'var(--radius-pill)',
      outline: 'none',
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 20,
      top: '50%',
      width: 8,
      height: 8,
      marginTop: -6,
      borderRight: '1.5px solid ' + (onDeep ? 'var(--endo-cream-300)' : 'var(--endo-blue-500)'),
      borderBottom: '1.5px solid ' + (onDeep ? 'var(--endo-cream-300)' : 'var(--endo-blue-500)'),
      transform: 'rotate(45deg)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-applications/Applications.jsx
try { (() => {
const AB = '../../assets';
function BusinessCards() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      height: 190,
      borderRadius: 26,
      background: 'var(--endo-navy-800)',
      display: 'grid',
      placeItems: 'center',
      boxShadow: 'var(--shadow-deep)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AB + '/logos/endo-stacked-cream.png',
    style: {
      width: 96
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      height: 190,
      borderRadius: 26,
      background: 'var(--endo-cream-300)',
      padding: 26,
      boxSizing: 'border-box',
      boxShadow: 'var(--shadow-deep)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AB + '/marks/enso-o-cream.png',
    style: {
      position: 'absolute',
      right: -46,
      bottom: -40,
      width: 180,
      opacity: .9,
      filter: 'brightness(.93)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--endo-rose-500)'
    }
  }, "Fabiana Domingues"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-body)',
      marginTop: 2
    }
  }, "Psic\xF3loga Organizacional"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      fontSize: 11,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "+55 (11) 90000 0000", /*#__PURE__*/React.createElement("br", null), "fabiana@endodh.com.br")), /*#__PURE__*/React.createElement("img", {
    src: AB + '/logos/endo-horizontal-blue.png',
    style: {
      position: 'absolute',
      right: 24,
      top: 22,
      width: 62
    }
  })));
}
function EmailSignature() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--endo-white)',
      border: '1px solid var(--border-soft)',
      borderRadius: 14,
      overflow: 'hidden',
      maxWidth: 560,
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F2F2F0',
      padding: '8px 14px',
      fontSize: 11.5,
      color: 'var(--text-muted)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Nova mensagem"), /*#__PURE__*/React.createElement("span", null, "\u2014 \u2922 \u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      fontSize: 12,
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, "Para"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      fontSize: 12,
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, "Assunto"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      position: 'relative',
      background: 'var(--endo-cream-100)',
      minHeight: 130
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: 200,
      background: 'var(--endo-cream-300)',
      borderTopLeftRadius: 140,
      borderBottomLeftRadius: 80,
      opacity: .8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--endo-rose-500)'
    }
  }, "Fabiana Domingues"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-body)'
    }
  }, "Psic\xF3loga Organizacional"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 10.5,
      lineHeight: 1.7,
      color: 'var(--text-muted)'
    }
  }, "+55 (11) 90000 0000", /*#__PURE__*/React.createElement("br", null), "fabiana@endodh.com.br")), /*#__PURE__*/React.createElement("img", {
    src: AB + '/logos/endo-stacked-blue.png',
    style: {
      width: 74,
      marginRight: 26
    }
  }))));
}
const FRENTES = [{
  c: 'sunao',
  k: 'Projeto de desenvolvimento',
  t: 'Organizacional',
  bg: 'var(--endo-rose-500)',
  fg: 'var(--endo-cream-100)',
  d: 'Para organizações que desejam evoluir por dentro.'
}, {
  c: 'nagare',
  k: 'Consultoria Interna',
  t: 'Estratégica',
  bg: 'var(--endo-cream-100)',
  fg: 'var(--endo-navy-800)',
  d: 'Para profissionais de RH que buscam fortalecer sua atuação estratégica.'
}, {
  c: 'ikigai',
  k: 'Mentoria',
  t: 'Individual',
  bg: 'var(--endo-blue-500)',
  fg: 'var(--endo-cream-100)',
  d: 'Para pessoas em momentos de escolha, mudança ou desenvolvimento.'
}, {
  c: 'makoto',
  k: 'Programa de',
  t: 'Liderança',
  bg: 'var(--endo-cream-300)',
  fg: 'var(--endo-navy-800)',
  d: 'Para líderes que querem conduzir com mais consciência.'
}];
function ServiceDeck() {
  const [active, setActive] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--endo-navy-800)',
      borderRadius: 24,
      padding: 34,
      display: 'flex',
      gap: 18,
      flexWrap: 'wrap'
    }
  }, FRENTES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    onClick: () => setActive(i),
    style: {
      width: 232,
      borderRadius: 18,
      background: s.bg,
      color: s.fg,
      padding: 22,
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: active === i ? 'var(--shadow-deep)' : 'var(--shadow-card)',
      transform: active === i ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-calm), box-shadow var(--dur-base) var(--ease-calm)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AB + '/icons/concept-' + s.c + '.png',
    style: {
      position: 'absolute',
      right: -26,
      bottom: -26,
      width: 104,
      opacity: .35
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: AB + '/logos/endo-stacked-' + (s.fg.includes('cream') ? 'cream' : 'blue') + '.png',
    style: {
      position: 'absolute',
      right: 18,
      top: 16,
      width: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .85
    }
  }, s.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 1.15,
      marginTop: 2
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 11.5,
      lineHeight: 1.6,
      opacity: .88,
      maxWidth: '22ch'
    }
  }, s.d)))));
}
function TravessiaCard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--endo-rose-500)',
      borderRadius: 24,
      padding: '46px 40px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(255,253,237,.82)',
      fontSize: 12.5,
      lineHeight: 1.7,
      maxWidth: '62ch',
      margin: '0 auto 26px'
    }
  }, "Novo servi\xE7o de acompanhamento para quem quer dar continuidade na travessia atrav\xE9s de um olhar ainda mais voltado \xE0 Fabiana Psic\xF3loga."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      margin: '0 auto',
      background: 'var(--endo-cream-300)',
      borderRadius: 16,
      padding: 34,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-deep)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AB + '/marks/enso-o-cream.png',
    style: {
      position: 'absolute',
      right: 26,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 210,
      filter: 'brightness(1.06)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: AB + '/logos/endo-stacked-blue.png',
    style: {
      position: 'absolute',
      right: 26,
      top: 22,
      width: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: '46%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 300,
      color: 'var(--endo-blue-500)'
    }
  }, "Travessia \xE0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 700,
      color: 'var(--endo-navy-800)',
      lineHeight: 1.05
    }
  }, "Origem"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 11.5,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "\xC0s vezes, o pr\xF3ximo passo n\xE3o est\xE1 \xE0 frente. Est\xE1 no reencontro com aquilo que sempre esteve dentro de voc\xEA."))));
}
Object.assign(window, {
  BusinessCards,
  EmailSignature,
  ServiceDeck,
  TravessiaCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-applications/Applications.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/InstagramProfile.jsx
try { (() => {
const A = '../../assets';
const HIGHLIGHTS = [{
  label: 'Quem sou',
  icon: A + '/icons/concept-sunao.png'
}, {
  label: 'Minha história',
  icon: A + '/icons/concept-nagare.png'
}, {
  label: 'O que faço',
  icon: A + '/icons/concept-ikigai.png'
}, {
  label: 'Para quem',
  icon: A + '/icons/concept-makoto.png'
}, {
  label: 'Casos',
  icon: A + '/icons/concept-enso.png'
}, {
  label: 'Depoimentos',
  icon: A + '/icons/concept-sunao.png'
}];
const POSTS = [{
  id: 1,
  kind: 'signature',
  bg: 'var(--endo-blue-500)',
  caption: 'Toda transformação começa por dentro.'
}, {
  id: 2,
  kind: 'logo-cream',
  bg: 'var(--endo-cream-300)',
  caption: 'endo — Desenvolvimento Humano'
}, {
  id: 3,
  kind: 'statement',
  bg: 'var(--endo-peach-300)',
  title: 'A endo nasce de um reencontro.',
  caption: 'A origem do nome'
}, {
  id: 4,
  kind: 'enso',
  bg: 'var(--endo-cream-100)',
  caption: 'Reencontrar o centro para seguir em movimento.'
}, {
  id: 5,
  kind: 'statement',
  bg: 'var(--endo-rose-500)',
  title: 'Movimento sem direção é apenas agitação.',
  caption: 'Ikigai'
}, {
  id: 6,
  kind: 'logo-navy',
  bg: 'var(--endo-navy-800)',
  caption: 'Jornada à Origem'
}, {
  id: 7,
  kind: 'statement',
  bg: 'var(--endo-blue-500)',
  title: 'Consultoria Interna Estratégica',
  caption: 'Para profissionais de RH'
}, {
  id: 8,
  kind: 'concept',
  bg: 'var(--endo-cream-300)',
  caption: 'Cinco frentes. Um mesmo centro.'
}, {
  id: 9,
  kind: 'statement',
  bg: 'var(--endo-cream-100)',
  title: 'Programa de Liderança',
  caption: 'Para líderes que querem conduzir com mais consciência.'
}];
function PostArt({
  post
}) {
  const base = {
    position: 'absolute',
    inset: 0,
    display: 'grid',
    placeItems: 'center',
    background: post.bg,
    padding: '10%',
    boxSizing: 'border-box'
  };
  if (post.kind === 'signature') return /*#__PURE__*/React.createElement("div", {
    style: base
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/logos/signature-cream.png',
    style: {
      width: '80%'
    }
  }));
  if (post.kind === 'logo-cream') return /*#__PURE__*/React.createElement("div", {
    style: base
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/logos/endo-stacked-blue.png',
    style: {
      width: '58%'
    }
  }));
  if (post.kind === 'logo-navy') return /*#__PURE__*/React.createElement("div", {
    style: base
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/logos/endo-stacked-cream.png',
    style: {
      width: '58%'
    }
  }));
  if (post.kind === 'enso') return /*#__PURE__*/React.createElement("div", {
    style: base
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/marks/enso-o-cream.png',
    style: {
      width: '78%',
      filter: 'brightness(.95)'
    }
  }));
  if (post.kind === 'concept') return /*#__PURE__*/React.createElement("div", {
    style: {
      ...base,
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '8%',
      placeItems: 'center'
    }
  }, ['sunao', 'makoto', 'nagare', 'ikigai', 'enso'].map(c => /*#__PURE__*/React.createElement("img", {
    key: c,
    src: A + '/icons/concept-' + c + '.png',
    style: {
      width: '100%',
      borderRadius: '50%'
    }
  })));
  const dark = post.bg.includes('navy') || post.bg.includes('blue-500') || post.bg.includes('rose');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...base,
      placeItems: 'start',
      alignContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.28,
      color: dark ? 'var(--endo-cream-300)' : 'var(--endo-navy-800)'
    }
  }, post.title));
}
function Highlight({
  h
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      width: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 62,
      height: 62,
      borderRadius: '50%',
      padding: 2,
      border: '1px solid var(--border-cream)',
      margin: '0 auto',
      background: 'var(--endo-cream-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: h.icon,
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 11,
      color: 'var(--text-body)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, h.label));
}
function InstagramProfile({
  onOpen
}) {
  const [tab, setTab] = React.useState('grid');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--endo-white)',
      borderRadius: 28,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-raised)',
      width: 390
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 18px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "endodesenvolvimento"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: 'var(--text-muted)'
    }
  }, "\u22EF")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 0',
      display: 'flex',
      gap: 22,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: '50%',
      background: 'var(--endo-cream-300)',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/logos/endo-stacked-blue.png',
    style: {
      width: 52
    }
  })), [['128', 'publicações'], ['4.6k', 'seguidores'], ['150', 'seguindo']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px 0',
      fontSize: 12.5,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Endo Desenvolvimento Humano"), /*#__PURE__*/React.createElement("div", null, "Um espa\xE7o de reflex\xE3o, clareza e movimento."), /*#__PURE__*/React.createElement("div", null, "Para pessoas e organiza\xE7\xF5es em travessia."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-accent)'
    }
  }, "Toda transforma\xE7\xE3o come\xE7a por dentro \u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '14px 18px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen && onOpen(POSTS[0]),
    style: {
      flex: 1,
      padding: '9px 0',
      borderRadius: 10,
      border: 'none',
      background: 'var(--endo-blue-500)',
      color: 'var(--endo-cream-100)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 12.5,
      cursor: 'pointer'
    }
  }, "Seguir"), /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      padding: '9px 0',
      borderRadius: 10,
      border: '1px solid var(--border-cream)',
      background: 'transparent',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      cursor: 'pointer'
    }
  }, "Mensagem")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '16px 18px 12px',
      overflow: 'hidden'
    }
  }, HIGHLIGHTS.slice(0, 5).map(h => /*#__PURE__*/React.createElement(Highlight, {
    key: h.label,
    h: h
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--border-soft)'
    }
  }, [['grid', 'Publicações'], ['saved', 'Salvos']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      flex: 1,
      padding: '10px 0',
      background: 'transparent',
      border: 'none',
      borderBottom: '2px solid ' + (tab === k ? 'var(--endo-blue-500)' : 'transparent'),
      color: tab === k ? 'var(--text-strong)' : 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      cursor: 'pointer'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 2,
      background: 'var(--endo-white)'
    }
  }, (tab === 'grid' ? POSTS : POSTS.slice(3, 9)).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onOpen && onOpen(p),
    style: {
      position: 'relative',
      paddingTop: '100%',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PostArt, {
    post: p
  })))));
}
Object.assign(window, {
  InstagramProfile,
  PostArt,
  POSTS,
  HIGHLIGHTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/InstagramProfile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/StoryDeck.jsx
try { (() => {
const AA = '../../assets';
const STORIES = [{
  bg: 'var(--endo-navy-800)',
  art: 'logo',
  text: 'Toda transformação começa por dentro'
}, {
  bg: 'var(--endo-peach-300)',
  art: 'concept',
  label: '· Ikigai',
  text: 'A direção que devolve sentido ao movimento.'
}, {
  bg: 'var(--endo-cream-300)',
  art: 'enso',
  label: '· Jornada à Origem',
  text: 'Voltar ao centro para seguir com mais clareza.'
}, {
  bg: 'var(--endo-rose-500)',
  art: 'signature',
  text: ''
}];
function Story({
  s,
  active,
  onClick
}) {
  const dark = s.bg.includes('navy') || s.bg.includes('rose');
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      width: 148,
      height: 264,
      borderRadius: 18,
      background: s.bg,
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      boxShadow: active ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      outline: active ? '2px solid var(--endo-blue-500)' : 'none',
      outlineOffset: 3,
      transition: 'box-shadow var(--dur-base) var(--ease-calm)'
    }
  }, s.art === 'enso' && /*#__PURE__*/React.createElement("img", {
    src: AA + '/marks/enso-o-cream.png',
    style: {
      position: 'absolute',
      width: 190,
      right: -60,
      bottom: -40,
      opacity: .75
    }
  }), s.art === 'concept' && /*#__PURE__*/React.createElement("img", {
    src: AA + '/icons/concept-ikigai.png',
    style: {
      position: 'absolute',
      width: 96,
      right: -18,
      bottom: -18,
      opacity: .9
    }
  }), s.art === 'signature' && /*#__PURE__*/React.createElement("img", {
    src: AA + '/logos/signature-cream.png',
    style: {
      position: 'absolute',
      width: '78%',
      left: '11%',
      top: '32%'
    }
  }), s.art === 'logo' && /*#__PURE__*/React.createElement("img", {
    src: AA + '/logos/endo-stacked-cream.png',
    style: {
      position: 'absolute',
      width: '46%',
      left: '27%',
      top: '14%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 18
    }
  }, s.label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '.1em',
      fontWeight: 700,
      color: dark ? 'var(--endo-peach-300)' : 'var(--endo-rose-500)',
      marginBottom: 6
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.3,
      color: dark ? 'var(--endo-cream-300)' : 'var(--endo-navy-800)'
    }
  }, s.text)));
}
function StoryDeck() {
  const [i, setI] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.1em',
      fontWeight: 700,
      color: 'var(--text-accent)',
      marginBottom: 14
    }
  }, "\xB7 STORIES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, STORIES.map((s, n) => /*#__PURE__*/React.createElement(Story, {
    key: n,
    s: s,
    active: i === n,
    onClick: () => setI(n)
  }))));
}
Object.assign(window, {
  StoryDeck,
  STORIES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/StoryDeck.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CONCEPTS = __ds_scope.CONCEPTS;

__ds_ns.ConceptIcon = __ds_scope.ConceptIcon;

__ds_ns.EnsoField = __ds_scope.EnsoField;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Signature = __ds_scope.Signature;

__ds_ns.ConceptRow = __ds_scope.ConceptRow;

__ds_ns.PairList = __ds_scope.PairList;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Statement = __ds_scope.Statement;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
