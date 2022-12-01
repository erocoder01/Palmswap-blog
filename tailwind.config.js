module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // prettier-ignore
      colors: {
        "background": "#0F1014",
        "box": "#23252B",
        "graytext": '#6C7284',
        "active-bg": '#FFFFFF',
        "active-text": '#000000',
        "border": " #23252b"
      },
    },
    // prettier-ignore
    screens: {
       "sm": "320px",
       'md': '1024px',
   },
  },
  plugins: [],
};
