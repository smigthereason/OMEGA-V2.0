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

