/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      zIndex: {
        '1': '1',
      },

      screens: {
        mobileMore: '600px', // vars.$breakpoint-sm 값을 지정
        tabletMore: '1024px'
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.3rem',
      '2xl': '1.4rem',
      '3xl': '1.9rem',
      '4xl': '2.441rem',
      '5xl': '3.7rem',
      '6xl': '4rem'
    }
  },
  plugins: [],
};
