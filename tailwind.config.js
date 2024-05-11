/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('/src/Assets/Miles .jpeg')",
          // 'footer-texture': "url('/img/footer-texture.png')",
        },
        plugins:{
          function ({addUtilities}) {
            const newUtilities = {
              ".no-scrollbar::-webkit-scrollbar": {
                display: "none",
              },
              ".no-scrollbar": {
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
              },
          }; addUtilities(newUtilities);
        },
        animation: {
          marquee: 'marquee 25s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' },
          }
        },
      }
    }
  }
}
