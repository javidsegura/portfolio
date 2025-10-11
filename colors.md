Portfolio Design System
Color Palette
Primary Palette (Professional + Modern)
Primary (Accent): #2563EB (Blue 600)
- Use for: CTAs, links, active states
- Why: Trust, professionalism, tech industry standard

Primary Dark: #1E40AF (Blue 700)
- Use for: Hover states, emphasis

Secondary: #0F172A (Slate 900)
- Use for: Headings, primary text
- Why: Strong hierarchy, readable

Tertiary: #475569 (Slate 600)
- Use for: Body text, descriptions

Background: #FFFFFF (White)
Surface: #F8FAFC (Slate 50)
- Use for: Card backgrounds, sections
Accent Colors (Minimal Use)
Success/Impact: #10B981 (Emerald 500)
- Use for: Metrics, positive indicators

Warning/Highlight: #F59E0B (Amber 500)
- Use for: "In Progress" tags

Subtle: #E2E8F0 (Slate 200)
- Use for: Borders, dividers
Why This Palette?

Conservative yet modern: Appeals to finance/law (professional) and tech (contemporary)
High contrast: Ensures readability and accessibility
Industry-neutral: Works across all target sectors
Blue is universally trusted in business contexts


Typography
Font Pairing
Headings: Inter (Sans-serif)
cssfont-family: 'Inter', sans-serif;
font-weight: 600-700

Clean, geometric, modern
Excellent for headings and UI elements

Body Text: Inter (Same family, lighter weights)
cssfont-family: 'Inter', sans-serif;
font-weight: 400-500

Maintains consistency
Highly readable at small sizes

Code/Technical: JetBrains Mono or Fira Code
cssfont-family: 'JetBrains Mono', monospace;

Use sparingly for tech tags, code snippets

Type Scale
H1 (Hero): 48px (3rem) - font-weight: 700
H2 (Section): 36px (2.25rem) - font-weight: 600
H3 (Subsection): 24px (1.5rem) - font-weight: 600
H4 (Card titles): 20px (1.25rem) - font-weight: 600
Body Large: 18px (1.125rem) - font-weight: 400
Body: 16px (1rem) - font-weight: 400
Small: 14px (0.875rem) - font-weight: 400
Tiny: 12px (0.75rem) - font-weight: 500 (tags, labels)
Line Height:

Headings: 1.2
Body: 1.6-1.7
Small text: 1.5


Spacing System
Use consistent 8px grid:
xs: 4px (0.25rem)
sm: 8px (0.5rem)
md: 16px (1rem)
lg: 24px (1.5rem)
xl: 32px (2rem)
2xl: 48px (3rem)
3xl: 64px (4rem)
4xl: 96px (6rem)
Section Spacing:

Between major sections: 96px (4xl)
Between subsections: 48px (2xl)
Card padding: 24px (lg) or 32px (xl)


Component Styles
Buttons
Primary CTA:
Background: #2563EB
Text: White (#FFFFFF)
Padding: 12px 24px
Border-radius: 8px
Font-weight: 500
Hover: #1E40AF (darker + subtle lift)
Transition: all 150ms ease
Secondary Button:
Background: Transparent
Border: 2px solid #E2E8F0
Text: #0F172A
Hover: Border #2563EB, Text #2563EB
Cards (Project Cards)
Background: White (#FFFFFF)
Border: 1px solid #E2E8F0
Border-radius: 12px
Padding: 32px
Shadow: 0 1px 3px rgba(0,0,0,0.08)
Hover: 
  - Shadow: 0 8px 24px rgba(0,0,0,0.12)
  - Transform: translateY(-2px)
  - Border: 1px solid #CBD5E1
Transition: all 250ms ease
Tags (Tech Stack)
Background: #F1F5F9 (Slate 100)
Text: #475569 (Slate 600)
Padding: 6px 12px
Border-radius: 6px
Font-size: 12px
Font-weight: 500
Hover: Background #E2E8F0
Links
Text: #2563EB
Underline: Only on hover
Hover: #1E40AF + underline
Transition: color 150ms ease

Layout & Grid
Container Widths
Max-width: 1200px (centered)
Padding (mobile): 24px
Padding (desktop): 48px
Grid System
Desktop: 12-column grid, gap 24px
Tablet: 8-column grid, gap 20px
Mobile: 4-column grid, gap 16px
Breakpoints
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
Wide: > 1440px

Visual Elements
Icons
Library: Lucide React (clean, consistent, professional)
Size: 20-24px (standard)
Color: Inherit from text or #64748B (Slate 500)
Stroke-width: 2
Shadows
Subtle: 0 1px 3px rgba(0,0,0,0.08)
Medium: 0 4px 12px rgba(0,0,0,0.1)
Strong: 0 8px 24px rgba(0,0,0,0.12)
Border Radius
Small (tags): 6px
Medium (cards): 12px
Large (sections): 16px
Full (avatars): 9999px
Animations/Transitions
Subtle, professional animations only:
css/* Hover lift */
transition: transform 250ms ease, box-shadow 250ms ease;
transform: translateY(-2px);

/* Fade in on scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Timing */
Fast: 150ms
Standard: 250ms
Slow: 350ms
What to animate:

Card hovers (lift + shadow)
Button hovers (color)
Sections fading in on scroll
Link underlines

What NOT to animate:

Text (looks unprofessional)
Background colors (jarring)
Anything continuous/looping


Accessibility
Minimum contrast ratio: 4.5:1 (WCAG AA)
Focus states: 2px solid #2563EB with 2px offset
All interactive elements: min 44x44px touch target
Alt text: All images
Semantic HTML: Proper heading hierarchy

Reference Inspiration
Your portfolio should feel like:

Stripe's documentation (clean, spacious, professional)
Linear's landing page (minimal, purposeful animation)
GitHub's profile pages (information-dense but organized)

NOT like:

Awwwards winners (too flashy)
Agency portfolios (too creative)
Personal blogs (too casual)


Quick Implementation
If using Tailwind + shadcn/ui, you can configure most of this in tailwind.config.js:
jstheme: {
  extend: {
    colors: {
      primary: '#2563EB',
      secondary: '#0F172A',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
  },
}
Would you like me to create a style guide artifact with visual examples of these components, or jump straight into building the actual portfolio with this design system