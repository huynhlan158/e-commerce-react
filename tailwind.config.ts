import type { Config } from 'tailwindcss';
import {
  commonTheme,
  fontSize,
  spacing,
  borderWidth,
} from './src/config/customTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...commonTheme,
      fontSize,
      spacing,
      borderWidth,
      screens: {
        tablet: '640px',
        laptop: '1024px',
      },
    },
  },
  plugins: [],
} satisfies Config;
