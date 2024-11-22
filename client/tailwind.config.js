/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '1rem', // 16 px
      base: '1.25rem', // 18 px
      xl: '1.25rem', // 20 px
      '2xl': '1.5rem', // 24 px
      '3xl': '2rem', // 32 px
      '4xl': '2.5rem', // 40 px
      '5xl': '3.5rem', // 56 px
    },
    borderRadius: {
      DEFAULT: '5px',
    },
    extend: {
      colors: {
        background: "#F5F5F5",
        text:"#212529",
      },
    },
  },
  plugins: [],
};
