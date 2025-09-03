export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",  
      sm: "640px",    
      md: "768px", 
      lg: "1024px",  
      xl: "1280px",
      "2xl":"1536px",   
      "3xl":"1700px"
    },
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "75%": { transform: "rotate(-15deg)" },
        },
      },
      animation: {
        shake: "shake 0.3s ease-in-out 2",
      },
    },
  },
  plugins: [],
};
