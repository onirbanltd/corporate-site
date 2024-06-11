import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    colors: {
      purple: "#160f29",
      caribbean: "#246a73",
      cyan: "#368f8b",
      champagne: "#f3dfc1",
      sand: "#ddbea8"

    },
    fontFamily: {
      oswald: ["Oswald"],
      roboto: ["Roboto"]
    },
    // fontSize: {
    //   // header: "92.4px",
    //   h1: "48px",
    //   h2: "28px",
    //   h3: "24px",
    //   h4: "16px",
    //   p: "18px"

    // },
    spacing: {
      lengthSm0: "0.15rem",
      lengthSm1: "0.25rem",
      lengthSm2: "0.375rem",
      lengthSm3: "0.5rem",
      lengthMd1: "1rem",
      lengthMd2: "1.25rem",
      lengthMd3: "1.5rem",
      lengthMd4: "2rem",
      lengthLg1: "2.25rem",
      lengthLg2: "3rem",
      lengthLg3: "4rem",
      lengthLg4: "6rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
