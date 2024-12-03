import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#1a202c',
          primary: '#4a90e2',
          secondary: '#a0aec0',
        },
        dark: {
          background: '#1a202c',
          text: '#ffffff',
          primary: '#4a90e2',
          secondary: '#718096',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
