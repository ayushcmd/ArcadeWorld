/** @type {import('tailwindcss').Config} */
// Tailwind v3 with JIT — scans the njk templates and emits only the utilities
// actually used.
//
// ArcadeWorld three-color brand system:
//   - Color 1: Lime Green (#B7F34A) — Primary accent, active states, CTAs
//   - Color 2: Light Red (#FF6B6B) — Secondary accent, highlights, badges
//   - Color 3: Charcoal Black / Grey (#17191C) — Base atmosphere, surfaces, cards
module.exports = {
    content: ['./src/**/*.njk', './src/**/*.js'],
    theme: {
        extend: {
            colors: {
                brand: {
                    lime: '#B7F34A',
                    red: '#FF6B6B',
                    charcoal: '#17191C',
                },
                ink: {
                    DEFAULT: '#17191C',
                    2: '#1D2024',
                    3: '#252930',
                    4: '#303640',
                },
                paper: {
                    DEFAULT: '#F4F5F7',
                    70: 'rgba(244, 245, 247, 0.72)',
                    60: 'rgba(244, 245, 247, 0.60)',
                    45: 'rgba(244, 245, 247, 0.45)',
                },
                bloom: {
                    DEFAULT: '#B7F34A',
                    2: '#FF6B6B',
                },
            },
            fontFamily: {
                display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
                body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
        },
    },
    plugins: [],
};
