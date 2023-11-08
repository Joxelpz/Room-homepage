/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { min: "320px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      md: { min: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      lg: { min: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      xl: { min: "1280px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      "2xl": { min: "1536px" },
    },
    extend: {
      colors: {
        dark: "#A1A1A1",
        black: "#000000",
        white: "#FFFFFF",
        very: "#454545",
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '6': 'repeat(6, minmax(0, 1fr))',
        '17': 'repeat(6, minmax(0, 90px))',
      },
      gridColumn: {
        'span-14': 'span 14 / span 14',
      },
      fontSize: {
        "heading-1": [
          "46px",
          {
            letterSpacing: "-1.40px",
          },
        ],
        "heading-1-sm": [
          "40px",
          {
            letterSpacing: "-1.20px",
          },
        ],
        "heading-2": [
          "16px",
          {
            letterSpacing: "6.88px",
          },
        ],
        "heading-2-sm": [
          "14px",
          {
            letterSpacing: "6.02px",
          },
        ],
        "heading-3": [
          "15px",
          {
            letterSpacing: "12.3px",
          },
        ],
        "heading-4": "16px",
        "paragraph": ["16px",
          {
            lineHeight: "22px",
          },
        ],
      },
    }
  },
  plugins: [
  ],
}

