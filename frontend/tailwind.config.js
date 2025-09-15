// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html","./src/**/*..{js,ts,jsx,tsx}"],
//   // content: [
//   //   './pages/**/*.{html,js}',
//   //   './components/**/*.{html,js}',
//   // ],
//   // content: [
//   //   './pages/* / *.jsx',
//   //   './components/*/.jsx',
//   // ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// export default {
//   content: ["./index.html","./src/**/*..{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        md: "10rem",
      },
    },
  },
  plugins: [],
};

