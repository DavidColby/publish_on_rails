const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
      content: [
      "./app/**/*.html.erb",
      "./app/helpers/**/*.rb",
      "./app/javascript/**/*.js",
      "./app/javascript/**/*.scss",
    ],
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "hsl(341, 100%, 95%)",
          200: "hsl(338, 100%, 86%)",
          300: "hsl(336, 100%, 77%)",
          400: "hsl(334, 86%, 67%)",
          500: "hsl(330, 79%, 56%)",
          600: "hsl(328, 85%, 46%)",
          700: "hsl(326, 90%, 39%)",
          800: "hsl(324, 93%, 33%)",
          900: "hsl(322, 93%, 27%)",
          1000: "hsl(320, 100%, 19%)"
        },
        purple: {
          100: "hsl(262, 90%, 96%)",
          200: "hsl(262, 100%, 88%)",
          300: "hsl(262, 100%, 78%)",
          400: "hsl(264, 96%, 70%)",
          500: "hsl(251, 58%, 33%)",
          600: "hsl(273, 80%, 49%)",
          700: "hsl(274, 87%, 43%)",
          800: "hsl(274, 87%, 37%)",
          900: "hsl(274, 87%, 31%)",
          1000: "hsl(276, 91%, 23%)"
        },
        gray: {
          100: "hsl(216, 33%, 97%)",
          200: "hsl(214, 15%, 91%)",
          300: "hsl(210, 16%, 82%)",
          400: "hsl(211, 13%, 65%)",
          500: "hsl(211, 10%, 53%)",
          600: "hsl(211, 12%, 43%)",
          700: "hsl(209, 14%, 37%)",
          800: "hsl(209, 18%, 30%)",
          900: "hsl(209, 20%, 25%)",
          1000: "hsl(210, 24%, 16%)",
          1050: "hsl(210, 22%, 8%)"
        },
        cyan: {
          100: "hsl(171, 82%, 94%)",
          200: "hsl(172, 97%, 88%)",
          300: "hsl(174, 96%, 78%)",
          400: "hsl(176, 87%, 67%)",
          500: "hsl(178, 78%, 57%)",
          600: "hsl(180, 77%, 47%)",
          700: "hsl(182, 85%, 39%)",
          800: "hsl(184, 90%, 34%)",
          900: "hsl(186, 91%, 29%)",
          1000: "hsl(188, 91%, 23%)"
        },
        red: {
          100: "hsl(360, 100%, 95%)",
          200: "hsl(360, 100%, 87%)",
          300: "hsl(360, 100%, 80%)",
          400: "hsl(360, 91%, 69%)",
          500: "hsl(360, 83%, 62%)",
          600: "hsl(356, 75%, 53%)",
          700: "hsl(354, 85%, 44%)",
          800: "hsl(352, 90%, 35%)",
          900: "hsl(350, 94%, 28%)",
          1000: "hsl(348, 94%, 20%)"
        },
        yellow: {
          100: "hsl(49, 100%, 96%)",
          200: "hsl(48, 100%, 88%)",
          300: "hsl(48, 95%, 76%)",
          400: "hsl(48, 94%, 68%)",
          500: "hsl(44, 92%, 63%)",
          600: "hsl(42, 87%, 55%)",
          700: "hsl(36, 77%, 49%)",
          800: "hsl(29, 80%, 44%)",
          900: "hsl(22, 82%, 39%)",
          1000: "hsl(15, 86%, 30%)"
        },
        green: {
          100: "hsl(125, 65%, 93%)",
          200: "hsl(126, 49%, 84%)",
          300: "hsl(122, 42%, 75%)",
          400: "hsl(123, 38%, 63%)",
          500: "hsl(123, 35%, 51%)",
          600: "hsl(122, 39%, 41%)",
          700: "hsl(122, 47%, 35%)",
          800: "hsl(125, 56%, 29%)",
          900: "hsl(125, 73%, 20%)",
          1000: "hsl(125, 86%, 14%)"
        }
      },
      fontFamily: {
        heading: ['PT Sans', 'sans-serif', "-apple-system", "BlinkMacSystemFont", "Roboto", "Arial", "sans-serif", "Apple Color Emjoi", "Segoe UI Emjoi", "Segoe UI Symbol"],
        reading: ['PT Serif', 'serif', "-apple-system", "BlinkMacSystemFont", "Roboto", "Arial", "sans-serif", "Apple Color Emjoi", "Segoe UI Emjoi", "Segoe UI Symbol"],
      },
      fontSize: {
        "2xs": ["12px", "1.75em"],
        "xs": ["14px", "1.75em"],
        "sm": ["16px", "1.5em"],
        "base": ["18px", "1.5em"],
        "lg": ["20px", "1.25em"],
        "xl": ["24px", "1.25em"],
        "2xl": ["30px", "1em"],
        "3xl": ["36px", "1em"],
        "4xl": ["48px", "1em"],
        "5xl": ["60px", "1em"],
        "6xl": ["72px", "1em"],
      },
    },
  }
}
